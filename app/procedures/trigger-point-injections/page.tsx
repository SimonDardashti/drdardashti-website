import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/procedures/trigger-point-injections";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Trigger Point Injections | Simon Dardashti, MD" },
  description:
    "Educational information about trigger point injections for myofascial pain and muscle-related pain conditions, including how they are evaluated and used as part of a clinical treatment plan.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Trigger Point Injections | Simon Dardashti, MD",
    description:
      "Educational information about trigger point injections for myofascial pain and muscle-related pain conditions, including how they are evaluated and used as part of a clinical treatment plan.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trigger Point Injections | Simon Dardashti, MD",
    description:
      "Educational information about trigger point injections for myofascial pain and muscle-related pain conditions, including how they are evaluated and used as part of a clinical treatment plan.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Trigger Point Injections | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Educational information about trigger point injections for myofascial pain and muscle-related pain conditions, including how they are evaluated and used as part of a clinical treatment plan.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Trigger Point Injection",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Trigger Point Injections", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "What it is",
    body: "An injection of medication directly into a trigger point in a muscle, used to address localized muscle tension and myofascial pain after appropriate clinical evaluation.",
  },
  {
    heading: "When it may be considered",
    body: "In selected patients with myofascial pain, muscle tension, or trigger points when other conservative approaches have been tried and clinical evaluation supports its use.",
  },
  {
    heading: "What to expect",
    body: "The trigger point is identified by palpation or imaging guidance, and a small amount of medication is injected into the muscle. The procedure typically takes 10-20 minutes. Patients are observed briefly and usually go home the same day.",
  },
];

const faqs = [
  {
    q: "What is a trigger point?",
    a: "A trigger point is a hyperirritable spot in a muscle that can cause local pain and referred pain. When pressure is applied to the trigger point, it may elicit tenderness or reproduce the patient's pain. Trigger points are part of the clinical diagnosis of myofascial pain.",
  },
  {
    q: "What medication is injected?",
    a: "The specific medication injected depends on the clinical situation and the physician's assessment. Options may include local anesthetic alone or local anesthetic combined with other medications. The choice is based on the patient's diagnosis, prior response to treatment, and medical history.",
  },
  {
    q: "How quickly will I feel relief?",
    a: "Some patients experience pain relief within hours or days after trigger point injection, while others may take longer or may not experience significant relief. Response is variable and depends on the chronicity and severity of the condition, which muscles are involved, and individual factors.",
  },
  {
    q: "Are trigger point injections covered by insurance?",
    a: "Insurance coverage for trigger point injections varies widely and depends on the insurance plan, the specific indication, and whether the procedure is considered a covered benefit. Patients should check with their insurance provider before proceeding.",
  },
  {
    q: "Is trigger point injection the same as dry needling?",
    a: "Trigger point injection and dry needling are related but different techniques. Trigger point injection involves injecting medication into the trigger point. Dry needling uses a needle without medication. Both are used to address trigger points, but they are distinct procedures.",
  },
  {
    q: "How many trigger point injections will I need?",
    a: "The number of injections recommended depends on the specific muscles involved, prior response, and clinical evaluation. Some patients may benefit from treatment of a single muscle, while others may have multiple trigger points that could be addressed over time.",
  },
];

export default function TriggerPointInjectionsPage() {
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
            Trigger Point
            <br />
            <em className="not-italic text-[#888]">Injections.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Trigger point injections are used to address myofascial pain and muscle-related
            pain conditions. A formal clinical evaluation is needed to determine whether
            trigger point injection is appropriate for any individual patient.
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

      {/* SECTION 1 — What Are Trigger Points? */}
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
              What Are Trigger Points?
            </h2>
            <p>
              A trigger point is a localized area of muscle tension — a hyperirritable spot
              in a muscle that is tender when pressed. Trigger points can cause both local
              pain at the site and referred pain in other areas. The condition of having
              trigger points is called myofascial pain syndrome.
            </p>
            <p>
              Trigger points are identified through physical examination by palpation (feeling)
              of the muscle. When compressed, a trigger point typically produces local
              tenderness and may reproduce or worsen the patient's pain complaint.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Trigger Point Injection */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/procedures/injections/trigger-point-injection.png"
            alt="Trigger point injection showing needle placement into myofascial trigger point, local anesthetic and medication delivery to inflamed muscle tissue, and pain reduction mechanism"
            caption="Trigger Point Injection: A needle is advanced directly into the trigger point (hyperirritable muscle spot). Medication is injected to reduce inflammation and muscle tension, providing pain relief."
          />
        </div>
      </section>

      {/* SECTION 2 — When Trigger Point Injections May Be Considered */}
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
              When Trigger Point Injections May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Trigger point injections may be considered for selected patients with:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Myofascial pain syndrome",
                "Localized muscle tension and trigger points",
                "Muscle-related pain that has not responded adequately to conservative treatment",
                "Specific identifiable trigger points on physical examination",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Whether trigger point injection is appropriate depends on the patient's
              diagnosis, physical examination findings, prior treatment response, and overall
              clinical context.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — The Trigger Point Injection Procedure */}
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
              The Trigger Point Injection.
            </h2>
            <p>
              The procedure begins with identification of the trigger point through palpation
              or imaging guidance. Once the trigger point is identified, medication is injected
              directly into the muscle at that location. The medication may consist of local
              anesthetic alone or may be combined with other medications, depending on the
              clinical situation.
            </p>
            <p>
              The injection is relatively quick, typically taking 10-20 minutes. The patient
              is observed briefly after the procedure and usually goes home the same day. The
              area injected may feel sore initially, similar to the soreness after an injection.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Combination with Other Treatments */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Trigger Point Injections as Part of a Treatment Plan.
            </h2>
            <p>
              Trigger point injections are often most effective when combined with other
              treatments, particularly physical therapy and stretching. Physical therapy can
              help address the underlying muscle tension and prevent trigger points from
              recurring.
            </p>
            <p>
              The goal of trigger point injection is to reduce pain and muscle tension,
              enabling the patient to participate more effectively in physical therapy and
              other conservative care to address the underlying condition.
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
              Trigger point injections are not appropriate for every patient or every
              myofascial pain condition. Response to trigger point injection is variable and
              depends on many factors including severity of the condition, chronicity,
              location, concurrent treatments, and individual patient factors.
            </p>
            <p>
              A formal clinical evaluation is required to determine whether trigger point
              injection is an appropriate option for any individual patient. This page is for
              general informational purposes only and does not constitute medical advice or
              create a physician-patient relationship.
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
              <li><Link href="/conditions/myofascial-pain" className="text-[#c8a020] hover:underline tracking-wide">Myofascial Pain Evaluation →</Link></li>
              <li><Link href="/conditions/myofascial-pain" className="text-[#c8a020] hover:underline tracking-wide">Myofascial Pain Evaluation →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/procedures/trigger-point-injections" />
    </>
  );
}
