import Image from "next/image";
import { restaurant } from "@/data/restaurant";
import { menu } from "@/data/menu";
import ParallaxLayer from "@/components/ParallaxLayer";

// Der Klassiker fürs Hero: aus der Speisekarte gezogen, damit Preis &
// Beschreibung immer synchron mit der Karte bleiben.
const classic =
  menu.flatMap((c) => c.items).find((i) => i.name === "Gyros Pita") ??
  menu[0].items[0];

/** Rauer Pinselstrich-Übergang von Blau nach Weiß (Pesto-Style). */
function BrushDivider() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 h-[70px] w-full sm:h-[110px]"
    >
      <path
        fill="#ffffff"
        d="M0,110 L0,74 C60,58 130,88 210,72 C290,56 340,90 430,76 C500,65 560,92 650,70 C720,53 790,86 880,74 C960,64 1010,90 1100,72 C1180,58 1240,84 1320,68 C1370,58 1410,80 1440,64 L1440,110 Z"
      />
      <path
        fill="#ffffff"
        opacity="0.35"
        d="M0,110 L0,88 C90,72 160,98 260,84 C360,70 430,100 540,84 C640,70 720,98 830,86 C940,74 1010,100 1120,86 C1230,72 1310,96 1440,80 L1440,110 Z"
      />
    </svg>
  );
}

/**
 * Schwebende "Unser Klassiker"-Karte im Hero. Zeigt das Gyros Pita mit
 * Bild-Platzhalter; sobald ein Foto hinterlegt ist (menu.ts → image),
 * wird es automatisch angezeigt.
 */
function SignatureDishCard() {
  return (
    <div className="relative">
      {/* Weicher Schein hinter der Karte */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-2 rounded-[2rem] bg-white/25 blur-2xl"
      />
      {/* Leichte Neigung außen, Schwebe-Animation innen (so bleibt die
          Neigung auch bei reduzierter Bewegung erhalten) */}
      <div className="-rotate-3">
        <article className="animate-float w-72 overflow-hidden rounded-3xl bg-white shadow-2xl sm:w-80">
          <div className="flex items-center gap-2 bg-aegean-600 px-5 py-2.5 text-white">
            <span aria-hidden>⭐</span>
            <span className="text-sm font-extrabold uppercase tracking-widest">
              Unser Klassiker
            </span>
          </div>

          <div className="relative flex h-44 items-center justify-center bg-aegean-50">
            {classic.image ? (
              <Image
                src={classic.image}
                alt={classic.name}
                fill
                className="object-cover"
                sizes="320px"
              />
            ) : (
              <div className="flex flex-col items-center gap-1 text-aegean-200">
                <span className="text-6xl" aria-hidden>
                  🥙
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Foto folgt
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 p-5 text-aegean-900">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl font-bold">
                {classic.name}
              </h3>
              <span className="text-xl font-extrabold text-aegean-600">
                {classic.price}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-aegean-900/65">
              {classic.description}
            </p>
            <a
              href={restaurant.foodoraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-aegean-600 px-5 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-aegean-700"
            >
              Jetzt bestellen
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-aegean-600 text-white"
    >
      {/* Dekorative Lichtflächen — mit leichtem Parallax für Tiefe */}
      <ParallaxLayer
        speed={0.3}
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-sky-soft/25 blur-3xl"
      />
      <ParallaxLayer
        speed={-0.2}
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-aegean-900/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-28 pt-14 sm:pb-40 sm:pt-20 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <span className="animate-pop-in pop-delay-1 rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            {restaurant.claim}
          </span>

          <h1 className="animate-pop-in pop-delay-2 font-display text-7xl font-extrabold leading-none text-balance sm:text-8xl md:text-9xl">
            Kalispera!
          </h1>

          <p className="animate-pop-in pop-delay-3 max-w-md text-lg leading-relaxed text-white/85">
            So begrüßt dich der Chef persönlich — und so schmeckt es auch:
            herzlich, griechisch, frisch vom Spieß.
          </p>

          <p className="animate-pop-in pop-delay-4 text-sm font-semibold uppercase tracking-widest text-white/70">
            Gyros · Souvlaki · Meze — täglich frisch
          </p>

          <div className="animate-pop-in pop-delay-5 mt-2 flex flex-wrap items-center gap-4">
            <a
              href={restaurant.foodoraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3.5 font-bold text-aegean-700 shadow-xl transition-transform hover:scale-105"
            >
              Jetzt bestellen
            </a>
            <a
              href="#speisekarte"
              className="rounded-full border-2 border-white/40 px-8 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              Speisekarte
            </a>
          </div>
        </div>

        <div className="animate-pop-in pop-delay-3 justify-self-center">
          <ParallaxLayer speed={0.1}>
            <SignatureDishCard />
          </ParallaxLayer>
        </div>
      </div>

      <BrushDivider />
    </section>
  );
}
