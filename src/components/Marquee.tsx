"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";
import { marquee } from "@/lib/content";

function Row({ reverse }: { reverse?: boolean }) {
  const items = reverse ? [...marquee].reverse() : marquee;
  return (
    <div className={reverse ? "marquee-row is-reverse" : "marquee-row"}>
      {[0, 1].map((copy) => (
        <div className="marquee-track" key={copy} aria-hidden={copy === 1}>
          {items.map((item) => (
            <span key={item}>
              {item}
              <i>✳</i>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const rows = gsap.utils.toArray<HTMLElement>(".marquee-row", root.current);
      const loops = rows.map((row, i) =>
        gsap.fromTo(
          row.querySelectorAll(".marquee-track"),
          { xPercent: i % 2 ? -100 : 0 },
          { xPercent: i % 2 ? 0 : -100, duration: 40, ease: "none", repeat: -1 },
        ),
      );

      // Scroll velocity speeds the rows up and flips their direction with the scroll.
      let direction = 1;
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = self.getVelocity();
          if (v !== 0) direction = v > 0 ? 1 : -1;
          const boost = 1 + Math.min(Math.abs(v) / 300, 6);
          loops.forEach((loop) =>
            gsap.to(loop, {
              timeScale: direction * boost,
              duration: 0.25,
              overwrite: true,
              onComplete: () => {
                gsap.to(loop, { timeScale: direction, duration: 1.4, ease: "power2.out" });
              },
            }),
          );
        },
      });
      gsap.to(root.current, {
        skewY: -2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <div className="marquee" ref={root} aria-label={marquee.join(", ")} role="img">
      <Row />
      <Row reverse />
    </div>
  );
}
