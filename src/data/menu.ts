export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
  /** Als Bestseller unter dem Hero hervorheben. */
  bestseller?: boolean;
  /**
   * Pfad zu einem Foto unter /public (z.B. "/dishes/gyros-pita.jpg").
   * Solange kein Bild hinterlegt ist, zeigt der Slot einen Farbverlauf.
   */
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  /** Emoji-Icon für Chips & Bild-Slots. */
  icon: string;
  /** Warmer Farbverlauf für die Bild-Slots dieser Kategorie. */
  gradient: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "gyros",
    title: "Gyros & Souvlaki",
    subtitle: "Vom Spieß & Grill — unser Herzstück",
    icon: "🥙",
    gradient: "linear-gradient(135deg, #e8a04a 0%, #cf5a2b 100%)",
    items: [
      {
        name: "Gyros Pita",
        description:
          "Warmes Fladenbrot, Gyros vom Schwein, Tzatziki, Tomate, Zwiebel & Pommes.",
        price: "7,90 €",
        tags: ["Klassiker"],
        bestseller: true,
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
        bestseller: true,
      },
      {
        name: "Gyros-Teller",
        description:
          "Großzügige Portion Gyros, Pommes oder Reis, Krautsalat & Tzatziki.",
        price: "13,90 €",
        tags: ["Beliebt"],
        bestseller: true,
      },
    ],
  },
  {
    id: "meze",
    title: "Meze & Vorspeisen",
    subtitle: "Zum Teilen — oder ganz für dich",
    icon: "🫒",
    gradient: "linear-gradient(135deg, #9cad5b 0%, #5f6f30 100%)",
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
    gradient: "linear-gradient(135deg, #a7c15a 0%, #6e8f3a 100%)",
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
    gradient: "linear-gradient(135deg, #4a9fd4 0%, #12689b 100%)",
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
