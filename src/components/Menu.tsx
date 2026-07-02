import Image from "next/image";
import { menu, type MenuItem } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import Reveal from "@/components/Reveal";

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-aegean-50 px-2.5 py-0.5 text-xs font-semibold text-aegean-600">
      {label}
    </span>
  );
}

/** Kategorie-Leiste wie im Vorbild: runde Icons mit Label. */
function CategoryNav() {
  return (
    <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-start justify-center gap-6 sm:gap-10">
      {menu.map((category) => (
        <a
          key={category.id}
          href={`#${category.id}`}
          className="group flex w-24 flex-col items-center gap-3 text-center"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-aegean-100 bg-white text-4xl shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-aegean-600 group-hover:shadow-lg">
            {category.icon}
          </span>
          <span className="text-sm font-bold text-aegean-900 group-hover:text-aegean-600">
            {category.title}
          </span>
        </a>
      ))}
    </div>
  );
}

function DishCard({ item, icon }: { item: MenuItem; icon: string }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-aegean-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Bildbereich — Platzhalter, bis die Fotos vorliegen */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-aegean-50">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="flex flex-col items-center gap-1 text-aegean-200 transition-transform duration-500 group-hover:scale-110">
            <span className="text-6xl" aria-hidden>
              {icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Foto folgt
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-display text-lg font-bold text-aegean-900">
            {item.name}
          </h4>
          <span className="whitespace-nowrap text-lg font-bold text-aegean-600">
            {item.price}
          </span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-aegean-900/65">
          {item.description}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}
        <a
          href={restaurant.foodoraUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 rounded-full bg-aegean-600 px-5 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-aegean-700"
        >
          Jetzt bestellen
        </a>
      </div>
    </article>
  );
}

export default function Menu() {
  return (
    <section id="speisekarte" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-aegean-400">
            Kalí órexi
          </p>
          <h2 className="mt-2 font-display text-5xl font-extrabold text-aegean-900 sm:text-6xl">
            Adelphias Speisekarte
          </h2>
        </Reveal>

        <CategoryNav />

        {menu.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-24 pt-16">
            <Reveal>
              <div className="mb-6 flex items-baseline gap-3">
                <h3 className="font-display text-3xl font-extrabold text-aegean-700 sm:text-4xl">
                  {category.title}
                </h3>
                <span className="text-sm font-medium text-aegean-900/50">
                  {category.subtitle}
                </span>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 80} className="h-full">
                  <DishCard item={item} icon={category.icon} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <p className="mt-14 text-center text-sm text-aegean-900/50">
          Alle Preise inkl. MwSt. Bei Fragen zu Allergenen sprich uns gerne an.
        </p>
      </div>
    </section>
  );
}
