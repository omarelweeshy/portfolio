import Image from "next/image";
import type { Project } from "@/lib/content";

// Illustrative compositions for projects without a public UI to screenshot.
function Documents() {
  return (
    <div className="art art-documents">
      <div className="art-sheet art-sheet-back" />
      <div className="art-sheet">
        <span className="art-kicker">annual-report.pdf</span>
        <div className="art-lines">
          {Array.from({ length: 9 }, (_, i) => (
            <i key={i} className={i === 4 ? "is-hit" : undefined} />
          ))}
        </div>
      </div>
      <div className="art-answer">
        <span className="art-kicker">
          <b /> Grounded answer
        </span>
        <p>Programme spend rose 18% year on year.</p>
        <span className="art-cite">annual-report.pdf · p. 14 · ¶ 3</span>
      </div>
    </div>
  );
}

function Forecast() {
  const pts = [62, 58, 64, 55, 60, 50, 54, 44, 49, 40, 45, 34, 38, 28, 33, 24];
  const line = pts.map((y, i) => `${(i / (pts.length - 1)) * 100},${y}`).join(" ");
  const upper = pts.map((y, i) => `${(i / (pts.length - 1)) * 100},${y - 6 - i * 0.5}`);
  const lower = pts.map((y, i) => `${(i / (pts.length - 1)) * 100},${y + 6 + i * 0.5}`).reverse();
  return (
    <div className="art art-forecast">
      <div className="art-forecast-head">
        <span className="art-kicker">Daily donations / forecast</span>
        <b>t+30</b>
      </div>
      <svg viewBox="0 0 100 80" preserveAspectRatio="none">
        {[20, 40, 60].map((y) => (
          <line key={y} x1="0" x2="100" y1={y} y2={y} />
        ))}
        <polygon className="art-band" points={[...upper, ...lower].join(" ")} />
        <polyline className="art-line" points={line} pathLength={1} />
      </svg>
      <div className="art-forecast-foot">
        <span>XGBoost · adaptive</span>
        <span>AR / EN</span>
      </div>
    </div>
  );
}

function Vision() {
  return (
    <div className="art art-vision">
      <div className="art-grid">
        {Array.from({ length: 96 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div className="art-scan" />
      <div className="art-vision-label">
        <span className="art-kicker">DenseNet201 / transfer learning</span>
        <b>94.6%</b>
        <span>test accuracy</span>
      </div>
    </div>
  );
}

// The message is invented; the extracted rows are egy-ioc's real output for it.
function Indicators() {
  return (
    <div className="art art-indicators">
      <div className="art-msg">
        <span className="art-kicker">Sample message</span>
        <p dir="rtl" lang="ar">
          تم إيقاف حسابك على إنستاباي. ادفع <mark>٦ جنيه</mark> على فودافون كاش <mark>٠١٠٠ ٠٠٠ ٠٠٠١</mark> وادخل{" "}
          <mark dir="ltr">hxxps://instapay-verify[.]test</mark> و<mark>ابعتلي الكود</mark>
        </p>
      </div>
      <div className="art-iocs">
        <span className="art-kicker">egy-ioc extract</span>
        <dl>
          <div>
            <dt>wallet</dt>
            <dd>+201000000001 · vodafone_cash</dd>
          </div>
          <div>
            <dt>url</dt>
            <dd>lookalike: instapay</dd>
          </div>
          <div>
            <dt>amount</dt>
            <dd>6 EGP</dd>
          </div>
          <div>
            <dt>signal</dt>
            <dd>otp_request</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "image" && project.image)
    return (
      <Image
        src={project.image}
        alt={`${project.name} interface`}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="project-img"
      />
    );
  if (project.visual === "documents") return <Documents />;
  if (project.visual === "forecast") return <Forecast />;
  if (project.visual === "indicators") return <Indicators />;
  return <Vision />;
}
