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
            Zwei Geschwister, ein Spieß.
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/90">
            <p>
              <span className="font-bold text-aegean-800">Adelphia</span> heißt
              Geschwister. Wir haben in der Sporgasse aufgesperrt, weil wir das
              Gyros unserer Familie so machen wollten, wie wir es von zu Hause
              kennen — vom offenen Spieß, Tzatziki nach Yiayias Rezept, nichts
              aus der Tüte.
            </p>
            <p>
              Wenn der Chef „Kalispera!“ durch die Gasse ruft, ist der Spieß
              heiß. Komm vorbei — oder lass dir&apos;s bringen.
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
