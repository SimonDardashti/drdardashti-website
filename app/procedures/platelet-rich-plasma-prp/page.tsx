import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";
import ReferencesSection from "@/components/ReferencesSection";
import { CITATIONS } from "@/lib/citations";

const PAGE_URL = "https://www.drdardashti.com/procedures/platelet-rich-plasma-prp";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Platelet-Rich Plasma (PRP) Injections | Simon Dardashti, MD" },
  description:
    "Educational information about platelet-rich plasma (PRP) injections for selected musculoskeletal pain conditions, including how PRP is evaluated as part of a clinical treatment plan.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Platelet-Rich Plasma (PRP) Injections | Simon Dardashti, MD",
    description:
      "Educational information about platelet-rich plasma (PRP) injections for selected musculoskeletal pain conditions, including how PRP is evaluated as part of a clinical treatment plan.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platelet-Rich Plasma (PRP) Injections | Simon Dardashti, MD",
    description:
      "Educational information about platelet-rich plasma (PRP) injections for selected musculoskeletal pain conditions, including how PRP is evaluated as part of a clinical treatment plan.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Platelet-Rich Plasma (PRP) Injections | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Educational information about platelet-rich plasma (PRP) injections for selected musculoskeletal pain conditions, including how PRP is evaluated as part of a clinical treatment plan.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Platelet-Rich Plasma (PRP) Injection",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Platelet-Rich Plasma (PRP) Injections", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "What it is",
    body: "An injection therapy using a concentration of platelets from the patient's own blood, considered for selected musculoskeletal pain conditions after clinical evaluation.",
  },
  {
    heading: "When it may be considered",
    body: "In selected patients with certain tendon, joint, or soft-tissue pain when other conservative or interventional options have been tried and clinical evaluation supports its use.",
  },
  {
    heading: "What to expect",
    body: "Blood is drawn, processed to concentrate platelets, and the resulting PRP solution is injected into the affected area. The procedure typically takes 30-60 minutes. Patients are observed briefly and usually go home the same day.",
  },
];

const faqs = [
  {
    q: "What is the difference between PRP and stem cell therapy?",
    a: "PRP and stem cell therapy are different treatments. PRP uses concentrated platelets from the patient's own blood. Stem cell therapy uses stem cells, which are different cell types with different properties. Dr. Dardashti evaluates which option, if any, may be appropriate based on the individual patient's diagnosis and clinical picture.",
  },
  {
    q: "Does PRP cause tissue to heal or regenerate?",
    a: "While PRP contains growth factors and other bioactive molecules that may influence tissue response, the evidence for tissue regeneration or healing varies by condition and indication. PRP is not a guaranteed regenerative treatment. The actual biological effects and clinical outcomes depend on many factors and cannot be predicted in advance.",
  },
  {
    q: "Is PRP covered by insurance?",
    a: "Insurance coverage for PRP varies widely and depends on the insurance plan, the specific indication, and whether the procedure is considered experimental or investigational for that indication. Patients should check with their insurance provider before proceeding.",
  },
  {
    q: "What are the risks of PRP injection?",
    a: "Like all injections, PRP injections carry potential risks, including temporary increased pain, bleeding, infection, or allergic reaction. The risks are generally considered low for PRP injections performed under appropriate conditions, but any intervention carries some risk. Risks and benefits are discussed before the procedure.",
  },
  {
    q: "How quickly will I feel results?",
    a: "Response to PRP varies considerably. Some patients report pain improvement within days or weeks, while others may take longer or may not experience significant benefit. The timeline and degree of response depend on the condition being treated, severity, chronicity, patient factors, and other treatments being used.",
  },
  {
    q: "How many PRP injections will I need?",
    a: "The number of injections recommended depends on the specific condition, prior response, and clinical evaluation. Some patients may benefit from one injection, while others may be candidates for multiple injections spaced over time. This is determined during the clinical evaluation and treatment planning process.",
  },
];

export default function PLRPPage() {
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
            Platelet-Rich Plasma
            <br />
            <em className="not-italic text-[#888]">(PRP) Injections.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Platelet-rich plasma (PRP) is an autologous treatment option — meaning it uses
            the patient's own blood — that may be considered for selected musculoskeletal
            pain conditions. A formal clinical evaluation is needed to determine whether PRP
            is appropriate for any individual patient.
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

      {/* SECTION 1 — What Is PRP? */}
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
              What Is Platelet-Rich Plasma?
            </h2>
            <p>
              Platelet-rich plasma (PRP) is prepared from the patient's own blood. Blood is
              drawn, then processed — typically using centrifugation — to concentrate the
              platelets in a smaller volume of plasma. This concentrated PRP solution contains
              platelets and other blood components that include various growth factors and
              bioactive molecules.
            </p>
            <p>
              When clinically appropriate, the PRP is injected into a targeted area where pain
              or injury is present. The biological effects of PRP are not fully understood and
              may vary depending on the specific condition, how the PRP is prepared, and
              individual patient factors.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: PRP Mechanism */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/conditions/PRP mechanism.png"
            alt="PRP mechanism showing blood draw, centrifugation concentrating platelets, growth factor release (PDGF, VEGF, IGF-1), and tissue healing stimulation at injection site (tendon, ligament, joint, nerve)"
            caption="How Platelet-Rich Plasma Works: Blood is drawn and spun in a centrifuge to concentrate platelets. These platelets are rich in growth factors that promote healing and tissue regeneration. When injected at the injury site, PRP stimulates the body's natural healing response."
          />
        </div>
      </section>

      {/* SECTION 2 — Conditions Where PRP May Be Considered */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Conditions</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              When PRP May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              PRP may be considered for selected musculoskeletal pain conditions, potentially including:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Tendon-related pain conditions",
                "Selected joint pain or osteoarthritic changes",
                "Ligament or soft-tissue injury-related pain",
                "Selected overuse or degenerative musculoskeletal conditions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              PRP is not appropriate for all musculoskeletal pain conditions. Whether PRP may be
              considered depends on the specific diagnosis, the patient's examination findings,
              imaging when available, prior treatment response, medical history, and overall
              clinical context.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — How PRP Fits into a Treatment Plan */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Approach</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Treatment Planning and Evaluation.
            </h2>
            <p>
              PRP is typically considered after review of the patient's symptoms, physical
              examination, imaging findings, prior treatments (including conservative care,
              physical therapy, and medications), and overall clinical goals. PRP is generally
              not considered a first-line treatment, but rather an option to evaluate when
              other approaches have been tried or when the clinical picture suggests it may
              be worth considering.
            </p>
            <p>
              The goal of evaluation is to determine whether PRP is a reasonable option for the
              specific patient's condition, based on the overall clinical picture and available
              evidence for that particular indication.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Evidence and Variability */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evidence</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Evidence and Individual Variability.
            </h2>
            <p>
              The scientific evidence for PRP varies significantly by condition and indication.
              Some conditions have more robust evidence, while evidence for others is still
              developing. Response to PRP is highly variable between patients and cannot be
              predicted in advance.
            </p>
            <p>
              Factors that influence response may include the severity and chronicity of the
              condition, the specific area being treated, how the PRP is prepared, patient
              age and overall health, whether other treatments are being used concurrently, and
              other individual factors. Because of this variability, PRP is not a guaranteed
              treatment and is not appropriate for every patient or every condition.
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
              PRP is not appropriate for every patient or every musculoskeletal pain condition.
              Evidence for PRP's effectiveness varies by condition and indication. Response to
              treatment is highly variable and cannot be predicted in advance. Insurance
              coverage for PRP varies; some plans may consider it experimental or investigational
              for certain indications.
            </p>
            <p>
              A formal clinical evaluation is required to determine whether PRP is an appropriate
              option for any individual patient. This page is for general informational purposes
              only and does not constitute medical advice or create a physician-patient
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
            <h2
              className="text-base font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Other Treatment Options.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">View all Procedures &amp; Treatment Options →</Link></li>
              <li><Link href="/conditions/joint-pain" className="text-[#c8a020] hover:underline tracking-wide">Joint Pain Evaluation →</Link></li>
              <li><Link href="/conditions/myofascial-pain" className="text-[#c8a020] hover:underline tracking-wide">Myofascial Pain Evaluation →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <ReferencesSection references={CITATIONS["/procedures/platelet-rich-plasma-prp"]} />

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/procedures/platelet-rich-plasma-prp" />
    </>
  );
}
