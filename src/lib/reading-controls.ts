"use client";

/**
 * 閱讀互動輔助（僅用戶端）：
 * - 展開／收合全部第一層章節（收合時妥善安置內部焦點）
 * - 深層連結：先展開包含目標的收合區塊，再捲動定位並移動焦點
 * - 回到頂端（尊重減少動態偏好）
 * - 列印前展開全部 details、列印後還原
 */

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** 展開或收合全部第一層章節；收合前把位於內容中的焦點移回該章控制 */
export function setAllLevel1(open: boolean): void {
  const list = Array.from(
    document.querySelectorAll<HTMLDetailsElement>('details[data-level="1"]')
  );
  let focusHandled = false;
  for (const d of list) {
    if (!open && d.open) {
      const active = document.activeElement;
      if (!focusHandled && active instanceof Node && d.contains(active)) {
        const summary = d.querySelector("summary");
        if (summary instanceof HTMLElement) {
          summary.focus();
          focusHandled = true;
        }
      }
    }
    d.open = open;
  }
}

function isInteractive(el: HTMLElement): boolean {
  const tag = el.tagName.toLowerCase();
  return (
    tag === "a" ||
    tag === "button" ||
    tag === "summary" ||
    tag === "input" ||
    tag === "select" ||
    tag === "textarea" ||
    el.isContentEditable
  );
}

/** 深層連結處理：展開上層 details、捲動至目標（避開固定頂欄）、移動焦點 */
export function revealTarget(hash: string): void {
  if (!hash || hash.length < 2) return;
  let target: HTMLElement | null = null;
  try {
    target = document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return;
  }
  if (!target) return;

  // 先展開所有包含目標的收合區塊
  let d: HTMLDetailsElement | null = target.closest("details");
  while (d) {
    if (!d.open) d.open = true;
    const parent = d.parentElement;
    d = parent ? (parent.closest("details") as HTMLDetailsElement | null) : null;
  }

  const el = target;
  requestAnimationFrame(() => {
    el.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    if (!isInteractive(el)) {
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
  });
}

/** 回到頁面頂端 */
export function scrollToTop(smooth: boolean): void {
  window.scrollTo({
    top: 0,
    behavior: smooth && !prefersReducedMotion() ? "smooth" : "auto",
  });
}
