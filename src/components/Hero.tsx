"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, onIntroDone, prefersReducedMotion, scrollToTarget } from "@/lib/motion";
import { profile } from "@/lib/content";
import ShaderField from "./ShaderField";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      if (prefersReducedMotion()) {
        gsap.set(q(".js-hide"), { visibility: "visible" });
        return;
      }

      let split: SplitText | undefined;
      let off = () => {};
      document.fonts.ready.then(() => {
        if (!root.current) return;
        split = SplitText.create(q(".hero-name-line"), { type: "chars", mask: "chars" });
        gsap.set(q(".js-hide"), { visibility: "visible" });
        const tl = gsap.timeline({ paused: true });
        tl.from(split.chars, { yPercent: 115, duration: 1.4, stagger: 0.045, ease: "expo.out" })
          .from(q(".hero-meta > *, .hero-foot > *"), { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08, ease: "power3.out" }, 0.35)
          .from(q(".hero-rule"), { scaleX: 0, duration: 1.4, ease: "expo.inOut" }, 0.2);
        off = onIntroDone(() => tl.play());
      });

      // Scroll-out: name drifts apart and the field sinks.
      gsap
        .timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } })
        .to(q(".hero-name-line:first-child"), { xPercent: -8, ease: "none" }, 0)
        .to(q(".hero-name-line:last-child"), { xPercent: 8, ease: "none" }, 0)
        .to(q(".hero-content"), { yPercent: 25, autoAlpha: 0.2, ease: "none" }, 0)
        .to(q(".hero-field"), { yPercent: 20, scale: 1.1, ease: "none" }, 0);

      return () => {
        off();
        split?.revert();
      };
    },
    { scope: root },
  );

  return (
    <section className="hero" id="top" ref={root} aria-labelledby="hero-title">
      <ShaderField className="hero-field" />
      <div className="hero-content">
        <div className="hero-meta js-hide">
          <span>({profile.role})</span>
          <span>Based in {profile.location}</span>
          <span className="hero-status">
            <i /> Open to freelance work
          </span>
        </div>
        <h1 className="hero-name js-hide" id="hero-title" aria-label={profile.name}>
          <span className="hero-name-line" aria-hidden="true">
            Omar
          </span>
          <span className="hero-name-line" aria-hidden="true">
            Ashraf<em>*</em>
          </span>
        </h1>
        <div className="hero-rule js-hide" />
        <div className="hero-foot js-hide">
          <p>
            AI systems that do real work, <em>with a human in control.</em>
          </p>
          <span className="hero-note">*Automation, prediction &amp; retrieval. Selected work 2024–26.</span>
          <a
            className="hero-scroll"
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget("#work");
            }}
          >
            <span>Scroll</span>
            <i />
          </a>
        </div>
      </div>
    </section>
  );
}
