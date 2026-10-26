import { Link } from "react-router-dom";

// "/#section" links work from every page: on the home page they just scroll,
// on a project page they go home and then jump to the section.
export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          Anula Dinesh
        </Link>
        <nav className="nav-links" aria-label="Main">
          <a href="/#projects">Projects</a>
          <a href="/#skills">Skills</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
