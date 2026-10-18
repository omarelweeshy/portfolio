"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, getLenis, markIntroDone, prefersReducedMotion } from "@/lib/motion";

const words = ["Automation", "Prediction", "Retrieval", "Judgment"];

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = root.current!;
      const done = () => {
        document.documentElement.classList.remove("is-loading");
        getLenis()?.start();
        el.style.display = "none";
      };
      if (prefersReducedMotion()) {
        markIntroDone();
        done();
        return;
      }

      history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
      document.documentElement.classList.add("is-loading");
      getLenis()?.stop();

      const counter = { v: 0 };
      const tl = gsap.timeline({ onComplete: done });
      tl.to(counter, {
        v: 100,
        duration: 1.7,
        ease: "power3.inOut",
        onUpdate: () => {
          if (count.current) count.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
        },
      })
        .to(".preloader-bar i", { scaleX: 1, duration: 1.7, ease: "power3.inOut" }, 0)
        .to(
          ".preloader-word",
          { yPercent: (-100 / words.length) * (words.length - 1), duration: 1.5, ease: "steps(" + (words.length - 1) + ")" },
          0.1,
        )
        .to(".preloader-inner", { yPercent: -30, autoAlpha: 0, duration: 0.7, ease: "power3.in" }, "+=0.1")
        .add(markIntroDone, "-=0.15")
        .to(el, { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "expo.inOut" }, "-=0.2");
    },
    { scope: root },
  );

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="preloader-inner">
        <div className="preloader-top">
          <span>Omar Ashraf</span>
          <span>Portfolio ©{new Date().getFullYear()}</span>
        </div>
        <div className="preloader-words">
          <div className="preloader-word">
            {words.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
        </div>
        <div className="preloader-bottom">
          <div className="preloader-bar">
            <i />
          </div>
          <span className="preloader-count" ref={count}>
            000
          </span>
        </div>
      </div>
    </div>
  );
}
