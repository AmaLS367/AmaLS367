import {
  ArrowUpRight,
  Github,
  GitlabIcon,
  Mail,
  Send,
  Terminal,
  Server,
  Workflow,
  FileText,
  Database,
  MonitorCog,
  Cloud,
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  overview: string;
  highlights: string[];
  stack: string[];
  status: string;
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    name: "TradeMcp",
    tagline: "Trading MCP server",
    description:
      "A Model Context Protocol server exposing trading data and operations to LLM clients with typed tools and safe execution boundaries.",
    tags: ["MCP", "Python", "API"],
    overview:
      "TradeMcp is a Model Context Protocol server that lets LLM clients interact with trading data and broker operations through strictly typed tools. It focuses on safe execution boundaries, predictable schemas, and reproducible responses so an agent can reason about markets without leaking unsafe actions.",
    highlights: [
      "Typed MCP tools for quotes, history, orders, and account state",
      "Safety layer: dry-run mode, allow-lists, and explicit confirmations",
      "Pluggable broker/data adapters behind a single interface",
      "Structured errors and deterministic JSON payloads for agent consumption",
    ],
    stack: ["Python", "MCP", "AsyncIO", "Pydantic", "REST"],
    status: "Active",
    links: [{ label: "GitHub", href: "https://github.com/AmaLS367/TradeMcp" }],
  },
  {
    name: "FaceScore",
    tagline: "Face analysis pipeline",
    description:
      "An end-to-end pipeline for facial feature scoring, packaged as a service with deterministic outputs and batch processing.",
    tags: ["CV", "Python", "Service"],
    overview:
      "FaceScore is an end-to-end facial analysis pipeline that turns raw images into deterministic, structured scores. It is packaged as a service with batch processing, so the same input always produces the same output and large datasets can be processed without manual steps.",
    highlights: [
      "Deterministic scoring with versioned models and configs",
      "Batch and single-image modes over a clean HTTP API",
      "Pre-processing pipeline: detection, alignment, normalization",
      "Structured JSON output suitable for downstream analytics",
    ],
    stack: ["Python", "OpenCV", "ONNX", "FastAPI", "Docker"],
    status: "Active",
    links: [{ label: "GitHub", href: "https://github.com/AmaLS367/FaceScore" }],
  },
  {
    name: "Factoria",
    tagline: "Modular automation factory",
    description:
      "A workflow engine that chains data sources, transforms, and actions into reusable production-ready automations.",
    tags: ["Automation", "Workers", "Queues"],
    overview:
      "Factoria is a modular automation engine. Workflows are composed from small, reusable building blocks — sources, transforms, and actions — and executed by background workers backed by a queue, so automations behave the same in development and production.",
    highlights: [
      "Composable nodes: sources, transforms, and side-effect actions",
      "Queue-backed execution with retries and idempotency keys",
      "Declarative workflow definitions, easy to version and review",
      "Observability hooks: per-run logs, status, and metrics",
    ],
    stack: ["Python", "Redis", "PostgreSQL", "Workers", "Docker"],
    status: "Active",
    links: [{ label: "GitLab", href: "https://gitlab.com/AmaLS367/factoria" }],
  },
  {
    name: "AmoDocsEngine",
    tagline: "Document generation engine",
    description:
      "Template-driven document engine producing structured contracts, invoices, and reports from typed payloads.",
    tags: ["Docs", "Templating", "PDF"],
    overview:
      "AmoDocsEngine turns typed payloads into polished documents — contracts, invoices, reports — using reusable templates. It separates content from presentation so the same data can be rendered into different formats without rewriting business logic.",
    highlights: [
      "Typed payload → template → document, with strict validation",
      "PDF and DOCX outputs from a single template definition",
      "Reusable partials for headers, footers, and signature blocks",
      "Deterministic rendering suitable for legal and financial docs",
    ],
    stack: ["Python", "Jinja2", "WeasyPrint", "DOCX", "Pydantic"],
    status: "Active",
    links: [{ label: "GitHub", href: "https://github.com/AmaLS367/AmoDocsEngine" }],
  },
  {
    name: "AmaNotify",
    tagline: "Self-hosted notification hub",
    description:
      "Lightweight self-hosted notification platform with channel adapters, queues, and a clean HTTP API.",
    tags: ["Self-hosted", "API", "Realtime"],
    overview:
      "AmaNotify is a lightweight, self-hosted notification hub. Applications push events to a single HTTP API and AmaNotify fans them out to the right channels — email, Telegram, webhooks — with queueing, retries, and per-channel rate limits.",
    highlights: [
      "One HTTP API, many channels via pluggable adapters",
      "Queue-backed delivery with retries and dead-letter handling",
      "Per-channel rate limits and quiet hours",
      "Runs anywhere Docker runs — no third-party SaaS required",
    ],
    stack: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker"],
    status: "Active",
    links: [{ label: "GitHub", href: "https://github.com/AmaLS367/AmaNotify" }],
  },
  {
    name: "TestizerFunnelEngine",
    tagline: "Quiz & funnel engine",
    description:
      "Configurable engine for building interactive quizzes and lead funnels with branching logic, scoring, and result delivery.",
    tags: ["Funnel", "Quiz", "Engine"],
    overview:
      "TestizerFunnelEngine is a configurable engine for building interactive quizzes and conversion funnels. Flows are defined as data — steps, branches, scoring rules, and outcomes — so new funnels can be launched without rewriting application code.",
    highlights: [
      "Declarative step + branching logic, versionable as config",
      "Scoring and segmentation to route users to tailored results",
      "Pluggable result delivery: email, webhook, or downstream API",
      "Clean separation between engine, content, and presentation",
    ],
    stack: ["TypeScript", "Node.js", "REST", "JSON Schema"],
    status: "Active",
    links: [{ label: "GitHub", href: "https://github.com/AmaLS367/TestizerFunnelEngine" }],
  },
];

const stack = [
  { icon: Server, label: "Backend", items: ["Python", "Node.js", "FastAPI", "Express", "REST", "WebSockets"] },
  { icon: Workflow, label: "Automation", items: ["Workers", "Queues", "Schedulers", "MCP", "Scripting"] },
  { icon: MonitorCog, label: "Desktop", items: ["Electron", "Tauri", "PyQt", "Native bridges"] },
  { icon: FileText, label: "Documents", items: ["Templating", "PDF", "DOCX", "Parsing"] },
  { icon: Database, label: "Data", items: ["PostgreSQL", "SQLite", "Redis", "ETL"] },
  { icon: Cloud, label: "Infra", items: ["Docker", "Linux", "Nginx", "Self-hosting", "CI/CD"] },
];

const contacts = [
  { icon: Github, label: "GitHub", value: "AmaLS367", href: "https://github.com/AmaLS367" },
  { icon: GitlabIcon, label: "GitLab", value: "AmaLS367", href: "https://gitlab.com/AmaLS367" },
  { icon: Mail, label: "Email", value: "amalsdev367@gmail.com", href: "mailto:amalsdev367@gmail.com" },
  { icon: Send, label: "Telegram", value: "@Amanel0", href: "https://t.me/Amanel0" },
];

const Index = () => {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container flex h-14 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm">
            <span className="text-primary">~/</span>
            <span className="font-semibold">amals367</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <nav className="hidden gap-7 font-mono text-xs text-muted-foreground md:flex">
            <a href="#projects" className="transition-colors hover:text-foreground">./projects</a>
            <a href="#stack" className="transition-colors hover:text-foreground">./stack</a>
            <a href="#contact" className="transition-colors hover:text-foreground">./contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary transition-all hover:bg-primary/20 hover:shadow-[var(--shadow-glow)] sm:inline-block"
          >
            get in touch →
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
          <div className="container relative py-24 md:py-36">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span>status: open to interesting problems</span>
              </div>

              <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                Backend, automation, and{" "}
                <span className="text-gradient">desktop tools</span> developer.
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                I build practical systems for real workflows: APIs, automations,
                desktop tools, document engines, data tools, and self-hosted
                platforms.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
                >
                  view projects
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-2.5 font-mono text-sm transition-colors hover:border-primary/40 hover:text-primary"
                >
                  contact
                </a>
              </div>

              {/* Terminal block */}
              <div className="mt-14 overflow-hidden rounded-xl border border-border card-surface">
                <div className="flex items-center gap-2 border-b border-border/80 bg-secondary/50 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <span className="ml-2 font-mono text-xs text-muted-foreground">~/amals367 — zsh</span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
{`> whoami
`}<span className="text-primary">amals367</span>{`
> cat focus.txt
`}<span className="text-foreground">backend · automation · desktop tools · docs · data · self-hosted</span>{`
> ls projects/
`}<span className="text-accent">TradeMcp  FaceScore  Factoria  AmoDocsEngine  AmaNotify  TestizerFunnelEngine</span>{`
> echo $available`}
                  <span className="terminal-cursor"> true</span>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container py-24">
          <SectionHeader prompt="ls" title="Featured projects" subtitle="A selection of systems and tools I’ve built and maintain." />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setOpenProject(p)}
                aria-label={`Open details for ${p.name}`}
                className="group relative flex flex-col rounded-xl border border-border card-surface p-6 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="font-mono text-lg font-semibold tracking-tight text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-primary/90">{p.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="border-y border-border/60 bg-card/30">
          <div className="container py-24">
            <SectionHeader prompt="stack" title="Tech stack" subtitle="The tools I reach for to ship reliable systems." />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stack.map(({ icon: Icon, label, items }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border card-surface p-6 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-mono text-sm font-semibold uppercase tracking-wider">{label}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {items.map((it) => (
                      <li
                        key={it}
                        className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container py-24">
          <SectionHeader prompt="contact" title="Get in touch" subtitle="Best ways to reach me. I usually respond within a day." />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="group flex items-center justify-between rounded-xl border border-border card-surface p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/60 text-primary group-hover:bg-primary/10">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {label}
                    </div>
                    <div className="mt-0.5 font-mono text-sm text-foreground">{value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="container flex flex-col items-start justify-between gap-4 py-10 font-mono text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5 text-primary" />
            <span>© {new Date().getFullYear()} AmaLS367 — built with care.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/AmaLS367" target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-foreground">github</a>
            <a href="https://gitlab.com/AmaLS367" target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-foreground">gitlab</a>
            <a href="https://t.me/Amanel0" target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-foreground">telegram</a>
            <a href="mailto:amalsdev367@gmail.com" className="transition-colors hover:text-foreground">email</a>
          </div>
        </div>
      </footer>

      <Dialog open={openProject !== null} onOpenChange={(o) => !o && setOpenProject(null)}>
        <DialogContent className="max-w-2xl border-border card-surface">
          {openProject && (
            <>
              <DialogHeader>
                <div className="font-mono text-xs text-primary">
                  <span className="text-muted-foreground">$</span> cat projects/{openProject.name.toLowerCase()}.md
                </div>
                <DialogTitle className="mt-2 font-mono text-2xl tracking-tight">
                  {openProject.name}
                </DialogTitle>
                <DialogDescription className="text-primary/90">
                  {openProject.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2 space-y-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {openProject.overview}
                </p>

                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Highlights
                  </div>
                  <ul className="mt-3 space-y-2">
                    {openProject.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-foreground/90">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Stack
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {openProject.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-secondary/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 border-t border-border/60 pt-5">
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary">
                    status: {openProject.status.toLowerCase()}
                  </span>
                  <div className="ml-auto flex flex-wrap gap-2">
                    {openProject.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-card/60 px-3 py-1.5 font-mono text-xs transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const SectionHeader = ({
  prompt,
  title,
  subtitle,
}: {
  prompt: string;
  title: string;
  subtitle: string;
}) => (
  <div className="max-w-2xl">
    <div className="font-mono text-xs text-primary">
      <span className="text-muted-foreground">$</span> {prompt}
    </div>
    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>
  </div>
);

export default Index;
