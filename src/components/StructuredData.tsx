import { restaurant } from "@/data/restaurant";

const DAY_URL = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// close "24:00" -> "23:59", "25:00" -> "01:00" (Folgetag), sonst unverändert.
function closesOf(close: string): string {
  if (close === "24:00") return "23:59";
  if (close === "25:00") return "01:00";
  return close;
}

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    servesCuisine: "Greek",
    priceRange: "€€",
    telephone: "+43 660 3273453",
    url: "https://ello77-chef.github.io/adelphia-gyros/",
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      postalCode: restaurant.address.zip,
      addressLocality: restaurant.address.city,
      addressCountry: restaurant.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurant.geo.lat,
      longitude: restaurant.geo.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: restaurant.rating.count,
    },
    openingHoursSpecification: restaurant.hours.map((h, i) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${DAY_URL[i]}`,
      opens: h.open,
      closes: closesOf(h.close),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
