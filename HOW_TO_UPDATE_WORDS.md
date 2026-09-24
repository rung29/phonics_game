# 字庫管理說明

字庫目前以 Supabase 為唯一正式來源，不再使用本機 JSON 或 Google Sheet 合併。

## 新增題目

1. 點擊遊戲右上角的「字庫管理」。
2. 使用 Supabase 管理者帳號登入。
3. 選擇關卡。
4. 填寫目標單字、題目、提示及至少兩個選項。
5. 用圓點指定唯一的正確答案。
6. 點擊「新增題目」。

新增成功後，遊戲關卡會立即重新載入。

## 修改與停用

- 點擊題目旁的「編輯」可修改內容。
- 點擊「停用」後，題目仍保留在資料庫，但玩家不會再看到。
- 停用的題目可以按「重新發布」恢復。

## 權限

- 一般玩家只能讀取已發布的題庫。
- 只有 `app_metadata.role = admin` 的 Supabase 帳號能管理題目。
- 前端只能使用 publishable key，不可使用 secret key 或 service_role key。

部署與建立管理者方式請參考 [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)。

