# Adelphia Gyros 🥙

Website für das (fiktive) griechische Restaurant **Adelphia Gyros** — authentische griechische Küche, frisch vom Spieß.

Gebaut mit **Next.js 16** (App Router), **React 19**, **TypeScript** und **Tailwind CSS v4**.

## Features

- **Hero** mit Willkommensgruß (griechisch/deutsch) und Call-to-Actions
- **Speisekarte** — Gyros & Souvlaki, Meze, Salate und Getränke, gepflegt in `src/data/menu.ts`
- **Über uns** — Story des Restaurants
- **Öffnungszeiten** — mit automatischer Hervorhebung des heutigen Tages
- **Standort & Kontakt** — Adresse, Telefon, E-Mail und eingebettete Karte
- Responsives Design mit mobilem Navigationsmenü

## Inhalte pflegen

Alle Restaurant-Inhalte liegen zentral in `src/data/`:

- `src/data/restaurant.ts` — Name, Kontakt, Adresse, Öffnungszeiten, Social Media
- `src/data/menu.ts` — Speisekarte (Kategorien & Gerichte)

> Hinweis: Kontaktdaten und Adresse sind aktuell Platzhalter und sollten vor dem
> Go-Live durch die echten Daten ersetzt werden.

## Entwicklung

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server auf http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server starten
npm run lint     # ESLint
```

## Projektstruktur

```
src/
├─ app/
│  ├─ layout.tsx      # Root-Layout, Fonts & Metadaten
│  ├─ page.tsx        # Startseite (setzt die Sektionen zusammen)
│  └─ globals.css     # Theme (Tailwind v4) & Markenfarben
├─ components/        # Header, Hero, Menu, About, Visit, Footer
└─ data/              # Restaurant- & Menü-Inhalte
```
