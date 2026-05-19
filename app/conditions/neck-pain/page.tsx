import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/neck-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: "Neck Pain Evaluation | Simon Dardashti, MD",
  description:
    "Dr. Simon Dardashti evaluates neck pain in the context of symptoms, physical examination, imaging when available, prior treatment response, and functional goals.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Neck Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates neck pain in the context of symptoms, physical examination, imaging when available, prior treatment response, and functional goals.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neck Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates neck pain in the context of symptoms, physical examination, imaging when available, prior treatment response, and functional goals.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Neck Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates neck pain in the context of symptoms, physical examination, imaging when available, prior treatment response, and functional goals.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Neck Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Neck Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Multiple Possible Sources",
    body: "Neck pain can arise from cervical discs, facet joints, muscles, spinal nerve roots, or other structures. Identifying the likely contributor is central to evaluation.",
  },
  {
    heading: "Neurologic Symptoms",
    body: "When nerve involvement is present, symptoms may include radiating arm pain, numbness, tingling, or weakness in addition to neck pain.",
  },
  {
    heading: "Individualized Evaluation",
    body: "Evaluation includes a detailed history, physical and neurologic examination, and review of imaging when available — interpreted in the context of the patient's symptoms.",
  },
];

export default function NeckPainPage() {
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
            Neck Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Neck pain is a common complaint that can arise from multiple cervical spine
            structures. Dr. Dardashti evaluates neck pain in the context of the patient's
            symptoms, physical examination, imaging when available, prior treatment response,
            and functional goals.
          </p>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">In Brief</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {inBrief.map((item, i) => (
              <div key={item.heading} className={`p-6 ${i < inBrief.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]" : ""}`}>
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2 className="font-bold text-[#0a0a0a] text-sm mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
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
              What Is Neck Pain?
            </h2>
            <p>
              Neck pain refers to pain in the cervical spine region, which includes the seven
              vertebrae of the neck, the intervertebral discs, facet joints, spinal nerve roots,
              muscles, and ligaments. Pain in this region is common and can vary widely in
              character, severity, and duration.
            </p>
            <p>
              Neck pain may be localized to the neck and shoulder region, or it may be
              accompanied by radiating symptoms into the arm when nerve root involvement is
              present. Pain arising from cervical facet joints may radiate into the head,
              shoulder, or upper back without following a specific nerve root pattern.
              Understanding the likely source of pain helps guide appropriate evaluation
              and treatment planning.
            </p>
          </div>
        </div>
      </section>

      {/* REASONS FOR EVALUATION */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluation</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Common Reasons for Evaluation.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Patients commonly present for evaluation due to:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Neck pain that has not improved with initial or conservative treatment",
                "Neck pain associated with radiating arm pain, numbness, tingling, or weakness",
                "Neck pain following an injury, accident, or significant change in activity",
                "Neck pain that limits daily function, activity, or range of motion",
                "Neck pain with imaging findings that have not been correlated to a treatment plan",
                "Persistent neck pain after prior procedures or treatments",
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
              How Dr. Dardashti Evaluates Neck Pain.
            </h2>
            <p>
              Evaluation begins with a detailed clinical history — including the character,
              location, radiation pattern, and duration of pain — along with a review of
              aggravating and relieving factors, prior treatments and their responses, and
              the patient's functional limitations and goals.
            </p>
            <p>
              A physical and neurologic examination assesses range of motion, tenderness,
              reflexes, sensation, and motor strength to identify likely pain generators and
              detect signs of nerve root involvement. When cervical imaging is available —
              such as MRI or CT — findings are reviewed in the context of the patient's
              symptoms. Imaging findings do not always correlate directly with the source
              of pain or determine the appropriate treatment.
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
              Treatment is individualized based on the clinical evaluation and likely pain
              source. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical therapy coordination",
                "Medication management when clinically appropriate",
                "Cervical epidural steroid injections for nerve-related or radicular symptoms",
                "Cervical medial branch blocks for suspected facet-mediated pain",
                "Radiofrequency ablation for selected patients who respond to diagnostic blocks",
                "Occipital nerve blocks when appropriate",
                "Other options based on the overall clinical context",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient requires a procedure. Treatment recommendations are based on
              the individual patient's diagnosis, examination, prior treatment history, and goals.
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
              Neck pain evaluation and treatment is complex. Not all neck pain has a clearly
              identifiable structural source, and response to treatment varies among patients.
              A formal clinical evaluation is required to determine appropriate treatment
              for any individual patient.
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
              <li><Link href="/conditions/sciatica-radicular-pain" className="text-[#c8a020] hover:underline tracking-wide">Sciatica and Radicular Pain Evaluation →</Link></li>
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
