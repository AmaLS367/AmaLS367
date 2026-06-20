export type StackGroup = {
  label: string;
  items: string[];
};

export const stackData: StackGroup[] = [
  { label: "Backend",    items: ["Python", "Node.js", "FastAPI", "Express", "REST", "WebSockets"] },
  { label: "Automation", items: ["Workers", "Queues", "Schedulers", "MCP", "Scripting"] },
  { label: "Desktop",    items: ["Electron", "Tauri", "PyQt", "Native bridges"] },
  { label: "Documents",  items: ["Templating", "PDF", "DOCX", "Parsing"] },
  { label: "Data",       items: ["PostgreSQL", "SQLite", "Redis", "ETL"] },
  { label: "Infra",      items: ["Docker", "Linux", "Nginx", "Self-hosting", "CI/CD"] }
];
