/**
 * 內容驗證腳本（無外部相依；需 Node 22.6+，建議 Node 24）。
 * 用法：node scripts/verify-content.mts
 *
 * 檢查：
 * 1. 六章齊全、順序與固定章名正確；每章九欄內容齊備。
 * 2. 第二章三項作為順序正確；「40分至90分鐘」與「三個要素缺一不可」保留。
 * 3. S01–S21 齊全、來源碼與章節對應一致；乙書ISBN差異保留。
 * 4. 禁用行銷語與外部URL不存在。
 * 5. 重新核算預設可見總覽的閱讀單位（中文字＋連續英數詞）與閱讀時間估計。
 */
import { CHAPTERS } from "../src/content/chapters.ts";
import { SOURCES, BOOKS, VERSION_NOTES } from "../src/content/sources.ts";
import { INTRO, CLOSING, EDITORIAL_INFO, TRY_IT_LABEL } from "../src/content/overview.ts";
import { READING_TIME_LABEL } from "../src/content/site.ts";

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

/* 1. 章節結構 */
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

/* 2. 第一章界線、第二章清單 */
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

/* 3. 來源 */
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

/* 4. 禁用語與URL */
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

/* 5. 閱讀時間重算（依 F2 範圍＋E7 頁末回顧） */
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

console.log("=== 內容驗證 ===");
console.log(`章節數：${CHAPTERS.length}（順序與固定章名${errors.length === 0 ? "通過" : "見錯誤"}）`);
console.log(`來源筆數：${SOURCES.length}（S01–S21）`);
console.log(`乙書ISBN差異：內文 ${BOOKS.yi.isbnInner}／封面 ${BOOKS.yi.isbnCover}（已保留）`);
console.log("");
console.log("=== 閱讀時間重算 ===");
console.log(
  `F2 標記範圍：中文字 ${f2Chinese}、連續英數詞 ${f2Latin}、計數單位 ${f2Chinese + f2Latin}（原稿為 1,012／8／1,020）`
);
console.log(
  `本站預設可見層（F2＋E7頁末回顧）：中文字 ${chineseChars}、連續英數詞 ${latinWords}、計數單位 ${units}`
);
console.log(
  `以每分鐘 250–350 單位估計：約 ${minutes[0].toFixed(1)}–${minutes[1].toFixed(1)} 分鐘（標示：${READING_TIME_LABEL}）`
);
if (f2Chinese !== 1012 || f2Latin !== 8) {
  warnings.push(
    `F2 範圍計數：中文字 ${f2Chinese}（原稿 1,012）、英數詞 ${f2Latin}（原稿自述 8；差異為「1. 2. 3.」清單編號是否計入，本腳本不計清單編號）。中文字數與原稿所載不同，不能據此證明逐字一致；須以原始策劃稿人工對照。`
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
