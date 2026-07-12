import React from "react";
import { stackData } from "@/data/stack";
import { Reveal } from "@/components/Reveal";

export const StackSection = () => {
  return (
    <section id="stack" style={{ borderTop: "1px solid var(--line-1)", background: "rgba(15,11,6,.5)" }}>
      <Reveal style={{ maxWidth: "1120px", margin: "0 auto", padding: "96px 20px" }}>
        <div className="font-mono" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--c1)", marginBottom: "8px" }}>
          <span style={{ color: "var(--tx-faint)" }}>┌─[</span><span>stack</span><span style={{ color: "var(--tx-faint)" }}>]</span>
          <span style={{ flex: 1, height: "1px", background: "var(--line-2)" }}></span>
          <span style={{ color: "var(--tx-faint)" }}>tree</span>
        </div>
        <h2 className="font-display" style={{ margin: "0 0 2px", fontSize: "clamp(26px,3.6vw,38px)", fontWeight: 700, letterSpacing: "-.02em", color: "var(--tx-bright)" }}>Tech stack</h2>
        <p style={{ margin: "8px 0 0", color: "var(--tx-body)", fontSize: "14px" }}>The tools I reach for to ship reliable systems.</p>

        <div style={{ marginTop: "28px", display: "grid", gap: "18px", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}>
          {stackData.map(g => (
            <div key={g.label} className="card card-hover font-mono" style={{ padding: "18px 20px" }}>
              <div style={{ color: "var(--c1)", fontSize: "13.5px" }}><span style={{ color: "var(--tx-dim)" }}>▸</span> {g.label.toLowerCase()}/</div>
              <div style={{ marginTop: "10px" }}>
                {g.items.map((it, idx) => {
                  const prefix = idx === g.items.length - 1 ? "└─ " : "├─ ";
                  return (
                    <div key={it} style={{ fontSize: "13px", color: "var(--tx-body)", lineHeight: 1.85 }}>
                      <span style={{ color: "var(--tx-faint)" }}>{prefix}</span>{it}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
