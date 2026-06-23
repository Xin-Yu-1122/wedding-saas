// ============================================================
// WEDDING SAAS  v6.17.3  （商業版／多租戶）
// 最後更新：2026-06-22
// 版本規則：x.x.1=Patch · x.1=Minor · x.0=Major
//
// v6.17.3 2026-06-23  ★ Patch：資訊管理預覽一致性
//          1.【切分線花跟預覽】InfoPage 新增 boThemeKey 傳入；切分線與子tab emoji 改用 infoTheme
//             (=boThemeKey||已存檔)，預覽不同主題時切分線上的花一併切換。
//          2.【基本資訊預覽置中】基本資訊右側即時預覽的場地/地址/電話/時間/交通改置中，與實際邀請函一致。
//
// v6.17.2 2026-06-22  ★ Patch：v6.17.1 回饋修正（頁首條/切分線寬距/花閃內容/海芋對比/icon）
//          1.【移除後台頁首裝飾條】BackofficeChrome 不再渲染 ThemeChromeStrip（名單/排位/資訊管理）：
//             排位頁不再被它擠壓影響操作；資訊管理仍保留花襯底。
//          2.【切分線跟容器寬+間距】ThemeDivider mw 改對齊各頁內容容器：邀請函500/祝福牆1160(容器1200)/
//             名單1360(容器1400)/資訊860(容器900)；名單切分線與下方卡片間距加大(my 20)。
//          3.【邀請函花閃開內容】ThemeFloraBg 加 topA；邀請函右上花改 top:60vh（落在 Hero 之下的內容右側留白，不再被切）。
//          4.【海芋卡片邊界】modern pageBg #FFFFFF→#F1F1F3、cardBg #F7F7F7→#FFFFFF：淺灰頁底襯白卡，邊界清楚。
//          5.【海芋 icon】NavBar 資訊管理 NavIcon 改設定滑桿線條（只影響 useIcon 的現代簡約）。
//          6.【資訊管理子 tab icon】現代簡約＋極簡黑不顯示 emoji（infoMinimal），其餘維持。
//          7.【極簡黑切分線】ThemeDivider 於 noFlower 改為整條細線，無中間圖。
//
// v6.17.1 2026-06-22  ★ Patch：v6.17.0 上線回饋修正（花襯底/切分線/選擇器/頁尾）
//          1.【預覽帶主題】後台 BackofficeChrome themeKey 改用 boThemeKey：預覽外觀時 chrome＋
//             資訊管理花襯底跟著預覽主題切換（原本固定吃已存檔主題）。
//          2.【移除舊紋路】邀請函/祝福牆 root 的 gs.pagePattern 背景拿掉（backgroundImage:'none'），
//             不再蓋住新花襯底。
//          3.【頁尾修正】懸空的「·」修掉（無日期就不顯示分隔點）；新人名下新增「由 對好入座 提供」。
//          4.【協作卡片寬度】CollabTab 外層 maxWidth:560 移除→跟資訊管理容器同寬。
//          5.【花切分線回歸 ThemeDivider】線＋主題花（極簡黑用 seatright 字標）：邀請函(RSVP標題上)、
//             祝福牆(❀❀❀下)、名單(標題列下)、資訊管理(邀請連結下)。排位不加。
//          6.【文案】邀請函「THE CEREMONY」→「WE ARE GETTING MARRIED」。
//          7.【選擇器】外觀主題＋建立精靈：極簡黑卡片不顯示圖，標題/小字置中。
//
// v6.17.0 2026-06-22  ★ Minor：主題花卉襯底 + 賓客端/資訊管理 GSAP + 裝飾符統一
//          1.【花卉襯底】ThemeFloraBg：以 themes/{key}.webp 在邀請函/祝福牆/資訊管理鋪「極透下層襯底」
//             (右上+左下，opacity .11~.16；深色略升)，zIndex:-1 / pointerEvents:none / isolation:isolate
//             置於內容下層。無角落漂浮花、無漂移動畫。極簡黑(noFlower)不套花。
//             排位畫布(data-tp/拖曳/樂觀鎖/presence)完全不碰；花飾僅在 BackofficeChrome page==='info' 注入。
//          2.【GSAP】useGuestFloraGsap（lazy loadBoGsap + ctx.revert + prefers-reduced-motion）：
//             邀請函=表單卡淡入(+y)；祝福牆=卡片「僅透明度」錯落(不碰 transform→旋轉/hover不壞)
//             + 環境花瓣緩落(僅非極簡黑、尊重 reduced-motion)；資訊管理沿用 useBackofficeGsap 頁面淡入
//             + 連結列/基本卡 data-bo-stagger 錯落。
//          3.【裝飾符統一】邀請函/祝福牆分隔裝飾、祝福卡角標、空狀態統一為 ❀(guestDeco)；
//             兩頁頁尾改「❀ 新人 ＆ 新人 · 日期 ❀」。極簡黑全部不顯示符號、NavBar tab emoji 清空。
//             山茶花(oriental)素材重上色為主題暗紅(離線處理，葉保留綠)。
//
// v6.16.1 2026-06-22  ★ Patch：登入頁主題污染 / InfoPage 選擇器花卉 / 範例名稱
//          1. 【登入頁變深色】applyTheme 改為僅在檢視特定婚禮(parsed.section==='w')時套主題，
//             登入／Dashboard／公開首頁一律 applyTheme(null)。根治 AppShell(子)先清、
//             WeddingApp(父) effect 後又把婚禮主題套回的順序問題。
//          2. 【主題沒帶入】資訊管理頁的第二個主題選擇器（外觀主題）補上 v6.16.0 花卉樣式：
//             花卉縮圖 + 花名主標 + 舊主題名小字（保留色塊條），與建立精靈一致。
//          3. 【私人名字當範例】字體預覽範例由寫死的私人名字改為通用範例：
//             中文「雅婷 ＆ 家豪」、英文「Emma & Liam」；footer 範例文字同步改通用。
//
// v6.16.0 2026-06-22  ★ Minor：主題花卉改版 + 後台 GSAP 微互動
//          【花卉資料】新增 THEME_FLOWERS 對照表（11 主題各對應一花+英文+花語，花語為
//             可編輯字串、集中一處）。flowerImg(key) 由 Firebase Storage themes/{key}.webp 組網址
//             （bucket wedding-saas-558d9.firebasestorage.app，公開讀取）。dark→改名「極簡黑」
//             noFlower:true、不套花改用 seatright 字標。
//          【選擇器】建立精靈主題卡改為：花卉縮圖(lazy) + 花名主標 + 舊主題名小字。
//          【後台裝飾】新增 ThemeChromeStrip（頁首細線+主題花卉，極簡黑用 seatright）與
//             BackofficeChrome，一處包住 admin/seating/info 三頁。純裝飾、pointerEvents:none。
//          【GSAP】loadBoGsap 走 CDN lazy load（cdnjs 3.12.5），useBackofficeGsap 在
//             切頁/換主題時：整頁透明度淡入（不加 transform→不影響排位畫布座標）+ 統計卡
//             /[data-bo-stagger] 錯落進場；依賴僅 [page,themeKey]→realtime 更新不重播；
//             gsap.context()+ctx.revert() 卸載清理。排位畫布（data-tp/拖曳/樂觀鎖/presence）完全不碰。
//          【待辦】10 個 WebP 需上傳 Storage themes/；Storage 規則加 themes/ 公開讀取（保留 weddings/ 寫入）。
//          【後續可加】Modal/抽屜/NavBar 進場動畫（本版未含，確認體感後再層疊）。
//
// v6.15.1 2026-06-21  ★ Patch：頁籤標題／形象頁卡片順序／賓客名單描述
//          1. 網頁頁籤標題（document.title）由舊名「喜帖到排位一次搞定」改為
//             「對好入座 ｜ 婚禮喜帖・賓客名單・智慧排位」，與現行品牌一致
//          2. 形象頁「籌備婚宴最頭痛的，一條龍搞定」六張功能卡，順序改為：
//             線上喜帖 → 邀請函回覆 → 賓客名單 → 祝福牆 → 智慧排位 → 多人協作
//          3. 賓客名單卡介紹小字加入喜餅功能說明（男方／女方分開計算）
//
// v6.15.0 2026-06-21  ★ Minor：新人排位（特殊賓客）+ 喜餅管理
//          【新人】新郎/新娘改為 data.guests 兩筆特殊賓客（isCouple，新郎 side:'groom' 藍／
//          新娘 side:'bride' 粉，各 count1、attending）。排位頁首開自動補進待安排（新舊婚禮皆適用、
//          ref 防迴圈）。可拖到任何桌位、不可刪除、點擊不開編輯（座位/待安排/清單三處 setEditGuest 擋 isCouple）。
//          外觀沿用 side 配色 + 名字「新郎/新娘」（自動，無需特例）。
//          • 計入：免費版排位上限 32、排位入座/桌佔用（attending:true 自然計入）
//          • 排除：名單清單列、RSVP 統計、出席人數、葷素、名單匯出（filter !isCouple）
//          【名單統計】出席人數排除新人、分母＝總席−2（新人預佔2席）；席次使用進度同步排除；
//          出席卡內新增 男/女/共同 出席拆分（算喜餅用）。
//          【喜餅】名單新增「喜餅」+/- 欄位（預設0，attending 才可調）；新增「喜餅數量」統計卡；
//          匯出新增「預計發喜餅對象名單」（姓名/分類/子分類/出席/人數/喜餅數量，只列 >0，附男女共同小計）。
//          • 已 jsdom 驗證：名單排除新人(3列)、出席9/分母8、男女共同拆分、喜餅卡/欄位、RoundTable 新人藍渲染
//          ※ 舊版「鎖死座位格(coupleSeatIndices)」做法已移除，改為本特殊賓客方案。
//
// v6.14.0 2026-06-21  ★ Minor：公開形象頁 + 多人協作付費閘門
//          1. 新增公開形象頁 LandingPage（路由 #/home，未登入訪客預設進入；
//             已登入者自動導向後台）。登入改為 CTA（#/login）。
//             • 整套 CSS scope 在 .lp-root 底下，不污染後台既有樣式
//             • GSAP 只在此頁 lazy load（CDN），離開時 ctx.revert() 清理
//             • 站內錨點用 JS 平滑捲動，避免與 hash 路由衝突
//          2. 多人協作改為 Pro 專屬：CollabTab 非 Pro 顯示升級卡、createInvite 擋下；
//             ※ 需搭配 Firestore 規則（invites 建立 / weddings 改 collaborators 要求 plan=='pro'）
//          ※ 後端 index.js 同步 v6.14.0：SimulatePaid 防護 + 重複訂閱防呆
//          （主桌自動帶入新人：規劃中，下一版實作）
//
// v6.13.2 2026-06-18  ★ Patch：金流收尾（非上線切換）
//          1. 優惠碼防呆：輸入了優惠碼但沒按「套用」就按付款，先跳提示（避免誤用原價結帳）
//          ※ 後端 index.js 同步更新：webhook 首付失敗回寫 subscription.status='failed'
//            （續扣失敗不殺有效訂閱，僅記錄 lastFail*）
//
// v6.13.1 2026-06-17  ★ Patch：小修補
//          1. 帳單改 onSnapshot（短暫離線不再顯示空白，自動重連補上）
//          2. 優惠碼「套用」按鈕改主色實心（原 ghost 太淡，容易被忽略）
//          3. 主題選擇器卡片新增 SVG pattern 色帶（11 套主題各有對應幾何紋樣）
//          ※ 後端 index.js 同步更新：webhook 開通時清除殘留 grantedBy
//
// v6.13.0 2026-06-17  ★ Minor：訂閱生命週期補完（取消訂閱／續扣延長到期日／到期自動降級）
//          1. 取消訂閱：帳戶中心 Pro 卡新增「取消訂閱」→ 後端 cancelSubscription
//             呼叫綠界 Action=Cancel 停用後續扣款；Pro 用到 expiresAt 為止（不退款、不立即降級）
//          2. 續扣延長：webhook 改用 AlreadyExecTimes 冪等；續扣成功時 expiresAt 往後加一個週期
//             （首次付款行為不變）
//          3. 到期降級：新增排程 expireSubscriptions（每日 03:00 Asia/Taipei）+ 管理員
//             callable runExpiryCheck；過期者 proGrant.active=false、名下婚禮 plan='free'
//          4. 修：移除座位畫布容器重複的 style 屬性（esbuild 警告）
//          ※ 後端 index.js 同步更新，兩檔都要部署；expireSubscriptions 首次部署需啟用
//            Cloud Scheduler / Pub/Sub / Eventarc API
//
// v6.12.3 2026-06-16  ★ Patch：付款導回 fragment 遺失 → 改用 query 參數承載
//          【根因】綠界付款完成是 POST 到 payResult，函式 302 帶 #/pay/result，
//                  但瀏覽器跟隨「POST 後的 302」時常把 fragment 丟掉，
//                  SPA 開起來 hash 是空的 → 預設 #/login → 已登入 → 彈到首頁
//                  （故 v6.12.2 把路由提前也無效，因為根本沒收到 hash）
//          【修法】payResult 改導向 .../?payresult=1#/pay/result（query 一定留存）
//                  useHashRoute 偵測 ?payresult=1 → 路由設為 #/pay/result 並清 URL
//          ※ 後端 index.js 同步更新（PAY_RESULT_HASH_URL 加 query），兩檔都要部署
//
// v6.12.2 2026-06-16  ★ Patch：修付款導回被路由彈走（導向首頁而非確認頁）
//          【根因】#/pay/result 判斷排在路由分派後段，會先被 (1) auth 未就緒的
//                  LoginPage 彈出、(2) 0 婚禮帳號的「建立婚禮向導」攔截而換掉
//          【修法】把 #/pay/result 提到分派最前面（先於所有 auth/婚禮判斷）
//
// v6.12.1 2026-06-16  ★ Patch：付款導回機制改用 Cloud Function 轉址（前端邏輯不變）
//          【根因】v6.12.0 用 vercel.json rewrite /pay-result，但 (1) 未生效 404、
//                  (2) 該路徑無 # → hash router 接不到、(3) 綠界 OrderResultURL 是 POST
//          【修法】後端新增 payResult 函式 302 導向 .../#/pay/result（帶 #）
//
// v6.12.0 2026-06-16  ★ Minor：付款完成後段流程補全
//          【前端 App.jsx】
//            - 新增 PayResultPage：輪詢 users/{uid}.proGrant（每 2s，最多 30s）
//              三種狀態：polling（確認中）/ success（已開通）/ timeout（超時提示）
//            - AccountCenterPage proGrant 改為 onSnapshot 即時監聽
//          【後端 index.js】createSubscription 加導回 URL；ecpayWebhook log 強化
//
// v6.11.3 2026-06-16  ★ Patch：ECPay 金流串接打通（根因：HashIV 設定錯誤）
//          【根因】後端 ECPAY_TEST.HashIV 寫成 "EkRm7hy59jNs3ypv"（錯誤），
//                  綠界官方測試 HashIV 應為 "EkRm7iFT261dpevs"
//          【修復】後端 index.js HashIV 改為正確值
//          【其他】恢復完整定期定額參數 + TradeDesc/ItemName 正常文字
//                  前端表單 enctype 設為 application/x-www-form-urlencoded 明確化
//          【狀態】成功跳轉綠界付款頁，CheckMacValue 通過
//
// v6.11.2 2026-06-16  ★ Patch（已被 v6.11.3 取代）：曾嘗試 document.write 方案
//
// v6.11.1 2026-06-15  ★ Patch：加入 firebase-functions-compat.js 載入
//          【新增1】AccountCenterPage「方案與訂閱」tab 完整付款流程：
//                   動態方案卡片選擇（讀 config/pricing）→ 優惠碼輸入驗證（呼叫 validateCoupon）
//                   → 金額摘要 → 前往付款按鈕（呼叫 createSubscription → POST 跳轉綠界）
//          【新增2】Pro 狀態顯示訂閱到期日（讀 users/{uid}.proGrant.expiresAt）
//          【新增3】帳單歷史（讀 users/{uid}/invoices，顯示方案名/日期/金額/訂單號）
//          【新增4】initFirebase 加入 functions 初始化（window.firebase.functions()）
//                   AccountCenterPage 接受 fbRef prop；accountProps 補傳 fbRef
//          【測試環境】Cloud Functions 使用綠界測試環境（MerchantID:3002607）
//                    正式上線換 firebase functions:config:set ecpay.*=真實參數
//
// v6.10.0 2026-06-15  ★ Minor：優惠碼系統 + 方案定價頁版面優化
// v6.9.0  2026-06-15  ★ Minor：方案與定價管理（金流階段 A）
// v6.8.7  2026-06-15  ★ Patch：收緊匿名登入觸發條件
// v6.8.6  2026-06-14  ★ Patch：後台新人姓名顯示 + 夜幕暗黑感謝頁文字可見性
// v6.8.5  2026-06-14  ★ Patch：未登入直接輸入 #/setup 攔截 + 管理員 setup 迴圈
// v6.8.4  2026-06-14  ★ Patch：開發者後台刪除/開通 Pro 防護
// v6.8.3  2026-06-14  ★ Patch：新用戶建立婚禮被規則擋 + 錯誤訊息中文化
// v6.8.2  2026-06-14  ★ Patch：Google 登入後非管理員誤顯「無權限」
// v6.8.1  2026-06-14  ★ Patch：管理員帳號路由修正
// v6.8.0  2026-06-14  ★ Minor：開發者後台（Dev Console）
//          【新增】#/dev 開發者後台，僅 PLATFORM_ADMIN_EMAILS 白名單帳號可進
//          • 總覽所有使用者帳號（查 users + weddings 分組）、搜尋、統計
//          • 手動開通 / 移除 Pro（帳號級 users/{uid}.proGrant + 同步該帳號所有婚禮 plan）
//          • 刪除帳號的 Firestore 資料（婚禮 + user 文件）
//          • 付款紀錄區塊 placeholder（待金流）；「刪除登入帳號」停用（需 Cloud Functions 階段 B）
//          • Dashboard 頂部對管理員顯示「🛠 開發者後台」入口
//          • createWedding：帳號已手動開通 Pro 時，新建婚禮直接繼承 plan='pro'
//          【需配合】firestore.rules 需允許 admin 跨帳號讀寫 users/weddings，
//                    並鎖死 plan/proGrant 不讓擁有者自行竄改（附於交付說明）
//          【前端 gate 僅為隱藏，真正安全在 Firestore 規則】
//          【未動】既有功能（名單/排位/祝福牆/雙鎖/樂觀鎖/主題/匯出邏輯）
//
// v6.7.0  2026-06-14  ★ Minor：免費版重定義 + 過期排位鎖 + 複製專案 + 建立頁返回鈕
//          【免費版重定義】FREE_TABLE_LIMIT 5→3；新增 FREE_SEAT_LIMIT=32
//          • 排位：最多 3 桌、已入座最多 32 人（名單不限量、RSVP 照常）
//            — dropOnSeat / 手機 assignToTable 都擋第 33 人（僅 ≤3 桌時生效）
//          • 名單匯出、排位匯出（CSV/JPG/PDF/帶位清單）非 Pro 一律禁用 → 🔒 匯出鈕
//          【過期排位鎖 planLocked】非 Pro 且桌數 > FREE_TABLE_LIMIT（曾為 Pro 已降級）：
//          • 依「建立順序」前 3 桌可正常編輯，第 4 桌(含)以後鎖定
//          • 鎖定桌：座位隱藏姓名（顯示🔒）、不可拖移/改派/移除/刪除/開編輯、不可移動桌位
//          • 名單管理頁完全不受影響（只鎖排位畫布上的名字）；祝福牆完全不變
//          • RoundTable 新增 planLocked prop；SeatingPage 新增 planLockedIds/isPlanLocked
//          【複製專案】我的婚禮卡片新增「⧉ 複製」：複製 設定/主題/桌位排版(tables/zones/markers/mainTableId)
//          • 清空 名單/avoidPairs/samePairs/versions/photos；副本 plan='free'、未發布、擁有者為自己
//          • 算入免費版專案數上限（達上限擋下並提示升級）
//          【建立頁返回鈕】WeddingSetupWizard 新增 onCancel：「← 返回我的婚禮」
//          • 僅在 weddings.length>0 時顯示（全新使用者無可返回的專案頁）
//          • 已填資料時放棄前先確認
//          【未動】祝福牆、雙鎖(posLocked/seatLocked)、optimistic locking(lastSyncedRef)、
//                  主題系統、data-tp 排位隔離、既有匯出的智慧裁切邏輯（僅外層加權限閘門）
//          【註】免費 vs 過期 以 tables.length 與 FREE_TABLE_LIMIT 區分（訂閱資料模型尚未建立，
//                待金流階段以 subscriptions.status 取代此推導）
//
// v6.6.7  2026-06-13  ★ Patch：夜幕暗黑拱窗月光修復（改 overlay 元件）
//          【Bug】v6.6.6 夜幕拱窗月光完全不顯示：pagePattern 用了
//          radial-gradient + url() 多圖層，但 backgroundSize 'auto, 720px 400px'
//          的雙值語法與單值 repeat/position 衝突，瀏覽器判定整個背景無效。
//          【修復】拆成獨立 NightArch overlay 元件：
//          • 月光光暈 = div + radial-gradient；拱窗 = SVG 線框
//          • 放在 Hero（58vh 滿版婚紗照）之後的內容區頂部，
//            避免被滿版照片遮住，拱窗月光出現在 THE CEREMONY 標題上方
//          • pointer-events:none、zIndex:0，不影響操作與內容層級
//          • RSVPPage 與 BlessingWall 皆套用（cfg.theme==='dark' 時渲染）
//          dark 主題的 pagePattern/Size/Mode 一併清空（改用 overlay）。
//
// v6.6.6  2026-06-12  ★ Patch：典雅東方 / 夜幕暗黑 背景最終定稿
//          • 典雅東方 → 中式符號散排（240px tile）：
//            雙錢結（富貴雙全）+ 宮燈 + 摺扇 + 中國結 + 中心梅花，
//            紅(#A6373B)金(#C09A7D)交替配色；囍字不入背景，僅保留於人名中間。
//          • 夜幕暗黑 → M5 拱窗月光（top-scene 模式）：
//            頂部中央拱形窗線框 + radial-gradient 月光光暈自上灑落漸隱，
//            no-repeat + top center 定位，不平鋪。
//          新增 pagePatternMode 'top-scene'（頂部固定不重複）；
//          使用點 background 邏輯同步支援 scene / top-scene / tile 三模式。
//
// v6.6.5  2026-06-11  ★ Minor：11 主題背景花紋全數定案
//          經多輪預覽 + 整頁模擬 + Shape Divider 風格探索，最終定案：
//          • 典雅東方 → 遠山層疊（底部三層山巒，水墨意境，1200×200，repeat-x+bottom）
//          • 玫瑰金粉 → 10 顆隨機泡泡（7px~70px 大小混合散落，1000×780）
//          • 手寫溫柔 → 信紙橫線（100×32，筆記本質感）
//          • 薰衣草紫 → 雙枝薰衣草穗傾斜錯排（-18°/+24°，150×150）
//          • 森林深綠 → 雙松枝傾斜錯排（-14°/+20°，160×160）
//          • 自然植物 → 雙葉子傾斜錯排（-22°/+30°，150×150）
//          • 現代簡約 → 極淡縱向漸層（白→近白，無 SVG，no-repeat）
//          • 夢幻暗黑奢 → 純菱格 52px（金線鑽石格）
//          • 夜幕暗黑 → 深空漸層+細星點+雙層山稜剪影（800×430）
//          • 典雅奶油 / 海洋湛藍 → 沿用既有（細點 / 波浪）
//          新增 pagePatternRepeat / pagePatternPos 屬性：
//          東方山巒用 repeat-x + bottom（水平鋪滿、貼齊底部）；
//          現代漸層用 no-repeat。3 處 pagePattern 使用點同步更新。
//          11 主題花紋經雜湊比對確認零重複。
//
// v6.6.4  2026-06-11  ★ Patch：6 個定案花紋正式寫入
//          花紋選定（經三輪預覽 + 整頁模擬確認）：
//          • 典雅東方 → L：大同心圓弧（右上+左下對角 400px 一組，似日出水波）
//          • 玫瑰金粉 → O：大柔焦光斑 bokeh（1200×800px 8 個散景圓，攝影感）
//          • 手寫溫柔 → C：信紙橫線（100×32px，筆記本質感）
//          • 薰衣草紫 → B：斜枝薰衣草穗（70×70px，自然傾斜）
//          • 夢幻暗黑奢 → B：純菱格 52px（金線鑽石格）
//          • 夜幕暗黑 → C：細斜紋 40px（西裝布紋）
//          新增 pagePatternSize 屬性（backgroundSize 控制）；
//          東方/玫瑰採用大尺寸單元，大圖案不重複感。
//
// v6.6.3  2026-06-11  ★ Patch：賓客 tab 置中 + 6 主題花紋再優化
//          1. 賓客頁 NavBar tab（邀請函/祝福牆）改絕對定位置中（left:50% translate），
//             不再因 space-between 被推向右側；logo 維持左側。
//          2. 6 個主題背景花紋重做（更具質感、各自獨特、零重複）：
//             • 典雅東方：中式祥雲紋（雲頭曲線）
//             • 玫瑰金粉：盛開玫瑰螺旋（同心花瓣）
//             • 手寫溫柔：手繪愛心圈 + 散點
//             • 薰衣草紫：完整薰衣草枝（花穗 + 葉）
//             • 夢幻暗黑奢：金色菱格紋（連續鑽石格網）← 依指定改菱格
//             • 夜幕暗黑：星座連線（星點 + 細連線）
//             11 主題花紋經雜湊比對確認零重複。
//
// v6.6.2  2026-06-11  ★ Patch：祝福浮窗主題化 + 背景花紋質感升級
//          1. 暗黑系祝福浮窗關閉鈕看不見：Modal 新增 closeColor prop，
//             祝福浮窗傳入主題主色，並加半透明圓底，任何主題下都清晰可見。
//          2. 祝福查看浮窗改為跟隨主題配色：背景漸層用主題 cardBg/soft/pageBg、
//             文字用主題 text/subText/mutedText、裝飾用主題 ornament + primary、
//             圓角用主題 blessingRadius。暗黑主題自動用深色卡片＋淺字，對比清晰。
//          3. 5 個主題背景花紋重做（各自獨特、更有質感、不重複）：
//             • 玫瑰金粉：交錯玫瑰花苞 + 細點（80×80）
//             • 手寫溫柔：手繪波浪線 + 四角星（90×90）
//             • 薰衣草紫：薰衣草花穗串（72×72）
//             • 夢幻暗黑奢：金色鑽石格紋 + 中心點（60×60）
//             • 夜幕暗黑：星空（不同大小星點 + 四角星，100×100）
//             全 11 主題花紋經雜湊檢查確認零重複。
//
// v6.6.1  2026-06-11  ★ Patch：帳戶中心崩潰修復 + 風格系統 10 項修正
//          1. 【緊急】帳戶中心白屏崩潰：FREE_PROJECT_LIMIT/FREE_TABLE_LIMIT 原定義在
//             WeddingApp 函式內，AccountCenterPage 無法存取 → ReferenceError。
//             已提升為模組層級常數，移除三處區域重複定義。
//          2. 登入頁被主題污染：AppShell 改為渲染前同步清除主題 CSS（不等 useEffect），
//             並強制重設 body 背景，登入/Dashboard/帳戶中心不再受任何主題影響。
//          3. 暗黑系祝福查看浮窗對比：整卡加 data-tp 排除主題覆寫（固定米底深字）。
//          4. 暗黑系資訊管理賓客連結橫幅對比：底色改 #EFE3D0（在主題替換清單內），
//             與文字色成對轉換，任何主題下對比正常。
//          5. 暗黑系金底按鈕淺字看不清：applyTheme 新增 dark 專屬規則，
//             金色主色底上的 #FFFEFA 文字自動轉深色。
//          6. 奶油主題按鈕/勾選文字反白：onColorText 閾值 0.55→0.62
//             （奶油金 0.57→白字；暗黑奢 0.66/夜幕 0.69→黑字）。
//          7. 關係按鈕（新郎方/共同/新娘方）選取後改用主題主色（背景+邊框+自動文字色）。
//          8. 全部 11 主題加上專屬簡約背景花紋（SVG data URI，低透明度）：
//             奶油=細點、東方=囍字（換掉四瓣花，更喜慶）、玫瑰/手寫=愛心、薰衣草=花瓣、
//             海洋=波浪、森林=松枝、植物=葉子、現代=細網格、暗黑奢=金菱星、夜幕=星點。
//          9. 祝福牆改滿版：花紋鋪滿整個視窗寬度，內容維持限寬置中。
//          10. 8 個主題補上 blessingCardBgs（祝福卡片色組），11 主題全數齊備。
//          11. 點選主題自動帶入推薦字體組合（THEME_FONT_RECO，外觀 Tab + 向導皆生效），
//              使用者之後手動改字體則尊重其選擇。
//          12. 外觀預覽橫幅顯示「目前預覽的主題：XX」（資訊管理 + 向導皆有）。
//          13. 現代簡約 info icon 修正（補圓圈外框）、admin/seating icon 線條優化。
//
// v6.6.0  2026-06-10  ★ Minor：風格系統全面深化（主框架 NavBar + 細節 + 預覽修正）
//          1. 主框架 NavBar 完全風格化：logo 字體（navLogoFont）、背景（navBg）、
//             底線（navBorder）、tab 前綴 emoji（icons，每主題專屬）全隨主題切換；
//             公開 2 tab 與後台 5 tab（邀請函/祝福牆/名單/排位/資訊管理）統一 renderTab，
//             支援 underline / pill / block 三種樣式。
//          2. 主題排序調整：奶油→東方→玫瑰→手寫→薰衣草→海洋→森林→植物→現代→暗黑奢→夜幕。
//          3. 出席按鈕統一主題主色跳色：新增 onColorText() 亮度判斷，
//             暗黑奢=金底黑字、東方=暗紅底白字，不再用固定綠/粉。
//          4. 新增 GsCheckbox 自訂勾選元件（取代原生 checkbox）：
//             隨主題圓角與主色，勾號顏色依底色亮度自動判斷。
//          5. 預覽模式修正（重要）：previewDraft 現在合併進 RSVPPage/BlessingWallPage/NavBar
//             的 config，預覽時圓角/裝飾/tab樣式/按鈕等全部外觀屬性即時生效
//             （先前只有 CSS 變數的顏色字體生效）。
//          6. WizardPreviewOverlay 重寫：完整渲染 gs（NavBar tab 樣式、出席按鈕跳色、
//             checkbox、分隔裝飾、頁面花紋）。
//          7. 既有 6 主題補上完整風格屬性（專屬 ornament/divider/圓角/icons/祝福卡樣式）。
//          8. 風格細節修正：
//             • 現代簡約：移除全部 emoji，改用 NavIcon SVG 線條圖示
//             • 典雅東方：圓角 0→16、新增淡雅四瓣花 SVG 頁面花紋 + NavBar 同心圓紋
//             • 自然植物：tab icons 改花草 emoji（🌸🌷🍃🌿🪴）
//             • 手寫溫柔：中文標題字體改用 LXGW WenKai TC 霞鶩文楷（開源可商用手寫楷體）
//          9. Google Fonts 新增：Caveat、Lato、LXGW WenKai TC、Noto Sans TC。
//
// v6.5.0  2026-06-10  ★ Minor：5 大完整設計風格系統（僅影響賓客端邀請函＋祝福牆）
//          新增 getGuestStyle(themeKey) — 返回賓客端完整視覺語言：
//          按鈕圓角/文字大小寫/間距、輸入框樣式、分隔線/裝飾符號、
//          祝福牆卡片旋轉/圓角/背景、Tab 樣式（underline/pill/block）等。
//          五種新設計系統：
//          • modern   「現代簡約」— 純白底、銳利邊角(radius:0)、全大寫標籤、
//                     輸入框底線風格、祝福牆卡片不旋轉、無陰影
//          • oriental 「典雅東方」— 暖米底、暗紅主色、草書感大字距按鈕、◈ 裝飾符、
//                     Block Tab 樣式、祝福牆方正卡片、微紅暗紋陰影
//          • botanical「自然植物」— 霧綠底、圓角(radius:8)、✿ 裝飾符、Pill Tab 樣式、
//                     綠意卡片背景、有機感陰影
//          • dark-luxury「夢幻暗黑奢」— 近黑底、香檳金主色、金色光暈陰影、
//                     ✦ 裝飾符、深色祝福牆卡片、全大寫標籤
//          • handwritten「手寫溫柔」— 玫瑰粉底、超圓角(btnRadius:24)、Caveat 手寫字體、
//                     ♡ 裝飾符、Pill Tab 樣式、柔和粉色陰影
//          NavBar guest tabs 同步三種樣式切換；Google Fonts 加入 Caveat。
//          管理後台（名單/排位/資訊管理）不受任何影響。
//
// v6.4.3  2026-06-10  ★ Patch：3 項修正
//          1. 祝福查看浮窗關閉按鈕被遮擋：Modal 關閉按鈕加 zIndex:2
//          2. 帳戶中心方案 tab 主從帳號區分：
//             - 純協作帳號（無自有婚禮）：顯示「協作帳號」說明，列出協作中的婚禮，
//               不顯示升級按鈕（方案費用由主辦方帳號管理）
//             - 主帳號（有自有婚禮）：顯示自己的方案，若也有協作婚禮則補充說明
//             - isPro 邏輯改為基於 ownedWeddings（自有婚禮），不含協作婚禮
//             - loadUserWeddings 組裝時補上 myRole 欄位
//
// v6.4.2  2026-06-09  ★ Patch：4 項問題修正
//          1. 賓客 NavBar 移除「後台 🔒」按鈕（SaaS 後台走帳號登入，不在賓客頁面露出）
//          2. 協作邀請連結已使用：當同一用戶再次點自己的連結，顯示「歡迎回來」引導頁
//             而非「已被使用」錯誤；若是不同用戶才顯示錯誤訊息並說明重新產生連結。
//          3. RSVP 提交：改用 arrayUnion 而非 runTransaction + set 整份 doc。
//             不再需要讀取整份文件，僅需 Firestore update 權限，解決
//             「Missing or insufficient permissions」問題（配合下方 Rules 說明）。
//             ⚠ 還需要更新 Firestore Security Rules — 見下方說明。
//          4. Presence（即時協作顯示）修正：
//             (a) 每 30 秒重新過濾 presenceList（避免 onSnapshot 無變動時 stale 項永不消失）
//             (b) 每次心跳順帶清除 Firestore 中的 stale presence docs（>90 秒無心跳）
//             → 離線用戶最多 90 秒後消失，而非可能永遠顯示。
//
// v6.4.1  2026-06-09  ★ Patch：修復賓客邀請連結卡在讀取中 + 按鈕位置
//          • 根因：WeddingApp 的 race condition：onAuthStateChanged(!u) 呼叫
//            setWeddingId(null) 把 URL 裡的 weddingId 清掉；同時資料載入 effect
//            依賴 [weddingId]，但 Firebase 尚未 ready 時 fbRef.current=null 導致
//            effect 提前返回，之後 weddingId 不再改變故不重跑 → spinner 永遠不結束。
//          • 修法：
//            1. onAuthStateChanged(!u) 移除 setWeddingId(null)（公開路由需保留 URL weddingId）
//            2. 新增 fbReady state，Firebase init 後 setFbReady(true)
//            3. 資料載入 effect 依賴改為 [weddingId, fbReady]，確保 Firebase ready 後重試
//          • InfoPage 賓客連結位置改善：從 header 右上移至 tabs 上方的獨立提示列，
//            更顯眼、更易找，與 StorageMeter 不再擠在一起。
//
// v6.4.0  2026-06-09  ★ Minor：4 大新功能
//          1. 建立向導 Step 2 主題預覽：選中主題卡顯示 ✓ 勾選徽章；
//             新增「預覽效果」按鈕，開啟全頁 WizardPreviewOverlay，
//             即時渲染邀請函頁面（新人名字、日期、場地 + 主題色 + 字體），
//             讓使用者在建立前就能看到實際效果。
//          2. 複製邀請函連結：資訊管理頁頭 + 名單頁頭均新增顯眼「複製邀請函連結」按鈕，
//             一鍵取得公開賓客連結（#/w/{id}），方便新人分享給賓客。
//          3. App 識別：document.title → '喜帖到排位一次搞定'；
//             inject 💐 emoji favicon（SVG data URI）。
//          4. 匿名登入（賓客免帳號存取）架構說明：
//             程式已支援 #/w/* 路由免登入 + signInAnonymously；
//             需在 Firebase Console → Authentication → 登入方式 → 啟用「匿名」供應商。
//          ⚠ AdminPage 新增 weddingId prop，需同步更新呼叫端（已含在本版）。
//
// v6.3.5  2026-06-09  ★ Patch：根治 Google 登入 window.opener 跨來源阻斷
//          • 根因（截圖確認）：popup 流程中 firebaseapp.com/__/auth/handler 嘗試
//            window.opener.postMessage() 回傳結果，但 firebaseapp.com ≠ vercel.app
//            → 跨來源跳轉後 window.opener 被瀏覽器清空 → 主視窗永遠收不到訊號。
//          • 解法（Firebase 官方 proxy 方案）：
//            1. authDomain 改為 wedding-saas-lac.vercel.app（本檔案）
//            2. 在 repo 根目錄新增 vercel.json，把 /__/auth/* 代理轉發給
//               https://wedding-saas-558d9.firebaseapp.com/__/auth/*
//            → popup 整個流程都在同來源（vercel.app）內完成，postMessage 不再跨來源。
//          ⚠ 此版本必須搭配 vercel.json 一起部署才能生效。
//            （僅改 authDomain 但沒加代理 → popup handler 404，登入依然失敗）
//
// v6.3.4  2026-06-09  ★ Patch：修復 SaaS chrome 頁面缺少 .wed 容器與浮窗主機
//          • 根因：.wed 容器與 <ConfirmDialogHost/> 原本只包在 #/w/{id} 婚禮後台那層。
//            登入頁／向導／Dashboard／帳戶中心／邀請頁全都在 .wed 之外渲染，導致：
//            (1) 按鈕拿到瀏覽器預設外框（tab 變方框、連結鈕外觀亂掉）
//            (2) ConfirmDialogHost 未掛載 → uiAlert/uiProUpgrade 退回原生 window.alert
//          • 解法：新增 <AppShell> 外殼元件（.wed + ConfirmDialogHost + applyTheme(null)
//            強制奶油主題，避免從深色主題婚禮返回時被殘留主題 CSS 染色），
//            包裹 LoginPage(×3)／WeddingSetupWizard／JoinInvitePage／DashboardPage／無權限頁。
//          • 帳戶中心「連結」Google 按鈕：進入 .wed 後外框消失，回復系統文字連結樣式。
//          • acctLinkGoogle：明確顯示 auth/unauthorized-domain 與錯誤碼，便於診斷 Google 連結問題。
//          ⚠ Google 登入／連結若仍失敗，極可能是 Firebase 主控台未授權網域：
//            Authentication → Settings → 授權網域 必須包含 wedding-saas-lac.vercel.app。
//
// v6.3.3  2026-06-09  ★ Patch：UI 風格一致性修正
//          • InfoPage Tab 導覽：gap 0→4、padding '10px 18px'→'8px 16px'、
//            letterSpacing .3→.5、加 marginBottom:-1（對齊 AccountCenterPage）
//          • 外觀 Tab 選擇卡片：主題/中文/英文字體卡片 borderRadius 4→3
//          • ConfirmDialogHost：改用 ...S.card（borderRadius:8→3），
//            boxShadow 由 '0 16px 56px rgba(0,0,0,.28)' 改為 '0 4px 24px rgba(0,0,0,.12)'
//          • 新增 uiProUpgrade(hint) 函式：帶品牌視覺的 Pro 升級浮窗
//            （✦ 標題、Cormorant Garamond、功能清單、系統調色盤）
//          • 全部 5 處 Pro 升級 uiAlert() 改用 uiProUpgrade()
//          • 設施編輯 / 分區編輯 行內 Modal：borderRadius 8→3、陰影統一、加系統邊框
//
// v6.3.2  2026-06-09  ★ Patch：修復 Google 登入無法註冊／登入
//          • 根因：signInWithRedirect 自 2024-06-24 起，在封鎖第三方 cookie 的瀏覽器
//            （Chrome 115+／Safari 16.1+／Firefox 109+）失效。本站部署於 Vercel，
//            app 網域 ≠ authDomain(firebaseapp.com)，跨網域 iframe 無法回傳登入狀態，
//            導致 Google 授權後被導回卻仍未登入。
//          • 解法（Firebase 官方建議 Option 2）：doGoogleLogin 改用 signInWithPopup 為主，
//            僅在 popup 真被擋（popup-blocked / 環境不支援）時才退回 signInWithRedirect。
//          • 帳戶中心「連結 Google」同步改用 linkWithPopup（+ redirect 後備）。
//          • 補齊錯誤碼中文對照：popup-blocked / unauthorized-domain /
//            operation-not-supported-in-environment / internal-error。
//          • 使用者自行關閉 popup（popup-closed-by-user）不再誤報錯誤。
//          ⚠ 部署後請確認 Firebase 主控台 Authentication → 授權網域 已加入
//            wedding-saas-lac.vercel.app（否則會出現「此網域未授權登入」）。
//
// v6.3.1  2026-06-08  ★ Patch：UX 修正（11 項）
//          • 問題1：Google signInWithRedirect 回來後 onAuthStateChanged 已自動處理
//          • 問題2：補齊所有 Firebase Auth 錯誤碼中文對照（含 invalid-credential）
//          • 問題3：LoginPage 加「記住帳號」勾選，localStorage 存 email
//          • 問題6：#/w/* 全面開放未登入訪問（賓客無需帳號直接看 RSVP/祝福牆）
//          •        Dashboard 婚禮卡片加「複製邀請連結」按鈕（🔗 邀請連結）
//          • 問題7：NavBar 右側整合為 ☰ 下拉選單（切換專案/帳戶中心/登出），移除「已同步」文字
//          • 問題9：全面改用 email 顯示（presence/操作日誌/協作者）；移除帳戶管理的顯示名稱欄位
//          •        帳戶管理 Tab 改為只顯示帳號資訊 + 刪除帳戶
//          • 問題11：InfoPage 移除「帳號安全」Tab（密碼修改統一在帳戶中心）
//          • Bug：修正 presence 寫入 uid:undefined 問題（確認 user.uid 有值才執行）
//          • 角色權限系統：Admin / Editor / Viewer 三層權限
//          • 邀請協作者：產生 7 天有效連結，受邀者點連結登入即加入
//          • 操作日誌：記錄誰、何時、做了什麼（最近 50 筆）
//          • 實時協作指示：NavBar 顯示「○○○ 正在編輯排位頁」（presence，25s 心跳）
//          • Viewer 唯讀橫幅提示，Editor 無法存取資訊管理
//          • 新增 JoinInvitePage、CollabTab 元件
//          • 更新 Firestore Security Rules（invites / activityLog / presence）
//
// v6.2.0  2026-06-08  ★ Minor：帳戶中心 + Dashboard Tab 架構（階段一）
//          • Dashboard 頂部 Tab：我的婚禮 ｜ 帳戶中心
//          • 帳戶中心：方案與訂閱、安全設定（改密碼/連結Google）、帳戶管理（改名/刪帳戶）
//          • AccountCenterPage 元件新增
//          • #/dashboard/account 路由
//
// v6.1.0  2026-06-08  ★ Minor：Freemium 限制 + 刪除婚禮
//          • 免費版：最多 2 個婚禮專案、排位最多 5 桌
//          • 婚禮卡片加刪除按鈕（二次確認，刪除 Firestore + users.weddingIds）
//          • 新增婚禮達上限時鎖定並顯示升級提示
//          • 向導 Step 1 加免費版限制說明
//          • SeatingPage 第 6 桌觸發升級提示（isPro prop）
//
// v6.0.1  2026-06-08  ★ Patch：修正多項初版 bug
//          • Google 登入改為 signInWithRedirect（解決 popup-blocked）
//          • getRedirectResult() 處理 redirect 回來的登入狀態
//          • DEFAULT_PHOTO_B64 換成 SVG 引導圖（「上傳您的婚紗照片」）
//          • NavBar 加「← 專案頁」按鈕（回 dashboard 不登出）
//          • 外觀 Tab draft 切換時重新同步最新 cfg（修正顯示舊名字問題）
//          • reCAPTCHA site key 換為 wedding-saas 專案的新 key
//          • 向導完成後立刻更新本地 weddings state，避免重觸向導
//
// v6.0.0  2026-06-07  ★ Major：SaaS 多租戶架構（基於 v5.6.1 完整功能）
//          • 全新獨立 Firebase 專案（wedding-saas-558d9）
//          • Firebase Auth：Email/Password + Google OAuth
//          • 多租戶 Firestore：/weddings/{weddingId}/...
//          • Hash 路由：#/login · #/setup · #/dashboard · #/w/{id}/...
//          • 婚禮創建向導（3步）
//          • 完整保留 v5.6.1：分區zones、場地規模、雙鎖、環境設施、輪播箭頭、智慧裁切匯出等
//
// ============================================================
// WEDDING SYSTEM  v5.6.1
// 陳馨諺 & 蘇珮語 婚禮管理系統
// 最後更新：2026-06-07
// 版本規則：x.x.1=Patch（小修） · x.1=Minor（功能/大修） · x.0=Major（大改版）
// v5.6.1  2026-06-07  ★ Patch：服務生帶位清單移除無意義的「桌號」亂碼欄（內部 ID），只保留「桌名」（第 X 桌）
// v5.6    2026-06-07  ★ Minor：分區與設施體驗修正（6 項）
//                        ① 分區可編輯：名稱／顏色／鎖定（編輯浮窗）；名單分區標籤同步套用該顏色；鎖定後不可拖移/縮放
//                        ② 桌次設定的「鎖定此桌／設為主桌」改為按「儲存」才套用（不再即時生效）
//                        ③ 修正分區框蓋住環境設施導致點不到：分區框體改 pointer-through，僅標題列/縮放把手可互動，設施 zIndex 提升
//                        ④ 分區名稱前移除符號
//                        ⑤ 環境設施浮窗底部按鈕大小／排序與其他浮窗一致（刪除靠左、取消+儲存靠右、加上分隔線）
//                        ⑥ 匯出名單（完整／素食／特殊需求／帶位清單）的桌號旁新增「分區」欄
// v5.5    2026-06-06  ★ Minor：合併兩條開發支線（v5.3.1 排位升級 ＋ v5.4.1 設施/輪播），統一分區實作
//                        • 併入輪播左右箭頭（點擊重置計時器，dots 保留）
//                        • 併入「宴會環境設施」：＋環境設施鈕、建立/編輯浮窗（名稱＋28 符號＋10 色＋鎖定）、點擊圖塊可編輯、舊 type 標記自動遷移為 emoji
//                        • 分區統一：保留 v5.3.1 的 zones（可命名／拖移／縮放／每區一頁 A4）；舊「areas」資料自動併入 zones（不遺失）
//                        • 名單「桌號」欄在有分區時顯示所屬分區標籤
//                        • 保留 v5.3.1 全部：場地規模預設、雙鎖（位置/座位）、Pointer 改派、座位 × 分離、智慧裁切匯出
// v5.4.1  2026-06-06  ★（支線）標記升級為環境設施；修 addArea/addMarker 傳物件給 uiPrompt 的白畫面
// v5.4    2026-06-06  ★（支線）輪播箭頭、分區(areas)、標記類型
// v5.3.1  2026-06-01  ★ Patch：修正白畫面致命錯誤——DEFAULT_CANVAS_W/H 在 DEFAULT_CONFIG 後才宣告 → TDZ crash；
//                        移至 DEFAULT_CONFIG 之前。另：座位鎖時「重排（清空）」鈕禁用
//                        ① 場地規模可選（小/中/大/超大畫布）；新桌欄數隨畫布寬度自動排列
//                        ② 分區（多場地）：可命名、可拖移/縮放的分區框；匯出支援「每區一頁 A4」+「整體一頁」智慧裁切（自動直/橫式）
//                        ③ 鎖定拆分為兩種獨立鎖：📌 位置鎖（桌不能移、座位照排）、🔒 座位鎖（已排的人凍結，空位仍可加新人，桌可移）
//                           － 舊 locked:true 自動遷移為兩者皆鎖；hover 桌子浮出 ✕ 快速解鎖；編輯視窗內兩開關
//                        ④ 座位互動修復：點座位不再誤刪；改派改用 Pointer Events（桌機＋手機一致，elementFromPoint 判落點）；
//                           移除改為座位角落獨立 × 鈕（hover 顯示）；拖到桌外＝移回待安排
// v5.2.2  2026-05-31  ★ Patch：修正 v5.2 引入的回歸——桌子在手機上拖不動
//                        • 根因：tapSelected 從物件/null 改為陣列後，空陣列 [] 是 truthy
//                        • startDragTable guard 與 RoundTable 的 tapPending prop 都誤判為「已選人」→ 永遠擋住拖曳
//                        • 改為檢查 tapSelected.length > 0；新增手機模式拖曳回歸測試
// v5.2.1  2026-05-31  ★ Patch：多選 Bar 只在有選中時顯示、顯示人數總和、成功提示顯示人數、取消鈕清空陣列；
//                        多選 Bar+成功提示改 position:fixed（固定視窗頂端）；全部 input 加 autoComplete=off（擋 Chrome 密碼誤觸）
// v5.2  2026-05-31  ★ Minor：待安排清單改「多選模式」：可同時選 N 人（最多 10 人），點任一桌位全數放入。新增座位驗證：座位不足時警告、不允許放入。
// v5.1.9  2026-05-31  ★ 修正致命錯誤：startDragTable 誤用未定義的 tapPending（應為 tapSelected）→ 拖曳崩潰。同時：直接改 DOM 零重繪、setPointerCapture 鎖定觸控、移除 debug 面板
// v5.1.8  2026-05-30  ★ 修復「window.firebase.storage is not a function」：Firebase 腳本改為 app 先載再並行載功能模組（解決載入順序競態）＋初始化自動重試＋失敗清快取
// v5.3.6  2026-05-30  ★ 桌子/標記拖曳改用 Pointer Events（取代 mouse+touch），手機 Android/iOS 皆可拖移
// v5.3.5  2026-05-30  ★ 手機排位：桌子可觸控拖曳移位（touch 事件鏡像桌機 mouse 邏輯）
// v5.1.4  2026-05-30  ★ 手機排位：隱藏與底部抽屜重疊的「待安排名單」固定按鈕
// v5.1.3  2026-05-30  ★ 手機排位 A方案：底部抽屜+點選分配（點賓客→點桌放入，不需拖曳）；桌機完全不影響
// v5.1.2  2026-05-30  ★ LINE 分享預設範例文字；排位收折鈕手機改 fixed（不再被捲動藏到畫面外）
//                        謝謝頁圖片文案；新增可自訂 LINE 分享文字欄位；手機版 RWD（名單橫排不換行、側欄手機預設折收、
//                        排位觸控拖曳支援、資訊管理頁籤不換行）
// v5.1.1  2026-05-30  ★ 同桌/避桌偵測修復（effective pairs）；深色文字；外觀預覽改版；謝謝頁圖片；自訂浮窗；LINE純文字分享；關係順序；婉拒顯示；手機 top bar
// v5.1    2026-05-29  ★（原 v4.12）同桌管理、衝突徽章置中、多攜伴全座位×、排位不可誤刪、外觀預覽、字體全系統、祝福牆隨機等
// v5.0    2026-05-29  ★ 字體控制（中文5選+英文5選）；輸入框架構修正
// v4.9.1  2026-05-29  ★ 後續修復（拖曳治本+主題邊線）：
//                        • 拖桌/拖標記期間只更新本地狀態、放開才送一筆寫入（消除回彈/閃爍與「其他裝置已修改」誤報）
//                        • 雙保險：lastSyncedRef 改單調遞增、自家 echo 不覆寫本地
//                        • 六主題邊線真正接到位（透過 CSS 變數套到側邊欄/標題欄/主畫布/底紋）
// v4.9    2026-05-29  ★ 修正避桌/同桌重整後消失（根因：avoidPairs 為巢狀陣列，Firestore 拒絕寫入→整筆 set 失敗；改 pack 成物件陣列寫入、讀回還原）；排位姓名改取姓名後兩字不抓暱稱；衝突資訊點擊開避桌管理、同桌未滿足 hover 顯示明細；拖桌放開不再誤觸桌次設定；RSVP 祝福勾選框預設打勾＝公開
// v4.8.1  2026-05-28  修正 RSVP 祝福勾選框：改為永遠顯示（移除依內容條件渲染）；submitRSVP 補強：無祝福內容時強制 publicBlessing=false
// v4.8    2026-05-28  ★ 資料保護6層：A1寫入前異常偵測(DATA_SHRINK)、A2 localStorage本地鏡像(5份歷史)、A4破壞性操作前強制備份、A5每日備份90天保留、A6 PITR說明；B照片來源統一(StorageMeter改讀主文件+清理孤兒)；C2 GuestModal加publicBlessing；謝謝頁圖片上傳進度提示
// v4.7    2026-05-27  ★ 重大更新：資料保護(Transaction版本鎖+自動備份)、備份還原UI、祝福牆瀑布流頁面、名單祝福查看Modal、NavBar/Sidebar邊線強化、Footer取代邏輯
// v4.6.3  2026-05-27  排位畫布修復：圓桌與舞台/入口加 data-tp、邊框改半透明黑色細線(任何主題下可見)、暗黑遮罩弱化(.45)
// v4.6.2  2026-05-27  ★ 主題系統完整重做：data-tp 排除預覽按鈕、Hero 漸層動態、新增 12 色全面覆蓋(hover/軟邊框/Btn dark/卡片白/排位畫布等)
// v4.6.1  2026-05-27  修正 NavBar 主題未變(rgba匹配)、新增避桌衝突詳情 Modal(hover/click)
// v4.6    2026-05-27  ★ 主題全面覆蓋(attribute selector)、頁尾文字真實渲染、避桌雙向同步(addPair自動寫入guest.avoidTable)
// v4.5.2  2026-05-27  設定頁面標題為「電子喜帖及排位規劃小工具」
// v4.5.1  2026-05-27  修正 Hook 順序錯誤 (#310)
// v4.5    2026-05-27  ★ Footer文字管理、外觀主題切換(6種)、避桌Bug修正、同桌未滿足提示
// v4.4.1  2026-05-26  修正 reCAPTCHA Site Key
// v4.4    2026-05-26  ★ 中等級防護：表單驗證加強（姓名格式、禁用詞）、速率限制（localStorage 5min 3次）、Session token、reCAPTCHA v3、時間戳檢查
// v4.3.2  2026-05-26  婉拒按鈕文本改為分行顯示：「無法參與／我想留下祝福」、CSS white-space 改為 pre-line
// v4.3.1  2026-05-26  修改邀請函出席按鈕文本：「確認出席」→「我一定到！！」、「婉拒」→「無法參與 但我想留下祝福」、調整按鈕排版支援換行
// v4.3    2026-05-26  ★ 新增「關係分類管理」：資訊管理新增 👥 頁籤，支援自訂 RSVP 關係選項（標籤、顏色、子分類）、新增刪除分類、全域動態化
// v4.2.2  2026-05-26  ★ 修正 onToggleLock is not defined：RoundTable 缺少 prop 宣告
// v4.2.1  2026-05-26  鎖定桌改用透明遮罩層 (zIndex:10) 確保點擊不被座位遮蓋
// v4.2    2026-05-26  鎖定桌整個圓形可點擊解鎖（解決按鈕被遮蓋問題）
// v4.1    2026-05-26  修正主文件超 1MB（persist 剝除 config base64）、拖把手改單符號
// v4.0    2026-05-25  ★ 重大升級：圖片改用 Firebase Cloud Storage（單張 20MB、免費 5GB），鎖定桌可點擊解鎖
// v3.6    2026-05-25  刪除全部照片鈕、鎖桌修正、避桌管理同步、Lightbox 全屏縮放
// v3.5.1  2026-05-25  圖片上傳上限調為 800KB
// v3.5    2026-05-25  PhotoCard 拖把手 + 拖動聚焦線、無壓縮上傳、ImageLightbox、名單匯出下拉選單、表格全部左對齊
// v3.4.1  2026-05-25  修正 React Hook 順序錯誤 (#310)
// v3.4    2026-05-25  照片改子集合避開 1MB 限制、自動壓縮、拖拉排序、聚焦調整、LINE 分享修正、容量顯示
// v3.3    2026-05-25  刪除鈕改為 hover 顯示、分享按鈕改 button+window.open、折收移至左下角圓形按鈕
// v3.2    2026-05-25  刪除鈕跑版修正、側邊欄折收按鈕、版本紀錄文字、底部圖片、分享按鈕統一
// v3.1    2026-05-25  字體更新、座位顯示修正、LINE 分享重寫、謝謝頁面圖片上傳
// v3.0    2026-05-24  完整重建：RSVP / 名單 / 排位 / 資訊管理 / Firebase 同步
// ============================================================
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// ============================================================
// CONSTANTS & DEFAULTS
// ============================================================
// ============================================================
// FIREBASE CONFIG — 商業版獨立專案 wedding-saas-558d9
// ============================================================
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCNIeg9Cz37CBCPL5BhVsosIw6OSp4v6Sk",
  authDomain: "wedding-saas-lac.vercel.app",   // v6.3.5：改為 Vercel 網域，搭配 vercel.json 代理修復 Google 登入
  projectId: "wedding-saas-558d9",
  storageBucket: "wedding-saas-558d9.firebasestorage.app",
  messagingSenderId: "586772571298",
  appId: "1:586772571298:web:fd3ebb906d7979af0323fb"
};

// ============================================================
// MULTI-TENANT FIRESTORE PATH HELPERS
// 所有資料讀寫透過這些 helper，確保路徑含 weddingId
// ============================================================
const weddingDoc    = (db, wid) => db.collection('weddings').doc(wid);
const mainDocRef    = (db, wid) => weddingDoc(db, wid).collection('data').doc('main');
const photosColRef  = (db, wid) => weddingDoc(db, wid).collection('photos');
const backupsColRef = (db, wid) => weddingDoc(db, wid).collection('backups');
const activityColRef = (db, wid) => weddingDoc(db, wid).collection('activityLog');
const presenceColRef = (db, wid) => weddingDoc(db, wid).collection('presence');
// v6.9.0 平台定價設定（全平台共用單一文件）
const pricingDocRef = (db) => db.collection('config').doc('pricing');
// v6.10.0 優惠碼集合（每個優惠碼一份文件，doc id = 大寫優惠碼）
const couponsColRef = (db) => db.collection('coupons');
// 預設方案（config/pricing 不存在時的 fallback；後台可覆寫）
const DEFAULT_PLANS = [
  { id:'monthly', name:'月費方案', originalPrice:299, price:199,  period:'month',  bonusMonths:0, badge:'限時優惠', enabled:true, sortOrder:1, note:'每月自動續訂' },
  { id:'half',    name:'半年方案', originalPrice:0,   price:1099, period:'6month', bonusMonths:1, badge:'最划算',   enabled:true, sortOrder:2, note:'付 6 個月，多送 1 個月' },
];
const PERIOD_LABELS = { month:'月', quarter:'季', '6month':'半年', year:'年' };
const PERIOD_MONTHS = { month:1, quarter:3, '6month':6, year:12 };
const inviteDocRef   = (db, token) => db.collection('invites').doc(token);

// ============================================================
// 協作角色權限（admin / editor / viewer）
// ============================================================
const ROLE_PERMS = {
  admin:  { info:true,  editGuests:true,  editSeating:true,  invite:true,  deleteWedding:true,  viewLog:true,  manageCollab:true },
  editor: { info:false, editGuests:true,  editSeating:true,  invite:false, deleteWedding:false, viewLog:true,  manageCollab:false },
  viewer: { info:false, editGuests:false, editSeating:false, invite:false, deleteWedding:false, viewLog:false, manageCollab:false },
};
const ROLE_LABEL = { admin:'管理員', editor:'編輯者', viewer:'檢視者' };
const ROLE_DESC  = { admin:'全部權限：資訊管理、名單、排位、邀請協作', editor:'可編輯名單與排位', viewer:'唯讀，不可編輯' };

// 取得某 uid 在某婚禮的角色（owner 視為 admin）
function getRole(wedding, uid) {
  if (!wedding || !uid) return null;
  if (wedding.ownerId === uid) return 'admin';
  const c = wedding.collaborators && wedding.collaborators[uid];
  return c ? c.role : null;
}
function hasPerm(role, perm) {
  return !!(role && ROLE_PERMS[role] && ROLE_PERMS[role][perm]);
}

const FONT_STACK = "'Noto Sans TC','LiHei Pro','黑體-繁',sans-serif";
const SANS_STACK = "'Noto Sans TC','LiHei Pro','黑體-繁',sans-serif";

// v5.3 排位畫布預設尺寸（需在 DEFAULT_CONFIG 之前宣告）
const DEFAULT_CANVAS_W = 1600, DEFAULT_CANVAS_H = 1200;

const DEFAULT_CONFIG = {
  groomName: "", brideName: "",
  weddingDate: "",
  weddingTime: "入席 18:00　·　開席 18:30",
  venue: "", address: "", phone: "",
  logoType: "text",
  logoText: "",
  logoDataUrl: "",
  thankYouTitle: "感謝您的回覆",
  thankYouMsg: "我們已收到您的訊息\n期待在婚禮上與您相見",
  thankYouExtra: "",
  lineShareText: "",
  transportInfo: "",
  inviteInfoHtml: "",
  customGroups: null,
  footerText: "",
  theme: "cream",
  fontCJK:   "noto-serif",
  fontLatin: "cormorant",
  canvasW: DEFAULT_CANVAS_W,   // v5.3 排位畫布尺寸（場地規模）
  canvasH: DEFAULT_CANVAS_H
};

// ============================================================
// THEMES
// ============================================================
const THEMES = {
  cream:    { name:"典雅奶油", pageBg:"#F9F5EF", cardBg:"#FFFEFA", primary:"#B5895F", primaryHover:"#9F754C", soft:"#EFE3D0", border:"#E5DDD0", borderSoft:"#E5D5BD", text:"#3A332B", subText:"#6B6259", mutedText:"#9A8F82", heroOverlayTop:"rgba(58,51,43,.08)", heroOverlayMid:"rgba(58,51,43,.42)", heroOverlayBot:"rgba(58,51,43,.72)", modalOverlay:"rgba(58,51,43,.45)", dark:false,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='12' height='12' fill='none' stroke='%23C9A87A' stroke-width='0.6' opacity='0.5'/%3E%3C/svg%3E\")" },
  oriental: { name:"典雅東方", pageBg:"#FAF4EB", cardBg:"#FFF9F0", primary:"#8B1A1A", primaryHover:"#6E1414", soft:"#F5E4CC", border:"#D4B896", borderSoft:"#DCC4A0", text:"#2C1A0E", subText:"#7A5C3C", mutedText:"#A87C54", heroOverlayTop:"rgba(44,26,14,.06)", heroOverlayMid:"rgba(44,26,14,.42)", heroOverlayBot:"rgba(44,26,14,.72)", modalOverlay:"rgba(44,26,14,.55)", dark:false,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='3' width='10' height='10' fill='none' stroke='%238B1A1A' stroke-width='0.7' opacity='0.4'/%3E%3Crect x='6' y='6' width='4' height='4' fill='none' stroke='%238B1A1A' stroke-width='0.7' opacity='0.4'/%3E%3C/svg%3E\")" },
  rose:     { name:"玫瑰金粉", pageBg:"#FDF6F8", cardBg:"#FFFBFC", primary:"#BF7090", primaryHover:"#A85A7C", soft:"#F5DCE2", border:"#EECDD6", borderSoft:"#F0D4DC", text:"#3A2B2E", subText:"#7B5A62", mutedText:"#A08090", heroOverlayTop:"rgba(60,30,40,.10)", heroOverlayMid:"rgba(60,30,40,.45)", heroOverlayBot:"rgba(60,30,40,.75)", modalOverlay:"rgba(60,30,40,.50)", dark:false,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7' cy='7' r='2' fill='%23BF7090' opacity='0.25'/%3E%3Ccircle cx='0' cy='0' r='1.2' fill='%23BF7090' opacity='0.18'/%3E%3Ccircle cx='14' cy='0' r='1.2' fill='%23BF7090' opacity='0.18'/%3E%3Ccircle cx='0' cy='14' r='1.2' fill='%23BF7090' opacity='0.18'/%3E%3Ccircle cx='14' cy='14' r='1.2' fill='%23BF7090' opacity='0.18'/%3E%3C/svg%3E\")" },
  handwritten:{ name:"手寫溫柔", pageBg:"#FFF5F7", cardBg:"#FFFCFD", primary:"#C07090", primaryHover:"#A85A7A", soft:"#FAE0E8", border:"#F0C8D5", borderSoft:"#EDD0DA", text:"#3A2030", subText:"#7A5060", mutedText:"#B090A0", heroOverlayTop:"rgba(60,32,48,.06)", heroOverlayMid:"rgba(60,32,48,.40)", heroOverlayBot:"rgba(60,32,48,.70)", modalOverlay:"rgba(60,32,48,.55)", dark:false,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='20' height='10' viewBox='0 0 20 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q5 0 10 5 Q15 10 20 5' fill='none' stroke='%23C07090' stroke-width='0.8' opacity='0.35'/%3E%3C/svg%3E\")" },
  lavender: { name:"薰衣草紫", pageBg:"#F8F6FD", cardBg:"#FDFBFF", primary:"#8B6EC4", primaryHover:"#7158AD", soft:"#EAE4F6", border:"#D8CEF0", borderSoft:"#DED4F0", text:"#2E2A3A", subText:"#6B6380", mutedText:"#9A94B0", heroOverlayTop:"rgba(40,35,60,.10)", heroOverlayMid:"rgba(40,35,60,.45)", heroOverlayBot:"rgba(40,35,60,.75)", modalOverlay:"rgba(40,35,60,.50)", dark:false,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 0 L12 6 L6 12 L0 6 Z' fill='none' stroke='%238B6EC4' stroke-width='0.7' opacity='0.35'/%3E%3C/svg%3E\")" },
  ocean:    { name:"海洋湛藍", pageBg:"#F4F7FC", cardBg:"#F9FBFE", primary:"#3A60A8", primaryHover:"#284680", soft:"#DCE4F2", border:"#C8D5EB", borderSoft:"#D5DDED", text:"#1A2640", subText:"#3A4F6A", mutedText:"#7A90B0", heroOverlayTop:"rgba(20,35,70,.10)", heroOverlayMid:"rgba(20,35,70,.45)", heroOverlayBot:"rgba(20,35,70,.75)", modalOverlay:"rgba(20,35,70,.50)", dark:false,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='24' height='8' viewBox='0 0 24 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 4 Q6 0 12 4 Q18 8 24 4' fill='none' stroke='%233A60A8' stroke-width='0.9' opacity='0.3'/%3E%3Cpath d='M0 8 Q6 4 12 8 Q18 12 24 8' fill='none' stroke='%233A60A8' stroke-width='0.9' opacity='0.2'/%3E%3C/svg%3E\")" },
  forest:   { name:"森林深綠", pageBg:"#F5F8F5", cardBg:"#FAFCFA", primary:"#4A7C59", primaryHover:"#36633F", soft:"#D8EDE0", border:"#C5DDD0", borderSoft:"#D0DDCC", text:"#1E3028", subText:"#4A6255", mutedText:"#7A9A88", heroOverlayTop:"rgba(20,45,28,.10)", heroOverlayMid:"rgba(20,45,28,.45)", heroOverlayBot:"rgba(20,45,28,.75)", modalOverlay:"rgba(20,45,28,.50)", dark:false,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 2 L14 8 L8 14 M8 2 L2 8 L8 14' fill='none' stroke='%234A7C59' stroke-width='0.7' opacity='0.3'/%3E%3C/svg%3E\")" },
  botanical:{ name:"自然植物", pageBg:"#F4F7F0", cardBg:"#FAFCF7", primary:"#4A6E3F", primaryHover:"#3A5A30", soft:"#D4E8CA", border:"#C0D4B4", borderSoft:"#CCD8C0", text:"#1E2E1A", subText:"#4A6040", mutedText:"#7A9070", heroOverlayTop:"rgba(30,46,26,.08)", heroOverlayMid:"rgba(30,46,26,.42)", heroOverlayBot:"rgba(30,46,26,.72)", modalOverlay:"rgba(30,46,26,.50)", dark:false,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 2 Q12 9 9 16 M9 2 Q6 9 9 16' fill='none' stroke='%234A6E3F' stroke-width='0.8' opacity='0.32'/%3E%3Ccircle cx='9' cy='9' r='1.5' fill='%234A6E3F' opacity='0.2'/%3E%3C/svg%3E\")" },
  modern:   { name:"現代簡約", pageBg:"#F1F1F3", cardBg:"#FFFFFF", primary:"#1A1A1A", primaryHover:"#333333", soft:"#EBEBEB", border:"#D4D4D4", borderSoft:"#E0E0E0", text:"#0D0D0D", subText:"#555555", mutedText:"#888888", heroOverlayTop:"rgba(0,0,0,.04)", heroOverlayMid:"rgba(0,0,0,.40)", heroOverlayBot:"rgba(0,0,0,.70)", modalOverlay:"rgba(0,0,0,.60)", dark:false,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='5' x2='10' y2='5' stroke='%231A1A1A' stroke-width='0.5' opacity='0.15'/%3E%3Cline x1='5' y1='0' x2='5' y2='10' stroke='%231A1A1A' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E\")" },
  'dark-luxury':{ name:"夢幻暗黑奢", pageBg:"#14110E", cardBg:"#1E1A15", primary:"#C9A84C", primaryHover:"#DDB95C", soft:"#332D20", border:"#3A3020", borderSoft:"#4A3E2A", text:"#EDE4D3", subText:"#B8A888", mutedText:"#8A7A60", heroOverlayTop:"rgba(0,0,0,.02)", heroOverlayMid:"rgba(0,0,0,.20)", heroOverlayBot:"rgba(0,0,0,.50)", modalOverlay:"rgba(0,0,0,.75)", dark:true,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 0 L8.2 4.8 L13 5.5 L9.5 8.9 L10.5 14 L7 11.5 L3.5 14 L4.5 8.9 L1 5.5 L5.8 4.8 Z' fill='none' stroke='%23C9A84C' stroke-width='0.7' opacity='0.4'/%3E%3C/svg%3E\")" },
  dark:     { name:"夜幕暗黑", pageBg:"#1A1A20", cardBg:"#24242C", primary:"#D4AA70", primaryHover:"#E5BC80", soft:"#3A3828", border:"#3A3A48", borderSoft:"#48484F", text:"#F0EDE8", subText:"#CDC6BE", mutedText:"#A89E92", heroOverlayTop:"rgba(0,0,0,.02)", heroOverlayMid:"rgba(0,0,0,.18)", heroOverlayBot:"rgba(0,0,0,.45)", modalOverlay:"rgba(0,0,0,.70)", dark:true,
    pattern:"url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='0.8' fill='%23D4AA70' opacity='0.5'/%3E%3Ccircle cx='0' cy='0' r='0.5' fill='%23D4AA70' opacity='0.3'/%3E%3Ccircle cx='16' cy='0' r='0.5' fill='%23D4AA70' opacity='0.3'/%3E%3Ccircle cx='0' cy='16' r='0.5' fill='%23D4AA70' opacity='0.3'/%3E%3Ccircle cx='16' cy='16' r='0.5' fill='%23D4AA70' opacity='0.3'/%3E%3C/svg%3E\")" },
};

// ============================================================
// THEME FLOWERS — 主題花卉 + 花語（v6.16.0）
// 主標用花名、舊主題名當小字。花語為可編輯字串（日後直接改此處）。
// 圖片放 Firebase Storage themes/{key}.webp（公開讀取），以 key 對應。
// dark（極簡黑）noFlower:true → 不套花，改用 seatright 字標 + 幾何符號。
// ============================================================
const THEME_FLOWERS = {
  cream:        { name:"梔子花", en:"Gardenia",           meaning:"永恆的愛・喜悅" },
  oriental:     { name:"山茶花", en:"Camellia",           meaning:"謙遜・堅貞的愛" },
  rose:         { name:"玫瑰",   en:"Rose",               meaning:"愛與感謝・優雅熱情" },
  handwritten:  { name:"櫻花",   en:"Cherry Blossom",     meaning:"純潔・浪漫" },
  lavender:     { name:"薰衣草", en:"Lavender",           meaning:"等待愛情・寧靜" },
  ocean:        { name:"繡球花", en:"Hydrangea",          meaning:"團圓・圓滿・感謝" },
  forest:       { name:"酢漿草", en:"Four-leaf Clover",   meaning:"幸運・真愛・希望" },
  botanical:    { name:"鈴蘭",   en:"Lily of the Valley", meaning:"幸福再臨・純潔" },
  modern:       { name:"海芋",   en:"Calla Lily",         meaning:"高貴・聖潔" },
  'dark-luxury':{ name:"金合歡", en:"Mimosa",             meaning:"我的心意藏在這金色裡" },
  dark:         { name:"極簡黑", en:"Minimal Noir",       meaning:"純粹・俐落・不靠裝飾", noFlower:true },
};
const THEME_FLOWER_BASE = "https://firebasestorage.googleapis.com/v0/b/wedding-saas-558d9.firebasestorage.app/o/themes%2F";
function flowerOf(themeKey){ return THEME_FLOWERS[themeKey] || THEME_FLOWERS.cream; }
function flowerImg(themeKey){
  const f = THEME_FLOWERS[themeKey];
  return (f && !f.noFlower) ? (THEME_FLOWER_BASE + themeKey + ".webp?alt=media") : null;
}

// === v6.17.0 主題花卉裝飾層 + 統一裝飾符（極簡黑 noFlower 不顯示）===
function guestDeco(themeKey){ const f=THEME_FLOWERS[themeKey]; return (f&&f.noFlower)?'':'❀'; }
function ThemeFloraBg({themeKey, topA}){
  const img=flowerImg(themeKey);
  if(!img) return null;                       // 極簡黑(noFlower)：不套花襯底
  const t=THEMES[themeKey]||THEMES.cream;
  const opA=t.dark?0.16:0.14, opB=t.dark?0.12:0.11;
  return (
    <div aria-hidden="true" style={{position:'absolute',inset:0,zIndex:-1,pointerEvents:'none',overflow:'hidden'}}>
      <img src={img} loading="lazy" alt="" data-flora="1" style={{position:'absolute',right:-58,top:topA||118,width:'min(42%,360px)',opacity:opA}} />
      <img src={img} loading="lazy" alt="" data-flora="1" style={{position:'absolute',left:-72,bottom:-30,width:'min(46%,360px)',opacity:opB,transform:'rotate(6deg)'}} />
    </div>
  );
}

function ThemeDivider({themeKey, mw, my}){
  const img = flowerImg(themeKey);
  const t = THEMES[themeKey] || THEMES.cream;
  const lc = t.borderSoft || t.border;
  const m = (my==null?28:my)+'px auto';
  if(!img){  // 極簡黑(noFlower)：整條細線，無中間圖
    return <div data-tp="1" aria-hidden="true" style={{height:1,background:lc,maxWidth:mw||520,margin:m}} />;
  }
  return (
    <div data-tp="1" aria-hidden="true" style={{display:'flex',alignItems:'center',gap:16,maxWidth:mw||520,margin:m,padding:'0 12px'}}>
      <div data-tp="1" style={{flex:1,height:1,background:lc}} />
      <img data-tp="1" src={img} loading="lazy" alt="" style={{width:46,height:46,objectFit:'contain',flex:'none',opacity:.95}} />
      <div data-tp="1" style={{flex:1,height:1,background:lc}} />
    </div>
  );
}

function getTheme(cfg) {
  return THEMES[cfg && cfg.theme] || THEMES.cream;
}

// ============================================================
// GUEST STYLE SYSTEM — 賓客端 + 主框架 NavBar 完整視覺語言
// gs 物件包含色彩（繼承 THEMES）+ 延伸風格屬性。
// navTabIcons：後台 5 個 tab 的主題專屬 emoji；navLogoFont：logo 字體。
// ============================================================
function getGuestStyle(themeKey) {
  const t = THEMES[themeKey] || THEMES.cream;
  const base = {
    radius:3, btnRadius:2, inputRadius:2,
    btnCase:'none', btnSpacing:.5, btnWeight:500,
    shadow:'0 2px 16px rgba(0,0,0,.06)',
    ornament:'✦', dividerChar:null, useIcon:false,
      pagePatternSize:'auto',
    labelFont:"'Cormorant Garamond',serif", labelCase:'uppercase', labelSpacing:6,
    headingFont:null,
    tabStyle:'underline',        // 'underline' | 'pill' | 'block'
    blessingRotate:true, blessingRadius:6,
    inputUnderline:false,
    blessingCardBgs:null, blessingCardText:null, blessingBorderColor:null,
    // NavBar 主框架
    navBg:'rgba(249,245,239,.94)', navBorder:t.border, navLogoFont:"'Cormorant Garamond',serif",
    navPattern:null,             // 主框架背景花紋（CSS background-image）
      pagePattern:"url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M0%2040%20L40%200'%20stroke='%23D4AA70'%20stroke-opacity='0.05'%20stroke-width='0.7'/%3E%3C/svg%3E\")",
    // tab 前綴 emoji（公開 2 + 後台 5）
    icons:{ rsvp:'💌', blessings:'💝', admin:'📋', seating:'🪑', info:'⚙️' },
  };
  const overrides = {
    modern: {
      pagePatternRepeat:'no-repeat',
      pagePatternSize:'auto',
      pagePattern:"linear-gradient(180deg,#FFFFFF 0%,#F9F9F9 100%)",
      blessingCardBgs:['#F7F7F7','#F2F2F2','#FAFAFA','#F0F0F0','#F5F5F5','#EFEFEF'],
      radius:0, btnRadius:0, inputRadius:0, btnCase:'uppercase', btnSpacing:3, btnWeight:400, shadow:'none',
      ornament:null, dividerChar:null, useIcon:true,
      labelFont:"'Lato','Noto Sans TC',sans-serif", labelCase:'uppercase', labelSpacing:8,
      headingFont:"'Lato','Noto Sans TC',sans-serif",
      tabStyle:'underline', blessingRotate:false, blessingRadius:0, inputUnderline:true,
      navLogoFont:"'Lato','Noto Sans TC',sans-serif",
      icons:{ rsvp:'', blessings:'', admin:'', seating:'', info:'' },  // 無 emoji，改用 SVG icon
    },
    oriental: {
      pagePatternSize:'240px 240px',
      pagePattern:"url(\"data:image/svg+xml,%3Csvg width='240' height='240' viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20transform='translate(60%2060)'%20fill='none'%20stroke='%23A6373B'%20stroke-opacity='0.5'%20stroke-width='1.4'%3E%3Ccircle%20cx='-5'%20cy='-3'%20r='9'/%3E%3Ccircle%20cx='5'%20cy='3'%20r='9'/%3E%3Crect%20x='-8'%20y='-6'%20width='6'%20height='6'%20rx='1'/%3E%3Crect%20x='2'%20y='0'%20width='6'%20height='6'%20rx='1'/%3E%3C/g%3E%3Cg%20transform='translate(180%2060)'%20fill='none'%20stroke='%23C09A7D'%20stroke-opacity='0.55'%20stroke-width='1.4'%3E%3Crect%20x='-5'%20y='-15'%20width='10'%20height='3.5'%20rx='1.5'/%3E%3Cellipse%20cx='0'%20cy='0'%20rx='11'%20ry='11.5'/%3E%3Cellipse%20cx='0'%20cy='0'%20rx='5.5'%20ry='11.5'/%3E%3Cpath%20d='M0%20-11.5%20v23'/%3E%3Crect%20x='-5'%20y='11.5'%20width='10'%20height='3.5'%20rx='1.5'/%3E%3Cpath%20d='M0%2015%20v4%20M-3.5%2015%20q-1.5%203.5%200%206%20M3.5%2015%20q1.5%203.5%200%206'%20stroke-linecap='round'/%3E%3C/g%3E%3Cg%20transform='translate(180%20180)'%20fill='none'%20stroke='%23A6373B'%20stroke-opacity='0.5'%20stroke-width='1.3'%3E%3Cpath%20d='M0%2012%20L-13%20-8%20A%2016%2016%200%200%201%2013%20-8%20Z'/%3E%3Cpath%20d='M0%2012%20L-7%20-10%20M0%2012%20L0%20-14%20M0%2012%20L7%20-10'/%3E%3Cpath%20d='M-10.5%20-9%20A%2013%2013%200%200%201%2010.5%20-9'/%3E%3Ccircle%20cx='0'%20cy='13.5'%20r='1.2'/%3E%3C/g%3E%3Cg%20transform='translate(60%20180)'%20fill='none'%20stroke='%23C09A7D'%20stroke-opacity='0.55'%20stroke-width='1.3'%3E%3Cpath%20d='M0%20-14%20L10%20-4%20L0%206%20L-10%20-4%20Z'/%3E%3Cpath%20d='M0%20-9%20L5%20-4%20L0%201%20L-5%20-4%20Z'/%3E%3Cpath%20d='M0%206%20q-2%204%200%208%20M0%206%20q2%204%200%208'%20stroke-linecap='round'/%3E%3Ccircle%20cx='0'%20cy='16'%20r='1.5'/%3E%3C/g%3E%3Cg%20transform='translate(120%20120)'%20fill='%23C09A7D'%20fill-opacity='0.35'%3E%3Ccircle%20cx='0'%20cy='-4'%20r='2'/%3E%3Ccircle%20cx='3.8'%20cy='-1.2'%20r='2'/%3E%3Ccircle%20cx='2.4'%20cy='3.2'%20r='2'/%3E%3Ccircle%20cx='-2.4'%20cy='3.2'%20r='2'/%3E%3Ccircle%20cx='-3.8'%20cy='-1.2'%20r='2'/%3E%3Ccircle%20cx='0'%20cy='0'%20r='1.3'%20fill-opacity='0.5'/%3E%3C/g%3E%3C/svg%3E\")",
      blessingCardBgs:['#FBEFE0','#F8E8D4','#FAEDDC','#F6E4CC','#FCF1E4','#F9EAD8'],
      radius:16, btnRadius:16, inputRadius:12, btnCase:'none', btnSpacing:4, btnWeight:600,
      shadow:'inset 0 0 0 1px rgba(139,26,26,.12),0 4px 16px rgba(139,26,26,.10)',
      ornament:'囍', dividerChar:'◈',
      labelFont:"'Noto Serif TC',serif", labelCase:'none', labelSpacing:3,
      headingFont:"'Noto Serif TC',serif",
      tabStyle:'block', blessingRotate:false, blessingRadius:16, blessingBorderColor:'rgba(212,184,150,.5)',
      navLogoFont:"'Noto Serif TC',serif",
      // 淡雅花紋（同心圓 + 斜線織紋，暗紅低透明度）
      navPattern:'radial-gradient(circle at 20% 50%, rgba(139,26,26,.04) 0%, transparent 8%), radial-gradient(circle at 80% 50%, rgba(139,26,26,.04) 0%, transparent 8%)',
      icons:{ rsvp:'🏮', blessings:'🧧', admin:'📜', seating:'🪑', info:'⚙️' },
    },
    botanical: {
      pagePatternSize:'auto',
      pagePattern:"url(\"data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20transform='rotate(-22%2040%2038)'%3E%3Cpath%20d='M40%2022c6%205%208%2012%200%2024-8-12-6-19%200-24z'%20fill='%234A6E3F'%20fill-opacity='0.05'/%3E%3Cpath%20d='M40%2025v18'%20stroke='%234A6E3F'%20stroke-opacity='0.06'%20stroke-width='0.8'/%3E%3C/g%3E%3Cg%20transform='rotate(30%20110%20108)'%3E%3Cpath%20d='M110%2092c5%204%207%2010%200%2020-7-10-5-16%200-20z'%20fill='%234A6E3F'%20fill-opacity='0.045'/%3E%3Cpath%20d='M110%2095v14'%20stroke='%234A6E3F'%20stroke-opacity='0.055'%20stroke-width='0.8'/%3E%3C/g%3E%3C/svg%3E\")",
      radius:8, btnRadius:8, inputRadius:6, btnCase:'none', btnSpacing:1, shadow:'0 4px 20px rgba(74,110,63,.10)',
      ornament:'🌿', dividerChar:'❀',
      labelFont:"'Cormorant Garamond',serif", labelCase:'uppercase', labelSpacing:5,
      headingFont:null,
      tabStyle:'pill', blessingRotate:true, blessingRadius:10,
      blessingCardBgs:['#F5FAF0','#EFF8EC','#F7FAF4','#F2F8EE','#F0F7EC','#EEF8E8'],
      navLogoFont:"'Cormorant Garamond',serif",
      icons:{ rsvp:'🌸', blessings:'🌷', admin:'🍃', seating:'🌿', info:'🪴' },
    },
    'dark-luxury': {
      pagePatternSize:'auto',
      pagePattern:"url(\"data:image/svg+xml,%3Csvg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M26%200%20L52%2026%20L26%2052%20L0%2026%20Z'%20stroke='%23C9A84C'%20stroke-opacity='0.09'%20fill='none'%20stroke-width='0.8'/%3E%3C/svg%3E\")",
      radius:2, btnRadius:2, inputRadius:2, btnCase:'uppercase', btnSpacing:4, btnWeight:300,
      shadow:'0 6px 28px rgba(201,168,76,.22)',
      ornament:'✦', dividerChar:'✦',
      labelFont:"'Cormorant Garamond',serif", labelCase:'uppercase', labelSpacing:7,
      headingFont:null,
      tabStyle:'underline', blessingRotate:false, blessingRadius:2,
      blessingCardBgs:['#201C17','#241F18','#1E1A14','#221E18','#261F14','#201B16'],
      blessingCardText:'#EDE4D3', blessingBorderColor:'rgba(201,168,76,.2)',
      navBg:'rgba(20,17,14,.92)', navLogoFont:"'Cormorant Garamond',serif",
      icons:{ rsvp:'✦', blessings:'❖', admin:'◆', seating:'◇', info:'✧' },
    },
    handwritten: {
      pagePatternSize:'auto',
      pagePattern:"url(\"data:image/svg+xml,%3Csvg width='100' height='32' viewBox='0 0 100 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M0%2028h100'%20stroke='%23C07090'%20stroke-opacity='0.065'%20stroke-width='0.8'/%3E%3C/svg%3E\")",
      blessingCardBgs:['#FFF0F4','#FCEAF0','#FEEEF2','#FAE6EE','#FFF3F6','#FDECF1'],
      radius:20, btnRadius:24, inputRadius:16, btnCase:'none', btnSpacing:1, btnWeight:400,
      shadow:'0 6px 24px rgba(192,112,144,.15)',
      ornament:'♡', dividerChar:'♡',
      labelFont:"'Caveat',cursive", labelCase:'none', labelSpacing:2,
      headingFont:"'LXGW WenKai TC',cursive",   // 中文手寫楷體（霞鶩文楷）
      tabStyle:'pill', blessingRotate:true, blessingRadius:16,
      navLogoFont:"'Caveat',cursive",
      icons:{ rsvp:'🌷', blessings:'💗', admin:'📝', seating:'🪑', info:'⚙️' },
    },
    // ── 既有 6 主題補上完整風格屬性 ──
    cream: {
      pagePattern:"url(\"data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='18' cy='18' r='1.2' fill='%23B5895F' fill-opacity='0.06'/%3E%3C/svg%3E\")",
      blessingCardBgs:['#FFF8EE','#FBF4E8','#FDF6EC','#FAF2E4','#FFF9F0','#FCF5EA'],
      radius:3, btnRadius:3, inputRadius:2, dividerChar:null, ornament:'✦',
      tabStyle:'underline', blessingRadius:6, blessingRotate:true,
      icons:{ rsvp:'💌', blessings:'💝', admin:'📋', seating:'🪑', info:'⚙️' },
    },
    rose: {
      pagePatternSize:'1000px 780px',
      pagePattern:"url(\"data:image/svg+xml,%3Csvg width='1000' height='780' viewBox='0 0 1000 780' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Ccircle%20cx='130'%20cy='110'%20r='52'%20fill='%23C9907F'%20fill-opacity='0.05'/%3E%3Ccircle%20cx='800'%20cy='90'%20r='14'%20fill='%23BF7090'%20fill-opacity='0.07'/%3E%3Ccircle%20cx='560'%20cy='250'%20r='30'%20fill='%23C9907F'%20fill-opacity='0.04'/%3E%3Ccircle%20cx='240'%20cy='420'%20r='9'%20fill='%23BF7090'%20fill-opacity='0.08'/%3E%3Ccircle%20cx='880'%20cy='460'%20r='70'%20fill='%23BF7090'%20fill-opacity='0.03'/%3E%3Ccircle%20cx='420'%20cy='580'%20r='18'%20fill='%23C9907F'%20fill-opacity='0.06'/%3E%3Ccircle%20cx='60'%20cy='640'%20r='24'%20fill='%23BF7090'%20fill-opacity='0.05'/%3E%3Ccircle%20cx='650'%20cy='700'%20r='7'%20fill='%23C9907F'%20fill-opacity='0.09'/%3E%3Ccircle%20cx='350'%20cy='80'%20r='12'%20fill='%23BF7090'%20fill-opacity='0.06'/%3E%3Ccircle%20cx='720'%20cy='540'%20r='38'%20fill='%23C9907F'%20fill-opacity='0.04'/%3E%3C/g%3E%3C/svg%3E\")",
      blessingCardBgs:['#FDF0F4','#FAE8EE','#FCEDF2','#F8E4EC','#FEF2F6','#FBEAF0'],
      radius:10, btnRadius:10, inputRadius:8, dividerChar:'❤', ornament:'❤',
      labelSpacing:5, tabStyle:'pill', blessingRadius:12, blessingRotate:true,
      shadow:'0 3px 18px rgba(191,112,144,.12)',
      icons:{ rsvp:'💗', blessings:'💞', admin:'📋', seating:'🪑', info:'⚙️' },
    },
    lavender: {
      pagePatternSize:'auto',
      pagePattern:"url(\"data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20transform='rotate(-18%2038%2038)'%3E%3Cg%20fill='%238B6EC4'%20fill-opacity='0.055'%3E%3Cellipse%20cx='38'%20cy='24'%20rx='2'%20ry='3.2'/%3E%3Cellipse%20cx='34'%20cy='30'%20rx='2'%20ry='3.2'/%3E%3Cellipse%20cx='41'%20cy='31'%20rx='2'%20ry='3.2'/%3E%3Cellipse%20cx='37'%20cy='37'%20rx='2'%20ry='3.2'/%3E%3C/g%3E%3Cpath%20d='M37%2040q1%207%203%2012'%20stroke='%238B6EC4'%20stroke-opacity='0.06'%20stroke-width='1'%20fill='none'/%3E%3C/g%3E%3Cg%20transform='rotate(24%20112%20105)'%3E%3Cg%20fill='%238B6EC4'%20fill-opacity='0.05'%3E%3Cellipse%20cx='112'%20cy='92'%20rx='1.8'%20ry='3'/%3E%3Cellipse%20cx='108'%20cy='98'%20rx='1.8'%20ry='3'/%3E%3Cellipse%20cx='115'%20cy='99'%20rx='1.8'%20ry='3'/%3E%3Cellipse%20cx='111'%20cy='105'%20rx='1.8'%20ry='3'/%3E%3C/g%3E%3Cpath%20d='M111%20108q1%206%203%2010'%20stroke='%238B6EC4'%20stroke-opacity='0.055'%20stroke-width='1'%20fill='none'/%3E%3C/g%3E%3C/svg%3E\")",
      blessingCardBgs:['#F5F0FC','#EFE8F8','#F3EDFA','#EBE4F6','#F7F2FD','#F1EAF9'],
      radius:8, btnRadius:8, inputRadius:6, dividerChar:'❧', ornament:'❧',
      labelSpacing:5, tabStyle:'pill', blessingRadius:10, blessingRotate:true,
      shadow:'0 3px 18px rgba(139,110,196,.12)',
      icons:{ rsvp:'💜', blessings:'🔮', admin:'📋', seating:'🪑', info:'⚙️' },
    },
    forest: {
      pagePatternSize:'auto',
      pagePattern:"url(\"data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20transform='rotate(-14%2042%2040)'%20stroke='%234A7C59'%20stroke-opacity='0.06'%20fill='none'%20stroke-width='1.2'%20stroke-linecap='round'%3E%3Cpath%20d='M42%2022v36M42%2030l-6-5M42%2030l6-5M42%2039l-7-5M42%2039l7-5M42%2048l-6-5M42%2048l6-5'/%3E%3C/g%3E%3Cg%20transform='rotate(20%20118%20112)'%20stroke='%234A7C59'%20stroke-opacity='0.05'%20fill='none'%20stroke-width='1.1'%20stroke-linecap='round'%3E%3Cpath%20d='M118%2096v30M118%20103l-5-4M118%20103l5-4M118%20111l-6-4M118%20111l6-4M118%20119l-5-4M118%20119l5-4'/%3E%3C/g%3E%3C/svg%3E\")",
      blessingCardBgs:['#EFF6F0','#E7F2EA','#EDF4EE','#E3EFE6','#F1F7F2','#E9F3EC'],
      radius:6, btnRadius:6, inputRadius:4, dividerChar:'❦', ornament:'❦',
      labelSpacing:5, tabStyle:'underline', blessingRadius:8, blessingRotate:true,
      shadow:'0 3px 16px rgba(74,124,89,.12)',
      icons:{ rsvp:'🌲', blessings:'🍀', admin:'📋', seating:'🪑', info:'⚙️' },
    },
    ocean: {
      pagePattern:"url(\"data:image/svg+xml,%3Csvg width='56' height='28' viewBox='0 0 56 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 14 q7 -5 14 0 t14 0 t14 0 t14 0' stroke='%233A60A8' stroke-opacity='0.06' fill='none' stroke-width='1.4'/%3E%3C/svg%3E\")",
      blessingCardBgs:['#EEF3FA','#E6EDF7','#ECF1F9','#E2EAF5','#F0F5FB','#E8EFF8'],
      radius:6, btnRadius:6, inputRadius:4, dividerChar:'≈', ornament:'⚓',
      labelSpacing:6, tabStyle:'underline', blessingRadius:8, blessingRotate:true,
      shadow:'0 3px 16px rgba(58,96,168,.12)',
      icons:{ rsvp:'🌊', blessings:'🐚', admin:'📋', seating:'🪑', info:'⚙️' },
    },
    dark: {
      radius:3, btnRadius:3, inputRadius:2, dividerChar:'·', ornament:'✦',
      labelSpacing:6, tabStyle:'underline', blessingRadius:4, blessingRotate:false,
      blessingCardBgs:['#26262E','#2A2A32','#222229','#28282F','#242430','#262630'],
      blessingCardText:'#F0EDE8', blessingBorderColor:'rgba(212,170,112,.18)',
      navBg:'rgba(26,26,32,.92)',
      icons:{ rsvp:'', blessings:'', admin:'', seating:'', info:'' },
    },
  };
  return { ...base, ...t, ...(overrides[themeKey] || {}) };
}

// 主題 → 推薦字體（點選主題時自動帶入；使用者再改字體則尊重其選擇）
const THEME_FONT_RECO = {
  cream:        { cjk:'noto-serif', latin:'cormorant' },
  oriental:     { cjk:'shippori',   latin:'eb-garamond' },
  rose:         { cjk:'noto-serif', latin:'playfair' },
  handwritten:  { cjk:'lxgw',       latin:'cormorant' },
  lavender:     { cjk:'zen-old',    latin:'playfair' },
  ocean:        { cjk:'noto-serif', latin:'eb-garamond' },
  forest:       { cjk:'zen-old',    latin:'cormorant' },
  botanical:    { cjk:'lxgw',       latin:'cormorant' },
  modern:       { cjk:'noto-sans',  latin:'lato' },
  'dark-luxury':{ cjk:'shippori',   latin:'playfair' },
  dark:         { cjk:'noto-serif', latin:'cormorant' },
};

// 賓客端 SVG icon（現代簡約用，取代 emoji）
const NAV_ICONS = {
  rsvp:     'M3 5h18v14H3zM3 5l9 7 9-7',                                  // envelope
  blessings:'M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z',  // heart
  admin:    'M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01',    // list
  seating:  'M6 19v-3m12 3v-3M6 16h12M6 16v-5a6 6 0 0112 0v5',            // chair/table
  info:     'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6', // sliders/settings
};
function NavIcon({ name, color, size=14 }) {
  const d = NAV_ICONS[name];
  if(!d) return null;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    style={{flexShrink:0,verticalAlign:'middle'}}><path d={d}/></svg>;
}

// 夜幕暗黑 M5：拱窗月光 — 拱窗線框 + 月光光暈（獨立 overlay，避免 background 多圖層衝突）
function NightArch({ top=0 }) {
  return (
    <div data-tp="1" aria-hidden="true" style={{position:'absolute',top:top,left:0,right:0,height:520,
      pointerEvents:'none',overflow:'hidden',zIndex:0}}>
      {/* 月光光暈 */}
      <div style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',width:460,height:480,
        background:'radial-gradient(ellipse 50% 58% at 50% 0%, rgba(212,170,112,.12) 0%, transparent 70%)'}} />
      {/* 拱窗線框 */}
      <svg style={{position:'absolute',top:30,left:'50%',transform:'translateX(-50%)',width:240,height:130}}
        viewBox="0 0 240 130" fill="none">
        <path d="M26,130 L26,92 A94 94 0 0 1 214,92 L214,130" stroke="#D4AA70" strokeOpacity="0.16" strokeWidth="1.5"/>
        <path d="M120,12 L120,130 M64,44 L64,130 M176,44 L176,130" stroke="#D4AA70" strokeOpacity="0.09" strokeWidth="1"/>
      </svg>
    </div>
  );
}

// 判斷色彩亮度 → 決定按鈕選中時文字用深色或淺色
// （例：夢幻暗黑奢金色底 → 黑字；典雅東方暗紅底 → 白字）
function onColorText(hex) {
  if(!hex || hex[0]!=='#') return '#FFFEFA';
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  const lum = (0.299*r + 0.587*g + 0.114*b) / 255;
  // 閾值 0.62：奶油金 #B5895F(0.57)→白字；暗黑奢 #C9A84C(0.66)/夜幕 #D4AA70(0.69)→黑字
  return lum > 0.62 ? '#1A1A1A' : '#FFFEFA';
}

// 自訂 checkbox（取代原生），隨主題 gs 的圓角與主色
function GsCheckbox({ checked, onChange, gs, style }) {
  const boxRadius = Math.min(gs?.btnRadius ?? 3, 6);
  const primary = gs?.primary || '#B5895F';
  return (
    <span onClick={()=>onChange(!checked)} role="checkbox" aria-checked={checked} tabIndex={0}
      onKeyDown={e=>{ if(e.key===' '||e.key==='Enter'){ e.preventDefault(); onChange(!checked); } }}
      style={{display:'inline-flex',alignItems:'center',justifyContent:'center',
        width:18,height:18,flexShrink:0,cursor:'pointer',transition:'all .15s',
        borderRadius:boxRadius,
        border:`1.5px solid ${checked?primary:(gs?.border||'#C5BDB0')}`,
        background:checked?primary:'transparent', ...style}}>
      {checked && (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
          stroke={onColorText(primary)} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12l5 5L20 6"/>
        </svg>
      )}
    </span>
  );
}

// ============================================================
// FONTS
// ============================================================
const FONTS_CJK = {
  'noto-serif': { name:'思源明體', family:"'Noto Serif TC',serif",       url:'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;500&display=swap' },
  'lxgw':       { name:'霞鶩文楷', family:"'LXGW WenKai TC',cursive",    url:'https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC&display=swap' },
  'noto-sans':  { name:'思源黑體', family:"'Noto Sans TC',sans-serif",    url:'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&display=swap' },
  'shippori':   { name:'雫明朝',   family:"'Shippori Mincho B1',serif",   url:'https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;500&display=swap' },
  'zen-old':    { name:'禪意古明朝',family:"'Zen Old Mincho',serif",       url:'https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500&display=swap' },
};
const FONTS_LATIN = {
  'cormorant':   { name:'Cormorant Garamond', family:"'Cormorant Garamond',serif",  url:'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&display=swap' },
  'playfair':    { name:'Playfair Display',   family:"'Playfair Display',serif",    url:'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap' },
  'eb-garamond': { name:'EB Garamond',        family:"'EB Garamond',serif",         url:'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap' },
  'josefin':     { name:'Josefin Sans',       family:"'Josefin Sans',sans-serif",   url:'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap' },
  'lato':        { name:'Lato',               family:"'Lato',sans-serif",           url:'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300&display=swap' },
};

// ============================================================
// FREEMIUM LIMITS — 模組層級常數（AccountCenterPage / DashboardPage / WeddingApp / SeatingPage 共用）
// ============================================================
const FREE_PROJECT_LIMIT = 2;
const FREE_TABLE_LIMIT   = 3;   // v6.7.0：免費版排位桌數上限 5→3
const FREE_SEAT_LIMIT    = 32;  // v6.7.0：免費版排位「已入座人數」上限（主桌一桌即 32 人）

// ============================================================
// v6.8.0 開發者後台（DEV CONSOLE）— 平台管理員白名單
// ⚠️ 請把你的「登入 email」填到下面陣列（可多個），並同步寫進 firestore.rules 的 isAdmin()。
//    前端 gate 只是「看不到」，真正的安全在 Firestore 規則。
// ============================================================
const PLATFORM_ADMIN_EMAILS = [
  'tp6vupu04ian@gmail.com',
];
const isPlatformAdmin = (u) =>
  !!u && !!u.email && PLATFORM_ADMIN_EMAILS.map(e=>e.toLowerCase()).includes(String(u.email).toLowerCase());

// ── Firestore 錯誤訊息中文化（v6.8.2）────────────────────────
const firestoreErrMsg = (e) => {
  const msg = (e.message || '').toLowerCase();
  const code = e.code || '';
  if (code === 'permission-denied' || msg.includes('missing or insufficient permissions')) {
    return '權限不足，無法完成這個操作。\n\n可能原因：\n• 登入狀態已過期，請重新整理頁面後再試\n• 若問題持續，請嘗試登出後重新登入';
  }
  if (code === 'unavailable' || msg.includes('unavailable')) {
    return '目前網路連線不穩定，請確認網路後再試一次。';
  }
  if (code === 'not-found' || msg.includes('not found')) {
    return '找不到指定的資料，可能已被刪除或尚未建立。';
  }
  if (code === 'already-exists') {
    return '資料已存在，請重新整理頁面後再試。';
  }
  if (code === 'resource-exhausted') {
    return '目前請求量過多，請稍後再試。';
  }
  return '操作失敗，請重新整理頁面後再試。\n若問題持續請聯絡客服。\n\n（錯誤代碼：' + (code || msg.slice(0,60) || '未知') + '）';
};


const GROUP_INFO = {
  groom: { label:"新郎方", color:"#3A60A8", soft:"#DCE4F2", subs:["新郎親友","新郎公司同事","新郎親戚長輩"] },
  bride: { label:"新娘方", color:"#BF7090", soft:"#F5DCE2", subs:["新娘親友","新娘公司同事","新娘親戚長輩"] },
  shared: { label:"共同",  color:"#B5895F", soft:"#EFE3D0", subs:["共同好友","其他"] }
};

// Resolve effective group info — uses customGroups from config when set, else defaults
function getGroupInfo(cfg) {
  if (cfg?.customGroups && typeof cfg.customGroups === 'object' && Object.keys(cfg.customGroups).length > 0) {
    return cfg.customGroups;
  }
  return GROUP_INFO;
}
// v5.3：固定關係顯示順序 — 新娘方、共同、新郎方，其餘自訂分類依其後
// （Firestore 物件鍵順序不保證，故需明確排序避免按鈕位置跳動）
const GROUP_ORDER = ['bride','shared','groom'];
function orderedGroupEntries(GI) {
  const keys = Object.keys(GI);
  const head = GROUP_ORDER.filter(k=>keys.includes(k));
  const rest = keys.filter(k=>!GROUP_ORDER.includes(k));
  return [...head, ...rest].map(k=>[k, GI[k]]);
}
// Preset color palette for new custom groups
const GROUP_COLORS = [
  {color:"#7BA77B",soft:"#DCF0DC"},
  {color:"#A87B3A",soft:"#F0DFCA"},
  {color:"#6B86B3",soft:"#D8E2F2"},
  {color:"#A67BB0",soft:"#EBD8F2"},
  {color:"#B07B7B",soft:"#F2D8D8"},
  {color:"#7BA8A0",soft:"#D8EEE9"},
  {color:"#9EA87B",soft:"#EAF0D8"},
  {color:"#A89B7B",soft:"#F0EBD8"},
];

const TABLE_COLORS = ["#F4E3D7","#DDE4E8","#E5F0E5","#EEE4F5","#F5E8D0","#E8E8E8","#F2E0E0","#E0EEF5","#E8F0E0","#F5EBE0"];
const TABLE_RADIUS = 52, SEAT_OUTER = 88, SEAT_SIZE = 28;
// v5.3 場地規模預設（畫布尺寸）
const VENUE_SIZES = [
  {key:'s',  label:'小型 (~20桌)',  w:1600, h:1200},
  {key:'m',  label:'中型 (~35桌)',  w:2600, h:1700},
  {key:'l',  label:'大型 (~70桌)',  w:3600, h:2400},
  {key:'xl', label:'超大 (120+桌)', w:5200, h:3400},
];

const uid = () => Math.random().toString(36).slice(2,9)+Date.now().toString(36);

// ============================================================
// IMAGE COMPRESSION
// Auto-resize and compress images to fit Firestore constraints
// ============================================================
function compressImage(file, maxW=800, quality=0.7) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) return reject(new Error('Not an image'));
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        let w = img.width, h = img.height;
        if (w > maxW) { h = h * (maxW/w); w = maxW; }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        canvas.toBlob(blob => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(new Error('Read failed'));
          reader.readAsDataURL(blob);
        }, 'image/jpeg', quality);
      } catch (e) { reject(e); }
    };
    img.onerror = () => reject(new Error('Image load failed'));
    img.src = URL.createObjectURL(file);
  });
}

function dataUrlSizeKB(dataUrl) {
  if (!dataUrl) return 0;
  return Math.round(dataUrl.length * 0.75 / 1024);
}


// ============================================================
// CSS INJECTION
// ============================================================
function injectCSS() {
  if (document.getElementById('wed-css')) return;
  const link = document.createElement('link');
  link.id = 'wed-css-font';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;500&family=Noto+Sans+TC:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Caveat:wght@400;600&family=Lato:wght@300;400;700&family=LXGW+WenKai+TC&display=swap';
  document.head.appendChild(link);
  const s = document.createElement('style');
  s.id = 'wed-css';
  s.textContent = `
*,*::before,*::after{box-sizing:border-box}
body{margin:0;background:#F9F5EF}
.wed{font-family:var(--wed-font, ${FONT_STACK});color:#3A332B;min-height:100vh;background:#F9F5EF}
.wed *:not([data-own-font]){font-family:var(--wed-font, ${FONT_STACK})!important}
.wed *{font-family:inherit;color:inherit}
.wed button{cursor:pointer;border:none;background:none;font-family:inherit}
.wed input,.wed textarea,.wed select{font-family:inherit;color:#3A332B;outline:none}
.wed-scroll::-webkit-scrollbar{width:5px;height:5px}
.wed-scroll::-webkit-scrollbar-thumb{background:#D4B894;border-radius:3px}
@keyframes wfadein{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.wfadein{animation:wfadein .4s ease-out}
@keyframes wspin{to{transform:rotate(360deg)}}
@keyframes wedPreviewPulse{0%,100%{box-shadow:0 0 0 0 rgba(181,137,95,.5)}50%{box-shadow:0 0 0 7px rgba(181,137,95,0)}}
.wed-preview-eye{animation:wedPreviewPulse 1.8s ease-in-out infinite}
/* v5.3 手機點選分配：桌位發光圈動畫 */
@keyframes wedTapRing{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.06)}}
.wed-tap-ring{animation:wedTapRing 1.2s ease-in-out infinite}
/* v5.3 座位移除 × 鈕：hover 才顯示，與拖曳/點擊分離 */
.wed-seat-x{opacity:0;transition:opacity .12s}
.wed-seat:hover .wed-seat-x{opacity:1}
@media (hover:none){.wed-seat-x{opacity:.85}}
@keyframes wedFadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
/* v5.3 手機版 top bar：防止選單文字直排堆疊、改為水平捲動 */
.wed-nav-menu{ -webkit-overflow-scrolling:touch; scrollbar-width:none; }
.wed-nav-menu::-webkit-scrollbar{ display:none; }
/* v5.4 #5a：名單列表所有儲存格維持橫排不換行 */
.wed-guest-table table{ min-width:max-content; }
.wed-guest-table th, .wed-guest-table td{ white-space:nowrap; }
@media (max-width:640px){
  .wed-nav{ padding:8px 12px !important; gap:6px !important; }
  .wed-nav button{ padding:6px 9px !important; letter-spacing:0 !important; }
  .wed-nav-status-txt{ display:none; }
  .wed-nav-logo span{ font-size:16px !important; letter-spacing:2px !important; }
}
@media (max-width:900px){
  /* 排位收折鈕：手機/平板改 fixed 釘在畫面左下，避免被捲動藏到畫面外 */
  .wed-sidebar-toggle{ position:fixed !important; bottom:16px !important; left:12px !important; z-index:9990 !important; }
}
.wspin{animation:wspin .9s linear infinite}
@media(max-width:640px){
  .wed-form-grid{grid-template-columns:1fr!important}
  .wed-stats{grid-template-columns:repeat(2,1fr)!important}
  .wed-hero{min-height:280px!important}
}
@media print{.no-print{display:none!important}}
  `;
  document.head.appendChild(s);
}

// ============================================================
// THEME APPLY
// ============================================================
function applyTheme(theme) {
  let el = document.getElementById('wed-theme-css');
  if (!el) { el = document.createElement('style'); el.id = 'wed-theme-css'; document.head.appendChild(el); }
  if (!theme || theme.name === '典雅奶油') {
    // 奶油主題：清掉非奶油的覆寫，並把 CSS 變數設成奶油色，這樣 var(--wed-...) 在排位頁也能正確套色
    el.textContent = `
body { --wed-bg:#F9F5EF; --wed-card:#FFFEFA; --wed-border:#E5DDD0; --wed-border-soft:#E5D5BD; }
/* 奶油主題輸入框：獨立規則確保底色與表單一致（#FFFEFA） */
.wed input[style],.wed textarea[style],.wed select[style] {
  background: #FFFEFA !important; border-color: #E5DDD0 !important; color: #3A332B !important;
}
`;
    document.body.removeAttribute('data-wed-theme');
    return;
  }
  document.body.setAttribute('data-wed-theme', theme.name);
  const dk = theme.dark;
  const NOT = ':not([data-tp])';
  // 注意：React 把 #RRGGBB inline style 渲染成 rgb(r, g, b)；rgba 保持 rgba 形式
  el.textContent = `
/* === v4.9 主題 CSS 變數 — 排位頁 4 個位置（側邊欄/標題欄/主畫布/底紋）用 var(--wed-...) 套色 === */
body { --wed-bg:${theme.pageBg}; --wed-card:${theme.cardBg}; --wed-border:${theme.border}; --wed-border-soft:${theme.borderSoft || theme.border}; }

/* === 基礎 === */
body { background: ${theme.pageBg} !important; }
.wed { background: ${theme.pageBg} !important; color: ${theme.text} !important; }

/* === 輸入元素（基礎）=== */
.wed input,.wed textarea,.wed select { color: ${theme.text} !important; background: ${theme.cardBg} !important; border-color: ${theme.border} !important; }
.wed input::placeholder,.wed textarea::placeholder { color: ${theme.mutedText} !important; }

/* === NavBar 頂部 (rgba 半透明) — 加強邊線可見性 === */
.wed nav { 
  background: ${theme.cardBg} !important; 
  border-bottom: 1px solid ${dk ? 'rgba(255,255,255,.10)' : 'rgba(0,0,0,.08)'} !important;
  box-shadow: 0 2px 10px ${dk ? 'rgba(0,0,0,.4)' : 'rgba(58,51,43,.06)'} !important;
}
.wed [style*="rgba(249, 245, 239"]${NOT} { background: ${theme.cardBg} !important; }

/* === Sidebar (排位左側) — 加強分隔線 === */
.wed [style*="border-right: 1px solid rgb(229, 221, 208)"]${NOT} {
  border-right: 1px solid ${dk ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.07)'} !important;
  box-shadow: 2px 0 8px ${dk ? 'rgba(0,0,0,.3)' : 'rgba(58,51,43,.04)'} !important;
}

/* === 頁面背景色 (#F9F5EF / #FBF7EF / #FDFAF6) === */
.wed [style*="background: rgb(249, 245, 239)"]${NOT},
.wed [style*="background-color: rgb(249, 245, 239)"]${NOT},
.wed [style*="background: rgb(251, 247, 239)"]${NOT},
.wed [style*="background-color: rgb(251, 247, 239)"]${NOT},
.wed [style*="background: rgb(253, 250, 246)"]${NOT},
.wed [style*="background-color: rgb(253, 250, 246)"]${NOT} {
  background: ${theme.pageBg} !important;
  background-color: ${theme.pageBg} !important;
}

/* === 卡片白 (#FFFEFA) === */
.wed [style*="background: rgb(255, 254, 250)"]${NOT},
.wed [style*="background-color: rgb(255, 254, 250)"]${NOT} {
  background: ${theme.cardBg} !important;
  background-color: ${theme.cardBg} !important;
}
.wed [style*="color: rgb(255, 254, 250)"]${NOT} { color: ${dk ? '#F0EDE8' : '#FFFEFA'} !important; }
${dk ? `
/* 暗黑系：金色主色底的按鈕/標籤上，原淺色(#FFFEFA)文字轉深色，避免亮金底配淺字看不清 */
.wed [style*="background: rgb(181, 137, 95)"][style*="color: rgb(255, 254, 250)"]${NOT},
.wed [style*="background-color: rgb(181, 137, 95)"][style*="color: rgb(255, 254, 250)"]${NOT},
.wed [style*="background: rgb(181, 137, 95)"][style*="color: rgb(255, 254, 250)"]${NOT} *${NOT} {
  color: #1A1A1A !important;
}` : ''}

/* === 邊框色 (#E5DDD0) — 只改邊框，與輸入框背景規則完全分離 === */
.wed [style*="border: 1px solid rgb(229, 221, 208)"]${NOT},
.wed [style*="border:1px solid rgb(229, 221, 208)"]${NOT},
.wed [style*="border-color: rgb(229, 221, 208)"]${NOT},
.wed [style*="border-bottom: 1px solid rgb(229, 221, 208)"]${NOT},
.wed [style*="border-top: 1px solid rgb(229, 221, 208)"]${NOT},
.wed [style*="border-right: 1px solid rgb(229, 221, 208)"]${NOT},
.wed [style*="border-left: 1px solid rgb(229, 221, 208)"]${NOT} {
  border-color: ${theme.border} !important;
}

/* === 分隔線底色 (#E5DDD0 作為背景色的裝飾元素，與上方邊框規則分離) === */
.wed [style*="background: rgb(229, 221, 208)"]${NOT},
.wed [style*="background-color: rgb(229, 221, 208)"]${NOT} {
  background-color: ${theme.border} !important;
}

/* === 輸入框外觀 — 獨立高優先度規則（specificity 0,2,1 > 結構邊線規則 0,2,0）=== */
/* 完全不受上方結構邊線/分隔線規則影響；底色與表單背景一致，僅靠邊框線區分 */
.wed input[style],.wed textarea[style],.wed select[style] {
  background: ${theme.cardBg} !important;
  border-color: ${theme.border} !important;
  color: ${theme.text} !important;
}

/* === 軟邊框色 (#E5D5BD) === */
.wed [style*="border: 1px solid rgb(229, 213, 189)"]${NOT},
.wed [style*="border:1px solid rgb(229, 213, 189)"]${NOT},
.wed [style*="border-color: rgb(229, 213, 189)"]${NOT} {
  border-color: ${theme.borderSoft || theme.border} !important;
}

/* === 主色 (#B5895F) — 文字 === */
.wed [style*="color: rgb(181, 137, 95)"]${NOT} { color: ${theme.primary} !important; }
/* === 主色 — 背景 (Btn gold 等) === */
.wed [style*="background: rgb(181, 137, 95)"]${NOT},
.wed [style*="background-color: rgb(181, 137, 95)"]${NOT} {
  background: ${theme.primary} !important;
  background-color: ${theme.primary} !important;
}
/* === 主色 hover (#9F754C) === */
.wed [style*="background: rgb(159, 117, 76)"]${NOT},
.wed [style*="background-color: rgb(159, 117, 76)"]${NOT} {
  background: ${theme.primaryHover || theme.primary} !important;
  background-color: ${theme.primaryHover || theme.primary} !important;
}

/* === 軟底色 (#EFE3D0 - Tag) === */
.wed [style*="background: rgb(239, 227, 208)"]${NOT},
.wed [style*="background-color: rgb(239, 227, 208)"]${NOT} {
  background: ${theme.soft} !important;
  background-color: ${theme.soft} !important;
}

/* === 進度條底色 (#F1EAE0) === */
.wed [style*="background: rgb(241, 234, 224)"]${NOT},
.wed [style*="background-color: rgb(241, 234, 224)"]${NOT} {
  background: ${theme.soft} !important;
  background-color: ${theme.soft} !important;
}

/* === 主文字色 (#3A332B) === */
.wed [style*="color: rgb(58, 51, 43)"]${NOT} { color: ${theme.text} !important; }
.wed [style*="background: rgb(58, 51, 43)"]${NOT},
.wed [style*="background-color: rgb(58, 51, 43)"]${NOT} {
  background: ${theme.text} !important;
  background-color: ${theme.text} !important;
}

/* === 次要文字色 (#6B6259) === */
.wed [style*="color: rgb(107, 98, 89)"]${NOT} { color: ${theme.subText} !important; }

/* === 弱文字色 (#9A8F82) === */
.wed [style*="color: rgb(154, 143, 130)"]${NOT} { color: ${theme.mutedText} !important; }

/* === Btn dark hover (#241F1A) === */
.wed [style*="background: rgb(36, 31, 26)"]${NOT},
.wed [style*="background-color: rgb(36, 31, 26)"]${NOT} {
  background: ${theme.text} !important;
}

${dk ? `
/* === 暗黑模式專屬 === */
/* 純白 (#FFFFFF) */
.wed [style*="background: rgb(255, 255, 255)"]${NOT},
.wed [style*="background-color: rgb(255, 255, 255)"]${NOT},
.wed [style*="background: white"]${NOT},
.wed [style*="background:white"]${NOT} {
  background: ${theme.cardBg} !important;
  background-color: ${theme.cardBg} !important;
}
/* 淺灰 (#FAFAFA, #F8F8F8) */
.wed [style*="background: rgb(248, 248, 248)"]${NOT},
.wed [style*="background-color: rgb(248, 248, 248)"]${NOT},
.wed [style*="background: rgb(250, 250, 250)"]${NOT},
.wed [style*="background-color: rgb(250, 250, 250)"]${NOT} {
  background: ${theme.pageBg} !important;
}
/* 標題 */
.wed h1, .wed h2, .wed h3, .wed h4 { color: ${theme.text} !important; }
/* 狀態色：成功綠 (#2A6B2A) 在深色幾乎不可見 → 提亮 */
.wed [style*="color: rgb(42, 107, 42)"]${NOT} { color: #7FBF7F !important; }
/* 狀態色：警告琥珀 (#7A5C00) 在深色幾乎不可見 → 提亮 */
.wed [style*="color: rgb(122, 92, 0)"]${NOT} { color: #E0C060 !important; }
/* 深綠 RSVP success (#2A6B2A 變體) */
.wed [style*="color: rgb(47, 107, 47)"]${NOT},
.wed [style*="color: rgb(95, 143, 95)"]${NOT} { color: #8FCF8F !important; }
/* 深色卡片內常見的深灰文字 (#5A5249, #4A4239 等) 安全網 → 提亮 */
.wed [style*="color: rgb(90, 82, 73)"]${NOT},
.wed [style*="color: rgb(74, 66, 57)"]${NOT},
.wed [style*="color: rgb(58, 51, 43)"]${NOT} { color: ${theme.text} !important; }
/* 軟琥珀底色狀態框 (#FFF8E0, #FFFBE8) 深色化 */
.wed [style*="background: rgb(255, 248, 224)"]${NOT},
.wed [style*="background-color: rgb(255, 248, 224)"]${NOT},
.wed [style*="background: rgb(255, 251, 232)"]${NOT},
.wed [style*="background-color: rgb(255, 251, 232)"]${NOT} { background: #3A3420 !important; background-color: #3A3420 !important; }
/* 成功綠底框 (#E8F5E8) 深色化 */
.wed [style*="background: rgb(232, 245, 232)"]${NOT},
.wed [style*="background-color: rgb(232, 245, 232)"]${NOT} { background: #203020 !important; background-color: #203020 !important; }
/* 備份最新列反白底 (#FAFCF7) 深色化 — 否則淺底+提亮文字＝看不見 */
.wed [style*="background: rgb(250, 252, 247)"]${NOT},
.wed [style*="background-color: rgb(250, 252, 247)"]${NOT} { background: ${theme.soft} !important; background-color: ${theme.soft} !important; }
/* 紅色衝突底框 (#FAEEEE, #FFF0F0) 深色化 */
.wed [style*="background: rgb(250, 238, 238)"]${NOT},
.wed [style*="background-color: rgb(250, 238, 238)"]${NOT},
.wed [style*="background: rgb(255, 240, 240)"]${NOT},
.wed [style*="background-color: rgb(255, 240, 240)"]${NOT} { background: #3A2020 !important; background-color: #3A2020 !important; }
` : ''}

/* === 排位圓桌容器淺色背景 (#FCFAF5) === */
.wed [style*="background: rgb(252, 250, 245)"]${NOT},
.wed [style*="background-color: rgb(252, 250, 245)"]${NOT} {
  background: ${theme.cardBg} !important;
}
  `;
}

// ============================================================
// FONT APPLY  — 懶加載 Google Fonts；英文字體接 ASCII、中文字體接 CJK
// ============================================================
function applyFont(cjkKey, latinKey) {
  const cjk = FONTS_CJK[cjkKey]   || FONTS_CJK['noto-serif'];
  const lat = FONTS_LATIN[latinKey] || FONTS_LATIN['cormorant'];
  // 懶加載：只在選中時才注入 <link> 標籤
  [[cjkKey   || 'noto-serif', cjk],
   [latinKey || 'cormorant',  lat]].forEach(([key, f]) => {
    const id = 'wed-font-' + key;
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id; link.rel = 'stylesheet'; link.href = f.url;
      document.head.appendChild(link);
    }
  });
  // 英文字體排在前（接管 ASCII），中文字體排在後（接管 CJK）
  document.body.style.setProperty('--wed-font', `${lat.family}, ${cjk.family}`);
}
// 外觀頁籤開啟時預載所有字體（讓預覽卡片能即時顯示）
function preloadAllFonts() {
  Object.entries({...FONTS_CJK, ...FONTS_LATIN}).forEach(([key, f]) => {
    const id = 'wed-font-' + key;
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id; link.rel = 'stylesheet'; link.href = f.url;
      document.head.appendChild(link);
    }
  });
}

// ============================================================
// FIREBASE
// ============================================================
function initFirebase() {
  if (window.__wedFB) return window.__wedFB;
  window.__wedFB = new Promise((resolve, reject) => {
    const load = src => new Promise((res,rej) => {
      // 若該腳本已存在（重複初始化／HMR）就直接 resolve，避免重覆插入
      if ([...document.scripts].some(s=>s.src===src)) { res(); return; }
      const s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = () => rej(new Error('Load failed: '+src));
      document.head.appendChild(s);
    });
    // ⚠ Firebase compat 腳本有載入順序依賴：app-compat 必須先建立 window.firebase 命名空間，
    // 其他 auth/firestore/storage-compat 才能掛載功能。並行載入會造成 storage 偶發未註冊
    // （window.firebase.storage is not a function）。故先等 app 載完，再並行載其餘三個。
    load('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js')
      .then(()=>Promise.all([
        load('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js'),
        load('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js'),
        load('https://www.gstatic.com/firebasejs/10.7.1/firebase-storage-compat.js'),
        load('https://www.gstatic.com/firebasejs/10.7.1/firebase-functions-compat.js'),
      ]))
      .then(()=>{
        // 保險：確認四個功能都已註冊，否則視為載入失敗（讓呼叫端可重試而非拋出半殘狀態）
        if (typeof window.firebase?.storage !== 'function' ||
            typeof window.firebase?.firestore !== 'function' ||
            typeof window.firebase?.auth !== 'function' ||
            typeof window.firebase?.functions !== 'function') {
          throw new Error('Firebase SDK 尚未完整載入');
        }
        if(!window.firebase.apps.length) window.firebase.initializeApp(FIREBASE_CONFIG);
        const auth = window.firebase.auth();
        const googleProvider = new window.firebase.auth.GoogleAuthProvider();
        googleProvider.setCustomParameters({ prompt: "select_account" });
        const functions = window.firebase.functions();
        resolve({ auth, googleProvider, db: window.firebase.firestore(), storage: window.firebase.storage(), functions });
      })
      .catch(err=>{ window.__wedFB = null; reject(err); });  // 失敗清除快取，下次可重試
  });
  return window.__wedFB;
}

const DEFAULT_PHOTO_B64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijc1MCIgdmlld0JveD0iMCAwIDEyMDAgNzUwIj4KICA8cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI3NTAiIGZpbGw9IiNGOUY1RUYiLz4KICA8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMTE5OCIgaGVpZ2h0PSI3NDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0U1REREMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSIxMiw4Ii8+CiAgPHRleHQgeD0iNjAwIiB5PSIzMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmaWxsPSIjRDRDNEE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn5KNPC90ZXh0PgogIDx0ZXh0IHg9IjYwMCIgeT0iMzkwIiBmb250LWZhbWlseT0iJ05vdG8gU2FucyBUQycsc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMiIgZmlsbD0iI0I1ODk1RiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjMiPuS4iuWCs+aCqOeahOWpmue0l+eFp+eJhzwvdGV4dD4KICA8dGV4dCB4PSI2MDAiIHk9IjQzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5QThGODIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuWJjeW+gCAg6LOH6KiK566h55CGIOKGkiDnhafniYfovKrmkq0gIOWNs+WPr+aWsOWinjwvdGV4dD4KICA8bGluZSB4MT0iNDgwIiB5MT0iMzU1IiB4Mj0iNzIwIiB5Mj0iMzU1IiBzdHJva2U9IiNFNURERDAiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=";

// ============================================================
// DATA HELPERS
// ============================================================
// 宴會環境設施（v5.5：取代舊「標記」，自由選 emoji + 顏色 + 鎖定）
const FACILITY_EMOJIS = ['🎤','🚪','📽️','🚻','🍹','🎁','📋','🍰','🎂','🌹','📸','🎵','💐','🕯️','🍷','☕','🎈','🪑','🛗','🅿️','🚬','♿','🎬','🔊','💡','🍽️','🎀','🌸'];
const FACILITY_COLORS = ['#3A332B','#B5895F','#3A6B8A','#6B6259','#7BA77B','#8A7BAF','#C04040','#B07A4A','#4A8A4A','#A0567A'];
// 舊 type → emoji/color 遷移對照（相容 v5.4 以前資料）
const LEGACY_MARKER_MAP = {
  stage:{emoji:'🎤',color:'#3A332B'}, entry:{emoji:'🚪',color:'#B5895F'},
  projector:{emoji:'📽️',color:'#3A6B8A'}, restroom:{emoji:'🚻',color:'#6B6259'},
  bar:{emoji:'🍹',color:'#7BA77B'}, custom:{emoji:'📍',color:'#8A7BAF'}
};
const AREA_COLORS = ['#B5895F','#7BA77B','#8A7BAF','#3A6B8A','#B07A4A'];

function emptyData() {
  return {
    guests:[], tables:[], markers:[
      {id:'stage', label:'舞台', emoji:'🎤', color:'#3A332B', x:600, y:40, locked:false},
      {id:'entry', label:'入口', emoji:'🚪', color:'#B5895F', x:600, y:760, locked:false}
    ],
    photos:[{id:'default', dataUrl:DEFAULT_PHOTO_B64, enabled:true, order:0}],
    config: Object.assign({}, DEFAULT_CONFIG),
    versions:[],
    avoidPairs:[],
    samePairs:[],
    zones:[]
  };
}
// ── 避桌配對序列化（v4.9 修正資料遺失根因）──────────────────────────
// 應用程式內部一律用 tuple 形式 [[a,b],...]；但 Firestore「不接受巢狀陣列」，
// 直接寫入 avoidPairs:[[a,b]] 會讓整筆 set() 被拒絕並默默失敗，導致避桌/同桌資料看似存了卻在重整後消失。
// 寫入前 pack 成物件陣列 [{a,b}]（合法），讀回時 unpack 還原成 tuple。兩種格式皆相容。
function packAvoid(pairs) {
  return (Array.isArray(pairs) ? pairs : [])
    .map(p => Array.isArray(p) ? {a:p[0], b:p[1]} : (p && p.a && p.b ? {a:p.a, b:p.b} : null))
    .filter(p => p && p.a && p.b);
}
function unpackAvoid(arr) {
  return (Array.isArray(arr) ? arr : [])
    .map(p => Array.isArray(p) ? p : (p && p.a && p.b ? [p.a, p.b] : null))
    .filter(p => p && p[0] && p[1]);
}
// packSame / unpackSame — 同桌偏好，序列化規則同 avoidPairs
function packSame(pairs) {
  return (Array.isArray(pairs) ? pairs : [])
    .map(p => Array.isArray(p) ? {a:p[0], b:p[1]} : (p && p.a && p.b ? {a:p.a, b:p.b} : null))
    .filter(p => p && p.a && p.b);
}
function unpackSame(arr) {
  return (Array.isArray(arr) ? arr : [])
    .map(p => Array.isArray(p) ? p : (p && p.a && p.b ? [p.a, p.b] : null))
    .filter(p => p && p[0] && p[1]);
}
function mergeData(d) {
  const e = emptyData();
  if (!d || typeof d !== 'object') return e;
  return {
    guests:   (Array.isArray(d.guests) ? d.guests : e.guests).map(g => ({
      ...g,
      sameTable:  Array.isArray(g.sameTable)  ? g.sameTable  : [],
      avoidTable: Array.isArray(g.avoidTable) ? g.avoidTable : []
    })),
    // v5.3：拆分鎖定——舊 locked:true 視為「位置＋座位」皆鎖；新欄位優先
    tables:   (Array.isArray(d.tables) ? d.tables : e.tables).map(t => ({
      ...t,
      posLocked:  t.posLocked  != null ? !!t.posLocked  : !!t.locked,
      seatLocked: t.seatLocked != null ? !!t.seatLocked : !!t.locked
    })),
    // v5.5：環境設施遷移——舊 type 標記轉成 emoji+顏色；已是 emoji 則保留
    markers:  Array.isArray(d.markers) ? d.markers.map(m=>{
      if(m.emoji) return {locked:false, ...m};
      const lm = LEGACY_MARKER_MAP[m.type] || LEGACY_MARKER_MAP.custom;
      return {locked:false, ...m, emoji:lm.emoji, color:lm.color};
    }) : e.markers,
    photos:   Array.isArray(d.photos) && d.photos.length ? d.photos : e.photos,
    config:   Object.assign({}, DEFAULT_CONFIG, d.config || {}),
    versions: Array.isArray(d.versions) ? d.versions : e.versions,
    avoidPairs: unpackAvoid(d.avoidPairs),
    samePairs:  unpackSame(d.samePairs),
    // v5.5：分區統一為 zones；相容舊「areas」資料（v5.4 分支）自動併入，避免資料遺失
    zones: (((Array.isArray(d.zones)&&d.zones.length) ? d.zones
            : (Array.isArray(d.areas)&&d.areas.length) ? d.areas
            : [])).map((z,i)=>({id:z.id||uid(),name:z.name||'分區',x:+z.x||0,y:+z.y||0,w:+z.w||500,h:+z.h||600,
              color:z.color||AREA_COLORS[i%AREA_COLORS.length], locked:!!z.locked}))
  };
}

// ============================================================
// UTILITIES
// ============================================================
function displayName(g, maxCN=2, maxEN=3) {
  // v4.9：排位顯示一律取「姓名」（不抓暱稱）。中文取姓名後兩字；英文取最後一個單字。
  const n = (g.name || '').trim();
  if (!n) {
    const nk = (g.nickname || '').trim();
    return /[\u4e00-\u9fff]/.test(nk) ? nk.slice(-maxCN) : nk.slice(0, maxEN) || '?';
  }
  if (/[\u4e00-\u9fff]/.test(n)) return n.slice(-maxCN);
  const last = n.split(/\s+/).filter(Boolean).pop() || n;
  return last.slice(0, maxEN);
}

const toCSV = rows => {
  const esc = v => { const s = String(v??'').replace(/"/g,'""'); return /[,\n"]/.test(s)?`"${s}"`:s; };
  return '\ufeff' + rows.map(r => r.map(esc).join(',')).join('\n');
};
// v5.6：依桌子幾何位置找出所屬分區名稱（供匯出名單使用）
const zoneNameOf = (data, tableId) => {
  const t=(data.tables||[]).find(x=>x.id===tableId); if(!t) return '';
  const z=(data.zones||[]).find(a=>t.x>=a.x&&t.x<=a.x+a.w&&t.y>=a.y&&t.y<=a.y+a.h);
  return z?z.name:'';
};
const download = (name, content, type) => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], {type: type||'text/plain'}));
  a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
};

// ============================================================
// SEATING HELPERS
// ============================================================
function seatMap(table, guests) {
  const m = new Array(table.capacity||10).fill(null);
  guests.filter(g => g.tableId===table.id && g.attending && g.startSeat!=null)
    .forEach(g => {
      for(let i=0; i<(g.count||1); i++) m[((g.startSeat||0)+i)%(table.capacity||10)] = g;
    });
  return m;
}
function freeSeat(table, guests, count, excludeId) {
  const cap = table.capacity||10;
  const m = seatMap(table, guests.filter(g=>g.id!==excludeId));
  for(let s=0; s<cap; s++) {
    let ok=true;
    for(let j=0;j<count;j++) if(m[(s+j)%cap]) {ok=false;break;}
    if(ok) return s;
  }
  return -1;
}
function tableConflicts(table, guests, avoidPairs) {
  const inside = new Set(guests.filter(g=>g.tableId===table.id&&g.attending).map(g=>g.id));
  const avoid = [];
  avoidPairs.forEach(([a,b]) => { if(inside.has(a) && inside.has(b)) avoid.push([a,b]); });
  return avoid;
}

// v5.3：統一「有效配對」— 合併頂層 avoidPairs/samePairs 與各賓客 avoidTable/sameTable，
// 解決「用賓客編輯設定避桌/同桌卻不被衝突偵測抓到」的 desync bug（兩處來源都納入）
function effectiveAvoidPairs(data) {
  const seen = new Set(); const out = [];
  const add = (a,b) => { if(!a||!b||a===b) return; const k=[a,b].sort().join('|'); if(seen.has(k)) return; seen.add(k); out.push([a,b]); };
  (data.avoidPairs||[]).forEach(([a,b])=>add(a,b));
  (data.guests||[]).forEach(g=>(g.avoidTable||[]).forEach(o=>add(g.id,o)));
  return out;
}
function effectiveSamePairs(data) {
  const seen = new Set(); const out = [];
  const add = (a,b) => { if(!a||!b||a===b) return; const k=[a,b].sort().join('|'); if(seen.has(k)) return; seen.add(k); out.push([a,b]); };
  (data.samePairs||[]).forEach(([a,b])=>add(a,b));
  (data.guests||[]).forEach(g=>(g.sameTable||[]).forEach(o=>add(g.id,o)));
  return out;
}


// ============================================================
// SHARED ATOMS
// ============================================================
const S = {
  input: { width:'100%', padding:'9px 12px', fontSize:14, border:'1px solid #E5DDD0', borderRadius:2, background:'#FFFEFA', outline:'none' },
  card:  { background:'#FFFEFA', borderRadius:3, boxShadow:'0 2px 16px rgba(0,0,0,0.05)' },
};

function Spinner({size=18,color='#B5895F'}) {
  return <div className="wspin" style={{width:size,height:size,border:`2px solid ${color}30`,borderTopColor:color,borderRadius:'50%'}} />;
}

function Btn({children,v='gold',size='md',onClick,disabled,style,type='button'}) {
  const vs={
    gold:  {bg:'#B5895F',fg:'#FFFEFA',hov:'#9F754C'},
    dark:  {bg:'#3A332B',fg:'#FFFEFA',hov:'#241F1A'},
    ghost: {bg:'transparent',fg:'#6B6259',hov:'#F1EAE0',bd:'1px solid #E5DDD0'},
    rose:  {bg:'#BF7090',fg:'#FFFEFA',hov:'#A85A7C'},
    red:   {bg:'transparent',fg:'#C04040',hov:'#FAEEEE',bd:'1px solid #E0BCBC'},
    green: {bg:'#7BA77B',fg:'#FFFEFA',hov:'#5F8F5F'},
  };
  const c=vs[v]||vs.gold;
  const pads={sm:'5px 12px',md:'9px 20px',lg:'13px 28px'};
  const fszs={sm:11,md:13,lg:15};
  const [hov,setHov]=useState(false);
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:hov&&!disabled?c.hov:c.bg,color:c.fg,border:c.bd||'none',
        borderRadius:2,padding:pads[size],fontSize:fszs[size],letterSpacing:.5,fontWeight:500,
        opacity:disabled?.5:1,cursor:disabled?'not-allowed':'pointer',
        display:'inline-flex',alignItems:'center',gap:5,transition:'background .15s',...style}}>
      {children}
    </button>
  );
}

function Modal({open,onClose,children,title,width=520,closeColor}) {
  if(!open) return null;
  return (
    <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(58,51,43,.45)',zIndex:1000,
      display:'flex',alignItems:'center',justifyContent:'center',padding:16,backdropFilter:'blur(4px)'}}>
      <div onClick={e=>e.stopPropagation()} className="wfadein wed-scroll"
        style={{...S.card,padding:28,maxWidth:width,width:'100%',maxHeight:'92vh',overflowY:'auto',position:'relative'}}>
        {title && <div style={{fontFamily:FONT_STACK,fontSize:20,fontWeight:500,letterSpacing:1,
          borderBottom:'1px solid #E5DDD0',paddingBottom:14,marginBottom:20}}>{title}</div>}
        <button data-tp="1" onClick={onClose} style={{position:'absolute',top:12,right:14,
          width:28,height:28,display:'flex',alignItems:'center',justifyContent:'center',
          fontSize:20,color:closeColor||'#9A8F82',lineHeight:1,zIndex:3,borderRadius:'50%',
          background:closeColor?'rgba(0,0,0,.06)':'transparent',cursor:'pointer'}}>×</button>
        {children}
      </div>
    </div>
  );
}

// ============================================================
// CUSTOM DIALOG SYSTEM (v5.3) — 取代瀏覽器原生 confirm/alert/prompt
// 模組層 imperative API：uiConfirm / uiAlert / uiPrompt 回傳 Promise
// 由 <ConfirmDialogHost/> 掛在 WeddingApp 根節點統一渲染，質感與系統一致
// ============================================================
let _dialogSetter = null;
function uiConfirm(opts) {
  const o = (typeof opts==='string') ? {message:opts} : (opts||{});
  return new Promise(resolve=>{
    if(!_dialogSetter){ resolve(window.confirm(o.message||'')); return; }
    _dialogSetter({mode:'confirm', ...o, _resolve:resolve});
  });
}
function uiAlert(opts) {
  const o = (typeof opts==='string') ? {message:opts} : (opts||{});
  return new Promise(resolve=>{
    if(!_dialogSetter){ window.alert(o.message||''); resolve(); return; }
    _dialogSetter({mode:'alert', ...o, _resolve:resolve});
  });
}
function uiPrompt(message, defaultValue) {
  return new Promise(resolve=>{
    if(!_dialogSetter){ resolve(window.prompt(message, defaultValue||'')); return; }
    _dialogSetter({mode:'prompt', message, defaultValue:defaultValue||'', _resolve:resolve});
  });
}
// Pro 升級提示 — 統一使用帶品牌視覺的 pro 模式浮窗
// hint: 簡短說明當前觸發情境，e.g. '您已達免費版婚禮專案上限（2 個）'
let _cachedPlans = null;  // v6.9.0 由 App 載入 config/pricing 後填入
function uiProUpgrade(hint) {
  return new Promise(resolve=>{
    if(!_dialogSetter){ window.alert('Pro 方案付費功能即將開放，敬請期待！'); resolve(); return; }
    _dialogSetter({ mode:'pro', hint: hint||'', plans:_cachedPlans, _resolve: resolve });
  });
}
function ConfirmDialogHost() {
  const [d,setD] = useState(null);
  const [inputVal,setInputVal] = useState('');
  useEffect(()=>{ _dialogSetter = (dlg)=>{ setInputVal(dlg&&dlg.defaultValue||''); setD(dlg); }; return ()=>{ _dialogSetter=null; }; },[]);
  if(!d) return null;
  const close = (val)=>{ const r=d._resolve; setD(null); r&&r(val); };
  const isPrompt  = d.mode==='prompt';
  const isAlert   = d.mode==='alert' || d.mode==='pro';  // pro 模式同樣只有一個按鈕
  const isProMode = d.mode==='pro';
  return (
    <div onClick={()=>{ if(isAlert) close(); else close(isPrompt?null:false); }}
      style={{position:'fixed',inset:0,zIndex:10001,background:'rgba(58,51,43,.5)',
        display:'flex',alignItems:'center',justifyContent:'center',padding:20,backdropFilter:'blur(4px)'}}>
      <div onClick={e=>e.stopPropagation()} className="wfadein"
        style={{...S.card,maxWidth:420,width:'100%',
          padding:'26px 26px 20px',boxShadow:'0 4px 24px rgba(0,0,0,.12)',border:'1px solid #E5DDD0'}}>

        {/* Pro 升級模式：品牌化視覺標頭 */}
        {isProMode && (
          <div style={{textAlign:'center',paddingBottom:18,borderBottom:'1px solid #E5DDD0',marginBottom:18}}>
            <div style={{fontSize:26,color:'#B5895F',marginBottom:6,lineHeight:1}}>✦</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,letterSpacing:3,color:'#B5895F'}}>
              升級 Pro 方案
            </div>
            <div style={{fontSize:10,color:'#9A8F82',letterSpacing:3,textTransform:'uppercase',marginTop:4}}>
              Premium Plan
            </div>
          </div>
        )}
        {isProMode && d.hint && (
          <div style={{fontSize:13,color:'#6B6259',marginBottom:14,textAlign:'center',lineHeight:1.6}}>
            {d.hint}
          </div>
        )}
        {isProMode && (()=>{
          const plans = (d.plans && d.plans.length ? d.plans : DEFAULT_PLANS)
            .filter(p=>p.enabled!==false)
            .sort((a,b)=>(a.sortOrder||0)-(b.sortOrder||0));
          return (
            <div style={{marginBottom:16}}>
              <div style={{fontSize:13,color:'#3A332B',lineHeight:1.9,marginBottom:14,
                padding:'12px 16px',background:'#F9F5EF',borderRadius:3}}>
                <div>✓ 無限婚禮專案</div>
                <div>✓ 無限排位桌數</div>
                <div>✓ 名單與排位匯出</div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:10}}>
                {plans.map(p=>(
                  <div key={p.id} style={{border:'1px solid #E5DDD0',borderRadius:6,padding:'14px 16px',
                    display:'flex',alignItems:'center',justifyContent:'space-between',gap:10}}>
                    <div style={{textAlign:'left'}}>
                      <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:2}}>
                        <span style={{fontSize:14,color:'#3A332B',fontWeight:600}}>{p.name}</span>
                        {p.badge && <span style={{fontSize:10,color:'#B5895F',background:'#F3E9DD',
                          padding:'1px 7px',borderRadius:10,letterSpacing:.5}}>{p.badge}</span>}
                      </div>
                      <div style={{display:'flex',alignItems:'baseline',gap:6}}>
                        {p.originalPrice>0 && p.originalPrice>p.price &&
                          <span style={{fontSize:13,color:'#B8AE9F',textDecoration:'line-through'}}>NT${p.originalPrice}</span>}
                        <span style={{fontSize:20,color:'#B5895F',fontWeight:700}}>NT${p.price}</span>
                        <span style={{fontSize:12,color:'#9A8F82'}}>/{PERIOD_LABELS[p.period]||p.period}
                          {p.bonusMonths>0?`（送${p.bonusMonths}個月）`:''}</span>
                      </div>
                      {p.note && <div style={{fontSize:11,color:'#9A8F82',marginTop:3}}>{p.note}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{fontSize:12,color:'#9A8F82',textAlign:'center',marginTop:14,lineHeight:1.6}}>
                線上付款功能即將開放，敬請期待！
              </div>
            </div>
          );
        })()}

        {/* 一般 alert / confirm / prompt 模式 */}
        {!isProMode && d.title && <div style={{fontFamily:FONT_STACK,fontSize:17,fontWeight:600,letterSpacing:.5,color:'#3A332B',marginBottom:12}}>{d.title}</div>}
        {!isProMode && <div style={{fontSize:14,lineHeight:1.75,color:'#6B6259',whiteSpace:'pre-wrap',marginBottom:isPrompt?14:22}}>{d.message}</div>}
        {isPrompt && <input autoFocus autoComplete="nope" value={inputVal} onChange={e=>setInputVal(e.target.value)}
          onKeyDown={e=>{if(e.key==='Enter')close(inputVal);}}
          style={{...S.input,marginBottom:20}} />}

        <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
          {!isAlert && <Btn v="ghost" onClick={()=>close(isPrompt?null:false)}>{d.cancelText||'取消'}</Btn>}
          <Btn v={d.danger?'rose':'gold'} onClick={()=>close(isPrompt?inputVal:(isAlert?undefined:true))}>
            {d.confirmText||(isAlert?'知道了':'確定')}
          </Btn>
        </div>
      </div>
    </div>
  );
}

function Field({label,children,hint,required}) {
  return (
    <div style={{marginBottom:16}}>
      {label && <label style={{display:'block',fontSize:12,color:'#6B6259',marginBottom:5,letterSpacing:.3,fontFamily:SANS_STACK}}>
        {label}{required&&<span style={{color:'#BF7090',marginLeft:3}}>*</span>}
      </label>}
      {children}
      {hint && <div style={{fontSize:11,color:'#9A8F82',marginTop:3}}>{hint}</div>}
    </div>
  );
}
function TInput({value,onChange,placeholder,type='text',disabled,style,onKeyDown}) {
  return <input type={type} value={value} onChange={e=>onChange(e.target.value)}
    placeholder={placeholder} disabled={disabled} onKeyDown={onKeyDown}
    autoComplete="nope"
    style={{...S.input,opacity:disabled?.6:1,...style}} />;
}
function TTextarea({value,onChange,placeholder,rows=3,style}) {
  return <textarea value={value} onChange={e=>onChange(e.target.value)}
    placeholder={placeholder} rows={rows}
    style={{...S.input,resize:'vertical',minHeight:rows*22,...style}} />;
}
function TSelect({value,onChange,options,style}) {
  return <select value={value} onChange={e=>onChange(e.target.value)} style={{...S.input,...style}}>
    {options.map((o,i)=><option key={i} value={typeof o==='string'?o:o.v}>{typeof o==='string'?o:o.l}</option>)}
  </select>;
}
function Tag({children,color,soft,onRemove,small}) {
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:3,
      padding:small?'1px 7px':'3px 9px',fontSize:small?11:12,
      background:soft||'#F1EAE0',color:color||'#6B6259',
      border:`1px solid ${color?color+'40':'#E5DDD0'}`,borderRadius:2,
      fontFamily:SANS_STACK,whiteSpace:'nowrap'}}>
      {children}
      {onRemove && <button onClick={onRemove} style={{marginLeft:2,opacity:.6,fontSize:13}}>×</button>}
    </span>
  );
}

function Dropdown({label,items,btnStyle,icon}) {
  const [open,setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(()=>{
    const h = e => { if(ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown',h);
    return ()=>document.removeEventListener('mousedown',h);
  },[]);
  return (
    <div ref={ref} style={{position:'relative',display:'inline-block'}}>
      <Btn v="ghost" size="sm" onClick={()=>setOpen(p=>!p)} style={btnStyle}>
        {label} ▾
      </Btn>
      {open && (
        <div style={{position:'absolute',top:'100%',right:0,zIndex:200,marginTop:2,
          background:'#FFFEFA',border:'1px solid #E5DDD0',borderRadius:2,
          boxShadow:'0 4px 16px rgba(0,0,0,.1)',minWidth:160}}>
          {items.map((item,i)=>
            item === '---' ? <div key={i} style={{height:1,background:'#E5DDD0',margin:'4px 0'}}/> :
            <button key={i} onClick={()=>{item.action();setOpen(false);}}
              style={{display:'block',width:'100%',textAlign:'left',padding:'9px 16px',
                fontSize:12,color:'#3A332B',fontFamily:SANS_STACK,whiteSpace:'nowrap'}}
              onMouseEnter={e=>e.currentTarget.style.background='#F9F5EF'}
              onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
              {item.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}


// ============================================================
// PHOTO CAROUSEL
// ============================================================
function PhotoCarousel({photos,speed=4500}) {
  const active = useMemo(()=>[...photos].filter(p=>p.enabled).sort((a,b)=>(a.order||0)-(b.order||0)),[photos]);
  const [idx,setIdx] = useState(0);
  const timerRef = useRef(null);
  const resetTimer = useCallback(()=>{
    if(timerRef.current) clearInterval(timerRef.current);
    if(active.length<=1) return;
    timerRef.current = setInterval(()=>setIdx(i=>(i+1)%active.length), speed);
  },[active.length, speed]);
  useEffect(()=>{ resetTimer(); return ()=>clearInterval(timerRef.current); },[resetTimer]);
  useEffect(()=>{ if(idx>=active.length) setIdx(0); },[active.length,idx]);
  const prev = ()=>{ setIdx(i=>(i-1+active.length)%active.length); resetTimer(); };
  const next = ()=>{ setIdx(i=>(i+1)%active.length); resetTimer(); };
  const arrowStyle = (side)=>({position:'absolute',[side]:12,top:'50%',transform:'translateY(-50%)',
    width:38,height:38,borderRadius:'50%',border:'1px solid rgba(255,254,250,.35)',
    background:'rgba(0,0,0,.32)',color:'#FFFEFA',fontSize:22,cursor:'pointer',
    display:'flex',alignItems:'center',justifyContent:'center',zIndex:2,
    transition:'background .2s',userSelect:'none'});
  if(!active.length) return <div style={{height:480,background:'#F1EAE0',display:'flex',alignItems:'center',justifyContent:'center',color:'#9A8F82'}}>尚未設定婚紗照</div>;
  return (
    <div style={{position:'relative',width:'100%',height:'100%',overflow:'hidden',background:'#3A332B'}}>
      {active.map((p,i)=>(
        <div key={p.id} style={{position:'absolute',inset:0,opacity:i===idx?1:0,transition:'opacity 1.2s ease-in-out',
          backgroundImage:`url(${p.dataUrl||''})`,backgroundSize:'cover',backgroundPosition:`center ${p.focalY||50}%`}} />
      ))}
      {active.length>1 && <>
        <button onClick={prev} style={arrowStyle('left')} aria-label="上一張">‹</button>
        <button onClick={next} style={arrowStyle('right')} aria-label="下一張">›</button>
        <div style={{position:'absolute',bottom:18,left:'50%',transform:'translateX(-50%)',display:'flex',gap:7,zIndex:2}}>
          {active.map((_,i)=>(
            <button key={i} onClick={()=>{setIdx(i);resetTimer();}} style={{width:i===idx?22:5,height:3,
              background:i===idx?'#FFFEFA':'rgba(255,254,250,.5)',borderRadius:2,transition:'all .3s'}} />
          ))}
        </div>
      </>}
    </div>
  );
}

// ============================================================
// RSVP PAGE
// ============================================================
// ============================================================
// IMAGE LIGHTBOX — full-screen, zoom/pan, share/download
// Mouse wheel / buttons to zoom · drag to pan · pinch on mobile
// ============================================================
function ImageLightbox({src, onClose, canShare, shareText}) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({x:0,y:0});
  const [dragging, setDragging] = useState(false);
  const lastPos = useRef({x:0,y:0});
  const lastDist = useRef(null);
  const [copyStatus, setCopyStatus] = useState('');

  const clampZoom = z => Math.max(0.5, Math.min(8, z));
  const resetView = () => { setZoom(1); setPan({x:0,y:0}); };

  // Mouse wheel zoom
  const onWheel = e => {
    e.preventDefault();
    setZoom(z => clampZoom(z * (e.deltaY < 0 ? 1.15 : 0.87)));
  };

  // Mouse drag to pan
  const onMouseDown = e => { if(e.button!==0) return; e.preventDefault(); setDragging(true); lastPos.current={x:e.clientX,y:e.clientY}; };
  const onMouseMove = e => {
    if(!dragging) return;
    setPan(p=>({x:p.x+(e.clientX-lastPos.current.x), y:p.y+(e.clientY-lastPos.current.y)}));
    lastPos.current={x:e.clientX,y:e.clientY};
  };
  const onMouseUp = () => setDragging(false);

  // Touch: pinch-to-zoom + drag
  const onTouchStart = e => {
    if(e.touches.length===2){
      const dx=e.touches[0].clientX-e.touches[1].clientX;
      const dy=e.touches[0].clientY-e.touches[1].clientY;
      lastDist.current=Math.sqrt(dx*dx+dy*dy);
    } else if(e.touches.length===1){
      lastPos.current={x:e.touches[0].clientX,y:e.touches[0].clientY};
    }
  };
  const onTouchMove = e => {
    e.preventDefault();
    if(e.touches.length===2 && lastDist.current){
      const dx=e.touches[0].clientX-e.touches[1].clientX;
      const dy=e.touches[0].clientY-e.touches[1].clientY;
      const dist=Math.sqrt(dx*dx+dy*dy);
      setZoom(z=>clampZoom(z*(dist/lastDist.current)));
      lastDist.current=dist;
    } else if(e.touches.length===1){
      setPan(p=>({x:p.x+(e.touches[0].clientX-lastPos.current.x),y:p.y+(e.touches[0].clientY-lastPos.current.y)}));
      lastPos.current={x:e.touches[0].clientX,y:e.touches[0].clientY};
    }
  };
  const onTouchEnd = () => { lastDist.current=null; };

  // Share/copy helpers
  const doDownload = () => {
    const a=document.createElement('a'); a.href=src; a.download='wedding.jpg';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };
  const doCopy = async () => {
    try {
      const blob=await (await fetch(src)).blob();
      await navigator.clipboard.write([new ClipboardItem({[blob.type]:blob})]);
      setCopyStatus('✓ 已複製'); setTimeout(()=>setCopyStatus(''),2000);
    } catch(e){ setCopyStatus('不支援複製：'+e.message); }
  };
  const doShare = async () => {
    try {
      const blob=await (await fetch(src)).blob();
      const file=new File([blob],'wedding.jpg',{type:blob.type});
      if(navigator.canShare&&navigator.canShare({files:[file]})){
        await navigator.share({files:[file],text:shareText||''});
      } else { doCopy(); }
    } catch(e){ console.error(e); }
  };

  const btnStyle = {padding:'8px 16px',fontSize:12,borderRadius:2,cursor:'pointer',border:'1px solid rgba(255,255,255,.35)',color:'#FFFEFA',background:'rgba(58,51,43,.7)'};
  const zoomBtnStyle = {padding:'6px 14px',fontSize:16,fontWeight:700,borderRadius:2,cursor:'pointer',border:'1px solid rgba(255,255,255,.35)',color:'#FFFEFA',background:'rgba(58,51,43,.7)',lineHeight:1};

  return (
    <div
      onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
      style={{position:'fixed',inset:0,background:'rgba(0,0,0,.92)',zIndex:2000,display:'flex',flexDirection:'column',userSelect:'none'}}>
      {/* Top bar */}
      <div style={{position:'absolute',top:0,left:0,right:0,padding:'10px 14px',display:'flex',justifyContent:'space-between',alignItems:'center',zIndex:10,background:'linear-gradient(to bottom,rgba(0,0,0,.5),transparent)'}}>
        <div style={{display:'flex',gap:6}}>
          <button style={zoomBtnStyle} onClick={e=>{e.stopPropagation();setZoom(z=>clampZoom(z*1.25));}}>＋</button>
          <button style={zoomBtnStyle} onClick={e=>{e.stopPropagation();setZoom(z=>clampZoom(z*0.8));}}>－</button>
          <button style={{...btnStyle,fontSize:12}} onClick={e=>{e.stopPropagation();resetView();}}>
            {Math.round(zoom*100)}%
          </button>
        </div>
        <button style={{...btnStyle,fontSize:18,fontWeight:300,padding:'4px 12px'}} onClick={onClose}>✕</button>
      </div>
      {/* Image area */}
      <div
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{flex:1,overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',touchAction:'none'}}>
        <img src={src} alt="" draggable={false}
          onMouseDown={onMouseDown}
          style={{maxWidth:'95vw',maxHeight:'88vh',objectFit:'contain',borderRadius:2,
            transform:`translate(${pan.x}px,${pan.y}px) scale(${zoom})`,transformOrigin:'center',
            cursor:dragging?'grabbing':(zoom>1?'grab':'zoom-in'),transition:dragging?'none':'transform .05s'}} />
      </div>
      {/* Bottom bar */}
      <div style={{padding:'12px 16px',display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',background:'linear-gradient(to top,rgba(0,0,0,.5),transparent)'}}>
        <button style={btnStyle} onClick={e=>{e.stopPropagation();doDownload();}}>下載圖片</button>
        {canShare && navigator.clipboard && <button style={btnStyle} onClick={e=>{e.stopPropagation();doCopy();}}>{copyStatus||'複製圖片'}</button>}
        {canShare && navigator.share && <button style={{...btnStyle,background:'rgba(6,199,85,.8)',border:'1px solid #06C755'}} onClick={e=>{e.stopPropagation();doShare();}}>分享圖片</button>}
      </div>
    </div>
  );
}


function RSVPPage({data,onSubmit}) {
  const cfg = data.config;
  const heroTheme = getTheme(cfg);
  const gs = getGuestStyle(cfg.theme);   // ← 賓客端視覺語言
  const GI = getGroupInfo(cfg);
  const defaultSide = Object.keys(GI)[2] || Object.keys(GI)[0];
  const [enlargedImg, setEnlargedImg] = useState(null);
  const [form,setForm] = useState({
    name:'',nickname:'',side:defaultSide,subGroup:'',
    attending:'yes',count:1,vegCount:0,special:'',
    needInvitation:false,address:'',blessing:'',publicBlessing:true
  });
  const [submitted,setSubmitted] = useState(false);
  const [submitting,setSubmitting] = useState(false);
  const [sessionToken,setSessionToken] = useState('');
  const [recaptchaToken,setRecaptchaToken] = useState('');
  const [formStartTime] = useState(Date.now());
  const [validationError,setValidationError] = useState('');
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  const rsvpRootRef = useRef(null);
  useGuestFloraGsap(rsvpRootRef, cfg.theme, {blessing:false});

  // 初始化 session token 和 reCAPTCHA v3
  useEffect(()=>{
    const token = 'session_'+Math.random().toString(36).slice(2,9)+Date.now().toString(36);
    setSessionToken(token);
    
    // 載入 reCAPTCHA v3
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=6LeB-BEtAAAAAMxw6iFMbh-WIf-SUyfvRh_KTPDb';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    return ()=>document.head.removeChild(script);
  },[]);

  // 表單驗證加強
  const validateForm = () => {
    setValidationError('');
    const name = form.name.trim();
    
    // 姓名檢查
    if (!name) { setValidationError('請輸入姓名'); return false; }
    if (name.length < 2 || name.length > 20) { setValidationError('姓名需 2-20 字'); return false; }
    if (!/^[\u4e00-\u9fff\w\s\-\.]{2,20}$/.test(name)) { setValidationError('姓名格式不符'); return false; }
    
    // 禁用詞檢查
    const banWords = ['test','123','aaa','demo','fake','robot','bot','xxx'];
    if (banWords.some(w => name.toLowerCase().includes(w.toLowerCase()))) {
      setValidationError('姓名不符合規範');
      return false;
    }
    
    // 表單填寫時間檢查（太快 < 2 秒可能是機器人）
    const fillTime = Date.now() - formStartTime;
    if (fillTime < 2000) {
      setValidationError('請仔細填寫表單');
      return false;
    }
    
    // 人數檢查
    if (form.attending === 'yes') {
      if (form.count > 15) { setValidationError('人數過多，請聯繫新人'); return false; }
      if (form.vegCount > form.count) { setValidationError('素食人數不能超過總人數'); return false; }
    }
    
    return true;
  };

  // 速率限制檢查
  const checkRateLimit = () => {
    const key = 'rsvp_submits';
    const submits = JSON.parse(localStorage.getItem(key) || '[]');
    const now = Date.now();
    const recent = submits.filter(t => now - t < 5 * 60 * 1000); // 5 分鐘
    
    if (recent.length >= 3) {
      setValidationError('提交過於頻繁，請稍候 5 分鐘後再試');
      return false;
    }
    
    // 記錄本次提交
    recent.push(now);
    localStorage.setItem(key, JSON.stringify(recent));
    return true;
  };

  // 獲取 reCAPTCHA token
  const getReCaptchaToken = async () => {
    if (!window.grecaptcha) {
      console.warn('reCAPTCHA not loaded');
      return '';
    }
    try {
      const token = await window.grecaptcha.execute('6LeB-BEtAAAAAMxw6iFMbh-WIf-SUyfvRh_KTPDb', {action:'rsvp'});
      return token;
    } catch (e) {
      console.error('reCAPTCHA error:', e);
      return '';
    }
  };

  const submit = async e => {
    e.preventDefault();
    setValidationError('');
    
    // 驗證表單
    if (!validateForm()) return;
    
    // 檢查速率限制
    if (!checkRateLimit()) return;
    
    setSubmitting(true);
    try {
      // 獲取 reCAPTCHA token
      const token = await getReCaptchaToken();
      setRecaptchaToken(token);
      
      await onSubmit({
        id:uid(), name:form.name.trim(), nickname:form.nickname.trim(),
        side:form.side, subGroup:form.subGroup||(GI[form.side]||GI[defaultSide]).subs[0],
        attending:form.attending==='yes',
        count:form.attending==='yes'?Math.max(1,+form.count||1):0,
        vegCount:form.attending==='yes'?Math.max(0,Math.min(+form.count||1,+form.vegCount||0)):0,
        special:form.special.trim(), needInvitation:form.needInvitation,
        address:form.needInvitation?form.address.trim():'',
        blessing:form.blessing.trim(),
        publicBlessing: form.blessing.trim() ? form.publicBlessing===true : false,
        sameTable:[],avoidTable:[],tableId:null,startSeat:null,notes:'',
        submittedAt:Date.now(),
        // 防護相關
        sessionToken,recaptchaToken:token
      });
      setSubmitted(true);
    } catch (err) {
      setValidationError(err.message || '提交失敗，請稍後再試');
    } finally { setSubmitting(false); }
  };

  const thankLines = (cfg.thankYouMsg||'').split('\n');

  if(submitted) {
    const shareUrl = window.location.href;
    const shareTitle = `${cfg.groomName} & ${cfg.brideName} 婚禮邀請`;
    const shareText = `${cfg.weddingDate}\n${cfg.venue}\n${shareUrl}`;
    const handleShare = async () => {
      if (navigator.share) {
        try { await navigator.share({title:shareTitle,text:`${shareTitle}\n${cfg.weddingDate}\n${cfg.venue}`,url:shareUrl}); } catch(e){}
      } else {
        try {
          await navigator.clipboard.writeText(`${shareTitle}\n${cfg.weddingDate}\n${cfg.venue}\n${shareUrl}`);
          uiAlert('已複製邀請資訊到剪貼簿！');
        } catch(e) {
          uiPrompt('複製此連結：', shareUrl);
        }
      }
    };
    const lineMsg = (cfg.lineShareText && cfg.lineShareText.trim())
      ? cfg.lineShareText.trim()
      : `${shareTitle}\n${cfg.weddingDate||''}\n${cfg.venue||''}`;
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(lineMsg)}`;
    return (
      <div style={{minHeight:'calc(100vh - 58px)',display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
        <div className="wfadein" style={{textAlign:'center',maxWidth:500}}>
          {cfg.thankYouImgDataUrl && <img src={cfg.thankYouImgDataUrl} alt="thank-top"
            onClick={()=>setEnlargedImg(cfg.thankYouImgDataUrl)}
            style={{width:'min(460px, 90vw)',height:'auto',objectFit:'contain',borderRadius:4,marginBottom:16,cursor:'zoom-in'}} />}
          <div style={{fontSize:44,marginBottom:14}}>💐</div>
          <div style={{fontFamily:FONT_STACK,fontSize:26,letterSpacing:2,marginBottom:10,color:gs.text}}>{cfg.thankYouTitle||'感謝您的回覆'}</div>
          {thankLines.map((l,i)=><div key={i} style={{color:gs.subText,lineHeight:1.9,fontSize:15}}>{l}</div>)}
          {cfg.thankYouExtra && <div style={{marginTop:16,padding:'12px 16px',background:gs.pageBg,border:`1px solid ${gs.border}`,borderRadius:2,fontSize:13,color:gs.subText,textAlign:'center',lineHeight:1.8}}>{cfg.thankYouExtra}</div>}
          {cfg.transportInfo && <div style={{marginTop:12,fontSize:12,color:gs.mutedText}}>{cfg.transportInfo}</div>}
          <div style={{marginTop:24,display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap',alignItems:'center'}}>
            <Btn v="ghost" size="sm" onClick={()=>{setSubmitted(false);setForm({name:'',nickname:'',side:'shared',subGroup:'',attending:'yes',count:1,vegCount:0,special:'',needInvitation:false,address:'',blessing:'',publicBlessing:true});}}>再填一筆</Btn>
            <button
              onClick={async ()=>{
                // #9：純文字分享（不含網址與圖片）— iOS 不再 fetch 圖片 blob，分享快且穩定
                if (navigator.share) {
                  try { await navigator.share({ text: lineMsg }); return; }
                  catch(e){ if(e && e.name==='AbortError') return; /* 否則 fall through */ }
                }
                // 桌面/不支援 navigator.share：開 LINE 分享網頁
                const w = window.open(lineUrl,'_blank');
                if(!w || w.closed){
                  if(navigator.clipboard){
                    try { await navigator.clipboard.writeText(lineMsg); uiAlert('彈出視窗被擋下，已複製邀請資訊到剪貼簿'); }
                    catch(e){ uiPrompt('請複製此邀請資訊手動分享：', lineMsg); }
                  } else { uiPrompt('請複製此邀請資訊手動分享：', lineMsg); }
                }
              }}
              style={{padding:'6px 16px',borderRadius:2,fontSize:12,
                border:'1px solid #06C755',color:'#06C755',background:'transparent',
                fontWeight:500,letterSpacing:.3,cursor:'pointer',display:'inline-flex',alignItems:'center'}}>
              分享至Line
            </button>
          </div>
          {cfg.thankYouImgBottomDataUrl && <img src={cfg.thankYouImgBottomDataUrl} alt="transport-map"
            onClick={()=>setEnlargedImg(cfg.thankYouImgBottomDataUrl)}
            style={{width:'min(460px, 90vw)',height:'auto',objectFit:'contain',borderRadius:4,display:'block',margin:'24px auto 0',cursor:'zoom-in',boxShadow:'0 2px 12px rgba(0,0,0,.08)'}} />}
        </div>
        {enlargedImg && <ImageLightbox src={enlargedImg} onClose={()=>setEnlargedImg(null)} canShare={!!cfg.thankYouImgBottomDataUrl && enlargedImg===cfg.thankYouImgBottomDataUrl} shareText={lineMsg} />}
      </div>
    );
  }

  return (
    <div ref={rsvpRootRef} style={{position:'relative',isolation:'isolate',minHeight:'100vh',backgroundImage:'none',backgroundSize:gs.pagePatternSize||'auto',backgroundRepeat:gs.pagePatternMode==='scene'?'repeat-x':gs.pagePatternMode==='top-scene'?'no-repeat':(gs.pagePatternRepeat||'repeat'),backgroundPosition:gs.pagePatternMode==='scene'?'left bottom':gs.pagePatternMode==='top-scene'?'top center':(gs.pagePatternPos||'0 0')}}>
      <ThemeFloraBg themeKey={cfg.theme} topA="60vh" />
      {/* Hero */}
      <div className="wed-hero" style={{position:'relative',height:'58vh',minHeight:340,maxHeight:580}}>
        <PhotoCarousel photos={data.photos} speed={data.config.carouselSpeed||4500} />
        <div style={{position:'absolute',inset:0,
          background:`linear-gradient(180deg,${heroTheme.heroOverlayTop} 0%,${heroTheme.heroOverlayMid} 65%,${heroTheme.heroOverlayBot} 100%)`,
          display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',
          padding:'32px 20px 52px',color:'#FFFEFA'}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,letterSpacing:8,opacity:.8,marginBottom:10}}>WE INVITE YOU TO</div>
          <div style={{fontFamily:FONT_STACK,fontSize:'clamp(28px,5.5vw,52px)',fontWeight:500,letterSpacing:6,lineHeight:1.2,textAlign:'center'}}>
            {cfg.groomName}<span style={{margin:'0 14px',color:'#E5D5BD',fontFamily:"'Cormorant Garamond',serif"}}>&amp;</span>{cfg.brideName}
          </div>
          <div style={{marginTop:14,fontSize:12,letterSpacing:3,opacity:.88}}>{cfg.weddingDate}</div>
        </div>
      </div>

      {/* Info bar（dark 主題的拱窗月光放在此內容區頂部，不會被 Hero 滿版照片遮住）*/}
      <div style={{position:'relative'}}>
      {cfg.theme==='dark' && <NightArch top={0} />}
      <div style={{maxWidth:540,margin:'0 auto',padding:'48px 20px 24px',textAlign:'center',position:'relative',zIndex:1}}>
        <div style={{fontFamily:gs.labelFont,fontSize:11,letterSpacing:gs.labelSpacing,
          color:gs.primary,textTransform:gs.labelCase,marginBottom:12}}>WE ARE GETTING MARRIED</div>
        <div style={{fontFamily:gs.headingFont||FONT_STACK,fontSize:20,letterSpacing:1,
          color:gs.text,marginBottom:3}}>{cfg.venue}</div>
        <div style={{color:gs.subText,fontSize:13,marginBottom:2}}>{cfg.address}</div>
        <div style={{color:gs.mutedText,fontSize:12,marginBottom:14}}>{cfg.phone}</div>
        <div style={{display:'inline-block',padding:'7px 18px',
          border:`1px solid ${gs.borderSoft}`,borderRadius:gs.btnRadius,
          fontSize:12,color:gs.primary,letterSpacing:2}}>{cfg.weddingTime}</div>
        {cfg.transportInfo && <div style={{marginTop:12,fontSize:11,color:gs.mutedText}}>{cfg.transportInfo}</div>}
      </div>
      </div>

      {/* Form */}
      <div style={{maxWidth:540,margin:'0 auto',padding:'12px 20px 64px'}}>
        <ThemeDivider themeKey={cfg.theme} mw={500} my={10} />
        <div style={{textAlign:'center',marginBottom:28}}>
          <div style={{fontFamily:gs.labelFont,fontSize:11,letterSpacing:gs.labelSpacing,
            color:gs.primary,textTransform:gs.labelCase,marginBottom:10}}>RSVP</div>
          <div style={{fontFamily:gs.headingFont||FONT_STACK,fontSize:22,letterSpacing:2,color:gs.text}}>賓客回覆</div>
          {/* 分隔裝飾（v6.17.0 統一 ❀；極簡黑改細線） */}
          {guestDeco(cfg.theme)
            ? <div style={{margin:'14px auto',fontSize:14,color:gs.primary,letterSpacing:6,opacity:.7}}>{guestDeco(cfg.theme)}　{guestDeco(cfg.theme)}　{guestDeco(cfg.theme)}</div>
            : <div style={{width:28,height:gs.radius===0?2:1,background:gs.primary,margin:'14px auto',opacity:.6}} />}
        </div>

        <form onSubmit={submit} style={{...S.card,padding:'28px 24px',
          borderRadius:gs.radius,boxShadow:gs.shadow,
          background:gs.cardBg,border:`1px solid ${gs.border}`}}>
          <Field label="姓名" required>
            <TInput value={form.name} onChange={v=>set('name',v)} placeholder="您的全名"
              style={gs.inputUnderline?{border:'none',borderBottom:`1px solid ${gs.border}`,borderRadius:0,background:'transparent',paddingLeft:0}:{borderRadius:gs.inputRadius}} />
          </Field>
          <Field label="暱稱" hint="新人習慣的稱呼">
            <TInput value={form.nickname} onChange={v=>set('nickname',v)} placeholder="例：王哥、小芬"
              style={gs.inputUnderline?{border:'none',borderBottom:`1px solid ${gs.border}`,borderRadius:0,background:'transparent',paddingLeft:0}:{borderRadius:gs.inputRadius}} />
          </Field>
          <Field label="與新人關係" required>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:7,marginBottom:8}}>
              {orderedGroupEntries(GI).map(([k,g])=>{
                const active = form.side===k;
                return (
                  <button key={k} type="button" onClick={()=>set('side',k)} style={{
                    padding:'9px 6px',fontSize:13,borderRadius:Math.min(gs.btnRadius,10),transition:'all .15s',
                    textTransform:gs.btnCase,letterSpacing:gs.btnCase==='uppercase'?.5:0,
                    background:active?gs.primary:gs.pageBg,
                    color:active?onColorText(gs.primary):gs.subText,
                    fontWeight:active?600:400,
                    border:`1px solid ${active?gs.primary:gs.border}`}}>{g.label}</button>
                );
              })}
            </div>
            <TSelect value={form.subGroup} onChange={v=>set('subGroup',v)}
              options={[{v:'',l:'— 請選擇細分類 —'},...(GI[form.side]||GI[defaultSide]).subs.map(s=>({v:s,l:s}))]}
              style={{borderRadius:gs.inputRadius}} />
          </Field>
          <Field label="是否出席" required>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
              {/* 統一用主題主色跳色（如暗黑奢=金底黑字），不再用固定綠/粉 */}
              {[{v:'yes',l:'我一定到！！'},{v:'no',l:'無法參與\n我想留下祝福'}].map(o=>{
                const active = form.attending===o.v;
                return (
                  <button key={o.v} type="button" onClick={()=>set('attending',o.v)} style={{
                    padding:'10px 8px',fontSize:13,
                    borderRadius:gs.btnRadius,whiteSpace:'pre-line',lineHeight:1.4,minHeight:48,
                    textTransform:gs.btnCase,letterSpacing:gs.btnCase==='uppercase'?.5:0,
                    fontWeight:active?600:gs.btnWeight,transition:'all .15s',
                    background:active?gs.primary:gs.pageBg,
                    color:active?onColorText(gs.primary):gs.subText,
                    border:`1px solid ${active?gs.primary:gs.border}`,
                    boxShadow:active?gs.shadow:'none',
                    display:'flex',alignItems:'center',justifyContent:'center'}}>{o.l}</button>
                );
              })}
            </div>
          </Field>
          {form.attending==='yes' && (<>
            <div className="wed-form-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
              <Field label="出席人數（含本人）" required>
                <TInput type="number" value={form.count} onChange={v=>set('count',v)} style={{textAlign:'center'}} />
              </Field>
              <Field label="其中素食人數">
                <TInput type="number" value={form.vegCount} onChange={v=>set('vegCount',v)} style={{textAlign:'center'}} />
              </Field>
            </div>
            <Field label="特殊需求" hint="帶太太、帶小孩、輪椅、兒童椅、過敏等">
              <TTextarea value={form.special} onChange={v=>set('special',v)} placeholder="若無請留空" rows={2} />
            </Field>
            <Field label="">
              <label style={{display:'flex',alignItems:'center',gap:8,cursor:'pointer',fontSize:13,color:gs.subText}}>
                <GsCheckbox checked={form.needInvitation} onChange={v=>set('needInvitation',v)} gs={gs} />
                需要紙本喜帖
              </label>
            </Field>
            {form.needInvitation && (
              <Field label="郵寄地址">
                <TTextarea value={form.address} onChange={v=>set('address',v)} placeholder="完整地址含郵遞區號" rows={2} />
              </Field>
            )}
          </>)}
          <Field label="給新人的祝福（非必填）">
            <TTextarea value={form.blessing} onChange={v=>set('blessing',v)} placeholder="留下您的祝福..." rows={3} />
            <label style={{display:'flex',alignItems:'flex-start',gap:8,marginTop:10,fontSize:12,color:gs.subText,cursor:'pointer',lineHeight:1.6}}>
              <GsCheckbox checked={form.publicBlessing||false} onChange={v=>set('publicBlessing',v)} gs={gs} style={{marginTop:2}} />
              公開我的祝福：勾選後將顯示在「祝福牆」公開頁面（優先顯示您的暱稱）；如不希望公開，請取消勾選。
            </label>
          </Field>
          {validationError && (
            <div style={{padding:'10px 12px',background:'#F5DCE2',border:'1px solid #BF7090',borderRadius:3,color:'#BF7090',fontSize:12,marginBottom:12,lineHeight:1.5}}>
              ⚠ {validationError}
            </div>
          )}
          <Btn type="submit" disabled={submitting||!form.name.trim()||!!validationError}
            style={{width:'100%',marginTop:8,padding:'13px 0',fontSize:15,justifyContent:'center',
              borderRadius:gs.btnRadius,textTransform:gs.btnCase,letterSpacing:gs.btnCase==='uppercase'?3:gs.btnSpacing,
              fontWeight:gs.btnWeight}}>
            {submitting?<><Spinner size={14} color="#FFFEFA" /> 送出中</>:'送出回覆'}
          </Btn>
        </form>
      </div>
      {cfg.footerText ? (
        <div style={{textAlign:'center',padding:'24px 20px',borderTop:`1px solid ${gs.border}`,
          color:gs.mutedText,fontSize:11,letterSpacing:.5,lineHeight:1.9,whiteSpace:'pre-line'}}>
          {cfg.footerText}
        </div>
      ) : (
        <div style={{textAlign:'center',padding:'24px 20px',borderTop:`1px solid ${gs.border}`,
          color:gs.mutedText,fontSize:11,letterSpacing:1.5,lineHeight:1.9}}>
          <div>
            {guestDeco(cfg.theme) && <span style={{color:gs.primary,opacity:.7}}>{guestDeco(cfg.theme)}　</span>}
            {cfg.groomName} ＆ {cfg.brideName}{cfg.weddingDate?`　·　${cfg.weddingDate}`:''}
            {guestDeco(cfg.theme) && <span style={{color:gs.primary,opacity:.7}}>　{guestDeco(cfg.theme)}</span>}
          </div>
          <div style={{marginTop:6,fontSize:10,opacity:.65}}>由 對好入座 提供</div>
        </div>
      )}
    </div>
  );
}


// ============================================================
// BLESSING WALL PAGE — 公開祝福牆（瀑布流卡片）
// ============================================================
function BlessingWallPage({data}) {
  const cfg = data.config || {};
  const gs = getGuestStyle(cfg.theme);   // ← 賓客端視覺語言
  const GI = getGroupInfo(cfg);
  const blessings = useMemo(()=>{
    return (data.guests||[])
      .filter(g => g.blessing && g.blessing.trim() && g.publicBlessing === true)
      .sort((a,b) => (b.submittedAt||0) - (a.submittedAt||0));
  },[data.guests]);

  const defaultCardBgs = ['#FFF8F0','#F5F8FF','#FFF0F5','#F0FFF4','#FFFAF0','#F5F0FF','#FFFFF0'];
  const cardBgs = gs.blessingCardBgs || defaultCardBgs;

  const [cols, setCols] = useState(3);
  useEffect(()=>{
    const update = () => { const w=window.innerWidth; if(w<640)setCols(1); else if(w<1024)setCols(2); else setCols(3); };
    update(); window.addEventListener('resize',update); return()=>window.removeEventListener('resize',update);
  },[]);

  const columns = useMemo(()=>{
    const cols_=Array.from({length:cols},()=>[]); const heights=Array(cols).fill(0);
    blessings.forEach(b=>{ const mi=heights.indexOf(Math.min(...heights)); cols_[mi].push(b); heights[mi]+=120+(b.blessing.length*.6); });
    return cols_;
  },[blessings,cols]);

  const bwRootRef = useRef(null);
  const bwPetalRef = useRef(null);
  useGuestFloraGsap(bwRootRef, cfg.theme, {blessing:true, petalRef:bwPetalRef});

  return (
    <div ref={bwRootRef} style={{position:'relative',isolation:'isolate',minHeight:'100vh',backgroundImage:'none',backgroundSize:gs.pagePatternSize||'auto',backgroundRepeat:gs.pagePatternMode==='scene'?'repeat-x':gs.pagePatternMode==='top-scene'?'no-repeat':(gs.pagePatternRepeat||'repeat'),backgroundPosition:gs.pagePatternMode==='scene'?'left bottom':gs.pagePatternMode==='top-scene'?'top center':(gs.pagePatternPos||'0 0')}}>
      <ThemeFloraBg themeKey={cfg.theme} />
      <div ref={bwPetalRef} aria-hidden="true" style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none',overflow:'hidden'}} />
      {cfg.theme==='dark' && <NightArch />}
    <div style={{padding:'40px 20px 80px',maxWidth:1200,margin:'0 auto',position:'relative',zIndex:1}}>
      {/* 標題區 */}
      <div style={{textAlign:'center',marginBottom:40}}>
        <div style={{fontFamily:gs.labelFont,fontSize:12,letterSpacing:gs.labelSpacing,
          color:gs.primary,textTransform:gs.labelCase,marginBottom:10}}>BLESSING WALL</div>
        <div style={{fontFamily:gs.headingFont||FONT_STACK,fontSize:28,letterSpacing:3,
          color:gs.text,marginBottom:8}}>給新人的祝福</div>
        <div style={{fontSize:13,color:gs.subText}}>來自親友們的溫暖祝福　·　共 {blessings.length} 則</div>
        {guestDeco(cfg.theme)
          ? <div style={{margin:'18px auto 0',fontSize:14,color:gs.primary,letterSpacing:6,opacity:.6}}>{guestDeco(cfg.theme)}　{guestDeco(cfg.theme)}　{guestDeco(cfg.theme)}</div>
          : <div style={{margin:'18px auto 0',width:60,height:1,background:gs.border}} />}
      </div>

      <ThemeDivider themeKey={cfg.theme} mw={1160} my={14} />

      {blessings.length === 0 ? (
        <div style={{textAlign:'center',padding:'80px 20px',color:gs.subText}}>
          <div style={{fontSize:48,marginBottom:16,opacity:.5}}>{guestDeco(cfg.theme)}</div>
          <div style={{fontSize:14,marginBottom:6}}>目前還沒有公開的祝福</div>
          <div style={{fontSize:12}}>歡迎在邀請函留下祝福，並勾選公開讓大家看到 💝</div>
        </div>
      ) : (
        <div style={{display:'grid',gridTemplateColumns:`repeat(${cols},1fr)`,gap:16,alignItems:'start'}}>
          {columns.map((col,ci)=>(
            <div key={ci} style={{display:'flex',flexDirection:'column',gap:16}}>
              {col.map((g,gi)=>{
                const info=GI[g.side]||{color:gs.primary,soft:'#E8E8E8',label:''};
                const cardBg=cardBgs[(ci*7+gi)%cardBgs.length];
                const seed=(g.id.charCodeAt(0)||0)*7+(g.id.charCodeAt(1)||0)*3+(g.id.charCodeAt(2)||0);
                const rotate=gs.blessingRotate?((seed%17)-8)*.35:0;
                const nudgeY=gs.blessingRotate?((seed%9)-4)*3:0;
                const cardText=gs.blessingCardText||'#3A332B';
                const borderColor=gs.blessingBorderColor||(gs.dark?'rgba(255,255,255,.06)':'rgba(255,255,255,.6)');
                return (
                  <div key={g.id} data-tp="1" data-wfade="1" style={{
                    background:cardBg, padding:'22px 22px 18px',
                    borderRadius:gs.blessingRadius,
                    boxShadow:gs.shadow,
                    transform:`rotate(${rotate}deg) translateY(${nudgeY}px)`,
                    transition:'transform .3s ease, box-shadow .3s ease',
                    position:'relative', border:`1px solid ${borderColor}`
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.transform=`rotate(0deg) translateY(-2px)`;e.currentTarget.style.boxShadow='0 8px 20px rgba(58,51,43,.12), 0 2px 5px rgba(58,51,43,.06)';}}
                  onMouseLeave={e=>{e.currentTarget.style.transform=`rotate(${rotate}deg) translateY(${nudgeY}px)`;e.currentTarget.style.boxShadow=gs.shadow;}}>
                    <div data-tp="1" style={{position:'absolute',top:14,right:18,fontSize:18,opacity:.25,color:gs.primary}}>{guestDeco(cfg.theme)}</div>
                    <div data-tp="1" style={{fontSize:14,lineHeight:1.85,color:cardText,whiteSpace:'pre-line',
                      fontFamily:gs.headingFont||'"Noto Serif TC",serif',marginBottom:16,letterSpacing:.3}}>
                      "{g.blessing}"
                    </div>
                    <div data-tp="1" style={{borderTop:`1px dashed ${gs.dark?'rgba(255,255,255,.12)':'rgba(58,51,43,.12)'}`,paddingTop:10,
                      display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                      <div data-tp="1" style={{fontSize:13,fontWeight:600,color:cardText}}>
                        — {g.nickname || g.name}
                      </div>
                      {info.label && <span data-tp="1" style={{fontSize:10,padding:'2px 7px',
                        background:gs.dark?'rgba(255,255,255,.08)':'rgba(255,255,255,.5)',
                        color:gs.dark?gs.primary:info.color,borderRadius:gs.blessingRadius,
                        border:`1px solid ${(gs.dark?gs.primary:info.color)+'40'}`}}>{info.label}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
      {/* v6.17.1 頁尾（❀ 新人 · 日期 ❀ + 由 對好入座 提供；極簡黑無符號） */}
      <div style={{textAlign:'center',padding:'30px 20px 8px',color:gs.mutedText,fontSize:11,letterSpacing:1.5}}>
        <div>
          {guestDeco(cfg.theme) && <span style={{color:gs.primary,opacity:.7}}>{guestDeco(cfg.theme)}　</span>}
          {cfg.groomName} ＆ {cfg.brideName}{cfg.weddingDate?`　·　${cfg.weddingDate}`:''}
          {guestDeco(cfg.theme) && <span style={{color:gs.primary,opacity:.7}}>　{guestDeco(cfg.theme)}</span>}
        </div>
        <div style={{marginTop:6,fontSize:10,opacity:.65}}>由 對好入座 提供</div>
      </div>
    </div>
    </div>
  );
}


// ============================================================
// GUEST EDIT MODAL
// ============================================================
function GuestModal({open,guest,allGuests,onSave,onClose,onDelete,groupInfo}) {
  const GI = groupInfo || GROUP_INFO;
  const [g,setG] = useState(null);
  useEffect(()=>{
    if(open) setG(guest?{...guest}:{
      id:uid(),name:'',nickname:'',side:Object.keys(GI)[2]||Object.keys(GI)[0],subGroup:(GI[Object.keys(GI)[2]]||GI[Object.keys(GI)[0]]).subs[0],
      attending:true,count:1,vegCount:0,special:'',notes:'',
      sameTable:[],avoidTable:[],tableId:null,startSeat:null,needInvitation:false,address:'',
      blessing:'',publicBlessing:false
    });
  },[open,guest]);
  if(!open||!g) return null;
  const up = (k,v) => setG(p=>({...p,[k]:v}));
  const others = allGuests.filter(x=>x.id!==g.id);
  const stGuests = (g.sameTable||[]).map(id=>others.find(o=>o.id===id)).filter(Boolean);
  const avGuests = (g.avoidTable||[]).map(id=>others.find(o=>o.id===id)).filter(Boolean);
  const stOpts = others.filter(o=>!(g.sameTable||[]).includes(o.id));
  const avOpts = others.filter(o=>!(g.avoidTable||[]).includes(o.id));
  const save = () => {
    if(!g.name.trim()){uiAlert('請輸入姓名');return;}
    onSave({...g,name:g.name.trim(),count:Math.max(1,+g.count||1),vegCount:Math.max(0,Math.min(+g.count||1,+g.vegCount||0))});
  };
  return (
    <Modal open={open} onClose={onClose} title={guest?'編輯賓客':'新增賓客'} width={680}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <Field label="姓名" required><TInput value={g.name} onChange={v=>up('name',v)} /></Field>
        <Field label="暱稱"><TInput value={g.nickname||''} onChange={v=>up('nickname',v)} /></Field>
      </div>
      <Field label="分類">
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:7,marginBottom:8}}>
          {orderedGroupEntries(GI).map(([k,info])=>(
            <button key={k} type="button" onClick={()=>{up('side',k);if(!info.subs.includes(g.subGroup))up('subGroup',info.subs[0]);}}
              style={{padding:'7px',fontSize:12,borderRadius:2,background:g.side===k?info.color:'#F9F5EF',
                color:g.side===k?'#FFFEFA':'#6B6259',border:`1px solid ${g.side===k?info.color:'#E5DDD0'}`}}>{info.label}</button>
          ))}
        </div>
        <TSelect value={g.subGroup||''} onChange={v=>up('subGroup',v)} options={(GI[g.side]||GI[Object.keys(GI)[0]]).subs} />
      </Field>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
        <Field label="出席">
          <div style={{display:'flex',gap:4}}>
            {[{v:true,l:'出席',c:'#7BA77B'},{v:false,l:'婉拒',c:'#BF7090'}].map(o=>(
              <button key={String(o.v)} type="button" onClick={()=>up('attending',o.v)} style={{
                flex:1,padding:'7px 4px',fontSize:12,borderRadius:2,
                background:g.attending===o.v?o.c:'#F9F5EF',color:g.attending===o.v?'#FFFEFA':'#6B6259',
                border:`1px solid ${g.attending===o.v?o.c:'#E5DDD0'}`}}>{o.l}</button>
            ))}
          </div>
        </Field>
        <Field label="人數"><TInput type="number" value={g.count} onChange={v=>up('count',v)} disabled={!g.attending} /></Field>
        <Field label="素食人數"><TInput type="number" value={g.vegCount} onChange={v=>up('vegCount',v)} disabled={!g.attending} /></Field>
      </div>
      <Field label="特殊需求" hint="帶太太、輪椅、過敏等">
        <TInput value={g.special||''} onChange={v=>up('special',v)} />
      </Field>
      <Field label="想同桌">
        <div style={{minHeight:34,padding:7,border:'1px solid #E5DDD0',borderRadius:2,display:'flex',flexWrap:'wrap',gap:5,marginBottom:5}}>
          {!stGuests.length&&<span style={{color:'#9A8F82',fontSize:12}}>未設定</span>}
          {stGuests.map(o=><Tag key={o.id} color="#7BA77B" soft="#E5F0E5" small onRemove={()=>up('sameTable',(g.sameTable||[]).filter(x=>x!==o.id))}>{o.name}</Tag>)}
        </div>
        {stOpts.length>0&&<TSelect value="" onChange={v=>{if(v)up('sameTable',[...(g.sameTable||[]),v]);}}
          options={[{v:'',l:'+ 新增同桌偏好'},...stOpts.map(o=>({v:o.id,l:o.name+(o.nickname?` (${o.nickname})`:'')}))]} />}
      </Field>
      <Field label="要避桌">
        <div style={{minHeight:34,padding:7,border:'1px solid #E5DDD0',borderRadius:2,display:'flex',flexWrap:'wrap',gap:5,marginBottom:5}}>
          {!avGuests.length&&<span style={{color:'#9A8F82',fontSize:12}}>未設定</span>}
          {avGuests.map(o=><Tag key={o.id} color="#C04040" soft="#FAEEEE" small onRemove={()=>up('avoidTable',(g.avoidTable||[]).filter(x=>x!==o.id))}>{o.name}</Tag>)}
        </div>
        {avOpts.length>0&&<TSelect value="" onChange={v=>{if(v)up('avoidTable',[...(g.avoidTable||[]),v]);}}
          options={[{v:'',l:'+ 新增避桌名單'},...avOpts.map(o=>({v:o.id,l:o.name+(o.nickname?` (${o.nickname})`:'')}))]} />}
      </Field>
      <Field label="備註（內部用）"><TTextarea value={g.notes||''} onChange={v=>up('notes',v)} rows={2} /></Field>
      {g.blessing && g.blessing.trim() && (
        <Field label="祝福公開">
          <label style={{display:'flex',alignItems:'center',gap:8,cursor:'pointer',fontSize:13,color:'#6B6259'}}>
            <input type="checkbox" checked={g.publicBlessing||false} onChange={e=>up('publicBlessing',e.target.checked)} style={{cursor:'pointer'}} />
            顯示在祝福牆（公開頁面）
          </label>
          {g.blessing && <div style={{marginTop:6,padding:'8px 10px',background:'#F9F5EF',borderRadius:2,fontSize:12,color:'#9A8F82',fontStyle:'italic',maxHeight:60,overflow:'hidden',lineHeight:1.5}}>「{g.blessing.slice(0,60)}{g.blessing.length>60?'…':''}」</div>}
        </Field>
      )}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:20,paddingTop:16,borderTop:'1px solid #E5DDD0'}}>
        {guest&&onDelete?<Btn v="red" size="sm" onClick={async()=>{if(await uiConfirm({title:'刪除賓客',message:'確定刪除這位賓客？此動作無法復原。',danger:true,confirmText:'刪除'})){onDelete(guest.id);onClose();}}}>🗑 刪除</Btn>:<div/>}
        <div style={{display:'flex',gap:8}}>
          <Btn v="ghost" onClick={onClose}>取消</Btn>
          <Btn onClick={save}>儲存</Btn>
        </div>
      </div>
    </Modal>
  );
}

// ============================================================
// AVOID PAIRS MODAL
// ============================================================
function AvoidPairsModal({open,onClose,data,onUpdate}) {
  const [a,setA] = useState('');
  const [b,setB] = useState('');
  // 本地 state 確保新增後立即反映在列表
  const [localPairs, setLocalPairs] = useState([]);
  const [flash, setFlash] = useState(''); // 新增成功的提示
  const guests = data.guests;

  // Modal 打開時：自動合併 avoidPairs 與 guest.avoidTable 衍生對（雙向同步初始化）
  useEffect(()=>{
    if (!open) return;
    const existing = data.avoidPairs || [];
    const derived = []; const seen = new Set();
    existing.forEach(([pa,pb])=>{ seen.add([pa,pb].sort().join('|')); });
    data.guests.forEach(g=>{
      (g.avoidTable||[]).forEach(otherId=>{
        const key = [g.id,otherId].sort().join('|');
        if (seen.has(key)) return; seen.add(key);
        derived.push([g.id,otherId]);
      });
    });
    setLocalPairs([...existing, ...derived]);
  },[open]);

  const pairs = localPairs;

  // 核心：更新時同步 avoidPairs 與 guest.avoidTable（雙向同步）
  const syncToData = (newPairs) => {
    // 從 newPairs 建立每位賓客的 avoidTable 集合
    const avoidMap = {};
    newPairs.forEach(([pa,pb])=>{
      if (!avoidMap[pa]) avoidMap[pa] = new Set();
      if (!avoidMap[pb]) avoidMap[pb] = new Set();
      avoidMap[pa].add(pb);
      avoidMap[pb].add(pa);
    });
    // 更新每位賓客的 avoidTable
    const newGuests = data.guests.map(g => {
      const set = avoidMap[g.id] || new Set();
      return { ...g, avoidTable: Array.from(set) };
    });
    setLocalPairs(newPairs);
    onUpdate({ ...data, avoidPairs: newPairs, guests: newGuests });
  };

  const gName = id => {
    const g = guests.find(x=>x.id===id);
    return g ? (g.nickname||g.name) : id;
  };

  const conflicts = useMemo(()=>{
    return pairs.filter(([pa,pb])=>{
      const ga = guests.find(g=>g.id===pa), gb = guests.find(g=>g.id===pb);
      return ga&&gb&&ga.attending&&gb.attending&&ga.tableId&&ga.tableId===gb.tableId;
    });
  },[pairs,guests]);

  const addPair = () => {
    if(!a||!b||a===b) return;
    const exists = pairs.some(([pa,pb])=>(pa===a&&pb===b)||(pa===b&&pb===a));
    if(exists){uiAlert('這組配對已存在');return;}
    syncToData([...pairs,[a,b]]);
    const ga = guests.find(g=>g.id===a), gb = guests.find(g=>g.id===b);
    setFlash(`✅ 已建立避桌：${ga?.nickname||ga?.name} ↔ ${gb?.nickname||gb?.name}`);
    setTimeout(()=>setFlash(''), 2500);
    setA(''); setB('');
  };
  const removePair = async i => {
    const [pa,pb] = pairs[i];
    const ga = guests.find(g=>g.id===pa), gb = guests.find(g=>g.id===pb);
    if (!await uiConfirm(`確定移除「${ga?.nickname||ga?.name||pa} ↔ ${gb?.nickname||gb?.name||pb}」？`)) return;
    const next = [...pairs]; next.splice(i,1);
    syncToData(next);
  };

  const opts = [{v:'',l:'— 選擇賓客 —'},...guests.map(g=>({v:g.id,l:g.name+(g.nickname?` (${g.nickname})`:'')}))];

  return (
    <Modal open={open} onClose={onClose} title={`避免同桌管理　${pairs.length} 組`} width={600}>
      {conflicts.length>0 && (
        <div style={{background:'#FAEEEE',border:'1px solid #E0BCBC',borderRadius:2,padding:'10px 14px',marginBottom:16,color:'#C04040',fontSize:12}}>
          ⚠ {conflicts.length} 組避桌關係的賓客目前被排在同一桌
        </div>
      )}
      {flash && (
        <div style={{background:'#E8F5E8',border:'1px solid #B5D5B5',borderRadius:2,padding:'10px 14px',marginBottom:16,color:'#2A6B2A',fontSize:13}}>
          {flash}
        </div>
      )}
      <div style={{fontSize:11,color:'#9A8F82',marginBottom:12,lineHeight:1.6}}>
        💡 提示：在此新增的避桌配對會自動同步到對應賓客的個別設定，並顯示在名單列表的避桌欄位中。
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr auto',gap:8,alignItems:'center',marginBottom:16}}>
        <TSelect value={a} onChange={setA} options={opts} />
        <span style={{color:'#9A8F82',fontSize:12,padding:'0 4px'}}>vs</span>
        <TSelect value={b} onChange={setB} options={opts} />
        <Btn onClick={addPair} disabled={!a||!b||a===b} size="sm">新增</Btn>
      </div>
      <div style={{maxHeight:340,overflowY:'auto'}}>
        {pairs.map(([pa,pb],i)=>{
          const conflict = conflicts.some(([ca,cb])=>(ca===pa&&cb===pb)||(ca===pb&&cb===pa));
          return (
            <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',
              padding:'10px 12px',marginBottom:6,borderRadius:2,
              background:conflict?'#FFF0F0':'#F9F5EF',border:`1px solid ${conflict?'#E0BCBC':'#E5DDD0'}`}}>
              <div style={{display:'flex',alignItems:'center',gap:8,fontSize:13}}>
                <Tag small color="#B5895F" soft="#EFE3D0">{gName(pa)}</Tag>
                <span style={{color:'#9A8F82',fontSize:11}}>避桌</span>
                <Tag small color="#B5895F" soft="#EFE3D0">{gName(pb)}</Tag>
                {conflict && <span style={{color:'#C04040',fontSize:11}}>⚠ 同桌衝突</span>}
              </div>
              <Btn v="red" size="sm" onClick={()=>removePair(i)}>移除</Btn>
            </div>
          );
        })}
        {pairs.length===0 && <div style={{padding:32,textAlign:'center',color:'#9A8F82',fontSize:13}}>尚未設定任何避桌配對</div>}
      </div>
    </Modal>
  );
}


// ============================================================
// SAME TABLE PAIRS MODAL  — 同桌偏好管理（v4.12）
// ============================================================
function SameTablePairsModal({open,onClose,data,onUpdate}) {
  const [a,setA] = useState('');
  const [b,setB] = useState('');
  const [localPairs, setLocalPairs] = useState([]);
  const [flash, setFlash] = useState('');
  const guests = data.guests;

  // Modal 打開時：合併 samePairs 與 guest.sameTable 衍生對
  useEffect(()=>{
    if (!open) return;
    const existing = data.samePairs || [];
    const derived = []; const seen = new Set();
    existing.forEach(([pa,pb])=>{ seen.add([pa,pb].sort().join('|')); });
    data.guests.forEach(g=>{
      (g.sameTable||[]).forEach(otherId=>{
        const key = [g.id,otherId].sort().join('|');
        if (seen.has(key)) return; seen.add(key);
        derived.push([g.id,otherId]);
      });
    });
    setLocalPairs([...existing, ...derived]);
  },[open]);

  const pairs = localPairs;

  // 雙向同步 samePairs ↔ guest.sameTable
  const syncToData = (newPairs) => {
    const sameMap = {};
    newPairs.forEach(([pa,pb])=>{
      if (!sameMap[pa]) sameMap[pa] = new Set();
      if (!sameMap[pb]) sameMap[pb] = new Set();
      sameMap[pa].add(pb);
      sameMap[pb].add(pa);
    });
    const newGuests = data.guests.map(g => {
      const set = sameMap[g.id] || new Set();
      return { ...g, sameTable: Array.from(set) };
    });
    setLocalPairs(newPairs);
    onUpdate({ ...data, samePairs: newPairs, guests: newGuests });
  };

  const gName = id => {
    const g = guests.find(x=>x.id===id);
    return g ? (g.nickname||g.name) : id;
  };

  // 「未滿足」= 兩人都有排桌卻不同桌，或其中一人未排桌
  const unmet = useMemo(()=>{
    return pairs.filter(([pa,pb])=>{
      const ga = guests.find(g=>g.id===pa), gb = guests.find(g=>g.id===pb);
      if (!ga||!gb||!ga.attending||!gb.attending) return false;
      if (!ga.tableId || !gb.tableId) return true;   // 至少一人未排桌
      return ga.tableId !== gb.tableId;               // 已排但不同桌
    });
  },[pairs,guests]);

  const addPair = () => {
    if(!a||!b||a===b) return;
    const exists = pairs.some(([pa,pb])=>(pa===a&&pb===b)||(pa===b&&pb===a));
    if(exists){uiAlert('這組配對已存在');return;}
    syncToData([...pairs,[a,b]]);
    const ga = guests.find(g=>g.id===a), gb = guests.find(g=>g.id===b);
    setFlash(`✅ 已建立同桌偏好：${ga?.nickname||ga?.name} ↔ ${gb?.nickname||gb?.name}`);
    setTimeout(()=>setFlash(''), 2500);
    setA(''); setB('');
  };
  const removePair = async i => {
    const [pa,pb] = pairs[i];
    const ga = guests.find(g=>g.id===pa), gb = guests.find(g=>g.id===pb);
    if (!await uiConfirm(`確定移除「${ga?.nickname||ga?.name||pa} ↔ ${gb?.nickname||gb?.name||pb}」？`)) return;
    const next = [...pairs]; next.splice(i,1);
    syncToData(next);
  };

  const opts = [{v:'',l:'— 選擇賓客 —'},...guests.map(g=>({v:g.id,l:g.name+(g.nickname?` (${g.nickname})`:'')}))];

  return (
    <Modal open={open} onClose={onClose} title={`同桌偏好管理　${pairs.length} 組`} width={600}>
      {unmet.length>0 && (
        <div style={{background:'#FFFBE8',border:'1px solid #E8D86A',borderRadius:2,padding:'10px 14px',marginBottom:16,color:'#7A5C00',fontSize:12}}>
          💛 {unmet.length} 組同桌偏好尚未滿足（賓客未排桌或排在不同桌）
        </div>
      )}
      {flash && (
        <div style={{background:'#E8F5E8',border:'1px solid #B5D5B5',borderRadius:2,padding:'10px 14px',marginBottom:16,color:'#2A6B2A',fontSize:13}}>
          {flash}
        </div>
      )}
      <div style={{fontSize:11,color:'#9A8F82',marginBottom:12,lineHeight:1.6}}>
        💡 提示：在此新增的同桌偏好會自動同步到對應賓客的個別設定，並顯示在名單列表的同桌欄位中。
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr auto',gap:8,alignItems:'center',marginBottom:16}}>
        <TSelect value={a} onChange={setA} options={opts} />
        <span style={{color:'#9A8F82',fontSize:12,padding:'0 4px'}}>同桌</span>
        <TSelect value={b} onChange={setB} options={opts} />
        <Btn onClick={addPair} disabled={!a||!b||a===b} size="sm">新增</Btn>
      </div>
      <div style={{maxHeight:340,overflowY:'auto'}}>
        {pairs.map(([pa,pb],i)=>{
          const isUnmet = unmet.some(([ca,cb])=>(ca===pa&&cb===pb)||(ca===pb&&cb===pa));
          return (
            <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',
              padding:'10px 12px',marginBottom:6,borderRadius:2,
              background:isUnmet?'#FFFBE8':'#F9F5EF',border:`1px solid ${isUnmet?'#E8D86A':'#E5DDD0'}`}}>
              <div style={{display:'flex',alignItems:'center',gap:8,fontSize:13}}>
                <Tag small color="#7BA77B" soft="#E5F0E5">{gName(pa)}</Tag>
                <span style={{color:'#9A8F82',fontSize:11}}>同桌</span>
                <Tag small color="#7BA77B" soft="#E5F0E5">{gName(pb)}</Tag>
                {isUnmet && <span style={{color:'#7A5C00',fontSize:11}}>💛 未滿足</span>}
              </div>
              <Btn v="red" size="sm" onClick={()=>removePair(i)}>移除</Btn>
            </div>
          );
        })}
        {pairs.length===0 && <div style={{padding:32,textAlign:'center',color:'#9A8F82',fontSize:13}}>尚未設定任何同桌偏好</div>}
      </div>
    </Modal>
  );
}


// ============================================================
// ADMIN PAGE
// ============================================================
// ============================================================
// v6.16.0 後台主題裝飾（花卉 chrome 層）+ GSAP 微互動
// 只動 chrome 層；排位畫布（data-tp / 拖曳 / 樂觀鎖 / presence）完全不碰。
// ============================================================
let _boGsapPromise = null;
function loadBoGsap(){
  if (typeof window === 'undefined' || typeof document === 'undefined') return Promise.resolve(null);
  if (window.gsap) return Promise.resolve(window.gsap);
  if (_boGsapPromise) return _boGsapPromise;
  _boGsapPromise = new Promise((res)=>{
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    s.async = true;
    s.onload = ()=>res(window.gsap || null);
    s.onerror = ()=>res(null);
    document.head.appendChild(s);
  });
  return _boGsapPromise;
}
// 切頁 / 換主題時：整頁淡入 + 統計卡/區塊錯落。realtime 資料更新「不在依賴內」→ 不重播。
function useBackofficeGsap(ref, page, themeKey){
  useEffect(()=>{
    let alive = true, ctx = null;
    loadBoGsap().then((gsap)=>{
      if(!alive || !gsap || !ref.current) return;
      ctx = gsap.context(()=>{
        gsap.from(ref.current, { opacity:0, duration:.3, ease:'power1.out' });   // 只用透明度，不加 transform → 不影響排位畫布座標
        const items = ref.current.querySelectorAll('.wed-stats > *, [data-bo-stagger]');
        if(items.length) gsap.from(items, { opacity:0, y:12, duration:.34, stagger:.05, delay:.05, ease:'power2.out' });
      }, ref);
    });
    return ()=>{ alive=false; if(ctx) ctx.revert(); };
  }, [page, themeKey]);
}
// v6.17.0 賓客端進場動畫 + 祝福牆環境花瓣（優雅內斂；無漂浮；data-tp 排位畫布完全不碰）
function useGuestFloraGsap(ref, themeKey, opts){
  const blessing = !!(opts && opts.blessing);
  const petalRef = opts && opts.petalRef;
  useEffect(()=>{
    let alive=true, ctx=null; const timers=[];
    const reduce = (typeof window!=='undefined') && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const noFlower = !!(THEME_FLOWERS[themeKey] && THEME_FLOWERS[themeKey].noFlower);
    loadBoGsap().then((gsap)=>{
      if(!alive || !gsap || !ref.current) return;
      ctx = gsap.context(()=>{
        gsap.from(ref.current,{opacity:0,duration:.45,ease:'power1.out'});           // 整頁淡入（僅透明度）
        const fl=ref.current.querySelectorAll('[data-flora]');
        if(fl.length) gsap.from(fl,{opacity:0,duration:.9,delay:.05,ease:'power1.out'});
        if(!reduce){
          const cards=ref.current.querySelectorAll('[data-stagger]');
          if(cards.length) gsap.from(cards,{opacity:0,y:14,duration:.6,stagger:.07,delay:.12,ease:'power2.out'});
          const wfade=ref.current.querySelectorAll('[data-wfade]');                  // 祝福卡：僅透明度，不碰 transform（旋轉/hover不壞）
          if(wfade.length) gsap.from(wfade,{opacity:0,duration:.5,stagger:.05,delay:.1,ease:'power1.out'});
        }
      }, ref);
      if(blessing && !reduce && !noFlower && petalRef && petalRef.current){
        const layer=petalRef.current; const t=THEMES[themeKey]||THEMES.cream;
        const petalSvg='<svg width="16" height="16" viewBox="0 0 18 18"><path d="M9 1 C16 4 16 14 9 17 C2 14 2 4 9 1 Z" fill="'+t.primary+'" fill-opacity="'+(t.dark?.5:.6)+'"/></svg>';
        const spawn=()=>{
          if(!alive || !layer.isConnected) return;
          const d=document.createElement('div');
          d.style.cssText='position:absolute;top:-24px;will-change:transform,opacity;pointer-events:none';
          d.style.left=(Math.random()*(layer.clientWidth||320))+'px';
          d.innerHTML=petalSvg;
          layer.appendChild(d);
          const dur=9+Math.random()*6, sc=.6+Math.random()*.7;
          gsap.fromTo(d,{y:-24,opacity:0,rotation:Math.random()*60},
            {y:(layer.clientHeight||window.innerHeight||700)+40,x:'+='+(Math.random()*80-40),rotation:'+='+(160+Math.random()*180),scale:sc,opacity:.85,duration:dur,ease:'none',onComplete:()=>d.remove()});
          gsap.to(d,{opacity:0,duration:2,delay:Math.max(dur-2.4,0.1)});
          timers.push(setTimeout(spawn,1100+Math.random()*1000));
        };
        for(let i=0;i<3;i++) timers.push(setTimeout(spawn,i*700));
      }
    });
    return ()=>{ alive=false; timers.forEach(clearTimeout); if(ctx) ctx.revert(); if(petalRef&&petalRef.current) petalRef.current.innerHTML=''; };
  }, [themeKey]);
}
// 後台頁首裝飾條：細線 + 主題花卉（極簡黑用 seatright 字標）。純裝飾、不攔截事件。
function ThemeChromeStrip({ themeKey }){
  const t = THEMES[themeKey] || THEMES.cream;
  const img = flowerImg(themeKey);
  return (
    <div aria-hidden="true" style={{display:'flex',alignItems:'center',gap:12,padding:'12px 22px 0',pointerEvents:'none'}}>
      <span style={{flex:1,height:1,background:t.border,opacity:.75}} />
      {img
        ? <img src={img} loading="lazy" alt="" style={{width:26,height:26,objectFit:'contain',opacity:.92,flex:'none'}} />
        : <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,letterSpacing:.5,color:t.primary,opacity:.85,flex:'none'}}>seat<b>right</b></span>}
    </div>
  );
}
// 包住後台頁面：頂部裝飾條 + GSAP 進場。一處套用 admin/seating/info。
function BackofficeChrome({ themeKey, page, children }){
  const ref = useRef(null);
  useBackofficeGsap(ref, page, themeKey);
  return (
    <div ref={ref} style={{position:'relative',isolation:'isolate'}}>
      {page==='info' && <ThemeFloraBg themeKey={themeKey} />}
      {children}
    </div>
  );
}

function AdminPage({data,onUpdate,weddingId,isPro}) {
  const GI = getGroupInfo(data.config);
  const [search,setSearch] = useState('');
  const [filterSide,setFilterSide] = useState('all');
  const [showDeclined,setShowDeclined] = useState(false);
  const [sortCol,setSortCol] = useState('submittedAt');
  const [sortAsc,setSortAsc] = useState(true);
  const [editG,setEditG] = useState(null);
  const [blessingView,setBlessingView] = useState(null);  // 祝福浮窗
  const [showAdd,setShowAdd] = useState(false);
  const [showAvoid,setShowAvoid] = useState(false);
  const [showSame,setShowSame]   = useState(false);

  // v6.15.0：新人(isCouple)只存在於排位，不計入名單統計
  const realGuests = data.guests.filter(g=>!g.isCouple);
  const attending = realGuests.filter(g=>g.attending);
  const totalCount = attending.reduce((s,g)=>s+(g.count||0),0);
  const vegTotal  = attending.reduce((s,g)=>s+(g.vegCount||0),0);
  const meatTotal = totalCount-vegTotal;
  const totalSeats= data.tables.reduce((s,t)=>s+(t.capacity||0),0);
  const guestSeats= Math.max(0, totalSeats-2);   // 新人預佔2席
  const seated    = attending.filter(g=>g.tableId).reduce((s,g)=>s+(g.count||0),0);
  const declined  = realGuests.filter(g=>!g.attending).length;
  const cookieTotal = attending.reduce((s,g)=>s+(g.cookieCount||0),0);   // 喜餅總數
  const sideAttend = (k)=>attending.filter(g=>g.side===k).reduce((s,g)=>s+(g.count||0),0);
  const groomAttend=sideAttend('groom'), brideAttend=sideAttend('bride'), sharedAttend=sideAttend('shared');

  const avoidConflicts = useMemo(()=>effectiveAvoidPairs(data).filter(([a,b])=>{
    const ga=data.guests.find(g=>g.id===a),gb=data.guests.find(g=>g.id===b);
    return ga&&gb&&ga.attending&&gb.attending&&ga.tableId&&ga.tableId===gb.tableId;
  }),[data.avoidPairs,data.guests]);

  const sameUnmetCount = useMemo(()=>effectiveSamePairs(data).filter(([a,b])=>{
    const ga=data.guests.find(g=>g.id===a),gb=data.guests.find(g=>g.id===b);
    if (!ga||!gb||!ga.attending||!gb.attending) return false;
    if (!ga.tableId||!gb.tableId) return true;
    return ga.tableId!==gb.tableId;
  }).length,[data.samePairs,data.guests]);

  const toggleSort = col => {
    if(sortCol===col) setSortAsc(p=>!p);
    else { setSortCol(col); setSortAsc(true); }
  };

  const filtered = data.guests.filter(g=>{
    if(g.isCouple) return false;   // v6.15.0：新人不列入名單清單
    if(!showDeclined&&!g.attending) return false;
    if(filterSide!=='all'&&g.side!==filterSide) return false;
    if(search){
      const q=search.toLowerCase();
      if(!(g.name||'').toLowerCase().includes(q)&&!(g.nickname||'').toLowerCase().includes(q)&&!(g.subGroup||'').toLowerCase().includes(q)) return false;
    }
    return true;
  }).sort((a,b)=>{
    let av='',bv='';
    if(sortCol==='分類')   {av=GI[a.side]?.label||'';bv=GI[b.side]?.label||'';}
    if(sortCol==='子分類') {av=a.subGroup||'';bv=b.subGroup||'';}
    if(sortCol==='桌號')   {
      const ta=data.tables.find(t=>t.id===a.tableId)?.name||'zzz';
      const tb=data.tables.find(t=>t.id===b.tableId)?.name||'zzz';
      av=ta;bv=tb;
    }
    if(!av&&!bv){return a.attending===b.attending?((a.submittedAt||0)-(b.submittedAt||0)):a.attending?-1:1;}
    const r=av.localeCompare(bv,'zh');
    return sortAsc?r:-r;
  });

  const saveGuest = g => {
    const exists=data.guests.find(x=>x.id===g.id);
    onUpdate({...data,guests:exists?data.guests.map(x=>x.id===g.id?g:x):[...data.guests,g]});
    setEditG(null); setShowAdd(false);
  };
  const deleteGuest = id => {
    onUpdate({...data,
      guests:data.guests.filter(g=>g.id!==id).map(g=>({...g,sameTable:(g.sameTable||[]).filter(x=>x!==id),avoidTable:(g.avoidTable||[]).filter(x=>x!==id)})),
      avoidPairs:(data.avoidPairs||[]).filter(([a,b])=>a!==id&&b!==id)
    });
  };
  const toggleAtt = id => onUpdate({...data,guests:data.guests.map(g=>g.id===id?{...g,attending:!g.attending}:g)});
  const updCount  = (id,d) => onUpdate({...data,guests:data.guests.map(g=>g.id===id?{...g,count:Math.max(1,(g.count||1)+d)}:g)});
  const updCookie = (id,d) => onUpdate({...data,guests:data.guests.map(g=>g.id===id?{...g,cookieCount:Math.max(0,(g.cookieCount||0)+d)}:g)});

  const exportCSV = () => {
    const tn = id => data.tables.find(t=>t.id===id)?.name||'';
    const gn = id => data.guests.find(g=>g.id===id)?.name||'';
    const h=['姓名','暱稱','分類','子分類','出席','人數','素食','特殊需求','想同桌','要避桌','分區','桌號','備註','紙本喜帖','地址','祝福語','提交時間'];
    const rows=data.guests.filter(g=>!g.isCouple).map(g=>[
      g.name,g.nickname||'',GI[g.side]?.label||'',g.subGroup||'',
      g.attending?'出席':'婉拒',g.count,g.vegCount,g.special||'',
      (g.sameTable||[]).map(gn).join('、'),(g.avoidTable||[]).map(gn).join('、'),
      zoneNameOf(data,g.tableId),tn(g.tableId),g.notes||'',g.needInvitation?'是':'否',g.address||'',
      g.blessing||'',g.submittedAt?new Date(g.submittedAt).toLocaleString('zh-TW'):''
    ]);
    download('賓客名單_'+new Date().toISOString().slice(0,10)+'.csv',toCSV([h,...rows]),'text/csv;charset=utf-8;');
  };

  const exportInviteList = () => {
    const h=['姓名','暱稱','人數','地址','特殊需求'];
    const rows=data.guests.filter(g=>g.needInvitation&&g.attending).map(g=>[g.name,g.nickname||'',g.count,g.address||'',g.special||'']);
    if(!rows.length){uiAlert('沒有需要紙本喜帖的賓客');return;}
    download('索取紙本喜帖名單_'+new Date().toISOString().slice(0,10)+'.csv',toCSV([h,...rows]),'text/csv;charset=utf-8;');
  };

  const exportVegList = () => {
    const tn = id => data.tables.find(t=>t.id===id)?.name||'';
    const h=['姓名','暱稱','分類','子分類','總人數','素食數','分區','桌號'];
    const rows=data.guests.filter(g=>g.attending&&(g.vegCount||0)>0).map(g=>[
      g.name,g.nickname||'',GI[g.side]?.label||'',g.subGroup||'',g.count||1,g.vegCount||0,zoneNameOf(data,g.tableId),tn(g.tableId)
    ]);
    if(!rows.length){uiAlert('沒有素食賓客');return;}
    download('素食名單_'+new Date().toISOString().slice(0,10)+'.csv',toCSV([h,...rows]),'text/csv;charset=utf-8;');
  };

  const exportSpecialList = () => {
    const tn = id => data.tables.find(t=>t.id===id)?.name||'';
    const h=['姓名','暱稱','分類','子分類','人數','特殊需求','分區','桌號'];
    const rows=data.guests.filter(g=>g.attending&&g.special&&g.special.trim()).map(g=>[
      g.name,g.nickname||'',GI[g.side]?.label||'',g.subGroup||'',g.count||1,g.special,zoneNameOf(data,g.tableId),tn(g.tableId)
    ]);
    if(!rows.length){uiAlert('沒有特殊需求賓客');return;}
    download('特殊需求名單_'+new Date().toISOString().slice(0,10)+'.csv',toCSV([h,...rows]),'text/csv;charset=utf-8;');
  };

  const exportCookieList = () => {
    const h=['姓名','分類','子分類','出席','人數','喜餅數量'];
    const rows=data.guests.filter(g=>!g.isCouple&&(g.cookieCount||0)>0).map(g=>[
      g.name,GI[g.side]?.label||'',g.subGroup||'',g.attending?'出席':'婉拒',g.count||1,g.cookieCount||0
    ]);
    if(!rows.length){uiAlert('目前沒有設定發送喜餅的對象（喜餅數量皆為 0）');return;}
    // 末列小計：男方／女方／共同／總計
    const sub=(k)=>data.guests.filter(g=>!g.isCouple&&g.side===k).reduce((s,g)=>s+(g.cookieCount||0),0);
    const tot=rows.reduce((s,r)=>s+(r[5]||0),0);
    rows.push(['—小計—','','','','','']);
    rows.push(['男方',' ',' ',' ',' ',sub('groom')]);
    rows.push(['女方',' ',' ',' ',' ',sub('bride')]);
    rows.push(['共同',' ',' ',' ',' ',sub('shared')]);
    rows.push(['總計',' ',' ',' ',' ',tot]);
    download('預計發喜餅對象名單_'+new Date().toISOString().slice(0,10)+'.csv',toCSV([h,...rows]),'text/csv;charset=utf-8;');
  };

  const SortTh = ({col,children}) => (
    <th onClick={()=>toggleSort(col)} style={{padding:'11px 9px',textAlign:'left',fontWeight:500,color:'#6B6259',fontSize:12,letterSpacing:.3,whiteSpace:'nowrap',cursor:'pointer',userSelect:'none'}}>
      {children}{sortCol===col?(sortAsc?' ▲':' ▼'):''}
    </th>
  );

  return (
    <div style={{maxWidth:1400,margin:'0 auto',padding:'20px 16px'}}>
      {/* Header */}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:20,flexWrap:'wrap',gap:10}}>
        <div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,letterSpacing:6,color:'#B5895F'}}>ADMIN · GUEST LIST</div>
          <div style={{fontFamily:FONT_STACK,fontSize:26,letterSpacing:1,marginTop:2}}>名單管理</div>
        </div>
        <div style={{display:'flex',gap:7,flexWrap:'wrap'}}>
          {/* 複製邀請函連結 — 顯眼，讓新人快速取得賓客連結 */}
          {weddingId && (
            <Btn v="gold" size="sm" onClick={()=>{
              const link=`${window.location.origin}${window.location.pathname}#/w/${weddingId}`;
              try{ navigator.clipboard.writeText(link); uiAlert('✓ 邀請函連結已複製！\n\n' + link); }
              catch{ uiAlert('邀請函連結：\n' + link); }
            }}>🔗 複製邀請函連結</Btn>
          )}
          <Btn v="ghost" size="sm" onClick={()=>setShowAvoid(true)}>
            避桌管理 {avoidConflicts.length>0&&<span style={{background:'#C04040',color:'#fff',borderRadius:'50%',padding:'0 5px',fontSize:10,marginLeft:3}}>{avoidConflicts.length}</span>}
          </Btn>
          <Btn v="ghost" size="sm" onClick={()=>setShowSame(true)}>
            同桌管理 {sameUnmetCount>0&&<span style={{background:'#B5895F',color:'#fff',borderRadius:'50%',padding:'0 5px',fontSize:10,marginLeft:3}}>{sameUnmetCount}</span>}
          </Btn>
          {isPro
            ? <Dropdown label="匯出" items={[
                {label:'匯出 CSV (完整名單)', action: exportCSV},
                {label:'匯出索取紙本喜帖名單', action: exportInviteList},
                {label:'匯出素食名單', action: exportVegList},
                {label:'匯出特殊需求名單', action: exportSpecialList},
                {label:'🍪 預計發喜餅對象名單', action: exportCookieList}
              ]} />
            : <Btn v="ghost" size="sm" onClick={()=>uiProUpgrade('名單匯出為 Pro 方案專屬功能')} title="升級 Pro 解鎖匯出">🔒 匯出</Btn>}
          <Btn size="sm" onClick={()=>setShowAdd(true)}>＋ 新增賓客</Btn>
        </div>
      </div>

      <ThemeDivider themeKey={data.config?.theme} mw={1360} my={20} />

      {/* Stats */}
      <div className="wed-stats" style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:10,marginBottom:12}}>
        <div style={{...S.card,padding:'14px 16px'}}>
          <div style={{fontSize:11,color:'#9A8F82',letterSpacing:.3,marginBottom:2}}>確認出席</div>
          <div style={{fontFamily:FONT_STACK,fontSize:26,fontWeight:500,color:'#3A332B',lineHeight:1}}>{attending.length}</div>
          <div style={{fontSize:10,color:'#9A8F82',marginTop:2}}>{declined} 組婉拒</div>
        </div>
        <div style={{...S.card,padding:'14px 16px'}}>
          <div style={{fontSize:11,color:'#9A8F82',letterSpacing:.3,marginBottom:2}}>出席人數</div>
          <div style={{fontFamily:FONT_STACK,fontSize:26,fontWeight:500,color:'#3A332B',lineHeight:1}}>{totalCount}</div>
          <div style={{fontSize:10,color:'#9A8F82',marginTop:2}}>/ {guestSeats} 席（新人預佔2席）</div>
          <div style={{fontSize:11,marginTop:8,paddingTop:7,borderTop:'1px dashed #E8DECF',display:'flex',gap:9,flexWrap:'wrap'}}>
            <span style={{color:'#3A60A8'}}>男 <b style={{fontWeight:600}}>{groomAttend}</b></span>
            <span style={{color:'#BF7090'}}>女 <b style={{fontWeight:600}}>{brideAttend}</b></span>
            <span style={{color:'#B5895F'}}>共同 <b style={{fontWeight:600}}>{sharedAttend}</b></span>
          </div>
        </div>
        <div style={{...S.card,padding:'14px 16px'}}>
          <div style={{fontSize:11,color:'#9A8F82',letterSpacing:.3,marginBottom:2}}>葷食</div>
          <div style={{fontFamily:FONT_STACK,fontSize:26,fontWeight:500,color:'#B5895F',lineHeight:1}}>{meatTotal}</div>
        </div>
        <div style={{...S.card,padding:'14px 16px'}}>
          <div style={{fontSize:11,color:'#9A8F82',letterSpacing:.3,marginBottom:2}}>素食</div>
          <div style={{fontFamily:FONT_STACK,fontSize:26,fontWeight:500,color:'#7BA77B',lineHeight:1}}>{vegTotal}</div>
        </div>
        <div style={{...S.card,padding:'14px 16px'}}>
          <div style={{fontSize:11,color:'#9A8F82',letterSpacing:.3,marginBottom:2}}>🍪 喜餅數量</div>
          <div style={{fontFamily:FONT_STACK,fontSize:26,fontWeight:500,color:'#C77B3E',lineHeight:1}}>{cookieTotal}</div>
          <div style={{fontSize:10,color:'#9A8F82',marginTop:2}}>預計發出總數</div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{...S.card,padding:'12px 18px',marginBottom:16}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
          <div style={{fontSize:11,color:'#6B6259',letterSpacing:.5}}>席次使用進度</div>
          <div style={{fontSize:12,color:'#B5895F',fontWeight:500}}>{seated} / {guestSeats||0} 席　已排 {guestSeats?Math.round(seated/guestSeats*100):0}%</div>
        </div>
        <div style={{height:6,background:'#F1EAE0',borderRadius:3,overflow:'hidden'}}>
          <div style={{width:guestSeats?Math.min(100,seated/guestSeats*100)+'%':'0%',height:'100%',background:'#B5895F',transition:'width .4s'}} />
        </div>
      </div>

      {/* Filters */}
      <div style={{...S.card,padding:'13px 16px',marginBottom:10,display:'flex',gap:10,alignItems:'center',flexWrap:'wrap'}}>
        <TInput value={search} onChange={setSearch} placeholder="🔍 搜尋姓名／暱稱／子分類" style={{flex:'1 1 220px'}} />
        <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>
          {[{v:'all',l:'全部'},...Object.entries(GI).map(([k,info])=>({v:k,l:info.label}))].map(f=>(
            <button key={f.v} onClick={()=>setFilterSide(f.v)} style={{
              padding:'5px 11px',fontSize:11,letterSpacing:.3,borderRadius:2,
              background:filterSide===f.v?'#B5895F':'transparent',
              color:filterSide===f.v?'#FFFEFA':'#6B6259',
              border:`1px solid ${filterSide===f.v?'#B5895F':'#E5DDD0'}`}}>{f.l}</button>
          ))}
        </div>
        <label style={{display:'flex',alignItems:'center',gap:5,fontSize:12,color:'#6B6259',cursor:'pointer',whiteSpace:'nowrap'}}>
          <input type="checkbox" checked={showDeclined} onChange={e=>setShowDeclined(e.target.checked)} />
          顯示婉拒 ({declined})
        </label>
      </div>

      {/* Table */}
      <div style={{...S.card,overflow:'hidden'}}>
        <div className="wed-scroll wed-guest-table" style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}>
            <thead>
              <tr style={{background:'#F9F5EF',borderBottom:'1px solid #E5DDD0'}}>
                <th style={{padding:'11px 9px',textAlign:'left',fontWeight:500,color:'#6B6259',fontSize:12}}>姓名</th>
                <SortTh col="分類">分類</SortTh>
                <SortTh col="子分類">子分類</SortTh>
                <th style={{padding:'11px 9px',textAlign:'left',color:'#6B6259',fontSize:12,fontWeight:500}}>出席</th>
                <th style={{padding:'11px 9px',textAlign:'left',color:'#6B6259',fontSize:12,fontWeight:500}}>人數</th>
                <th style={{padding:'11px 9px',textAlign:'left',color:'#6B6259',fontSize:12,fontWeight:500}}>素食</th>
                <th style={{padding:'11px 9px',textAlign:'left',color:'#6B6259',fontSize:12,fontWeight:500,whiteSpace:'nowrap'}}>🍪 喜餅</th>
                <th style={{padding:'11px 9px',textAlign:'left',color:'#6B6259',fontSize:12,fontWeight:500,maxWidth:140}}>想同桌</th>
                <th style={{padding:'11px 9px',textAlign:'left',color:'#6B6259',fontSize:12,fontWeight:500,maxWidth:140}}>避桌</th>
                <th style={{padding:'11px 9px',textAlign:'left',color:'#6B6259',fontSize:12,fontWeight:500}}>特殊需求</th>
                <th style={{padding:'11px 9px',textAlign:'left',color:'#6B6259',fontSize:12,fontWeight:500}}>祝福</th>
                <SortTh col="桌號">桌號{(data.zones||[]).length>0?' / 分區':''}</SortTh>
                <th/>
              </tr>
            </thead>
            <tbody>
              {filtered.map(g=>{
                const info=GI[g.side]||{color:'#9A8F82',soft:'#E8E8E8',label:g.side||'—'};
                const tbl=data.tables.find(t=>t.id===g.tableId);
                return (
                  <tr key={g.id} style={{borderBottom:'1px solid #F1EAE0'}}>
                    <td style={{padding:'11px 9px'}}>
                      <button onClick={()=>setEditG(g)} style={{textAlign:'left'}}>
                        <div style={{fontWeight:500}}>{g.name}{(g.count||1)>1&&<span style={{color:'#B5895F',fontSize:11,marginLeft:3}}>+{(g.count||1)-1}</span>}</div>
                        {g.nickname&&<div style={{fontSize:11,color:'#9A8F82'}}>{g.nickname}</div>}
                      </button>
                    </td>
                    <td style={{padding:'11px 9px'}}><Tag color={info.color} soft={info.soft} small>{info.label}</Tag></td>
                    <td style={{padding:'11px 9px',fontSize:12,color:'#6B6259'}}>{g.subGroup||'—'}</td>
                    <td style={{padding:'11px 9px'}}>
                      <button onClick={()=>toggleAtt(g.id)} style={{padding:'2px 8px',fontSize:11,borderRadius:2,
                        color:g.attending?'#7BA77B':'#BF7090',background:g.attending?'#E5F0E5':'#F5DCE2'}}>
                        {g.attending?'✓ 出席':'✕ 婉拒'}
                      </button>
                    </td>
                    <td style={{padding:'11px 9px',opacity:g.attending?1:.4}}>
                      <div style={{display:'flex',alignItems:'center',gap:2}}>
                        <button onClick={()=>updCount(g.id,-1)} disabled={!g.attending} style={{padding:'1px 5px',color:'#9A8F82'}}>−</button>
                        <span style={{minWidth:16,textAlign:'center',fontWeight:500}}>{g.count}</span>
                        <button onClick={()=>updCount(g.id,1)} disabled={!g.attending} style={{padding:'1px 5px',color:'#9A8F82'}}>＋</button>
                      </div>
                    </td>
                    <td style={{padding:'11px 9px',textAlign:'left',fontSize:12,color:'#7BA77B'}}>{g.vegCount>0?g.vegCount:'—'}</td>
                    <td style={{padding:'11px 9px',opacity:g.attending?1:.4}}>
                      <div style={{display:'flex',alignItems:'center',gap:2}}>
                        <button onClick={()=>updCookie(g.id,-1)} disabled={!g.attending} style={{padding:'1px 5px',color:'#C77B3E'}}>−</button>
                        <span style={{minWidth:16,textAlign:'center',fontWeight:500,color:(g.cookieCount||0)>0?'#C77B3E':'#9A8F82'}}>{g.cookieCount||0}</span>
                        <button onClick={()=>updCookie(g.id,1)} disabled={!g.attending} style={{padding:'1px 5px',color:'#C77B3E'}}>＋</button>
                      </div>
                    </td>
                    <td style={{padding:'11px 9px'}}>
                      <div style={{display:'flex',flexWrap:'wrap',gap:3,maxWidth:160}}>
                        {(g.sameTable||[]).slice(0,2).map(id=>{const o=data.guests.find(x=>x.id===id);return o?<Tag key={id} small color="#7BA77B" soft="#E5F0E5">{o.name}</Tag>:null;})}
                        {(g.sameTable||[]).length>2&&<span style={{fontSize:10,color:'#9A8F82'}}>+{(g.sameTable||[]).length-2}</span>}
                      </div>
                    </td>
                    <td style={{padding:'11px 9px'}}>
                      <div style={{display:'flex',flexWrap:'wrap',gap:3,maxWidth:160}}>
                        {(g.avoidTable||[]).slice(0,2).map(id=>{const o=data.guests.find(x=>x.id===id);return o?<Tag key={id} small color="#C04040" soft="#FAEEEE">{o.name}</Tag>:null;})}
                        {(g.avoidTable||[]).length>2&&<span style={{fontSize:10,color:'#9A8F82'}}>+{(g.avoidTable||[]).length-2}</span>}
                      </div>
                    </td>
                    <td style={{padding:'11px 9px',fontSize:12,color:'#6B6259',maxWidth:130}}>{g.special||'—'}</td>
                    <td style={{padding:'11px 9px'}}>
                      {g.blessing ? (
                        <button onClick={()=>setBlessingView(g)} title="點擊查看完整祝福"
                          style={{padding:'3px 9px',fontSize:11,borderRadius:14,
                            background:'#FDF3E8',color:'#B5895F',border:'1px solid #E5D5BD',cursor:'pointer'}}>
                          💌 查看
                        </button>
                      ) : <span style={{fontSize:11,color:'#9A8F82'}}>—</span>}
                    </td>
                    <td style={{padding:'11px 9px'}}>
                      {tbl ? (() => {
                        const zoneList=data.zones||[];
                        const zone=zoneList.find(a=>tbl.x>=a.x&&tbl.x<=a.x+a.w&&tbl.y>=a.y&&tbl.y<=a.y+a.h);
                        const zc=zone?(zone.color||'#B5895F'):'#B5895F';
                        return <div style={{display:'flex',flexWrap:'wrap',gap:4}}>
                          {zone&&<Tag small color={zc} soft={zc+'22'}>{zone.name}</Tag>}
                          <Tag small color="#B5895F" soft="#EFE3D0">{tbl.name}</Tag>
                        </div>;
                      })() : (g.attending?<span style={{fontSize:11,color:'#9A8F82'}}>未排</span>:null)}
                    </td>
                    <td style={{padding:'11px 9px'}}><button onClick={()=>setEditG(g)} style={{fontSize:12,color:'#B5895F',padding:'3px 8px'}}>✎</button></td>
                  </tr>
                );
              })}
              {!filtered.length&&<tr><td colSpan={12} style={{padding:40,textAlign:'center',color:'#9A8F82'}}>沒有符合條件的賓客</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      <GuestModal open={!!editG} guest={editG} allGuests={data.guests} onSave={saveGuest} onClose={()=>setEditG(null)} onDelete={deleteGuest} groupInfo={GI} />
      <GuestModal open={showAdd} guest={null}  allGuests={data.guests} onSave={saveGuest} onClose={()=>setShowAdd(false)} groupInfo={GI} />
      <AvoidPairsModal open={showAvoid} onClose={()=>setShowAvoid(false)} data={data} onUpdate={onUpdate} />
      <SameTablePairsModal open={showSame} onClose={()=>setShowSame(false)} data={data} onUpdate={onUpdate} />

      {/* 祝福查看 Modal — 跟隨主題配色（暗黑主題用深卡，文字對比清晰）*/}
      {blessingView && (()=>{
        const bgs = getGuestStyle(data.config?.theme);
        const isDark = bgs.dark;
        const cardGrad = isDark
          ? `linear-gradient(160deg, ${bgs.cardBg} 0%, ${bgs.soft} 100%)`
          : `linear-gradient(160deg, ${bgs.cardBg} 0%, ${bgs.pageBg} 100%)`;
        const txt = bgs.text, sub = bgs.subText, muted = bgs.mutedText;
        return (
        <Modal open={!!blessingView} onClose={()=>setBlessingView(null)} title="" width={460} closeColor={bgs.primary}>
          <div data-tp="1" style={{margin:'-8px -4px 0',padding:'28px 28px 32px',
            background:cardGrad,borderRadius:bgs.blessingRadius||6,position:'relative',
            border:`1px solid ${bgs.border}`}}>
            <div data-tp="1" style={{position:'absolute',top:18,right:22,fontSize:48,opacity:isDark?.18:.12,color:bgs.primary}}>
              {bgs.ornament||'💌'}
            </div>
            <div data-tp="1" style={{fontFamily:bgs.labelFont,fontSize:13,letterSpacing:bgs.labelCase==='uppercase'?4:2,
              color:bgs.primary,textTransform:bgs.labelCase,marginBottom:6}}>BLESSING FROM</div>
            <div data-tp="1" style={{fontFamily:bgs.headingFont||FONT_STACK,fontSize:20,fontWeight:600,color:txt,marginBottom:4}}>
              {blessingView.name}
              {blessingView.nickname && <span data-tp="1" style={{fontSize:14,color:muted,marginLeft:8,fontWeight:400}}>「{blessingView.nickname}」</span>}
            </div>
            <div data-tp="1" style={{fontSize:11,color:muted,marginBottom:20}}>
              {(GI[blessingView.side]||{}).label || ''}{blessingView.subGroup ? ` · ${blessingView.subGroup}` : ''}
            </div>
            <div data-tp="1" style={{borderTop:`1px dashed ${bgs.border}`,paddingTop:18,fontSize:15,lineHeight:2,
              color:txt,whiteSpace:'pre-line',fontFamily:bgs.headingFont||'"Noto Serif TC", serif',letterSpacing:.5}}>
              "{blessingView.blessing}"
            </div>
            {blessingView.submittedAt && (
              <div data-tp="1" style={{marginTop:20,textAlign:'right',fontSize:11,color:muted}}>
                {new Date(blessingView.submittedAt).toLocaleString('zh-TW')}
              </div>
            )}
          </div>
        </Modal>
        );
      })()}
    </div>
  );
}


// ============================================================
// SEATING COMPONENTS
// ============================================================
function RoundTable({table,guests,isMain,onDragStart,onClickEdit,conflicts,onDropSeat,onStartSeatDrag,onRemoveSeat,onClickGuest,posLocked,seatLocked,planLocked,onUnlockPos,onUnlockSeat,groupInfo,tapPending,onTapPlace}) {
  const GI = groupInfo || GROUP_INFO;
  const cap = table.capacity||10;
  const [hov,setHov] = useState(false);   // v5.3：hover 才浮出解鎖鈕
  const seats = useMemo(()=>seatMap(table,guests),[table,guests]);
  const occupied = guests.filter(g=>g.tableId===table.id&&g.attending).reduce((s,g)=>s+(g.count||1),0);
  const conflictIds = useMemo(()=>{
    const s=new Set();
    conflicts.forEach(([a,b])=>{s.add(a);s.add(b);});
    return s;
  },[conflicts]);
  const sz = (SEAT_OUTER+SEAT_SIZE)*2;
  const anyLock = posLocked || seatLocked || planLocked;
  const badge = {display:'inline-flex',alignItems:'center',gap:3,padding:'2px 6px',borderRadius:10,
    fontSize:11,lineHeight:1,background:'rgba(249,245,239,.96)',border:'1px solid #D4B894',color:'#7A6E5E',
    boxShadow:'0 1px 4px rgba(0,0,0,.12)',userSelect:'none'};
  const unlockBtn = {marginLeft:1,width:15,height:15,borderRadius:'50%',border:'none',cursor:'pointer',
    background:'#C04040',color:'#fff',fontSize:10,lineHeight:'15px',padding:0,fontFamily:'inherit'};

  return (
    <div data-tp="1" onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{position:'absolute',left:table.x,top:table.y,width:sz,height:sz}}>
      {/* v5.3 鎖定狀態徽章 + hover 解鎖鈕（角落，不與點桌編輯重疊） */}
      {anyLock && (
        <div data-tp="1" style={{position:'absolute',top:2,left:2,zIndex:12,display:'flex',gap:5}}>
          {posLocked && (
            <span style={badge} title="位置已鎖定">📌
              {hov && <button onClick={e=>{e.stopPropagation();onUnlockPos(table.id);}} onPointerDown={e=>e.stopPropagation()} title="解除位置鎖" style={unlockBtn}>✕</button>}
            </span>
          )}
          {seatLocked && (
            <span style={badge} title="座位已鎖定">🔒
              {hov && <button onClick={e=>{e.stopPropagation();onUnlockSeat(table.id);}} onPointerDown={e=>e.stopPropagation()} title="解除座位鎖" style={unlockBtn}>✕</button>}
            </span>
          )}
          {planLocked && (
            <span style={{...badge,background:'rgba(192,64,64,.95)',border:'1px solid #C04040',color:'#fff'}} title="方案到期，此桌已鎖定，續訂 Pro 後可編輯">🔒 已鎖定</span>
          )}
        </div>
      )}
      {/* Circle */}
      <div data-tp="1" data-table={table.id}
        onPointerDown={e=>{
          if(posLocked||tapPending||planLocked) return;   // v5.3：只有位置鎖擋拖曳；v6.7：方案到期鎖也擋
          try{ e.currentTarget.setPointerCapture(e.pointerId); }catch(_){}
          onDragStart(e,table.id);
        }}
        onClick={e=>{
          e.stopPropagation();
          if(tapPending&&onTapPlace){onTapPlace(table.id); return;}
          onClickEdit(table.id);   // v5.3：鎖定時仍可開編輯視窗（去開關鎖）
        }}
        style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',
          width:TABLE_RADIUS*2,height:TABLE_RADIUS*2,borderRadius:'50%',
          background:table.color||TABLE_COLORS[0],
          border:tapPending?'2.5px solid #B5895F':posLocked?'2px dashed #B5895F':isMain?'3px double #B5895F':'1.5px solid rgba(58,51,43,.18)',
          boxShadow:tapPending?'0 0 0 5px rgba(181,137,95,.25), 0 2px 10px rgba(0,0,0,.12)':'0 2px 10px rgba(0,0,0,.12)',
          cursor:tapPending?'pointer':posLocked?'pointer':'grab',
          display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
          fontFamily:FONT_STACK,color:'#3A332B',userSelect:'none',zIndex:2,touchAction:'none'}}>
        {tapPending && <div data-tp="1" className="wed-tap-ring" style={{position:'absolute',inset:-7,borderRadius:'50%',border:'2px solid #B5895F',pointerEvents:'none'}} />}
        <div data-tp="1" style={{fontSize:13,fontWeight:600,letterSpacing:.5,color:'#3A332B'}}>{table.name}</div>
        <div data-tp="1" style={{fontSize:10,color:'#6B6259',marginTop:1}}>{occupied}/{cap}</div>
        {tapPending&&<div data-tp="1" style={{fontSize:9,color:'#B5895F',marginTop:2,letterSpacing:.5}}>點我放入</div>}
        {!tapPending&&isMain&&<div data-tp="1" style={{fontSize:8,color:'#B5895F',letterSpacing:1.5,marginTop:1}}>主桌</div>}
        {!tapPending&&<div data-tp="1" style={{marginTop:2,fontSize:11,color:'#6B6259',opacity:.6}}>✎</div>}
      </div>
      {/* Seats */}
      {seats.map((g,i)=>{
        const ang=(i/cap)*Math.PI*2-Math.PI/2;
        const cx=(SEAT_OUTER+SEAT_SIZE)+Math.cos(ang)*SEAT_OUTER-SEAT_SIZE/2;
        const cy=(SEAT_OUTER+SEAT_SIZE)+Math.sin(ang)*SEAT_OUTER-SEAT_SIZE/2;
        const info=g?(GI[g.side]||{color:'#9A8F82',soft:'#E8E8E8'}):null;
        const conflict=g&&conflictIds.has(g.id);
        const isFirst=g&&(((g.startSeat||0)%cap)===i);
        // 既有的人在座位鎖時凍結（不能拖/移除）；空位永遠可被放入（HTML5 onDrop 不擋）
        // v6.7：方案到期鎖（planLocked）一併凍結，且名字隱藏
        const frozen = g && (seatLocked || planLocked);
        return (
          <div key={i} className="wed-seat"
            data-seat={`${table.id}|${i}`}
            onDragOver={e=>{e.preventDefault();e.currentTarget.style.transform='scale(1.2)';}}
            onDragLeave={e=>{e.currentTarget.style.transform='scale(1)';}}
            onDrop={e=>{
              e.preventDefault();e.currentTarget.style.transform='scale(1)';
              const p=e.dataTransfer.getData('text/plain');if(p)onDropSeat(table.id,i,p);
            }}
            draggable={false}
            onDragStart={e=>{ e.preventDefault(); }}
            style={{position:'absolute',left:cx,top:cy,width:SEAT_SIZE,height:SEAT_SIZE,borderRadius:'50%',
              background:g?info.color:'#F9F5EF',
              border:`1.5px solid ${conflict?'#C04040':frozen?'#B5895F':g?info.color:'#E5DDD0'}`,
              boxShadow:conflict?'0 0 0 2px #C04040':frozen?'0 0 0 1.5px rgba(181,137,95,.4)':'none',
              display:'flex',alignItems:'center',justifyContent:'center',
              fontSize:9,fontWeight:700,color:g?'#FFFEFA':'#C0B8B0',
              cursor:g&&!frozen?'grab':'default',zIndex:3,transition:'transform .12s',overflow:'visible'}}>
            {g?(
              <button
                // v5.3：點擊本體只開賓客資料（不再誤刪）；拖曳 = 改派（Pointer Events）；移除 = 右上角 × 鈕
                onPointerDown={e=>{
                  if(e.button!=null && e.button!==0) return;
                  if(frozen){ return; }            // 座位鎖：既有的人不能拖
                  if(isFirst && onStartSeatDrag) onStartSeatDrag(e,{type:'seat',guestId:g.id},displayName(g,2,3),g);
                }}
                title={planLocked?'方案到期，此桌已鎖定（續訂 Pro 後可編輯）':g.name+(g.count>1?` (${g.count}人)`:'')+(frozen?'（座位已鎖定）':' — 拖曳可改派、點擊看資料')}
                style={{width:'100%',height:'100%',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:10,fontWeight:700,color:'#FFFEFA',whiteSpace:'nowrap',overflow:'hidden',
                  border:'none',cursor:frozen?'default':'grab',
                  letterSpacing:0,background:planLocked?'#B0A89C':info.color,touchAction:'none'}}>
                {planLocked ? '🔒' : displayName(g,2,3)}
              </button>
            ):(i+1)}
            {/* 移除 × — 獨立小鈕，hover 才出現，與拖曳/點擊分離；座位鎖時不顯示 */}
            {g&&isFirst&&!frozen&&(
              <button className="wed-seat-x"
                onPointerDown={e=>{e.stopPropagation();}}
                onClick={e=>{e.stopPropagation(); onRemoveSeat(g.id);}}
                title="移除此人"
                style={{position:'absolute',top:-7,right:-7,width:16,height:16,borderRadius:'50%',
                  border:'1.5px solid #fff',background:'#C04040',color:'#fff',fontSize:11,lineHeight:'13px',
                  padding:0,cursor:'pointer',zIndex:6,fontFamily:'inherit'}}>×</button>
            )}
            {conflict&&<div style={{position:'absolute',top:-3,right:-3,fontSize:9,zIndex:5,lineHeight:1}}>⚠️</div>}
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// SEATING PAGE
// ============================================================
function SeatingPage({data,onUpdate,mainTableId,setMainTableId,isPro}) {
  const GI = getGroupInfo(data.config);
  // ── v6.7.0 方案權限 ──────────────────────────────────────────────
  // 「方案到期鎖」：非 Pro 且桌數已超過免費上限（代表曾為 Pro、現已降級）
  //   → 依「建立順序」前 FREE_TABLE_LIMIT 桌可正常編輯，其餘鎖定（隱藏姓名、不可動/刪/移）
  const planLockedIds = useMemo(()=>{
    if (isPro || data.tables.length <= FREE_TABLE_LIMIT) return new Set();
    return new Set(data.tables.slice(FREE_TABLE_LIMIT).map(t=>t.id));
  },[isPro, data.tables]);
  const isPlanLocked = (tableId)=> planLockedIds.has(tableId);
  // 免費版「已入座人數」上限：僅在未超過免費桌數時生效（到期降級的大型專案改由 planLock 控管）
  const freeSeatCapOn = !isPro && data.tables.length <= FREE_TABLE_LIMIT;
  const seatedTotal = useMemo(()=> data.guests.filter(g=>g.tableId&&g.attending).reduce((s,g)=>s+(g.count||1),0), [data.guests]);
  // v5.3 畫布尺寸（場地規模）
  const canvasW = (data.config && data.config.canvasW) || DEFAULT_CANVAS_W;
  const canvasH = (data.config && data.config.canvasH) || DEFAULT_CANVAS_H;
  const setVenueSize = (key)=>{
    const v=VENUE_SIZES.find(s=>s.key===key); if(!v) return;
    onUpdate({...data,config:{...data.config,canvasW:v.w,canvasH:v.h}});
  };
  const curVenueKey = (VENUE_SIZES.find(s=>s.w===canvasW&&s.h===canvasH)||{}).key || '';
  // v5.3 分區（多場地）
  const zones = Array.isArray(data.zones)?data.zones:[];
  const addZone = ()=>{
    const n=zones.length;
    const z={id:uid(),name:`分區 ${n+1}`,x:40+n*40,y:40+n*40,w:Math.min(900,canvasW-120),h:Math.min(640,canvasH-120),
      color:AREA_COLORS[n%AREA_COLORS.length], locked:false};
    onUpdate({...data,zones:[...zones,z]});
  };
  // v5.6 分區編輯（名稱／顏色／鎖定）— 用 Modal
  const [zoneEdit,setZoneEdit] = useState(null);   // {id,name,color,locked,...}
  const saveZone = (z)=>{
    if(!z.name?.trim()){ uiAlert('請輸入分區名稱'); return; }
    onUpdate({...data,zones:zones.map(x=>x.id===z.id?{...x,name:z.name.trim(),color:z.color,locked:!!z.locked}:x)});
    setZoneEdit(null);
  };
  const deleteZone = async(id)=>{
    if(!await uiConfirm('刪除此分區？（不影響桌子，只移除框線）')) return;
    onUpdate({...data,zones:zones.filter(x=>x.id!==id)});
    setZoneEdit(null);
  };
  // v5.5 宴會環境設施（取代舊標記）— 用 Modal 建立/編輯
  const [facilityEdit,setFacilityEdit]=useState(null); // {id?,label,emoji,color,locked,x,y,_isNew}
  const openNewFacility=()=>setFacilityEdit({_isNew:true,label:'',emoji:FACILITY_EMOJIS[0],color:FACILITY_COLORS[0],locked:false,x:200,y:200});
  const saveFacility=(f)=>{
    if(!f.label?.trim()){ uiAlert('請輸入設施名稱'); return; }
    if(f._isNew){
      const {_isNew,...rest}=f;
      onUpdate({...data,markers:[...data.markers,{...rest,id:uid()}]});
    } else {
      onUpdate({...data,markers:data.markers.map(m=>m.id===f.id?f:m)});
    }
    setFacilityEdit(null);
  };
  const deleteFacility=(id)=>{ onUpdate({...data,markers:data.markers.filter(m=>m.id!==id)}); setFacilityEdit(null); };
  const [search,setSearch] = useState('');
  const [sidebarOpen,setSidebarOpen] = useState(()=>typeof window!=='undefined' ? window.innerWidth>900 : true);
  // v5.3 手機點選分配模式 — 所有新邏輯用 isMobile 隔離，桌機完全不影響
  const [isMobile,setIsMobile] = useState(()=>typeof window!=='undefined' && window.innerWidth<=900);
  const [tapSelected,setTapSelected] = useState([]);  // [{guestId,name,count}, ...] 多選
  const [drawerOpen,setDrawerOpen]   = useState(false); // 底部抽屜開關
  const [tapFlash,setTapFlash]       = useState('');    // 短暫的成功提示
  useEffect(()=>{
    const fn=()=>setIsMobile(window.innerWidth<=900);
    window.addEventListener('resize',fn,{passive:true});
    return ()=>window.removeEventListener('resize',fn);
  },[]);
  // 把 tapSelected 的多個宾客放進指定桌的連續空位
  const assignToTable = (tableId)=>{
    if(tapSelected.length === 0) return;
    const t = data.tables.find(x => x.id === tableId); 
    if(!t) return;   // v5.3：座位鎖允許往空位加新人，故不擋
    if(isPlanLocked(tableId)){ uiProUpgrade('此桌因方案到期已鎖定，續訂 Pro 後可編輯'); return; }   // v6.7
    
    // 蒐集選中宾客及總人數
    let totalPeople = 0, guestIds = [];
    for(const sel of tapSelected){
      const g = data.guests.find(x => x.id === sel.guestId);
      if(!g) continue;
      guestIds.push(g);
      totalPeople += g.count || 1;
    }
    if(totalPeople === 0) return;
    // v6.7：免費版排位人數上限
    if(freeSeatCapOn && seatedTotal + totalPeople > FREE_SEAT_LIMIT){
      uiProUpgrade(`免費版排位上限 ${FREE_SEAT_LIMIT} 人，升級 Pro 可無限排位`); return;
    }
    
    // 驗證：座位足夠？
    const cap = t.capacity || 8;
    const occ = new Set(data.guests
      .filter(x => x.tableId === tableId && x.attending && x.startSeat != null)
      .flatMap(x => Array.from({length: x.count || 1}, (_, i) => (x.startSeat || 0) + i)));
    const occupied = occ.size;
    if(occupied + totalPeople > cap){
      uiAlert(`座位不足。該桌剩餘 ${cap - occupied} 席，但選中 ${totalPeople} 人。`);
      return;
    }
    
    // 找連續空位
    let start = -1;
    outer: for(let s = 0; s <= cap - totalPeople; s++){
      for(let i = 0; i < totalPeople; i++){
        if(occ.has(s + i)) continue outer;
      }
      start = s;
      break;
    }
    if(start < 0){
      uiAlert('該桌沒有足夠連續空位');
      return;
    }
    
    // 批量放入——逐個分配到座位
    let seatOffset = 0;
    let updatedGuests = data.guests.map(x => {
      const matched = guestIds.find(g => g.id === x.id);
      return matched ? {...x, tableId, startSeat: start + seatOffset, attending: true} : x;
    });
    // 更新 seatOffset
    seatOffset = 0;
    updatedGuests = updatedGuests.map(x => {
      const matched = guestIds.find(g => g.id === x.id);
      if(matched){
        const need = matched.count || 1;
        const res = {...x, tableId, startSeat: start + seatOffset};
        seatOffset += need;
        return res;
      }
      return x;
    });
    
    onUpdate({...data, guests: updatedGuests});
    const successMsg = totalPeople > 1 ? `${totalPeople} 人` : '1 人';
    setTapFlash(successMsg);
    setTapSelected([]);
    setDrawerOpen(false);
    setTimeout(()=>setTapFlash(''),1400);
  };
  const [tableEdit,setTableEdit] = useState(null);
  const [showVersions,setShowVersions] = useState(false);
  const [editGuest,setEditGuest] = useState(null);
  const [showAvoid,setShowAvoid] = useState(false);   // v4.9：點衝突開避桌管理
  const [showSame,setShowSame]   = useState(false);    // v4.12：點同桌未滿足開同桌管理
  const histRef = useRef({stack:[],idx:-1});
  const canvasRef = useRef(null);
  const dragTableRef = useRef(null);
  const dragMovedRef = useRef(false);   // v4.9：拖桌是否真的移動過（用來抑制放開後的誤觸點擊）
  const dragMarkerRef = useRef(null);
  const autoSaveRef = useRef(null);

  // History (undo/redo)
  useEffect(()=>{
    const snap=JSON.stringify({guests:data.guests,tables:data.tables,markers:data.markers,zones:data.zones||[]});
    const h=histRef.current;
    if(h.stack[h.idx]===snap) return;
    h.stack=h.stack.slice(0,h.idx+1);
    h.stack.push(snap);
    if(h.stack.length>60) h.stack.shift(); else h.idx=h.stack.length-1;
  },[data.guests,data.tables,data.markers]);

  const undo=()=>{const h=histRef.current;if(h.idx<=0)return;h.idx--;const s=JSON.parse(h.stack[h.idx]);onUpdate({...data,...s},true);};
  const redo=()=>{const h=histRef.current;if(h.idx>=h.stack.length-1)return;h.idx++;const s=JSON.parse(h.stack[h.idx]);onUpdate({...data,...s},true);};

  // Auto-save every 10 min
  useEffect(()=>{
    if(autoSaveRef.current) clearInterval(autoSaveRef.current);
    autoSaveRef.current = setInterval(()=>{
      const name='自動暫存 '+new Date().toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit'});
      const existing=(data.versions||[]).findIndex(v=>v.name.startsWith('自動暫存'));
      const newV={id:uid(),name,createdAt:Date.now(),snapshot:JSON.stringify({guests:data.guests,tables:data.tables,markers:data.markers,zones:data.zones||[],mainTableId})};
      const versions=existing>=0?data.versions.map((v,i)=>i===existing?newV:v):[...(data.versions||[]),newV];
      onUpdate({...data,versions},false);
    },10*60*1000);
    return ()=>clearInterval(autoSaveRef.current);
  },[data,mainTableId,onUpdate]);

  // v6.15.0：排位頁首次開啟自動把新郎/新娘補進待安排（新舊婚禮皆適用，靠 ref 僅補一次、防迴圈）
  const coupleSeedRef = useRef(false);
  useEffect(()=>{
    if(coupleSeedRef.current) return;
    const ids = new Set((data.guests||[]).map(g=>g.id));
    if(ids.has('__groom__') && ids.has('__bride__')){ coupleSeedRef.current=true; return; }
    const add=[];
    if(!ids.has('__groom__')) add.push({id:'__groom__',isCouple:true,role:'groom',name:'新郎',side:'groom',count:1,attending:true,tableId:null,startSeat:null,subGroup:''});
    if(!ids.has('__bride__')) add.push({id:'__bride__',isCouple:true,role:'bride',name:'新娘',side:'bride',count:1,attending:true,tableId:null,startSeat:null,subGroup:''});
    if(add.length){ coupleSeedRef.current=true; onUpdate({...data,guests:[...data.guests,...add]}); }
  },[data.guests]);

  const attendingGuests=data.guests.filter(g=>g.attending);
  const unassigned=attendingGuests.filter(g=>!g.tableId);
  const filteredUnassigned=unassigned.filter(g=>{
    if(!search) return true;
    const q=search.toLowerCase();
    return (g.name||'').toLowerCase().includes(q)||(g.nickname||'').toLowerCase().includes(q);
  });
  const grouped=Object.fromEntries(Object.keys(GI).map(k=>[k,[]]));
  filteredUnassigned.forEach(g=>{if(grouped[g.side])grouped[g.side].push(g);else grouped[Object.keys(GI)[0]].push(g);});

  const allConflicts=useMemo(()=>{
    const m=new Map();
    const eff=effectiveAvoidPairs(data);
    data.tables.forEach(t=>m.set(t.id,tableConflicts(t,data.guests,eff)));
    return m;
  },[data.tables,data.guests,data.avoidPairs]);

  // 計算避桌衝突詳情（同桌但有避桌設定）— 用 effective pairs 合併兩處來源
  const conflictDetails = useMemo(()=>{
    const out = [];
    const eff = effectiveAvoidPairs(data);
    data.tables.forEach(t => {
      const inside = data.guests.filter(g=>g.tableId===t.id && g.attending);
      const insideIds = new Set(inside.map(g=>g.id));
      eff.forEach(([a,b])=>{
        if (insideIds.has(a) && insideIds.has(b)) {
          const ga = data.guests.find(g=>g.id===a);
          const gb = data.guests.find(g=>g.id===b);
          out.push({a:ga, b:gb, table:t});
        }
      });
    });
    return out;
  },[data.tables, data.guests, data.avoidPairs]);

  // 計算同桌需求未滿足的配對 — 用 effective pairs 合併兩處來源
  const sameTableUnmet=useMemo(()=>{
    const unmet=[];
    const eff = effectiveSamePairs(data);
    eff.forEach(([a,b])=>{
      const ga=data.guests.find(g=>g.id===a), gb=data.guests.find(g=>g.id===b);
      if(!ga||!gb||!ga.attending||!gb.attending) return;
      if(!ga.tableId||!gb.tableId){ unmet.push({a:ga,b:gb,reason:'對方尚未入座'}); return; }
      if(ga.tableId!==gb.tableId) unmet.push({a:ga,b:gb,reason:'分配在不同桌'});
    });
    return unmet;
  },[data.guests, data.samePairs]);

  const totalSeats=data.tables.reduce((s,t)=>s+(t.capacity||0),0);
  const seated=attendingGuests.filter(g=>g.tableId).reduce((s,g)=>s+(g.count||0),0);
  const totalAttending=attendingGuests.reduce((s,g)=>s+(g.count||0),0);
  const totalConflicts=useMemo(()=>{let n=0;allConflicts.forEach(c=>n+=c.length);return n;},[allConflicts]);

  // Drag table — v5.1.9：拖曳期間「直接改 DOM 位置」不觸發 React 重繪（手機才不會掉幀/吞觸控），
  //                放開手指才寫入一次 state＋Firestore。搭配 setPointerCapture 鎖定觸控。
  const startDragTable=(e,id)=>{
    if(isPlanLocked(id)) return;   // v6.7：方案到期鎖定的桌子不可移動
    if(isMobile && tapSelected.length > 0) return;  // 手機有選中賓客待放入時才不啟動拖曳（v5.2 tapSelected 改陣列，空陣列 [] 是 truthy，必須檢查 length）
    e.preventDefault();
    const wrapper = e.currentTarget && e.currentTarget.parentElement; // 外層定位 div（left:table.x）
    const rect=canvasRef.current.getBoundingClientRect();
    const t=data.tables.find(x=>x.id===id); if(!t) return;
    dragMovedRef.current=false;
    const startX=e.clientX, startY=e.clientY;
    const ox=e.clientX-rect.left-t.x, oy=e.clientY-rect.top-t.y;
    let fx=t.x, fy=t.y, moved=false;
    const move=ev=>{
      if(Math.abs(ev.clientX-startX)>4||Math.abs(ev.clientY-startY)>4){dragMovedRef.current=true;moved=true;}
      const r=canvasRef.current.getBoundingClientRect();
      fx=Math.max(0,ev.clientX-r.left-ox);
      fy=Math.max(0,ev.clientY-r.top-oy);
      if(wrapper){ 
        wrapper.style.left=fx+'px'; 
        wrapper.style.top=fy+'px';
      }
    };
    const up=()=>{
      window.removeEventListener('pointermove',move);
      window.removeEventListener('pointerup',up);
      window.removeEventListener('pointercancel',up);
      setTimeout(()=>{dragMovedRef.current=false;},0);
      if(moved) onUpdate({...data,tables:data.tables.map(tb=>tb.id===id?{...tb,x:fx,y:fy}:tb)}); // 放開才寫入一次
    };
    window.addEventListener('pointermove',move);
    window.addEventListener('pointerup',up);
    window.addEventListener('pointercancel',up);
  };

  // Drag marker — 同上策略：拖曳直接改 DOM，放開才寫入
  const startDragMarker=(e,id)=>{
    e.preventDefault();
    const el = e.currentTarget; // marker 本身即定位元素（left:m.x）
    const rect=canvasRef.current.getBoundingClientRect();
    const m=data.markers.find(x=>x.id===id); if(!m) return;
    dragMovedRef.current=false;   // v5.5：供設施「點擊編輯」判斷是否為拖曳
    const ox=e.clientX-rect.left-m.x, oy=e.clientY-rect.top-m.y;
    let fx=m.x, fy=m.y, moved=false;
    const move=ev=>{
      moved=true; dragMovedRef.current=true;
      const r=canvasRef.current.getBoundingClientRect();
      fx=Math.max(0,ev.clientX-r.left-ox);
      fy=Math.max(0,ev.clientY-r.top-oy);
      if(el){ el.style.left=fx+'px'; el.style.top=fy+'px'; }
    };
    const up=()=>{
      window.removeEventListener('pointermove',move);
      window.removeEventListener('pointerup',up);
      window.removeEventListener('pointercancel',up);
      if(moved) onUpdate({...data,markers:data.markers.map(mk=>mk.id===id?{...mk,x:fx,y:fy}:mk)});
      setTimeout(()=>{dragMovedRef.current=false;},0);   // 放開後才允許點擊
    };
    window.addEventListener('pointermove',move);
    window.addEventListener('pointerup',up);
    window.addEventListener('pointercancel',up);
  };

  // v5.3：分區框拖移 / 縮放 — 直接改 DOM，放開才寫入
  const startDragZone=(e,id)=>{
    const z0=zones.find(x=>x.id===id); if(z0&&z0.locked) return;   // v5.6：鎖定分區不可拖移
    e.preventDefault(); e.stopPropagation();
    try{ e.currentTarget.setPointerCapture(e.pointerId); }catch(_){}
    const el = e.currentTarget.closest('[data-zone]');
    const rect=canvasRef.current.getBoundingClientRect();
    const z=zones.find(x=>x.id===id); if(!z) return;
    const ox=e.clientX-rect.left-z.x, oy=e.clientY-rect.top-z.y;
    let fx=z.x, fy=z.y, moved=false;
    const move=ev=>{
      moved=true;
      const r=canvasRef.current.getBoundingClientRect();
      fx=Math.max(0,ev.clientX-r.left-ox);
      fy=Math.max(0,ev.clientY-r.top-oy);
      if(el){ el.style.left=fx+'px'; el.style.top=fy+'px'; }
    };
    const up=()=>{
      window.removeEventListener('pointermove',move);
      window.removeEventListener('pointerup',up);
      window.removeEventListener('pointercancel',up);
      if(moved) onUpdate({...data,zones:zones.map(zz=>zz.id===id?{...zz,x:fx,y:fy}:zz)});
    };
    window.addEventListener('pointermove',move);
    window.addEventListener('pointerup',up);
    window.addEventListener('pointercancel',up);
  };
  const startResizeZone=(e,id)=>{
    const z0=zones.find(x=>x.id===id); if(z0&&z0.locked) return;   // v5.6：鎖定分區不可縮放
    e.preventDefault(); e.stopPropagation();
    try{ e.currentTarget.setPointerCapture(e.pointerId); }catch(_){}
    const el = e.currentTarget.closest('[data-zone]');
    const z=zones.find(x=>x.id===id); if(!z) return;
    let fw=z.w, fh=z.h, moved=false;
    const sx=e.clientX, sy=e.clientY;
    const move=ev=>{
      moved=true;
      fw=Math.max(160,z.w+(ev.clientX-sx));
      fh=Math.max(120,z.h+(ev.clientY-sy));
      if(el){ el.style.width=fw+'px'; el.style.height=fh+'px'; }
    };
    const up=()=>{
      window.removeEventListener('pointermove',move);
      window.removeEventListener('pointerup',up);
      window.removeEventListener('pointercancel',up);
      if(moved) onUpdate({...data,zones:zones.map(zz=>zz.id===id?{...zz,w:fw,h:fh}:zz)});
    };
    window.addEventListener('pointermove',move);
    window.addEventListener('pointerup',up);
    window.addEventListener('pointercancel',up);
  };
  // v5.4 #5c：手機/平板觸控拖曳 — HTML5 drag 在觸控裝置無效，改用 touch 事件 + elementFromPoint
  const [touchDrag,setTouchDrag] = useState(null);   // {guestId,type,name,x,y}
  const touchDragRef = useRef(null);
  const touchDragMovedRef = useRef(false);
  const beginTouchDrag = (e, payload, name) => {
    const t = e.touches && e.touches[0]; if(!t) return;
    touchDragRef.current = payload;
    touchDragMovedRef.current = false;
    setTouchDrag({...payload, name, x:t.clientX, y:t.clientY});
  };
  useEffect(()=>{
    if(!touchDrag) return;
    const onMove = (e)=>{
      const t = e.touches && e.touches[0]; if(!t) return;
      e.preventDefault();   // 拖曳時阻止頁面捲動
      touchDragMovedRef.current = true;
      setTouchDrag(d=> d ? {...d, x:t.clientX, y:t.clientY} : null);
    };
    const onEnd = (e)=>{
      const t = e.changedTouches && e.changedTouches[0];
      const payload = touchDragRef.current;
      touchDragRef.current = null;
      setTouchDrag(null);
      if(!t || !payload) return;
      if(!touchDragMovedRef.current) return;   // 只是點擊，不處理拖放
      const el = document.elementFromPoint(t.clientX, t.clientY);
      if(!el) { if(payload.type==='seat') removeFromTable(payload.guestId); return; }
      const seatEl = el.closest('[data-seat]');
      if(seatEl){
        const [tid,si] = seatEl.getAttribute('data-seat').split('|');
        dropOnSeat(tid, parseInt(si,10), JSON.stringify({type:payload.type,guestId:payload.guestId}));
        return;
      }
      const tableEl = el.closest('[data-table]');
      if(tableEl){
        dropOnSeat(tableEl.getAttribute('data-table'), 0, JSON.stringify({type:payload.type,guestId:payload.guestId}));
        return;
      }
      // 拖到桌外 → 若是已入座者則移回待安排
      if(payload.type==='seat') removeFromTable(payload.guestId);
    };
    window.addEventListener('touchmove', onMove, {passive:false});
    window.addEventListener('touchend', onEnd);
    window.addEventListener('touchcancel', onEnd);
    return ()=>{ window.removeEventListener('touchmove',onMove); window.removeEventListener('touchend',onEnd); window.removeEventListener('touchcancel',onEnd); };
  },[!!touchDrag, data]);   // eslint-disable-line

  // v5.3：判斷某桌是否座位鎖
  const isSeatLocked = (tableId)=>{ const t=data.tables.find(x=>x.id===tableId); return !!(t&&t.seatLocked); };

  const dropOnSeat=(tableId,seatIdx,payloadStr)=>{
    let p; try{p=JSON.parse(payloadStr);}catch{return;}
    const table=data.tables.find(t=>t.id===tableId); if(!table) return;
    const guest=data.guests.find(g=>g.id===p.guestId); if(!guest) return;
    // v6.7：方案到期鎖 — 不可放入鎖定桌、不可移動鎖定桌上的人
    if(isPlanLocked(tableId)){ uiProUpgrade('此桌因方案到期已鎖定，續訂 Pro 後可編輯'); return; }
    if(p.type==='seat' && guest.tableId && isPlanLocked(guest.tableId)){ uiProUpgrade('此桌因方案到期已鎖定'); return; }
    // v6.7：免費版排位人數上限（僅對「新入座」的人計算；同桌內挪動不增加總數）
    if(freeSeatCapOn && p.type!=='seat' && guest.tableId!==tableId && seatedTotal + (guest.count||1) > FREE_SEAT_LIMIT){
      uiProUpgrade(`免費版排位上限 ${FREE_SEAT_LIMIT} 人，升級 Pro 可無限排位`); return;
    }
    // v5.3：移動「既有已排的人」時，若其原本所在的桌座位已鎖，則禁止（空位加新人不受限）
    if(p.type==='seat' && guest.tableId && isSeatLocked(guest.tableId)){ uiAlert('該桌座位已鎖定，無法移動已排好的賓客'); return; }
    const cnt=guest.count||1;
    if(cnt>table.capacity){uiAlert('該桌座位不足');return;}
    const others=data.guests.filter(g=>g.id!==guest.id);
    const occ=new Array(table.capacity).fill(null);
    others.filter(g=>g.tableId===tableId&&g.attending&&g.startSeat!=null).forEach(o=>{
      for(let i=0;i<(o.count||1);i++) occ[((o.startSeat||0)+i)%table.capacity]=o.id;
    });
    let start=seatIdx;
    let canPlace=true;
    for(let i=0;i<cnt;i++) if(occ[(seatIdx+i)%table.capacity]){canPlace=false;break;}
    if(!canPlace){
      start=freeSeat(table,others,cnt);
      if(start<0){uiAlert('該桌沒有足夠連續空位');return;}
    }
    onUpdate({...data,guests:data.guests.map(g=>g.id===guest.id?{...g,tableId,startSeat:start}:g)});
  };

  const removeFromTable=id=>{
    const g=data.guests.find(x=>x.id===id);
    // v6.7：方案到期鎖時不可移除
    if(g && g.tableId && isPlanLocked(g.tableId)){ uiProUpgrade('此桌因方案到期已鎖定'); return; }
    // v5.3：座位鎖時，既有的人不可被移除
    if(g && g.tableId && isSeatLocked(g.tableId)){ uiAlert('該桌座位已鎖定，無法移除已排好的賓客'); return; }
    onUpdate({...data,guests:data.guests.map(x=>x.id===id?{...x,tableId:null,startSeat:null}:x)});
  };

  // v5.3：座位「拖曳改派」改用 Pointer Events（桌機＋手機一致），放開用 elementFromPoint 命中落點。
  //        未移動 = 視為點擊 → 開賓客資料；移動到桌外 = 移回待安排。
  const [dragGhost,setDragGhost] = useState(null);   // {name,x,y}
  const startSeatDrag = (e, payload, name)=>{
    const startX=e.clientX, startY=e.clientY;
    let moved=false;
    const move=(ev)=>{
      if(!moved && (Math.abs(ev.clientX-startX)>5||Math.abs(ev.clientY-startY)>5)) moved=true;
      if(moved){ ev.preventDefault(); setDragGhost({name,x:ev.clientX,y:ev.clientY}); }
    };
    const up=(ev)=>{
      window.removeEventListener('pointermove',move);
      window.removeEventListener('pointerup',up);
      window.removeEventListener('pointercancel',up);
      setDragGhost(null);
      if(!moved){ const g=data.guests.find(x=>x.id===payload.guestId); if(g && !g.isCouple) setEditGuest(g); return; }
      const el=document.elementFromPoint(ev.clientX,ev.clientY);
      if(!el){ if(payload.type==='seat') removeFromTable(payload.guestId); return; }
      const seatEl=el.closest('[data-seat]');
      if(seatEl){ const [tid,si]=seatEl.getAttribute('data-seat').split('|'); dropOnSeat(tid,parseInt(si,10),JSON.stringify(payload)); return; }
      const tableEl=el.closest('[data-table]');
      if(tableEl){ dropOnSeat(tableEl.getAttribute('data-table'),0,JSON.stringify(payload)); return; }
      if(payload.type==='seat') removeFromTable(payload.guestId);   // 拖到桌外 → 移回待安排
    };
    window.addEventListener('pointermove',move,{passive:false});
    window.addEventListener('pointerup',up);
    window.addEventListener('pointercancel',up);
  };

  const addTable=()=>{
    // 免費版桌數限制
    if (!isPro && data.tables.length >= FREE_TABLE_LIMIT) {
      uiProUpgrade(`您已達免費版上限（${FREE_TABLE_LIMIT} 桌）`);
      return;
    }
    const n=data.tables.length;
    const cols=Math.max(1,Math.floor((canvasW-60)/280));   // v5.3：欄數隨畫布寬度
    const t={id:uid(),name:`第 ${n+1} 桌`,capacity:10,x:60+(n%cols)*280,y:60+Math.floor(n/cols)*280,color:TABLE_COLORS[n%TABLE_COLORS.length],posLocked:false,seatLocked:false};
    onUpdate({...data,tables:[...data.tables,t]});
  };

  const saveGuest=g=>{
    const exists=data.guests.find(x=>x.id===g.id);
    onUpdate({...data,guests:exists?data.guests.map(x=>x.id===g.id?g:x):[...data.guests,g]});
    setEditGuest(null);
  };
  const deleteGuest=id=>{
    onUpdate({...data,guests:data.guests.filter(g=>g.id!==id).map(g=>({...g,sameTable:(g.sameTable||[]).filter(x=>x!==id),avoidTable:(g.avoidTable||[]).filter(x=>x!==id)})),avoidPairs:(data.avoidPairs||[]).filter(([a,b])=>a!==id&&b!==id)});
    setEditGuest(null);
  };

  const saveVersion=async()=>{
    const name=await uiPrompt('版本名稱：','版本 '+new Date().toLocaleString('zh-TW',{month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}));
    if(!name) return;
    if((data.versions||[]).find(v=>v.name===name)){if(!await uiConfirm(`已有「${name}」版本，確定覆蓋？`))return;}
    const newV={id:uid(),name,createdAt:Date.now(),snapshot:JSON.stringify({guests:data.guests,tables:data.tables,markers:data.markers,zones:data.zones||[],mainTableId})};
    const versions=data.versions.some(v=>v.name===name)?data.versions.map(v=>v.name===name?newV:v):[...(data.versions||[]),newV];
    onUpdate({...data,versions});
  };

  const loadVersion=async vid=>{
    const v=(data.versions||[]).find(x=>x.id===vid); if(!v) return;
    if(!await uiConfirm(`載入版本「${v.name}」？建議先存版本。`)) return;
    const s=JSON.parse(v.snapshot);
    onUpdate({...data,guests:s.guests||data.guests,tables:s.tables||data.tables,markers:s.markers||data.markers,zones:s.zones||s.areas||data.zones||[]});
    if(s.mainTableId!==undefined) setMainTableId(s.mainTableId);
    setShowVersions(false);
  };

  const exportItems=[
    {label:'匯出 JPG',action:()=>exportImg('jpg')},
    {label:'匯出 PDF（整體一頁）',action:()=>exportImg('pdf')},
    {label:'匯出 PDF（每區一頁）',action:()=>exportImg('pdf-zones')},
    {label:'列印',action:()=>window.print()},
    '---',
    {label:'服務生帶位清單',action:exportSeating},
  ];

  // v5.3：計算實際內容（桌/標記/分區）的外接矩形，匯出時只取有東西的範圍 → A4 不被空白拖累
  function contentBBox(){
    const sz=(SEAT_OUTER+SEAT_SIZE)*2;
    let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
    (data.tables||[]).forEach(t=>{minX=Math.min(minX,t.x);minY=Math.min(minY,t.y);maxX=Math.max(maxX,t.x+sz);maxY=Math.max(maxY,t.y+sz);});
    (data.markers||[]).forEach(m=>{minX=Math.min(minX,m.x);minY=Math.min(minY,m.y);maxX=Math.max(maxX,m.x+170);maxY=Math.max(maxY,m.y+46);});
    (zones||[]).forEach(z=>{minX=Math.min(minX,z.x);minY=Math.min(minY,z.y);maxX=Math.max(maxX,z.x+z.w);maxY=Math.max(maxY,z.y+z.h);});
    if(minX===Infinity){return {x:0,y:0,w:canvasW,h:canvasH};}
    const pad=40;
    minX=Math.max(0,minX-pad); minY=Math.max(0,minY-pad);
    maxX=Math.min(canvasW,maxX+pad); maxY=Math.min(canvasH,maxY+pad);
    return {x:minX,y:minY,w:Math.max(1,maxX-minX),h:Math.max(1,maxY-minY)};
  }
  function cropToDataURL(full,scale,r){
    const sx=Math.max(0,Math.round(r.x*scale)), sy=Math.max(0,Math.round(r.y*scale));
    const sw=Math.max(1,Math.min(full.width-sx,Math.round(r.w*scale)));
    const sh=Math.max(1,Math.min(full.height-sy,Math.round(r.h*scale)));
    const c=document.createElement('canvas'); c.width=sw; c.height=sh;
    const ctx=c.getContext('2d'); ctx.fillStyle='#F9F5EF'; ctx.fillRect(0,0,sw,sh);
    ctx.drawImage(full, sx,sy,sw,sh, 0,0,sw,sh);
    return {dataURL:c.toDataURL('image/jpeg',.92), wpx:sw, hpx:sh};
  }
  function fitA4(pdf,dataURL,wpx,hpx,first){
    const landscape = wpx>=hpx;                 // 依內容比例自動選直/橫式
    const pageW=landscape?297:210, pageH=landscape?210:297;
    if(first){ pdf.deletePage(1); }             // 先移除預設首頁，再用對的方向加頁
    pdf.addPage('a4', landscape?'landscape':'portrait');
    const m=8, availW=pageW-2*m, availH=pageH-2*m, ratio=wpx/hpx;
    let dW=availW, dH=dW/ratio;
    if(dH>availH){ dH=availH; dW=dH*ratio; }
    pdf.addImage(dataURL,'JPEG',(pageW-dW)/2,(pageH-dH)/2,dW,dH);
  }

  async function exportImg(mode){
    try{
      if(!window.html2canvas){await new Promise((r,j)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';s.onload=r;s.onerror=j;document.head.appendChild(s);});}
      const scale=2;
      const full=await window.html2canvas(canvasRef.current,{backgroundColor:'#F9F5EF',scale});
      if(mode==='jpg'){
        const {dataURL}=cropToDataURL(full,scale,contentBBox());
        const a=document.createElement('a');a.href=dataURL;a.download='座位圖.jpg';a.click();
        return;
      }
      if(!window.jspdf){await new Promise((r,j)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';s.onload=r;s.onerror=j;document.head.appendChild(s);});}
      const pdf=new window.jspdf.jsPDF({orientation:'landscape',unit:'mm',format:'a4'});
      let rects;
      if(mode==='pdf-zones' && zones.length){
        rects = zones.map(z=>({x:z.x,y:z.y,w:z.w,h:z.h}));
      } else {
        if(mode==='pdf-zones') uiAlert('尚未建立任何分區，改以整體匯出一頁。');
        rects = [contentBBox()];
      }
      rects.forEach((r,i)=>{ const {dataURL,wpx,hpx}=cropToDataURL(full,scale,r); fitA4(pdf,dataURL,wpx,hpx,i===0); });
      pdf.save(mode==='pdf-zones'&&zones.length?'座位圖_分區.pdf':'座位圖.pdf');
    }catch(e){uiAlert('匯出失敗：'+e.message);}
  }

  function exportSeating(){
    const h=['桌名','分區','姓名','人數','葷食','素食','特殊需求'];
    const rows=[];
    data.tables.forEach(t=>{
      const sm=seatMap(t,data.guests);
      const seen=new Set();
      const zn=zoneNameOf(data,t.id);
      sm.forEach(g=>{
        if(g&&!seen.has(g.id)){
          seen.add(g.id);
          rows.push([t.name,zn,g.name,g.count,(g.count||1)-(g.vegCount||0),g.vegCount||0,g.special||'']);
        }
      });
    });
    download('帶位清單_'+new Date().toISOString().slice(0,10)+'.csv',toCSV([h,...rows]),'text/csv;charset=utf-8;');
  }

  return (
    <div style={{display:'flex',height:'calc(100vh - 58px)'}}>
      {/* v5.4 #5c：觸控拖曳浮動標籤 */}
      {touchDrag && (
        <div data-tp="1" style={{position:'fixed',left:touchDrag.x,top:touchDrag.y,zIndex:9998,
          transform:'translate(-50%,-130%)',pointerEvents:'none',
          padding:'6px 12px',borderRadius:4,background:'#B5895F',color:'#FFFEFA',
          fontSize:13,fontWeight:600,boxShadow:'0 6px 20px rgba(0,0,0,.3)',whiteSpace:'nowrap'}}>
          {touchDrag.name}
        </div>
      )}
      {/* v5.3：座位改派（Pointer）浮動標籤 */}
      {dragGhost && (
        <div data-tp="1" style={{position:'fixed',left:dragGhost.x,top:dragGhost.y,zIndex:9998,
          transform:'translate(-50%,-130%)',pointerEvents:'none',
          padding:'6px 12px',borderRadius:4,background:'#B5895F',color:'#FFFEFA',
          fontSize:13,fontWeight:600,boxShadow:'0 6px 20px rgba(0,0,0,.3)',whiteSpace:'nowrap'}}>
          {dragGhost.name}
        </div>
      )}
      {/* Sidebar — 桌機顯示；手機賓客清單改由底部抽屜提供 */}
      <div className="no-print" style={{width:(isMobile||!sidebarOpen)?0:272,flexShrink:0,overflow:'hidden',transition:'width .25s',background:'var(--wed-card, #FFFEFA)',borderRight:'1px solid var(--wed-border, #E5DDD0)',position:'relative'}}>

        <div style={{width:272,padding:14,height:'100%',overflowY:'auto'}} className="wed-scroll">
          <div style={{marginBottom:12}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,letterSpacing:4,color:'#B5895F'}}>UNASSIGNED</div>
            <div style={{fontFamily:FONT_STACK,fontSize:17,marginTop:2}}>待安排 <span style={{color:'#B5895F'}}>{filteredUnassigned.reduce((s,g)=>s+(g.count||1),0)}</span> 人</div>
          </div>
          <TInput value={search} onChange={setSearch} placeholder="🔍 搜尋" style={{marginBottom:10,fontSize:12}} />
          {Object.entries(GI).map(([k,info])=>{
            const list=grouped[k]||[];
            if(!list.length) return null;
            return (
              <div key={k} style={{marginBottom:14}}>
                <div style={{fontSize:10,letterSpacing:.8,color:info.color,marginBottom:6,paddingBottom:3,borderBottom:`1px solid ${info.soft}`,display:'flex',justifyContent:'space-between',fontWeight:600}}>
                  <span>{info.label}</span><span style={{color:'#9A8F82'}}>{list.reduce((s,g)=>s+(g.count||1),0)} 人</span>
                </div>
                <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
                  {list.map(g=>(
                    <div key={g.id} draggable
                      onDragStart={e=>{e.dataTransfer.setData('text/plain',JSON.stringify({type:'guest',guestId:g.id}));e.dataTransfer.effectAllowed='move';}}
                      onTouchStart={e=>beginTouchDrag(e,{type:'guest',guestId:g.id},displayName(g,2,3))}
                      onClick={()=>{ if(!touchDragMovedRef.current && !g.isCouple) setEditGuest(g); }}
                      style={{padding:'3px 7px',fontSize:11,background:info.soft,color:info.color,border:`1px solid ${info.color}40`,borderRadius:2,cursor:'grab',display:'inline-flex',alignItems:'center',gap:3,touchAction:'none'}}
                      title={g.name+(g.special?` · ${g.special}`:'')+' (點擊編輯／長按拖曳)'}>
                      {displayName(g,2,3)}{(g.count||1)>1&&<span style={{fontSize:9,opacity:.7}}>+{(g.count||1)-1}</span>}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          {filteredUnassigned.length===0&&<div style={{padding:20,textAlign:'center',color:'#9A8F82',fontSize:12}}>{unassigned.length===0?'✨ 全部已排位':'查無賓客'}</div>}
        </div>
      </div>

      {/* Canvas area */}
      <div style={{flex:1,display:'flex',flexDirection:'column',overflow:'hidden',position:'relative'}}>
        {/* Sidebar toggle：手機已有底部抽屜把手，不需此鈕，隱藏避免遮蓋 */}
        {!isMobile && (
        <button onClick={()=>setSidebarOpen(p=>!p)} className="wed-sidebar-toggle"
          title={sidebarOpen?'收起待安排側欄':'展開待安排側欄'}
          style={{position:'absolute',bottom:20,left:16,zIndex:60,
            height:36,borderRadius:18,border:'1px solid #D4B894',
            background:'rgba(249,245,239,.97)',color:'#7A6E5E',fontSize:13,
            cursor:'pointer',boxShadow:'0 2px 10px rgba(0,0,0,.18)',
            display:'flex',alignItems:'center',justifyContent:'center',gap:5,
            padding:'0 14px',lineHeight:'36px',whiteSpace:'nowrap'}}>
          {sidebarOpen ? '◀ 收起名單' : '▶ 待安排名單'}
        </button>
        )}
        {/* Toolbar */}
        <div className="no-print" style={{padding:'10px 14px',borderBottom:'1px solid var(--wed-border, #E5DDD0)',background:'var(--wed-card, #FFFEFA)',display:'flex',alignItems:'center',gap:7,flexWrap:'wrap'}}>


          <div style={{flex:1,minWidth:160}}>
            <div style={{fontSize:11,color:'#9A8F82'}}>排位進度</div>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <span style={{fontSize:13,color:'#B5895F'}}><strong style={{fontSize:17}}>{seated}</strong> / {totalSeats||0} 席</span>
            </div>
            <div style={{height:3,background:'#F1EAE0',borderRadius:2,marginTop:3,overflow:'hidden',width:160}}>
              <div style={{width:totalSeats?(seated/totalSeats*100)+'%':'0%',height:'100%',background:'#B5895F',transition:'width .3s'}} />
            </div>
          </div>
          {/* 衝突徽章 — 置中，尺寸與復原/重做一致 */}
          <div style={{display:'flex',gap:6,flex:'0 0 auto'}}>
            {totalConflicts>0&&(
              <button
                title={'點擊開啟避桌管理。目前衝突：\n'+conflictDetails.map(c=>`${c.a?.nickname||c.a?.name||'?'} ↔ ${c.b?.nickname||c.b?.name||'?'}（避桌卻同桌：${c.table.name}）`).join('\n')}
                onClick={()=>setShowAvoid(true)}
                style={{padding:'4px 10px',fontSize:12,borderRadius:2,border:'1px solid #E0BCBC',background:'#FAEEEE',color:'#C04040',cursor:'pointer',fontFamily:'inherit',lineHeight:1.5}}>
                ⚠️ {totalConflicts} 避桌衝突
              </button>
            )}
            {sameTableUnmet.length>0&&(
              <button
                title={'同桌需求尚未滿足：\n'+sameTableUnmet.map(u=>`${u.a?.nickname||u.a?.name||'?'} ↔ ${u.b?.nickname||u.b?.name||'?'}（${u.reason}）`).join('\n')}
                onClick={()=>setShowSame(true)}
                style={{padding:'4px 10px',fontSize:12,borderRadius:2,border:'1px solid #E8D86A',background:'#FFFBE8',color:'#7A5C00',cursor:'pointer',fontFamily:'inherit',lineHeight:1.5}}>
                💛 {sameTableUnmet.length} 同桌未滿足
              </button>
            )}
          </div>
          <Btn v="ghost" size="sm" onClick={undo}>↶ 復原</Btn>
          <Btn v="ghost" size="sm" onClick={redo}>↷ 重做</Btn>
          <Btn v="ghost" size="sm" onClick={addTable}>＋ 新桌</Btn>
          <Btn v="ghost" size="sm" onClick={openNewFacility}>＋ 環境設施</Btn>
          <Btn v="ghost" size="sm" onClick={addZone}>＋ 分區</Btn>
          <select value={curVenueKey} onChange={e=>setVenueSize(e.target.value)} title="場地規模（畫布尺寸）"
            style={{height:30,border:'1px solid #E5DDD0',borderRadius:2,background:'#FFFEFA',color:'#7A6E5E',
              fontSize:12,fontFamily:'inherit',padding:'0 6px',cursor:'pointer'}}>
            {!curVenueKey && <option value="">自訂尺寸</option>}
            {VENUE_SIZES.map(s=> <option key={s.key} value={s.key}>{s.label}</option>)}
          </select>
          <Btn v="ghost" size="sm" onClick={saveVersion}>💾 存版本</Btn>
          <Btn v="ghost" size="sm" onClick={()=>setShowVersions(true)}>版本紀錄 ({(data.versions||[]).length})</Btn>
          {isPro
            ? <Dropdown label="匯出" icon="⬇" items={exportItems} />
            : <Btn v="ghost" size="sm" onClick={()=>uiProUpgrade('排位匯出為 Pro 方案專屬功能')} title="升級 Pro 解鎖匯出">🔒 匯出</Btn>}
        </div>

        {/* Canvas */}
        <div className="wed-scroll" style={{flex:1,overflow:'auto',position:'relative',backgroundImage:'radial-gradient(var(--wed-border, #E5DDD0) 1px,transparent 1px)',backgroundSize:'20px 20px',background:'var(--wed-bg, #F9F5EF)'}}
          onDragOver={e=>e.preventDefault()}
          onDrop={e=>{
            e.preventDefault();
            const p=e.dataTransfer.getData('text/plain');
            try{const q=JSON.parse(p);if(q.type==='seat')removeFromTable(q.guestId);}catch{}
          }}>

          {/* v5.2 多選分配 Bar（僅手機顯示、有選中時才出現） */}
          {isMobile && tapSelected.length > 0 && (
            <div data-tp="1" style={{position:'fixed',top:0,left:0,right:0,zIndex:200,
              background:'#B5895F',color:'#FFFEFA',
              padding:'10px 14px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,
              boxShadow:'0 2px 12px rgba(181,137,95,.5)',fontSize:13}}>
              <span data-tp="1">✓ 已選 {tapSelected.reduce((s,sel)=>s+(sel.count||1),0)} 人　點任一桌放入</span>
              <button data-tp="1" onClick={()=>setTapSelected([])}
                style={{padding:'4px 12px',borderRadius:2,border:'1px solid rgba(255,255,255,.4)',
                  background:'transparent',color:'#FFFEFA',fontSize:12,cursor:'pointer',fontFamily:'inherit'}}>
                取消
              </button>
            </div>
          )}
          {/* 成功放入短暫提示 */}
          {tapFlash && (
            <div data-tp="1" style={{position:'fixed',top:0,left:0,right:0,zIndex:200,background:'#4A8A4A',color:'#FFFEFA',
              padding:'8px 14px',fontSize:12,textAlign:'center',animation:'wedFadeIn .2s ease'}}>
              ✓ {tapFlash} 已放入
            </div>
          )}
          <div ref={canvasRef} style={{width:canvasW,height:canvasH,position:'relative'}}>
            {/* v5.6 分區框（在桌子下層；框體 pointerEvents:none 讓底下設施/桌子可點） */}
            {zones.map(z=>{
              const zc=z.color||'#C9A876';
              return (
              <div key={z.id} data-zone={z.id}
                style={{position:'absolute',left:z.x,top:z.y,width:z.w,height:z.h,zIndex:1,pointerEvents:'none',
                  border:`2px dashed ${zc}`,borderRadius:6,background:zc+'0D',boxSizing:'border-box'}}>
                <div data-tp="1"
                  onPointerDown={e=>{ if(z.locked) return; try{ e.currentTarget.setPointerCapture(e.pointerId); }catch(_){} startDragZone(e,z.id); }}
                  style={{position:'absolute',top:0,left:0,display:'flex',alignItems:'center',gap:6,pointerEvents:'auto',
                    padding:'3px 8px',background:zc,color:'#FFFEFA',fontFamily:FONT_STACK,fontSize:12,letterSpacing:1,
                    borderRadius:'4px 0 6px 0',cursor:z.locked?'default':'grab',userSelect:'none',touchAction:'none'}}>
                  <span>{z.name}{z.locked&&' 🔒'}</span>
                  <span onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();setZoneEdit({...z});}} title="編輯分區" style={{cursor:'pointer',opacity:.9}}>✎</span>
                  <span onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();deleteZone(z.id);}} title="刪除分區" style={{cursor:'pointer',opacity:.9}}>✕</span>
                </div>
                {/* 縮放把手（右下角）；鎖定時隱藏 */}
                {!z.locked && (
                  <div onPointerDown={e=>{ try{ e.currentTarget.setPointerCapture(e.pointerId); }catch(_){} startResizeZone(e,z.id); }}
                    title="拖曳調整大小"
                    style={{position:'absolute',right:-2,bottom:-2,width:16,height:16,cursor:'nwse-resize',pointerEvents:'auto',
                      borderRight:`3px solid ${zc}`,borderBottom:`3px solid ${zc}`,borderRadius:'0 0 4px 0',touchAction:'none'}} />
                )}
              </div>
              );
            })}
            {data.tables.map(t=>(
              <RoundTable key={t.id} table={t} guests={data.guests} isMain={mainTableId===t.id}
                posLocked={!!t.posLocked} seatLocked={!!t.seatLocked} planLocked={isPlanLocked(t.id)}
                groupInfo={GI}
                onDragStart={startDragTable}
                onClickEdit={id=>{ if(dragMovedRef.current) return; if(isPlanLocked(id)){ uiProUpgrade('此桌因方案到期已鎖定，續訂 Pro 後可編輯'); return; } setTableEdit(data.tables.find(x=>x.id===id)); }}
                onUnlockPos={id=>onUpdate({...data,tables:data.tables.map(x=>x.id===id?{...x,posLocked:false}:x)})}
                onUnlockSeat={id=>onUpdate({...data,tables:data.tables.map(x=>x.id===id?{...x,seatLocked:false}:x)})}
                conflicts={allConflicts.get(t.id)||[]}
                onDropSeat={dropOnSeat}
                onStartSeatDrag={startSeatDrag}
                onRemoveSeat={removeFromTable}
                tapPending={isMobile && tapSelected.length > 0}
                onTapPlace={isMobile ? assignToTable : null}
                onClickGuest={(g)=>{ if(g && !g.isCouple) setEditGuest(g); }} />
            ))}
            {/* v5.5 宴會環境設施（emoji + 自訂顏色 + 鎖定 + 點擊編輯） */}
            {data.markers.map(m=>{
              const bg=m.color||'#8A7BAF';
              return (
                <div key={m.id} data-tp="1"
                  onPointerDown={e=>{ if(m.locked) return; try{e.currentTarget.setPointerCapture(e.pointerId);}catch(_){} startDragMarker(e,m.id); }}
                  onClick={e=>{ if(dragMovedRef.current) return; e.stopPropagation(); setFacilityEdit({...m}); }}
                  style={{position:'absolute',left:m.x,top:m.y,padding:'8px 18px',zIndex:2,
                    background:bg,color:'#FFFEFA',
                    fontFamily:FONT_STACK,fontSize:13,letterSpacing:2,borderRadius:2,
                    cursor:m.locked?'default':'grab',userSelect:'none',
                    boxShadow:'0 2px 8px rgba(0,0,0,.15)',touchAction:'none',
                    opacity:m.locked?.85:1,display:'flex',alignItems:'center',gap:6}}>
                  {m.emoji||'📍'} {m.label}
                  {m.locked && <span data-tp="1" style={{fontSize:11,opacity:.7}}>🔒</span>}
                </div>
              );
            })}
            {data.tables.length===0&&(
              <div style={{position:'absolute',top:'38%',left:'50%',transform:'translate(-50%,-50%)',textAlign:'center',color:'#9A8F82'}}>
                <div style={{fontSize:44,marginBottom:12}}>🪑</div>
                <div style={{fontSize:13,marginBottom:14}}>還沒有桌子</div>
                <Btn onClick={addTable}>＋ 新增第一張桌</Btn>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table edit modal */}
      {tableEdit && (
        <TableEditModal table={tableEdit} onSave={t=>{onUpdate({...data,tables:data.tables.map(x=>x.id===t.id?t:x)});setTableEdit(null);}}
          onDelete={async id=>{if(!await uiConfirm({title:'刪除桌次',message:'刪除此桌？已排賓客回到待安排清單。',danger:true,confirmText:'刪除'}))return;
            onUpdate({...data,tables:data.tables.filter(t=>t.id!==id),guests:data.guests.map(g=>g.tableId===id?{...g,tableId:null,startSeat:null}:g)});
            if(mainTableId===id)setMainTableId(null);setTableEdit(null);}}
          onClear={async id=>{
            const tbl=data.tables.find(t=>t.id===id);
            if(tbl&&tbl.seatLocked){uiAlert('此桌座位已鎖定，請先解除座位鎖才能清空。');return;}
            if(!await uiConfirm({title:'清空桌次',message:'清空此桌（重排）？所有人移回待安排。',confirmText:'清空'}))return;
            onUpdate({...data,guests:data.guests.map(g=>g.tableId===id?{...g,tableId:null,startSeat:null}:g)});setTableEdit(null);}}
          onSetLock={(id,key,val)=>onUpdate({...data,tables:data.tables.map(t=>t.id===id?{...t,[key]:val}:t)})}
          onSetMain={id=>{setMainTableId(mainTableId===id?null:id);setTableEdit(null);}}
          mainTableId={mainTableId}
          onClose={()=>setTableEdit(null)} />
      )}

      {/* v5.5 宴會環境設施 建立/編輯 Modal */}
      {facilityEdit && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.5)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',padding:16}}
          onClick={()=>setFacilityEdit(null)}>
          <div onClick={e=>e.stopPropagation()} style={{background:'var(--wed-card,#FFFEFA)',borderRadius:3,padding:24,width:'100%',maxWidth:420,maxHeight:'90vh',overflowY:'auto',boxShadow:'0 4px 24px rgba(0,0,0,.12)',border:'1px solid var(--wed-border,#E5DDD0)'}}>
            <div style={{fontFamily:FONT_STACK,fontSize:17,fontWeight:600,color:'#3A332B',marginBottom:18}}>
              {facilityEdit._isNew?'新增環境設施':'編輯環境設施'}
            </div>
            {/* 預覽 */}
            <div style={{display:'flex',justifyContent:'center',marginBottom:18}}>
              <div style={{padding:'8px 18px',background:facilityEdit.color,color:'#FFFEFA',
                fontFamily:FONT_STACK,fontSize:14,letterSpacing:2,borderRadius:2,
                display:'inline-flex',alignItems:'center',gap:6,boxShadow:'0 2px 8px rgba(0,0,0,.15)'}}>
                {facilityEdit.emoji} {facilityEdit.label||'設施名稱'}
                {facilityEdit.locked && <span style={{fontSize:11,opacity:.7}}>🔒</span>}
              </div>
            </div>
            {/* 名稱 */}
            <div style={{marginBottom:16}}>
              <div style={{fontSize:12,color:'#6B6259',marginBottom:5}}>名稱</div>
              <TInput value={facilityEdit.label} onChange={v=>setFacilityEdit(f=>({...f,label:v}))} placeholder="如：舞台、收禮桌、投影布幕" />
            </div>
            {/* 符號 */}
            <div style={{marginBottom:16}}>
              <div style={{fontSize:12,color:'#6B6259',marginBottom:5}}>符號</div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:6}}>
                {FACILITY_EMOJIS.map(em=>(
                  <button key={em} onClick={()=>setFacilityEdit(f=>({...f,emoji:em}))}
                    style={{fontSize:18,padding:'6px 0',borderRadius:6,cursor:'pointer',
                      border:`2px solid ${facilityEdit.emoji===em?'#B5895F':'transparent'}`,
                      background:facilityEdit.emoji===em?'#F0E4D0':'#F7F2EA',lineHeight:1.2}}>
                    {em}
                  </button>
                ))}
              </div>
            </div>
            {/* 顏色 */}
            <div style={{marginBottom:18}}>
              <div style={{fontSize:12,color:'#6B6259',marginBottom:5}}>顏色</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                {FACILITY_COLORS.map(c=>(
                  <button key={c} onClick={()=>setFacilityEdit(f=>({...f,color:c}))}
                    style={{width:30,height:30,borderRadius:'50%',background:c,cursor:'pointer',
                      border:facilityEdit.color===c?'3px solid #3A332B':'2px solid #E5DDD0',
                      boxShadow:facilityEdit.color===c?'0 0 0 2px #FFFEFA inset':'none'}} />
                ))}
              </div>
            </div>
            {/* 鎖定 */}
            <label style={{display:'flex',alignItems:'center',gap:8,marginBottom:20,cursor:'pointer',fontSize:13,color:'#6B6259'}}>
              <input type="checkbox" autoComplete="nope" checked={!!facilityEdit.locked} onChange={e=>setFacilityEdit(f=>({...f,locked:e.target.checked}))} />
              🔒 鎖定（不可移動）
            </label>
            {/* 按鈕（與其他浮窗一致：刪除靠左、取消+儲存靠右、上分隔線） */}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:20,paddingTop:16,borderTop:'1px solid #E5DDD0'}}>
              {!facilityEdit._isNew
                ? <Btn v="red" size="sm" onClick={()=>deleteFacility(facilityEdit.id)}>🗑 刪除</Btn>
                : <span/>}
              <div style={{display:'flex',gap:7}}>
                <Btn v="ghost" onClick={()=>setFacilityEdit(null)}>取消</Btn>
                <Btn onClick={()=>saveFacility(facilityEdit)}>{facilityEdit._isNew?'建立':'儲存'}</Btn>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* v5.6 分區 建立/編輯 Modal（名稱／顏色／鎖定） */}
      {zoneEdit && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.5)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',padding:16}}
          onClick={()=>setZoneEdit(null)}>
          <div onClick={e=>e.stopPropagation()} style={{background:'var(--wed-card,#FFFEFA)',borderRadius:3,padding:24,width:'100%',maxWidth:420,maxHeight:'90vh',overflowY:'auto',boxShadow:'0 4px 24px rgba(0,0,0,.12)',border:'1px solid var(--wed-border,#E5DDD0)'}}>
            <div style={{fontFamily:FONT_STACK,fontSize:17,fontWeight:600,color:'#3A332B',marginBottom:18}}>編輯分區</div>
            {/* 預覽 */}
            <div style={{display:'flex',justifyContent:'center',marginBottom:18}}>
              <div style={{padding:'4px 12px',background:zoneEdit.color,color:'#FFFEFA',
                fontFamily:FONT_STACK,fontSize:13,letterSpacing:1,borderRadius:3,
                display:'inline-flex',alignItems:'center',gap:6,boxShadow:'0 2px 8px rgba(0,0,0,.15)'}}>
                {zoneEdit.name||'分區名稱'}{zoneEdit.locked&&<span style={{fontSize:11,opacity:.7}}>🔒</span>}
              </div>
            </div>
            {/* 名稱 */}
            <div style={{marginBottom:16}}>
              <div style={{fontSize:12,color:'#6B6259',marginBottom:5}}>名稱</div>
              <TInput value={zoneEdit.name} onChange={v=>setZoneEdit(z=>({...z,name:v}))} placeholder="如：主廳、VIP 區、2F" />
            </div>
            {/* 顏色 */}
            <div style={{marginBottom:18}}>
              <div style={{fontSize:12,color:'#6B6259',marginBottom:5}}>顏色（同步套用到名單分區標籤）</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                {FACILITY_COLORS.map(c=>(
                  <button key={c} onClick={()=>setZoneEdit(z=>({...z,color:c}))}
                    style={{width:30,height:30,borderRadius:'50%',background:c,cursor:'pointer',
                      border:zoneEdit.color===c?'3px solid #3A332B':'2px solid #E5DDD0',
                      boxShadow:zoneEdit.color===c?'0 0 0 2px #FFFEFA inset':'none'}} />
                ))}
              </div>
            </div>
            {/* 鎖定 */}
            <label style={{display:'flex',alignItems:'center',gap:8,marginBottom:20,cursor:'pointer',fontSize:13,color:'#6B6259'}}>
              <input type="checkbox" autoComplete="nope" checked={!!zoneEdit.locked} onChange={e=>setZoneEdit(z=>({...z,locked:e.target.checked}))} />
              🔒 鎖定（不可拖移／縮放）
            </label>
            {/* 按鈕 */}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:20,paddingTop:16,borderTop:'1px solid #E5DDD0'}}>
              <Btn v="red" size="sm" onClick={()=>deleteZone(zoneEdit.id)}>🗑 刪除</Btn>
              <div style={{display:'flex',gap:7}}>
                <Btn v="ghost" onClick={()=>setZoneEdit(null)}>取消</Btn>
                <Btn onClick={()=>saveZone(zoneEdit)}>儲存</Btn>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal open={showVersions} onClose={()=>setShowVersions(false)} title="排位版本管理">
        <Btn onClick={saveVersion} style={{marginBottom:14}}>💾 儲存當前為新版本</Btn>
        <div style={{maxHeight:360,overflowY:'auto'}}>
          {[...(data.versions||[])].reverse().map(v=>(
            <div key={v.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'11px 12px',borderBottom:'1px solid #F1EAE0'}}>
              <div>
                <div style={{fontSize:13,fontWeight:500}}>{v.name}</div>
                <div style={{fontSize:10,color:'#9A8F82',marginTop:1}}>{new Date(v.createdAt).toLocaleString('zh-TW')}</div>
              </div>
              <div style={{display:'flex',gap:5}}>
                <Btn size="sm" v="ghost" onClick={()=>loadVersion(v.id)}>載入</Btn>
                <Btn size="sm" v="red" onClick={async()=>{if(!await uiConfirm({title:'刪除版本',message:'確定刪除此版本？',danger:true,confirmText:'刪除'}))return;onUpdate({...data,versions:data.versions.filter(x=>x.id!==v.id)});}}>刪除</Btn>
              </div>
            </div>
          ))}
          {!(data.versions||[]).length&&<div style={{padding:28,textAlign:'center',color:'#9A8F82'}}>尚未儲存任何版本</div>}
        </div>
      </Modal>

      {/* v5.3 A方案：手機底部賓客抽屜 — 僅 isMobile 時渲染 */}
      {isMobile && (
        <>
          {/* 遮罩：點擊關閉抽屜 */}
          {drawerOpen && <div onClick={()=>setDrawerOpen(false)} data-tp="1"
            style={{position:'fixed',inset:0,zIndex:99,background:'rgba(58,51,43,.25)'}} />}

          <div data-tp="1" style={{position:'fixed',bottom:0,left:0,right:0,zIndex:100,
            background:'var(--wed-card, #FFFEFA)',borderTop:'1px solid var(--wed-border, #E5DDD0)',
            borderRadius:'14px 14px 0 0',
            transform:`translateY(${drawerOpen?'0':'calc(100% - 50px)'})`  ,
            transition:'transform .3s cubic-bezier(.4,0,.2,1)',
            maxHeight:'65vh',display:'flex',flexDirection:'column',
            boxShadow:'0 -4px 24px rgba(58,51,43,.14)'}}>

            {/* 抽屜把手 + 標題列 */}
            <div data-tp="1" onClick={()=>setDrawerOpen(p=>!p)}
              style={{padding:'8px 16px',cursor:'pointer',flexShrink:0,
                borderBottom:drawerOpen?'1px solid var(--wed-border, #E5DDD0)':'none'}}>
              <div data-tp="1" style={{width:36,height:4,background:'#E5DDD0',borderRadius:2,margin:'0 auto 8px'}}/>
              <div data-tp="1" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div data-tp="1" style={{fontFamily:FONT_STACK,fontSize:15,color:'#3A332B'}}>
                  待安排 <span data-tp="1" style={{color:'#B5895F'}}>{unassigned.reduce((s,g)=>s+(g.count||1),0)}</span> 人
                  {tapSelected.length > 0 && <span data-tp="1" style={{marginLeft:12,color:'#B5895F'}}>✓ 已選 {tapSelected.reduce((s,sel)=>s+(sel.count||1),0)} 人</span>}
                </div>
                <div data-tp="1" style={{fontSize:11,color:'#9A8F82'}}>
                  {drawerOpen ? '▼ 收起' : '▲ 展開・複選後點桌放入'}
                </div>
              </div>
            </div>

            {/* 賓客清單 — 抽屜展開時顯示 */}
            {drawerOpen && (
              <div data-tp="1" style={{overflowY:'auto',padding:'10px 14px 20px',flex:1}} className="wed-scroll">
                <div data-tp="1" style={{fontSize:11,color:'#9A8F82',marginBottom:10,lineHeight:1.7,
                  background:'#FDF6EC',border:'1px solid #E8D0A8',borderRadius:3,padding:'7px 10px'}}>
                  💡 <strong data-tp="1" style={{color:'#B5895F'}}>使用方法</strong>：可複選多人（最多 10 人）→點任一桌位全數放入。不需要拖曳。
                </div>
                {Object.entries(GI).map(([k,info])=>{
                  const list=grouped[k]||[];
                  if(!list.length) return null;
                  return (
                    <div key={k} data-tp="1" style={{marginBottom:16}}>
                      <div data-tp="1" style={{fontSize:10,letterSpacing:.8,color:info.color,marginBottom:8,
                        paddingBottom:3,borderBottom:`1px solid ${info.soft}`,
                        display:'flex',justifyContent:'space-between',fontWeight:600}}>
                        <span data-tp="1">{info.label}</span>
                        <span data-tp="1" style={{color:'#9A8F82'}}>{list.reduce((s,g)=>s+(g.count||1),0)} 人</span>
                      </div>
                      <div data-tp="1" style={{display:'flex',flexWrap:'wrap',gap:8}}>
                        {list.map(g=>{
                          const isSel = tapSelected.some(s => s.guestId === g.id);
                          const toggleSelect = () => {
                            if(isSel){
                              setTapSelected(tapSelected.filter(s => s.guestId !== g.id));
                            } else {
                              const currentTotal = tapSelected.reduce((sum, s) => sum + (s.count || 1), 0);
                              const newTotal = currentTotal + (g.count || 1);
                              if(newTotal > 10){
                                uiAlert('最多只能選擇 10 人');
                                return;
                              }
                              setTapSelected([...tapSelected, {guestId:g.id,name:g.nickname||g.name,count:g.count||1}]);
                            }
                          };
                          return (
                            <button key={g.id} data-tp="1"
                              onClick={toggleSelect}
                              style={{padding:'8px 14px',fontSize:13,background:isSel?info.color:info.soft,
                                color:isSel?'#FFFEFA':info.color,
                                border:`1.5px solid ${isSel?info.color:info.color+'60'}`,
                                borderRadius:20,cursor:'pointer',fontFamily:'inherit',fontWeight:isSel?700:400,
                                display:'inline-flex',alignItems:'center',gap:4,
                                boxShadow:isSel?`0 0 0 3px ${info.color}40`:'none',
                                transition:'all .15s'}}>
                              {g.nickname||g.name}
                              {(g.count||1)>1&&<span data-tp="1" style={{fontSize:10,opacity:.8}}>+{(g.count||1)-1}</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                {unassigned.length===0&&(
                  <div data-tp="1" style={{padding:30,textAlign:'center',color:'#9A8F82',fontSize:13}}>✨ 全部已排位</div>
                )}
              </div>
            )}
          </div>
        </>
      )}

      <GuestModal open={!!editGuest} guest={editGuest} allGuests={data.guests}
        onSave={saveGuest} onClose={()=>setEditGuest(null)} onDelete={null} groupInfo={GI} />

      <AvoidPairsModal open={showAvoid} onClose={()=>setShowAvoid(false)} data={data} onUpdate={onUpdate} />
      <SameTablePairsModal open={showSame} onClose={()=>setShowSame(false)} data={data} onUpdate={onUpdate} />
    </div>
  );
}

// ============================================================
// TABLE EDIT MODAL (with Lock / Clear / Main options)
// ============================================================
function TableEditModal({table,onSave,onDelete,onClear,onSetLock,onSetMain,mainTableId,onClose}) {
  const [t,setT] = useState({...table});
  const [isMain,setIsMain] = useState(mainTableId===table.id);   // v5.6：主桌改為按儲存才套用
  const up=(k,v)=>setT(p=>({...p,[k]:v}));
  const save=()=>{                                               // v5.6：鎖定/主桌一併在儲存時套用
    onSave(t);
    if(isMain !== (mainTableId===t.id)) onSetMain(t.id);
  };
  const lockBtn = (key,onLabel,offLabel)=>{
    const on=!!t[key];
    return (
      <Btn v="ghost" size="sm"
        onClick={()=>up(key,!t[key])}
        style={{flex:1, background:on?'#F9F5EF':'transparent',
          borderColor:on?'#B5895F':undefined, color:on?'#B5895F':undefined}}>
        {on?onLabel:offLabel}
      </Btn>
    );
  };
  return (
    <Modal open={true} onClose={onClose} title="桌次設定" width={440}>
      <Field label="桌名"><TInput value={t.name} onChange={v=>up('name',v)} /></Field>
      <Field label="座位數">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button onClick={()=>up('capacity',Math.max(4,t.capacity-1))} style={{width:30,height:30,border:'1px solid #E5DDD0',borderRadius:2}}>−</button>
          <span style={{fontSize:20,fontWeight:500,minWidth:28,textAlign:'center'}}>{t.capacity}</span>
          <button onClick={()=>up('capacity',Math.min(20,t.capacity+1))} style={{width:30,height:30,border:'1px solid #E5DDD0',borderRadius:2}}>＋</button>
        </div>
      </Field>
      <Field label="桌色">
        <div style={{display:'flex',gap:7,flexWrap:'wrap'}}>
          {TABLE_COLORS.map(c=>(
            <button key={c} onClick={()=>up('color',c)} style={{width:28,height:28,borderRadius:'50%',background:c,border:t.color===c?'2.5px solid #3A332B':'2px solid transparent'}} />
          ))}
        </div>
      </Field>
      {/* v5.3：兩種獨立鎖定 */}
      <Field label="鎖定">
        <div style={{display:'flex',gap:8}}>
          {lockBtn('posLocked','📌 已鎖位置','📌 鎖定位置')}
          {lockBtn('seatLocked','🔒 已鎖座位','🔒 鎖定座位')}
        </div>
        <div style={{fontSize:11,color:'#9A8F82',marginTop:5,lineHeight:1.6}}>
          位置鎖：桌子不能移動，座位照常編輯。<br/>座位鎖：已排好的人凍結（空位仍可加新人），桌子可移動。
        </div>
      </Field>
      <div style={{display:'flex',gap:8,marginTop:8}}>
        <Btn v="ghost" size="sm" onClick={()=>setIsMain(m=>!m)} style={{flex:1,
          background:isMain?'#F9F5EF':'transparent', borderColor:isMain?'#B5895F':undefined, color:isMain?'#B5895F':undefined}}>
          {isMain?'★ 已設為主桌':'☆ 設為主桌'}
        </Btn>
        <Btn v="ghost" size="sm" onClick={()=>onClear(t.id)} style={{flex:1}}
          disabled={!!t.seatLocked} title={t.seatLocked?'請先解除座位鎖才能清空':undefined}>
          🔄 重排（清空）{t.seatLocked&&' 🔒'}
        </Btn>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',marginTop:20,paddingTop:16,borderTop:'1px solid #E5DDD0'}}>
        <Btn v="red" size="sm" onClick={()=>onDelete(t.id)}>🗑 刪除此桌</Btn>
        <div style={{display:'flex',gap:7}}>
          <Btn v="ghost" onClick={onClose}>取消</Btn>
          <Btn onClick={save}>儲存</Btn>
        </div>
      </div>
    </Modal>
  );
}


// ============================================================
// PHOTO CARD — drag handle + draggable focal line
// ============================================================
function PhotoCard({photo, index, totalCount, onReorder, onFocalChange, onDelete}) {
  const [dragOver, setDragOver] = useState(false);
  const imgWrapRef = useRef(null);
  const draggingFocal = useRef(false);

  const startFocalDrag = (clientY) => {
    const rect = imgWrapRef.current.getBoundingClientRect();
    const update = (y) => {
      const pct = ((y - rect.top) / rect.height) * 100;
      onFocalChange(Math.max(0, Math.min(100, Math.round(pct))));
    };
    update(clientY);
    draggingFocal.current = true;
    const moveMouse = ev => update(ev.clientY);
    const moveTouch = ev => { if(ev.touches[0]) update(ev.touches[0].clientY); };
    const stop = () => {
      draggingFocal.current = false;
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchmove', moveTouch);
      window.removeEventListener('touchend', stop);
    };
    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchmove', moveTouch);
    window.addEventListener('touchend', stop);
  };

  return (
    <div
      onDragOver={e=>{e.preventDefault();setDragOver(true);}}
      onDragLeave={()=>setDragOver(false)}
      onDrop={e=>{
        e.preventDefault();setDragOver(false);
        const payload = e.dataTransfer.getData('text/plain');
        if(!payload.startsWith('photo:')) return;
        onReorder(payload.slice(6), photo.id);
      }}
      style={{borderRadius:3,border:'1px solid '+(dragOver?'#B5895F':'#E5DDD0'),background:'#FFFEFA',transition:'border-color .15s'}}>
      {/* Drag handle */}
      <div
        draggable
        onDragStart={e=>{e.dataTransfer.setData('text/plain','photo:'+photo.id);e.dataTransfer.effectAllowed='move';}}
        title="拖拉以調整順序"
        style={{padding:'4px 8px',background:'#F9F5EF',borderBottom:'1px solid #E5DDD0',cursor:'grab',
          display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:11,color:'#9A8F82',
          borderRadius:'3px 3px 0 0',userSelect:'none'}}>
        <span style={{letterSpacing:2}}>⠿</span>
        <span>第 {index+1} 張</span>
      </div>
      {/* Photo with draggable focal line */}
      <div ref={imgWrapRef}
        onMouseDown={e=>{e.preventDefault();startFocalDrag(e.clientY);}}
        onTouchStart={e=>{if(e.touches[0])startFocalDrag(e.touches[0].clientY);}}
        style={{position:'relative',aspectRatio:'3/4',overflow:'hidden',cursor:'ns-resize',userSelect:'none'}}>
        <div style={{position:'absolute',inset:0,
          backgroundImage:`url(${photo.dataUrl||''})`,
          backgroundSize:'cover',
          backgroundPosition:`center ${photo.focalY||50}%`,
          pointerEvents:'none'}} />
        {!photo.dataUrl && <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',color:'#9A8F82',fontSize:11,background:'#F1EAE0'}}>讀取中...</div>}
        {/* Focal line indicator */}
        <div style={{position:'absolute',left:0,right:0,top:`${photo.focalY||50}%`,
          height:0,borderTop:'2px dashed #FFFEFA',boxShadow:'0 0 0 1px rgba(58,51,43,.4)',
          pointerEvents:'none',transform:'translateY(-1px)'}} />
        <div style={{position:'absolute',right:6,top:`${photo.focalY||50}%`,transform:'translateY(-50%)',
          padding:'1px 6px',background:'rgba(58,51,43,.85)',color:'#FFFEFA',fontSize:10,borderRadius:2,pointerEvents:'none'}}>
          聚焦 {photo.focalY||50}%
        </div>
      </div>
      {/* Delete */}
      <div style={{padding:'6px 8px'}}>
        <button onClick={onDelete}
          style={{width:'100%',padding:'5px 0',fontSize:11,color:'#FFFEFA',background:'#C04040',
            borderRadius:2,fontWeight:500,letterSpacing:.5}}>
          刪除照片
        </button>
      </div>
    </div>
  );
}

// ============================================================
// STORAGE METER — show usage so user can see they're under the 1MB limit
// ============================================================
function StorageMeter({data, photoMap}) {
  // 統一以主文件 photos 陣列為唯一真實來源（Task B）
  const photoCount = (data.photos||[]).length;
  const cloudSize = useMemo(()=>{
    try { return Object.values(photoMap||{}).reduce((s,p)=>s+(p.size||p.dataUrl?.length*0.75||0),0); } catch { return 0; }
  },[photoMap]);
  const sizeMB = (cloudSize/(1024*1024)).toFixed(2);
  const sizeKB = (cloudSize/1024).toFixed(0);
  const sizeStr = cloudSize > 1024*1024 ? `${sizeMB} MB` : `${sizeKB} KB`;
  return (
    <div style={{textAlign:'right',fontSize:11,color:'#9A8F82',minWidth:200}}>
      <div style={{marginBottom:3}}>
        <span style={{color:'#B5895F'}}>☁ Cloud Storage</span>
        <span style={{color:'#9A8F82',margin:'0 6px'}}>·</span>
        <span>{photoCount} 張</span>
        <span style={{color:'#9A8F82',margin:'0 6px'}}>·</span>
        <span style={{color:'#6B6259'}}>{sizeStr}</span>
      </div>
      <div style={{fontSize:10,marginTop:2}}>免費額度 5 GB</div>
    </div>
  );
}

// ============================================================
// GROUPS TAB — 關係分類管理
// ============================================================
const BASE_KEYS = ['groom','bride','shared'];
const PRESET_COLORS = [
  {color:"#3A60A8",soft:"#DCE4F2"},{color:"#BF7090",soft:"#F5DCE2"},{color:"#B5895F",soft:"#EFE3D0"},
  {color:"#7BA77B",soft:"#DCF0DC"},{color:"#A87B3A",soft:"#F0DFCA"},{color:"#6B86B3",soft:"#D8E2F2"},
  {color:"#A67BB0",soft:"#EBD8F2"},{color:"#B07B7B",soft:"#F2D8D8"},{color:"#7BA8A0",soft:"#D8EEE9"},
  {color:"#9EA87B",soft:"#EAF0D8"},{color:"#A89B7B",soft:"#F0EBD8"},{color:"#808080",soft:"#E8E8E8"},
];

function GroupsTab({data,onUpdate}) {
  const cfg = data.config;
  // Working draft: deep clone of effective group info
  const initDraft = () => {
    const gi = getGroupInfo(cfg);
    return JSON.parse(JSON.stringify(gi));
  };
  const [draft,setDraft] = useState(initDraft);
  const [newGroupLabel,setNewGroupLabel] = useState('');
  const [addingGroup,setAddingGroup] = useState(false);
  const [newSubInputs,setNewSubInputs] = useState({}); // key -> text
  const [editingLabel,setEditingLabel] = useState({}); // key -> bool
  const [saved,setSaved] = useState(false);

  useEffect(()=>{setDraft(initDraft());},[data.config.customGroups]);

  const saveGroups = () => {
    onUpdate({...data,config:{...cfg,customGroups:draft}});
    setSaved(true);
    setTimeout(()=>setSaved(false),2000);
  };

  const resetToDefault = async () => {
    if(!await uiConfirm('確定重設為預設分類？已自訂的分類將全部清除。')) return;
    onUpdate({...data,config:{...cfg,customGroups:null}});
    setDraft(JSON.parse(JSON.stringify(GROUP_INFO)));
  };

  const updateLabel = (key,val) => setDraft(d=>({...d,[key]:{...d[key],label:val}}));
  const updateColor = (key,color,soft) => setDraft(d=>({...d,[key]:{...d[key],color,soft}}));

  const addSub = (key) => {
    const txt = (newSubInputs[key]||'').trim();
    if(!txt) return;
    if(draft[key].subs.includes(txt)){uiAlert('此子分類已存在');return;}
    setDraft(d=>({...d,[key]:{...d[key],subs:[...d[key].subs,txt]}}));
    setNewSubInputs(p=>({...p,[key]:''}));
  };

  const removeSub = (key,idx) => {
    if(draft[key].subs.length<=1){uiAlert('至少保留一個子分類');return;}
    setDraft(d=>({...d,[key]:{...d[key],subs:d[key].subs.filter((_,i)=>i!==idx)}}));
  };

  const moveSub = (key,idx,dir) => {
    const subs=[...draft[key].subs];
    const ni=idx+dir;
    if(ni<0||ni>=subs.length) return;
    [subs[idx],subs[ni]]=[subs[ni],subs[idx]];
    setDraft(d=>({...d,[key]:{...d[key],subs}}));
  };

  const addGroup = () => {
    const lbl = newGroupLabel.trim();
    if(!lbl){uiAlert('請輸入分類名稱');return;}
    // Generate a unique key
    const key = 'custom_'+uid();
    // Pick a color not yet used
    const usedColors = Object.values(draft).map(g=>g.color);
    const col = PRESET_COLORS.find(c=>!usedColors.includes(c.color)) || PRESET_COLORS[3];
    setDraft(d=>({...d,[key]:{label:lbl,color:col.color,soft:col.soft,subs:[lbl+'親友']}}));
    setNewGroupLabel('');
    setAddingGroup(false);
  };

  const removeGroup = async (key) => {
    if(BASE_KEYS.includes(key)){uiAlert('預設分類（新郎方/新娘方/共同）無法刪除');return;}
    const affected = data.guests.filter(g=>g.side===key).length;
    const msg = affected>0
      ? `確定刪除「${draft[key].label}」？此分類有 ${affected} 位賓客，刪除後他們的分類將顯示為未知。`
      : `確定刪除「${draft[key].label}」？`;
    if(!await uiConfirm(msg)) return;
    setDraft(d=>{const nd={...d};delete nd[key];return nd;});
  };

  const keys = Object.keys(draft);
  const isBase = key => BASE_KEYS.includes(key);

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          <div style={{fontSize:16,fontFamily:FONT_STACK,letterSpacing:1}}>關係分類管理</div>
          <div style={{fontSize:12,color:'#9A8F82',marginTop:4}}>自訂 RSVP 邀請函中「與新人關係」的分類與細分類選項</div>
        </div>
        <div style={{display:'flex',gap:8,flexWrap:'wrap',justifyContent:'flex-end'}}>
          <Btn v="ghost" size="sm" onClick={resetToDefault}>重設預設</Btn>
          <Btn size="sm" onClick={saveGroups}>{saved?'✓ 已儲存':'✓ 儲存分類'}</Btn>
        </div>
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:16}}>
        {keys.map(key=>{
          const grp = draft[key];
          const base = isBase(key);
          return (
            <div key={key} style={{border:'1px solid #E5DDD0',borderRadius:4,overflow:'hidden'}}>
              {/* Header */}
              <div data-tp="1" style={{display:'flex',alignItems:'center',gap:10,padding:'12px 16px',background:grp.soft||'#F9F5EF',borderBottom:'1px solid #E5DDD0'}}>
                {/* Color picker */}
                <div data-tp="1" style={{position:'relative',flexShrink:0}}>
                  <div style={{width:22,height:22,borderRadius:11,background:grp.color,cursor:'pointer',border:'2px solid white',boxShadow:'0 0 0 1px #ccc'}}
                    onClick={e=>{e.currentTarget.nextSibling.style.display=e.currentTarget.nextSibling.style.display==='flex'?'none':'flex';}}
                  />
                  <div style={{display:'none',position:'absolute',top:28,left:0,zIndex:99,background:'white',border:'1px solid #E5DDD0',borderRadius:4,padding:8,flexWrap:'wrap',gap:5,width:164,boxShadow:'0 4px 12px rgba(0,0,0,.12)'}}>
                    {PRESET_COLORS.map((c,i)=>(
                      <div key={i} style={{width:22,height:22,borderRadius:11,background:c.color,cursor:'pointer',border:grp.color===c.color?'2px solid #3A332B':'2px solid white',boxShadow:'0 0 0 1px #ccc'}}
                        onClick={e=>{updateColor(key,c.color,c.soft);e.currentTarget.closest('[style]').style.display='none';}} />
                    ))}
                  </div>
                </div>
                {/* Label edit */}
                <div style={{flex:1,minWidth:0}}>
                  {editingLabel[key]
                    ? <input autoFocus autoComplete="nope" value={grp.label} onChange={e=>updateLabel(key,e.target.value)}
                        onBlur={()=>setEditingLabel(p=>({...p,[key]:false}))}
                        onKeyDown={e=>{if(e.key==='Enter'||e.key==='Escape')setEditingLabel(p=>({...p,[key]:false}));}}
                        style={{fontSize:14,fontWeight:600,color:'#3A332B',border:'none',borderBottom:'1px solid #B5895F',background:'transparent',outline:'none',width:'100%',padding:'2px 0'}} />
                    : <span data-tp="1" style={{fontSize:14,fontWeight:600,color:'#3A332B',cursor:'pointer'}} onClick={()=>setEditingLabel(p=>({...p,[key]:true}))} title="點擊編輯名稱">
                        {grp.label} <span data-tp="1" style={{fontSize:11,color:'#9A8F82',fontWeight:400}}>✎</span>
                      </span>
                  }
                  {base&&<span data-tp="1" style={{marginLeft:8,fontSize:10,color:'#B5895F',letterSpacing:.5}}>預設</span>}
                  {!base&&<span data-tp="1" style={{marginLeft:8,fontSize:10,color:'#9A8F82',letterSpacing:.5}}>自訂</span>}
                </div>
                {/* Delete */}
                {!base&&(
                  <button onClick={()=>removeGroup(key)} style={{flexShrink:0,padding:'3px 8px',fontSize:11,color:'#BF7090',border:'1px solid #BF709040',borderRadius:2,background:'transparent'}}>刪除</button>
                )}
              </div>
              {/* Sub-categories */}
              <div style={{padding:'12px 16px',background:'white'}}>
                <div style={{fontSize:11,color:'#9A8F82',marginBottom:8,letterSpacing:.5}}>細分類選項</div>
                <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:10}}>
                  {grp.subs.map((sub,idx)=>(
                    <div key={idx} style={{display:'inline-flex',alignItems:'center',gap:3,padding:'4px 8px',background:'#F9F5EF',border:'1px solid #E5DDD0',borderRadius:2,fontSize:12}}>
                      <button onClick={()=>moveSub(key,idx,-1)} disabled={idx===0} style={{fontSize:9,color:idx===0?'#ccc':'#9A8F82',padding:'0 2px',lineHeight:1}}>▲</button>
                      <button onClick={()=>moveSub(key,idx,1)} disabled={idx===grp.subs.length-1} style={{fontSize:9,color:idx===grp.subs.length-1?'#ccc':'#9A8F82',padding:'0 2px',lineHeight:1}}>▼</button>
                      <span style={{color:'#3A332B'}}>{sub}</span>
                      <button onClick={()=>removeSub(key,idx)} style={{fontSize:11,color:'#BF7090',padding:'0 2px',lineHeight:1}} title="刪除此子分類">✕</button>
                    </div>
                  ))}
                </div>
                {/* Add sub */}
                <div style={{display:'flex',gap:6}}>
                  <input autoComplete="nope" value={newSubInputs[key]||''} onChange={e=>setNewSubInputs(p=>({...p,[key]:e.target.value}))}
                    onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();addSub(key);}}}
                    placeholder="新增子分類名稱…"
                    style={{flex:1,padding:'6px 10px',fontSize:12,border:'1px solid #E5DDD0',borderRadius:2,outline:'none',fontFamily:'inherit'}} />
                  <button onClick={()=>addSub(key)} style={{padding:'6px 14px',fontSize:12,background:'#F9F5EF',border:'1px solid #E5DDD0',borderRadius:2,cursor:'pointer',color:'#6B6259'}}>＋ 新增</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add new group */}
      <div style={{marginTop:16,padding:'14px 16px',border:'1px dashed #E5DDD0',borderRadius:4}}>
        {addingGroup
          ? <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <input autoFocus autoComplete="nope" value={newGroupLabel} onChange={e=>setNewGroupLabel(e.target.value)}
                onKeyDown={e=>{if(e.key==='Enter')addGroup();if(e.key==='Escape'){setAddingGroup(false);setNewGroupLabel('');}}}
                placeholder="新分類名稱（例：老師、同學）"
                style={{flex:1,padding:'8px 12px',fontSize:13,border:'1px solid #B5895F',borderRadius:2,outline:'none',fontFamily:'inherit'}} />
              <Btn size="sm" onClick={addGroup}>確認新增</Btn>
              <Btn v="ghost" size="sm" onClick={()=>{setAddingGroup(false);setNewGroupLabel('');}}>取消</Btn>
            </div>
          : <button onClick={()=>setAddingGroup(true)} style={{width:'100%',padding:'10px',fontSize:13,color:'#B5895F',background:'transparent',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>
              <span style={{fontSize:18,lineHeight:1}}>＋</span> 新增關係分類
            </button>
        }
      </div>

      <div style={{marginTop:14,padding:'10px 14px',background:'#FFF8F0',border:'1px solid #F0DFC0',borderRadius:3,fontSize:12,color:'#9A8F82',lineHeight:1.7}}>
        💡 <strong>注意：</strong>修改後請點「儲存分類」。已填寫的賓客資料不會自動更新分類標籤，但名單中仍可正常顯示。預設分類（新郎方／新娘方／共同）的鍵值不變，標籤可自由修改。
      </div>
    </div>
  );
}

// ============================================================
// INFO MANAGEMENT PAGE
// ============================================================
// ============================================================
// BACKUP TAB — 資料備份與還原
// ============================================================
function BackupTab({data, onUpdate, fbRef, deletePhotoData, weddingId}) {
  const [backups, setBackups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);
  const [creating, setCreating] = useState(false);
  const [localMirrors, setLocalMirrors] = useState([]);
  const [cleaningOrphans, setCleaningOrphans] = useState(false);

  // 讀取本地鏡像
  const loadLocalMirrors = () => {
    try {
      const hist = JSON.parse(localStorage.getItem('wedding_mirror_hist') || '[]');
      setLocalMirrors(hist);
    } catch { setLocalMirrors([]); }
  };

  const loadBackups = useCallback(async () => {
    if (!fbRef?.current?.db) return;
    setLoading(true);
    try {
      const db = fbRef.current.db;
      const snap = await backupsColRef(db, weddingId).orderBy('createdAt','desc').get();
      const list = [];
      snap.forEach(d => list.push({id:d.id, ...d.data()}));
      setBackups(list);
    } catch(e) {
      console.error(e);
      uiAlert('讀取備份失敗：'+e.message);
    } finally {
      setLoading(false);
    }
  },[]);

  useEffect(()=>{ loadBackups(); loadLocalMirrors(); }, [loadBackups]);

  const createManualBackup = async () => {
    if (!fbRef?.current?.db) return;
    setCreating(true);
    try {
      const db = fbRef.current.db;
      const now = Date.now();
      const cleanPhotos = (data.photos||[]).map(p=>({
        id:p.id, enabled:p.enabled!==false, order:p.order||0, focalY:p.focalY||50
      }));
      const isB64 = s => typeof s === 'string' && s.startsWith('data:');
      const cfg = data.config || {};
      const cleanData = {
        ...data,
        photos: cleanPhotos,
        avoidPairs: packAvoid(data.avoidPairs),
        samePairs:  packSame(data.samePairs),
        config: {
          ...cfg,
          thankYouImgDataUrl:       isB64(cfg.thankYouImgDataUrl)       ? '__USE_PHOTO__' : (cfg.thankYouImgDataUrl ?? ''),
          thankYouImgBottomDataUrl: isB64(cfg.thankYouImgBottomDataUrl) ? '__USE_PHOTO__' : (cfg.thankYouImgBottomDataUrl ?? ''),
          logoDataUrl:              isB64(cfg.logoDataUrl)              ? '__USE_PHOTO__' : (cfg.logoDataUrl ?? ''),
        }
      };

      // A5：檢查是否為當天第一份備份，標記 daily:true
      const todayStart = new Date(); todayStart.setHours(0,0,0,0);
      const alreadyHasDaily = backups.some(b => b.daily && b.createdAt >= todayStart.getTime());
      const isDaily = !alreadyHasDaily;

      await backupsColRef(db, weddingId).doc(String(now)).set({
        data: cleanData,
        createdAt: now,
        manual: true,
        daily: isDaily,
        summary: {
          guestCount: (cleanData.guests||[]).length,
          tableCount: (cleanData.tables||[]).length,
          photoCount: cleanPhotos.length,
        }
      });
      uiAlert('✅ 手動備份完成！');
      loadBackups();
    } catch(e) {
      uiAlert('備份失敗：'+e.message);
    } finally {
      setCreating(false);
    }
  };

  const restoreBackup = async (b) => {
    if (!await uiConfirm(`⚠️ 確定要還原至此備份？\n\n時間：${new Date(b.createdAt).toLocaleString()}\n賓客：${b.summary?.guestCount||0} 人\n桌數：${b.summary?.tableCount||0} 桌\n照片：${b.summary?.photoCount||0} 張\n\n當前資料將被覆蓋（但會自動先做一次新備份）。`)) return;
    try {
      // 先備份當前狀態（A4）
      await createManualBackup();
      // 還原
      onUpdate(b.data, true);
      uiAlert('✅ 還原完成！頁面將自動重新整理');
      setTimeout(()=>window.location.reload(), 800);
    } catch(e) {
      uiAlert('還原失敗：'+e.message);
    }
  };

  const restoreLocalMirror = async (mirror) => {
    if (!await uiConfirm(`⚠️ 確定從本地鏡像還原？\n\n時間：${new Date(mirror.savedAt).toLocaleString()}\n賓客：${(mirror.data?.guests||[]).length} 人\n\n當前資料將被覆蓋。`)) return;
    try {
      onUpdate(mirror.data, true);
      uiAlert('✅ 從本地鏡像還原完成！頁面將自動重新整理');
      setTimeout(()=>window.location.reload(), 800);
    } catch(e) {
      uiAlert('還原失敗：'+e.message);
    }
  };

  const deleteBackup = async (b) => {
    if (!await uiConfirm('確定刪除此備份？此操作無法復原。')) return;
    try {
      const db = fbRef.current.db;
      await backupsColRef(db, weddingId).doc(b.id).delete();
      loadBackups();
    } catch(e) {
      uiAlert('刪除失敗：'+e.message);
    }
  };

  // B: 清理孤兒元資料（子集合有但主文件 photos 陣列沒有的）
  const cleanOrphanPhotos = async () => {
    if (!fbRef?.current?.db) return;
    setCleaningOrphans(true);
    try {
      const db = fbRef.current.db;
      const storage = fbRef.current.storage;
      const photosCol = photosColRef(db, weddingId);
      const snap = await photosCol.get();
      const mainPhotoIds = new Set((data.photos||[]).map(p=>p.id));
      const orphans = [];
      snap.forEach(d => {
        if (!mainPhotoIds.has(d.id)) orphans.push({id:d.id, ...d.data()});
      });
      if (orphans.length === 0) { uiAlert('✅ 無孤兒元資料，資料乾淨！'); return; }
      if (!await uiConfirm(`發現 ${orphans.length} 筆孤兒元資料（子集合有但主文件沒有）：\n${orphans.map(o=>o.id).join('\n')}\n\n確定刪除？`)) return;
      await Promise.all(orphans.map(async o => {
        if (o.storagePath) {
          try { await storage.ref(o.storagePath).delete(); } catch {}
        }
        await photosCol.doc(o.id).delete();
      }));
      uiAlert(`✅ 已清理 ${orphans.length} 筆孤兒元資料`);
    } catch(e) {
      uiAlert('清理失敗：'+e.message);
    } finally {
      setCleaningOrphans(false);
    }
  };

  return (
    <div style={{...S.card, padding:28}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:4}}>
        <div>
          <div style={{fontFamily:FONT_STACK,fontSize:16,letterSpacing:1,marginBottom:4}}>資料備份與還原</div>
          <div style={{color:'#9A8F82',fontSize:12}}>每 30 分鐘自動備份一次；每日第一份標記每日備份（保留 90 天）；一般備份保留最近 30 份</div>
        </div>
        <Btn size="sm" onClick={createManualBackup} disabled={creating}>
          {creating?'備份中...':'＋ 立即備份'}
        </Btn>
      </div>

      {/* A6: PITR 說明 */}
      <div style={{background:'#EFF8EF',border:'1px solid #B5D5B5',borderRadius:2,padding:'8px 14px',marginBottom:16,fontSize:11,color:'#2A6B2A',lineHeight:1.7}}>
        🛡 <b>多層資料保護已啟用：</b>Transaction 版本鎖 · 寫入前驟減偵測 · localStorage 本地鏡像 · 自動備份 · <b>PITR 時間點復原（已開啟，7 天內可聯繫 Firebase 還原）</b>
      </div>

      {/* 雲端備份列表 */}
      {loading ? (
        <div style={{padding:40,textAlign:'center',color:'#9A8F82'}}><Spinner/></div>
      ) : backups.length === 0 ? (
        <div style={{padding:32,textAlign:'center',color:'#9A8F82',background:'#F9F5EF',borderRadius:2}}>
          尚無備份。點擊「立即備份」建立第一份。
        </div>
      ) : (
        <div style={{maxHeight:400,overflowY:'auto',border:'1px solid #E5DDD0',borderRadius:2,marginBottom:16}}>
          {backups.map((b,i)=>(
            <div key={b.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',
              padding:'12px 14px',borderBottom:i<backups.length-1?'1px solid #E5DDD0':'none',
              background:i===0?'#FAFCF7':'#FFFEFA'}}>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:500,color:'#3A332B'}}>
                  {new Date(b.createdAt).toLocaleString('zh-TW')}
                  {b.manual && <span data-tp="1" style={{marginLeft:6,fontSize:10,padding:'1px 5px',background:'#EFE3D0',color:'#B5895F',borderRadius:2}}>手動</span>}
                  {b.daily && <span data-tp="1" style={{marginLeft:6,fontSize:10,padding:'1px 5px',background:'#E0F0E0',color:'#2A6B2A',borderRadius:2}}>每日</span>}
                  {i===0 && <span data-tp="1" style={{marginLeft:6,fontSize:10,padding:'1px 5px',background:'#DCE4F2',color:'#3A60A8',borderRadius:2}}>最新</span>}
                </div>
                <div style={{fontSize:11,color:'#9A8F82',marginTop:4}}>
                  👥 {b.summary?.guestCount||0} 賓客 · 🪑 {b.summary?.tableCount||0} 桌 · 🖼 {b.summary?.photoCount||0} 照片
                </div>
              </div>
              <div style={{display:'flex',gap:6}}>
                <Btn size="sm" v="ghost" onClick={()=>setPreview(b)}>預覽</Btn>
                <Btn size="sm" v="gold" onClick={()=>restoreBackup(b)}>還原</Btn>
                <Btn size="sm" v="red" onClick={()=>deleteBackup(b)}>刪除</Btn>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* A2: 本地鏡像還原 */}
      <div style={{marginBottom:16}}>
        <div style={{fontSize:13,fontWeight:500,color:'#3A332B',marginBottom:8,display:'flex',alignItems:'center',gap:8}}>
          💾 本地鏡像（最後防線）
          <Btn size="sm" v="ghost" onClick={loadLocalMirrors}>重新整理</Btn>
        </div>
        {localMirrors.length === 0 ? (
          <div style={{padding:'10px 14px',background:'#F9F5EF',borderRadius:2,fontSize:12,color:'#9A8F82'}}>尚無本地鏡像（資料同步後會自動建立）</div>
        ) : (
          <div style={{border:'1px solid #E5DDD0',borderRadius:2,maxHeight:200,overflowY:'auto'}}>
            {localMirrors.map((m,i)=>(
              <div key={m.savedAt} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'9px 12px',borderBottom:i<localMirrors.length-1?'1px solid #F0EBE0':'none',background:i===0?'#FAFCF7':'#FFFEFA'}}>
                <div>
                  <div style={{fontSize:12,color:'#3A332B'}}>{new Date(m.savedAt).toLocaleString('zh-TW')}</div>
                  <div style={{fontSize:11,color:'#9A8F82'}}>👥 {(m.data?.guests||[]).length} 賓客 · 🪑 {(m.data?.tables||[]).length} 桌</div>
                </div>
                <Btn size="sm" v="ghost" onClick={()=>restoreLocalMirror(m)}>從本地鏡像還原</Btn>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* B: 清理孤兒元資料 */}
      <div style={{paddingTop:12,borderTop:'1px solid #E5DDD0',display:'flex',alignItems:'center',gap:10}}>
        <Btn size="sm" v="ghost" onClick={cleanOrphanPhotos} disabled={cleaningOrphans}>
          {cleaningOrphans?'清理中...':'🧹 清理孤兒元資料'}
        </Btn>
        <span style={{fontSize:11,color:'#9A8F82'}}>掃描並刪除子集合中不在主文件 photos 陣列的殘留元資料</span>
      </div>

      {preview && (
        <Modal open={!!preview} onClose={()=>setPreview(null)} title={`備份預覽 - ${new Date(preview.createdAt).toLocaleString('zh-TW')}`} width={680}>
          <div style={{marginBottom:12,padding:'10px 14px',background:'#F9F5EF',borderRadius:2,fontSize:12,color:'#6B6259'}}>
            👥 {preview.summary?.guestCount||0} 賓客 · 🪑 {preview.summary?.tableCount||0} 桌 · 🖼 {preview.summary?.photoCount||0} 照片
          </div>
          <div style={{maxHeight:360,overflowY:'auto'}}>
            <div style={{fontFamily:FONT_STACK,fontSize:13,fontWeight:500,marginBottom:8}}>賓客名單（前 20 筆）</div>
            <div style={{fontSize:12,color:'#6B6259',marginBottom:12}}>
              {(preview.data?.guests||[]).slice(0,20).map((g,i)=>(
                <div key={i} style={{padding:'4px 0',borderBottom:'1px dotted #E5DDD0'}}>
                  {g.name||'(無名)'} {g.nickname?`(${g.nickname})`:''} · {g.side||'-'} · {g.attending==='yes'?'出席':g.attending==='no'?'婉拒':'未回'}
                </div>
              ))}
              {(preview.data?.guests||[]).length > 20 && <div style={{padding:'8px 0',color:'#9A8F82'}}>...還有 {preview.data.guests.length - 20} 筆</div>}
            </div>
          </div>
          <div style={{marginTop:12,display:'flex',gap:8,justifyContent:'flex-end'}}>
            <Btn v="ghost" onClick={()=>setPreview(null)}>關閉</Btn>
            <Btn v="gold" onClick={()=>{setPreview(null); restoreBackup(preview);}}>還原此備份</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}


// ============================================================
// COLLAB TAB — 協作管理（邀請 / 協作者列表 / 操作日誌）
// ============================================================
function CollabTab({ weddingId, fbRef, currentRole, currentWedding, user, onReloadWeddings }) {
  const [sub, setSub] = useState('members'); // members | log
  const [inviteRole, setInviteRole] = useState('editor');
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteLink, setInviteLink] = useState('');
  const [creating, setCreating] = useState(false);
  const [logs, setLogs] = useState([]);
  const [loadingLog, setLoadingLog] = useState(false);

  const canManage = hasPerm(currentRole, 'manageCollab');
  const isProWedding = currentWedding?.plan === 'pro';   // v6.14.0：多人協作為 Pro 專屬
  const collaborators = currentWedding?.collaborators || {};
  const collabList = Object.entries(collaborators).map(([uid,c])=>({uid, ...c}));

  // 產生邀請連結
  const createInvite = async () => {
    if (!isProWedding) { uiProUpgrade('多人協作是 Pro 方案功能，升級後即可邀請親友一起編輯名單與排位。'); return; }
    if (!fbRef.current) return;
    setCreating(true); setInviteLink('');
    try {
      const token = uid() + uid();
      await inviteDocRef(fbRef.current.db, token).set({
        weddingId, inviterUid: user.uid, inviterEmail: user.email||'',
        role: inviteRole, email: inviteEmail.trim()||'',
        createdAt: Date.now(),
        expiresAt: Date.now() + 7*24*60*60*1000, // 7 天有效
        used: false,
      });
      const link = `${window.location.origin}${window.location.pathname}#/join/${token}`;
      setInviteLink(link);
    } catch(e) { uiAlert('產生邀請失敗：'+e.message); }
    finally { setCreating(false); }
  };

  const copyLink = () => {
    try { navigator.clipboard.writeText(inviteLink); uiAlert('已複製邀請連結'); }
    catch { uiAlert('請手動複製連結'); }
  };

  // 移除協作者
  const removeCollab = async (cuid) => {
    const ok = await uiConfirm({ title:'移除協作者？', message:'此協作者將失去存取權限。', confirmText:'移除', cancelText:'取消', danger:true });
    if (!ok || !fbRef.current) return;
    try {
      const FieldValue = window.firebase.firestore.FieldValue;
      await weddingDoc(fbRef.current.db, weddingId).update({
        [`collaborators.${cuid}`]: FieldValue.delete()
      });
      // 從該用戶的 weddingIds 移除
      const uRef = fbRef.current.db.collection('users').doc(cuid);
      const uSnap = await uRef.get();
      if (uSnap.exists) {
        const ids = (uSnap.data().weddingIds||[]).filter(id=>id!==weddingId);
        await uRef.update({ weddingIds: ids });
      }
      if (onReloadWeddings) onReloadWeddings();
      uiAlert('已移除協作者');
    } catch(e) { uiAlert('移除失敗：'+e.message); }
  };

  // 載入操作日誌
  const loadLogs = async () => {
    if (!fbRef.current) return;
    setLoadingLog(true);
    try {
      const snap = await activityColRef(fbRef.current.db, weddingId)
        .orderBy('timestamp','desc').limit(50).get();
      const list = []; snap.forEach(d=>list.push(d.data()));
      setLogs(list);
    } catch(e) { console.error(e); }
    finally { setLoadingLog(false); }
  };
  useEffect(()=>{ if(sub==='log') loadLogs(); },[sub]);

  if (!canManage) {
    return (
      <div style={{...S.card,padding:32,textAlign:'center',maxWidth:420}}>
        <div style={{fontSize:28,marginBottom:10}}>🔒</div>
        <div style={{fontSize:15,marginBottom:6}}>協作管理僅限管理員</div>
        <div style={{fontSize:12,color:'#9A8F82'}}>您的角色為「{ROLE_LABEL[currentRole]||'—'}」</div>
      </div>
    );
  }

  const fmtTime = (ts)=>{ const d=new Date(ts); return `${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; };

  return (
    <div>
      {/* 子 Tab */}
      <div style={{display:'flex',gap:4,marginBottom:20}}>
        <button onClick={()=>setSub('members')} style={{padding:'6px 14px',fontSize:13,cursor:'pointer',borderRadius:3,
          background:sub==='members'?'#B5895F':'#F1EAE0',color:sub==='members'?'#FFFEFA':'#6B6259'}}>協作成員</button>
        <button onClick={()=>setSub('log')} style={{padding:'6px 14px',fontSize:13,cursor:'pointer',borderRadius:3,
          background:sub==='log'?'#B5895F':'#F1EAE0',color:sub==='log'?'#FFFEFA':'#6B6259'}}>操作日誌</button>
      </div>

      {sub==='members' && (
        <div>
          {/* 邀請區（Pro 專屬；非 Pro 顯示升級卡）*/}
          {isProWedding ? (
          <div style={{...S.card,padding:'20px 22px',marginBottom:16}}>
            <div style={{fontFamily:FONT_STACK,fontSize:15,marginBottom:14}}>邀請協作者</div>
            <Field label="權限角色">
              <div style={{display:'flex',gap:8}}>
                {['editor','viewer'].map(r=>(
                  <button key={r} onClick={()=>setInviteRole(r)}
                    style={{flex:1,padding:'10px',borderRadius:3,fontSize:13,cursor:'pointer',
                      background:inviteRole===r?'#B5895F':'#F1EAE0',color:inviteRole===r?'#FFFEFA':'#6B6259',
                      border:`1px solid ${inviteRole===r?'#B5895F':'#E5DDD0'}`}}>
                    <div style={{fontWeight:600}}>{ROLE_LABEL[r]}</div>
                    <div style={{fontSize:10,marginTop:2,opacity:.85}}>{ROLE_DESC[r]}</div>
                  </button>
                ))}
              </div>
            </Field>
            <Field label="受邀者 Email（選填，僅作備註）">
              <TInput value={inviteEmail} onChange={setInviteEmail} placeholder="mother@email.com" />
            </Field>
            <Btn onClick={createInvite} disabled={creating}>
              {creating ? '產生中...' : '產生邀請連結'}
            </Btn>

            {inviteLink && (
              <div style={{marginTop:14,padding:'12px 14px',background:'#F9F5EF',borderRadius:3,border:'1px solid #E5DDD0'}}>
                <div style={{fontSize:11,color:'#9A8F82',marginBottom:6}}>複製以下連結傳給受邀者（7 天內有效）：</div>
                <div style={{fontSize:11,wordBreak:'break-all',color:'#6B6259',marginBottom:8,fontFamily:'monospace'}}>{inviteLink}</div>
                <Btn size="sm" onClick={copyLink}>📋 複製連結</Btn>
              </div>
            )}
          </div>
          ) : (
          <div style={{...S.card,padding:'24px 22px',marginBottom:16,textAlign:'center'}}>
            <div style={{fontSize:26,marginBottom:8}}>🔒</div>
            <div style={{fontFamily:FONT_STACK,fontSize:15,marginBottom:6}}>多人協作為 Pro 方案功能</div>
            <div style={{fontSize:12.5,color:'#9A8F82',lineHeight:1.7,marginBottom:16}}>升級 Pro 後，即可邀請伴侶或親友一起編輯名單與排位，並即時看到誰正在調整。</div>
            <Btn onClick={()=>uiProUpgrade('多人協作是 Pro 方案功能，升級後即可邀請親友一起協作。')}>升級 Pro 解鎖協作</Btn>
          </div>
          )}

          {/* 協作者列表 */}
          <div style={{...S.card,padding:'20px 22px'}}>
            <div style={{fontFamily:FONT_STACK,fontSize:15,marginBottom:14}}>目前成員</div>
            {/* Owner */}
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid #F0EBE3'}}>
              <div>
                <div style={{fontSize:13}}>{user.email}（您）</div>
                <div style={{fontSize:11,color:'#9A8F82'}}>擁有者</div>
              </div>
              <Tag small color="#B5895F" soft="#EFE3D0">管理員</Tag>
            </div>
            {collabList.length===0 ? (
              <div style={{padding:'16px 0',textAlign:'center',color:'#9A8F82',fontSize:12}}>尚無其他協作者</div>
            ) : collabList.map(c=>(
              <div key={c.uid} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid #F0EBE3'}}>
                <div>
                  <div style={{fontSize:13}}>{c.name||c.email||'協作者'}</div>
                  <div style={{fontSize:11,color:'#9A8F82'}}>{c.email}</div>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <Tag small color="#7A8FB5" soft="#E3E8EF">{ROLE_LABEL[c.role]}</Tag>
                  <button onClick={()=>removeCollab(c.uid)}
                    style={{padding:'3px 8px',borderRadius:2,border:'1px solid #EECDD6',background:'#FDF5F7',color:'#C04060',fontSize:11,cursor:'pointer'}}>移除</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {sub==='log' && (
        <div style={{...S.card,padding:'20px 22px'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
            <div style={{fontFamily:FONT_STACK,fontSize:15}}>操作日誌</div>
            <Btn size="sm" v="ghost" onClick={loadLogs}>重新整理</Btn>
          </div>
          {loadingLog ? (
            <div style={{textAlign:'center',padding:'20px 0'}}><Spinner size={20}/></div>
          ) : logs.length===0 ? (
            <div style={{padding:'20px 0',textAlign:'center',color:'#9A8F82',fontSize:12}}>尚無操作記錄</div>
          ) : (
            <div style={{display:'flex',flexDirection:'column'}}>
              {logs.map((l,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 0',borderBottom:'1px solid #F5F0E8',fontSize:12}}>
                  <span style={{color:'#9A8F82',minWidth:72}}>{fmtTime(l.timestamp)}</span>
                  <span style={{flex:1,color:'#6B6259'}}>
                    <strong>{l.name||l.email}</strong> {l.action} {l.detail && <span style={{color:'#9A8F82'}}>（{l.detail}）</span>}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}


function InfoPage({data,onUpdate,savePhotoData,deletePhotoData,photoMap,onPreview,weddingId,fbRef,currentRole,currentWedding,user,onReloadWeddings,boThemeKey}) {
  const infoTheme = boThemeKey || data.config?.theme;  // 預覽時跟著預覽主題
  const [tab,setTab] = useState('basic');
  // 外觀頁籤開啟時預載所有字體，讓字體預覽卡片能即時顯示
  useEffect(()=>{ if(tab==='theme') preloadAllFonts(); },[tab]);
  const cfg = data.config;
  const update = (k,v) => onUpdate({...data,config:{...cfg,[k]:v}});
  const [draft,setDraft] = useState({...cfg});
  // 每次切換到 theme tab 時重新從最新 cfg 同步（確保顯示用戶填入的名字）
  useEffect(()=>{ if(tab==='theme'||tab==='basic') setDraft({...cfg}); },[tab]);
  const [previewing,setPreviewing] = useState(false);
  const [pw1,setPw1] = useState('');
  const [pw2,setPw2] = useState('');
  const [pwMsg,setPwMsg] = useState('');
  const fileInput = useRef(null);
  const logoInput = useRef(null);
  const [uploadingThankTop, setUploadingThankTop] = useState(false);
  const [uploadingThankBottom, setUploadingThankBottom] = useState(false);
  const [enlargedImg, setEnlargedImg] = useState(null);  // #6e：小圖點擊放大

  useEffect(()=>{
    // 保留上傳中/待刪除的圖片標記，避免 data.config 更新時的 race 把標記洗掉（#6c）
    setDraft(prev=>{
      const next={...data.config};
      ['thankYouImgDataUrl','thankYouImgBottomDataUrl','logoDataUrl'].forEach(k=>{
        if(prev && (prev[k]==='__USE_PHOTO__'||prev[k]==='__REMOVED__')) next[k]=prev[k];
      });
      return next;
    });
  },[data.config]);
  const setD=(k,v)=>setDraft(p=>({...p,[k]:v}));
  // 解析草稿中的圖片值 → 實際可顯示 URL（標記從 photoMap 即時解析，待刪除回空）
  const resolveDraftImg=(val,photoKey)=>{
    if(val==='__REMOVED__') return '';
    if(val==='__USE_PHOTO__') return photoMap[photoKey]?.url||photoMap[photoKey]?.dataUrl||'';
    return val||'';
  };

  const publish=()=>{
    const finalCfg={...draft};
    // #6b：圖片移除延遲到發佈才真正刪除
    [['thankYouImgDataUrl','__thankTop'],['thankYouImgBottomDataUrl','__thankBottom'],['logoDataUrl','__logo']].forEach(([k,pk])=>{
      if(finalCfg[k]==='__REMOVED__'){ deletePhotoData(pk).catch(()=>{}); finalCfg[k]=''; }
      else if(photoMap[pk]){ finalCfg[k]='__USE_PHOTO__'; }      // 有照片 → 存標記
      else if(finalCfg[k]==='__USE_PHOTO__'){ finalCfg[k]=''; }  // 標記但無照片 → 清空
    });
    onUpdate({...data,config:finalCfg});
    uiAlert('已發佈！');
    setPreviewing(false);
  };
  const changePw=()=>{
    if(!pw1){setPwMsg('請輸入新密碼');return;}
    if(pw1!==pw2){setPwMsg('兩次密碼不一致');return;}
    if(pw1.length<4){setPwMsg('密碼至少 4 碼');return;}
    onUpdate({...data,config:{...cfg,adminPw:pw1}});
    setPw1(''); setPw2(''); setPwMsg('密碼已更新 ✓');
    setTimeout(()=>setPwMsg(''),2500);
  };

  // Photo upload — no compression, just enforce file size
  const PHOTO_LIMIT_KB = 800; // ~800KB raw → ~1067KB base64 — 接近 Firestore 1MB 上限，請留意
  const [uploadingCount, setUploadingCount] = useState(0);
  const readAsDataURL = (file) => new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = () => reject(new Error('讀取失敗'));
    r.readAsDataURL(file);
  });
  const handlePhotoUpload=async e=>{
    const files=Array.from(e.target.files||[]);
    if(!files.length) return;
    setUploadingCount(files.length);
    let nextOrder = (data.photos.length ? Math.max(...data.photos.map(p=>p.order||0)) : 0) + 1;
    const newMeta = [];
    for (const f of files) {
      try {
        if(!f.type.startsWith('image/')) { setUploadingCount(c=>c-1); continue; }
        // Cloud Storage limit: 20MB per file (generous)
        if(f.size > 20 * 1024 * 1024) {
          uiAlert(f.name + ' 超過 20MB（實際 ' + Math.round(f.size/1024/1024) + 'MB），請自行壓縮後上傳');
          setUploadingCount(c=>c-1);
          continue;
        }
        const id = uid();
        await savePhotoData(id, f);  // Pass File directly → uploads to Cloud Storage
        newMeta.push({id, enabled:true, order:nextOrder++, focalY:50});
      } catch(err) {
        console.error('Upload failed:', err);
        uiAlert(f.name + ' 上傳失敗：'+err.message);
      } finally {
        setUploadingCount(c=>c-1);
      }
    }
    if(newMeta.length) onUpdate({...data, photos:[...data.photos, ...newMeta]});
    if(fileInput.current) fileInput.current.value='';
  };

  const removePhoto=async id=>{
    if(!await uiConfirm('確定刪除這張照片？')) return;
    try { await deletePhotoData(id); } catch(e){console.error(e);}
    onUpdate({...data,photos:data.photos.filter(p=>p.id!==id)});
  };

  const updatePhotoFocalY = (id, focalY) => {
    onUpdate({...data, photos: data.photos.map(p=>p.id===id?{...p,focalY}:p)});
  };
  const movePhoto=(id,dir)=>{
    const list=[...data.photos].sort((a,b)=>(a.order||0)-(b.order||0));
    const idx=list.findIndex(p=>p.id===id);
    if(idx<0) return;
    const ni=idx+dir;
    if(ni<0||ni>=list.length) return;
    [list[idx],list[ni]]=[list[ni],list[idx]];
    onUpdate({...data,photos:list.map((p,i)=>({...p,order:i}))});
  };

  const sortedPhotos=[...data.photos].sort((a,b)=>(a.order||0)-(b.order||0));

  // v6.17.2：極簡風主題(現代簡約/極簡黑)不顯示 tab emoji，維持簡約一致
  const infoMinimal = (infoTheme==='modern' || infoTheme==='dark');
  const tabs=[
    {id:'basic',ic:'📋',tx:'基本資訊'},
    {id:'photos',ic:'🎠',tx:'輪播圖'},
    {id:'thanks',ic:'💌',tx:'謝謝頁面'},
    {id:'groups',ic:'👥',tx:'關係分類'},
    {id:'theme',ic:'🎨',tx:'外觀'},
    {id:'collab',ic:'🤝',tx:'協作管理'},
    {id:'backup',ic:'📦',tx:'備份'},
  ];

  return (
    <div style={{maxWidth:900,margin:'0 auto',padding:'20px 16px'}}>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,letterSpacing:6,color:'#B5895F'}}>SETTINGS</div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginTop:2,marginBottom:20,flexWrap:'wrap',gap:10}}>
        <div style={{fontFamily:FONT_STACK,fontSize:26,letterSpacing:1}}>資訊管理</div>
        <StorageMeter data={data} photoMap={photoMap} />
      </div>

      {/* 賓客邀請連結 — 用 #EFE3D0 (soft) 與 #6B6259 (subText)，兩者都在主題替換清單內，任何主題下成對轉換、對比正常 */}
      {weddingId && (
        <div data-bo-stagger="1" style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:8,
          padding:'10px 16px',marginBottom:16,
          background:'#EFE3D0',borderRadius:3,border:'1px solid #E5DDD0'}}>
          <div style={{fontSize:12,color:'#6B6259',display:'flex',alignItems:'center',gap:6}}>
            <span style={{color:'#B5895F'}}>🔗</span>
            <span>賓客邀請連結 — 分享給賓客填寫出席回覆 · 觀看祝福牆</span>
          </div>
          <Btn v="ghost" size="sm" onClick={()=>{
            const link=`${window.location.origin}${window.location.pathname}#/w/${weddingId}`;
            try{ navigator.clipboard.writeText(link); uiAlert('✓ 邀請函連結已複製！\n\n' + link); }
            catch{ uiAlert('邀請函連結：\n' + link); }
          }}>複製連結</Btn>
        </div>
      )}

      <ThemeDivider themeKey={infoTheme} mw={860} my={16} />

      {/* Tabs */}
      <div className="wed-nav-menu" style={{display:'flex',gap:4,marginBottom:24,borderBottom:'1px solid #E5DDD0',overflowX:'auto'}}>
        {tabs.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{padding:'8px 16px',fontSize:13,letterSpacing:.5,whiteSpace:'nowrap',flexShrink:0,
            color:tab===t.id?'#3A332B':'#9A8F82',fontWeight:tab===t.id?600:400,
            borderBottom:tab===t.id?'2px solid #B5895F':'2px solid transparent',
            marginBottom:-1,transition:'all .15s'}}>
            {infoMinimal ? t.tx : `${t.ic} ${t.tx}`}
          </button>
        ))}
      </div>

      {/* BASIC INFO */}
      {tab==='basic' && (
        <div data-bo-stagger="1" style={{...S.card,padding:28}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
            <div style={{fontSize:16,fontFamily:FONT_STACK,letterSpacing:1}}>婚禮基本資訊</div>
            <div style={{display:'flex',gap:8}}>
              <Btn v="ghost" size="sm" onClick={()=>setPreviewing(p=>!p)}>{previewing?'隱藏預覽':'預覽效果'}</Btn>
              <Btn size="sm" onClick={publish}>✓ 發佈</Btn>
            </div>
          </div>

          <div style={{display:'grid',gridTemplateColumns:previewing?'1fr 1fr':'1fr',gap:20}}>
            <div>
              {/* Logo section */}
              <Field label="顯示 LOGO / 識別文字">
                <div style={{display:'flex',gap:8,marginBottom:6}}>
                  {['text','image'].map(t=>(
                    <button key={t} data-tp="1" type="button" onClick={()=>setD('logoType',t)} style={{
                      padding:'5px 12px',fontSize:12,borderRadius:2,
                      background:draft.logoType===t?'#B5895F':'#F9F5EF',
                      color:draft.logoType===t?'#FFFEFA':'#6B6259',
                      border:`1px solid ${draft.logoType===t?'#B5895F':'#E5DDD0'}`}}>
                      {t==='text'?'文字':'上傳圖片'}
                    </button>
                  ))}
                </div>
                {draft.logoType==='text'
                  ? <TInput value={draft.logoText||''} onChange={v=>setD('logoText',v)} placeholder="例：馨&語" />
                  : <div>
                    {draft.logoDataUrl&&<div style={{marginBottom:6}}><img src={draft.logoDataUrl} alt="logo" style={{maxHeight:48,maxWidth:160,objectFit:'contain'}} /></div>}
                    <Btn v="ghost" size="sm" onClick={()=>logoInput.current?.click()}>上傳圖片</Btn>
                    {draft.logoDataUrl&&<Btn v="red" size="sm" onClick={async()=>{await deletePhotoData('__logo').catch(()=>{}); setD('logoDataUrl','');}} style={{marginLeft:6}}>移除</Btn>}
                    <input ref={logoInput} type="file" accept="image/*" onChange={async e=>{
                      const f=e.target.files?.[0];if(!f)return;
                      if(f.size > 20*1024*1024){ uiAlert('Logo 檔案 '+Math.round(f.size/1024/1024)+'MB 超過 20MB'); e.target.value=''; return; }
                      try {
                        await savePhotoData('__logo', f);
                        setD('logoDataUrl', '__USE_PHOTO__');
                      } catch(err){ uiAlert('上傳失敗：'+err.message); }
                      e.target.value='';
                    }} style={{display:'none'}} />
                  </div>}
              </Field>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                <Field label="新郎姓名"><TInput value={draft.groomName||''} onChange={v=>setD('groomName',v)} /></Field>
                <Field label="新娘姓名"><TInput value={draft.brideName||''} onChange={v=>setD('brideName',v)} /></Field>
              </div>
              <Field label="婚禮日期"><TInput value={draft.weddingDate||''} onChange={v=>setD('weddingDate',v)} /></Field>
              <Field label="時間（入席/開席）"><TInput value={draft.weddingTime||''} onChange={v=>setD('weddingTime',v)} /></Field>
              <Field label="宴客地點名稱"><TInput value={draft.venue||''} onChange={v=>setD('venue',v)} /></Field>
              <Field label="地址"><TInput value={draft.address||''} onChange={v=>setD('address',v)} /></Field>
              <Field label="電話"><TInput value={draft.phone||''} onChange={v=>setD('phone',v)} /></Field>
              <Field label="交通資訊" hint="顯示在邀請函下方及謝謝頁面">
                <TTextarea value={draft.transportInfo||''} onChange={v=>setD('transportInfo',v)} rows={2} />
              </Field>
              <Field label="邀請函頁尾文字" hint="顯示在邀請函最底部（可換行）">
                <TTextarea value={draft.footerText||''} onChange={v=>setD('footerText',v)} rows={3} placeholder={"例：© 2025 王小明 & 陳美玲 婚禮邀請\n聯絡：02-xxxx-xxxx"} />
              </Field>
            </div>

            {/* Preview */}
            {previewing && (
              <div style={{border:'1px solid #E5DDD0',borderRadius:3,padding:16,background:'#F9F5EF',maxHeight:500,overflowY:'auto'}} className="wed-scroll">
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:9,letterSpacing:5,color:'#B5895F',textAlign:'center',marginBottom:8}}>WE INVITE YOU TO</div>
                <div style={{textAlign:'center',fontFamily:FONT_STACK,fontSize:22,fontWeight:500,letterSpacing:4,marginBottom:4}}>
                  {draft.groomName} <span style={{color:'#B5895F',fontFamily:"'Cormorant Garamond',serif"}}>&amp;</span> {draft.brideName}
                </div>
                <div style={{textAlign:'center',fontSize:10,color:'#9A8F82',letterSpacing:2,marginBottom:12}}>{draft.weddingDate}</div>
                <div style={{height:1,background:'#E5DDD0',marginBottom:12}} />
                <div style={{textAlign:'center'}}>
                  <div style={{fontSize:13,fontWeight:500,color:'#3A332B',marginBottom:3}}>{draft.venue}</div>
                  <div style={{fontSize:11,color:'#6B6259',marginBottom:2}}>{draft.address}</div>
                  <div style={{fontSize:10,color:'#9A8F82',marginBottom:8}}>{draft.phone}</div>
                  <div style={{display:'inline-block',padding:'4px 10px',border:'1px solid #E5D5BD',fontSize:10,color:'#B5895F',letterSpacing:1}}>{draft.weddingTime}</div>
                  {draft.transportInfo&&<div style={{fontSize:10,color:'#9A8F82',marginTop:8}}>{draft.transportInfo}</div>}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PHOTOS */}
      {tab==='photos' && (
        <div style={{...S.card,padding:28}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
            <div style={{fontFamily:FONT_STACK,fontSize:16,letterSpacing:1}}>婚紗照輪播管理</div>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <span style={{fontSize:11,color:'#9A8F82'}}>單張圖片檔案上限 800KB</span>
              <Btn size="sm" onClick={()=>fileInput.current?.click()}>＋ 上傳照片</Btn>
              <input ref={fileInput} type="file" accept="image/*" multiple onChange={handlePhotoUpload} style={{display:'none'}} />
            </div>
          </div>
          {uploadingCount > 0 && (
            <div style={{padding:'10px 14px',background:'#FFF8E8',border:'1px solid #E5D5BD',borderRadius:2,marginBottom:12,fontSize:12,color:'#B5895F',display:'flex',alignItems:'center',gap:8}}>
              <Spinner size={14} /> 正在上傳 {uploadingCount} 張圖片...
            </div>
          )}
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(170px,1fr))',gap:12,marginTop:16}}>
            {sortedPhotos.map((p,i)=>(
              <PhotoCard key={p.id} photo={p} index={i} totalCount={sortedPhotos.length}
                onReorder={(fromId,toId)=>{
                  if(fromId===toId) return;
                  const list = [...sortedPhotos];
                  const from = list.findIndex(x=>x.id===fromId);
                  const to   = list.findIndex(x=>x.id===toId);
                  if(from<0||to<0) return;
                  const [moved] = list.splice(from,1);
                  list.splice(to,0,moved);
                  onUpdate({...data, photos: list.map((x,idx)=>({...x,order:idx}))});
                }}
                onFocalChange={(focalY)=>updatePhotoFocalY(p.id,focalY)}
                onDelete={()=>removePhoto(p.id)} />
            ))}
            {!sortedPhotos.length&&<div style={{gridColumn:'1/-1',padding:40,textAlign:'center',color:'#9A8F82',border:'1px dashed #E5DDD0',borderRadius:2,fontSize:13}}>尚未上傳照片</div>}
          </div>
          {sortedPhotos.length > 0 && (
            <Btn v="red" size="sm" style={{marginTop:12}}
              onClick={async ()=>{
                if(!await uiConfirm(`確定刪除全部 ${sortedPhotos.length} 張輪播照片？此動作無法復原`)) return;
                // A4: 破壞性操作前先備份
                try {
                  const _fb = window.__wedFB ? await window.__wedFB : null;
                  if(_fb){
                    const now=Date.now(), cleanPhotos=(data.photos||[]).map(p=>({id:p.id,enabled:p.enabled!==false,order:p.order||0,focalY:p.focalY||50}));
                    const isB64=s=>typeof s==='string'&&s.startsWith('data:'); const cfg=data.config||{};
                    await backupsColRef(_fb.db, weddingId).doc(String(now)).set({
                      data:{...data,photos:cleanPhotos,config:{...cfg,thankYouImgDataUrl:isB64(cfg.thankYouImgDataUrl)?'__USE_PHOTO__':cfg.thankYouImgDataUrl||'',thankYouImgBottomDataUrl:isB64(cfg.thankYouImgBottomDataUrl)?'__USE_PHOTO__':cfg.thankYouImgBottomDataUrl||'',logoDataUrl:isB64(cfg.logoDataUrl)?'__USE_PHOTO__':cfg.logoDataUrl||''}},
                      createdAt:now, preDestruct:true, summary:{guestCount:(data.guests||[]).length,tableCount:(data.tables||[]).length,photoCount:cleanPhotos.length}
                    });
                  }
                } catch(backupErr){ console.warn('Pre-destruct backup failed:', backupErr); }
                try {
                  await Promise.all(sortedPhotos.map(p=>deletePhotoData(p.id).catch(()=>{})));
                  onUpdate({...data, photos:[]});
                } catch(e) { uiAlert('刪除失敗：'+e.message); }
              }}>
              刪除全部 {sortedPhotos.length} 張照片
            </Btn>
          )}
          <div style={{marginTop:10,fontSize:11,color:'#9A8F82',lineHeight:1.7}}>
            💡 提示：點⠿ 拖拉可調整順序 ・ 直接拖動照片上的虛線可調整聚焦線位置 ・ 圖片儲存於 Cloud Storage，單張上限 20MB（免費額度共 5GB）
          </div>
        </div>
      )}

      {/* THANKS PAGE */}
      {tab==='thanks' && (
        <div style={{...S.card,padding:28}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
            <div style={{fontFamily:FONT_STACK,fontSize:16,letterSpacing:1}}>RSVP 謝謝頁面設定</div>
            <div style={{display:'flex',gap:8}}>
              <Btn v="ghost" size="sm" onClick={()=>setPreviewing(p=>!p)}>{previewing?'隱藏預覽':'預覽效果'}</Btn>
              <Btn size="sm" onClick={publish}>✓ 發佈</Btn>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:previewing?'1fr 1fr':'1fr',gap:20}}>
            <div>
              <Field label="頁面置頂圖片（自行選擇是否要放）">
              <div style={{display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
                {resolveDraftImg(draft.thankYouImgDataUrl,'__thankTop')
                  ? <div style={{display:'flex',alignItems:'center',gap:8}}>
                      <img src={resolveDraftImg(draft.thankYouImgDataUrl,'__thankTop')} alt="" onClick={()=>setEnlargedImg(resolveDraftImg(draft.thankYouImgDataUrl,'__thankTop'))}
                        style={{maxHeight:64,maxWidth:120,objectFit:'cover',borderRadius:3,border:'1px solid #E5DDD0',cursor:'zoom-in'}} />
                      <Btn v="red" size="sm" onClick={()=>setD('thankYouImgDataUrl','__REMOVED__')}>移除</Btn>
                    </div>
                  : null}
                <Btn v="ghost" size="sm" onClick={()=>document.getElementById('tyImgInput').click()}>
                  {resolveDraftImg(draft.thankYouImgDataUrl,'__thankTop')?'更換圖片':'上傳圖片'}
                </Btn>
                <input id="tyImgInput" type="file" accept="image/*" style={{display:'none'}}
                  onChange={async e=>{
                    const f=e.target.files?.[0]; if(!f) return;
                    if(f.size > 20*1024*1024){ uiAlert('檔案 '+Math.round(f.size/1024/1024)+'MB 超過 20MB'); e.target.value=''; return; }
                    setUploadingThankTop(true);
                    try {
                      await savePhotoData('__thankTop', f);
                      setD('thankYouImgDataUrl', '__USE_PHOTO__'); // marker so we know it exists
                    } catch(err){ uiAlert('上傳失敗：'+err.message); }
                    finally { setUploadingThankTop(false); }
                    e.target.value='';
                  }} />
                {uploadingThankTop && <span style={{fontSize:12,color:'#B5895F',display:'flex',alignItems:'center',gap:5}}><Spinner size={13}/> 上傳中，請稍候…</span>}
                {!uploadingThankTop && <span style={{fontSize:11,color:'#9A8F82'}}>上限 20MB</span>}
              </div>
            </Field>
          <Field label="頁面標題"><TInput value={draft.thankYouTitle||''} onChange={v=>setD('thankYouTitle',v)} /></Field>
              <Field label="感謝內文" hint="換行符號會直接顯示成換行">
                <TTextarea value={draft.thankYouMsg||''} onChange={v=>setD('thankYouMsg',v)} rows={4} />
              </Field>
              <Field label="額外資訊區塊" hint="顯示在感謝文字下方（可放入注意事項等）">
                <TTextarea value={draft.thankYouExtra||''} onChange={v=>setD('thankYouExtra',v)} rows={3} placeholder="例：婚禮當天請至 3F 繁複廳入座" />
              </Field>
              <Field label="LINE 分享內容" hint="賓客按「分享至Line」時複製的文字。留空則自動使用：新人名稱＋婚禮日期＋宴客地點。不含網址與圖片。">
                <TTextarea value={draft.lineShareText||''} onChange={v=>setD('lineShareText',v)} rows={4}
                  placeholder={`例：周杰倫 & 昆凌 婚禮邀請\n民國 115 年 05 月 20 日 (日) 12:00\n台北晶華酒店 | 四樓寰宇廳`} />
              </Field>
              <Field label="頁面底部圖片（自行選擇是否要放，建議放交通停車辦法）" hint="顯示在感謝頁面最下方">
                <div style={{display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
                  {resolveDraftImg(draft.thankYouImgBottomDataUrl,'__thankBottom')
                    ? <div style={{display:'flex',alignItems:'center',gap:8}}>
                        <img src={resolveDraftImg(draft.thankYouImgBottomDataUrl,'__thankBottom')} alt="" onClick={()=>setEnlargedImg(resolveDraftImg(draft.thankYouImgBottomDataUrl,'__thankBottom'))}
                          style={{maxHeight:64,maxWidth:120,objectFit:'cover',borderRadius:3,border:'1px solid #E5DDD0',cursor:'zoom-in'}} />
                        <Btn v="red" size="sm" onClick={()=>setD('thankYouImgBottomDataUrl','__REMOVED__')}>移除</Btn>
                      </div>
                    : null}
                  <Btn v="ghost" size="sm" onClick={()=>document.getElementById('tyBotImgInput').click()}>
                    {resolveDraftImg(draft.thankYouImgBottomDataUrl,'__thankBottom')?'更換底部圖片':'上傳底部圖片'}
                  </Btn>
                  <input id="tyBotImgInput" type="file" accept="image/*" style={{display:'none'}}
                    onChange={async e=>{
                      const f=e.target.files?.[0]; if(!f) return;
                      if(f.size > 20*1024*1024){ uiAlert('檔案 '+Math.round(f.size/1024/1024)+'MB 超過 20MB'); e.target.value=''; return; }
                      setUploadingThankBottom(true);
                      try {
                        await savePhotoData('__thankBottom', f);
                        setD('thankYouImgBottomDataUrl', '__USE_PHOTO__');
                      } catch(err){ uiAlert('上傳失敗：'+err.message); }
                      finally { setUploadingThankBottom(false); }
                      e.target.value='';
                    }} />
                  {uploadingThankBottom && <span style={{fontSize:12,color:'#B5895F',display:'flex',alignItems:'center',gap:5}}><Spinner size={13}/> 上傳中，請稍候…</span>}
                  {!uploadingThankBottom && <span style={{fontSize:11,color:'#9A8F82'}}>上限 20MB</span>}
                </div>
              </Field>
            </div>
            {previewing && (
              <div style={{border:'1px solid #E5DDD0',borderRadius:3,padding:24,background:'#F9F5EF',textAlign:'center'}}>
                {resolveDraftImg(draft.thankYouImgDataUrl,'__thankTop') && <img src={resolveDraftImg(draft.thankYouImgDataUrl,'__thankTop')} alt="" style={{width:'70%',height:'auto',objectFit:'contain',borderRadius:3,marginBottom:8}} />}
              <div style={{fontSize:36,marginBottom:12}}>💐</div>
                <div style={{fontFamily:FONT_STACK,fontSize:22,letterSpacing:2,marginBottom:8}}>{draft.thankYouTitle}</div>
                {(draft.thankYouMsg||'').split('\n').map((l,i)=><div key={i} style={{color:'#6B6259',lineHeight:1.9,fontSize:14}}>{l||' '}</div>)}
                {draft.thankYouExtra&&<div style={{marginTop:12,padding:'10px 14px',background:'#fff',borderRadius:2,fontSize:12,color:'#6B6259',textAlign:'center',lineHeight:1.8}}>{draft.thankYouExtra}</div>}
                {draft.transportInfo&&<div style={{marginTop:8,fontSize:11,color:'#9A8F82'}}>{draft.transportInfo}</div>}
                <div style={{marginTop:16,display:'flex',gap:8,justifyContent:'center'}}>
                  <span style={{padding:'4px 12px',border:'1px solid #E5DDD0',borderRadius:2,fontSize:11,color:'#6B6259'}}>再填一筆</span>
                  <span style={{padding:'4px 12px',border:'1px solid #06C755',color:'#06C755',background:'transparent',borderRadius:2,fontSize:11}}>分享至Line</span>
                </div>
                {resolveDraftImg(draft.thankYouImgBottomDataUrl,'__thankBottom') && <img src={resolveDraftImg(draft.thankYouImgBottomDataUrl,'__thankBottom')} alt="" style={{width:'70%',height:'auto',objectFit:'contain',borderRadius:3,marginTop:10}} />}
              </div>
            )}
          </div>
          {enlargedImg && <ImageLightbox src={enlargedImg} onClose={()=>setEnlargedImg(null)} />}
        </div>
      )}

      {/* GROUPS MANAGEMENT */}
      {tab==='groups' && <GroupsTab data={data} onUpdate={onUpdate} />}

      {/* THEME */}
      {tab==='theme' && (
        <div style={{...S.card,padding:28}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:6}}>
            <div>
              <div style={{fontFamily:FONT_STACK,fontSize:16,letterSpacing:1,marginBottom:6}}>外觀主題</div>
              <div style={{color:'#9A8F82',fontSize:12}}>選好主題與字體後，點右側「預覽外觀」查看效果再決定套用</div>
            </div>
            <Btn onClick={()=>onPreview&&onPreview(draft)}>👁 預覽外觀</Btn>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:12,marginBottom:32,marginTop:18}}>
            {Object.entries(THEMES).map(([key,th])=>{
              const active = (draft.theme||'cream')===key;
              return (
                <button key={key} data-tp="1" type="button" onClick={()=>{
                  const reco = THEME_FONT_RECO[key];
                  // 點主題 → 自動帶推薦字體（直接覆蓋為推薦組合；使用者之後改字體即尊重其選擇）
                  setDraft(p=>({...p, theme:key, ...(reco?{fontCJK:reco.cjk, fontLatin:reco.latin}:{})}));
                }}
                  style={{padding:'16px',borderRadius:3,border:`2px solid ${active?th.primary:th.border}`,
                    background:th.pageBg,textAlign:'left',cursor:'pointer',transition:'all .15s',
                    boxShadow:active?`0 0 0 2px ${th.primary}40`:'none'}}>
                  {(() => { const fimg = flowerImg(key); const noF = !fimg; return (
                  <div data-tp="1" style={{display:'flex',alignItems:'center',gap:noF?6:10,marginBottom:10,justifyContent:noF?'center':'flex-start',textAlign:noF?'center':'left'}}>
                    {fimg && <img data-tp="1" src={fimg} loading="lazy" alt="" style={{width:34,height:34,objectFit:'contain',flex:'none'}} />}
                    <div data-tp="1" style={{lineHeight:1.25}}>
                      <div data-tp="1" style={{fontWeight:active?600:500,color:th.text,fontSize:14}}>{flowerOf(key).name}</div>
                      <div data-tp="1" style={{color:th.mutedText,fontSize:11,marginTop:1}}>{th.name}</div>
                    </div>
                    {active && <span data-tp="1" style={{marginLeft:noF?6:'auto',color:th.primary,fontSize:16}}>✓</span>}
                  </div>); })()}
                  <div data-tp="1" style={{display:'flex',gap:6}}>
                    {[th.pageBg,th.cardBg,th.soft,th.primary].map((c,i)=>(
                      <div data-tp="1" key={i} style={{flex:1,height:14,borderRadius:2,background:c,border:`1px solid ${th.border}`}} />
                    ))}
                  </div>

                </button>
              );
            })}
          </div>

          {/* CJK font selector */}
          <div style={{marginTop:32}}>
            <div style={{fontFamily:FONT_STACK,fontSize:16,letterSpacing:1,marginBottom:6}}>中文字體</div>
            <div style={{color:'#9A8F82',fontSize:12,marginBottom:16}}>影響所有中文、數字及標點的字形風格</div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:10,marginBottom:4}}>
              {Object.entries(FONTS_CJK).map(([key,f])=>{
                const active=(draft.fontCJK||'noto-serif')===key;
                return (
                  <button key={key} data-tp="1" type="button"
                    onClick={()=>{ setD('fontCJK',key); }}
                    style={{padding:'14px',borderRadius:3,textAlign:'left',cursor:'pointer',transition:'all .15s',
                      border:`2px solid ${active?'#B5895F':'#E5DDD0'}`,background:'#FFFEFA',
                      boxShadow:active?'0 0 0 2px rgba(181,137,95,.25)':'none'}}>
                    <div data-tp="1" style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                      <div data-tp="1" style={{fontWeight:active?600:400,fontSize:13,color:'#3A332B'}}>{f.name}</div>
                      {active&&<span data-tp="1" style={{marginLeft:'auto',color:'#B5895F',fontSize:14}}>✓</span>}
                    </div>
                    <div data-tp="1" style={{fontFamily:f.family,fontSize:18,color:'#6B6259',lineHeight:1.4}}>
                      <span data-own-font="1" style={{fontFamily:f.family}}>雅婷 ＆ 家豪</span>
                    </div>
                    <div data-tp="1" style={{fontFamily:f.family,fontSize:12,color:'#9A8F82',marginTop:4,lineHeight:1.5}}>
                      <span data-own-font="1" style={{fontFamily:f.family}}>民國 115 年 11 月 22 日</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Latin font selector */}
          <div style={{marginTop:28}}>
            <div style={{fontFamily:FONT_STACK,fontSize:16,letterSpacing:1,marginBottom:6}}>英文字體</div>
            <div style={{color:'#9A8F82',fontSize:12,marginBottom:16}}>影響 ASCII 英文字母及符號的字形風格</div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:10,marginBottom:4}}>
              {Object.entries(FONTS_LATIN).map(([key,f])=>{
                const active=(draft.fontLatin||'cormorant')===key;
                return (
                  <button key={key} data-tp="1" type="button"
                    onClick={()=>{ setD('fontLatin',key); }}
                    style={{padding:'14px',borderRadius:3,textAlign:'left',cursor:'pointer',transition:'all .15s',
                      border:`2px solid ${active?'#B5895F':'#E5DDD0'}`,background:'#FFFEFA',
                      boxShadow:active?'0 0 0 2px rgba(181,137,95,.25)':'none'}}>
                    <div data-tp="1" style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                      <div data-tp="1" style={{fontFamily:f.family,fontWeight:active?600:400,fontSize:13,color:'#3A332B'}}>{f.name}</div>
                      {active&&<span data-tp="1" style={{marginLeft:'auto',color:'#B5895F',fontSize:14}}>✓</span>}
                    </div>
                    <div data-tp="1" style={{fontFamily:f.family,fontSize:18,color:'#6B6259',lineHeight:1.4}}>
                      <span data-own-font="1" style={{fontFamily:f.family}}>Emma & Liam</span>
                    </div>
                    <div data-tp="1" style={{fontFamily:f.family,fontSize:12,color:'#9A8F82',marginTop:4,lineHeight:1.5}}>
                      <span data-own-font="1" style={{fontFamily:f.family}}>November 22, 2026</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* BACKUP */}
      {tab==='backup' && <BackupTab data={data} onUpdate={onUpdate} fbRef={fbRef} deletePhotoData={deletePhotoData} weddingId={weddingId} />}

      {tab==='collab' && <CollabTab weddingId={weddingId} fbRef={fbRef} currentRole={currentRole} currentWedding={currentWedding} user={user} onReloadWeddings={onReloadWeddings} />}

      {/* PASSWORD */}
    </div>
  );
}


// ============================================================
// NAVBAR  — public shows only RSVP + admin login
// ============================================================
function NavBar({page,onNav,authed,onLogout,onDashboard,syncStatus,cfg,role,presence}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const gs = getGuestStyle(cfg?.theme);

  useEffect(()=>{
    if(!menuOpen) return;
    const handler = e => { if(menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('mousedown', handler);
    return ()=>document.removeEventListener('mousedown', handler);
  },[menuOpen]);

  const logoContent = cfg.logoType==='image'&&cfg.logoDataUrl
    ? <img src={cfg.logoDataUrl} alt="logo" style={{maxHeight:28,maxWidth:120,objectFit:'contain'}} />
    : <span style={{fontFamily:gs.navLogoFont,fontSize:gs.navLogoFont.includes('Caveat')?26:19,
        letterSpacing:gs.navLogoFont.includes('Caveat')?1:4,color:gs.primary,fontWeight:500}}>
        {cfg.logoText||'W&W'}
      </span>;

  // 統一的 tab 按鈕渲染（公開 + 後台共用），依 gs.tabStyle 切換外觀
  const renderTab = (t) => {
    const active = page===t.id;
    const icon = gs.useIcon
      ? <NavIcon name={t.id} color={active?(gs.tabStyle==='underline'?gs.primary:'#FFFEFA'):gs.mutedText} />
      : (gs.icons[t.id] ? <span>{gs.icons[t.id]}</span> : null);
    const label = <span style={{display:'inline-flex',alignItems:'center',gap:5}}>{icon}{t.l}</span>;

    if(gs.tabStyle==='pill') return (
      <button key={t.id} onClick={()=>onNav(t.id)} style={{
        padding:'5px 14px',fontSize:12,letterSpacing:.5,whiteSpace:'nowrap',cursor:'pointer',
        borderRadius:20,transition:'all .15s',
        background:active?gs.primary:'transparent',
        color:active?'#FFFEFA':gs.subText,
        border:`1px solid ${active?gs.primary:gs.border}`,
      }}>{label}</button>
    );
    if(gs.tabStyle==='block') return (
      <button key={t.id} onClick={()=>onNav(t.id)} style={{
        padding:'7px 16px',fontSize:12,letterSpacing:gs.labelSpacing*.5,whiteSpace:'nowrap',cursor:'pointer',
        fontFamily:gs.headingFont||'inherit',transition:'all .15s',
        background:active?gs.primary:'transparent',
        color:active?'#FFFEFA':gs.subText,border:'none',
      }}>{label}</button>
    );
    // underline
    return (
      <button key={t.id} onClick={()=>onNav(t.id)} style={{
        padding:'7px 13px',fontSize:12,letterSpacing:.5,whiteSpace:'nowrap',cursor:'pointer',
        color:active?gs.text:gs.subText,fontWeight:active?600:400,transition:'all .15s',
        borderBottom:active?`2px solid ${gs.primary}`:'2px solid transparent',
      }}>{label}</button>
    );
  };

  const publicTabs = [{id:'rsvp',l:'邀請函'},{id:'blessings',l:'祝福牆'}];
  const adminTabs  = [{id:'rsvp',l:'邀請函'},{id:'blessings',l:'祝福牆'},{id:'admin',l:'名單'},{id:'seating',l:'排位'},{id:'info',l:'資訊管理'}];

  return (
    <nav className="no-print wed-nav" style={{position:'sticky',top:0,zIndex:50,
      background:gs.navBg, backgroundImage:gs.navPattern||'none',
      backdropFilter:'blur(12px)',borderBottom:`1px solid ${gs.navBorder}`,
      padding:'11px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',minHeight:58,gap:8}}>
      <div className="wed-nav-logo" style={{flexShrink:0}}>{logoContent}</div>

      {!authed && (
        <div className="wed-nav-menu" style={{display:'flex',gap:gs.tabStyle==='pill'?6:4,alignItems:'center',
          overflowX:'auto',position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',
          maxWidth:'calc(100% - 240px)'}}>
          {publicTabs.map(renderTab)}
        </div>
      )}

      {authed && (
        <div className="wed-nav-menu" style={{display:'flex',gap:gs.tabStyle==='pill'?5:2,alignItems:'center',overflowX:'auto'}}>
          {adminTabs.map(renderTab)}
        </div>
      )}

      <div className="wed-nav-status" style={{display:'flex',alignItems:'center',gap:8,fontSize:11,color:gs.mutedText,flexShrink:0}}>
        {authed && presence && presence.length>0 && (
          <span title={presence.map(p=>`${p.name} 正在看${p.page}`).join('\n')}
            style={{display:'inline-flex',alignItems:'center',gap:4,background:'#EAF3DE',color:'#3B6D11',padding:'2px 8px',borderRadius:10,fontSize:10,whiteSpace:'nowrap'}}>
            🟢 {presence.length===1 ? `${presence[0].name} 正在編輯${presence[0].page}` : `${presence.length} 人在線`}
          </span>
        )}
        {authed && role && role!=='admin' && (
          <span style={{background:'#E3E8EF',color:'#5A6B85',padding:'2px 8px',borderRadius:10,fontSize:10}}>
            {ROLE_LABEL[role]}
          </span>
        )}
        {syncStatus==='error' && <span style={{width:6,height:6,borderRadius:'50%',background:'#C04040',display:'inline-block',flexShrink:0}} title="離線" />}
        {syncStatus==='connecting' && <Spinner size={10}/>}

        {authed && (
          <div ref={menuRef} style={{position:'relative'}}>
            <button onClick={()=>setMenuOpen(o=>!o)}
              style={{display:'flex',alignItems:'center',gap:5,padding:'5px 10px',borderRadius:gs.btnRadius,
                border:`1px solid ${gs.border}`,background:gs.cardBg,cursor:'pointer',fontSize:12,color:gs.subText}}>
              ☰
            </button>
            {menuOpen && (
              <div style={{position:'absolute',right:0,top:'calc(100% + 6px)',
                background:gs.cardBg,border:`1px solid ${gs.border}`,borderRadius:4,
                boxShadow:'0 4px 16px rgba(0,0,0,.12)',minWidth:150,zIndex:100}}>
                {onDashboard && (
                  <button onClick={()=>{setMenuOpen(false);onDashboard();}}
                    style={{display:'block',width:'100%',padding:'11px 16px',textAlign:'left',
                      fontSize:12,color:gs.text,borderBottom:`1px solid ${gs.border}`,cursor:'pointer'}}>
                    🏠 切換專案
                  </button>
                )}
                <button onClick={()=>{setMenuOpen(false);navigate('#/dashboard/account');}}
                  style={{display:'block',width:'100%',padding:'11px 16px',textAlign:'left',
                    fontSize:12,color:gs.text,borderBottom:`1px solid ${gs.border}`,cursor:'pointer'}}>
                  👤 帳戶中心
                </button>
                <button onClick={()=>{setMenuOpen(false);onLogout();}}
                  style={{display:'block',width:'100%',padding:'11px 16px',textAlign:'left',
                    fontSize:12,color:'#C04060',cursor:'pointer'}}>
                  🚪 登出
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}


// ============================================================
// PASSWORD GATE
// ============================================================
function PwGate({onAuth,expectedPw}) {
  const [pw,setPw] = useState('');
  const [err,setErr] = useState(false);
  const check=()=>{if(pw===expectedPw){onAuth(true);}else{setErr(true);setPw('');}};
  return (
    <div style={{minHeight:'calc(100vh - 58px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
      <div style={{...S.card,padding:'40px 32px',maxWidth:380,width:'100%',textAlign:'center'}}>
        <div style={{fontSize:28,marginBottom:10}}>🔒</div>
        <div style={{fontFamily:FONT_STACK,fontSize:19,letterSpacing:2,marginBottom:6}}>後台密碼</div>
        <div style={{fontSize:12,color:'#9A8F82',marginBottom:20}}>請輸入管理員密碼</div>
        <TInput type="password" value={pw} onChange={v=>{setPw(v);setErr(false);}}
          onKeyDown={e=>e.key==='Enter'&&check()} placeholder="••••"
          style={{textAlign:'center',letterSpacing:4,fontSize:16}} />
        {err&&<div style={{color:'#BF7090',fontSize:12,marginTop:6}}>密碼不正確</div>}
        <Btn onClick={check} style={{width:'100%',marginTop:14,justifyContent:'center'}}>進入後台</Btn>
      </div>
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================

// ============================================================
// HASH-BASED ROUTER
// 支援 URL：#/login · #/setup · #/dashboard · #/w/{weddingId}
//           #/w/{weddingId}/admin · /seating · /info · /blessings
// ============================================================
function useHashRoute() {
  // v6.12.3：綠界付款導回時，hash fragment 在 POST→302 轉址中常被瀏覽器丟掉，
  //          故 payResult 函式改帶 ?payresult=1。這裡優先用 query 判定，再把 URL 清成 hash 路由。
  const [route, setRoute] = useState(() => {
    try { if (new URLSearchParams(window.location.search).get('payresult') === '1') return '#/pay/result'; } catch {}
    return window.location.hash || '#/home';
  });
  useEffect(() => {
    try {
      if (new URLSearchParams(window.location.search).get('payresult') === '1') {
        // 清掉 query、補上 hash（replaceState 不觸發導航，route 已初始化為 #/pay/result）
        window.history.replaceState(null, '', window.location.pathname + '#/pay/result');
      }
    } catch {}
    const onHash = () => setRoute(window.location.hash || '#/home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}
function navigate(path) {
  window.location.hash = path;
}
function parseRoute(hash) {
  // #/w/{weddingId}/admin → { section: 'w', weddingId, page: 'admin' }
  // #/dashboard/account   → { section: 'dashboard', weddingId: 'account' }
  const path = hash.replace(/^#\/?/, '');
  const parts = path.split('/');
  if (parts[0] === 'w' && parts[1]) {
    return { section: 'w', weddingId: parts[1], page: parts[2] || 'rsvp' };
  }
  return { section: parts[0] || 'login', weddingId: parts[1] || null, page: parts[2] || null };
}


// ============================================================
// LANDING PAGE — 公開形象頁（v6.14.0）
//  • 整套 CSS scope 在 .lp-root，不外漏污染後台
//  • HTML 原樣注入（與已核定的預覽一致）
//  • GSAP 只在此頁 lazy load（CDN），離開時 ctx.revert() 清理，不殘留
//  • 站內錨點用 JS 平滑捲動攔截，避免與 hash 路由衝突
// ============================================================
const LP_CSS = `
  .lp-root {
    --bg:#F9F5EF; --card:#FFFEFA; --primary:#B5895F; --primary-dark:#9F754C;
    --ink:#3A332B; --sub:#6B6259; --muted:#9A8F82; --border:#E5DDD0;
    --soft:#EFE3D0; --blush:#F2E0E0; --line:#E8DECF;
    --serif:'Cormorant Garamond', serif;
    --sans:'Noto Sans TC', -apple-system, "PingFang TC", "Microsoft JhengHei", sans-serif;
  }

  .lp-root * {box-sizing:border-box; margin:0; padding:0;}

  .lp-root {scroll-behavior:smooth;}

  .lp-root {background:var(--bg); color:var(--ink); font-family:var(--sans); font-weight:300; line-height:1.75; -webkit-font-smoothing:antialiased; overflow-x:hidden;}

  .lp-root a {color:inherit; text-decoration:none;}

  .lp-root .wrap {max-width:1120px; margin:0 auto; padding:0 24px;}

  .lp-root .eyebrow {font-size:11px; letter-spacing:4px; text-transform:uppercase; color:var(--muted); font-weight:400;}

  .lp-root .serif {font-family:var(--serif);}

  .lp-root .btn {display:inline-flex; align-items:center; gap:8px; font-family:var(--sans); font-size:14px; font-weight:400; padding:12px 24px; border-radius:2px; cursor:pointer; border:1px solid transparent; transition:transform .25s, background .25s, border-color .25s, color .25s;}

  .lp-root .btn-primary {background:var(--primary); color:#fff;}

  .lp-root .btn-primary:hover {background:var(--primary-dark); transform:translateY(-1px);}

  .lp-root .btn-ghost {background:transparent; color:var(--ink); border-color:var(--border);}

  .lp-root .btn-ghost:hover {border-color:var(--primary); color:var(--primary);}


  /* hide-for-animation: only when JS+GSAP is active. If scripts fail or reduced-motion, .js is removed → content visible. */
  .lp-root.lp-anim .rv, .lp-root.lp-anim [data-hero], .lp-root.lp-anim .seatcard, .lp-root.lp-anim .table-svg {opacity:0;}

  .lp-root .hl-line {display:block; overflow:hidden;}

  .lp-root .hl-line > span {display:inline-block;}

  .lp-root.lp-anim .hl-line > span {transform:translateY(120%);}


  /* NAV */
  .lp-root nav {position:sticky; top:0; z-index:50; background:rgba(249,245,239,.85); backdrop-filter:blur(10px); border-bottom:1px solid var(--line);}

  .lp-root .nav-in {display:flex; align-items:center; justify-content:space-between; height:64px;}

  .lp-root .logo {line-height:1;}

  .lp-root .logo .l1 {font-family:'Noto Serif TC', serif; font-weight:600; font-size:22px; letter-spacing:5px; color:var(--primary);}

  .lp-root .logo .l2 {font-size:9px; letter-spacing:4px; text-transform:uppercase; color:var(--muted); margin-top:3px;}

  .lp-root .nav-links {display:flex; align-items:center; gap:28px; font-size:13px; color:var(--sub);}

  .lp-root .nav-links a.lk {transition:.2s;}
 .lp-root .nav-links a.lk:hover {color:var(--primary);}

  .lp-root .nav-cta {display:flex; align-items:center; gap:12px;}

  @media(max-width:760px) {
 .lp-root .nav-links .lk {display:none;}
 
}


  /* HERO */
  .lp-root .hero {position:relative; overflow:hidden;}

  .lp-root .hero-in {display:grid; grid-template-columns:1.05fr .95fr; gap:48px; align-items:center; padding:92px 0 76px;}

  .lp-root .hero h1 {font-family:var(--serif); font-weight:500; font-size:62px; line-height:1.1; letter-spacing:1px; color:var(--ink); margin:18px 0 22px;}

  .lp-root .hero h1 .accent {color:var(--primary);}

  .lp-root .hero p.lead {font-size:16px; color:var(--sub); max-width:30em; margin-bottom:32px;}

  .lp-root .hero .cta-row {display:flex; gap:14px; flex-wrap:wrap;}

  .lp-root .hero .note {margin-top:18px; font-size:12px; color:var(--muted);}

  @media(max-width:860px) {
 .lp-root .hero-in {grid-template-columns:1fr; gap:32px; padding:56px 0 48px;}
 .lp-root .hero h1 {font-size:44px;}
 .lp-root .hero-art {order:-1;}
 
}


  /* seating motif (signature) */
  .lp-root .hero-art {position:relative;}

  .lp-root .seatcard {background:var(--card); border:1px solid var(--border); border-radius:6px; padding:26px; box-shadow:0 24px 60px -34px rgba(58,51,43,.45); will-change:transform;}

  .lp-root .seatcard .cap {display:flex; justify-content:space-between; align-items:center; font-size:11px; color:var(--muted); letter-spacing:2px; text-transform:uppercase; margin-bottom:16px;}

  .lp-root .tables {display:grid; grid-template-columns:repeat(3,1fr); gap:18px;}

  .lp-root .table-svg {width:100%; height:auto;}

  .lp-root .seatcard .legend {margin-top:18px; display:flex; gap:18px; font-size:11px; color:var(--sub);}

  .lp-root .dot {display:inline-block; width:8px; height:8px; border-radius:50%; margin-right:6px; vertical-align:middle;}


  /* SECTION shell */
  .lp-root section {padding:84px 0;}

  .lp-root .sec-head {text-align:center; max-width:36em; margin:0 auto 52px;}

  .lp-root .sec-head h2 {font-family:var(--serif); font-weight:500; font-size:38px; color:var(--ink); margin:10px 0 14px; letter-spacing:.5px;}

  .lp-root .sec-head p {color:var(--sub); font-size:15px;}


  /* FLOW */
  .lp-root .flow {display:grid; grid-template-columns:repeat(3,1fr); gap:28px;}

  .lp-root .step {background:var(--card); border:1px solid var(--border); border-radius:6px; padding:26px 24px; position:relative; transition:transform .3s, box-shadow .3s;}

  .lp-root .step:hover {transform:translateY(-3px); box-shadow:0 18px 40px -28px rgba(58,51,43,.5);}

  .lp-root .step-head {display:flex; align-items:baseline; gap:12px; margin-bottom:10px;}

  .lp-root .step .n {font-family:var(--serif); font-size:30px; color:#CBB69A; line-height:1; flex-shrink:0;}

  .lp-root .step h3 {font-size:17px; font-weight:500; color:var(--ink);}

  .lp-root .step ul {list-style:none; display:flex; flex-direction:column; gap:8px;}

  .lp-root .step li {font-size:13.5px; color:var(--sub); display:flex; gap:9px; align-items:flex-start; line-height:1.55;}

  .lp-root .step li::before {content:"–"; color:var(--primary); flex-shrink:0;}

  .lp-root .combo {font-family:var(--serif); font-size:18px; color:var(--primary); letter-spacing:1px; margin:-2px 0 14px;}

  @media(max-width:760px) {
 .lp-root .flow {grid-template-columns:1fr;}
 
}

  .lp-root .step .mock {background:#F9F5EF; border:1px solid var(--line); border-radius:5px; margin-bottom:16px; padding:8px;}

  .lp-root .mocksvg {width:100%; height:auto; display:block;}

  .lp-root .step .cap-mock {font-size:10px; letter-spacing:1px; color:var(--muted); text-align:center; margin:-8px 0 14px;}


  /* FEATURES */
  .lp-root .feat-band {background:var(--card); border-top:1px solid var(--line); border-bottom:1px solid var(--line);}

  .lp-root .feat {display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--line); border:1px solid var(--line); border-radius:6px; overflow:hidden;}

  .lp-root .feat .cell {background:var(--card); padding:30px 26px; transition:background .25s;}

  .lp-root .feat .cell:hover {background:#FFFCF6;}

  .lp-root .feat .ic {font-size:22px; margin-bottom:12px;}

  .lp-root .feat h4 {font-size:15px; font-weight:500; margin-bottom:7px;}

  .lp-root .feat p {font-size:13px; color:var(--sub);}

  @media(max-width:860px) {
 .lp-root .feat {grid-template-columns:1fr 1fr;}
 
}

  @media(max-width:560px) {
 .lp-root .feat {grid-template-columns:1fr;}
 
}

  .lp-root .showcase {max-width:900px; margin:0 auto 50px;}

  .lp-root .appwin {background:var(--card); border:1px solid var(--border); border-radius:10px; overflow:hidden; box-shadow:0 34px 80px -44px rgba(58,51,43,.55);}

  .lp-root .appwin svg {width:100%; height:auto; display:block;}

  .lp-root .showcase .cap {text-align:center; font-size:12px; color:var(--muted); margin-top:14px;}


  /* PRICING */
  .lp-root .price {display:grid; grid-template-columns:1fr 1fr; gap:24px; max-width:840px; margin:0 auto;}

  .lp-root .plan {background:var(--card); border:1px solid var(--border); border-radius:8px; padding:34px 30px; display:flex; flex-direction:column;}

  .lp-root .plan.pro {border:1.5px solid var(--primary); box-shadow:0 24px 60px -38px rgba(181,137,95,.7); position:relative;}

  .lp-root .plan .tag {position:absolute; top:-12px; left:30px; background:var(--primary); color:#fff; font-size:11px; letter-spacing:2px; padding:4px 12px; border-radius:2px;}

  .lp-root .plan .pname {font-family:var(--serif); font-size:24px; color:var(--ink);}

  .lp-root .plan .pdesc {font-size:13px; color:var(--muted); margin:4px 0 18px;}

  .lp-root .plan .pp {display:flex; align-items:baseline; gap:6px; margin-bottom:4px;}

  .lp-root .plan .pp .cur {font-size:15px; color:var(--sub);}

  .lp-root .plan .pp .amt {font-family:var(--serif); font-size:46px; color:var(--ink); line-height:1;}

  .lp-root .plan .pp .per {font-size:13px; color:var(--muted);}

  .lp-root .plan ul {list-style:none; margin:22px 0 26px; display:flex; flex-direction:column; gap:11px;}

  .lp-root .plan li {font-size:13.5px; color:var(--sub); display:flex; gap:10px; align-items:flex-start;}

  .lp-root .plan li::before {content:"✓"; color:var(--primary); font-size:13px; margin-top:1px;}

  .lp-root .plan li.off {color:var(--muted);}
 .lp-root .plan li.off::before {content:"—"; color:var(--border);}

  .lp-root .plan .btn {justify-content:center; margin-top:auto;}

  .lp-root .price-note {text-align:center; font-size:12px; color:var(--muted); margin-top:22px;}

  /* period toggle on Pro card */
  .lp-root .period-toggle {display:inline-flex; background:var(--soft); border-radius:3px; padding:3px; margin:2px 0 16px; gap:2px;}

  .lp-root .pt-btn {flex:1; border:0; background:transparent; cursor:pointer; font-family:var(--sans); font-size:13px; color:var(--sub); padding:7px 16px; border-radius:2px; transition:.2s;}

  .lp-root .pt-btn.active {background:#fff; color:var(--primary); box-shadow:0 1px 3px rgba(58,51,43,.12);}

  .lp-root .plan .orig {font-size:13px; color:#B8AE9F; text-decoration:line-through; margin-right:6px;}

  .lp-root .plan .psave {font-size:12px; color:var(--primary-dark); margin-top:6px; min-height:1.2em;}

  @media(max-width:680px) {
 .lp-root .price {grid-template-columns:1fr;}
 
}


  /* FAQ */
  .lp-root .faq {max-width:760px; margin:0 auto; border-top:1px solid var(--line);}

  .lp-root .qa {border-bottom:1px solid var(--line); padding:22px 4px;}

  .lp-root .qa h4 {font-size:15px; font-weight:500; margin-bottom:7px; color:var(--ink);}

  .lp-root .qa p {font-size:13.5px; color:var(--sub);}


  /* LEGAL */
  .lp-root .legal-band {background:var(--card); border-top:1px solid var(--line);}

  .lp-root .legal {display:grid; grid-template-columns:repeat(3,1fr); gap:34px;}

  .lp-root .legal h3 {font-family:var(--serif); font-size:21px; margin-bottom:12px; color:var(--ink);}

  .lp-root .legal p, .lp-root .legal li {font-size:12.5px; color:var(--sub); line-height:1.85;}

  .lp-root .legal ul {margin:8px 0 0 18px;}

  .lp-root .legal .ph {background:var(--blush); color:#8a5a5a; padding:1px 6px; border-radius:3px; font-size:11px;}

  @media(max-width:820px) {
 .lp-root .legal {grid-template-columns:1fr;}
 
}


  /* FOOTER */
  .lp-root footer {background:#fff8ef; border-top:1px solid var(--line); padding:54px 0 30px;}

  .lp-root .foot {display:grid; grid-template-columns:1.4fr 1fr 1fr; gap:30px;}

  .lp-root .foot .logo .l1 {font-size:22px;}

  .lp-root .foot p, .lp-root .foot a {font-size:13px; color:var(--sub);}

  .lp-root .foot .col h5 {font-size:11px; letter-spacing:3px; text-transform:uppercase; color:var(--muted); margin-bottom:14px;}

  .lp-root .foot .col a {display:block; margin-bottom:8px;}
 .lp-root .foot .col a:hover {color:var(--primary);}

  .lp-root .contact-line {display:flex; align-items:center; gap:9px; margin-top:10px; font-size:13px; color:var(--sub);}

  .lp-root .foot-base {border-top:1px solid var(--line); margin-top:40px; padding-top:22px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; font-size:12px; color:var(--muted);}

  @media(max-width:760px) {
 .lp-root .foot {grid-template-columns:1fr;}
 
}


.lp-root{min-height:100vh;}`;
const LP_HTML = `<!-- NAV -->
<nav>
  <div class="wrap nav-in">
    <div class="logo">
      <div class="l1">對好入座</div>
      <div class="l2">MY WEDDING · SEATING</div>
    </div>
    <div class="nav-links">
      <a class="lk" href="#flow">運作流程</a>
      <a class="lk" href="#features">功能特色</a>
      <a class="lk" href="#pricing">方案定價</a>
      <a class="lk" href="#faq">常見問題</a>
      <div class="nav-cta">
        <a class="btn btn-ghost" href="#/login">登入</a>
        <a class="btn btn-primary" href="#/login">免費開始</a>
      </div>
    </div>
  </div>
</nav>

<!-- HERO -->
<header class="hero">
  <div class="wrap hero-in">
    <div>
      <span class="eyebrow hero-eyebrow" data-hero>專屬喜帖 ✕ 表單統計 ✕ 拖曳排位</span>
      <h1>
        <span class="hl-line"><span>我的婚禮</span></span>
        <span class="hl-line"><span class="accent">對好入座</span></span>
      </h1>
      <p class="lead hero-lead" data-hero style="margin-bottom:12px;">告別排桌地獄！從發送喜帖到輕鬆排位，一站完成。</p>
      <p class="lead hero-lead" data-hero>線上喜帖、邀請函回覆、賓客名單到桌次安排都在同一個地方，拖一拖就排好位，避桌同桌自動提醒。</p>
      <div class="cta-row hero-cta" data-hero>
        <a class="btn btn-primary" href="#/login">免費開始，不需信用卡</a>
        <a class="btn btn-ghost" href="#pricing">看方案與定價</a>
      </div>
      <p class="note hero-note" data-hero>免費版即可建立喜帖、收邀請函回覆、排 3 桌；升級 Pro 解鎖無限桌次、匯出與多人協作。</p>
    </div>

    <!-- signature: seating motif -->
    <div class="hero-art">
      <div class="seatcard">
        <div class="cap"><span>SEATING PLAN</span><span>12 桌 · 已排 9</span></div>
        <div class="tables">
          <svg class="table-svg" viewBox="0 0 90 90"><circle cx="45" cy="45" r="22" fill="none" stroke="#B5895F" stroke-width="1.4"/><circle cx="45" cy="20" r="4.4" fill="#B5895F"/><circle cx="66" cy="33" r="4.4" fill="#B5895F"/><circle cx="66" cy="57" r="4.4" fill="#B5895F"/><circle cx="45" cy="70" r="4.4" fill="#B5895F"/><circle cx="24" cy="57" r="4.4" fill="#B5895F"/><circle cx="24" cy="33" r="4.4" fill="#B5895F"/><text x="45" y="49" font-size="11" fill="#9A8F82" text-anchor="middle" font-family="Cormorant Garamond">1</text></svg>
          <svg class="table-svg" viewBox="0 0 90 90"><circle cx="45" cy="45" r="22" fill="none" stroke="#B5895F" stroke-width="1.4"/><circle cx="45" cy="20" r="4.4" fill="#B5895F"/><circle cx="66" cy="33" r="4.4" fill="#B5895F"/><circle cx="66" cy="57" r="4.4" fill="#E5DDD0"/><circle cx="45" cy="70" r="4.4" fill="#B5895F"/><circle cx="24" cy="57" r="4.4" fill="#B5895F"/><circle cx="24" cy="33" r="4.4" fill="#B5895F"/><text x="45" y="49" font-size="11" fill="#9A8F82" text-anchor="middle" font-family="Cormorant Garamond">2</text></svg>
          <svg class="table-svg" viewBox="0 0 90 90"><circle cx="45" cy="45" r="22" fill="none" stroke="#C8AE92" stroke-width="1.4" stroke-dasharray="3 3"/><circle cx="45" cy="20" r="4.4" fill="#E5DDD0"/><circle cx="66" cy="33" r="4.4" fill="#E5DDD0"/><circle cx="66" cy="57" r="4.4" fill="#E5DDD0"/><circle cx="45" cy="70" r="4.4" fill="#E5DDD0"/><circle cx="24" cy="57" r="4.4" fill="#E5DDD0"/><circle cx="24" cy="33" r="4.4" fill="#E5DDD0"/><text x="45" y="49" font-size="10" fill="#C0B4A4" text-anchor="middle" font-family="Cormorant Garamond">+</text></svg>
        </div>
        <div class="legend">
          <span><span class="dot" style="background:#B5895F"></span>已入座</span>
          <span><span class="dot" style="background:#E5DDD0"></span>空位</span>
          <span><span class="dot" style="background:#fff;border:1px dashed #C8AE92"></span>待新增</span>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- FLOW -->
<section id="flow">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow">How it works</span>
      <h2>三個步驟，從喜帖到安排座位</h2>
      <div class="combo">專屬喜帖 ✕ 表單統計 ✕ 拖曳排位</div>
      <p>每一步都接上下一步，不用在不同工具之間搬資料。</p>
    </div>
    <div class="flow">

      <div class="step rv">
        <div class="mock">
          <svg class="mocksvg" viewBox="0 0 240 150">
            <rect x="86" y="8" width="68" height="134" rx="11" fill="#FFFEFA" stroke="#E5DDD0"/>
            <rect x="105" y="13" width="30" height="3.5" rx="1.75" fill="#EADBC8"/>
            <rect x="91" y="24" width="58" height="38" fill="#EFE3D0"/>
            <text x="120" y="46" font-size="13" fill="#B5895F" text-anchor="middle" font-family="Cormorant Garamond">&#9825;</text>
            <text x="120" y="80" font-size="11" fill="#3A332B" text-anchor="middle" font-family="Cormorant Garamond">Shawn &amp; Yu</text>
            <text x="120" y="93" font-size="7" fill="#9A8F82" text-anchor="middle" letter-spacing="1">2026 . 10 . 10</text>
            <rect x="101" y="103" width="38" height="14" rx="7" fill="#B5895F"/>
            <text x="120" y="112.5" font-size="6.5" fill="#FFFEFA" text-anchor="middle">出席回覆</text>
            <rect x="106" y="126" width="28" height="3" rx="1.5" fill="#E5DDD0"/>
          </svg>
        </div>
        <div class="step-head"><span class="n">01</span><h3>發出線上喜帖</h3></div>
        <ul>
          <li>挑選主題、填入婚禮資訊</li>
          <li>產生專屬邀請連結</li>
          <li>用 LINE 或社群直接分享給賓客</li>
        </ul>
      </div>

      <div class="step rv">
        <div class="mock">
          <svg class="mocksvg" viewBox="0 0 240 150">
            <rect x="18" y="14" width="204" height="122" rx="8" fill="#FFFEFA" stroke="#E5DDD0"/>
            <text x="30" y="33" font-size="9.5" fill="#3A332B" font-family="Noto Sans TC">賓客名單</text>
            <text x="210" y="33" font-size="7.5" fill="#9A8F82" text-anchor="end">已回覆 38 / 50</text>
            <line x1="18" y1="43" x2="222" y2="43" stroke="#EFE3D0"/>
            <!-- rows -->
            <g font-family="Noto Sans TC">
              <circle cx="36" cy="58" r="6" fill="#EAD9C4"/><rect x="48" y="55" width="58" height="6" rx="3" fill="#E5DDD0"/>
              <rect x="160" y="51" width="50" height="14" rx="7" fill="#E8F0E0"/><text x="185" y="60.5" font-size="7" fill="#4A7C59" text-anchor="middle">出席 · 2 位</text>
              <circle cx="36" cy="82" r="6" fill="#EAD9C4"/><rect x="48" y="79" width="46" height="6" rx="3" fill="#E5DDD0"/>
              <rect x="172" y="75" width="38" height="14" rx="7" fill="#F5E8D0"/><text x="191" y="84.5" font-size="7" fill="#9F754C" text-anchor="middle">未定</text>
              <circle cx="36" cy="106" r="6" fill="#EAD9C4"/><rect x="48" y="103" width="64" height="6" rx="3" fill="#E5DDD0"/>
              <rect x="172" y="99" width="38" height="14" rx="7" fill="#EFE3D0"/><text x="191" y="108.5" font-size="7" fill="#9A8F82" text-anchor="middle">婉謝</text>
            </g>
          </svg>
        </div>
        <div class="step-head"><span class="n">02</span><h3>收取賓客回覆與祝福</h3></div>
        <ul>
          <li>賓客回覆出席人數與需求</li>
          <li>線上祝福牆即時看</li>
          <li>回覆名單人數自動彙整</li>
        </ul>
      </div>

      <div class="step rv">
        <div class="mock">
          <svg class="mocksvg" viewBox="0 0 240 150">
            <rect x="18" y="14" width="204" height="122" rx="8" fill="#F9F5EF" stroke="#E5DDD0"/>
            <!-- table 1 -->
            <g transform="translate(72,58)">
              <circle r="20" fill="none" stroke="#B5895F" stroke-width="1.3"/>
              <circle cx="0" cy="-20" r="4" fill="#B5895F"/><circle cx="19" cy="-6" r="4" fill="#B5895F"/><circle cx="12" cy="16" r="4" fill="#B5895F"/><circle cx="-12" cy="16" r="4" fill="#B5895F"/><circle cx="-19" cy="-6" r="4" fill="#B5895F"/>
              <text y="3" font-size="9" fill="#9A8F82" text-anchor="middle" font-family="Cormorant Garamond">主桌</text>
            </g>
            <!-- table 2 with one empty target -->
            <g transform="translate(150,52)">
              <circle r="20" fill="none" stroke="#B5895F" stroke-width="1.3"/>
              <circle cx="0" cy="-20" r="4" fill="#B5895F"/><circle cx="19" cy="-6" r="4" fill="#E5DDD0"/><circle cx="12" cy="16" r="4" fill="#B5895F"/><circle cx="-12" cy="16" r="4" fill="#E5DDD0"/><circle cx="-19" cy="-6" r="4" fill="#B5895F"/>
              <text y="3" font-size="9" fill="#9A8F82" text-anchor="middle" font-family="Cormorant Garamond">2</text>
            </g>
            <!-- conflict badge on table1 -->
            <g transform="translate(58,34)"><rect width="44" height="14" rx="7" fill="#FBE6E6"/><text x="22" y="9.6" font-size="7" fill="#B5524F" text-anchor="middle" font-family="Noto Sans TC">⚠ 避桌衝突</text></g>
            <!-- dragging chip + dashed path to empty seat -->
            <path d="M70 118 C 110 110, 150 90, 169 60" fill="none" stroke="#C8AE92" stroke-width="1" stroke-dasharray="3 3"/>
            <g transform="translate(40,110)"><rect width="52" height="18" rx="9" fill="#FFFEFA" stroke="#B5895F"/><text x="26" y="12" font-size="8" fill="#3A332B" text-anchor="middle" font-family="Noto Sans TC">王小明</text></g>
          </svg>
        </div>
        <div class="step-head"><span class="n">03</span><h3>簡單拖曳快速完成惱人排位</h3></div>
        <ul>
          <li>賓客名單拖曳快速安排入桌</li>
          <li>避桌・同桌需求偵測提醒</li>
          <li>匯出座位圖帶位好輕鬆</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<!-- FEATURES -->
<div class="feat-band">
<section id="features" style="padding-top:72px;padding-bottom:72px;">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow">Features</span>
      <h2>籌備婚宴最頭痛的，一條龍搞定</h2>
      <p>從喜帖、回覆統計到一張張桌子怎麼坐 —— 不用再開 Excel 和 LINE 群組來回對。</p>
    </div>

    <div class="showcase rv">
      <div class="appwin">
        <svg viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg" font-family="Noto Sans TC">
          <!-- canvas bg -->
          <rect x="0" y="0" width="760" height="400" fill="#F9F5EF"/>
          <!-- title bar -->
          <rect x="0" y="0" width="760" height="40" fill="#F4ECE0"/>
          <circle cx="22" cy="20" r="4" fill="#E0D3C0"/><circle cx="38" cy="20" r="4" fill="#E0D3C0"/><circle cx="54" cy="20" r="4" fill="#E0D3C0"/>
          <text x="380" y="25" font-size="12" fill="#6B6259" text-anchor="middle">排位 — Xin &amp; Yu 婚禮</text>
          <rect x="624" y="11" width="118" height="20" rx="10" fill="#B5895F"/>
          <text x="683" y="24.5" font-size="10.5" fill="#FFFEFA" text-anchor="middle">匯出帶位清單</text>
          <!-- sidebar -->
          <rect x="0" y="40" width="200" height="360" fill="#FAF4EA"/>
          <line x1="200" y1="40" x2="200" y2="400" stroke="#E5DDD0"/>
          <text x="20" y="72" font-size="12.5" fill="#3A332B">待安排賓客</text>
          <text x="184" y="72" font-size="11" fill="#B5895F" text-anchor="end">8 人</text>
          <g>
            <rect x="16" y="86" width="168" height="24" rx="12" fill="#FFFEFA" stroke="#E5DDD0"/><text x="30" y="101.5" font-size="10.5" fill="#3A332B">林伯母</text><text x="172" y="101.5" font-size="9.5" fill="#9A8F82" text-anchor="end">×1</text>
            <rect x="16" y="116" width="168" height="24" rx="12" fill="#FFFEFA" stroke="#E5DDD0"/><text x="30" y="131.5" font-size="10.5" fill="#3A332B">大學同學 A</text><text x="172" y="131.5" font-size="9.5" fill="#9A8F82" text-anchor="end">×2</text>
            <rect x="16" y="146" width="168" height="24" rx="12" fill="#FFFEFA" stroke="#E5DDD0"/><text x="30" y="161.5" font-size="10.5" fill="#3A332B">公司同事</text><text x="172" y="161.5" font-size="9.5" fill="#9A8F82" text-anchor="end">×3</text>
            <rect x="16" y="176" width="168" height="24" rx="12" fill="#FFFEFA" stroke="#E5DDD0"/><text x="30" y="191.5" font-size="10.5" fill="#3A332B">表哥一家</text><text x="172" y="191.5" font-size="9.5" fill="#9A8F82" text-anchor="end">×4</text>
          </g>

          <!-- main canvas tables -->
          <!-- 主桌 (filled) -->
          <g transform="translate(330,135)">
            <circle r="36" fill="#FFFEFA" stroke="#B5895F" stroke-width="1.4"/>
            <circle cx="36" cy="0" r="6" fill="#B5895F"/><circle cx="25" cy="25" r="6" fill="#B5895F"/><circle cx="0" cy="36" r="6" fill="#B5895F"/><circle cx="-25" cy="25" r="6" fill="#B5895F"/><circle cx="-36" cy="0" r="6" fill="#B5895F"/><circle cx="-25" cy="-25" r="6" fill="#B5895F"/><circle cx="0" cy="-36" r="6" fill="#B5895F"/><circle cx="25" cy="-25" r="6" fill="#B5895F"/>
            <text y="4" font-size="13" fill="#9A8F82" text-anchor="middle" font-family="Cormorant Garamond">主桌</text>
          </g>
          <!-- 桌2 (mixed, target seats empty) -->
          <g transform="translate(500,120)">
            <circle r="34" fill="#FFFEFA" stroke="#B5895F" stroke-width="1.4"/>
            <circle cx="34" cy="0" r="5.5" fill="#B5895F"/><circle cx="17" cy="29" r="5.5" fill="#E5DDD0"/><circle cx="-17" cy="29" r="5.5" fill="#B5895F"/><circle cx="-34" cy="0" r="5.5" fill="#B5895F"/><circle cx="-17" cy="-29" r="5.5" fill="#E5DDD0"/><circle cx="17" cy="-29" r="5.5" fill="#B5895F"/>
            <text y="4" font-size="12" fill="#9A8F82" text-anchor="middle" font-family="Cormorant Garamond">2</text>
          </g>
          <!-- 桌3 -->
          <g transform="translate(650,185)">
            <circle r="34" fill="#FFFEFA" stroke="#B5895F" stroke-width="1.4"/>
            <circle cx="34" cy="0" r="5.5" fill="#B5895F"/><circle cx="17" cy="29" r="5.5" fill="#B5895F"/><circle cx="-17" cy="29" r="5.5" fill="#E5DDD0"/><circle cx="-34" cy="0" r="5.5" fill="#B5895F"/><circle cx="-17" cy="-29" r="5.5" fill="#B5895F"/><circle cx="17" cy="-29" r="5.5" fill="#E5DDD0"/>
            <text y="4" font-size="12" fill="#9A8F82" text-anchor="middle" font-family="Cormorant Garamond">3</text>
          </g>
          <!-- 桌4 -->
          <g transform="translate(360,310)">
            <circle r="34" fill="#FFFEFA" stroke="#B5895F" stroke-width="1.4"/>
            <circle cx="34" cy="0" r="5.5" fill="#B5895F"/><circle cx="17" cy="29" r="5.5" fill="#B5895F"/><circle cx="-17" cy="29" r="5.5" fill="#B5895F"/><circle cx="-34" cy="0" r="5.5" fill="#E5DDD0"/><circle cx="-17" cy="-29" r="5.5" fill="#B5895F"/><circle cx="17" cy="-29" r="5.5" fill="#B5895F"/>
            <text y="4" font-size="12" fill="#9A8F82" text-anchor="middle" font-family="Cormorant Garamond">4</text>
          </g>
          <!-- 桌5 (conflict) -->
          <g transform="translate(560,315)">
            <circle r="34" fill="#FFFEFA" stroke="#D89B9B" stroke-width="1.6"/>
            <circle cx="34" cy="0" r="5.5" fill="#B5895F"/><circle cx="17" cy="29" r="5.5" fill="#B5895F"/><circle cx="-17" cy="29" r="5.5" fill="#E5DDD0"/><circle cx="-34" cy="0" r="5.5" fill="#B5895F"/><circle cx="-17" cy="-29" r="5.5" fill="#B5895F"/><circle cx="17" cy="-29" r="5.5" fill="#E5DDD0"/>
            <text y="4" font-size="12" fill="#9A8F82" text-anchor="middle" font-family="Cormorant Garamond">5</text>
          </g>
          <!-- conflict badge -->
          <g transform="translate(536,268)"><rect width="92" height="18" rx="9" fill="#FBE6E6"/><text x="46" y="12.5" font-size="9.5" fill="#B5524F" text-anchor="middle">⚠ 避桌偏好衝突</text></g>
          <!-- same-table unmet badge -->
          <g transform="translate(596,140)"><rect width="108" height="18" rx="9" fill="#F5E8D0"/><text x="54" y="12.5" font-size="9.5" fill="#9F754C" text-anchor="middle">↔ 同桌偏好未滿足</text></g>

          <!-- dragging chip + dashed path to empty seat on 桌2 -->
          <path d="M300 250 C 380 250, 450 180, 483 91" fill="none" stroke="#C8AE92" stroke-width="1.2" stroke-dasharray="4 4"/>
          <g transform="translate(252,238)"><rect width="96" height="26" rx="13" fill="#FFFEFA" stroke="#B5895F" stroke-width="1.3"/><text x="48" y="16.5" font-size="11" fill="#3A332B" text-anchor="middle">大學同學 A ×2</text></g>
        </svg>
      </div>
      <div class="cap">實際操作畫面示意 · 拖曳賓客即入座，避桌／同桌衝突自動標示</div>
    </div>

    <div class="feat">
      <div class="cell rv"><div class="ic">💌</div><h4>線上喜帖</h4><p>多種典雅主題與字體，手機開啟即是一張邀請函，連婚紗照都能輪播。</p></div>
      <div class="cell rv"><div class="ic">✅</div><h4>邀請函回覆</h4><p>賓客自助回覆，省去逐一電話確認，名單即時同步。</p></div>
      <div class="cell rv"><div class="ic">📋</div><h4>賓客名單</h4><p>出席狀態、攜伴人數、桌次一覽，還能逐筆統計喜餅數量（男方／女方分開計算），支援匯入與快速搜尋。</p></div>
      <div class="cell rv"><div class="ic">💬</div><h4>祝福牆</h4><p>收集賓客留言與祝福，婚禮當天可即時呈現。</p></div>
      <div class="cell rv"><div class="ic">🪑</div><h4>智慧排位</h4><p>拖曳安排桌次，避桌／同桌偏好自動提醒衝突。</p></div>
      <div class="cell rv"><div class="ic">👥</div><h4>多人協作</h4><p>邀請伴侶或親友一起編輯，即時看到誰正在調整。</p></div>
    </div>
  </div>
</section>
</div>

<!-- PRICING -->
<section id="pricing">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow">Pricing</span>
      <h2>方案與定價</h2>
      <p>先免費開始，需要更多桌次與匯出時再升級。價格以新台幣計價。</p>
    </div>
    <div class="price">
      <div class="plan">
        <div class="pname serif">免費版</div>
        <div class="pdesc">適合小型婚禮先試用</div>
        <div class="pp"><span class="cur">NT$</span><span class="amt">0</span><span class="per">／永久免費</span></div>
        <ul>
          <li>建立線上喜帖與祝福牆</li>
          <li>收取邀請函回覆</li>
          <li>賓客名單管理</li>
          <li>排位最多 3 桌、已入座 32 人</li>
          <li>最多 2 個婚禮專案</li>
          <li class="off">匯出帶位清單／名單</li>
          <li class="off">多人協作</li>
        </ul>
        <a class="btn btn-ghost" href="#/login">免費開始</a>
      </div>
      <div class="plan pro">
        <span class="tag" id="proBadge">最划算</span>
        <div class="pname serif">Pro 方案</div>
        <div class="pdesc">完整功能，適合正式婚宴</div>
        <div class="period-toggle" role="tablist" aria-label="計費週期">
          <button class="pt-btn" data-period="month" role="tab">月費</button>
          <button class="pt-btn active" data-period="half" role="tab">半年</button>
        </div>
        <div class="pp">
          <span class="orig" id="proOrig" style="display:none;"></span>
          <span class="cur">NT$</span><span class="amt" id="proAmt">1,099</span><span class="per" id="proPer">／半年</span>
        </div>
        <div class="psave" id="proSave">付 6 個月多送 1 個月（等於 7 個月，每月約 NT$157）</div>
        <ul>
          <li>免費版全部功能</li>
          <li>排位桌數無上限</li>
          <li>匯出帶位清單、名單（CSV／JPG／PDF）</li>
          <li>多人即時協作</li>
          <li>專案數量提升</li>
          <li>主題與字體完整解鎖</li>
        </ul>
        <a class="btn btn-primary" href="#/login">升級 Pro</a>
      </div>
    </div>
    <p class="price-note">Pro 提供月費與半年兩種方案。信用卡定期定額付款由綠界 ECPay 安全處理，可隨時取消，已付期間權益保留至到期日。</p>
  </div>
</section>

<!-- FAQ -->
<section id="faq" style="padding-top:40px;">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow">FAQ</span>
      <h2>常見問題</h2>
    </div>
    <div class="faq">
      <div class="qa rv"><h4>付款方式有哪些？</h4><p>Pro 方案採信用卡定期定額（自動續扣），由綠界 ECPay 處理刷卡與每期扣款，我們不會接觸或保存您的完整卡號。</p></div>
      <div class="qa rv"><h4>可以隨時取消訂閱嗎？</h4><p>可以。於帳戶中心點選「取消訂閱」即停止後續自動扣款；已付期間的 Pro 權益會保留到當期到期日為止。</p></div>
      <div class="qa rv"><h4>退費政策是什麼？</h4><p>數位訂閱服務開通後，當期費用原則上不另退還；取消後不再扣款。詳細條件請見下方「退費政策」。</p></div>
      <div class="qa rv"><h4>免費版有期限嗎？</h4><p>沒有。免費版可永久使用，僅在桌數、專案數與匯出等進階功能上有所限制。</p></div>
    </div>
  </div>
</section>

<!-- LEGAL -->
<div class="legal-band">
<section id="legal">
  <div class="wrap">
    <div class="legal">
      <div class="rv" id="terms">
        <h3>服務條款</h3>
        <p>本服務「我的婚禮對好入座」由 <span class="ph">〔營業主體名稱／負責人〕</span> 提供，協助使用者製作線上喜帖、管理賓客名單與安排桌次。</p>
        <ul>
          <li>使用者須對自行上傳之賓客資料與內容負責，不得用於違法用途。</li>
          <li>Pro 為訂閱制服務，付款後即開通對應期間之功能權益。</li>
          <li>服務內容與方案得適時調整，重大變更將於本網站公告。</li>
        </ul>
      </div>
      <div class="rv" id="refund">
        <h3>退費政策</h3>
        <p>Pro 訂閱採信用卡定期定額：</p>
        <ul>
          <li>取消訂閱後即停止後續自動扣款，已開通之當期權益保留至到期日。</li>
          <li>數位服務一經開通，當期已扣款項原則上不予退還。</li>
          <li>如有重複扣款或系統錯誤，請於 <span class="ph">〔7〕</span> 日內聯繫客服，核實後協助處理。</li>
        </ul>
      </div>
      <div class="rv" id="privacy">
        <h3>隱私權政策</h3>
        <p>我們僅為提供服務之必要而蒐集與使用您的資料：</p>
        <ul>
          <li>帳號資料（Email、登入識別）用於身分驗證與服務通知。</li>
          <li>付款由綠界 ECPay 處理，我們不保存您的完整信用卡號。</li>
          <li>您可隨時要求查詢、更正或刪除個人資料。</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>

<!-- FOOTER -->
<footer>
  <div class="wrap">
    <div class="foot">
      <div>
        <div class="logo"><div class="l1">對好入座</div>
      <div class="l2">MY WEDDING · SEATING</div></div>
        <p style="margin-top:14px; max-width:24em;">我的婚禮對好入座 —— 告別排桌地獄，籌備婚禮的每一步都簡單一點。</p>
        <div class="contact-line">✉️ <a href="mailto:〔your@email.com〕"><span class="ph">〔your@email.com〕</span></a></div>
        <div class="contact-line">📞 <span class="ph">〔0900-000-000〕</span></div>
      </div>
      <div class="col">
        <h5>產品</h5>
        <a href="#flow">運作流程</a><a href="#features">功能特色</a><a href="#pricing">方案定價</a><a href="#faq">常見問題</a>
      </div>
      <div class="col">
        <h5>條款與政策</h5>
        <a href="#terms">服務條款</a><a href="#refund">退費政策</a><a href="#privacy">隱私權政策</a>
        <a href="#legal">聯絡我們</a>
      </div>
    </div>
    <div class="foot-base">
      <span>© 2026 我的婚禮對好入座 · <span class="ph">〔營業主體／統一編號〕</span></span>
      <span>付款服務由 綠界科技 ECPay 提供</span>
    </div>
  </div>
</footer>`;

function LandingPage(){
  const rootRef = useRef(null);
  useEffect(()=>{
    const root = rootRef.current; if(!root) return;
    // 字體
    if(!document.getElementById('lp-fonts')){
      const l=document.createElement('link'); l.id='lp-fonts'; l.rel='stylesheet';
      l.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@500;600&display=swap';
      document.head.appendChild(l);
    }
    // 站內錨點平滑捲動（#section 攔截；#/route 放行給路由）
    const onClick=(e)=>{
      const a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if(!a) return;
      const href = a.getAttribute('href');
      if(!href || href.startsWith('#/')) return;
      e.preventDefault();
      const el = root.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    };
    root.addEventListener('click', onClick);
    // 方案切換（月費／半年）
    const PLANS={ month:{amt:'199',per:'／月',orig:'NT$299',save:'限時優惠價，每月自動續訂',badge:'限時優惠'},
                  half:{amt:'1,099',per:'／半年',orig:'',save:'付 6 個月多送 1 個月（等於 7 個月，每月約 NT$157）',badge:'最划算'} };
    const pick=(id)=>root.querySelector('#'+id);
    const applyPlan=(k)=>{ const p=PLANS[k]; if(!p) return;
      const a=pick('proAmt'),pe=pick('proPer'),o=pick('proOrig'),s=pick('proSave'),b=pick('proBadge');
      if(a)a.textContent=p.amt; if(pe)pe.textContent=p.per; if(s)s.textContent=p.save; if(b)b.textContent=p.badge;
      if(o){ if(p.orig){o.textContent=p.orig;o.style.display='';} else o.style.display='none'; } };
    const btns = root.querySelectorAll('.pt-btn');
    const onToggle=(e)=>{ const b=e.currentTarget; btns.forEach(x=>x.classList.remove('active')); b.classList.add('active'); applyPlan(b.getAttribute('data-period')); };
    btns.forEach(b=>b.addEventListener('click', onToggle));
    // GSAP lazy load + 進場動畫（scoped），失敗或 reduced-motion → 直接顯示
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveal=()=>root.classList.remove('lp-anim');
    let ctx=null, cancelled=false;
    const loadScript=(src)=>new Promise((ok,no)=>{ const s=document.createElement('script'); s.src=src; s.onload=ok; s.onerror=no; document.head.appendChild(s); });
    const ensureGsap=async()=>{
      if(!window.gsap) await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js');
      if(!window.ScrollTrigger) await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js');
    };
    if(reduce){ reveal(); }
    else {
      ensureGsap().then(()=>{
        if(cancelled) return;
        const gsap=window.gsap; if(!gsap){ reveal(); return; }
        gsap.registerPlugin(window.ScrollTrigger);
        ctx = gsap.context(()=>{
          gsap.set('[data-hero]',{y:18}); gsap.set('.seatcard',{y:24});
          gsap.set('.table-svg',{scale:.85,transformOrigin:'50% 50%'}); gsap.set('.rv',{y:22}); gsap.set('.plan',{opacity:0,y:26});
          const tl=gsap.timeline({defaults:{ease:'power3.out'},delay:.1});
          tl.to('.hero-eyebrow',{autoAlpha:1,y:0,duration:.6},0)
            .to('.hl-line > span',{y:0,duration:.95,stagger:.12,ease:'power4.out'},'-=.25')
            .to('.hero-lead',{autoAlpha:1,y:0,duration:.7},'-=.55')
            .to('.hero-cta',{autoAlpha:1,y:0,duration:.7},'-=.55')
            .to('.hero-note',{autoAlpha:1,y:0,duration:.6},'-=.55')
            .to('.seatcard',{autoAlpha:1,y:0,duration:.85},'-=.7')
            .to('.table-svg',{autoAlpha:1,scale:1,duration:.7,stagger:.14,ease:'back.out(1.5)'},'-=.45');
          gsap.to('.seatcard',{y:'-=7',duration:3.4,ease:'sine.inOut',repeat:-1,yoyo:true,delay:1.8});
          Array.from(root.querySelectorAll('.rv')).forEach((el)=>{
            gsap.to(el,{autoAlpha:1,y:0,duration:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%'}});
          });
          window.ScrollTrigger.batch(root.querySelectorAll('.plan'),{start:'top 88%',
            onEnter:(bt)=>gsap.to(bt,{autoAlpha:1,y:0,duration:.8,stagger:.12,ease:'power3.out'})});
        }, root);
      }).catch(reveal);
    }
    return ()=>{ cancelled=true; root.removeEventListener('click',onClick);
      btns.forEach(b=>b.removeEventListener('click',onToggle)); if(ctx) ctx.revert(); };
  },[]);
  return React.createElement('div',{ref:rootRef, className:'lp-root lp-anim',
    dangerouslySetInnerHTML:{__html:'<style>'+LP_CSS+'</style>'+LP_HTML}});
}

// ============================================================
// LOGIN PAGE — Email/Password + Google OAuth
// ============================================================
function LoginPage({ onAuthSuccess, inviteMode }) {
  const [mode, setMode]     = useState('login');
  const [email, setEmail]   = useState(()=>{ try{return localStorage.getItem('savedEmail')||'';}catch{return '';} });
  const [pw, setPw]         = useState('');
  const [pw2, setPw2]       = useState('');
  const [remember, setRemember] = useState(()=>{ try{return !!localStorage.getItem('savedEmail');}catch{return false;} });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg]       = useState({ type: '', text: '' });

  const err = (text) => setMsg({ type: 'err', text });
  const ok  = (text) => setMsg({ type: 'ok',  text });

  // 完整中文錯誤訊息對照
  const AUTH_ERRORS = {
    'auth/user-not-found':        '找不到此帳號，請先點「建立新帳號」',
    'auth/wrong-password':        '密碼錯誤，請再試一次',
    'auth/invalid-credential':    '帳號或密碼錯誤，請再試一次',
    'auth/invalid-email':         'Email 格式不正確',
    'auth/email-already-in-use':  '此 Email 已被使用，請直接登入',
    'auth/weak-password':         '密碼強度不足（至少 6 碼）',
    'auth/too-many-requests':     '嘗試次數過多，請稍後再試或點「忘記密碼」重設',
    'auth/user-disabled':         '此帳號已被停用，請聯繫客服',
    'auth/network-request-failed':'網路連線異常，請確認網路後再試',
    'auth/popup-closed-by-user':  '登入視窗已關閉，請重試',
    'auth/cancelled-popup-request':'登入已取消',
    'auth/requires-recent-login': '基於安全考量，請重新登入後再操作',
    'auth/account-exists-with-different-credential': '此 Email 已用其他方式註冊，請改用 Email 登入',
    'auth/popup-blocked':         '瀏覽器封鎖了登入視窗，請允許彈出視窗後再試一次',
    'auth/unauthorized-domain':   '此網域未授權登入，請在 Firebase 主控台 Authentication → 授權網域 加入本網站網域',
    'auth/operation-not-supported-in-environment': '目前環境不支援此登入方式，請改用 Email 登入',
    'auth/internal-error':        '驗證服務暫時異常，請稍後再試',
  };

  const doEmailAuth = async () => {
    if (!email.trim()) { err('請輸入 Email'); return; }
    if (!pw)           { err('請輸入密碼'); return; }
    if (mode === 'register' && pw !== pw2) { err('兩次密碼不一致'); return; }
    if (mode === 'register' && pw.length < 6) { err('密碼至少 6 碼'); return; }
    setLoading(true); setMsg({ type: '', text: '' });
    try {
      const fb = await initFirebase();
      if (mode === 'login') {
        await fb.auth.signInWithEmailAndPassword(email.trim(), pw);
      } else {
        await fb.auth.createUserWithEmailAndPassword(email.trim(), pw);
      }
      // 記住帳號
      try {
        if (remember) localStorage.setItem('savedEmail', email.trim());
        else localStorage.removeItem('savedEmail');
      } catch {}
    } catch(e) {
      err(AUTH_ERRORS[e.code] || ('登入失敗：' + e.message));
    } finally { setLoading(false); }
  };

  const doGoogleLogin = async () => {
    setLoading(true); setMsg({ type: '', text: '' });
    try {
      const fb = await initFirebase();
      // 優先用 popup：不依賴第三方 cookie，跨網域（Vercel app 網域 ≠ firebaseapp.com authDomain）也能成功。
      // signInWithRedirect 自 2024-06-24 起在 Chrome115+/Safari16.1+/Firefox109+ 因封鎖第三方儲存而失效
      // （登入後被導回卻未驗證）。故改 popup 為主，僅在 popup 真被擋時才退回 redirect。
      try {
        await fb.auth.signInWithPopup(fb.googleProvider);
        // 成功 → onAuthStateChanged 自動觸發後續導向，這裡不需額外處理
      } catch (popupErr) {
        const fallbackCodes = ['auth/popup-blocked','auth/operation-not-supported-in-environment'];
        if (fallbackCodes.includes(popupErr.code)) {
          await fb.auth.signInWithRedirect(fb.googleProvider);
          return; // 頁面重導向，以下不執行
        }
        throw popupErr;
      }
    } catch(e) {
      // 使用者自行關閉 popup 視窗不視為錯誤
      if (e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') {
        err(AUTH_ERRORS[e.code] || ('Google 登入失敗：' + e.message));
      }
      setLoading(false);
    }
  };

  const doReset = async () => {
    if (!email.trim()) { err('請先輸入您的 Email'); return; }
    setLoading(true);
    try {
      const fb = await initFirebase();
      await fb.auth.sendPasswordResetEmail(email.trim());
      ok('重設連結已寄出，請查收 Email（若沒收到請檢查垃圾信件）');
    } catch(e) { err(AUTH_ERRORS[e.code] || e.message); }
    finally { setLoading(false); }
  };

  const titles = { login: '登入', register: '建立新帳號', reset: '重設密碼' };

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',
      background:'#F9F5EF',padding:20}}>
      <div className="wfadein" style={{...S.card,padding:'36px 32px',maxWidth:400,width:'100%'}}>
        {/* Logo */}
        <div style={{textAlign:'center',marginBottom:28}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,letterSpacing:6,color:'#B5895F',marginBottom:4}}>
            Wedding
          </div>
          <div style={{fontSize:11,letterSpacing:4,color:'#9A8F82',textTransform:'uppercase'}}>
            Management System
          </div>
        </div>

        <div style={{fontFamily:FONT_STACK,fontSize:18,letterSpacing:1,marginBottom:20,textAlign:'center'}}>
          {titles[mode]}
        </div>

        {inviteMode && (
          <div style={{padding:'10px 14px',background:'#EAF3DE',border:'1px solid #C5DDA0',borderRadius:3,fontSize:12,color:'#3B6D11',marginBottom:16,textAlign:'center',lineHeight:1.6}}>
            🤝 您收到一份協作邀請<br/>請先登入或註冊以接受邀請
          </div>
        )}

        {/* Google Button */}
        {mode !== 'reset' && (
          <button onClick={doGoogleLogin} disabled={loading}
            style={{width:'100%',padding:'11px 0',borderRadius:2,border:'1px solid #E5DDD0',
              background:'#FFFEFA',cursor:'pointer',display:'flex',alignItems:'center',
              justifyContent:'center',gap:10,fontSize:13,color:'#3A332B',marginBottom:14,
              fontFamily:FONT_STACK,opacity:loading?0.6:1}}>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            以 Google 帳號{mode === 'login' ? '登入' : '註冊'}
          </button>
        )}

        {mode !== 'reset' && (
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:14}}>
            <div style={{flex:1,height:1,background:'#E5DDD0'}} />
            <span style={{fontSize:11,color:'#9A8F82'}}>或使用 Email</span>
            <div style={{flex:1,height:1,background:'#E5DDD0'}} />
          </div>
        )}

        <Field label="Email">
          <TInput type="email" value={email} onChange={setEmail} placeholder="your@email.com"
            onKeyDown={e => { if(e.key==='Enter' && mode!=='reset') doEmailAuth(); }} />
        </Field>

        {mode !== 'reset' && (
          <Field label="密碼">
            <TInput type="password" value={pw} onChange={setPw} placeholder="至少 6 碼"
              onKeyDown={e => { if(e.key==='Enter') doEmailAuth(); }} />
          </Field>
        )}

        {mode === 'register' && (
          <Field label="確認密碼">
            <TInput type="password" value={pw2} onChange={setPw2} placeholder="再輸入一次密碼"
              onKeyDown={e => { if(e.key==='Enter') doEmailAuth(); }} />
          </Field>
        )}

        {/* 記住帳號（僅登入模式） */}
        {mode === 'login' && (
          <label style={{display:'flex',alignItems:'center',gap:6,fontSize:12,color:'#9A8F82',marginBottom:14,cursor:'pointer'}}>
            <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)}
              style={{accentColor:'#B5895F'}} />
            記住帳號
          </label>
        )}

        {msg.text && (
          <div style={{padding:'8px 12px',borderRadius:2,fontSize:12,marginBottom:12,
            background: msg.type==='ok'?'#E8F5E8':'#F5DCE2',
            border: `1px solid ${msg.type==='ok'?'#B5D5B5':'#EECDD6'}`,
            color: msg.type==='ok'?'#2A6B2A':'#BF7090'}}>
            {msg.text}
          </div>
        )}

        {mode === 'reset'
          ? <Btn onClick={doReset} disabled={loading} style={{width:'100%',justifyContent:'center'}}>
              {loading ? <><Spinner size={14} color="#FFFEFA"/> 寄送中</> : '寄出重設連結'}
            </Btn>
          : <Btn onClick={doEmailAuth} disabled={loading} style={{width:'100%',justifyContent:'center',marginTop:4}}>
              {loading ? <><Spinner size={14} color="#FFFEFA"/> 處理中</> : titles[mode]}
            </Btn>
        }

        <div style={{marginTop:18,display:'flex',justifyContent:'center',gap:16,fontSize:12,color:'#9A8F82'}}>
          {mode === 'login' && <>
            <button onClick={()=>{setMode('register');setMsg({type:'',text:''});}} style={{color:'#B5895F',background:'none',border:'none',cursor:'pointer',fontSize:12}}>建立新帳號</button>
            <button onClick={()=>{setMode('reset');setMsg({type:'',text:''});}} style={{color:'#9A8F82',background:'none',border:'none',cursor:'pointer',fontSize:12}}>忘記密碼</button>
          </>}
          {mode !== 'login' && (
            <button onClick={()=>{setMode('login');setMsg({type:'',text:''});}} style={{color:'#B5895F',background:'none',border:'none',cursor:'pointer',fontSize:12}}>← 返回登入</button>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// WEDDING SETUP WIZARD — 新用戶建立婚禮（3 步驟）
// ============================================================
// ============================================================
// WIZARD PREVIEW OVERLAY — 設定向導全頁主題預覽
// 渲染仿邀請函頁面（新人名字 + 日期 + 場地 + 主題色 + 字體），
// 讓使用者在建立婚禮前就能看到實際效果。
// ============================================================
function WizardPreviewOverlay({ form, onClose }) {
  const theme  = THEMES[form.theme]     || THEMES.cream;
  const gs     = getGuestStyle(form.theme);   // 完整視覺語言（圓角/裝飾/tab/按鈕）
  const cjkFnt = (FONTS_CJK[form.fontCJK]    || FONTS_CJK['noto-serif']).family;
  const latFnt = (FONTS_LATIN[form.fontLatin] || FONTS_LATIN['cormorant']).family;
  const groom  = form.groomName  || '新郎';
  const bride  = form.brideName  || '新娘';
  const logo   = form.logoText   || `${groom} & ${bride}`;

  React.useEffect(()=>{ applyTheme(theme); applyFont(form.fontCJK, form.fontLatin); },[]);

  const card = { background:theme.cardBg, border:`1px solid ${theme.border}`, borderRadius:gs.radius };

  return (
    <div style={{position:'fixed',inset:0,zIndex:9998,display:'flex',flexDirection:'column'}}>
      {/* 頂部提示欄 */}
      <div data-tp="1" style={{display:'flex',justifyContent:'space-between',alignItems:'center',
        padding:'10px 20px',background:'rgba(30,24,18,.88)',backdropFilter:'blur(10px)',flexShrink:0,
        boxShadow:'0 2px 12px rgba(0,0,0,.3)'}}>
        <div style={{fontFamily:FONT_STACK,fontSize:12,letterSpacing:2,color:'#D9CABC'}}>
          主題預覽效果 — 目前預覽的主題：{theme.name}（尚未儲存）
        </div>
        <button onClick={onClose} data-tp="1" style={{display:'flex',alignItems:'center',gap:6,
          fontSize:12,color:'#D9CABC',background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.2)',
          borderRadius:3,padding:'5px 14px',cursor:'pointer',letterSpacing:1}}>
          ✕ 關閉預覽
        </button>
      </div>

      {/* 頁面內容 */}
      <div style={{flex:1,overflowY:'auto',background:theme.pageBg,backgroundImage:gs.pagePattern||'none',backgroundSize:gs.pagePatternSize||'auto',backgroundRepeat:gs.pagePatternMode==='scene'?'repeat-x':gs.pagePatternMode==='top-scene'?'no-repeat':(gs.pagePatternRepeat||'repeat'),backgroundPosition:gs.pagePatternMode==='scene'?'left bottom':gs.pagePatternMode==='top-scene'?'top center':(gs.pagePatternPos||'0 0')}}>

        {/* ── NavBar（含 tab 樣式預覽）── */}
        <div style={{background:gs.navBg,backgroundImage:gs.navPattern||'none',
          borderBottom:`1px solid ${gs.navBorder}`,
          padding:'13px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',
          position:'sticky',top:0,zIndex:1}}>
          <div style={{fontFamily:gs.navLogoFont,fontSize:gs.navLogoFont.includes('Caveat')?24:17,
            letterSpacing:gs.navLogoFont.includes('Caveat')?1:5,color:theme.primary}}>{logo}</div>
          <div style={{display:'flex',gap:gs.tabStyle==='pill'?6:10,alignItems:'center'}}>
            {[{id:'rsvp',l:'邀請函'},{id:'blessings',l:'祝福牆'}].map((n,i)=>{
              const active=i===0;
              const icon = gs.useIcon
                ? <NavIcon name={n.id} color={active?(gs.tabStyle==='underline'?theme.primary:'#FFFEFA'):theme.mutedText} />
                : (gs.icons[n.id]?<span>{gs.icons[n.id]}</span>:null);
              const label=<span style={{display:'inline-flex',alignItems:'center',gap:5}}>{icon}{n.l}</span>;
              if(gs.tabStyle==='pill') return <span key={n.id} style={{padding:'4px 14px',fontSize:12,borderRadius:20,
                background:active?theme.primary:'transparent',color:active?'#FFFEFA':theme.subText,
                border:`1px solid ${active?theme.primary:theme.border}`}}>{label}</span>;
              if(gs.tabStyle==='block') return <span key={n.id} style={{padding:'6px 14px',fontSize:12,
                background:active?theme.primary:'transparent',color:active?'#FFFEFA':theme.subText}}>{label}</span>;
              return <span key={n.id} style={{padding:'6px 4px',fontSize:12,color:active?theme.text:theme.subText,
                borderBottom:active?`2px solid ${theme.primary}`:'2px solid transparent'}}>{label}</span>;
            })}
          </div>
        </div>

        {/* ── Hero ── */}
        <div style={{...card,borderRadius:0,borderLeft:'none',borderRight:'none',textAlign:'center',
          padding:'52px 24px 40px'}}>
          <div style={{fontFamily:gs.labelFont,fontSize:10,letterSpacing:gs.labelSpacing,color:theme.subText,
            marginBottom:18,textTransform:gs.labelCase}}>Wedding Invitation</div>
          <div style={{fontFamily:gs.headingFont||cjkFnt,fontSize:'clamp(28px,6vw,48px)',color:theme.text,
            letterSpacing:8,lineHeight:1.3,marginBottom:8}}>
            {groom}
            <span style={{color:theme.primary,margin:'0 10px',fontFamily:latFnt,fontSize:'clamp(22px,4vw,36px)'}}>
              {gs.ornament||'&'}
            </span>
            {bride}
          </div>
          {form.weddingDate&&(
            <div style={{fontFamily:gs.headingFont||cjkFnt,fontSize:14,color:theme.subText,marginTop:18,letterSpacing:2}}>
              {form.weddingDate}
            </div>
          )}
          {form.venue&&(
            <div style={{fontFamily:cjkFnt,fontSize:12,color:theme.subText,marginTop:6,letterSpacing:1}}>
              {form.venue}
            </div>
          )}
          {gs.dividerChar ? (
            <div style={{margin:'28px auto 0',fontSize:13,color:theme.primary,letterSpacing:6,opacity:.7}}>
              {gs.dividerChar}　{gs.dividerChar}　{gs.dividerChar}
            </div>
          ) : (
            <div style={{width:32,height:gs.radius===0?2:1,background:theme.primary,margin:'28px auto 0'}}/>
          )}
        </div>

        {/* ── RSVP 表單模擬（含按鈕/checkbox 風格）── */}
        <div style={{maxWidth:520,margin:'0 auto',padding:'28px 20px 60px'}}>
          <div style={{...card,padding:'24px 20px',boxShadow:gs.shadow}}>
            <div style={{fontFamily:gs.headingFont||cjkFnt,fontSize:16,color:theme.text,letterSpacing:2,marginBottom:20}}>
              出席回覆
            </div>
            {['姓名','出席人數'].map(f=>(
              <div key={f} style={{marginBottom:14}}>
                <div style={{fontSize:11,color:theme.subText,letterSpacing:.5,marginBottom:5}}>{f}</div>
                {gs.inputUnderline
                  ? <div style={{borderBottom:`1px solid ${theme.border}`,height:32}}/>
                  : <div style={{border:`1px solid ${theme.border}`,borderRadius:gs.inputRadius,background:theme.pageBg,height:36}}/>}
              </div>
            ))}
            {/* 是否出席 按鈕（主色跳色預覽）*/}
            <div style={{fontSize:11,color:theme.subText,letterSpacing:.5,marginBottom:5}}>是否出席</div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:14}}>
              <div style={{padding:'10px 8px',borderRadius:gs.btnRadius,textAlign:'center',fontSize:13,
                background:theme.primary,color:onColorText(theme.primary),fontWeight:600,
                textTransform:gs.btnCase,boxShadow:gs.shadow}}>我一定到！！</div>
              <div style={{padding:'10px 8px',borderRadius:gs.btnRadius,textAlign:'center',fontSize:13,
                background:theme.pageBg,color:theme.subText,border:`1px solid ${theme.border}`,
                textTransform:gs.btnCase}}>無法參與</div>
            </div>
            {/* checkbox 預覽 */}
            <div style={{display:'flex',alignItems:'center',gap:8,fontSize:12,color:theme.subText,marginBottom:16}}>
              <span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',
                width:18,height:18,borderRadius:Math.min(gs.btnRadius,6),
                border:`1.5px solid ${theme.primary}`,background:theme.primary}}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                  stroke={onColorText(theme.primary)} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l5 5L20 6"/></svg>
              </span>
              公開我的祝福
            </div>
            <div style={{padding:'11px 0',borderRadius:gs.btnRadius,background:theme.primary,
              textAlign:'center',fontFamily:gs.headingFont||cjkFnt,fontSize:13,color:onColorText(theme.primary),
              letterSpacing:gs.btnCase==='uppercase'?3:3,textTransform:gs.btnCase,cursor:'default',boxShadow:gs.shadow}}>
              確認出席
            </div>
          </div>
          <div style={{marginTop:12,textAlign:'center',fontSize:11,color:theme.subText,letterSpacing:1}}>
            以上為示意內容，實際邀請函可在「資訊管理」中進一步編輯
          </div>
        </div>
      </div>
    </div>
  );
}

function WeddingSetupWizard({ user, fbRef, onComplete, onCancel }) {
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [form, setForm] = useState({
    groomName: '', brideName: '',
    weddingDate: '', weddingTime: '入席 18:00　·　開席 18:30',
    venue: '', address: '', phone: '',
    theme: 'cream', fontCJK: 'noto-serif', fontLatin: 'cormorant',
    logoType: 'text', logoText: '',
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  // 預覽主題效果
  useEffect(() => {
    applyTheme(THEMES[form.theme] || THEMES.cream);
    applyFont(form.fontCJK, form.fontLatin);
  }, [form.theme, form.fontCJK, form.fontLatin]);

  const createWedding = async () => {
    if (!form.groomName.trim() || !form.brideName.trim()) {
      uiAlert('請填寫新郎與新娘姓名'); return;
    }
    setSaving(true);
    try {
      const fb = fbRef.current || await initFirebase();
      fbRef.current = fb;
      const weddingId = uid() + uid(); // 產生唯一 ID
      const now = Date.now();

      const config = {
        ...DEFAULT_CONFIG,
        ...form,
        logoText: form.logoText || (form.groomName.slice(-1) + '&' + form.brideName.slice(-1)),
      };

      // 寫入婚禮主文件
      await weddingDoc(fb.db, weddingId).set({
        ownerId: user.uid,
        ownerEmail: user.email || '',
        createdAt: now,
        plan: 'free',
        weddingId,
      });

      // 初始化 main data
      const initData = {
        ...emptyData(),
        config,
        lastUpdate: now,
      };
      const cleanInit = {
        ...initData,
        photos: [{ id: 'default', enabled: true, order: 0, focalY: 50 }],
        avoidPairs: [],
        samePairs: [],
      };
      await mainDocRef(fb.db, weddingId).set(cleanInit);

      // 初始化預設照片
      await photosColRef(fb.db, weddingId).doc('default').set({
        dataUrl: DEFAULT_PHOTO_B64
      }).catch(() => {});

      // 寫入 user 記錄
      const userRef = fb.db.collection('users').doc(user.uid);
      const userSnap = await userRef.get();
      const existingWeddings = userSnap.exists ? (userSnap.data().weddingIds || []) : [];
      // v6.8.0：若帳號已是手動開通 Pro，新建婚禮直接繼承 Pro
      const ownerProActive = userSnap.exists && userSnap.data().proGrant && userSnap.data().proGrant.active;
      if (ownerProActive) {
        await weddingDoc(fb.db, weddingId).update({ plan: 'pro' }).catch(()=>{});
      }
      await userRef.set({
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || '',
        weddingIds: [...existingWeddings, weddingId],
        updatedAt: now,
      }, { merge: true });

      onComplete(weddingId);
    } catch (e) {
      uiAlert('建立婚禮失敗\n\n' + firestoreErrMsg(e));
    } finally { setSaving(false); }
  };

  const stepTitles = ['基本資訊', '外觀風格', '完成'];

  return (
    <div style={{minHeight:'100vh',background:'#F9F5EF',padding:20,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="wfadein" style={{...S.card,padding:'36px 32px',maxWidth:560,width:'100%'}}>
        {/* v6.7.0：返回／放棄建立（僅在已有專案時顯示，全新使用者沒有可返回的專案頁） */}
        {onCancel && (
          <div style={{marginBottom:14}}>
            <button onClick={async()=>{
                const dirty = form.groomName.trim()||form.brideName.trim()||form.venue.trim();
                if(dirty && !(await uiConfirm({title:'放棄建立？',message:'尚未建立的資料將不會保存。',confirmText:'放棄並返回',cancelText:'繼續編輯'}))) return;
                onCancel();
              }}
              style={{background:'none',border:'none',padding:0,cursor:'pointer',fontFamily:FONT_STACK,
                fontSize:13,color:'#9A8F82',letterSpacing:.5}}>
              ← 返回我的婚禮
            </button>
          </div>
        )}
        {/* 步驟指示器 */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:0,marginBottom:28}}>
          {stepTitles.map((t, i) => (
            <React.Fragment key={i}>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                <div style={{width:28,height:28,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:12,fontWeight:600,
                  background: i+1 <= step ? '#B5895F' : '#F1EAE0',
                  color: i+1 <= step ? '#FFFEFA' : '#9A8F82'}}>
                  {i+1 < step ? '✓' : i+1}
                </div>
                <div style={{fontSize:10,color: i+1 === step ? '#B5895F' : '#9A8F82',whiteSpace:'nowrap'}}>{t}</div>
              </div>
              {i < 2 && <div style={{width:40,height:1,background:'#E5DDD0',margin:'0 4px',marginBottom:20}} />}
            </React.Fragment>
          ))}
        </div>

        {/* Step 1: 基本資訊 */}
        {step === 1 && (
          <div className="wfadein">
            <div style={{fontFamily:FONT_STACK,fontSize:17,letterSpacing:1,marginBottom:12}}>新人資訊</div>
            {/* 免費版限制說明 */}
            <div style={{padding:'10px 14px',background:'#FFF8F0',border:'1px solid #F0DFC0',
              borderRadius:3,fontSize:12,color:'#7A5C00',marginBottom:16,lineHeight:1.8}}>
              📋 <strong>免費版使用限制：</strong><br/>
              • 最多建立 <strong>{FREE_PROJECT_LIMIT} 個</strong>婚禮專案<br/>
              • 排位上限 <strong>{FREE_TABLE_LIMIT} 桌 · {FREE_SEAT_LIMIT} 人</strong>，名單與排位匯出為 Pro 功能（升級 Pro 解除所有限制）
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
              <Field label="新郎姓名" required>
                <TInput value={form.groomName} onChange={v=>set('groomName',v)} placeholder="例：志明" />
              </Field>
              <Field label="新娘姓名" required>
                <TInput value={form.brideName} onChange={v=>set('brideName',v)} placeholder="例：春嬌" />
              </Field>
            </div>
            <Field label="婚禮日期">
              <TInput value={form.weddingDate} onChange={v=>set('weddingDate',v)} placeholder="例：民國 115 年 11 月 22 日（日）" />
            </Field>
            <Field label="婚宴時間">
              <TInput value={form.weddingTime} onChange={v=>set('weddingTime',v)} placeholder="例：入席 18:00 · 開席 18:30" />
            </Field>
            <Field label="婚宴地點名稱">
              <TInput value={form.venue} onChange={v=>set('venue',v)} placeholder="例：台北晶華酒店 4F 寰宇廳" />
            </Field>
            <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:14}}>
              <Field label="完整地址">
                <TInput value={form.address} onChange={v=>set('address',v)} placeholder="含郵遞區號" />
              </Field>
              <Field label="電話">
                <TInput value={form.phone} onChange={v=>set('phone',v)} placeholder="02-XXXX-XXXX" />
              </Field>
            </div>
            <Btn onClick={() => {
              if(!form.groomName.trim()||!form.brideName.trim()) { uiAlert('請填寫新郎與新娘姓名'); return; }
              setStep(2);
            }} style={{width:'100%',justifyContent:'center',marginTop:8}}>
              下一步：選擇外觀 →
            </Btn>
          </div>
        )}

        {/* Step 2: 外觀風格 */}
        {step === 2 && (
          <div className="wfadein">
            {showPreview && <WizardPreviewOverlay form={form} onClose={()=>setShowPreview(false)} />}

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
              <div style={{fontFamily:FONT_STACK,fontSize:17,letterSpacing:1}}>外觀風格</div>
              <Btn v="ghost" size="sm" onClick={()=>setShowPreview(true)}>👁 預覽效果</Btn>
            </div>

            {/* 主題選擇 */}
            <Field label="主題配色">
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
                {Object.entries(THEMES).map(([k, t]) => (
                  <button key={k} onClick={() => {
                    const reco = THEME_FONT_RECO[k];
                    setForm(f=>({...f, theme:k, ...(reco?{fontCJK:reco.cjk, fontLatin:reco.latin}:{})}));
                  }}
                    style={{position:'relative',padding:'10px 6px',borderRadius:3,fontSize:11,cursor:'pointer',
                      background: form.theme===k ? t.primary : t.cardBg,
                      color: form.theme===k ? '#FFFEFA' : t.text,
                      border: `2px solid ${form.theme===k ? t.primary : t.border}`,
                      transition:'all .15s'}}>
                    {form.theme===k && (
                      <span style={{position:'absolute',top:4,right:5,
                        background:'#FFFEFA',color:t.primary,borderRadius:'50%',
                        width:16,height:16,fontSize:10,display:'flex',alignItems:'center',justifyContent:'center',
                        fontWeight:700,lineHeight:1}}>✓</span>
                    )}
                    {(() => { const fimg = flowerImg(k); const fl = flowerOf(k); const selc = form.theme===k; return (<>
                    {fimg && (
                      <img src={fimg} loading="lazy" alt="" style={{width:38,height:38,objectFit:'contain',margin:'0 auto 5px',display:'block',filter:selc?'drop-shadow(0 3px 6px rgba(0,0,0,.18))':'none'}} />
                    )}
                    <div style={{fontWeight:600,lineHeight:1.25,fontSize:12,textAlign:'center'}}>{fl.name}</div>
                    <div style={{fontSize:9,opacity:.62,marginTop:1,textAlign:'center'}}>{t.name}</div>
                    </>); })()}
                  </button>
                ))}
              </div>
            </Field>

            {/* 中文字體 */}
            <Field label="中文字體">
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {Object.entries(FONTS_CJK).map(([k, f]) => (
                  <button key={k} onClick={() => set('fontCJK', k)}
                    style={{padding:'6px 12px',borderRadius:2,fontSize:12,cursor:'pointer',
                      background: form.fontCJK===k ? '#B5895F' : '#F1EAE0',
                      color: form.fontCJK===k ? '#FFFEFA' : '#6B6259',
                      border: `1px solid ${form.fontCJK===k ? '#B5895F' : '#E5DDD0'}`}}>
                    {f.name}
                  </button>
                ))}
              </div>
            </Field>

            {/* 英文字體 */}
            <Field label="英文字體">
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {Object.entries(FONTS_LATIN).map(([k, f]) => (
                  <button key={k} onClick={() => set('fontLatin', k)}
                    style={{padding:'6px 12px',borderRadius:2,fontSize:12,cursor:'pointer',
                      background: form.fontLatin===k ? '#B5895F' : '#F1EAE0',
                      color: form.fontLatin===k ? '#FFFEFA' : '#6B6259',
                      border: `1px solid ${form.fontLatin===k ? '#B5895F' : '#E5DDD0'}`,
                      fontFamily: f.family}}>
                    {f.name}
                  </button>
                ))}
              </div>
            </Field>

            <div style={{display:'flex',gap:8,marginTop:8}}>
              <Btn v="ghost" onClick={() => setStep(1)} style={{flex:1,justifyContent:'center'}}>← 上一步</Btn>
              <Btn onClick={() => setStep(3)} style={{flex:2,justifyContent:'center'}}>下一步：完成 →</Btn>
            </div>
          </div>
        )}

        {/* Step 3: 完成 */}
        {step === 3 && (
          <div className="wfadein" style={{textAlign:'center'}}>
            <div style={{fontSize:40,marginBottom:16}}>💍</div>
            <div style={{fontFamily:FONT_STACK,fontSize:20,letterSpacing:2,marginBottom:8}}>
              準備就緒！
            </div>
            <div style={{color:'#6B6259',fontSize:13,lineHeight:1.8,marginBottom:24}}>
              {form.groomName} & {form.brideName} 的婚禮管理系統即將建立。<br/>
              建立後可隨時在「資訊管理」修改所有設定。
            </div>

            {/* 摘要 */}
            <div style={{...S.card,padding:'14px 18px',textAlign:'left',marginBottom:20,fontSize:12,lineHeight:2}}>
              <div>👫 <strong>{form.groomName} & {form.brideName}</strong></div>
              {form.weddingDate && <div>📅 {form.weddingDate}</div>}
              {form.venue && <div>📍 {form.venue}</div>}
              <div>🎨 {THEMES[form.theme]?.name || '典雅奶油'}</div>
            </div>

            <div style={{display:'flex',gap:8}}>
              <Btn v="ghost" onClick={() => setStep(2)} style={{flex:1,justifyContent:'center'}}>← 修改</Btn>
              <Btn onClick={createWedding} disabled={saving} style={{flex:2,justifyContent:'center'}}>
                {saving ? <><Spinner size={14} color="#FFFEFA"/> 建立中...</> : '✓ 建立我的婚禮'}
              </Btn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


// ============================================================
// DASHBOARD PAGE — 我的婚禮列表
// ============================================================
// ============================================================
// JOIN INVITE — 受邀者接受協作邀請
// ============================================================
function JoinInvitePage({ token, onAccept, onDone, onCancel }) {
  const [status, setStatus] = useState('processing'); // processing | error | success
  const [msg, setMsg] = useState('');
  const [result, setResult] = useState(null);

  useEffect(()=>{
    (async()=>{
      const r = await onAccept(token);
      if(r.needLogin){ setStatus('error'); setMsg('請先登入後再接受邀請'); return; }
      if(r.error){ setStatus('error'); setMsg(r.error); return; }
      setResult(r); setStatus(r.alreadyMember ? 'already' : 'success');
    })();
  },[]);

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#F9F5EF',padding:20}}>
      <div style={{...S.card,padding:'36px 32px',maxWidth:400,width:'100%',textAlign:'center'}}>
        {status==='processing' && <>
          <Spinner size={30}/>
          <div style={{marginTop:14,color:'#9A8F82',fontSize:13}}>正在處理邀請...</div>
        </>}
        {status==='error' && <>
          <div style={{fontSize:32,marginBottom:12}}>⚠️</div>
          <div style={{fontSize:15,marginBottom:18,color:'#3A332B'}}>{msg}</div>
          <Btn onClick={onCancel}>返回</Btn>
        </>}
        {status==='already' && <>
          <div style={{fontSize:32,marginBottom:12}}>👋</div>
          <div style={{fontFamily:FONT_STACK,fontSize:18,letterSpacing:1,marginBottom:8}}>歡迎回來！</div>
          <div style={{fontSize:13,color:'#6B6259',marginBottom:20}}>
            您已是此婚禮的協作成員（{ROLE_LABEL[result?.role]||'協作者'}），可直接進入後台。
          </div>
          <Btn onClick={()=>onDone(result.weddingId)} style={{width:'100%',justifyContent:'center'}}>進入婚禮後台</Btn>
        </>}
        {status==='success' && <>
          <div style={{fontSize:32,marginBottom:12}}>🎉</div>
          <div style={{fontFamily:FONT_STACK,fontSize:18,letterSpacing:1,marginBottom:8}}>成功加入協作！</div>
          <div style={{fontSize:13,color:'#6B6259',marginBottom:20}}>
            您的角色為「{ROLE_LABEL[result?.role]||'協作者'}」
          </div>
          <Btn onClick={()=>onDone(result.weddingId)} style={{width:'100%',justifyContent:'center'}}>進入婚禮後台</Btn>
        </>}
      </div>
    </div>
  );
}


// ============================================================
// PAY RESULT PAGE — 付款完成落地頁（綠界 OrderResultURL 導回此處）
// 路由：#/pay/result  ← Vercel rewrite /pay-result → index.html → hash router 接手
// 流程：輪詢 users/{uid}.proGrant.active（每 2s，最多 30s）→ 成功跳帳戶中心
// ============================================================
function PayResultPage({ user, fbRef }) {
  const [status, setStatus] = React.useState('polling'); // 'polling' | 'success' | 'timeout'
  const [dots,   setDots]   = React.useState('');

  React.useEffect(()=>{
    // 動態省略號動畫
    const dotTimer = setInterval(()=> setDots(d => d.length >= 3 ? '' : d+'.'), 500);
    return ()=> clearInterval(dotTimer);
  },[]);

  React.useEffect(()=>{
    if(!fbRef?.current || !user?.uid) return;
    const db = fbRef.current.db;
    let cancelled = false;
    let tries = 0;
    const MAX = 15; // 最多 15 次 × 2s = 30 秒

    const poll = async () => {
      if(cancelled) return;
      tries++;
      try {
        const snap = await db.collection('users').doc(user.uid).get();
        const pg = snap.exists ? snap.data().proGrant : null;
        if(pg && pg.active){
          if(!cancelled){ setStatus('success'); }
          // 1.5s 後跳帳戶中心
          setTimeout(()=>{ if(!cancelled) navigate('#/dashboard/account'); }, 1500);
          return;
        }
      } catch(e){}
      if(tries >= MAX){ if(!cancelled) setStatus('timeout'); return; }
      setTimeout(poll, 2000);
    };
    poll();
    return ()=>{ cancelled = true; };
  },[fbRef, user?.uid]);

  const S2 = {
    wrap:   { minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#F9F5EF' },
    card:   { background:'#FFFEFA', borderRadius:8, padding:'48px 40px', maxWidth:420, width:'100%',
              boxShadow:'0 2px 24px rgba(0,0,0,.07)', textAlign:'center', border:'1px solid #EDE8E0' },
    icon:   { fontSize:52, marginBottom:20 },
    title:  { fontFamily:FONT_STACK, fontSize:22, letterSpacing:1, color:'#3A332B', marginBottom:10 },
    sub:    { fontSize:13, color:'#9A8F82', lineHeight:1.8, marginBottom:28 },
    badge:  { display:'inline-block', background:'#EFE3D0', color:'#B5895F', borderRadius:20,
              padding:'4px 16px', fontSize:12, fontWeight:600, letterSpacing:1 },
  };

  if(status === 'success') return (
    <div style={S2.wrap}>
      <div style={S2.card}>
        <div style={S2.icon}>🎉</div>
        <div style={S2.title}>Pro 已成功開通！</div>
        <div style={S2.sub}>感謝您的訂閱<br/>正在為您跳轉帳戶中心…</div>
        <div style={S2.badge}>✦ Pro 方案</div>
      </div>
    </div>
  );

  if(status === 'timeout') return (
    <div style={S2.wrap}>
      <div style={S2.card}>
        <div style={S2.icon}>⏳</div>
        <div style={S2.title}>確認中，請稍候</div>
        <div style={S2.sub}>付款已完成，系統正在處理開通<br/>請稍後至帳戶中心確認方案狀態。</div>
        <Btn onClick={()=>navigate('#/dashboard/account')} style={{width:'100%',justifyContent:'center',marginBottom:10}}>
          前往帳戶中心
        </Btn>
        <div style={{fontSize:11,color:'#B8AE9F'}}>若 5 分鐘後仍未開通，請聯絡客服並提供訂單編號。</div>
      </div>
    </div>
  );

  // polling 狀態
  return (
    <div style={S2.wrap}>
      <div style={S2.card}>
        <div style={S2.icon}>💳</div>
        <div style={S2.title}>確認付款中{dots}</div>
        <div style={S2.sub}>正在確認您的付款結果<br/>請勿關閉此頁面</div>
        <Spinner size={24}/>
      </div>
    </div>
  );
}

// ============================================================
// ACCOUNT CENTER — 帳戶中心（方案訂閱 / 安全設定 / 帳戶管理）
// ============================================================
function AccountCenterPage({ user, weddings, fbRef, onChangePassword, onLinkGoogle, onLogoutThisDevice, onDeleteAccount }) {
  const [tab, setTab] = useState('plan');
  // 區分「自有婚禮」vs「協作婚禮」
  const ownedWeddings = weddings.filter(w => w.ownerId === user?.uid);
  const collabWeddings = weddings.filter(w => w.ownerId !== user?.uid);
  const isPureCollab = ownedWeddings.length === 0 && collabWeddings.length > 0;
  const isPro = ownedWeddings.some(w => w.plan === 'pro');
  const providers = user.providerData ? user.providerData.map(p => p.providerId) : [];
  const hasGoogle = providers.includes('google.com');
  const hasPassword = providers.includes('password');

  // ── v6.11.0 付款相關 state ──
  const [planList,    setPlanList]    = useState(_cachedPlans || DEFAULT_PLANS);
  const [selectedPlan,setSelectedPlan]= useState(null);   // 選中的方案物件
  const [couponCode,  setCouponCode]  = useState('');
  const [couponResult,setCouponResult]= useState(null);   // { valid, type, value, ... }
  const [couponErr,   setCouponErr]   = useState('');
  const [couponLoading,setCouponLoading]=useState(false);
  const [paying,      setPaying]      = useState(false);
  const [proGrant,    setProGrant]    = useState(null);   // users/{uid}.proGrant
  const [invoices,    setInvoices]    = useState(null);   // 帳單清單
  const [subDoc,      setSubDoc]      = useState(null);   // 目前訂閱 subscriptions/{tradeNo}
  const [cancelling,  setCancelling]  = useState(false);  // 取消訂閱中

  // 載入 proGrant（onSnapshot 即時監聽，webhook 開通後自動更新 UI）+ 帳單 + 方案
  React.useEffect(()=>{
    if(!fbRef?.current || !user?.uid) return;
    const db = fbRef.current.db;
    // proGrant 用 onSnapshot，付款成功 → webhook 寫 Firestore → 前端即時反映
    const unsub = db.collection('users').doc(user.uid).onSnapshot(snap=>{
      if(snap.exists) setProGrant(snap.data().proGrant || null);
    }, ()=>{});
    // 帳單：改 onSnapshot，短暫離線自動重連補上（舊版一次性 .get() 離線即被 catch 成空）
    const unsubInvoices = db.collection('users').doc(user.uid).collection('invoices')
      .orderBy('paidAt','desc').limit(10)
      .onSnapshot(snap=>{ const list=[]; snap.forEach(d=>list.push(d.data())); setInvoices(list); },
        ()=>setInvoices([]));
    // 方案列表
    pricingDocRef(db).get().then(snap=>{
      if(snap.exists && snap.data()?.plans) setPlanList(snap.data().plans.filter(p=>p.enabled!==false));
    }).catch(()=>{});
    return () => { unsub(); unsubInvoices(); };
  },[fbRef, user?.uid]);

  // 監聽目前訂閱文件（subscriptions/{tradeNo}）→ 判斷 active / cancelled
  React.useEffect(()=>{
    if(!fbRef?.current || !user?.uid || !proGrant?.tradeNo){ setSubDoc(null); return; }
    const db = fbRef.current.db;
    const unsub = db.collection('users').doc(user.uid).collection('subscriptions').doc(proGrant.tradeNo)
      .onSnapshot(snap=>{ setSubDoc(snap.exists ? snap.data() : null); }, ()=>{});
    return () => unsub();
  },[fbRef, user?.uid, proGrant?.tradeNo]);

  // 計算折後價
  const calcFinalPrice = (plan, cr) => {
    if(!plan) return 0;
    if(!cr || !cr.valid) return plan.price;
    if(cr.type==='percent') return Math.round(plan.price*(1-cr.value/100));
    return Math.max(1, plan.price - cr.value);
  };

  const handleValidateCoupon = async () => {
    const code = couponCode.trim().toUpperCase();
    if(!code){ setCouponErr('請輸入優惠碼'); return; }
    if(!fbRef?.current){ setCouponErr('系統初始化中，請稍後再試'); return; }
    setCouponLoading(true); setCouponErr(''); setCouponResult(null);
    try {
      const fn = fbRef.current.functions.httpsCallable('validateCoupon');
      const res = await fn({ code, planId: selectedPlan?.id });
      setCouponResult(res.data);
    } catch(e) {
      // Firebase Functions 錯誤格式：e.message 可能含 "code: " 前綴，取後半段
      const raw = e.message || '優惠碼無效，請確認後再試';
      const msg = raw.includes(': ') ? raw.split(': ').slice(1).join(': ') : raw;
      setCouponErr(msg);
    } finally { setCouponLoading(false); }
  };

  const handlePay = async () => {
    if(!selectedPlan){ uiAlert('請先選擇方案'); return; }
    if(!fbRef?.current){ uiAlert('系統初始化中，請稍後再試'); return; }
    // 防呆：輸入了優惠碼但尚未按「套用」驗證 → 先確認，避免誤以原價結帳
    const typedCoupon = couponCode.trim();
    if(typedCoupon && !couponResult?.valid){
      if(!await uiConfirm({
        title:'優惠碼尚未套用',
        message:`你輸入了優惠碼「${typedCoupon}」但還沒按「套用」驗證，將以原價結帳。\n\n要先回去套用優惠碼嗎？`,
        confirmText:'仍以原價付款', cancelText:'先去套用',
      })) return;
    }
    if(!await uiConfirm({
      title:'確認付款',
      message:`方案：${selectedPlan.name}\n金額：NT$${calcFinalPrice(selectedPlan, couponResult)}${couponResult?.valid?' （已套用優惠碼）':''}\n\n點擊「前往付款」將跳轉至綠界付款頁面。`,
      confirmText:'前往付款', cancelText:'取消',
    })) return;
    setPaying(true);
    try {
      const fn = fbRef.current.functions.httpsCallable('createSubscription');
      const res = await fn({ planId: selectedPlan.id, couponCode: couponResult?.valid ? couponCode.trim().toUpperCase() : null });
      const { actionURL, params } = res.data;
      // 建立並送出表單
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = actionURL;
      form.enctype = 'application/x-www-form-urlencoded';
      form.acceptCharset = 'UTF-8';
      Object.entries(params).forEach(([k,v])=>{
        const inp = document.createElement('input');
        inp.type = 'hidden'; inp.name = k; inp.value = String(v);
        form.appendChild(inp);
      });
      document.body.appendChild(form);
      form.submit();
    } catch(e) {
      const raw = e.message || '請稍後再試';
      const msg = raw.includes(': ') ? raw.split(': ').slice(1).join(': ') : raw;
      uiAlert('付款失敗\n\n' + msg);
      setPaying(false);
    }
  };

  const handleCancel = async () => {
    if(!fbRef?.current){ uiAlert('系統初始化中，請稍後再試'); return; }
    if(!await uiConfirm({
      title:'取消訂閱',
      message:`取消後將停止下一期扣款，Pro 功能仍可使用至 ${expiresStr || '到期日'}，期間不受影響；到期後自動轉為免費版。\n\n（綠界定期定額一經取消即無法重新啟用，需重新訂閱。）\n\n確定要取消訂閱嗎？`,
      confirmText:'確定取消', cancelText:'再想想',
    })) return;
    setCancelling(true);
    try {
      const fn = fbRef.current.functions.httpsCallable('cancelSubscription');
      await fn({});
      uiAlert(`已取消訂閱\n\nPro 功能將使用至 ${expiresStr || '到期日'}，到期後不再扣款。`);
      // subscriptions onSnapshot + proGrant onSnapshot 會自動更新畫面
    } catch(e) {
      const raw = e.message || '請稍後再試';
      const msg = raw.includes(': ') ? raw.split(': ').slice(1).join(': ') : raw;
      uiAlert('取消失敗\n\n' + msg);
    } finally { setCancelling(false); }
  };

  const tabs = [
    { id: 'plan',     label: '方案與訂閱' },
    { id: 'security', label: '安全設定' },
    { id: 'account',  label: '帳戶管理' },
  ];

  const expiresStr = proGrant?.expiresAt
    ? new Date(proGrant.expiresAt).toLocaleDateString('zh-TW',{year:'numeric',month:'long',day:'numeric'})
    : null;

  // ── v6.13.0 訂閱狀態 ──
  const _now        = Date.now();
  const isExpired   = !!(proGrant?.expiresAt && proGrant.expiresAt < _now);
  const isEcpaySub  = proGrant?.source === 'ecpay' && !!proGrant?.tradeNo;
  const subStatus   = subDoc?.status || null;                       // active / cancelled / pending
  const isCancelled = subStatus === 'cancelled' || proGrant?.autoRenew === false;
  // 顯示用方案狀態：expired（已過期，排程降級前的寬限窗）/ cancelled / active / free
  const planView = !isPro ? 'free'
                 : isExpired ? 'expired'
                 : isCancelled ? 'cancelled'
                 : 'active';
  const canCancel = isPro && isEcpaySub && subStatus === 'active' && !isCancelled && !isExpired;

  return (
    <div style={{maxWidth:720,margin:'0 auto',padding:'40px 20px'}}>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,letterSpacing:6,color:'#B5895F'}}>
        ACCOUNT
      </div>
      <div style={{fontFamily:FONT_STACK,fontSize:24,letterSpacing:1,marginTop:2,marginBottom:24}}>帳戶中心</div>

      <div style={{display:'flex',gap:4,borderBottom:'1px solid #E5DDD0',marginBottom:24}}>
        {tabs.map(t => (
          <button key={t.id} onClick={()=>setTab(t.id)}
            style={{padding:'8px 16px',fontSize:13,cursor:'pointer',
              color: tab===t.id?'#3A332B':'#9A8F82',
              fontWeight: tab===t.id?600:400,
              borderBottom: tab===t.id?'2px solid #B5895F':'2px solid transparent',
              marginBottom:-1}}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'plan' && (
        <div>
          {isPureCollab ? (
            <div style={{...S.card,padding:'24px 26px',marginBottom:16}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:16}}>
                <div>
                  <div style={{fontSize:12,color:'#9A8F82',letterSpacing:1,marginBottom:4}}>帳號類型</div>
                  <div style={{fontFamily:FONT_STACK,fontSize:20,letterSpacing:1}}>協作帳號</div>
                </div>
                <Tag small color='#7BA77B' soft='#EEF5EE'>協作中</Tag>
              </div>
              <div style={{height:1,background:'#F0EBE3',marginBottom:16}} />
              <div style={{fontSize:13,color:'#6B6259',lineHeight:2,marginBottom:14}}>
                您目前以協作身份參與 {collabWeddings.length} 個婚禮專案，方案費用由各婚禮主辦方帳號管理。
              </div>
              <div style={{padding:'12px 16px',background:'#F9F5EF',borderRadius:3,fontSize:12,color:'#9A8F82',lineHeight:1.8}}>
                如需自行建立婚禮專案，可使用本帳號新增（免費版最多 {FREE_PROJECT_LIMIT} 個）。
              </div>
            </div>
          ) : (
            <>
              {/* ── 目前方案卡 ── */}
              <div style={{...S.card,padding:'24px 26px',marginBottom:16}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                  <div>
                    <div style={{fontSize:12,color:'#9A8F82',letterSpacing:1,marginBottom:4}}>目前方案</div>
                    <div style={{fontFamily:FONT_STACK,fontSize:22,letterSpacing:1}}>
                      {isPro ? '✦ Pro 方案' : '免費版'}
                    </div>
                  </div>
                  <Tag small
                    color={planView==='active'?'#B5895F':planView==='cancelled'?'#C08A3E':planView==='expired'?'#C04040':'#9A8F82'}
                    soft={planView==='active'?'#EFE3D0':planView==='cancelled'?'#F6ECD9':planView==='expired'?'#FAEEEE':'#F0EBE3'}>
                    {planView==='active'?'已訂閱':planView==='cancelled'?'已取消':planView==='expired'?'已到期':'Free'}
                  </Tag>
                </div>
                <div style={{height:1,background:'#F0EBE3',margin:'18px 0'}} />
                <div style={{fontSize:13,color:'#6B6259',lineHeight:2}}>
                  {planView==='free' ? (
                    <>
                      <div>• 最多 {FREE_PROJECT_LIMIT} 個婚禮專案</div>
                      <div>• 排位 {FREE_TABLE_LIMIT} 桌 · {FREE_SEAT_LIMIT} 人</div>
                      <div>• 名單／排位匯出為 Pro 功能</div>
                    </>
                  ) : (
                    <>
                      <div>✓ 無限婚禮專案・無限桌數・匯出功能</div>
                      {planView==='active' && (
                        <>
                          {expiresStr && <div style={{color:'#B5895F',marginTop:4}}>訂閱中，有效至：{expiresStr}</div>}
                          {!isEcpaySub && <div style={{color:'#9A8F82',marginTop:4,fontSize:12}}>（由平台手動開通）</div>}
                          {canCancel && (
                            <div style={{marginTop:14}}>
                              <Btn v="red" size="sm" onClick={handleCancel} disabled={cancelling}>
                                {cancelling ? '取消中…' : '取消訂閱'}
                              </Btn>
                            </div>
                          )}
                        </>
                      )}
                      {planView==='cancelled' && (
                        <div style={{color:'#C08A3E',marginTop:6,fontSize:12.5,lineHeight:1.9}}>
                          已取消訂閱，Pro 功能將使用至 {expiresStr || '到期日'}，到期後不再扣款、自動轉為免費版。
                        </div>
                      )}
                      {planView==='expired' && (
                        <div style={{color:'#C04040',marginTop:6,fontSize:12.5,lineHeight:1.9}}>
                          訂閱已於 {expiresStr || '日前'} 到期，系統將自動調整為免費版。
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* ── 升級區塊（未訂閱才顯示）── */}
              {!isPro && (
                <div style={{...S.card,padding:'24px 26px',marginBottom:16}}>
                  <div style={{fontFamily:FONT_STACK,fontSize:15,letterSpacing:.5,marginBottom:16}}>升級 Pro 方案</div>

                  {/* 方案卡片 */}
                  <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:18}}>
                    {planList.filter(p=>p.enabled!==false).sort((a,b)=>(a.sortOrder||0)-(b.sortOrder||0)).map(p=>{
                      const sel = selectedPlan?.id===p.id;
                      return (
                        <div key={p.id} onClick={()=>{ setSelectedPlan(p); setCouponResult(null); setCouponCode(''); setCouponErr(''); }}
                          style={{border:`2px solid ${sel?'#B5895F':'#E5DDD0'}`,borderRadius:6,padding:'14px 16px',
                            cursor:'pointer',background:sel?'#FBF7F2':'#FFFEFA',transition:'border .15s'}}>
                          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:8}}>
                            <div style={{display:'flex',alignItems:'center',gap:8}}>
                              <div style={{width:16,height:16,borderRadius:'50%',border:`2px solid ${sel?'#B5895F':'#D5C9BE'}`,
                                background:sel?'#B5895F':'transparent',flexShrink:0}} />
                              <span style={{fontSize:14,color:'#3A332B',fontWeight:sel?600:400}}>{p.name}</span>
                              {p.badge && <span style={{fontSize:10,color:'#B5895F',background:'#F3E9DD',padding:'1px 7px',borderRadius:10}}>{p.badge}</span>}
                            </div>
                            <div style={{display:'flex',alignItems:'baseline',gap:6}}>
                              {p.originalPrice>0 && p.originalPrice>p.price &&
                                <span style={{fontSize:12,color:'#B8AE9F',textDecoration:'line-through'}}>NT${p.originalPrice}</span>}
                              <span style={{fontSize:18,color:'#B5895F',fontWeight:700}}>NT${p.price}</span>
                              <span style={{fontSize:11,color:'#9A8F82'}}>/{PERIOD_LABELS[p.period]||p.period}
                                {p.bonusMonths>0?`（送${p.bonusMonths}個月）`:''}</span>
                            </div>
                          </div>
                          {p.note && <div style={{fontSize:11,color:'#9A8F82',marginTop:6,marginLeft:24}}>{p.note}</div>}
                        </div>
                      );
                    })}
                  </div>

                  {/* 優惠碼 */}
                  {selectedPlan && (
                    <div style={{marginBottom:16}}>
                      <div style={{fontSize:12,color:'#9A8F82',marginBottom:6}}>優惠碼（選填）</div>
                      <div style={{display:'flex',gap:8}}>
                        <input value={couponCode} placeholder="例：WEDDING20"
                          onChange={e=>{ setCouponCode(e.target.value.toUpperCase()); setCouponResult(null); setCouponErr(''); }}
                          style={{flex:1,padding:'8px 12px',borderRadius:3,border:`1px solid ${couponResult?.valid?'#7BA77B':couponErr?'#C04060':'#E5DDD0'}`,
                            fontFamily:'monospace',fontSize:13,background:'#FFFEFA',color:'#3A332B',letterSpacing:1}} />
                        <Btn v="gold" size="sm" onClick={handleValidateCoupon} disabled={couponLoading}>
                          {couponLoading?'驗證中…':'套用'}
                        </Btn>
                      </div>
                      {couponResult?.valid && (
                        <div style={{marginTop:6,fontSize:12,color:'#5B8C5A',display:'flex',alignItems:'center',gap:6}}>
                          ✓ 優惠碼有效：
                          {couponResult.type==='percent'?`折抵 ${couponResult.value}%`:`折抵 NT$${couponResult.value}`}
                          {couponResult.note && ` · ${couponResult.note}`}
                        </div>
                      )}
                      {couponErr && <div style={{marginTop:6,fontSize:12,color:'#C04060'}}>{couponErr}</div>}
                    </div>
                  )}

                  {/* 金額摘要 + 付款按鈕 */}
                  {selectedPlan && (
                    <div style={{borderTop:'1px solid #F0EBE3',paddingTop:16}}>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
                        <div style={{fontSize:13,color:'#6B6259'}}>
                          {selectedPlan.name}
                          {couponResult?.valid && <span style={{color:'#5B8C5A'}}> · 優惠碼 {couponCode}</span>}
                        </div>
                        <div style={{display:'flex',alignItems:'baseline',gap:6}}>
                          {couponResult?.valid && selectedPlan.price !== calcFinalPrice(selectedPlan, couponResult) &&
                            <span style={{fontSize:12,color:'#B8AE9F',textDecoration:'line-through'}}>NT${selectedPlan.price}</span>}
                          <span style={{fontSize:20,color:'#B5895F',fontWeight:700}}>NT${calcFinalPrice(selectedPlan, couponResult)}</span>
                        </div>
                      </div>
                      <Btn onClick={handlePay} disabled={paying} style={{width:'100%',justifyContent:'center'}}>
                        {paying ? '跳轉中…' : '前往付款 →'}
                      </Btn>
                      <div style={{fontSize:11,color:'#9A8F82',textAlign:'center',marginTop:10,lineHeight:1.7}}>
                        付款由綠界科技（ECPay）安全處理・支援信用卡定期定額
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── 帳單歷史 ── */}
              <div style={{...S.card,padding:'24px 26px'}}>
                <div style={{fontFamily:FONT_STACK,fontSize:15,letterSpacing:.5,marginBottom:14}}>帳單歷史</div>
                {invoices === null ? (
                  <div style={{textAlign:'center',padding:'20px 0'}}><Spinner size={20}/></div>
                ) : invoices.length === 0 ? (
                  <div style={{textAlign:'center',padding:'28px 0',color:'#9A8F82',fontSize:13}}>
                    <div style={{fontSize:28,marginBottom:8}}>🧾</div>尚無付費記錄
                  </div>
                ) : (
                  <div>
                    {invoices.map((inv,i)=>(
                      <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',
                        padding:'10px 0',borderBottom:'1px solid #F0EBE3',fontSize:13}}>
                        <div>
                          <div style={{color:'#3A332B'}}>{inv.planName}</div>
                          <div style={{fontSize:11,color:'#9A8F82',marginTop:2}}>
                            {inv.paidAt ? new Date(inv.paidAt).toLocaleDateString('zh-TW') : ''}
                            {inv.tradeNo ? ` · ${inv.tradeNo}` : ''}
                          </div>
                        </div>
                        <div style={{color:'#B5895F',fontWeight:600}}>NT${inv.amount}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {collabWeddings.length > 0 && (
                <div style={{...S.card,padding:'20px 26px',marginTop:16,background:'#FAFAF7'}}>
                  <div style={{fontSize:12,color:'#9A8F82',letterSpacing:.5,marginBottom:10}}>
                    您也在協作的婚禮（費用由主辦方管理）
                  </div>
                  {collabWeddings.map(w=>(
                    <div key={w.weddingId} style={{display:'flex',justifyContent:'space-between',
                      fontSize:13,color:'#3A332B',padding:'5px 0',borderBottom:'1px solid #F0EBE3'}}>
                      <span>{w.config?.groomName||''} & {w.config?.brideName||''}</span>
                      <span style={{color:'#9A8F82',fontSize:11}}>{ROLE_LABEL[w.myRole]||'協作者'}</span>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}

      {tab === 'security' && (
        <div>
          <div style={{...S.card,padding:'24px 26px',marginBottom:16}}>
            <div style={{fontFamily:FONT_STACK,fontSize:15,letterSpacing:.5,marginBottom:6}}>修改密碼</div>
            <div style={{fontSize:12,color:'#9A8F82',marginBottom:14,lineHeight:1.7}}>
              系統會寄出密碼重設連結至您的 Email：{user.email}
            </div>
            {hasPassword ? (
              <Btn v="ghost" onClick={onChangePassword}>寄出密碼重設信件</Btn>
            ) : (
              <div style={{fontSize:12,color:'#9A8F82',padding:'8px 12px',background:'#F9F5EF',borderRadius:3}}>
                您使用 Google 登入，密碼由 Google 管理
              </div>
            )}
          </div>

          <div style={{...S.card,padding:'24px 26px',marginBottom:16}}>
            <div style={{fontFamily:FONT_STACK,fontSize:15,letterSpacing:.5,marginBottom:6}}>登入方式</div>
            <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:12}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:13}}>
                <span>📧 Email / 密碼</span>
                <span style={{color:hasPassword?'#7BA77B':'#C9C0B4'}}>{hasPassword?'已啟用':'未使用'}</span>
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:13}}>
                <span>🔵 Google 帳號</span>
                {hasGoogle
                  ? <span style={{color:'#7BA77B'}}>已連結</span>
                  : <button onClick={onLinkGoogle} style={{color:'#B5895F',fontSize:12,textDecoration:'underline',cursor:'pointer'}}>連結</button>}
              </div>
            </div>
          </div>

          <div style={{...S.card,padding:'24px 26px'}}>
            <div style={{fontFamily:FONT_STACK,fontSize:15,letterSpacing:.5,marginBottom:6}}>裝置與工作階段</div>
            <div style={{fontSize:12,color:'#9A8F82',marginBottom:14,lineHeight:1.7}}>
              登出目前裝置。如需登出其他所有裝置，請修改密碼，所有 session 將自動失效。
            </div>
            <Btn v="ghost" onClick={onLogoutThisDevice}>登出目前裝置</Btn>
          </div>
        </div>
      )}

      {tab === 'account' && (
        <div>
          <div style={{...S.card,padding:'24px 26px',marginBottom:16}}>
            <div style={{fontFamily:FONT_STACK,fontSize:15,letterSpacing:.5,marginBottom:12}}>帳號資訊</div>
            <div style={{fontSize:13,color:'#6B6259',lineHeight:2}}>
              <div>Email：<strong>{user.email}</strong></div>
              <div>登入方式：{[hasGoogle&&'Google',hasPassword&&'Email/密碼'].filter(Boolean).join('、') || '—'}</div>
            </div>
          </div>

          <div style={{...S.card,padding:'24px 26px',border:'1px solid #EECDD6'}}>
            <div style={{fontFamily:FONT_STACK,fontSize:15,letterSpacing:.5,marginBottom:6,color:'#C04060'}}>
              刪除帳戶
            </div>
            <div style={{fontSize:12,color:'#9A8F82',marginBottom:14,lineHeight:1.7}}>
              永久刪除您的帳戶及所有婚禮資料，此操作無法復原。
            </div>
            <button onClick={onDeleteAccount}
              style={{padding:'9px 18px',borderRadius:3,border:'1px solid #C04060',
                background:'#FDF5F7',color:'#C04060',fontSize:13,cursor:'pointer',fontFamily:FONT_STACK}}>
              永久刪除帳戶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


function DashboardPage({ user, weddings, onSelectWedding, onCreateNew, onDeleteWedding, onDuplicateWedding, onLogout, activeTab, onTabChange, accountProps }) {
  const isPro = weddings.some(w => w.plan === 'pro');
  const atLimit = !isPro && weddings.length >= FREE_PROJECT_LIMIT;

  const handleDuplicate = (e, w) => {
    e.stopPropagation();
    if (onDuplicateWedding) onDuplicateWedding(w);
  };

  const handleDelete = async (e, w) => {
    e.stopPropagation();
    const name = w.config?.groomName && w.config?.brideName
      ? `${w.config.groomName} & ${w.config.brideName}`
      : '此婚禮';
    const ok = await uiConfirm({
      title: `刪除「${name}」？`,
      message: '此操作將永久刪除所有賓客名單、排位規劃、婚紗照片及相關資料，無法復原。\n\n確定要繼續嗎？',
      confirmText: '確定刪除',
      cancelText: '取消',
      danger: true,
    });
    if (ok) onDeleteWedding(w.weddingId);
  };

  const TopNav = () => (
    <nav style={{background:'#FFFEFA',borderBottom:'1px solid #E5DDD0',padding:'14px 24px',
      display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div style={{display:'flex',alignItems:'center',gap:28}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,letterSpacing:4,color:'#B5895F'}}>
          Wedding
        </div>
        {/* Tab 切換 */}
        <div style={{display:'flex',gap:4}}>
          <button onClick={()=>onTabChange('weddings')}
            style={{padding:'6px 14px',fontSize:13,letterSpacing:.5,cursor:'pointer',
              color: activeTab==='weddings'?'#3A332B':'#9A8F82',
              fontWeight: activeTab==='weddings'?600:400,
              borderBottom: activeTab==='weddings'?'2px solid #B5895F':'2px solid transparent'}}>
            我的婚禮
          </button>
          <button onClick={()=>onTabChange('account')}
            style={{padding:'6px 14px',fontSize:13,letterSpacing:.5,cursor:'pointer',
              color: activeTab==='account'?'#3A332B':'#9A8F82',
              fontWeight: activeTab==='account'?600:400,
              borderBottom: activeTab==='account'?'2px solid #B5895F':'2px solid transparent'}}>
            帳戶中心
          </button>
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:14}}>
        <span style={{fontSize:12,color:'#9A8F82'}}>{user.email}</span>
        {isPlatformAdmin(user) && (
          <Btn v="ghost" size="sm" onClick={()=>{ window.location.hash = '#/dev'; }}>🛠 開發者後台</Btn>
        )}
        <Btn v="ghost" size="sm" onClick={onLogout}>登出</Btn>
      </div>
    </nav>
  );

  // 帳戶中心 Tab
  if (activeTab === 'account') {
    return (
      <div style={{minHeight:'100vh',background:'#F9F5EF'}}>
        <TopNav />
        <AccountCenterPage user={user} weddings={weddings} {...accountProps} />
      </div>
    );
  }

  // 我的婚禮 Tab（預設）
  return (
    <div style={{minHeight:'100vh',background:'#F9F5EF'}}>
      <TopNav />
      <div style={{maxWidth:720,margin:'0 auto',padding:'40px 20px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:16}}>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,letterSpacing:6,color:'#B5895F'}}>
              MY WEDDINGS
            </div>
            <div style={{fontFamily:FONT_STACK,fontSize:24,letterSpacing:1,marginTop:2}}>我的婚禮</div>
          </div>
          {atLimit ? (
            <div style={{textAlign:'right'}}>
              <div style={{padding:'8px 14px',background:'#F5F0E8',border:'1px solid #E5DDD0',
                borderRadius:3,fontSize:12,color:'#9A8F82',cursor:'default'}}>
                🔒 免費版限 {FREE_PROJECT_LIMIT} 個專案
              </div>
              <div style={{fontSize:11,color:'#B5895F',marginTop:4,cursor:'pointer',textDecoration:'underline'}}
                onClick={()=>uiProUpgrade('您已達免費版上限（2 個婚禮專案）')}>
                升級解鎖 →
              </div>
            </div>
          ) : (
            <Btn onClick={onCreateNew}>＋ 新增婚禮</Btn>
          )}
        </div>

        {/* 免費版使用說明 */}
        {!isPro && (
          <div style={{padding:'10px 14px',background:'#FFF8F0',border:'1px solid #F0DFC0',
            borderRadius:3,fontSize:12,color:'#7A5C00',marginBottom:20,lineHeight:1.7}}>
            💡 <strong>免費版限制：</strong>最多 {FREE_PROJECT_LIMIT} 個婚禮專案・排位 {FREE_TABLE_LIMIT} 桌 {FREE_SEAT_LIMIT} 人・匯出為 Pro 功能
            <span style={{color:'#B5895F',marginLeft:8,cursor:'pointer',textDecoration:'underline'}}
              onClick={()=>uiProUpgrade()}>
              了解 Pro 方案 →
            </span>
          </div>
        )}

        {weddings.length === 0 ? (
          <div style={{...S.card,padding:'48px 24px',textAlign:'center'}}>
            <div style={{fontSize:36,marginBottom:12}}>💍</div>
            <div style={{fontFamily:FONT_STACK,fontSize:16,letterSpacing:1,marginBottom:8}}>還沒有婚禮</div>
            <div style={{color:'#9A8F82',fontSize:13,marginBottom:20}}>點擊下方按鈕開始建立您的婚禮</div>
            <Btn onClick={onCreateNew} size="lg">開始建立婚禮</Btn>
          </div>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {weddings.map(w => (
              <div key={w.weddingId} style={{...S.card,padding:'18px 20px',display:'flex',
                alignItems:'center',justifyContent:'space-between',cursor:'pointer',
                transition:'box-shadow .15s'}}
                onClick={() => onSelectWedding(w.weddingId)}>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontFamily:FONT_STACK,fontSize:16,letterSpacing:.5}}>
                    {w.config?.groomName && w.config?.brideName
                      ? `${w.config.groomName} & ${w.config.brideName}`
                      : '婚禮'}
                  </div>
                  {w.config?.weddingDate && (
                    <div style={{fontSize:12,color:'#9A8F82',marginTop:2}}>{w.config.weddingDate}</div>
                  )}
                  {w.config?.venue && (
                    <div style={{fontSize:12,color:'#9A8F82'}}>{w.config.venue}</div>
                  )}
                </div>
                <div style={{display:'flex',alignItems:'center',gap:10,flexShrink:0}}>
                  <Tag small color="#B5895F" soft="#EFE3D0">
                    {w.plan === 'pro' ? '✦ Pro' : '免費版'}
                  </Tag>
                  {/* 複製 RSVP 邀請連結 */}
                  <button onClick={e=>{
                    e.stopPropagation();
                    const link = `${window.location.origin}${window.location.pathname}#/w/${w.weddingId}`;
                    try { navigator.clipboard.writeText(link); uiAlert('✓ 邀請連結已複製！\n\n' + link); }
                    catch { uiAlert('邀請連結：\n' + link); }
                  }} style={{padding:'5px 10px',borderRadius:2,border:'1px solid #E5DDD0',
                    background:'#F9F5EF',color:'#6B6259',fontSize:11,cursor:'pointer',fontFamily:FONT_STACK}}
                    title="複製賓客邀請連結">
                    🔗 邀請連結
                  </button>
                  <button onClick={e=>handleDuplicate(e,w)}
                    style={{padding:'5px 10px',borderRadius:2,border:'1px solid #E5DDD0',
                      background:'#F9F5EF',color:'#6B6259',fontSize:11,cursor:'pointer',fontFamily:FONT_STACK}}
                    title="複製此專案（設定／主題／桌位排版）">
                    ⧉ 複製
                  </button>
                  <button onClick={e=>handleDelete(e,w)}
                    style={{padding:'5px 10px',borderRadius:2,border:'1px solid #EECDD6',
                      background:'#FDF5F7',color:'#C04060',fontSize:11,cursor:'pointer',
                      fontFamily:FONT_STACK}}
                    title="刪除此婚禮">
                    刪除
                  </button>
                  <span style={{color:'#B5895F',fontSize:18}}>›</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


// ============================================================
// APP SHELL — SaaS chrome 頁面（登入／向導／Dashboard／帳戶中心／邀請）的統一外殼
// 確保這些頁面與婚禮後台一樣：(1) 包在 .wed 內 → 套用全域字體與按鈕重置
// (2) 掛載 ConfirmDialogHost → uiAlert/uiConfirm/uiProUpgrade 走系統浮窗而非原生 alert
// (3) 強制重設為奶油主題 → 避免從深色主題婚禮返回時被殘留的主題 CSS 染色
// ============================================================
function AppShell({ children }) {
  // 同步清除主題：渲染前就執行（不等 useEffect），避免登入頁/Dashboard 閃現殘留主題
  const cleared = React.useRef(false);
  if (!cleared.current && typeof document !== 'undefined') {
    cleared.current = true;
    try { applyTheme(null); document.body.style.background = '#F9F5EF'; } catch {}
  }
  React.useEffect(() => { applyTheme(null); document.body.style.background = '#F9F5EF'; }, []);
  return (
    <div className="wed" style={{ minHeight:'100vh', background:'#F9F5EF' }}>
      <ConfirmDialogHost />
      {children}
    </div>
  );
}

// ============================================================
// DEV CONSOLE — 開發者後台（v6.8.0）
// 只有 PLATFORM_ADMIN_EMAILS 內的帳號可進入（前端 gate + Firestore 規則雙重把關）。
// 功能：總覽所有使用者帳號、手動開通/移除 Pro、刪除帳號資料、查看付款紀錄(待金流)。
// 註：刪除「真正的 Firebase 登入帳號」需 Cloud Functions + Admin SDK（階段 B），此處只刪 Firestore 資料。
// ============================================================
function DevConsolePage({ user, fbRef, onBack }) {
  const [loading, setLoading]   = React.useState(true);
  const [accounts, setAccounts] = React.useState([]);   // [{uid,email,displayName,weddingIds,proGrant,updatedAt,weddings:[...]}]
  const [search, setSearch]     = React.useState('');
  const [busy, setBusy]         = React.useState('');    // 正在處理的 uid
  const [payView, setPayView]   = React.useState(null);  // 查看付款紀錄的帳號
  const [tab, setTab]           = React.useState('accounts');  // v6.9.0 'accounts' | 'pricing' | 'coupons'
  const [plans, setPlans]       = React.useState(null);  // 方案陣列（null=載入中）
  const [pricingSaving, setPricingSaving] = React.useState(false);
  const [expandedPlan, setExpandedPlan] = React.useState(null);  // v6.10.0 展開編輯中的方案 idx
  const [coupons, setCoupons]   = React.useState(null);  // v6.10.0 優惠碼陣列（null=載入中）
  const [couponsSaving, setCouponsSaving] = React.useState(false);
  const [expandedCoupon, setExpandedCoupon] = React.useState(null);

  const load = React.useCallback(async () => {
    if (!fbRef.current) return;
    setLoading(true);
    try {
      const fb = fbRef.current;
      const [usersSnap, wedSnap] = await Promise.all([
        fb.db.collection('users').get(),
        fb.db.collection('weddings').get(),
      ]);
      // 婚禮依 ownerId 分組；config（新人姓名）存在子文件 data/main，需各自補讀（並行）
      const weds = await Promise.all(wedSnap.docs.map(async d => {
        const base = { weddingId: d.id, ...d.data() };
        try {
          const main = await mainDocRef(fb.db, d.id).get();
          if (main.exists && main.data() && main.data().config) base.config = main.data().config;
        } catch (_) {}
        return base;
      }));
      const byOwner = {};
      weds.forEach(w => { (byOwner[w.ownerId] = byOwner[w.ownerId] || []).push(w); });
      const list = [];
      usersSnap.forEach(d => {
        const u = d.data() || {};
        list.push({
          uid: d.id,
          email: u.email || '(無 email)',
          displayName: u.displayName || '',
          weddingIds: u.weddingIds || [],
          proGrant: u.proGrant || null,
          updatedAt: u.updatedAt || 0,
          weddings: byOwner[d.id] || [],
        });
      });
      list.sort((a,b) => (b.updatedAt||0) - (a.updatedAt||0));
      setAccounts(list);
    } catch (e) {
      uiAlert('載入失敗：' + e.message + '\n\n（若為權限錯誤，請確認 firestore.rules 已允許 admin 跨帳號讀取 users / weddings）');
    } finally { setLoading(false); }
  }, [fbRef]);

  React.useEffect(() => { load(); }, [load]);

  const isAccPro = (a) => !!(a.proGrant && a.proGrant.active) || a.weddings.some(w => w.plan === 'pro');

  const grantPro = async (a, active) => {
    if (!fbRef.current) return;
    const verb = active ? '開通' : '移除';
    if (a.uid === user.uid) {
      uiAlert(`無法透過後台對自己的帳號${verb} Pro。\n\n請直接在 Firebase Console → Firestore → users/${a.uid} 手動修改 proGrant 欄位。`);
      return;
    }
    if (!await uiConfirm({
      title: `${verb} Pro`,
      message: `確定要為帳號「${a.email}」${verb} Pro 嗎？\n\n此帳號目前有 ${a.weddings.length} 個婚禮專案，將一併${active?'升級為':'降回'}${active?'Pro':'免費版'}。`,
      confirmText: verb, cancelText: '取消',
    })) return;
    setBusy(a.uid);
    try {
      const fb = fbRef.current;
      // 帳號級旗標（未來金流 webhook 也寫同一處）
      await fb.db.collection('users').doc(a.uid).set({
        proGrant: { active, source: 'manual', grantedBy: user.email || user.uid, grantedAt: Date.now() }
      }, { merge: true });
      // 同步該帳號所有婚禮的 plan（讓既有 isPro 邏輯立即生效）
      await Promise.all(a.weddingIds.map(wid =>
        weddingDoc(fb.db, wid).update({ plan: active ? 'pro' : 'free' }).catch(()=>{})
      ));
      await load();
      uiAlert(`✓ 已${verb} Pro：${a.email}`);
    } catch (e) {
      uiAlert(`${verb}失敗：` + e.message);
    } finally { setBusy(''); }
  };

  const deleteData = async (a) => {
    if (!fbRef.current) return;
    // v6.8.4：防止管理員刪除自己的帳號資料
    if (a.uid === user.uid) {
      uiAlert('無法刪除目前登入的管理員帳號。\n\n如需刪除自己的資料，請先用另一個管理員帳號登入後操作。');
      return;
    }
    if (!await uiConfirm({
      title: '刪除帳號資料',
      message: `將永久刪除「${a.email}」的 ${a.weddings.length} 個婚禮專案與使用者資料（無法復原）。\n\n⚠️ 此操作不會刪除其 Firebase 登入帳號（需 Cloud Functions，階段 B）。\n\n確定繼續？`,
      confirmText: '永久刪除', cancelText: '取消', danger: true,
    })) return;
    setBusy(a.uid);
    try {
      const fb = fbRef.current;
      await Promise.all(a.weddingIds.map(wid => weddingDoc(fb.db, wid).delete().catch(()=>{})));
      await fb.db.collection('users').doc(a.uid).delete().catch(()=>{});
      await load();
      uiAlert(`✓ 已刪除「${a.email}」的所有 Firestore 資料`);
    } catch (e) {
      uiAlert('刪除失敗\n\n' + firestoreErrMsg(e));
    } finally { setBusy(''); }
  };

  // ── v6.9.0 方案與定價管理 ──
  const loadPricing = React.useCallback(async () => {
    if (!fbRef.current) return;
    try {
      const snap = await pricingDocRef(fbRef.current.db).get();
      if (snap.exists && snap.data() && Array.isArray(snap.data().plans)) {
        setPlans(snap.data().plans);
      } else {
        setPlans(DEFAULT_PLANS.map(p=>({...p})));  // 尚未設定 → 帶入預設供編輯
      }
    } catch (e) {
      uiAlert('載入定價失敗\n\n' + firestoreErrMsg(e));
      setPlans(DEFAULT_PLANS.map(p=>({...p})));
    }
  }, [fbRef]);

  React.useEffect(() => { if (tab === 'pricing' && plans === null) loadPricing(); }, [tab, plans, loadPricing]);

  const savePricing = async () => {
    if (!fbRef.current || !plans) return;
    // 基本驗證
    for (const p of plans) {
      if (!p.id || !p.name) { uiAlert('每個方案都需要「方案代碼」與「名稱」'); return; }
      if (!(p.price >= 0)) { uiAlert(`方案「${p.name}」的售價需為 0 或正整數`); return; }
    }
    const ids = plans.map(p=>p.id);
    if (new Set(ids).size !== ids.length) { uiAlert('方案代碼（id）不可重複'); return; }
    setPricingSaving(true);
    try {
      await pricingDocRef(fbRef.current.db).set({
        plans, updatedAt: Date.now(), updatedBy: user.email || user.uid,
      }, { merge: true });
      _cachedPlans = plans;  // 立即同步前台浮窗快取
      uiAlert('✓ 方案與定價已儲存');
    } catch (e) {
      uiAlert('儲存失敗\n\n' + firestoreErrMsg(e));
    } finally { setPricingSaving(false); }
  };

  const updatePlan = (idx, key, val) => setPlans(ps => ps.map((p,i)=> i===idx ? {...p,[key]:val} : p));
  const addPlan = () => setPlans(ps => [...(ps||[]), {
    id:'plan'+Date.now().toString(36), name:'新方案', originalPrice:0, price:0,
    period:'month', bonusMonths:0, badge:'', enabled:true, sortOrder:(ps?.length||0)+1, note:''
  }]);
  const removePlan = async (idx) => {
    if (!await uiConfirm({ title:'刪除方案', message:`確定刪除方案「${plans[idx].name}」？`, confirmText:'刪除', cancelText:'取消', danger:true })) return;
    setPlans(ps => ps.filter((_,i)=>i!==idx));
  };

  // ── v6.10.0 優惠碼管理 ──
  const loadCoupons = React.useCallback(async () => {
    if (!fbRef.current) return;
    try {
      const snap = await couponsColRef(fbRef.current.db).get();
      const list = [];
      snap.forEach(d => list.push({ _docId: d.id, ...d.data() }));
      list.sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
      setCoupons(list);
    } catch (e) {
      uiAlert('載入優惠碼失敗\n\n' + firestoreErrMsg(e));
      setCoupons([]);
    }
  }, [fbRef]);

  React.useEffect(() => { if (tab === 'coupons' && coupons === null) loadCoupons(); }, [tab, coupons, loadCoupons]);
  // 進入優惠碼分頁時，若方案清單尚未載入，一併載入（綁定方案需要）
  React.useEffect(() => { if (tab === 'coupons' && plans === null) loadPricing(); }, [tab, plans, loadPricing]);

  const updateCoupon = (idx, key, val) => setCoupons(cs => cs.map((c,i)=> i===idx ? {...c,[key]:val} : c));
  const toggleCouponPlan = (idx, planId) => setCoupons(cs => cs.map((c,i)=>{
    if (i!==idx) return c;
    const cur = c.appliesTo || [];
    return { ...c, appliesTo: cur.includes(planId) ? cur.filter(x=>x!==planId) : [...cur, planId] };
  }));
  const addCoupon = () => {
    setCoupons(cs => [{
      code:'', type:'percent', value:0, appliesTo:[], maxUses:0, usedCount:0,
      perUserOnce:true, expiresAt:0, enabled:true, note:'', createdAt:Date.now(), _isNew:true
    }, ...(cs||[])]);
    setExpandedCoupon(0);
  };
  const removeCoupon = async (idx) => {
    const c = coupons[idx];
    if (!await uiConfirm({ title:'刪除優惠碼', message:`確定刪除優惠碼「${c.code||'(未命名)'}」？`, confirmText:'刪除', cancelText:'取消', danger:true })) return;
    // 已存在於 Firestore 的需實際刪除
    if (c._docId && fbRef.current) {
      try { await couponsColRef(fbRef.current.db).doc(c._docId).delete(); } catch(e){ uiAlert('刪除失敗\n\n'+firestoreErrMsg(e)); return; }
    }
    setCoupons(cs => cs.filter((_,i)=>i!==idx));
    setExpandedCoupon(null);
  };
  const saveCoupons = async () => {
    if (!fbRef.current || !coupons) return;
    // 驗證
    const codes = [];
    for (const c of coupons) {
      const code = (c.code||'').trim().toUpperCase();
      if (!code) { uiAlert('每個優惠碼都需要填寫「優惠碼」'); return; }
      if (!/^[A-Z0-9_-]+$/.test(code)) { uiAlert(`優惠碼「${code}」只能用英數字、- 與 _`); return; }
      if (codes.includes(code)) { uiAlert(`優惠碼「${code}」重複`); return; }
      codes.push(code);
      if (c.type==='percent' && (c.value<=0 || c.value>=100)) { uiAlert(`「${code}」百分比折扣需介於 1–99（代表折抵的百分比）`); return; }
      if (c.type==='fixed' && c.value<=0) { uiAlert(`「${code}」固定折抵金額需大於 0`); return; }
      if (!c.appliesTo || c.appliesTo.length===0) { uiAlert(`「${code}」至少要選一個適用方案`); return; }
    }
    setCouponsSaving(true);
    try {
      const db = fbRef.current.db;
      await Promise.all(coupons.map(c => {
        const code = c.code.trim().toUpperCase();
        const { _docId, _isNew, ...rest } = c;
        const payload = { ...rest, code, updatedAt: Date.now() };
        // doc id 用優惠碼本身（大寫）；若改了 code 需刪舊建新
        if (_docId && _docId !== code) {
          return couponsColRef(db).doc(_docId).delete()
            .then(()=>couponsColRef(db).doc(code).set(payload, { merge:true }));
        }
        return couponsColRef(db).doc(code).set(payload, { merge:true });
      }));
      uiAlert('✓ 優惠碼已儲存');
      setCoupons(null);  // 重新載入取得正確 _docId
    } catch (e) {
      uiAlert('儲存失敗\n\n' + firestoreErrMsg(e));
    } finally { setCouponsSaving(false); }
  };

  const filtered = accounts.filter(a => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return a.email.toLowerCase().includes(q) || a.displayName.toLowerCase().includes(q)
      || a.weddings.some(w => `${w.config?.groomName||''}${w.config?.brideName||''}`.toLowerCase().includes(q));
  });

  const totalAcc = accounts.length;
  const proAcc = accounts.filter(isAccPro).length;
  const totalWed = accounts.reduce((s,a)=>s+a.weddings.length,0);

  const cellSt = { padding:'10px 10px', fontSize:13, color:'#3A332B', verticalAlign:'top', borderBottom:'1px solid #F0EBE3' };

  return (
    <div style={{minHeight:'100vh',background:'#F9F5EF'}}>
      <nav style={{background:'#2B2620',padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,letterSpacing:3,color:'#E0C9A6'}}>DEV CONSOLE</span>
          <span style={{fontSize:11,color:'#9A8F82',letterSpacing:1}}>開發者後台</span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <span style={{fontSize:12,color:'#C9BBA8'}}>{user.email}</span>
          <Btn v="ghost" size="sm" onClick={onBack}>← 返回</Btn>
        </div>
      </nav>

      <div style={{maxWidth:1100,margin:'0 auto',padding:'28px 20px'}}>
        {/* v6.9.0 分頁切換 */}
        <div style={{display:'flex',gap:4,marginBottom:20,borderBottom:'1px solid #E5DDD0'}}>
          {[['accounts','帳號管理'],['pricing','方案與定價'],['coupons','優惠碼']].map(([k,l])=>(
            <button key={k} onClick={()=>setTab(k)}
              style={{padding:'9px 18px',border:'none',background:'none',cursor:'pointer',fontFamily:FONT_STACK,
                fontSize:14,letterSpacing:1,color: tab===k?'#3A332B':'#A89E92',
                borderBottom: tab===k?'2px solid #B5895F':'2px solid transparent',marginBottom:-1,fontWeight:tab===k?600:400}}>
              {l}
            </button>
          ))}
        </div>

        {tab==='accounts' && <>
        {/* 統計 */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginBottom:18}}>
          {[['使用者帳號',totalAcc],['Pro 帳號',proAcc],['婚禮專案總數',totalWed]].map(([l,v])=>(
            <div key={l} style={{...S.card,padding:'14px 18px'}}>
              <div style={{fontSize:12,color:'#9A8F82'}}>{l}</div>
              <div style={{fontFamily:FONT_STACK,fontSize:24,marginTop:2}}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:14,flexWrap:'wrap'}}>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="搜尋 email / 姓名 / 新人姓名"
            style={{flex:1,minWidth:220,padding:'9px 12px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA'}} />
          <Btn v="ghost" size="sm" onClick={load} disabled={loading}>🔄 重新整理</Btn>
        </div>

        {/* 付款紀錄尚未串接提示 */}
        <div style={{padding:'9px 14px',background:'#FFF8F0',border:'1px solid #F0DFC0',borderRadius:3,
          fontSize:12,color:'#7A5C00',marginBottom:16,lineHeight:1.7}}>
          💳 付款紀錄與「刪除登入帳號」需金流階段的 Cloud Functions 完成後才會啟用；目前可手動開通/移除 Pro 與刪除 Firestore 資料。
        </div>

        {loading ? (
          <div style={{textAlign:'center',padding:40}}><Spinner size={28}/></div>
        ) : filtered.length === 0 ? (
          <div style={{...S.card,padding:'40px 24px',textAlign:'center',color:'#9A8F82'}}>沒有符合的帳號</div>
        ) : (
          <div style={{...S.card,padding:0,overflow:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',minWidth:760}}>
              <thead>
                <tr style={{background:'#F7F1E8',textAlign:'left'}}>
                  {['帳號','婚禮專案','方案','操作'].map(h=>(
                    <th key={h} style={{padding:'11px 10px',fontSize:12,fontWeight:500,color:'#6B6259',letterSpacing:.3}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(a => {
                  const pro = isAccPro(a);
                  const working = busy === a.uid;
                  return (
                    <tr key={a.uid}>
                      <td style={cellSt}>
                        <div style={{fontWeight:600}}>{a.email}</div>
                        {a.displayName && <div style={{fontSize:11,color:'#9A8F82'}}>{a.displayName}</div>}
                        {a.proGrant && a.proGrant.active && (
                          <div style={{fontSize:10,color:'#B5895F',marginTop:2}}>
                            手動開通 · {a.proGrant.grantedBy||''}
                          </div>
                        )}
                      </td>
                      <td style={cellSt}>
                        {a.weddings.length === 0 ? <span style={{color:'#9A8F82'}}>—</span> :
                          a.weddings.map(w=>(
                            <div key={w.weddingId} style={{fontSize:12,marginBottom:2}}>
                              {(w.config?.groomName||'?')+' & '+(w.config?.brideName||'?')}
                              <span style={{color:'#9A8F82',marginLeft:6,fontSize:10}}>{w.plan==='pro'?'Pro':'Free'}</span>
                            </div>
                          ))}
                      </td>
                      <td style={cellSt}>
                        <Tag small color={pro?'#B5895F':'#9A8F82'} soft={pro?'#EFE3D0':'#F0EBE3'}>{pro?'✦ Pro':'Free'}</Tag>
                      </td>
                      <td style={{...cellSt,whiteSpace:'nowrap'}}>
                        {working ? <Spinner size={16}/> : (
                          <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                            {pro
                              ? <Btn v="ghost" size="sm" onClick={()=>grantPro(a,false)}>移除 Pro</Btn>
                              : <Btn size="sm" onClick={()=>grantPro(a,true)}>開通 Pro</Btn>}
                            <Btn v="ghost" size="sm" onClick={()=>setPayView(a)}>付款紀錄</Btn>
                            <button onClick={()=>deleteData(a)}
                              disabled={a.uid === user.uid}
                              title={a.uid === user.uid ? '無法刪除目前登入的管理員帳號' : '刪除此帳號的所有 Firestore 資料'}
                              style={{padding:'5px 10px',borderRadius:2,
                                border: a.uid === user.uid ? '1px solid #E5DDD0' : '1px solid #EECDD6',
                                background: a.uid === user.uid ? '#F4F0EA' : '#FDF5F7',
                                color: a.uid === user.uid ? '#B8AE9F' : '#C04060',
                                fontSize:11, cursor: a.uid === user.uid ? 'not-allowed' : 'pointer',
                                fontFamily:FONT_STACK}}>
                              {a.uid === user.uid ? '自己 🔒' : '刪除資料'}
                            </button>
                            <button disabled title="刪除 Firebase 登入帳號需 Cloud Functions（階段 B）"
                              style={{padding:'5px 10px',borderRadius:2,border:'1px solid #E5DDD0',background:'#F4F0EA',color:'#B8AE9F',fontSize:11,cursor:'not-allowed',fontFamily:FONT_STACK}}>
                              刪除帳號 🔒
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        </>}

        {tab==='pricing' && (
          plans === null ? (
            <div style={{textAlign:'center',padding:40}}><Spinner size={28}/></div>
          ) : (
          <div>
            <div style={{padding:'9px 14px',background:'#FFF8F0',border:'1px solid #F0DFC0',borderRadius:3,
              fontSize:12,color:'#7A5C00',marginBottom:16,lineHeight:1.7}}>
              💡 點方案右側「編輯」展開詳細設定。原價留空（0）不顯示劃線價；售價為實際收費金額（金流以此為準）。
            </div>

            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {plans.map((p,idx)=>{
                const open = expandedPlan===idx;
                const Group = ({title,children})=>(
                  <div style={{marginBottom:14}}>
                    <div style={{fontSize:11,color:'#B5895F',letterSpacing:1,marginBottom:8,fontWeight:600}}>{title}</div>
                    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:10}}>{children}</div>
                  </div>
                );
                const F = ({label,k,type='text',ph})=>(
                  <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                    {label}
                    <input type={type} value={p[k]??''} placeholder={ph}
                      onChange={e=>updatePlan(idx,k,type==='number'?(parseInt(e.target.value,10)||0):e.target.value)}
                      style={{padding:'7px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA',color:'#3A332B'}} />
                  </label>
                );
                return (
                <div key={idx} style={{...S.card,padding:0,overflow:'hidden',opacity:p.enabled===false?.7:1}}>
                  {/* 摘要列 */}
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,padding:'14px 18px',
                    cursor:'pointer',background:open?'#FBF7F0':'transparent'}} onClick={()=>setExpandedPlan(open?null:idx)}>
                    <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
                      <span style={{fontSize:12,color:'#B8AE9F',transform:open?'rotate(90deg)':'none',transition:'transform .15s'}}>▶</span>
                      <span style={{fontFamily:FONT_STACK,fontSize:15,color:'#3A332B'}}>{p.name||'（未命名方案）'}</span>
                      {p.badge && <span style={{fontSize:10,color:'#B5895F',background:'#F3E9DD',padding:'1px 7px',borderRadius:10}}>{p.badge}</span>}
                      <span style={{fontSize:11,color: p.enabled===false?'#B8AE9F':'#5B8C5A',border:'1px solid '+(p.enabled===false?'#E5DDD0':'#CFE3CE'),background:p.enabled===false?'transparent':'#F2F8F1',padding:'1px 8px',borderRadius:10}}>
                        {p.enabled===false?'已下架':'上架中'}</span>
                    </div>
                    <div style={{display:'flex',alignItems:'baseline',gap:6}}>
                      {p.originalPrice>0 && p.originalPrice>p.price &&
                        <span style={{fontSize:12,color:'#B8AE9F',textDecoration:'line-through'}}>${p.originalPrice}</span>}
                      <span style={{fontSize:18,color:'#B5895F',fontWeight:700}}>NT${p.price}</span>
                      <span style={{fontSize:11,color:'#9A8F82'}}>/{PERIOD_LABELS[p.period]||p.period}{p.bonusMonths>0?`+${p.bonusMonths}月`:''}</span>
                    </div>
                  </div>
                  {/* 展開編輯 */}
                  {open && (
                    <div style={{padding:'4px 18px 18px',borderTop:'1px solid #F0EBE3'}}>
                      <Group title="基本資訊">
                        <F label="方案代碼 (id)" k="id" ph="英數，不可重複" />
                        <F label="方案名稱" k="name" ph="例：月費方案" />
                        <F label="排序（小→大）" k="sortOrder" type="number" />
                      </Group>
                      <Group title="價格與週期">
                        <F label="原價（劃線，0=不顯示）" k="originalPrice" type="number" />
                        <F label="售價（實收）" k="price" type="number" />
                        <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                          計費週期
                          <select value={p.period||'month'} onChange={e=>updatePlan(idx,'period',e.target.value)}
                            style={{padding:'7px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA',color:'#3A332B'}}>
                            {Object.entries(PERIOD_LABELS).map(([v,l])=><option key={v} value={v}>{l}</option>)}
                          </select>
                        </label>
                        <F label="加送月數" k="bonusMonths" type="number" />
                      </Group>
                      <Group title="行銷與狀態">
                        <F label="行銷標籤" k="badge" ph="例：最划算" />
                        <F label="說明" k="note" ph="例：每月自動續訂" />
                        <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                          上架狀態
                          <select value={p.enabled===false?'0':'1'} onChange={e=>updatePlan(idx,'enabled',e.target.value==='1')}
                            style={{padding:'7px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA',color:'#3A332B'}}>
                            <option value="1">上架</option>
                            <option value="0">下架</option>
                          </select>
                        </label>
                      </Group>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:6}}>
                        <div style={{display:'flex',alignItems:'baseline',gap:6,flexWrap:'wrap'}}>
                          <span style={{fontSize:11,color:'#B8AE9F'}}>前台顯示：</span>
                          {p.badge && <span style={{fontSize:10,color:'#B5895F',background:'#F3E9DD',padding:'1px 7px',borderRadius:10}}>{p.badge}</span>}
                          {p.originalPrice>0 && p.originalPrice>p.price &&
                            <span style={{fontSize:12,color:'#B8AE9F',textDecoration:'line-through'}}>NT${p.originalPrice}</span>}
                          <span style={{fontSize:15,color:'#B5895F',fontWeight:700}}>NT${p.price}</span>
                          <span style={{fontSize:11,color:'#9A8F82'}}>/{PERIOD_LABELS[p.period]||p.period}{p.bonusMonths>0?`（送${p.bonusMonths}個月）`:''}</span>
                        </div>
                        <button onClick={()=>removePlan(idx)}
                          style={{padding:'5px 12px',borderRadius:2,border:'1px solid #EECDD6',background:'#FDF5F7',color:'#C04060',fontSize:11,cursor:'pointer',fontFamily:FONT_STACK}}>刪除方案</button>
                      </div>
                    </div>
                  )}
                </div>
                );
              })}
            </div>

            <div style={{display:'flex',gap:10,marginTop:18,alignItems:'center'}}>
              <Btn v="ghost" onClick={()=>{ addPlan(); setExpandedPlan(plans.length); }}>＋ 新增方案</Btn>
              <div style={{flex:1}} />
              <Btn v="ghost" size="sm" onClick={()=>{ setPlans(null); setExpandedPlan(null); }}>還原</Btn>
              <Btn onClick={savePricing} disabled={pricingSaving}>{pricingSaving?'儲存中…':'儲存方案'}</Btn>
            </div>
          </div>
          )
        )}

        {tab==='coupons' && (
          coupons === null ? (
            <div style={{textAlign:'center',padding:40}}><Spinner size={28}/></div>
          ) : (
          <div>
            <div style={{padding:'9px 14px',background:'#FFF8F0',border:'1px solid #F0DFC0',borderRadius:3,
              fontSize:12,color:'#7A5C00',marginBottom:16,lineHeight:1.7}}>
              🎟️ 建立優惠碼提供折扣。百分比折扣填「折抵 %」（例：20 = 打 8 折）；固定折抵填「折抵金額」。每個優惠碼需指定可用方案。實際折抵金額在金流階段於後端計算（防竄改）。
            </div>

            {(!plans || plans.length===0) && (
              <div style={{padding:'10px 14px',background:'#FDF5F7',border:'1px solid #EECDD6',borderRadius:3,fontSize:12,color:'#B05070',marginBottom:14}}>
                ⚠️ 尚未載入方案清單。請先到「方案與定價」分頁確認方案已建立，優惠碼才能綁定方案。
              </div>
            )}

            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {coupons.length===0 && <div style={{...S.card,padding:'34px 20px',textAlign:'center',color:'#9A8F82'}}>尚無優惠碼，點下方「新增優惠碼」建立。</div>}
              {coupons.map((c,idx)=>{
                const open = expandedCoupon===idx;
                const expired = c.expiresAt>0 && c.expiresAt<Date.now();
                const usedUp = c.maxUses>0 && (c.usedCount||0)>=c.maxUses;
                const dim = c.enabled===false || expired || usedUp;
                return (
                <div key={idx} style={{...S.card,padding:0,overflow:'hidden',opacity:dim?.65:1}}>
                  {/* 摘要列 */}
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,padding:'14px 18px',
                    cursor:'pointer',background:open?'#FBF7F0':'transparent'}} onClick={()=>setExpandedCoupon(open?null:idx)}>
                    <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
                      <span style={{fontSize:12,color:'#B8AE9F',transform:open?'rotate(90deg)':'none',transition:'transform .15s'}}>▶</span>
                      <span style={{fontFamily:'monospace',fontSize:15,color:'#3A332B',letterSpacing:1,fontWeight:600}}>{(c.code||'(未命名)').toUpperCase()}</span>
                      <span style={{fontSize:12,color:'#B5895F',background:'#F3E9DD',padding:'1px 8px',borderRadius:10}}>
                        {c.type==='percent'?`折 ${c.value}%`:`折 NT$${c.value}`}</span>
                      {c.enabled===false && <span style={{fontSize:11,color:'#B8AE9F',border:'1px solid #E5DDD0',padding:'1px 8px',borderRadius:10}}>已停用</span>}
                      {expired && <span style={{fontSize:11,color:'#C04060',border:'1px solid #EECDD6',padding:'1px 8px',borderRadius:10}}>已過期</span>}
                      {usedUp && <span style={{fontSize:11,color:'#C04060',border:'1px solid #EECDD6',padding:'1px 8px',borderRadius:10}}>已用完</span>}
                    </div>
                    <div style={{fontSize:11,color:'#9A8F82'}}>
                      已用 {c.usedCount||0}{c.maxUses>0?` / ${c.maxUses}`:'（無上限）'}
                    </div>
                  </div>
                  {/* 展開編輯 */}
                  {open && (
                    <div style={{padding:'4px 18px 18px',borderTop:'1px solid #F0EBE3'}}>
                      {/* 基本 */}
                      <div style={{marginBottom:14}}>
                        <div style={{fontSize:11,color:'#B5895F',letterSpacing:1,marginBottom:8,fontWeight:600}}>優惠碼設定</div>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:10}}>
                          <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                            優惠碼（英數/-/_）
                            <input value={c.code||''} placeholder="例：WEDDING20"
                              onChange={e=>updateCoupon(idx,'code',e.target.value.toUpperCase())}
                              style={{padding:'7px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:'monospace',fontSize:13,background:'#FFFEFA',color:'#3A332B',letterSpacing:1}} />
                          </label>
                          <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                            折扣類型
                            <select value={c.type||'percent'} onChange={e=>updateCoupon(idx,'type',e.target.value)}
                              style={{padding:'7px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA',color:'#3A332B'}}>
                              <option value="percent">百分比折扣 (%)</option>
                              <option value="fixed">固定金額折抵 (NT$)</option>
                            </select>
                          </label>
                          <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                            {c.type==='fixed'?'折抵金額 (NT$)':'折抵百分比 (1–99)'}
                            <input type="number" value={c.value??0}
                              onChange={e=>updateCoupon(idx,'value',parseInt(e.target.value,10)||0)}
                              style={{padding:'7px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA',color:'#3A332B'}} />
                          </label>
                          <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                            備註
                            <input value={c.note||''} placeholder="例：開幕優惠"
                              onChange={e=>updateCoupon(idx,'note',e.target.value)}
                              style={{padding:'7px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA',color:'#3A332B'}} />
                          </label>
                        </div>
                      </div>
                      {/* 適用方案 */}
                      <div style={{marginBottom:14}}>
                        <div style={{fontSize:11,color:'#B5895F',letterSpacing:1,marginBottom:8,fontWeight:600}}>適用方案（可複選，至少一個）</div>
                        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                          {(plans||[]).map(pl=>{
                            const on=(c.appliesTo||[]).includes(pl.id);
                            return (
                              <button key={pl.id} onClick={()=>toggleCouponPlan(idx,pl.id)}
                                style={{padding:'6px 12px',borderRadius:16,cursor:'pointer',fontFamily:FONT_STACK,fontSize:12,
                                  border:'1px solid '+(on?'#B5895F':'#E5DDD0'),background:on?'#F3E9DD':'#FFFEFA',color:on?'#8A5C2E':'#9A8F82'}}>
                                {on?'✓ ':''}{pl.name}
                              </button>
                            );
                          })}
                          {(!plans||plans.length===0) && <span style={{fontSize:12,color:'#B8AE9F'}}>（無方案可選）</span>}
                        </div>
                      </div>
                      {/* 限制 */}
                      <div style={{marginBottom:14}}>
                        <div style={{fontSize:11,color:'#B5895F',letterSpacing:1,marginBottom:8,fontWeight:600}}>使用限制</div>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:10}}>
                          <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                            總使用次數（0=無限）
                            <input type="number" value={c.maxUses??0}
                              onChange={e=>updateCoupon(idx,'maxUses',parseInt(e.target.value,10)||0)}
                              style={{padding:'7px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA',color:'#3A332B'}} />
                          </label>
                          <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                            每人限用一次
                            <select value={c.perUserOnce===false?'0':'1'} onChange={e=>updateCoupon(idx,'perUserOnce',e.target.value==='1')}
                              style={{padding:'7px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA',color:'#3A332B'}}>
                              <option value="1">是（每人限一次）</option>
                              <option value="0">否（同人可多次）</option>
                            </select>
                          </label>
                          <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                            到期日（不填=永久）
                            <input type="date"
                              value={c.expiresAt>0 ? new Date(c.expiresAt).toISOString().slice(0,10) : ''}
                              onChange={e=>updateCoupon(idx,'expiresAt', e.target.value ? new Date(e.target.value+'T23:59:59').getTime() : 0)}
                              style={{padding:'6px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA',color:'#3A332B'}} />
                          </label>
                          <label style={{fontSize:11,color:'#9A8F82',display:'flex',flexDirection:'column',gap:3}}>
                            啟用狀態
                            <select value={c.enabled===false?'0':'1'} onChange={e=>updateCoupon(idx,'enabled',e.target.value==='1')}
                              style={{padding:'7px 9px',borderRadius:3,border:'1px solid #E5DDD0',fontFamily:FONT_STACK,fontSize:13,background:'#FFFEFA',color:'#3A332B'}}>
                              <option value="1">啟用</option>
                              <option value="0">停用</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <div style={{display:'flex',justifyContent:'flex-end',paddingTop:4}}>
                        <button onClick={()=>removeCoupon(idx)}
                          style={{padding:'5px 12px',borderRadius:2,border:'1px solid #EECDD6',background:'#FDF5F7',color:'#C04060',fontSize:11,cursor:'pointer',fontFamily:FONT_STACK}}>刪除優惠碼</button>
                      </div>
                    </div>
                  )}
                </div>
                );
              })}
            </div>

            <div style={{display:'flex',gap:10,marginTop:18,alignItems:'center'}}>
              <Btn v="ghost" onClick={addCoupon}>＋ 新增優惠碼</Btn>
              <div style={{flex:1}} />
              <Btn v="ghost" size="sm" onClick={()=>{ setCoupons(null); setExpandedCoupon(null); }}>還原</Btn>
              <Btn onClick={saveCoupons} disabled={couponsSaving}>{couponsSaving?'儲存中…':'儲存優惠碼'}</Btn>
            </div>
          </div>
          )
        )}
      </div>

      {payView && (
        <Modal open onClose={()=>setPayView(null)} title={`付款紀錄 — ${payView.email}`}>
          <div style={{padding:'8px 2px',fontSize:13,color:'#6B6259',lineHeight:1.8}}>
            <div style={{padding:'20px',textAlign:'center',background:'#F9F5EF',borderRadius:4,border:'1px dashed #E5DDD0'}}>
              💳 尚未串接金流<br/>
              <span style={{fontSize:12,color:'#9A8F82'}}>綠界定期定額串接後，這裡會顯示此帳號的訂閱狀態與發票/扣款紀錄。</span>
            </div>
            {payView.proGrant && payView.proGrant.active && (
              <div style={{marginTop:12,fontSize:12,color:'#7A6E5E'}}>
                目前為「手動開通」Pro（非付費）：開通者 {payView.proGrant.grantedBy||'—'}，
                時間 {payView.proGrant.grantedAt?new Date(payView.proGrant.grantedAt).toLocaleString('zh-TW'):'—'}
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default function WeddingApp() {
  // ── SaaS：Auth & routing & 多租戶 state ──
  const [user, setUser]           = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [weddingId, setWeddingId] = useState(null);
  const [weddings, setWeddings]   = useState([]);
  const [fbReady, setFbReady]     = useState(false); // Firebase 初始化完成旗標
  const [loadingWeddings, setLoadingWeddings] = useState(false);
  const [presenceList, setPresenceList] = useState([]); // 實時協作：在線使用者
  const route = useHashRoute();
  const parsed = parseRoute(route);

  const [page,setPage] = useState('rsvp');
  const [authed,setAuthed] = useState(false);
  const [showLogin,setShowLogin] = useState(false);
  const [data,setData] = useState(emptyData());
  const [loaded,setLoaded] = useState(false);
  const [syncStatus,setSyncStatus] = useState('connecting');
  const [error,setError] = useState(null);
  const [mainTableId,setMainTableId] = useState(null);
  // v4.12：外觀預覽模式
  const [previewMode,setPreviewMode] = useState(false);
  const [previewDraft,setPreviewDraft] = useState(null);
  const fbRef = useRef(null);

  // 設定頁面標題
  useEffect(()=>{
    document.title = '對好入座 ｜ 婚禮喜帖・賓客名單・智慧排位';
    // 注入 💐 emoji favicon（SVG data URI）
    const svgFav = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💐</text></svg>`;
    let link = document.querySelector("link[rel~='icon']");
    if(!link){ link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
    link.href = svgFav;
  },[]);
  const writeTimer = useRef(null);
  // 資料保護：追蹤上次同步到的 Firestore lastUpdate
  const lastSyncedRef = useRef(0);
  // v4.9 保險：記錄本機已送出的最大 writeTime；自家 echo 不覆寫本地（避免拖曳期間 snap-back）
  const lastWriteRef = useRef(0);
  const lastBackupRef = useRef(0);  // 上次自動備份時間
  const lastDailyBackupRef = useRef(''); // 上次每日備份的日期字串 YYYY-MM-DD
  const forceWriteRef = useRef(false);  // A1: DATA_SHRINK 用戶確認後設定，允許繞過驟減檢查

  // A2: localStorage 本地鏡像（最後防線）
  const saveLocalMirror = useCallback((d) => {
    try {
      const isB64 = s => typeof s === 'string' && s.startsWith('data:');
      const cfg = d.config || {};
      const cleanData = {
        ...d,
        photos: (d.photos||[]).map(p=>({id:p.id,enabled:p.enabled!==false,order:p.order||0,focalY:p.focalY||50})),
        config: {
          ...cfg,
          thankYouImgDataUrl:       isB64(cfg.thankYouImgDataUrl)       ? '__USE_PHOTO__' : (cfg.thankYouImgDataUrl ?? ''),
          thankYouImgBottomDataUrl: isB64(cfg.thankYouImgBottomDataUrl) ? '__USE_PHOTO__' : (cfg.thankYouImgBottomDataUrl ?? ''),
          logoDataUrl:              isB64(cfg.logoDataUrl)               ? '__USE_PHOTO__' : (cfg.logoDataUrl ?? ''),
        }
      };
      const entry = { savedAt: Date.now(), data: cleanData };
      // 保留最近 5 份歷史
      const hist = JSON.parse(localStorage.getItem('wedding_mirror_hist') || '[]');
      hist.unshift(entry);
      if (hist.length > 5) hist.length = 5;
      localStorage.setItem('wedding_mirror', JSON.stringify(entry));
      localStorage.setItem('wedding_mirror_hist', JSON.stringify(hist));
    } catch(e) { console.warn('saveLocalMirror failed:', e); }
  }, []);

  const [photoMap, setPhotoMap] = useState({});
  const photoMapRef = useRef({});
  useEffect(()=>{photoMapRef.current=photoMap;},[photoMap]);

  // ── SaaS Step 1：初始化 Firebase + 監聽 Auth 狀態 ──
  useEffect(()=>{
    injectCSS();
    let cancelled=false;
    (async()=>{
      try {
        let fb=null, lastErr=null;
        for(let attempt=0; attempt<3; attempt++){
          try { fb=await initFirebase(); lastErr=null; break; }
          catch(e){ lastErr=e; if(cancelled) return; await new Promise(r=>setTimeout(r, 500*(attempt+1))); }
        }
        if(cancelled) return;
        if(!fb) throw lastErr || new Error('Firebase 初始化失敗');
        fbRef.current=fb;
        setFbReady(true); // ← 觸發 data loading effect 重試（解決公開路由 race condition）
        // v6.9.0：載入平台定價設定（供 Pro 升級浮窗顯示；失敗則用預設方案）
        pricingDocRef(fb.db).get().then(snap=>{
          if(snap.exists && snap.data() && Array.isArray(snap.data().plans)) _cachedPlans = snap.data().plans;
          else _cachedPlans = DEFAULT_PLANS;
        }).catch(()=>{ _cachedPlans = DEFAULT_PLANS; });
        try {
          await fb.auth.getRedirectResult();
          // 成功的話 onAuthStateChanged 會自動觸發，不需額外處理
        } catch(e) {
          if (e.code !== 'auth/no-auth-event') {
            console.warn('getRedirectResult:', e.message);
          }
        }

        fb.auth.onAuthStateChanged(async u=>{
          if(cancelled) return;
          setUser(u);
          setAuthReady(true);
          if(u && !u.isAnonymous){
            await loadUserWeddings(fb, u.uid);
            // 檢查是否有待處理的協作邀請（從 join 連結登入回來）
            let pending=null;
            try { pending = sessionStorage.getItem('pendingInvite'); } catch {}
            if(pending){
              try { sessionStorage.removeItem('pendingInvite'); } catch {}
              navigate(`#/join/${pending}`);
            }
          } else if(!u){
            setWeddings([]);
            // 不在這裡 setWeddingId(null)：公開賓客路由（#/w/{id}）需要保留 URL 中的 weddingId；
            // 登出時由 handleFirebaseLogout 顯式清除 weddingId，確保安全。
          }
        });
      } catch(e){
        if(!cancelled){ setError(e.message); setAuthReady(true); }
      }
    })();
    return()=>{cancelled=true;};
  },[]);

  // ── SaaS：載入用戶的婚禮列表 ──
  const loadUserWeddings = async (fb, uid) => {
    setLoadingWeddings(true);
    try {
      const userSnap = await fb.db.collection('users').doc(uid).get();
      const ids = userSnap.exists ? (userSnap.data().weddingIds || []) : [];
      if(ids.length===0){ setWeddings([]); return; }
      const docs = await Promise.all(ids.map(wid =>
        weddingDoc(fb.db, wid).get().then(s => s.exists ? {weddingId:wid, ...s.data()} : null).catch(()=>null)
      ));
      const withCfg = await Promise.all(docs.filter(Boolean).map(async w => {
        try { const m = await mainDocRef(fb.db, w.weddingId).get();
          // 帶上 myRole：若非擁有者則從 collaborators 取自己的角色
          const myRole = w.ownerId === uid ? 'admin'
            : (w.collaborators?.[uid]?.role || 'viewer');
          return {...w, config: m.exists ? (m.data().config||{}) : {}, myRole}; }
        catch { return {...w, config:{}, myRole: w.ownerId===uid?'admin':'viewer'}; }
      }));
      setWeddings(withCfg);
    } catch(e){ console.error('loadUserWeddings:', e); }
    finally { setLoadingWeddings(false); }
  };

  // ── 協作：接受邀請（受邀者點 #/join/{token} 後執行）──
  const acceptInvite = async (token) => {
    const fb = fbRef.current || await initFirebase();
    fbRef.current = fb;
    if (!fb.auth.currentUser || fb.auth.currentUser.isAnonymous) {
      return { needLogin: true };
    }
    const u = fb.auth.currentUser;
    try {
      const inviteSnap = await inviteDocRef(fb.db, token).get();
      if (!inviteSnap.exists) return { error: '邀請連結無效或已過期' };
      const inv = inviteSnap.data();
      if (inv.used) {
        // 同一個用戶重新點自己的邀請連結 → 已是成員，直接引導進入婚禮
        if (inv.usedBy === u.uid) {
          return { weddingId: inv.weddingId, role: inv.role, alreadyMember: true };
        }
        return { error: '此邀請連結已由其他人使用。如需新連結，請請主辦方重新產生。' };
      }
      if (inv.expiresAt && Date.now() > inv.expiresAt) return { error: '邀請連結已過期' };

      // 寫入 collaborators
      await weddingDoc(fb.db, inv.weddingId).update({
        [`collaborators.${u.uid}`]: {
          role: inv.role, email: u.email||'', name: u.displayName||'',
          addedAt: Date.now(), addedBy: inv.inviterUid,
        }
      });
      // 把婚禮加到受邀者的 weddingIds
      const userRef = fb.db.collection('users').doc(u.uid);
      const userSnap = await userRef.get();
      const ids = userSnap.exists ? (userSnap.data().weddingIds||[]) : [];
      if (!ids.includes(inv.weddingId)) {
        await userRef.set({ uid:u.uid, email:u.email||'', weddingIds:[...ids, inv.weddingId] }, {merge:true});
      }
      // 標記邀請已使用
      await inviteDocRef(fb.db, token).update({ used:true, usedBy:u.uid, usedAt:Date.now() });
      await loadUserWeddings(fb, u.uid);
      return { weddingId: inv.weddingId, role: inv.role };
    } catch(e) {
      return { error: e.message };
    }
  };

  // ── SaaS：依路由決定要管理哪個婚禮 ──
  useEffect(()=>{
    if(parsed.section==='w' && parsed.weddingId && parsed.weddingId!==weddingId){
      setWeddingId(parsed.weddingId);
    }
  },[route]);

  // ── SaaS Step 2：weddingId 確定後訂閱該婚禮資料（保留 v5.6.1 完整邏輯）──
  useEffect(()=>{
    if(!weddingId || !fbRef.current) return;
    let unsubMain=null, unsubPhotos=null, cancelled=false;
    setLoaded(false); setError(null); setSyncStatus('connecting');
    const fb = fbRef.current;
    (async()=>{
      try {
        // 僅「賓客公開頁（#/w/*）」且尚無任何登入者時，才用匿名登入讀取
        // （避免管理者/Google 登入時序中誤建大量匿名帳號）
        if(parsed.section==='w' && !fb.auth.currentUser){
          await fb.auth.signInAnonymously().catch(()=>{});
        }
        if(cancelled) return;
        const ref=mainDocRef(fb.db, weddingId);
        const photosCol = photosColRef(fb.db, weddingId);

        // Subscribe to photos subcollection
        unsubPhotos = photosCol.onSnapshot(snap=>{
          if(cancelled) return;
          const m = {};
          snap.forEach(d=>{m[d.id]=d.data();});
          setPhotoMap(m);
        });

        // Subscribe to main doc
        unsubMain=ref.onSnapshot(snap=>{
          if(cancelled) return;
          if(snap.exists){
            const d=snap.data();
            const remoteLast = d.lastUpdate || 0;
            // v4.9 雙保險：
            //   (1) lastSyncedRef 只能單調遞增 — 舊 echo 不能讓「最後同步點」倒退，否則
            //       下一筆寫入會誤判 remote 比 local 新太多而丟 STALE_WRITE。
            if (remoteLast > lastSyncedRef.current) lastSyncedRef.current = remoteLast;
            //   (2) 自家 echo 不覆寫本地 — 若 echo 的 lastUpdate 等於我們最近送出的 writeTime，
            //       本地一定比 echo 還新（或一樣新），跳過 setData 避免拖曳期間 snap-back。
            const isOurEcho = remoteLast > 0 && remoteLast === lastWriteRef.current;
            if (!isOurEcho) {
              const merged = mergeData(d);
              setData(merged);
              saveLocalMirror(merged);  // A2: 同步到本地鏡像
              if(d.mainTableId!==undefined) setMainTableId(d.mainTableId);
            }

            // Auto-migrate: if any photo still has inline dataUrl, move it to subcollection
            const inlinePhotos = (d.photos||[]).filter(p=>p.dataUrl);
            if (inlinePhotos.length > 0) {
              console.log('Migrating', inlinePhotos.length, 'inline photos to subcollection...');
              Promise.all(inlinePhotos.map(p=>
                photosCol.doc(p.id).set({dataUrl:p.dataUrl})
              )).then(()=>{
                // Strip dataUrls from main doc
                const cleanPhotos = (d.photos||[]).map(p=>({
                  id:p.id, enabled:p.enabled!==false, order:p.order||0, focalY:p.focalY||50
                }));
                ref.update({photos: cleanPhotos}).catch(()=>{});
                console.log('Migration done');
              });
            }
          } else {
            // First run: create main doc + default photo in subcollection
            const init = emptyData();
            const defaultPhotoUrl = init.photos[0].dataUrl;
            const cleanInit = {...init, photos:[{id:'default',enabled:true,order:0,focalY:50}]};
            ref.set(cleanInit).then(()=>{
              photosCol.doc('default').set({dataUrl:defaultPhotoUrl}).catch(()=>{});
            }).catch(()=>{});
          }
          setLoaded(true);
          setSyncStatus('connected');
        },err=>{
          console.error(err);
          setError(err.message);
          setSyncStatus('error');
          setLoaded(true);
        });
      } catch(e) {
        console.error(e);
        setError(e.message);
        setSyncStatus('error');
        setLoaded(true);
      }
    })();
    return()=>{cancelled=true; if(unsubMain)unsubMain(); if(unsubPhotos)unsubPhotos();};
  },[weddingId, fbReady]); // fbReady 確保 Firebase 初始化後若 weddingId 已有值立即重試


  const persist=useCallback((next,immediate)=>{
    if(!fbRef.current) return;
    if(writeTimer.current) clearTimeout(writeTimer.current);
    const doWrite=async()=>{
      try {
        const db = fbRef.current.db;
        const mainRef = mainDocRef(db, weddingId);
        const backupsCol = backupsColRef(db, weddingId);

        // Strip image dataUrls from main doc - photos use subcollection, config images use Cloud Storage
        const cleanPhotos = (next.photos||[]).map(p=>({
          id:p.id, enabled:p.enabled!==false, order:p.order||0, focalY:p.focalY||50
        }));
        const isB64 = s => typeof s === 'string' && s.startsWith('data:');
        const writeTime = Date.now();
        // v4.9：登記為「自家寫入」，onSnapshot 收到 echo 時不再覆寫本地
        lastWriteRef.current = Math.max(lastWriteRef.current || 0, writeTime);
        const cleanData = {
          ...next,
          photos: cleanPhotos,
          mainTableId,
          lastUpdate: writeTime,
          avoidPairs: packAvoid(next.avoidPairs),   // v4.9：巢狀陣列→物件陣列（Firestore 合法）
          samePairs:  packSame(next.samePairs),       // v4.12：同桌偏好，同上序列化
          thankYouImgDataUrl:       isB64(next.thankYouImgDataUrl)       ? '__USE_PHOTO__' : (next.thankYouImgDataUrl       ?? ''),
          thankYouImgBottomDataUrl: isB64(next.thankYouImgBottomDataUrl) ? '__USE_PHOTO__' : (next.thankYouImgBottomDataUrl ?? ''),
          logoDataUrl:              isB64(next.logoDataUrl)               ? '__USE_PHOTO__' : (next.logoDataUrl               ?? ''),
        };

        // ===== 資料保護：用 Transaction 做版本檢查 + 寫入前驟減偵測 =====
        const shrinkCheck = (remote, local) => remote >= 3 && local < remote && (remote - local) >= Math.max(3, remote * 0.5);
        await db.runTransaction(async (tx) => {
          const snap = await tx.get(mainRef);
          const remoteUpdate = snap.exists ? (snap.data().lastUpdate || 0) : 0;
          const localKnown = lastSyncedRef.current || 0;
          // 容差 2 秒（避免時鐘差異誤判）
          if (remoteUpdate > localKnown + 2000) {
            const e = new Error('STALE_WRITE');
            e.remoteUpdate = remoteUpdate;
            e.localKnown = localKnown;
            throw e;
          }
          // A1: 寫入前驟減偵測（防止資料驟減覆蓋）
          if (!forceWriteRef.current && snap.exists) {
            const remote = snap.data();
            const rGuests = (remote.guests||[]).length, nGuests = (next.guests||[]).length;
            const rPhotos = (remote.photos||[]).length, nPhotos = (next.photos||[]).length;
            const rTables = (remote.tables||[]).length, nTables = (next.tables||[]).length;
            if (shrinkCheck(rGuests,nGuests) || shrinkCheck(rPhotos,nPhotos) || shrinkCheck(rTables,nTables)) {
              const shrinkInfo = [
                shrinkCheck(rGuests,nGuests)?`賓客 ${rGuests}→${nGuests}`:'',
                shrinkCheck(rPhotos,nPhotos)?`照片 ${rPhotos}→${nPhotos}`:'',
                shrinkCheck(rTables,nTables)?`桌位 ${rTables}→${nTables}`:'',
              ].filter(Boolean).join('、');
              const e = new Error('DATA_SHRINK');
              e.shrinkInfo = shrinkInfo;
              throw e;
            }
          }
          forceWriteRef.current = false; // 用後重設
          tx.set(mainRef, cleanData);
        });
        lastSyncedRef.current = writeTime;

        // ===== 自動備份：每 30 分鐘存一個快照 =====
        const now = Date.now();
        if (now - lastBackupRef.current > 30*60*1000) {
          lastBackupRef.current = now;
          // 非阻塞執行，失敗不影響主流程
          (async()=>{
            try {
              const backupId = String(now);
              const todayStr = new Date(now).toISOString().slice(0,10); // YYYY-MM-DD
              const isDaily = lastDailyBackupRef.current !== todayStr;
              if (isDaily) lastDailyBackupRef.current = todayStr;
              await backupsCol.doc(backupId).set({
                data: cleanData,
                createdAt: now,
                daily: isDaily,
                summary: {
                  guestCount: (cleanData.guests||[]).length,
                  tableCount: (cleanData.tables||[]).length,
                  photoCount: cleanPhotos.length,
                }
              });
              // A5: 清理規則：保留 90 天內 daily + 最近 30 份一般備份
              const all = await backupsCol.orderBy('createdAt','desc').get();
              const cutoff90 = now - 90*24*60*60*1000;
              let nonDailyKept = 0;
              const toDelete = [];
              all.docs.forEach(d => {
                const bd = d.data();
                if (bd.daily || bd.manual) {
                  // daily 或手動：保留 90 天內的
                  if (bd.createdAt < cutoff90) toDelete.push(d.ref);
                } else {
                  nonDailyKept++;
                  if (nonDailyKept > 30) toDelete.push(d.ref);
                }
              });
              if (toDelete.length > 0) await Promise.all(toDelete.map(r=>r.delete()));
            } catch(err) { console.warn('Backup failed:', err); }
          })();
        }
      } catch(e) {
        if (e.message === 'STALE_WRITE') {
          console.error('Stale write blocked:', e);
          if (await uiConfirm({title:'⚠️ 其他裝置已修改資料',message:'為避免覆蓋他人的修改，本次儲存已中止。\n\n點「重新整理」取得最新版本；點「忽略」可能會覆蓋他人的修改（不建議）。',confirmText:'重新整理',cancelText:'忽略',danger:true})) {
            window.location.reload();
          }
          return;
        }
        if (e.message === 'DATA_SHRINK') {
          console.error('Data shrink blocked:', e);
          if (await uiConfirm({title:'⚠️ 資料驟減偵測',message:`即將寫入的資料明顯少於雲端：${e.shrinkInfo}\n\n這可能是誤操作或資料遺失。\n\n點「強制寫入」可能覆蓋資料；點「取消」將中止並重新整理。`,confirmText:'強制寫入',cancelText:'取消',danger:true})) {
            forceWriteRef.current = true;
            doWrite(); // 用 forceWrite 旗標重試
          } else {
            window.location.reload();
          }
          return;
        }
        console.error(e);
        setSyncStatus('error');
        if(String(e.message||'').includes('exceeds the maximum')){
          uiAlert('資料過大無法存檔。請壓縮圖片或減少照片數量後重試。');
        }
      }
    };
    if(immediate) doWrite();
    else writeTimer.current=setTimeout(doWrite,500);
  },[mainTableId, weddingId]);

  // Photo operations: Cloud Storage for files, Firestore for metadata
  // Accepts File OR data URL string (backward compatible). New uploads use File → Cloud Storage.
  const savePhotoData = useCallback(async (id, fileOrDataUrl) => {
    if (!fbRef.current) return;
    const photoDoc = photosColRef(fbRef.current.db, weddingId).doc(id);

    // Branch: File object → upload to Cloud Storage
    if (fileOrDataUrl instanceof Blob) {
      const file = fileOrDataUrl;
      const ext = (file.type.split('/')[1] || 'jpg').replace(/[^a-z0-9]/gi,'');
      const storagePath = `weddings/${weddingId}/photos/${id}-${Date.now()}.${ext}`;
      const storageRef = fbRef.current.storage.ref(storagePath);
      // First delete the old Cloud Storage file if any (so we don't accumulate orphans)
      try {
        const oldSnap = await photoDoc.get();
        const oldData = oldSnap.data();
        if (oldData?.storagePath) {
          await fbRef.current.storage.ref(oldData.storagePath).delete().catch(()=>{});
        }
      } catch {}
      // Upload new file
      const snap = await storageRef.put(file, {contentType:file.type});
      const url = await snap.ref.getDownloadURL();
      // Save metadata (url + path so we can delete later)
      return photoDoc.set({url, storagePath, mimeType:file.type, size:file.size, uploadedAt:Date.now()});
    }

    // Legacy: data URL (still supported for migration, small files, or fallback)
    return photoDoc.set({dataUrl: fileOrDataUrl});
  },[weddingId]);

  const deletePhotoData = useCallback(async (id) => {
    if (!fbRef.current) return;
    const photoDoc = photosColRef(fbRef.current.db, weddingId).doc(id);
    // Try to delete from Cloud Storage first
    try {
      const snap = await photoDoc.get();
      const d = snap.data();
      if (d?.storagePath) {
        await fbRef.current.storage.ref(d.storagePath).delete().catch(()=>{});
      }
    } catch {}
    return photoDoc.delete();
  },[weddingId]);

  // v4.9：第三參數 localOnly=true → 只更新本地狀態（含 localStorage 鏡像），不寫 Firestore。
  // 用於拖曳過程中的中間狀態，避免每個 mousemove 觸發 Firestore 寫入導致的 echo race / STALE_WRITE 誤報。
  const updateData=useCallback((next,immediate,localOnly)=>{
    setData(next);
    saveLocalMirror(next);
    if (!localOnly) persist(next,immediate);
  },[persist,saveLocalMirror]);

  // 操作日誌：記錄誰、何時、做了什麼
  const logActivity = useCallback((action, detail)=>{
    if(!fbRef.current||!weddingId||!user) return;
    activityColRef(fbRef.current.db, weddingId).add({
      uid: user.uid,
      email: user.email || '',
      name: user.displayName || user.email || '',
      action, detail: detail||'',
      timestamp: Date.now(),
    }).catch(()=>{});
  },[weddingId, user]);

  // 帶日誌的 updateData（用於名單/排位編輯）
  const updateDataLogged=useCallback((next,immediate,localOnly)=>{
    updateData(next,immediate,localOnly);
    // 簡易 diff 判斷動作類型
    const prevG=(data.guests||[]).length, nextG=(next.guests||[]).length;
    const prevT=(data.tables||[]).length, nextT=(next.tables||[]).length;
    if(nextG>prevG) logActivity('新增賓客', `名單 ${prevG} → ${nextG}`);
    else if(nextG<prevG) logActivity('刪除賓客', `名單 ${prevG} → ${nextG}`);
    else if(nextT>prevT) logActivity('新增桌次', `桌數 ${prevT} → ${nextT}`);
    else if(nextT<prevT) logActivity('刪除桌次', `桌數 ${prevT} → ${nextT}`);
    else logActivity('更新資料', '');
  },[updateData, data, logActivity]);

  // ── 實時協作 presence：每 25 秒回報，讀取在線者 ──
  useEffect(()=>{
    if(!weddingId || !fbRef.current || !user || !user.uid || user.isAnonymous) return;
    const db = fbRef.current.db;
    const safeUid = user.uid;
    const myRef = presenceColRef(db, weddingId).doc(safeUid);
    const pageLabel = { admin:'名單', seating:'排位', info:'資訊管理', rsvp:'邀請函', blessings:'祝福牆' };
    const STALE_MS = 90000;
    const report = ()=>{
      const name = user.email || safeUid;
      myRef.set({
        uid: safeUid, name,
        page: pageLabel[parsed.page] || '瀏覽中',
        at: Date.now(),
      }).catch(()=>{});
      // 順帶清理 stale presence docs（瀏覽器崩潰未清理的殘留）
      presenceColRef(db, weddingId).get().then(snap=>{
        const now=Date.now();
        snap.forEach(d=>{ if(now-(d.data().at||0)>STALE_MS) d.ref.delete().catch(()=>{}); });
      }).catch(()=>{});
    };
    report();
    const timer = setInterval(report, 25000);
    const unsub = presenceColRef(db, weddingId).onSnapshot(snap=>{
      const now=Date.now(), list=[];
      snap.forEach(d=>{
        const p=d.data();
        if(p.uid && now-(p.at||0)<STALE_MS && p.uid!==safeUid) list.push(p);
      });
      setPresenceList(list);
    });
    // 每 30 秒重新過濾 presenceList（避免 onSnapshot 無新變動時 stale 資料不消失）
    const uiCleanTimer = setInterval(()=>{
      setPresenceList(prev=>{
        const now=Date.now();
        return prev.filter(p=>now-(p.at||0)<STALE_MS);
      });
    }, 30000);
    return ()=>{ clearInterval(timer); clearInterval(uiCleanTimer); unsub(); myRef.delete().catch(()=>{}); };
  },[weddingId, user, parsed.page]);

  useEffect(()=>{
    if(!loaded||!fbRef.current||!weddingId) return;
    mainDocRef(fbRef.current.db, weddingId).update({mainTableId}).catch(()=>{});
  },[mainTableId,loaded,weddingId]);

  const submitRSVP=useCallback(async guest=>{
    const fb=fbRef.current||await initFirebase();
    fbRef.current=fb;
    // 已登入（含管理者本人預覽送出）沿用現有身分；未登入的賓客才匿名登入
    if(!fb.auth.currentUser){ await fb.auth.signInAnonymously().catch(()=>{}); }
    const ref=mainDocRef(fb.db, weddingId);
    // 改用 arrayUnion：只 append 賓客，不讀整份 doc，僅需 update 權限
    // （Firestore rules 可設定匿名用戶只能更新 guests + lastUpdate 欄位）
    return ref.update({
      guests: window.firebase.firestore.FieldValue.arrayUnion(guest),
      lastUpdate: Date.now()
    });
  },[weddingId]);

  const logout=()=>{setAuthed(false);setPage('rsvp');setShowLogin(false);if(weddingId)navigate(`#/w/${weddingId}`);};
  const onNav=p=>{
    setPage(p);setShowLogin(false);
    if(weddingId) navigate(`#/w/${weddingId}/${p}`);
  };
  // SaaS：完全登出 Firebase Auth
  const handleFirebaseLogout = async ()=>{
    if(!fbRef.current) return;
    await fbRef.current.auth.signOut();
    setUser(null); setWeddingId(null); setWeddings([]); setData(emptyData()); setAuthed(false);
    navigate('#/login');
  };

  // SaaS：刪除婚禮（清除 Firestore + users 記錄）
  const handleDeleteWedding = async (wid) => {
    if (!fbRef.current) return;
    const fb = fbRef.current;
    try {
      await weddingDoc(fb.db, wid).delete();
      const userRef = fb.db.collection('users').doc(user.uid);
      const userSnap = await userRef.get();
      if (userSnap.exists) {
        const ids = (userSnap.data().weddingIds || []).filter(id => id !== wid);
        await userRef.update({ weddingIds: ids });
      }
      const updated = weddings.filter(w => w.weddingId !== wid);
      setWeddings(updated);
      if (weddingId === wid) {
        setWeddingId(null);
        setData(emptyData());
        navigate(updated.length > 0 ? '#/dashboard' : '#/setup');
      }
    } catch(e) {
      uiAlert('刪除失敗：' + e.message);
    }
  };

  const handleDuplicateWedding = async (srcW) => {
    if (!fbRef.current || !srcW) return;
    const fb = fbRef.current;
    // 複製算入免費版專案數上限
    const isProNow = weddings.some(w => w.plan === 'pro');
    if (!isProNow && weddings.length >= FREE_PROJECT_LIMIT) {
      uiProUpgrade(`您已達免費版上限（${FREE_PROJECT_LIMIT} 個婚禮專案），無法再複製`);
      return;
    }
    const ok = await uiConfirm({
      title: '複製婚禮專案',
      message: '將以此專案的「婚禮設定、佈景主題、桌位排版」建立一個新副本。\n\n賓客名單、RSVP 回覆、祝福牆留言與照片不會一併複製（新副本為空白名單）。\n\n確定要複製嗎？',
      confirmText: '建立副本',
      cancelText: '取消',
    });
    if (!ok) return;
    try {
      const now = Date.now();
      const newId = uid() + uid();
      // 讀來源主文件
      const srcSnap = await mainDocRef(fb.db, srcW.weddingId).get();
      const sd = srcSnap.exists ? srcSnap.data() : {};
      const srcConfig = sd.config || srcW.config || {};
      // 婚禮主文件（副本一律從免費版開始、擁有者為自己）
      await weddingDoc(fb.db, newId).set({
        ownerId: user.uid,
        ownerEmail: user.email || '',
        createdAt: now,
        plan: 'free',
        weddingId: newId,
      });
      // main data：複製 設定/主題/桌位排版；清空名單、配對、版本、照片
      const dupData = {
        ...emptyData(),
        config:  { ...srcConfig },
        tables:  Array.isArray(sd.tables)  ? sd.tables.map(t => ({ ...t }))  : [],
        zones:   Array.isArray(sd.zones)   ? sd.zones.map(z => ({ ...z }))   : [],
        markers: Array.isArray(sd.markers) ? sd.markers.map(m => ({ ...m })) : emptyData().markers,
        guests: [],
        avoidPairs: [],
        samePairs: [],
        versions: [],
        photos: [{ id: 'default', enabled: true, order: 0, focalY: 50 }],
        mainTableId: sd.mainTableId != null ? sd.mainTableId : null,
        lastUpdate: now,
      };
      await mainDocRef(fb.db, newId).set(dupData);
      await photosColRef(fb.db, newId).doc('default').set({ dataUrl: DEFAULT_PHOTO_B64 }).catch(() => {});
      // 更新 user.weddingIds
      const userRef = fb.db.collection('users').doc(user.uid);
      const userSnap = await userRef.get();
      const existing = userSnap.exists ? (userSnap.data().weddingIds || []) : [];
      await userRef.set({
        uid: user.uid, email: user.email || '', displayName: user.displayName || '',
        weddingIds: [...existing, newId], updatedAt: now,
      }, { merge: true });
      await loadUserWeddings(fb, user.uid);
      uiAlert('✓ 已建立副本！可在「我的婚禮」中查看並編輯。');
    } catch (e) {
      uiAlert('複製失敗\n\n' + firestoreErrMsg(e));
    }
  };

  // ── 帳戶中心 handlers ──
  const acctChangePassword = async () => {
    if (!fbRef.current || !user?.email) return;
    try {
      await fbRef.current.auth.sendPasswordResetEmail(user.email);
      uiAlert('密碼重設信件已寄出，請查收 ' + user.email);
    } catch(e) { uiAlert('寄送失敗：' + e.message); }
  };
  const acctLinkGoogle = async () => {
    if (!fbRef.current) return;
    const cu = fbRef.current.auth.currentUser;
    if (!cu) return;
    try {
      try {
        await cu.linkWithPopup(fbRef.current.googleProvider);
        uiAlert('已成功連結 Google 帳號');
      } catch (popupErr) {
        if (popupErr.code === 'auth/popup-blocked' || popupErr.code === 'auth/operation-not-supported-in-environment') {
          await cu.linkWithRedirect(fbRef.current.googleProvider);
          return; // 頁面重導向
        }
        throw popupErr;
      }
    } catch(e) {
      if (e.code === 'auth/cancelled-popup-request') return;
      if (e.code === 'auth/popup-closed-by-user') { uiAlert('連結視窗已關閉。若視窗中出現錯誤，多半是此網域尚未在 Firebase 授權，請見下方說明。'); return; }
      if (e.code === 'auth/credential-already-in-use') { uiAlert('此 Google 帳號已連結到其他帳戶'); return; }
      if (e.code === 'auth/unauthorized-domain') { uiAlert('此網域未授權登入。\n\n請至 Firebase 主控台 → Authentication → Settings → 授權網域，加入 wedding-saas-lac.vercel.app 後再試。'); return; }
      uiAlert(`連結失敗（${e.code||'unknown'}）：${e.message}`);
    }
  };
  const acctLogoutThisDevice = async () => { await handleFirebaseLogout(); };
  const acctDeleteAccount = async () => {
    const ok = await uiConfirm({
      title: '永久刪除帳戶？',
      message: '此操作將刪除您的帳戶及所有婚禮專案資料（賓客、排位、照片），無法復原。\n\n確定要繼續嗎？',
      confirmText: '確定刪除帳戶', cancelText: '取消', danger: true,
    });
    if (!ok) return;
    const fb = fbRef.current;
    if (!fb) return;
    try {
      for (const w of weddings) {
        await weddingDoc(fb.db, w.weddingId).delete().catch(()=>{});
      }
      await fb.db.collection('users').doc(user.uid).delete().catch(()=>{});
      await fb.auth.currentUser.delete();
      setUser(null); setWeddingId(null); setWeddings([]);
      navigate('#/login');
      uiAlert('帳戶已刪除');
    } catch(e) {
      if (e.code === 'auth/requires-recent-login') {
        uiAlert('基於安全考量，刪除帳戶需要重新登入。請先登出後重新登入，再進行刪除。');
      } else {
        uiAlert('刪除失敗：' + e.message);
      }
    }
  };

  // Merge photoMap dataUrls into data.photos AND config images for rendering (MUST be before early return — hook order)
  const dataWithImages = useMemo(()=>{
    const cfg = data.config || {};
    return {
      ...data,
      photos: (data.photos||[]).map(p=>({
        ...p,
        dataUrl: photoMap[p.id]?.url || photoMap[p.id]?.dataUrl || p.dataUrl || ''
      })),
      config: {
        ...cfg,
        // Resolve image refs from photoMap, fallback to legacy inline values
        thankYouImgDataUrl:       photoMap['__thankTop']?.url    || photoMap['__thankTop']?.dataUrl    || (cfg.thankYouImgDataUrl       === '__USE_PHOTO__' ? '' : cfg.thankYouImgDataUrl)       || '',
        thankYouImgBottomDataUrl: photoMap['__thankBottom']?.url || photoMap['__thankBottom']?.dataUrl || (cfg.thankYouImgBottomDataUrl === '__USE_PHOTO__' ? '' : cfg.thankYouImgBottomDataUrl) || '',
        logoDataUrl:              photoMap['__logo']?.url        || photoMap['__logo']?.dataUrl        || (cfg.logoDataUrl              === '__USE_PHOTO__' ? '' : cfg.logoDataUrl)              || ''
      }
    };
  }, [data, photoMap]);

  // 套用主題（Hook 必須在 early return 之前）
  const currentTheme = getTheme(data.config);
  // v5.4：預覽中以預覽主題為準，避免切換主題時殘留背景
  const effTheme = (previewMode && previewDraft) ? (THEMES[previewDraft.theme||'cream']||THEMES.cream) : currentTheme;
  const boThemeKey = (previewMode && previewDraft) ? (previewDraft.theme||data.config?.theme||'cream') : (data.config?.theme||'cream');
  // v6.16.1：只有「檢視特定婚禮」(parsed.section==='w'，含賓客頁與後台) 才套主題；
  // 登入 / Dashboard / 公開首頁一律 applyTheme(null) → 不被婚禮主題污染（修登入頁變深色）。
  React.useEffect(()=>{ applyTheme(parsed.section==='w' ? currentTheme : null); },[data.config?.theme, parsed.section]);
  React.useEffect(()=>{ applyFont(data.config?.fontCJK||'noto-serif', data.config?.fontLatin||'cormorant'); },[data.config?.fontCJK, data.config?.fontLatin]);

  // v4.12：外觀預覽模式 handlers
  const startPreview = (draft) => {
    setPreviewDraft(draft);
    setPreviewMode(true);
    applyTheme(THEMES[draft.theme||'cream'] || THEMES.cream);
    applyFont(draft.fontCJK||'noto-serif', draft.fontLatin||'cormorant');
    preloadAllFonts();
  };
  const cancelPreview = () => {
    setPreviewMode(false);
    setPreviewDraft(null);
    applyTheme(currentTheme);
    applyFont(data.config?.fontCJK||'noto-serif', data.config?.fontLatin||'cormorant');
  };
  const applyPreviewConfirm = () => {
    if (previewDraft) updateData({...data, config:{...data.config,...previewDraft}});
    setPreviewMode(false);
    setPreviewDraft(null);
  };

  // ── SaaS 路由判斷（所有 hooks 之後才能 early return）──

  // Auth 初始化中
  if(!authReady) return (
    <div className="wed" style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:14,background:'#F9F5EF'}}>
      <Spinner size={30}/><div style={{color:'#9A8F82',fontSize:13}}>連線中...</div>
    </div>
  );

  const isLoggedIn = user && !user.isAnonymous;
  const currentWedding = weddings.find(w=>w.weddingId===weddingId);
  const currentRole = isLoggedIn ? getRole(currentWedding, user.uid) : null;
  const isOwnerOfCurrent = !!currentRole; // 有任何角色即可存取（admin/editor/viewer）
  const adminPages = ['admin','seating','info','blessings'];
  const isAdminRoute = parsed.section==='w' && ['admin','seating','info'].includes(parsed.page);
  const isPublicRoute = parsed.section==='w'; // 所有 #/w/* 路由都允許未登入

  // v6.12.2：付款完成落地頁 — 最高優先，先於任何 auth/婚禮判斷，避免被彈走
  // 綠界 → payResult 函式 302 → #/pay/result。PayResultPage 自行等 user.uid 到位再輪詢
  if(parsed.section==='pay' && parsed.weddingId==='result'){
    return (
      <div style={{minHeight:'100vh',background:'#F9F5EF'}}>
        <ConfirmDialogHost />
        <PayResultPage user={user} fbRef={fbRef} />
      </div>
    );
  }

  // 公開形象首頁：未登入訪客看 LandingPage（CTA 導向 #/login）
  if(!isLoggedIn && parsed.section==='home'){
    return <LandingPage />;
  }

  // 公開婚禮路由（#/w/{id} 及其子頁面）：賓客無需登入即可訪問 RSVP / 祝福牆
  // 後台頁面（admin/seating/info）：需登入
  if(!isLoggedIn && !isPublicRoute && parsed.section!=='join'){
    return <AppShell><LoginPage onAuthSuccess={()=>{}} /></AppShell>;
  }

  // 已登入、在 #/home 或 #/login → 依婚禮數量導向（不顯示公開形象頁）
  if(isLoggedIn && (parsed.section==='home'||parsed.section==='login'||parsed.section==='')){
    if(!loadingWeddings && user.email){
      // v6.8.0：管理員帳號直接跳後台，不走婚禮向導
      if(isPlatformAdmin(user)) navigate('#/dev');
      else if(weddings.length===0) navigate('#/setup');
      else if(weddings.length===1) navigate(`#/w/${weddings[0].weddingId}`);
      else navigate('#/dashboard');
    }
    return (
      <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#F9F5EF'}}>
        <Spinner size={30}/>
      </div>
    );
  }

  // v6.8.0 開發者後台 — 只有平台管理員可進入
  if(parsed.section==='dev'){
    if(!isLoggedIn) return <AppShell><LoginPage onAuthSuccess={()=>{}} /></AppShell>;
    // v6.8.1：Google 登入後 email 可能在第一個 render 尚未填入、或婚禮還在讀取中
    // → 先顯示 Spinner，避免誤判為「無權限」
    if(!user.email || loadingWeddings){
      return (
        <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#F9F5EF'}}>
          <Spinner size={30}/>
        </div>
      );
    }
    if(!isPlatformAdmin(user)){
      return <AppShell><div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{...S.card,padding:32,maxWidth:360,textAlign:'center'}}>
          <div style={{fontSize:28,marginBottom:10}}>🔒</div>
          <div style={{fontSize:16,letterSpacing:1,marginBottom:8}}>無權限</div>
          <div style={{fontSize:13,color:'#9A8F82',marginBottom:16}}>此頁面僅供平台管理員使用。</div>
          <Btn onClick={()=>navigate('#/dashboard')} style={{width:'100%',justifyContent:'center'}}>返回</Btn>
        </div></div></AppShell>;
    }
    return <AppShell><DevConsolePage user={user} fbRef={fbRef} onBack={()=>navigate('#/dashboard')} /></AppShell>;
  }

  // 婚禮創建向導
  const currentPlan = weddings.find(w=>w.weddingId===weddingId)?.plan || 'free';
  const isPro = weddings.some(w=>w.plan==='pro') || currentPlan==='pro';
  const atProjectLimit = !isPro && weddings.length >= FREE_PROJECT_LIMIT;

  if(isLoggedIn && (parsed.section==='setup' || (!loadingWeddings && weddings.length===0 && parsed.section!=='w' && !isPlatformAdmin(user)))){
    // 已達免費版上限且非 Pro → 擋住，不讓進向導
    if(atProjectLimit){
      navigate('#/dashboard');
      return null;
    }
    return (
      <AppShell><WeddingSetupWizard user={user} fbRef={fbRef}
        onCancel={weddings.length>0 ? ()=>navigate('#/dashboard') : null}
        onComplete={(newId)=>{
          // 立刻在本地加入這筆婚禮，避免 loadUserWeddings 期間 weddings.length===0 再次觸發向導
          setWeddings(prev => prev.length===0 ? [{weddingId:newId, config:{}}] : prev);
          setWeddingId(newId);
          navigate(`#/w/${newId}`);
          if(fbRef.current) loadUserWeddings(fbRef.current, user.uid);
        }} /></AppShell>
    );
  }

  // 我的婚禮列表
  // 協作邀請：#/join/{token}
  if(parsed.section==='join' && parsed.weddingId){
    const token = parsed.weddingId;
    if(!isLoggedIn){
      // 未登入 → 記住 token，導去登入
      try { sessionStorage.setItem('pendingInvite', token); } catch {}
      return <AppShell><LoginPage onAuthSuccess={()=>{}} inviteMode /></AppShell>;
    }
    return <AppShell><JoinInvitePage token={token} onAccept={acceptInvite}
      onDone={(wid)=>{ navigate(`#/w/${wid}`); }}
      onCancel={()=>navigate('#/dashboard')} /></AppShell>;
  }

  if(parsed.section==='dashboard'){
    const dashTab = parsed.weddingId === 'account' ? 'account' : 'weddings';
    return (
      <AppShell><DashboardPage user={user} weddings={weddings}
        activeTab={dashTab}
        onTabChange={(t)=>navigate(t==='account'?'#/dashboard/account':'#/dashboard')}
        accountProps={{
          fbRef,
          onChangePassword: acctChangePassword,
          onLinkGoogle: acctLinkGoogle,
          onLogoutThisDevice: acctLogoutThisDevice,
          onDeleteAccount: acctDeleteAccount,
        }}
        onSelectWedding={wid=>navigate(`#/w/${wid}`)}
        onCreateNew={()=>{ if(atProjectLimit){ uiProUpgrade(`您已達免費版上限（${FREE_PROJECT_LIMIT} 個婚禮專案）`); return; } navigate('#/setup'); }}
        onDeleteWedding={handleDeleteWedding}
        onDuplicateWedding={handleDuplicateWedding}
        onLogout={handleFirebaseLogout} /></AppShell>
    );
  }

  // 後台頁面但未登入 → 要求登入
  if(isAdminRoute && !isLoggedIn){
    return <AppShell><LoginPage onAuthSuccess={()=>{}} /></AppShell>;
  }

  // 後台頁面但非此婚禮 owner → 拒絕
  if(isAdminRoute && isLoggedIn && !isOwnerOfCurrent && weddings.length>0){
    return (
      <AppShell><div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#F9F5EF'}}>
        <div style={{...S.card,padding:32,textAlign:'center'}}>
          <div style={{fontSize:28,marginBottom:8}}>🔒</div>
          <div style={{fontSize:15,color:'#3A332B',marginBottom:16}}>無權限存取此婚禮後台</div>
          <Btn onClick={handleFirebaseLogout}>登出</Btn>
        </div>
      </div></AppShell>
    );
  }

  // 尚未指定婚禮
  if(!weddingId){
    if(isLoggedIn && !loadingWeddings){
      if(isPlatformAdmin(user)) navigate('#/dev');
      else navigate(weddings.length===0?'#/setup':(weddings.length===1?`#/w/${weddings[0].weddingId}`:'#/dashboard'));
    }
    return (
      <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#F9F5EF'}}>
        <Spinner size={30}/>
      </div>
    );
  }

  // 婚禮資料載入中
  if(!loaded) return (
    <div className="wed" style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:14,background:currentTheme.pageBg,color:currentTheme.text}}>
      <Spinner size={30}/><div style={{color:currentTheme.subText,fontSize:13}}>連線至雲端...</div>
    </div>
  );

  // 路由 page：URL 優先，否則用 state
  const activePage = (parsed.section==='w' && parsed.page) ? parsed.page : page;
  // 角色權限：可進入後台 = 有任何角色；各頁細分權限
  const isAuthedAdmin = isLoggedIn && isOwnerOfCurrent;  // 可進入後台（含 viewer）
  const canInfo       = hasPerm(currentRole, 'info');       // 資訊管理（僅 admin）
  const canEditGuests = hasPerm(currentRole, 'editGuests'); // 名單編輯（admin/editor）
  const canEditSeating= hasPerm(currentRole, 'editSeating');// 排位編輯（admin/editor）
  const readOnly      = currentRole === 'viewer';           // 唯讀模式

  return (
    <div className="wed" style={effTheme.dark ? {background:effTheme.pageBg,color:effTheme.text} : {background:effTheme.pageBg}}>
      <ConfirmDialogHost />
      {/* v5.3：外觀預覽模式橫幅 — 方案A 金色斜紋警告條，依預覽主題配色 */}
      {previewMode && (()=>{
        const pt = THEMES[(previewDraft&&previewDraft.theme)||'cream'] || THEMES.cream;
        const stripeA = pt.primary, stripeB = pt.primaryHover||pt.primary;
        return (
        <div data-tp="1" style={{position:'fixed',top:0,left:0,right:0,zIndex:9999,
          background:`repeating-linear-gradient(135deg, ${stripeA} 0 22px, ${stripeB} 22px 44px)`,
          padding:4,boxShadow:'0 3px 16px rgba(0,0,0,.3)',fontFamily:'inherit'}}>
          <div data-tp="1" style={{background:pt.cardBg,borderRadius:4,padding:'12px 22px',
            border:`1px solid ${pt.border}`,
            display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
            <div data-tp="1" style={{display:'flex',alignItems:'center',gap:12,minWidth:0}}>
              <div data-tp="1" className="wed-preview-eye" style={{width:34,height:34,borderRadius:'50%',
                background:pt.primary,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',
                fontSize:17,flexShrink:0,boxShadow:`0 2px 8px ${pt.primary}66`}}>👁</div>
              <div data-tp="1">
                <div data-tp="1" style={{fontSize:14,fontWeight:600,color:pt.text,letterSpacing:.5}}>
                  外觀預覽模式 — 目前預覽的主題：{pt.name}
                </div>
                <div data-tp="1" style={{fontSize:11,color:pt.subText,marginTop:1}}>目前顯示的是預覽效果，尚未儲存套用</div>
              </div>
            </div>
            <div data-tp="1" style={{display:'flex',gap:9,flexShrink:0}}>
              <button data-tp="1" onClick={cancelPreview}
                style={{padding:'8px 18px',fontSize:13,borderRadius:3,border:`1px solid ${pt.border}`,
                  background:pt.pageBg,color:pt.subText,cursor:'pointer',fontFamily:'inherit',letterSpacing:.3}}>
                ✕ 放棄套用
              </button>
              <button data-tp="1" onClick={applyPreviewConfirm}
                style={{padding:'8px 18px',fontSize:13,borderRadius:3,border:'none',
                  background:pt.primary,color:'#FFFEFA',cursor:'pointer',fontFamily:'inherit',
                  letterSpacing:.3,fontWeight:600,boxShadow:`0 2px 8px ${pt.primary}59`}}>
                ✓ 確定套用外觀
              </button>
            </div>
          </div>
        </div>
        );
      })()}
      <div style={previewMode ? {marginTop:70} : {}}>
      <NavBar page={activePage} onNav={onNav} authed={isAuthedAdmin} onLogout={isLoggedIn?handleFirebaseLogout:logout} onDashboard={isLoggedIn && weddings.length>0 ? ()=>navigate('#/dashboard') : null} syncStatus={syncStatus} cfg={previewMode&&previewDraft?{...data.config,...previewDraft}:data.config} role={currentRole} presence={presenceList} />
      {error&&<div style={{background:'#FAEEEE',color:'#C04040',padding:'7px 20px',fontSize:11,textAlign:'center'}}>⚠️ 同步問題：{error}</div>}

      {/* 唯讀模式橫幅 */}
      {readOnly && ['admin','seating','info'].includes(activePage) && (
        <div style={{background:'#FFF4DC',color:'#8A6D1A',padding:'8px 20px',fontSize:12,textAlign:'center',borderBottom:'1px solid #F0DFA0'}}>
          👁 您是檢視者（Viewer），此頁面為唯讀模式，無法編輯
        </div>
      )}

      {activePage==='rsvp'    && <RSVPPage data={previewMode&&previewDraft?{...dataWithImages,config:{...dataWithImages.config,...previewDraft}}:dataWithImages} onSubmit={submitRSVP} />}
      {activePage==='blessings' && <BlessingWallPage data={previewMode&&previewDraft?{...dataWithImages,config:{...dataWithImages.config,...previewDraft}}:dataWithImages} />}
      {activePage==='admin'   && isAuthedAdmin && <BackofficeChrome themeKey={boThemeKey} page={activePage}><AdminPage data={dataWithImages} onUpdate={canEditGuests?updateDataLogged:()=>uiAlert('您沒有編輯名單的權限')} readOnly={!canEditGuests} weddingId={weddingId} isPro={isPro} /></BackofficeChrome>}
      {activePage==='seating' && isAuthedAdmin && <BackofficeChrome themeKey={boThemeKey} page={activePage}><SeatingPage data={dataWithImages} onUpdate={canEditSeating?updateDataLogged:()=>uiAlert('您沒有編輯排位的權限')} mainTableId={mainTableId} setMainTableId={setMainTableId} isPro={isPro} readOnly={!canEditSeating} /></BackofficeChrome>}
      {activePage==='info'    && isAuthedAdmin && canInfo && <BackofficeChrome themeKey={boThemeKey} page={activePage}><InfoPage data={dataWithImages} onUpdate={updateData} savePhotoData={savePhotoData} deletePhotoData={deletePhotoData} photoMap={photoMap} onPreview={startPreview} weddingId={weddingId} fbRef={fbRef} currentRole={currentRole} currentWedding={currentWedding} user={user} onReloadWeddings={()=>fbRef.current&&loadUserWeddings(fbRef.current,user.uid)} boThemeKey={boThemeKey} /></BackofficeChrome>}
      {activePage==='info'    && isAuthedAdmin && !canInfo && (
        <div style={{minHeight:'calc(100vh - 58px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
          <div style={{...S.card,padding:32,maxWidth:360,width:'100%',textAlign:'center'}}>
            <div style={{fontSize:28,marginBottom:10}}>🔒</div>
            <div style={{fontSize:15,marginBottom:8}}>資訊管理僅限管理員</div>
            <div style={{fontSize:12,color:'#9A8F82'}}>您目前的角色為「{ROLE_LABEL[currentRole]||'—'}」</div>
          </div>
        </div>
      )}
      {['admin','seating','info'].includes(activePage) && !isAuthedAdmin && (
        <div style={{minHeight:'calc(100vh - 58px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
          <div style={{...S.card,padding:32,maxWidth:360,width:'100%',textAlign:'center'}}>
            <div style={{fontSize:28,marginBottom:10}}>🔒</div>
            <div style={{fontSize:16,letterSpacing:1,marginBottom:16}}>請先登入</div>
            <Btn onClick={()=>navigate('#/login')} style={{width:'100%',justifyContent:'center'}}>前往登入</Btn>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

