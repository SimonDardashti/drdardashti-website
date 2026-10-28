import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/crps-evaluation";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Complex Regional Pain Syndrome Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates complex regional pain syndrome using symptom history, physical examination, accepted diagnostic criteria, and review of relevant records.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Complex Regional Pain Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates complex regional pain syndrome using symptom history, physical examination, accepted diagnostic criteria, and review of relevant records.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complex Regional Pain Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates complex regional pain syndrome using symptom history, physical examination, accepted diagnostic criteria, and review of relevant records.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Complex Regional Pain Syndrome Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates complex regional pain syndrome using symptom history, physical examination, accepted diagnostic criteria, and review of relevant records.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Complex Regional Pain Syndrome" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Complex Regional Pain Syndrome Evaluation", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Complex Presentation",
    body: "CRPS involves a constellation of findings that may include pain, sensory changes, autonomic dysregulation, and motor or trophic changes. No single finding confirms the diagnosis.",
  },
  {
    heading: "Diagnostic Criteria",
    body: "Accepted diagnostic criteria describe features that must be present for a clinical diagnosis of CRPS. These criteria require careful clinical interpretation alongside the patient's history and examination.",
  },
  {
    heading: "Individualized Treatment",
    body: "Treatment planning for CRPS depends on clinical presentation, functional goals, and prior treatment response. Options may include physical therapy, medication management, and selected interventional approaches.",
  },
];

export default function CrpsEvaluationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Conditions Evaluated
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Complex Regional Pain
              <br />
              <em className="not-italic text-[#888]">Syndrome Evaluation.</em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed">
              Complex regional pain syndrome (CRPS) is a chronic pain condition that requires
              careful clinical evaluation. Diagnosis is based on accepted criteria interpreted
              in the context of the patient&apos;s history, symptoms, and physical examination.
            </p>
          </div>
          <div className="hidden md:block w-[300px] aspect-[3/4] shrink-0 relative overflow-hidden rounded-xl">
            <Image
              src="/images/conditions/crps-lower-leg-hero.webp"
              alt="Illustrative lower leg swelling and color change; these findings are not specific to CRPS."
              fill
              sizes="300px"
              className="object-cover object-center"
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
              What Is Complex Regional Pain Syndrome?
            </h2>
            <p>
              Complex regional pain syndrome (CRPS) is a chronic pain condition characterized
              by pain that is disproportionate to the inciting event or ongoing tissue injury,
              along with associated sensory, autonomic, and potentially motor and trophic
              changes. CRPS typically involves an extremity, though presentations vary in
              character and severity.
            </p>
            <p>
              CRPS Type I is described without an identified major nerve injury; Type II is
              associated with an identified major nerve injury. Type I does not prove that
              all nerve injury is absent. Clinical assessment is needed to interpret the distinction.
            </p>
            <p>
              CRPS is a clinical diagnosis. It requires careful evaluation to support, and other
              conditions that may produce similar symptoms — including other nerve disorders,
              vascular conditions, or musculoskeletal pathology — must be considered as part
              of the diagnostic process.
            </p>
          </div>
        </div>

      </section>

      {/* DIAGNOSTIC EVALUATION */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Diagnosis</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How CRPS Is Evaluated.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              The clinical Budapest Criteria require continuing pain disproportionate to an
              inciting event, at least one reported symptom in at least three of four categories,
              and at least one sign observed at evaluation in at least two categories. No other diagnosis should better
              explain the findings. A symptom is what the patient reports; a sign is what the
              clinician observes. The categories are:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Sensory — hyperalgesia (increased pain sensitivity) or allodynia (pain from normally non-painful stimuli)",
                "Vasomotor changes — skin temperature asymmetry or skin color changes",
                "Sudomotor and edema findings — swelling or sweating abnormalities",
                "Motor/trophic — reduced range of motion, weakness, tremor, dystonia, or changes to skin, hair, or nails",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#666] text-base leading-relaxed max-w-2xl">
              These findings must be interpreted in clinical context. Not all features are
              present in every patient, and findings may change over time or with treatment.
              Pain alone is not sufficient to support a diagnosis of CRPS. These are clinical
              criteria, not a self-diagnosis checklist or the separate research decision rule.
              Meeting diagnostic criteria does not by itself establish the cause of the condition.
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
              How Dr. Dardashti Evaluates CRPS.
            </h2>
            <p>
              Evaluation includes a detailed history of symptom onset, character, location, and
              progression, along with review of relevant prior records, imaging, and treatments.
              Physical examination focuses on identifying features consistent with accepted
              diagnostic criteria while considering alternative or contributing diagnoses.
            </p>
            <p>
              The clinical history — including the timing of symptom onset relative to any
              inciting event, the pattern of symptom evolution, prior treatments and their
              responses, and the patient&apos;s functional limitations — is an essential component
              of evaluation. The goal is a complete clinical picture, not a symptom checklist.
            </p>
            <h3 className="text-xl font-bold text-[#0a0a0a] pt-4">What information is useful for an evaluation?</h3>
            <p>
              Bring relevant prior records and test reports, a treatment and medication history,
              and a description of symptom changes and daily activities that have become difficult.
              Share patient-specific information through the appropriate medical office channel.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Treatment Options That May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Treatment for CRPS is individualized based on clinical presentation and functional
              goals. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical and occupational therapy coordination",
                "Medication management when clinically appropriate",
                "Selected nerve blocks or other procedures when clinically indicated",
                "Spinal cord stimulation evaluation for selected patients with refractory symptoms",
                "Ongoing reassessment based on treatment response and clinical findings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Treatment recommendations for CRPS are based on individual clinical evaluation
              and functional goals. Response to treatment varies among patients.
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
              CRPS is a complex condition that requires careful clinical evaluation. Diagnosis
              requires interpretation of findings in the context of accepted criteria and cannot
              be made from symptoms or imaging alone. Other conditions may produce similar
              findings. Treatment response varies and is not predictable in advance. A formal
              clinical evaluation is required for any individual patient.
              This page is for general informational purposes only and does not constitute
              medical advice or create a physician-patient relationship.
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
              <li><Link href="/procedures/spinal-cord-stimulation-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Spinal Cord Stimulation Evaluation →</Link></li>
              <li><Link href="/conditions/neuropathic-pain" className="text-[#c8a020] hover:underline tracking-wide">Neuropathic Pain Evaluation →</Link></li>
              <li><Link href="/conditions/complex-pain-conditions" className="text-[#c8a020] hover:underline tracking-wide">Complex Pain Conditions →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="bg-white py-12 px-6 border-t border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto space-y-4 text-sm text-[#555] leading-relaxed">
          <h2 className="text-xl font-bold text-[#0a0a0a]">Sources and scope</h2>
          <p>These references support the diagnostic framework and individualized treatment discussion. They do not predict an individual patient&apos;s diagnosis, cause, or treatment outcome.</p>
          <ul className="space-y-3">
            <li><a href="https://doi.org/10.1016/j.pain.2010.04.030" className="text-[#8a6b12] underline">Harden RN, Bruehl S, Perez RSGM, et al. Validation of proposed diagnostic criteria (the “Budapest Criteria”) for Complex Regional Pain Syndrome.</a> <em>Pain.</em> 2010;150(2):268–274.</li>
            <li><a href="https://doi.org/10.1093/pm/pnac046" className="text-[#8a6b12] underline">Harden RN, McCabe CS, Goebel A, et al. Complex Regional Pain Syndrome: Practical Diagnostic and Treatment Guidelines, 5th Edition.</a> <em>Pain Medicine.</em> 2022;23(Suppl 1):S1–S53.</li>
          </ul>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/crps-evaluation" />
    </>
  );
}
