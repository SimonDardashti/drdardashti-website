/**
 * ProcedureIllustration
 *
 * Original editorial medical illustrations for DrDardashti.com procedure and
 * condition pages. All artwork is custom SVG linework — no stock photography,
 * no patient faces, no clinical or surgical imagery.
 *
 * Color language:
 *   S  (#8a8a80)  warm light-gray stroke — readable on the dark hero bg
 *   A  (#c8a020)  muted gold — procedure target / anatomical accent
 *
 * Each illustration is designed for the dark (#0a0a0a) hero section.
 * aria-hidden="true" is applied at the wrapper level — illustrations are
 * decorative and carry no semantic meaning beyond the surrounding text.
 */

import React from "react";

export type IllustrationVariant =
  | "epidural-steroid-injections"
  | "radiofrequency-ablation"
  | "spinal-cord-stimulation"
  | "peripheral-nerve-stimulation"
  | "crps"
  | "occipital-neuralgia"
  | "joint-injections"
  | "trigger-point-injections"
  | "failed-back"
  | "medication-management";

interface ProcedureIllustrationProps {
  variant: IllustrationVariant;
  className?: string;
}

// ── Design tokens ────────────────────────────────────────────────────────────
const S = "#8a8a80"; // warm light-gray stroke
const A = "#c8a020"; // gold accent

// ── Shared spine building block ──────────────────────────────────────────────
// Five vertebrae (L1–L5 abstraction) with intervertebral discs.
// viewBox parent must be "0 0 180 195"
// Levels: y = 12, 50, 88, 126, 164  (spacing 38px; vertebra height 18px)
const LEVELS = [12, 50, 88, 126, 164];

function Vertebrae({ hi = [] }: { hi?: number[] }) {
  return (
    <>
      {LEVELS.map((y, i) => {
        const isHi = hi.includes(i);
        const sc = isHi ? A : S;
        const sw = isHi ? 1.5 : 1;
        return (
          <g key={i} fill="none" strokeLinecap="round">
            {/* Vertebral body */}
            <rect x="52" y={y} width="76" height="18" rx="3"
                  stroke={sc} strokeWidth={sw} />
            {/* Spinal canal suggestion */}
            <ellipse cx="90" cy={y + 9} rx="11" ry="7"
                     stroke={S} strokeWidth={0.75} />
            {/* Left transverse processes */}
            <line x1="52" y1={y + 5} x2="36" y2={y + 5} stroke={sc} strokeWidth={sw} />
            <line x1="52" y1={y + 13} x2="36" y2={y + 13} stroke={sc} strokeWidth={sw} />
            {/* Right transverse processes */}
            <line x1="128" y1={y + 5} x2="144" y2={y + 5} stroke={sc} strokeWidth={sw} />
            <line x1="128" y1={y + 13} x2="144" y2={y + 13} stroke={sc} strokeWidth={sw} />
            {/* Intervertebral disc (omit below last level) */}
            {i < 4 && (
              <ellipse cx="90" cy={y + 28} rx="36" ry="5.5"
                       stroke={S} strokeWidth={0.75} />
            )}
          </g>
        );
      })}
    </>
  );
}

// ── 1. Epidural Steroid Injection ────────────────────────────────────────────
// Spine column; needle entering the epidural space at L3–L4 from the right.
function IllustrationESI() {
  return (
    <svg viewBox="0 0 180 195" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="w-full h-full">
      <Vertebrae hi={[2, 3]} />
      {/* Needle shaft approaching from right */}
      <line x1="162" y1="106" x2="102" y2="115"
            stroke={A} strokeWidth={1.5} strokeLinecap="round" />
      {/* Needle tip */}
      <line x1="102" y1="115" x2="93" y2="118"
            stroke={A} strokeWidth={2} strokeLinecap="round" />
      {/* Injection diffusion halos at epidural space */}
      <circle cx="90" cy="116" r="5"  stroke={A} strokeWidth={1}    opacity="0.55" />
      <circle cx="90" cy="116" r="10" stroke={A} strokeWidth={0.6}  opacity="0.30" />
      <circle cx="90" cy="116" r="16" stroke={A} strokeWidth={0.4}  opacity="0.15" />
    </svg>
  );
}

// ── 2. Radiofrequency Ablation ───────────────────────────────────────────────
// Spine column; RF electrode at the medial branch nerve (right facet, L3 level).
function IllustrationRFA() {
  return (
    <svg viewBox="0 0 180 195" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="w-full h-full">
      <Vertebrae hi={[2]} />
      {/* Electrode probe shaft */}
      <line x1="163" y1="80" x2="136" y2="89"
            stroke={A} strokeWidth={1.5} strokeLinecap="round" />
      {/* Active tip */}
      <circle cx="133" cy="91" r="3.5" stroke={A} strokeWidth={1.5} />
      {/* RF heat arcs radiating from tip */}
      <path d="M 129 84 Q 122 80 126 87" stroke={A} strokeWidth={1}   opacity="0.75" />
      <path d="M 126 93 Q 118 92 122 99" stroke={A} strokeWidth={1}   opacity="0.55" />
      <path d="M 130 80 Q 125 74 130 68" stroke={A} strokeWidth={0.8} opacity="0.40" />
      <path d="M 138 87 Q 145 82 143 89" stroke={A} strokeWidth={0.8} opacity="0.40" />
    </svg>
  );
}

// ── 3. Spinal Cord Stimulation ───────────────────────────────────────────────
// Full spine; SCS lead wire running along the spinal canal with contact points.
function IllustrationSCS() {
  return (
    <svg viewBox="0 0 180 195" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="w-full h-full">
      <Vertebrae />
      {/* Lead wire (dashed gold) down the canal */}
      <line x1="90" y1="14" x2="90" y2="170"
            stroke={A} strokeWidth={1.5} strokeDasharray="4 3" strokeLinecap="round" />
      {/* Lead anchor at entry */}
      <circle cx="90" cy="14" r="3.5" stroke={A} strokeWidth={1.5} />
      {/* Contact electrodes along the lead */}
      {[50, 76, 102].map((y) => (
        <rect key={y} x="86.5" y={y} width="7" height="4" rx="2"
              stroke={A} strokeWidth={1.2} />
      ))}
      {/* IPG (generator) pocket — lower right */}
      <rect x="138" y="156" width="28" height="22" rx="4"
            stroke={S} strokeWidth={1} />
      {/* Extension wire to generator */}
      <path d="M 90 170 Q 110 178 138 167"
            stroke={S} strokeWidth={0.75} strokeDasharray="3 2" />
    </svg>
  );
}

// ── 4. Peripheral Nerve Stimulation ─────────────────────────────────────────
// Abstract branching nerve tree; stimulator cuff on the main trunk.
function IllustrationPNS() {
  const nodes: [number, number][] = [
    [100, 58], [64, 88], [136, 88], [44, 62], [156, 62], [70, 48], [130, 48],
  ];
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="w-full h-full">
      {/* Main nerve trunk */}
      <line x1="100" y1="188" x2="100" y2="58"
            stroke={S} strokeWidth={1.5} strokeLinecap="round" />
      {/* Primary branches */}
      <path d="M 100 118 Q 78 100 64 88"  stroke={S} strokeWidth={1}   strokeLinecap="round" />
      <path d="M 100 118 Q 122 100 136 88" stroke={S} strokeWidth={1}   strokeLinecap="round" />
      {/* Secondary branches */}
      <path d="M 64 88 Q 52 74 44 62"    stroke={S} strokeWidth={0.75} strokeLinecap="round" />
      <path d="M 64 88 Q 58 98 54 110"   stroke={S} strokeWidth={0.75} strokeLinecap="round" />
      <path d="M 136 88 Q 148 74 156 62"  stroke={S} strokeWidth={0.75} strokeLinecap="round" />
      <path d="M 136 88 Q 142 98 146 110" stroke={S} strokeWidth={0.75} strokeLinecap="round" />
      {/* Terminal branches up */}
      <path d="M 100 78 Q 84 64 70 48"   stroke={S} strokeWidth={0.75} strokeLinecap="round" />
      <path d="M 100 78 Q 116 64 130 48"  stroke={S} strokeWidth={0.75} strokeLinecap="round" />
      {/* Gold: stimulator cuff on main trunk */}
      <rect x="92" y="132" width="16" height="10" rx="4"
            stroke={A} strokeWidth={1.5} />
      {/* Gold: highlighted trunk segment */}
      <line x1="100" y1="142" x2="100" y2="108"
            stroke={A} strokeWidth={1.5} strokeLinecap="round" />
      {/* Node dots */}
      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 0 ? 2.5 : 1.75}
                stroke={S} strokeWidth={0.75} />
      ))}
    </svg>
  );
}

// ── 5. CRPS ──────────────────────────────────────────────────────────────────
// Stylised right hand (4 finger rectangles + thumb + palm); gold nerve overlay.
function IllustrationCRPS() {
  return (
    <svg viewBox="0 0 180 215" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="w-full h-full">
      {/* Palm */}
      <rect x="48" y="118" width="88" height="74" rx="10"
            stroke={S} strokeWidth={1} />
      {/* Fingers (pinky → index, left to right) */}
      <rect x="50"  y="58" width="14" height="68" rx="7" stroke={S} strokeWidth={1} />
      <rect x="68"  y="44" width="14" height="82" rx="7" stroke={S} strokeWidth={1} />
      <rect x="86"  y="37" width="14" height="89" rx="7" stroke={S} strokeWidth={1} />
      <rect x="104" y="43" width="14" height="83" rx="7" stroke={S} strokeWidth={1} />
      {/* Thumb — angled, right side of palm */}
      <path d="M 136 132 Q 148 120 148 106 Q 148 94 140 90 Q 132 87 126 96 L 126 132 Z"
            stroke={S} strokeWidth={1} />
      {/* Gold nerve channels down each finger */}
      <line x1="57"  y1="65"  x2="57"  y2="150" stroke={A} strokeWidth={0.75} strokeDasharray="3 3" opacity="0.7" />
      <line x1="75"  y1="52"  x2="75"  y2="150" stroke={A} strokeWidth={0.75} strokeDasharray="3 3" opacity="0.7" />
      <line x1="93"  y1="44"  x2="93"  y2="150" stroke={A} strokeWidth={0.75} strokeDasharray="3 3" opacity="0.7" />
      <line x1="111" y1="50"  x2="111" y2="150" stroke={A} strokeWidth={0.75} strokeDasharray="3 3" opacity="0.7" />
      {/* Palmar nerve arch */}
      <path d="M 57 150 Q 75 162 93 158 Q 111 154 122 150"
            stroke={A} strokeWidth={1} opacity="0.6" />
      {/* Sensitisation halos at fingertips */}
      {[[57,62],[75,48],[93,41],[111,47]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="5"
                stroke={A} strokeWidth={0.75} opacity="0.45" />
      ))}
    </svg>
  );
}

// ── 6. Occipital Neuralgia ───────────────────────────────────────────────────
// Posterior skull outline; C1–C3 vertebrae; greater occipital nerve path in gold.
function IllustrationOccipital() {
  return (
    <svg viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="w-full h-full">
      {/* Posterior cranium silhouette */}
      <path d="M 58 100 Q 52 78 57 56 Q 66 26 90 20 Q 114 16 123 32 Q 134 50 130 72 Q 127 88 122 100"
            stroke={S} strokeWidth={1.2} />
      {/* Cervical vertebrae C1–C4 (scaled down) */}
      {[108, 128, 148, 168].map((y, i) => (
        <g key={i} fill="none" stroke={S} strokeWidth={0.75}>
          <rect x="68" y={y} width="44" height="13" rx="2" />
          <ellipse cx="90" cy={y + 6.5} rx="8" ry="5" strokeWidth={0.5} />
          <line x1="68" y1={y + 4} x2="54" y2={y + 4} />
          <line x1="112" y1={y + 4} x2="126" y2={y + 4} />
          <line x1="68" y1={y + 9} x2="54" y2={y + 9} />
          <line x1="112" y1={y + 9} x2="126" y2={y + 9} />
          {i < 3 && <ellipse cx="90" cy={y + 20} rx="22" ry="4" strokeWidth={0.5} />}
        </g>
      ))}
      {/* Greater occipital nerve — main trunk ascending */}
      <path d="M 90 145 Q 87 124 84 108 Q 81 94 78 78 Q 74 60 78 43 Q 82 32 88 26"
            stroke={A} strokeWidth={1.5} strokeLinecap="round" />
      {/* Contralateral branch (lighter) */}
      <path d="M 90 145 Q 93 124 96 108 Q 99 94 102 78 Q 106 60 102 43 Q 98 32 92 26"
            stroke={A} strokeWidth={1}   strokeDasharray="3 3" strokeLinecap="round" opacity="0.45" />
      {/* C2 ganglion node */}
      <circle cx="84" cy="108" r="3.5" stroke={A} strokeWidth={1.5} />
    </svg>
  );
}

// ── 7. Joint Injections ──────────────────────────────────────────────────────
// Simplified hip ball-and-socket joint; needle entering joint space.
function IllustrationJoint() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="w-full h-full">
      {/* Acetabulum (socket) — partial arc */}
      <path d="M 72 56 Q 40 72 36 104 Q 32 138 58 158 Q 78 172 100 170"
            stroke={S} strokeWidth={1.2} />
      <path d="M 72 56 Q 78 50 100 50"
            stroke={S} strokeWidth={1.2} />
      {/* Labral rim (dashed) */}
      <path d="M 70 58 Q 38 76 34 106 Q 30 142 60 162 Q 80 174 100 170"
            stroke={S} strokeWidth={0.6} strokeDasharray="4 3" />
      {/* Femoral head */}
      <circle cx="112" cy="112" r="40" stroke={S} strokeWidth={1.2} />
      {/* Articular cartilage arc */}
      <path d="M 76 102 Q 82 86 96 80 Q 110 74 124 82"
            stroke={S} strokeWidth={0.6} strokeDasharray="3 2" />
      {/* Femoral neck */}
      <line x1="145" y1="136" x2="172" y2="162" stroke={S} strokeWidth={1.2} strokeLinecap="round" />
      <line x1="150" y1="128" x2="180" y2="148" stroke={S} strokeWidth={1}   strokeLinecap="round" />
      {/* Needle entering joint space */}
      <line x1="36" y1="46" x2="80" y2="96" stroke={A} strokeWidth={1.5} strokeLinecap="round" />
      {/* Needle tip + injection halo */}
      <circle cx="82" cy="98"  r="3.5" stroke={A} strokeWidth={1.5} />
      <circle cx="82" cy="98"  r="8"   stroke={A} strokeWidth={0.75} opacity="0.40" />
      <circle cx="82" cy="98"  r="14"  stroke={A} strokeWidth={0.4}  opacity="0.20" />
    </svg>
  );
}

// ── 8. Trigger Point Injections ──────────────────────────────────────────────
// Parallel muscle-fiber curves; three trigger-point markers; needle at primary.
function IllustrationTriggerPoint() {
  const fiberY = [28, 52, 76, 100, 124, 148, 172];
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="w-full h-full">
      {/* Fascial envelope */}
      <path d="M 18 16 Q 100 10 182 16" stroke={S} strokeWidth={1.2} />
      <path d="M 18 184 Q 100 190 182 184" stroke={S} strokeWidth={1.2} />
      {/* Muscle fibers */}
      {fiberY.map((y, i) => (
        <path key={i}
          d={`M 18 ${y} Q 60 ${y - 5} 100 ${y + 5} Q 140 ${y + 9} 182 ${y}`}
          stroke={S} strokeWidth={i % 2 === 0 ? 0.75 : 1} />
      ))}
      {/* Trigger point 1 — primary (highlighted) */}
      <circle cx="82"  cy="100" r="8"   stroke={A} strokeWidth={1.5} />
      <circle cx="82"  cy="100" r="2.5" stroke={A} strokeWidth={1.5} />
      {/* Trigger point 2 */}
      <circle cx="134" cy="52"  r="6"   stroke={A} strokeWidth={1}   opacity="0.65" />
      <circle cx="134" cy="52"  r="2"   stroke={A} strokeWidth={1}   opacity="0.65" />
      {/* Trigger point 3 */}
      <circle cx="108" cy="148" r="6"   stroke={A} strokeWidth={1}   opacity="0.45" />
      <circle cx="108" cy="148" r="2"   stroke={A} strokeWidth={1}   opacity="0.45" />
      {/* Needle at primary trigger point */}
      <line x1="54" y1="68" x2="79" y2="96" stroke={A} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

// ── 9. Failed Back / Post-Surgical Spine Pain ────────────────────────────────
// Spine column; L3 marked as surgical site; fusion hardware suggestion at L4.
function IllustrationFailedBack() {
  return (
    <svg viewBox="0 0 180 195" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="w-full h-full">
      <Vertebrae hi={[2, 3]} />
      {/* Laminectomy site marker (cross) at L3 */}
      <line x1="78" y1="97" x2="102" y2="97" stroke={A} strokeWidth={1.5} strokeLinecap="round" />
      <line x1="90" y1="88" x2="90"  y2="106" stroke={A} strokeWidth={1.5} strokeLinecap="round" />
      {/* Scar tissue arc below surgical level */}
      <path d="M 68 108 Q 90 120 112 108"
            stroke={S} strokeWidth={0.75} strokeDasharray="2 2" opacity="0.65" />
      {/* Fusion hardware — pedicle screw flanges at L4 */}
      <rect x="36"  y="130" width="18" height="8" rx="2"
            stroke={A} strokeWidth={1} opacity="0.70" />
      <rect x="126" y="130" width="18" height="8" rx="2"
            stroke={A} strokeWidth={1} opacity="0.70" />
      {/* Connecting rod */}
      <line x1="54" y1="134" x2="126" y2="134"
            stroke={A} strokeWidth={0.75} strokeDasharray="3 2" />
    </svg>
  );
}

// ── 10. Medication Management / Opioid Review ────────────────────────────────
// Abstract pharmacological motif: benzene-ring-like hexagon with bond arms.
function IllustrationMedication() {
  const outer: [number, number][] = [
    [100, 18], [152, 48], [152, 108], [100, 138], [48, 108], [48, 48],
  ];
  const inner: [number, number][] = [
    [100, 38], [134, 56], [134, 92], [100, 110], [66, 92], [66, 56],
  ];
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="w-full h-full">
      {/* Outer hexagon */}
      <polygon points={outer.map(([x, y]) => `${x},${y}`).join(" ")}
               stroke={A} strokeWidth={1.5} />
      {/* Inner hexagon (aromatic circle suggestion) */}
      <polygon points={inner.map(([x, y]) => `${x},${y}`).join(" ")}
               stroke={A} strokeWidth={0.75} opacity="0.45" />
      {/* Bond arms at each outer vertex */}
      {outer.map(([x, y], i) => {
        const dx = x - 100, dy = y - 78;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = dx / len, ny = dy / len;
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={x + nx * 22} y2={y + ny * 22}
                  stroke={S} strokeWidth={1} />
            <circle cx={x + nx * 22} cy={y + ny * 22} r={4}
                    stroke={S} strokeWidth={1} />
          </g>
        );
      })}
      {/* Balance beam — subtle secondary motif below */}
      <line x1="100" y1="155" x2="100" y2="172" stroke={S} strokeWidth={1}   strokeLinecap="round" />
      <line x1="68"  y1="172" x2="132" y2="172" stroke={S} strokeWidth={1.2} strokeLinecap="round" />
      <circle cx="68"  cy="178" r="5" stroke={S} strokeWidth={0.75} />
      <circle cx="132" cy="178" r="5" stroke={S} strokeWidth={0.75} />
    </svg>
  );
}

// ── Dispatcher ───────────────────────────────────────────────────────────────
const map: Record<IllustrationVariant, React.ReactElement> = {
  "epidural-steroid-injections":  <IllustrationESI />,
  "radiofrequency-ablation":      <IllustrationRFA />,
  "spinal-cord-stimulation":      <IllustrationSCS />,
  "peripheral-nerve-stimulation": <IllustrationPNS />,
  "crps":                         <IllustrationCRPS />,
  "occipital-neuralgia":          <IllustrationOccipital />,
  "joint-injections":             <IllustrationJoint />,
  "trigger-point-injections":     <IllustrationTriggerPoint />,
  "failed-back":                  <IllustrationFailedBack />,
  "medication-management":        <IllustrationMedication />,
};

export default function ProcedureIllustration({
  variant,
  className = "",
}: ProcedureIllustrationProps) {
  return (
    <div
      className={`w-full ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      {map[variant]}
    </div>
  );
}
