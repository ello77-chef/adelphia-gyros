import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

// Rundes, freundliches Display-Font für Überschriften …
const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

// … und ein rundes, gut lesbares Sans für den Fließtext.
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
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
  themeColor: "#f5f9fd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${nunito.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-ink">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
