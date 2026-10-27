"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToTop } from "@/lib/reading-controls";

/** 節制的回頂控制：向下捲動超過約一個畫面後出現 */
export function ReturnToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="回到頂端"
      onClick={() => scrollToTop(true)}
      className={`no-print fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-teal-deep shadow-md transition-[opacity,translate] duration-200 ${
        visible ? "translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
