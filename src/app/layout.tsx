import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

// Charaktervolle Grotesk als Display-Font (sparsam eingesetzt).
// Body läuft auf System-Fonts (kein zweiter Webfont → Performance).
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Adelphia Gyros — Griechische Küche & Gyros in Graz",
  description:
    "Adelphia Gyros in Graz (Sporgasse 16) — authentische griechische Küche. Frisches Gyros, hausgemachte Souvlaki, Meze und mediterrane Spezialitäten. Zum Mitnehmen oder liefern lassen.",
  keywords: [
    "Gyros",
    "Griechisches Restaurant",
    "Souvlaki",
    "Meze",
    "Adelphia Gyros",
    "griechische Küche",
  ],
  openGraph: {
    title: "Adelphia Gyros — Griechische Küche & Gyros",
    description:
      "Authentische griechische Küche: frisches Gyros, Souvlaki, Meze und mehr.",
    type: "website",
    locale: "de_AT",
  },
};

export const viewport: Viewport = {
  themeColor: "#f0e7d5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-ink">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
