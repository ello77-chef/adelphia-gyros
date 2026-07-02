export const restaurant = {
  name: "Adelphia Gyros",
  greeting: "Kalispera!",
  claim: "Eat Greek. Feel Great.",
  tagline: "Authentische griechische Küche",
  // TODO: Durch den echten foodora-Shop-Link ersetzen.
  foodoraUrl: "https://www.foodora.de/restaurant/adelphia-gyros",
  description:
    "Bei Adelphia Gyros dreht sich alles um ehrliche griechische Küche: mariniertes Gyros vom Spieß, hausgemachte Saucen und Meze wie bei Yiayia. Familiär, frisch und mit viel Liebe zubereitet.",
  phone: "+49 30 1234567",
  email: "hallo@adelphia-gyros.de",
  address: {
    street: "Poseidonstraße 12",
    zip: "10115",
    city: "Berlin",
  },
  // Placeholder coordinates (Berlin Mitte) for the embedded map.
  mapQuery: "Poseidonstraße 12, 10115 Berlin",
  social: {
    instagram: "https://instagram.com/adelphiagyros",
    facebook: "https://facebook.com/adelphiagyros",
  },
  hours: [
    { day: "Montag", time: "11:00 – 22:00" },
    { day: "Dienstag", time: "11:00 – 22:00" },
    { day: "Mittwoch", time: "11:00 – 22:00" },
    { day: "Donnerstag", time: "11:00 – 22:00" },
    { day: "Freitag", time: "11:00 – 23:00" },
    { day: "Samstag", time: "12:00 – 23:00" },
    { day: "Sonntag", time: "12:00 – 21:00" },
  ],
} as const;
