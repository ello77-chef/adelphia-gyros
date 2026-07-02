import { restaurant } from "@/data/restaurant";
import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-aegean-900 pt-12 pb-28 text-white lg:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-4">
          <Logo size={64} />
          <div>
            <p className="font-display text-xl font-bold">{restaurant.name}</p>
            <p className="text-sm text-white/60">
              {restaurant.address.street}, {restaurant.address.zip}{" "}
              {restaurant.address.city}
            </p>
            <p className="text-sm font-semibold text-sky-soft">
              {restaurant.claim}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href={restaurant.foodoraUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2.5 font-bold text-aegean-700 transition-transform hover:scale-105"
          >
            Jetzt bestellen
          </a>
          <a
            href={restaurant.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-white"
          >
            Google
          </a>
          {restaurant.social.instagram && (
            <a
              href={restaurant.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              Instagram
            </a>
          )}
          {restaurant.social.facebook && (
            <a
              href={restaurant.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              Facebook
            </a>
          )}
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/40">
        © {year} {restaurant.name}. Mit ❤️ &amp; Olivenöl gemacht. · Kalispera!
      </p>
    </footer>
  );
}
