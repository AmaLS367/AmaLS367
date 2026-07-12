import React from "react";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
  id?: string;
  style?: React.CSSProperties;
};

export function Reveal({ children, delay = 0, className = "", as: Tag = "div", id, style }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as React.RefObject<never>}
      id={id}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
