"use client";

import { useEffect, useRef, useState } from "react";
import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const barRef = useRef<HTMLUListElement>(null);

  // Scroll-Spy: aktive Kategorie = die letzte, deren Anfang oberhalb der
  // Sticky-Leisten liegt.
  useEffect(() => {
    const LINE = 150;
    const onScroll = () => {
      let current = menu[0].id;
      for (const c of menu) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= LINE) current = c.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Aktiven Chip in der Leiste sichtbar halten.
  useEffect(() => {
    const chip = barRef.current?.querySelector<HTMLElement>(
      `[data-chip="${active}"]`,
    );
    chip?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [active]);

  return (
    <section id="speisekarte" aria-label="Speisekarte" className="bg-cream-50">
      {/* Sticky Kategorie-Chips (Text, kein Emoji) */}
      <nav
        aria-label="Kategorien"
        className="sticky top-[49px] z-40 border-b border-cream-200 bg-cream-50/95 backdrop-blur"
      >
        <ul
          ref={barRef}
          className="no-scrollbar mx-auto flex max-w-2xl gap-1 overflow-x-auto px-4 py-2.5"
        >
          {menu.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                data-chip={c.id}
                aria-current={active === c.id ? "true" : undefined}
                className={`block whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors ${
                  active === c.id
                    ? "bg-aegean-600 text-cream-50"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-2xl px-5 pt-4 pb-14">
        {menu.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            aria-label={cat.title}
            className="scroll-mt-28 pt-10"
          >
            <header className="mb-5">
              <h2 className="font-display text-[1.7rem] font-extrabold leading-tight text-aegean-900">
                {cat.title}
              </h2>
              <p className="mt-0.5 text-sm italic text-ink-soft">
                {cat.subtitle}
              </p>
            </header>

            <ul className="flex flex-col gap-5">
              {cat.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-display text-lg font-bold text-ink">
                      {item.name}
                    </h3>
                    {item.bestseller && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-ember-600">
                        ★ beliebt
                      </span>
                    )}
                    <span
                      aria-hidden
                      className="mx-1 flex-1 translate-y-[-0.15em] border-b border-dotted border-cream-300"
                    />
                    <span className="tnum shrink-0 font-display text-lg font-bold text-aegean-700">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-1 max-w-prose text-[15px] leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-olive-600">
                      {item.tags.join(" · ")}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            {/* EIN Sammel-CTA je Kategorie — kein Button pro Gericht */}
            <a
              href={restaurant.foodoraUrl}
              className="mt-6 inline-flex items-center gap-1.5 font-bold text-aegean-600 underline-offset-4 hover:underline"
            >
              {cat.title} bei Foodora bestellen
              <span aria-hidden>→</span>
            </a>
          </section>
        ))}

        <p className="mt-12 border-t border-cream-200 pt-6 text-center text-sm text-ink-soft">
          Alle Preise inkl. MwSt. Fragen zu Allergenen? Ruf uns an oder frag am
          Tresen.
        </p>
      </div>
    </section>
  );
}
