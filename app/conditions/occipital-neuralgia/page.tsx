import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/occipital-neuralgia";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Occipital Neuralgia Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates occipital neuralgia — pain from the upper neck and base of skull radiating toward the scalp, distinguished from migraine and cervicogenic headache. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Occipital Neuralgia Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates occipital neuralgia — pain from the upper neck and base of skull radiating toward the scalp, distinguished from migraine and cervicogenic headache. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Occipital Neuralgia Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates occipital neuralgia — pain from the upper neck and base of skull radiating toward the scalp, distinguished from migraine and cervicogenic headache. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Occipital Neuralgia Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates occipital neuralgia — pain from the upper neck and base of skull radiating toward the scalp, distinguished from migraine and cervicogenic headache. Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Occipital Neuralgia" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Occipital Neuralgia", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Pain From the Upper Neck",
    body: "Occipital neuralgia is characterized by pain arising from the occipital nerves — nerves that emerge from the upper cervical spine and travel through the scalp. Pain typically originates at the base of the skull and may radiate over the back and top of the head.",
  },
  {
    heading: "Distinct From Migraine",
    body: "While occipital neuralgia and migraine can overlap or coexist, they are different conditions with different underlying mechanisms. Accurate diagnosis is important because treatment approaches differ.",
  },
  {
    heading: "Diagnosis Requires Careful Evaluation",
    body: "There is no single test that confirms occipital neuralgia. Diagnosis relies on clinical history, examination findings, and the pattern of pain — including tenderness over the occipital nerves.",
  },
];

export default function OccipitalNeuralgiaPage() {
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
            Occipital Neuralgia
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Occipital neuralgia is a condition characterized by pain arising from the occipital
            nerves, which emerge from the upper cervical spine and travel through the back of
            the scalp. Pain often begins at the base of the skull and may radiate upward and
            over the head. Dr. Dardashti evaluates occipital neuralgia as part of a broader
            assessment of cervical and head pain.
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
              What Is Occipital Neuralgia?
            </h2>
            <p>
              The occipital nerves — including the greater occipital nerve, lesser occipital
              nerve, and third occipital nerve — emerge from the upper cervical spine (C2 and C3
              levels) and supply sensation to the back and top of the scalp. When these nerves
              are irritated or compressed, they can produce pain in their territory.
            </p>
            <p>
              Occipital neuralgia is often described as unilateral or bilateral aching, burning,
              or shooting pain starting at the base of the skull and radiating toward the top
              of the head or behind the eye. Scalp tenderness along the path of the nerve is a
              characteristic feature. Some patients experience sensitivity to light touch over
              the affected area.
            </p>
            <p>
              The condition may arise from a variety of causes, including tension in the upper
              cervical muscles, prior injury to the neck, cervical degenerative changes, or
              entrapment of the nerve as it passes through soft tissue. It can also coexist
              with cervicogenic headache — headache referred from the upper cervical spine —
              and these two conditions share overlapping anatomy and clinical features.
            </p>
          </div>
        </div>
      </section>

      {/* DISTINGUISHING FEATURES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Symptoms</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Common Symptoms.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Features that may suggest occipital neuralgia include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Aching, burning, or shooting pain starting at the base of the skull",
                "Pain that radiates over the back of the head, the top of the scalp, or behind one eye",
                "Tenderness to palpation over the greater occipital nerve at the base of the skull",
                "Scalp sensitivity or discomfort with light touch, hair brushing, or pressure from a pillow",
                "Pain that may be unilateral or bilateral",
                "Symptoms that are distinct from migraine in character, though the two may coexist",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              These features are not diagnostic on their own. New or severe headache should
              prompt evaluation to rule out other causes before a diagnosis of occipital
              neuralgia is made.
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
              How Dr. Dardashti Evaluates Occipital Neuralgia.
            </h2>
            <p>
              Evaluation begins with a detailed history of headache and neck pain, including
              the location, character, onset, and duration of symptoms. Prior headache diagnoses,
              neurologic workup, and imaging are reviewed when available. A thorough headache
              history helps distinguish occipital neuralgia from other headache disorders,
              including migraine and cervicogenic headache.
            </p>
            <p>
              Physical examination includes palpation of the suboccipital region and the path
              of the greater and lesser occipital nerves. Tenderness or reproduction of the
              characteristic pain pattern with palpation supports the diagnosis. Cervical
              range of motion and the upper cervical examination are also assessed.
            </p>
            <p>
              A diagnostic occipital nerve block — in which a small amount of local anesthetic
              is injected near the occipital nerve — can provide useful diagnostic information.
              Significant temporary relief following the block supports occipital nerve involvement
              as a contributor to the pain. This response may also inform whether longer-term
              treatment options should be considered.
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
              Treatment depends on the severity, frequency, and character of symptoms,
              as well as prior treatment history. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical therapy and cervical muscle conditioning to address upper cervical tension",
                "Medication management when clinically appropriate",
                "Occipital nerve blocks for diagnostic and potentially therapeutic purposes",
                "Addressing co-existing cervicogenic sources — including upper cervical facet joints — when relevant",
                "Reassessment of the broader cervical spine when structural contributions are suspected",
                "Coordination with neurology when headache evaluation or migraine management is needed alongside occipital nerve treatment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient requires a nerve block. Recommendations are individualized
              based on clinical evaluation, symptom severity, and prior treatment history.
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
              Occipital neuralgia can be difficult to distinguish from cervicogenic headache
              and may coexist with migraine or other headache disorders. The diagnosis is
              clinical and relies on the pattern of symptoms and examination findings.
              Response to treatment varies.
            </p>
            <p>
              New or severe headache, headache with neurologic symptoms, or headache that is
              changing in character should prompt evaluation to exclude other causes. A formal
              clinical evaluation is required to determine whether occipital neuralgia is the
              appropriate diagnosis and treatment direction for any individual patient.
            </p>
            <p>
              This page is for general informational purposes only and does not constitute
              medical advice or create a physician-patient relationship. Dr. Dardashti sees
              patients in Mission Hills, California, serving patients from the San Fernando
              Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
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
              <li><Link href="/conditions/neck-pain" className="text-[#c8a020] hover:underline tracking-wide">Neck Pain Evaluation →</Link></li>
              <li><Link href="/conditions/cervical-radiculopathy" className="text-[#c8a020] hover:underline tracking-wide">Cervical Radiculopathy Evaluation →</Link></li>
              <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-[#c8a020] hover:underline tracking-wide">Facet Joint Injections &amp; Medial Branch Blocks →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
