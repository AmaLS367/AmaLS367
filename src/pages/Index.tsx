import React from "react";
import { themes } from "@/data/theme";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { ProjectsSection } from "@/components/Projects/ProjectsSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { StackSection } from "@/components/Home/StackSection";
import { ContactSection } from "@/components/Home/ContactSection";
import { StatusBar } from "@/components/Home/StatusBar";
import { useAccentTheme } from "@/hooks/useAccentTheme";
import { useClock } from "@/hooks/useClock";

const Index = () => {
  const { accent, handleSetAccent, c1, c2 } = useAccentTheme();
  const { formatClock } = useClock();

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
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
      </main>

      <StatusBar clockFormat={formatClock()} />
    </div>
  );
};

export default Index;
