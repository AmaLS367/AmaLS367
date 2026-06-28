import React from "react";
import { stackData } from "@/data/stack";

export const StackSection = () => {
  return (
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
  );
};
