import { useState, useMemo } from "react";
import { projectsData } from "@/data/projects";
import { C } from "@/data/theme";

const FILTER_TAGS = ["All", "Backend", "Automation", "Desktop", "AI", "CRM", "Documents"] as const;
type FilterTag = typeof FILTER_TAGS[number];

export function ProjectsSection() {
  const [openName, setOpenName] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterTag>("All");

  const filtered = useMemo(() =>
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(activeFilter)),
    [activeFilter]
  );

  return (
    <section id="projects" style={{ maxWidth: "1120px", margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--c1)", marginBottom: "8px" }}>
        <span style={{ color: "#5f5240" }}>┌─[</span><span>projects</span><span style={{ color: "#5f5240" }}>]</span>
        <span style={{ flex: 1, height: "1px", background: "#271d12" }}></span>
        <span style={{ color: "#5f5240" }}>{filtered.length} dirs</span>
      </div>
      <h2 style={{ margin: "0 0 2px", fontSize: "clamp(23px,3.2vw,32px)", fontWeight: 800, letterSpacing: "-.02em", color: "#fff4e2" }}>
        Featured projects
      </h2>
      <p style={{ margin: "8px 0 0", color: "#a8927a", fontSize: "14px" }}>
        Click a row to expand. <span style={{ color: "#6b5b45" }}>$ ls -la ~/portfolio</span>
      </p>

      {/* Filter bar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "18px" }}>
        {FILTER_TAGS.map((tag) => {
          const isActive = activeFilter === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => { setActiveFilter(tag); setOpenName(null); }}
              style={{
                padding: "4px 12px",
                borderRadius: "5px",
                border: isActive ? "1px solid var(--c1)" : "1px solid #2c2114",
                background: isActive ? "rgba(255,190,92,.12)" : "rgba(10,8,5,.6)",
                color: isActive ? "var(--c1)" : "#8a7a63",
                fontSize: "12px",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all .12s ease"
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: "16px", border: "1px solid #2c2114", borderRadius: "10px", overflow: "hidden", background: "linear-gradient(180deg,#120d08,#0c0905)" }}>
        <div style={{ padding: "9px 18px", fontSize: "12px", color: "#6b5b45", borderBottom: "1px solid #271d12" }}>
          total {filtered.length}
        </div>

        {filtered.length === 0 && (
          <div style={{ padding: "24px 18px", color: "#5f5240", fontSize: "13px" }}>
            no projects match this filter.
          </div>
        )}

        {filtered.map((p) => {
          const isOpen = openName === p.name;
          return (
            <div key={p.name} style={{ borderBottom: "1px solid #1e160d" }}>
              <button
                type="button"
                onClick={() => setOpenName(isOpen ? null : p.name)}
                style={{
                  width: "100%", textAlign: "left", cursor: "pointer",
                  background: "transparent", border: "none",
                  display: "grid", gridTemplateColumns: "20px 84px 1fr auto",
                  alignItems: "center", gap: "12px", padding: "13px 18px",
                  color: "inherit", fontFamily: "inherit", fontSize: "13.5px",
                  transition: "background .12s ease"
                }}
                className="hover:bg-[rgba(255,190,92,.05)]"
              >
                <span style={{ color: "var(--c2)" }}>{isOpen ? "▾" : "▸"}</span>
                <span style={{ color: "#6b5b45", fontSize: "12px" }}>drwxr-xr-x</span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ color: "#fff4e2", fontWeight: 600 }}>{p.name}</span>
                  <span style={{ color: "#8a7a63" }}>  — {p.tagline}</span>
                </span>
                <span style={{ color: "#6b5b45", fontSize: "12px", whiteSpace: "nowrap" }}>
                  {p.stack[0].toLowerCase()} · {p.status.toLowerCase()}
                </span>
              </button>

              {isOpen && (
                <div style={{ padding: "4px 18px 22px 116px", background: "rgba(255,138,61,.03)" }}>
                  <p style={{ margin: "0 0 16px", color: "#bda88c", fontSize: "13.5px", lineHeight: 1.65, maxWidth: "70ch" }}>
                    {p.overview}
                  </p>
                  <div style={{ fontSize: "12px", color: "var(--c1)", marginBottom: "8px" }}># highlights</div>
                  {p.highlights.map((h) => (
                    <div key={h} style={{ color: "#cdb99c", fontSize: "13px", lineHeight: 1.7 }}>
                      <span style={{ color: "var(--c2)" }}>+</span> {h}
                    </div>
                  ))}
                  <div style={{ marginTop: "12px", fontSize: "12px", color: "#5f5240" }}>
                    tip: <span style={{ color: C.te }}>case {p.name.toLowerCase()}</span> in the terminal for full case study
                  </div>
                  <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {p.stack.map((s) => (
                      <span key={s} style={{ border: "1px solid #2c2114", background: "rgba(10,8,5,.6)", padding: "3px 9px", borderRadius: "5px", fontSize: "11.5px", color: "#a8927a" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{
                      marginTop: "18px", display: "inline-flex", alignItems: "center", gap: "7px",
                      border: "1px solid rgba(255,190,92,.4)", background: "rgba(255,190,92,.08)",
                      color: "var(--c1)", padding: "7px 14px", borderRadius: "6px",
                      fontSize: "12.5px", textDecoration: "none"
                    }}
                    className="hover:bg-[rgba(255,190,92,.16)]"
                  >
                    {p.link.label} ↗
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
