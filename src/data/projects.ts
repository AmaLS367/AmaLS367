export type Project = {
  name: string;
  tagline: string;
  tags: string[];
  description: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  highlights: string[];
  stack: string[];
  status: string;
  link: { label: string; href: string };
};

export const projectsData: Project[] = [
  {
    name: "TradeMcp",
    tagline: "Trading MCP server",
    tags: ["Backend", "AI", "MCP", "TypeScript"],
    description: "A Model Context Protocol server exposing trading data and operations to LLM clients with typed tools and safe execution boundaries.",
    overview: "TradeMcp is a Model Context Protocol server that lets LLM clients interact with trading data and broker operations through strictly typed tools. It focuses on safe execution boundaries, predictable schemas, and reproducible responses so an agent can reason about markets without leaking unsafe actions.",
    problem: "LLM clients lack safe, typed interfaces to trading data — raw broker APIs have no schema contract and expose destructive actions without guardrails.",
    solution: "MCP server with strictly typed tool definitions, dry-run mode, allow-list enforcement, and explicit human-confirmation steps before any state-changing operation.",
    result: "Agents can reason about market data and execute approved operations without unsafe broker access; schemas are stable across model upgrades.",
    highlights: [
      "Typed MCP tools for quotes, history, orders, and account state",
      "Safety layer: dry-run mode, allow-lists, and explicit confirmations",
      "Pluggable broker/data adapters behind a single interface",
      "Structured errors and deterministic JSON payloads for agent consumption"
    ],
    stack: ["TypeScript", "React", "Firebase", "CCXT", "MCP"],
    status: "Active",
    link: { label: "GitHub", href: "https://github.com/AmaLS367/TradeMcp" }
  },
  {
    name: "FaceScore",
    tagline: "Face analysis pipeline",
    tags: ["Desktop", "AI", "Tauri", "Rust"],
    description: "An end-to-end pipeline for facial feature scoring, packaged as a service with deterministic outputs and batch processing.",
    overview: "FaceScore is an end-to-end facial analysis pipeline that turns raw images into deterministic, structured scores. It is packaged as a service with batch processing, so the same input always produces the same output and large datasets can be processed without manual steps.",
    problem: "Facial analysis workflows are fragile, non-deterministic, and require manual steps — the same image through different model runs produces different scores.",
    solution: "Desktop pipeline with versioned models and configs, pre-processing (detection, alignment, normalization), and a clean HTTP API for batch submission.",
    result: "Reproducible, auditable scores — same input always yields same output; batch of 500 images processes without manual intervention.",
    highlights: [
      "Deterministic scoring with versioned models and configs",
      "Batch and single-image modes over a clean HTTP API",
      "Pre-processing pipeline: detection, alignment, normalization",
      "Structured JSON output suitable for downstream analytics"
    ],
    stack: ["Tauri", "React", "TypeScript", "Rust", "Claude Vision"],
    status: "Active",
    link: { label: "GitHub", href: "https://github.com/AmaLS367/FaceScore" }
  },
  {
    name: "Factoria",
    tagline: "Modular automation factory",
    tags: ["Backend", "Automation", "Python", "FastAPI"],
    description: "A workflow engine that chains data sources, transforms, and actions into reusable production-ready automations.",
    overview: "Factoria is a modular automation engine. Workflows are composed from small, reusable building blocks — sources, transforms, and actions — and executed by background workers backed by a queue, so automations behave the same in development and production.",
    problem: "Automation workflows written ad hoc break when deployed to production and can't be reused across projects without rewriting.",
    solution: "Composable engine where workflows are declarative config — sources, transforms, side-effect actions — executed by queue-backed workers with retries and idempotency keys.",
    result: "New automations launched from config in minutes; same workflow runs identically in dev and production; failures retry automatically without data loss.",
    highlights: [
      "Composable nodes: sources, transforms, and side-effect actions",
      "Queue-backed execution with retries and idempotency keys",
      "Declarative workflow definitions, easy to version and review",
      "Observability hooks: per-run logs, status, and metrics"
    ],
    stack: ["Python", "FastAPI", "React", "TypeScript", "SQLite", "LLMs"],
    status: "Active",
    link: { label: "GitLab", href: "https://gitlab.com/AmaLS367/factoria" }
  },
  {
    name: "AmoDocsEngine",
    tagline: "Document generation engine",
    tags: ["Documents", "CRM", "PHP", "DOCX"],
    description: "Template-driven document engine producing structured contracts, invoices, and reports from typed payloads.",
    overview: "AmoDocsEngine turns typed payloads into polished documents — contracts, invoices, reports — using reusable templates. It separates content from presentation so the same data can be rendered into different formats without rewriting business logic.",
    problem: "Sales teams manually edit Word templates for every contract and invoice — error-prone, slow, and impossible to audit.",
    solution: "Template-driven engine accepting typed amoCRM payloads; renders to PDF and DOCX from a single template with reusable header/footer/signature partials.",
    result: "Document generation time cut from 15 min to seconds; zero copy-paste errors; output suitable for legal and financial compliance.",
    highlights: [
      "Typed payload → template → document, with strict validation",
      "PDF and DOCX outputs from a single template definition",
      "Reusable partials for headers, footers, and signature blocks",
      "Deterministic rendering suitable for legal and financial docs"
    ],
    stack: ["PHP", "PhpWord", "Composer", "PHPUnit", "amoCRM API"],
    status: "Active",
    link: { label: "GitHub", href: "https://github.com/AmaLS367/AmoDocsEngine" }
  },
  {
    name: "AmaNotify",
    tagline: "Self-hosted notification hub",
    tags: ["Backend", "Node.js", "TypeScript"],
    description: "Lightweight self-hosted notification platform with channel adapters, queues, and a clean HTTP API.",
    overview: "AmaNotify is a lightweight, self-hosted notification hub. Applications push events to a single HTTP API and AmaNotify fans them out to the right channels — email, Telegram, webhooks — with queueing, retries, and per-channel rate limits.",
    problem: "Applications sending notifications via multiple third-party SaaS tools have no unified delivery guarantee, no retry logic, and high external dependency.",
    solution: "Self-hosted hub with a single HTTP API; pluggable adapters for email, Telegram, and webhooks; queue-backed delivery with retries, dead-letter handling, and per-channel rate limits.",
    result: "All notification channels managed in one place; SaaS dependencies replaced with Docker-hosted service; delivery reliability improved with automatic retries.",
    highlights: [
      "One HTTP API, many channels via pluggable adapters",
      "Queue-backed delivery with retries and dead-letter handling",
      "Per-channel rate limits and quiet hours",
      "Runs anywhere Docker runs — no third-party SaaS required"
    ],
    stack: ["Node.js", "TypeScript", "Express", "React", "PostgreSQL", "Redis"],
    status: "Active",
    link: { label: "GitHub", href: "https://github.com/AmaLS367/AmaNotify" }
  },
  {
    name: "TestizerFunnelEngine",
    tagline: "Quiz & funnel engine",
    tags: ["Backend", "Automation", "Python", "MySQL"],
    description: "Configurable engine for building interactive quizzes and lead funnels with branching logic, scoring, and result delivery.",
    overview: "TestizerFunnelEngine is a configurable engine for building interactive quizzes and conversion funnels. Flows are defined as data — steps, branches, scoring rules, and outcomes — so new funnels can be launched without rewriting application code.",
    problem: "Each new quiz or lead funnel required a full development cycle — code changes, deploys, and QA — for what is essentially a content change.",
    solution: "Data-driven flow engine where steps, branches, scoring, and result delivery are declarative config; new funnels launch without touching application code.",
    result: "Marketing team launches new funnels independently; conversion funnels shipped in hours instead of days; A/B test variants defined as config diffs.",
    highlights: [
      "Declarative step + branching logic, versionable as config",
      "Scoring and segmentation to route users to tailored results",
      "Pluggable result delivery: email, webhook, or downstream API",
      "Clean separation between engine, content, and presentation"
    ],
    stack: ["Python", "MySQL", "Brevo API", "Docker", "Pytest"],
    status: "Active",
    link: { label: "GitHub", href: "https://github.com/AmaLS367/TestizerFunnelEngine" }
  }
];
