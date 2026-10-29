"use client";

import { useEffect } from "react";
import { revealTarget } from "@/lib/reading-controls";
import { consumeHandoff } from "@/components/language-switcher";

/**
 * 深層連結與列印控制器（無 UI）：
 * - 初始載入與 hash 變更時，先展開目標所在的收合區塊再定位
 * - 語言切換後還原閱讀狀態（展開章節與位置錨點，見 language-switcher）
 * - 列印前展開全部內容、列印後還原（配合 CSS 列印後備）
 */
export function DeepLinkController() {
  useEffect(() => {
    const onHashChange = () => revealTarget(window.location.hash);

    // 語言切換交接：還原展開狀態與閱讀位置（僅切換語言時存在）
    const handoff = consumeHandoff();
    if (handoff) {
      for (const id of handoff.openChapters) {
        const details = document.getElementById(`${id}-content`);
        if (details instanceof HTMLDetailsElement) details.open = true;
      }
    }

    // 初始載入：等版面計算完成後再定位
    const raf = requestAnimationFrame(() => {
      if (window.location.hash && window.location.hash.length > 1) {
        onHashChange();
      } else if (handoff?.anchor) {
        revealTarget(`#${handoff.anchor}`);
      }
    });
    window.addEventListener("hashchange", onHashChange);

    let printState: boolean[] | null = null;
    const beforePrint = () => {
      const list = Array.from(document.querySelectorAll("details"));
      printState = list.map((d) => d.open);
      list.forEach((d) => {
        d.open = true;
      });
    };
    const afterPrint = () => {
      if (!printState) return;
      const list = Array.from(document.querySelectorAll("details"));
      list.forEach((d, i) => {
        if (printState && printState[i] !== undefined) d.open = printState[i];
      });
      printState = null;
    };
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, []);

  return null;
}
