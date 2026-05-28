import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/radicular-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Radicular Pain Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates radicular pain — pain arising from spinal nerve root irritation or compression in the cervical or lumbar spine — in Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Radicular Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates radicular pain — pain arising from spinal nerve root irritation or compression in the cervical or lumbar spine — in Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radicular Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates radicular pain — pain arising from spinal nerve root irritation or compression in the cervical or lumbar spine — in Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Radicular Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates radicular pain — pain arising from spinal nerve root irritation or compression in the cervical or lumbar spine — in Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Radicular Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Radicular Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Pain Along a Nerve Root Path",
    body: "Radicular pain refers to pain that travels along the path of a spinal nerve root. It is distinct from localized back or neck pain and typically radiates into the arm or leg in a pattern that reflects the involved nerve level.",
  },
  {
    heading: "Cervical and Lumbar Presentations",
    body: "Radicular pain can arise from the cervical spine, producing symptoms into the arm and hand, or from the lumbar spine, producing symptoms into the leg and foot. Each region has characteristic patterns that help guide evaluation.",
  },
  {
    heading: "Imaging and Clinical Correlation",
    body: "Imaging findings — such as disc herniation or foraminal narrowing — must be interpreted alongside the clinical examination. An imaging abnormality alone does not confirm the source of pain or indicate that a procedure is needed.",
  },
];

export default function RadicularPainPage() {
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
            Radicular Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Radicular pain describes pain that travels along the course of a spinal nerve
            root from the spine into the arm or leg. It is a distinct type of pain from
            localized neck or back pain and requires specific evaluation to identify the
            nerve level involved and the most appropriate treatment approach.
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
              What Is Radicular Pain?
            </h2>
            <p>
              Radicular pain refers to pain that originates at a spinal nerve root and radiates
              along the distribution of that nerve into the extremity. It is caused by irritation
              or compression of the nerve root as it exits the spinal canal — most commonly from
              a herniated intervertebral disc, foraminal narrowing from degenerative changes, or
              spinal stenosis.
            </p>
            <p>
              Unlike axial pain — which remains localized to the neck or back — radicular pain
              travels into the arm, forearm, hand, buttock, thigh, leg, or foot depending on
              which nerve root is involved. The distribution of symptoms often corresponds to
              a dermatomal pattern, which helps localize the responsible nerve level during
              clinical evaluation.
            </p>
            <p>
              The term radiculopathy is related but technically refers to nerve root dysfunction
              that may include sensory changes, weakness, or reflex changes — not just pain.
              A patient can have radicular pain without objective neurologic deficits, or may
              have radiculopathy with or without significant pain. Both presentations are
              evaluated through a combination of history, neurologic examination, and imaging
              review.
            </p>
          </div>
        </div>
      </section>

      {/* PATTERNS BY REGION */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Patterns</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Cervical and Lumbar Presentations.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Radicular pain patterns differ depending on the spinal region involved:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Cervical radicular pain — arising from the neck — typically radiates into the shoulder, arm, forearm, or hand, following a pattern determined by the involved nerve level",
                "Lumbar radicular pain — arising from the lower spine — typically radiates into the buttock, thigh, leg, or foot, and may follow the path of the sciatic or femoral nerve depending on the level",
                "The character of radicular pain is often described as shooting, burning, or electric — and may be accompanied by numbness, tingling, or weakness",
                "Pain that worsens with specific postures or movements — such as neck extension or prolonged sitting — may help identify the region and level involved",
                "Bilateral or diffuse symptoms, or symptoms accompanied by bowel or bladder changes, warrant more urgent evaluation to exclude spinal cord or cauda equina involvement",
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
              How Dr. Dardashti Evaluates Radicular Pain.
            </h2>
            <p>
              Evaluation begins with a detailed clinical history covering the distribution,
              character, onset, and progression of symptoms, as well as aggravating and
              relieving factors and prior treatment response. The history helps identify
              the likely region and nerve level involved before the examination is performed.
            </p>
            <p>
              A neurologic examination assesses dermatomal sensation, motor strength in
              relevant muscle groups, and deep tendon reflexes — findings that correspond
              to specific nerve root levels in the cervical or lumbar spine. Provocative
              maneuvers may be used to reproduce or modify radicular symptoms.
            </p>
            <p>
              When imaging is available — such as cervical or lumbar MRI — findings are
              reviewed in the context of the clinical presentation. A disc herniation or
              foraminal narrowing on imaging does not automatically indicate that the
              patient needs a procedure; the imaging must correlate with the patient&apos;s
              symptoms and examination findings before treatment decisions are made.
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
              Treatment depends on the severity of symptoms, neurologic findings, prior
              treatment history, and functional impact. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Conservative care including physical therapy and activity modification",
                "Medication management when clinically appropriate",
                "Epidural steroid injections — cervical or lumbar, interlaminar or transforaminal — for selected patients with radicular symptoms",
                "Selective nerve root blocks for diagnostic or targeted therapeutic purposes",
                "Ongoing neurologic monitoring and reassessment based on treatment response",
                "Surgical referral when neurologic deficits are progressive or when pain is refractory to non-surgical management",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient with radicular pain requires an injection or procedure.
              Recommendations are individualized based on clinical evaluation, neurologic
              findings, and the patient&apos;s prior treatment history and goals.
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
              Radicular pain has a variable natural history. Many patients improve with
              conservative care, while others have persistent symptoms that require further
              evaluation and management. No treatment can be assured to resolve radicular
              symptoms in every case.
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
              <li><Link href="/conditions/cervical-radiculopathy" className="text-[#c8a020] hover:underline tracking-wide">Cervical Radiculopathy Evaluation →</Link></li>
              <li><Link href="/conditions/lumbar-radiculopathy" className="text-[#c8a020] hover:underline tracking-wide">Lumbar Radiculopathy Evaluation →</Link></li>
              <li><Link href="/conditions/spine-related-pain" className="text-[#c8a020] hover:underline tracking-wide">Spine-Related Pain Evaluation →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
