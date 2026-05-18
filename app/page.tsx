import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simon Dardashti, MD | Pain Medicine Physician | Mission Hills, CA",
  description:
    "Dr. Simon Dardashti is a board-certified pain medicine physician and anesthesiologist in Mission Hills, CA. Evidence-informed evaluation and treatment for spine pain, nerve pain, joint pain, and complex chronic pain conditions.",
  alternates: { canonical: "https://www.drdardashti.com" },
};

const stats = [
  { value: "2×", label: "Board Certified" },
  { value: "MD", label: "Pain Medicine" },
  { value: "UCLA", label: "Fellowship Trained" },
  { value: "Providence", label: "Facey Affiliated" },
];

const conditionHighlights = [
  { title: "Spine Pain", items: ["Neck pain", "Low back pain", "Facet-mediated pain", "Spine-related pain"] },
  { title: "Nerve & Radicular", items: ["Sciatica", "Cervical radiculopathy", "Lumbar radiculopathy", "Neuropathic pain"] },
  { title: "Joint & Post-Surgical", items: ["Sacroiliac joint pain", "Joint pain", "Post-surgical pain", "Failed back surgery syndrome"] },
  { title: "Complex Pain", items: ["CRPS evaluation", "Occipital neuralgia", "Peripheral nerve pain", "Chronic pain syndromes"] },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white min-h-[90vh] flex flex-col justify-center px-6 py-24 relative overflow-hidden">
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none text-[#111] select-none pointer-events-none hidden lg:block"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          aria-hidden
        >
          MD
        </span>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
            Pain Medicine · Anesthesiology · Mission Hills, CA
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 max-w-3xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Simon Dardashti,
            <br />
            <em className="not-italic text-[#c8a020]">MD</em>
          </h1>
          <p className="text-[#888] text-lg md:text-xl max-w-xl leading-relaxed mb-4">
            Board-Certified Pain Medicine &amp; Anesthesiology
          </p>
          <p className="text-[#666] text-base max-w-2xl leading-relaxed mb-10">
            Evidence-informed evaluation and treatment for patients with spine pain, nerve pain,
            joint pain, post-surgical pain, and complex chronic pain conditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.providence.org/find-a-doctor/simon-dardashti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c8a020] hover:bg-[#e0b830] text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Schedule an Appointment
            </a>
            <Link
              href="/services"
              className="inline-block border border-[#333] hover:border-[#c8a020] text-[#888] hover:text-[#c8a020] font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              View Services
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-[#1a1a1a] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#1a1a1a]">
            {stats.map((s) => (
              <div key={s.label} className="md:px-8 first:pl-0">
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
              Individualized Care.<br />Evidence-Informed Decisions.
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
                His approach emphasizes clear communication, evidence-informed
                decision-making, and appropriate use of conservative, medication-based,
                image-guided, and interventional treatment options based on each patient's
                clinical presentation. He is board certified in both Anesthesiology and
                Pain Medicine.
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
                Dr. Dardashti evaluates a wide range of acute and chronic pain conditions
                across the spine, nervous system, and musculoskeletal system.
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
              View all conditions &amp; procedures →
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
              Treatment recommendations are based on the patient's history, physical
              examination, imaging when available, prior treatment response, and overall
              clinical context.
            </p>
            <p>
              This may include conservative care coordination, medication management when
              appropriate, image-guided interventional procedures, and advanced options
              such as spinal cord stimulation when clinically indicated.
            </p>
            <a
              href="https://www.providence.org/find-a-doctor/simon-dardashti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-[#c8a020] hover:bg-[#e0b830] text-black font-bold px-7 py-3.5 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Schedule an Appointment
            </a>
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
            <div className="flex flex-wrap gap-3 items-center">
              <span className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide">
                Mission Hills, CA
              </span>
            </div>
            <a
              href="https://www.providence.org/find-a-doctor/simon-dardashti"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-[#c8a020] hover:bg-[#e0b830] text-black font-bold px-7 py-3.5 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Schedule an Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
