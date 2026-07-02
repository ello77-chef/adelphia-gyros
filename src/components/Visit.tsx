import { restaurant } from "@/data/restaurant";

const today = () => {
  // 0 = Sonntag ... maps to our hours array (0 = Montag)
  const jsDay = new Date().getDay();
  return jsDay === 0 ? 6 : jsDay - 1;
};

export default function Visit() {
  const todayIndex = today();
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    restaurant.mapQuery
  )}&z=15&output=embed`;

  return (
    <>
      {/* Öffnungszeiten */}
      <section
        id="oeffnungszeiten"
        className="scroll-mt-20 bg-aegean-900 py-20 text-white"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-terracotta-400">
              Wann
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold">
              Öffnungszeiten
            </h2>
            <ul className="mt-6 divide-y divide-white/10">
              {restaurant.hours.map((h, i) => (
                <li
                  key={h.day}
                  className={`flex items-center justify-between py-3 ${
                    i === todayIndex ? "font-semibold text-terracotta-400" : ""
                  }`}
                >
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                  {i === todayIndex && (
                    <span className="sr-only"> (heute)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="font-display text-2xl font-semibold">
              Küche &amp; Lieferung
            </h3>
            <p className="text-sand-100/80">
              Warme Küche bis 30 Minuten vor Ladenschluss. Abholung jederzeit —
              ruf einfach vorher an, dann steht deine Bestellung bereit.
            </p>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
              className="mt-2 w-fit rounded-full bg-terracotta-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta-600"
            >
              Jetzt bestellen: {restaurant.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Standort & Kontakt */}
      <section id="kontakt" className="scroll-mt-20 bg-sand-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-terracotta-500">
              Wo
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold text-aegean-900">
              Besuch uns
            </h2>
            <address className="mt-6 space-y-4 not-italic text-aegean-900/80">
              <p className="flex items-start gap-3">
                <span aria-hidden>📍</span>
                <span>
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.zip} {restaurant.address.city}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <span aria-hidden>📞</span>
                <a
                  href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                  className="hover:text-terracotta-500"
                >
                  {restaurant.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span aria-hidden>✉️</span>
                <a
                  href={`mailto:${restaurant.email}`}
                  className="hover:text-terracotta-500"
                >
                  {restaurant.email}
                </a>
              </p>
            </address>
          </div>

          <div className="overflow-hidden rounded-2xl border border-sand-200 shadow-sm">
            <iframe
              title={`Karte: ${restaurant.name}`}
              src={mapSrc}
              className="h-72 w-full md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
