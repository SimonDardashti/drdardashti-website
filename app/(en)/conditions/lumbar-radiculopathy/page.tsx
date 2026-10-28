import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/lumbar-radiculopathy";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Lumbar Radiculopathy Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates lumbar radiculopathy — low back and leg pain from nerve root compression or irritation in the lumbar spine. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Lumbar Radiculopathy Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates lumbar radiculopathy — low back and leg pain from nerve root compression or irritation in the lumbar spine. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumbar Radiculopathy Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates lumbar radiculopathy — low back and leg pain from nerve root compression or irritation in the lumbar spine. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Lumbar Radiculopathy Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates lumbar radiculopathy — low back and leg pain from nerve root compression or irritation in the lumbar spine. Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Lumbar Radiculopathy" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Lumbar Radiculopathy", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Nerve Root in the Low Back",
    body: "Lumbar radiculopathy occurs when a nerve root in the lower spine is compressed or irritated. It can produce pain, numbness, or weakness that travels into the buttock, leg, or foot.",
  },
  {
    heading: "Disc Herniation Is a Common Cause",
    body: "A herniated lumbar disc pressing on a nerve root is among the most common causes, though spinal stenosis and foraminal narrowing may also be contributing factors.",
  },
  {
    heading: "Evaluation Before Treatment",
    body: "The level of nerve root involvement, severity of neurologic findings, and prior treatment history all inform treatment planning. A clinical evaluation is needed to determine the appropriate approach.",
  },
];

export default function LumbarRadiculopathyPage() {
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
            Lumbar Radiculopathy
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Lumbar radiculopathy describes symptoms that arise when a nerve root in the lower
            spine is compressed or irritated. Pain, numbness, tingling, or weakness may radiate
            from the low back into the buttock, leg, or foot. Dr. Dardashti evaluates this
            condition through clinical history, neurologic examination, and review of lumbar
            spine imaging.
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

      {/* WHAT IS LUMBAR RADICULOPATHY */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Lumbar Radiculopathy?
            </h2>
            <p>
              The lumbar spine consists of five vertebrae, with nerve roots exiting at each level
              through the foramina. When one of these nerve roots is compressed or chemically
              irritated — most commonly by a herniated disc or bony narrowing of the foramen —
              it can produce symptoms that radiate along the path of that nerve.
            </p>
            <p>
              Lumbar radiculopathy is closely related to but distinct from the commonly used
              term &quot;sciatica.&quot; Sciatica typically refers to symptoms traveling along the
              sciatic nerve distribution into the posterior thigh, leg, and foot, most often
              from L4, L5, or S1 nerve root involvement. Radiculopathy more broadly describes
              nerve root dysfunction at any lumbar level, and may also involve the upper lumbar
              roots, which refer symptoms into the anterior thigh.
            </p>
            <p>
              Understanding the level and severity of nerve root involvement guides both
              the evaluation and selection of appropriate treatment options.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION 1: Lumbar Radiculopathy */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/anatomy/spine/lumbar-radiculopathy.png"
            alt="Lumbar radiculopathy showing nerve root compressed by herniated disc at lumbar vertebra level, with pain radiation down leg and foot"
            caption="Lumbar Radiculopathy: When a lumbar nerve root is compressed or irritated (usually by disc herniation or foraminal stenosis), it sends pain signals down the leg. The pattern of symptoms depends on which nerve root is affected—your specific pain distribution is one of our most important diagnostic clues."
          />
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
              Symptoms associated with lumbar radiculopathy may include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Low back pain that radiates into the buttock, thigh, leg, or foot",
                "Numbness or tingling following a specific dermatomal distribution in the leg or foot",
                "Weakness in the hip, thigh, knee, or foot muscles",
                "Pain that worsens with prolonged sitting, standing, or certain movements",
                "Pain that may improve with walking or lying in a specific position",
                "Reduced or absent deep tendon reflexes in the knee or ankle",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ILLUSTRATION: Lumbar Dermatomes */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/anatomy/nerves/lumbar-dermatomes.png"
            alt="Lumbar dermatomes showing sensory nerve root distribution across lower back, buttocks, legs, and feet with specific areas labeled L3, L4, L5, and S1"
            caption="Lumbar Dermatomes: Each spinal nerve root distributes sensation to a specific area of the leg and foot. L3 and L4 refer symptoms to the anterior and medial thigh. L5 distributes to the lateral leg and dorsum of the foot. S1 supplies the posterior and lateral leg and sole of the foot. Understanding your specific symptom distribution helps identify which nerve root may be involved."
          />
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
              How Dr. Dardashti Evaluates Lumbar Radiculopathy.
            </h2>
            <p>
              Evaluation begins with a detailed history of symptom onset, character, and distribution,
              along with a review of prior treatments and their responses. A neurologic examination
              assesses lower extremity strength, sensation, and reflexes to identify findings
              consistent with specific lumbar nerve root levels.
            </p>
            <p>
              When lumbar MRI or other imaging is available, findings are reviewed alongside the
              clinical presentation. The presence of a disc herniation on MRI does not automatically
              indicate that an injection is needed — treatment decisions incorporate the severity
              of symptoms, functional impact, and whether conservative care has been tried.
            </p>
            <p>
              The evaluation also assesses for red flag findings — such as significant or progressive
              weakness, bowel or bladder changes, or bilateral leg symptoms — which may require
              urgent specialist evaluation rather than pain management procedures.
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
              Treatment depends on the nature and severity of symptoms, neurologic examination
              findings, and prior treatment history. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Conservative care including physical therapy and activity modification",
                "Medication management when clinically appropriate",
                "Lumbar epidural steroid injections — interlaminar or transforaminal — for selected patients with radicular leg symptoms",
                "Selective nerve root blocks for diagnostic or targeted therapeutic purposes",
                "Ongoing neurologic monitoring and reassessment of treatment response",
                "Referral for surgical evaluation when pain is refractory or neurologic deficits are progressive",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient with lumbar radiculopathy requires an injection. Recommendations
              are based on individual clinical evaluation, neurologic findings, and functional goals.
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
              Lumbar radiculopathy has a variable natural history. Many patients improve with
              conservative care alone, while others have persistent symptoms that require further
              management. Response to treatment varies, and no procedure can be guaranteed to
              resolve radicular symptoms.
            </p>
            <p>
              A formal clinical evaluation is required to determine the appropriate treatment
              approach for any individual patient. This page is for general informational
              purposes only and does not constitute medical advice or create a physician-patient
              relationship.
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
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/conditions/sciatica-radicular-pain" className="text-[#c8a020] hover:underline tracking-wide">Sciatica and Radicular Pain Evaluation →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/lumbar-radiculopathy" />
    </>
  );
}
