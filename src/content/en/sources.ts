import type { BookInfo, SourceRef } from "../types";
import { BOOKS as ZH_BOOKS, SOURCES as ZH_SOURCES } from "../sources.ts";

/**
 * 英文版來源資料 — 依繁中版 sources.ts 翻譯說明文字。
 * 為避免兩份無關的書目事實副本：來源碼、書籍、篇章序號、原篇名、手札編號、
 * 書頁／PDF頁與用於章節等「事實欄位」直接沿用繁中版資料（單一來源），
 * 僅翻譯 note（核對說明）等編輯文字，並附原篇名／序號的編輯英譯。
 * 《靈性覺醒》ISBN 差異等版本事實完全保留，不因翻譯而改動。
 */

/** 各來源核對說明（G1 最末欄）之英譯 */
const NOTES_EN: Record<string, string> = {
  S01:
    "Read closely in full; all passages image-verified. Birth and upbringing, personality, perception, and beliefs at 171–176; the definition of the divine gene at 174–176. Begins on the left half of PDF 85, ends on the right half of 89.",
  S02:
    "Read closely in full; all passages image-verified. Filters, choice, positive and negative reactions, and the inferences about illness and karma. Begins on the left half of 89, ends on the right half of 92.",
  S03:
    "Read closely in full; all passages image-verified. Enlightenment and the light cocoon at 183, the entry to equal practice at 185, care and each person’s own lessons at 186–187. Page 187 also contains a note on diet, which is not used as dietary guidance on this site.",
  S04:
    "Read closely and image-verified. The alignment model of cognition and reaction at 316–318; statements about lifespan at 318–319; the reminder not to chase supernatural powers at 320.",
  S05:
    "Read closely in full; all passages image-verified. The list at 57; the indispensability of the three at 58; reading at 58; sitting meditation at 58–59; the author’s assurance at 60.",
  S06:
    "The series read in full. Context of life roles and the meaning of life; direct quotation remains limited to the image-verified S05.",
  S07:
    "Read closely in full. The title at 59, the core on motive at 60–62, the extreme examples at 61 and 66–67, and the work example at 68–69 have been image-verified.",
  S08:
    "Read closely in full. The core at 262–263 / PDF 132 is image-verified: doing no harm, one’s present work, service and talents. “Not retiring” at 264 is read as continued learning and service, not rewritten as forced labor.",
  S09:
    "Read closely in full. The three purposes of life and service and contribution; the core at 102–105 / PDF 52–53 is image-verified.",
  S10:
    "Read closely in full. The title and the distinctions among trade, good deeds, and daily habits at 34–35 / PDF 18 are image-verified; the continuation at 36 is used for understanding, not quoted at length.",
  S11:
    "Read closely in full; all passages image-verified. One’s existing roles, family, and love; not the three practice actions of S05.",
  S12:
    "Read closely and image-verified. Supporting the child’s future; the dialogue example on the website is newly written.",
  S13:
    "Read closely and image-verified. The author’s views on sincerity, on cherishing, and on the family’s karmic bonds. The title is read as it runs on the page; no comma is added to make a different “original title”.",
  S14:
    "Read closely and image-verified. Expectations, responsibility, and forbearance; this is not used to require anyone to remain in a harmful relationship.",
  S15:
    "Read closely and image-verified. Motive, altruism, wholehearted effort, responsibility, and a variety of everyday roles.",
  S16:
    "Read closely in full. The reaction story at 238–240 / PDF 120–121 is image-verified; the ratio and the psychological attribution are not treated as fact on this site, and the supernatural-powers discussion in the latter part is not made into its own chapter.",
  S17:
    "Read closely in full; all passages image-verified. Fitting expression allowed at 497–499; patience and understanding how things came about at 502.",
  S18:
    "Read closely in full; all passages image-verified. Difficulty, experience, and the life blueprint; the metaphysical explanation must remain attributed to the author.",
  S19:
    "Read closely in full. The title at 117 and the acknowledgment of pain are image-verified; the rest discusses old, inward patterns of thought. No breathing method has been invented from the metaphor on page 120.",
  S20:
    "Read closely and image-verified. Accumulation drop by drop, patient participation. A comma is added when the title is set horizontally, for readability.",
  S21:
    "Read closely and image-verified. Six sentences of direction on service, help, love, and gratitude; this site only paraphrases them and has not reprinted the whole piece.",
};

/** 原篇名之編輯英譯（非官方授權譯名） */
const TITLES_EN: Record<string, string> = {
  S01: "The Seven Great Questions: The Divine Gene (Part 1)",
  S02: "The Seven Great Questions: The Divine Gene (Part 2)",
  S03: "The Seven Great Questions: The Divine Gene (Part 3)",
  S04: "The Matching of the Divine Gene",
  S05: "After Enlightenment (Continued, Part 3)",
  S06: "After Enlightenment (I), (Continued, Part 2), (Continued, Part 3), (Conclusion)",
  S07: "The Importance of “Motive and Purpose”",
  S08: "Career Choices for Spiritual Growth",
  S09: "Reviewing “The Highest Purpose of Life”",
  S10: "No Spiritual Growth, However Slight, Can Be Obtained Through Trade",
  S11: "The Third Step of Awakening in Daily Life",
  S12: "Let the Child Realize His Own Future",
  S13: "Blessing Family with Love from Within",
  S14: "Couple Relationships and Marriage",
  S15: "Roles",
  S16: "The Festinger Rule and the Traps of Spiritual Growth",
  S17: "The Middle Way and Emotional Cultivation",
  S18: "The Difficulty Before You Is Also Its Solution",
  S19: "The Second Step of Awakening in Daily Life",
  S20: "A Journey of a Thousand Miles Begins Beneath One’s Feet",
  S21: "The Superconsciousness and Convictions of an Enlightened One",
};

/** 篇章序號（開悟之N）之編輯英譯 */
const SEQUENCES_EN: Record<string, string> = {
  "開悟之三": "Enlightenment No. 3",
  "開悟之七": "Enlightenment No. 7",
  "開悟之十二": "Enlightenment No. 12",
  "開悟之二十二": "Enlightenment No. 22",
  "開悟之二十三": "Enlightenment No. 23",
  "開悟之二十四": "Enlightenment No. 24",
  "開悟之三十二": "Enlightenment No. 32",
  "開悟之三十六": "Enlightenment No. 36",
  "開悟之四十六": "Enlightenment No. 46",
  "開悟之七十": "Enlightenment No. 70",
};

/** 手札編號（慶淇悟得手札之N）之編輯英譯 */
const NOTE_LABELS_EN: Record<string, string> = {
  "慶淇悟得手札之四、五、六、七": "Qingqi’s Notes on Awakening No. 4–7",
  "慶淇悟得手札之四": "Qingqi’s Notes on Awakening No. 4",
  "慶淇悟得手札之五": "Qingqi’s Notes on Awakening No. 5",
  "慶淇悟得手札之六": "Qingqi’s Notes on Awakening No. 6",
  "慶淇悟得手札之七": "Qingqi’s Notes on Awakening No. 7",
  "慶淇悟得手札之九十二": "Qingqi’s Notes on Awakening No. 92",
  "慶淇悟得手札之二十": "Qingqi’s Notes on Awakening No. 20",
  "慶淇悟得手札之三十一": "Qingqi’s Notes on Awakening No. 31",
  "慶淇悟得手札之三十二": "Qingqi’s Notes on Awakening No. 32",
  "慶淇悟得手札之二十七": "Qingqi’s Notes on Awakening No. 27",
  "慶淇悟得手札之五十一": "Qingqi’s Notes on Awakening No. 51",
  "慶淇悟得手札之五十二": "Qingqi’s Notes on Awakening No. 52",
  "慶淇悟得手札之五十九": "Qingqi’s Notes on Awakening No. 59",
  "慶淇悟得手札之一百一十七": "Qingqi’s Notes on Awakening No. 117",
};

/** 事實欄位中的中文說明值之顯示英譯（S06 pdfPages「同書頁」） */
const FACT_VALUE_OVERRIDES: Record<string, string> = {
  同書頁: "same as book pp.",
};

/**
 * 英文版來源清單：事實欄位沿用繁中版（確保 S01–S21、頁碼、用於章節一致），
 * 僅替換 note 為英譯並附 titleEn／sequenceEn／noteLabelEn 編輯英譯；
 * 「同書頁」等中文說明值以顯示英譯替換（見 verify-content 對等檢查的明示例外）。
 */
export const SOURCES: SourceRef[] = ZH_SOURCES.map((s) => ({
  ...s,
  note: NOTES_EN[s.id] ?? s.note,
  titleEn: TITLES_EN[s.id],
  sequenceEn: s.sequence ? SEQUENCES_EN[s.sequence] : undefined,
  noteLabelEn: s.noteLabel ? NOTE_LABELS_EN[s.noteLabel] : undefined,
  pdfPages: FACT_VALUE_OVERRIDES[s.pdfPages] ?? s.pdfPages,
}));

/** 依來源碼查詢 */
export function getSource(id: string): SourceRef | undefined {
  return SOURCES.find((s) => s.id === id);
}

/** 兩書書目（英文版）：ISBN、出版者、版次日期等事實沿用繁中版；說明文字為英譯 */
export const BOOKS: Record<"jia" | "yi", BookInfo> = {
  jia: {
    ...ZH_BOOKS.jia,
    titleEn: "If You Want Enlightenment, This Book Is Enough",
    place: "New Taipei City, per the cataloging-in-publication data in the text.",
    edition: "April 2022, first edition, first printing.",
    isbnCoverNote: "Consistent with the ISBN in the text.",
    basis: "Book A’s text PDF p. 325 and Book A’s cover PDF p. 1.",
    copyrightNote:
      "Book A’s text PDF 325 (unpaginated) carries the notice 「版權所有．翻印必究」 (all rights reserved; reprinting prohibited); this site does not offer the books’ content, covers, or complete files for download.",
  },
  yi: {
    ...ZH_BOOKS.yi,
    titleEn: "Spiritual Awakening",
    authorNote: "The publication data in the text is signed 「江慶淇老師」 (Teacher Jiang Qingqi).",
    place: "New Taipei City, per the cataloging-in-publication data in the text.",
    edition: "March 2022, first edition, first printing.",
    isbnCoverNote:
      "Differs from the ISBN in the text. Until the edition correspondence is confirmed, that cover is not presented as the definite companion cover of this text, and no conjecture is offered about reprinting, revision, or misprint. The PDF production date does not stand in for the publication date.",
    basis:
      "Book B’s text PDF 478 and Book B’s cover PDF 1; the two ISBNs are kept as they differ, not merged.",
    copyrightNote:
      "The first page of Book B’s image appendix (PDF 458, unpaginated) carries a statement on use and distribution; see “Notes on Editions and Scope of Use” below.",
  },
};

/** 版本與使用範圍說明（G2／H4 公開面向；英譯，事實保留） */
export const VERSION_NOTES: { title: string; body: string[] }[] = [
  {
    title: "《靈性覺醒》 Statement on Use and Distribution (source evidence)",
    body: [
      "The first page of Book B’s image appendix (PDF 458, unpaginated) states: 「本書內容屬於全體生命／以增進生命福祉之目的／任何形式之利用與散布／無須另行通知即可實行」 (“The content of this book belongs to all life / for the purpose of advancing the welfare of life / use and distribution in any form / may proceed without further notice”), and is signed by 江慶淇 and 江嘉祁. The slashes mark line breaks in the original image.",
      "This site preserves that statement as source evidence for its scope of use; it does not relabel it as a specific open license, as the public domain, or as the author’s endorsement, nor does it automatically extend it to 《要開悟讀這本書就夠了》, to the cover editions, or to third-party materials.",
    ],
  },
  {
    title: "Scope of Use for This Site’s Content",
    body: [
      "This site consists of original plain-language restatement, newly written examples, and a small number of necessary short quotations, with sources fully indicated; it does not bundle the books’ PDFs, covers, the author’s portrait, appendix images, or complete downloads.",
      "The copyright page of 《要開悟讀這本書就夠了》 carries 「版權所有．翻印必究」 (all rights reserved; reprinting prohibited); holding a copy of the files does not amount to authorization to distribute them publicly.",
      "《靈性覺醒》 PDF 474 (unpaginated) contains a diagram of the evolution of the divine gene (〈神性基因演化示意圖〉); it is used only for the editors’ understanding of the author’s model and is not reproduced on this site.",
    ],
  },
];
