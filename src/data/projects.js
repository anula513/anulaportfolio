// All project content lives here. The home page cards and the project pages
// both read from this file.
//
// Fields:
//   description: text on the home page card
//   viewPath: set automatically when a project has a page (sections)
//   page: the project page, as a list of blocks shown top to bottom:
//         { text } a paragraph, { heading, list } a list, { image, alt } a picture
//   links: buttons at the bottom of the project page

export const projects = [
  {
    id: "meeting-intelligence-tracker",
    title: "Meeting Intelligence Tracker",
    tech: "Python • OpenAI API • Pinecone • RAG • Streamlit",
    description:
      "A RAG system that pulls decisions and action items out of meeting transcripts and answers questions across past meetings, with every answer backed by a verified quote.",
    github: "https://github.com/anula513/meeting-intelligence-tracker",
    page: [
      {
        text:
          "Teams make decisions in meetings and then lose track of them. This app extracts decisions and action items from meeting transcripts and lets you ask questions across past meetings. Every extracted item carries a quote from the transcript, and the code checks that the quote is really there.",
      },
      { image: "/meeting-tracker-demo.png", alt: "Meeting Intelligence Tracker app answering \"Who owns the beta launch date?\" with \"Priya owns the beta launch date.\"" },
      {
        heading: "Features",
        list: [
          "Decisions extracted with status (final, provisional, unresolved), condition, owner, and source quote",
          "Action items listed separately from decisions",
          "Owners only filled in when someone actually takes the task",
          "Ask questions across meetings and get an answer with a verified quote, or \"not found\"",
        ],
      },
      {
        heading: "Tech Stack",
        list: [
          "Python",
          "OpenAI API (structured outputs) and embeddings",
          "Pinecone vector database",
          "Pydantic, pytest",
          "Streamlit",
        ],
      },
      {
        heading: "How It Works",
        list: [
          "Transcripts are parsed and split into chunks by speaker turn",
          "The model extracts decisions and action items as structured JSON",
          "Code verifies every source quote appears in the transcript",
          "Chunks are stored in Pinecone and retrieved to answer questions",
        ],
      },
      {
        heading: "Results",
        list: [
          "Scored against hand-labeled answer keys, with a held-out test set",
          "0 unverified quotes in every scored eval run",
          "Speaker-aware chunking improved top-1 retrieval on held-out questions from 2/6 to 4/6",
        ],
      },
    ],
    links: [{ label: "GitHub Repo", href: "https://github.com/anula513/meeting-intelligence-tracker" }],
  },
  {
    id: "texting-style-clone",
    title: "Texting Style Clone",
    status: "In progress",
    tech: "Python • RAG • QLoRA • Hugging Face",
    description:
      "A chatbot that replies in my texting style, comparing a prompting baseline, RAG style memory, and a QLoRA fine-tune.",
  },
  {
    id: "job-market-analytics",
    title: "Data & AI Job Market Analytics",
    tech: "Python • PostgreSQL • SQL • Tableau",
    description:
      "An end-to-end analytics project that cleans job-market data, stores it in PostgreSQL, analyzes trends with SQL, and presents insights through a Tableau dashboard.",
    github: "https://github.com/anula513/job-market-analytics",
    page: [
      {
        text:
          "This project analyzes global salaries for Data Science, AI, and Machine Learning roles using Python, PostgreSQL, SQL, and Tableau.",
      },
      {
        heading: "Pipeline",
        list: [
          "Raw CSV dataset",
          "Python data cleaning",
          "PostgreSQL storage",
          "SQL analysis queries",
          "Tableau dashboard",
        ],
      },
      {
        heading: "Key Insights",
        list: [
          "Executive-level roles earn the highest salaries.",
          "Machine Learning and Data Science roles dominate the highest-paying jobs.",
          "Senior-level salaries are significantly higher than entry-level and mid-level roles.",
        ],
      },
      { image: "/dashboard.png", alt: "Dashboard" },
    ],
    links: [
      { label: "GitHub Repo", href: "https://github.com/anula513/job-market-analytics" },
      { label: "SQL Queries", href: "https://github.com/anula513/job-market-analytics/blob/main/sql/analysis_queries.sql" },
    ],
  },
  {
    id: "jobnest",
    title: "🪺 JobNest – Chrome Extension",
    tech: "JavaScript • Chrome Extensions API • Manifest V3 • Chrome Storage",
    description:
      "A Chrome extension that tracks job applications across LinkedIn, Indeed, Workday, and more — with a floating Save Job button, deadline reminders, status tracking, and CSV export.",
    github: "https://github.com/anula513/jobnest",
    page: [
      {
        text:
          "JobNest is a Chrome extension I built to solve a real problem I was facing during my own job search — losing track of applications scattered across LinkedIn, Indeed, Workday, and more. It injects a floating \"Save Job\" button on any job listing, letting you capture the role in one click and track it through every stage of the application process, all without leaving the page.",
      },
      { image: "/jobnest-popup.png", alt: "JobNest popup on a job listing" },
      {
        heading: "Features",
        list: [
          "Floating \"Save Job\" button injected on any job listing page",
          "Works on LinkedIn, Indeed, Glassdoor, Workday, Lever, Greenhouse, and more",
          "Deadline tracking with Chrome notification reminders",
          "Status tracking: Saved → Applied → Interviewing → Offer / Rejected",
          "Notes, search, and filter per job",
          "Export all jobs to CSV",
        ],
      },
      { image: "/jobnest-dashboard.png", alt: "JobNest dashboard showing tracked jobs" },
      {
        heading: "Tech Stack",
        list: [
          "JavaScript (Vanilla)",
          "Chrome Extensions API — Manifest V3",
          "Chrome Storage API (local persistence)",
          "Chrome Alarms & Notifications API",
        ],
      },
      {
        heading: "How It Works",
        list: [
          "Content script detects job pages and injects the Save Job button",
          "Job data is extracted from the DOM and stored locally via Chrome Storage",
          "Background service worker handles deadline alarms and fires notifications",
        ],
      },
    ],
    links: [{ label: "GitHub Repo", href: "https://github.com/anula513/jobnest" }],
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

export const skills = [
  "HTML", "CSS", "JavaScript", "Python", "Java",
  "React", "PostgreSQL", "Tableau", "AI/ML",
];

export const getProject = (id) => projects.find((p) => p.id === id);
export const hasPage = (p) => Boolean(p.page?.length);
