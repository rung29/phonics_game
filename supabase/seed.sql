with catalog as (
  select value as level
  from jsonb_array_elements($phonics_seed$
[
  {
    "id": "short-vowel",
    "title": "1. 短母音小鎮 (CVC)",
    "icon": "🐣",
    "description": "母音被關起來了，試著找出發短音的單字！",
    "rule_tag": "Short Vowels (CVC)",
    "theme_key": "emerald",
    "sort_order": 1,
    "words": [
      {
        "prompt": "哪一個是短母音 /æ/ 的「貓咪」？",
        "target": "cat",
        "hint": "CVC 閉音節，a 發短音 /æ/",
        "options": [
          {
            "text": "cat",
            "type": "short",
            "vowelType": "短母音 Short A",
            "correct": true
          },
          {
            "text": "cape",
            "type": "long",
            "vowelType": "長母音 Long A",
            "correct": false
          }
        ],
        "sort_order": 1
      },
      {
        "prompt": "聽到發音，選出短母音 /ɪ/ 的「大頭針」：",
        "target": "pin",
        "hint": "i 被閉合在中間，發短音 /ɪ/",
        "options": [
          {
            "text": "pine",
            "type": "long",
            "vowelType": "長母音 Long I",
            "correct": false
          },
          {
            "text": "pin",
            "type": "short",
            "vowelType": "短母音 Short I",
            "correct": true
          }
        ],
        "sort_order": 2
      },
      {
        "prompt": "選出發短母音 /ɑ/ 的「狗」：",
        "target": "dog",
        "hint": "o 發短音 /ɑ/",
        "options": [
          {
            "text": "dog",
            "type": "short",
            "vowelType": "短母音 Short O",
            "correct": true
          },
          {
            "text": "boat",
            "type": "long",
            "vowelType": "長母音 Long O",
            "correct": false
          }
        ],
        "sort_order": 3
      },
      {
        "prompt": "選出短母音 /ɛ/ 的「床」：",
        "target": "bed",
        "hint": "e 發短音 /ɛ/",
        "options": [
          {
            "text": "bead",
            "type": "long",
            "vowelType": "長母音 Long E",
            "correct": false
          },
          {
            "text": "bed",
            "type": "short",
            "vowelType": "短母音 Short E",
            "correct": true
          }
        ],
        "sort_order": 4
      },
      {
        "prompt": "選出短母音 /ʌ/ 的「杯子」：",
        "target": "cup",
        "hint": "u 發短音 /ʌ/",
        "options": [
          {
            "text": "cup",
            "type": "short",
            "vowelType": "短母音 Short U",
            "correct": true
          },
          {
            "text": "cube",
            "type": "long",
            "vowelType": "長母音 Long U",
            "correct": false
          }
        ],
        "sort_order": 5
      },
      {
        "prompt": "選出短母音 /ɪ/ 的「豬」：",
        "target": "pig",
        "hint": "i 發短音 /ɪ/",
        "options": [
          {
            "text": "pig",
            "type": "short",
            "vowelType": "短母音 Short I",
            "correct": true
          },
          {
            "text": "page",
            "type": "long",
            "vowelType": "長母音 Long A",
            "correct": false
          }
        ],
        "sort_order": 6
      },
      {
        "prompt": "選出短母音 /æ/ 的「地圖」：",
        "target": "map",
        "hint": "a 發短音 /æ/",
        "options": [
          {
            "text": "map",
            "type": "short",
            "vowelType": "短母音 Short A",
            "correct": true
          },
          {
            "text": "make",
            "type": "long",
            "vowelType": "長母音 Long A",
            "correct": false
          }
        ],
        "sort_order": 7
      },
      {
        "prompt": "選出短母音 /æ/ 的「帽子」：",
        "target": "hat",
        "hint": "a 發短音 /æ/",
        "options": [
          {
            "text": "hat",
            "type": "short",
            "vowelType": "短母音 Short A",
            "correct": true
          },
          {
            "text": "hate",
            "type": "long",
            "vowelType": "長母音 Long A",
            "correct": false
          }
        ],
        "sort_order": 8
      },
      {
        "prompt": "選出短母音 /ɪ/ 的「坐」：",
        "target": "sit",
        "hint": "i 發短音 /ɪ/",
        "options": [
          {
            "text": "sit",
            "type": "short",
            "vowelType": "短母音 Short I",
            "correct": true
          },
          {
            "text": "site",
            "type": "long",
            "vowelType": "長母音 Long I",
            "correct": false
          }
        ],
        "sort_order": 9
      }
    ]
  },
  {
    "id": "magic-e",
    "title": "2. Magic E 魔法森林",
    "icon": "🧙‍♂️",
    "description": "字尾加上 Magic E，短母音會變身成字母本尊長音！",
    "rule_tag": "Short -> Long Vowel (CVCe)",
    "theme_key": "purple",
    "sort_order": 2,
    "words": [
      {
        "prompt": "加上 Magic E 後，從 tap (短音) 變成了？",
        "target": "tape",
        "hint": "Magic E 將力量傳給前面的 a，發長音 /eɪ/",
        "options": [
          {
            "text": "tap",
            "type": "short",
            "vowelType": "短母音 Short A",
            "correct": false
          },
          {
            "text": "tape",
            "type": "long",
            "vowelType": "長母音 Long A",
            "correct": true
          }
        ],
        "sort_order": 1
      },
      {
        "prompt": "哪一個字有魔法 E，讓母音發長音 /oʊ/？",
        "target": "hope",
        "hint": "Silent E 不發音，前面 o 發字母本尊音",
        "options": [
          {
            "text": "hope",
            "type": "long",
            "vowelType": "長母音 Long O",
            "correct": true
          },
          {
            "text": "hop",
            "type": "short",
            "vowelType": "短母音 Short O",
            "correct": false
          }
        ],
        "sort_order": 2
      },
      {
        "prompt": "哪一個是發長音 /juː/ 的「方塊」？",
        "target": "cube",
        "hint": "Magic E 讓 u 發長音 /juː/",
        "options": [
          {
            "text": "cub",
            "type": "short",
            "vowelType": "短母音 Short U",
            "correct": false
          },
          {
            "text": "cube",
            "type": "long",
            "vowelType": "長母音 Long U",
            "correct": true
          }
        ],
        "sort_order": 3
      },
      {
        "prompt": "找出有 Magic E 發長音 /aɪ/ 的「躲藏」：",
        "target": "hide",
        "hint": "Magic E 讓 i 發長音 /aɪ/",
        "options": [
          {
            "text": "hide",
            "type": "long",
            "vowelType": "長母音 Long I",
            "correct": true
          },
          {
            "text": "hid",
            "type": "short",
            "vowelType": "短母音 Short I",
            "correct": false
          }
        ],
        "sort_order": 4
      },
      {
        "prompt": "哪個是發長音 /oʊ/ 的「筆記」？",
        "target": "note",
        "hint": "Magic E 讓 o 發長音 /oʊ/",
        "options": [
          {
            "text": "not",
            "type": "short",
            "vowelType": "短母音 Short O",
            "correct": false
          },
          {
            "text": "note",
            "type": "long",
            "vowelType": "長母音 Long O",
            "correct": true
          }
        ],
        "sort_order": 5
      },
      {
        "prompt": "哪個是發長音 /eɪ/ 的「相同」？",
        "target": "same",
        "hint": "Magic E 讓 a 發長音 /eɪ/",
        "options": [
          {
            "text": "same",
            "type": "long",
            "vowelType": "長母音 Long A",
            "correct": true
          },
          {
            "text": "Sam",
            "type": "short",
            "vowelType": "短母音 Short A",
            "correct": false
          }
        ],
        "sort_order": 6
      },
      {
        "prompt": "哪個是發長音 /aɪ/ 的「風箏」？",
        "target": "kite",
        "hint": "Magic E 讓 i 發長音 /aɪ/",
        "options": [
          {
            "text": "kit",
            "type": "short",
            "vowelType": "短母音 Short I",
            "correct": false
          },
          {
            "text": "kite",
            "type": "long",
            "vowelType": "長母音 Long I",
            "correct": true
          }
        ],
        "sort_order": 7
      },
      {
        "prompt": "加上 Magic E 後，從 bit (短音) 變成了？",
        "target": "bite",
        "hint": "Magic E 讓 i 發長音 /aɪ/",
        "options": [
          {
            "text": "bit",
            "type": "short",
            "vowelType": "短母音 Short I",
            "correct": false
          },
          {
            "text": "bite",
            "type": "long",
            "vowelType": "長母音 Long I",
            "correct": true
          }
        ],
        "sort_order": 8
      }
    ]
  },
  {
    "id": "vowel-teams",
    "title": "3. 雙母音長音隊 (Vowel Teams)",
    "icon": "⛵",
    "description": "兩個母音走在一起，第一個發本尊長音！",
    "rule_tag": "Long Vowels (ai, oa, ee)",
    "theme_key": "blue",
    "sort_order": 3,
    "words": [
      {
        "prompt": "選出包含雙母音長音 /oʊ/ 的「小船」：",
        "target": "boat",
        "hint": "oa 組合：第一個字母 o 發長音，a 不發音",
        "options": [
          {
            "text": "boat",
            "type": "long",
            "vowelType": "長母音 Long O (oa)",
            "correct": true
          },
          {
            "text": "bat",
            "type": "short",
            "vowelType": "短母音 Short A",
            "correct": false
          }
        ],
        "sort_order": 1
      },
      {
        "prompt": "選出雙母音 ai 發長音 /eɪ/ 的「下雨」：",
        "target": "rain",
        "hint": "ai 組合：a 發長音，i 不發音",
        "options": [
          {
            "text": "ran",
            "type": "short",
            "vowelType": "短母音 Short A",
            "correct": false
          },
          {
            "text": "rain",
            "type": "long",
            "vowelType": "長母音 Long A (ai)",
            "correct": true
          }
        ],
        "sort_order": 2
      },
      {
        "prompt": "選出雙母音 ee 發長音 /iː/ 的「樹」：",
        "target": "tree",
        "hint": "ee 組合：e 發長音",
        "options": [
          {
            "text": "tree",
            "type": "long",
            "vowelType": "長母音 Long E (ee)",
            "correct": true
          },
          {
            "text": "try",
            "type": "long",
            "vowelType": "長母音 Long I",
            "correct": false
          }
        ],
        "sort_order": 3
      },
      {
        "prompt": "選出 ow 發長音 /oʊ/ 的「雪」：",
        "target": "snow",
        "hint": "ow 在字尾常發長音 /oʊ/",
        "options": [
          {
            "text": "snob",
            "type": "short",
            "vowelType": "短母音 Short O",
            "correct": false
          },
          {
            "text": "snow",
            "type": "long",
            "vowelType": "長母音 Long O (ow)",
            "correct": true
          }
        ],
        "sort_order": 4
      },
      {
        "prompt": "選出 ie 發長音 /aɪ/ 的「派」：",
        "target": "pie",
        "hint": "ie 組合：i 發長音，e 不發音",
        "options": [
          {
            "text": "pie",
            "type": "long",
            "vowelType": "長母音 Long I (ie)",
            "correct": true
          },
          {
            "text": "pin",
            "type": "short",
            "vowelType": "短母音 Short I",
            "correct": false
          }
        ],
        "sort_order": 5
      },
      {
        "prompt": "選出 ea 發長音 /iː/ 的「座位」：",
        "target": "seat",
        "hint": "ea 組合：e 發長音，a 不發音",
        "options": [
          {
            "text": "sat",
            "type": "short",
            "vowelType": "短母音 Short A",
            "correct": false
          },
          {
            "text": "seat",
            "type": "long",
            "vowelType": "長母音 Long E (ea)",
            "correct": true
          }
        ],
        "sort_order": 6
      }
    ]
  },
  {
    "id": "world-3-silent-th",
    "title": "4. 特務子音洞窟 (Silent/Th)",
    "icon": "🕵️",
    "description": "找出睡著不發音的特務字母，並分辨 Th 是有聲還無聲！",
    "rule_tag": "Silent Letters & Th",
    "theme_key": "slate",
    "sort_order": 4,
    "words": [
      {
        "prompt": "找出單字「knee」中睡著不發音的字母：",
        "target": "knee",
        "hint": "kn 開頭時，k 通常不發音",
        "options": [
          {
            "text": "k",
            "type": "silent",
            "vowelType": "不發音",
            "correct": true
          },
          {
            "text": "n",
            "type": "silent",
            "vowelType": "發音字母",
            "correct": false
          },
          {
            "text": "e",
            "type": "silent",
            "vowelType": "發音字母",
            "correct": false
          }
        ],
        "sort_order": 1
      },
      {
        "prompt": "找出單字「knife」中睡著不發音的字母：",
        "target": "knife",
        "hint": "kn 開頭，k 不發音",
        "options": [
          {
            "text": "k",
            "type": "silent",
            "vowelType": "不發音",
            "correct": true
          },
          {
            "text": "n",
            "type": "silent",
            "vowelType": "發音字母",
            "correct": false
          },
          {
            "text": "f",
            "type": "silent",
            "vowelType": "發音字母",
            "correct": false
          }
        ],
        "sort_order": 2
      },
      {
        "prompt": "找出單字「write」中睡著不發音的字母：",
        "target": "write",
        "hint": "wr 開頭，w 不發音",
        "options": [
          {
            "text": "w",
            "type": "silent",
            "vowelType": "不發音",
            "correct": true
          },
          {
            "text": "r",
            "type": "silent",
            "vowelType": "發音字母",
            "correct": false
          },
          {
            "text": "t",
            "type": "silent",
            "vowelType": "發音字母",
            "correct": false
          }
        ],
        "sort_order": 3
      },
      {
        "prompt": "找出單字「climb」中睡著不發音的字母：",
        "target": "climb",
        "hint": "mb 結尾時，b 通常不發音",
        "options": [
          {
            "text": "m",
            "type": "silent",
            "vowelType": "發音字母",
            "correct": false
          },
          {
            "text": "b",
            "type": "silent",
            "vowelType": "不發音",
            "correct": true
          }
        ],
        "sort_order": 4
      },
      {
        "prompt": "聽音辨別，單字「think」的 th 是：",
        "target": "think",
        "hint": "think 只有純噴氣，喉嚨不震動喔",
        "options": [
          {
            "text": "純噴氣 (Unvoiced)",
            "type": "th",
            "vowelType": "無聲子音",
            "correct": true
          },
          {
            "text": "喉嚨震動 (Voiced)",
            "type": "th",
            "vowelType": "有聲子音",
            "correct": false
          }
        ],
        "sort_order": 5
      },
      {
        "prompt": "聽音辨別，單字「this」的 th 是：",
        "target": "this",
        "hint": "this 會震動喉嚨喔",
        "options": [
          {
            "text": "純噴氣 (Unvoiced)",
            "type": "th",
            "vowelType": "無聲子音",
            "correct": false
          },
          {
            "text": "喉嚨震動 (Voiced)",
            "type": "th",
            "vowelType": "有聲子音",
            "correct": true
          }
        ],
        "sort_order": 6
      }
    ]
  },
  {
    "id": "world-4-syllables",
    "title": "5. 音節解構城堡",
    "icon": "🏰",
    "description": "利用手術刀將單字切開，並算出單字的音節數！",
    "rule_tag": "Syllables Cutting & Counting",
    "theme_key": "pink",
    "sort_order": 5,
    "words": [
      {
        "prompt": "「cape」有幾個母音發音 (音節)？",
        "target": "cape",
        "hint": "Magic E 的 e 不發音，只有 a 發長音",
        "options": [
          {
            "text": "1 音節",
            "type": "syllable",
            "vowelType": "單音節",
            "correct": true
          },
          {
            "text": "2 音節",
            "type": "syllable",
            "vowelType": "雙音節",
            "correct": false
          }
        ],
        "sort_order": 1
      },
      {
        "prompt": "「tiger」有幾個母音發音 (音節)？",
        "target": "tiger",
        "hint": "i 跟 er 都有發出母音的聲音",
        "options": [
          {
            "text": "1 音節",
            "type": "syllable",
            "vowelType": "單音節",
            "correct": false
          },
          {
            "text": "2 音節",
            "type": "syllable",
            "vowelType": "雙音節",
            "correct": true
          }
        ],
        "sort_order": 2
      },
      {
        "prompt": "「kitten」有幾個母音發音 (音節)？",
        "target": "kitten",
        "hint": "i 跟 e 都有發出母音的聲音",
        "options": [
          {
            "text": "1 音節",
            "type": "syllable",
            "vowelType": "單音節",
            "correct": false
          },
          {
            "text": "2 音節",
            "type": "syllable",
            "vowelType": "雙音節",
            "correct": true
          }
        ],
        "sort_order": 3
      },
      {
        "prompt": "選出正確的手術刀切法 (tiger)：",
        "target": "tiger",
        "hint": "tiger 的 i 發長音 (開音節)，所以切在母音 i 後面",
        "options": [
          {
            "text": "ti - ger",
            "type": "syllable",
            "vowelType": "開音節 + 音節",
            "correct": true
          },
          {
            "text": "tig - er",
            "type": "syllable",
            "vowelType": "閉音節 + 音節",
            "correct": false
          }
        ],
        "sort_order": 4
      },
      {
        "prompt": "選出正確的手術刀切法 (kitten)：",
        "target": "kitten",
        "hint": "kitten 的 i 發短音 (閉音節)，所以切在子音 t 後面",
        "options": [
          {
            "text": "ki - tten",
            "type": "syllable",
            "vowelType": "開音節 + 音節",
            "correct": false
          },
          {
            "text": "kit - ten",
            "type": "syllable",
            "vowelType": "閉音節 + 音節",
            "correct": true
          }
        ],
        "sort_order": 5
      }
    ]
  },
  {
    "id": "my-custom-level",
    "title": "6. 我的自訂關卡",
    "icon": "🌈",
    "description": "家長自訂的額外練習關卡！",
    "rule_tag": "Custom Words",
    "theme_key": "orange",
    "sort_order": 6,
    "words": [
      {
        "prompt": "選出短母音 /æ/ 的「跑」：",
        "target": "ran",
        "hint": "a 發短音 /æ/",
        "options": [
          {
            "text": "ran",
            "type": "short",
            "vowelType": "短母音 Short A",
            "correct": true
          },
          {
            "text": "rain",
            "type": "long",
            "vowelType": "長母音 Long A (ai)",
            "correct": false
          }
        ],
        "sort_order": 1
      },
      {
        "prompt": "選出長母音 /iː/ 的「腳」：",
        "target": "feet",
        "hint": "ee 組合：e 發長音",
        "options": [
          {
            "text": "fat",
            "type": "short",
            "vowelType": "短母音 Short A",
            "correct": false
          },
          {
            "text": "feet",
            "type": "long",
            "vowelType": "長母音 Long E (ee)",
            "correct": true
          }
        ],
        "sort_order": 2
      }
    ]
  }
]
$phonics_seed$::jsonb)
),
upsert_levels as (
  insert into public.levels (
    id, title, icon, description, rule_tag, theme_key, sort_order, is_published
  )
  select
    level ->> 'id',
    level ->> 'title',
    level ->> 'icon',
    level ->> 'description',
    level ->> 'rule_tag',
    level ->> 'theme_key',
    (level ->> 'sort_order')::integer,
    true
  from catalog
  on conflict (id) do update set
    title = excluded.title,
    icon = excluded.icon,
    description = excluded.description,
    rule_tag = excluded.rule_tag,
    theme_key = excluded.theme_key,
    sort_order = excluded.sort_order
  returning id
),
seed_questions as (
  select
    level ->> 'id' as level_id,
    word ->> 'prompt' as prompt,
    word ->> 'target' as target,
    coalesce(word ->> 'hint', '') as hint,
    word -> 'options' as options,
    (word ->> 'sort_order')::integer as sort_order
  from catalog
  cross join lateral jsonb_array_elements(level -> 'words') as word
),
identified_questions as (
  select
    (
      substr(hash, 1, 8) || '-' ||
      substr(hash, 9, 4) || '-' ||
      substr(hash, 13, 4) || '-' ||
      substr(hash, 17, 4) || '-' ||
      substr(hash, 21, 12)
    )::uuid as id,
    level_id,
    prompt,
    target,
    hint,
    options,
    sort_order
  from (
    select
      md5('phonics-seed:' || level_id || ':' || target || ':' || prompt) as hash,
      *
    from seed_questions
  ) hashed
)
insert into public.questions (
  id, level_id, prompt, target, hint, options, sort_order, is_published
)
select
  question.id,
  question.level_id,
  question.prompt,
  question.target,
  question.hint,
  question.options,
  question.sort_order,
  true
from identified_questions as question
join upsert_levels as level on level.id = question.level_id
on conflict (id) do update set
  level_id = excluded.level_id,
  prompt = excluded.prompt,
  target = excluded.target,
  hint = excluded.hint,
  options = excluded.options,
  sort_order = excluded.sort_order;
