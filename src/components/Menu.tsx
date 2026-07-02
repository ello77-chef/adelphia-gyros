import { menu, type MenuItem } from "@/data/menu";

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-olive-500/10 px-2.5 py-0.5 text-xs font-medium text-olive-600">
      {label}
    </span>
  );
}

function Item({ item }: { item: MenuItem }) {
  return (
    <li className="flex flex-col gap-1 border-b border-sand-200 py-4 last:border-b-0">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="font-display text-lg font-semibold text-aegean-900">
          {item.name}
        </h4>
        <span className="whitespace-nowrap font-semibold text-terracotta-600">
          {item.price}
        </span>
      </div>
      <p className="text-sm text-aegean-900/70">{item.description}</p>
      {item.tags && item.tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}
    </li>
  );
}

export default function Menu() {
  return (
    <section id="speisekarte" className="scroll-mt-20 bg-sand-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-terracotta-500">
            Kalí órexi
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-aegean-900">
            Unsere Speisekarte
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-aegean-900/70">
            Alles frisch zubereitet — von der Marinade bis zur Sauce hausgemacht.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {menu.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-2">
                <h3 className="font-display text-2xl font-bold text-terracotta-600">
                  {category.title}
                </h3>
                <p className="text-sm text-aegean-900/60">
                  {category.subtitle}
                </p>
              </div>
              <ul>
                {category.items.map((item) => (
                  <Item key={item.name} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-aegean-900/50">
          Alle Preise inkl. MwSt. Bei Fragen zu Allergenen sprich uns gerne an.
        </p>
      </div>
    </section>
  );
}
