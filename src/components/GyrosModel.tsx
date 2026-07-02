"use client";

import { createElement, useEffect } from "react";

/**
 * Mit Higgsfield aus dem Gyros-Bild generiertes 3D-Modell (GLB).
 * Wird vom Higgsfield-CDN geladen (im Besucher-Browser, nicht im Build).
 * TODO: für dauerhafte Verfügbarkeit die .glb-Datei lokal unter
 * /public/models ablegen und den Pfad hier ersetzen.
 */
const MODEL_URL =
  "https://d3u0tzju9qaucj.cloudfront.net/7d051b5a-7bfe-49fe-a484-24e7b3a9458a/91200be0-4a6b-4503-a13d-4a50c77600ed.glb";

export default function GyrosModel() {
  useEffect(() => {
    // Web-Component nur im Browser registrieren (kein SSR).
    let active = true;
    import("@google/model-viewer").catch(() => {
      if (active) active = false;
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="animate-float h-[340px] w-full sm:h-[440px] lg:h-[520px]">
      {createElement("model-viewer", {
        src: MODEL_URL,
        alt: "3D-Modell eines eingerollten griechischen Gyros Pita",
        // Endlose, langsame 360°-Drehung.
        "auto-rotate": "",
        "rotation-per-second": "24deg",
        "auto-rotate-delay": "0",
        "interaction-prompt": "none",
        // Kein Boden-Schatten (schwebt frei), neutrale Ausleuchtung.
        "shadow-intensity": "0",
        "environment-image": "neutral",
        exposure: "1.05",
        // Keine Kamerasteuerung -> Touch/Scroll gehen normal durch die Seite.
        style: {
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        },
      })}
    </div>
  );
}
