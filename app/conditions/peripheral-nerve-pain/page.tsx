import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

const PAGE_URL = "https://www.drdardashti.com/conditions/peripheral-nerve-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Peripheral Nerve Pain Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates peripheral nerve pain — focal nerve irritation, entrapment, and post-injury nerve pain distinct from spinal radiculopathy. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Peripheral Nerve Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates peripheral nerve pain — focal nerve irritation, entrapment, and post-injury nerve pain distinct from spinal radiculopathy. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peripheral Nerve Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates peripheral nerve pain — focal nerve irritation, entrapment, and post-injury nerve pain distinct from spinal radiculopathy. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Peripheral Nerve Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates peripheral nerve pain — focal nerve irritation, entrapment, and post-injury nerve pain distinct from spinal radiculopathy. Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Peripheral Nerve Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Peripheral Nerve Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Distinct From Spinal Radiculopathy",
    body: "Peripheral nerve pain arises from irritation or injury to nerves outside the spinal canal. It is evaluated differently from radiculopathy and may involve focal entrapment, post-traumatic changes, or other peripheral mechanisms.",
  },
  {
    heading: "Variable Presentation",
    body: "Symptoms may include focal burning, shooting pain, numbness, or tingling in a distribution that does not follow a typical dermatomal pattern. Location and character of symptoms help guide evaluation.",
  },
  {
    heading: "Accurate Diagnosis Matters",
    body: "Peripheral nerve pain is often confused with radiculopathy or musculoskeletal pain. Distinguishing between these requires careful clinical evaluation before treatment is selected.",
  },
];

export default function PeripheralNervePainPage() {
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
            Peripheral Nerve Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Peripheral nerve pain describes pain that originates from damage or irritation
            of nerves outside the spinal cord and nerve roots. It can overlap in presentation
            with radiculopathy and other pain conditions, which is why careful clinical
            evaluation is central to identifying the likely source.
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
              What Is Peripheral Nerve Pain?
            </h2>
            <p>
              The peripheral nervous system includes all the nerves that travel beyond the
              spinal cord — through the limbs, torso, and extremities. When one or more of
              these nerves is compressed, stretched, injured, or otherwise irritated at a
              site outside the spine, the resulting pain is termed peripheral nerve pain or
              peripheral neuropathic pain.
            </p>
            <p>
              Common examples include nerve entrapment conditions — such as a nerve compressed
              beneath a ligament, at a fibrous tunnel, or at a site of scar tissue following
              surgery or injury. Unlike radiculopathy, where the problem originates at a
              spinal nerve root, peripheral nerve pain typically involves a more distal segment
              of the nerve and may produce symptoms confined to a specific nerve&apos;s
              distribution rather than a dermatomal pattern.
            </p>
            <p>
              The distinction matters clinically because it affects both the diagnostic approach
              and the treatment options that may be considered. Misidentifying a peripheral nerve
              problem as radiculopathy — or vice versa — can lead to treatments that are not well
              matched to the underlying source.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Peripheral Neuropathy */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            role="anatomy"
            src="/images/conditions/peripheral-neuropathy/peripheral-neuropathy.png"
            alt="Peripheral nerve anatomy showing damage to peripheral nerves, nerve fiber degeneration, and pain signal transmission to spinal cord and brain"
            caption="Peripheral Nerve Anatomy: Peripheral nerves extend throughout the body, carrying sensory and motor signals between the spinal cord and all body tissues. Damage to these nerves—from diabetes, chemotherapy, trauma, infection, or other causes—produces neuropathic pain characterized by burning, tingling, or electrical sensations. Unlike spinal nerve compression which causes localized pain, peripheral neuropathy often affects multiple nerves and regions simultaneously. Understanding peripheral nerve distribution and the mechanisms of nerve damage (axonal degeneration, demyelination, inflammation) helps guide evaluation and targeted treatments including medications, procedures, and neuromodulation."
            priority={true}
          />
        </div>
      </section>

      {/* COMMON SYMPTOMS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Symptoms</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Common Symptoms and Presentations.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Peripheral nerve pain can present in a variety of ways depending on which nerve
              is involved and the nature of the injury or irritation. Common features include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Burning, shooting, or electric-like pain in a focal distribution",
                "Numbness or tingling in the territory of a specific peripheral nerve",
                "Pain that is reproduced or worsened by pressure at the site of nerve irritation",
                "Allodynia — discomfort with light touch over the affected area",
                "Weakness or loss of fine motor control if motor fibers are involved",
                "Symptoms that do not follow a typical radicular or dermatomal pattern",
                "Pain that persists or develops following surgery, trauma, or a prior injury in the area",
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

      {/* EVALUATION */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Approach</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How Dr. Dardashti Evaluates Peripheral Nerve Pain.
            </h2>
            <p>
              Evaluation begins with a detailed history of the onset of symptoms, their
              distribution, quality, and any precipitating event such as prior surgery,
              trauma, prolonged compression, or a known systemic condition. The relationship
              of symptoms to activity, posture, and provocative maneuvers is also assessed.
            </p>
            <p>
              The physical examination focuses on localizing the nerve involved — including
              palpation for tenderness at known entrapment sites, provocative testing, and
              a neurologic assessment of sensation, strength, and reflexes. When available,
              nerve conduction studies and electromyography reports are reviewed to help
              characterize the nature and severity of nerve involvement.
            </p>
            <p>
              Peripheral nerve pain can coexist with radiculopathy or central sensitization,
              which can complicate the clinical picture. When the diagnosis is uncertain,
              targeted diagnostic nerve blocks may help clarify the contributing anatomy
              before treatment decisions are made.
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
              Treatment depends on the nature, location, and severity of the nerve involvement,
              as well as prior treatment history. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Medications with evidence for peripheral neuropathic pain when clinically appropriate",
                "Targeted peripheral nerve blocks for diagnostic or therapeutic purposes in selected patients",
                "Activity modification and physical therapy approaches to reduce mechanical nerve irritation",
                "Coordination with neurology when electrodiagnostic evaluation or further workup is warranted",
                "Spinal cord stimulation evaluation for selected patients with refractory peripheral nerve pain",
                "Multimodal pain management planning incorporating functional goals",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient requires an injection or procedural intervention. Recommendations
              are based on individual clinical evaluation, the likely underlying mechanism, and
              prior treatment history.
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
              Peripheral nerve pain can be difficult to diagnose with certainty. Multiple
              contributing factors may be present simultaneously, and diagnostic testing does
              not always identify a clear anatomic source. Response to treatment varies
              among patients.
            </p>
            <p>
              A formal clinical evaluation is required to determine the appropriate diagnostic
              and treatment approach for any individual patient. This page is for general
              informational purposes only and does not constitute medical advice or create
              a physician-patient relationship.
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
              <li><Link href="/conditions/neuropathic-pain" className="text-[#c8a020] hover:underline tracking-wide">Neuropathic Pain Evaluation →</Link></li>
              <li><Link href="/conditions/sciatica-radicular-pain" className="text-[#c8a020] hover:underline tracking-wide">Sciatica and Radicular Pain Evaluation →</Link></li>
              <li><Link href="/procedures/spinal-cord-stimulation-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Spinal Cord Stimulation Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
