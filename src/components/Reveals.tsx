"use client";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText, prefersReducedMotion } from "@/lib/motion";

// Shared scroll reveals: [data-split] headings rise line by line, [data-reveal] blocks fade up.
export default function Reveals() {
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const splits: SplitText[] = [];

    document.fonts.ready.then(() => {
      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        splits.push(
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.2,
                stagger: 0.09,
                ease: "expo.out",
                scrollTrigger: { trigger: el, start: "top 85%", once: true },
              }),
          }),
        );
      });
      ScrollTrigger.refresh();
    });

    gsap.set("[data-reveal]", { y: 40, autoAlpha: 0 });
    ScrollTrigger.batch("[data-reveal]", {
      start: "top 90%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.08, ease: "power3.out", overwrite: true }),
    });

    return () => splits.forEach((s) => s.revert());
  });
  return null;
}
