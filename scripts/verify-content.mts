/**
 * 內容驗證腳本（無外部相依；需 Node 22.6+，建議 Node 24）。
 * 用法：node scripts/verify-content.mts
 *
 * 檢查：
 * 1. 六章齊全、順序與固定章名正確；每章九欄內容齊備。（繁中＝回歸基準）
 * 2. 第二章三項作為順序正確；「40分至90分鐘」與「三個要素缺一不可」保留。
 * 3. S01–S21 齊全、來源碼與章節對應一致；乙書ISBN差異保留。
 * 4. 禁用行銷語與外部URL不存在（三種語言）。
 * 5. 重新核算預設可見總覽的閱讀單位（中文字＋連續英數詞）與閱讀時間估計。
 * 6. 三語對等：英／印尼文六章／來源／書目／介面字典與繁中版鍵位、識別碼、
 *    事實欄位（頁碼、ISBN、用於章節）一致；titleZh 對照原章名。
 * 7. 英／印尼文內容不得殘留未翻譯中文（僅允許原書名《》、原篇名〈〉、
 *    原文引述「」、作者與出版者姓名，及已標示的術語對照）；
 *    印尼文另檢英文佔位文字（常見英文虛詞不應出現）。
 * 8. 英／印尼文版閱讀時間標示與字數核算一致。
 */
import { CHAPTERS } from "../src/content/chapters.ts";
import { SOURCES, BOOKS, VERSION_NOTES } from "../src/content/sources.ts";
import { INTRO, CLOSING, EDITORIAL_INFO, TRY_IT_LABEL } from "../src/content/overview.ts";
import { READING_TIME_LABEL, UI_TEXT, UI_TEXT_EN, UI_TEXT_ID, SITE_TITLE_EN, SITE_DESCRIPTION_EN, READING_TIME_LABEL_EN, SITE_TITLE_ID, SITE_DESCRIPTION_ID, READING_TIME_LABEL_ID } from "../src/content/site.ts";
import { CHAPTERS as EN_CHAPTERS } from "../src/content/en/chapters.ts";
import { SOURCES as EN_SOURCES, BOOKS as EN_BOOKS, VERSION_NOTES as EN_VERSION_NOTES } from "../src/content/en/sources.ts";
import { INTRO as EN_INTRO, CLOSING as EN_CLOSING, EDITORIAL_INFO as EN_EDITORIAL_INFO, TRY_IT_LABEL as EN_TRY_IT_LABEL } from "../src/content/en/overview.ts";
import { CHAPTERS as ID_CHAPTERS } from "../src/content/id/chapters.ts";
import { SOURCES as ID_SOURCES, BOOKS as ID_BOOKS, VERSION_NOTES as ID_VERSION_NOTES } from "../src/content/id/sources.ts";
import { INTRO as ID_INTRO, CLOSING as ID_CLOSING, EDITORIAL_INFO as ID_EDITORIAL_INFO, TRY_IT_LABEL as ID_TRY_IT_LABEL } from "../src/content/id/overview.ts";

const errors: string[] = [];
const warnings: string[] = [];

function check(cond: boolean, message: string): void {
  if (!cond) errors.push(message);
}

const EXPECTED_TITLES: [string, string][] = [
  ["chapter-1", "神性基因：從看見自己的反應開始"],
  ["chapter-2", "日常生活中的三個修行作為"],
  ["chapter-3", "做事之前，先看自己的動機"],
  ["chapter-4", "讓利他成為看得見的行動"],
  ["chapter-5", "從身邊關係，練習關愛與尊重"],
  ["chapter-6", "面對不順，調整自己的回應"],
];

const EXPECTED_PRACTICES = [
  "走進工作和生活為主軸。",
  "研讀相關書籍為輔助。",
  "每日靜坐冥想（40分至90分鐘）。",
];

/* 1. 章節結構（繁中回歸） */
check(CHAPTERS.length === 6, `章節數應為 6，實為 ${CHAPTERS.length}`);
EXPECTED_TITLES.forEach(([id, title], i) => {
  const ch = CHAPTERS[i];
  check(!!ch, `缺少第 ${i + 1} 章`);
  if (!ch) return;
  check(ch.id === id, `第 ${i + 1} 章識別碼應為 ${id}，實為 ${ch.id}`);
  check(ch.order === i + 1, `第 ${i + 1} 章 order 應為 ${i + 1}`);
  check(ch.title === title, `第 ${i + 1} 章章名不符：${ch.title}`);
  check(ch.core.trim().length > 0, `${id} 缺少核心句`);
  check(ch.teaching.paragraphs.length > 0, `${id} 缺少教導說明`);
  check(ch.dailyLife.paragraphs.length > 0, `${id} 缺少日常關係`);
  check(ch.example.paragraphs.length > 0, `${id} 缺少生活例子`);
  check(ch.action.summary.trim().length > 0, `${id} 缺少小行動摘要`);
  check(ch.action.steps.trim().length > 0, `${id} 缺少小行動步驟`);
  check(ch.misunderstandings.items.length > 0, `${id} 缺少常見誤解`);
  check(ch.deeper.paragraphs.length > 0, `${id} 缺少深入脈絡`);
  check(ch.sourceIds.length > 0, `${id} 缺少來源碼`);
  check(ch.traceability.trim().length > 0, `${id} 缺少來源與編輯追溯`);
});

/* 2. 第一章界線、第二章清單（繁中回歸） */
const ch1 = CHAPTERS[0];
check(
  !!ch1?.alwaysVisibleNote && ch1.alwaysVisibleNote.text.includes("也不以疾病或遭遇判斷任何人的修行"),
  "第一章常顯示閱讀提醒缺少健康與修行判斷界線"
);
const ch2 = CHAPTERS[1];
check(
  JSON.stringify(ch2?.practices?.items) === JSON.stringify(EXPECTED_PRACTICES),
  "第二章三項修行作為順序或內容不符"
);
check(
  ch2?.core.includes("三個要素缺一不可") === true,
  "第二章核心句缺少「三個要素缺一不可」"
);
check(
  ch2?.action.summary.includes("40–90分鐘") === true,
  "第二章小行動摘要未保留原書40–90分鐘時長"
);

/* 3. 來源（繁中回歸） */
const sourceIds = SOURCES.map((s) => s.id);
check(sourceIds.length === 21, `來源應為 21 筆，實為 ${sourceIds.length}`);
for (let i = 1; i <= 21; i++) {
  const id = `S${String(i).padStart(2, "0")}`;
  check(sourceIds.includes(id), `缺少來源 ${id}`);
}
const chapterIds = new Set(CHAPTERS.map((c) => c.id));
for (const s of SOURCES) {
  check(s.title.trim().length > 0, `${s.id} 缺少原篇名`);
  check(s.bookPages.trim().length > 0 && s.pdfPages.trim().length > 0, `${s.id} 缺少頁碼`);
  check(s.usedIn.length > 0, `${s.id} 缺少用於章節`);
  for (const cid of s.usedIn) {
    check(chapterIds.has(cid), `${s.id} 的用於章節 ${cid} 不存在`);
  }
}
for (const ch of CHAPTERS) {
  for (const sid of ch.sourceIds) {
    check(sourceIds.includes(sid), `${ch.id} 引用了不存在的來源 ${sid}`);
  }
}
check(
  BOOKS.yi.isbnInner !== BOOKS.yi.isbnCover,
  "乙書內文與封面ISBN差異必須保留，不得合併"
);
check(
  BOOKS.jia.isbnInner === BOOKS.jia.isbnCover,
  "甲書兩處ISBN應一致"
);
check(
  BOOKS.jia.copyrightNote?.includes("版權所有．翻印必究") === true,
  "甲書翻印限制聲明必須保留"
);
const yiDeclaration = VERSION_NOTES[0]?.body[0] ?? "";
check(
  yiDeclaration.includes("無須另行通知即可實行"),
  "乙書PDF458利用與散布聲明必須保留"
);

/* 4. 禁用語與URL（繁中） */
const FORBIDDEN = ["一定覺醒", "必然改命", "照做就成功", "保證開悟", "保證你"];
function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") {
    return Object.values(value).flatMap(collectStrings);
  }
  return [];
}
const allStrings = collectStrings({
  CHAPTERS,
  SOURCES,
  BOOKS,
  VERSION_NOTES,
  INTRO,
  CLOSING,
  EDITORIAL_INFO,
});
for (const s of allStrings) {
  for (const bad of FORBIDDEN) {
    check(!s.includes(bad), `出現禁用語「${bad}」：${s.slice(0, 40)}…`);
  }
  check(!/https?:\/\//.test(s), `內容含外部URL：${s.slice(0, 40)}…`);
}

/* 5. 閱讀時間重算（依 F2 範圍＋E7 頁末回顧；繁中） */
const visibleText: string[] = [
  INTRO.heading,
  ...INTRO.paragraphs,
  ...CHAPTERS.flatMap((ch) => {
    const parts: string[] = [`${ch.number}｜${ch.title}`, ch.core];
    if (ch.alwaysVisibleNote) {
      parts.push(`${ch.alwaysVisibleNote.label}：${ch.alwaysVisibleNote.text}`);
    }
    if (ch.practices) parts.push(...ch.practices.items);
    parts.push(
      `${TRY_IT_LABEL}：${ch.action.summary}${ch.action.overviewQualifier ?? ""}`
    );
    return parts;
  }),
  CLOSING.heading,
  ...CLOSING.paragraphs,
  ...CLOSING.reflectionParagraphs,
];
const joined = visibleText.join("\n");
const chineseChars = (joined.match(/[\u3400-\u4DBF\u4E00-\u9FFF]/g) ?? []).length;
const latinWords = (joined.match(/[A-Za-z0-9]+/g) ?? []).length;
const units = chineseChars + latinWords;
const minutes = [units / 350, units / 250];

/* F2 原始標記範圍（不含 E7 追加）對照 */
const f2Only = [
  INTRO.heading,
  ...INTRO.paragraphs,
  ...CHAPTERS.flatMap((ch) => {
    const parts: string[] = [`${ch.number}｜${ch.title}`, ch.core];
    if (ch.alwaysVisibleNote) {
      parts.push(`${ch.alwaysVisibleNote.label}：${ch.alwaysVisibleNote.text}`);
    }
    if (ch.practices) parts.push(...ch.practices.items);
    parts.push(`${TRY_IT_LABEL}：${ch.action.summary}${ch.action.overviewQualifier ?? ""}`);
    return parts;
  }),
  CLOSING.heading,
  ...CLOSING.paragraphs,
].join("\n");
const f2Chinese = (f2Only.match(/[\u3400-\u4DBF\u4E00-\u9FFF]/g) ?? []).length;
const f2Latin = (f2Only.match(/[A-Za-z0-9]+/g) ?? []).length;

/* ─── 三語對等：章節（英文） ─── */
check(EN_CHAPTERS.length === 6, `英文章節數應為 6，實為 ${EN_CHAPTERS.length}`);
/* ─── 三語對等：章節（印尼文） ─── */
check(ID_CHAPTERS.length === 6, `印尼文章節數應為 6，實為 ${ID_CHAPTERS.length}`);

/** 逐章對等檢查（供英／印尼文共用；兩者皆為 Chapter[] 結構） */
function checkChapterParity(langLabel: string, translated: typeof EN_CHAPTERS): void {
  CHAPTERS.forEach((zhCh, i) => {
    const tCh = translated[i];
    check(!!tCh, `缺少${langLabel}版第 ${i + 1} 章`);
    if (!tCh) return;
    check(tCh.id === zhCh.id, `${langLabel}第 ${i + 1} 章識別碼應為 ${zhCh.id}，實為 ${tCh.id}`);
    check(tCh.order === zhCh.order, `${langLabel}第 ${i + 1} 章 order 不符`);
    check(tCh.titleZh === zhCh.title, `${langLabel}第 ${i + 1} 章 titleZh 與原章名不符：${tCh.titleZh}`);
    check(tCh.title.trim().length > 0, `${zhCh.id}（${langLabel}）缺少章名譯文`);
    check(tCh.core.trim().length > 0, `${zhCh.id}（${langLabel}）缺少核心句`);
    check(tCh.teaching.paragraphs.length === zhCh.teaching.paragraphs.length, `${zhCh.id}（${langLabel}）教導說明段數不符`);
    check(tCh.dailyLife.paragraphs.length === zhCh.dailyLife.paragraphs.length, `${zhCh.id}（${langLabel}）日常關係段數不符`);
    check(tCh.example.paragraphs.length === zhCh.example.paragraphs.length, `${zhCh.id}（${langLabel}）生活例子段數不符`);
    check(tCh.action.summary.trim().length > 0, `${zhCh.id}（${langLabel}）缺少小行動摘要`);
    check(tCh.action.steps.trim().length > 0, `${zhCh.id}（${langLabel}）缺少小行動步驟`);
    check(tCh.misunderstandings.items.length === zhCh.misunderstandings.items.length, `${zhCh.id}（${langLabel}）常見誤解項數不符`);
    check(tCh.deeper.paragraphs.length === zhCh.deeper.paragraphs.length, `${zhCh.id}（${langLabel}）深入脈絡段數不符`);
    check(JSON.stringify(tCh.sourceIds) === JSON.stringify(zhCh.sourceIds), `${zhCh.id}（${langLabel}）來源碼清單與繁中版不一致`);
    check(tCh.traceability.trim().length > 0, `${zhCh.id}（${langLabel}）缺少追溯說明`);
    if (zhCh.alwaysVisibleNote) {
      check(!!tCh.alwaysVisibleNote, `${zhCh.id}（${langLabel}）缺少常顯示閱讀提醒`);
    }
    if (zhCh.practices) {
      check(
        tCh.practices?.items.length === zhCh.practices.items.length,
        `${zhCh.id}（${langLabel}）三項修行作為數量不符`
      );
    }
    if (zhCh.deeper.quote) {
      check(!!tCh.deeper.quote, `${zhCh.id}（${langLabel}）缺少必要短引文`);
    }
  });
}

checkChapterParity("英文", EN_CHAPTERS);
checkChapterParity("印尼文", ID_CHAPTERS);

/* 第二章關鍵句（英文） */
const enCh2 = EN_CHAPTERS[1];
check(
  enCh2?.core.includes("none of the three elements can be omitted") === true,
  "英文第二章核心句缺少「三要素缺一不可」對應譯文"
);
check(
  enCh2?.action.summary.includes("40–90 minutes") === true,
  "英文第二章小行動摘要未保留40–90分鐘時長"
);
check(
  enCh2?.practices?.items.join("\n").includes("40 to 90 minutes") === true,
  "英文第二章三項作為未保留「40分至90分鐘」"
);

/* 第二章關鍵句（印尼文） */
const idCh2 = ID_CHAPTERS[1];
check(
  idCh2?.core.includes("tidak boleh kurang satu") === true,
  "印尼文第二章核心句缺少「三要素缺一不可」對應譯文"
);
check(
  idCh2?.action.summary.includes("40–90 menit") === true,
  "印尼文第二章小行動摘要未保留40–90分鐘時長"
);
check(
  idCh2?.practices?.items.join("\n").includes("40 sampai 90 menit") === true,
  "印尼文第二章三項作為未保留「40分至90分鐘」"
);

/* ─── 來源對等（事實欄位必須完全一致；英／印尼文） ─── */
const enSourceIds = EN_SOURCES.map((s) => s.id);
check(
  JSON.stringify(enSourceIds) === JSON.stringify(sourceIds),
  `英文來源碼清單與繁中版不一致（應為 S01–S21 同序）`
);
const idSourceIds = ID_SOURCES.map((s) => s.id);
check(
  JSON.stringify(idSourceIds) === JSON.stringify(sourceIds),
  `印尼文來源碼清單與繁中版不一致（應為 S01–S21 同序）`
);
for (let i = 0; i < SOURCES.length; i++) {
  const zs = SOURCES[i];
  const es = EN_SOURCES[i];
  const ds = ID_SOURCES[i];
  if (!es || !ds) continue;

  /* 英文 */
  check(es.book === zs.book, `${zs.id}（英）書籍欄位不一致`);
  check(es.sequence === zs.sequence, `${zs.id}（英）篇章序號不一致`);
  check(es.title === zs.title, `${zs.id}（英）原篇名應保留原文`);
  check(es.noteLabel === zs.noteLabel, `${zs.id}（英）手札編號應保留原文`);
  check(es.bookPages === zs.bookPages, `${zs.id}（英）書頁不一致`);
  const pdfPagesMatchEn =
    es.pdfPages === zs.pdfPages ||
    (zs.id === "S06" && zs.pdfPages === "同書頁" && es.pdfPages === "same as book pp.");
  check(pdfPagesMatchEn, `${zs.id}（英）PDF頁不一致`);
  check(JSON.stringify(es.usedIn) === JSON.stringify(zs.usedIn), `${zs.id}（英）用於章節不一致`);
  check(!!es.note && es.note.trim().length > 0, `${zs.id}（英）缺少核對說明`);
  check(!!es.titleEn && es.titleEn.trim().length > 0, `${zs.id}（英）缺少原篇名英譯`);
  if (zs.sequence) {
    check(!!es.sequenceEn, `${zs.id}（英）缺少篇章序號英譯`);
  }
  if (zs.noteLabel) {
    check(!!es.noteLabelEn, `${zs.id}（英）缺少手札編號英譯`);
  }

  /* 印尼文 */
  check(ds.book === zs.book, `${zs.id}（印尼）書籍欄位不一致`);
  check(ds.sequence === zs.sequence, `${zs.id}（印尼）篇章序號不一致`);
  check(ds.title === zs.title, `${zs.id}（印尼）原篇名應保留原文`);
  check(ds.noteLabel === zs.noteLabel, `${zs.id}（印尼）手札編號應保留原文`);
  check(ds.bookPages === zs.bookPages, `${zs.id}（印尼）書頁不一致`);
  const pdfPagesMatchId =
    ds.pdfPages === zs.pdfPages ||
    (zs.id === "S06" && zs.pdfPages === "同書頁" && ds.pdfPages === "sama dengan hlm. buku");
  check(pdfPagesMatchId, `${zs.id}（印尼）PDF頁不一致`);
  check(JSON.stringify(ds.usedIn) === JSON.stringify(zs.usedIn), `${zs.id}（印尼）用於章節不一致`);
  check(!!ds.note && ds.note.trim().length > 0, `${zs.id}（印尼）缺少核對說明`);
  check(!!ds.titleId && ds.titleId.trim().length > 0, `${zs.id}（印尼）缺少原篇名印尼文譯`);
  if (zs.sequence) {
    check(!!ds.sequenceId, `${zs.id}（印尼）缺少篇章序號印尼文譯`);
  }
  if (zs.noteLabel) {
    check(!!ds.noteLabelId, `${zs.id}（印尼）缺少手札編號印尼文譯`);
  }
}

/* ─── 書目對等（ISBN、出版者、版次年分等事實一致；英／印尼文） ─── */
for (const [label, B] of [["英文", EN_BOOKS], ["印尼文", ID_BOOKS]] as const) {
  check(B.jia.title === BOOKS.jia.title, `${label}甲書書名應保留原文`);
  check(B.yi.title === BOOKS.yi.title, `${label}乙書書名應保留原文`);
  check(B.jia.author === BOOKS.jia.author, `${label}甲書作者應保留原文（江慶淇）`);
  check(B.yi.author === BOOKS.yi.author, `${label}乙書作者應保留原文（江慶淇）`);
  check(B.jia.publisher === BOOKS.jia.publisher, `${label}甲書出版者應保留原文`);
  check(B.yi.publisher === BOOKS.yi.publisher, `${label}乙書出版者應保留原文`);
  check(B.jia.isbnInner === BOOKS.jia.isbnInner && B.jia.isbnCover === BOOKS.jia.isbnCover, `${label}甲書ISBN不一致`);
  check(B.yi.isbnInner === BOOKS.yi.isbnInner && B.yi.isbnCover === BOOKS.yi.isbnCover, `${label}乙書ISBN不一致`);
  check(
    B.yi.isbnInner !== B.yi.isbnCover,
    `${label}版乙書ISBN差異必須保留`
  );
  check(B.jia.edition.includes("2022") && B.yi.edition.includes("2022"), `${label}版次年份應為2022`);
  check(
    !!B.yi.isbnCoverNote && B.yi.isbnCoverNote.length > 20,
    `${label}乙書封面ISBN差異說明應保留`
  );
}
check(EN_VERSION_NOTES.length === VERSION_NOTES.length, "英文版本與使用範圍說明則數不符");
check(ID_VERSION_NOTES.length === VERSION_NOTES.length, "印尼文版本與使用範圍說明則數不符");
const enYiDeclaration = EN_VERSION_NOTES[0]?.body[0] ?? "";
check(
  enYiDeclaration.includes("本書內容屬於全體生命") && enYiDeclaration.includes("無須另行通知即可實行"),
  "英文版乙書利用與散布聲明應保留原文引述"
);
const idYiDeclaration = ID_VERSION_NOTES[0]?.body[0] ?? "";
check(
  idYiDeclaration.includes("本書內容屬於全體生命") && idYiDeclaration.includes("無須另行通知即可實行"),
  "印尼文版乙書利用與散布聲明應保留原文引述"
);

/* ─── 介面字典鍵位對等（三語） ─── */
function keyPaths(value: unknown, prefix = ""): string[] {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value).flatMap(([k, v]) => keyPaths(v, `${prefix}${prefix ? "." : ""}${k}`));
  }
  return [prefix];
}
const zhKeys = keyPaths(UI_TEXT);
const enKeys = keyPaths(UI_TEXT_EN);
const idKeys = keyPaths(UI_TEXT_ID);
check(
  JSON.stringify(zhKeys) === JSON.stringify(enKeys),
  `介面字典鍵位不一致：繁中 ${zhKeys.length} 鍵／英文 ${enKeys.length} 鍵`
);
check(
  JSON.stringify(zhKeys) === JSON.stringify(idKeys),
  `介面字典鍵位不一致：繁中 ${zhKeys.length} 鍵／印尼文 ${idKeys.length} 鍵`
);

/* ─── 未翻譯中文殘留（英／印尼文共用剝離規則） ─── */
const GLOSS_TERMS = ["江慶淇老師", "江慶淇", "江嘉祁", "編輯整理", "未編頁", "已核圖", "覺醒生活"];
function stripOriginalLanguage(text: string): string {
  let out = text.replace(/《[^《》]*》/g, " ").replace(/〈[^〈〉]*〉/g, " ").replace(/「[^「」]*」/g, " ");
  for (const term of GLOSS_TERMS) {
    out = out.split(term).join(" ");
  }
  return out;
}

const enStrings = collectStrings({
  EN_CHAPTERS: EN_CHAPTERS.map((c) => ({ ...c, titleZh: undefined })),
  EN_SOURCES: EN_SOURCES.map((s) => ({ ...s, title: undefined, sequence: undefined, noteLabel: undefined })),
  EN_BOOKS: {
    jia: { ...EN_BOOKS.jia, title: undefined, author: undefined, publisher: undefined },
    yi: { ...EN_BOOKS.yi, title: undefined, author: undefined, publisher: undefined },
  },
  EN_VERSION_NOTES,
  EN_INTRO,
  EN_CLOSING,
  EN_EDITORIAL_INFO,
  EN_TRY_IT_LABEL,
});
const idStrings = collectStrings({
  ID_CHAPTERS: ID_CHAPTERS.map((c) => ({ ...c, titleZh: undefined })),
  ID_SOURCES: ID_SOURCES.map((s) => ({ ...s, title: undefined, sequence: undefined, noteLabel: undefined })),
  ID_BOOKS: {
    jia: { ...ID_BOOKS.jia, title: undefined, author: undefined, publisher: undefined },
    yi: { ...ID_BOOKS.yi, title: undefined, author: undefined, publisher: undefined },
  },
  ID_VERSION_NOTES,
  ID_INTRO,
  ID_CLOSING,
  ID_EDITORIAL_INFO,
  ID_TRY_IT_LABEL,
});

/* 介面字典的函式鍵以範例參數求值後再檢查 */
const uiFunctionSamplesEn: string[] = [
  UI_TEXT_EN.expandChapter("X"),
  UI_TEXT_EN.expandChapterAria("1", "T"),
  UI_TEXT_EN.deeperChapter("X"),
  UI_TEXT_EN.deeperChapterAria("1", "T"),
  UI_TEXT_EN.sourcePages("1–2", "3–4"),
  UI_TEXT_EN.usedInChapter("1"),
  SITE_TITLE_EN,
  SITE_DESCRIPTION_EN,
];
const uiFunctionSamplesId: string[] = [
  UI_TEXT_ID.expandChapter("X"),
  UI_TEXT_ID.expandChapterAria("1", "T"),
  UI_TEXT_ID.deeperChapter("X"),
  UI_TEXT_ID.deeperChapterAria("1", "T"),
  UI_TEXT_ID.sourcePages("1–2", "3–4"),
  UI_TEXT_ID.usedInChapter("1"),
  SITE_TITLE_ID,
  SITE_DESCRIPTION_ID,
];

let cjkFlagged = 0;
for (const s of [...enStrings, ...uiFunctionSamplesEn]) {
  const rest = stripOriginalLanguage(s);
  const cjk = rest.match(/[\u3400-\u4DBF\u4E00-\u9FFF]/);
  if (cjk) {
    cjkFlagged++;
    errors.push(`英文內容殘留未翻譯中文「${cjk[0]}」：${s.slice(0, 60)}…`);
    if (cjkFlagged > 10) break;
  }
}
let idCjkFlagged = 0;
for (const s of [...idStrings, ...uiFunctionSamplesId]) {
  const rest = stripOriginalLanguage(s);
  const cjk = rest.match(/[\u3400-\u4DBF\u4E00-\u9FFF]/);
  if (cjk) {
    idCjkFlagged++;
    errors.push(`印尼文內容殘留未翻譯中文「${cjk[0]}」：${s.slice(0, 60)}…`);
    if (idCjkFlagged > 10) break;
  }
}

/* 印尼文內容不得殘留英文佔位文字（常見英文虛詞；印尼文不用這些詞） */
const EN_PLACEHOLDER_RE =
  /\b(the|and|of|to|that|with|for|from|your|you|is|are|not|this|but|it|in|on|at|be|was|will|can|we|they|their|has|have|had|do|does|did|so|if|or|as|by|an)\b/i;
let idEnFlagged = 0;
for (const s of [...idStrings, ...uiFunctionSamplesId]) {
  const m = s.match(EN_PLACEHOLDER_RE);
  if (m) {
    idEnFlagged++;
    errors.push(`印尼文內容殘留英文佔位文字「${m[0]}」：${s.slice(0, 60)}…`);
    if (idEnFlagged > 10) break;
  }
}

/* ─── 禁用行銷語（英／印尼文）與URL ─── */
const FORBIDDEN_EN = [
  "guaranteed awakening",
  "guaranteed enlightenment",
  "scientifically proven",
  "will surely change your fate",
];
for (const s of enStrings) {
  const lower = s.toLowerCase();
  for (const bad of FORBIDDEN_EN) {
    check(!lower.includes(bad), `英文內容出現禁用語「${bad}」：${s.slice(0, 40)}…`);
  }
  check(!/https?:\/\//.test(s), `英文內容含外部URL：${s.slice(0, 40)}…`);
}

const FORBIDDEN_ID = [
  "dijamin tercerahkan",
  "dijamin terbangun",
  "dijamin mencapai",
  "terbukti secara ilmiah",
  "pasti berubah takdir",
  "pasti sembuh",
];
for (const s of idStrings) {
  const lower = s.toLowerCase();
  for (const bad of FORBIDDEN_ID) {
    check(!lower.includes(bad), `印尼文內容出現禁用語「${bad}」：${s.slice(0, 40)}…`);
  }
  check(!/https?:\/\//.test(s), `印尼文內容含外部URL：${s.slice(0, 40)}…`);
}

/* ─── 英文閱讀時間核算（預設可見層，含頁末回顧） ─── */
const enVisibleText: string[] = [
  EN_INTRO.heading,
  ...EN_INTRO.paragraphs,
  ...EN_CHAPTERS.flatMap((ch) => {
    const parts: string[] = [`${ch.number}. ${ch.title}`, ch.core];
    if (ch.alwaysVisibleNote) {
      parts.push(`${ch.alwaysVisibleNote.label}: ${ch.alwaysVisibleNote.text}`);
    }
    if (ch.practices) parts.push(...ch.practices.items);
    parts.push(`${EN_TRY_IT_LABEL}: ${ch.action.summary}${ch.action.overviewQualifier ?? ""}`);
    return parts;
  }),
  EN_CLOSING.heading,
  ...EN_CLOSING.paragraphs,
  ...EN_CLOSING.reflectionParagraphs,
];
const enWords = enVisibleText.join("\n").split(/\s+/).filter((w) => w.length > 0).length;
const enMinutes = [enWords / 260, enWords / 200];

/* ─── 印尼文閱讀時間核算（預設可見層，含頁末回顧） ─── */
const idVisibleText: string[] = [
  ID_INTRO.heading,
  ...ID_INTRO.paragraphs,
  ...ID_CHAPTERS.flatMap((ch) => {
    const parts: string[] = [`${ch.number}. ${ch.title}`, ch.core];
    if (ch.alwaysVisibleNote) {
      parts.push(`${ch.alwaysVisibleNote.label}: ${ch.alwaysVisibleNote.text}`);
    }
    if (ch.practices) parts.push(...ch.practices.items);
    parts.push(`${ID_TRY_IT_LABEL}: ${ch.action.summary}${ch.action.overviewQualifier ?? ""}`);
    return parts;
  }),
  ID_CLOSING.heading,
  ...ID_CLOSING.paragraphs,
  ...ID_CLOSING.reflectionParagraphs,
];
const idWords = idVisibleText.join("\n").split(/\s+/).filter((w) => w.length > 0).length;
const idMinutes = [idWords / 260, idWords / 200];

console.log("=== 內容驗證 ===");
console.log(`章節數：${CHAPTERS.length}（順序與固定章名${errors.length === 0 ? "通過" : "見錯誤"}）`);
console.log(`來源筆數：${SOURCES.length}（S01–S21）`);
console.log(`乙書ISBN差異：內文 ${BOOKS.yi.isbnInner}／封面 ${BOOKS.yi.isbnCover}（已保留）`);
console.log("");
console.log("=== 三語對等 ===");
console.log(`英文章節：${EN_CHAPTERS.length} 章；titleZh 對照、九欄、來源碼清單、誤解項數逐章核對`);
console.log(`印尼文章節：${ID_CHAPTERS.length} 章；titleZh 對照、九欄、來源碼清單、誤解項數逐章核對`);
console.log(`英文來源：${EN_SOURCES.length} 筆；書頁／PDF頁／用於章節／原篇名與繁中版完全一致`);
console.log(`印尼文來源：${ID_SOURCES.length} 筆；書頁／PDF頁／用於章節／原篇名與繁中版完全一致`);
console.log(`介面字典鍵位：繁中 ${zhKeys.length} 鍵＝英文 ${enKeys.length} 鍵＝印尼文 ${idKeys.length} 鍵`);
console.log(`英文內容未翻譯中文殘留：${cjkFlagged} 處`);
console.log(`印尼文內容未翻譯中文殘留：${idCjkFlagged} 處；英文佔位文字殘留：${idEnFlagged} 處`);
console.log("");
console.log("=== 閱讀時間重算 ===");
console.log(
  `F2 標記範圍：中文字 ${f2Chinese}、連續英數詞 ${f2Latin}、計數單位 ${f2Chinese + f2Latin}（原策劃稿 1,012／8；現行部署基準 1,014／5）`
);
console.log(
  `本站預設可見層（F2＋E7頁末回顧）：中文字 ${chineseChars}、連續英數詞 ${latinWords}、計數單位 ${units}`
);
console.log(
  `以每分鐘 250–350 單位估計：約 ${minutes[0].toFixed(1)}–${minutes[1].toFixed(1)} 分鐘（標示：${READING_TIME_LABEL}）`
);
console.log(
  `英文預設可見層：約 ${enWords} 詞；以每分鐘 200–260 詞估計約 ${enMinutes[0].toFixed(1)}–${enMinutes[1].toFixed(1)} 分鐘（標示：${READING_TIME_LABEL_EN}）`
);
console.log(
  `印尼文預設可見層：約 ${idWords} 詞；以每分鐘 200–260 詞估計約 ${idMinutes[0].toFixed(1)}–${idMinutes[1].toFixed(1)} 分鐘（標示：${READING_TIME_LABEL_ID}）`
);
if (enMinutes[1] > 5.5 || enMinutes[0] < 2) {
  warnings.push(
    `英文閱讀時間估計 ${enMinutes[0].toFixed(1)}–${enMinutes[1].toFixed(1)} 分鐘與標示「${READING_TIME_LABEL_EN}」差距較大，請覆核標示。`
  );
}
if (idMinutes[1] > 5.5 || idMinutes[0] < 2) {
  warnings.push(
    `印尼文閱讀時間估計 ${idMinutes[0].toFixed(1)}–${idMinutes[1].toFixed(1)} 分鐘與標示「${READING_TIME_LABEL_ID}」差距較大，請覆核標示。`
  );
}
if (f2Chinese !== 1014 || f2Latin !== 5) {
  warnings.push(
    `F2 範圍計數：中文字 ${f2Chinese}（現行部署基準 1,014：原策劃稿 1,012 ＋ 用戶於部署前將「江慶淇」改為「江慶淇老師」+2 字）、英數詞 ${f2Latin}（原稿自述 8；差異為「1. 2. 3.」清單編號是否計入，本腳本不計清單編號）。與基準不符時須以原始策劃稿及用戶修訂人工對照。`
  );
}

console.log("");
if (warnings.length > 0) {
  console.log("警告：");
  warnings.forEach((w) => console.log(`  ⚠ ${w}`));
}
if (errors.length > 0) {
  console.log("錯誤：");
  errors.forEach((e) => console.log(`  ✗ ${e}`));
  process.exit(1);
} else {
  console.log("結果：全部通過 ✓");
}
