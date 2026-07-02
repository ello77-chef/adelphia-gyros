import type { NextConfig } from "next";

// Für GitHub Pages: die Seite wird zu statischem HTML exportiert (Ordner `out`).
// Bei einer Project-Page läuft sie unter https://<user>.github.io/<repo>/,
// deshalb muss ein basePath gesetzt werden. Der Deploy-Workflow setzt
// PAGES_BASE_PATH auf "/<repo-name>"; lokal (npm run dev) bleibt es leer,
// damit die Seite normal unter http://localhost:3000 erreichbar ist.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    // GitHub Pages hat keinen Node-Server für die Bildoptimierung.
    unoptimized: true,
    // Mit Higgsfield generierte Bilder werden über den CDN der
    // Higgsfield-Storage ausgeliefert (von Besucher-Browsern geladen).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d8j0ntlcm91z4.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
