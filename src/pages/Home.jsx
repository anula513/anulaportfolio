import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { ExtractionDemo, StyleCloneVisual, MetricsVisual } from "../components/Visuals";
import { projects, skillGroups, hasCaseStudy } from "../data/projects";

const aiProjects = projects.filter((p) => p.group === "ai");
const buildProjects = projects.filter((p) => p.group === "build");

// Each AI project gets its own visual instead of a generic card.
const visualFor = (p) => {
  if (p.id === "texting-style-clone") return <StyleCloneVisual />;
  if (p.metrics) return <MetricsVisual metrics={p.metrics} />;
  return null;
};

export default function Home() {
  return (
    <main>
      {/* ── Hero ───────────────────────────── */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <div className="hello">
              <img src="/me.jpg" alt="" className="avatar" />
              <span>Anula Dinesh, CS senior at Arizona State</span>
            </div>
            <h1>I build AI that shows its receipts.</h1>
            <p className="lede">
              My systems don&apos;t just answer. They point to the exact source, flag what
              they can&apos;t verify, and get measured against real answer keys. Looking for AI
              Engineer roles after I graduate in May 2027.
            </p>
            <div className="hero-actions">
              <a className="btn btn--primary" href="#projects">See projects</a>
              <a className="btn btn--ghost" href="#contact">Contact me</a>
            </div>
          </div>
          <ExtractionDemo />
        </div>
      </section>

      {/* ── AI projects ────────────────────── */}
      <section className="section" id="projects">
        <div className="container">
          <h2 className="section-title">AI projects</h2>

          {aiProjects.map((p) => (
            <article key={p.id} className="feature">
              <div className="feature-text">
                <div className="title-row">
                  <h3>{p.title}</h3>
                  {p.status && <span className="badge">{p.status}</span>}
                </div>
                <p className="feature-tagline">{p.tagline}</p>
                {p.cardPoints && (
                  <ul className="points">
                    {p.cardPoints.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                )}
                <p className="tech-line">{p.tech.join(", ")}</p>
                <div className="actions">
                  {hasCaseStudy(p) && (
                    <Link className="btn btn--primary" to={`/projects/${p.id}`}>Read case study</Link>
                  )}
                  {p.github && (
                    <a className="btn btn--ghost" href={p.github} target="_blank" rel="noreferrer">
                      <Github size={16} aria-hidden="true" /> Code
                    </a>
                  )}
                </div>
              </div>
              <div className="feature-visual">{visualFor(p)}</div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Other builds ───────────────────── */}
      <section className="section section--tight">
        <div className="container">
          <h2 className="section-title">Other builds</h2>
          <ul className="build-list">
            {buildProjects.map((p) => (
              <li key={p.id} className="build">
                <div className="build-main">
                  <div className="title-row">
                    <h3>{p.title}</h3>
                    {p.status && <span className="badge">{p.status}</span>}
                  </div>
                  <p>{p.tagline}</p>
                  <p className="tech-line">{p.tech.join(", ")}</p>
                </div>
                <div className="build-links">
                  {hasCaseStudy(p) && <Link to={`/projects/${p.id}`}>Details</Link>}
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer">Code</a>}
                  {p.liveDemo && (
                    <a href={p.liveDemo} target="_blank" rel="noreferrer">
                      Live demo <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Skills ─────────────────────────── */}
      <section className="section section--tight" id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <dl className="skills">
            {skillGroups.map((g) => (
              <div key={g.label} className="skill-row">
                <dt>{g.label}</dt>
                <dd>
                  {g.items.map((s) => <span key={s} className="pill">{s}</span>)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Contact ────────────────────────── */}
      <section className="section contact" id="contact">
        <div className="container">
          <h2 className="contact-title">Let&apos;s talk.</h2>
          <p className="lede">Email is the fastest way to reach me.</p>
          <a className="contact-email" href="mailto:adinesh5@asu.edu">adinesh5@asu.edu</a>
          <div className="actions">
            <a className="btn btn--ghost" href="https://www.linkedin.com/in/anula-dinesh-743140335" target="_blank" rel="noreferrer">
              <Linkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
            <a className="btn btn--ghost" href="https://github.com/anula513" target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
