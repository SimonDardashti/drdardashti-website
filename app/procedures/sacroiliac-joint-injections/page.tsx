import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";
import ReferencesSection from "@/components/ReferencesSection";
import { CITATIONS } from "@/lib/citations";

const PAGE_URL = "https://www.drdardashti.com/procedures/sacroiliac-joint-injections";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Sacroiliac Joint Injections | Simon Dardashti, MD" },
  description:
    "Sacroiliac joint injections are image-guided procedures used to evaluate and treat pain that may be coming from the SI joint. Dr. Simon Dardashti, Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Sacroiliac Joint Injections | Simon Dardashti, MD",
    description:
      "Sacroiliac joint injections are image-guided procedures used to evaluate and treat pain that may be coming from the SI joint. Dr. Simon Dardashti, Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacroiliac Joint Injections | Simon Dardashti, MD",
    description:
      "Sacroiliac joint injections are image-guided procedures used to evaluate and treat pain that may be coming from the SI joint. Dr. Simon Dardashti, Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Sacroiliac Joint Injections | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Sacroiliac joint injections are image-guided procedures used to evaluate and treat pain that may be coming from the SI joint. Dr. Simon Dardashti, Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Sacroiliac Joint Injection",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Sacroiliac Joint Injections", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "What it is",
    body: "An image-guided injection into or around the sacroiliac joint to evaluate or treat lower back and buttock pain that may originate from this joint.",
  },
  {
    heading: "When it may help",
    body: "In selected patients with lower back, buttock, or hip area pain where evaluation suggests the SI joint may be a source. Not appropriate for every patient.",
  },
  {
    heading: "What to expect",
    body: "Performed with fluoroscopic image guidance. Local anesthetic numbs the skin beforehand. Patients are typically observed briefly and go home the same day.",
  },
];

const faqs = [
  {
    q: "How do I know if my pain is coming from the SI joint?",
    a: "There is no single test that definitively identifies SI joint pain. Diagnosis is based on the pattern of symptoms, physical examination findings, and the patient's history. Pain in the lower back, buttock, or upper leg that worsens with prolonged standing or certain movements may warrant evaluation. A formal clinical assessment is the appropriate starting point.",
  },
  {
    q: "What is the procedure like?",
    a: "A sacroiliac joint injection is performed with image guidance — typically fluoroscopy — to confirm accurate needle placement into the joint. Local anesthetic is used to numb the skin before the needle is advanced. Most patients tolerate the procedure well and are observed briefly before going home.",
  },
  {
    q: "Will I be sedated?",
    a: "Most patients remain awake during the procedure. Light sedation may be offered in some settings, but general anesthesia is not typically required.",
  },
  {
    q: "How quickly will I feel a difference?",
    a: "When a local anesthetic is injected into the SI joint, any reduction in pain from that component is usually noticeable within the first hour or two. Patients may be asked to pay attention to their pain level during this early window, as the response can help inform the diagnostic evaluation.",
  },
  {
    q: "How long does the relief last?",
    a: "The duration of relief varies. Local anesthetic effects typically last a few hours. If a corticosteroid is also used, any anti-inflammatory benefit may persist for weeks or longer in some patients — though the response is not predictable and not guaranteed.",
  },
  {
    q: "Can this procedure be repeated?",
    a: "In appropriate patients, SI joint injections may be repeated if there has been a meaningful prior response and sufficient time has passed. The frequency and appropriateness of repeat procedures is determined during clinical evaluation.",
  },
  {
    q: "Are there risks?",
    a: "Like all injections, there are risks, including temporary increase in pain, bleeding, infection, or medication-related effects. Serious complications are uncommon. The risks and benefits are reviewed before any procedure.",
  },
];

export default function SIJointInjectionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Procedures &amp; Treatment Options
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Sacroiliac Joint
              <br />
              <em className="not-italic text-[#888]">Injections.</em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed">
              Sacroiliac joint injections are image-guided procedures that can
              help determine whether the SI joint is contributing to a patient&apos;s
              pain — and may also provide temporary relief. A formal clinical
              evaluation is needed to determine whether this procedure is
              appropriate.
            </p>
          </div>
          <div className="hidden md:block w-[360px] shrink-0 rounded-xl overflow-hidden bg-white">
            <Image
              src="/images/procedures/sacroiliac-joint-injection.png"
              alt="Medical illustration of the sacroiliac joint and needle approach for sacroiliac joint injection."
              width={1536}
              height={1024}
              className="w-full h-auto"
              priority
            />
          </div>
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

      {/* SECTION 1 — What Is the SI Joint */}
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
              What Is the Sacroiliac Joint?
            </h2>
            <p>
              The sacroiliac (SI) joints are located at the base of the spine,
              where the sacrum — the triangular bone between the lumbar spine
              and the tailbone — connects to the two iliac bones of the pelvis.
              There is one SI joint on each side.
            </p>
            <p>
              The SI joints carry load between the upper body and the legs.
              They are supported by strong ligaments and muscles and allow
              relatively limited movement. Even so, they can become a source of
              pain in some individuals.
            </p>
            <p>
              SI joint pain typically presents in the lower back and buttock
              region and may extend into the upper thigh. It can be difficult to
              distinguish from other causes of low back pain on the basis of
              symptoms alone.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Sacroiliac Joint Injection */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/procedures/injections/sacroiliac-joint-injection.png"
            alt="Sacroiliac joint injection showing needle placement into SI joint space, steroid and anesthetic delivery, and inflammation reduction at the joint"
            caption="Sacroiliac Joint Injection: Under imaging guidance, the needle is advanced into the sacroiliac joint space. Steroid and local anesthetic medication are injected to reduce inflammation and pain."
          />
        </div>
      </section>

      {/* SECTION 2 — Symptoms */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Symptoms</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Symptoms That May Suggest SI Joint Involvement.
            </h2>
            <p>
              No single symptom confirms that the SI joint is the source of
              pain. The following patterns are sometimes associated with
              SI joint pain — though overlap with other conditions is common:
            </p>
            <ul className="list-none space-y-2 pl-0">
              {[
                "Lower back pain, often one-sided, near the top of the buttock",
                "Buttock, hip, or upper leg pain",
                "Pain that worsens with prolonged sitting or standing",
                "Pain with transitional movements such as rolling over in bed or getting up from a chair",
                "Tenderness over the sacroiliac region on one or both sides",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#888]">
              These features alone are not diagnostic. A thorough clinical
              evaluation — including physical examination with specific
              provocation maneuvers, review of imaging when available, and
              consideration of the patient&apos;s response to treatment — is needed
              to assess whether the SI joint may be a meaningful source of pain.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Why an SI Joint Injection May Be Considered */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluation</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Why This Procedure May Be Recommended.
            </h2>
            <p>
              Diagnosing SI joint pain with certainty is challenging. Physical
              examination findings and imaging are helpful but neither is
              definitive. An SI joint injection has two potential purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <div className="border border-[#e5e5e0] rounded p-5">
                <p className="text-xs text-[#c8a020] uppercase tracking-widest font-semibold mb-2">Diagnostic</p>
                <p className="text-sm text-[#555] leading-relaxed">
                  If the patient&apos;s typical pain is significantly reduced after
                  local anesthetic is injected into the joint, this suggests
                  the SI joint is contributing to the pain. This response can
                  help guide further treatment decisions.
                </p>
              </div>
              <div className="border border-[#e5e5e0] rounded p-5">
                <p className="text-xs text-[#c8a020] uppercase tracking-widest font-semibold mb-2">Therapeutic</p>
                <p className="text-sm text-[#555] leading-relaxed">
                  An anti-inflammatory medication (corticosteroid) may be
                  included alongside local anesthetic. This can provide
                  temporary relief in some patients, though the response
                  varies and cannot be predicted in advance.
                </p>
              </div>
            </div>
            <p>
              The procedure is one part of an individualized treatment plan.
              Not all patients with suspected SI joint pain are candidates, and
              the decision is based on formal clinical evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — What the Procedure Involves */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">The Procedure</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What the Procedure Involves.
            </h2>
            <p>
              Sacroiliac joint injections are performed using real-time image
              guidance — typically fluoroscopy — to allow accurate needle
              placement into the joint space.
            </p>
            <p>
              The patient lies face down on the procedure table. The skin over
              the targeted area is cleaned and numbed with local anesthetic.
              The needle is then guided into position under continuous imaging.
              Once placement is confirmed, the medication is delivered.
            </p>
            <p>
              The procedure typically takes a short amount of time. Patients
              are monitored briefly afterward and usually go home the same day.
              A responsible adult should be available to drive the patient home.
            </p>
            <p>
              Patients are often asked to note their pain levels in the hours
              following the procedure, particularly during activities that
              typically provoke their symptoms. This information can be useful
              diagnostically.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Aftercare */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Aftercare</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              After the Procedure.
            </h2>
            <p>
              It is common to have some soreness at the injection site for a
              day or two following the procedure. A temporary increase in pain
              is also possible as the local anesthetic wears off.
            </p>
            <p>
              Most patients are advised to take it easy for the remainder of
              the day and to avoid strenuous activity until clearance is given.
              Specific instructions are provided based on the individual
              clinical situation.
            </p>
            <p>
              If a corticosteroid was used, any anti-inflammatory effect may
              take several days to develop. Patients are typically asked to
              report back on their response so that the result can be
              incorporated into the ongoing treatment plan.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Risks */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>06</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Risks</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Risks and Considerations.
            </h2>
            <p>
              Sacroiliac joint injections are generally well tolerated when
              performed following appropriate clinical evaluation. As with any
              procedure, there are risks to be aware of:
            </p>
            <ul className="list-none space-y-2 pl-0">
              {[
                "Temporary increase in pain at the injection site",
                "Minor bleeding or bruising",
                "Infection (uncommon with proper technique)",
                "Temporary numbness or weakness in the leg (rare)",
                "Medication-related effects from corticosteroids, including temporary changes in blood sugar",
                "Incomplete or absent response to the injection",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#888]">
              Risks and benefits are discussed with each patient before any
              procedure is performed. The appropriateness of the procedure
              depends on individual circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Part of a Treatment Plan */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>07</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment Plan</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Part of a Broader Treatment Plan.
            </h2>
            <p>
              An SI joint injection is rarely the only element of treatment.
              Physical therapy, activity modification, and other conservative
              measures are often part of the overall plan. The results of the
              injection — including whether and how much pain was reduced — help
              guide next steps.
            </p>
            <p>
              In selected patients who have had a meaningful diagnostic response
              and whose pain persists despite other measures, additional options
              may be considered. Treatment planning is individualized and based
              on the full clinical picture.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">FAQ</p>
          </div>
          <div className="md:col-span-10 divide-y divide-[#e5e5e0]">
            {faqs.map((item) => (
              <div key={item.q} className="py-8 first:pt-0">
                <h3
                  className="font-bold text-[#0a0a0a] text-base mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.q}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
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
            <h2
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Important Limitations.
            </h2>
            <p>
              Not all patients with lower back or buttock pain are candidates
              for sacroiliac joint injections. Treatment recommendations are
              individualized and based on formal clinical evaluation. Response
              to the procedure varies and cannot be predicted in advance. This
              content is for general informational purposes only and does not
              constitute medical advice or a guarantee of any specific outcome.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving
              the San Fernando Valley, Santa Clarita Valley, and surrounding
              Los Angeles communities.
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
              Related Conditions &amp; Procedures.
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/conditions/sacroiliac-joint-pain" className="text-[#c8a020] hover:underline tracking-wide">
                  Sacroiliac Joint Pain Evaluation →
                </Link>
              </li>
              <li>
                <Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">
                  Low Back Pain Evaluation →
                </Link>
              </li>
              <li>
                <Link href="/conditions/facet-mediated-pain" className="text-[#c8a020] hover:underline tracking-wide">
                  Facet-Mediated Pain Evaluation →
                </Link>
              </li>
              <li>
                <Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-[#c8a020] hover:underline tracking-wide">
                  Facet Joint Injections &amp; Medial Branch Blocks →
                </Link>
              </li>
              <li>
                <Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">
                  View all Procedures &amp; Treatment Options →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <ReferencesSection references={CITATIONS["/procedures/sacroiliac-joint-injections"]} />

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/procedures/sacroiliac-joint-injections" />
    </>
  );
}
