"use client";

import { useState } from "react";
import { restaurant } from "@/data/restaurant";
import Logo from "@/components/Logo";

const links = [
  { href: "#top", label: "Home" },
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const phoneHref = `tel:${restaurant.phone.replace(/\s/g, "")}`;

  return (
    <header className="sticky top-0 z-50 border-b border-aegean-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <Logo size={52} />
          <span className="hidden font-display text-xl font-bold text-aegean-700 sm:block">
            Adelphia Gyros
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-aegean-900/75 transition-colors hover:text-aegean-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={phoneHref} className="group flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aegean-600 text-white">
              📞
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-aegean-400">
                Hotline · Bestellung
              </span>
              <span className="block text-sm font-bold text-aegean-900 group-hover:text-aegean-600">
                {restaurant.phone}
              </span>
            </span>
          </a>
          <a
            href={restaurant.foodoraUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-aegean-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-aegean-700"
          >
            Jetzt bestellen
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-aegean-900 lg:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-aegean-100 px-5 pb-4 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-aegean-900 hover:bg-aegean-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={restaurant.foodoraUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-aegean-600 px-5 py-3 text-center text-base font-bold text-white"
            >
              Jetzt bestellen
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
