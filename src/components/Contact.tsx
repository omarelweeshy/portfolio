"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { profile } from "@/lib/content";
import { ScrollTrigger, scrollToTarget } from "@/lib/motion";
import LocalTime from "./LocalTime";
import Magnetic from "./Magnetic";
import { Roll } from "./Header";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  // The blended header turns cyan on orange, so switch it to plain ink over this section.
  useGSAP(() => {
    const html = document.documentElement;
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: "top 40px",
      onToggle: (self) => html.classList.toggle("header-on-accent", self.isActive),
    });
    return () => {
      st.kill();
      html.classList.remove("header-on-accent");
    };
  });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="contact-clip" id="contact" ref={root}>
      <footer className="contact" aria-labelledby="contact-title">
        <div className="contact-top">
          <span className="label">(Contact)</span>
          <span className="hero-status">
            <i /> Taking on new projects
          </span>
        </div>
        <h2 id="contact-title" className="contact-title">
          Have a problem
          <br />
          worth <em>solving?</em>
        </h2>
        <div className="contact-actions">
          <Magnetic strength={0.45}>
            <a className="contact-cta" href={`mailto:${profile.email}`} data-cursor="Say hi">
              <span>Let’s talk</span>
            </a>
          </Magnetic>
          <button className="contact-email" onClick={copy} aria-live="polite">
            <span>{copied ? "Copied to clipboard" : profile.email}</span>
            <small>{copied ? "✓" : "Copy"}</small>
          </button>
        </div>
        <div className="contact-bottom">
          <span>© {new Date().getFullYear()} Omar Ashraf</span>
          <span>
            Cairo <LocalTime />
          </span>
          <nav aria-label="Social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Roll>GitHub</Roll>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Roll>LinkedIn</Roll>
            </a>
            <a href={`mailto:${profile.email}`}>
              <Roll>Email</Roll>
            </a>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget(0);
              }}
            >
              <Roll>Top ↑</Roll>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
