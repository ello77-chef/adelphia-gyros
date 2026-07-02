import { restaurant } from "@/data/restaurant";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-xl font-bold text-aegean-700">
            {restaurant.name}
          </p>
          <p className="text-sm text-aegean-900/60">
            {restaurant.address.street}, {restaurant.address.zip}{" "}
            {restaurant.address.city}
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href={restaurant.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-aegean-900/70 transition-colors hover:text-terracotta-500"
          >
            Instagram
          </a>
          <a
            href={restaurant.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-aegean-900/70 transition-colors hover:text-terracotta-500"
          >
            Facebook
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-aegean-900/50">
        © {year} {restaurant.name}. Mit ❤️ &amp; Olivenöl gemacht. · Yamas!
      </p>
    </footer>
  );
}
