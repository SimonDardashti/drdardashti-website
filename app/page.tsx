import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simon Dardashti, MD | Interventional Pain Management Physician",
  description:
    "Dr. Simon Dardashti is a board-certified interventional pain medicine physician and anesthesiologist evaluating spine pain, nerve pain, joint pain, post-surgical pain, and chronic pain conditions.",
  alternates: { canonical: "https://www.drdardashti.com" },
};

const stats = [
  { value: "2×", label: "Board Certified" },
  { value: "MD", label: "Pain Medicine" },
  { value: "UCLA", label: "Fellowship Trained" },
];

const conditionHighlights = [
  {
    title: "Spine Pain",
    items: ["Neck pain", "Low back pain", "Spine-related pain", "Facet-mediated pain", "Sciatica and radicular pain"],
  },
  {
    title: "Nerve & Radicular",
    items: ["Cervical radiculopathy", "Lumbar radiculopathy", "Neuropathic pain", "Peripheral nerve pain"],
  },
  {
    title: "Joint & Post-Surgical",
    items: ["Sacroiliac joint pain", "Joint pain", "Persistent pain after injury or surgery", "Persistent pain after spine surgery"],
  },
  {
    title: "Complex Pain",
    items: ["Complex regional pain syndrome", "Headache and occipital neuralgia", "Chronic pain syndrome", "Complex pain conditions"],
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white min-h-[90vh] flex flex-col justify-center px-6 py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              Pain Medicine Physician · Mission Hills, CA
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Simon Dardashti,
              <br />
              <em className="not-italic text-[#c8a020]">MD</em>
            </h1>
            <p className="text-[#888] text-lg md:text-xl leading-relaxed mb-4">
              Board-Certified Interventional Pain Medicine &amp; Anesthesiology
            </p>
            <p className="text-[#666] text-base leading-relaxed mb-10">
              Evidence-informed evaluation and treatment for patients with spine pain,
              nerve pain, joint pain, and complex pain conditions.
            </p>
            <Link
              href="/services"
              className="inline-block border border-[#333] hover:border-[#c8a020] text-[#888] hover:text-[#c8a020] font-semibold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Learn About Treatment Options
            </Link>

            <div className="mt-16 pt-10 border-t border-[#1a1a1a] grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-3xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-[#555] uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="hidden md:flex justify-end items-center">
            <img
              src="/headshot.webp"
              alt="Dr. Simon Dardashti, MD — Pain Medicine Physician"
              className="w-full max-w-sm object-cover"
              style={{ filter: "grayscale(20%)" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 01 — ABOUT */}
      <section className="bg-white py-24 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#f0f0f0] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              01
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">About</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              About Dr. Dardashti.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#555] text-base leading-relaxed">
              <p>
                Dr. Simon Dardashti is a board-certified pain medicine physician and
                anesthesiologist who evaluates and treats patients with acute and chronic
                pain conditions. His clinical work focuses on careful diagnostic evaluation,
                identification of likely pain generators, review of relevant imaging and
                treatment history, and development of individualized treatment plans.
              </p>
              <p>
                His clinical focus includes spine-related pain, neck pain, low back pain,
                radicular pain, neuropathic pain, joint pain, sacroiliac joint pain,
                persistent pain after injury or surgery, and complex chronic pain conditions.
                He also evaluates selected patients for advanced pain management options,
                including spinal cord stimulation when clinically appropriate.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="text-[#c8a020] text-sm font-semibold uppercase tracking-widest hover:underline"
              >
                Read full bio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — CONDITIONS */}
      <section className="bg-[#f9f7f4] py-24 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 items-start">
            <div className="md:col-span-2">
              <span
                className="text-7xl font-bold text-[#e8e6e3] leading-none block"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                aria-hidden
              >
                02
              </span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Conditions</p>
            </div>
            <div className="md:col-span-10">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0a0a0a] leading-tight"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Conditions Evaluated.
              </h2>
              <p className="text-[#777] mt-3 text-base max-w-xl">
                Dr. Dardashti evaluates a range of pain conditions affecting the spine,
                nervous system, and musculoskeletal system.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#e0e0d8] md:ml-[calc(2/12*100%+2.5rem)]">
            {conditionHighlights.map((group, i) => (
              <div
                key={group.title}
                className={`bg-white p-7 ${i < conditionHighlights.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e0e0d8]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h3
                  className="font-bold text-[#0a0a0a] text-sm mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs text-[#666] leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 md:ml-[calc(2/12*100%+2.5rem)]">
            <Link
              href="/services"
              className="text-[#c8a020] text-sm font-semibold uppercase tracking-widest hover:underline"
            >
              View all conditions &amp; treatment options →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 03 — APPROACH */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Treatment Approach
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The Right Treatment
              <br />
              <em className="not-italic text-[#c8a020]">for the Right Patient.</em>
            </h2>
          </div>
          <div className="space-y-4 text-[#888] text-sm leading-relaxed">
            <p>
              Dr. Dardashti's treatment recommendations are based on the patient's history,
              physical examination, imaging when available, prior treatment response, and
              overall clinical context.
            </p>
            <p>
              His approach may include conservative care coordination, medication management
              when appropriate, review of imaging and diagnostic studies, image-guided
              interventional pain procedures, and advanced pain management options when
              clinically indicated.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 04 — LOCATION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#f0f0f0] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              04
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Location</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Clinical Location.
            </h2>
            <p className="text-[#555] text-base leading-relaxed mb-6 max-w-xl">
              Dr. Dardashti sees patients in Mission Hills, California.
            </p>
            <span className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide">
              Mission Hills, CA
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
