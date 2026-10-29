/**
 * 第八站「覺醒生活｜Living Awakening」閱讀網站 — 內容資料模型
 *
 * 依《第八站_網站開發交接》三、資料欄位與可追溯性：
 * 每章保留識別碼、章次、章名、核心句、教導說明、日常關係、生活例子、
 * 小行動摘要、小行動步驟、常見誤解、深入脈絡、來源碼、編輯註記（追溯）。
 * 每個主要段落另保留內容類型（原書主張／白話解說／實踐建議（編輯整理）／編輯界線）。
 * 這是內容管理資料；公開介面只在必要位置顯示標籤。
 */

/** 內容分類（E0 追溯規則） */
export type ContentKind =
  | "original" // 原書主張：來源明確說出的內容（含僅整理直排標點的清單）
  | "plain" // 白話解說：原書主張的忠實轉述
  | "editorial" // 實踐建議（編輯整理）：本站新寫的情境、問題與操作步驟
  | "boundary"; // 編輯界線：本站為避免誤用而明訂的範圍

export const KIND_LABELS: Record<ContentKind, string> = {
  original: "原書主張",
  plain: "白話解說",
  editorial: "實踐建議（編輯整理）",
  boundary: "編輯界線",
};

/** 段落：可帶粗體引導句（如「工作和生活為主軸。」） */
export interface Paragraph {
  text: string;
  lead?: string;
  /** 覆寫區塊預設分類 */
  kind?: ContentKind;
}

/** 第二層選讀中的必要短引文 */
export interface Quote {
  text: string;
  attribution: string;
}

/** 常見誤解項目 */
export interface Misunderstanding {
  question: string;
  answer: string;
}

/** 來源筆記型別（G1／G2） */
export type SourceBook = "jia" | "yi";

/** 介面語言（zh＝繁體中文〔預設〕；en＝英文〔編輯翻譯〕；id＝印尼文〔編輯翻譯〕） */
export type Lang = "zh" | "en" | "id";

/** 單筆來源（G1 逐項來源對照表） */
export interface SourceRef {
  /** 來源碼 S01–S21（本稿追溯編號） */
  id: string;
  book: SourceBook;
  /** 原書篇章序號（如「開悟之二十二」；手札類可留空） */
  sequence?: string;
  /** 原篇名／手札篇名（保留原書用語） */
  title: string;
  /** 原篇名的編輯英譯（僅英文版使用；非官方授權譯名） */
  titleEn?: string;
  /** 篇章序號的編輯英譯（如 Enlightenment No. 22；僅英文版使用） */
  sequenceEn?: string;
  /** 手札編號補充的編輯英譯（僅英文版使用） */
  noteLabelEn?: string;
  /** 原篇名的編輯印尼文譯（僅印尼文版使用；非官方授權譯名） */
  titleId?: string;
  /** 篇章序號的編輯印尼文譯（如 Pencerahan No. 22；僅印尼文版使用） */
  sequenceId?: string;
  /** 手札編號補充的編輯印尼文譯（僅印尼文版使用） */
  noteLabelId?: string;
  /** 手札編號補充（如「慶淇悟得手札之六」） */
  noteLabel?: string;
  /** 書頁起迄（紙本印刷頁碼；無頁碼寫「未編頁」） */
  bookPages: string;
  /** PDF 頁起迄（自檔案第一張算 1） */
  pdfPages: string;
  /** 用於哪些章（G1「用於網站章」欄） */
  usedIn: string[];
  /** 支持的核心與頁碼明細（讀者回查用） */
  note?: string;
}

/** 兩書書目與版本資料（B1／B2／G2／H4） */
export interface BookInfo {
  key: SourceBook;
  title: string;
  /** 書名的編輯英譯（僅英文版使用；非官方授權英文版書名） */
  titleEn?: string;
  /** 書名的編輯印尼文譯（僅印尼文版使用；非官方授權印尼文版書名） */
  titleId?: string;
  author: string;
  authorNote?: string;
  publisher: string;
  place: string;
  edition: string;
  isbnInner: string;
  isbnCover?: string;
  isbnCoverNote?: string;
  basis: string;
  copyrightNote?: string;
}

/** 章節內容區塊（同一分類的段落群） */
export interface Section {
  kind: ContentKind;
  paragraphs: Paragraph[];
}

/** 第二章常顯示的三項修行作為（原書清單，僅整理橫排標點） */
export interface Practices {
  items: string[];
}

/** 章（E1–E6 每章九欄 + 識別資料） */
export interface Chapter {
  /** 固定識別碼 chapter-1 … chapter-6 */
  id: string;
  /** 章次 1–6 */
  order: number;
  /** 中文數字章號（一～六） */
  number: string;
  /** 導覽與控制名稱用的短名（導覽用語，非章名改寫） */
  shortTitle: string;
  /** 章名（固定，不得更改；英／印尼文版為編輯譯，原文保留於 titleZh） */
  title: string;
  /** 英／印尼文版保留的原始中文章名（供對等驗證；繁中版不使用） */
  titleZh?: string;
  /** 一句核心（常顯示） */
  core: string;
  /** 常顯示的必要界線（第一章閱讀提醒） */
  alwaysVisibleNote?: {
    label: string;
    text: string;
    kind: ContentKind;
  };
  /** 第二章：三個修行作為清單（常顯示，依原書次序） */
  practices?: Practices;
  /** 教導說明（展開，第一層） */
  teaching: Section;
  /** 與日常生活的關係（展開，第一層） */
  dailyLife: Section;
  /** 生活例子（展開，第一層；編輯整理） */
  example: Section;
  /** 一個小行動 */
  action: {
    /** 摘要（常顯示） */
    summary: string;
    /** F2 總覽在摘要後的補充句（常顯示） */
    overviewQualifier?: string;
    /** 展開步驟（第一層） */
    steps: string;
    kind: ContentKind;
  };
  /** 常見誤解（展開，第一層） */
  misunderstandings: {
    kind: ContentKind;
    items: Misunderstanding[];
  };
  /** 深入原書脈絡（第二層選讀） */
  deeper: {
    kind: ContentKind;
    paragraphs: Paragraph[];
    quote?: Quote;
  };
  /** 來源碼（本章第 9 欄所列） */
  sourceIds: string[];
  /** 來源與編輯追溯（第 9 欄，公開追溯說明） */
  traceability: string;
}

/** 來源與編輯說明區資料（F3／B4／E0／G2 之公開面向；三語共用結構） */
export interface EditorialInfoData {
  sourcesHeading: string;
  sourceIndexHeading: string;
  sourceIndexIntro: string;
  booksHeading: string;
  versionHeading: string;
  conventionsHeading: string;
  conventions: string[];
  principlesHeading: string;
  principles: string[];
  readingTimeHeading: string;
  readingTimeNote: string;
}

/** 總覽與頁末資料（F2／E7；三語共用結構） */
export interface OverviewData {
  INTRO: {
    heading: string;
    paragraphs: string[];
  };
  CLOSING: {
    heading: string;
    paragraphs: string[];
    reflectionHeading: string;
    reflectionParagraphs: string[];
  };
  TRY_IT_LABEL: string;
  EDITORIAL_INFO: EditorialInfoData;
}
