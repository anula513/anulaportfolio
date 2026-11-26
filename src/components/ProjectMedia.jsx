// The picture for a project: its screenshot inside a simple browser-window
// frame, or a title tile when there's no screenshot yet.
export default function ProjectMedia({ project, large = false }) {
  const p = project;

  return (
    <div className={`media ${large ? "media--large" : ""}`}>
      <div className="media-bar" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="media-frame">
        {p.cover ? (
          <img src={p.cover.src} alt={p.cover.alt} loading="lazy" />
        ) : (
          <div className="media-concept">
            {p.conceptQuery && (
              <div className="concept-search">
                <span className="concept-icon" aria-hidden="true">⌕</span>
                <span>{p.conceptQuery}</span>
                <span className="concept-caret" aria-hidden="true" />
              </div>
            )}
            <p className="concept-note">Demo coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}
