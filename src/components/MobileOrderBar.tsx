"use client";

import { useEffect, useRef, useState } from "react";
import { restaurant } from "@/data/restaurant";
import PhoneIcon from "@/components/PhoneIcon";

/**
 * Fixierte Bestell-Leiste in der Daumenzone (bis lg). Blendet sich beim
 * Scrollen nach unten aus, beim Scrollen nach oben wieder ein, und
 * respektiert env(safe-area-inset-bottom).
 */
export default function MobileOrderBar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current + 4;
      const goingUp = y < lastY.current - 4;
      if (y > 160 && goingDown) setHidden(true);
      else if (goingUp || y <= 160) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phoneHref = `tel:${restaurant.phone.replace(/\s/g, "")}`;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 lg:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center gap-3 border-t border-cream-200 bg-cream-50/95 px-4 py-3 shadow-[0_-6px_20px_rgba(38,33,27,0.10)] backdrop-blur">
        <a
          href={phoneHref}
          aria-label={`Anrufen: ${restaurant.phone}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-cream-200 text-aegean-600 transition-transform active:scale-90"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
        <a
          href={restaurant.foodoraUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-aegean-600 px-5 py-3.5 text-center text-lg font-extrabold text-white shadow-lg shadow-aegean-700/25 transition-all active:scale-[0.98]"
        >
          Jetzt bestellen
        </a>
      </div>
    </div>
  );
}
