import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/cervicogenic-headache";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Cervicogenic Headache | Simon Dardashti, MD" },
  description:
    "Understanding cervicogenic headaches: how neck problems cause head pain, why imaging may be normal, and what treatment options can help. Physician-authored guide.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Cervicogenic Headache | Simon Dardashti, MD",
    description:
      "Cervicogenic headaches occur when neck structures irritate nerves and cause pain that radiates into the head. Learn about causes, diagnosis, and treatment options.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervicogenic Headache | Simon Dardashti, MD",
    description: "When neck problems cause headaches: understanding cervicogenic headache and treatment options.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "Cervicogenic Headache | Simon Dardashti, MD",
  url: PAGE_URL,
  headline: "Cervicogenic Headache: When Neck Problems Cause Head Pain",
  description:
    "Comprehensive guide to cervicogenic headaches written by a board-certified pain medicine physician. Covers how neck structures cause head pain, symptoms, diagnosis, imaging interpretation, and evidence-based treatment options.",
  image: "https://drdardashti.com/og-images/cervicogenic-headache.jpg",
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
  about: { "@type": "MedicalCondition", name: "Cervicogenic Headache" },
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can neck problems actually cause headaches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cervicogenic headaches occur when irritation in the neck—from joint arthritis, muscle tension, nerve irritation, or disc problems—triggers pain signals that travel to the head. The pain typically starts at the base of the skull and spreads toward the front of the head. This is distinct from migraines, which originate in the brain.",
        },
      },
      {
        "@type": "Question",
        name: "How common are cervicogenic headaches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cervicogenic headaches account for 15-20% of chronic headaches. Many people experience them after neck injury (whiplash), from poor posture over time, or from neck arthritis. They're underdiagnosed because many patients with neck pain don't realize their headaches originate from their neck.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my MRI look normal if my neck is causing headaches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many cervicogenic headaches arise from joint arthritis, muscle irritation, or nerve irritation that doesn't show on standard MRI. Small joint abnormalities, muscle tension patterns, and low-level nerve irritation can all cause significant headaches without clear imaging findings. This is why clinical evaluation—your history and physical exam—matters more than imaging for cervicogenic headache.",
        },
      },
      {
        "@type": "Question",
        name: "How is cervicogenic headache different from migraine?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cervicogenic headaches originate from the neck and are typically one-sided, steady, and worse with certain neck positions. Migraines originate in the brain and are often throbbing, affect both sides (though can be one-sided), and often come with light sensitivity or nausea. Some people have both conditions. Proper diagnosis helps guide the right treatment.",
        },
      },
      {
        "@type": "Question",
        name: "What are occipital nerve blocks and how do they help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Occipital nerves pass through the neck and travel to the back of the head. Occipital nerve blocks deliver numbing medication around these nerves. If the injection provides relief, it confirms that neck structures irritating these nerves are causing your headache. The block can provide temporary relief and helps identify whether you're a candidate for longer-lasting treatments.",
        },
      },
      {
        "@type": "Question",
        name: "Can physical therapy help cervicogenic headaches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Physical therapy addressing posture, neck flexibility, and muscle strength often helps cervicogenic headaches. Specific exercises that improve neck alignment and reduce muscle tension can provide significant relief. Some patients improve with therapy alone, while others benefit from combining therapy with injections or other treatments.",
        },
      },
      {
        "@type": "Question",
        name: "What is radiofrequency ablation for cervicogenic headache?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Radiofrequency ablation uses heat to reduce pain signals from cervical nerves and joints causing headaches. It's considered after diagnostic injections have identified which neck structures are responsible. The procedure can provide relief lasting several months to a year or longer.",
        },
      },
      {
        "@type": "Question",
        name: "Is cervicogenic headache permanent or can it improve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many cervicogenic headaches improve with appropriate treatment. Physical therapy, neck strengthening, posture correction, and activity modification help many people. Others benefit from procedural interventions. The key is identifying that the neck is the problem source and then addressing it systematically.",
        },
      },
      {
        "@type": "Question",
        name: "Should I see a neurologist or pain specialist for cervicogenic headaches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Either can be appropriate depending on your situation. Neurologists specialize in headache disorders generally. Pain specialists like myself specialize in diagnosing and treating pain originating from specific neck structures. If cervicogenic headache is suspected, a pain specialist can perform diagnostic injections and procedural treatments targeted at the neck source.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions", item: `${SITE_URL}/conditions` },
      { "@type": "ListItem", position: 3, name: "Cervicogenic Headache", item: PAGE_URL },
    ],
  },
};

export default function CervicogenicHeadachePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Cervicogenic Headache
        </h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            You have regular headaches that seem to start in your neck. They often feel one-sided, steady, and worse with certain head or neck positions. You've seen multiple specialists, but your MRI looks relatively normal. You're wondering: Can neck problems really cause headaches?
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The answer is yes. Cervicogenic headaches—headaches that originate from neck structures—are more common than many patients and even doctors realize. They account for 15-20% of chronic headaches but are frequently overlooked or attributed to other causes.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            This page explains what cervicogenic headaches are, how neck problems cause head pain, why your imaging might look normal despite significant symptoms, and what treatment options can actually help.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What Is a Cervicogenic Headache?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            A cervicogenic headache is pain that originates from structures in the neck but is felt in the head. It's a referred pain pattern—your brain interprets pain signals from irritated neck structures as head pain.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Typical characteristics include:</strong>
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Headache typically on one side of the head</li>
            <li>Pain that starts at the base of the skull and radiates toward the forehead, temple, or eye</li>
            <li>Steady pain (not throbbing)</li>
            <li>Headache worsens with certain neck positions or movements</li>
            <li>Often accompanied by <Link href="/conditions/neck-pain" className="text-blue-600 hover:text-blue-800">neck pain</Link> or stiffness</li>
            <li>No nausea or light sensitivity (distinguishing it from migraine)</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Cervicogenic headaches develop when structures in the neck irritate nerves—particularly the occipital nerves and upper cervical nerves—that travel toward the head.
          </p>
        </section>

        {/* ILLUSTRATION: Cervicogenic Headache Anatomy */}
        <div className="my-12 flex justify-center">
          <MedicalFigure
            role="anatomy"
            src="/images/conditions/headache/cervicogenic-headache.png"
            alt="Cervicogenic headache showing upper cervical spine anatomy, cervical facet joints, cervical nerve roots C2-C3, and occipital nerves with referred pain pattern to head"
            caption="Cervicogenic Headache Sources: Pain can originate from multiple neck structures—cervical facet joints (especially at C2-C3), upper cervical nerve roots, tight neck muscles, or the occipital nerves. These structures share nerve connections with pain-sensing areas in the head, creating a referred pain pattern. This is why the headache is felt in the head even though the problem originates in the neck. Understanding these anatomical pathways helps explain why neck-specific treatments can be effective."
            priority={true}
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How Neck Structures Can Cause Head Pain
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Several neck structures can irritate nerves and trigger cervicogenic headaches:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cervical Facet Joints</h3>
              <p className="text-gray-700">
                The small joints connecting cervical vertebrae (especially at C2-C3 and C3-C4) can develop arthritis or irritation. When inflamed, these joints irritate nearby nerves, triggering referred pain into the head.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cervical Nerve Roots</h3>
              <p className="text-gray-700">
                Upper cervical nerve roots (C2, C3) can be irritated by disc bulges, bone spurs, muscle tightness, or inflammation. This irritation sends pain signals that the brain interprets as head pain, often at the back of the head.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Neck Muscles</h3>
              <p className="text-gray-700">
                Chronically tight neck muscles can irritate nerves and trigger referred headaches. Poor posture, prolonged forward head position, stress, and injury all contribute to muscle tension that causes cervicogenic headaches.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Occipital Nerves</h3>
              <p className="text-gray-700">
                Occipital nerves pass through the neck on their way to the back of the scalp. When irritated by muscle tension, joint arthritis, or nerve compression, they produce characteristic headaches at the back of the head.
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            The key point: all of these are separate from migraine or tension headaches that originate in the brain itself.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Common Symptoms
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            If you have cervicogenic headaches, you likely recognize this pattern:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Pain location:</strong> Usually one-sided, at the back of the head, and often radiating toward the temple, eye, or forehead</li>
            <li><strong>Pain character:</strong> Steady, dull, or aching (not pulsing)</li>
            <li><strong>Triggers:</strong> Certain neck movements, poor posture, prolonged sitting, or sustained neck positions</li>
            <li><strong>Associated neck symptoms:</strong> Neck pain, stiffness, limited range of motion</li>
            <li><strong>Duration:</strong> Variable—can be intermittent or chronic</li>
            <li><strong>Medication response:</strong> May not respond well to typical migraine medications</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Some patients also report a clicking or cracking sensation in the neck with movement, which is often related to facet joint irritation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How Cervicogenic Headache Differs From Migraine
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Many patients with cervicogenic headaches have been told they have migraines. While the conditions can coexist, they differ significantly:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-semibold">Feature</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Cervicogenic</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Migraine</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-300 p-3"><strong>Origin</strong></td>
                  <td className="border border-gray-300 p-3">Neck structures</td>
                  <td className="border border-gray-300 p-3">Brain</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>One-sided</strong></td>
                  <td className="border border-gray-300 p-3">Typically yes</td>
                  <td className="border border-gray-300 p-3">Often, but not always</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><strong>Quality</strong></td>
                  <td className="border border-gray-300 p-3">Steady, aching</td>
                  <td className="border border-gray-300 p-3">Throbbing, pulsing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Worse with neck movement</strong></td>
                  <td className="border border-gray-300 p-3">Yes</td>
                  <td className="border border-gray-300 p-3">No</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><strong>Nausea/light sensitivity</strong></td>
                  <td className="border border-gray-300 p-3">Usually absent</td>
                  <td className="border border-gray-300 p-3">Often present</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Neck pain/stiffness</strong></td>
                  <td className="border border-gray-300 p-3">Often present</td>
                  <td className="border border-gray-300 p-3">Absent</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Important:</strong> Some people have both cervicogenic headaches and migraines. Proper diagnosis helps determine which is which so treatment can be targeted appropriately.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Imaging May Be Normal
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            This is one of the most frustrating aspects of cervicogenic headaches: <strong>your MRI can look completely normal while you have significant, disabling headaches.</strong>
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Why? Because many causes of cervicogenic headaches don't show up on standard imaging:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
            <li><strong>Small facet joint irritation:</strong> Minor joint inflammation or arthritis can cause significant pain without obvious MRI findings</li>
            <li><strong>Muscle tension:</strong> Chronically tight muscles irritate nerves but don't appear abnormal on imaging</li>
            <li><strong>Nerve irritation:</strong> A nerve can be irritated and causing pain without visible compression on MRI</li>
            <li><strong>Subtle disc changes:</strong> Small disc bulges or degenerative changes that irritate nerves may not be obvious</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800">Pain without clear imaging findings</Link> is actually quite common in cervicogenic headaches. This is why clinical evaluation—your history, physical exam, and response to diagnostic tests—is more important than imaging for diagnosis.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            When imaging helps: If your cervicogenic headaches started after an accident or if symptoms have worsened significantly, imaging is useful to rule out major structural problems or injury.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How I Evaluate Cervicogenic Headache
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Evaluating cervicogenic headaches requires a careful approach:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Detailed Headache History</h3>
              <p className="text-gray-700">When do headaches occur? What triggers them? Do certain neck positions or movements make them worse? Is neck pain present? This history is crucial for cervicogenic headache.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Physical Examination</h3>
              <p className="text-gray-700">I examine your neck range of motion, muscle tenderness, and whether specific movements reproduce your headache. This exam helps identify which neck structures are involved.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Imaging Review</h3>
              <p className="text-gray-700">If imaging exists, I review it to check for significant structural problems. But normal imaging doesn't rule out cervicogenic headache.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Diagnostic Injections</h3>
              <p className="text-gray-700">Strategic injections to cervical facet joints or occipital nerves confirm which neck structures are causing your headache and help guide treatment.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            The goal is to identify specifically which neck structures are responsible so treatment can be targeted appropriately.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Common Treatment Options
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Therapy</h3>
              <p className="text-gray-700">
                Specialized neck physical therapy addressing posture, flexibility, and strength is often the first-line treatment. Exercises that improve cervical stability and reduce muscle tension frequently help cervicogenic headaches. Many patients improve significantly with therapy alone.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Activity Modification</h3>
              <p className="text-gray-700">
                Identifying activities that trigger headaches and modifying them helps. This often includes ergonomic adjustments (desk setup, phone position), taking breaks from prolonged postures, and avoiding movements that worsen headaches.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medications</h3>
              <p className="text-gray-700">
                Depending on your situation, medications may help: muscle relaxants for neck tension, non-steroidal anti-inflammatories for inflammation, or other options. Migraine medications often don't help cervicogenic headaches, which is an important clue to diagnosis.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link href="/procedures/occipital-nerve-blocks" className="text-blue-600 hover:text-blue-800">Occipital Nerve Blocks</Link>
              </h3>
              <p className="text-gray-700">
                Occipital nerve blocks deliver numbing medication around nerves at the back of the head. If this provides significant relief, it confirms that occipital nerve irritation (from neck structures) is causing your headache. The block provides temporary relief and helps identify if longer-term treatments might help.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-blue-600 hover:text-blue-800">Medial Branch Blocks</Link>
              </h3>
              <p className="text-gray-700">
                Medial branch blocks anesthetize nerves that supply cervical facet joints. If your cervicogenic headache is caused by facet joint arthritis, this block will provide relief and suggest that radiofrequency ablation might provide longer-lasting benefit.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link href="/procedures/radiofrequency-ablation" className="text-blue-600 hover:text-blue-800">Radiofrequency Ablation</Link>
              </h3>
              <p className="text-gray-700">
                Radiofrequency ablation uses heat to reduce pain signals from cervical joints and nerves. It's considered after diagnostic injections have identified which structures are responsible. Relief can last several months to a year or longer.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            When Additional Evaluation Is Needed
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Most cervicogenic headaches respond well to the approaches above. However, some situations warrant additional investigation:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Sudden change in headache pattern:</strong> If your headaches suddenly worsen or change character, additional imaging may be needed</li>
            <li><strong>Progressive neurological symptoms:</strong> Weakness, numbness, or other progressive nerve symptoms may indicate structural problems requiring further evaluation</li>
            <li><strong>Headaches following trauma:</strong> Headaches that started after accidents or injuries should be evaluated for structural injury</li>
            <li><strong>Not responding to conservative care:</strong> If you've tried physical therapy and activity modification without improvement, diagnostic injections can identify specific structures responsible</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            In these situations, working with both your primary doctor and a pain specialist ensures comprehensive evaluation.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">About Simon Dardashti, MD</h3>
          <p className="text-gray-700 mb-2">
            <strong>Board-Certified Pain Medicine Physician</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>• Specialized training in Pain Medicine from UCLA</li>
            <li>• 10+ years diagnosing and treating cervicogenic headaches</li>
            <li>• Expert in occipital nerve blocks and cervical medial branch procedures</li>
            <li>• Focus on identifying specific neck structures causing headaches</li>
            <li>• Virtual consultations available</li>
          </ul>
        </section>

        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Evaluate Your Cervicogenic Headache
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            If you suspect your headaches originate from your neck—or if you have regular headaches that haven't improved despite seeing multiple specialists—a comprehensive evaluation can identify specifically which neck structures are involved and what treatment might help.
          </p>

          <Link
            href="/virtual-consultations"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Schedule a Virtual Consultation
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Virtual consultations allow me to discuss your headache pattern and explore whether a neck source might be responsible.
          </p>
        </section>

        <section className="mb-12 border-t pt-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                If I have cervicogenic headaches, will they ever go away completely?
              </h3>
              <p className="text-gray-700">
                Many patients experience significant improvement or even resolution with appropriate treatment. Physical therapy, activity modification, and proper posture help many people long-term. Others benefit from procedural interventions. The key is identifying that the neck is the source and addressing it specifically.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can poor posture cause cervicogenic headaches?
              </h3>
              <p className="text-gray-700">
                Yes. Prolonged forward head position and poor posture create muscle tension and alter cervical alignment, irritating nerves. Even if posture is not the original cause, correcting posture is usually an important part of treatment.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are cervicogenic headaches dangerous or can they lead to worse conditions?
              </h3>
              <p className="text-gray-700">
                Cervicogenic headaches themselves are not dangerous, though they can significantly impact quality of life. The underlying neck problems causing them should be addressed, but the headaches won't cause damage if left untreated. However, proper evaluation ensures no other serious conditions are missed.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can stress or tension in my neck cause cervicogenic headaches?
              </h3>
              <p className="text-gray-700">
                Absolutely. Emotional stress often manifests as muscle tension in the neck and shoulders. This tension irritates nerves and can trigger cervicogenic headaches. Stress management, relaxation techniques, and stretching can help address this component.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long should I try physical therapy before considering other treatments?
              </h3>
              <p className="text-gray-700">
                Physical therapy typically shows results within 6-8 weeks if it will work. If you've been in therapy for 8-12 weeks without meaningful improvement, diagnostic injections can identify whether a specific neck structure (facet joint or nerve) is causing your headache and whether procedures might help.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Related Resources
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800">Pain Without Imaging Findings</Link> — Understanding pain when imaging looks normal</li>
            <li><Link href="/treatment-options" className="text-blue-600 hover:text-blue-800">Treatment Options</Link> — Overview of conservative, procedural, and other approaches</li>
            <li><Link href="/conditions/neck-pain" className="text-blue-600 hover:text-blue-800">Neck Pain</Link> — Comprehensive guide to neck pain</li>
            <li><Link href="/conditions/cervical-radiculopathy" className="text-blue-600 hover:text-blue-800">Cervical Radiculopathy</Link> — Nerve root irritation in the neck</li>
            <li><Link href="/conditions/occipital-neuralgia" className="text-blue-600 hover:text-blue-800">Occipital Neuralgia</Link> — Irritation of occipital nerves</li>
            <li><Link href="/procedures/occipital-nerve-blocks" className="text-blue-600 hover:text-blue-800">Occipital Nerve Blocks</Link> — Diagnostic and therapeutic nerve blocks</li>
            <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-blue-600 hover:text-blue-800">Medial Branch Blocks</Link> — Facet joint targeted injections</li>
            <li><Link href="/virtual-consultations" className="text-blue-600 hover:text-blue-800">Virtual Consultations</Link> — Schedule an appointment</li>
          </ul>
        </section>

        <section className="mt-12 pt-8 border-t text-sm text-gray-600">
          <p>
            <strong>Medical Disclaimer:</strong> This page is educational and does not constitute medical advice. Information presented here is based on current evidence and clinical experience but does not replace evaluation by a healthcare provider. All medical decisions should be made in consultation with a qualified physician who understands your complete medical history. If you have persistent headaches, seek evaluation from a qualified healthcare provider.
          </p>
        </section>
      </article>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/cervicogenic-headache" />
    </>
  );
}
