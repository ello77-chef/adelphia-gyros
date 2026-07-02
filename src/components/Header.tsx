"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/data/restaurant";
import Logo from "@/components/Logo";
import PhoneIcon from "@/components/PhoneIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phoneHref = `tel:${restaurant.phone.replace(/\s/g, "")}`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-cream-50/90 backdrop-blur transition-all duration-200 ${
        scrolled ? "border-cream-200 py-1.5" : "border-transparent py-2.5"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4">
        <a
          href="#top"
          className="flex items-center gap-2"
          aria-label="Adelphia Gyros — zur Startseite"
        >
          <Logo size={scrolled ? 38 : 46} />
          <span
            className={`font-display font-extrabold leading-none text-ink transition-all ${
              scrolled ? "text-lg" : "text-xl"
            }`}
          >
            Adelphia
          </span>
        </a>

        <a
          href={phoneHref}
          aria-label={`Anrufen: ${restaurant.phone}`}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-aegean-600 text-white transition-transform active:scale-90"
        >
          <PhoneIcon className="h-[18px] w-[18px]" />
        </a>
      </div>
    </header>
  );
}
