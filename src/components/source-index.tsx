import type { BookInfo, SourceRef } from "@/content/types";
import { BOOKS, SOURCES, VERSION_NOTES } from "@/content/sources";
import { CHAPTERS } from "@/content/chapters";
import { EDITORIAL_INFO } from "@/content/overview";

function chapterNumberOf(id: string): string | undefined {
  return CHAPTERS.find((c) => c.id === id)?.number;
}

/** 書目卡（B2） */
function BookCard({ book }: { book: BookInfo }) {
  return (
    <div className="avoid-break rounded-lg border border-line bg-surface p-4 sm:p-5">
      <h4 className="text-lg font-bold text-ink">《{book.title}》</h4>
      <dl className="mt-3 grid gap-x-8 gap-y-2.5 text-[0.98rem] leading-relaxed sm:grid-cols-2">
        <div>
          <dt className="text-[0.82rem] text-ink-soft">作者</dt>
          <dd className="font-medium">
            {book.author}老師
            {book.authorNote ? (
              <span className="font-normal text-ink-soft">{book.authorNote}</span>
            ) : null}
          </dd>
        </div>
        <div>
          <dt className="text-[0.82rem] text-ink-soft">出版者</dt>
          <dd className="font-medium">{book.publisher}</dd>
        </div>
        <div>
          <dt className="text-[0.82rem] text-ink-soft">出版地</dt>
          <dd>{book.place}</dd>
        </div>
        <div>
          <dt className="text-[0.82rem] text-ink-soft">版次及日期</dt>
          <dd>{book.edition}</dd>
        </div>
        <div>
          <dt className="text-[0.82rem] text-ink-soft">內文ISBN</dt>
          <dd className="font-mono text-[0.95rem]">{book.isbnInner}</dd>
        </div>
        <div>
          <dt className="text-[0.82rem] text-ink-soft">所附封面ISBN</dt>
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
          <dt className="text-[0.82rem] text-ink-soft">核對依據</dt>
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
function SourceEntry({ source }: { source: SourceRef }) {
  const suffix = source.sequence ?? source.noteLabel;
  const usedIn = source.usedIn.map((cid, i) => (
    <span key={cid}>
      {i > 0 ? "、" : null}
      <a
        href={`#${cid}`}
        className="text-teal underline decoration-teal/40 underline-offset-4 hover:text-teal-deep hover:decoration-teal"
      >
        第{chapterNumberOf(cid)}章
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
          來源碼
        </span>
        {source.id}
      </span>
      <span className="leading-relaxed">
        <span className="block text-[0.75rem] text-ink-soft md:sr-only">書名與原篇名</span>
        《{BOOKS[source.book].title}》〈{source.title}〉
        {suffix ? <span className="text-ink-soft">（{suffix}）</span> : null}
      </span>
      <span className="text-[0.95rem]">
        <span className="block text-[0.75rem] text-ink-soft md:sr-only">書頁</span>
        {source.bookPages}
      </span>
      <span className="text-[0.95rem]">
        <span className="block text-[0.75rem] text-ink-soft md:sr-only">PDF頁</span>
        {source.pdfPages}
      </span>
      <span className="text-[0.95rem]">
        <span className="block text-[0.75rem] text-ink-soft md:sr-only">用於</span>
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

/** 頁末共用資料：書目、來源對照、版本與使用範圍、約定、編輯原則、閱讀時間 */
export function SourceIndex() {
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
        {EDITORIAL_INFO.sourcesHeading}
      </h2>

      <section className="mt-8" aria-labelledby="books-heading">
        <h3 id="books-heading" className="text-[1.08rem] font-semibold text-ink">
          {EDITORIAL_INFO.booksHeading}
        </h3>
        <div className="mt-4 space-y-4">
          <BookCard book={BOOKS.jia} />
          <BookCard book={BOOKS.yi} />
        </div>
      </section>

      <section className="mt-10" aria-labelledby="source-index-heading">
        <h3 id="source-index-heading" className="text-[1.08rem] font-semibold text-ink">
          {EDITORIAL_INFO.sourceIndexHeading}
        </h3>
        <p className="mt-2 max-w-[40rem] text-[0.95rem] leading-relaxed text-ink-soft">
          {EDITORIAL_INFO.sourceIndexIntro}
        </p>

        {/* 桌面欄名（手機由逐欄標籤提供） */}
        <div
          aria-hidden="true"
          className="mt-4 hidden gap-x-4 px-4 pb-1 text-[0.82rem] font-semibold text-ink-soft md:grid md:grid-cols-[3.8rem_1fr_5.2rem_5.6rem_6.8rem]"
        >
          <span>來源碼</span>
          <span>書名與原篇名</span>
          <span>書頁</span>
          <span>PDF頁</span>
          <span>用於</span>
        </div>
        <ul className="space-y-3">
          {SOURCES.map((s) => (
            <SourceEntry key={s.id} source={s} />
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="version-heading">
        <h3 id="version-heading" className="text-[1.08rem] font-semibold text-ink">
          {EDITORIAL_INFO.versionHeading}
        </h3>
        <div className="mt-4 space-y-4">
          {VERSION_NOTES.map((n) => (
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
          {EDITORIAL_INFO.conventionsHeading}
        </h3>
        <ul className="mt-3 space-y-2">
          {EDITORIAL_INFO.conventions.map((c, i) => (
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
          {EDITORIAL_INFO.principlesHeading}
        </h3>
        <ul className="mt-3 space-y-2">
          {EDITORIAL_INFO.principles.map((p, i) => (
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
          {EDITORIAL_INFO.readingTimeHeading}
        </h3>
        <p className="mt-3 max-w-[40rem] text-[0.95rem] leading-relaxed text-ink-soft">
          {EDITORIAL_INFO.readingTimeNote}
        </p>
      </section>
    </section>
  );
}
