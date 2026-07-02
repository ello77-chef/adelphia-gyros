import { restaurant } from "@/data/restaurant";
import GyrosSpit from "@/components/GyrosSpit";
import OpenStatusBadge from "@/components/OpenStatus";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Willkommen"
      className="relative overflow-hidden bg-ink text-cream-50"
    >
      {/* Warmes Glut-Leuchten im Hintergrund */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(209,90,43,0.38),transparent_62%)]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 pb-12 pt-6 text-center">
        <OpenStatusBadge />

        <GyrosSpit className="my-1 w-[min(56vw,220px)]" />

        <h1 className="font-display text-6xl font-extrabold leading-none text-balance sm:text-7xl">
          Kalispera!
        </h1>

        <p className="max-w-xs text-[15px] leading-relaxed text-cream-50/85">
          Frisches Gyros vom Spieß — {restaurant.address.street},{" "}
          {restaurant.address.city}. Hol dir deins in Minuten.
        </p>

        <a
          href={restaurant.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm ring-1 ring-white/15 transition-colors hover:bg-white/15"
        >
          <span className="text-amber-300" aria-hidden>
            ★★★★★
          </span>
          <span className="font-bold tnum">{restaurant.rating.score}</span>
          <span className="text-cream-50/60">·</span>
          <span className="text-cream-50/80">
            {restaurant.rating.count} Rezensionen
          </span>
        </a>

        <a
          href={restaurant.foodoraUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 w-full max-w-xs rounded-full bg-ember-500 px-8 py-4 text-lg font-extrabold text-white shadow-xl shadow-ember-600/30 transition-all hover:bg-ember-600 active:scale-[0.97]"
        >
          Jetzt bei foodora bestellen
        </a>
      </div>
    </section>
  );
}
