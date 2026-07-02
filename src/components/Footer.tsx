import { restaurant } from "@/data/restaurant";
import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-4 pt-10 pb-[calc(2.5rem+var(--bottom-bar))] text-cream-50/90 lg:pb-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <Logo size={56} />
        <div>
          <p className="font-display text-xl font-extrabold text-cream-50">
            {restaurant.name}
          </p>
          <p className="tnum text-sm text-cream-50/60">
            {restaurant.address.street}, {restaurant.address.zip}{" "}
            {restaurant.address.city}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href={restaurant.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-50/70 transition-colors hover:text-cream-50"
          >
            Google
          </a>
          <a
            href={restaurant.foodoraUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-50/70 transition-colors hover:text-cream-50"
          >
            foodora
          </a>
        </div>

        <p className="mt-2 text-xs text-cream-50/40">
          © {year} {restaurant.name} · Kalispera!
        </p>
      </div>
    </footer>
  );
}
