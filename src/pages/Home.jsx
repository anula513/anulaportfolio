import { Mail, Linkedin, Github } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { projects, skillGroups } from "../data/projects";

const aiProjects = projects.filter((p) => p.group === "ai");
const buildProjects = projects.filter((p) => p.group === "build");

export default function Home() {
  return (
    <main>
      {/* ── Hero ───────────────────────────── */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="eyebrow">CS @ Arizona State · Graduating May 2027</p>
            <h1>
              Hi, I&apos;m Anula. I build AI systems and <span className="accent">measure</span> whether they work.
            </h1>
            <p className="lede">
              I&apos;m a senior studying Computer Science, focused on AI engineering: RAG, LLM
              evaluation, and turning messy real-world problems into tools people can trust.
            </p>
            <div className="hero-actions">
              <a className="btn btn--primary" href="#projects">See my work</a>
              <a className="btn btn--ghost" href="#contact">Get in touch</a>
            </div>
          </div>
          <img src="/me.jpg" alt="Anula Dinesh" className="hero-photo" />
        </div>
      </section>

      {/* ── Projects ───────────────────────── */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2>AI projects</h2>
            <p className="section-sub">
              Built end to end, with evaluation baked in from day one.
            </p>
          </div>
          <div className="grid grid--featured">
            {aiProjects.map((p) => (
              <ProjectCard key={p.id} project={p} featured />
            ))}
          </div>

          <div className="section-head section-head--spaced">
            <h2>Other builds</h2>
            <p className="section-sub">Web apps, a Chrome extension, and analytics.</p>
          </div>
          <div className="grid">
            {buildProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────── */}
      <section className="section section--tint" id="skills">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Toolkit</p>
            <h2>Skills</h2>
          </div>
          <div className="skills">
            {skillGroups.map((g) => (
              <div key={g.label} className="skill-group">
                <h3>{g.label}</h3>
                <ul className="chips">
                  {g.items.map((s) => (
                    <li key={s} className="chip">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────── */}
      <section className="section" id="contact">
        <div className="container contact">
          <h2>Let&apos;s connect</h2>
          <p className="section-sub">
            I&apos;m looking for AI Engineer roles starting 2027. The fastest way to reach me is email.
          </p>
          <div className="contact-links">
            <a className="btn btn--primary" href="mailto:adinesh5@asu.edu">
              <Mail size={16} aria-hidden="true" /> adinesh5@asu.edu
            </a>
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
