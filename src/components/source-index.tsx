import type { BookInfo, Chapter, EditorialInfoData, Lang, SourceRef } from "@/content/types";
import type { UIStrings } from "@/content/site";

interface VersionNote {
  title: string;
  body: string[];
}

function chapterNumberOf(chapters: Chapter[], id: string): string | undefined {
  return chapters.find((c) => c.id === id)?.number;
}

/** 書目卡（B2） */
function BookCard({ book, lang, ui }: { book: BookInfo; lang: Lang; ui: UIStrings }) {
  return (
    <div className="avoid-break rounded-lg border border-line bg-surface p-4 sm:p-5">
      <h4 className="text-lg font-bold text-ink">
        <span lang="zh-Hant">《{book.title}》</span>
        {lang === "en" && book.titleEn ? (
          <span className="ml-2 text-base font-semibold text-ink-soft">({book.titleEn})</span>
        ) : null}
        {lang === "id" && book.titleId ? (
          <span className="ml-2 text-base font-semibold text-ink-soft">({book.titleId})</span>
        ) : null}
      </h4>
      <dl className="mt-3 grid gap-x-8 gap-y-2.5 text-[0.98rem] leading-relaxed sm:grid-cols-2">
        <div>
          <dt className="text-[0.82rem] text-ink-soft">{ui.authorLabel}</dt>
          <dd className="font-medium">
            <span lang="zh-Hant">{book.author}</span>
            {lang === "zh" ? "老師" : lang === "en" ? " (Teacher Jiang Qingqi)" : " (Guru Jiang Qingqi)"}
            {book.authorNote ? (
              <span className="font-normal text-ink-soft">
                {lang === "zh" ? "" : " "}
                {book.authorNote}
              </span>
            ) : null}
          </dd>
        </div>
        <div>
          <dt className="text-[0.82rem] text-ink-soft">{ui.publisherLabel}</dt>
          <dd className="font-medium">
            <span lang="zh-Hant">{book.publisher}</span>
          </dd>
        </div>
        <div>
          <dt className="text-[0.82rem] text-ink-soft">{ui.placeLabel}</dt>
          <dd>{book.place}</dd>
        </div>
        <div>
          <dt className="text-[0.82rem] text-ink-soft">{ui.editionLabel}</dt>
          <dd>{book.edition}</dd>
        </div>
        <div>
          <dt className="text-[0.82rem] text-ink-soft">{ui.isbnInnerLabel}</dt>
          <dd className="font-mono text-[0.95rem]">{book.isbnInner}</dd>
        </div>
        <div>
          <dt className="text-[0.82rem] text-ink-soft">{ui.isbnCoverLabel}</dt>
          <dd>
            <span className="font-mono text-[0.95rem]">{book.isbnCover}</span>
            {book.isbnCoverNote ? (
              <span className="mt-0.5 block text-[0.9rem] leading-relaxed text-ink-soft">
                {book.isbnCoverNote}
              </span>
            ) : null}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-[0.82rem] text-ink-soft">{ui.basisLabel}</dt>
          <dd>{book.basis}</dd>
        </div>
      </dl>
      {book.copyrightNote ? (
        <p className="mt-3 rounded-md bg-paper-soft p-3 text-[0.9rem] leading-relaxed">
          {book.copyrightNote}
        </p>
      ) : null}
    </div>
  );
}

/** 單筆來源：手機逐欄標籤排列；桌面單行網格（欄名由表頭提供） */
function SourceEntry({
  source,
  lang,
  ui,
  chapters,
  books,
}: {
  source: SourceRef;
  lang: Lang;
  ui: UIStrings;
  chapters: Chapter[];
  books: Record<"jia" | "yi", BookInfo>;
}) {
  const suffix = source.sequence ?? source.noteLabel;
  const usedIn = source.usedIn.map((cid, i) => (
    <span key={cid}>
      {i > 0 ? (lang === "zh" ? "、" : ", ") : null}
      <a
        href={`#${cid}`}
        className="text-teal underline decoration-teal/40 underline-offset-4 hover:text-teal-deep hover:decoration-teal"
      >
        {ui.usedInChapter(chapterNumberOf(chapters, cid) ?? cid)}
      </a>
    </span>
  ));

  return (
    <li
      id={`source-${source.id}`}
      className="source-entry grid gap-x-4 gap-y-2 rounded-lg border border-line bg-surface p-4 md:grid-cols-[3.8rem_1fr_5.2rem_5.6rem_6.8rem] md:items-baseline"
    >
      <span className="text-[0.95rem] font-semibold text-teal-deep">
        <span className="block text-[0.75rem] font-normal text-ink-soft md:sr-only">
          {ui.sourceIdLabel}
        </span>
        {source.id}
      </span>
      <span className="leading-relaxed">
        <span className="block text-[0.75rem] text-ink-soft md:sr-only">
          {ui.bookAndTitleLabel}
        </span>
        <span lang="zh-Hant">
          《{books[source.book].title}》〈{source.title}〉
        </span>
        {suffix ? <span className="text-ink-soft">（{suffix}）</span> : null}
        {lang === "en" && (source.titleEn || source.sequenceEn || source.noteLabelEn) ? (
          <span className="mt-0.5 block text-[0.88rem] leading-relaxed text-ink-soft">
            {source.titleEn}
            {source.sequenceEn || source.noteLabelEn
              ? ` (${source.sequenceEn ?? source.noteLabelEn})`
              : ""}
          </span>
        ) : null}
        {lang === "id" && (source.titleId || source.sequenceId || source.noteLabelId) ? (
          <span className="mt-0.5 block text-[0.88rem] leading-relaxed text-ink-soft">
            {source.titleId}
            {source.sequenceId || source.noteLabelId
              ? ` (${source.sequenceId ?? source.noteLabelId})`
              : ""}
          </span>
        ) : null}
      </span>
      <span className="text-[0.95rem]">
        <span className="block text-[0.75rem] text-ink-soft md:sr-only">{ui.bookPagesLabel}</span>
        {source.bookPages}
      </span>
      <span className="text-[0.95rem]">
        <span className="block text-[0.75rem] text-ink-soft md:sr-only">{ui.pdfPagesLabel}</span>
        {source.pdfPages}
      </span>
      <span className="text-[0.95rem]">
        <span className="block text-[0.75rem] text-ink-soft md:sr-only">{ui.usedInLabel}</span>
        {usedIn}
      </span>
      {source.note ? (
        <span className="mt-1 border-t border-line pt-2 text-[0.88rem] leading-relaxed text-ink-soft md:col-span-5">
          {source.note}
        </span>
      ) : null}
    </li>
  );
}

/** 頁末共用資料：書目、來源對照、版本與使用範圍、約定、編輯原則、閱讀時間（依語言渲染） */
export function SourceIndex({
  lang,
  ui,
  books,
  sources,
  versionNotes,
  editorialInfo,
  chapters,
}: {
  lang: Lang;
  ui: UIStrings;
  books: Record<"jia" | "yi", BookInfo>;
  sources: SourceRef[];
  versionNotes: VersionNote[];
  editorialInfo: EditorialInfoData;
  chapters: Chapter[];
}) {
  return (
    <section
      id="sources"
      aria-labelledby="sources-heading"
      className="chapter-block border-t border-line pt-12 pb-6"
    >
      <h2
        id="sources-heading"
        className="text-xl font-bold text-ink sm:text-[1.42rem]"
      >
        {editorialInfo.sourcesHeading}
      </h2>

      <section className="mt-8" aria-labelledby="books-heading">
        <h3 id="books-heading" className="text-[1.08rem] font-semibold text-ink">
          {editorialInfo.booksHeading}
        </h3>
        <div className="mt-4 space-y-4">
          <BookCard book={books.jia} lang={lang} ui={ui} />
          <BookCard book={books.yi} lang={lang} ui={ui} />
        </div>
      </section>

      <section className="mt-10" aria-labelledby="source-index-heading">
        <h3 id="source-index-heading" className="text-[1.08rem] font-semibold text-ink">
          {editorialInfo.sourceIndexHeading}
        </h3>
        <p className="mt-2 max-w-[40rem] text-[0.95rem] leading-relaxed text-ink-soft">
          {editorialInfo.sourceIndexIntro}
        </p>

        {/* 桌面欄名（手機由逐欄標籤提供） */}
        <div
          aria-hidden="true"
          className="mt-4 hidden gap-x-4 px-4 pb-1 text-[0.82rem] font-semibold text-ink-soft md:grid md:grid-cols-[3.8rem_1fr_5.2rem_5.6rem_6.8rem]"
        >
          <span>{ui.sourceIdLabel}</span>
          <span>{ui.bookAndTitleLabel}</span>
          <span>{ui.bookPagesLabel}</span>
          <span>{ui.pdfPagesLabel}</span>
          <span>{ui.usedInLabel}</span>
        </div>
        <ul className="space-y-3">
          {sources.map((s) => (
            <SourceEntry
              key={s.id}
              source={s}
              lang={lang}
              ui={ui}
              chapters={chapters}
              books={books}
            />
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="version-heading">
        <h3 id="version-heading" className="text-[1.08rem] font-semibold text-ink">
          {editorialInfo.versionHeading}
        </h3>
        <div className="mt-4 space-y-4">
          {versionNotes.map((n) => (
            <div key={n.title} className="avoid-break rounded-lg border border-line bg-surface p-4">
              <h4 className="text-[1rem] font-semibold text-ink">{n.title}</h4>
              <div className="mt-2 space-y-2">
                {n.body.map((p, i) => (
                  <p key={i} className="text-[0.95rem] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="conventions-heading">
        <h3 id="conventions-heading" className="text-[1.08rem] font-semibold text-ink">
          {editorialInfo.conventionsHeading}
        </h3>
        <ul className="mt-3 space-y-2">
          {editorialInfo.conventions.map((c, i) => (
            <li key={i} className="max-w-[40rem] leading-relaxed">
              <span aria-hidden="true" className="mr-2 text-teal">
                ·
              </span>
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="principles-heading">
        <h3 id="principles-heading" className="text-[1.08rem] font-semibold text-ink">
          {editorialInfo.principlesHeading}
        </h3>
        <ul className="mt-3 space-y-2">
          {editorialInfo.principles.map((p, i) => (
            <li key={i} className="max-w-[40rem] leading-relaxed">
              <span aria-hidden="true" className="mr-2 text-teal">
                ·
              </span>
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="reading-time-heading">
        <h3 id="reading-time-heading" className="text-[1.08rem] font-semibold text-ink">
          {editorialInfo.readingTimeHeading}
        </h3>
        <p className="mt-3 max-w-[40rem] text-[0.95rem] leading-relaxed text-ink-soft">
          {editorialInfo.readingTimeNote}
        </p>
      </section>
    </section>
  );
}
