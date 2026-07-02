/**
 * Rundes Logo-Badge im Stil des Original-Logos (blauer Kreis,
 * gebogener Schriftzug). Platzhalter — sobald die echte Logodatei
 * vorliegt, in /public/logo.png ablegen und hier per <Image> einbinden.
 */
export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role="img"
      aria-label="Adelphia Gyros Logo"
    >
      <defs>
        <path id="arc-top" d="M 18 66 A 44 44 0 0 1 102 66" />
        <path id="arc-bottom" d="M 14 60 A 46 46 0 0 0 106 60" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#0d5eaf" />
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeDasharray="2 4"
      />
      <text
        fill="#ffffff"
        fontSize="19"
        fontWeight="700"
        letterSpacing="3.5"
        fontFamily="var(--font-inter), sans-serif"
      >
        <textPath href="#arc-top" startOffset="50%" textAnchor="middle">
          ADELPHIA
        </textPath>
      </text>
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="13"
        fontStyle="italic"
        fontFamily="var(--font-playfair), serif"
      >
        halló!
      </text>
      <text
        fill="#ffffff"
        fontSize="8.5"
        fontWeight="600"
        letterSpacing="2"
        fontFamily="var(--font-inter), sans-serif"
      >
        <textPath href="#arc-bottom" startOffset="50%" textAnchor="middle">
          EAT GREEK · FEEL GREAT
        </textPath>
      </text>
    </svg>
  );
}
