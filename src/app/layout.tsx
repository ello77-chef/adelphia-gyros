import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

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
  title: "Adelphia Gyros — Griechische Küche & Gyros",
  description:
    "Adelphia Gyros — authentische griechische Küche. Frisches Gyros, hausgemachte Souvlaki, Meze und mediterrane Spezialitäten. Zum Mitnehmen oder gemütlich vor Ort.",
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
    locale: "de_DE",
  },
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
      <body className="min-h-full flex flex-col bg-white text-[#0f1c2b]">
        {children}
      </body>
    </html>
  );
}
