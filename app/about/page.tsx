import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Simon Dardashti MD | Credentials & Medicolegal Background",
  description:
    "Simon Dardashti, MD, MS — double board-certified in Pain Medicine and Anesthesiology. UCLA fellowship-trained. UC Irvine residency. Retained in 60+ medicolegal matters. Balanced plaintiff and defense practice in Los Angeles.",
  alternates: { canonical: "https://www.painmanagementmedicalexpert.com/about" },
};

const credentials = [
  { label: "Board Certification", value: "ABMS — Pain Medicine" },
  { label: "Board Certification", value: "ABMS — Anesthesiology" },
  { label: "Fellowship", value: "UCLA — Pain Medicine" },
  { label: "Residency", value: "UC Irvine — Anesthesiology" },
  { label: "Degree", value: "MD, MS" },
  { label: "Practice", value: "Expert Medical Services LLC" },
  { label: "Location", value: "14320 Ventura Blvd, Suite 827\nLos Angeles, CA 91423" },
];

const medicolegalProfile = [
  { label: "Cases Retained", value: "60+" },
  { label: "Plaintiff / Defense", value: "50 / 50" },
  { label: "Practice States", value: "California" },
  { label: "Testimony", value: "Deposition & Trial" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            About the Expert
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Simon Dardashti,
            <br />
            <em className="not-italic text-[#888]">MD, MS</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-xl leading-relaxed">
            Double board-certified pain medicine physician. Expert witness. Active clinician.
            UCLA fellowship-trained.
          </p>
        </div>
      </section>

      {/* SECTION 01 — PROFILE */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#f0f0f0] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              01
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Profile</p>
          </div>

          <div className="md:col-span-5 space-y-5 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Why Dual Certification Matters in Court.
            </h2>
            <p>
              Dr. Dardashti holds ABMS board certification in both <strong className="text-[#0a0a0a]">Pain Medicine</strong> and{" "}
              <strong className="text-[#0a0a0a]">Anesthesiology</strong> — a combination held by
              fewer than 5% of practicing physicians. In the medicolegal context, this means his
              testimony spans both the diagnosis and interventional management of pain, the
              pharmacology and risks of pain treatment, and the nerve anatomy underpinning
              injury causation.
            </p>
            <p>
              His fellowship training at UCLA and anesthesiology residency at UC Irvine ground
              him in the academic standards that hold up under Daubert scrutiny. His active
              clinical practice — seeing patients weekly — ensures his opinions reflect current
              standard-of-care, not outdated protocols.
            </p>
            <p>
              Dr. Dardashti has been retained in 60+ medicolegal matters encompassing personal
              injury, workers' compensation, medical malpractice, and disability determinations.
              His retention is evenly split between plaintiff and defense counsel — a profile
              that demonstrates genuine independence and survives aggressive cross-examination.
            </p>
          </div>

          <div className="md:col-span-5">
            {/* Credentials card */}
            <div className="border border-[#e5e5e0] p-7 mb-6">
              <h3
                className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-5"
              >
                Credentials
              </h3>
              <ul className="space-y-4">
                {credentials.map((c, i) => (
                  <li key={i}>
                    <p className="text-[10px] text-[#c8a020] font-semibold uppercase tracking-widest mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm text-[#333] whitespace-pre-line">{c.value}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Medicolegal profile */}
            <div className="border border-[#e5e5e0] p-7">
              <h3 className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-5">
                Medicolegal Profile
              </h3>
              <div className="grid grid-cols-2 gap-5">
                {medicolegalProfile.map((m) => (
                  <div key={m.label}>
                    <p
                      className="text-2xl font-bold text-[#0a0a0a] mb-1"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {m.value}
                    </p>
                    <p className="text-[10px] text-[#999] uppercase tracking-widest">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — CLINICAL GROUNDING */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#e8e6e3] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              02
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Clinical Basis</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              An Opinion Built on Practice,<br />Not Paperwork.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Active Clinical Practice",
                  body: "Dr. Dardashti sees pain patients regularly in his Los Angeles practice. His standard-of-care opinions are current — not reconstructed from memory or textbooks.",
                },
                {
                  title: "Image-Guided Proceduralist",
                  body: "Trained in fluoroscopy and ultrasound-guided interventional procedures. He can speak with precision about what procedures were indicated, performed correctly, or deviated from standard care.",
                },
                {
                  title: "Diagnostic Depth",
                  body: "His dual anesthesiology background means he understands pain at the level of nerve physiology and pharmacology — providing testimony that goes deeper than a general practitioner's review.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-[#e5e5e0] p-6">
                  <div className="w-6 h-px bg-[#c8a020] mb-4" />
                  <h3
                    className="font-bold text-[#0a0a0a] text-base mb-2"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — CASE TYPES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#f0f0f0] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              03
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Case Types</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Conditions He Addresses in Medicolegal Matters.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Cervical and lumbar disc injuries",
                "Radiculopathy and nerve compression",
                "Complex Regional Pain Syndrome (CRPS)",
                "Failed back surgery syndrome",
                "Sacroiliac joint dysfunction",
                "Facet joint arthropathy",
                "Neuropathic pain syndromes",
                "Post-surgical pain complaints",
                "Medication appropriateness",
                "Opioid prescribing standards",
                "Causation disputes",
                "Future medical cost projections",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 py-2 border-b border-[#f0f0f0]">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2 shrink-0" />
                  <span className="text-sm text-[#555]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Need Dr. Dardashti's CV and case history?
            </h2>
            <p className="text-[#666] text-sm">
              Request the credential packet or schedule a 15-minute case review.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-[#c8a020] hover:bg-[#e0b830] text-black font-bold px-7 py-3.5 text-xs tracking-widest uppercase transition-colors duration-200 text-center"
            >
              Request Case Review
            </Link>
            <a
              href="tel:+18187307579"
              className="border border-[#333] hover:border-[#555] text-[#777] hover:text-white font-semibold px-7 py-3.5 text-xs tracking-widest uppercase transition-colors duration-200 text-center"
            >
              (818) 730-7579
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
