# 📚 字庫擴充教學

> 💡 新版小提示：`sample_words.json` 現在會在開啟遊戲時**自動載入**，與「家長區」用的是同一套合併機制（同 ID 關卡會合併、同 target 不重複）。想「常駐」的題目就放進這個檔案，想「暫時加題」再貼網址即可。

## 使用方式

1. 打開遊戲，點擊右上角 **⚙️ 家長區**
2. 在「線上 JSON 題庫網址」輸入框中，貼上你的 **Google 試算表連結**、**Google 雲端硬碟 JSON 分享網址** 或其他的 JSON 網址
3. 點擊 **🔄 更新擴充字庫**
4. 成功後會顯示「✅ 字庫擴充成功！」

---

## 支援的檔案存放位置

你可以選擇使用 **Google 試算表 (Google Sheets)** 或者 **Google 雲端硬碟 (Google Drive)** 來存放與同步字庫。

### 做法 A：使用 Google 試算表 (推薦！最直覺)

你可以直接建立一個 Google 試算表，欄位名稱必須**完全符合**以下格式：

| level_id | prompt | target | hint | option_text | option_type | option_vowelType | correct |
|---|---|---|---|---|---|---|---|
| `short-vowel` | 選出短母音 /æ/ 的「帽子」： | hat | a 發短音 /æ/ | hat | short | 短母音 Short A | `true` |
| `short-vowel` | 選出短母音 /æ/ 的「帽子」： | hat | a 發短音 /æ/ | hate | long | 長母音 Long A | `false` |
| `magic-e` | 加上 Magic E 後，從 bit 變成了？ | bite | Magic E 讓 i 發長音 /aɪ/ | bit | short | 短母音 Short I | `false` |
| `magic-e` | 加上 Magic E 後，從 bit 變成了？ | bite | Magic E 讓 i 發長音 /aɪ/ | bite | long | 長母音 Long I | `true` |

#### ⚠️ 設定與分享步驟：
1. **必要欄位**：`level_id`, `target`, `option_text`, `correct` 必須要有值。一個單字有幾個選項，就佔用幾列（Row），但他們的 `level_id`、`target`、`prompt` 和 `hint` 必須完全一樣，這樣程式才會自動將它們合併為同一題。
2. 點擊 Google 試算表右上角的 **「共用」** 按鈕。
3. 將一般存取權改為 **「知道連結的任何人」**，角色設定為 **「檢視者」**。
4. 複製試算表的網址（例如：`https://docs.google.com/spreadsheets/d/.../edit?usp=sharing`）。
5. 直接把這個網址貼進遊戲的「家長區」輸入框即可！

---

### 做法 B：使用 Google 雲端硬碟 (Google Drive) 存放 JSON 檔

你可以把 [`sample_words.json`](./sample_words.json) 這樣的 JSON 檔案上傳到 Google Drive。

#### ⚠️ 設定與分享步驟：
1. 將 JSON 檔案上傳到 Google 雲端硬碟。
2. 在該檔案上按右鍵選擇 **「共用」** -> **「取得連結」**。
3. 將一般存取權改為 **「知道連結的任何人」**，角色設定為 **「檢視者」**。
4. 複製檔案的分享連結（格式通常為：`https://drive.google.com/file/d/檔案ID/view?usp=sharing`）。
5. 直接把該連結貼進遊戲的「家長區」輸入框即可！

---

### 做法 C：使用 GitHub Gist 或其他空間

1. **GitHub Gist** → 建立 Gist 後，點擊 `Raw` 取得網址。
2. **GitHub 倉庫** → 使用 raw 連結，例如：  
   `https://raw.githubusercontent.com/你的帳號/倉庫名/main/sample_words.json`

---

## JSON 格式說明 (如果你是用 JSON 檔案)

JSON 檔案必須是一個**陣列 `[]`**，每個元素代表一個關卡：

```json
[
    {
        "id": "short-vowel",       // 👈 對應已有的關卡 ID → 會「新增」單字到該關卡
        "words": [ ... ]
    },
    {
        "id": "my-new-level",      // 👈 全新的 ID → 會建立一個「新關卡」
        "title": "6. 我的自訂關卡",
        "icon": "🌈",
        "description": "家長自訂的額外練習！",
        "ruleTag": "Custom Words",
        "borderColor": "border-orange-300",
        "textColor": "text-orange-600",
        "words": [ ... ]
    }
]
```

---

## 已有的關卡 ID 對照表

| ID | 關卡名稱 |
|---|---|
| `short-vowel` | 1. 短母音小鎮 (CVC) |
| `magic-e` | 2. Magic E 魔法森林 |
| `vowel-teams` | 3. 雙母音長音隊 (Vowel Teams) |
| `world-3-silent-th` | 4. 特務子音洞窟 (Silent/Th) |
| `world-4-syllables` | 5. 音節解構城堡 |

---

## 欄位詳細說明

### 每個選項 (option) 的欄位

| 欄位 | 說明 | 可用值 |
|---|---|---|
| `text` | 選項顯示文字 | 任意文字 |
| `type` | 類型（決定顯示的圖示） | `"short"` 🐣 / `"long"` 🧙‍♂️ / `"silent"` 🤫 / `"th"` 🗣️ / `"syllable"` ✂️ |
| `vowelType` | 母音類型說明 | `"短母音 Short A"` |
| `correct` | 是否為正確答案 | `true` / `false` |

