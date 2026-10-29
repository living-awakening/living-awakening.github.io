/**
 * 網站設定 — 集中管理部署、命名與三語（zh-TW／en／id）介面設定。
 *
 * 正式站名為「覺醒生活｜Living Awakening」。
 * 部署路徑：域名根目錄hosting時不需設定；
 * GitHub Pages 專案子路徑（如 /repo-name/）時，
 * 以環境變數 NEXT_PUBLIC_BASE_PATH=/repo-name 建置（見 scripts/build-static.mjs）。
 *
 * 語言版本：
 * - 繁體中文（預設）：/ （根路徑）
 * - 英文（編輯翻譯）：/en/ （見 src/app/(en)/en/）
 * - 印尼文（編輯翻譯）：/id/ （見 src/app/(id)/id/）
 * 介面字典以 UI_TEXT（繁中）為基準型別，UI_TEXT_EN／UI_TEXT_ID 必須鍵位完全一致（編譯期保證）。
 */

import type { Lang } from "./types";

/** 正式站名及標語 */
export const SITE_NAME = "覺醒生活";
export const SITE_NAME_EN = "Living Awakening";
export const SITE_TAGLINE = "讓領悟走進生活，讓覺醒成為實踐。";
export const SITE_TAGLINE_EN = "Bring insight into everyday life. Live what you awaken to.";

/** 官方標語之印尼文提案譯（供擁有者核定；非官方品牌文案，待核可前僅用於 metadata 標題） */
export const SITE_TAGLINE_ID = "Bawa pemahaman ke dalam kehidupan sehari-hari. Jadikan kebangkitan sebagai praktik.";

/** 正式部署網址（GitHub Pages；僅用於 metadataBase 與 hreflang，實際托管以此為準） */
export const SITE_ORIGIN = "https://living-awakening.github.io";

/** 頁面標題（繁中版） */
export const SITE_TITLE = `${SITE_NAME}｜${SITE_NAME_EN} — 讓領悟走進生活，讓覺醒成為實踐。`;

/** 頁面標題（英文版） */
export const SITE_TITLE_EN = `${SITE_NAME_EN}｜${SITE_NAME} — Bring insight into everyday life. Live what you awaken to.`;

/** 頁面標題（印尼文版；標語為編輯提案譯，見 SITE_TAGLINE_ID 註記） */
export const SITE_TITLE_ID = `${SITE_NAME_EN}｜${SITE_NAME} — Bawa pemahaman ke dalam kehidupan sehari-hari. Jadikan kebangkitan sebagai praktik.`;

/** 網站描述（metadata 用，取自 F2 導讀；繁中版） */
export const SITE_DESCRIPTION =
  "選讀江慶淇老師《要開悟讀這本書就夠了》與《靈性覺醒》中與個人實踐最直接相關的教導，整理成六章的繁體中文入門導讀。這是一份有選擇的導讀，不代表原書全部內容，也不代表作者背書。";

/** 網站描述（英文版；編輯翻譯，並載明無官方授權英文版） */
export const SITE_DESCRIPTION_EN =
  "An introductory English guide to selected teachings from Teacher Jiang Qingqi’s (江慶淇老師) books 《要開悟讀這本書就夠了》 (If You Want Enlightenment, This Book Is Enough) and 《靈性覺醒》 (Spiritual Awakening), arranged into six chapters for personal practice. This is a selective guide: it does not represent the whole content of the original books, nor the author’s endorsement. English text on this site is an editorial translation; no authorized English edition of either book exists.";

/** 網站描述（印尼文版；編輯翻譯，並載明無官方授權印尼文版） */
export const SITE_DESCRIPTION_ID =
  "Panduan pengantar berbahasa Indonesia atas ajaran terpilih dari buku-buku Guru Jiang Qingqi (江慶淇老師) 《要開悟讀這本書就夠了》 (Jika Ingin Tercerahkan, Buku Ini Sudah Cukup) dan 《靈性覺醒》 (Kebangkitan Spiritual), yang disusun menjadi enam bab untuk praktik pribadi. Ini adalah panduan selektif: tidak mewakili seluruh isi buku aslinya, dan bukan merupakan dukungan dari penulis. Teks bahasa Indonesia di situs ini adalah terjemahan editorial; tidak ada edisi bahasa Indonesia resmi dari kedua buku ini.";

/** 總覽閱讀時間標示（F2 核可文案；繁中版） */
export const READING_TIME_LABEL = "總覽約3–5分鐘";

/** 總覽閱讀時間補充說明（繁中版） */
export const READING_TIME_NOTE = "編輯估計，非實測速度";

/** 總覽閱讀時間標示（英文版；依實際英文字數核算之編輯估計） */
export const READING_TIME_LABEL_EN = "Overview: about 3–5 minutes";

/** 總覽閱讀時間補充說明（英文版） */
export const READING_TIME_NOTE_EN = "An editorial estimate, not a measured reading speed";

/** 總覽閱讀時間標示（印尼文版；依實際印尼文字數核算之編輯估計） */
export const READING_TIME_LABEL_ID = "Ikhtisar: sekitar 3–5 menit";

/** 總覽閱讀時間補充說明（印尼文版） */
export const READING_TIME_NOTE_ID = "Perkiraan editor, bukan kecepatan baca terukur";

/** 語言選單資料（語名以該語言自身顯示，屬刻意保留之原語顯示） */
export const LANGUAGES: { code: Lang; name: string; htmlLang: string; path: string }[] = [
  { code: "zh", name: "繁體中文", htmlLang: "zh-Hant", path: "/" },
  { code: "en", name: "English", htmlLang: "en", path: "/en/" },
  { code: "id", name: "Bahasa Indonesia", htmlLang: "id", path: "/id/" },
];

/** 語言代碼 → html lang 屬性值（zh→zh-Hant；en／id 同碼） */
export function htmlLangOf(lang: Lang): string {
  return lang === "zh" ? "zh-Hant" : lang;
}

/** 介面文字型別（三種語言鍵位與函式簽名一致，由型別強制） */
export interface UIStrings {
  skipToContent: string;
  chapterNavHeading: string;
  chapterNavNote: string;
  expandAll: string;
  collapseAll: string;
  backToTop: string;
  expandChapter: (shortTitle: string) => string;
  expandChapterAria: (number: string, title: string) => string;
  deeperChapter: (shortTitle: string) => string;
  deeperChapterAria: (number: string, title: string) => string;
  level1Heading: string;
  deeperHeading: string;
  sourcesLink: string;
  overviewLink: string;
  usedInLabel: string;
  bookLabel: string;
  originalTitleLabel: string;
  bookPagesLabel: string;
  pdfPagesLabel: string;
  sourceIdLabel: string;
  bookAndTitleLabel: string;
  navChapters: string;
  navToolsLabel: string;
  editorialBadge: string;
  teachingHeading: string;
  dailyLifeHeading: string;
  exampleHeading: string;
  stepsHeading: string;
  misconceptionsHeading: string;
  chapterSourcesHeading: string;
  fullSourcesLink: string;
  traceabilityHeading: string;
  quoteOpen: string;
  quoteClose: string;
  attributionLead: string;
  numberJoin: string;
  sourcePages: (book: string, pdf: string) => string;
  usedInChapter: (number: string) => string;
  authorLabel: string;
  publisherLabel: string;
  placeLabel: string;
  editionLabel: string;
  isbnInnerLabel: string;
  isbnCoverLabel: string;
  basisLabel: string;
  footerNote: string;
  languageButtonLabel: string;
  languageMenuLabel: string;
}

/** 介面文字（導覽與控制用語；繁中版） */
export const UI_TEXT: UIStrings = {
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
  // 雙語版新增鍵（繁中值與既有介面用語一致）
  bookAndTitleLabel: "書名與原篇名",
  navChapters: "章節",
  navToolsLabel: "頁面工具",
  editorialBadge: "編輯整理",
  teachingHeading: "教導說明",
  dailyLifeHeading: "與日常生活的關係",
  exampleHeading: "生活例子",
  stepsHeading: "小行動步驟",
  misconceptionsHeading: "常見誤解",
  chapterSourcesHeading: "本章來源",
  fullSourcesLink: "完整來源對照（S01–S21）",
  traceabilityHeading: "完整來源與追溯",
  quoteOpen: "「",
  quoteClose: "」",
  attributionLead: "——",
  numberJoin: "｜",
  sourcePages: (book: string, pdf: string) => `　書${book}／PDF${pdf}`,
  usedInChapter: (number: string) => `第${number}章`,
  authorLabel: "作者",
  publisherLabel: "出版者",
  placeLabel: "出版地",
  editionLabel: "版次及日期",
  isbnInnerLabel: "內文ISBN",
  isbnCoverLabel: "所附封面ISBN",
  basisLabel: "核對依據",
  footerNote: "這是一份有選擇的入門導讀，不代表原書全部內容，也不代表作者背書。",
  languageButtonLabel: "選擇語言",
  languageMenuLabel: "語言",
};

/** 介面文字（英文版；鍵位與繁中版完全一致，由型別強制） */
export const UI_TEXT_EN: UIStrings = {
  skipToContent: "Skip to main content",
  chapterNavHeading: "Chapter Quick Navigation",
  chapterNavNote:
    "Chapter order is navigation order, not levels of practice; you may jump to any chapter directly.",
  expandAll: "Expand all chapters",
  collapseAll: "Collapse all chapters",
  backToTop: "Back to top",
  expandChapter: (shortTitle) => `About this chapter: ${shortTitle}`,
  expandChapterAria: (number, title) => `Expand Chapter ${number}: ${title}`,
  deeperChapter: (shortTitle) => `Into the original books: ${shortTitle}`,
  deeperChapterAria: (number, title) => `Expand Chapter ${number} — into the original books: ${title}`,
  level1Heading: "In this chapter",
  deeperHeading: "Into the original books (selected reading)",
  sourcesLink: "Sources and editorial notes",
  overviewLink: "Back to overview",
  usedInLabel: "Used in",
  bookLabel: "Book",
  originalTitleLabel: "Original title",
  bookPagesLabel: "Book pp.",
  pdfPagesLabel: "PDF pp.",
  sourceIdLabel: "Source",
  bookAndTitleLabel: "Book and original title",
  navChapters: "Chapters",
  navToolsLabel: "Page tools",
  editorialBadge: "Editorial",
  teachingHeading: "The Teaching",
  dailyLifeHeading: "How It Meets Daily Life",
  exampleHeading: "An Everyday Example",
  stepsHeading: "Steps for the Small Action",
  misconceptionsHeading: "Common Misunderstandings",
  chapterSourcesHeading: "Sources for This Chapter",
  fullSourcesLink: "Full source index (S01–S21)",
  traceabilityHeading: "Full Sources and Traceability",
  quoteOpen: "“",
  quoteClose: "”",
  attributionLead: "— ",
  numberJoin: " · ",
  sourcePages: (book, pdf) => ` · book pp. ${book} · PDF ${pdf}`,
  usedInChapter: (number) => `Chapter ${number}`,
  authorLabel: "Author",
  publisherLabel: "Publisher",
  placeLabel: "Place of publication",
  editionLabel: "Edition and date",
  isbnInnerLabel: "ISBN (in text)",
  isbnCoverLabel: "ISBN (on included cover)",
  basisLabel: "Verification basis",
  footerNote:
    "This is a selective introductory guide; it does not represent the whole content of the original books, nor the author’s endorsement.",
  languageButtonLabel: "Select language",
  languageMenuLabel: "Language",
};

/** 介面文字（印尼文版；鍵位與繁中版完全一致，由型別強制） */
export const UI_TEXT_ID: UIStrings = {
  skipToContent: "Lompat ke konten utama",
  chapterNavHeading: "Navigasi Cepat Bab",
  chapterNavNote:
    "Urutan bab adalah urutan navigasi, bukan tingkatan latihan; Anda boleh langsung menuju bab mana pun.",
  expandAll: "Buka semua bab",
  collapseAll: "Tutup semua bab",
  backToTop: "Kembali ke atas",
  expandChapter: (shortTitle) => `Tentang bab ini: ${shortTitle}`,
  expandChapterAria: (number, title) => `Buka Bab ${number}: ${title}`,
  deeperChapter: (shortTitle) => `Masuk ke buku aslinya: ${shortTitle}`,
  deeperChapterAria: (number, title) => `Buka Bab ${number} — masuk ke buku aslinya: ${title}`,
  level1Heading: "Dalam bab ini",
  deeperHeading: "Masuk ke buku aslinya (bacaan pilihan)",
  sourcesLink: "Sumber dan catatan editor",
  overviewLink: "Kembali ke ikhtisar",
  usedInLabel: "Digunakan dalam",
  bookLabel: "Buku",
  originalTitleLabel: "Judul asli",
  bookPagesLabel: "hlm. buku",
  pdfPagesLabel: "hlm. PDF",
  sourceIdLabel: "Sumber",
  bookAndTitleLabel: "Buku dan judul asli",
  navChapters: "Bab",
  navToolsLabel: "Alat halaman",
  editorialBadge: "Susunan Editor",
  teachingHeading: "Ajaran",
  dailyLifeHeading: "Relevansi dengan Kehidupan Sehari-hari",
  exampleHeading: "Contoh Sehari-hari",
  stepsHeading: "Langkah Tindakan Kecil",
  misconceptionsHeading: "Kesalahpahaman Umum",
  chapterSourcesHeading: "Sumber untuk Bab Ini",
  fullSourcesLink: "Indeks sumber lengkap (S01–S21)",
  traceabilityHeading: "Sumber Lengkap dan Keterlacakan",
  quoteOpen: "“",
  quoteClose: "”",
  attributionLead: "— ",
  numberJoin: " · ",
  sourcePages: (book, pdf) => ` · hlm. buku ${book} · PDF ${pdf}`,
  usedInChapter: (number) => `Bab ${number}`,
  authorLabel: "Penulis",
  publisherLabel: "Penerbit",
  placeLabel: "Tempat terbit",
  editionLabel: "Edisi dan tanggal",
  isbnInnerLabel: "ISBN (dalam teks)",
  isbnCoverLabel: "ISBN (pada sampul yang disertakan)",
  basisLabel: "Dasar verifikasi",
  footerNote:
    "Ini adalah panduan pengantar yang selektif; tidak mewakili seluruh isi buku aslinya, dan bukan merupakan dukungan dari penulis.",
  languageButtonLabel: "Pilih bahasa",
  languageMenuLabel: "Bahasa",
};

/** 取得指定語言的介面字典 */
export function getUI(lang: Lang): UIStrings {
  if (lang === "zh") return UI_TEXT;
  if (lang === "en") return UI_TEXT_EN;
  return UI_TEXT_ID;
}

/** 取得指定語言的頁題與描述（metadata 用） */
export function getSiteMeta(lang: Lang): {
  title: string;
  description: string;
  applicationName: string;
  locale: string;
} {
  if (lang === "zh") {
    return {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      applicationName: SITE_NAME,
      locale: "zh_TW",
    };
  }
  if (lang === "en") {
    return {
      title: SITE_TITLE_EN,
      description: SITE_DESCRIPTION_EN,
      applicationName: SITE_NAME_EN,
      locale: "en",
    };
  }
  return {
    title: SITE_TITLE_ID,
    description: SITE_DESCRIPTION_ID,
    applicationName: SITE_NAME_EN,
    locale: "id",
  };
}

/** 取得指定語言的閱讀時間標示與補充說明 */
export function getReadingTime(lang: Lang): { label: string; note: string } {
  if (lang === "zh") return { label: READING_TIME_LABEL, note: READING_TIME_NOTE };
  if (lang === "en") return { label: READING_TIME_LABEL_EN, note: READING_TIME_NOTE_EN };
  return { label: READING_TIME_LABEL_ID, note: READING_TIME_NOTE_ID };
}

/** hreflang 交替連結（含 x-default；隨 BASE_PATH 調整） */
export function alternateLanguages(): Record<string, string> {
  return {
    "zh-Hant": `${BASE_PATH}/`,
    en: `${BASE_PATH}/en/`,
    id: `${BASE_PATH}/id/`,
    "x-default": `${BASE_PATH}/`,
  };
}

/** 標準連結（canonical）路徑 */
export function canonicalPath(lang: Lang): string {
  return languagePath(lang);
}

/** 指定語言的頁面路徑（zh＝/；en＝/en/；id＝/id/；隨 BASE_PATH 調整） */
export function languagePath(lang: Lang): string {
  if (lang === "zh") return `${BASE_PATH}/`;
  if (lang === "en") return `${BASE_PATH}/en/`;
  return `${BASE_PATH}/id/`;
}

/** 建置時的基底路徑（靜態匯出子路徑支援；開發模式為空字串） */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/+$/, "") || "";
