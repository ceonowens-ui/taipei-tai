/* =====================================================================
 * ALBUM APP TEMPLATE — album-config.js
 * =====================================================================
 * 這是「唯一需要為新專輯修改」的檔案。
 * index.html / styles.css / app.js 不含任何專輯資料，全部從這裡讀。
 *
 * 目前專輯：臺北台（璽揚 Cèon）— 墨金配色
 * ===================================================================== */

const ALBUM_CONFIG = {

  /* ---- 基本資料 ------------------------------------------------- */
  albumId: "taipei-tai",
  albumTitle: "臺北台",
  albumTitleEn: "TAIPEI TAI",
  albumEyebrow: "CEON · STUDIO ALBUM",
  artistName: "璽揚 Cèon",

  /* ---- 圖片 ------------------------------------------------------ */
  coverImage: "assets/images/cover.jpg",
  coverVideo: "",                                  // 沒有影片封面，留空
  backgroundImage: "",

  /* ---- 品牌配色（墨金：深夜藍底、金 × 藍）------------------------ */
  theme: {
    bg:        "#080d16",                          // 全域背景（墨黑藍）
    bgTop:     "#14233c",                          // 頂部 radial 亮端
    surface:   "rgba(20,30,48,.55)",               // 玻璃卡片底色
    primary:   "#c6a261",                          // 主色（亮金）：歌名、進度條、按鈕
    secondary: "#34507a",                          // 次色（墨藍）：專輯名、漸層中段
    accent:    "#b08d4f",                          // 點綴（沉金）：漸層尾端
    text:      "#ffffff",
    muted:     "rgba(180,200,228,.62)",
    themeColor: "#080d16",
  },

  /* ---- 金流（⚠️ 改這裡：到 Stripe 建立 Payment Links 後貼上）----- */
  payment: {
    stripeLinkBasic:  "",                          // 數位專輯 NT$299 的 Payment Link
    stripeLinkDeluxe: "",                          // 典藏版+WAV NT$399 的 Payment Link
    currency: "NT$",
    basicPrice: 299,
    deluxePrice: 399,
    basicName:  "數位專輯",
    deluxeName: "典藏版 + WAV",
    basicFeatures:  ["完整專輯 MP3", "不限次數隨時重播", "數位歌詞冊"],
    deluxeFeatures: ["上面全部內容", "無損 WAV 音質", "簽名數位海報"],
    deluxeBadge: "收藏推薦",
  },

  /* ---- 後端 API（⚠️ 改這裡：Worker 部署完成後換成正式網址）------- */
  api: {
    workerBaseUrl: "https://taipei-tai-api.anthonywen0693.workers.dev",
    wavDriveLink: "",                              // 典藏版 WAV 雲端連結，之後補
  },

  /* ---- 解鎖設定 -------------------------------------------------- */
  unlock: {
    // ⚠️ DEMO 測試碼，正式上線前「這裡」和 worker.js 的 DEMO_CODES 都要清空
    demoCodes: { "TPT1DEMO": "299" },
    localStorageKey: "album-taipei-tai",           // 每張專輯必須唯一
    codePlaceholder: "TPT1-XXXX-XXXX",
  },

  /* ---- 曲目（本版全部開放試聽，purchase = 支持/下載）------------- */
  tracks: [
    { n: 1,  title: "臺北台",                        subtitle: "詞曲 CÉON",             free: true, audioPath: "assets/audio/01.mp3", protectedPath: null, lyricsPath: "assets/lyrics/01.txt", artwork: null },
    { n: 2,  title: "小姐,煞到你",                   subtitle: "詞曲 璽揚 Cèon",         free: true, audioPath: "assets/audio/02.mp3", protectedPath: null, lyricsPath: "assets/lyrics/02.txt", artwork: null },
    { n: 3,  title: "浪漫末世代 (feat. 何夏)",       subtitle: "詞 何夏 ｜ 曲 璽揚 Cèon", free: true, audioPath: "assets/audio/03.mp3", protectedPath: null, lyricsPath: "assets/lyrics/03.txt", artwork: null },
    { n: 4,  title: "心愛ㄟ 你治叨位?",              subtitle: "詞曲 璽揚 Cèon",         free: true, audioPath: "assets/audio/04.mp3", protectedPath: null, lyricsPath: "assets/lyrics/04.txt", artwork: null },
    { n: 5,  title: "Taipei 霓虹",                   subtitle: "詞曲 璽揚 Cèon",         free: true, audioPath: "assets/audio/05.mp3", protectedPath: null, lyricsPath: "assets/lyrics/05.txt", artwork: null },
    { n: 6,  title: "過於悲傷的浪漫",                subtitle: "詞曲 璽揚 Cèon",         free: true, audioPath: "assets/audio/06.mp3", protectedPath: null, lyricsPath: "assets/lyrics/06.txt", artwork: null },
    { n: 7,  title: "想要你的 Photograph",           subtitle: "詞曲 璽揚 Cèon",         free: true, audioPath: "assets/audio/07.mp3", protectedPath: null, lyricsPath: "assets/lyrics/07.txt", artwork: null },
    { n: 8,  title: "You So Pretty (feat. 张婧)",    subtitle: "詞曲 璽揚 Cèon",         free: true, audioPath: "assets/audio/08.mp3", protectedPath: null, lyricsPath: "assets/lyrics/08.txt", artwork: null },
    { n: 9,  title: "Shine Like Moonlight (feat. 楊琳)", subtitle: "詞曲 璽揚 Cèon",     free: true, audioPath: "assets/audio/09.mp3", protectedPath: null, lyricsPath: "assets/lyrics/09.txt", artwork: null },
    { n: 10, title: "Be Good",                       subtitle: "詞曲 璽揚 Cèon",         free: true, audioPath: "assets/audio/10.mp3", protectedPath: null, lyricsPath: "assets/lyrics/10.txt", artwork: null },
  ],

  /* ---- 心情牆 ---------------------------------------------------- */
  moodWall: {
    heading: "TAIPEI WALL",
    subheading: "把你的台北故事，留在這裡。",
    eyebrow: "Leave your story here",
    tags: ["東區", "三重", "台北橋", "冰宮", "霓虹", "青春", "回憶", "台北人"],
    seedComments: [
      { name: "東區的人",   mood: "回憶",   text: "聽臺北台，整個 90 年代都回來了。",       time: "剛剛" },
      { name: "三重出身",   mood: "台北人", text: "從三重到東區，這張專輯就是我的人生路線。", time: "5 分鐘前" },
      { name: "霓虹燈下",   mood: "霓虹",   text: "Taipei 霓虹 循環一整晚。",               time: "20 分鐘前" },
    ],
  },

  /* ---- 寫真牆（⚠️ 目前用封面佔位，換成真照片：gallery/01-03.jpg）-- */
  gallery: {
    heading: "GALLERY",
    subheading: "璽揚 Cèon · 寫真牆",
    photos: [
      { src: "assets/images/gallery/01.jpg", caption: "" },
      { src: "assets/images/gallery/02.jpg", caption: "" },
      { src: "assets/images/gallery/03.jpg", caption: "" },
    ],
  },

  /* ---- 介面文案 ---------------------------------------------------- */
  strings: {
    navTabs: ["聽歌", "完整版", "解鎖", "心情牆", "寫真牆"],
    nowPlayingLabel: "Now Playing",
    nextScene: "Next Track",
    purchaseTitleEn: "Unlock the Album",
    unlockTitleEn: "Unlock",
    unlockSubtitle: "輸入序號解鎖完整版",
    lyricsLabel: "Lyrics",
    noLyrics: "這首歌暫時沒有歌詞",
  },
};

/* 讓 app.js 讀得到（不要動這行） */
window.ALBUM_CONFIG = ALBUM_CONFIG;
