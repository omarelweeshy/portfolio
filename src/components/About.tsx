import { experience, profile } from "@/lib/content";
import Magnetic from "./Magnetic";

export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="about-grid">
        <span className="label">(About)</span>
        <div className="about-copy">
          <h2 id="about-title" className="display" data-split>
            Curious by nature. Engineer by training. <em>Builder by choice.</em>
          </h2>
          <div className="about-cols">
            <p data-reveal>
              I studied Artificial Intelligence at Cairo University and now work as a digital innovation specialist at the
              Egyptian Food Bank, where my forecasts and automations are used by people who have no time for black boxes.
            </p>
            <p data-reveal>
              On my own I build products end to end: retries, approvals, audit trails and honest labels for what is mocked.
              Next on my list is threat intelligence, applying the same evidence-first thinking to security.
            </p>
          </div>
          <Magnetic>
            <a className="pill" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <span>Full story on LinkedIn ↗</span>
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="experience">
        <span className="label">(Experience)</span>
        <ul>
          {experience.map((e) => (
            <li key={e.company} data-reveal>
              <span className="exp-period">{e.period}</span>
              <h3>{e.company}</h3>
              <span className="exp-role">{e.role}</span>
              <p>{e.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
