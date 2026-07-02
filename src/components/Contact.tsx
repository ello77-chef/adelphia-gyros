import { restaurant } from "@/data/restaurant";
import Reveal from "@/components/Reveal";
import PhoneIcon from "@/components/PhoneIcon";
import MapFacade from "@/components/MapFacade";

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export default function Contact() {
  const phoneHref = `tel:${restaurant.phone.replace(/\s/g, "")}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    restaurant.mapQuery,
  )}`;

  return (
    <section
      id="kontakt"
      aria-label="Kontakt & Anfahrt"
      className="bg-cream-50 px-4 py-10"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-4 font-display text-2xl font-extrabold text-ink">
            Besuch uns
          </h2>
        </Reveal>

        <Reveal className="grid gap-3">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-cream-200 bg-white p-4 shadow-sm transition-transform active:scale-[0.99]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aegean-600 text-white">
              <PinIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-lg font-bold text-ink">
                {restaurant.address.street}
              </span>
              <span className="tnum block text-sm text-ink-soft">
                {restaurant.address.zip} {restaurant.address.city} · Route
                planen →
              </span>
            </span>
          </a>

          <a
            href={phoneHref}
            className="flex items-center gap-4 rounded-2xl border border-cream-200 bg-white p-4 shadow-sm transition-transform active:scale-[0.99]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aegean-600 text-white">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="tnum block font-display text-lg font-bold text-ink">
                {restaurant.phone}
              </span>
              <span className="block text-sm text-ink-soft">
                Direkt anrufen & vorbestellen
              </span>
            </span>
          </a>

          <MapFacade />
        </Reveal>
      </div>
    </section>
  );
}
