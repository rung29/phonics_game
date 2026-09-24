# Supabase 設定

## 1. 建立資料庫

在 Supabase 建立專案後，到 SQL Editor 執行 `supabase/setup.sql`。

這是已經合併好的單一檔案，會一次建立資料表、資料驗證、RLS，並匯入目前的 6 個關卡及 36 道題目。請完整貼上檔案內容，再按一次 Run。

如果你想分開執行，也可以先執行 `supabase/migrations/202609240001_word_catalog.sql`，再執行 `supabase/seed.sql`。

## 2. 建立管理者

到 Supabase Dashboard 的 Authentication → Users 建立管理者帳號，再於 SQL Editor 執行：

```sql
update auth.users
set raw_app_meta_data =
  coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
where email = '你的管理者 Email';
```

如果該帳號已登入，設定角色後需登出再登入，讓新的 JWT 權限生效。

正式環境建議關閉公開註冊；這個專案只使用管理者登入，不提供註冊畫面。

## 3. 設定前端

在 Supabase Dashboard 的 Project Settings → API 取得：

- Project URL
- Publishable key（舊專案可能顯示 anon key）

填入 `supabase-config.js`：

```js
window.PHONICS_SUPABASE_CONFIG = {
    url: 'https://你的專案.supabase.co',
    publishableKey: 'sb_publishable_...'
};
```

Publishable key 可以放在瀏覽器端，權限由 RLS 保護。請勿放入 secret key 或 service_role key。

## 4. 本機啟動

瀏覽器的 `file://` 模式容易受到模組、網路與安全限制，請用本機 HTTP server。例如：

```powershell
python -m http.server 8000
```

然後開啟 `http://localhost:8000`。

## 5. 管理題目

開啟網站右上角的「字庫管理」並登入。管理者可以：

- 新增題目到既有關卡
- 修改題目、提示、選項與顯示順序
- 停用或重新發布題目
- 指定唯一的正確答案

停用不會刪除資料，玩家只會讀到已發布的關卡與題目。
