import React from "react";

interface StatusBarProps {
  clockFormat: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({ clockFormat }) => {
  return (
    <footer style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 50, height: "30px", display: "flex", alignItems: "stretch", fontSize: "11.5px", background: "#0c0905", borderTop: "1px solid #271d12" }}>
      <span style={{ display: "flex", alignItems: "center", padding: "0 12px", background: "var(--c1)", color: "#0a0805", fontWeight: 700, letterSpacing: ".08em" }}>NORMAL</span>
      <span style={{ display: "flex", alignItems: "center", padding: "0 12px", color: "#8a7a63" }}>~/portfolio</span>
      <span style={{ flex: 1 }}></span>
      <span style={{ display: "flex", alignItems: "center", padding: "0 12px", color: "#6b5b45" }}>utf-8</span>
      <span style={{ display: "flex", alignItems: "center", padding: "0 12px", color: "#6b5b45" }}>© {new Date().getFullYear()} AmaLS367</span>
      <span style={{ display: "flex", alignItems: "center", padding: "0 12px", background: "var(--c2)", color: "#0a0805", fontWeight: 700 }}>◷ {clockFormat}</span>
    </footer>
  );
};
