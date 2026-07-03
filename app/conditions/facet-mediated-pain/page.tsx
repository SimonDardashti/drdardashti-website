import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";
import ReferencesSection from "@/components/ReferencesSection";
import { CITATIONS } from "@/lib/citations";

const PAGE_URL = "https://www.drdardashti.com/conditions/facet-mediated-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Facet-Mediated Pain Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates facet-mediated pain in the cervical, thoracic, and lumbar spine. Includes medial branch blocks and radiofrequency ablation when indicated.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Facet-Mediated Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates facet-mediated pain in the cervical, thoracic, and lumbar spine. Includes medial branch blocks and radiofrequency ablation when indicated.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facet-Mediated Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates facet-mediated pain in the cervical, thoracic, and lumbar spine. Includes medial branch blocks and radiofrequency ablation when indicated.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Facet-Mediated Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates facet-mediated pain in the cervical, thoracic, and lumbar spine. Includes medial branch blocks and radiofrequency ablation when indicated.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Facet Joint Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Facet-Mediated Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Facet Joints as Pain Generators",
    body: "Facet joints are paired joints at each spinal level that can become a significant source of axial neck, mid-back, or low back pain when they degenerate or become irritated.",
  },
  {
    heading: "No Single Defining Feature",
    body: "Facet-mediated pain does not always show clearly on imaging. Clinical history, examination, and response to diagnostic nerve blocks are important parts of evaluation.",
  },
  {
    heading: "Targeted Diagnostic Options",
    body: "Medial branch blocks can be used to assess whether facet joints are contributing to pain. For confirmed cases, radiofrequency ablation may be considered in selected patients.",
  },
];

export default function FacetMediatedPainPage() {
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
            Facet-Mediated Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Facet joints are small joints present at every level of the spine. When they become
            a primary source of pain, the condition is referred to as facet-mediated or facet
            joint pain. Dr. Dardashti evaluates this condition in the cervical, thoracic, and
            lumbar spine.
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

      {/* WHAT IS FACET-MEDIATED PAIN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Facet-Mediated Pain?
            </h2>
            <p>
              Facet joints — also called zygapophyseal joints — are paired synovial joints located
              at every vertebral level of the spine. They provide stability and guide movement between
              adjacent vertebrae. Like any joint in the body, facet joints can become arthritic,
              inflamed, or otherwise painful over time.
            </p>
            <p>
              Facet-mediated pain refers to pain that is primarily generated by one or more facet
              joints. It is a recognized cause of axial neck pain, mid-back pain, and low back pain.
              The pain is typically described as a deep, aching discomfort that may refer to adjacent
              areas — for example, cervical facet pain may refer to the shoulder or head, while lumbar
              facet pain may refer to the buttock or upper thigh.
            </p>
            <p>
              Unlike radicular pain, facet-mediated pain does not typically follow a specific nerve
              root pattern and usually does not cause neurologic symptoms such as numbness or weakness.
              However, the two conditions can coexist in the same patient.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION 1: Lumbar Facet Joint Anatomy */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/anatomy/joints/lumbar-facet-joint-anatomy.png"
            alt="Lumbar facet joint anatomy showing paired zygapophyseal joints at each vertebral level, located at the junction of articular processes with joint capsule and surrounding ligaments"
            caption="Lumbar Facet Joint Anatomy: Facet joints are present at every spinal level. These small joints guide spinal movement and can become arthritic or inflamed. When facet joints are the primary pain generator, targeting the nerves that supply them can help identify and treat the problem."
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
              Common Symptoms Associated With Facet Pain.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Symptoms that may suggest a facet joint contribution include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Axial neck, mid-back, or low back pain that is worse with extension or rotation",
                "Pain that is typically worse in the morning or after prolonged sitting",
                "Referred pain to the shoulder, buttock, or upper thigh without a specific nerve root pattern",
                "Tenderness on palpation near the facet joints",
                "Pain that improves with rest or forward flexion",
                "Absence of neurologic symptoms such as arm or leg weakness or numbness",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              These features are not diagnostic on their own. An accurate clinical evaluation is
              required to determine whether facet joints are the likely pain source.
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
              How Dr. Dardashti Evaluates Facet-Mediated Pain.
            </h2>
            <p>
              Evaluation begins with a detailed history of pain location, character, onset, and
              aggravating and relieving factors. Physical examination assesses paraspinal tenderness,
              range of motion, and pain pattern.
            </p>
            <p>
              Imaging — such as MRI or CT — may show degenerative changes at the facet joints, but
              these findings alone do not confirm that the facets are the source of pain. The
              correlation between imaging and clinical symptoms is imperfect, which is why
              diagnostic nerve blocks can play an important role in the evaluation process.
            </p>
            <p>
              Medial branch blocks — image-guided injections that temporarily anesthetize the nerves
              supplying the facet joints — can provide useful diagnostic information. A positive
              response to a medial branch block suggests that facet joints are a likely contributor
              and may support consideration of radiofrequency ablation in appropriate patients.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION 2: Facet Arthritis */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/anatomy/spine/facet-arthritis.png"
            alt="Facet arthritis showing degenerative changes at lumbar facet joint including cartilage loss, bone spur formation, and joint space narrowing with inflammatory changes"
            caption="Facet Arthritis: This shows degenerative changes that can occur in facet joints over time. While imaging can reveal arthritis, the clinical picture is what matters—some patients with severe facet arthritis on MRI have minimal pain, while others with mild findings have significant symptoms."
          />
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
              Treatment is based on the clinical evaluation and the patient&apos;s prior treatment
              history. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical therapy and activity-based approaches to reduce facet joint loading",
                "Medication management when clinically appropriate",
                "Facet joint injections for diagnostic and potentially therapeutic purposes",
                "Medial branch blocks as a diagnostic step to assess facet contribution",
                "Radiofrequency ablation for selected patients with confirmed facet-mediated pain who respond to diagnostic blocks",
                "Reassessment and ongoing monitoring of treatment response",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient with suspected facet-mediated pain requires an injection or
              ablation procedure. Recommendations are individualized based on clinical evaluation
              and goals.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION 3: Facet Joint Innervation */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/anatomy/nerves/facet-joint-innervation.png"
            alt="Lumbar facet joint innervation showing medial branches of dorsal rami innervating facet joints from multiple spinal levels, with neural pathway anatomy"
            caption="Facet Joint Innervation: Facet joints are supplied by medial branches of the dorsal rami—nerves that can be targeted with diagnostic blocks or ablation. Understanding this anatomy explains why medial branch blocks can identify facet-mediated pain and why radiofrequency ablation can provide targeted pain relief."
          />
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
              Facet-mediated pain cannot be diagnosed based on imaging alone, and no single
              clinical feature reliably confirms the diagnosis. Response to treatment varies
              among patients. Radiofrequency ablation does not provide permanent relief in all
              patients, and effects may diminish over time.
            </p>
            <p>
              A formal clinical evaluation is required to determine whether facet-focused
              treatment is appropriate for any individual patient. This page is for general
              informational purposes only and does not constitute medical advice.
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
              <li><Link href="/conditions/spine-related-pain" className="text-[#c8a020] hover:underline tracking-wide">Spine-Related Pain Evaluation →</Link></li>
              <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-[#c8a020] hover:underline tracking-wide">Facet Joint Injections &amp; Medial Branch Blocks →</Link></li>
              <li><Link href="/procedures/radiofrequency-ablation" className="text-[#c8a020] hover:underline tracking-wide">Radiofrequency Ablation →</Link></li>
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <ReferencesSection references={CITATIONS["/conditions/facet-mediated-pain"]} />

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/facet-mediated-pain" />
    </>
  );
}
