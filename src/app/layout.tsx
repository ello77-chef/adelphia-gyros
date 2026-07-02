import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0f1c2b]">
        {children}
      </body>
    </html>
  );
}
