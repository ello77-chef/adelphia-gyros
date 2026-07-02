import { restaurant } from "@/data/restaurant";
import PhoneIcon from "@/components/PhoneIcon";

/**
 * Fest am unteren Rand verankerte Bestell-Leiste für kleine Screens
 * (bis lg). Auf Desktop ausgeblendet, dort gibt es den Button im Header.
 */
export default function MobileOrderBar() {
  const phoneHref = `tel:${restaurant.phone.replace(/\s/g, "")}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-aegean-100 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(6,46,87,0.08)] backdrop-blur lg:hidden">
      <a
        href={phoneHref}
        aria-label="Anrufen"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-aegean-100 text-aegean-600 transition-colors hover:border-aegean-600"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
      <a
        href={restaurant.foodoraUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-full bg-aegean-600 px-5 py-3 text-center font-bold text-white transition-colors hover:bg-aegean-700"
      >
        Jetzt bestellen
      </a>
    </div>
  );
}
