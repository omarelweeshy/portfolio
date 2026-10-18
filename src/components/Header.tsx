"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, getLenis, scrollToTarget } from "@/lib/motion";
import { profile } from "@/lib/content";
import LocalTime from "./LocalTime";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Roll({ children }: { children: string }) {
  return (
    <span className="roll" data-text={children}>
      <span>{children}</span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToTarget(href);
  };

  useEffect(() => {
    const el = menu.current;
    if (!el) return;
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (open) {
      getLenis()?.stop();
      gsap.set(el, { visibility: "visible" });
      gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "expo.inOut" });
      gsap.fromTo(
        el.querySelectorAll(".menu-link"),
        { yPercent: 110 },
        { yPercent: 0, duration: 0.9, stagger: 0.06, ease: "expo.out", delay: 0.35 },
      );
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
    if (!document.documentElement.classList.contains("is-loading")) getLenis()?.start();
    gsap.to(el, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.6,
      ease: "expo.inOut",
      onComplete: () => gsap.set(el, { visibility: "hidden" }),
    });
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={open ? "header is-on-accent" : "header"}>
        <a className="header-mark" href="#top" onClick={(e) => go(e, "#top")} aria-label="Omar Ashraf, back to top">
          <Roll>Omar Ashraf</Roll>
          <sup>©</sup>
        </a>
        <span className="header-time">
          Cairo <LocalTime />
        </span>
        <nav className="header-nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
              <Roll>{l.label}</Roll>
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Roll>{open ? "Close" : "Menu"}</Roll>
        </button>
      </header>
      <div className="menu" id="mobile-menu" ref={menu} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)} tabIndex={open ? 0 : -1}>
              <span className="menu-link">
                <sup>0{i + 1}</sup>
                {l.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="menu-foot">
          <a href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1}>
            {profile.email}
          </a>
          <span>
            Cairo <LocalTime />
          </span>
        </div>
      </div>
    </>
  );
}
