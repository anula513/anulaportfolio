// All project content lives here. Pages and cards read from this file,
// so adding a project means adding one object, not a new page component.
//
// Fields:
//   group: "ai" | "build"  (which section it shows in on the home page)
//   status: optional badge text, e.g. "In progress"
//   metrics: optional [{ value, label, note }] shown on the case-study page
//   sections: optional [{ heading, body, list }] for the case-study page
//   images: optional [{ src, alt }]

export const projects = [
  {
    id: "meeting-intelligence-tracker",
    group: "ai",
    title: "Meeting Intelligence Tracker",
    tagline:
      "Extracts decisions and action items from meeting transcripts, and answers questions across meetings with a verified source quote.",
    tech: ["Python", "OpenAI API", "Structured outputs", "Pinecone", "RAG", "Pydantic", "pytest", "Streamlit"],
    github: "https://github.com/anula513/meeting-intelligence-tracker",
    cardPoints: [
      "Every extracted item carries a quote that code checks against the transcript",
      "Scored against hand-labeled answer keys with a held-out test set",
      "Speaker-aware chunking doubled top-1 retrieval on held-out questions",
    ],
    metrics: [
      { value: "0", label: "unverified quotes", note: "in every scored eval run" },
      { value: "100%", label: "decision precision & recall", note: "held-out set, 4 meetings" },
      { value: "2/6 → 4/6", label: "top-1 retrieval", note: "held-out, after speaker-aware chunking" },
      { value: "3/3", label: "unanswerable questions", note: "correctly returned not found" },
    ],
    sections: [
      {
        heading: "The problem",
        body:
          "Teams make decisions in meetings and lose track of them. Summaries turn into a wall of text that mixes decisions, discussion, and tasks, and nobody can check what was actually agreed or who owns it.",
      },
      {
        heading: "What it does",
        list: [
          "Pulls decisions out as structured records: the decision, its status (final, provisional, unresolved), any condition, the owner, and a source quote",
          "Lists action items separately from decisions",
          "Stores transcripts as embeddings in Pinecone so you can ask questions across meetings and get a cited answer",
          "Returns \"not found\" instead of guessing when the meetings don't contain the answer",
        ],
      },
      {
        heading: "Built to be trusted, not just demoed",
        list: [
          "Owners are only filled in when someone actually takes the task. An invented owner is treated as a failure, because people act on owners.",
          "Code verifies every source quote really appears in the transcript. Items that fail are flagged, not silently dropped.",
          "Answer keys were labeled and committed before the model ran on a meeting. The prompt was only tuned on dev meetings.",
        ],
      },
      {
        heading: "How it was measured",
        body:
          "I wrote a labeling guide, hand-labeled answer keys, and a scorer for precision, recall, owner accuracy, and invented owners. Once a test meeting was used to fix the prompt, it moved to dev and I wrote fresh test meetings for the final claim. Retrieval was scored separately with hit@1, hit@3, and hit@5 on a question set plus a held-out set.",
      },
      {
        heading: "What didn't work (yet)",
        list: [
          "The fresh held-out run had 1 invented owner, so that check is a FAIL. It's reported, not hidden.",
          "The eval set is small (14 synthetic meetings), so one error moves the percentages a lot.",
          "Transcripts are synthetic text. Real meetings and audio would be messier.",
        ],
      },
    ],
  },
  {
    id: "texting-style-clone",
    group: "ai",
    status: "In progress",
    title: "Texting Style Clone",
    tagline:
      "A chatbot that replies in my texting style, built three ways to compare which approach actually captures a personal voice.",
    tech: ["Python", "Prompt engineering", "RAG", "QLoRA fine-tuning", "Hugging Face", "Streamlit"],
    cardPoints: [
      "Baseline: prompting with style instructions",
      "RAG: retrieve real past messages as style memory",
      "Fine-tune: QLoRA on my own message history",
    ],
    sections: [
      {
        heading: "The question",
        body:
          "When you want a model to sound like a specific person, is a good prompt enough, does retrieving real examples help, or do you need to fine-tune? This project builds all three on the same data and compares them side by side.",
      },
      {
        heading: "The three approaches",
        list: [
          "Prompting baseline: a system prompt that describes the style",
          "RAG style memory: retrieve similar past messages and show them to the model as examples",
          "QLoRA fine-tune: train a small adapter on my own message history",
        ],
      },
      {
        heading: "What's coming",
        body:
          "A live demo, a write-up of the comparison and its trade-offs (quality, cost, effort), and a post on my Substack.",
      },
    ],
  },
  {
    id: "jobnest",
    group: "build",
    title: "JobNest",
    tagline:
      "A Chrome extension that tracks job applications across LinkedIn, Indeed, Workday, and more, without leaving the page.",
    tech: ["JavaScript", "Chrome Extensions API (MV3)", "Chrome Storage", "Alarms & Notifications"],
    github: "https://github.com/anula513/jobnest",
    images: [
      { src: "/jobnest-popup.png", alt: "JobNest popup on a job listing" },
      { src: "/jobnest-dashboard.png", alt: "JobNest dashboard showing tracked jobs" },
    ],
    sections: [
      {
        heading: "Why I built it",
        body:
          "I was losing track of applications scattered across job boards during my own search. JobNest adds a floating Save Job button to any listing, so one click captures the role and tracks it through every stage.",
      },
      {
        heading: "Features",
        list: [
          "Floating Save Job button on LinkedIn, Indeed, Glassdoor, Workday, Lever, Greenhouse, and more",
          "Status tracking: Saved → Applied → Interviewing → Offer / Rejected",
          "Deadline reminders with Chrome notifications",
          "Notes, search, filters, and CSV export",
        ],
      },
      {
        heading: "How it works",
        list: [
          "A content script detects job pages and injects the button",
          "Job data is read from the page and saved locally with Chrome Storage",
          "A background service worker schedules deadline alarms and fires notifications",
        ],
      },
    ],
  },
  {
    id: "codecactus",
    group: "build",
    status: "2nd place, hackathon",
    title: "CodeCactus",
    tagline:
      "A gamified platform that teaches K-12 students computer science concepts through interactive games and challenges.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/anula513/code-cactus",
    liveDemo: "https://code-cactus.vercel.app/",
  },
  {
    id: "launchpad",
    group: "build",
    title: "LaunchPad",
    tagline:
      "A web app that helps students track and organize their college application journey, with real-time sync through Firestore.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase Firestore"],
    github: "https://github.com/anula513/launchpad",
    liveDemo: "https://anula513.github.io/launchpad/",
  },
  {
    id: "job-market-analytics",
    group: "build",
    title: "Data & AI Job Market Analytics",
    tagline:
      "An end-to-end analytics pipeline on global salaries for data, AI, and ML roles, from raw CSV to a Tableau dashboard.",
    tech: ["Python", "PostgreSQL", "SQL", "Tableau"],
    github: "https://github.com/anula513/job-market-analytics",
    images: [{ src: "/dashboard.png", alt: "Tableau salary dashboard" }],
    sections: [
      {
        heading: "Pipeline",
        list: [
          "Raw CSV dataset",
          "Cleaning in Python",
          "Storage in PostgreSQL",
          "Analysis with SQL queries",
          "Tableau dashboard",
        ],
      },
      {
        heading: "Key insights",
        list: [
          "Executive-level roles earn the highest salaries",
          "Machine learning and data science roles dominate the top-paying jobs",
          "Senior salaries are well above entry and mid level",
        ],
      },
    ],
    extraLinks: [
      {
        label: "SQL queries",
        href: "https://github.com/anula513/job-market-analytics/blob/main/sql/analysis_queries.sql",
      },
    ],
  },
];

export const skillGroups = [
  { label: "AI / LLM", items: ["OpenAI API", "RAG", "Embeddings", "Pinecone", "Structured outputs", "LLM evaluation", "Prompt engineering"] },
  { label: "Languages", items: ["Python", "JavaScript", "Java", "SQL"] },
  { label: "Web & tools", items: ["React", "Streamlit", "Firebase", "Chrome Extensions", "Git", "pytest"] },
  { label: "Data", items: ["PostgreSQL", "Pandas", "Tableau"] },
];

export const getProject = (id) => projects.find((p) => p.id === id);
export const hasCaseStudy = (p) => Boolean(p.sections?.length);
