"use client";

import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME, SITE_NAME_EN, UI_TEXT } from "@/content/site";
import { setAllLevel1 } from "@/lib/reading-controls";

/**
 * 固定頂欄：站名（回頂）、章節連結、展開／收合六章。
 * 增強控制（展開／收合）僅在有 JavaScript 時顯示（html.js）。
 */
export function ReadingHeader() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex min-h-14 w-full max-w-[45rem] items-center gap-1 px-4 sm:px-6">
        <a
          href="#top"
          className="flex min-h-11 items-center gap-2.5 rounded-md px-1.5 py-1 font-semibold tracking-wide text-ink transition-colors hover:text-teal-deep"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rotate-45 rounded-[2px] border-2 border-teal"
          />
          {SITE_NAME}
          <span className="hidden text-xs font-normal text-ink-soft sm:inline">
            {SITE_NAME_EN}
          </span>
        </a>
        <nav aria-label="頁面工具" className="ml-auto flex items-center gap-1.5">
          <a
            href="#chapter-nav"
            className="hidden min-h-11 items-center rounded-md px-3 text-sm text-ink-soft transition-colors hover:text-teal-deep sm:flex"
          >
            章節
          </a>
          <Button
            type="button"
            variant="outline"
            className="js-only h-11 gap-1.5 px-3 text-sm sm:px-3.5"
            onClick={() => setAllLevel1(true)}
          >
            <ChevronsUpDown aria-hidden="true" className="h-4 w-4" />
            {UI_TEXT.expandAll}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="js-only h-11 gap-1.5 px-3 text-sm sm:px-3.5"
            onClick={() => setAllLevel1(false)}
          >
            <ChevronsDownUp aria-hidden="true" className="h-4 w-4" />
            {UI_TEXT.collapseAll}
          </Button>
        </nav>
      </div>
    </header>
  );
}
