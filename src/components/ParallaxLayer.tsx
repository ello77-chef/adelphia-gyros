"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  /** Bewegung relativ zum Scroll: positiv = langsamer/„zurückbleibend". */
  speed?: number;
  className?: string;
  children?: ReactNode;
};

/**
 * Verschiebt sein Element beim Scrollen vertikal für einen Parallax-Effekt.
 * Nutzt requestAnimationFrame und einen passiven Scroll-Listener; bei
 * "prefers-reduced-motion" bleibt alles ruhig.
 */
export default function ParallaxLayer({
  speed = 0.15,
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
