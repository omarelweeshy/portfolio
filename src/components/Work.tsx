"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/motion";
import { projects, profile } from "@/lib/content";
import ProjectVisual from "./ProjectVisual";
import { Roll } from "./Header";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Work() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(root);

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = q(".work-track")[0] as HTMLElement;
        const distance = () => track.scrollWidth - window.innerWidth;
        const scroll = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            pin: true,
            scrub: 0.8,
            end: () => "+=" + distance(),
            invalidateOnRefresh: true,
          },
        });
        gsap.to(q(".work-progress i"), {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: () => "+=" + distance(), scrub: true },
        });
        q(".project").forEach((card) => {
          const frame = card.querySelector(".project-frame");
          const inner = card.querySelector(".project-media");
          gsap.fromTo(
            frame,
            { clipPath: "inset(12% 12% 12% 12%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              scrollTrigger: { trigger: card, containerAnimation: scroll, start: "left right", end: "left 35%", scrub: true },
            },
          );
          gsap.fromTo(
            inner,
            { xPercent: -6, scale: 1.15 },
            {
              xPercent: 6,
              scale: 1.15,
              ease: "none",
              scrollTrigger: { trigger: card, containerAnimation: scroll, start: "left right", end: "right left", scrub: true },
            },
          );
        });
      });

      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        q(".project-frame").forEach((frame) => {
          gsap.fromTo(
            frame,
            { clipPath: "inset(10% 6% 10% 6%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              scrollTrigger: { trigger: frame, start: "top 95%", end: "top 45%", scrub: true },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section className="work" id="work" ref={root} aria-labelledby="work-title">
      <div className="work-track">
        <div className="work-intro">
          <span className="label">(Selected work)</span>
          <h2 id="work-title" className="display">
            Things
            <br />I <em>shipped</em>
            <sup>{pad(projects.length)}</sup>
          </h2>
          <p>
            Working systems, not mockups. Each one runs end to end, says plainly what is real and what is simulated, and has
            source you can read.
          </p>
          <span className="work-hint" aria-hidden="true">
            Keep scrolling <i>→</i>
          </span>
        </div>

        {projects.map((p, i) => (
          <article className={`project project-${p.slug}`} key={p.slug} aria-labelledby={`${p.slug}-title`}>
            <a
              className="project-frame"
              href={p.demo ?? p.repo}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor={p.demo ? "Live demo" : "Source"}
              aria-label={`${p.name}: open ${p.demo ? "live demo" : "source on GitHub"} (new tab)`}
            >
              <div className="project-media">
                <ProjectVisual project={p} />
              </div>
              {p.visual !== "image" && <span className="art-tag">Illustration</span>}
              <span className="project-status">{p.status}</span>
            </a>
            <div className="project-info">
              <div className="project-row">
                <span className="project-index">
                  {pad(i + 1)} / {pad(projects.length)}
                </span>
                <span>{p.category}</span>
                <span>{p.year}</span>
              </div>
              <h3 id={`${p.slug}-title`}>{p.name}</h3>
              <p>{p.summary}</p>
              <ul className="project-stack" aria-label="Stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="project-links">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer">
                    <Roll>Live demo ↗</Roll>
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">
                    <Roll>Source ↗</Roll>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        <div className="work-outro">
          <a className="work-more" href={profile.github} target="_blank" rel="noopener noreferrer" data-cursor="GitHub">
            <span className="label">(Archive)</span>
            <span className="display">
              More on
              <br />
              <em>GitHub</em> ↗
            </span>
          </a>
        </div>
      </div>
      <div className="work-progress" aria-hidden="true">
        <i />
      </div>
    </section>
  );
}
