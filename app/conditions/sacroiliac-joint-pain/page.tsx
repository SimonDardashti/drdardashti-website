import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/sacroiliac-joint-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Sacroiliac Joint Pain Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates suspected sacroiliac joint pain using history, physical examination, imaging when available, and prior treatment response.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Sacroiliac Joint Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates suspected sacroiliac joint pain using history, physical examination, imaging when available, and prior treatment response.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacroiliac Joint Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates suspected sacroiliac joint pain using history, physical examination, imaging when available, and prior treatment response.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Sacroiliac Joint Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates suspected sacroiliac joint pain using history, physical examination, imaging when available, and prior treatment response.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Sacroiliac Joint Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Sacroiliac Joint Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Overlapping Symptoms",
    body: "Sacroiliac joint pain can mimic lumbar spine, hip, or muscular pain. Careful clinical evaluation is important because symptoms alone are not sufficient to confirm the diagnosis.",
  },
  {
    heading: "Provocative Testing",
    body: "Physical examination maneuvers that stress the sacroiliac joint help identify it as a potential pain source, though no single test is definitive.",
  },
  {
    heading: "Injection Options",
    body: "Sacroiliac joint injections may be considered for selected patients when clinical evaluation supports sacroiliac joint involvement as a significant contributor to pain.",
  },
];

export default function SacroiliacJointPainPage() {
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
            Sacroiliac Joint Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            The sacroiliac joint can be a source of low back, buttock, or posterior pelvic
            pain. Because symptoms can overlap with other conditions, careful clinical
            evaluation is required to identify sacroiliac joint involvement as a likely
            contributor to pain.
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
              What Is Sacroiliac Joint Pain?
            </h2>
            <p>
              The sacroiliac (SI) joints connect the sacrum — the triangular bone at the base
              of the spine — to the iliac bones of the pelvis, one on each side. These joints
              bear load and transmit forces between the spine and lower limbs. When the SI joint
              becomes a pain source, symptoms may include pain in the low back, buttock,
              hip region, groin, or posterior pelvis.
            </p>
            <p>
              Sacroiliac joint pain is often considered as part of the differential evaluation
              for low back and pelvic pain. Because the symptoms can closely resemble those of
              lumbar disc disease, facet-mediated pain, hip pathology, or muscular pain,
              clinical evaluation — rather than symptoms alone — is necessary to identify
              the SI joint as a likely pain contributor.
            </p>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC CHALLENGES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Diagnosis</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Diagnostic Challenges.
            </h2>
            <p>
              No single symptom pattern, imaging finding, or physical examination test is
              sufficient on its own to confirm that the sacroiliac joint is the source of a
              patient's pain. Imaging studies such as X-ray or MRI may show SI joint changes
              but these do not always correlate with the patient's symptoms.
            </p>
            <p>
              Physical examination tests that stress the sacroiliac joint — sometimes called
              provocative maneuvers — can support clinical suspicion of SI joint involvement
              when multiple tests are positive. A cluster of positive findings on examination,
              considered alongside the patient's symptom pattern and history, helps guide the
              clinical assessment.
            </p>
            <p>
              An image-guided sacroiliac joint injection with local anesthetic may be used
              both diagnostically and therapeutically in appropriate clinical circumstances.
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
              How Dr. Dardashti Evaluates Sacroiliac Joint Pain.
            </h2>
            <p>
              Evaluation includes a detailed history of pain location, character, and onset,
              along with review of prior treatments and their responses. Physical examination
              includes assessment of the lumbar spine, sacroiliac joints, and hip region to
              identify the most likely pain generators and differentiate SI joint involvement
              from other sources.
            </p>
            <p>
              When imaging is available, findings are reviewed in clinical context. The goal
              is to develop a treatment plan based on the overall clinical picture rather than
              any single finding in isolation.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT */}
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
              Treatment is individualized based on the clinical evaluation. Options that may
              be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical therapy coordination targeting the sacropelvic region",
                "Medication management when clinically appropriate",
                "Sacroiliac joint injections for selected patients when SI joint involvement is supported by clinical evaluation",
                "Reassessment based on treatment response and ongoing clinical findings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Treatment recommendations are based on individual clinical evaluation. Not every
              patient with low back or posterior pelvic pain has SI joint involvement.
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
              Sacroiliac joint pain cannot be reliably diagnosed from symptoms alone. Multiple
              conditions can produce similar symptoms. Response to treatment varies among patients.
              A formal clinical evaluation is required to determine whether SI joint involvement
              is a likely contributor to an individual patient's pain.
              This page is for general informational purposes only and does not constitute
              medical advice or create a physician-patient relationship.
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
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/procedures/sacroiliac-joint-injections" className="text-[#c8a020] hover:underline tracking-wide">Sacroiliac Joint Injections →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
