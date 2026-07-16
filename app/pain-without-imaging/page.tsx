import { Metadata } from 'next'
import Link from 'next/link'
import MedicalReviewFooter from "@/components/MedicalReviewFooter"

export const metadata: Metadata = {
  title: 'Pain Without Imaging Findings: Why You Hurt When Tests Are Normal',
  description: 'Your normal MRI does not mean your pain is imaginary. Learn why symptoms and imaging do not always match, and how Dr. Simon Dardashti evaluates pain when imaging is normal.',
  keywords: [
    'pain without imaging',
    'normal MRI but pain',
    'imaging findings vs symptoms',
    'diagnosing pain without MRI',
    'pain medicine Los Angeles',
  ],
  openGraph: {
    title: 'Pain Without Imaging Findings: Why You Hurt When Tests Are Normal',
    description: 'Learn why normal MRI and imaging do not rule out real pain, and how comprehensive evaluation identifies pain sources.',
    type: 'article',
    url: 'https://drdardashti.com/pain-without-imaging',
  },
}

// JSON-LD Schema
const pageSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalWebPage', 'Article'],
  name: 'Pain Without Imaging Findings: Why You Hurt When Tests Are Normal',
  url: 'https://drdardashti.com/pain-without-imaging',
  headline: 'Why You Have Pain When Your Imaging Tests Are Normal',
  description: 'Comprehensive guide to understanding pain when imaging tests are normal, from board-certified pain medicine specialist Dr. Simon Dardashti.',
  image: 'https://www.drdardashti.com/headshot.webp',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  author: {
    '@type': 'Person',
    name: 'Simon Dardashti, MD',
    title: 'Board-Certified Pain Medicine Physician',
    url: 'https://drdardashti.com/about/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Simon Dardashti, MD',
    logo: {
      '@type': 'ImageObject',
      url: 'https://drdardashti.com/logo.png',
    },
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'If my MRI is normal, why do I still have pain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pain and imaging findings do not always correlate. Your nervous system can generate pain through multiple mechanisms that imaging cannot detect. These include nerve irritation without visible compression, muscle dysfunction, movement pattern problems, and nervous system sensitivity. A normal MRI means we need to look beyond structural findings to understand what is causing your pain. This is where comprehensive clinical evaluation—physical exam, history, and functional assessment—becomes especially valuable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does normal imaging mean my pain is psychological?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Pain that originates from functional mechanisms—nerve irritation, muscle dysfunction, movement problems—is absolutely real and physical. Normal imaging simply means the pain source is not a large structural lesion visible on a scan. Psychological factors can contribute to any pain, structural or functional, but your pain is not imaginary or "in your head" just because imaging appears normal. The absence of imaging findings does not diminish the reality of your symptoms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will physical therapy help if my imaging is normal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, often significantly. Physical therapy can be particularly effective for pain involving muscle dysfunction, movement patterns, and nervous system sensitivity. The key is that your therapist understands the specific type of pain you have. If your pain involves myofascial sources or movement dysfunction, targeted exercise and manual therapy frequently provide substantial relief. Most patients who engage in appropriate physical therapy see meaningful improvement within 6–12 weeks when the diagnosis is accurate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can injections help if imaging is normal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Diagnostic and therapeutic injections are often valuable when imaging is normal because they help identify the specific pain source. An epidural injection can test whether spinal structures are involved. A medial branch block can determine if facet joints are contributing. If pain improves after an injection targeting a specific structure, that provides both diagnostic information and therapeutic relief. Success depends on accurate diagnosis of which structure may be contributing to pain.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I get another MRI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. If your imaging is already normal and your symptoms have not changed substantially, additional imaging is usually not helpful. More imaging does not improve diagnosis when the pain is functional rather than structural. However, if your symptoms change significantly—new neurological findings, progressive weakness, or concerning new features—then imaging may help identify what has changed. I recommend imaging only when clinical findings suggest it would guide treatment decisions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can nerve pain exist without MRI findings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Nerves can be irritated, inflamed, or partially damaged in ways that do not show on standard MRI. A nerve can fire abnormally and cause pain (shooting, burning, radiating sensation) without obvious compression visible on imaging. Physical exam findings, symptom patterns, and response to diagnostic nerve blocks can confirm nerve involvement even when imaging appears normal. This is one of the most common reasons for normal imaging with significant pain.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you diagnose pain when imaging is normal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Through systematic clinical evaluation. I start with a detailed history: When did pain start? What makes it worse or better? What have you tried? Then I perform a careful physical examination—range of motion, neurological testing, strength, sensation, specific maneuvers that reproduce your pain. I assess your functional limitations and how pain affects daily activities. This clinical picture, combined with diagnostic testing when appropriate (such as targeted injections), helps me identify the likely pain generators and develop an appropriate treatment plan.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I seek evaluation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you have persistent pain (lasting more than a few weeks) that limits your activities, a comprehensive evaluation can help. This is especially true if you have normal imaging but ongoing symptoms. Do not wait assuming pain will resolve on its own, and do not assume normal imaging means treatment is impossible. A board-certified pain medicine specialist can help identify what is causing your pain and develop a treatment strategy tailored to your specific situation.',
        },
      },
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://drdardashti.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Conditions',
        item: 'https://drdardashti.com/conditions/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pain Without Imaging Findings',
        item: 'https://drdardashti.com/pain-without-imaging/',
      },
    ],
  },
}

export default function PainWithoutImaging() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          Why You Have Pain When Your Imaging Tests Are Normal
        </h1>

        {/* Authority Page Callout */}
        <section className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Not Sure Whether You Need Physical Therapy, Injections, or Surgery?
          </h3>
          <p className="text-gray-700 mb-4">
            Treatment decisions should be based on diagnosis, symptoms, and response to conservative care—not a one-size-fits-all approach.
          </p>
          <Link href="/treatment-options" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors text-sm">
            Conservative Care vs Injections vs Surgery
          </Link>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            You have significant pain. Your MRI is normal. Your CT scan is normal. Perhaps your specialist reviewed the imaging and said, "I don't see anything significant." This creates confusion: How can I hurt this much if imaging shows nothing wrong?
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            The answer is straightforward: <strong>Pain and imaging findings do not always correlate.</strong> Your normal imaging does not mean your pain is imaginary or that treatment is impossible. It means we need to take a different diagnostic approach to identify what is causing your symptoms.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Normal Imaging Does Not Mean Nothing Is Wrong
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            MRI and CT imaging are excellent at detecting large structural problems: obvious disc herniations, bone fractures, tumors, or significant spinal stenosis. But imaging has important limitations.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Imaging cannot show:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
            <li>Nerve irritation or inflammation without visible compression</li>
            <li>Muscle tension, trigger points, or dysfunction</li>
            <li>Movement pattern abnormalities</li>
            <li>Ligament microtrauma</li>
            <li>Functional pain patterns from chronic pain states</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Research shows a common clinical reality: Many people with completely normal imaging have significant pain, while many people with abnormal imaging findings have no pain at all. This mismatch between what imaging shows and what a patient experiences is well-documented in medical literature and is one of the most important clinical insights in pain medicine.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            This does not mean your pain is not real. It means imaging alone cannot explain what is causing it. That is why physical examination, clinical history, and functional assessment matter as much as or more than imaging in determining diagnosis and treatment.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How I Evaluate Pain When Imaging Is Normal
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            When imaging is normal but pain is significant, diagnosis relies on comprehensive clinical evaluation. Here is how that works:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Physical Examination</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The physical exam is where I gather the most important diagnostic information. I assess your range of motion—which movements reproduce your pain and which are pain-free. I perform neurological testing: strength in specific muscle groups, sensation in specific dermatomes, and reflexes. I use specific maneuvers designed to reproduce your symptoms or rule out certain diagnoses. For example, a positive Spurling test in a patient with arm pain and normal cervical imaging strongly suggests cervical nerve involvement even if imaging does not show compression. These exam findings help identify which structure may be contributing to pain.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Functional Assessment</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            I ask about your activities: What makes pain worse? What makes it better? How does pain affect your work, sleep, or daily function? These functional patterns help me understand the mechanical or neurological basis of your pain. A patient whose pain increases with forward bending but improves with lying down has a different pain pattern than someone whose pain is constant regardless of position. These patterns guide diagnosis.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Clinical History</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            I want to understand the full context: When did pain start? Was there an injury? Have you had prior treatments? What have you tried? How has pain evolved over time? This history provides clues about underlying mechanisms. Chronic pain that gradually worsens often involves different mechanisms than acute pain following injury.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Clinical Reasoning</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            From these components—exam findings, functional patterns, and history—I develop a working diagnosis about what is likely causing pain. This diagnosis guides treatment decisions. For example:
          </p>

          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 mb-6">
            <p className="text-gray-800 mb-4">
              <strong>Clinical Example:</strong> A 52-year-old with arm pain, normal cervical MRI, but positive Spurling test and weakness in thumb abduction (C6 nerve distribution). Clinical findings strongly suggest C6 nerve involvement. We start with conservative care targeting that specific nerve—specific exercises, posture modification. If that does not provide adequate relief in 4–6 weeks, a diagnostic cervical medial branch block targeting the facet joint at that level can help identify whether the facet joint is contributing to symptoms while providing potential relief. The MRI was normal, but the clinical picture provided diagnostic direction.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Diagnosis based on the entire clinical picture is more valuable than searching for imaging findings that may not exist. This is the foundation of how I approach pain medicine.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Diagnostic Injections Can Help Identify the Pain Source
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            When clinical evaluation suggests a specific pain generator, diagnostic injections can help identify which structure may be contributing to pain while providing relief.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>How they work:</strong> I inject local anesthetic around a specific structure—an epidural space, a facet joint, a nerve—to temporarily numb only that structure. If your pain improves or resolves, that suggests the structure I targeted may be contributing to pain. If pain does not improve, that structure is likely not the primary source, and we consider other possibilities.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Common diagnostic injections:</strong>
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li><strong><Link href="/procedures/epidural-steroid-injections" className="text-blue-600 hover:text-blue-800">Epidural steroid injection:</Link></strong> Tests whether spinal canal involvement is contributing to pain. Can provide anti-inflammatory benefit.</li>
            <li><strong><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-blue-600 hover:text-blue-800">Medial branch block:</Link></strong> Tests whether facet joints may be contributing to pain. A short-duration diagnostic test.</li>
            <li><strong>Sacroiliac joint injection:</strong> Tests whether SI joint dysfunction is contributing to pain.</li>
            <li><strong>Peripheral nerve blocks:</strong> Test whether specific peripheral nerves are involved.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The value of diagnostic injections is two-fold: They provide diagnostic information about what may be causing pain, and they provide therapeutic relief while we gather that information. This is efficient—you may receive both diagnostic insight and symptom improvement simultaneously.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            That said, diagnostic injections are a tool—not a definitive test. Results must always be interpreted alongside your history, physical exam findings, and functional limitations. Partial relief, for example, may indicate that multiple structures are contributing to pain. Technical factors can influence results, and what we learn from one injection guides next steps, but no single test determines diagnosis or treatment decisions alone. This is why comprehensive clinical evaluation remains the foundation.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Treatment Is Based on the Diagnosis, Not the MRI
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Once we have identified the likely pain generators through clinical evaluation, treatment is tailored to address those specific sources.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Conservative Care</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Most pain conditions improve with conservative care as first-line treatment:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li><strong>Physical therapy</strong> targeted to your specific diagnosis</li>
            <li><strong>Activity modification</strong> to reduce symptom provocation</li>
            <li><strong>Exercise progression</strong> as pain improves</li>
            <li><strong>Sleep optimization</strong> and stress management</li>
            <li><strong>Medication</strong> when appropriate to support recovery</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Many patients improve significantly with conservative care alone—often 70–80% of patients with acute pain improve with appropriate conservative management over 6–12 weeks. Treatment should be based on what we found during evaluation, not on imaging severity.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Unsure how to choose between conservative care, injections, and surgery?</strong> <Link href="/treatment-options" className="text-blue-600 hover:text-blue-800 font-medium">See a detailed guide to treatment decision-making</Link> that explains when each option is appropriate and how to think through your next steps with your physician.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Interventional Options</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            If conservative care does not provide adequate relief, interventional options may help:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li><strong><Link href="/procedures/epidural-steroid-injections" className="text-blue-600 hover:text-blue-800">Epidural steroid injection</Link></strong> for spinal pain</li>
            <li><strong><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-blue-600 hover:text-blue-800">Medial branch blocks</Link></strong> for facet pain</li>
            <li><strong><Link href="/procedures/radiofrequency-ablation" className="text-blue-600 hover:text-blue-800">Radiofrequency ablation (RFA)</Link></strong> for persistent facet or SI joint pain</li>
            <li><strong>Other procedures</strong> based on specific diagnosis</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Treatment decisions are based on clinical diagnosis, response to prior treatment, and functional limitations—not on imaging findings. This approach respects that you are a unique individual with a unique pain problem, not a scan result.
          </p>
        </section>

        {/* Section 5: FAQs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                If my MRI is normal, why do I still have pain?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pain comes from multiple possible sources, not all visible on imaging. Your nervous system can generate pain through nerve irritation, muscle dysfunction, movement pattern abnormalities, and nervous system sensitivity. A normal MRI means your pain is not from a large structural lesion, but it does not rule out these other mechanisms. This is why comprehensive clinical evaluation—physical exam, history, and functional assessment—is essential for diagnosis when imaging is normal.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Does normal imaging mean my pain is psychological?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. Pain originating from functional mechanisms—nerve irritation, muscle dysfunction, movement dysfunction—is absolutely real and physical. Normal imaging simply means the pain source is not a large structural lesion visible on a scan. Psychological factors can contribute to any pain (structural or functional), but your pain is not imaginary or "in your head" because imaging appears normal. The absence of imaging findings does not diminish the reality of your symptoms.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Will physical therapy help if my imaging is normal?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, often significantly. Physical therapy can be particularly effective for pain involving muscle dysfunction, movement patterns, and nervous system sensitivity. The key is that your therapist understands the specific type of pain you have. If your pain involves myofascial sources or movement dysfunction, targeted exercise and manual therapy frequently provide substantial relief. Most patients who engage in appropriate physical therapy see meaningful improvement within 6–12 weeks when the diagnosis is accurate.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Can injections help if imaging is normal?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Diagnostic and therapeutic injections are often valuable when imaging is normal because they help identify the specific pain source. An epidural injection can test whether spinal structures are involved. A medial branch block can determine if facet joints are contributing. If pain improves after an injection targeting a specific structure, that provides both diagnostic information and therapeutic relief. Success depends on accurate diagnosis of which structure may be contributing to pain.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Should I get another MRI?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Not necessarily. If your imaging is already normal and your symptoms have not changed substantially, additional imaging is usually not helpful. More imaging does not improve diagnosis when pain is functional rather than structural. However, if your symptoms change significantly—new neurological findings, progressive weakness, or concerning new features—then imaging may help identify what has changed. I recommend imaging only when clinical findings suggest it would guide treatment decisions.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Can nerve pain exist without MRI findings?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. Nerves can be irritated, inflamed, or partially damaged in ways that do not show on standard MRI. A nerve can fire abnormally and cause pain—shooting, burning, radiating sensation—without obvious compression visible on imaging. Physical exam findings, symptom patterns, and response to diagnostic nerve blocks can confirm nerve involvement even when imaging appears normal. This is one of the most common reasons for normal imaging with significant pain.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How do you diagnose pain when imaging is normal?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Through systematic clinical evaluation. I start with detailed history: When did pain start? What makes it worse or better? What have you tried? Then I perform careful physical examination—range of motion, neurological testing, strength, sensation, and specific maneuvers that reproduce your pain. I assess your functional limitations and how pain affects daily activities. This clinical picture, combined with diagnostic testing when appropriate (such as targeted injections), helps me identify likely pain generators and develop appropriate treatment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                When should I seek evaluation?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you have persistent pain lasting more than a few weeks that limits your activities, a comprehensive evaluation can help identify what is causing it. This is especially true if you have normal imaging but ongoing symptoms. Do not wait assuming pain will resolve on its own, and do not assume normal imaging means treatment is impossible. A board-certified pain medicine specialist can help identify what is causing your pain and develop a treatment strategy tailored to your specific situation.
              </p>
            </div>

          </div>
        </section>

        {/* Physician Authority Box */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <div className="flex gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About Dr. Simon Dardashti, MD</h3>
              <p className="text-gray-700 mb-2">
                <strong>Board-Certified in Pain Medicine and Anesthesiology</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-3">
                <li>• UCLA Pain Medicine fellowship-trained</li>
                <li>• 10+ years specializing in spine, nerve, and musculoskeletal pain</li>
                <li>• Diagnosis-driven approach to treatment planning</li>
                <li>• Virtual consultations available for patients worldwide</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Next Steps */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Next Steps
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Pain is real even when imaging is normal. Diagnosis requires more than reviewing a scan. A comprehensive clinical evaluation can help identify likely pain generators and appropriate treatment options.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            If you have normal imaging but ongoing pain, I recommend scheduling a consultation. We can discuss your symptoms, perform a thorough evaluation, and develop a treatment plan tailored to your specific situation.
          </p>

          <div className="flex flex-col gap-4">
            <Link
              href="/virtual-consultations"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Schedule a Virtual Consultation
            </Link>
            <p className="text-sm text-gray-600">
              Virtual consultations allow us to discuss your condition, answer your questions, and determine the best evaluation and treatment approach for you.
            </p>
          </div>
        </section>

        {/* Related Content */}
        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Related Conditions and Treatments
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/conditions/low-back-pain" className="text-blue-600 hover:text-blue-800">Low Back Pain</Link></li>
            <li><Link href="/conditions/sciatica-radicular-pain" className="text-blue-600 hover:text-blue-800">Sciatica</Link></li>
            <li><Link href="/conditions/cervical-radiculopathy" className="text-blue-600 hover:text-blue-800">Cervical Radiculopathy</Link></li>
            <li><Link href="/procedures/epidural-steroid-injections" className="text-blue-600 hover:text-blue-800">Epidural Steroid Injection</Link></li>
            <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-blue-600 hover:text-blue-800">Medial Branch Block</Link></li>
            <li><Link href="/procedures/radiofrequency-ablation" className="text-blue-600 hover:text-blue-800">Radiofrequency Ablation</Link></li>
          </ul>
        </section>

      </article>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/pain-without-imaging" />
    </>
  )
}
