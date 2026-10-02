"use client";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Plus, Minus } from "lucide-react";
import { experiences, personalInfo, skills } from "@/lib/data";

const work = [
  {
    name: "DocIntel AI",
    category: "DOCUMENT INTELLIGENCE / RAG",
    description:
      "A self-hosted workspace for asking questions of documents, with grounded answers and local model support.",
    repo: "docintel-ai",
    visual: "documents",
    tags: "Python / Ollama / PostgreSQL",
  },
  {
    name: "Donation Forecast",
    category: "PREDICTIVE ANALYTICS / DATA",
    description:
      "Exploring donation trends through adaptive forecasting and a bilingual analytics dashboard. Built with synthetic data for the public portfolio.",
    repo: "donations-forecast",
    visual: "forecast",
    tags: "Python / XGBoost / Streamlit",
  },
  {
    name: "Beyond the surface",
    category: "COMPUTER VISION / RESEARCH",
    description:
      "A skin disease classification research project using DenseNet201 and transfer learning. An exploration of applied AI, not a clinical diagnostic tool.",
    repo: "AI-Dermatology-DenseNet201",
    visual: "vision",
    tags: "TensorFlow / DenseNet201 / Flutter",
  },
];
function Sculpture() {
  return (
    <div className="sculpture" aria-hidden="true">
      <div className="sculpture-core">
        {Array.from({ length: 28 }, (_, i) => (
          <i key={i} style={{ transform: `rotateY(${i * 6.43}deg)` }} />
        ))}
      </div>
      <span className="orbit-point" />
    </div>
  );
}
function ProjectArt({ type }: { type: string }) {
  if (type === "documents")
    return (
      <div className="document-art" aria-hidden="true">
        <div className="doc-sheet">
          <span>KNOWLEDGE, CONNECTED.</span>
          <b>
            Unstructured.
            <br />
            Understood.
          </b>
          <div className="doc-lines" />
        </div>
        <div className="answer-card">
          <span>
            <i /> DOCINTEL / ANSWER
          </span>
          <p>
            From information
            <br />
            to understanding.
          </p>
          <div className="answer-line" />
          <small>GROUNDED IN YOUR DOCUMENTS ↗</small>
        </div>
        <span className="art-caption">01 / INTELLIGENCE LAYER</span>
      </div>
    );
  if (type === "forecast")
    return (
      <div className="forecast-art" aria-hidden="true">
        <div className="chart-top">
          <span>Signals in the noise.</span>
          <span>↗</span>
        </div>
        <div className="chart-bars">
          {[
            20, 30, 25, 43, 36, 48, 42, 58, 52, 71, 64, 82, 73, 89, 83, 100,
          ].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <span className="art-caption">02 / PATTERNS INTO PERSPECTIVE</span>
      </div>
    );
  return (
    <div className="vision-art" aria-hidden="true">
      <div className="vision-orb" />
      <span className="cross cross-one">+</span>
      <span className="cross cross-two">+</span>
      <div className="vision-frame">
        <span>FEATURE EXTRACTION</span>
        <b>
          Seeing
          <br />
          differently.
        </b>
        <small>DENSENET201 / COMPUTER VISION</small>
      </div>
    </div>
  );
}
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  return (
    <div id="top" className={motionPaused ? "portfolio motion-paused" : "portfolio"}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Omar Ashraf home">
          oa<span>✳</span>
        </a>
        <span className="header-caption">
          INDEPENDENT MIND.
          <br />
          CONNECTED THINKING.
        </span>
        <nav
          aria-label="Main navigation"
          className={menuOpen ? "nav-links open" : "nav-links"}
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work <sup>03</sup>
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <Minus /> : <Plus />}
        </button>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-eyebrow">
            <span>OMAR ASHRAF / AI ENGINEER & BUILDER</span>
            <span className="availability">
              <i /> AVAILABLE FOR SELECT PROJECTS
            </span>
          </div>
          <h1 id="hero-title">
            <span>Intelligence.</span>
            <span className="second-line">
              With <em>intent.</em>
              <span className="title-star">✳</span>
            </span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-intro">
              <span className="tiny-label">
                BASED IN CAIRO. BUILDING BEYOND.
              </span>
              <p>
                I turn complex data into useful systems.
                <br />
                AI, digital experiences, and a healthy
                <br className="desktop-break" /> obsession with making things
                work.
              </p>
              <a className="round-link" href="#work">
                <span className="circle">
                  <ArrowDown size={20} />
                </span>{" "}
                EXPLORE SELECTED WORK
              </a>
            </div>
            <div className="hero-object">
              <Sculpture />
              <div className="object-caption">
                <span>FIG. 01 / CONNECTED INTELLIGENCE</span>
                <button
                  onClick={() => setMotionPaused(!motionPaused)}
                  aria-pressed={motionPaused}
                >
                  {motionPaused ? "PLAY MOTION +" : "PAUSE MOTION −"}
                </button>
              </div>
            </div>
          </div>
          <div className="hero-footer">
            <span>AI ENGINEERING · DATA INTELLIGENCE · WEB DEVELOPMENT</span>
            <span>SCROLL TO DISCOVER ↓</span>
          </div>
        </section>
        <section
          className="work-section section-pad"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <span className="tiny-label">01 / SELECTED WORK</span>
            <h2 id="work-title">
              Ideas into
              <br />
              <em>working things.</em>
            </h2>
            <p>
              A selection of experiments and systems.
              <br />
              Built to solve. Designed to be used.
            </p>
          </div>
          <div className="projects">
            {work.map((project, i) => (
              <a
                className={`project project-${i}`}
                key={project.repo}
                href={`${personalInfo.github}/${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub (opens in new tab)`}
              >
                <div className={`project-image ${project.visual}`}>
                  <ProjectArt type={project.visual} />
                  <span className="project-open">
                    <ArrowUpRight size={24} />
                  </span>
                </div>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>0{i + 1}</span>
                </div>
                <h3>
                  {project.name}
                  <ArrowUpRight />
                </h3>
                <p>{project.description}</p>
                <span className="project-tags">{project.tags}</span>
              </a>
            ))}
          </div>
          <a
            className="text-link"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            MORE EXPLORATIONS ON GITHUB <ArrowUpRight size={18} />
          </a>
        </section>
        <section
          className="about-section section-pad"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-top">
            <span className="tiny-label">02 / THE PERSON BEHIND THE WORK</span>
            <h2 id="about-title">
              Curious by nature.
              <br />
              Engineer by training.
              <br />
              <span>Builder by choice.</span>
            </h2>
          </div>
          <div className="about-body">
            <div className="about-symbol" aria-hidden="true">
              ✳
            </div>
            <div>
              <p className="large-copy">
                I’m Omar, an AI engineer and digital innovation specialist
                working at the intersection of data, technology, and real-world
                impact.
              </p>
              <p>
                With a degree in Artificial Intelligence from Cairo University,
                I build predictive models, digital applications, and tools that
                help people make better decisions. My work at the Egyptian Food
                Bank brings that thinking into the NGO world.
              </p>
              <p>
                Currently expanding my practice into cybersecurity and threat
                intelligence. Always interested in the next problem worth
                solving.
              </p>
              <a
                className="text-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                MORE ABOUT MY JOURNEY <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="expertise-grid">
            {skills.map((skill, i) => (
              <div key={skill.category}>
                <span className="tiny-label">0{i + 1}</span>
                <h3>{skill.category}</h3>
                <p>{skill.items.join(" / ")}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="experience-section section-pad" id="experience">
          <div className="section-heading">
            <span className="tiny-label">03 / EXPERIENCE</span>
            <h2>
              A little context.
              <br />
              <em>A lot of learning.</em>
            </h2>
          </div>
          <div className="experience-list">
            {experiences.map((experience, i) => (
              <details
                className="experience-row"
                key={experience.company}
                open={i === 0}
              >
                <summary>
                  <span className="experience-period">
                    {experience.period.replace("—", "–")}
                  </span>
                  <div>
                    <h3>{experience.company}</h3>
                    <p>{experience.role}</p>
                  </div>
                  <Plus className="experience-plus" size={24} />
                </summary>
                <div className="experience-description">
                  <p>{experience.description}</p>
                  <span>{experience.highlights.join(" / ")}</span>
                </div>
              </details>
            ))}
          </div>
        </section>
        <section className="contact-section section-pad" id="contact">
          <div className="contact-top">
            <span className="tiny-label">
              04 / NEXT STARTS WITH A CONVERSATION
            </span>
            <span className="availability">
              <i /> OPEN TO COLLABORATION
            </span>
          </div>
          <a className="contact-title" href={`mailto:${personalInfo.email}`}>
            Let’s make
            <br />
            <em>it matter.</em>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-bottom">
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <p>
              Have a problem worth solving?
              <br />
              Tell me what you have in mind.
            </p>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#top" aria-label="Back to top">
          oa<span>✳</span>
        </a>
        <span>© {new Date().getFullYear()} OMAR ASHRAF</span>
        <div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB ↗
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </div>
  );
}
