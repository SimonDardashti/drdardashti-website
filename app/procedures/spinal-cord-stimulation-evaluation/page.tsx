import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/procedures/spinal-cord-stimulation-evaluation";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Spinal Cord Stimulation Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates selected patients for spinal cord stimulation, including diagnosis, treatment history, functional limitations, and medical and psychological suitability.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Spinal Cord Stimulation Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates selected patients for spinal cord stimulation, including diagnosis, treatment history, functional limitations, and medical and psychological suitability.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spinal Cord Stimulation Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates selected patients for spinal cord stimulation, including diagnosis, treatment history, functional limitations, and medical and psychological suitability.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Spinal Cord Stimulation Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates selected patients for spinal cord stimulation, including diagnosis, treatment history, functional limitations, and medical and psychological suitability.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalProcedure", name: "Spinal Cord Stimulation" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Spinal Cord Stimulation Evaluation", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Selected Patients Only",
    body: "Spinal cord stimulation is not appropriate for every patient with chronic pain. Careful evaluation is required to determine whether a patient may be an appropriate candidate.",
  },
  {
    heading: "Comprehensive Evaluation",
    body: "Evaluation may include review of diagnosis, imaging and treatment history, medication history, prior procedural response, functional limitations, and medical and psychological suitability.",
  },
  {
    heading: "Trial Before Permanent",
    body: "When clinically appropriate, a temporary stimulation trial is typically considered before any discussion of permanent implantation. Response to the trial informs next steps.",
  },
];

export default function SpinalCordStimulationEvaluationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Procedures
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Spinal Cord Stimulation
              <br />
              <em className="not-italic text-[#888]">Evaluation.</em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed">
              Spinal cord stimulation may be considered for selected patients with chronic
              nerve-related pain, persistent pain after spine surgery, or certain complex pain
              conditions. Evaluation determines whether a patient may be an appropriate
              candidate based on their overall clinical picture.
            </p>
          </div>
          <div className="hidden md:block w-[460px] shrink-0 relative self-stretch">
            <Image
              src="/images/procedures/spinal-cord-stimulation-hero.jpg"
              alt="Spinal cord stimulation lead placement medical illustration."
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">In Brief</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {inBrief.map((item, i) => (
              <div key={item.heading} className={`p-6 ${i < inBrief.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]" : ""}`}>
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2 className="font-bold text-[#0a0a0a] text-sm mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {item.heading}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Spinal Cord Stimulation?
            </h2>
            <p>
              Spinal cord stimulation (SCS) is an interventional pain management option that
              delivers low-level electrical signals to the spinal cord through leads placed in
              the epidural space. These signals may modify pain perception in selected patients
              with certain types of chronic pain.
            </p>
            <p>
              SCS may be considered for selected patients with chronic nerve-related pain,
              persistent pain after spine surgery, complex regional pain syndrome, or certain
              neuropathic pain conditions when other treatments have not provided adequate
              relief. SCS is not appropriate for every patient with chronic pain, and response
              to treatment varies among individuals.
            </p>
          </div>
        </div>
      </section>

      {/* PATIENT CONSIDERATION */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Candidates</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Who May Be Considered?
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Patients who may be evaluated for spinal cord stimulation include those with:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Chronic nerve-related pain that has not responded adequately to conservative or medical treatment",
                "Persistent pain after spine surgery when other treatments have been tried",
                "Complex regional pain syndrome when clinically appropriate",
                "Certain neuropathic pain conditions when prior treatments have not provided sufficient relief",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              SCS is not a first-line treatment. It is typically considered after appropriate
              conservative, medical, and other interventional options have been tried.
            </p>
          </div>
        </div>
      </section>

      {/* EVALUATION APPROACH */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Approach</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How Dr. Dardashti Evaluates for Spinal Cord Stimulation.
            </h2>
            <p>
              Evaluation for spinal cord stimulation includes a detailed review of the patient's
              diagnosis, imaging and treatment history, medication history, prior procedural
              responses, and functional limitations. Medical and psychological suitability are
              also considered as part of the evaluation process.
            </p>
            <p>
              The goal of evaluation is to determine whether SCS is an appropriate treatment
              consideration for an individual patient based on the overall clinical picture,
              rather than any single finding or symptom in isolation.
            </p>
          </div>
        </div>
      </section>

      {/* THE TRIAL PROCESS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Trial</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              The Trial Process.
            </h2>
            <p>
              When spinal cord stimulation is considered clinically appropriate, a temporary
              stimulation trial is typically considered before any discussion of permanent
              implantation. The trial allows assessment of whether the therapy provides
              meaningful benefit for the individual patient.
            </p>
            <p>
              Response to SCS varies among patients. Not all patients who undergo a trial will
              proceed to permanent implantation, and not all patients who receive a permanent
              implant experience sustained long-term benefit. Patient selection, realistic
              expectations, and ongoing clinical reassessment are important components of
              the process.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Limitations</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Important Limitations.
            </h2>
            <p>
              Spinal cord stimulation is not appropriate for every patient with chronic pain.
              Response to treatment varies and cannot be predicted in advance. SCS is typically
              considered after other treatments have been tried. A formal clinical evaluation is
              required to determine whether SCS is an appropriate consideration for any individual
              patient.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from
              the San Fernando Valley, Santa Clarita Valley, and surrounding Los Angeles
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-[#f9f7f4] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Related</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Related Conditions &amp; Procedures.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/conditions/crps-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Complex Regional Pain Syndrome Evaluation →</Link></li>
              <li><Link href="/procedures/radiofrequency-ablation" className="text-[#c8a020] hover:underline tracking-wide">Radiofrequency Ablation →</Link></li>
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
