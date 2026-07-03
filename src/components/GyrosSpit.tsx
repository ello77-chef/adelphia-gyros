/**
 * Markenzeichen: ein stilisierter, sich langsam um 360° drehender
 * Gyros-Spieß als reine SVG/CSS-Illustration (leichtgewichtig, kein WebGL).
 * Die Drehung (rotateY) läuft über .animate-spit; reduced-motion stoppt sie.
 */
export default function GyrosSpit({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      {/* Warmes Glut-Leuchten dahinter */}
      <div className="animate-ember pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_48%,rgba(245,178,110,0.6)_0%,rgba(229,130,47,0.32)_45%,transparent_72%)] blur-2xl" />

      <div>
        <div className="mx-auto w-full">
          <svg viewBox="0 0 300 400" className="h-auto w-full drop-shadow-2xl">
            <defs>
              <linearGradient id="meat" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e79a5a" />
                <stop offset="45%" stopColor="#c56a2f" />
                <stop offset="100%" stopColor="#8a4419" />
              </linearGradient>
              <linearGradient id="rod" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9aa0a6" />
                <stop offset="50%" stopColor="#e6e9ec" />
                <stop offset="100%" stopColor="#8a9096" />
              </linearGradient>
              <clipPath id="cone">
                <path d="M115,72 C100,92 85,120 85,152 C85,214 120,304 150,336 C180,304 215,214 215,152 C215,120 200,92 185,72 C170,60 130,60 115,72 Z" />
              </clipPath>
            </defs>

            {/* Skewer / Spieß */}
            <rect x="146" y="30" width="8" height="344" rx="4" fill="url(#rod)" />
            <circle cx="150" cy="30" r="11" fill="url(#rod)" />
            <ellipse cx="150" cy="380" rx="46" ry="12" fill="#6d6355" opacity="0.55" />

            {/* Fleischkegel */}
            <path
              d="M115,72 C100,92 85,120 85,152 C85,214 120,304 150,336 C180,304 215,214 215,152 C215,120 200,92 185,72 C170,60 130,60 115,72 Z"
              fill="url(#meat)"
            />

            {/* Gestapelte Schichten (Grill-Struktur), auf den Kegel geclippt */}
            <g clipPath="url(#cone)" opacity="0.45">
              <path d="M70,110 Q150,124 230,110 L230,120 Q150,134 70,120 Z" fill="#5f3413" />
              <path d="M66,150 Q150,166 234,150 L234,160 Q150,176 66,160 Z" fill="#5f3413" />
              <path d="M74,196 Q150,210 226,196 L226,206 Q150,220 74,206 Z" fill="#5f3413" />
              <path d="M86,242 Q150,254 214,242 L214,252 Q150,264 86,252 Z" fill="#5f3413" />
              <path d="M104,286 Q150,296 196,286 L196,296 Q150,306 104,296 Z" fill="#5f3413" />
            </g>

            {/* Glanzkante links */}
            <path
              d="M115,72 C100,92 85,120 85,152 C85,206 112,282 138,320"
              fill="none"
              stroke="#f6c58a"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.55"
              clipPath="url(#cone)"
            />

            {/* Krönung: Tomate & Zwiebel oben */}
            <circle cx="150" cy="66" r="17" fill="#d64f3a" />
            <ellipse cx="150" cy="60" rx="19" ry="9" fill="#f0e6cf" />
          </svg>
        </div>
      </div>
    </div>
  );
}
