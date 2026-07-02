import { restaurant } from "@/data/restaurant";

const DAY = 1440; // Minuten pro Tag
const WEEK = DAY * 7;
const KITCHEN_BUFFER = 30; // Küche schließt 30 min vor Ladenschluss

export type OpenStatus = {
  isOpen: boolean;
  todayIndex: number;
  /** z. B. "11:00–00:00" oder "durchgehend" */
  todayLabel: string;
  /** "Jetzt geöffnet" | "Geschlossen" */
  headline: string;
  /** "Küche bis 23:30" | "durchgehend geöffnet" | "öffnet Di 11:00" */
  detail: string;
};

function toMin(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function fmt(min: number): string {
  const norm = ((min % DAY) + DAY) % DAY;
  const h = Math.floor(norm / 60);
  const m = norm % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

type Interval = {
  index: number;
  start: number; // absolute Wochen-Minute
  end: number;
  allDay: boolean;
};

function intervals(): Interval[] {
  return restaurant.hours.map((h, i) => ({
    index: i,
    start: i * DAY + toMin(h.open),
    end: i * DAY + toMin(h.close),
    allDay: "allDay" in h && Boolean(h.allDay),
  }));
}

function labelFor(index: number): string {
  const h = restaurant.hours[index];
  if ("allDay" in h && h.allDay) return "durchgehend";
  return `${fmt(toMin(h.open))}–${fmt(toMin(h.close))}`;
}

export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const todayIndex = (now.getDay() + 6) % 7; // 0 = Montag
  const nowAbs = todayIndex * DAY + now.getHours() * 60 + now.getMinutes();
  const list = intervals();

  // Offenes Intervall finden (auch solche, die über Mitternacht in den
  // Folgetag reichen — deshalb auch nowAbs + WEEK prüfen).
  const current = list.find(
    (iv) =>
      (nowAbs >= iv.start && nowAbs < iv.end) ||
      (nowAbs + WEEK >= iv.start && nowAbs + WEEK < iv.end),
  );

  if (current) {
    if (current.allDay) {
      return {
        isOpen: true,
        todayIndex,
        todayLabel: labelFor(todayIndex),
        headline: "Jetzt geöffnet",
        detail: "durchgehend geöffnet",
      };
    }
    return {
      isOpen: true,
      todayIndex,
      todayLabel: labelFor(todayIndex),
      headline: "Jetzt geöffnet",
      detail: `Küche bis ${fmt(current.end - KITCHEN_BUFFER)}`,
    };
  }

  // Geschlossen → nächste Öffnung suchen.
  const next = list
    .map((iv) => ({ iv, start: iv.start < nowAbs ? iv.start + WEEK : iv.start }))
    .sort((a, b) => a.start - b.start)[0];

  const nextDay = restaurant.hours[next.iv.index];
  const opensToday = next.iv.index === todayIndex;
  return {
    isOpen: false,
    todayIndex,
    todayLabel: labelFor(todayIndex),
    headline: "Geschlossen",
    detail: opensToday
      ? `öffnet heute ${nextDay.open}`
      : `öffnet ${nextDay.short} ${nextDay.open}`,
  };
}

/** Anzeige-Label für einen beliebigen Tag, z. B. "11:00–01:00". */
export function dayLabel(index: number): string {
  return labelFor(index);
}
