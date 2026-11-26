import { Link, useParams } from "react-router-dom";
import { getProject, hasPage } from "../data/projects";
import ProjectMedia from "../components/ProjectMedia";

// One page component for every project. The URL's :id picks the project:
// header and links first, then the big screenshot, then its `page` blocks.
export default function ProjectPage() {
  const { id } = useParams();
  const p = getProject(id);

  if (!p || !hasPage(p)) {
    return (
      <main className="container page">
        <Link to="/#projects" className="back-link">← Back to projects</Link>
        <h1 className="page-title">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="container page">
      <Link to="/#projects" className="back-link">← Back to projects</Link>

      <header className="page-head">
        <div className="title-row">
          <h1 className="page-title">{p.title}</h1>
          {p.status && <span className="badge">{p.status}</span>}
        </div>
        <p className="page-lede">{p.description}</p>
        <ul className="chips" aria-label="Tech used">
          {p.tech.split(" • ").map((t) => <li key={t} className="chip">{t}</li>)}
        </ul>
        <div className="page-links">
          {p.liveDemo && (
            <a className="btn btn--primary" href={p.liveDemo} target="_blank" rel="noreferrer">Live Demo ↗</a>
          )}
          {p.github && (
            <a className={`btn ${p.liveDemo ? "btn--ghost" : "btn--primary"}`} href={p.github} target="_blank" rel="noreferrer">
              GitHub Repo ↗
            </a>
          )}
          {p.extraLinks?.map((l) => (
            <a key={l.href} className="btn btn--ghost" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
          ))}
        </div>
      </header>

      <ProjectMedia project={p} large />

      <div className="page-body">
        {p.page.map((block, i) => {
          if (block.image) {
            return <img key={i} src={block.image} alt={block.alt} className="shot" loading="lazy" />;
          }
          if (block.list) {
            return (
              <section key={i}>
                <h2>{block.heading}</h2>
                <ul>
                  {block.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            );
          }
          return <p key={i} className="page-intro">{block.text}</p>;
        })}
      </div>
    </main>
  );
}
