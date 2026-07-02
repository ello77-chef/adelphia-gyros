export const restaurant = {
  name: "Adelphia Gyros",
  greeting: "Kalispera!",
  claim: "Eat Greek. Feel Great.",
  tagline: "Authentische griechische Küche",
  foodoraUrl: "https://www.foodora.at/restaurant/dtyv/adelphia-dtyv",
  googleUrl: "https://share.google/1RlqeHSE95ku09HwO",
  // Bewertung laut Google-Eintrag.
  rating: { score: "4,8", count: 447 },
  description:
    "Bei Adelphia Gyros dreht sich alles um ehrliche griechische Küche: mariniertes Gyros vom Spieß, hausgemachte Saucen und Meze wie bei Yiayia. Familiär, frisch und mit viel Liebe zubereitet.",
  phone: "0660 3273453",
  // TODO: echte E-Mail-Adresse eintragen (leer = wird nicht angezeigt).
  email: "",
  address: {
    street: "Sporgasse 16",
    zip: "8010",
    city: "Graz",
  },
  mapQuery: "Adelphia, Sporgasse 16, 8010 Graz",
  // TODO: echte Social-Media-Profile eintragen (leer = wird nicht angezeigt).
  social: {
    instagram: "",
    facebook: "",
  },
  hours: [
    { day: "Montag", time: "11:00 – 23:00" },
    { day: "Dienstag", time: "11:00 – 00:00" },
    { day: "Mittwoch", time: "11:00 – 00:00" },
    { day: "Donnerstag", time: "11:00 – 00:00" },
    { day: "Freitag", time: "11:00 – 01:00" },
    { day: "Samstag", time: "11:00 – 00:00" },
    { day: "Sonntag", time: "24 Stunden geöffnet" },
  ],
} as const;
