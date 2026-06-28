import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/low-back-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Low Back Pain Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates low back pain in the context of symptoms, physical examination, imaging when available, prior treatment response, and functional goals.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Low Back Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates low back pain in the context of symptoms, physical examination, imaging when available, prior treatment response, and functional goals.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Back Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates low back pain in the context of symptoms, physical examination, imaging when available, prior treatment response, and functional goals.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Low Back Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates low back pain in the context of symptoms, physical examination, imaging when available, prior treatment response, and functional goals.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Low Back Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Low Back Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Multiple Possible Sources",
    body: "Low back pain can arise from discs, facet joints, sacroiliac joints, spinal nerves, muscles, or other structures. Identifying the likely contributor is central to evaluation.",
  },
  {
    heading: "Individualized Evaluation",
    body: "Evaluation includes a detailed history, physical and neurologic examination, and review of imaging when available. Findings are interpreted in the context of the patient's symptoms.",
  },
  {
    heading: "Range of Treatment Options",
    body: "Treatment may include conservative care, medication management when appropriate, or image-guided procedures for selected patients based on the clinical picture.",
  },
];

export default function LowBackPainPage() {
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
            Low Back Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Low back pain is one of the most common pain complaints and can arise from
            multiple spinal structures. Dr. Dardashti evaluates low back pain in the context
            of the patient's symptoms, physical examination, imaging when available, prior
            treatment response, and functional goals.
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

      {/* WHAT IS LOW BACK PAIN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Low Back Pain?
            </h2>
            <p>
              Low back pain refers to pain in the lumbar region, below the rib cage and above the
              gluteal area. It is one of the most common pain complaints and can vary widely in
              character, severity, and duration — from acute episodes to persistent or chronic conditions.
            </p>
            <p>
              The low back is a complex structure, and pain can arise from multiple sources including
              intervertebral discs, facet joints, sacroiliac joints, spinal nerve roots, muscles, and
              ligaments. In some cases, more than one structure may be contributing. Identifying the
              likely pain generators is an important part of clinical evaluation and guides treatment
              planning.
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
              Patients are commonly referred or present for evaluation due to:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Low back pain that has not improved with initial or conservative treatment",
                "Low back pain associated with radiating leg pain, numbness, or weakness",
                "Low back pain following an injury, accident, or significant change in activity",
                "Low back pain that limits daily function, activity, or quality of life",
                "Low back pain with imaging findings that have not been correlated to a treatment plan",
                "Persistent low back pain after prior procedures or treatments",
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
              How Dr. Dardashti Evaluates Low Back Pain.
            </h2>
            <p>
              Evaluation begins with a detailed clinical history, including the character, location,
              onset, and pattern of pain; aggravating and relieving factors; prior treatments and
              their responses; and the patient's functional status and goals.
            </p>
            <p>
              A physical and neurologic examination helps assess the likely contributing structures
              and rule out findings that may require urgent attention. When imaging is available —
              such as MRI, CT, or X-ray — findings are reviewed in the context of the patient's
              symptoms. Imaging findings alone do not always determine the appropriate treatment.
            </p>
            <p>
              The goal of evaluation is to identify the most likely pain generators and develop a
              treatment plan tailored to the individual patient's clinical presentation, prior
              treatment history, and functional goals.
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
              Treatment is individualized based on the clinical evaluation. Depending on the
              suspected pain source, options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical therapy coordination",
                "Medication management when clinically appropriate",
                "Epidural steroid injections for radicular or nerve-related symptoms",
                "Facet joint injections or medial branch blocks for suspected facet-mediated pain",
                "Sacroiliac joint injections when sacroiliac joint involvement is suspected",
                "Radiofrequency ablation for selected patients who respond to diagnostic blocks",
                "Spinal cord stimulation evaluation for appropriate candidates with chronic pain",
                "Multimodal pain management planning based on overall clinical context",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient requires an interventional procedure. Treatment recommendations
              are based on the individual patient's diagnosis, history, examination findings,
              prior treatment response, and goals.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANT LIMITATIONS */}
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
              Low back pain evaluation and treatment is complex. Not all low back pain has a clearly
              identifiable structural source, and response to treatment varies among patients.
            </p>
            <p>
              No treatment can be guaranteed to provide relief. A formal clinical evaluation is
              required to determine appropriate treatment for any individual patient.
              This page is for general informational purposes only and does not constitute
              medical advice or create a physician-patient relationship.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from the
              San Fernando Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
            </p>
          </div>
        </div>
      </section>

      {/* RECOMMENDED READING */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Reading</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-base font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Recommended Reading.
            </h2>
            <p className="text-[#666] text-sm leading-relaxed mb-6">
              Understanding your diagnosis and available options can help you prepare for your consultation and make informed decisions about your care.
            </p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/pain-without-imaging" className="text-[#c8a020] hover:underline tracking-wide">Pain Without Imaging Findings →</Link></li>
              <li><Link href="/treatment-options" className="text-[#c8a020] hover:underline tracking-wide">Treatment Decision Framework →</Link></li>
              <li><Link href="/conservative-care" className="text-[#c8a020] hover:underline tracking-wide">Conservative Treatments for Chronic Pain →</Link></li>
              <li><Link href="/mcgill-big-3-exercises" className="text-[#c8a020] hover:underline tracking-wide">McGill Big 3 Exercises for Low Back Pain →</Link></li>
              <li><Link href="/patient-education" className="text-[#c8a020] hover:underline tracking-wide">Patient Education Resources →</Link></li>
            </ul>
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
              <li><Link href="/conditions/lumbar-radiculopathy" className="text-[#c8a020] hover:underline tracking-wide">Lumbar Radiculopathy Evaluation →</Link></li>
              <li><Link href="/conditions/facet-mediated-pain" className="text-[#c8a020] hover:underline tracking-wide">Facet-Mediated Pain Evaluation →</Link></li>
              <li><Link href="/conditions/sacroiliac-joint-pain" className="text-[#c8a020] hover:underline tracking-wide">Sacroiliac Joint Pain Evaluation →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-[#c8a020] hover:underline tracking-wide">Facet Joint Injections &amp; Medial Branch Blocks →</Link></li>
              <li><Link href="/procedures/radiofrequency-ablation" className="text-[#c8a020] hover:underline tracking-wide">Radiofrequency Ablation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
