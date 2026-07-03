import { restaurant } from "@/data/restaurant";
import GyrosSpit from "@/components/GyrosSpit";
import OpenStatusBadge from "@/components/OpenStatus";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Willkommen"
      className="relative overflow-hidden bg-aegean-900 text-cream-50"
    >
      {/* Glut des Spießes als Lichtquelle in der Ägäis-Nacht */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[38%] h-96 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(229,130,47,0.45),rgba(229,130,47,0.10)_45%,transparent_72%)]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 pb-14 pt-6 text-center">
        <OpenStatusBadge />

        {/* Wortmarke — der „Kalispera"-Moment */}
        <div className="mt-1">
          <h1 className="font-display text-[2.15rem] font-extrabold leading-none tracking-[0.06em] text-cream-50 sm:text-6xl">
            ΚΑΛΗΣΠΕΡΑ
          </h1>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-ember-400">
            ka·li·spéra · guten Abend
          </p>
        </div>

        <GyrosSpit className="my-1 w-[min(52vw,210px)]" />

        <p className="max-w-xs text-lg leading-relaxed text-cream-50/90">
          „Der Spieß dreht sich — komm vorbei.“
        </p>

        <a
          href={restaurant.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-cream-50/85 transition-colors hover:text-cream-50"
        >
          <span className="text-ember-400" aria-hidden>
            ★★★★★
          </span>
          <span className="tnum font-bold">{restaurant.rating.score}</span>
          <span className="text-cream-50/50">·</span>
          <span className="text-cream-50/75">
            {restaurant.rating.count} Google-Rezensionen
          </span>
        </a>

        <a
          href={restaurant.foodoraUrl}
          className="mt-1 w-full max-w-xs rounded-full bg-ember-500 px-8 py-4 text-lg font-extrabold text-ink shadow-xl shadow-black/25 transition-all hover:bg-ember-400 active:scale-[0.97]"
        >
          Bei Foodora bestellen
        </a>
      </div>
    </section>
  );
}
