"use client";

import { useEffect } from "react";

/**
 * Fades and lifts any element marked data-reveal as it scrolls into view.
 * Elements already on screen at load are left alone, and without JS everything stays visible.
 * Stagger with style={{ "--d": "120ms" }}.
 */
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = "in";
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      el.dataset.reveal = "pre";
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
