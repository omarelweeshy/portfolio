"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/motion";

// Decorative follower for fine pointers. Elements with data-cursor="Label" grow it and show the label.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = dot.current!;
    document.documentElement.classList.add("has-cursor");
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });

    const move = (e: PointerEvent) => {
      el.classList.add("is-visible");
      xTo(e.clientX);
      yTo(e.clientY);
      const target = (e.target as Element | null)?.closest<HTMLElement>("[data-cursor], a, button");
      const text = target?.dataset.cursor ?? "";
      el.classList.toggle("is-label", Boolean(text));
      el.classList.toggle("is-link", Boolean(target) && !text);
      if (label.current && text) label.current.textContent = text;
    };
    const leave = () => el.classList.remove("is-visible");
    const down = () => el.classList.add("is-down");
    const up = () => el.classList.remove("is-down");

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div className="cursor" ref={dot} aria-hidden="true">
      <span ref={label} />
    </div>
  );
}
