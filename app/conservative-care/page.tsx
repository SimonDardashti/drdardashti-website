import type { Metadata } from "next";
import Link from "next/link";
import VirtualConsultationBanner from "@/components/VirtualConsultationBanner";

const PAGE_URL = "https://www.drdardashti.com/conservative-care";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Conservative Treatments for Chronic Pain | Simon Dardashti, MD" },
  description:
    "Evidence-based conservative care for chronic pain: physical therapy, exercise, mind-body therapies, and lifestyle approaches. Physician-authored patient education.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Conservative Treatments for Chronic Pain | Simon Dardashti, MD",
    description:
      "Evidence-based conservative care for chronic pain: physical therapy, exercise, mind-body therapies, and lifestyle approaches. Physician-authored patient education.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conservative Treatments for Chronic Pain | Simon Dardashti, MD",
    description:
      "Evidence-based conservative care for chronic pain: physical therapy, exercise, mind-body therapies, and lifestyle approaches. Physician-authored patient education.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Conservative Treatments for Chronic Pain | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Evidence-based conservative care for chronic pain: physical therapy, exercise, mind-body therapies, and lifestyle approaches.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conservative Care", item: PAGE_URL },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is conservative care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conservative care refers to non-surgical, non-injection approaches to managing pain. These include physical therapy, exercise, mind-body therapies, and lifestyle modifications. Conservative care is often the appropriate initial approach for many chronic pain conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Is conservative care always effective?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Response to conservative care varies among patients. Some patients experience significant improvement with conservative approaches alone. Others benefit from conservative care combined with additional interventions. A formal clinical evaluation is needed to determine appropriate treatment for any individual patient.",
      },
    },
    {
      "@type": "Question",
      name: "How long does conservative care take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline varies depending on the condition, severity, and individual factors. Physical therapy typically requires several weeks to months of consistent participation. Some patients notice improvement within days, while others require longer treatment periods. Consistency and proper technique are important.",
      },
    },
    {
      "@type": "Question",
      name: "Should I try conservative care before considering injections or surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conservative care is often an appropriate initial approach for many pain conditions. However, the appropriate sequence and timing of treatment depends on the specific diagnosis, symptom severity, and individual circumstances. A clinical evaluation can help determine the best approach for your situation.",
      },
    },
    {
      "@type": "Question",
      name: "Can conservative care prevent the need for surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conservative care may help some patients avoid surgery, while others eventually require surgical or interventional evaluation despite conservative efforts. The role of conservative care in preventing surgery depends on the specific condition and individual response to treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Are there conditions where conservative care alone is not appropriate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Some conditions require urgent evaluation and may not benefit from conservative care alone. A physician evaluation is needed to determine whether conservative care is appropriate and, if so, what additional interventions might be considered.",
      },
    },
    {
      "@type": "Question",
      name: "Is physical therapy always necessary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Physical therapy is beneficial for many pain conditions, but not all patients require formal physical therapy. Some patients benefit from home-based exercise programs. Others may benefit from a combination of approaches. A clinical evaluation and discussion with a physical therapist can help determine the best approach.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do conservative care on my own, or do I need professional guidance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both approaches can be helpful. Professional guidance from a physical therapist or physician ensures proper technique and helps identify exercises appropriate for your specific condition. However, some patients benefit from home-based programs with periodic professional check-ins.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if conservative care is not helping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If conservative care has been attempted consistently over an adequate period and symptoms persist, a physician evaluation can help determine whether additional interventions might be appropriate. Additional evaluation might identify conditions requiring different treatment approaches.",
      },
    },
  ],
};

export default function ConservativeCarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Conservative Care
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Conservative Treatments
            <br />
            <em className="not-italic text-[#888]">for Chronic Pain.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Physical therapy, exercise, mind-body therapies, and lifestyle approaches provide evidence-based options for managing chronic pain without surgery or injections.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* 01 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Why</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Why Conservative Care Matters.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Conservative care—non-surgical, non-injection approaches—is often an appropriate initial treatment strategy for many chronic pain conditions. Physical therapy, exercise, mind-body interventions, and lifestyle modifications have evidence supporting their role in managing pain and improving function.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Not all patients require injections or surgery. Many patients achieve meaningful improvement with conservative approaches. However, response varies among individuals, and some patients eventually benefit from additional interventions when conservative care alone is insufficient.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                The role of conservative care is determined by the specific diagnosis, clinical presentation, symptom severity, and individual response to treatment.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Physical</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Physical Therapy.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Physical therapy focuses on restoring function, improving mobility, and managing pain through targeted exercises, manual techniques, and functional training. A licensed physical therapist personalizes the approach based on your diagnosis, examination findings, and functional goals.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Effective physical therapy requires consistency and active participation over weeks to months. The timeline for improvement varies depending on the condition and individual response. Regular reassessment helps ensure the program remains appropriate and effective.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Aquatic</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Aquatic Physical Therapy.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Aquatic therapy uses water's buoyancy, resistance, and warmth to facilitate exercise and mobility training. The reduced weight-bearing environment can make movement easier for some patients while still providing resistance for strengthening. Aquatic therapy is often combined with land-based physical therapy.
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Exercise</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Specific Exercise Programs.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Targeted exercise programs address specific functional deficits and pain generators. Evidence supports specific exercise approaches for many pain conditions. Programs may target spinal stability, core strength, mobility, or functional movement patterns depending on the diagnosis.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Learn more about evidence-informed exercise approaches: <Link href="/mcgill-big-3-exercises" className="text-[#c8a020] hover:underline">McGill Big 3 Exercises for Low Back Pain</Link> and <Link href="/thoracic-foam-rolling" className="text-[#c8a020] hover:underline">Thoracic Foam Rolling for Upper Back Mobility</Link>.
              </p>
            </div>
          </div>

          {/* 05 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Modalities</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Therapeutic Modalities & Techniques.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                Additional therapies that may support conservative care include:
              </p>
              <ul className="space-y-3 max-w-2xl mb-4">
                {[
                  "Tai Chi — balance, flexibility, and mind-body awareness",
                  "Acupuncture — may help reduce pain perception for some patients",
                  "Chiropractic care — spinal manipulation and manual therapies",
                  "Meditation & Mindfulness — pain coping and stress management",
                  "Cognitive Behavioral Therapy (CBT) — addresses pain-related thoughts and behaviors",
                  "Biofeedback — trains body awareness and self-regulation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                The evidence base and effectiveness vary for different modalities. A physician can help determine which approaches align with your diagnosis and clinical needs.
              </p>
            </div>
          </div>

          {/* 06 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>06</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Combining</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Combining Conservative Approaches.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                The most effective approach often combines multiple conservative strategies. For example, a patient with low back pain might benefit from physical therapy, specific stabilization exercises, mindfulness practices, and activity modification working together.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Coordination between treatment providers ensures your overall pain management plan is coherent and effective.
              </p>
            </div>
          </div>

          {/* 07 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>07</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">When</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                When Conservative Care Alone May Not Be Enough.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                While many patients benefit significantly from conservative care, some conditions or clinical presentations may require additional evaluation or intervention. This might include diagnostic procedures, targeted injections, or, in selected cases, surgical intervention.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                The need for additional interventions depends on the specific diagnosis, symptom severity, duration of symptoms, and individual response to conservative treatment. A comprehensive clinical evaluation helps determine the appropriate treatment pathway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">FAQ</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Frequently Asked Questions.
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is conservative care?",
                  a: "Conservative care refers to non-surgical, non-injection approaches to managing pain, including physical therapy, exercise, mind-body therapies, and lifestyle modifications.",
                },
                {
                  q: "Is conservative care always effective?",
                  a: "Response varies among patients. Some experience significant improvement with conservative approaches alone. Others benefit from conservative care combined with additional interventions. Individual evaluation determines appropriate treatment.",
                },
                {
                  q: "How long does conservative care take to work?",
                  a: "Timelines vary based on condition, severity, and individual factors. Physical therapy typically requires weeks to months of consistent participation.",
                },
                {
                  q: "Should I try conservative care before procedures?",
                  a: "Conservative care is often appropriate initially for many conditions. The right sequence depends on diagnosis, severity, and individual circumstances.",
                },
                {
                  q: "Can conservative care prevent surgery?",
                  a: "Conservative care may help some patients avoid surgery. Others eventually require surgical evaluation despite conservative efforts.",
                },
                {
                  q: "Are there conditions requiring more than conservative care?",
                  a: "Yes. Some conditions require urgent evaluation and may not respond adequately to conservative approaches alone.",
                },
                {
                  q: "Is physical therapy always necessary?",
                  a: "Physical therapy benefits many patients, but not all require formal PT. Some benefit from home-based programs or other approaches.",
                },
                {
                  q: "Can I do conservative care independently?",
                  a: "Both independent and professionally-guided approaches can be helpful. Professional guidance ensures proper technique and appropriate exercises for your condition.",
                },
                {
                  q: "What if conservative care isn't helping?",
                  a: "If conservative care has been attempted consistently over adequate time without sufficient improvement, physician evaluation can determine whether additional interventions might be appropriate.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-[#0a0a0a] mb-2">{item.q}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Related</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Related Resources.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/mcgill-big-3-exercises" className="text-[#c8a020] hover:underline tracking-wide">McGill Big 3 Exercises for Low Back Pain →</Link></li>
              <li><Link href="/thoracic-foam-rolling" className="text-[#c8a020] hover:underline tracking-wide">Thoracic Foam Rolling for Neck & Shoulder Pain →</Link></li>
              <li><Link href="/articles/aquatic-therapy-arthritis" className="text-[#c8a020] hover:underline tracking-wide">Aquatic Therapy for Pain Management →</Link></li>
              <li><Link href="/pain-without-imaging" className="text-[#c8a020] hover:underline tracking-wide">Pain Without Imaging Findings →</Link></li>
              <li><Link href="/treatment-options" className="text-[#c8a020] hover:underline tracking-wide">Treatment Decision Framework →</Link></li>
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/conditions/neck-pain" className="text-[#c8a020] hover:underline tracking-wide">Neck Pain Evaluation →</Link></li>
              <li><Link href="/virtual-consultations" className="text-[#c8a020] hover:underline tracking-wide">Schedule Virtual Consultation →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <VirtualConsultationBanner />
    </>
  );
}
