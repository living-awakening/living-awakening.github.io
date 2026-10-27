"use client";

import { useEffect } from "react";
import { revealTarget } from "@/lib/reading-controls";

/**
 * 深層連結與列印控制器（無 UI）：
 * - 初始載入與 hash 變更時，先展開目標所在的收合區塊再定位
 * - 列印前展開全部內容、列印後還原（配合 CSS 列印後備）
 */
export function DeepLinkController() {
  useEffect(() => {
    const onHashChange = () => revealTarget(window.location.hash);
    // 初始載入：等版面計算完成後再定位
    const raf = requestAnimationFrame(onHashChange);
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
