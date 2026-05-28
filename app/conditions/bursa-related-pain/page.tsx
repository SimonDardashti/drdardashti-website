import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/bursa-related-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Bursa-Related Pain Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates bursa-related pain near the hip, shoulder, elbow, and knee. Clinical evaluation to distinguish bursitis from joint, tendon, and referred pain sources.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Bursa-Related Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates bursa-related pain near the hip, shoulder, elbow, and knee. Clinical evaluation to distinguish bursitis from joint, tendon, and referred pain sources.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bursa-Related Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates bursa-related pain near the hip, shoulder, elbow, and knee. Clinical evaluation to distinguish bursitis from joint, tendon, and referred pain sources.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Bursa-Related Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates bursa-related pain near the hip, shoulder, elbow, and knee. Clinical evaluation to distinguish bursitis from joint, tendon, and referred pain sources.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Bursitis" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Bursa-Related Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "What Is a Bursa?",
    body: "Bursae are small fluid-filled sacs located near joints and tendons that reduce friction during movement. When a bursa becomes irritated or inflamed, it can produce localized pain — a condition commonly called bursitis.",
  },
  {
    heading: "Common Locations",
    body: "Bursa-related pain most often presents near the hip, shoulder, elbow, and knee. Each location has characteristic patterns of pain and associated clinical features that help guide evaluation.",
  },
  {
    heading: "Diagnosis Requires Evaluation",
    body: "Bursa-related pain can resemble pain from adjacent joints, tendons, or referred sources. A clinical evaluation is needed to identify the primary pain generator before treatment is selected.",
  },
];

export default function BursaRelatedPainPage() {
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
            Bursa-Related Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Bursae are small sacs of fluid located near joints that help reduce friction during
            movement. When a bursa becomes irritated or inflamed, it can produce focal pain
            near the affected joint. Dr. Dardashti evaluates bursa-related pain in the context
            of the full clinical picture, distinguishing it from adjacent joint, tendon, and
            referred pain sources.
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
              Understanding Bursa-Related Pain.
            </h2>
            <p>
              The body contains dozens of bursae — small fluid-filled sacs positioned near
              joints, tendons, and bony prominences to cushion and reduce friction during
              movement. They are found throughout the body, with clinically significant bursae
              near the hip, shoulder, elbow, and knee.
            </p>
            <p>
              Bursitis refers to inflammation of a bursa, which may develop from repetitive
              mechanical stress, direct pressure, prior injury, or inflammatory conditions.
              The most commonly affected locations include the greater trochanteric bursa at
              the outer hip, the subacromial bursa near the shoulder, the olecranon bursa
              at the tip of the elbow, and the prepatellar bursa at the front of the knee.
            </p>
            <p>
              Importantly, what is clinically described as bursitis may in many cases reflect
              pathology in adjacent tendons, muscles, or joint structures rather than the
              bursa itself. In the hip, for example, what was historically called trochanteric
              bursitis is now understood to often involve gluteal tendon pathology. Accurate
              identification of the primary pain generator is an important part of evaluation.
            </p>
          </div>
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
              Common Symptoms.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Bursa-related pain typically presents as localized pain near a joint, often with
              the following characteristics:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Focal tenderness directly over the bursa, often near a bony prominence",
                "Pain that worsens with movements or positions that compress or stretch the affected bursa",
                "Aching discomfort that may spread to the surrounding area without following a nerve distribution",
                "Pain with prolonged pressure on the affected site — such as lying on the hip at night",
                "Possible swelling or localized warmth if the bursa is significantly inflamed",
                "Pain that may be confused with joint pain, tendon pain, or referred pain from the spine",
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
              How Dr. Dardashti Evaluates Bursa-Related Pain.
            </h2>
            <p>
              Evaluation begins with a history of pain location, onset, character, and aggravating
              factors — including how the pain relates to specific movements, activity levels,
              and positions. Prior treatments and their responses are also reviewed.
            </p>
            <p>
              Physical examination includes palpation over known bursal sites, range-of-motion
              assessment, and provocative testing to help localize the source. Imaging — such as
              X-ray, ultrasound, or MRI — may be reviewed to evaluate adjacent structures and
              help distinguish bursitis from tendon pathology, joint degeneration, or other
              sources of pain in the same area.
            </p>
            <p>
              Because bursa-related pain near the hip or shoulder can have a component referred
              from the lumbar or cervical spine, the evaluation also considers whether spine
              pathology may be contributing to the overall pain picture.
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
              Treatment is individualized based on the specific bursal location, severity
              of symptoms, and prior treatment history. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Activity modification and physical therapy to reduce repetitive mechanical stress on the bursa",
                "Medication management when clinically appropriate",
                "Image-guided bursal injections for selected patients with confirmed bursa-related pain",
                "Reassessment of the broader musculoskeletal and spine picture if improvement is incomplete",
                "Coordination with orthopedics when tendon pathology or structural joint issues are present alongside bursitis",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient requires an injection. Many cases of bursa-related pain
              improve with conservative management. Recommendations are based on individual
              clinical evaluation and the patient&apos;s treatment history and goals.
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
              Bursa-related pain is often associated with other contributing factors, including
              tendon pathology, joint degeneration, or referred pain. Treating the bursa alone
              may not address all sources of pain. Response to treatment varies among patients.
            </p>
            <p>
              A formal clinical evaluation is required to determine the appropriate treatment
              approach for any individual patient. This page is for general informational
              purposes only and does not constitute medical advice or create a physician-patient
              relationship.
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
              <li><Link href="/conditions/joint-pain" className="text-[#c8a020] hover:underline tracking-wide">Joint Pain Evaluation →</Link></li>
              <li><Link href="/conditions/myofascial-pain" className="text-[#c8a020] hover:underline tracking-wide">Myofascial Pain Evaluation →</Link></li>
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
