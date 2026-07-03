import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/myofascial-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Myofascial Pain Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates myofascial pain — muscle and soft-tissue pain with trigger-point patterns often related to posture, overuse, or overlap with spine and joint pain.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Myofascial Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates myofascial pain — muscle and soft-tissue pain with trigger-point patterns often related to posture, overuse, or overlap with spine and joint pain.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myofascial Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates myofascial pain — muscle and soft-tissue pain with trigger-point patterns often related to posture, overuse, or overlap with spine and joint pain.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Myofascial Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates myofascial pain — muscle and soft-tissue pain with trigger-point patterns often related to posture, overuse, or overlap with spine and joint pain.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Myofascial Pain Syndrome" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Myofascial Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Muscle and Soft-Tissue Pain",
    body: "Myofascial pain arises from muscles and their surrounding fascia. It is often characterized by localized tenderness and reproducible referred pain patterns that can be provoked by pressure on specific points within muscle tissue.",
  },
  {
    heading: "Overlapping With Other Conditions",
    body: "Myofascial pain frequently coexists with spine pain, joint pain, or radicular symptoms. It is often underrecognized as a contributing factor in patients with complex or persistent pain.",
  },
  {
    heading: "Multimodal Approach",
    body: "Management of myofascial pain typically emphasizes physical approaches, activity modification, and posture-related factors. Treatment is individualized and takes into account any overlapping pain conditions.",
  },
];

export default function MyofascialPainPage() {
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
            Myofascial Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Myofascial pain refers to pain that originates from muscles and the surrounding
            connective tissue. It is a recognized source of regional pain that can occur
            on its own or alongside other conditions affecting the spine, joints, or nervous
            system. Dr. Dardashti evaluates myofascial pain as part of a comprehensive
            assessment of the patient&apos;s overall pain picture.
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
              What Is Myofascial Pain?
            </h2>
            <p>
              Myofascial pain syndrome is a regional pain condition characterized by the
              presence of trigger points — localized areas within a muscle or its fascia that
              are tender to palpation and may produce a characteristic pattern of referred pain
              when compressed. The referred pain from a trigger point may be felt at a distance
              from the trigger point itself, which can sometimes make the source of pain
              difficult to identify.
            </p>
            <p>
              Myofascial pain can develop following injury, repetitive strain, sustained
              postures, or periods of physical or emotional stress. Affected muscles vary by
              patient and clinical context, but the paraspinal muscles, trapezius, gluteal
              muscles, and hip flexors are among those commonly involved in patients with
              spine and musculoskeletal pain complaints.
            </p>
            <p>
              The condition can exist in isolation or alongside other pain sources such as
              disc degeneration, facet joint pain, or joint pathology. In some patients, it
              is a significant contributor to the overall pain burden even when other
              structural findings are present on imaging.
            </p>
          </div>
        </div>
      </section>

      {/* COMMON PRESENTATIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Presentation</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Common Features and Presentations.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Myofascial pain may present in a variety of ways. Common features include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Regional aching or tightness in a muscle group, often aggravated by sustained posture or overuse",
                "Reproducible tenderness at specific points within the muscle",
                "Referred pain felt at a location distant from the tender spot",
                "Pain that is worsened by prolonged sitting, standing, or repetitive activity",
                "Stiffness or reduced range of motion in the affected region",
                "Symptoms that may fluctuate with stress, fatigue, sleep quality, or activity level",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* ILLUSTRATION: Myofascial Trigger Points */}
            <div className="max-w-2xl mt-10">
              <MedicalFigure
                variant="default"
                src="/images/anatomy/muscles/myofascial-trigger-points.png"
                alt="Myofascial trigger points showing localized tender points within muscle tissue and referred pain patterns radiating to distant areas"
                caption="Myofascial Trigger Points: Trigger points are tender spots within muscles that can refer pain to other locations when pressed. For example, a trigger point in the trapezius muscle can cause referred pain into the head. Identifying and treating trigger points is key to managing myofascial pain."
              />
            </div>
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
              How Dr. Dardashti Evaluates Myofascial Pain.
            </h2>
            <p>
              Evaluation includes a thorough history of pain onset, location, character,
              and aggravating factors — including occupational and activity-related patterns.
              The relationship of symptoms to posture, sleep, and prior treatments is also
              assessed.
            </p>
            <p>
              Physical examination includes palpation of the muscles in the affected region
              to identify tenderness, trigger points, and referred pain patterns. This is
              performed alongside assessment of range of motion and an evaluation of any
              underlying structural contributors — including the spine and adjacent joints.
            </p>
            <p>
              Myofascial pain can accompany or be secondary to other pain sources. When both
              myofascial and structural contributors are present, the evaluation considers
              the relative contribution of each to guide treatment prioritization.
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
              Treatment of myofascial pain is typically multimodal and individualized based
              on the severity, contributing factors, and prior treatment history. Options
              that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical therapy with a focus on stretching, posture correction, and soft-tissue techniques",
                "Activity modification and ergonomic guidance when occupational or postural factors contribute",
                "Medication management when clinically appropriate",
                "Trigger point injections for selected patients when discrete, reproducible trigger points are identified",
                "Addressing co-existing structural pain sources — such as facet joints or the sacroiliac joint — that may perpetuate muscle guarding",
                "Multimodal pain management planning when myofascial pain is part of a broader chronic pain presentation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Treatment recommendations are individualized. Not every patient requires
              injections, and addressing contributing postural or structural factors is often
              a central part of management.
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
              Myofascial pain is a clinical diagnosis based on history and physical examination.
              It does not typically show on standard imaging. The extent to which it contributes
              to a patient&apos;s overall pain can be difficult to quantify, and treatment response
              varies among patients.
            </p>
            <p>
              A formal clinical evaluation is required to determine the appropriate treatment
              approach. This page is for general informational purposes only and does not
              constitute medical advice or create a physician-patient relationship.
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
              <li><Link href="/conditions/spine-related-pain" className="text-[#c8a020] hover:underline tracking-wide">Spine-Related Pain Evaluation →</Link></li>
              <li><Link href="/conditions/facet-mediated-pain" className="text-[#c8a020] hover:underline tracking-wide">Facet-Mediated Pain Evaluation →</Link></li>
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/myofascial-pain" />
    </>
  );
}
