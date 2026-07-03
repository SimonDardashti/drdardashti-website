import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";
import ReferencesSection from "@/components/ReferencesSection";
import { CITATIONS } from "@/lib/citations";

const PAGE_URL = "https://www.drdardashti.com/procedures/cortisone-steroid-injections";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Cortisone & Steroid Injections | Simon Dardashti, MD" },
  description:
    "Patient education about cortisone and steroid injections, including bone health, temporary blood sugar increases, diabetes precautions, and how injections fit into pain management.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Cortisone & Steroid Injections | Simon Dardashti, MD",
    description:
      "Patient education about cortisone and steroid injections, including bone health, temporary blood sugar increases, diabetes precautions, and how injections fit into pain management.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortisone & Steroid Injections | Simon Dardashti, MD",
    description:
      "Patient education about cortisone and steroid injections, including bone health, temporary blood sugar increases, diabetes precautions, and how injections fit into pain management.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Cortisone & Steroid Injections | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Patient education about cortisone and steroid injections, including bone health, temporary blood sugar increases, diabetes precautions, and how injections fit into pain management.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalProcedure", name: "Cortisone and Steroid Injections" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Cortisone & Steroid Injections", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Local Treatment",
    body: "Steroid injections are usually placed near a specific painful or inflamed structure, such as a joint, bursa, tendon region, or irritated spinal nerve.",
  },
  {
    heading: "Bone Health",
    body: "When used appropriately and in moderation, occasional steroid injections generally have minimal effect on overall bone strength.",
  },
  {
    heading: "Diabetes Precautions",
    body: "Steroid injections can temporarily raise blood sugar, especially in patients with diabetes or prediabetes.",
  },
];

const faqItems = [
  {
    question: "Are cortisone injections the same as oral steroids?",
    answer: "No. A local cortisone or steroid injection is placed into or near a specific area. Oral steroids affect the whole body more broadly, especially when taken at higher doses or for longer periods.",
  },
  {
    question: "Will one steroid injection cause osteoporosis?",
    answer: "Occasional steroid injections used appropriately are generally unlikely to cause generalized osteoporosis. The concern for bone loss is much greater with long-term oral or systemic steroid use.",
  },
  {
    question: "Can steroid injections raise blood sugar?",
    answer: "Yes. Steroid injections can temporarily raise blood sugar, especially in patients with diabetes or prediabetes.",
  },
  {
    question: "What should I do if I have diabetes?",
    answer: "Monitor your blood sugar more closely after the injection and coordinate with your primary care doctor managing diabetes, your diabetes treating physician or endocrinologist if applicable, and the physician performing the injection.",
  },
  {
    question: "How often can steroid injections be repeated?",
    answer: "This depends on the diagnosis, injection location, dose, response to prior treatment, and patient-specific risks. Repeated injections should be used thoughtfully and not automatically repeated without reassessment.",
  },
];

export default function CortisoneSteroidsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Procedures &amp; Treatment Options
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Cortisone &amp; Steroid
              <br />
              <em className="not-italic text-[#888]">Injections.</em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed max-w-2xl">
              Cortisone and steroid injections are commonly used in pain management to reduce
              inflammation in a targeted area. Many patients have concerns about the word "steroid,"
              but local steroid injections are different from taking oral steroids every day for
              weeks or months. A formal clinical evaluation is required to determine whether a steroid
              injection is appropriate for an individual patient.
            </p>
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

      {/* WHAT ARE CORTISONE STEROIDS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Are Cortisone and Steroid Injections?
            </h2>
            <p>
              Cortisone is a type of corticosteroid medication. In pain management, corticosteroid
              injections may be used to reduce inflammation around painful structures such as joints,
              bursae, tendons, or spinal nerve roots.
            </p>
            <p>
              These injections are different from anabolic steroids used for muscle-building and are
              also different from taking oral steroid medication for a long period of time. The
              purpose of a cortisone or steroid injection is to deliver anti-inflammatory medication
              to a specific area where inflammation may be contributing to pain.
            </p>
            <p className="font-semibold text-[#0a0a0a] mt-6">Examples may include:</p>
            <ul className="space-y-2 ml-4">
              {[
                "Epidural steroid injections for selected patients with nerve-related neck, back, arm, or leg pain",
                "Facet joint injections when inflammation of the small joints of the spine may be contributing to pain",
                "Sacroiliac joint injections",
                "Joint injections",
                "Bursa injections",
                "Tendon sheath injections in selected situations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              Not every pain condition requires a steroid injection. Treatment recommendations depend
              on the diagnosis, medical history, examination findings, imaging when available, prior
              treatment response, and patient-specific risks.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Sacroiliac Joint Cortisone Injection */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/procedures/injections/sacroiliac-joint-injection.png"
            alt="Sacroiliac joint cortisone injection showing needle placement into SI joint space, steroid and anesthetic medication delivery, and inflammation reduction at the joint"
            caption="Cortisone Injection Example: Sacroiliac Joint. Cortisone injections can target many different joints and structures. This example shows a steroid injection into the sacroiliac joint for SI-related pain."
          />
        </div>

        {/* ILLUSTRATION: Trigger Point Cortisone Injection */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/procedures/injections/trigger-point-injection.png"
            alt="Trigger point cortisone injection showing needle placement into myofascial trigger point, steroid delivery to inflamed muscle tissue, and pain reduction mechanism"
            caption="Cortisone Injection Example: Trigger Point. Cortisone can also be injected into myofascial trigger points or tender muscle areas to reduce localized inflammation and pain."
          />
        </div>
      </section>

      {/* BONE HEALTH */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Bone Health</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Do Steroid Injections Damage the Bones?
            </h2>
            <p>
              Many patients worry that a steroid injection will weaken their bones. This concern is
              understandable, because long-term oral steroid use can affect bone density.
            </p>
            <p>
              However, a local steroid injection is not the same as taking steroid pills every day
              for weeks or months. With a properly used injection, the medication is placed into or
              near a specific area being treated. Most of the medication acts locally, and only a
              smaller amount may enter the rest of the body.
            </p>
            <p>
              For that reason, occasional steroid injections used appropriately are much less likely
              to cause whole-body steroid effects such as generalized bone loss or osteoporosis.
            </p>
            <p>
              This does not mean steroid injections should be used without limits. The risk of side
              effects may increase with larger doses, repeated injections, or injections performed
              too frequently in the same area. Depending on the location, repeated steroid exposure
              may raise concerns about cartilage, tendons, skin changes, or nearby tissues.
            </p>
            <p>
              Dr. Dardashti considers the patient's overall clinical picture before recommending a
              steroid injection, including age, diagnosis, imaging findings, diabetes status,
              osteoporosis history, medication use, infection risk, and prior response to treatment.
            </p>
          </div>
        </div>
      </section>

      {/* BLOOD SUGAR */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Blood Sugar</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Steroid Injections and Blood Sugar
            </h2>
            <p>
              Steroid injections can temporarily increase blood sugar levels. This is most important
              for patients with diabetes or prediabetes.
            </p>
            <p>
              For many patients, the increase is temporary and may last for a few days. The amount
              and duration of the increase can vary from person to person.
            </p>
            <p>
              Patients with diabetes should monitor their blood sugar more closely after a steroid
              injection. Patients who use insulin, have poorly controlled diabetes, or have had
              significant blood sugar changes after steroids in the past should plan ahead before
              the procedure.
            </p>
            <p className="font-semibold text-[#0a0a0a]">
              If you have diabetes, you should coordinate with:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "Your primary care doctor managing your diabetes",
                "Your diabetes treating physician or endocrinologist, if applicable",
                "The physician performing the injection",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              This coordination is important so your blood sugar can be monitored safely and
              medication adjustments can be made if needed.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT CONTEXT */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Context</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How Steroid Injections Fit Into a Treatment Plan
            </h2>
            <p>
              Steroid injections are not intended to be the only treatment for most pain conditions.
              They are usually considered as part of a broader plan that may include physical
              therapy, home exercise, activity modification, weight management, medication review,
              imaging review, and other non-surgical options.
            </p>
            <p>
              The goal is to reduce pain and inflammation enough to improve function, mobility, and
              participation in rehabilitation when appropriate.
            </p>
            <p>
              Response varies. Some patients experience meaningful relief, some experience partial
              relief, and others may not respond. The duration of relief also varies depending on
              the condition being treated and the individual patient.
            </p>
          </div>
        </div>
      </section>

      {/* RISKS AND LIMITATIONS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Risks</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Risks and Limitations
            </h2>
            <p>
              As with any procedure, steroid injections have potential risks. These may include
              temporary soreness, temporary pain flare, bleeding, infection, allergic reaction,
              facial flushing, temporary blood sugar elevation, skin color changes, soft tissue
              changes, tendon weakening, cartilage-related concerns depending on the injection
              location, or lack of meaningful pain relief.
            </p>
            <p>
              Serious complications are uncommon, but risk depends on the procedure type, injection
              location, medications, medical history, and individual patient factors.
            </p>
            <p>
              A formal clinical evaluation is required to determine whether a steroid injection is
              appropriate. This page is for general informational purposes only and does not provide
              medical advice, diagnosis, or treatment.
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
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="font-bold text-[#0a0a0a] mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {item.question}
                  </h3>
                  <p className="text-[#666] text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Important</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <p>
              This page is for general informational purposes only and does not constitute medical
              advice or create a physician-patient relationship. All medical decisions should be made
              in consultation with a qualified healthcare provider following a thorough clinical
              evaluation.
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
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-[#c8a020] hover:underline tracking-wide">Facet Joint Injections & Medial Branch Blocks →</Link></li>
              <li><Link href="/procedures/sacroiliac-joint-injections" className="text-[#c8a020] hover:underline tracking-wide">Sacroiliac Joint Injections →</Link></li>
              <li><Link href="/procedures/joint-bursa-tendon-injections" className="text-[#c8a020] hover:underline tracking-wide">Joint, Bursa & Tendon Sheath Injections →</Link></li>
              <li><Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">View all Procedures &amp; Treatment Options →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <ReferencesSection references={CITATIONS["/procedures/cortisone-steroid-injections"]} />

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/procedures/cortisone-steroid-injections" />
    </>
  );
}
