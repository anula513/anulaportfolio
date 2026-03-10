import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Java",
  "React",
  "PostgreSQL",
  "Tableau",
  "AI/ML"
];

function Navbar() {
  return (
    <nav className="navbar-custom">
      <a className="brand" href="#top">&lt;Anula&gt;</a>
      <div className="nav-links">
        <a href="#ts">Technical Skills</a>
        <a href="#projects">Projects</a>
        <a href="#cm">Contact Me</a>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div id="top">
      <Navbar />

      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Hi, I&apos;m Anula</h1>
            <h2>Computer Science Student | AI • Data • Software</h2>
            <p>
              I’m a junior studying Computer Science at Arizona State University. I’m interested in AI/ML, analytics,
              and building software, and I enjoy turning ideas into projects through coding. I like exploring new 
              technologies, designing clean interfaces, and building things that are both useful and fun.
            </p>
          </div>

          <div className="hero-image-wrap">
            <img src="/me.jpg" alt="Anula" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="section-skills" id="ts">
        <div className="skills-inner">
          <div>
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80"
              alt="Coding"
              className="skills-image"
            />
          </div>

          <div>
            <div className="skills-title">My Skills</div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-card">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-projects" id="projects">
        <div className="projects-inner">
          <h2 className="projects-heading">Projects</h2>
          <p className="projects-subtext">
            Here are some of the projects I&apos;ve built across software development,
            analytics, and interactive learning experiences.
          </p>

          <div className="projects-grid" id="all-projects">
            <div className="project-card">
              <h3>Data &amp; AI Job Market Analytics</h3>
              <div className="project-tech">Python • PostgreSQL • SQL • Tableau</div>
              <p>
                An end-to-end analytics project that cleans job-market data, stores it in
                PostgreSQL, analyzes trends with SQL, and presents insights through a
                Tableau dashboard.
              </p>
              <div className="project-links">
                <a
                  className="project-link dark"
                  href="https://github.com/anula513/job-market-analytics"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <Link className="project-link light" to="/projects/job-market-analytics">
                  View Project
                </Link>
              </div>
            </div>

           <div className="project-card">

  <h3>CodeCactus</h3>

  <div className="project-tech">
    HTML • CSS • JavaScript • Firebase
  </div>

  <p>
    A gamified platform that teaches computer science concepts
    through interactive games and challenges for K-12 students.
  </p>

  <div className="project-links">

    <a
      className="project-link dark"
      href="https://github.com/anula513/code-cactus"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>

    <a
      className="project-link light"
      href="https://code-cactus.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
      Live Demo
    </a>

  </div>

</div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="cm">
        <h2>Let&apos;s Connect!</h2>
        <p>You can reach me through LinkedIn or email.</p>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/anula-dinesh-743140335"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:adinesh5@asu.edu">adinesh5@asu.edu</a>
        </div>
      </section>
    </div>
  );
}

function JobMarketAnalyticsPage() {
  return (
    <>
      <Navbar />
      <section className="project-page">
        <div className="project-page-inner">
          <Link to="/" className="back-link">← Back to Home</Link>

          <div className="project-panel">
            <h1>Data &amp; AI Job Market Analytics</h1>
            <p>
              This project analyzes global salaries for Data Science, AI, and Machine Learning
              roles using Python, PostgreSQL, SQL, and Tableau.
            </p>

            <h3>Pipeline</h3>
            <ul>
              <li>Raw CSV dataset</li>
              <li>Python data cleaning</li>
              <li>PostgreSQL storage</li>
              <li>SQL analysis queries</li>
              <li>Tableau dashboard</li>
            </ul>

            <h3>Key Insights</h3>
            <ul>
              <li>Executive-level roles earn the highest salaries.</li>
              <li>Machine Learning and Data Science roles dominate the highest-paying jobs.</li>
              <li>Senior-level salaries are significantly higher than entry-level and mid-level roles.</li>
            </ul>

            <img src="/dashboard.png" alt="Dashboard" className="dashboard-preview" />

            <div className="project-links" style={{ marginTop: "18px" }}>
              <a
                className="project-link dark"
                href="https://github.com/anula513/job-market-analytics"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
              <a
                className="project-link light"
                href="https://github.com/anula513/job-market-analytics/blob/main/sql/analysis_queries.sql"
                target="_blank"
                rel="noreferrer"
              >
                SQL Queries
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/job-market-analytics" element={<JobMarketAnalyticsPage />} />
      </Routes>
    </Router>
  );
}