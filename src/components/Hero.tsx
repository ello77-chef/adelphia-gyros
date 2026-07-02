import { restaurant } from "@/data/restaurant";
import ParallaxLayer from "@/components/ParallaxLayer";
import GyrosModel from "@/components/GyrosModel";

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

          <a
            href={restaurant.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pop-in pop-delay-5 mt-1 inline-flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
          >
            <span className="text-yellow-300" aria-hidden>
              ★★★★★
            </span>
            <span className="font-bold">{restaurant.rating.score}</span>
            <span className="text-white/50">·</span>
            <span>{restaurant.rating.count} Rezensionen auf Google</span>
          </a>
        </div>

        <div className="animate-pop-in pop-delay-3 relative w-full">
          {/* Weicher Schein hinter dem schwebenden 3D-Modell */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-6 rounded-full bg-white/20 blur-3xl"
          />
          <ParallaxLayer speed={0.08} className="relative">
            <GyrosModel />
          </ParallaxLayer>
        </div>
      </div>

      <BrushDivider />
    </section>
  );
}
