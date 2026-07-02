"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Verzögerung in ms — für gestaffelte Effekte innerhalb einer Reihe. */
  delay?: number;
};

/**
 * Blendet die Kinder sanft ein (fade + hochgleiten), sobald sie beim
 * Scrollen in den sichtbaren Bereich kommen. Bei "prefers-reduced-motion"
 * wird der Inhalt per CSS (.reveal in globals.css) sofort und ohne
 * Bewegung angezeigt.
 */
export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`reveal transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
