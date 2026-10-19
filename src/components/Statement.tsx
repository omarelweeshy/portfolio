"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, prefersReducedMotion } from "@/lib/motion";
import { statement } from "@/lib/content";

export default function Statement() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      // The split copy is aria-hidden; screen readers get the plain .sr-only copy instead.
      const split = SplitText.create(root.current!.querySelector(".statement-words"), { type: "words", aria: "none" });
      gsap.fromTo(
        split.words,
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top 75%", end: "bottom 60%", scrub: true },
        },
      );
      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section className="statement section" ref={root} aria-label="Introduction">
      <span className="label">(Intro)</span>
      <p className="statement-text">
        <span className="sr-only">{statement}</span>
        <span className="statement-indent" aria-hidden="true" />
        <span className="statement-words" aria-hidden="true">
          {statement}
        </span>
      </p>
    </section>
  );
}
