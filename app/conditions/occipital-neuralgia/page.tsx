import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/occipital-neuralgia";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Occipital Neuralgia Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates occipital neuralgia, which causes sharp, shooting pain in the back of the head and scalp due to irritation of the occipital nerve.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Occipital Neuralgia Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates occipital neuralgia, which causes sharp, shooting pain in the back of the head and scalp due to irritation of the occipital nerve.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Occipital Neuralgia Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates occipital neuralgia, which causes sharp, shooting pain in the back of the head and scalp due to irritation of the occipital nerve.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Occipital Neuralgia Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates occipital neuralgia, which causes sharp, shooting pain in the back of the head and scalp due to irritation of the occipital nerve.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Occipital Neuralgia" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Occipital Neuralgia", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Occipital Nerve Involvement",
    body: "Occipital neuralgia results from irritation or compression of the greater or lesser occipital nerves, which supply sensation to the back of the head and scalp.",
  },
  {
    heading: "Sharp, Electric Pain",
    body: "Characteristic symptoms include sharp, shooting, or electric pain in the back of the head, often with scalp tenderness and sensitivity. Pain may be one-sided or bilateral.",
  },
  {
    heading: "Distinct from Migraine",
    body: "Occipital neuralgia differs from migraines and tension headaches. Accurate diagnosis requires careful clinical evaluation of symptom character, location, and associated features.",
  },
];

const faqs = [
  {
    q: "What is the difference between occipital neuralgia and migraine?",
    a: "Occipital neuralgia is characterized by sharp, electric, shooting pain that follows the distribution of the occipital nerves (back of the head and scalp), often with a tender point where the nerve emerges. Migraines typically present with throbbing pain, light sensitivity, nausea, and other associated symptoms. Though occipital pain can sometimes accompany migraines, they are distinct conditions requiring different evaluation approaches. A clinical evaluation can help clarify which condition or combination of conditions is present.",
  },
  {
    q: "What is the greater occipital nerve?",
    a: "The greater occipital nerve originates from nerve roots in the upper cervical spine and travels upward through the neck muscles to supply sensation to much of the back of the scalp. Irritation or compression of this nerve at various points along its course can produce occipital neuralgia symptoms.",
  },
  {
    q: "What causes occipital neuralgia?",
    a: "Occipital neuralgia can result from irritation or compression of the occipital nerves. Causes may include tight muscles at the base of the skull, trauma or whiplash injury, cervical spine pathology, nerve compression from other structures, repetitive neck strain, or poor posture. In some cases, no clear precipitating cause is identified.",
  },
  {
    q: "How is occipital neuralgia diagnosed?",
    a: "Diagnosis is primarily clinical, based on the patient's description of symptoms, their location and character, physical examination findings (including palpation for tenderness along the nerve pathway), and reproduction of symptoms with specific maneuvers. Imaging may be considered in some cases. Occipital nerve blocks can be both diagnostic and therapeutic — a positive response to a nerve block can support the diagnosis.",
  },
  {
    q: "What treatment options may be considered?",
    a: "Treatment options include physical therapy and neck stretching to address muscular tension, medications such as neuropathic pain agents, and when appropriate, occipital nerve blocks with local anesthetic and corticosteroid. For selected patients with refractory pain, radiofrequency ablation of the occipital nerve or other neuromodulation approaches may be considered. Treatment is individualized based on the clinical picture and patient goals.",
  },
  {
    q: "What is an occipital nerve block?",
    a: "An occipital nerve block is an injection of local anesthetic and often a corticosteroid medication around the greater or lesser occipital nerve. The procedure is performed under imaging guidance to increase accuracy. Nerve blocks may reduce pain temporarily and help confirm that the occipital nerve is the source of symptoms. Response varies among patients, and effects are not permanent.",
  },
  {
    q: "How quickly do symptoms improve after treatment?",
    a: "Response to treatment varies. Some patients experience relief quickly, while others improve more gradually. Physical therapy and medication management may take weeks to show benefit. Nerve blocks may provide relief within hours to days, but effects are temporary. Long-term management depends on the underlying cause and may require a combination of approaches.",
  },
  {
    q: "Is occipital neuralgia a serious condition?",
    a: "Occipital neuralgia is not life-threatening, but it can significantly impact quality of life due to persistent pain and scalp tenderness. The condition itself does not cause permanent nerve damage, but chronic pain can affect sleep, mood, and daily functioning. Appropriate evaluation and management can help reduce pain and improve quality of life.",
  },
];

export default function OccipitalNeuralgiaPage() {
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
            Occipital Neuralgia
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Occipital neuralgia is characterized by sharp, shooting pain in the back of the head
            and scalp, resulting from irritation of the occipital nerves. Dr. Dardashti evaluates
            occipital neuralgia in the context of symptom character, physical examination findings,
            and response to diagnostic interventions.
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
              What Is Occipital Neuralgia?
            </h2>
            <p>
              Occipital neuralgia is a condition characterized by sharp, shooting, or electric pain
              in the distribution of the occipital nerves, which supply sensation to the back of the
              head and scalp. The pain typically originates at the base of the skull and radiates upward
              toward the crown or side of the head. Symptoms may be unilateral (one-sided) or bilateral
              (affecting both sides).
            </p>
            <p>
              The greater and lesser occipital nerves originate from the upper cervical spine (specifically
              from nerve roots C2 and C3). These nerves travel upward through the neck muscles and fascia
              to supply sensation to the scalp. When these nerves are irritated or compressed, occipital
              neuralgia can develop.
            </p>
            <p>
              Occipital neuralgia is distinct from migraines and tension headaches, though pain in the
              occipital region can sometimes accompany other headache types. Accurate diagnosis requires
              careful evaluation of the characteristic symptoms and pain pattern.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Occipital Neuralgia Anatomy */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            role="anatomy"
            src="/images/conditions/headache/occipital-neuralgia.png"
            alt="Occipital neuralgia showing anatomy of greater and lesser occipital nerves originating from C2 and C3 nerve roots, traveling through neck muscles, and supplying sensation to the back of the head and scalp"
            caption="Occipital Nerve Anatomy: The greater and lesser occipital nerves originate from the upper cervical spine (C2 and C3 nerve roots). These nerves travel upward through the neck, passing under or through muscle layers (particularly the trapezius muscle), and then supply sensation to the back of the head and scalp. When these nerves are compressed or irritated — whether from muscle tension, cervical spine pathology, or trauma — occipital neuralgia can result. This anatomical path is key to understanding potential sites of nerve irritation."
            priority={true}
          />
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Symptoms</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Symptoms of Occipital Neuralgia.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Typical symptoms include:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Sharp, shooting, or electric pain in the back of the head",
                "Pain that radiates from the base of the skull upward toward the crown",
                "One-sided or bilateral pain depending on nerve involvement",
                "Scalp tenderness or sensitivity to touch, combing, or pressure",
                "Pain that may worsen with neck movement or certain positions",
                "Intermittent or continuous pain that varies in intensity",
                "Possible numbness or altered sensation in affected areas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Symptoms may be constant or episodic and vary significantly among patients. Some individuals
              experience brief, intense bursts of pain, while others report more persistent discomfort.
            </p>
          </div>
        </div>
      </section>

      {/* CAUSES AND TRIGGERS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Causes</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Common Causes and Contributing Factors.
            </h2>
            <p>
              Occipital neuralgia can result from compression or irritation of the occipital nerves at
              various points along their course. Common causes and contributing factors include:
            </p>
            <ul className="space-y-2 max-w-2xl list-none">
              {[
                "Tension in the neck and suboccipital muscles",
                "Cervical spine pathology, such as disc herniation or arthritis",
                "Trauma or whiplash injury to the neck",
                "Repetitive neck strain from poor posture or prolonged computer use",
                "Tight neck muscles that compress the nerve pathway",
                "Compression from surrounding anatomical structures",
                "Prior neck injury or surgery",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              In many cases, no clear precipitating event or identifiable cause is found, and occipital
              neuralgia is diagnosed based on characteristic symptoms and clinical findings.
            </p>
          </div>
        </div>
      </section>

      {/* DIAGNOSIS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Diagnosis</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How Occipital Neuralgia Is Diagnosed.
            </h2>
            <p>
              Diagnosis begins with a detailed history of the pain — its character, location, duration,
              and pattern — along with any aggravating or relieving factors. The physical examination includes
              palpation along the course of the occipital nerves to identify tender points and attempts to
              reproduce symptoms through specific maneuvers.
            </p>
            <p>
              Neurologic examination may assess sensation and motor function in the affected area. Imaging such
              as cervical MRI or CT may be ordered if there is clinical concern for cervical spine pathology or
              other structural issues.
            </p>
            <p>
              Occipital nerve blocks serve both diagnostic and therapeutic purposes. When an occipital nerve
              block with local anesthetic provides meaningful relief, this finding supports the diagnosis of
              occipital neuralgia and can guide further management decisions.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Treatment Options That May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Treatment is individualized based on symptom severity, duration, and response to initial approaches:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Physical therapy, including neck stretches and postural correction to address muscular tension",
                "Medications such as neuropathic pain agents, muscle relaxants, or anti-inflammatory medications when clinically appropriate",
                "Occipital nerve blocks with local anesthetic and corticosteroid to reduce pain and confirm diagnosis",
                "Heat therapy and lifestyle modifications to avoid positions or activities that aggravate symptoms",
                "For selected patients with refractory pain unresponsive to conservative measures, radiofrequency ablation or other neuromodulation approaches may be considered",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Not every patient requires procedural intervention. Treatment recommendations are based on
              the clinical evaluation, symptom severity, and the individual patient's goals and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN TO SEEK EVALUATION */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>06</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluation</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              When to Seek Medical Attention.
            </h2>
            <p>
              An evaluation can be helpful if you experience:
            </p>
            <ul className="space-y-2 max-w-2xl list-none mt-4">
              {[
                "Persistent sharp or shooting pain in the back of the head or scalp",
                "Pain that affects your quality of life, sleep, or daily functioning",
                "Scalp tenderness that limits your ability to brush hair or wear certain items",
                "Pain that has not improved with initial conservative treatment",
                "New or changing head pain patterns that concern you",
                "Difficulty distinguishing between occipital neuralgia and other headache types",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              A clinical evaluation can help determine whether occipital neuralgia is the underlying cause
              and guide appropriate treatment planning.
            </p>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-[#999] uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Frequently Asked Questions.
            </h2>
          </div>
          <div className="space-y-8 max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#e5e5e0] pb-8 last:border-0">
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {faq.q}
                </h3>
                <p className="text-[#666] text-base leading-relaxed">{faq.a}</p>
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
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Important Limitations.
            </h2>
            <p>
              Occipital neuralgia diagnosis and treatment is complex. Response to treatment varies among
              patients, and not all cases are easily resolved. Some patients experience sustained relief with
              conservative treatment, while others may require procedural intervention. A formal clinical
              evaluation is required to determine appropriate treatment for any individual patient.
            </p>
            <p>
              This page is for general informational purposes only and does not constitute medical advice or
              create a physician-patient relationship.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from the San Fernando
              Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
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
              <li><Link href="/conditions/neck-pain" className="text-[#c8a020] hover:underline tracking-wide">Neck Pain Evaluation →</Link></li>
              <li><Link href="/conditions/cervical-radiculopathy" className="text-[#c8a020] hover:underline tracking-wide">Cervical Radiculopathy Evaluation →</Link></li>
              <li><Link href="/procedures/radiofrequency-ablation" className="text-[#c8a020] hover:underline tracking-wide">Radiofrequency Ablation →</Link></li>
              <li><Link href="/procedures/peripheral-nerve-blocks" className="text-[#c8a020] hover:underline tracking-wide">Peripheral Nerve Blocks →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/occipital-neuralgia" />
    </>
  );
}
