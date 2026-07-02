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

## Hosting auf GitHub Pages

Die Seite wird bei jedem Push auf den Default-Branch automatisch als
statische Seite gebaut und auf **GitHub Pages** veröffentlicht (siehe
`.github/workflows/deploy.yml`).

**Einmalig aktivieren:** Im Repository unter **Settings → Pages** bei
_"Build and deployment → Source"_ **„GitHub Actions"** auswählen. Danach
läuft der Deploy bei jedem Push automatisch.

Live-Adresse (Project-Page):

```
https://ello77-chef.github.io/adelphia-gyros/
```

Technischer Hintergrund: `next.config.ts` nutzt `output: "export"` (statischer
Export nach `out/`), `images.unoptimized` (Pages hat keinen Bild-Server) und
einen `basePath`, den der Workflow auf `/<repo-name>` setzt. Die Datei
`public/.nojekyll` verhindert, dass GitHub den `_next`-Ordner ausblendet.

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
