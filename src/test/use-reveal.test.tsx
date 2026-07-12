import { describe, it, expect, afterEach, vi } from "vitest";
import { render, cleanup, act } from "@testing-library/react";
import { Reveal } from "@/components/Reveal";

type IOCallback = (entries: Array<{ isIntersecting: boolean }>) => void;

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("Reveal", () => {
  it("becomes visible immediately when IntersectionObserver is unavailable", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    const { container } = render(<Reveal>content</Reveal>);
    expect(container.firstElementChild).toHaveClass("reveal", "is-visible");
  });

  it("stays hidden until the observer reports intersection", () => {
    let capturedCallback: IOCallback = () => {};
    const observe = vi.fn();
    const disconnect = vi.fn();

    vi.stubGlobal(
      "IntersectionObserver",
      class {
        constructor(cb: IOCallback) {
          capturedCallback = cb;
        }
        observe = observe;
        disconnect = disconnect;
      }
    );

    const { container } = render(<Reveal>content</Reveal>);
    const el = container.firstElementChild;
    expect(el).toHaveClass("reveal");
    expect(el).not.toHaveClass("is-visible");
    expect(observe).toHaveBeenCalledOnce();

    act(() => {
      capturedCallback([{ isIntersecting: true }]);
    });

    expect(el).toHaveClass("is-visible");
    expect(disconnect).toHaveBeenCalled();
  });

  it("applies the stagger delay as transition-delay", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    const { container } = render(<Reveal delay={120}>content</Reveal>);
    expect((container.firstElementChild as HTMLElement).style.transitionDelay).toBe("120ms");
  });
});
