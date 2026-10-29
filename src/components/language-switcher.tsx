"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGUAGES, UI_TEXT, UI_TEXT_EN, languagePath } from "@/content/site";
import type { Lang } from "@/content/types";

/** 語言切換時的閱讀狀態交接（ sessionStorage ；僅切換語言時寫入） */
const HANDOFF_KEY = "la-lang-handoff";

interface Handoff {
  at: number;
  anchor: string | null;
  openChapters: string[];
}

/** 判斷元素是否仍大致在視窗內（含部分可見） */
function isNearViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

/** 計算目前閱讀位置的錨點（hash 目標仍可見時沿用；否則找最近的章節／區塊） */
function currentAnchor(): string | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash;
  if (hash && hash.length > 1) {
    try {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el instanceof HTMLElement && isNearViewport(el)) {
        return hash.slice(1);
      }
    } catch {
      /* 無效 hash 時改用捲動位置 */
    }
  }
  const candidates = Array.from(
    document.querySelectorAll<HTMLElement>(
      "article[id^='chapter-'], section#sources, section#closing, section#overview"
    )
  );
  const middle = window.innerHeight * 0.5;
  let anchor: string | null = null;
  for (const el of candidates) {
    if (el.getBoundingClientRect().top <= middle) {
      anchor = el.id;
    } else {
      break;
    }
  }
  return anchor;
}

/** 寫入語言切換交接：保留目前展開的章節與閱讀位置 */
function writeHandoff(): void {
  try {
    const openChapters = Array.from(
      document.querySelectorAll<HTMLDetailsElement>("details[data-level='1']")
    )
      .filter((d) => d.open)
      .map((d) => d.id.replace(/-content$/, ""));
    const handoff: Handoff = {
      at: Date.now(),
      anchor: currentAnchor(),
      openChapters,
    };
    window.sessionStorage.setItem(HANDOFF_KEY, JSON.stringify(handoff));
  } catch {
    /* sessionStorage 不可用時靜默略過（不影響導覽） */
  }
}

/** 讀取並清除語言切換交接（供深層連結控制器還原閱讀狀態） */
export function consumeHandoff(): Handoff | null {
  try {
    const raw = window.sessionStorage.getItem(HANDOFF_KEY);
    if (!raw) return null;
    window.sessionStorage.removeItem(HANDOFF_KEY);
    const handoff = JSON.parse(raw) as Handoff;
    if (!handoff || typeof handoff.at !== "number") return null;
    if (Date.now() - handoff.at > 120_000) return null; // 超過兩分鐘視為過期
    return handoff;
  } catch {
    return null;
  }
}

/**
 * 語言選擇器（頂欄右側）：按鈕＋下拉選單。
 * 鍵盤：Enter／Space 開關；↑↓ 在選項間移動；Escape 關閉並回到按鈕；
 * Tab 關閉並自然移出；Enter／Space 或點選即切換語言。
 * 切換時保留錨點（同章節）與展開狀態（詳見 writeHandoff／consumeHandoff）。
 */
export function LanguageSwitcher({ current }: { current: Lang }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuId = useId();

  const ui = current === "zh" ? UI_TEXT : UI_TEXT_EN;
  const target: Lang = current === "zh" ? "en" : "zh";
  const targetPath = languagePath(target);

  const focusItem = useCallback((index: number) => {
    const item = itemRefs.current[index];
    if (item) item.focus();
  }, []);

  const closeMenu = useCallback(
    (returnFocus: boolean) => {
      setOpen(false);
      if (returnFocus) buttonRef.current?.focus();
    },
    []
  );

  const openMenu = useCallback(() => {
    setOpen(true);
    // 開啟後聚焦目前語言選項（rAF 等待選單掛載）
    requestAnimationFrame(() => {
      const currentIndex = LANGUAGES.findIndex((l) => l.code === current);
      focusItem(currentIndex >= 0 ? currentIndex : 0);
    });
  }, [current, focusItem]);

  // 點擊選單外部關閉（不搶回焦點）
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        closeMenu(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, closeMenu]);

  // 焦點移出選單時關閉（Tab 自然離開）
  useEffect(() => {
    if (!open) return;
    const onFocusIn = (e: FocusEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("focusin", onFocusIn);
    return () => document.removeEventListener("focusin", onFocusIn);
  }, [open]);

  const onButtonClick = () => {
    if (open) closeMenu(true);
    else openMenu();
  };

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    const count = LANGUAGES.length;
    const currentIndex = itemRefs.current.findIndex((item) => item === document.activeElement);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusItem((currentIndex + 1) % count);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusItem((currentIndex - 1 + count) % count);
        break;
      case "Home":
        e.preventDefault();
        focusItem(0);
        break;
      case "End":
        e.preventDefault();
        focusItem(count - 1);
        break;
      case "Escape":
        e.preventDefault();
        closeMenu(true);
        break;
      case "Tab":
        closeMenu(false);
        break;
      default:
        break;
    }
  };

  /** 切換語言：保留錨點與閱讀狀態後整頁導覽 */
  const switchLanguage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    writeHandoff();
    const anchor = currentAnchor();
    if (anchor) {
      e.preventDefault();
      window.location.assign(`${targetPath}#${anchor}`);
    }
    // 無錨點時交由 <a href> 預設行為導覽
  };

  const currentName = LANGUAGES.find((l) => l.code === current)?.name ?? "";

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={ui.languageButtonLabel}
        onClick={onButtonClick}
        className="flex min-h-11 items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 text-sm text-ink transition-colors hover:border-teal/50 hover:bg-teal-soft/40 sm:px-3"
      >
        <Globe aria-hidden="true" className="h-4 w-4 text-teal" />
        <span lang={current === "zh" ? "zh-Hant" : "en"}>{currentName}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 text-ink-soft transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* 無 JavaScript 時的後備：直接顯示另一語言連結 */}
      <noscript>
        <a
          href={targetPath}
          lang={target === "zh" ? "zh-Hant" : "en"}
          className="absolute left-0 top-full z-50 mt-1 flex min-h-11 items-center rounded-md border border-line bg-surface px-3 text-sm text-ink"
        >
          {LANGUAGES.find((l) => l.code === target)?.name}
        </a>
      </noscript>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={ui.languageMenuLabel}
          onKeyDown={onMenuKeyDown}
          className="absolute right-0 top-full z-50 mt-1.5 min-w-44 overflow-hidden rounded-lg border border-line bg-surface py-1 shadow-md"
        >
          {LANGUAGES.map((lang, i) => {
            const isCurrent = lang.code === current;
            return (
              <a
                key={lang.code}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                role="menuitem"
                href={lang.code === current ? undefined : targetPath}
                aria-current={isCurrent ? "true" : undefined}
                lang={lang.htmlLang}
                tabIndex={-1}
                onClick={(e) => {
                  if (isCurrent) {
                    e.preventDefault();
                    closeMenu(true);
                  } else {
                    switchLanguage(e);
                  }
                }}
                onKeyDown={(e) => {
                  // 連結的 Space 預設為捲動頁面；選單項目以 Space 觸發選擇
                  if (e.key === " ") {
                    e.preventDefault();
                    if (isCurrent) {
                      closeMenu(true);
                    } else {
                      writeHandoff();
                      const anchor = currentAnchor();
                      window.location.assign(anchor ? `${targetPath}#${anchor}` : targetPath);
                    }
                  }
                }}
                className="flex min-h-11 items-center justify-between gap-4 px-3.5 py-2 text-left text-[0.95rem] text-ink transition-colors hover:bg-teal-soft/40 focus-visible:bg-teal-soft/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
              >
                <span>{lang.name}</span>
                {isCurrent ? (
                  <Check aria-hidden="true" className="h-4 w-4 text-teal-deep" />
                ) : (
                  <span aria-hidden="true" className="h-4 w-4" />
                )}
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
