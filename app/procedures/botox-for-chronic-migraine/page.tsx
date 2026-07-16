import type { Metadata } from "next";
import Link from "next/link";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/procedures/botox-for-chronic-migraine";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Botox for Chronic Migraine Prevention | Simon Dardashti, MD" },
  description:
    "Learn how medical Botox may help prevent chronic migraine, who may be considered, how treatment differs from cosmetic Botox, expected treatment cycles, limitations, and potential risks.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Botox for Chronic Migraine Prevention | Simon Dardashti, MD",
    description:
      "Learn how medical Botox may help prevent chronic migraine, who may be considered, how treatment differs from cosmetic Botox, expected treatment cycles, limitations, and potential risks.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Botox for Chronic Migraine Prevention | Simon Dardashti, MD",
    description:
      "Learn how medical Botox may help prevent chronic migraine, who may be considered, how treatment differs from cosmetic Botox, expected treatment cycles, limitations, and potential risks.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Botox for Chronic Migraine Prevention | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Learn how medical Botox may help prevent chronic migraine, who may be considered, how treatment differs from cosmetic Botox, expected treatment cycles, limitations, and potential risks.",
  image: "https://www.drdardashti.com/headshot.webp",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Botox (onabotulinumtoxinA) for Chronic Migraine Prevention",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Botox for Chronic Migraine Prevention", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "A Preventive Treatment",
    body: "Botox (onabotulinumtoxinA) for chronic migraine is a preventive treatment given on a repeating schedule — it is not used to treat a migraine attack that is already underway.",
  },
  {
    heading: "For Chronic Migraine Specifically",
    body: "This treatment is intended for adults with chronic migraine — generally 15 or more headache days per month, with migraine features on at least 8 of those days, for more than 3 months. It is not the same indication as episodic migraine.",
  },
  {
    heading: "Different From Cosmetic Botox",
    body: "Medical Botox for migraine uses a different dosing pattern and different injection sites than cosmetic Botox, and is administered for a distinct medical purpose.",
  },
];

const faqs = [
  {
    q: "Is migraine Botox the same as cosmetic Botox?",
    a: "It is the same medication (onabotulinumtoxinA), but the purpose, dosing pattern, and injection sites used for chronic migraine prevention are different from those used for cosmetic purposes. Medical Botox for migraine follows a specific, standardized treatment protocol distinct from cosmetic treatment.",
  },
  {
    q: "Does Botox stop an active migraine?",
    a: "No. Botox for chronic migraine is a preventive treatment given on a recurring schedule to potentially reduce headache frequency and burden over time. It is not an acute rescue treatment for a migraine that is already underway, and it does not replace acute migraine medications.",
  },
  {
    q: "How often is treatment repeated?",
    a: "When clinically appropriate, treatment is commonly repeated at approximately 12-week intervals. The specific schedule is individualized based on clinical response.",
  },
  {
    q: "How soon might benefit be noticed?",
    a: "Response varies. Some patients notice improvement after the first treatment cycle, while others may require more than one cycle before benefit can be meaningfully assessed.",
  },
  {
    q: "How many treatment cycles may be needed?",
    a: "This varies by patient. Because response to the first cycle does not always predict long-term benefit, multiple cycles are often needed before a patient and physician can fully evaluate whether the treatment is helpful.",
  },
  {
    q: "Can Botox eliminate migraines completely?",
    a: "No. Botox for chronic migraine does not cure migraine, and complete elimination of migraine is not an expected outcome. The general aim is to reduce headache burden — such as headache-day frequency, severity, duration, or functional disruption — for appropriately selected patients. Results vary, and benefit is not permanent.",
  },
  {
    q: "Can it be combined with other migraine treatments?",
    a: "Depending on the individual clinical picture, Botox for chronic migraine may be used alongside other preventive strategies or acute migraine treatments. Whether combination therapy is appropriate depends on the patient's overall treatment plan and should be discussed with a physician.",
  },
  {
    q: "Will insurance cover it?",
    a: "Coverage depends on individual insurance authorization criteria, which vary by plan and may require documentation of chronic migraine diagnosis and prior treatment history. Insurance approval is not guaranteed, and specific requirements should be confirmed with your insurer.",
  },
  {
    q: "What should I disclose before treatment?",
    a: "Patients should disclose headache history and frequency, prior preventive treatments and their outcomes, current medications (including any that may affect neuromuscular transmission), pregnancy or breastfeeding status, any neuromuscular disorders, any infection near a proposed injection site, and any prior botulinum-toxin treatment.",
  },
  {
    q: "What symptoms after treatment require urgent attention?",
    a: "Difficulty breathing, swallowing, or speaking after treatment can, in rare cases, reflect spread of toxin effect beyond the injection area and requires prompt medical attention. If you experience these symptoms, seek urgent medical care.",
  },
];

export default function BotoxForChronicMigrainePage() {
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
            Botox for Chronic
            <br />
            <em className="not-italic text-[#888]">Migraine Prevention.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Botox — the brand name for onabotulinumtoxinA — is an FDA-approved preventive
            treatment for chronic migraine in appropriately selected adults. Dr. Dardashti
            evaluates candidacy based on headache history, prior treatment, and individual
            clinical presentation.
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
                <h2 className="font-bold text-[#0a0a0a] text-sm mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {item.heading}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — WHAT IS BOTOX FOR CHRONIC MIGRAINE */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Botox for Chronic Migraine?
            </h2>
            <p>
              Botox is the brand name for onabotulinumtoxinA, a purified protein derived from
              botulinum toxin. When used for chronic migraine prevention, it is administered
              according to an FDA-approved, standardized treatment protocol developed
              specifically for this condition.
            </p>
            <p>
              Botox for chronic migraine is a <strong>preventive</strong> treatment — it is given
              on a recurring schedule with the goal of reducing headache frequency and burden
              over time. It is not an acute rescue treatment, and it will not stop a migraine
              that is already in progress.
            </p>
            <p>
              This treatment is intended only for patients whose headache pattern meets the
              clinical definition of chronic migraine, following individualized evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — WHAT QUALIFIES AS CHRONIC MIGRAINE */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Definition</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Qualifies as Chronic Migraine?
            </h2>
            <p>
              Chronic migraine is generally defined as headache occurring on 15 or more days
              per month, with migraine features present on at least 8 of those days, for more
              than 3 months, in the absence of medication overuse or another underlying cause.
            </p>
            <p>
              This is a distinct diagnosis from episodic migraine, which involves fewer
              headache days per month. Botox for chronic migraine is approved for the chronic
              form specifically — not every patient with frequent headaches has chronic
              migraine, and not every headache disorder is migraine. Establishing an accurate
              diagnosis is an important first step, and may involve ruling out other headache
              conditions such as{" "}
              <Link href="/conditions/cervicogenic-headache" className="text-[#c8a020] hover:underline">
                cervicogenic headache
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — MEDICAL VS COSMETIC */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Medical vs. Cosmetic</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How Medical Botox Differs From Cosmetic Botox.
            </h2>
            <p>
              Although the medication is the same, Botox for chronic migraine differs from
              cosmetic Botox in purpose, dosing pattern, and treatment sites. Medical
              treatment for chronic migraine follows a standardized protocol targeting
              specific head and neck muscle regions associated with migraine, at doses
              established through clinical research for this indication.
            </p>
            <p>
              This page describes medical treatment for chronic migraine prevention only.
              It does not describe or offer cosmetic Botox services.
            </p>
          </div>
        </div>
      </section>

      {/* 04 — WHO MAY BE CONSIDERED */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Candidacy</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Who May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Candidacy requires individualized evaluation. Factors that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Headache frequency and duration, and whether the pattern fits chronic migraine rather than another headache disorder",
                "A headache diary or reliable headache history",
                "Prior preventive treatments tried and how the patient responded",
                "Acute-medication use, and the possibility of medication-overuse headache",
                "Pregnancy or breastfeeding status",
                "Any neuromuscular disorders",
                "Infection near a proposed injection site",
                "Prior botulinum-toxin exposure",
                "Current medications, including any that may affect neuromuscular transmission",
                "Individual insurance authorization criteria, which vary by plan",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Insurance coverage criteria vary by insurer and are not guaranteed. A formal
              clinical evaluation is required to determine candidacy for any individual patient.
            </p>
          </div>
        </div>
      </section>

      {/* 05 — HOW TREATMENT WORKS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Mechanism</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How the Treatment Works.
            </h2>
            <p>
              OnabotulinumtoxinA is thought to reduce chronic migraine symptoms by blocking
              the release of certain neurotransmitters involved in pain signaling, though the
              precise mechanism in migraine prevention is not completely understood. Effects
              build over the treatment cycle and are temporary, which is why treatment is
              repeated at intervals when clinically appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* 06 — WHAT THE PROCEDURE INVOLVES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>06</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Procedure</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What the Procedure Involves.
            </h2>
            <p>
              Treatment is generally performed in an outpatient setting. Small injections are
              administered across standardized regions of the head and neck. The labeled
              treatment pattern commonly used for chronic migraine involves 155 units divided
              among 31 injection sites across these regions.
            </p>
            <p>
              Patients may feel brief pinching or pressure at each injection site. The visit
              itself is typically brief, and most patients resume normal activities the same day.
            </p>
            <p>
              When clinically appropriate, treatment is commonly repeated at approximately
              12-week intervals.
            </p>
          </div>
        </div>
      </section>

      {/* 07 — EXPECTED TIMELINE AND BENEFITS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>07</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Timeline</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Expected Timeline and Potential Benefits.
            </h2>
            <p>
              Response to treatment varies among patients. Some notice improvement after the
              first treatment cycle, while others may require more than one cycle before
              benefit can be meaningfully assessed. The general aim of treatment is to reduce
              headache burden — such as headache-day frequency, severity, duration, or
              functional disruption — for appropriately selected patients.
            </p>
            <p>
              Complete elimination of migraine is not an expected outcome, and benefit is not
              permanent. Ongoing treatment cycles are commonly needed to maintain any benefit
              achieved.
            </p>
          </div>
        </div>
      </section>

      {/* 08 — LIMITATIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>08</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Limitations</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Limitations and Reasons It May Not Be Appropriate.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              This treatment is not appropriate for every patient with frequent headaches. It may
              not be recommended when:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "The headache pattern does not meet the definition of chronic migraine",
                "Another headache or pain condition better explains the symptoms",
                "A patient has an active infection near proposed injection sites",
                "A patient has certain neuromuscular disorders",
                "Individual medical history or current medications raise safety concerns",
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

      {/* 09 — RISKS AND SIDE EFFECTS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>09</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Risks</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Risks and Side Effects.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              As with any injection-based treatment, potential risks and side effects may include:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Injection-site discomfort",
                "Neck pain or stiffness",
                "Headache after treatment",
                "Temporary muscle weakness",
                "Eyelid or eyebrow drooping",
                "Facial asymmetry",
                "Flu-like symptoms",
                "Allergic reaction",
                "Spread of toxin effect beyond the injection area",
                "Lack of meaningful benefit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              In rare, serious cases, effects can spread beyond the injection area and cause
              difficulty swallowing, speaking, or breathing. These symptoms require urgent
              medical attention and should not be monitored at home.
            </p>
          </div>
        </div>
      </section>

      {/* 10 — ALTERNATIVES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>10</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Alternatives</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Alternatives and Complementary Preventive Strategies.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Botox is one of several options for chronic migraine prevention, and is not
              always the preferred first approach. Other strategies that may be considered,
              alone or in combination, include:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Lifestyle and trigger management",
                "Sleep regularity",
                "Hydration and regular exercise",
                "Oral preventive medications",
                "CGRP-targeting preventive treatments",
                "Acute migraine medications for individual attacks",
                "Behavioral approaches",
                "Physical therapy, when cervical or musculoskeletal contributors are relevant",
                "Occipital nerve blocks, in selected circumstances",
                "Neurology or headache-specialist consultation when appropriate",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              These approaches are distinct treatments, not equivalents of Botox for migraine
              prevention. The most appropriate combination depends on the individual patient's
              diagnosis and clinical presentation.
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

      {/* LIMITATIONS / DISCLAIMER */}
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
              Botox for chronic migraine does not cure migraine, and response varies among
              patients. It is not guaranteed to provide relief, and benefit — when present —
              is temporary. This treatment is intended for chronic migraine specifically, not
              episodic migraine, and is not an acute treatment for a migraine attack in progress.
            </p>
            <p>
              A formal clinical evaluation is required to determine whether this treatment is
              an appropriate option for any individual patient. This page is for general
              informational purposes only and does not constitute medical advice, and viewing
              this page does not create a physician-patient relationship.
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
              <li><Link href="/conditions/cervicogenic-headache" className="text-[#c8a020] hover:underline tracking-wide">Cervicogenic Headache Evaluation →</Link></li>
              <li><Link href="/conditions/occipital-neuralgia" className="text-[#c8a020] hover:underline tracking-wide">Occipital Neuralgia Evaluation →</Link></li>
              <li><Link href="/procedures/occipital-nerve-blocks" className="text-[#c8a020] hover:underline tracking-wide">Occipital Nerve Blocks →</Link></li>
              <li><Link href="/procedures/trigger-point-injections" className="text-[#c8a020] hover:underline tracking-wide">Trigger Point Injections →</Link></li>
              <li><Link href="/treatment-options" className="text-[#c8a020] hover:underline tracking-wide">Conservative Care vs Injections vs Surgery →</Link></li>
              <li><Link href="/what-to-expect-pain-consultation" className="text-[#c8a020] hover:underline tracking-wide">What to Expect During a Pain Consultation →</Link></li>
              <li><Link href="/virtual-consultations" className="text-[#c8a020] hover:underline tracking-wide">Virtual Consultations →</Link></li>
              <li><Link href="/patient-education" className="text-[#c8a020] hover:underline tracking-wide">Patient Education Resources →</Link></li>
              <li><Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">View all Procedures &amp; Treatment Options →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/procedures/botox-for-chronic-migraine" />
    </>
  );
}
