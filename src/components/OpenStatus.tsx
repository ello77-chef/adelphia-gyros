"use client";

import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus } from "@/lib/hours";

/**
 * Live-Öffnungsstatus, minütlich aktualisiert. Client-seitig berechnet,
 * damit „Jetzt geöffnet" der echten Uhrzeit entspricht.
 */
export default function OpenStatusBadge({
  variant = "hero",
}: {
  variant?: "hero" | "inline";
}) {
  const [s, setS] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const update = () => setS(getOpenStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  const open = s?.isOpen ?? false;
  const dot = (
    <span
      className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${
        open ? "bg-emerald-400" : "bg-ember-400"
      }`}
    />
  );

  if (variant === "inline") {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-bold text-ink">
        {dot}
        <span>{s ? s.headline : "Öffnungszeiten"}</span>
        {s && (
          <span className="font-medium text-ink-soft">· {s.detail}</span>
        )}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-cream-50 ring-1 ring-white/15">
      {dot}
      <span>{s ? s.headline : "Öffnungszeiten"}</span>
      <span className="font-normal text-cream-50/75">
        · {s ? s.detail : "…"}
      </span>
    </span>
  );
}
