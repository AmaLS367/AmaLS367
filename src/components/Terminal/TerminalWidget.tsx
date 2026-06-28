import React, { useState, useEffect, useRef } from "react";
import { execCommand, getBanner, makeLine, type TerminalLine } from "@/lib/commands";
import { projectsData } from "@/data/projects";

export function TerminalWidget() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>(() => getBanner());
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outRef.current) {
      outRef.current.scrollTop = outRef.current.scrollHeight;
    }
  }, [lines]);

  const handleRunCommand = (raw: string) => {
    const trimmed = raw.trim();

    if (trimmed.toLowerCase() === "clear") {
      setLines([]);
      setInput("");
      if (trimmed) {
        setCommandHistory((prev) => [...prev, trimmed]);
        setHistoryIndex((h) => h + 1);
      }
      return;
    }

    if (trimmed.toLowerCase() === "github") {
      try { window.open("https://github.com/AmaLS367", "_blank", "noopener"); } catch (_) { /* ignore */ }
    }
    if (trimmed.toLowerCase() === "telegram") {
      try { window.open("https://t.me/Amanel0", "_blank", "noopener"); } catch (_) { /* ignore */ }
    }
    if (trimmed.toLowerCase().startsWith("open ")) {
      const arg = trimmed.slice(5).trim().toLowerCase();
      const p = projectsData.find((x) => x.name.toLowerCase() === arg);
      if (p) try { window.open(p.link.href, "_blank", "noopener"); } catch (_) { /* ignore */ }
    }

    const echo = makeLine(raw, "#ece0cf", "400", true);
    const result = execCommand(raw);
    setLines((prev) => [...prev, echo, ...result]);
    setInput("");

    if (trimmed) {
      setCommandHistory((prev) => {
        const next = [...prev, trimmed];
        setHistoryIndex(next.length);
        return next;
      });
    }
  };

  const navigateHistory = (direction: number) => {
    if (!commandHistory.length) return;
    const nextIdx = Math.max(0, Math.min(commandHistory.length, historyIndex + direction));
    setHistoryIndex(nextIdx);
    setInput(nextIdx >= commandHistory.length ? "" : commandHistory[nextIdx]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { e.preventDefault(); handleRunCommand(input); }
    else if (e.key === "ArrowUp") { e.preventDefault(); navigateHistory(-1); }
    else if (e.key === "ArrowDown") { e.preventDefault(); navigateHistory(1); }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{
        marginTop: "36px",
        border: "1px solid #2c2114",
        borderRadius: "10px",
        overflow: "hidden",
        background: "linear-gradient(180deg,#15100a,#0c0905)",
        boxShadow: "0 0 30px rgba(255,138,61,.15), 0 24px 60px -28px rgba(0,0,0,.85)",
        cursor: "text"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 14px", borderBottom: "1px solid #2c2114", background: "rgba(20,15,8,.7)" }}>
        <span style={{ color: "var(--c2)", fontSize: "12px" }}>▌</span>
        <span style={{ fontSize: "12px", color: "#6b5b45" }}>ama@dev: ~/portfolio — zsh — 80×24</span>
      </div>
      <div
        className="term-scroll"
        ref={outRef}
        style={{ height: "330px", overflowY: "auto", padding: "16px 18px 8px", fontSize: "13.5px", lineHeight: 1.6 }}
      >
        {lines.map((ln, idx) => (
          <div
            key={idx}
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", color: ln.color, fontWeight: ln.w }}
          >
            {ln.echo && <span style={{ color: "var(--c1)", fontWeight: 600 }}>ama@dev:~$ </span>}
            {ln.text}
          </div>
        ))}
        <div style={{ display: "flex", alignItems: "center", marginTop: "2px" }}>
          <span style={{ color: "var(--c1)", fontWeight: 600, flex: "none" }}>ama@dev:~${" "}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            placeholder="type 'help'"
            aria-label="terminal input"
            style={{
              flex: 1, minWidth: 0, background: "transparent", border: "none", outline: "none",
              color: "#fff4e2", fontFamily: "inherit", fontSize: "13.5px", caretColor: "var(--c1)"
            }}
          />
        </div>
      </div>
    </div>
  );
}
