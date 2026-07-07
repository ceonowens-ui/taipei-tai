臺北台 — Album App（模板架構版）
=====================================
引擎：index.html / styles.css / app.js（與 THE SKY 完全相同，不要改）
專輯資料：album-config.js（要改東西只改這裡）
後端：worker.js（Cloudflare Worker，頂部 WORKER_CONFIG 已設好 臺北台）

本版設定：10 首全部開放試聽。購買（299 數位 / 399 典藏+WAV）
= 支持 + 解鎖下載，兌換碼流程與 THE SKY 相同（TPT1-XXXX-XXXX）。

【上線 checklist】
1. 前端：把這整個資料夾推上新的 GitHub repo →
   Settings → Pages → main / root → Save
2. Stripe：建立兩個 Payment Link（NT$299、NT$399），
   貼到 album-config.js 的 stripeLinkBasic / stripeLinkDeluxe
3. Worker：部署 worker.js 到 Cloudflare（名稱 taipei-tai-api），綁定
   KV: CODES ／ R2: AUDIO ／ 環境變數 STRIPE_WEBHOOK_SECRET、
   RESEND_API_KEY、RESEND_FROM、ALLOWED_ORIGINS（= 你的前端網址）
   Stripe webhook 指到 https://.../stripe-webhook
   （網址若不同，記得改 album-config.js 的 workerBaseUrl）
4. 典藏版 WAV：檔案好了之後上傳 R2，把 worker.js 的
   PROTECTED_WAV_FILES 填上，album-config.js 的 wavDriveLink 補上
5. 寫真牆：assets/images/gallery/01-03.jpg 目前用封面佔位，換成真照片
6. 正式上線前：清空 demoCodes（album-config.js）和 DEMO_CODES（worker.js）
7. 用真 iPhone Safari（無痕）測：播放、歌詞、TPT1DEMO 兌換

【已踩過的雷，改設定時注意】
- 改價 → Worker 的 DELUXE_AMOUNT_THRESHOLD 要重算（TWD ×100 取中間值）
- localStorageKey 是 album-taipei-tai，不要跟其他專輯重複
- 本機直接雙擊 index.html 可聽歌，但歌詞讀不到（fetch 被 file:// 擋），
  屬正常現象，推上 GitHub Pages 就好了
