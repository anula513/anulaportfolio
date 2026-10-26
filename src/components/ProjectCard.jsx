import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { hasCaseStudy } from "../data/projects";

// featured = bigger card with bullet points, used for the AI projects.
export default function ProjectCard({ project, featured = false }) {
  const p = project;

  return (
    <article className={`card ${featured ? "card--featured" : ""}`}>
      <div className="card-top">
        <h3 className="card-title">{p.title}</h3>
        {p.status && <span className="badge">{p.status}</span>}
      </div>

      <p className="card-tagline">{p.tagline}</p>

      {featured && p.cardPoints && (
        <ul className="card-points">
          {p.cardPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

      <ul className="chips" aria-label="Tech used">
        {p.tech.map((t) => (
          <li key={t} className="chip">{t}</li>
        ))}
      </ul>

      <div className="card-links">
        {hasCaseStudy(p) && (
          <Link className="btn btn--primary" to={`/projects/${p.id}`}>
            {featured ? "Read case study" : "Details"}
          </Link>
        )}
        {p.github && (
          <a className="btn btn--ghost" href={p.github} target="_blank" rel="noreferrer">
            <Github size={16} aria-hidden="true" /> Code
          </a>
        )}
        {p.liveDemo && (
          <a className="btn btn--ghost" href={p.liveDemo} target="_blank" rel="noreferrer">
            Live demo <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
