import { describe, it, expect } from "vitest";
import { execCommand, getBanner } from "@/lib/commands";
import { servicesData } from "@/data/services";

describe("getBanner", () => {
  it("returns 4 lines", () => {
    expect(getBanner()).toHaveLength(4);
  });
  it("first line text is ama.dev", () => {
    expect(getBanner()[0].text).toBe("ama.dev");
  });
});

describe("execCommand", () => {
  it("empty input returns empty array", () => {
    expect(execCommand("").lines).toHaveLength(0);
  });

  it("unknown command returns error line", () => {
    const result = execCommand("foobar");
    expect(result.lines[0].text).toMatch(/command not found/);
  });

  it("help returns lines with COMMANDS header", () => {
    const result = execCommand("help");
    expect(result.lines[0].text).toBe("COMMANDS");
  });

  it("whoami returns developer tagline", () => {
    const result = execCommand("whoami");
    expect(result.lines[0].text).toBe("amals367");
  });

  it("cat with known project returns project name as first line", () => {
    const result = execCommand("cat trademcp");
    expect(result.lines[0].text).toBe("TradeMcp");
  });

  it("cat with unknown project returns error", () => {
    const result = execCommand("cat notaproject");
    expect(result.lines[0].text).toMatch(/no such project/);
  });

  it("case with known project returns case study sections", () => {
    const result = execCommand("case facescore");
    const texts = result.lines.map((l) => l.text);
    expect(texts).toContain("problem");
    expect(texts).toContain("solution");
    expect(texts).toContain("result");
  });

  it("hire returns telegram and email", () => {
    const result = execCommand("hire");
    const combined = result.lines.map((l) => l.text).join(" ");
    expect(combined).toMatch(/telegram/i);
    expect(combined).toMatch(/email/i);
  });

  it("services lists all services", () => {
    const result = execCommand("services");
    const printedNames = result.lines
      .filter((l) => l.text.startsWith("  ") && !l.text.startsWith("    "))
      .map((l) => l.text.trim());
    expect(printedNames).toEqual(servicesData.map((s) => s.name));
  });

  it("ls projects lists all project names", () => {
    const result = execCommand("ls projects");
    expect(result.lines[0].text).toMatch(/TradeMcp/);
  });

  it("clear returns empty array", () => {
    expect(execCommand("clear").lines).toHaveLength(0);
  });

  it("sudo returns permission denied", () => {
    const result = execCommand("sudo rm -rf /");
    expect(result.lines[0].text).toMatch(/permission denied/);
  });

  it("github returns openUrl action", () => {
    const result = execCommand("github");
    expect(result.action).toEqual({ type: "openUrl", url: "https://github.com/AmaLS367" });
  });

  it("telegram returns openUrl action", () => {
    const result = execCommand("telegram");
    expect(result.action).toEqual({ type: "openUrl", url: "https://t.me/Amanel0" });
  });

  it("open known project returns openUrl action", () => {
    const result = execCommand("open trademcp");
    expect(result.action).toEqual({ type: "openUrl", url: "https://github.com/AmaLS367/TradeMcp" });
  });

  it("open unknown project returns error", () => {
    const result = execCommand("open notaproject");
    expect(result.action).toEqual({ type: "none" });
    expect(result.lines[0].text).toMatch(/no such project/);
  });
});
