create extension if not exists pgcrypto;

create or replace function public.has_catalog_admin_role()
returns boolean
language sql
stable
set search_path = ''
as $$
  select coalesce(
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin',
    false
  );
$$;

create or replace function public.valid_question_options(options jsonb)
returns boolean
language sql
immutable
set search_path = ''
as $$
  select case
    when options is null or jsonb_typeof(options) <> 'array' then false
    else
      jsonb_array_length(options) >= 2
      and not exists (
        select 1
        from jsonb_array_elements(options) as option
        where
          jsonb_typeof(option) <> 'object'
          or coalesce(btrim(option ->> 'text'), '') = ''
          or jsonb_typeof(option -> 'correct') is distinct from 'boolean'
      )
      and (
        select count(*)
        from jsonb_array_elements(options) as option
        where (option ->> 'correct')::boolean
      ) = 1
  end;
$$;

create table if not exists public.levels (
  id text primary key,
  title text not null check (btrim(title) <> ''),
  icon text not null default '📚',
  description text not null default '',
  rule_tag text not null default '',
  theme_key text not null default 'emerald'
    check (theme_key in ('emerald', 'purple', 'blue', 'slate', 'pink', 'orange')),
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  level_id text not null references public.levels(id) on update cascade on delete restrict,
  prompt text not null check (btrim(prompt) <> ''),
  target text not null check (btrim(target) <> ''),
  hint text not null default '',
  options jsonb not null check (public.valid_question_options(options)),
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_by uuid references auth.users(id) on delete set null default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists questions_level_sort_idx
  on public.questions(level_id, sort_order, created_at);

create index if not exists questions_published_idx
  on public.questions(is_published)
  where is_published;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists levels_set_updated_at on public.levels;
create trigger levels_set_updated_at
before update on public.levels
for each row execute function public.set_updated_at();

drop trigger if exists questions_set_updated_at on public.questions;
create trigger questions_set_updated_at
before update on public.questions
for each row execute function public.set_updated_at();

alter table public.levels enable row level security;
alter table public.questions enable row level security;

revoke all on table public.levels from anon, authenticated;
revoke all on table public.questions from anon, authenticated;
grant select on table public.levels to anon, authenticated;
grant select on table public.questions to anon, authenticated;
grant insert, update on table public.questions to authenticated;

drop policy if exists "Published levels are public" on public.levels;
create policy "Published levels are public"
on public.levels for select
to anon, authenticated
using (is_published);

drop policy if exists "Admins can read all levels" on public.levels;
create policy "Admins can read all levels"
on public.levels for select
to authenticated
using (public.has_catalog_admin_role());

drop policy if exists "Published questions are public" on public.questions;
create policy "Published questions are public"
on public.questions for select
to anon, authenticated
using (
  is_published
  and exists (
    select 1
    from public.levels
    where levels.id = questions.level_id
      and levels.is_published
  )
);

drop policy if exists "Admins can read all questions" on public.questions;
create policy "Admins can read all questions"
on public.questions for select
to authenticated
using (public.has_catalog_admin_role());

drop policy if exists "Admins can insert questions" on public.questions;
create policy "Admins can insert questions"
on public.questions for insert
to authenticated
with check (
  public.has_catalog_admin_role()
  and created_by = auth.uid()
);

drop policy if exists "Admins can update questions" on public.questions;
create policy "Admins can update questions"
on public.questions for update
to authenticated
using (public.has_catalog_admin_role())
with check (public.has_catalog_admin_role());

revoke all on function public.has_catalog_admin_role() from public;
grant execute on function public.has_catalog_admin_role() to anon, authenticated;

revoke all on function public.valid_question_options(jsonb) from public;
grant execute on function public.valid_question_options(jsonb) to anon, authenticated;
