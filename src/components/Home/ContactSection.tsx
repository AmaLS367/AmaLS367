import React from "react";
import { contactsData } from "@/data/contacts";

export const ContactSection = () => {
  return (
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
  );
};
