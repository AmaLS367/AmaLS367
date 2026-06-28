import React from "react";
import { TerminalWidget } from "@/components/Terminal/TerminalWidget";

export const HeroSection = () => {
  return (
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
  );
};
