/**
 * 內容驗證腳本（無外部相依；需 Node 22.6+，建議 Node 24）。
 * 用法：node scripts/verify-content.mts
 *
 * 檢查：
 * 1. 六章齊全、順序與固定章名正確；每章九欄內容齊備。（繁中＝回歸基準）
 * 2. 第二章三項作為順序正確；「40分至90分鐘」與「三個要素缺一不可」保留。
 * 3. S01–S21 齊全、來源碼與章節對應一致；乙書ISBN差異保留。
 * 4. 禁用行銷語與外部URL不存在（兩種語言）。
 * 5. 重新核算預設可見總覽的閱讀單位（中文字＋連續英數詞）與閱讀時間估計。
 * 6. 雙語對等：英文六章／來源／書目／介面字典與繁中版鍵位、識別碼、
 *    事實欄位（頁碼、ISBN、用於章節）一致；titleZh 對照原章名。
 * 7. 英文內容不得殘留未翻譯中文（僅允許原書名《》、原篇名〈〉、
 *    原文引述「」、作者與出版者姓名，及三個已標示的術語對照）。
 * 8. 英文版閱讀時間標示與字數核算一致。
 */
import { CHAPTERS } from "../src/content/chapters.ts";
import { SOURCES, BOOKS, VERSION_NOTES } from "../src/content/sources.ts";
import { INTRO, CLOSING, EDITORIAL_INFO, TRY_IT_LABEL } from "../src/content/overview.ts";
import { READING_TIME_LABEL, UI_TEXT, UI_TEXT_EN, SITE_TITLE_EN, SITE_DESCRIPTION_EN, READING_TIME_LABEL_EN } from "../src/content/site.ts";
import { CHAPTERS as EN_CHAPTERS } from "../src/content/en/chapters.ts";
import { SOURCES as EN_SOURCES, BOOKS as EN_BOOKS, VERSION_NOTES as EN_VERSION_NOTES } from "../src/content/en/sources.ts";
import { INTRO as EN_INTRO, CLOSING as EN_CLOSING, EDITORIAL_INFO as EN_EDITORIAL_INFO, TRY_IT_LABEL as EN_TRY_IT_LABEL } from "../src/content/en/overview.ts";

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

/* 6. 雙語對等 */
check(EN_CHAPTERS.length === 6, `英文章節數應為 6，實為 ${EN_CHAPTERS.length}`);
CHAPTERS.forEach((zhCh, i) => {
  const enCh = EN_CHAPTERS[i];
  check(!!enCh, `缺少英文版第 ${i + 1} 章`);
  if (!enCh) return;
  check(enCh.id === zhCh.id, `英文第 ${i + 1} 章識別碼應為 ${zhCh.id}，實為 ${enCh.id}`);
  check(enCh.order === zhCh.order, `英文第 ${i + 1} 章 order 不符`);
  check(enCh.titleZh === zhCh.title, `英文第 ${i + 1} 章 titleZh 與原章名不符：${enCh.titleZh}`);
  check(enCh.title.trim().length > 0, `${zhCh.id}（英）缺少章名英譯`);
  check(enCh.core.trim().length > 0, `${zhCh.id}（英）缺少核心句`);
  check(enCh.teaching.paragraphs.length === zhCh.teaching.paragraphs.length, `${zhCh.id}（英）教導說明段數不符`);
  check(enCh.dailyLife.paragraphs.length === zhCh.dailyLife.paragraphs.length, `${zhCh.id}（英）日常關係段數不符`);
  check(enCh.example.paragraphs.length === zhCh.example.paragraphs.length, `${zhCh.id}（英）生活例子段數不符`);
  check(enCh.action.summary.trim().length > 0, `${zhCh.id}（英）缺少小行動摘要`);
  check(enCh.action.steps.trim().length > 0, `${zhCh.id}（英）缺少小行動步驟`);
  check(enCh.misunderstandings.items.length === zhCh.misunderstandings.items.length, `${zhCh.id}（英）常見誤解項數不符`);
  check(enCh.deeper.paragraphs.length === zhCh.deeper.paragraphs.length, `${zhCh.id}（英）深入脈絡段數不符`);
  check(JSON.stringify(enCh.sourceIds) === JSON.stringify(zhCh.sourceIds), `${zhCh.id}（英）來源碼清單與繁中版不一致`);
  check(enCh.traceability.trim().length > 0, `${zhCh.id}（英）缺少追溯說明`);
  if (zhCh.alwaysVisibleNote) {
    check(!!enCh.alwaysVisibleNote, `${zhCh.id}（英）缺少常顯示閱讀提醒`);
  }
  if (zhCh.practices) {
    check(
      enCh.practices?.items.length === zhCh.practices.items.length,
      `${zhCh.id}（英）三項修行作為數量不符`
    );
  }
});
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

/* 6a. 來源對等（事實欄位必須完全一致） */
const enSourceIds = EN_SOURCES.map((s) => s.id);
check(
  JSON.stringify(enSourceIds) === JSON.stringify(sourceIds),
  `英文來源碼清單與繁中版不一致（應為 S01–S21 同序）`
);
for (let i = 0; i < SOURCES.length; i++) {
  const zs = SOURCES[i];
  const es = EN_SOURCES[i];
  if (!es) continue;
  check(es.book === zs.book, `${zs.id}（英）書籍欄位不一致`);
  check(es.sequence === zs.sequence, `${zs.id}（英）篇章序號不一致`);
  check(es.title === zs.title, `${zs.id}（英）原篇名應保留原文`);
  check(es.noteLabel === zs.noteLabel, `${zs.id}（英）手札編號應保留原文`);
  check(es.bookPages === zs.bookPages, `${zs.id}（英）書頁不一致`);
  const pdfPagesMatch =
    es.pdfPages === zs.pdfPages ||
    (zs.id === "S06" && zs.pdfPages === "同書頁" && es.pdfPages === "same as book pp.");
  check(pdfPagesMatch, `${zs.id}（英）PDF頁不一致`);
  check(JSON.stringify(es.usedIn) === JSON.stringify(zs.usedIn), `${zs.id}（英）用於章節不一致`);
  check(!!es.note && es.note.trim().length > 0, `${zs.id}（英）缺少核對說明`);
  check(!!es.titleEn && es.titleEn.trim().length > 0, `${zs.id}（英）缺少原篇名英譯`);
  if (zs.sequence) {
    check(!!es.sequenceEn, `${zs.id}（英）缺少篇章序號英譯`);
  }
  if (zs.noteLabel) {
    check(!!es.noteLabelEn, `${zs.id}（英）缺少手札編號英譯`);
  }
}

/* 6b. 書目對等（ISBN、出版者、版次年分等事實一致） */
check(EN_BOOKS.jia.title === BOOKS.jia.title, "英文甲書書名應保留原文");
check(EN_BOOKS.yi.title === BOOKS.yi.title, "英文乙書書名應保留原文");
check(EN_BOOKS.jia.author === BOOKS.jia.author, "英文甲書作者應保留原文（江慶淇）");
check(EN_BOOKS.yi.author === BOOKS.yi.author, "英文乙書作者應保留原文（江慶淇）");
check(EN_BOOKS.jia.publisher === BOOKS.jia.publisher, "英文甲書出版者應保留原文");
check(EN_BOOKS.yi.publisher === BOOKS.yi.publisher, "英文乙書出版者應保留原文");
check(EN_BOOKS.jia.isbnInner === BOOKS.jia.isbnInner && EN_BOOKS.jia.isbnCover === BOOKS.jia.isbnCover, "英文甲書ISBN不一致");
check(EN_BOOKS.yi.isbnInner === BOOKS.yi.isbnInner && EN_BOOKS.yi.isbnCover === BOOKS.yi.isbnCover, "英文乙書ISBN不一致");
check(
  EN_BOOKS.yi.isbnInner !== EN_BOOKS.yi.isbnCover,
  "英文版乙書ISBN差異必須保留"
);
check(EN_BOOKS.jia.edition.includes("2022") && EN_BOOKS.yi.edition.includes("2022"), "英文版次年份應為2022");
check(
  !!EN_BOOKS.yi.isbnCoverNote && EN_BOOKS.yi.isbnCoverNote.length > 20,
  "英文乙書封面ISBN差異說明應保留"
);
check(EN_VERSION_NOTES.length === VERSION_NOTES.length, "英文版本與使用範圍說明則數不符");
const enYiDeclaration = EN_VERSION_NOTES[0]?.body[0] ?? "";
check(
  enYiDeclaration.includes("本書內容屬於全體生命") && enYiDeclaration.includes("無須另行通知即可實行"),
  "英文版乙書利用與散布聲明應保留原文引述"
);

/* 6c. 介面字典鍵位對等 */
function keyPaths(value: unknown, prefix = ""): string[] {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value).flatMap(([k, v]) => keyPaths(v, `${prefix}${prefix ? "." : ""}${k}`));
  }
  return [prefix];
}
const zhKeys = keyPaths(UI_TEXT);
const enKeys = keyPaths(UI_TEXT_EN);
check(
  JSON.stringify(zhKeys) === JSON.stringify(enKeys),
  `介面字典鍵位不一致：繁中 ${zhKeys.length} 鍵／英文 ${enKeys.length} 鍵`
);

/* 7. 英文內容不得殘留未翻譯中文 */
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
// 介面字典的函式鍵以範例參數求值後再檢查
const uiFunctionSamples: string[] = [
  UI_TEXT_EN.expandChapter("X"),
  UI_TEXT_EN.expandChapterAria("1", "T"),
  UI_TEXT_EN.deeperChapter("X"),
  UI_TEXT_EN.deeperChapterAria("1", "T"),
  UI_TEXT_EN.sourcePages("1–2", "3–4"),
  UI_TEXT_EN.usedInChapter("1"),
  SITE_TITLE_EN,
  SITE_DESCRIPTION_EN,
];
let cjkFlagged = 0;
for (const s of [...enStrings, ...uiFunctionSamples]) {
  const rest = stripOriginalLanguage(s);
  const cjk = rest.match(/[\u3400-\u4DBF\u4E00-\u9FFF]/);
  if (cjk) {
    cjkFlagged++;
    errors.push(`英文內容殘留未翻譯中文「${cjk[0]}」：${s.slice(0, 60)}…`);
    if (cjkFlagged > 10) break;
  }
}

/* 7a. 英文禁用行銷語 */
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

/* 8. 英文閱讀時間核算（預設可見層，含頁末回顧） */
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

console.log("=== 內容驗證 ===");
console.log(`章節數：${CHAPTERS.length}（順序與固定章名${errors.length === 0 ? "通過" : "見錯誤"}）`);
console.log(`來源筆數：${SOURCES.length}（S01–S21）`);
console.log(`乙書ISBN差異：內文 ${BOOKS.yi.isbnInner}／封面 ${BOOKS.yi.isbnCover}（已保留）`);
console.log("");
console.log("=== 雙語對等 ===");
console.log(`英文章節：${EN_CHAPTERS.length} 章；titleZh 對照、九欄、來源碼清單、誤解項數逐章核對`);
console.log(`英文來源：${EN_SOURCES.length} 筆；書頁／PDF頁／用於章節／原篇名與繁中版完全一致`);
console.log(`介面字典鍵位：繁中 ${zhKeys.length} 鍵＝英文 ${enKeys.length} 鍵`);
console.log(`英文內容未翻譯中文殘留：${cjkFlagged} 處`);
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
if (enMinutes[1] > 5.5 || enMinutes[0] < 2) {
  warnings.push(
    `英文閱讀時間估計 ${enMinutes[0].toFixed(1)}–${enMinutes[1].toFixed(1)} 分鐘與標示「${READING_TIME_LABEL_EN}」差距較大，請覆核標示。`
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
