export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
  /**
   * Pfad zu einem Foto unter /public (z.B. "/dishes/gyros-pita.jpg").
   * Solange kein Bild hinterlegt ist, zeigt die Karte einen Platzhalter.
   */
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  /** Emoji-Icon für die Kategorie-Leiste (später durch Fotos ersetzbar). */
  icon: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "gyros",
    title: "Gyros & Souvlaki",
    subtitle: "Vom Spieß & Grill — unser Herzstück",
    icon: "🥙",
    items: [
      {
        name: "Gyros Pita",
        description:
          "Warmes Fladenbrot, Gyros vom Schwein, Tzatziki, Tomate, Zwiebel & Pommes.",
        price: "7,90 €",
        tags: ["Klassiker"],
        // Mit Higgsfield generiertes 3D-Foto (via CDN). TODO: für dauerhafte
        // Verfügbarkeit lokal unter /public/dishes ablegen und Pfad ersetzen.
        image:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3Fo8OJRpdPkxkR7ZYIqtBbCpSjX/hf_20260702_112858_b0f9290a-80a5-4fbb-8d4b-4c8429fab650.png",
      },
      {
        name: "Hähnchen-Gyros Pita",
        description:
          "Zart mariniertes Hähnchengyros mit Joghurtsauce, Salat & Zwiebeln.",
        price: "7,90 €",
      },
      {
        name: "Souvlaki-Spieß",
        description:
          "Zwei Spieße vom Schweinenacken, dazu Pita, Tzatziki & Zitrone.",
        price: "9,50 €",
      },
      {
        name: "Gyros-Teller",
        description:
          "Großzügige Portion Gyros, Pommes oder Reis, Krautsalat & Tzatziki.",
        price: "13,90 €",
        tags: ["Beliebt"],
      },
    ],
  },
  {
    id: "meze",
    title: "Meze & Vorspeisen",
    subtitle: "Zum Teilen — oder ganz für dich",
    icon: "🫒",
    items: [
      {
        name: "Tzatziki",
        description: "Griechischer Joghurt, Gurke, Knoblauch & Olivenöl.",
        price: "4,50 €",
        tags: ["Vegetarisch"],
      },
      {
        name: "Dolmades",
        description: "Gefüllte Weinblätter mit Reis & Kräutern.",
        price: "5,50 €",
        tags: ["Vegan"],
      },
      {
        name: "Saganaki",
        description: "Gebratener Graviera-Käse mit Honig & Sesam.",
        price: "6,50 €",
        tags: ["Vegetarisch"],
      },
      {
        name: "Gigantes Plaki",
        description: "Riesenbohnen in würziger Tomatensauce, im Ofen gebacken.",
        price: "5,90 €",
        tags: ["Vegan"],
      },
    ],
  },
  {
    id: "salate",
    title: "Salate",
    subtitle: "Frisch aus dem Mittelmeer-Garten",
    icon: "🥗",
    items: [
      {
        name: "Choriatiki (Bauernsalat)",
        description:
          "Tomaten, Gurke, Paprika, Oliven, Zwiebeln & Feta mit Olivenöl.",
        price: "8,90 €",
        tags: ["Vegetarisch", "Klassiker"],
      },
      {
        name: "Gyros-Salat",
        description: "Gemischter Salat mit warmem Gyros & Joghurt-Dressing.",
        price: "10,90 €",
      },
    ],
  },
  {
    id: "getraenke",
    title: "Getränke",
    subtitle: "Von Frappé bis Ouzo",
    icon: "🍹",
    items: [
      {
        name: "Frappé",
        description: "Griechischer Eiskaffee, geschüttelt & schaumig.",
        price: "3,50 €",
      },
      {
        name: "Mythos Bier 0,33 l",
        description: "Griechisches Lagerbier, eiskalt.",
        price: "3,90 €",
      },
      {
        name: "Ouzo 2 cl",
        description: "Der Klassiker zum Anstoßen — Yamas!",
        price: "3,00 €",
      },
      {
        name: "Softdrinks 0,33 l",
        description: "Cola, Fanta, Sprite, Wasser.",
        price: "2,90 €",
      },
    ],
  },
];
