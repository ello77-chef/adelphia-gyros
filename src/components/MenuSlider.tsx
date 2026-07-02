"use client";

import { useRef } from "react";
import Image from "next/image";
import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

// Alle Gerichte für das Highlights-Karussell zusammenziehen.
const highlights = menu.flatMap((category) =>
  category.items.map((item) => ({ ...item, icon: category.icon })),
);

export default function MenuSlider() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-aegean-400">
              Frisch aus der Küche
            </p>
            <h2 className="mt-2 font-display text-5xl font-extrabold text-aegean-900 sm:text-6xl">
              Beliebt bei unseren Gästen
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Zurück"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-aegean-100 text-2xl text-aegean-600 transition-colors hover:border-aegean-600 hover:bg-aegean-600 hover:text-white"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Weiter"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-aegean-100 text-2xl text-aegean-600 transition-colors hover:border-aegean-600 hover:bg-aegean-600 hover:text-white"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Führungs-Abstand, damit die erste Karte am max-w-6xl-Raster startet */}
        <div className="shrink-0" aria-hidden style={{ width: "max(0px, calc((100vw - 72rem) / 2))" }} />

        {highlights.map((item) => (
          <article
            key={item.name}
            className="group w-64 shrink-0 snap-start overflow-hidden rounded-3xl border border-aegean-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative flex h-40 items-center justify-center overflow-hidden bg-aegean-50">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="256px"
                />
              ) : (
                <span className="text-6xl transition-transform duration-500 group-hover:scale-125">
                  {item.icon}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-aegean-900">
                  {item.name}
                </h3>
                <span className="whitespace-nowrap font-extrabold text-aegean-600">
                  {item.price}
                </span>
              </div>
              <a
                href={restaurant.foodoraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 rounded-full bg-aegean-600 px-4 py-2 text-center text-sm font-bold text-white transition-colors hover:bg-aegean-700"
              >
                Jetzt bestellen
              </a>
            </div>
          </article>
        ))}

        <div className="shrink-0 w-5" aria-hidden />
      </div>
    </section>
  );
}
