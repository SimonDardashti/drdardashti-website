import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";
import ReferencesSection from "@/components/ReferencesSection";
import { CITATIONS } from "@/lib/citations";

const PAGE_URL = "https://www.drdardashti.com/conditions/cervical-radiculopathy";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Cervical Radiculopathy Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates cervical radiculopathy — neck and arm pain from nerve root compression or irritation in the cervical spine. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Cervical Radiculopathy Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates cervical radiculopathy — neck and arm pain from nerve root compression or irritation in the cervical spine. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervical Radiculopathy Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates cervical radiculopathy — neck and arm pain from nerve root compression or irritation in the cervical spine. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Cervical Radiculopathy Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates cervical radiculopathy — neck and arm pain from nerve root compression or irritation in the cervical spine. Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Cervical Radiculopathy" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Cervical Radiculopathy", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Nerve Root Origin",
    body: "Cervical radiculopathy occurs when a nerve root in the neck is compressed or irritated, producing pain, numbness, or tingling that can radiate into the shoulder, arm, or hand.",
  },
  {
    heading: "Common Causes",
    body: "Disc herniation and degenerative narrowing of the foramina are among the most common causes. Symptoms often follow a predictable pattern based on the nerve root level involved.",
  },
  {
    heading: "Not All Arm Pain Is Radiculopathy",
    body: "Shoulder pathology, peripheral nerve conditions, and other sources can produce similar symptoms. An accurate evaluation is important to identify the correct diagnosis before treatment.",
  },
];

export default function CervicalRadiculopathyPage() {
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
            Cervical Radiculopathy
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Cervical radiculopathy refers to symptoms that arise when a nerve root in the neck
            is compressed or irritated. It can cause pain, numbness, tingling, or weakness
            that radiates from the neck into the shoulder, arm, or hand. Dr. Dardashti evaluates
            this condition through clinical history, neurologic examination, and review of
            cervical spine imaging.
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

      {/* WHAT IS CERVICAL RADICULOPATHY */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Cervical Radiculopathy?
            </h2>
            <p>
              The cervical spine contains seven vertebrae, and nerve roots exit at each level
              through openings called foramina. When a cervical nerve root is compressed or
              irritated — typically by a herniated disc or degenerative narrowing — it can
              produce symptoms that travel along the path of that nerve into the upper extremity.
            </p>
            <p>
              The level of the affected nerve root often determines the pattern of symptoms. For
              example, C6 nerve root involvement may produce symptoms into the thumb and index
              finger, while C7 involvement may produce symptoms into the middle finger. These
              dermatomal patterns help localize the level clinically and can be compared to
              imaging findings.
            </p>
            <p>
              Cervical radiculopathy is distinct from cervical myelopathy, which involves
              compression of the spinal cord itself rather than individual nerve roots. Myelopathy
              typically causes different symptoms and often requires surgical evaluation. During
              the clinical evaluation, Dr. Dardashti assesses for signs that may suggest cord
              involvement.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION 1: Cervical Spine Anatomy */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/anatomy/spine/cervical-spine-anatomy.png"
            alt="Cervical spine anatomy showing seven cervical vertebrae (C1-C7), intervertebral discs, facet joints, and nerve roots emerging from spinal canal"
            caption="Cervical Spine Anatomy: The cervical spine has seven vertebrae. Nerve roots exit between vertebrae at each level. When a nerve is compressed at its exit point, it causes arm and hand symptoms specific to that nerve's distribution."
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
              Symptoms associated with cervical radiculopathy may include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Neck pain that radiates into the shoulder, arm, forearm, or hand",
                "Numbness or tingling in the arm, forearm, or specific fingers",
                "Weakness in the arm, forearm, or hand muscles",
                "Pain that worsens with neck extension or rotation toward the affected side",
                "Pain that may improve with raising the arm overhead in some presentations",
                "Reduced reflexes in the affected arm",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* ILLUSTRATION 2: Cervical Dermatomes */}
            <div className="max-w-2xl mt-10">
              <MedicalFigure
                variant="default"
                src="/images/anatomy/nerves/cervical-dermatomes.png"
                alt="Cervical dermatomes showing C5, C6, C7, and C8 sensory distributions across shoulder, arm, forearm, and hand with clear regional demarcation"
                caption="Cervical Dermatomes: Each cervical nerve supplies sensation to specific areas. Your arm pain pattern—whether upper arm, forearm, specific fingers—tells us which nerve is involved. This is one of our most valuable diagnostic clues."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ILLUSTRATION 3: Cervical Radiculopathy Compression */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/anatomy/spine/cervical-radiculopathy.png"
            alt="Cervical radiculopathy showing nerve root compressed by herniated disc or bone spurs at cervical vertebra level, with resulting pain radiation down arm"
            caption="Cervical Radiculopathy: When a cervical nerve root is compressed (usually by a herniated disc or bone spurs), it becomes irritated and sends pain signals down the arm. Unlike lower back pain, cervical radiculopathy affects the arm, forearm, and hand."
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
              How Dr. Dardashti Evaluates Cervical Radiculopathy.
            </h2>
            <p>
              Evaluation includes a detailed history of symptom onset, distribution, character,
              and prior treatment response. The neurologic examination assesses upper extremity
              strength, sensation, and reflexes to identify patterns consistent with specific
              nerve root levels.
            </p>
            <p>
              When cervical MRI or other imaging is available, findings — such as disc herniation
              or foraminal stenosis — are reviewed in relation to the patient&apos;s clinical presentation.
              An imaging abnormality does not by itself determine whether treatment is needed;
              the severity of symptoms, functional impact, and prior treatment history all inform
              the clinical decision.
            </p>
            <p>
              The evaluation also includes an assessment for signs of cervical myelopathy, which
              would indicate a different clinical pathway. When myelopathy is suspected, surgical
              spine consultation is the appropriate next step rather than pain management procedures.
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
              Treatment depends on the severity and duration of symptoms, neurologic findings,
              and prior treatment history. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Conservative care including physical therapy and activity modification",
                "Medication management when clinically appropriate",
                "Cervical epidural steroid injections — interlaminar or transforaminal — for selected patients with radicular symptoms",
                "Selective nerve root blocks for diagnostic or targeted therapeutic purposes",
                "Ongoing reassessment of neurologic status and symptom response",
                "Referral for surgical evaluation when conservative and interventional approaches have been insufficient or when neurologic status warrants",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient with cervical radiculopathy requires an injection. Many cases
              improve with conservative management over time. Recommendations are based on
              individual clinical evaluation.
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
              Cervical radiculopathy can be caused by multiple factors, and treatment response
              varies. Not every patient improves with pain management procedures alone. The
              diagnosis and treatment plan depend on the full clinical picture, which requires
              a formal evaluation.
            </p>
            <p>
              This page is for general informational purposes only and does not constitute
              medical advice or create a physician-patient relationship.
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
              <li><Link href="/conditions/neck-pain" className="text-[#c8a020] hover:underline tracking-wide">Neck Pain Evaluation →</Link></li>
              <li><Link href="/conditions/sciatica-radicular-pain" className="text-[#c8a020] hover:underline tracking-wide">Sciatica and Radicular Pain Evaluation →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <ReferencesSection references={CITATIONS["/conditions/cervical-radiculopathy"]} />

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/cervical-radiculopathy" />
    </>
  );
}
