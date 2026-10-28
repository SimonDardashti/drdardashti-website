import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/complex-pain-conditions";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Complex Pain Conditions | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates complex pain conditions — presentations involving overlapping spine, joint, nerve, muscle, post-surgical, and sensitization contributors — in Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Complex Pain Conditions | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates complex pain conditions — presentations involving overlapping spine, joint, nerve, muscle, post-surgical, and sensitization contributors — in Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complex Pain Conditions | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates complex pain conditions — presentations involving overlapping spine, joint, nerve, muscle, post-surgical, and sensitization contributors — in Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Complex Pain Conditions | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates complex pain conditions — presentations involving overlapping spine, joint, nerve, muscle, post-surgical, and sensitization contributors — in Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Complex Pain Conditions" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Complex Pain Conditions", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Pain With Multiple Contributors",
    body: "Some patients present with pain that involves more than one source or mechanism. These complex presentations require a broader evaluation to identify and prioritize the contributing factors.",
  },
  {
    heading: "Avoiding Overly Narrow Explanations",
    body: "When pain is attributed to a single imaging finding or a single diagnosis without accounting for other contributors, treatment may be less effective. A more complete clinical picture leads to a better-matched treatment plan.",
  },
  {
    heading: "Individualized Evaluation and Planning",
    body: "Each patient with a complex pain presentation is evaluated individually. The goal is to identify what is most likely driving the pain, what is amenable to treatment, and what realistic expectations look like for that individual.",
  },
];

export default function ComplexPainConditionsPage() {
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
            Complex Pain
            <br />
            <em className="not-italic text-[#888]">Conditions.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Some patients present with pain that cannot be readily explained by a single
            structural finding or diagnosis. These presentations may involve overlapping
            contributors from the spine, joints, nerves, muscles, prior surgeries, or
            changes in how the nervous system processes pain. Dr. Dardashti evaluates
            complex pain presentations with a systematic clinical approach aimed at
            identifying what is most likely driving the patient&apos;s symptoms.
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
              What Makes a Pain Condition Complex?
            </h2>
            <p>
              Pain becomes clinically complex when it does not fit neatly into a single
              diagnosis, when multiple structures or mechanisms appear to be involved, or
              when prior treatment directed at an identified finding has not produced
              expected improvement. These presentations are common in pain medicine practice
              and require a broader lens than a narrowly focused evaluation can provide.
            </p>
            <p>
              Examples of overlapping contributors include a patient with lumbar disc
              disease and concurrent sacroiliac joint pain and myofascial involvement;
              a patient with cervical radiculopathy and co-existing occipital nerve
              irritation; or a patient with post-surgical pain that reflects both structural
              residual and neuropathic components. In each case, treating only one
              contributor may leave significant pain unaddressed.
            </p>
            <p>
              Complexity may also arise from changes in how the central nervous system
              processes pain over time — sometimes referred to as central sensitization —
              which can amplify the experience of pain beyond what local structural findings
              alone would produce. Recognizing this component is important when planning
              treatment, as it suggests that local interventions may have limited effect
              without addressing the broader pain picture.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Complex Pain Mechanisms */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            role="mechanism"
            src="/images/conditions/pain-mechanisms.png"
            alt="Complex pain conditions showing multiple overlapping pain mechanisms including local structural pain generators, peripheral sensitization, central sensitization, and neuropathic components"
            caption="Understanding Complex Pain: Complex pain conditions often involve multiple overlapping mechanisms. A single patient may have local structural contributors (e.g., facet joint arthritis, disc herniation) plus peripheral sensitization (nerves increasingly responsive) plus central sensitization (nervous system amplifying pain signals). This multidimensional picture explains why treating only one component may leave significant pain unaddressed. Comprehensive evaluation aims to identify all contributing mechanisms and develop a proportionate treatment plan."
            priority={true}
          />
        </div>
      </section>

      {/* EVALUATION APPROACH */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluation</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Evaluation of Complex Pain Presentations.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              For patients with complex or overlapping pain, evaluation typically involves:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "A thorough history that goes beyond the primary complaint to capture the full duration, evolution, and pattern of pain",
                "Review of prior imaging, diagnostic studies, and prior treatment records — including which treatments improved or did not change symptoms",
                "A comprehensive physical and neurologic examination that assesses all potentially relevant regions, not just the area of chief complaint",
                "Systematic consideration of structural contributors across the spine, joints, and soft tissues",
                "Assessment for features consistent with neuropathic pain or central sensitization",
                "Prioritization of the most likely contributors as a basis for a rational treatment plan",
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

      {/* TREATMENT APPROACH */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              A Rational Approach to Treatment Planning.
            </h2>
            <p>
              For patients with complex pain conditions, treatment planning is individualized
              and takes into account the relative contribution of each identified factor.
              Not all contributors can or need to be treated simultaneously. A prioritized
              approach typically addresses the most likely primary pain generators first,
              with reassessment to guide next steps.
            </p>
            <p>
              Treatment may incorporate image-guided interventional procedures targeted at
              specific structural contributors, medications appropriate to the specific
              mechanism, physical rehabilitation to address functional deficits and movement
              contributors, and coordination with other specialists when indicated. In patients
              where central sensitization is prominent, treatment planning extends beyond
              structural intervention.
            </p>
            <p>
              The goal is to develop a plan that is realistic and well-matched to the clinical
              picture — not to suggest that all pain can be eliminated or that every finding
              on imaging warrants a procedure.
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
              Complex pain conditions are among the most difficult to evaluate and treat.
              Even a thorough evaluation cannot always identify all contributing factors,
              and treatment response is highly variable. The management of complex pain
              often requires ongoing reassessment and adjustment rather than a single
              definitive intervention.
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
              <li><Link href="/conditions/chronic-pain-syndrome-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Chronic Pain Syndrome Evaluation →</Link></li>
              <li><Link href="/conditions/neuropathic-pain" className="text-[#c8a020] hover:underline tracking-wide">Neuropathic Pain Evaluation →</Link></li>
              <li><Link href="/conditions/myofascial-pain" className="text-[#c8a020] hover:underline tracking-wide">Myofascial Pain Evaluation →</Link></li>
              <li><Link href="/conditions/spine-related-pain" className="text-[#c8a020] hover:underline tracking-wide">Spine-Related Pain Evaluation →</Link></li>
              <li><Link href="/conditions/joint-pain" className="text-[#c8a020] hover:underline tracking-wide">Joint Pain Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/complex-pain-conditions" />
    </>
  );
}
