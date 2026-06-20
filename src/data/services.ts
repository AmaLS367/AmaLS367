export type Service = {
  id: string;
  name: string;
  description: string;
  examples: string[];
};

export const servicesData: Service[] = [
  {
    id: "tg-bots",
    name: "Telegram bots",
    description: "Custom bots for notifications, lead capture, CRM integration, and internal automation.",
    examples: ["CRM lead bot", "Order status bot", "Notification relay", "Admin control panel"]
  },
  {
    id: "scrapers",
    name: "Scrapers & parsers",
    description: "Reliable data extractors for any site or structured source, with scheduling and export.",
    examples: ["Price monitoring", "Competitor tracking", "Data aggregation", "PDF/HTML parsing"]
  },
  {
    id: "backend-apis",
    name: "Backend APIs",
    description: "REST and WebSocket APIs with auth, validation, and documented schemas.",
    examples: ["Internal service APIs", "Third-party integrations", "Webhook handlers", "Async job queues"]
  },
  {
    id: "crm-tools",
    name: "CRM & internal tools",
    description: "amoCRM integrations, custom widgets, pipelines, and internal dashboards.",
    examples: ["amoCRM widgets", "Sales pipeline automation", "Internal dashboards", "Data sync scripts"]
  },
  {
    id: "automation",
    name: "Automation scripts",
    description: "Scheduled workers and pipelines that eliminate repetitive manual work.",
    examples: ["Report generation", "Data sync", "File processing", "Scheduled notifications"]
  },
  {
    id: "desktop",
    name: "Desktop tools",
    description: "Cross-platform desktop apps (Tauri/Electron/PyQt) for internal or client use.",
    examples: ["Image processing tools", "Local data managers", "Offline-capable apps", "System tray utilities"]
  },
  {
    id: "documents",
    name: "Document generation",
    description: "Template-driven PDF and DOCX output from your CRM, database, or API.",
    examples: ["Contract generation", "Invoice automation", "Report rendering", "Bulk document export"]
  },
  {
    id: "integrations",
    name: "API integrations",
    description: "Connect your stack to third-party services: payments, messaging, analytics, and more.",
    examples: ["Payment gateways", "Email providers", "Analytics pipelines", "OAuth flows"]
  }
];
