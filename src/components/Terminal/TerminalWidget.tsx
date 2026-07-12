import React, { useState, useEffect, useRef } from "react";
import { execCommand, getBanner, makeLine, type TerminalLine } from "@/lib/commands";

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

    const echo = makeLine(raw, "#ece0cf", "400", true);
    const result = execCommand(raw);

    if (result.action.type === "openUrl") {
      try {
        window.open(result.action.url, "_blank", "noopener");
      } catch (_) {
        // ignore
      }
    }

    setLines((prev) => [...prev, echo, ...result.lines]);
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
      className="font-mono"
      style={{
        position: "relative",
        marginTop: "36px",
        border: "1px solid var(--line-3)",
        borderRadius: "10px",
        overflow: "hidden",
        background: "linear-gradient(180deg,#15100a,#0c0905)",
        boxShadow: "0 0 30px rgba(255,138,61,.15), 0 24px 60px -28px rgba(0,0,0,.85)",
        cursor: "text"
      }}
    >
      <div aria-hidden="true" className="terminal-scanlines" />
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 14px", borderBottom: "1px solid var(--line-3)", background: "rgba(20,15,8,.7)" }}>
        <span style={{ display: "flex", gap: "6px", marginRight: "4px" }}>
          <span style={{ width: "11px", height: "11px", borderRadius: "999px", background: "#ff5f56" }}></span>
          <span style={{ width: "11px", height: "11px", borderRadius: "999px", background: "#ffbd2e" }}></span>
          <span style={{ width: "11px", height: "11px", borderRadius: "999px", background: "var(--c1)" }}></span>
        </span>
        <span style={{ fontSize: "12px", color: "var(--tx-dim)" }}>ama@dev: ~/portfolio — zsh — 80×24</span>
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
