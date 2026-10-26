import { Link, useParams } from "react-router-dom";
import { getProject, hasPage } from "../data/projects";

// One page component for every project. The URL's :id picks the project,
// and its `page` blocks are shown top to bottom.
export default function ProjectPage() {
  const { id } = useParams();
  const p = getProject(id);

  return (
    <main className="container page">
      <Link to="/#projects" className="back-link">← Back to Home</Link>

      {!p || !hasPage(p) ? (
        <div className="project-panel">
          <h1>Project not found</h1>
        </div>
      ) : (
        <div className="project-panel">
          <h1>{p.title}</h1>

          {p.page.map((block, i) => {
            if (block.image) {
              return <img key={i} src={block.image} alt={block.alt} className="shot" />;
            }
            if (block.list) {
              return (
                <section key={i}>
                  <h3>{block.heading}</h3>
                  <ul>
                    {block.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}

          {p.links && (
            <div className="project-links">
              {p.links.map((l, i) => (
                <a
                  key={l.href}
                  className={`btn ${i === 0 ? "btn--primary" : "btn--ghost"}`}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
