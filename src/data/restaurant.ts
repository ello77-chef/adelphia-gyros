export const restaurant = {
  name: "Adelphia Gyros",
  greeting: "Kalispera!",
  claim: "Eat Greek. Feel Great.",
  tagline: "Authentische griechische Küche",
  foodoraUrl: "https://www.foodora.at/restaurant/dtyv/adelphia-dtyv",
  googleUrl: "https://share.google/1RlqeHSE95ku09HwO",
  // Bewertung laut Google-Eintrag.
  rating: { score: "4,8", count: 447 },
  priceRange: "€ 1–10",
  description:
    "Bei Adelphia Gyros dreht sich alles um ehrliche griechische Küche: mariniertes Gyros vom Spieß, hausgemachte Saucen und Meze wie bei Yiayia. Familiär, frisch und mit viel Liebe zubereitet.",
  phone: "0660 3273453",
  // TODO: echte E-Mail-Adresse eintragen (leer = wird nicht angezeigt).
  email: "",
  address: {
    street: "Sporgasse 16",
    zip: "8010",
    city: "Graz",
    country: "AT",
  },
  // Ungefähre Koordinaten der Sporgasse 16, Graz (für Karte & JSON-LD).
  geo: { lat: 47.0725, lng: 15.4419 },
  mapQuery: "Adelphia, Sporgasse 16, 8010 Graz",
  // TODO: echte Social-Media-Profile eintragen (leer = wird nicht angezeigt).
  social: {
    instagram: "",
    facebook: "",
  },
  /**
   * Öffnungszeiten maschinenlesbar: open/close als "HH:MM".
   * close > 24:00 bedeutet nach Mitternacht (z. B. Fr "25:00" = 01:00 Uhr).
   * allDay markiert den durchgehend geöffneten Sonntag.
   */
  hours: [
    { day: "Montag", short: "Mo", open: "11:00", close: "23:00" },
    { day: "Dienstag", short: "Di", open: "11:00", close: "24:00" },
    { day: "Mittwoch", short: "Mi", open: "11:00", close: "24:00" },
    { day: "Donnerstag", short: "Do", open: "11:00", close: "24:00" },
    { day: "Freitag", short: "Fr", open: "11:00", close: "25:00" },
    { day: "Samstag", short: "Sa", open: "11:00", close: "24:00" },
    { day: "Sonntag", short: "So", open: "00:00", close: "24:00", allDay: true },
  ],
} as const;
