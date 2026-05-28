export default function SIJointIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ── Sacrum (central wedge shape) ── */}
      <path
        d="M 140 40 L 168 55 L 172 100 L 162 140 L 150 168 L 140 178 L 130 168 L 118 140 L 108 100 L 112 55 Z"
        fill="#1e1e1e"
        stroke="#555"
        strokeWidth="1.5"
      />
      {/* Sacral foramina (small ovals) */}
      <ellipse cx="133" cy="88" rx="5" ry="7" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
      <ellipse cx="147" cy="88" rx="5" ry="7" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
      <ellipse cx="131" cy="108" rx="4" ry="6" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
      <ellipse cx="149" cy="108" rx="4" ry="6" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
      <ellipse cx="132" cy="126" rx="4" ry="5" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
      <ellipse cx="148" cy="126" rx="4" ry="5" fill="#2a2a2a" stroke="#444" strokeWidth="1" />

      {/* ── Coccyx ── */}
      <path
        d="M 134 178 L 140 178 L 146 178 L 142 210 L 140 215 L 138 210 Z"
        fill="#1e1e1e"
        stroke="#555"
        strokeWidth="1.2"
      />

      {/* ── Left iliac wing ── */}
      <path
        d="M 112 55 C 90 45 48 38 30 60 C 18 76 22 110 30 130 C 38 150 55 165 80 170 L 108 168 L 108 100 Z"
        fill="#1e1e1e"
        stroke="#555"
        strokeWidth="1.5"
      />

      {/* ── Right iliac wing ── */}
      <path
        d="M 168 55 C 190 45 232 38 250 60 C 262 76 258 110 250 130 C 242 150 225 165 200 170 L 172 168 L 172 100 Z"
        fill="#1e1e1e"
        stroke="#555"
        strokeWidth="1.5"
      />

      {/* ── Left SI joint (gap between sacrum and ilium) ── */}
      <path
        d="M 112 58 L 108 100 L 108 145 L 112 148"
        stroke="#444"
        strokeWidth="2"
        fill="none"
      />

      {/* ── Right SI joint — highlighted gold ── */}
      <path
        d="M 168 58 L 172 100 L 172 145 L 168 148"
        stroke="#c8a020"
        strokeWidth="2.5"
        fill="none"
        opacity="0.85"
      />
      {/* Gold highlight fill alongside the right SI joint */}
      <rect x="168" y="72" width="6" height="70" rx="2" fill="#c8a020" opacity="0.18" />

      {/* ── L5 vertebra above sacrum ── */}
      <rect x="115" y="16" width="50" height="28" rx="5" fill="#1e1e1e" stroke="#555" strokeWidth="1.3" />
      <polygon points="140,16 134,4 146,4" fill="#1e1e1e" stroke="#555" strokeWidth="1" />

      {/* ── Needle trajectory (right side, toward right SI joint) ── */}
      <line
        x1="248"
        y1="95"
        x2="180"
        y2="115"
        stroke="#c8a020"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Needle tip */}
      <polygon points="180,115 186,107 177,107" fill="#c8a020" />
      {/* Needle hub */}
      <rect x="244" y="89" width="10" height="6" rx="2" fill="#777" stroke="#999" strokeWidth="0.8" />

      {/* ── Labels ── */}
      <text x="140" y="244" textAnchor="middle" fill="#777" fontSize="9" fontFamily="Georgia, serif" letterSpacing="0.05em">
        POSTERIOR PELVIS
      </text>
      <text x="140" y="257" textAnchor="middle" fill="#555" fontSize="8" fontFamily="Georgia, serif">
        Sacrum · Iliac wings · SI joints
      </text>

      {/* Gold callout — right SI joint */}
      <line x1="174" y1="107" x2="200" y2="90" stroke="#c8a020" strokeWidth="0.8" opacity="0.6" />
      <text x="202" y="88" fill="#c8a020" fontSize="7.5" fontFamily="Georgia, serif">SI joint</text>

      {/* Needle label */}
      <text x="248" y="86" fill="#888" fontSize="7.5" fontFamily="Georgia, serif">needle</text>
    </svg>
  );
}
