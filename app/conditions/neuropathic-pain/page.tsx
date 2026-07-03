import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";
import ReferencesSection from "@/components/ReferencesSection";
import { CITATIONS } from "@/lib/citations";

const PAGE_URL = "https://www.drdardashti.com/conditions/neuropathic-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Neuropathic Pain Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates neuropathic pain — chronic pain arising from nerve injury or dysfunction — including peripheral neuropathy, post-surgical nerve pain, and complex regional pain. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Neuropathic Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates neuropathic pain — chronic pain arising from nerve injury or dysfunction — including peripheral neuropathy, post-surgical nerve pain, and complex regional pain. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuropathic Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates neuropathic pain — chronic pain arising from nerve injury or dysfunction — including peripheral neuropathy, post-surgical nerve pain, and complex regional pain. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Neuropathic Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates neuropathic pain — chronic pain arising from nerve injury or dysfunction — including peripheral neuropathy, post-surgical nerve pain, and complex regional pain. Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Neuropathic Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Neuropathic Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Pain From the Nervous System",
    body: "Neuropathic pain arises from injury or dysfunction of the peripheral or central nervous system — rather than from tissue damage alone. It often has a distinct character and requires different treatment strategies.",
  },
  {
    heading: "Multiple Possible Causes",
    body: "Peripheral neuropathy, nerve compression, post-surgical nerve injury, shingles, diabetic nerve involvement, and complex regional pain syndrome are among the conditions that can produce neuropathic pain.",
  },
  {
    heading: "Evaluation Guides Management",
    body: "Identifying the underlying mechanism and likely diagnosis helps guide treatment selection. Management may include medications, nerve-targeted procedures, and neuromodulation in selected patients.",
  },
];

export default function NeuropathicPainPage() {
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
            Neuropathic Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Neuropathic pain refers to pain that originates from damage or dysfunction of the
            nervous system itself — rather than from ongoing tissue injury. It can be one of
            the more challenging types of pain to evaluate and manage. Dr. Dardashti evaluates
            neuropathic pain conditions through a detailed clinical history, neurologic
            examination, and review of prior workup.
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

      {/* WHAT IS NEUROPATHIC PAIN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Neuropathic Pain?
            </h2>
            <p>
              Pain is broadly categorized by its mechanism. Nociceptive pain arises from
              activation of pain receptors in response to tissue damage or potential injury.
              Neuropathic pain, by contrast, arises from a lesion or disease affecting the
              somatosensory nervous system — either in the peripheral nerves or the central
              nervous system.
            </p>
            <p>
              This distinction matters clinically because neuropathic pain often responds
              differently to treatment than nociceptive pain. Medications that work well for
              inflammatory or musculoskeletal pain may be less effective for neuropathic
              mechanisms, and certain treatments — such as neuromodulation — are specifically
              designed for nerve-mediated pain.
            </p>
            <p>
              Neuropathic pain can have many causes. Peripheral causes include nerve compression,
              diabetic neuropathy, post-herpetic neuralgia (following shingles), post-surgical
              nerve injury, and trauma to peripheral nerves. Central causes may include
              conditions affecting the spinal cord or brain. Complex regional pain syndrome
              involves features of both peripheral and central sensitization.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Neuropathic Pain Mechanism */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            role="mechanism"
            src="/images/conditions/peripheral-neuropathy/peripheral-neuropathy.png"
            alt="Neuropathic pain showing peripheral nerve damage, pain signal transmission along nerve fibers, spinal cord processing, and brain pain perception pathways"
            caption="Neuropathic Pain Pathways: Unlike pain from tissue damage (nociceptive pain), neuropathic pain arises when the nervous system itself is damaged or diseased. In peripheral neuropathies, nerve fibers may be damaged or dysfunctional, leading to abnormal pain signaling. These signals travel along damaged fibers to the spinal cord and brain. Understanding nerve-based mechanisms helps guide treatment selection — neuropathic pain often requires different medications and may respond to neuromodulation therapies."
            priority={true}
          />
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Symptoms</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Common Features of Neuropathic Pain.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Neuropathic pain often has a distinctive quality that differs from typical
              musculoskeletal pain. Features that may suggest a neuropathic component include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Burning, shooting, or electric shock-like pain",
                "Allodynia — pain produced by a stimulus that would not normally cause pain, such as light touch",
                "Hyperalgesia — an exaggerated pain response to a stimulus that would normally produce only mild pain",
                "Numbness, tingling, or a pins-and-needles sensation in the affected area",
                "Pain that is present at rest or at night, sometimes without an obvious mechanical trigger",
                "Pain persisting beyond expected healing time following injury or surgery",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              These features are not specific to any single diagnosis and require clinical
              evaluation to interpret in the context of each patient&apos;s history and examination.
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
              How Dr. Dardashti Evaluates Neuropathic Pain.
            </h2>
            <p>
              Evaluation begins with a thorough history of pain onset, character, location,
              and any identifiable precipitating event — such as surgery, injury, infection,
              or a known systemic condition. Prior diagnostic workup, including nerve conduction
              studies, laboratory results, and imaging, is reviewed when available.
            </p>
            <p>
              The neurologic examination focuses on characterizing sensory findings — including
              testing for allodynia, hyperalgesia, and sensory loss — as well as motor and
              reflex findings that may help localize the level or distribution of nerve involvement.
            </p>
            <p>
              Identifying the underlying mechanism and diagnosis as specifically as possible
              helps guide treatment. For example, peripheral nerve entrapment may respond to
              targeted nerve blocks, while more diffuse or central neuropathic conditions may
              require a broader multimodal approach.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
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
              Treatment is individualized based on the likely mechanism, prior treatment history,
              and functional goals. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Medications with evidence for neuropathic pain, such as certain anticonvulsants, antidepressants, or topical agents when appropriate",
                "Targeted nerve blocks for peripheral nerve conditions when anatomically feasible",
                "Spinal cord stimulation evaluation for selected patients with refractory neuropathic pain",
                "Coordinated care with neurology or other specialists depending on the underlying condition",
                "Multimodal pain management planning incorporating functional rehabilitation",
                "Reassessment and adjustment of the treatment plan based on response",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Neuropathic pain can be challenging to treat, and no single approach works for
              every patient. The goal of evaluation is to develop a treatment plan that is
              tailored to the individual&apos;s underlying condition and clinical presentation.
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
              Neuropathic pain is heterogeneous and may not fully resolve with any available
              treatment. Response is variable and often incomplete. The goal of management
              is typically to reduce pain to a manageable level and improve function, rather
              than complete elimination of symptoms.
            </p>
            <p>
              A formal clinical evaluation is required to determine an appropriate treatment
              plan for any individual patient. This page is for general informational purposes
              only and does not constitute medical advice or create a physician-patient relationship.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from
              the San Fernando Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
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
              <li><Link href="/procedures/spinal-cord-stimulation-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Spinal Cord Stimulation Evaluation →</Link></li>
              <li><Link href="/conditions/sciatica-radicular-pain" className="text-[#c8a020] hover:underline tracking-wide">Sciatica and Radicular Pain Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <ReferencesSection references={CITATIONS["/conditions/neuropathic-pain"]} />

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/neuropathic-pain" />
    </>
  );
}
