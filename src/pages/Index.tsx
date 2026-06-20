import React, { useState, useEffect } from "react";
import { stackData } from "@/data/stack";
import { contactsData } from "@/data/contacts";
import { themes, type ThemeName } from "@/data/theme";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { TerminalWidget } from "@/components/Terminal/TerminalWidget";
import { ProjectsSection } from "@/components/Projects/ProjectsSection";

const Index = () => {
  const [accent, setAccent] = useState<ThemeName>(() => {
    try {
      const saved = localStorage.getItem("amadev_accent");
      if (saved === "amber" || saved === "cyan" || saved === "green" || saved === "mono") {
        return saved as ThemeName;
      }
    } catch (e) {}
    return "amber";
  });

  const handleSetAccent = (themeName: ThemeName) => {
    try {
      localStorage.setItem("amadev_accent", themeName);
    } catch (e) {}
    setAccent(themeName);
  };

  const [now, setNow] = useState(Date.now());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatClock = () => {
    const t = new Date(now);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
  };

  const activeThemeColors = themes[accent] || themes.amber;
  const c1 = activeThemeColors[0];
  const c2 = activeThemeColors[1];

  return (
    <div
      style={{
        "--c1": c1,
        "--c2": c2,
        minHeight: "100vh",
        paddingBottom: "46px",
        background: "radial-gradient(ellipse 90% 50% at 50% -10%, rgba(255,138,61,.10), transparent 60%), #0a0805",
        color: "#ece0cf",
        fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: "15px",
        lineHeight: "1.65",
        WebkitFontSmoothing: "antialiased"
      } as React.CSSProperties}
    >
      {/* Scanlines overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 80,
          pointerEvents: "none",
          background: "repeating-linear-gradient(0deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,.16) 3px, rgba(0,0,0,0) 4px)",
          mixBlendMode: "multiply"
        }}
      />

      {/* Multiplexer top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          borderBottom: "1px solid #271d12",
          background: "rgba(10,8,5,.85)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)"
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 20px", height: "44px", display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{ display: "flex", gap: "7px", flex: "none" }}>
            <span style={{ width: "11px", height: "11px", borderRadius: "999px", background: "#ff5f56" }}></span>
            <span style={{ width: "11px", height: "11px", borderRadius: "999px", background: "#ffbd2e" }}></span>
            <span style={{ width: "11px", height: "11px", borderRadius: "999px", background: "var(--c1)" }}></span>
          </div>
          <div style={{ display: "flex", gap: "2px", flex: 1, minWidth: 0, overflow: "hidden" }}>
            <a href="#top" style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: "6px", padding: "5px 13px", fontSize: "12.5px", textDecoration: "none", color: "#0a0805", background: "var(--c1)", borderRadius: "5px 5px 0 0" }}>● ama.dev</a>
            <a href="#services" className="text-[#8a7a63] hover:text-[#ece0cf] transition-colors" style={{ flex: "none", padding: "5px 13px", fontSize: "12.5px", textDecoration: "none" }}>services</a>
            <a href="#projects" className="text-[#8a7a63] hover:text-[#ece0cf] transition-colors" style={{ flex: "none", padding: "5px 13px", fontSize: "12.5px", textDecoration: "none" }}>projects</a>
            <a href="#stack" className="text-[#8a7a63] hover:text-[#ece0cf] transition-colors" style={{ flex: "none", padding: "5px 13px", fontSize: "12.5px", textDecoration: "none" }}>stack</a>
            <a href="#contact" className="text-[#8a7a63] hover:text-[#ece0cf] transition-colors" style={{ flex: "none", padding: "5px 13px", fontSize: "12.5px", textDecoration: "none" }}>contact</a>
          </div>
          <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "7px" }} title="theme">
            {(["amber", "cyan", "green", "mono"] as const).map(name => {
              const accentColors = themes[name];
              const isSelected = accent === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleSetAccent(name)}
                  aria-label={name}
                  style={{
                    width: "14px",
                    height: "14px",
                    padding: 0,
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    background: accentColors[0],
                    boxShadow: isSelected ? `0 0 0 2px #0a0805, 0 0 0 3px ${accentColors[0]}` : "none"
                  }}
                />
              );
            })}
          </div>
          <span style={{ flex: "none", fontSize: "12px", color: "#5f5240" }}>◷ {formatClock()}</span>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section style={{ maxWidth: "1120px", margin: "0 auto", padding: "54px 20px 36px" }}>
          <div style={{ display: "flex", gap: "22px" }}>
            {/* gutter */}
            <div aria-hidden="true" style={{ flex: "none", width: "34px", textAlign: "right", paddingTop: "6px", fontSize: "12px", color: "#3f3422", lineHeight: 1.9, userSelect: "none" }}>
              01<br />02<br />03<br />04<br />05<br />06<br />07
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "9px", border: "1px solid #2c2114", background: "rgba(20,15,8,.6)", padding: "5px 13px", borderRadius: "5px", fontSize: "12px", color: "#a8927a", marginBottom: "24px" }}>
                <span style={{ position: "relative", display: "inline-flex", width: "8px", height: "8px" }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "999px", background: "var(--c2)", opacity: 0.7, animation: "ping 1.6s cubic-bezier(0,0,.2,1) infinite" }}></span>
                  <span style={{ position: "relative", width: "8px", height: "8px", borderRadius: "999px", background: "var(--c2)" }}></span>
                </span>
                status: open to interesting problems
              </div>

              <h1 style={{ margin: 0, fontSize: "clamp(30px,5vw,52px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-.02em", color: "#fff4e2", maxWidth: "18ch" }}>
                Backend, automation &amp; <span style={{ color: "var(--c1)", textShadow: "0 0 28px rgba(255,190,92,.4)" }}>desktop tools</span> developer.
              </h1>
              <p style={{ margin: "22px 0 0", maxWidth: "62ch", color: "#a8927a", fontSize: "15px" }}>I build practical systems for real workflows: APIs, automations, desktop tools, document engines, data tools, and self-hosted platforms.</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "28px" }}>
                <a
                  href="mailto:amalsdev367@gmail.com"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    padding: "10px 20px", borderRadius: "7px",
                    background: "var(--c1)", color: "#0a0805",
                    fontWeight: 700, fontSize: "14px", textDecoration: "none",
                    letterSpacing: ".01em"
                  }}
                >
                  Hire me ↗
                </a>
                <a
                  href="https://t.me/Amanel0"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    padding: "10px 20px", borderRadius: "7px",
                    border: "1px solid #2c2114", background: "rgba(20,15,8,.6)",
                    color: "#ece0cf", fontSize: "14px", textDecoration: "none"
                  }}
                >
                  Telegram
                </a>
                <a
                  href="mailto:amalsdev367@gmail.com"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    padding: "10px 20px", borderRadius: "7px",
                    border: "1px solid #2c2114", background: "rgba(20,15,8,.6)",
                    color: "#ece0cf", fontSize: "14px", textDecoration: "none"
                  }}
                >
                  Email
                </a>
                <a
                  href="https://github.com/AmaLS367"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    padding: "10px 20px", borderRadius: "7px",
                    border: "1px solid #2c2114", background: "rgba(20,15,8,.6)",
                    color: "#ece0cf", fontSize: "14px", textDecoration: "none"
                  }}
                >
                  GitHub
                </a>
              </div>

              <TerminalWidget />
              <div style={{ marginTop: "13px", fontSize: "12px", color: "#6b5b45" }}>
                tip: try <span style={{ color: "var(--c2)" }}>help</span>, <span style={{ color: "var(--c2)" }}>ls projects</span>, <span style={{ color: "var(--c2)" }}>case trademcp</span>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <ProjectsSection />

        {/* Stack: file tree */}
        <section id="stack" style={{ borderTop: "1px solid #1e160d", background: "rgba(15,11,6,.5)" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "48px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--c1)", marginBottom: "8px" }}>
              <span style={{ color: "#5f5240" }}>┌─[</span><span>stack</span><span style={{ color: "#5f5240" }}>]</span>
              <span style={{ flex: 1, height: "1px", background: "#271d12" }}></span>
              <span style={{ color: "#5f5240" }}>tree</span>
            </div>
            <h2 style={{ margin: "0 0 2px", fontSize: "clamp(23px,3.2vw,32px)", fontWeight: 800, letterSpacing: "-.02em", color: "#fff4e2" }}>Tech stack</h2>
            <p style={{ margin: "8px 0 0", color: "#a8927a", fontSize: "14px" }}>The tools I reach for to ship reliable systems.</p>

            <div style={{ marginTop: "24px", display: "grid", gap: "18px", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}>
              {stackData.map(g => (
                <div key={g.label} style={{ border: "1px solid #2c2114", borderRadius: "10px", background: "linear-gradient(180deg,#120d08,#0c0905)", padding: "18px 20px" }}>
                  <div style={{ color: "var(--c1)", fontSize: "13.5px" }}><span style={{ color: "#6b5b45" }}>▸</span> {g.label.toLowerCase()}/</div>
                  <div style={{ marginTop: "10px" }}>
                    {g.items.map((it, idx) => {
                      const prefix = idx === g.items.length - 1 ? "└─ " : "├─ ";
                      return (
                        <div key={it} style={{ fontSize: "13px", color: "#a8927a", lineHeight: 1.85 }}>
                          <span style={{ color: "#5f5240" }}>{prefix}</span>{it}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact: config block */}
        <section id="contact" style={{ maxWidth: "1120px", margin: "0 auto", padding: "48px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--c1)", marginBottom: "8px" }}>
            <span style={{ color: "#5f5240" }}>┌─[</span><span>contact</span><span style={{ color: "#5f5240" }}>]</span>
            <span style={{ flex: 1, height: "1px", background: "#271d12" }}></span>
            <span style={{ color: "#5f5240" }}>contact.toml</span>
          </div>
          <h2 style={{ margin: "0 0 2px", fontSize: "clamp(23px,3.2vw,32px)", fontWeight: 800, letterSpacing: "-.02em", color: "#fff4e2" }}>Get in touch</h2>
          <p style={{ margin: "8px 0 0", color: "#a8927a", fontSize: "14px" }}>Best ways to reach me. I usually respond within a day.</p>

          <div style={{ marginTop: "24px", border: "1px solid #2c2114", borderRadius: "10px", overflow: "hidden", background: "linear-gradient(180deg,#120d08,#0c0905)" }}>
            <div style={{ padding: "11px 18px", fontSize: "12px", color: "#6b5b45", borderBottom: "1px solid #271d12" }}>[reach]</div>
            {contactsData.map(c => (
              <a
                key={c.key}
                href={c.href}
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr auto",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 18px",
                  textDecoration: "none",
                  borderBottom: "1px solid #1e160d",
                  transition: "background .12s ease"
                }}
                className="hover:bg-[rgba(255,190,92,.05)]"
              >
                <span style={{ color: "#8a7a63", fontSize: "13px" }}>{c.key}</span>
                <span style={{ color: "#fff4e2", fontSize: "14px" }}><span style={{ color: "#5f5240" }}>= </span>{c.value}</span>
                <span style={{ color: "var(--c2)", fontSize: "15px" }}>↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* vim-style status bar */}
      <footer style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 50, height: "30px", display: "flex", alignItems: "stretch", fontSize: "11.5px", background: "#0c0905", borderTop: "1px solid #271d12" }}>
        <span style={{ display: "flex", alignItems: "center", padding: "0 12px", background: "var(--c1)", color: "#0a0805", fontWeight: 700, letterSpacing: ".08em" }}>NORMAL</span>
        <span style={{ display: "flex", alignItems: "center", padding: "0 12px", color: "#8a7a63" }}>~/portfolio</span>
        <span style={{ flex: 1 }}></span>
        <span style={{ display: "flex", alignItems: "center", padding: "0 12px", color: "#6b5b45" }}>utf-8</span>
        <span style={{ display: "flex", alignItems: "center", padding: "0 12px", color: "#6b5b45" }}>© {new Date().getFullYear()} AmaLS367</span>
        <span style={{ display: "flex", alignItems: "center", padding: "0 12px", background: "var(--c2)", color: "#0a0805", fontWeight: 700 }}>◷ {formatClock()}</span>
      </footer>
    </div>
  );
};

export default Index;
