"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/motion";
import { services } from "@/lib/content";

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // The whole page shifts to a light palette while this section is in view.
      const html = document.documentElement;
      const st = ScrollTrigger.create({
        trigger: root.current,
        start: "top 55%",
        end: "bottom 45%",
        onToggle: (self) => {
          if (self.isActive) html.dataset.theme = "light";
          else delete html.dataset.theme;
        },
      });
      return () => {
        st.kill();
        delete html.dataset.theme;
      };
    },
    { scope: root },
  );

  return (
    <section className="services section" id="services" ref={root} aria-labelledby="services-title">
      <div className="services-head">
        <span className="label">(Services)</span>
        <h2 id="services-title" className="display" data-split>
          What I can <em>build</em> for you
        </h2>
        <p data-reveal>
          For teams that are drowning in manual work or sitting on data they never use. I will tell you honestly whether
          AI is the right fix before we start.
        </p>
      </div>
      <ol className="services-list">
        {services.map((s, i) => (
          <li className="service" key={s.title} tabIndex={0} data-reveal>
            <span className="service-num">0{i + 1}</span>
            <h3>{s.title}</h3>
            <div className="service-body">
              <div>
                <p>{s.body}</p>
                <span>{s.tools}</span>
              </div>
            </div>
            <span className="service-plus" aria-hidden="true" />
          </li>
        ))}
      </ol>
    </section>
  );
}
