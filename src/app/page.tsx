import { CHAPTERS } from "@/content/chapters";
import { INTRO, CLOSING, EDITORIAL_INFO } from "@/content/overview";
import { READING_TIME_LABEL, READING_TIME_NOTE, SITE_NAME, SITE_NAME_EN, SITE_TAGLINE, SITE_TAGLINE_EN, UI_TEXT } from "@/content/site";
import { ReadingHeader } from "@/components/reading-header";
import { ChapterSection } from "@/components/chapter-section";
import { SourceIndex } from "@/components/source-index";
import { ReturnToTop } from "@/components/return-to-top";
import { DeepLinkController } from "@/components/deep-link-controller";

function IntroSection() {
  return (
    <section id="overview" aria-labelledby="intro-heading" className="pt-12 sm:pt-16">
      <div className="rounded-2xl border border-line bg-[#F6F5F0] px-5 py-7 text-center sm:py-9" aria-label="覺醒生活 Living Awakening">
        <svg className="mx-auto mb-3 h-8 w-8 text-[#947B54]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M6 24h20M9 20h14M16 5v5M8.5 9l3 3M23.5 9l-3 3M5 16h5M22 16h5M11 20a5 5 0 0 1 10 0"/></svg>
        <p className="text-2xl font-semibold tracking-[0.12em] text-[#343D37]">{SITE_NAME}</p>
        <p className="mt-2 text-lg text-[#667568]">{SITE_NAME_EN}</p>
        <div className="mx-auto my-4 h-px w-14 bg-[#A89A7C]" />
        <p className="font-medium leading-relaxed text-[#434D42]">{SITE_TAGLINE}</p>
        <p className="mt-3 text-sm leading-relaxed text-[#748077]">{SITE_TAGLINE_EN}</p>
      </div>
      <h1
        id="intro-heading"
        className="mt-7 max-w-[40rem] text-[1.8rem] font-bold leading-snug tracking-wide text-ink sm:text-[2.15rem]"
      >
        {INTRO.heading}
      </h1>
      <div className="mt-6 space-y-5">
        {INTRO.paragraphs.map((p, i) => (
          <p key={i} className="max-w-[40rem] leading-[1.9]">
            {p}
          </p>
        ))}
      </div>
      <p className="mt-7 inline-flex items-center rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-ink-soft">
        {READING_TIME_LABEL}
        <span aria-hidden="true" className="mx-2 text-line-strong">
          ·
        </span>
        {READING_TIME_NOTE}
      </p>
    </section>
  );
}

function ChapterNav() {
  return (
    <nav
      id="chapter-nav"
      aria-labelledby="chapter-nav-heading"
      className="border-t border-line pt-9 pb-2"
    >
      <h2 id="chapter-nav-heading" className="text-base font-semibold text-ink-soft">
        {UI_TEXT.chapterNavHeading}
      </h2>
      <p className="mt-1.5 text-sm text-ink-soft">{UI_TEXT.chapterNavNote}</p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {CHAPTERS.map((ch) => (
          <li key={ch.id}>
            <a
              href={`#${ch.id}`}
              className="group flex min-h-11 items-center gap-3 rounded-lg border border-line bg-surface px-4 py-2.5 transition-colors hover:border-teal/50 hover:bg-teal-soft/40"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-soft text-sm font-semibold text-teal-deep"
              >
                {ch.number}
              </span>
              <span className="text-[0.98rem] font-medium leading-snug text-ink group-hover:text-teal-deep">
                {ch.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm">
        <a
          href="#sources"
          className="text-teal underline decoration-teal/40 underline-offset-4 hover:text-teal-deep hover:decoration-teal"
        >
          {UI_TEXT.sourcesLink}
        </a>
      </p>
    </nav>
  );
}

function ClosingSection() {
  return (
    <section
      id="closing"
      aria-labelledby="closing-heading"
      className="chapter-block border-t border-line pt-12"
    >
      <h2 id="closing-heading" className="text-xl font-bold text-ink sm:text-[1.42rem]">
        {CLOSING.heading}
      </h2>
      <div className="mt-5 space-y-5">
        {CLOSING.paragraphs.map((p, i) => (
          <p key={i} className="max-w-[40rem] leading-[1.9]">
            {p}
          </p>
        ))}
      </div>
      <div className="mt-8 max-w-[40rem] rounded-lg border border-line bg-paper-soft p-5">
        <h3 className="text-[1.05rem] font-semibold text-teal-deep">
          {CLOSING.reflectionHeading}
        </h3>
        <div className="mt-3 space-y-4">
          {CLOSING.reflectionParagraphs.map((p, i) => (
            <p key={i} className="leading-[1.9]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="no-print mt-14 border-t border-line bg-paper-soft/60 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto w-full max-w-[45rem] px-4 py-8 sm:px-6">
        <p className="text-[0.95rem] font-semibold text-ink">
          {SITE_NAME}
          <span className="ml-2 font-normal text-ink-soft">｜{SITE_NAME_EN}</span>
        </p>
        <p className="mt-2 max-w-[40rem] text-sm leading-relaxed text-ink-soft">
          這是一份有選擇的入門導讀，不代表原書全部內容，也不代表作者背書。
        </p>
        <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href="#sources"
            className="text-teal underline decoration-teal/40 underline-offset-4 hover:text-teal-deep hover:decoration-teal"
          >
            {EDITORIAL_INFO.sourcesHeading}
          </a>
          <a
            href="#top"
            className="text-ink-soft underline decoration-line-strong underline-offset-4 hover:text-teal-deep"
          >
            {UI_TEXT.backToTop}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:border focus:border-line focus:bg-surface focus:px-4 focus:py-2.5 focus:text-ink focus:shadow-md"
      >
        {UI_TEXT.skipToContent}
      </a>

      <ReadingHeader />

      <main id="main" tabIndex={-1} className="flex-1">
        <div className="mx-auto w-full max-w-[45rem] px-4 sm:px-6">
          <IntroSection />
          <ChapterNav />
          <div id="chapters" className="pt-6">
            {CHAPTERS.map((ch) => (
              <ChapterSection key={ch.id} chapter={ch} />
            ))}
          </div>
          <ClosingSection />
          <SourceIndex />
        </div>
      </main>

      <SiteFooter />
      <ReturnToTop />
      <DeepLinkController />
    </div>
  );
}
