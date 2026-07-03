import { restaurant } from "@/data/restaurant";
import Reveal from "@/components/Reveal";

export default function Story() {
  return (
    <section
      id="ueber-uns"
      aria-label="Über uns"
      className="bg-cream-100 px-5 py-16"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-ember-600">
            Kalispera!
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-aegean-900 sm:text-4xl">
            Adams Weg zum Spieß
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/90">
            <p>
              Bevor Adelphia in der Sporgasse aufmachte, lebte{" "}
              <span className="font-bold text-aegean-800">Adam</span> in
              Griechenland — und lernte das Gyros-Handwerk direkt an der Quelle.
              Nicht aus einem Kochbuch, sondern am offenen Spieß, neben Leuten,
              die es ihr Leben lang machen: das richtige Marinieren, der saubere
              Schnitt, das Gespür für den Moment, in dem das Fleisch perfekt ist.
            </p>
            <p>
              Diese Handschrift bringt er heute nach Graz. Jeden Tag frisch
              geschichtet, langsam gedreht, von Hand geschnitten. Die Meze nach
              Familienrezept, das Tzatziki wie es sein soll. Und wenn Adam dich
              mit einem „Kalispera!“ begrüßt, schmeckst du beim ersten Bissen,
              dass hier jemand sein Handwerk in Griechenland gelernt hat.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 border-l-2 border-ember-500 pl-4 text-sm text-ink-soft">
            <span className="tnum font-bold text-ink">
              {restaurant.rating.score} ★
            </span>{" "}
            bei {restaurant.rating.count} Gästen auf Google — dankeschön.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
