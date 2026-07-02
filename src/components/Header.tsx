"use client";

import { useState } from "react";
import { restaurant } from "@/data/restaurant";

const links = [
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#oeffnungszeiten", label: "Öffnungszeiten" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/70 bg-sand-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold text-aegean-700">
            Adelphia
          </span>
          <span className="font-display text-2xl font-bold text-terracotta-500">
            Gyros
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-aegean-900/80 transition-colors hover:text-terracotta-500"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
              className="rounded-full bg-terracotta-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-600"
            >
              Reservieren
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-aegean-900 md:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-sand-200 px-5 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-aegean-900 hover:bg-sand-100"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-terracotta-500 px-5 py-3 text-center text-base font-semibold text-white"
            >
              Reservieren
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
