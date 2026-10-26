import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getProject } from "../data/projects";

// One page component for every case study. The URL's :id picks the project.
export default function ProjectPage() {
  const { id } = useParams();
  const p = getProject(id);

  if (!p) {
    return (
      <main className="container page">
        <h1>Project not found</h1>
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back home</Link>
      </main>
    );
  }

  return (
    <main className="container page">
      <Link to="/#projects" className="back-link">
        <ArrowLeft size={16} aria-hidden="true" /> All projects
      </Link>

      <header className="page-head">
        <div className="card-top">
          <h1>{p.title}</h1>
          {p.status && <span className="badge">{p.status}</span>}
        </div>
        <p className="lede">{p.tagline}</p>
        <ul className="chips">
          {p.tech.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
        <div className="card-links">
          {p.github && (
            <a className="btn btn--primary" href={p.github} target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" /> View code
            </a>
          )}
          {p.liveDemo && (
            <a className="btn btn--ghost" href={p.liveDemo} target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          {p.extraLinks?.map((l) => (
            <a key={l.href} className="btn btn--ghost" href={l.href} target="_blank" rel="noreferrer">
              {l.label} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </header>

      {p.metrics && (
        <section className="metrics" aria-label="Results">
          {p.metrics.map((m) => (
            <div key={m.label} className="metric">
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
              {m.note && <div className="metric-note">{m.note}</div>}
            </div>
          ))}
        </section>
      )}

      <div className="prose">
        {p.sections?.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body && <p>{s.body}</p>}
            {s.list && (
              <ul>
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {p.images?.map((img) => (
          <img key={img.src} src={img.src} alt={img.alt} className="shot" />
        ))}
      </div>
    </main>
  );
}
