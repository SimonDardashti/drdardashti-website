import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/chronic-pain-syndrome-evaluation";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Chronic Pain Syndrome Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates chronic pain syndrome — assessing pain duration, distribution, function, prior treatments, and contributing factors to identify treatable pain generators. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Chronic Pain Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates chronic pain syndrome — assessing pain duration, distribution, function, prior treatments, and contributing factors to identify treatable pain generators. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronic Pain Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates chronic pain syndrome — assessing pain duration, distribution, function, prior treatments, and contributing factors to identify treatable pain generators. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Chronic Pain Syndrome Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates chronic pain syndrome — assessing pain duration, distribution, function, prior treatments, and contributing factors to identify treatable pain generators. Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Chronic Pain Syndrome" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Chronic Pain Syndrome Evaluation", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Pain That Persists Over Time",
    body: "Chronic pain is generally defined as pain that persists beyond three to six months, beyond the expected healing period, or in association with a condition that is ongoing. It is a significant clinical problem that affects function and quality of life.",
  },
  {
    heading: "Evaluation Looks at the Full Picture",
    body: "A chronic pain evaluation assesses pain duration, distribution, character, functional impact, prior treatments and their responses, current medications, imaging and diagnostic findings, and the overall clinical context.",
  },
  {
    heading: "The Goal Is Identification of Treatable Factors",
    body: "Not all chronic pain has a fully identifiable structural source, but many patients have treatable contributors that have not been adequately addressed. Evaluation aims to identify those contributors and develop a rational next step.",
  },
];

export default function ChronicPainSyndromeEvaluationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Conditions Evaluated
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Chronic Pain Syndrome
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Chronic pain is pain that persists over an extended period and may involve
            multiple contributing factors. An evaluation for chronic pain syndrome looks
            systematically at the patient&apos;s pain history, functional status, prior
            treatments, and current clinical picture — with the goal of identifying
            what remains treatable and what realistic next steps look like.
          </p>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">In Brief</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {inBrief.map((item, i) => (
              <div
                key={item.heading}
                className={`p-6 ${i < inBrief.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2
                  className="font-bold text-[#0a0a0a] text-sm mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
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
              Understanding Chronic Pain Syndrome.
            </h2>
            <p>
              Chronic pain syndrome refers to a pattern of persistent pain that has been
              present long enough to affect function, daily activity, sleep, or overall
              well-being. Unlike acute pain — which typically resolves as the underlying
              injury heals — chronic pain may continue or evolve over months and years,
              with contributions from both structural and neurobiological factors.
            </p>
            <p>
              It is important to recognize that chronic pain is a real and legitimate
              medical condition. Patients with chronic pain are not exaggerating their
              experience. The mechanisms underlying chronic pain are well studied and
              include ongoing structural contributors, peripheral nerve sensitization,
              and changes in how the central nervous system modulates and amplifies pain
              signals over time.
            </p>
            <p>
              Many patients with long-standing pain have not had a comprehensive evaluation
              that addresses all relevant factors. Some have seen multiple providers without
              a systematic approach to identifying what remains addressable. The purpose
              of a chronic pain syndrome evaluation is to take stock of the full clinical
              picture and determine what can realistically be improved.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Chronic Pain Mechanism */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            role="mechanism"
            src="/images/conditions/chronic-pain-mechanism.png"
            alt="Chronic pain syndrome showing transition from acute to chronic pain, peripheral sensitization, central sensitization, and neuroplastic changes in pain processing pathways"
            caption="From Acute to Chronic Pain: Chronic pain can develop when pain signals persist beyond the initial injury healing period. While acute pain is an important warning signal, chronic pain involves changes in how the nervous system processes pain — including peripheral sensitization (nerves become increasingly responsive), central sensitization (the spinal cord and brain amplify pain signals), and neuroplastic changes. Understanding these mechanisms helps inform treatment approaches."
            priority={true}
          />
        </div>
      </section>

      {/* WHAT THE EVALUATION INCLUDES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluation</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What the Evaluation Examines.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              A chronic pain syndrome evaluation is comprehensive. It typically covers:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Duration and onset of pain — when it began, how it has changed over time, and whether it is continuous or episodic",
                "Pain distribution and character — location, radiation pattern, quality, and intensity",
                "Functional impact — how pain affects activity, mobility, sleep, work, and daily life",
                "Prior treatments and their responses — what has been tried, for how long, and whether it helped",
                "Current medications and their effects on the pain",
                "Prior imaging and diagnostic studies — reviewed in the context of the clinical presentation",
                "Physical and neurologic examination to identify current clinical findings",
                "Identification of structural pain generators that may have been missed or may have changed over time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Treatment Directions That May Be Considered.
            </h2>
            <p>
              Following evaluation, treatment planning is individualized and evidence-informed.
              Where structural contributors are identified — such as facet-mediated pain,
              sacroiliac joint involvement, radicular symptoms, or neuropathic components —
              targeted interventional options may be appropriate for selected patients.
            </p>
            <p>
              For patients where sensitization or functional contributors are prominent,
              treatment planning extends beyond procedures and may include medication
              optimization, physical rehabilitation, and coordination with appropriate
              specialists. The intent is to identify what is addressable and create a
              structured plan — not to pursue every possible intervention indiscriminately.
            </p>
            <p>
              Neuromodulation — such as spinal cord stimulation — may be considered for
              selected patients with refractory neuropathic or mixed chronic pain when
              more conservative approaches have been insufficient.
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
              Chronic pain is often difficult to fully resolve. The goal of evaluation and
              treatment is to reduce pain meaningfully, improve function, and identify what
              is realistically achievable — not to eliminate all pain in every patient.
              Some patients have conditions where complete pain resolution is unlikely, and
              honest discussion about realistic expectations is part of the clinical process.
            </p>
            <p>
              A formal clinical evaluation is required to determine the appropriate approach
              for any individual patient. This page is for general informational purposes only
              and does not constitute medical advice or create a physician-patient relationship.
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
              <li><Link href="/conditions/complex-pain-conditions" className="text-[#c8a020] hover:underline tracking-wide">Complex Pain Conditions →</Link></li>
              <li><Link href="/conditions/neuropathic-pain" className="text-[#c8a020] hover:underline tracking-wide">Neuropathic Pain Evaluation →</Link></li>
              <li><Link href="/conditions/spine-related-pain" className="text-[#c8a020] hover:underline tracking-wide">Spine-Related Pain Evaluation →</Link></li>
              <li><Link href="/conditions/myofascial-pain" className="text-[#c8a020] hover:underline tracking-wide">Myofascial Pain Evaluation →</Link></li>
              <li><Link href="/procedures/spinal-cord-stimulation-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Spinal Cord Stimulation Evaluation →</Link></li>
              <li><Link href="/procedures/radiofrequency-ablation" className="text-[#c8a020] hover:underline tracking-wide">Radiofrequency Ablation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/chronic-pain-syndrome-evaluation" />
    </>
  );
}
