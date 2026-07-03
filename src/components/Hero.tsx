import { restaurant } from "@/data/restaurant";
import GyrosSpit from "@/components/GyrosSpit";
import OpenStatusBadge from "@/components/OpenStatus";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Willkommen"
      className="relative overflow-hidden bg-aegean-700 text-cream-50"
    >
      {/* Ägäis-Leuchten im Hintergrund */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(127,179,227,0.45),transparent_62%)]"
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
          className="mt-1 w-full max-w-xs rounded-full bg-white px-8 py-4 text-lg font-extrabold text-aegean-700 shadow-xl shadow-aegean-900/30 transition-all hover:bg-cream-100 active:scale-[0.97]"
        >
          Jetzt bei foodora bestellen
        </a>
      </div>
    </section>
  );
}
