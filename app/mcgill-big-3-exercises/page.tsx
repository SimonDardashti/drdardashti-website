import type { Metadata } from "next";
import Link from "next/link";
import VirtualConsultationBanner from "@/components/VirtualConsultationBanner";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/mcgill-big-3-exercises";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "McGill Big 3 Exercises for Low Back Pain | Simon Dardashti, MD" },
  description:
    "Evidence-based McGill Big 3 exercises: curl-ups, side planks, and bird dogs for spinal stability. Who benefits, proper technique, common mistakes, and contraindications.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "McGill Big 3 Exercises for Low Back Pain | Simon Dardashti, MD",
    description:
      "Evidence-based McGill Big 3 exercises: curl-ups, side planks, and bird dogs for spinal stability. Who benefits, proper technique, common mistakes, and contraindications.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "McGill Big 3 Exercises for Low Back Pain | Simon Dardashti, MD",
    description:
      "Evidence-based McGill Big 3 exercises: curl-ups, side planks, and bird dogs for spinal stability. Who benefits, proper technique, common mistakes, and contraindications.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "McGill Big 3 Exercises for Low Back Pain | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Evidence-based McGill Big 3 exercises: curl-ups, side planks, and bird dogs for spinal stability. Who benefits, proper technique, common mistakes, and contraindications.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "McGill Big 3 Exercises", item: PAGE_URL },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who was Stuart McGill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stuart McGill is a biomechanist and researcher who spent decades studying spinal mechanics and the relationships between exercise, spine loading, and pain. His research emphasized the importance of spinal stability and motor control for managing back pain.",
      },
    },
    {
      "@type": "Question",
      name: "Why do these three exercises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "McGill advocated for a modest set of exercises targeting the key muscles involved in spinal stability: the transverse abdominis, multifidus, and quadratus lumborum. The Big 3 were designed to be effective without excessive spinal loading.",
      },
    },
    {
      "@type": "Question",
      name: "Are McGill exercises a cure for back pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. McGill exercises are one component of back pain management. They may reduce symptoms and improve function for some patients, but results vary. Not all patients benefit from these exercises alone, and they must be performed correctly.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do these exercises on my own?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While some patients learn from videos or written instructions, proper instruction from a physical therapist ensures correct form, appropriate progression, and identification of exercises unsuitable for your specific condition.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I do these exercises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical recommendations are daily or several times per week. Your physical therapist will determine the appropriate frequency and progression based on your clinical response.",
      },
    },
    {
      "@type": "Question",
      name: "When should I stop doing these exercises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stop if exercises cause sharp pain, radicular symptoms, or worsening function. Mild discomfort during proper form is different from pain that indicates you should stop. A physical therapist can help distinguish between these.",
      },
    },
    {
      "@type": "Question",
      name: "Who should avoid McGill exercises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Patients with certain conditions—such as acute severe radiculopathy, spinal stenosis with significant neurological symptoms, or recent spinal surgery—may not be appropriate candidates. A physician or physical therapist should screen for contraindications.",
      },
    },
    {
      "@type": "Question",
      name: "How does a physical therapist personalize these exercises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A physical therapist modifies exercise intensity, range of motion, frequency, and progression based on your diagnosis, pain response, functional goals, and underlying conditions. They may also adjust or eliminate exercises if contraindicated.",
      },
    },
    {
      "@type": "Question",
      name: "How long before I notice improvement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timeline varies. Some patients notice changes within weeks of consistent practice. Others require months of regular exercise before meaningful improvement. Consistency and proper technique matter.",
      },
    },
  ],
};

export default function McGillBig3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Exercise & Stability
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            McGill Big 3
            <br />
            <em className="not-italic text-[#888]">Exercises.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Evidence-based exercise approach for spinal stability: curl-ups, side planks, and bird dogs. Who benefits, proper technique, and common mistakes.
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
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Who</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Who Was Stuart McGill?
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Stuart McGill is a biomechanist and professor emeritus who spent decades researching spinal mechanics, spine loading during movement, and the relationship between exercise, motor control, and back pain. His work emphasized understanding how the spine functions and how to load it appropriately during exercise.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                McGill advocated for specific, evidence-informed exercise approaches rather than generalized core strengthening. His research identified key principles for safe spinal exercise.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Why</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Why Spinal Stability Matters.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Spinal stability refers to the coordinated action of muscles surrounding the spine—particularly the deep core stabilizers—working to support and control spinal movement. Adequate stability helps manage forces and loads placed on the spine during daily activities.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Poor spinal stability or motor control can contribute to pain or dysfunction. McGill's Big 3 exercises target key muscles involved in stability: the transverse abdominis, multifidus, and quadratus lumborum.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                These exercises were designed to build stability without excessive spinal compression or bending forces.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">The Three</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                The Three Exercises.
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">Curl-up</h3>
                <p className="text-[#666] text-base leading-relaxed mb-3 max-w-2xl">
                  The curl-up targets the rectus abdominis without excessive spinal flexion. Performed by supporting the head with hands and gently raising the shoulders slightly while maintaining a neutral lower spine. The movement is modest and controlled.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">Side Plank</h3>
                <p className="text-[#666] text-base leading-relaxed mb-3 max-w-2xl">
                  The side plank targets the quadratus lumborum and lateral stabilizers. Performed by supporting body weight on the forearm and feet (or knees) in a straight line position. The exercise builds lateral stability without spinal movement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">Bird Dog</h3>
                <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                  The bird dog targets the multifidus and promotes motor control. Performed in quadruped position (hands and knees) by extending opposite arm and leg while maintaining a neutral spine. The exercise emphasizes coordination and control rather than strength.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE: McGill Big 3 Exercises */}
          <div className="flex justify-center">
            <MedicalFigure
              variant="default"
              role="reference"
              src="/images/conditions/mcgill-big-3-exercises.png"
              alt="Educational illustration showing the McGill Big 3 exercises: modified curl-up, side plank, and bird dog with neutral spine positioning."
            />
          </div>

          {/* 04 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Technique</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Proper Form Matters.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                Correct technique is essential. Improper form reduces exercise effectiveness and increases risk of symptom provocation. Key principles include:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Maintaining a neutral spine position (avoid excessive flexion or extension)",
                  "Controlled movement rather than speed or momentum",
                  "Breathing continuously (avoid holding breath)",
                  "Starting with modest intensity and progressing gradually",
                  "Stopping if exercises provoke sharp pain or radicular symptoms",
                  "Consistency—regular practice matters more than intensity",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 05 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Mistakes</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Common Mistakes.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                Common errors that reduce effectiveness or increase risk:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Excessive spinal flexion or extension—spine should remain neutral",
                  "Rapid or bouncing movements—should be slow and controlled",
                  "Holding breath—continuous breathing is important",
                  "Excessive intensity progression—slow, consistent progress works better",
                  "Poor alignment (sagging or hiking hips in planks)—alignment matters",
                  "Continuing despite pain—sharp pain or radicular symptoms indicate stopping",
                  "Neglecting warm-up or context—exercises should fit within overall activity",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 06 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>06</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Considerations</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Contraindications & Cautions.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                McGill exercises are not appropriate for all patients. Conditions where caution is warranted include:
              </p>
              <ul className="space-y-3 max-w-2xl mb-4">
                {[
                  "Acute severe radiculopathy with neurological signs",
                  "Spinal stenosis with significant neurological symptoms",
                  "Recent spinal surgery (consult surgeon regarding timing)",
                  "Significant osteoporosis (compression fracture risk)",
                  "Cauda equina syndrome symptoms",
                  "Uncontrolled inflammation or infection",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                A physical therapist or physician should screen for these conditions before starting McGill exercises.
              </p>
            </div>
          </div>

          {/* 07 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>07</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Personalization</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                How Physical Therapists Personalize These Exercises.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                A physical therapist tailors McGill exercises based on your individual presentation by:
              </p>
              <ul className="space-y-3 max-w-2xl mb-4">
                {[
                  "Modifying starting position (knee bent vs straight, reduced range)",
                  "Adjusting repetitions and sets based on your response",
                  "Progressing intensity gradually as symptoms improve",
                  "Eliminating or modifying exercises if they provoke symptoms",
                  "Adding complementary exercises addressing your specific deficits",
                  "Teaching proper form and correcting technique errors",
                  "Monitoring for signs that exercise should be reduced or stopped",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Professional guidance helps ensure exercises remain safe and beneficial for your specific condition.
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
                  q: "Are these exercises a cure for back pain?",
                  a: "No. McGill exercises are one component of back pain management. They may reduce symptoms and improve function for some patients, but results vary and they must be performed correctly.",
                },
                {
                  q: "Can I do these exercises on my own?",
                  a: "While some learn from videos, professional instruction from a physical therapist ensures correct form, appropriate progression, and identification of unsuitable exercises for your condition.",
                },
                {
                  q: "How often should I do these exercises?",
                  a: "Typical recommendations are daily or several times per week. Your PT will determine appropriate frequency and progression based on your response.",
                },
                {
                  q: "When should I stop doing these exercises?",
                  a: "Stop if exercises cause sharp pain, radicular symptoms, or worsening function. Mild discomfort is different from pain indicating you should stop.",
                },
                {
                  q: "Who should avoid these exercises?",
                  a: "Patients with acute severe radiculopathy, significant stenosis with neurological symptoms, or recent surgery may not be appropriate candidates.",
                },
                {
                  q: "How long before I notice improvement?",
                  a: "Timeline varies. Some notice changes within weeks of consistent practice. Others require months. Consistency and proper technique matter.",
                },
                {
                  q: "Do I need equipment?",
                  a: "No. McGill exercises require only your body weight. A mat or towel for comfort is optional.",
                },
                {
                  q: "What if I have osteoporosis?",
                  a: "Certain positions in McGill exercises (like spinal flexion in curl-ups) may present increased risk. A physical therapist or physician should advise based on your bone density.",
                },
                {
                  q: "Should I do these exercises forever?",
                  a: "Some patients continue these exercises long-term for maintenance. Others progress to more challenging exercises. A PT helps determine the right long-term approach.",
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
              <li><Link href="/conservative-care" className="text-[#c8a020] hover:underline tracking-wide">Conservative Treatments for Chronic Pain →</Link></li>
              <li><Link href="/thoracic-foam-rolling" className="text-[#c8a020] hover:underline tracking-wide">Thoracic Foam Rolling for Upper Back Mobility →</Link></li>
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/pain-without-imaging" className="text-[#c8a020] hover:underline tracking-wide">Pain Without Imaging Findings →</Link></li>
              <li><Link href="/treatment-options" className="text-[#c8a020] hover:underline tracking-wide">Treatment Decision Framework →</Link></li>
              <li><Link href="/what-to-expect-pain-consultation" className="text-[#c8a020] hover:underline tracking-wide">What to Expect During Your Pain Consultation →</Link></li>
              <li><Link href="/virtual-consultations" className="text-[#c8a020] hover:underline tracking-wide">Schedule Virtual Consultation →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <VirtualConsultationBanner />

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/mcgill-big-3-exercises" />
    </>
  );
}
