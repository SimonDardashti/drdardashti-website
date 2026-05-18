import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions & Services | Simon Dardashti, MD",
  description:
    "Dr. Simon Dardashti evaluates and treats spine pain, nerve pain, joint pain, post-surgical pain, and complex chronic pain. Treatment options include epidural injections, medial branch blocks, radiofrequency ablation, and spinal cord stimulation evaluation.",
  alternates: { canonical: "https://www.drdardashti.com/services" },
};

const conditions = [
  "Neck pain",
  "Low back pain",
  "Cervical and lumbar radiculopathy",
  "Sciatica",
  "Spinal stenosis",
  "Degenerative disc disease",
  "Facet-mediated spine pain",
  "Sacroiliac joint pain",
  "Joint and musculoskeletal pain",
  "Peripheral nerve pain",
  "Post-surgical spine pain",
  "Complex regional pain syndrome",
  "Chronic pain after injury or surgery",
];

const procedures = [
  { name: "Epidural Steroid Injections", detail: "Transforaminal, interlaminar, and caudal approaches as clinically indicated." },
  { name: "Selective Nerve Root Blocks", detail: "Diagnostic and therapeutic blocks for radicular pain." },
  { name: "Medial Branch Blocks", detail: "Diagnostic blocks used to evaluate facet-mediated pain." },
  { name: "Radiofrequency Ablation", detail: "For appropriate patients with confirmed facet or sacroiliac joint pain after diagnostic evaluation." },
  { name: "Sacroiliac Joint Injections", detail: "Diagnostic and therapeutic injections for SI joint-mediated pain." },
  { name: "Peripheral Nerve Blocks", detail: "Including occipital nerve blocks for selected patients." },
  { name: "Trigger Point Injections", detail: "For myofascial pain when clinically appropriate." },
  { name: "Joint and Bursa Injections", detail: "When indicated based on clinical evaluation." },
  { name: "Medication Management", detail: "When clinically appropriate as part of a broader treatment plan." },
  { name: "Physical Therapy Coordination", detail: "Referral and co-management with physical therapy." },
  { name: "Spinal Cord Stimulation Evaluation", detail: "Evaluation and trial consideration for carefully selected patients." },
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
            Pain Conditions
            <br />
            <em className="not-italic text-[#888]">&amp; Treatment Options.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-xl leading-relaxed">
            Dr. Dardashti evaluates a range of painful conditions and develops treatment
            plans based on the patient's symptoms, physical examination, imaging findings,
            prior treatment history, and overall clinical picture.
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
              {conditions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 border-b border-r border-[#e5e5e0]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2 shrink-0" />
                  <span className="text-sm text-[#555]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — TREATMENT OPTIONS */}
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
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Treatment Options.
            </h2>
            <p className="text-[#777] text-sm mb-8 max-w-xl">
              Treatment recommendations are based on individual patient evaluation. Not
              every patient requires procedures — care plans are developed based on
              diagnosis, history, and clinical context.
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
              Spinal Cord Stimulation Evaluation.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#555] text-sm leading-relaxed">
              <p>
                For selected patients with chronic nerve-related pain, persistent pain after
                spine surgery, or certain complex pain conditions, spinal cord stimulation
                may be considered after appropriate evaluation. Dr. Dardashti evaluates
                whether spinal cord stimulation is clinically appropriate based on the
                patient's diagnosis, prior treatment history, imaging, functional
                limitations, psychological screening when required, and overall treatment
                goals.
              </p>
              <p>
                Spinal cord stimulation is not appropriate for every patient. When
                considered, the process typically includes education, careful patient
                selection, and a temporary trial before permanent implantation is discussed.
                This evaluation is conducted in a thorough and individualized manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Request an Appointment
            </h2>
            <p className="text-[#666] text-sm max-w-md">
              To request an appointment or communicate about clinical care, please use the
              appropriate Providence / Facey scheduling and patient communication channels.
            </p>
            <p className="text-[#444] text-xs mt-3 max-w-md">
              For urgent medical concerns, patients should contact their treating medical
              office directly or seek emergency care when appropriate.
            </p>
          </div>
          <a
            href="https://www.providence.org/find-a-doctor/simon-dardashti"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#c8a020] hover:bg-[#e0b830] text-black font-bold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
          >
            Request an Appointment Through Providence
          </a>
        </div>
      </section>
    </>
  );
}
