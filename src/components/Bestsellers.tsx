import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import Reveal from "@/components/Reveal";

// Die 3 kuratierten Bestseller aus der Speisekarte.
const bestsellers = menu.flatMap((c) =>
  c.items
    .filter((i) => i.bestseller)
    .map((i) => ({ ...i, gradient: c.gradient, icon: c.icon })),
);

export default function Bestsellers() {
  return (
    <section aria-label="Beliebteste Gerichte" className="bg-cream-50 px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-4 font-display text-2xl font-extrabold text-ink">
            Am beliebtesten
          </h2>
        </Reveal>
        <ul className="grid gap-3">
          {bestsellers.map((item, i) => (
            <li key={item.name}>
              <Reveal delay={i * 70}>
                <a
                  href={restaurant.foodoraUrl}
                  className="flex items-center gap-4 rounded-2xl border border-cream-200 bg-white p-3 shadow-sm transition-transform active:scale-[0.99]"
                >
                  <span
                    className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl text-4xl"
                    style={{ backgroundImage: item.gradient }}
                  >
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <span aria-hidden className="drop-shadow-sm">
                        {item.icon}
                      </span>
                    )}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-ember-500/12 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ember-600">
                      Beliebt
                    </span>
                    <span className="mt-1 block truncate font-display text-lg font-bold text-ink">
                      {item.name}
                    </span>
                    <span className="mt-0.5 line-clamp-1 block text-sm text-ink-soft">
                      {item.description}
                    </span>
                  </span>

                  <span className="tnum shrink-0 self-center font-display text-lg font-extrabold text-aegean-600">
                    {item.price}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
