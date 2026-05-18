import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions & Services | Simon Dardashti, MD",
  description:
    "Dr. Dardashti evaluates and treats spine pain, nerve pain, joint pain, post-surgical pain, and complex chronic pain. Services include epidural injections, facet blocks, radiofrequency ablation, and spinal cord stimulation evaluation.",
  alternates: { canonical: "https://www.drdardashti.com/services" },
};

const conditions = [
  "Neck pain",
  "Low back pain",
  "Sciatica and radicular pain",
  "Cervical radiculopathy",
  "Lumbar radiculopathy",
  "Spine-related pain",
  "Facet-mediated pain",
  "Sacroiliac joint pain",
  "Neuropathic pain",
  "Peripheral nerve pain",
  "Joint pain",
  "Post-surgical pain",
  "Persistent pain after spine surgery",
  "Failed back surgery syndrome evaluation",
  "Complex regional pain syndrome evaluation",
  "Headache and occipital neuralgia evaluation",
  "Chronic pain syndrome evaluation",
  "Complex pain conditions",
];

const procedures = [
  { name: "Epidural Steroid Injections", detail: "Including transforaminal, interlaminar, and caudal approaches." },
  { name: "Facet Joint Injections", detail: "Cervical, thoracic, and lumbar." },
  { name: "Medial Branch Blocks", detail: "Diagnostic blocks for facet-mediated pain." },
  { name: "Radiofrequency Ablation", detail: "Thermal treatment for longer-lasting facet and SI joint pain relief." },
  { name: "Sacroiliac Joint Injections", detail: "Diagnostic and therapeutic injections for SI joint-mediated pain." },
  { name: "Peripheral Nerve Blocks", detail: "Including occipital nerve blocks for occipital neuralgia." },
  { name: "Trigger Point Injections", detail: "Targeted injections for myofascial pain." },
  { name: "Joint & Bursa Injections", detail: "For joint-related pain when clinically appropriate." },
  { name: "Spinal Cord Stimulation Evaluation", detail: "Evaluation and trial consideration for selected patients." },
  { name: "Medication Management", detail: "When appropriate as part of a comprehensive treatment plan." },
  { name: "Physical Therapy Coordination", detail: "Coordinated referral and co-management with physical therapy." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Conditions &amp; Services
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What We
            <br />
            <em className="not-italic text-[#888]">Evaluate &amp; Treat.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-xl leading-relaxed">
            Treatment recommendations depend on the patient's diagnosis, physical
            examination, imaging findings, prior treatment response, and overall
            clinical context.
          </p>
        </div>
      </section>

      {/* SECTION 01 — CONDITIONS */}
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
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Conditions</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Conditions Evaluated.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
              {conditions.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 border-b border-r border-[#e5e5e0] last:border-b-0"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2 shrink-0" />
                  <span className="text-sm text-[#555]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROCEDURES */}
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
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Procedures</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Procedures &amp; Treatment Options.
            </h2>
            <p className="text-[#777] text-sm mb-8 max-w-xl">
              When appropriate, treatment options may include the following. All
              recommendations are based on individual patient evaluation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {procedures.map((proc) => (
                <div key={proc.name} className="bg-white border border-[#e5e5e0] p-5">
                  <h3
                    className="font-bold text-[#0a0a0a] text-sm mb-1"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {proc.name}
                  </h3>
                  <p className="text-xs text-[#777] leading-relaxed">{proc.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — SCS */}
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
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Advanced</p>
          </div>
          <div className="md:col-span-10">
            <p className="text-[#c8a020] text-xs font-semibold uppercase tracking-widest mb-2">
              For selected patients
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Spinal Cord Stimulation.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#555] text-sm leading-relaxed">
              <p>
                For selected patients with chronic neuropathic pain, persistent pain after
                spine surgery, or certain complex pain conditions, Dr. Dardashti may evaluate
                whether spinal cord stimulation is an appropriate treatment consideration.
              </p>
              <p>
                Spinal cord stimulation is not appropriate for every patient. Evaluation
                includes review of the patient's diagnosis, imaging and treatment history,
                medication history, prior procedural response, functional limitations, and
                overall medical and psychological suitability. When clinically appropriate,
                patients may be considered for a spinal cord stimulation trial before any
                permanent implantation decision is made.
              </p>
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
              Schedule an Appointment
            </h2>
            <p className="text-[#666] text-sm max-w-md">
              Dr. Dardashti sees patients through his Providence / Facey affiliated
              practice in Mission Hills, California.
            </p>
          </div>
          <a
            href="https://www.providence.org/find-a-doctor/simon-dardashti"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#c8a020] hover:bg-[#e0b830] text-black font-bold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
          >
            Schedule Through Providence / Facey
          </a>
        </div>
      </section>
    </>
  );
}
