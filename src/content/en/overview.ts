/**
 * 英文版總覽與頁末文案 — 編輯翻譯自繁中版 overview.ts
 * （繁中版逐字取自策劃稿 F2 首層總覽與 E7 頁末回顧；英文版為忠實轉譯，非原書官方譯文）。
 * 六章摘要改由 en/chapters.ts 共用資料渲染，不另行維護副本。
 */

import type { OverviewData } from "../types";

/** 頁首導讀（F2 開頭；英譯） */
export const INTRO: OverviewData["INTRO"] = {
  heading: "Bring Spiritual Understanding Back into Everyday Life",
  paragraphs: [
    "This site presents selected readings from Teacher Jiang Qingqi’s (江慶淇老師) two books, 《要開悟讀這本書就夠了》 (If You Want Enlightenment, This Book Is Enough) and 《靈性覺醒》 (Spiritual Awakening), arranging the teachings most directly relevant to personal practice into six chapters. You need not have read either book first, nor have any special experience; you can begin with the people, matters, and choices in front of you.",
    "In the author’s spiritual view, life is connected with the “Origin”, and growth takes place in daily thoughts, actions, and relationships. This site preserves that background while keeping clear the distinction between the author’s claims, plain-language explanation, and the small actions proposed by the editors. Understanding a teaching does not oblige you to accept every one of its interpretations.",
    "Read each chapter’s one-line key point and small action first, then expand the examples, notes on misunderstandings, and sources as you need them. There is no need to open every chapter, nor to complete all the exercises at once. This is an introductory guide; it cannot replace the books’ own complete discussions.",
  ],
};

/** 頁末回顧（F2「今天先做一件事」＋E7；英譯） */
export const CLOSING: OverviewData["CLOSING"] = {
  heading: "Do One Thing Today",
  paragraphs: [
    "Choose one small thing that is happening now; look at how you understand it and why you want to act as you do; then complete one action you are willing to answer for. What you are reviewing is actual interaction and choice — not scoring yourself on spirituality.",
    "To see how the author originally put it, expand the sources in each chapter. On this site, newly written examples and small actions are all labeled “Editorial” (編輯整理); there is no purchase, registration, or sharing of personal experience required.",
  ],
  reflectionHeading: "When You Come Back",
  reflectionParagraphs: [
    "You need not do everything at once today. Choose one small thing that is happening now; see how you understand it and why you want to act as you do; then complete one action you are willing to answer for. When you come back to read again, you may find the next place worth practicing.",
    "These six chapters are an entrance into the two books. To understand the author’s full context, terminology, and the tension between different chapters, please return to the books themselves.",
  ],
};

/** 章節小行動的固定引導語（F2；英譯） */
export const TRY_IT_LABEL = "Try this";

/** 來源與編輯說明區（頁末共用資料：F3／B4／E0／G2 之公開面向；英譯） */
export const EDITORIAL_INFO: OverviewData["EDITORIAL_INFO"] = {
  sourcesHeading: "Sources and Editorial Notes",
  sourceIndexHeading: "Source Index (S01–S21)",
  sourceIndexIntro:
    "The passages from the two books cited on this site are listed below. Source codes such as S01 are tracking numbers assigned by this site. “Book pages” refers to the page numbers printed in the paper edition; “PDF pages” counts from the first sheet of the text PDF used for this project. The two are listed in separate columns, so readers who hold the books, or the same edition of the files, can check the references by page. English renderings of the piece titles are editorial translations; the original Chinese titles are authoritative.",
  booksHeading: "Bibliography of the Two Books",
  versionHeading: "Notes on Editions and Scope of Use",
  conventionsHeading: "Conventions for Pages and Titles",
  conventions: [
    "“Book pages” means the page number printed on paper; “PDF pages” counts from the first sheet of the file as 1. The source table lists them in separate columns; no formula converts between them.",
    "In the paginated body text of 《要開悟讀這本書就夠了》, PDF sheet n usually carries book page 2n−2 on its right half and 2n−1 on its left; this pattern does not apply to the copyright page or the unpaginated image appendix.",
    "In the main text of 《靈性覺醒》 cited here, book pages and PDF pages coincide; the unpaginated appendix and the publication-data pages are marked “unpaginated” (未編頁).",
    "Original piece titles are kept in the books’ own wording; the website’s chapter titles were drafted by the editors and do not impersonate the books’ own chapter titles. Where dialogues in the two books cite page numbers from other editions, this site locates them by the actual pages of the files used here.",
  ],
  principlesHeading: "Editorial Principles",
  principles: [
    "This is a selective introductory guide; it does not represent the whole content of the original books, nor the author’s endorsement.",
    "Content is divided into “claims from the original books”, “plain-language explanation”, “practice suggestions (editorial)”, and “editorial boundaries”. Newly written examples, exercises, and small actions are all labeled “Editorial” (編輯整理) and are not voiced as the author. New examples the author never said are never placed inside quotation marks.",
    "Chapter order is navigation order, not six stages of practice; there is no need to “pass” an earlier chapter before reading a later one.",
    "“Image-verified” (已核圖) means the key pages of a title, major claim, or quotation have been checked against images of the original pages; it does not amount to a word-by-word collation of the entire books.",
    "This site offers no accounts, payments, subscriptions, analytics tracking, or any form of spiritual score; it collects no health or practice records.",
    "English renderings of the two book titles and of the author’s name are editorial translations for readability; no authorized English edition of either book exists.",
  ],
  readingTimeHeading: "Reading-Time Estimate",
  readingTimeNote:
    "The default visible overview on the English pages (including the closing review) runs to roughly 850 words. At ordinary adult reading speeds of about 200–260 words per minute, the text alone takes about 3.3–4.2 minutes; allowing for scrolling and brief pauses, the label reads “Overview: about 3–5 minutes”. This is an editorial estimate, not a measured reading speed, and it does not represent the time needed to read all expanded content.",
};
