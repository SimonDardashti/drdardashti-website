import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/persistent-pain-after-injury-or-surgery";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Persistent Pain After Injury or Surgery | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates persistent pain that continues after injury or surgery — including nerve irritation, scar-related sensitivity, joint contributors, and central sensitization — in Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Persistent Pain After Injury or Surgery | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates persistent pain that continues after injury or surgery — including nerve irritation, scar-related sensitivity, joint contributors, and central sensitization — in Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Persistent Pain After Injury or Surgery | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates persistent pain that continues after injury or surgery — including nerve irritation, scar-related sensitivity, joint contributors, and central sensitization — in Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Persistent Pain After Injury or Surgery | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates persistent pain that continues after injury or surgery — including nerve irritation, scar-related sensitivity, joint contributors, and central sensitization — in Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Persistent Post-Surgical Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Persistent Pain After Injury or Surgery", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Pain Beyond Expected Healing",
    body: "It is recognized that pain can persist long after a tissue injury has healed or a surgical procedure has been completed. This is not uncommon and has multiple possible contributing mechanisms.",
  },
  {
    heading: "Multiple Contributing Factors",
    body: "Persistent pain after injury or surgery may involve nerve irritation, altered movement patterns, scar tissue sensitivity, residual structural contributors, or changes in pain processing — often in combination.",
  },
  {
    heading: "Re-evaluation Is Important",
    body: "Rather than assuming the original diagnosis remains unchanged, a careful clinical re-evaluation aims to identify the current pain generators and contributors to guide a rational treatment approach.",
  },
];

export default function PersistentPainAfterInjuryOrSurgeryPage() {
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
            Persistent Pain After
            <br />
            <em className="not-italic text-[#888]">Injury or Surgery.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Pain that continues beyond the expected period of recovery from an injury or
            surgical procedure is a recognized clinical presentation. It can arise from a
            variety of mechanisms and often benefits from a thorough re-evaluation to
            identify which factors are currently driving the pain.
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
              Why Pain Can Persist After Injury or Surgery.
            </h2>
            <p>
              Healing after an injury or surgery involves a complex biological process,
              and tissue repair does not always mean the resolution of pain. A number of
              mechanisms can contribute to pain that persists or develops beyond the expected
              recovery period.
            </p>
            <p>
              Nerve irritation or injury may occur during the original event or as part of
              the surgical procedure — producing neuropathic pain in the affected area.
              Scar tissue formation can alter the mechanical environment, compress adjacent
              structures, or create areas of focal sensitivity. Changes in movement patterns
              that develop after an injury can place increased stress on nearby joints,
              muscles, or the spine.
            </p>
            <p>
              In some cases, changes in how the nervous system processes pain — sometimes
              called central sensitization — can amplify pain signals over time, making the
              experience of pain more intense or more widespread than the local tissue findings
              alone would suggest. Identifying which of these mechanisms is contributing is
              an important part of the clinical evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* POSSIBLE CONTRIBUTORS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Contributors</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Possible Contributing Factors.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Each patient&apos;s situation is different. Among the factors that may contribute
              to persistent pain after injury or surgery are:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Peripheral nerve irritation or injury at the site of trauma or surgical dissection",
                "Scar tissue sensitivity or nerve entrapment within scar formation",
                "Residual or new structural pathology — such as joint degeneration, disc changes, or ligament involvement — adjacent to the original injury or surgical site",
                "Altered biomechanics and movement patterns that develop secondary to the original injury",
                "Myofascial contributors — including muscle guarding, trigger points, and postural changes that persist after the primary injury has resolved",
                "Central sensitization, in which the nervous system develops an amplified response to pain signals over time",
                "Incomplete resolution of the original diagnosis, or an overlapping condition that was not identified at the time of the initial injury or surgery",
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

      {/* EVALUATION APPROACH */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Approach</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How Dr. Dardashti Approaches This Evaluation.
            </h2>
            <p>
              Evaluation begins with a thorough review of the prior injury or surgery,
              the original diagnosis, treatment received, and the timeline of pain relative
              to recovery. Relevant operative records, imaging, and prior treatment notes
              are reviewed when available.
            </p>
            <p>
              The current pain is assessed carefully — its location, character, distribution,
              and relationship to activity and posture — to identify whether it reflects
              the same mechanism as the original complaint or suggests new or overlapping
              contributors. A physical and neurologic examination assesses the current
              clinical picture independent of prior diagnoses.
            </p>
            <p>
              This re-evaluation process is not about questioning prior care. Its purpose
              is to understand the current pain generators as clearly as possible, so that
              a rational and individualized treatment plan can be developed.
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
              Treatment depends on the identified contributors and the patient&apos;s prior treatment
              history. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical therapy and movement rehabilitation to address altered biomechanics",
                "Medication management targeting the specific mechanism of persistent pain",
                "Targeted nerve blocks or joint injections when a focal peripheral contributor is identified",
                "Trigger point injections when myofascial pain is a significant contributor",
                "Neuromodulation evaluation — such as spinal cord stimulation — for selected patients with refractory neuropathic or mixed pain",
                "Multimodal pain management planning that addresses the full range of contributing factors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Treatment recommendations are individualized based on the clinical evaluation.
              Not every patient requires an interventional procedure.
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
              Persistent pain after injury or surgery is a complex clinical problem. Multiple
              contributing factors are often present simultaneously, and identifying all of
              them with certainty is not always possible. Response to treatment is variable
              and depends on the specific mechanisms involved.
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
              <li><Link href="/conditions/persistent-pain-after-spine-surgery" className="text-[#c8a020] hover:underline tracking-wide">Persistent Pain After Spine Surgery →</Link></li>
              <li><Link href="/conditions/neuropathic-pain" className="text-[#c8a020] hover:underline tracking-wide">Neuropathic Pain Evaluation →</Link></li>
              <li><Link href="/conditions/peripheral-nerve-pain" className="text-[#c8a020] hover:underline tracking-wide">Peripheral Nerve Pain Evaluation →</Link></li>
              <li><Link href="/conditions/myofascial-pain" className="text-[#c8a020] hover:underline tracking-wide">Myofascial Pain Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
