"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/data/restaurant";
import { getOpenStatus, dayLabel } from "@/lib/hours";
import OpenStatusBadge from "@/components/OpenStatus";

export default function OpeningHours() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    const detectToday = () => setToday(getOpenStatus().todayIndex);
    detectToday();
  }, []);

  const todayText =
    today === null
      ? "…"
      : dayLabel(today) === "durchgehend"
        ? "durchgehend geöffnet"
        : dayLabel(today);

  return (
    <section
      id="oeffnungszeiten"
      aria-label="Öffnungszeiten"
      className="bg-cream-100 px-4 py-8"
    >
      <div className="mx-auto max-w-3xl">
        <details className="group rounded-2xl border border-cream-200 bg-white p-4 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
            <span className="flex flex-col gap-1">
              <OpenStatusBadge variant="inline" />
              <span className="tnum text-sm text-ink-soft">
                Heute: {todayText}
              </span>
            </span>
            <span
              className="shrink-0 text-ink-soft transition-transform group-open:rotate-180"
              aria-hidden
            >
              ▾
            </span>
          </summary>

          <ul className="mt-4 border-t border-cream-200 pt-2">
            {restaurant.hours.map((h, i) => {
              const label = dayLabel(i);
              return (
                <li
                  key={h.day}
                  className={`flex items-center justify-between py-2 text-sm ${
                    i === today
                      ? "font-extrabold text-ember-600"
                      : "text-ink"
                  }`}
                >
                  <span>{h.day}</span>
                  <span className="tnum">
                    {label === "durchgehend" ? "durchgehend" : label}
                  </span>
                </li>
              );
            })}
          </ul>
        </details>
      </div>
    </section>
  );
}
