const features = [
  {
    icon: "🔥",
    title: "Vom offenen Spieß",
    text: "Unser Gyros wird täglich frisch mariniert und langsam gegrillt.",
  },
  {
    icon: "🌿",
    title: "Hausgemacht",
    text: "Tzatziki, Saucen und Meze — alles nach Familienrezept zubereitet.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Familiär",
    text: "„Adelphia“ heißt Geschwister — bei uns bist du Teil der Familie.",
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-widest text-terracotta-500">
            Unsere Geschichte
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-aegean-900">
            Ein Stück Griechenland
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-aegean-900/75">
            Adelphia Gyros wurde von zwei Geschwistern gegründet, die ihre Liebe
            zur griechischen Küche mit der Stadt teilen wollten. Rezepte aus dem
            Familienkochbuch treffen auf frische Zutaten vom Markt — für Gerichte,
            die schmecken wie ein Sommer auf Kreta.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-aegean-900/75">
            Ob schnell zum Mitnehmen oder gemütlich mit Freunden am Tisch: bei uns
            zählt Gastfreundschaft — griechisch, herzlich und ehrlich.
          </p>
        </div>

        <div className="grid gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 rounded-2xl border border-sand-200 bg-sand-50 p-5"
            >
              <span className="text-3xl" aria-hidden>
                {f.icon}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-aegean-900">
                  {f.title}
                </h3>
                <p className="mt-1 text-aegean-900/70">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
