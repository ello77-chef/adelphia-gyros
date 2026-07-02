const STYLES: Record<string, string> = {
  Vegan: "bg-olive-500/12 text-olive-600",
  Vegetarisch: "bg-olive-500/12 text-olive-600",
  Klassiker: "bg-aegean-600/12 text-aegean-700",
  Beliebt: "bg-ember-500/12 text-ember-600",
};

/** Kleine Tag-Pills (Vegan/Vegetarisch/Klassiker/Beliebt). */
export default function Pills({ tags }: { tags?: readonly string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <span className="mt-1.5 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
            STYLES[tag] ?? "bg-cream-200 text-ink-soft"
          }`}
        >
          {tag}
        </span>
      ))}
    </span>
  );
}
