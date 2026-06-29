import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

const PAGE_URL = "https://www.drdardashti.com/procedures/joint-bursa-tendon-injections";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Joint, Bursa, and Tendon Injections | Simon Dardashti, MD" },
  description:
    "Educational information about joint injections, bursa injections, and tendon sheath injections for musculoskeletal pain conditions, including how they are evaluated and used as part of a clinical treatment plan.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Joint, Bursa, and Tendon Injections | Simon Dardashti, MD",
    description:
      "Educational information about joint injections, bursa injections, and tendon sheath injections for musculoskeletal pain conditions, including how they are evaluated and used as part of a clinical treatment plan.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joint, Bursa, and Tendon Injections | Simon Dardashti, MD",
    description:
      "Educational information about joint injections, bursa injections, and tendon sheath injections for musculoskeletal pain conditions, including how they are evaluated and used as part of a clinical treatment plan.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Joint, Bursa, and Tendon Injections | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Educational information about joint injections, bursa injections, and tendon sheath injections for musculoskeletal pain conditions, including how they are evaluated and used as part of a clinical treatment plan.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Joint, Bursa, and Tendon Injection",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Joint, Bursa, and Tendon Injections", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "What it is",
    body: "Injections of medication directly into joints, bursa (fluid sacs near joints), or tendon sheaths to address pain and inflammation, used after appropriate clinical evaluation.",
  },
  {
    heading: "When it may be considered",
    body: "In selected patients with joint pain, bursa-related pain, or tendon sheath inflammation when other conservative approaches have been tried and clinical evaluation supports their use.",
  },
  {
    heading: "What to expect",
    body: "The target structure is identified by palpation or ultrasound guidance, and medication is injected. Procedures typically take 10-20 minutes. Patients are observed briefly and usually go home the same day.",
  },
];

const faqs = [
  {
    q: "What is the difference between a joint injection, bursa injection, and tendon sheath injection?",
    a: "These are three different types of injections targeting different structures. A joint injection places medication directly into the joint space. A bursa injection targets a bursa (a fluid-filled sac that cushions areas where tendons, muscles, and bones rub together). A tendon sheath injection places medication in the fluid surrounding a tendon. The specific injection type depends on the structure causing pain.",
  },
  {
    q: "What medication is injected?",
    a: "The specific medication depends on the clinical situation and diagnosis. Options may include local anesthetic alone or local anesthetic combined with a corticosteroid or other medication. The choice is based on the patient's diagnosis, prior response to treatment, and medical history.",
  },
  {
    q: "Is ultrasound guidance always used?",
    a: "Ultrasound guidance improves the accuracy of the injection and helps ensure medication is placed in the correct location. Some injections can be performed by landmark palpation, while others benefit more from ultrasound visualization. The specific approach depends on the target structure and clinical situation.",
  },
  {
    q: "How quickly will I feel relief?",
    a: "Response time is variable. Some patients experience pain relief within hours or days, while others may take longer or may not experience significant relief. Response depends on the specific structure involved, severity of inflammation, chronicity of the condition, and individual factors.",
  },
  {
    q: "Are these injections covered by insurance?",
    a: "Insurance coverage varies and depends on the insurance plan, the specific indication, and the structure being injected. Patients should check with their insurance provider before proceeding.",
  },
  {
    q: "How many injections will I need?",
    a: "The number of injections recommended depends on the specific structure involved, prior response, and clinical evaluation. Some patients may benefit from a single injection, while others may be candidates for additional injections spaced over time.",
  },
];

export default function JointBursaTendonInjectionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Procedures &amp; Treatment Options
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Joint, Bursa, &amp;
            <br />
            <em className="not-italic text-[#888]">Tendon Injections.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Joint, bursa, and tendon sheath injections are used to address musculoskeletal
            pain conditions affecting these structures. A formal clinical evaluation is needed
            to determine which injection, if any, is appropriate for any individual patient.
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

      {/* SECTION 1 — The Three Types of Injections */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Joint, Bursa, and Tendon Injections.
            </h2>
            <p>
              <strong>Joint Injections</strong> place medication directly into the joint space,
              used for joint pain, inflammation, or osteoarthritic changes.
            </p>
            <p>
              <strong>Bursa Injections</strong> target bursae — fluid-filled sacs that reduce
              friction between tendons, muscles, and bones. Inflammation in a bursa (bursitis)
              causes pain that can be addressed with an injection.
            </p>
            <p>
              <strong>Tendon Sheath Injections</strong> place medication in the fluid-filled
              sheath surrounding a tendon, used for tenosynovitis or tendon sheath inflammation.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Joint Injection Example */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/procedures/injections/facet-joint-injection.png"
            alt="Joint injection showing needle placement into joint space, steroid and anesthetic delivery into joint cavity, and inflammation reduction"
            caption="Joint, Bursa, and Tendon Injections: Medication can be injected into various anatomical structures. This example shows a joint injection, which can reduce inflammation and pain in the joint itself."
          />
        </div>
      </section>

      {/* SECTION 2 — When These Injections May Be Considered */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Indications</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              When These Injections May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              These injections may be considered for selected patients with:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Joint pain or osteoarthritic changes",
                "Bursa inflammation (bursitis)",
                "Tendon sheath inflammation (tenosynovitis)",
                "Pain in these structures that has not responded adequately to conservative treatment",
                "Conditions where a clinical evaluation supports the use of injection therapy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              The appropriate injection depends on which structure is causing pain and which
              has been identified on clinical examination and, when available, imaging.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — How These Injections Are Performed */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Procedure</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The Injection Procedure.
            </h2>
            <p>
              The target structure (joint, bursa, or tendon sheath) is identified by physical
              examination and, when appropriate, ultrasound guidance. Ultrasound guidance
              improves accuracy and helps ensure medication reaches the correct location.
            </p>
            <p>
              Once the target is identified, medication is injected. The medication typically
              consists of local anesthetic and may include a corticosteroid or other
              medication depending on the clinical situation. The entire procedure usually
              takes 10-20 minutes. Patients are observed briefly and typically go home the
              same day.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Response to Treatment */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Response</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Response and Outcomes.
            </h2>
            <p>
              Response to these injections is variable. Some patients experience significant
              pain relief, while others experience minimal or no improvement. The timeline of
              relief also varies — some patients feel improvement quickly while others may
              take longer.
            </p>
            <p>
              Many patients benefit from combining these injections with other treatments,
              particularly physical therapy, to address the underlying cause of pain and
              prevent recurrence. The goal is to reduce pain enough to allow more effective
              participation in rehabilitation and other conservative care.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-2">Questions</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Frequently Asked Questions.
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-6 border border-[#e5e5e0]">
                <h3 className="font-bold text-[#0a0a0a] text-base mb-3">{faq.q}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Information</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Important Information.
            </h2>
            <p>
              These injections are not appropriate for every patient or every condition. Response
              is variable and depends on the specific structure involved, severity of the
              condition, chronicity, and individual patient factors. These injections do not cure
              the underlying condition and are not guaranteed to provide pain relief.
            </p>
            <p>
              A formal clinical evaluation is required to determine whether one of these
              injections is appropriate for any individual patient. This page is for general
              informational purposes only and does not constitute medical advice or create a
              physician-patient relationship.
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
            <h2
              className="text-base font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Other Treatment Options.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">View all Procedures &amp; Treatment Options →</Link></li>
              <li><Link href="/conditions/joint-pain" className="text-[#c8a020] hover:underline tracking-wide">Joint Pain Evaluation →</Link></li>
              <li><Link href="/conditions/bursa-related-pain" className="text-[#c8a020] hover:underline tracking-wide">Bursa-Related Pain Evaluation →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
