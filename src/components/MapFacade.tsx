"use client";

import { useState } from "react";
import { restaurant } from "@/data/restaurant";

/**
 * Karten-Facade: lädt die Google-Maps-Einbettung erst nach Klick
 * (Performance & Datenschutz — kein Google-Request beim Seitenaufruf).
 */
export default function MapFacade() {
  const [loaded, setLoaded] = useState(false);
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    restaurant.mapQuery,
  )}&z=15&output=embed`;

  return (
    <div className="relative h-56 overflow-hidden rounded-2xl border border-cream-200">
      {loaded ? (
        <iframe
          title={`Karte: ${restaurant.name}, ${restaurant.address.street}`}
          src={src}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-cream-100 bg-[radial-gradient(circle_at_1px_1px,rgba(109,99,85,0.18)_1px,transparent_0)] [background-size:16px_16px] transition-colors hover:bg-cream-200"
        >
          <span className="text-4xl" aria-hidden>
            🗺️
          </span>
          <span className="font-display font-bold text-ink">Karte laden</span>
          <span className="text-xs text-ink-soft">
            Google Maps · lädt erst auf Klick
          </span>
        </button>
      )}
    </div>
  );
}
