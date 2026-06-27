import type { Metadata } from "next";
import Link from "next/link";
import VirtualConsultationBanner from "@/components/VirtualConsultationBanner";

const PAGE_URL = "https://www.drdardashti.com/thoracic-foam-rolling";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Thoracic Foam Rolling for Upper Back Mobility | Simon Dardashti, MD" },
  description:
    "Thoracic foam rolling for improving upper back mobility and reducing neck and shoulder pain. Anatomy, benefits, proper technique, contraindications, and safety.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Thoracic Foam Rolling for Upper Back Mobility | Simon Dardashti, MD",
    description:
      "Thoracic foam rolling for improving upper back mobility and reducing neck and shoulder pain. Anatomy, benefits, proper technique, contraindications, and safety.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoracic Foam Rolling for Upper Back Mobility | Simon Dardashti, MD",
    description:
      "Thoracic foam rolling for improving upper back mobility and reducing neck and shoulder pain. Anatomy, benefits, proper technique, contraindications, and safety.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Thoracic Foam Rolling for Upper Back Mobility | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Thoracic foam rolling for improving upper back mobility and reducing neck and shoulder pain. Anatomy, benefits, proper technique, contraindications, and safety.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Thoracic Foam Rolling", item: PAGE_URL },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the thoracic spine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The thoracic spine is the middle section of the spine, from approximately the level of the shoulder blades down to the rib cage. It includes 12 vertebrae and is designed for stability and attachment of the rib cage, rather than extensive mobility like the cervical spine.",
      },
    },
    {
      "@type": "Question",
      name: "Why does thoracic stiffness affect neck and shoulder pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When the thoracic spine loses mobility, the cervical spine and shoulders must compensate by moving more, which can create or worsen pain. Improving thoracic mobility may reduce compensatory stress on the neck and shoulders.",
      },
    },
    {
      "@type": "Question",
      name: "Is thoracic foam rolling safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most people, gentle thoracic foam rolling is generally safe when performed correctly. However, certain conditions require caution or avoidance, including osteoporosis, recent surgery, or spinal conditions. Consult a healthcare provider if you have concerns.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I foam roll?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most recommendations suggest gentle foam rolling a few times per week. Frequency can vary based on your tolerance, symptoms, and goals. Start conservatively and increase frequency gradually if tolerated.",
      },
    },
    {
      "@type": "Question",
      name: "Should foam rolling hurt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thoracic foam rolling should produce mild pressure or discomfort, not sharp pain. If you experience sharp pain, stop immediately. Mild sensation is normal, but sharp or severe pain indicates you should discontinue.",
      },
    },
    {
      "@type": "Question",
      name: "Can I foam roll if I have osteoporosis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thoracic foam rolling carries increased risk of compression fracture if you have osteoporosis or osteopenia. A healthcare provider should evaluate whether foam rolling is appropriate for your bone density status.",
      },
    },
    {
      "@type": "Question",
      name: "How long until I notice improvement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timeline varies. Some people notice improved mobility or reduced pain within days to weeks of consistent foam rolling. Others require weeks to months. Regular practice and proper technique matter.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use foam rolling after spine surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thoracic foam rolling after spine surgery requires surgeon approval. Timing and restrictions depend on the specific surgery and your healing. Always consult your surgeon before resuming foam rolling.",
      },
    },
    {
      "@type": "Question",
      name: "Is foam rolling a substitute for physical therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foam rolling is one tool that may complement physical therapy, but it is not a substitute for professional evaluation and treatment. A physical therapist can determine whether foam rolling is appropriate and how to incorporate it into your treatment plan.",
      },
    },
  ],
};

export default function ThoracicFoamRollingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Mobility & Release
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Thoracic Foam
            <br />
            <em className="not-italic text-[#888]">Rolling.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Improving upper back mobility for neck pain, shoulder pain, and posture. Anatomy, technique, and precautions.
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
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Anatomy</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Thoracic Spine Anatomy.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                The thoracic spine is the middle section of the vertebral column, comprising 12 vertebrae from approximately the shoulder blade level down through the rib cage. Unlike the cervical (neck) spine designed for mobility, the thoracic spine prioritizes stability and serves as attachment points for the ribs.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                The thoracic spine has natural curves and is supported by strong ligaments and the rib cage itself. This design provides stability for protecting internal organs but can result in naturally limited mobility compared to other spinal regions.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                However, modern posture—particularly excessive sitting and forward head posture—often results in progressive thoracic stiffness beyond the spine's natural characteristics.
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
                Why Thoracic Stiffness Contributes to Pain.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                When the thoracic spine becomes stiff, adjacent regions must compensate. The cervical spine (neck) and shoulder joints increase their movement to accommodate tasks that ideally would involve thoracic mobility.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                This compensation can lead to or worsen neck pain, shoulder pain, and headaches. The cervical spine and shoulder structures are not optimized for excessive movement—when forced to compensate for thoracic stiffness, they may develop pain.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Improving thoracic mobility may reduce the compensatory stress on the neck and shoulders, potentially decreasing pain.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Benefits</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Potential Benefits of Thoracic Foam Rolling.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                When performed correctly, thoracic foam rolling may:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Improve thoracic extension mobility—particularly important for postural balance",
                  "Reduce trigger point tension in thoracic muscles",
                  "Improve posture by reducing forward rounding of the upper back",
                  "Reduce compensatory stress on the neck and shoulders",
                  "Decrease neck pain or shoulder pain related to thoracic stiffness",
                  "Serve as part of a broader approach to upper extremity pain management",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 04 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Technique</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Proper Thoracic Foam Rolling Technique.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                Key principles for safe and effective foam rolling:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Position foam roller horizontally across the thoracic spine (not vertically along the spine)",
                  "Support head and neck with hands to maintain neutral position",
                  "Use legs for control—push gently with feet to roll back and forth slowly",
                  "Roll over the rib cage area; avoid rolling directly over the spine",
                  "Breathe continuously—do not hold your breath",
                  "Start with lighter pressure and progress gradually",
                  "Perform for 30 seconds to 1 minute at a time",
                  "Stop if you experience sharp pain—mild pressure sensation is normal",
                  "Combine with gentle extension stretches (like supported back extension)",
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
                Errors that reduce effectiveness or increase risk:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Rolling along the spine vertically—the foam roller should be horizontal across the spine",
                  "Lack of neck support—neck must be supported by hands to prevent extension strain",
                  "Rolling too aggressively—should be slow, controlled movements with light pressure",
                  "Rolling too quickly—rushing reduces time for tissue response and increases discomfort",
                  "Neglecting breathing—holding breath increases tension and risk",
                  "Ignoring sharp pain—should stop immediately if experiencing sharp pain",
                  "Excessive duration—starting with long sessions; should begin conservatively",
                  "Rolling on bony areas—should target soft tissue of rib cage, not ribs or spinous processes",
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
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Contraindications</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Contraindications & Safety Considerations.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                Thoracic foam rolling may not be appropriate for:
              </p>
              <ul className="space-y-3 max-w-2xl mb-6">
                {[
                  "Osteoporosis or osteopenia—risk of compression fracture",
                  "Recent spine or thoracic surgery—requires surgeon approval for timing",
                  "Acute thoracic or rib injuries",
                  "Severe spinal degeneration or instability",
                  "Acute flare of pain or inflammation",
                  "Pregnancy (consult healthcare provider)",
                  "Any condition causing spinal fragility or elevated fracture risk",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                A healthcare provider should evaluate your individual situation before starting thoracic foam rolling, particularly if you have any bone density concerns or recent surgery.
              </p>
            </div>
          </div>

          {/* 07 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>07</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Timeline</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Expected Timeline for Improvement.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Like other mobility and pain management interventions, the timeline for improvement varies among individuals:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Immediate effect: Temporary improved sensation of mobility or reduced muscle tension",
                  "Acute: Within days to a few weeks, some patients notice improved posture or reduced neck/shoulder tension",
                  "Short-term: After 2-4 weeks of consistent foam rolling, measurable improvements in thoracic extension mobility",
                  "Medium-term: After 4-8 weeks of consistent practice, some patients report sustained reduction in compensatory neck/shoulder pain",
                  "Long-term: Continuation of practice helps maintain mobility gains; discontinuation typically results in gradual loss of improvements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
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
                  q: "What is the thoracic spine?",
                  a: "The thoracic spine is the middle section of the spine, from approximately shoulder blade level down through the rib cage. It includes 12 vertebrae and is designed for stability rather than extensive mobility.",
                },
                {
                  q: "Why does thoracic stiffness affect neck and shoulder pain?",
                  a: "When the thoracic spine loses mobility, the cervical spine and shoulders must compensate by moving more, creating or worsening pain. Improving thoracic mobility may reduce compensatory stress.",
                },
                {
                  q: "Is thoracic foam rolling safe?",
                  a: "For most people, gentle foam rolling is generally safe when done correctly. However, certain conditions require caution, including osteoporosis or recent surgery. Consult a healthcare provider if concerned.",
                },
                {
                  q: "How often should I foam roll?",
                  a: "Most recommendations suggest a few times per week. Frequency varies based on tolerance and symptoms. Start conservatively and increase gradually if tolerated.",
                },
                {
                  q: "Should foam rolling hurt?",
                  a: "Foam rolling should produce mild pressure, not sharp pain. Mild sensation is normal, but sharp or severe pain indicates you should stop immediately.",
                },
                {
                  q: "Can I foam roll if I have osteoporosis?",
                  a: "Foam rolling carries increased compression fracture risk with osteoporosis. A healthcare provider should evaluate whether it's appropriate for your bone density.",
                },
                {
                  q: "How long until I notice improvement?",
                  a: "Some notice changes within days to weeks of consistent foam rolling. Others require weeks to months. Regular practice and proper technique matter.",
                },
                {
                  q: "Can I foam roll after spine surgery?",
                  a: "Thoracic foam rolling after surgery requires surgeon approval. Timing and restrictions depend on your specific surgery and healing. Always consult your surgeon first.",
                },
                {
                  q: "Is foam rolling a substitute for physical therapy?",
                  a: "No. Foam rolling may complement physical therapy but is not a substitute for professional evaluation and treatment. A PT can determine appropriateness and integration.",
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
              <li><Link href="/mcgill-big-3-exercises" className="text-[#c8a020] hover:underline tracking-wide">McGill Big 3 Exercises for Core Stability →</Link></li>
              <li><Link href="/conditions/neck-pain" className="text-[#c8a020] hover:underline tracking-wide">Neck Pain Evaluation →</Link></li>
              <li><Link href="/conditions/cervicogenic-headache" className="text-[#c8a020] hover:underline tracking-wide">Cervicogenic Headache →</Link></li>
              <li><Link href="/conditions/myofascial-pain" className="text-[#c8a020] hover:underline tracking-wide">Myofascial Pain →</Link></li>
              <li><Link href="/pain-without-imaging" className="text-[#c8a020] hover:underline tracking-wide">Pain Without Imaging Findings →</Link></li>
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
