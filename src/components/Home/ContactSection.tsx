import React from "react";
import { contactsData } from "@/data/contacts";
import { Reveal } from "@/components/Reveal";

export const ContactSection = () => {
  return (
    <section id="contact">
      <Reveal style={{ maxWidth: "1120px", margin: "0 auto", padding: "96px 20px 72px" }}>
        <div className="font-mono" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--c1)", marginBottom: "8px" }}>
          <span style={{ color: "var(--tx-faint)" }}>┌─[</span><span>contact</span><span style={{ color: "var(--tx-faint)" }}>]</span>
          <span style={{ flex: 1, height: "1px", background: "var(--line-2)" }}></span>
          <span style={{ color: "var(--tx-faint)" }}>contact.toml</span>
        </div>
        <h2 className="font-display" style={{ margin: "0 0 2px", fontSize: "clamp(26px,3.6vw,38px)", fontWeight: 700, letterSpacing: "-.02em", color: "var(--tx-bright)" }}>Get in touch</h2>
        <p style={{ margin: "8px 0 0", color: "var(--tx-body)", fontSize: "14px" }}>Best ways to reach me. I usually respond within a day.</p>

        <div className="card" style={{ marginTop: "28px", overflow: "hidden" }}>
          <div className="font-mono" style={{ padding: "11px 18px", fontSize: "12px", color: "var(--tx-dim)", borderBottom: "1px solid var(--line-2)" }}>[reach]</div>
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
                borderBottom: "1px solid var(--line-1)",
                transition: "background .15s ease"
              }}
              className="hover:bg-[rgba(255,190,92,.05)] font-mono"
            >
              <span style={{ color: "var(--tx-mid)", fontSize: "13px" }}>{c.key}</span>
              <span style={{ color: "var(--tx-bright)", fontSize: "14px" }}><span style={{ color: "var(--tx-faint)" }}>= </span>{c.value}</span>
              <span style={{ color: "var(--c2)", fontSize: "15px" }}>↗</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
