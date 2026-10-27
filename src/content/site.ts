/**
 * 網站設定 — 集中管理部署與命名設定。
 *
 * 正式站名為「覺醒生活｜Living Awakening」。
 * 部署路徑：域名根目錄hosting時不需設定；
 * GitHub Pages 專案子路徑（如 /repo-name/）時，
 * 以環境變數 NEXT_PUBLIC_BASE_PATH=/repo-name 建置（見 scripts/build-static.mjs）。
 */

/** 正式站名及標語 */
export const SITE_NAME = "覺醒生活";
export const SITE_NAME_EN = "Living Awakening";
export const SITE_TAGLINE = "讓領悟走進生活，讓覺醒成為實踐。";
export const SITE_TAGLINE_EN = "Bring insight into everyday life. Live what you awaken to.";

/** 頁面標題 */
export const SITE_TITLE = `${SITE_NAME}｜${SITE_NAME_EN} — 讓領悟走進生活，讓覺醒成為實踐。`;

/** 網站描述（metadata 用，取自 F2 導讀） */
export const SITE_DESCRIPTION =
  "選讀江慶淇老師《要開悟讀這本書就夠了》與《靈性覺醒》中與個人實踐最直接相關的教導，整理成六章的繁體中文入門導讀。這是一份有選擇的導讀，不代表原書全部內容，也不代表作者背書。";

/** 總覽閱讀時間標示（F2 核可文案） */
export const READING_TIME_LABEL = "總覽約3–5分鐘";

/** 總覽閱讀時間補充說明 */
export const READING_TIME_NOTE = "編輯估計，非實測速度";

/** 介面文字（導覽與控制用語） */
export const UI_TEXT = {
  skipToContent: "跳至主要內容",
  chapterNavHeading: "章節快速導覽",
  chapterNavNote: "章次是導覽順序，不是修行等級；可直接跳到任何一章。",
  expandAll: "展開六章",
  collapseAll: "收合六章",
  backToTop: "回到頂端",
  expandChapter: (shortTitle: string) => `了解這一章：${shortTitle}`,
  expandChapterAria: (number: string, title: string) => `展開第${number}章：${title}`,
  deeperChapter: (shortTitle: string) => `深入原書脈絡：${shortTitle}`,
  deeperChapterAria: (number: string, title: string) => `展開第${number}章深入原書脈絡：${title}`,
  level1Heading: "本章內容",
  deeperHeading: "深入原書脈絡（選讀）",
  sourcesLink: "來源與編輯說明",
  overviewLink: "回到總覽",
  usedInLabel: "用於",
  bookLabel: "書名",
  originalTitleLabel: "原篇名",
  bookPagesLabel: "書頁",
  pdfPagesLabel: "PDF頁",
  sourceIdLabel: "來源碼",
};

/** 建置時的基底路徑（靜態匯出子路徑支援；開發模式為空字串） */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/+$/, "") || "";
