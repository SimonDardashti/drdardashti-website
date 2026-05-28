export default function FacetJointIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ── L2 vertebra ── */}
      <rect x="90" y="20" width="100" height="38" rx="6" fill="#1e1e1e" stroke="#555" strokeWidth="1.5" />
      {/* spinous process L2 */}
      <polygon points="140,20 133,4 147,4" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />
      {/* transverse processes L2 */}
      <line x1="90" y1="34" x2="62" y2="30" stroke="#555" strokeWidth="1.2" />
      <line x1="190" y1="34" x2="218" y2="30" stroke="#555" strokeWidth="1.2" />
      <circle cx="60" cy="30" r="5" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />
      <circle cx="220" cy="30" r="5" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />

      {/* ── L2–L3 disc ── */}
      <ellipse cx="140" cy="68" rx="44" ry="9" fill="#2a2a2a" stroke="#444" strokeWidth="1" />

      {/* ── L3 vertebra ── */}
      <rect x="90" y="77" width="100" height="40" rx="6" fill="#1e1e1e" stroke="#555" strokeWidth="1.5" />
      <polygon points="140,77 133,60 147,60" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />
      <line x1="90" y1="92" x2="62" y2="88" stroke="#555" strokeWidth="1.2" />
      <line x1="190" y1="92" x2="218" y2="88" stroke="#555" strokeWidth="1.2" />
      <circle cx="60" cy="88" r="5" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />
      <circle cx="220" cy="88" r="5" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />

      {/* ── L3–L4 disc ── */}
      <ellipse cx="140" cy="127" rx="44" ry="9" fill="#2a2a2a" stroke="#444" strokeWidth="1" />

      {/* ── L4 vertebra ── */}
      <rect x="90" y="136" width="100" height="42" rx="6" fill="#1e1e1e" stroke="#555" strokeWidth="1.5" />
      <polygon points="140,136 133,119 147,119" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />
      <line x1="90" y1="152" x2="62" y2="148" stroke="#555" strokeWidth="1.2" />
      <line x1="190" y1="152" x2="218" y2="148" stroke="#555" strokeWidth="1.2" />
      <circle cx="60" cy="148" r="5" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />
      <circle cx="220" cy="148" r="5" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />

      {/* ── L4–L5 disc ── */}
      <ellipse cx="140" cy="188" rx="44" ry="9" fill="#2a2a2a" stroke="#444" strokeWidth="1" />

      {/* ── L5 vertebra ── */}
      <rect x="90" y="197" width="100" height="42" rx="6" fill="#1e1e1e" stroke="#555" strokeWidth="1.5" />
      <polygon points="140,197 133,180 147,180" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />
      <line x1="90" y1="213" x2="62" y2="209" stroke="#555" strokeWidth="1.2" />
      <line x1="190" y1="213" x2="218" y2="209" stroke="#555" strokeWidth="1.2" />
      <circle cx="60" cy="209" r="5" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />
      <circle cx="220" cy="209" r="5" fill="#1e1e1e" stroke="#555" strokeWidth="1.2" />

      {/* ── Facet joints (shown between vertebrae, bilateral, posterior) ── */}
      {/* L3–L4 facet joints */}
      <rect x="74" y="112" width="14" height="18" rx="3" fill="#2a2a2a" stroke="#666" strokeWidth="1" />
      <rect x="192" y="112" width="14" height="18" rx="3" fill="#2a2a2a" stroke="#666" strokeWidth="1" />

      {/* L4–L5 facet joints — highlighted gold (right side = target) */}
      <rect x="74" y="173" width="14" height="18" rx="3" fill="#2a2a2a" stroke="#666" strokeWidth="1" />
      <rect x="192" y="173" width="14" height="18" rx="3" fill="#c8a020" stroke="#c8a020" strokeWidth="1.5" opacity="0.85" />

      {/* ── Medial branch nerve paths (dashed gold) ── */}
      {/* Right side medial branch nerves near L3-L4 and L4-L5 joints */}
      <path
        d="M 206 121 C 218 127 222 138 218 148"
        stroke="#c8a020"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        opacity="0.7"
      />
      <path
        d="M 206 181 C 218 187 222 198 218 208"
        stroke="#c8a020"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        opacity="0.7"
      />

      {/* ── Needle trajectory (right side, toward L4-L5 facet/medial branch) ── */}
      <line
        x1="256"
        y1="150"
        x2="210"
        y2="179"
        stroke="#c8a020"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Needle tip */}
      <polygon
        points="210,179 215,171 204,175"
        fill="#c8a020"
      />
      {/* Needle hub */}
      <rect x="252" y="144" width="10" height="6" rx="2" fill="#777" stroke="#999" strokeWidth="0.8" />

      {/* ── Labels ── */}
      <text x="140" y="274" textAnchor="middle" fill="#777" fontSize="9" fontFamily="Georgia, serif" letterSpacing="0.05em">
        POSTERIOR LUMBAR SPINE
      </text>
      <text x="140" y="287" textAnchor="middle" fill="#555" fontSize="8" fontFamily="Georgia, serif">
        Facet joints · Medial branch pathway
      </text>

      {/* Gold dot label — highlighted joint */}
      <line x1="206" y1="182" x2="232" y2="200" stroke="#c8a020" strokeWidth="0.8" opacity="0.6" />
      <text x="234" y="204" fill="#c8a020" fontSize="7.5" fontFamily="Georgia, serif">L4–L5</text>

      {/* Needle label */}
      <text x="258" y="142" fill="#888" fontSize="7.5" fontFamily="Georgia, serif">needle</text>
    </svg>
  );
}
