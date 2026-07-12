import React from "react";

interface StatusBarProps {
  clockFormat: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({ clockFormat }) => {
  return (
    <footer className="font-mono" style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 50, height: "30px", display: "flex", alignItems: "stretch", fontSize: "11.5px", background: "var(--bg-card2)", borderTop: "1px solid var(--line-2)" }}>
      <span style={{ display: "flex", alignItems: "center", padding: "0 12px", background: "var(--c1)", color: "var(--bg)", fontWeight: 700, letterSpacing: ".08em" }}>NORMAL</span>
      <span style={{ display: "flex", alignItems: "center", padding: "0 12px", color: "var(--tx-mid)" }}>~/portfolio</span>
      <span style={{ flex: 1 }}></span>
      <span style={{ display: "flex", alignItems: "center", padding: "0 12px", color: "var(--tx-dim)" }}>utf-8</span>
      <span style={{ display: "flex", alignItems: "center", padding: "0 12px", color: "var(--tx-dim)" }}>© {new Date().getFullYear()} AmaLS367</span>
      <span style={{ display: "flex", alignItems: "center", padding: "0 12px", background: "var(--c2)", color: "var(--bg)", fontWeight: 700 }}>◷ {clockFormat}</span>
    </footer>
  );
};
