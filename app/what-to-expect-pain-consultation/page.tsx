import type { Metadata } from "next";
import Link from "next/link";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/what-to-expect-pain-consultation";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "What to Expect During Your Pain Consultation | Simon Dardashti, MD" },
  description:
    "Understanding what to expect during your pain management consultation. Learn what to bring, what questions are asked, and how treatment decisions are made.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "What to Expect During Your Pain Consultation | Simon Dardashti, MD",
    description:
      "Patient education guide explaining the pain consultation process, evaluation methods, and how treatment plans are developed.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Expect During Your Pain Consultation | Simon Dardashti, MD",
    description: "Understanding the pain management evaluation process and what happens during your appointment.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "What to Expect During Your Pain Consultation | Simon Dardashti, MD",
  url: PAGE_URL,
  headline: "What to Expect During Your Pain Consultation",
  description:
    "Comprehensive guide to understanding your pain management consultation. Learn what to bring, how the evaluation is structured, common questions, physical examination, and how treatment decisions are made.",
  image: "https://www.drdardashti.com/headshot.webp",
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
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a pain consultation typically take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Initial consultations typically take 45-90 minutes. This allows adequate time for detailed history, physical examination, review of imaging and records, and thorough discussion of findings and treatment options. Subsequent visits are usually shorter (20-30 minutes) unless additional procedures or major changes are planned.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to bring anything to my consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Bring photo ID, insurance card, a list of current medications, records from other specialists (if available), and any imaging (MRI, CT, X-rays) or test results. If records are available electronically, bringing them on a USB drive or email them in advance so I can review them before your appointment.",
        },
      },
      {
        "@type": "Question",
        name: "Will you order new imaging?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. I will review any existing imaging carefully. New imaging is ordered only when specific clinical findings suggest it's needed. Many pain conditions are diagnosed and treated effectively without additional imaging. The goal is comprehensive evaluation of your actual symptoms, not just imaging findings.",
        },
      },
      {
        "@type": "Question",
        name: "What if my previous doctors couldn't find the cause of my pain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pain can originate from specific structures (joints, nerves, muscles) that may not show up on standard imaging or may not have been systematically evaluated. My approach is detailed history, thorough physical examination, and when appropriate, diagnostic injections to identify specific pain sources. Many patients previously labeled as having 'no clear cause' actually have identifiable sources.",
        },
      },
      {
        "@type": "Question",
        name: "Will you recommend surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Surgery is rarely my first recommendation. Most patients benefit from conservative management (physical therapy, medications, activity modification) or minimally invasive procedures. If structural imaging clearly shows a problem that would likely improve with surgery, I'll discuss that option along with all other choices. The decision is always yours.",
        },
      },
      {
        "@type": "Question",
        name: "What if I'm on pain medications from another doctor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I will review all your current medications carefully. I don't necessarily change medications immediately. My focus is identifying the source of your pain so we can target treatment appropriately. Any medication adjustments will be discussed with you and coordinated with your primary doctor.",
        },
      },
      {
        "@type": "Question",
        name: "Will the physical exam be uncomfortable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The physical examination includes feeling the area where you have pain, testing range of motion, checking reflexes, and assessing nerve function. I understand you have pain and will be as gentle as possible. Some movements or palpation might reproduce your pain slightly—this is actually helpful diagnostically. Let me know if anything feels intolerable.",
        },
      },
      {
        "@type": "Question",
        name: "How do you decide what treatment to recommend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Treatment decisions are based on: your detailed pain history, physical examination findings, imaging correlation, your goals and preferences, what treatments have already been tried, and what evidence supports. I explain the reasoning behind each recommendation so you understand the logic. You always have input into the decision.",
        },
      },
      {
        "@type": "Question",
        name: "What if I want a second opinion about a recommendation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Second opinions are always appropriate. Healthcare is best when patients feel confident in their treatment plan. I encourage you to discuss concerns, ask questions, and seek additional opinions if you're uncertain. Good recommendations can withstand scrutiny.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "What to Expect", item: PAGE_URL },
    ],
  },
};

export default function WhatToExpectPainConsultationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          What to Expect During Your Pain Consultation
        </h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Seeing a pain specialist can feel uncertain if you're not sure what to expect. You might wonder: Will I need new tests? Will I be pressured into procedures? Will my concerns be heard? Will this actually help?
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            This page walks you through a typical pain consultation so you know what to expect, what to prepare, and how treatment decisions are made. My goal is to provide thorough evaluation and clear explanation so you can make informed decisions about your care.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Whether you're seeing me for an initial consultation or a follow-up, understanding the process can help you get the most out of your visit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why a Comprehensive Evaluation Matters
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Many patients have seen multiple doctors before coming to a pain specialist. Sometimes imaging shows something but doesn't explain the pain. Sometimes imaging looks normal despite significant symptoms. This confusion is common—and a detailed, systematic evaluation helps clarify what's actually happening.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            A comprehensive evaluation considers three things:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
            <li><strong>Your story:</strong> When did the pain start? What makes it better or worse? How much does it affect your function? This history is often more important than any test.</li>
            <li><strong>Physical findings:</strong> How your body moves, where it's tender, what reproduces your pain. These findings help identify specific pain sources.</li>
            <li><strong>Imaging correlation:</strong> If imaging exists, does it match your symptoms? Many times it does, but sometimes imaging findings don't explain what you're experiencing. Both possibilities provide useful information.</li>
          </ol>

          <p className="text-lg leading-relaxed text-gray-700">
            This comprehensive approach helps identify what's actually causing your pain so treatment can be targeted accurately.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What Records to Bring
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Please bring or provide in advance:</strong>
          </p>

          <div className="space-y-3 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Photo ID and insurance card</strong> — Standard for any medical visit</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>List of all current medications</strong> — Include doses and how often you take them. If you have the bottle, bring it.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Imaging (MRI, CT, X-rays)</strong> — If you have the actual images on CD or digital files, bring them. This is much more helpful than just a radiology report.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Previous medical records</strong> — Surgical reports, ER notes, prior specialist evaluations. Even if they seem unrelated, they provide context.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Test results</strong> — Bloodwork, nerve conduction studies, EMG, or other tests you've had done</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>List of questions</strong> — Jot down what you want to discuss so you don't forget during the appointment</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Pro tip:</strong> If records are available electronically, email them before your appointment. This allows me to review them in advance and use appointment time more efficiently.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What Questions I Commonly Ask
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            A detailed history is essential for pain evaluation. Expect me to ask:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About Your Pain History</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>When did this pain start? Was there an injury or did it develop gradually?</li>
                <li>Where is the pain? Does it stay in one place or move around?</li>
                <li>What does it feel like? (sharp, dull, burning, throbbing, etc.)</li>
                <li>How bad is it on a scale of 0-10?</li>
                <li>Is it constant or does it come and go?</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About What Makes It Better or Worse</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>What positions or activities make pain better?</li>
                <li>What positions or activities make pain worse?</li>
                <li>How does weather affect it?</li>
                <li>How does stress affect it?</li>
                <li>Does medication help? By how much?</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About Impact on Your Life</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>How much does pain affect your work, hobbies, sleep?</li>
                <li>Can you exercise or do physical therapy?</li>
                <li>Have you had to stop activities you enjoy?</li>
                <li>What is your main goal for treatment?</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About Previous Treatment</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>What treatments have you already tried?</li>
                <li>What helped and for how long?</li>
                <li>What didn't work?</li>
                <li>Have you had procedures? How did they go?</li>
              </ul>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            This might feel like a lot of questions, but detailed answers help me understand your unique situation. Pain rarely has a one-size-fits-all solution.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Physical Examination: What to Expect
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            After taking your history, I'll perform a targeted physical examination. Here's what this typically includes:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Inspection and Palpation</h3>
              <p className="text-gray-700">
                Looking at the area where you have pain and gently feeling the structures (muscles, joints, nerves) to identify tenderness, swelling, or abnormalities. This might reproduce your pain slightly—that's actually helpful diagnostically.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Range of Motion Testing</h3>
              <p className="text-gray-700">
                Having you move your neck, back, joints, or extremities to assess flexibility and identify movements that trigger pain. I'll note which movements hurt and which don't.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Strength Testing</h3>
              <p className="text-gray-700">
                Asking you to resist against my hand as I test strength in various muscle groups. This helps identify nerve involvement and severity of nerve irritation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Reflex Testing</h3>
              <p className="text-gray-700">
                Checking reflexes with a small hammer. Abnormal reflexes can indicate nerve involvement at specific spinal levels.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sensory Testing</h3>
              <p className="text-gray-700">
                Gently checking sensation to light touch or pin prick in areas of suspected nerve involvement to assess nerve function.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialized Tests</h3>
              <p className="text-gray-700">
                Depending on your problem, I may use specific tests designed to identify particular pain sources (for example, tests for nerve root irritation or facet joint involvement).
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            I understand you have pain and will be as gentle as possible. Let me know if anything feels intolerable or if you need a break.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Imaging Is Only Part of the Story
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            During the evaluation, I'll review any existing imaging carefully. Here's what's important to understand:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Imaging findings don't always match symptoms:</strong> Many people have significant imaging abnormalities but no pain. Conversely, significant pain can exist without obvious imaging findings.</li>
            <li><strong>I interpret imaging in context:</strong> A finding is only relevant if it correlates with your actual pain location and pattern.</li>
            <li><strong>New imaging may or may not be needed:</strong> I order new imaging only if clinical findings suggest it will change treatment decisions. Imaging for its own sake doesn't help.</li>
            <li><strong><Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800">Pain can exist without clear imaging findings:</Link></strong> This is common and doesn't mean your pain isn't real or that it can't be treated.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            My evaluation is comprehensive—your history and physical exam findings are often more important than imaging alone.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How Treatment Decisions Are Made
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            At the end of the consultation, I'll discuss my findings and treatment recommendations. This discussion includes:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. My Assessment</h3>
              <p className="text-gray-700">What I think is causing your pain, based on history, examination, and imaging correlation.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Treatment Options</h3>
              <p className="text-gray-700">What approaches might help, ranked by what evidence supports and what's most conservative first.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. My Recommendation</h3>
              <p className="text-gray-700">What I recommend based on your situation, explaining the reasoning so you understand why.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Your Input</h3>
              <p className="text-gray-700">Your preferences, goals, and any concerns matter. This is collaborative, not dictated.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Next Steps</h3>
              <p className="text-gray-700">Clear plan for what happens next—whether starting conservative treatment, scheduling procedures, or follow-up appointments.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            You should leave the consultation with a clear understanding of what I found, why I'm recommending what I recommend, and what the plan is.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Common Recommendations After Evaluation
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Depending on my findings and your situation, recommendations often include some combination of:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Therapy</h3>
              <p className="text-gray-700">
                Specialized therapy addressing the specific problem (weakness, stiffness, muscle imbalance). Often the first-line treatment and often the most important part of your care.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Medications</h3>
              <p className="text-gray-700">
                Anti-inflammatory medications, muscle relaxants, neuropathic pain medications, or others depending on pain type. Coordinated with your primary doctor.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Activity Modification</h3>
              <p className="text-gray-700">
                Specific guidance on what activities to avoid, what to emphasize, posture correction, ergonomic changes—practical strategies you can implement immediately.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Diagnostic Injections</h3>
              <p className="text-gray-700">
                Strategic injections to specific pain sources to identify what's causing pain and sometimes provide relief while other treatments take effect.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Procedural Interventions</h3>
              <p className="text-gray-700">
                <Link href="/treatment-options" className="text-blue-600 hover:text-blue-800">Procedures like radiofrequency ablation, nerve blocks, or other interventions</Link> targeted at specific pain sources identified during evaluation.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Surgical Referral When Appropriate</h3>
              <p className="text-gray-700">
                If imaging shows a surgically correctable problem that conservative and procedural options haven't adequately addressed, I'll refer to the appropriate surgeon. Surgery is rarely my first recommendation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">About Simon Dardashti, MD</h3>
          <p className="text-gray-700 mb-2">
            <strong>Board-Certified Pain Medicine Physician</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>• Specialized training in Pain Medicine from UCLA</li>
            <li>• 10+ years diagnosing and treating pain conditions</li>
            <li>• Comprehensive, patient-centered evaluation approach</li>
            <li>• Focus on identifying specific pain sources for targeted treatment</li>
            <li>• Virtual and in-person consultations available</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Virtual Consultation Expectations
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Many consultations are conducted virtually via video conference. Here's what to expect:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Quiet, private space:</strong> Find a location where you can speak freely without distractions</li>
            <li><strong>Good lighting and camera angle:</strong> Position yourself so I can see your face clearly and communicate effectively</li>
            <li><strong>Have records available:</strong> Keep your medical records, medications list, and any imaging accessible during the call</li>
            <li><strong>Same thorough evaluation:</strong> Virtual consultations include detailed history and questioning. Physical exam is limited (I can observe posture, movement, but not palpate)</li>
            <li><strong>Technical requirements:</strong> Stable internet connection and a device (computer, tablet, or phone) with camera and audio</li>
            <li><strong>Time management:</strong> Allow the full time block—don't schedule other appointments immediately after</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Virtual consultations are thorough and effective for initial evaluation and follow-up. Some procedures require in-person visits, which would be discussed during your consultation.
          </p>
        </section>

        <section className="mb-12 border-t pt-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if you don't find anything causing my pain?
              </h3>
              <p className="text-gray-700">
                Even if imaging and examination don't reveal an obvious structural problem, pain is real and can be treated. We can use diagnostic injections to identify pain sources not visible on imaging, modify activity to reduce symptoms, optimize medications, and explore other treatment options.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if I disagree with your recommendation?
              </h3>
              <p className="text-gray-700">
                Disagreement is fine. Healthcare works best when you feel confident in your treatment plan. Let's discuss your concerns. I'm happy to explain the reasoning further or explore alternative options. Second opinions are always appropriate if you're uncertain.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Will you coordinate with my primary doctor?
              </h3>
              <p className="text-gray-700">
                Yes. I send detailed consultation notes to your primary care physician and any other specialists involved in your care. Any medication recommendations are coordinated with your primary doctor.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How often would I need follow-up visits?
              </h3>
              <p className="text-gray-700">
                That depends on your situation and the treatment plan. Some patients need follow-ups after 4-6 weeks to monitor progress. Others need appointments before procedures. We'll discuss the appropriate schedule during your consultation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you treat pain related to cancer or terminal illness?
              </h3>
              <p className="text-gray-700">
                Yes. Palliative pain management is an important part of my practice. Whether the pain is related to cancer, its treatment, or another serious condition, comprehensive evaluation and targeted treatment are appropriate.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What should I do to prepare for my consultation?
              </h3>
              <p className="text-gray-700">
                Gather the materials listed earlier (ID, insurance, medications list, imaging, records). Write down your main questions. Wear comfortable clothing that allows access to the area where you have pain. Arrive on time. And come with an open mind—thorough evaluation takes time.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is the first consultation confidential?
              </h3>
              <p className="text-gray-700">
                Absolutely. Your medical information is protected by privacy laws. I don't share information with others without your authorization, except as required for insurance claims or as mandated by law. Ask me if you have specific privacy concerns.
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
            <li><Link href="/treatment-options" className="text-blue-600 hover:text-blue-800">Treatment Options Overview</Link> — All approaches to pain management</li>
            <li><Link href="/second-opinion-spine-surgery" className="text-blue-600 hover:text-blue-800">Second Opinion Before Spine Surgery</Link> — When surgical consultation makes sense</li>
            <li><Link href="/conditions/low-back-pain" className="text-blue-600 hover:text-blue-800">Low Back Pain</Link> — Common condition evaluation</li>
            <li><Link href="/conditions/neck-pain" className="text-blue-600 hover:text-blue-800">Neck Pain</Link> — Cervical pain evaluation</li>
            <li><Link href="/conditions/lumbar-spinal-stenosis" className="text-blue-600 hover:text-blue-800">Lumbar Spinal Stenosis</Link> — Common diagnosis</li>
            <li><Link href="/virtual-consultations" className="text-blue-600 hover:text-blue-800">Virtual Consultations</Link> — Schedule your appointment</li>
          </ul>
        </section>

        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Schedule Your Pain Consultation
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Understanding what to expect can help you prepare mentally and practically for your consultation. I'm committed to thorough evaluation, clear communication, and collaborative treatment planning. Your concerns matter, and your input into decisions about your care is essential.
          </p>

          <Link
            href="/virtual-consultations"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Schedule a Virtual Consultation
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Initial consultations can be conducted via video conference. All necessary information will be collected to ensure a comprehensive evaluation.
          </p>
        </section>

        <section className="mt-12 pt-8 border-t text-sm text-gray-600">
          <p>
            <strong>Note:</strong> This page provides general information about the consultation process. Individual consultations may vary based on your specific situation and needs. All patients receive personalized evaluation appropriate to their condition.
          </p>
        </section>
      </article>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/what-to-expect-pain-consultation" />
    </>
  );
}
