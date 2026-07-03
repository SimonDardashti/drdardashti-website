import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/lumbar-spinal-stenosis";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Lumbar Spinal Stenosis Evaluation | Simon Dardashti, MD" },
  description:
    "Comprehensive guide to lumbar spinal stenosis: symptoms, diagnosis, imaging interpretation, and treatment options from a board-certified pain medicine physician.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Lumbar Spinal Stenosis Evaluation | Simon Dardashti, MD",
    description:
      "Understanding lumbar stenosis: symptoms, why conservative care often works, when procedures help, and when surgery should be considered.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumbar Spinal Stenosis Evaluation | Simon Dardashti, MD",
    description: "Comprehensive guide to lumbar stenosis evaluation and treatment.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "Lumbar Spinal Stenosis Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  headline: "Lumbar Spinal Stenosis: Symptoms, Diagnosis, and Treatment Options",
  description:
    "Comprehensive guide to lumbar spinal stenosis written by a board-certified pain medicine physician. Covers symptoms, diagnosis, imaging interpretation, and evidence-based treatment options.",
  image: "https://drdardashti.com/og-images/lumbar-spinal-stenosis.jpg",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  author: {
    "@type": "Person",
    name: "Simon Dardashti, MD",
    title: "Board-Certified Pain Medicine Physician",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Simon Dardashti, MD",
  },
  about: { "@type": "MedicalCondition", name: "Lumbar Spinal Stenosis" },
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between lumbar stenosis and lumbar radiculopathy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lumbar stenosis is narrowing of the spinal canal, often affecting multiple nerve roots. Lumbar radiculopathy is irritation of a specific nerve root, often from disc herniation. Stenosis can cause radicular pain (pain radiating into legs), but stenosis pain is often more generalized. Many patients have both conditions. The treatment approach may differ slightly depending on whether you have isolated radiculopathy or stenosis with multiple nerve root involvement.",
        },
      },
      {
        "@type": "Question",
        name: "Does severe stenosis on MRI always require surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Many people with severe stenosis on imaging have no symptoms or minimal symptoms. Surgery decisions should be based on how much the stenosis affects your function and quality of life, not imaging severity alone. Some patients with severe stenosis improve dramatically with conservative care. Others with less severe imaging findings have more disability. The clinical picture matters more than imaging alone.",
        },
      },
      {
        "@type": "Question",
        name: "Why does bending forward often feel better with stenosis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When you bend forward, you increase the space available for nerves in your spinal canal—this opens up stenosis. Conversely, standing upright or leaning backward decreases that space. This is why many stenosis patients can walk easier when pushing a shopping cart (bent forward) or when walking uphill. Understanding this pattern helps guide what activities are tolerable.",
        },
      },
      {
        "@type": "Question",
        name: "How long should I try conservative care before considering procedures?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most patients with stenosis improve with 6-12 weeks of appropriate conservative care—physical therapy, activity modification, and sometimes anti-inflammatory medications. If you're improving, continue. If you're not improving after 8-12 weeks of genuine effort, or if symptoms are severely limiting your function, procedures like epidural injections may be considered. Surgery is rarely needed urgently unless you have emergency signs like cauda equina syndrome.",
        },
      },
      {
        "@type": "Question",
        name: "Are epidural steroid injections effective for stenosis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Epidural steroid injections help some patients with stenosis, particularly when stenosis causes radicular leg pain. Success rates vary—some patients have significant relief, others have minimal benefit. Injections work by reducing inflammation around nerve roots. If they help, they can buy time for conservative care to work, improve function during therapy, or provide relief without surgery.",
        },
      },
      {
        "@type": "Question",
        name: "What imaging findings actually predict which patients will do well?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Imaging severity doesn't reliably predict outcomes. What matters more is: how much stenosis correlates with your specific symptoms, whether you have progressive neurologic deficits, and how much the condition limits your function. A patient with moderate stenosis causing severe leg claudication may have poor outcomes with conservative care, while a patient with severe stenosis but stable symptoms may improve fine.",
        },
      },
      {
        "@type": "Question",
        name: "Can stenosis get worse over time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stenosis typically progresses gradually over months to years, though the rate varies. Some patients remain stable for years. Others develop worsening symptoms. This progression is another reason to optimize conservative care early—it may prevent or delay need for procedures. However, sudden worsening or new neurologic deficits require prompt evaluation.",
        },
      },
      {
        "@type": "Question",
        name: "What are the emergency warning signs in stenosis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seek urgent evaluation for: progressive weakness in legs, loss of sensation in saddle region (buttocks/genitals), inability to control bowel/bladder, or progressive loss of function despite appropriate treatment. These suggest cauda equina syndrome—a rare but serious complication requiring urgent surgical evaluation. In contrast, leg pain and claudication alone, while often limiting, are usually not emergencies.",
        },
      },
      {
        "@type": "Question",
        name: "Can I prevent stenosis from getting worse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While you can't reverse existing stenosis, maintaining good core strength, avoiding repetitive heavy loading, maintaining healthy weight, and staying active can reduce symptoms and potentially slow progression. Poor posture and weak core muscles often worsen stenosis symptoms. Regular physical activity and structured strengthening often provide the most benefit for long-term management.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions", item: `${SITE_URL}/conditions` },
      { "@type": "ListItem", position: 3, name: "Lumbar Stenosis", item: PAGE_URL },
    ],
  },
};

export default function LumbarStenosisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Lumbar Spinal Stenosis
        </h1>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Lumbar spinal stenosis means narrowing of the spinal canal in your lower back. This narrowing can put pressure on nerves, causing pain, numbness, or weakness in your legs—particularly when you walk or stand.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Stenosis is very common. If you have it, you're not alone. Many people develop some degree of spinal stenosis over time, particularly as they age. The good news: most people with lumbar stenosis improve with appropriate conservative treatment.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            This page explains what stenosis is, how it's diagnosed, why imaging findings don't always predict symptoms, and how different treatment approaches work.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What Is Lumbar Spinal Stenosis?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Your spinal canal is the tunnel formed by your vertebrae that contains your spinal cord and nerve roots. In lumbar stenosis, this canal narrows—sometimes from bone spurs, sometimes from disc bulging, sometimes from ligament thickening, or a combination of these.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Stenosis typically develops gradually over years due to:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Bone spurs (osteophytes):</strong> The vertebrae develop extra bone, narrowing the canal</li>
            <li><strong>Disc bulging:</strong> Aging discs bulge backward into the spinal canal</li>
            <li><strong>Ligament thickening:</strong> The ligaments supporting your spine thicken and reduce space for nerves</li>
            <li><strong>Combination:</strong> Most commonly, multiple factors narrow the canal together</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Key insight:</strong> Stenosis by itself isn't dangerous. It becomes problematic when it pressures your nerves enough to cause symptoms. Many people have stenosis on imaging but no symptoms at all.
          </p>

          {/* ILLUSTRATION 1: Lumbar Spinal Stenosis */}
          <div className="my-12 flex justify-center">
            <MedicalFigure
              variant="default"
              src="/images/anatomy/spine/lumbar-spinal-stenosis.png"
              alt="Lumbar spinal stenosis showing narrowing of the lumbar spinal canal with ligament thickening, bone spurs from degenerative disc disease, and facet arthritis compressing nerve structures"
              caption="Lumbar Spinal Stenosis: Stenosis means the spinal canal has narrowed, which can put pressure on nerves. This is common with aging but NOT all stenosis causes pain or requires surgery. Many patients with significant stenosis have minimal symptoms, while others need treatment to relieve pressure."
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Common Symptoms
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            If stenosis is pressuring your nerve roots, you might experience:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Leg pain or burning:</strong> Usually bilateral (both sides) or more on one side, radiating into the buttocks, thighs, or calves</li>
              <li><strong>Leg numbness or tingling:</strong> Often in feet or legs</li>
              <li><strong>Leg weakness:</strong> Difficulty lifting foot, feeling unstable, or leg "giving out"</li>
              <li><strong>Claudication:</strong> Pain that starts or worsens with walking, improves with rest or bending forward</li>
              <li><strong>Lower back pain:</strong> Often present but may be less prominent than leg symptoms</li>
              <li><strong>Balance problems:</strong> Difficulty with coordination or stability</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Symptoms typically develop gradually and may come and go. Some days are better than others. Many patients notice patterns—walking uphill feels easier than walking on level ground, for example.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Symptoms Often Improve When Leaning Forward
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            One of the most characteristic features of stenosis is relief when you bend forward. This happens because:
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            When you bend forward (flexion), your spinal canal opens up—the ligaments relax and the canal space increases. This reduces pressure on your nerves, providing relief. Conversely, standing upright or leaning backward (extension) narrows the canal further.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            This is why many stenosis patients can:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Walk easier while pushing a shopping cart (bent forward)</li>
            <li>Tolerate walking uphill better than walking on flat ground</li>
            <li>Feel better walking in a mall where they can lean on railings</li>
            <li>Prefer bicycling to walking (cycling flexes the spine)</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Understanding this pattern helps with activity modification—you can structure activities to take advantage of positions that ease symptoms.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Lumbar Stenosis vs Lumbar Radiculopathy
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            These terms are related but not identical, and understanding the difference helps with treatment decisions:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Lumbar Radiculopathy</h3>
            <p className="text-gray-700 mb-2">Irritation of a specific nerve root, often from:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Disc herniation pressing on one nerve root</li>
              <li>Nerve root inflammation</li>
              <li>Nerve compression at one specific level</li>
            </ul>
            <p className="text-gray-700"><strong>Typical pattern:</strong> Pain follows one nerve distribution (L5, S1, etc.). Often sharp, shooting pain down one leg.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Lumbar Stenosis</h3>
            <p className="text-gray-700 mb-2">Narrowing of the central canal affecting multiple nerve roots:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Usually bilateral or diffuse</li>
              <li>Affects multiple nerve roots simultaneously</li>
              <li>Worsens with certain positions</li>
            </ul>
            <p className="text-gray-700"><strong>Typical pattern:</strong> Both legs affected (though maybe unequally). Pain worsens with walking/standing, improves with rest or forward bending. More achiness than sharp shooting pain.</p>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Many patients have both—stenosis creating the baseline narrowing with a superimposed disc herniation irritating one nerve root. Understanding which component dominates helps guide treatment.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What MRI Findings Actually Matter
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            MRI shows exactly where stenosis exists and how severe it is. But here's the important part: <strong>imaging severity doesn't reliably predict symptoms or treatment response.</strong>
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            You might have:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Severe stenosis with no symptoms</strong> — You might discover it incidentally on imaging done for other reasons</li>
            <li><strong>Moderate stenosis with severe symptoms</strong> — Even though imaging shows moderate narrowing, you're very limited in function</li>
            <li><strong>Mild stenosis with mild symptoms</strong> — Matches what you'd expect</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            What MRI findings DO matter:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Location correlation:</strong> Does the stenosis match where you have symptoms? This suggests it's the cause.</li>
            <li><strong>Severity relative to your limitations:</strong> Severe stenosis with severe functional loss may need more aggressive treatment than mild narrowing.</li>
            <li><strong>Emergency findings:</strong> Cauda equina compression (rare) or progressive myelopathy requires urgent evaluation.</li>
          </ul>

          {/* ILLUSTRATION 2: Central Canal Stenosis */}
          <div className="my-12 flex justify-center">
            <MedicalFigure
              variant="default"
              src="/images/anatomy/spine/lumbar-central-canal-stenosis.png"
              alt="Cross-sectional view of lumbar spine showing central canal stenosis with narrowing of the lumbar spinal canal from multiple sources including bone spurs, ligament thickening, and disc bulging"
              caption="Central Canal Stenosis: This cross-sectional view shows how stenosis narrows the canal from multiple directions. While MRI shows exactly where the narrowing is, your symptoms depend more on how much the stenosis actually pressures your nerves—and that can vary widely from person to person."
            />
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            When Imaging Does Not Match Your Symptoms
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Sometimes MRI shows stenosis but it doesn't match your symptoms. For example:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Stenosis on one side, pain on the other:</strong> Your pain likely comes from something else—muscle strain, sacroiliac joint pain, or a different level.</li>
            <li><strong>Severe stenosis but normal exam:</strong> If your neurologic exam is completely normal, the stenosis may not be the pain source.</li>
            <li><strong>Stenosis at L4-5 but pain pattern suggests L5-S1:</strong> The stenosis at the level shown may not be the culprit.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            When imaging doesn't correlate with symptoms, it tells you that <Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800 font-medium">the imaging finding may not be causing your pain.</Link> This is important because treating the imaging finding might not solve the problem. A careful clinical evaluation helps identify the actual pain source.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Conservative Treatment Options
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Most patients with lumbar stenosis improve with conservative care. This typically includes:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Physical Therapy</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Specific exercises addressing core stability and movement patterns. Physical therapy often focuses on strengthening while avoiding positions that narrow the canal. Many stenosis patients benefit significantly from structured therapy.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Activity Modification</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Structuring your day to favor positions that open the canal (bending forward) and avoid positions that narrow it (standing upright, leaning back). You can often tolerate much more activity if you're strategic about positioning.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Medication Management</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Anti-inflammatory medications (NSAIDs) when appropriate, or other medications to manage pain. These often work better for stenosis than for other back pain conditions.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Weight Management</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Extra weight increases loading on your spine, worsening stenosis symptoms. Weight loss often provides significant symptom improvement.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Assistive Devices</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Canes, walkers, or even corsets can help manage symptoms by providing support or encouraging better positioning.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            When Epidural Steroid Injections May Help
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <Link href="/procedures/epidural-steroid-injections" className="text-blue-600 hover:text-blue-800 font-medium">Epidural steroid injections</Link> deliver anti-inflammatory medication near irritated nerve roots. They may help if:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Conservative care isn't providing adequate relief.</strong> Injections can reduce inflammation and allow you to progress in therapy.</li>
            <li><strong>You want to avoid surgery</strong> but are having difficulty with function. Injections may provide enough relief to continue conservative management.</li>
            <li><strong>You need a bridge to more activity.</strong> If stenosis limits your ability to exercise, injections might reduce pain enough to increase activity tolerance.</li>
            <li><strong>Stenosis is causing one-sided radicular pain.</strong> Injections targeting that specific nerve root may be particularly helpful.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>What injections don't do:</strong> They don't treat the underlying stenosis (the narrowing is still there). They reduce inflammation, providing temporary pain relief—typically 2-6 weeks, sometimes longer. This gives you a window to benefit from therapy or activity that was previously too painful.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Success rates vary—some patients have significant relief, others minimal benefit. Multiple injections (series of 2-3) are often used to maximize benefit.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            When Surgery Should Be Considered
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Surgery for stenosis—typically decompression (removing bone spurs and ligament)—should be considered when:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Clear Indications for Surgery</h3>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Significant disability despite adequate conservative care:</strong> You've tried 3+ months of appropriate therapy and remain severely limited in function.</li>
              <li><strong>Clear imaging-symptom correlation:</strong> Imaging clearly matches your symptoms, and clinical exam confirms nerve involvement at that level.</li>
              <li><strong>Progressive neurologic deficits:</strong> You have worsening weakness, numbness, or loss of function despite treatment.</li>
              <li><strong>Severe functional limitation:</strong> Stenosis is preventing you from activities that matter to you—work, family time, quality of life.</li>
              <li><strong>Failed conservative management:</strong> You've genuinely maximized conservative options and are not improving.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Emergency Surgical Indications</h3>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Rarely, stenosis causes cauda equina syndrome—an emergency requiring urgent surgery. This presents with:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Loss of bowel or bladder control</li>
            <li>Bilateral leg weakness or numbness</li>
            <li>Saddle anesthesia (numbness in buttocks/genitals)</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            If you develop these symptoms, seek urgent evaluation. But these are rare—most stenosis doesn't become an emergency.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">How long does it take to see improvement with conservative care?</p>
              <p className="text-gray-700">Most patients notice some improvement within 2-4 weeks of starting structured therapy. Significant functional improvement often takes 6-12 weeks. Some patients see major relief after 3-4 months of consistent effort.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Can stenosis come back after surgery?</p>
              <p className="text-gray-700">Stenosis at the same level can recur over years, but this is less common than many patients fear. Stenosis at different levels can develop. This is another reason to optimize conservative management—it often provides lasting relief without needing surgery.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Should I get a second opinion before surgery?</p>
              <p className="text-gray-700">Yes. <Link href="/second-opinion-spine-surgery" className="text-blue-600 hover:text-blue-800">Getting a second opinion before spine surgery is always reasonable</Link> and recommended. Make sure conservative care has truly been optimized, imaging findings clearly match your symptoms, and you understand realistic surgical outcomes.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Is aquatic therapy helpful for stenosis?</p>
              <p className="text-gray-700">Yes. Water's buoyancy reduces loading on your spine while allowing strengthening exercise—ideal for stenosis. Many patients with stenosis tolerate aquatic therapy much better than land-based exercise initially.</p>
            </div>
          </div>
        </section>

        {/* Authority Box */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">About Dr. Simon Dardashti, MD</h3>
          <p className="text-gray-700 mb-2">
            <strong>Board-Certified in Pain Medicine and Anesthesiology</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>• UCLA Pain Medicine fellowship-trained</li>
            <li>• 10+ years evaluating and treating lumbar stenosis</li>
            <li>• Specializes in diagnosis-driven treatment planning</li>
            <li>• Virtual consultations available</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Discuss Your Stenosis Diagnosis
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            If you've been diagnosed with lumbar stenosis and want to discuss your options—whether conservative care is appropriate, whether procedures might help, or whether you need a second opinion on a surgical recommendation—we can help clarify your path forward.
          </p>

          <Link
            href="/virtual-consultations"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Schedule a Virtual Consultation
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Virtual consultations allow us to review your imaging, medical history, and discuss the best approach for your specific situation.
          </p>
        </section>

        {/* Related Resources */}
        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Related Resources
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800">Pain Without Imaging Findings</Link> — Understanding symptoms when imaging seems normal</li>
            <li><Link href="/treatment-options" className="text-blue-600 hover:text-blue-800">Conservative Care vs Injections vs Surgery</Link> — Comprehensive treatment pathway</li>
            <li><Link href="/second-opinion-spine-surgery" className="text-blue-600 hover:text-blue-800">Second Opinion Before Spine Surgery</Link> — What questions to ask</li>
            <li><Link href="/conditions/lumbar-radiculopathy" className="text-blue-600 hover:text-blue-800">Lumbar Radiculopathy Evaluation</Link> — Understanding radicular pain</li>
            <li><Link href="/conditions/low-back-pain" className="text-blue-600 hover:text-blue-800">Low Back Pain Evaluation</Link> — General back pain assessment</li>
            <li><Link href="/procedures/epidural-steroid-injections" className="text-blue-600 hover:text-blue-800">Epidural Steroid Injections</Link> — Understanding this procedure</li>
            <li><Link href="/virtual-consultations" className="text-blue-600 hover:text-blue-800">Virtual Consultations</Link> — Schedule an appointment</li>
          </ul>
        </section>
      </article>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/lumbar-spinal-stenosis" />
    </>
  );
}
