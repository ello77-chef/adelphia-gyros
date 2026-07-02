import { restaurant } from "@/data/restaurant";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-aegean-900 text-white"
    >
      {/* Decorative gradient / sun */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-terracotta-500/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-aegean-500/40 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-24 sm:py-32">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sand-100">
          Καλώς ήρθατε · Willkommen
        </span>
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance sm:text-6xl">
          {restaurant.tagline} — frisch vom Spieß.
        </h1>
        <p className="max-w-xl text-lg text-sand-100/90">
          {restaurant.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-4">
          <a
            href="#speisekarte"
            className="rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-terracotta-600"
          >
            Zur Speisekarte
          </a>
          <a
            href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            {restaurant.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
