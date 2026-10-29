import type { Chapter, Lang, Paragraph, SourceRef } from "@/content/types";
import type { UIStrings } from "@/content/site";
import { ChevronDown } from "lucide-react";

/** 「編輯整理」公開標示（E0：新編練習與例子須標示） */
function EditorialBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-teal/35 bg-teal-soft px-2.5 py-0.5 text-[0.78rem] font-normal leading-none text-teal-deep">
      {label}
    </span>
  );
}

/** 第一層的小節標題（h3），可附「編輯整理」標示 */
function SectionHeading({
  title,
  editorial,
  id,
  label,
}: {
  title: string;
  editorial?: boolean;
  id?: string;
  label: string;
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
      {editorial ? <EditorialBadge label={label} /> : null}
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

/**
 * 來源列：zh — S01｜《書名》〈篇名〉（序）；
 * en — S01 | 《書名》〈篇名〉 — 編輯英譯（附序號英譯）。
 */
function bookTitleFor(s: SourceRef): string {
  return s.book === "jia" ? "要開悟讀這本書就夠了" : "靈性覺醒";
}

/** 章內來源列表；detailed 時附頁碼明細與核對說明 */
function ChapterSourceList({
  ids,
  detailed,
  lang,
  ui,
  sources,
}: {
  ids: string[];
  detailed?: boolean;
  lang: Lang;
  ui: UIStrings;
  sources: SourceRef[];
}) {
  const refs = ids
    .map((id) => sources.find((s) => s.id === id))
    .filter((s): s is SourceRef => Boolean(s));
  return (
    <ul className="space-y-3">
      {refs.map((s) => {
        const suffix = s.sequence ?? s.noteLabel;
        return (
        <li key={s.id} className="text-[1rem] leading-relaxed">
          <a
            href={`#source-${s.id}`}
            className="text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:text-teal-deep hover:decoration-teal"
          >
            {lang === "zh" ? (
              <>
                {s.id}｜
                <span lang="zh-Hant">
                  《{bookTitleFor(s)}》〈{s.title}〉
                </span>
                {suffix ? `（${suffix}）` : ""}
              </>
            ) : (
              <>
                {s.id} |{" "}
                <span lang="zh-Hant">
                  《{bookTitleFor(s)}》〈{s.title}〉
                </span>
                {s.titleEn ? <span> — {s.titleEn}</span> : null}
                {s.sequenceEn ?? s.noteLabelEn ? (
                  <span> ({s.sequenceEn ?? s.noteLabelEn})</span>
                ) : null}
              </>
            )}
          </a>
          <span className="text-ink-soft">{ui.sourcePages(s.bookPages, s.pdfPages)}</span>
          {detailed && s.note ? (
            <span className="mt-1 block max-w-[40rem] text-sm leading-relaxed text-ink-soft">
              {s.note}
            </span>
          ) : null}
        </li>
        );
      })}
    </ul>
  );
}

/** 單一章節區塊：常顯示層＋第一層展開＋第二層選讀（依語言渲染） */
export function ChapterSection({
  chapter: ch,
  lang,
  ui,
  sources,
  tryItLabel,
}: {
  chapter: Chapter;
  lang: Lang;
  ui: UIStrings;
  sources: SourceRef[];
  tryItLabel: string;
}) {
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
          <span className="text-teal">
            {ch.number}
            {ui.numberJoin}
          </span>
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
            <span className="font-semibold text-teal-deep">
              {tryItLabel}
              {lang === "zh" ? "：" : ":"}
            </span>
            <span className="leading-relaxed">{ch.action.summary}</span>
          </p>
          {ch.action.overviewQualifier ? (
            <p className="mt-1.5 leading-relaxed">{ch.action.overviewQualifier}</p>
          ) : null}
          <p className="mt-2.5">
            <EditorialBadge label={ui.editorialBadge} />
          </p>
        </div>
      </header>

      {/* 第一層展開：了解這一章 */}
      <details data-level="1" id={`${ch.id}-content`} className="mt-7">
        <summary className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3 text-left text-[1rem] font-medium text-ink transition-colors hover:border-teal/50 hover:bg-teal-soft/40">
          <span>{ui.expandChapter(ch.shortTitle)}</span>
          <ChevronDown
            aria-hidden="true"
            className="disclosure-chevron h-5 w-5 shrink-0 text-teal"
          />
        </summary>

        <div className="mt-6 space-y-10 border-l-2 border-line pl-4 sm:pl-6">
          <section>
            <SectionHeading title={ui.teachingHeading} label={ui.editorialBadge} />
            <div className="mt-3">
              <Paragraphs paragraphs={ch.teaching.paragraphs} />
            </div>
          </section>

          <section>
            <SectionHeading title={ui.dailyLifeHeading} label={ui.editorialBadge} />
            <div className="mt-3">
              <Paragraphs paragraphs={ch.dailyLife.paragraphs} />
            </div>
          </section>

          <section>
            <SectionHeading title={ui.exampleHeading} editorial label={ui.editorialBadge} />
            <div className="mt-3">
              <Paragraphs paragraphs={ch.example.paragraphs} />
            </div>
          </section>

          <section>
            <SectionHeading title={ui.stepsHeading} editorial label={ui.editorialBadge} />
            <p className="mt-3 max-w-[40rem] leading-[1.9]">{ch.action.steps}</p>
          </section>

          <section>
            <SectionHeading title={ui.misconceptionsHeading} label={ui.editorialBadge} />
            <dl className="mt-3 space-y-5">
              {ch.misunderstandings.items.map((item) => (
                <div key={item.question}>
                  <dt className="font-medium text-ink">
                    {ui.quoteOpen}
                    {item.question}
                    {ui.quoteClose}
                  </dt>
                  <dd className="mt-1.5 max-w-[40rem] border-l-2 border-line pl-4 leading-[1.9] text-ink">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <SectionHeading title={ui.chapterSourcesHeading} label={ui.editorialBadge} />
            <div className="mt-3">
              <ChapterSourceList ids={ch.sourceIds} lang={lang} ui={ui} sources={sources} />
              <p className="mt-4 text-sm">
                <a
                  href="#sources"
                  className="text-teal underline decoration-teal/40 underline-offset-4 hover:text-teal-deep hover:decoration-teal"
                >
                  {ui.fullSourcesLink}
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
              <span>{ui.deeperChapter(ch.shortTitle)}</span>
              <ChevronDown
                aria-hidden="true"
                className="disclosure-chevron h-5 w-5 shrink-0 text-teal"
              />
            </summary>

            <div className="mt-4 space-y-6 border-t border-line pt-5">
              {ch.deeper.quote ? (
                <blockquote className="rounded-lg bg-paper-soft p-4">
                  <p className="text-[1.05rem] leading-relaxed">
                    {ui.quoteOpen}
                    {ch.deeper.quote.text}
                    {ui.quoteClose}
                  </p>
                  <footer className="mt-2 text-sm text-ink-soft">
                    {ui.attributionLead}
                    {ch.deeper.quote.attribution}
                    {lang === "zh" ? "。" : ""}
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
                  {ui.traceabilityHeading}
                </h4>
                <div className="mt-3">
                  <ChapterSourceList
                    ids={ch.sourceIds}
                    detailed
                    lang={lang}
                    ui={ui}
                    sources={sources}
                  />
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
