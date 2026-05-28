export default function PMPSIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ── Neck / upper torso outline ── */}
      {/* Neck column */}
      <path
        d="M 122 10 C 118 10 112 16 112 30 L 112 58 C 108 62 98 70 86 80 L 74 95 C 62 112 54 132 52 155 L 52 200 L 228 200 L 228 155 C 226 132 218 112 206 95 L 194 80 C 182 70 172 62 168 58 L 168 30 C 168 16 162 10 158 10 Z"
        fill="#1e1e1e"
        stroke="#555"
        strokeWidth="1.5"
      />

      {/* ── Clavicles ── */}
      {/* Left clavicle */}
      <path
        d="M 112 58 C 100 56 80 52 62 55 C 50 57 44 62 42 68"
        stroke="#666"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Right clavicle */}
      <path
        d="M 168 58 C 180 56 200 52 218 55 C 230 57 236 62 238 68"
        stroke="#666"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── Sternum ── */}
      <rect x="132" y="58" width="16" height="90" rx="5" fill="#242424" stroke="#555" strokeWidth="1.2" />
      {/* Manubrium notch */}
      <path d="M 133 58 Q 140 52 147 58" stroke="#666" strokeWidth="1" fill="none" />

      {/* ── Ribs (simplified, bilateral, 3 pairs) ── */}
      {/* Left ribs */}
      <path d="M 132 78 C 112 80 90 82 76 90" stroke="#444" strokeWidth="1" fill="none" />
      <path d="M 132 96 C 110 98 86 102 70 114" stroke="#444" strokeWidth="1" fill="none" />
      <path d="M 132 114 C 110 118 84 124 68 140" stroke="#444" strokeWidth="1" fill="none" />
      {/* Right ribs */}
      <path d="M 148 78 C 168 80 190 82 204 90" stroke="#444" strokeWidth="1" fill="none" />
      <path d="M 148 96 C 170 98 194 102 210 114" stroke="#444" strokeWidth="1" fill="none" />
      <path d="M 148 114 C 170 118 196 124 212 140" stroke="#444" strokeWidth="1" fill="none" />

      {/* ── Left shoulder / scapula region ── */}
      <path
        d="M 74 95 C 60 98 46 106 40 120 C 36 132 40 148 50 158"
        stroke="#555"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Shoulder cap */}
      <ellipse cx="56" cy="92" rx="18" ry="12" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" transform="rotate(-15 56 92)" />

      {/* ── Right shoulder / scapula region ── */}
      <path
        d="M 206 95 C 220 98 234 106 240 120 C 244 132 240 148 230 158"
        stroke="#555"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Shoulder cap */}
      <ellipse cx="224" cy="92" rx="18" ry="12" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" transform="rotate(15 224 92)" />

      {/* ── Axilla / chest wall nerve territory (left side — highlighted) ── */}
      {/* Intercostobrachial nerve territory — dashed gold nerve lines */}
      <path
        d="M 76 92 C 70 96 62 104 56 114 C 50 124 46 136 48 148"
        stroke="#c8a020"
        strokeWidth="1.3"
        strokeDasharray="4 3"
        opacity="0.75"
      />
      <path
        d="M 82 100 C 74 108 68 120 66 134"
        stroke="#c8a020"
        strokeWidth="1.1"
        strokeDasharray="3 3"
        opacity="0.6"
      />
      <path
        d="M 90 88 C 86 94 80 104 76 116"
        stroke="#c8a020"
        strokeWidth="1.1"
        strokeDasharray="3 3"
        opacity="0.6"
      />
      {/* Axillary region highlight */}
      <ellipse cx="72" cy="106" rx="14" ry="20" fill="#c8a020" opacity="0.08" />

      {/* ── Cervical plexus descending (dashed) ── */}
      <path
        d="M 122 30 C 116 38 112 48 112 58"
        stroke="#c8a020"
        strokeWidth="1.1"
        strokeDasharray="3 2"
        opacity="0.5"
      />
      <path
        d="M 140 20 C 138 28 136 40 134 52"
        stroke="#c8a020"
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.4"
      />

      {/* Callout dot — nerve territory */}
      <line x1="54" y1="126" x2="30" y2="148" stroke="#c8a020" strokeWidth="0.8" opacity="0.6" />
      <circle cx="28" cy="150" r="2.5" fill="#c8a020" opacity="0.7" />
    </svg>
  );
}
