import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/sciatica-radicular-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: "Sciatica and Radicular Pain Evaluation | Simon Dardashti, MD",
  description:
    "Dr. Simon Dardashti evaluates sciatica and radicular pain, including symptoms that may relate to nerve root irritation in the cervical or lumbar spine.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Sciatica and Radicular Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates sciatica and radicular pain, including symptoms that may relate to nerve root irritation in the cervical or lumbar spine.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sciatica and Radicular Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates sciatica and radicular pain, including symptoms that may relate to nerve root irritation in the cervical or lumbar spine.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Sciatica and Radicular Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates sciatica and radicular pain, including symptoms that may relate to nerve root irritation in the cervical or lumbar spine.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Radicular Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Sciatica and Radicular Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Radiating Nerve Pain",
    body: "Sciatica refers to pain that radiates from the low back or buttock into the leg. It often results from irritation or compression of a lumbar nerve root.",
  },
  {
    heading: "Not All Leg Pain Is Sciatica",
    body: "Leg pain has multiple possible causes. An accurate clinical evaluation is important to identify the likely source before treatment is considered.",
  },
  {
    heading: "Treatment Is Individualized",
    body: "Options may include conservative care, medication management when appropriate, or image-guided procedures for selected patients based on clinical evaluation.",
  },
];

export default function SciaticaPage() {
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
            Sciatica and Radicular
            <br />
            <em className="not-italic text-[#888]">Pain Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Sciatica and radicular pain refer to symptoms that may arise when a spinal nerve root
            is irritated or compressed. Dr. Dardashti evaluates these conditions through careful
            history, neurologic examination, and review of imaging when available.
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

      {/* WHAT IS RADICULAR PAIN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Sciatica and Radicular Pain?
            </h2>
            <p>
              Sciatica commonly refers to pain that radiates from the low back or buttock into the
              leg, sometimes extending into the foot. The term is often used to describe symptoms
              that may result from irritation or compression of a lumbar nerve root, though not all
              leg pain is sciatica. An accurate diagnosis is important because treatment depends on
              identifying the likely source.
            </p>
            <p>
              Radicular pain refers more broadly to pain that travels along the path of a nerve
              root. It can occur in the lumbar spine — causing symptoms into the leg — or in the
              cervical spine, causing symptoms into the arm. Radiculopathy refers to nerve root
              dysfunction that may also involve numbness, tingling, or weakness in addition to pain.
            </p>
            <p>
              Common underlying causes may include herniated intervertebral discs, spinal stenosis,
              foraminal narrowing, or other conditions that affect the nerve as it exits the
              spinal column.
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
              Symptoms associated with radicular pain or nerve root irritation may include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Radiating pain from the neck into the arm, or from the low back into the leg",
                "Numbness or tingling along the arm, hand, leg, or foot",
                "Weakness in the arm, hand, leg, or foot",
                "Pain that worsens with certain positions, movements, or prolonged sitting or standing",
                "Shooting or electric-like pain along a nerve distribution",
                "Symptoms that are worse in one limb than the other",
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
              How Dr. Dardashti Evaluates Radicular Pain.
            </h2>
            <p>
              Evaluation includes a detailed history of symptom onset, character, distribution,
              and prior treatment response. A neurologic examination assesses reflexes, sensation,
              and motor strength to help localize the likely nerve root level involved.
            </p>
            <p>
              When imaging is available — such as MRI of the cervical or lumbar spine — findings
              are reviewed in the context of the patient's clinical presentation. A herniated disc
              or foraminal narrowing on imaging does not automatically indicate that a procedure is
              needed; treatment decisions are based on the full clinical picture.
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
              Treatment depends on the severity, duration, and character of symptoms, along with
              the patient's prior treatment history and clinical examination. Options that may
              be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Conservative care coordination, including physical therapy",
                "Medication management when clinically appropriate",
                "Epidural steroid injections for selected patients with nerve-related radicular symptoms",
                "Selective nerve root blocks for diagnostic or therapeutic consideration",
                "Cervical or lumbar interlaminar or transforaminal approaches depending on the clinical situation",
                "Ongoing monitoring and reassessment based on treatment response",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient with radicular pain requires an injection. Treatment recommendations
              are based on individual clinical evaluation.
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
              Radicular pain can have multiple contributing causes, and not all cases resolve with
              any single treatment. Response to treatment varies among patients. An accurate
              diagnosis based on clinical evaluation is essential before treatment is initiated.
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
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/procedures/radiofrequency-ablation" className="text-[#c8a020] hover:underline tracking-wide">Radiofrequency Ablation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
