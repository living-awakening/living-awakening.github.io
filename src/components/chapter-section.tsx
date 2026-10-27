import type { Chapter, Paragraph, SourceRef } from "@/content/types";
import { BOOKS, SOURCES } from "@/content/sources";
import { TRY_IT_LABEL } from "@/content/overview";
import { UI_TEXT } from "@/content/site";
import { ChevronDown } from "lucide-react";

/** 「編輯整理」公開標示（E0：新編練習與例子須標示） */
function EditorialBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-teal/35 bg-teal-soft px-2.5 py-0.5 text-[0.78rem] font-normal leading-none text-teal-deep">
      編輯整理
    </span>
  );
}

/** 第一層的小節標題（h3），可附「編輯整理」標示 */
function SectionHeading({
  title,
  editorial,
  id,
}: {
  title: string;
  editorial?: boolean;
  id?: string;
}) {
  return (
    <h3
      id={id}
      className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[1.08rem] font-semibold text-ink"
    >
      <span
        aria-hidden="true"
        className="inline-block h-[1.05rem] w-[3px] rounded-full bg-teal"
      />
      {title}
      {editorial ? <EditorialBadge /> : null}
    </h3>
  );
}

/** 段落渲染：可帶粗體引導句 */
function Paragraphs({ paragraphs }: { paragraphs: Paragraph[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="max-w-[40rem] leading-[1.9]">
          {p.lead ? <strong className="font-semibold">{p.lead}</strong> : null}
          {p.text}
        </p>
      ))}
    </div>
  );
}

/** 來源列格式：S01｜《書名》〈篇名〉（序） */
function sourceTitle(s: SourceRef): string {
  const suffix = s.sequence ?? s.noteLabel;
  return `${s.id}｜《${BOOKS[s.book].title}》〈${s.title}〉${suffix ? `（${suffix}）` : ""}`;
}

/** 章內來源列表；detailed 時附頁碼明細與核對說明 */
function ChapterSourceList({
  ids,
  detailed,
}: {
  ids: string[];
  detailed?: boolean;
}) {
  const refs = ids
    .map((id) => SOURCES.find((s) => s.id === id))
    .filter((s): s is SourceRef => Boolean(s));
  return (
    <ul className="space-y-3">
      {refs.map((s) => (
        <li key={s.id} className="text-[1rem] leading-relaxed">
          <a
            href={`#source-${s.id}`}
            className="text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:text-teal-deep hover:decoration-teal"
          >
            {sourceTitle(s)}
          </a>
          <span className="text-ink-soft">　書{s.bookPages}／PDF{s.pdfPages}</span>
          {detailed && s.note ? (
            <span className="mt-1 block max-w-[40rem] text-sm leading-relaxed text-ink-soft">
              {s.note}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

/** 單一章節區塊：常顯示層＋第一層展開＋第二層選讀 */
export function ChapterSection({ chapter: ch }: { chapter: Chapter }) {
  return (
    <article
      id={ch.id}
      aria-labelledby={`${ch.id}-title`}
      className="chapter-block border-t border-line py-10 sm:py-12"
    >
      <header>
        <h2
          id={`${ch.id}-title`}
          className="max-w-[40rem] text-[1.42rem] font-bold leading-snug text-ink sm:text-2xl"
        >
          <span className="text-teal">{ch.number}｜</span>
          {ch.title}
        </h2>

        <p className="mt-5 max-w-[40rem] border-l-[3px] border-teal/70 pl-4 text-[1.16rem] font-medium leading-relaxed">
          {ch.core}
        </p>

        {ch.alwaysVisibleNote ? (
          <aside className="mt-5 max-w-[40rem] rounded-lg border border-line bg-paper-soft p-4">
            <p className="text-sm font-semibold text-teal-deep">
              {ch.alwaysVisibleNote.label}
            </p>
            <p className="mt-1 text-[1rem] leading-relaxed">
              {ch.alwaysVisibleNote.text}
            </p>
          </aside>
        ) : null}

        {ch.practices ? (
          <ol className="mt-5 max-w-[40rem] list-decimal space-y-1.5 pl-6 marker:font-semibold marker:text-teal-deep">
            {ch.practices.items.map((item) => (
              <li key={item} className="font-medium leading-relaxed">
                {item}
              </li>
            ))}
          </ol>
        ) : null}

        <div className="mt-5 max-w-[40rem] rounded-lg border border-teal/25 bg-teal-soft/70 p-4">
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-semibold text-teal-deep">{TRY_IT_LABEL}：</span>
            <span className="leading-relaxed">{ch.action.summary}</span>
          </p>
          {ch.action.overviewQualifier ? (
            <p className="mt-1.5 leading-relaxed">{ch.action.overviewQualifier}</p>
          ) : null}
          <p className="mt-2.5">
            <EditorialBadge />
          </p>
        </div>
      </header>

      {/* 第一層展開：了解這一章 */}
      <details data-level="1" id={`${ch.id}-content`} className="mt-7">
        <summary className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3 text-left text-[1rem] font-medium text-ink transition-colors hover:border-teal/50 hover:bg-teal-soft/40">
          <span>{UI_TEXT.expandChapter(ch.shortTitle)}</span>
          <ChevronDown
            aria-hidden="true"
            className="disclosure-chevron h-5 w-5 shrink-0 text-teal"
          />
        </summary>

        <div className="mt-6 space-y-10 border-l-2 border-line pl-4 sm:pl-6">
          <section>
            <SectionHeading title="教導說明" />
            <div className="mt-3">
              <Paragraphs paragraphs={ch.teaching.paragraphs} />
            </div>
          </section>

          <section>
            <SectionHeading title="與日常生活的關係" />
            <div className="mt-3">
              <Paragraphs paragraphs={ch.dailyLife.paragraphs} />
            </div>
          </section>

          <section>
            <SectionHeading title="生活例子" editorial />
            <div className="mt-3">
              <Paragraphs paragraphs={ch.example.paragraphs} />
            </div>
          </section>

          <section>
            <SectionHeading title="小行動步驟" editorial />
            <p className="mt-3 max-w-[40rem] leading-[1.9]">{ch.action.steps}</p>
          </section>

          <section>
            <SectionHeading title="常見誤解" />
            <dl className="mt-3 space-y-5">
              {ch.misunderstandings.items.map((item) => (
                <div key={item.question}>
                  <dt className="font-medium text-ink">「{item.question}」</dt>
                  <dd className="mt-1.5 max-w-[40rem] border-l-2 border-line pl-4 leading-[1.9] text-ink">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <SectionHeading title="本章來源" />
            <div className="mt-3">
              <ChapterSourceList ids={ch.sourceIds} />
              <p className="mt-4 text-sm">
                <a
                  href="#sources"
                  className="text-teal underline decoration-teal/40 underline-offset-4 hover:text-teal-deep hover:decoration-teal"
                >
                  完整來源對照（S01–S21）
                </a>
              </p>
            </div>
          </section>

          {/* 第二層選讀：深入原書脈絡 */}
          <details
            data-level="2"
            id={`${ch.id}-deeper`}
            className="rounded-lg border border-line bg-surface/70 p-4 sm:p-5"
          >
            <summary className="flex min-h-11 items-center justify-between gap-3 rounded-md px-2 py-2.5 text-left text-[1rem] font-medium text-teal-deep transition-colors hover:bg-teal-soft/50">
              <span>{UI_TEXT.deeperChapter(ch.shortTitle)}</span>
              <ChevronDown
                aria-hidden="true"
                className="disclosure-chevron h-5 w-5 shrink-0 text-teal"
              />
            </summary>

            <div className="mt-4 space-y-6 border-t border-line pt-5">
              {ch.deeper.quote ? (
                <blockquote className="rounded-lg bg-paper-soft p-4">
                  <p className="text-[1.05rem] leading-relaxed">
                    「{ch.deeper.quote.text}」
                  </p>
                  <footer className="mt-2 text-sm text-ink-soft">
                    ——{ch.deeper.quote.attribution}。
                  </footer>
                </blockquote>
              ) : null}

              <Paragraphs paragraphs={ch.deeper.paragraphs} />

              <section>
                <h4 className="flex items-center gap-x-3 gap-y-1.5 text-[1rem] font-semibold text-ink">
                  <span
                    aria-hidden="true"
                    className="inline-block h-4 w-[3px] rounded-full bg-teal/70"
                  />
                  完整來源與追溯
                </h4>
                <div className="mt-3">
                  <ChapterSourceList ids={ch.sourceIds} detailed />
                </div>
                <p className="mt-4 max-w-[40rem] rounded-lg border border-line bg-paper-soft p-4 text-[0.95rem] leading-relaxed text-ink-soft">
                  {ch.traceability}
                </p>
              </section>
            </div>
          </details>
        </div>
      </details>
    </article>
  );
}
