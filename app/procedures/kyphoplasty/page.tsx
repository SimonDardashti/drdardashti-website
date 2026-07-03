import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/procedures/kyphoplasty";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Kyphoplasty for Vertebral Compression Fractures | Simon Dardashti, MD" },
  description:
    "Learn how kyphoplasty may be considered for selected patients with painful vertebral compression fractures after careful clinical evaluation and imaging review.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Kyphoplasty for Vertebral Compression Fractures | Simon Dardashti, MD",
    description:
      "Learn how kyphoplasty may be considered for selected patients with painful vertebral compression fractures after careful clinical evaluation and imaging review.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyphoplasty for Vertebral Compression Fractures | Simon Dardashti, MD",
    description:
      "Learn how kyphoplasty may be considered for selected patients with painful vertebral compression fractures after careful clinical evaluation and imaging review.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Kyphoplasty for Vertebral Compression Fractures | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Learn how kyphoplasty may be considered for selected patients with painful vertebral compression fractures after careful clinical evaluation and imaging review.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalProcedure", name: "Kyphoplasty" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Kyphoplasty", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Painful Compression Fractures",
    body: "Kyphoplasty is a minimally invasive, image-guided procedure for selected patients with painful vertebral compression fractures that limit function and mobility.",
  },
  {
    heading: "Fracture Stabilization",
    body: "The procedure aims to stabilize the fractured vertebra and, in some cases, partially restore vertebral body height under careful clinical guidance.",
  },
  {
    heading: "Careful Patient Selection",
    body: "Kyphoplasty is not appropriate for every fracture. Thorough evaluation of imaging, symptoms, and clinical context is essential before considering the procedure.",
  },
];

const faqs = [
  {
    question: "What is kyphoplasty?",
    answer:
      "Kyphoplasty is a minimally invasive, image-guided procedure used for selected patients with painful vertebral compression fractures. Using fluoroscopy for guidance, the procedure involves stabilizing the fractured vertebra and sometimes partially restoring vertebral body height using medical-grade bone cement.",
  },
  {
    question: "What type of fracture does kyphoplasty treat?",
    answer:
      "Kyphoplasty may be used for vertebral compression fractures — fractures where a vertebral body loses height due to osteoporosis, trauma, tumor-related changes, or other causes. Not all compression fractures require kyphoplasty, and careful evaluation is needed to determine if the fracture is contributing to a patient's pain.",
  },
  {
    question: "Is kyphoplasty the same as vertebroplasty?",
    answer:
      "Kyphoplasty and vertebroplasty are related but distinct procedures. Kyphoplasty uses a balloon to create space and potentially restore some vertebral height before cement placement. Vertebroplasty typically places cement directly into the fractured vertebra without the balloon step. Dr. Dardashti discusses which approach, if either, may be appropriate for each patient.",
  },
  {
    question: "How do you know if a compression fracture is causing my pain?",
    answer:
      "Determining whether a compression fracture is responsible for pain requires a complete clinical evaluation: review of your pain pattern, examination findings, imaging characteristics, the age of the fracture, and how symptoms correlate with the fracture location. A single imaging finding does not define the diagnosis — the full clinical picture matters.",
  },
  {
    question: "Does kyphoplasty treat osteoporosis?",
    answer:
      "No. Kyphoplasty addresses pain from a selected painful compression fracture. It does not treat the underlying bone weakness or osteoporosis. A broader treatment plan often includes osteoporosis evaluation, appropriate medical management, fall prevention, and coordination with your primary care physician, endocrinologist, or bone specialist.",
  },
  {
    question: "How soon might pain improve after kyphoplasty?",
    answer:
      "Pain improvement varies among patients. Some patients notice improvement within days or weeks; others experience more gradual improvement. Some patients experience partial or incomplete improvement. There is no guarantee of immediate or complete pain relief, and recovery depends on the fracture, bone quality, overall health, and other factors.",
  },
  {
    question: "What are the risks of kyphoplasty?",
    answer:
      "Risks, while uncommon, may include temporary soreness or discomfort at the procedure site, bleeding, infection, cement leakage into surrounding tissues, nerve irritation or neurologic injury, allergic reaction, worsening pain, or failure to improve. Patients with osteoporosis also remain at risk for future fractures. All risks should be discussed with Dr. Dardashti before any procedure.",
  },
  {
    question: "Are all compression fractures treated with kyphoplasty?",
    answer:
      "No. Kyphoplasty is not appropriate for all compression fractures. Many compression fractures improve with conservative care, activity modification, and time. Kyphoplasty is considered only when pain is significant, limiting function, conservative care has been insufficient, and imaging and clinical findings support the fracture as a likely pain source.",
  },
];

export default function KyphoplastyPage() {
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
              Kyphoplasty
              <br />
              <em className="not-italic text-[#888]">for Compression Fractures.</em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed">
              Kyphoplasty is a minimally invasive, image-guided procedure used for selected
              patients with painful vertebral compression fractures. It may be considered when pain
              is significant, limiting function, and conservative care has been insufficient.
            </p>
          </div>
          <div className="hidden md:block w-[360px] shrink-0 rounded-xl overflow-hidden bg-white">
            <Image
              src="/images/procedures/kyphoplasty.png"
              alt="Medical illustration showing a four-step kyphoplasty sequence for a vertebral compression fracture."
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

      {/* OVERVIEW */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is a Vertebral Compression Fracture?
            </h2>
            <p>
              Kyphoplasty is a minimally invasive, image-guided procedure used in selected patients
              with painful vertebral compression fractures. These fractures can occur when a vertebral
              body weakens and partially collapses. Common causes include osteoporosis, trauma in weakened
              bone, and in some cases tumor-related or pathologic fractures.
            </p>
            <p>
              The goal is to stabilize the painful fractured vertebra and, in some cases, partially
              restore vertebral body height. A careful evaluation is needed to determine whether the
              fracture is likely the source of pain and whether kyphoplasty is appropriate.
            </p>
            <p>
              A vertebral compression fracture occurs when one of the bones of the spine collapses or
              loses height. This can cause sudden back pain, pain with standing or walking, difficulty
              with movement, and reduced function. Compression fractures are often associated with
              osteoporosis, but not all compression fractures require a procedure.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN KYPHOPLASTY MAY BE CONSIDERED */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Candidacy</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              When Kyphoplasty May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Kyphoplasty may be considered when:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "A vertebral compression fracture appears to be a likely source of significant pain",
                "Pain is limiting function, mobility, standing, walking, or basic daily activities",
                "Imaging supports an acute or subacute fracture at a level that matches the patient's symptoms",
                "Conservative care has not provided adequate relief, or pain severity makes prolonged immobility risky",
                "The fracture pattern appears anatomically appropriate for the procedure",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Dr. Dardashti reviews your clinical history, imaging, and overall health to determine
              whether kyphoplasty may be appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN KYPHOPLASTY MAY NOT BE APPROPRIATE */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Limitations</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              When Kyphoplasty May Not Be Appropriate.
            </h2>
            <p>
              Kyphoplasty is not appropriate for every patient or every fracture. It may not be
              appropriate when pain is improving with conservative care, the fracture is old and no
              longer active, there is significant neurologic compromise, unstable burst fracture pattern,
              spinal infection, sepsis, uncorrected bleeding risk, or other anatomic concerns.
            </p>
            <p>
              Dr. Dardashti reviews the clinical history, neurologic symptoms, imaging, medications, and
              overall medical situation before considering whether kyphoplasty is reasonable.
            </p>
          </div>
        </div>
      </section>

      {/* HOW THE PROCEDURE IS PERFORMED */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Procedure</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How the Procedure Is Performed.
            </h2>
            <p>
              The procedure is performed using image guidance, usually fluoroscopy. The patient lies face down.
              The skin is cleaned and numbed. A small needle or cannula is guided into the fractured vertebra.
              A small balloon may be used to create a cavity and help restore some vertebral height. Medical
              bone cement is then placed into the vertebra to stabilize the fracture.
            </p>
            <p>
              During the procedure, you may feel pressure or mild sensations. After the procedure, temporary
              soreness at the site is common. The duration of the procedure and recovery depends on individual
              factors and the specific clinical situation.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Kyphoplasty */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/procedures/kyphoplasty.png"
            alt="Kyphoplasty procedure showing percutaneous needle placement in collapsed vertebral body, balloon inflation to restore vertebral height and kyphotic angle correction, and cement injection for stabilization"
            caption="Kyphoplasty Steps: A needle is advanced into the fractured vertebra. A balloon is inflated to restore height and correct kyphosis (forward curving). Bone cement is then injected to stabilize the restored vertebra and reduce pain."
          />
        </div>
      </section>

      {/* WHAT TO EXPECT AFTERWARD */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Recovery</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What to Expect Afterward.
            </h2>
            <p>
              Some patients notice improvement quickly, while others have more gradual or incomplete
              improvement. Temporary soreness at the procedure site can occur. Activity instructions depend
              on the patient's fracture, bone health, sedation, other medical conditions, and the treating
              physician's recommendations.
            </p>
            <p>
              Pain improvement varies widely. There is no guarantee of immediate or complete pain relief.
              Your physician will discuss what to expect and provide guidance on activity, medications, and
              follow-up care.
            </p>
          </div>
        </div>
      </section>

      {/* RISKS AND CONSIDERATIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>06</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Risks</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Risks and Considerations.
            </h2>
            <p>
              Risks are uncommon but may include temporary soreness, bleeding, infection, cement leakage,
              nerve irritation or neurologic injury, allergic reaction, worsening pain, failure to improve,
              or need for additional treatment. Patients with osteoporosis may also remain at risk for future
              fractures.
            </p>
            <p>
              All potential risks and how they apply to your specific situation should be discussed in detail
              with Dr. Dardashti before any procedure is performed.
            </p>
          </div>
        </div>
      </section>

      {/* BROADER TREATMENT PLAN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>07</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment Plan</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How This Fits Into a Broader Treatment Plan.
            </h2>
            <p>
              Kyphoplasty addresses pain from a selected painful vertebral compression fracture. It does not
              treat the underlying cause of bone weakness. A broader plan may include osteoporosis evaluation
              and treatment, fall-risk reduction, physical therapy or rehabilitation, medication review, and
              coordination with the patient's primary care physician, endocrinologist, oncologist, or spine
              specialist when appropriate.
            </p>
            <p>
              Dr. Dardashti works with your overall medical team to ensure that any intervention is part of
              a comprehensive, coordinated treatment approach.
            </p>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-[#999] uppercase tracking-widest mb-4">FAQ</p>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Frequently Asked Questions.
            </h2>
          </div>
          <div className="space-y-8 max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#e5e5e0] pb-8 last:border-0">
                <h3
                  className="text-lg font-bold text-[#0a0a0a] mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {faq.question}
                </h3>
                <p className="text-[#666] text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Important Information</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Important Limitations.
            </h2>
            <p>
              This content is for general informational purposes only and does not constitute medical advice,
              a diagnosis, or a guarantee of specific treatment outcomes. Every patient's situation is unique,
              and treatment recommendations are individualized based on clinical evaluation.
            </p>
            <p>
              Kyphoplasty is not appropriate for all patients or all compression fractures. Not all patients
              experience pain relief or improvement after kyphoplasty. Response varies, and some patients may
              experience partial benefit or no improvement.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from the San Fernando
              Valley, Santa Clarita Valley, and surrounding Los Angeles communities. A formal clinical evaluation
              is required to determine whether any treatment is appropriate.
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
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/conditions/persistent-pain-after-spine-surgery" className="text-[#c8a020] hover:underline tracking-wide">Persistent Pain After Spine Surgery →</Link></li>
              <li><Link href="/conditions/spine-related-pain" className="text-[#c8a020] hover:underline tracking-wide">Spine-Related Pain Evaluation →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">View all Procedures &amp; Treatment Options →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/procedures/kyphoplasty" />
    </>
  );
}
