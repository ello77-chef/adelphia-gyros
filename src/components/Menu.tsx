"use client";

import { useEffect, useRef, useState } from "react";
import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import Pills from "@/components/Pills";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const barRef = useRef<HTMLUListElement>(null);

  // Scroll-Spy: aktive Kategorie = die letzte, deren Anfang oberhalb der
  // Sticky-Leisten liegt.
  useEffect(() => {
    const LINE = 140;
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

  // Aktiven Chip in der horizontalen Leiste sichtbar halten.
  useEffect(() => {
    const chip = barRef.current?.querySelector<HTMLElement>(
      `[data-chip="${active}"]`,
    );
    chip?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [active]);

  return (
    <section id="speisekarte" aria-label="Speisekarte">
      {/* Sticky Kategorie-Chips */}
      <nav
        aria-label="Kategorien"
        className="sticky top-[50px] z-40 border-y border-cream-200 bg-cream-50/95 backdrop-blur"
      >
        <ul
          ref={barRef}
          className="no-scrollbar mx-auto flex max-w-3xl gap-2 overflow-x-auto px-4 py-2.5"
        >
          {menu.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                data-chip={c.id}
                aria-current={active === c.id ? "true" : undefined}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active === c.id
                    ? "bg-ember-500 text-white"
                    : "bg-cream-100 text-ink-soft"
                }`}
              >
                <span aria-hidden>{c.icon}</span>
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-3xl px-4 pb-12 pt-2">
        {menu.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            aria-label={cat.title}
            className="scroll-mt-28 pt-7"
          >
            <h2 className="mb-1 font-display text-2xl font-extrabold text-ink">
              {cat.title}
            </h2>
            <p className="mb-3 text-sm text-ink-soft">{cat.subtitle}</p>

            <ul className="grid gap-3">
              {cat.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={restaurant.foodoraUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-stretch gap-3 rounded-2xl border border-cream-200 bg-white p-2.5 shadow-sm transition-transform active:scale-[0.99]"
                  >
                    <span
                      className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl text-4xl"
                      style={{ backgroundImage: cat.gradient }}
                    >
                      {item.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : (
                        <span aria-hidden className="drop-shadow-sm">
                          {cat.icon}
                        </span>
                      )}
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col justify-center py-0.5">
                      <span className="flex items-baseline justify-between gap-2">
                        <span className="truncate font-display text-[17px] font-bold text-ink">
                          {item.name}
                        </span>
                        <span className="tnum shrink-0 font-display text-lg font-extrabold text-ember-600">
                          {item.price}
                        </span>
                      </span>
                      <span className="mt-0.5 line-clamp-1 block text-sm text-ink-soft">
                        {item.description}
                      </span>
                      <Pills tags={item.tags} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
