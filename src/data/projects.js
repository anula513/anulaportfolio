// All project content lives here. The home page cards and the project pages
// both read from this file.
//
// Fields:
//   cover: the big screenshot on the home page card and at the top of the project page
//          ({ src, alt }). Leave it out to show a title tile instead.
//   description: one or two sentences under the card title
//   github / liveDemo / extraLinks: buttons on the project page
//   page: the rest of the project page, as blocks shown top to bottom:
//         { text } a paragraph, { heading, list } a list, { image, alt } a picture

export const projects = [
  {
    id: "meeting-intelligence-tracker",
    title: "Meeting Intelligence Tracker",
    tech: "Python • OpenAI API • Pinecone • RAG • FastAPI • Streamlit",
    description:
      "A RAG system that pulls decisions and action items out of meeting transcripts and answers questions across past meetings, with every answer backed by a verified quote. Available as a web app and a REST API.",
    github: "https://github.com/anula513/meeting-intelligence-tracker",
    cover: {
      src: "/meeting-tracker-demo.png",
      alt: "Meeting Intelligence Tracker answering \"Who owns the beta launch date?\" with \"Priya owns the beta launch date.\" and the verified quote \"I'll own the launch date.\"",
    },
    page: [
      {
        text:
          "Teams make decisions in meetings and then lose track of them. This app extracts decisions and action items from meeting transcripts and lets you ask questions across past meetings. Every extracted item carries a quote from the transcript, and the code checks that the quote is really there.",
      },
      {
        heading: "Features",
        list: [
          "Decisions extracted with status (final, provisional, unresolved), condition, owner, and source quote",
          "Action items listed separately from decisions",
          "Owners only filled in when someone actually takes the task",
          "Ask questions across meetings and get an answer with a verified quote, or \"not found\"",
          "Filter questions to one meeting and open the full transcript to check the source",
          "REST API with /health, /ask, and /extract endpoints",
          "Clear errors when the AI service is busy or returns a bad response, instead of crashing",
        ],
      },
      {
        heading: "Tech Stack",
        list: [
          "Python",
          "OpenAI API (structured outputs) and embeddings",
          "Pinecone vector database",
          "FastAPI and Uvicorn",
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
          "FastAPI validates every request and response with Pydantic models",
          "/extract also returns any quotes that failed verification, so nothing is hidden",
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
  },
  {
    id: "intent-aware-product-discovery",
    title: "Intent-Aware Product Discovery Engine",
    status: "In progress",
    tech: "Python • pandas • BM25 • Embeddings • FastAPI",
    description:
      "Fashion search that understands what shoppers mean, not just the words they type, plus recommendations for brand-new items with no purchase history. Built on H&M's real catalog and transactions.",
    github: "https://github.com/anula513/intent-aware-product-discovery",
    conceptQuery: "flowy dress for my Spain trip, no black",
    page: [
      {
        text:
          "Shoppers often know the look they want but not what the item is called, so they describe it in their own words, like \"flowy dress for my Spain trip, no black.\" Most store search engines only match keywords, so results miss what the shopper meant. Recommendations have a second gap: \"customers also bought\" needs purchase history, so new arrivals, which fast-fashion brands release every week, never get recommended.",
      },
      {
        heading: "What I'm Building",
        list: [
          "An LLM step that turns a plain-English query into filters (category, color, exclusions) and a search phrase",
          "Hybrid search: BM25 keyword search plus embedding search, combined with reciprocal rank fusion",
          "Recommendations for new items with zero purchase history, using content and image similarity",
          "Code checks that every returned product exists and that no result breaks an exclusion like \"no black\"",
          "FastAPI backend, Docker, a deployed demo, and a side-by-side \"keyword vs engine\" view",
        ],
      },
      {
        heading: "Progress So Far",
        list: [
          "Project charter written, with what the project can and can't claim",
          "Data downloaded from the official source, license read, and exploratory analysis done",
          "Prepared the last 12 weeks of purchases (about 3.4M) and a search text for each of 105,542 products",
          "Time-based split into train, validation, and a locked test week that stays untouched until the final evaluation",
        ],
      },
      {
        heading: "How It Will Be Measured",
        list: [
          "Search methods compared on a set of shopper queries, split into dev and test",
          "Recommendations tested on a held-out future week of real H&M purchases, overall and for brand-new items",
          "Every number labeled with the data split it came from",
        ],
      },
    ],
  },
  {
    id: "job-market-analytics",
    title: "Data & AI Job Market Analytics",
    tech: "Python • PostgreSQL • SQL • Tableau",
    description:
      "An end-to-end analytics project that cleans job-market data, stores it in PostgreSQL, analyzes trends with SQL, and presents insights through a Tableau dashboard.",
    github: "https://github.com/anula513/job-market-analytics",
    cover: { src: "/dashboard.png", alt: "Tableau dashboard of global data and AI salaries" },
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
    ],
    extraLinks: [
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
    cover: { src: "/jobnest-dashboard.png", alt: "JobNest dashboard showing tracked jobs" },
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
  },
  {
    id: "codecactus",
    title: "CodeCactus",
    tech: "HTML • CSS • JavaScript • Firebase",
    description:
      "A gamified platform that teaches computer science concepts through interactive games and challenges for K-12 students.",
    github: "https://github.com/anula513/code-cactus",
    liveDemo: "https://code-cactus.vercel.app/",
    cover: { src: "/projects/codecactus-front.webp", alt: "Code Cactus home page: Planting the seeds of tech curiosity" },
    page: [
      {
        text:
          "Code Cactus is a web-based learning platform built for the Desert CodeSprouts initiative at ASU's School of Computing and Augmented Intelligence. It introduces K-12 students to computer science through interactive games about programming, machine learning, cybersecurity, and UI/UX design. It won 2nd place at the hackathon.",
      },
      { image: "/projects/codecactus-explore.webp", alt: "Code Cactus exploration modules: UI/UX, Programming, Cybersecurity, Machine Learning" },
      {
        heading: "Features",
        list: [
          "Learning paths by grade level: Discovery (K-3), Exploration (4-8), and Innovation (9-12)",
          "UI/UX game: drag and drop HTML and CSS styles to help a cactus build a design",
          "Programming, machine learning, and cybersecurity modules built around games and stories",
          "Student login and registration with Firebase",
        ],
      },
      {
        heading: "Tech Stack",
        list: ["HTML", "CSS", "JavaScript", "Firebase", "Hosted on Vercel"],
      },
    ],
  },
  {
    id: "launchpad",
    title: "LaunchPad",
    tech: "HTML • CSS • JavaScript • Firebase Firestore",
    description:
      "A job hunt tracker with a dashboard, an application pipeline, and target companies, synced across devices with Firebase.",
    github: "https://github.com/anula513/launchpad",
    liveDemo: "https://anula513.github.io/launchpad/",
    cover: { src: "/projects/launchpad.webp", alt: "LaunchPad sign-in screen" },
    page: [
      {
        text:
          "LaunchPad is a personal job hunt tracker built with vanilla HTML, CSS, and JavaScript, backed by Firebase for sign-in and cloud storage, so your data follows you across devices.",
      },
      {
        heading: "Features",
        list: [
          "Dashboard with application stats, response rate, and a visual pipeline (Applied, Screening, Interview, Offer, Rejected)",
          "My Companies: target companies with links to their careers page and LinkedIn Jobs, priority levels, and notes",
          "Applications: log every application, update its status inline, and filter by stage",
          "Suggested companies across nine career tracks",
        ],
      },
      {
        heading: "Tech Stack",
        list: [
          "Vanilla HTML, CSS, and JavaScript, with no framework or build step",
          "Firebase Firestore for cloud data storage",
          "Firebase Authentication with email and password",
          "Hosted on GitHub Pages",
        ],
      },
      {
        heading: "Security",
        list: [
          "Firestore security rules only let a signed-in user read or write their own data",
        ],
      },
    ],
  },
];

// Skills as a stack, top layer first. Each layer builds on the ones below it.
export const skills = [
  { label: "LLM apps", items: ["OpenAI API", "LangChain", "LangGraph", "LLM Evaluation"] },
  { label: "Retrieval", items: ["RAG", "Embeddings", "Pinecone"] },
  { label: "Frameworks", items: ["React", "Streamlit", "Pydantic", "pytest", "Firebase"] },
  { label: "Data & tools", items: ["SQL", "PostgreSQL", "Git"] },
  { label: "Languages", items: ["Python", "Java", "JavaScript", "HTML", "CSS"] },
];

export const getProject = (id) => projects.find((p) => p.id === id);
export const hasPage = (p) => Boolean(p.page?.length);
export const featured = projects.slice(0, 2);
export const others = projects.slice(2);
