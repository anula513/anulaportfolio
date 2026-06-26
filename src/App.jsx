import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const skills = [
  "HTML", "CSS", "JavaScript", "Python", "Java",
  "React", "PostgreSQL", "Tableau", "AI/ML"
];

const projects = [
  {
    id: "job-market-analytics",
    title: "Data & AI Job Market Analytics",
    tech: "Python • PostgreSQL • SQL • Tableau",
    description:
      "An end-to-end analytics project that cleans job-market data, stores it in PostgreSQL, analyzes trends with SQL, and presents insights through a Tableau dashboard.",
    github: "https://github.com/anula513/job-market-analytics",
    viewPath: "/projects/job-market-analytics",
  },
  {
    id: "jobnest",
    title: "🪺 JobNest – Chrome Extension",
    tech: "JavaScript • Chrome Extensions API • Manifest V3 • Chrome Storage",
    description:
      "A Chrome extension that tracks job applications across LinkedIn, Indeed, Workday, and more — with a floating Save Job button, deadline reminders, status tracking, and CSV export.",
    github: "https://github.com/anula513/jobnest",
    viewPath: "/projects/jobnest",
  },
  {
    id: "codecactus",
    title: "CodeCactus",
    tech: "HTML • CSS • JavaScript • Firebase",
    description:
      "A gamified platform that teaches computer science concepts through interactive games and challenges for K-12 students.",
    github: "https://github.com/anula513/code-cactus",
    liveDemo: "https://code-cactus.vercel.app/",
  },
  {
  id: "launchpad",
  title: "LaunchPad",
  tech: "HTML • CSS • JavaScript • Firebase Firestore",
  description:
    "A web app built to help students track and organize their college application journey, with real-time data persistence via Firebase Firestore.",
  github: "https://github.com/anula513/launchpad",
  liveDemo: "https://anula513.github.io/launchpad/",
},
];



// ── Carousel ──────────────────────────────────────
function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const canPrev = index > 0;
  const canNext = index + visible < projects.length;

  return (
    <div className="carousel-wrapper">
      <button
        className="carousel-arrow left"
        onClick={() => setIndex(i => i - 1)}
        disabled={!canPrev}
        aria-label="Previous"
      >
        &#8592;
      </button>

      <div className="projects-grid">
        {projects.slice(index, index + visible).map((p) => (
          <div className="project-card" key={p.id}>
            <h3>{p.title}</h3>
            <div className="project-tech">{p.tech}</div>
            <p>{p.description}</p>
            <div className="project-links">
              {p.github && (
                <a className="project-link dark" href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {p.viewPath && (
                <Link className="project-link light" to={p.viewPath}>
                  View Project
                </Link>
              )}
              {p.liveDemo && (
                <a className="project-link light" href={p.liveDemo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-arrow right"
        onClick={() => setIndex(i => i + 1)}
        disabled={!canNext}
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────
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

// ── Home Page ─────────────────────────────────────
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
              I'm a junior studying Computer Science at Arizona State University. I'm interested in AI/ML, analytics,
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
          <ProjectCarousel />
        </div>
      </section>

      <section className="contact-section" id="cm">
        <h2>Let&apos;s Connect!</h2>
        <p>You can reach me through LinkedIn or email.</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/anula-dinesh-743140335" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:adinesh5@asu.edu">adinesh5@asu.edu</a>
        </div>
      </section>
    </div>
  );
}

// ── Job Market Analytics Page ─────────────────────
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
              <a className="project-link dark" href="https://github.com/anula513/job-market-analytics" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
              <a className="project-link light" href="https://github.com/anula513/job-market-analytics/blob/main/sql/analysis_queries.sql" target="_blank" rel="noreferrer">
                SQL Queries
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── JobNest Page ──────────────────────────────────
function JobNestPage() {
  return (
    <>
      <Navbar />
      <section className="project-page">
        <div className="project-page-inner">
          <Link to="/" className="back-link">← Back to Home</Link>
          <div className="project-panel">
            <h1>🪺 JobNest – Chrome Extension</h1>

            <p>
              JobNest is a Chrome extension I built to solve a real problem I was facing during my own
              job search — losing track of applications scattered across LinkedIn, Indeed, Workday, and
              more. It injects a floating "Save Job" button on any job listing, letting you capture the
              role in one click and track it through every stage of the application process, all without
              leaving the page.
            </p>

            <img src="/jobnest-popup.png" alt="JobNest popup on a job listing" className="dashboard-preview" />

            <h3>Features</h3>
            <ul>
              <li>Floating "Save Job" button injected on any job listing page</li>
              <li>Works on LinkedIn, Indeed, Glassdoor, Workday, Lever, Greenhouse, and more</li>
              <li>Deadline tracking with Chrome notification reminders</li>
              <li>Status tracking: Saved → Applied → Interviewing → Offer / Rejected</li>
              <li>Notes, search, and filter per job</li>
              <li>Export all jobs to CSV</li>
            </ul>

            <img src="/jobnest-dashboard.png" alt="JobNest dashboard showing tracked jobs" className="dashboard-preview" />

            <h3>Tech Stack</h3>
            <ul>
              <li>JavaScript (Vanilla)</li>
              <li>Chrome Extensions API — Manifest V3</li>
              <li>Chrome Storage API (local persistence)</li>
              <li>Chrome Alarms &amp; Notifications API</li>
            </ul>

            <h3>How It Works</h3>
            <ul>
              <li>Content script detects job pages and injects the Save Job button</li>
              <li>Job data is extracted from the DOM and stored locally via Chrome Storage</li>
              <li>Background service worker handles deadline alarms and fires notifications</li>
            </ul>

            <div className="project-links" style={{ marginTop: "18px" }}>
              <a className="project-link dark" href="https://github.com/anula513/jobnest" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── App ───────────────────────────────────────────
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/job-market-analytics" element={<JobMarketAnalyticsPage />} />
        <Route path="/projects/jobnest" element={<JobNestPage />} />
      </Routes>
    </Router>
  );
}