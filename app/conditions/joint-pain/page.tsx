import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/joint-pain";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Joint Pain Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates joint pain from mechanical, degenerative, and inflammatory sources. Individualized evaluation to identify the likely pain generator. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Joint Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates joint pain from mechanical, degenerative, and inflammatory sources. Individualized evaluation to identify the likely pain generator. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joint Pain Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates joint pain from mechanical, degenerative, and inflammatory sources. Individualized evaluation to identify the likely pain generator. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Joint Pain Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates joint pain from mechanical, degenerative, and inflammatory sources. Individualized evaluation to identify the likely pain generator. Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Joint Pain" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Joint Pain", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Multiple Contributing Mechanisms",
    body: "Joint pain can arise from mechanical wear, degenerative changes, inflammatory processes, prior injury, or referred pain from adjacent structures. Identifying the likely mechanism guides evaluation and treatment.",
  },
  {
    heading: "Location and Context Matter",
    body: "The character, location, onset, and associated features of joint pain — including its relationship to activity, rest, and prior treatment — provide important clinical information.",
  },
  {
    heading: "Individualized Evaluation",
    body: "A clinical evaluation incorporating history, physical examination, and relevant imaging findings is needed to determine the most appropriate treatment approach for each patient.",
  },
];

export default function JointPainPage() {
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
            Joint Pain
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Joint pain is among the most common reasons patients are referred for pain medicine
            evaluation. It can arise from mechanical, degenerative, or inflammatory processes
            and may involve one or several joints. Dr. Dardashti evaluates joint pain in the
            context of the patient&apos;s full clinical picture — to identify the most likely
            contributing factors before treatment is planned.
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
              What Is Joint Pain?
            </h2>
            <p>
              A joint is the interface between two or more bones, supported by cartilage,
              ligaments, and surrounding soft tissue. Pain can arise from within the joint
              itself — its cartilage, synovium, capsule, or supporting structures — as well
              as from adjacent structures such as bursae, tendons, or referred pain from
              the spine or other joints.
            </p>
            <p>
              Degenerative joint disease, sometimes called osteoarthritis, is one of the most
              common sources of joint pain and involves progressive wearing of the cartilage
              surfaces. Inflammatory conditions — including rheumatoid arthritis and
              related diagnoses — can also produce significant joint pain and are typically
              managed in coordination with rheumatology. Post-traumatic joint pain following
              injury, surgery, or prolonged mechanical stress is another common presentation.
            </p>
            <p>
              Pain that appears to originate in a joint may sometimes be referred from a nearby
              structure — for example, hip pain may originate from the sacroiliac joint or lumbar
              spine, and knee pain may have a component from the hip or from adjacent soft tissue.
              Accurate evaluation helps distinguish local joint pathology from referred sources.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Joint Anatomy */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            role="anatomy"
            src="/images/conditions/joint-pain.png"
            alt="Joint anatomy showing cartilage, synovium, ligaments, meniscus, bursae, and surrounding soft tissues as potential pain sources including degenerative changes and inflammation"
            caption="Joint Anatomy and Pain Sources: A joint is a complex structure with multiple components that can become sources of pain. Articular cartilage can degrade (osteoarthritis), the synovium can inflame, ligaments can tear or become lax, and adjacent bursae can become irritated. Associated structures like tendons, muscles, and fascia can also contribute to joint pain. Referred pain from the spine or adjacent joints can mimic local joint pathology. Accurate evaluation requires understanding this anatomy and how different pathological processes present, distinguishing true joint pain from referred sources to guide appropriate treatment."
            priority={true}
          />
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
                "Persistent joint pain that has not responded adequately to conservative measures",
                "Joint pain that limits daily function, mobility, or quality of life",
                "Pain that is disproportionate to findings on imaging or prior workup",
                "Joint pain in the setting of known degenerative changes that has not been well managed",
                "Pain referred to a joint from another source that has not been clearly identified",
                "Prior joint procedures or surgeries with persistent or recurrent pain",
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
              How Dr. Dardashti Evaluates Joint Pain.
            </h2>
            <p>
              Evaluation begins with a thorough history — including the affected joint or joints,
              the onset and character of pain, aggravating and relieving factors, prior treatments
              and their responses, and any relevant history of injury, surgery, or systemic
              inflammatory disease.
            </p>
            <p>
              Physical examination assesses range of motion, palpation findings, joint line
              tenderness, and signs of inflammation. It also looks for evidence of referred pain
              from adjacent structures or the spine. Imaging — such as X-ray or MRI — is reviewed
              when available to help characterize the degree of structural involvement, though
              imaging findings are interpreted alongside the clinical presentation rather than
              in isolation.
            </p>
            <p>
              When inflammatory joint disease is suspected, coordination with rheumatology
              may be appropriate. Pain medicine evaluation focuses on identifying pain
              generators and developing a treatment plan to reduce pain and support function.
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
              Treatment is individualized based on the specific joint, suspected mechanism,
              severity of symptoms, and prior treatment history. Options that may be considered
              include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical therapy and activity modification to reduce mechanical joint stress",
                "Medication management when clinically appropriate",
                "Image-guided joint injections for selected patients to reduce pain and support function",
                "Sacroiliac joint injections when the sacroiliac joint is a primary contributor",
                "Facet joint injections when spinal facet joints are the suspected source",
                "Coordination with orthopedics or rheumatology when indicated by clinical findings",
                "Multimodal pain management planning when joint pain is part of a broader chronic pain picture",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Not every patient with joint pain requires an injection. Recommendations are based
              on the individual patient&apos;s clinical presentation, prior treatment history,
              and functional goals.
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
              Joint pain has many possible causes and contributing factors. Imaging findings
              such as degenerative changes do not always correlate directly with the degree
              of pain, and treatment response varies among patients.
            </p>
            <p>
              A formal clinical evaluation is required to determine an appropriate treatment
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
              <li><Link href="/conditions/sacroiliac-joint-pain" className="text-[#c8a020] hover:underline tracking-wide">Sacroiliac Joint Pain Evaluation →</Link></li>
              <li><Link href="/conditions/facet-mediated-pain" className="text-[#c8a020] hover:underline tracking-wide">Facet-Mediated Pain Evaluation →</Link></li>
              <li><Link href="/procedures/sacroiliac-joint-injections" className="text-[#c8a020] hover:underline tracking-wide">Sacroiliac Joint Injections →</Link></li>
              <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-[#c8a020] hover:underline tracking-wide">Facet Joint Injections &amp; Medial Branch Blocks →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/joint-pain" />
    </>
  );
}
