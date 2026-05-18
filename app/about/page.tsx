import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Simon Dardashti | Interventional Pain Medicine Physician",
  description:
    "Dr. Simon Dardashti is a board-certified interventional pain medicine physician and anesthesiologist in Mission Hills, CA. UCLA fellowship-trained. Evaluates and treats spine pain, nerve pain, joint pain, and complex chronic pain.",
  alternates: { canonical: "https://www.drdardashti.com/about" },
};

const credentials = [
  { label: "Board Certification", value: "Pain Medicine" },
  { label: "Board Certification", value: "Anesthesiology" },
  { label: "Fellowship Training", value: "UCLA — Pain Medicine" },
  { label: "Clinical Location", value: "Mission Hills, California" },
];

const approachPoints = [
  {
    title: "Careful Diagnostic Evaluation",
    body: "Identifying the likely source of pain — not just treating symptoms — is the foundation of every patient encounter.",
  },
  {
    title: "Evidence-Informed Decisions",
    body: "Treatment recommendations are grounded in current medical evidence and adapted to each patient's history, imaging, and prior treatment response.",
  },
  {
    title: "Clear Communication",
    body: "Patients deserve a clear explanation of their diagnosis, the reasoning behind any proposed treatment, and what to realistically expect.",
  },
  {
    title: "Individualized Treatment Plans",
    body: "Conservative, medication-based, image-guided, and interventional options are considered based on each patient's clinical presentation and goals.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            About the Physician
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Simon Dardashti,
            <br />
            <em className="not-italic text-[#888]">MD</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-xl leading-relaxed">
            Board-Certified Interventional Pain Medicine &amp; Anesthesiology · Mission Hills, CA
          </p>
        </div>
      </section>

      {/* SECTION 01 — BIO */}
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
              Interventional Pain Medicine Specialist.
            </h2>
            <p>
              Dr. Simon Dardashti is a board-certified pain medicine physician and
              anesthesiologist with fellowship training in Pain Medicine at UCLA. He
              provides evaluation and treatment for patients with spine-related pain,
              nerve pain, joint pain, post-surgical pain, and complex chronic pain
              conditions.
            </p>
            <p>
              His clinical approach focuses on identifying the likely source of pain,
              explaining treatment options clearly, and developing practical care plans
              based on each patient's history, examination findings, imaging, prior
              treatment response, and functional goals.
            </p>
            <p>
              Dr. Dardashti's practice includes interventional pain management
              procedures, medication management when appropriate, coordination with
              physical therapy, and consideration of advanced treatment options such as
              spinal cord stimulation for carefully selected patients.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="border border-[#e5e5e0] p-7">
              <h3 className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-5">
                Credentials &amp; Training
              </h3>
              <ul className="space-y-4">
                {credentials.map((c, i) => (
                  <li key={i}>
                    <p className="text-[10px] text-[#c8a020] font-semibold uppercase tracking-widest mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm text-[#333]">{c.value}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#e5e5e0]">
                <a
                  href="https://www.providence.org/find-a-doctor/simon-dardashti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#c8a020] hover:bg-[#e0b830] text-black text-xs font-bold px-5 py-3 tracking-widest uppercase text-center transition-colors duration-200"
                >
                  Request an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — APPROACH */}
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
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Approach</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              How Dr. Dardashti Approaches Care.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {approachPoints.map((pt) => (
                <div key={pt.title} className="bg-white border border-[#e5e5e0] p-6">
                  <div className="w-6 h-px bg-[#c8a020] mb-4" />
                  <h3
                    className="font-bold text-[#0a0a0a] text-base mb-2"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {pt.title}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed">{pt.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — LOCATION */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Clinical Location
            </p>
            <h2
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Mission Hills, California
            </h2>
            <p className="text-[#666] text-sm max-w-md leading-relaxed">
              To request an appointment or communicate about clinical care, please use
              the appropriate Providence / Facey scheduling and patient communication
              channels.
            </p>
          </div>
          <a
            href="https://www.providence.org/find-a-doctor/simon-dardashti"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#c8a020] hover:bg-[#e0b830] text-black font-bold px-7 py-3.5 text-xs tracking-widest uppercase transition-colors duration-200"
          >
            Request an Appointment Through Providence
          </a>
        </div>
      </section>
    </>
  );
}
