# 覺醒生活｜Living Awakening｜兩書入門選讀閱讀網站

這是第八個公益網站的原始碼專案：一個繁體中文、垂直捲動、六章可展開收合的靜態閱讀網站，選讀江慶淇老師《要開悟讀這本書就夠了》與《靈性覺醒》中與個人實踐最直接相關的教導。

> **正式站名「覺醒生活｜Living Awakening」已確定**，集中設定於 `src/content/site.ts` 的 `SITE_NAME`，後續變更可集中修改該檔，不需更動其他內容。

## 專案性質與界線

- 這是一份**有選擇的入門導讀**：不代表原書全部內容，也不代表作者背書。
- 六章章名、順序與識別碼（chapter-1 … chapter-6）為固定編輯結構，**不是六階修行**，也不需依序「通過」。
- 內容分類（原書主張／白話解說／實踐建議（編輯整理）／編輯界線）保留於內容資料模型；新編例子與小行動在介面上標示「編輯整理」。
- 無帳號、無付款、無訂閱、無分析追蹤、無推播、無修行評分；不蒐集健康或修行紀錄。
- 站上不提供原書 PDF、封面、附錄圖或整本下載；來源以「書名｜原篇名｜書頁｜PDF頁」文字索引呈現（S01–S21）。

## 技術棧

- **Next.js 16（App Router）＋ TypeScript 5**：單一頁面（`/`），全部內容在伺服器端產生時即寫入 HTML。
- **Tailwind CSS 4**：主題設定於 `src/app/globals.css`（米白底、深灰字、低彩度藍綠點綴），無外部字型服務，採系統字型堆疊。
- **無資料庫、無 API 路由、無伺服器端運行邏輯**：閱讀互動（展開收合、深層連結、回頂端）以原生 `<details>`/`<summary>` 加少量漸進增強 JavaScript 實作；停用 JavaScript 時仍可閱讀全部內容。
- 少量 shadcn/ui 元件（Button）與 lucide 圖示。

## 目錄結構

```
src/
  app/
    layout.tsx        # html lang="zh-Hant"、metadata、favicon
    page.tsx          # 單頁組裝：導讀、章節導覽、六章、頁末回顧、來源與編輯說明
    globals.css       # 主題、閱讀排版、列印與減少動態樣式
  components/
    reading-header.tsx        # 固定頂欄（站名、展開／收合六章）
    chapter-section.tsx       # 章節區塊（常顯示層＋兩層揭露）
    source-index.tsx          # 來源對照 S01–S21、書目、編輯說明
    return-to-top.tsx         # 回頂端浮動按鈕
    deep-link-controller.tsx  # 深層連結與列印展開控制（無 UI）
  content/            # 內容資料（唯一內容來源，總覽／章節／來源共用）
    types.ts          # 內容模型（含四種內容分類）
    chapters.ts       # 六章九欄文案（E1–E6）
    sources.ts        # S01–S21 來源、兩書書目、版本與使用範圍（G1／G2／B2／H4）
    overview.ts       # 總覽與頁末文案（F2／E7）、編輯說明文字
    site.ts           # 站名與部署設定
  lib/
    reading-controls.ts       # 用戶端互動輔助（展開全部、深層連結、回頂）
scripts/
  build-static.mjs    # 靜態匯出建置（輸出 out/）
  serve-static.mjs    # 本地靜態檔案伺服器（無外部相依）
  verify-content.mts  # 內容驗證與閱讀時間重算（Node 22.6+，建議 24）
```

 內容修改一律在 `src/content/` 進行；總覽摘要與章節本文共用同一份資料，不重複維護。

## 環境需求

- Node.js 22.6 以上（建議 24；`scripts/verify-content.mts` 需要）
- npm 10 以上（或 Bun 1.1 以上，兩者皆可執行本專案；以下說明以 npm 為準）

## 安裝與本地預覽（開發模式）

```bash
npm install        # 或 bun install
npm run dev        # http://localhost:3000
```

開發模式與 Z.ai 預覽相容（埠號 3000）。

## 內容驗證

```bash
npm run verify:content
```

檢查：六章順序與固定章名、九欄齊備、第二章三項作為與「三個要素缺一不可」、40–90分鐘時長、S01–S21 完整與章節對應、《靈性覺醒》 ISBN 差異保留、禁用行銷語與外部 URL、以及**重新核算預設可見總覽的閱讀時間**。

## 型別檢查與 Lint

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint .
```

## 靜態匯出（GitHub Pages 等靜態託管）

```bash
npm run build:static
```

- 輸出至 **`out/**（可直接上傳的完整靜態站台**，含 `index.html`、`404.html`、`_next/` 資產）。
- 建置中繼檔寫入 `.next-export/`，不會干擾開發模式的 `.next/`。
- 所有閱讀互動（展開收合、深層連結 `#chapter-N`、`#chapter-N-content`、`#chapter-N-deeper`、`#source-SXX`）在匯出站台上完全可用。

### 本地驗證匯出結果

```bash
npm run serve:static              # http://localhost:4173（預設目錄 out/）
node scripts/serve-static.mjs 8080 out   # 自訂埠與目錄
```

## 部署設定（集中管理）

| 情境 | 設定 | 說明 |
|---|---|---|
| 域名根目錄託管（如 `example.com/`） | 不需設定 | `npm run build:static` 後上傳 `out/` |
| GitHub Pages 專案子路徑（如 `user.github.io/repo/`） | `NEXT_PUBLIC_BASE_PATH=/repo` | 資產與 favicon 會自動加上前綴；站內連結皆為錨點，無需修改 |

範例：

```bash
NEXT_PUBLIC_BASE_PATH=/my-repo npm run build:static
# 上傳 out/ 內容至 my-repo 的 gh-pages 分支或 Pages 部署來源
```

相關設定集中在：

- `next.config.ts`（依 `BUILD_MODE` 與 `NEXT_PUBLIC_BASE_PATH` 切換）
- `scripts/build-static.mjs`（建置入口）
- `src/content/site.ts`（站名與介面文字）

> **公開 URL 尚未確定**：本專案未預設任何網域、倉庫名稱或正式網址（metadata 不含 canonical URL）。確定託管位置後，設定 `NEXT_PUBLIC_BASE_PATH` 重新建置即可，不需改內容。

### GitHub Pages 建議步驟

1. 建立儲存庫並推送本專案（`node_modules/`、`out/`、`.next*` 已被 `.gitignore` 排除）。
2. 設定 Pages 來源（例如 GitHub Actions 或 `gh-pages` 分支）。
3. 以 `NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build:static` 建置，上傳 `out/`。
4. 若日後改用自訂網域（根目錄託管），移除 `NEXT_PUBLIC_BASE_PATH` 重新建置。

## 列印

使用瀏覽器列印（Ctrl/Cmd+P）時，指令稿會自動展開全部收合區塊，列印樣式會隱藏導覽列與浮動按鈕，完整呈現六章內容與來源（約 37 頁 A4）。

## 待決事項

- 品牌名稱與標語已確定，集中設定於 `src/content/site.ts`。
- 《靈性覺醒》封面 ISBN（978-957-43-9115-8）與內文 ISBN（978-957-43-9327-5）的版本對應未確認；本站保留差異、不合併、不猜測。
- 公開部署、網域與儲存庫名稱：待後續明確指示後執行。

## 授權與素材界線

- 本站內容為原創白話轉述、新編例子及少量必要短引文，完整標示來源（S01–S21）。
- 《要開悟讀這本書就夠了》版權頁載「版權所有．翻印必究」；《靈性覺醒》內文 PDF458（未編頁）載有利用與散布聲明（見網站「版本與使用範圍說明」）。本站不據此重製封面、附錄圖或提供原書檔案下載。
