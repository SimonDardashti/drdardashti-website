import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/spine-related-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Spine-Related Pain Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates spine-related pain arising from discs, facet joints, sacroiliac joints, nerve roots, and other spinal structures in Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Spine-Related Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates spine-related pain arising from discs, facet joints, sacroiliac joints, nerve roots, and other spinal structures in Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spine-Related Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates spine-related pain arising from discs, facet joints, sacroiliac joints, nerve roots, and other spinal structures in Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Spine-Related Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates spine-related pain arising from discs, facet joints, sacroiliac joints, nerve roots, and other spinal structures in Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Spine-Related Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Spine-Related Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Multiple Possible Sources",
    body: "Spine pain can arise from intervertebral discs, facet joints, the sacroiliac joint, nerve roots, or surrounding soft tissues. Identifying the likely contributor is central to evaluation.",
  },
  {
    heading: "Region Matters",
    body: "Spine-related pain may be cervical (neck), thoracic (mid-back), or lumbar (low back) in origin. Each region has distinct anatomy and clinical features that guide evaluation.",
  },
  {
    heading: "Individualized Approach",
    body: "Treatment is based on the specific pain source, severity, duration, prior treatment history, and the patient's functional goals — not a single imaging finding or symptom in isolation.",
  },
];

export default function SpineRelatedPainPage() {
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
            Spine-Related Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            The spine is a complex structure, and pain originating from or near it can have
            several possible sources. Dr. Dardashti evaluates spine-related pain through
            a careful history, physical and neurologic examination, and review of available
            imaging — to identify the most likely contributing structures.
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

      {/* WHAT IS SPINE-RELATED PAIN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Spine-Related Pain?
            </h2>
            <p>
              Spine-related pain broadly refers to pain that originates from or is closely associated
              with the structures of the vertebral column — including the cervical, thoracic, and
              lumbar regions. It is among the most common reasons patients are referred for pain
              medicine evaluation.
            </p>
            <p>
              The spine contains many structures that can become sources of pain: intervertebral
              discs, facet joints, the sacroiliac joints, spinal nerve roots, ligaments, and
              paraspinal muscles. In some patients, more than one structure may be contributing,
              making accurate clinical evaluation important before treatment is planned.
            </p>
            <p>
              Spine-related pain may be primarily axial — meaning localized to the neck, mid-back,
              or low back — or it may radiate into the arms or legs when nerve roots are involved.
              The character, distribution, and pattern of pain help guide the evaluation.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Spine Anatomy */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            role="anatomy"
            src="/images/anatomy/spine/lumbar-radiculopathy.png"
            alt="Spine anatomy showing cervical, thoracic, and lumbar regions with intervertebral discs, facet joints, spinal nerve roots, and sacroiliac joint as potential pain generators"
            caption="Spine Anatomy and Pain Sources: The spine comprises three main regions—cervical (neck), thoracic (mid-back), and lumbar (low back)—each with distinct anatomy and potential pain generators. Multiple structures can contribute to spine pain: intervertebral discs (which can herniate or degenerate), facet joints (which can develop arthritis), spinal nerve roots (which can be compressed or irritated), sacroiliac joints, and supporting ligaments and muscles. Pain may be localized (axial) or radiating (radicular) depending on whether nerve roots are involved. Accurate evaluation requires understanding this complex anatomy and how different pain sources present clinically."
            priority={true}
          />
        </div>
      </section>

      {/* COMMON SOURCES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Sources</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Common Sources of Spine Pain.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Spine-related pain may arise from one or more of the following structures:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Intervertebral discs — including disc herniation, annular tears, or degenerative disc changes",
                "Facet joints — small paired joints at each spinal level that can become a source of axial pain",
                "Sacroiliac joints — the joints connecting the sacrum and the pelvis, which may contribute to low back and buttock pain",
                "Spinal nerve roots — which may be irritated or compressed, producing radicular or radiating symptoms",
                "Paraspinal muscles and ligaments — which can contribute to local pain, particularly following injury or prolonged mechanical stress",
                "Spinal stenosis — narrowing of the spinal canal or nerve exit foramina that may affect nerve roots or the spinal cord",
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

      {/* HOW DR. DARDASHTI EVALUATES */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Approach</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How Dr. Dardashti Evaluates Spine-Related Pain.
            </h2>
            <p>
              Evaluation begins with a thorough history of the pain — including its location,
              character, onset, and pattern — along with relevant medical history, prior imaging,
              and prior treatments and their outcomes. Understanding which activities aggravate or
              relieve symptoms helps narrow the likely pain generator.
            </p>
            <p>
              A physical and neurologic examination assesses posture, range of motion, palpation
              findings, and neurologic function. For patients with arm or leg symptoms, a neurologic
              exam helps determine whether nerve root involvement is likely and at which level.
            </p>
            <p>
              When imaging is available — such as MRI, CT, or plain radiographs — findings are
              reviewed alongside the clinical picture. Imaging alone is not sufficient to determine
              the appropriate treatment; it must be interpreted in the context of the patient&apos;s
              symptoms and examination.
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
              Treatment is individualized based on the suspected pain source and the full clinical
              evaluation. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical therapy coordination and activity modification guidance",
                "Medication management when clinically appropriate",
                "Epidural steroid injections for radicular or nerve-related symptoms",
                "Facet joint injections or medial branch blocks when facet-mediated pain is suspected",
                "Sacroiliac joint injections when sacroiliac joint involvement is a likely contributor",
                "Radiofrequency ablation for selected patients who respond to diagnostic nerve blocks",
                "Spinal cord stimulation evaluation for appropriate candidates with chronic refractory pain",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient requires an interventional procedure. Recommendations are based on
              individual clinical evaluation, prior treatment history, and functional goals.
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
              Spine-related pain is often multifactorial, and the same imaging finding may be
              associated with different clinical presentations in different patients. No evaluation
              or treatment can be guaranteed to identify or resolve the pain source in every case.
            </p>
            <p>
              A formal clinical evaluation is required to determine the appropriate diagnostic and
              treatment approach for any individual patient. This page is for general informational
              purposes only and does not constitute medical advice.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from the
              San Fernando Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
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
              <li><Link href="/conditions/facet-mediated-pain" className="text-[#c8a020] hover:underline tracking-wide">Facet-Mediated Pain Evaluation →</Link></li>
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/conditions/neck-pain" className="text-[#c8a020] hover:underline tracking-wide">Neck Pain Evaluation →</Link></li>
              <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-[#c8a020] hover:underline tracking-wide">Facet Joint Injections &amp; Medial Branch Blocks →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/spine-related-pain" />
    </>
  );
}
