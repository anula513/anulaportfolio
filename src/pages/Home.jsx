import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectMedia from "../components/ProjectMedia";
import { featured, others, skills } from "../data/projects";

const LINKEDIN = "https://www.linkedin.com/in/anuladinesh";
const GITHUB = "https://github.com/anula513";
const EMAIL = "mailto:adinesh5@asu.edu";

// ── Project card ──────────────────────────────────
// The whole card opens the project page. Featured cards lay out side by side.
function ProjectCard({ project, wide = false }) {
  const p = project;
  return (
    <Link to={`/projects/${p.id}`} className={`pcard ${wide ? "pcard--wide" : ""}`}>
      <ProjectMedia project={p} large={wide} />
      <div className="pcard-body">
        <div className="title-row">
          <h3>{p.title}</h3>
          {p.status && <span className="badge">{p.status}</span>}
        </div>
        <p className="pcard-desc">{p.description}</p>
        <p className="pcard-tech">{p.tech}</p>
        <span className="pcard-cta">View project</span>
      </div>
    </Link>
  );
}

// ── Home Page ─────────────────────────────────────
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Hi, I&apos;m Anula</h1>
            <h2>Computer Science Student | AI Engineering • LLMs • Software</h2>
            <p>
              I&apos;m a senior studying Computer Science at Arizona State University, graduating in May 2027. I build
              AI applications with LLMs, RAG, and evaluation, and I&apos;m most interested in how AI systems are
              designed, tested, and turned into real products. I like working on problems end to end, from figuring
              out what users actually need to writing the code and measuring the results.
            </p>
            <div className="hero-actions">
              <a className="btn btn--primary" href="#projects">View Projects</a>
              <a className="icon-btn" href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} aria-hidden="true" />
              </a>
              <a className="icon-btn" href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a className="icon-btn" href={EMAIL} aria-label="Email">
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
          <img src="/anula-headshot.jpg" alt="Anula Dinesh" className="hero-photo" />
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <h2 className="section-title center">Projects</h2>
          <p className="section-sub center">
            Here are some of the projects I&apos;ve built, from AI and LLM applications
            to web apps and tools.
          </p>
          <div className="featured">
            {featured.map((p) => <ProjectCard key={p.id} project={p} wide />)}
          </div>
          <div className="pgrid">
            {others.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <section className="section" id="ts">
        <div className="container">
          <h2 className="section-title center">My Skills</h2>
          <p className="section-sub center">
            My AI stack, from the languages at the base to the LLM apps on top.
          </p>
          {/* Layers are listed top to bottom; --level drives how pink each one glows */}
          <div className="stack">
            {skills.map((layer, i) => (
              <div
                key={layer.label}
                className="layer"
                style={{ "--level": skills.length - i }}
              >
                <div className="layer-label">{layer.label}</div>
                <ul className="layer-skills">
                  {layer.items.map((s) => (
                    <li key={s} className="skill-tile">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact" id="cm">
        <div className="container">
          <h2 className="section-title center">Let&apos;s Connect!</h2>
          <p className="section-sub center">You can reach me through LinkedIn or email.</p>
          <div className="contact-links">
            <a className="btn btn--ghost" href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn--primary" href={EMAIL}>adinesh5@asu.edu</a>
          </div>
        </div>
      </section>
    </main>
  );
}
