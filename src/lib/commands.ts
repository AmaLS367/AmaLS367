import { projectsData } from "@/data/projects";
import { stackData } from "@/data/stack";
import { contactsData } from "@/data/contacts";
import { servicesData } from "@/data/services";
import { C } from "@/data/theme";

export type TerminalLine = {
  text: string;
  color: string;
  w: string;
  echo: boolean;
};

export function makeLine(text: string, color?: string, w?: string, echo?: boolean): TerminalLine {
  return { text, color: color ?? C.tx, w: w ?? "400", echo: !!echo };
}

export function getBanner(): TerminalLine[] {
  return [
    makeLine("ama.dev", C.cy, "800"),
    makeLine("backend · automation · desktop tools · self-hosted", C.te, "600"),
    makeLine("type 'help' for commands  ·  'cat <project>' to inspect a project", C.mu, "400"),
    makeLine("")
  ];
}

export function execCommand(raw: string): TerminalLine[] {
  const cmd = (raw ?? "").trim();
  if (!cmd) return [];
  const parts = cmd.split(/\s+/);
  const base = parts[0].toLowerCase();
  const arg = parts.slice(1).join(" ").toLowerCase();
  const projectNames = projectsData.map((p) => p.name);

  if (base === "help") {
    return [
      makeLine("COMMANDS", C.cy, "700"),
      makeLine("  help                 show this list"),
      makeLine("  ls [projects]        list sections or projects"),
      makeLine("  whoami               who I am"),
      makeLine("  skills               tech stack summary"),
      makeLine("  services             what I build"),
      makeLine("  cat <project>        show project details"),
      makeLine("  case <project>       show case study (problem → solution → result)"),
      makeLine("  open <project>       open the project repo"),
      makeLine("  hire                 how to hire me"),
      makeLine("  contact              how to reach me"),
      makeLine("  github               open GitHub profile"),
      makeLine("  telegram             open Telegram"),
      makeLine("  clear                clear the screen"),
      makeLine("")
    ];
  }

  if (base === "ls") {
    if (arg.startsWith("project")) return [makeLine(projectNames.join("   "), C.te), makeLine("")];
    return [makeLine("projects/   stack/   services/   contact/   about.txt", C.te), makeLine("")];
  }

  if (base === "whoami" || base === "about" || (base === "cat" && (arg === "about" || arg === "about.txt"))) {
    return [
      makeLine("amals367", C.cy, "700"),
      makeLine("Backend, automation & desktop-tools developer."),
      makeLine("I build practical systems for real workflows: APIs, automations, desktop"),
      makeLine("tools, document engines, data tools, and self-hosted platforms."),
      makeLine("")
    ];
  }

  if (base === "hire") {
    return [
      makeLine("how to hire me", C.cy, "700"),
      makeLine("  telegram:  https://t.me/Amanel0", C.te),
      makeLine("  email:     amalsdev367@gmail.com", C.te),
      makeLine(""),
      makeLine("I'm open to: project work, integrations, automation, document engines,"),
      makeLine("backend APIs, desktop tools, bots, scrapers, and CRM integrations."),
      makeLine("")
    ];
  }

  if (base === "projects") return [makeLine(projectNames.join("   "), C.te), makeLine("")];

  if (base === "skills" || base === "stack") {
    const out: TerminalLine[] = [];
    stackData.forEach((g) => {
      out.push(makeLine(g.label.toUpperCase(), C.cy, "700"));
      out.push(makeLine("  " + g.items.join("  "), C.mu));
    });
    out.push(makeLine(""));
    return out;
  }

  if (base === "services") {
    const out: TerminalLine[] = [makeLine("what I build:", C.cy, "700")];
    servicesData.forEach((s) => {
      out.push(makeLine("  " + s.name, C.te));
      out.push(makeLine("    " + s.description, C.mu));
    });
    out.push(makeLine(""));
    return out;
  }

  if (base === "contact") {
    const out: TerminalLine[] = [makeLine("how to reach me:", C.cy, "700")];
    contactsData.forEach((c) =>
      out.push(makeLine("  " + (c.key + ":").padEnd(10) + c.value + "   " + c.href))
    );
    out.push(makeLine(""));
    return out;
  }

  if (base === "github") {
    return [makeLine("→ https://github.com/AmaLS367", C.te), makeLine("")];
  }

  if (base === "telegram") {
    return [makeLine("→ https://t.me/Amanel0", C.te), makeLine("")];
  }

  if (base === "cat") {
    const p = projectsData.find((x) => x.name.toLowerCase() === arg);
    if (!p) return [makeLine("cat: " + (arg || "?") + ": no such project. try 'ls projects'.", C.red), makeLine("")];
    const out: TerminalLine[] = [
      makeLine(p.name, C.cy, "700"),
      makeLine(p.tagline, C.te),
      makeLine(""),
      makeLine(p.overview),
      makeLine(""),
      makeLine("highlights", C.cy, "700")
    ];
    p.highlights.forEach((h) => out.push(makeLine("  • " + h)));
    out.push(makeLine(""));
    out.push(makeLine("stack:  " + p.stack.join(", "), C.mu));
    out.push(makeLine("status: " + p.status + "   ·   " + p.link.label + ": " + p.link.href, C.mu));
    out.push(makeLine(""));
    return out;
  }

  if (base === "case") {
    const p = projectsData.find((x) => x.name.toLowerCase() === arg);
    if (!p) return [makeLine("case: " + (arg || "?") + ": no such project. try 'ls projects'.", C.red), makeLine("")];
    return [
      makeLine(p.name + " — case study", C.cy, "700"),
      makeLine(""),
      makeLine("problem", C.te, "700"),
      makeLine("  " + p.problem),
      makeLine(""),
      makeLine("solution", C.te, "700"),
      makeLine("  " + p.solution),
      makeLine(""),
      makeLine("result", C.te, "700"),
      makeLine("  " + p.result),
      makeLine(""),
      makeLine("stack:  " + p.stack.join(", "), C.mu),
      makeLine(p.link.label + ":     " + p.link.href, C.mu),
      makeLine("")
    ];
  }

  if (base === "open") {
    const p = projectsData.find((x) => x.name.toLowerCase() === arg);
    if (!p) return [makeLine("open: " + (arg || "?") + ": no such project.", C.red), makeLine("")];
    return [makeLine("opening " + p.name + " → " + p.link.href, C.te), makeLine("")];
  }

  if (base === "echo") return [makeLine(parts.slice(1).join(" ")), makeLine("")];
  if (base === "date") return [makeLine(new Date().toString(), C.mu), makeLine("")];
  if (base === "clear") return [];
  if (base === "banner") return getBanner();
  if (base === "sudo") return [makeLine("nice try. permission denied.", C.am), makeLine("")];

  return [makeLine("command not found: " + base + "  —  type 'help'", C.red), makeLine("")];
}
