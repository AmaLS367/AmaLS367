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
    expect(execCommand("")).toHaveLength(0);
  });

  it("unknown command returns error line", () => {
    const result = execCommand("foobar");
    expect(result[0].text).toMatch(/command not found/);
  });

  it("help returns lines with COMMANDS header", () => {
    const result = execCommand("help");
    expect(result[0].text).toBe("COMMANDS");
  });

  it("whoami returns developer tagline", () => {
    const result = execCommand("whoami");
    expect(result[0].text).toBe("amals367");
  });

  it("cat with known project returns project name as first line", () => {
    const result = execCommand("cat trademcp");
    expect(result[0].text).toBe("TradeMcp");
  });

  it("cat with unknown project returns error", () => {
    const result = execCommand("cat notaproject");
    expect(result[0].text).toMatch(/no such project/);
  });

  it("case with known project returns case study sections", () => {
    const result = execCommand("case facescore");
    const texts = result.map((l) => l.text);
    expect(texts).toContain("problem");
    expect(texts).toContain("solution");
    expect(texts).toContain("result");
  });

  it("hire returns telegram and email", () => {
    const result = execCommand("hire");
    const combined = result.map((l) => l.text).join(" ");
    expect(combined).toMatch(/telegram/i);
    expect(combined).toMatch(/email/i);
  });

  it("services lists all services", () => {
    const result = execCommand("services");
    const matchedServices = result
      .map((l) => l.text.trim())
      .filter((text) => servicesData.some((s) => s.name === text));
    expect(matchedServices).toHaveLength(servicesData.length);
  });

  it("ls projects lists all project names", () => {
    const result = execCommand("ls projects");
    expect(result[0].text).toMatch(/TradeMcp/);
  });

  it("clear returns empty array", () => {
    expect(execCommand("clear")).toHaveLength(0);
  });

  it("sudo returns permission denied", () => {
    const result = execCommand("sudo rm -rf /");
    expect(result[0].text).toMatch(/permission denied/);
  });
});
