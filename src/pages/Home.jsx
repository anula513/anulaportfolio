import { useState } from "react";
import { Link } from "react-router-dom";
import { projects, skills, hasPage } from "../data/projects";

// ── Carousel ──────────────────────────────────────
function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const canPrev = index > 0;
  const canNext = index + visible < projects.length;

  return (
    <div className="carousel">
      <button
        className="carousel-arrow"
        onClick={() => setIndex((i) => i - 1)}
        disabled={!canPrev}
        aria-label="Previous projects"
      >
        &#8592;
      </button>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article
            className={`project-card ${i < index || i >= index + visible ? "is-off" : ""}`}
            key={p.id}
          >
            <div className="card-top">
              <h3>{p.title}</h3>
              {p.status && <span className="badge">{p.status}</span>}
            </div>
            <div className="project-tech">{p.tech}</div>
            <p>{p.description}</p>
            <div className="project-links">
              {p.github && (
                <a className="btn btn--ghost" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {hasPage(p) && (
                <Link className="btn btn--primary" to={`/projects/${p.id}`}>View Project</Link>
              )}
              {p.liveDemo && (
                <a className="btn btn--primary" href={p.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
              )}
            </div>
          </article>
        ))}
      </div>

      <button
        className="carousel-arrow"
        onClick={() => setIndex((i) => i + 1)}
        disabled={!canNext}
        aria-label="Next projects"
      >
        &#8594;
      </button>
    </div>
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
            <h2>Computer Science Student | AI • Data • Software</h2>
            <p>
              I&apos;m a senior studying Computer Science at Arizona State University. I&apos;m interested in AI/ML, analytics,
              and building software, and I enjoy turning ideas into projects through coding. I like exploring new
              technologies, designing clean interfaces, and building things that are both useful and fun.
            </p>
          </div>
          <img src="/me.jpg" alt="Anula" className="hero-photo" />
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

      <section className="section" id="projects">
        <div className="container">
          <h2 className="section-title center">Projects</h2>
          <p className="section-sub center">
            Here are some of the projects I&apos;ve built across software development,
            analytics, and interactive learning experiences.
          </p>
          <ProjectCarousel />
        </div>
      </section>

      <section className="section contact" id="cm">
        <div className="container">
          <h2 className="section-title center">Let&apos;s Connect!</h2>
          <p className="section-sub center">You can reach me through LinkedIn or email.</p>
          <div className="contact-links">
            <a className="btn btn--ghost" href="https://www.linkedin.com/in/anula-dinesh-743140335" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn--primary" href="mailto:adinesh5@asu.edu">adinesh5@asu.edu</a>
          </div>
        </div>
      </section>
    </main>
  );
}
