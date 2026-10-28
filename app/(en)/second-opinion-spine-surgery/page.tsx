import type { Metadata } from "next";
import Link from "next/link";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/second-opinion-spine-surgery";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Second Opinion Before Spine Surgery | Simon Dardashti, MD" },
  description:
    "Understanding when a second opinion before spine surgery is reasonable, what questions to ask surgeons, and how pain specialists evaluate surgical recommendations.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "When Should You Get a Second Opinion Before Spine Surgery?",
    description:
      "Learn when a second opinion is reasonable before spine surgery, what to ask your surgeon, and how to evaluate your surgical recommendation.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Opinion Before Spine Surgery | Simon Dardashti, MD",
    description:
      "Understanding surgical recommendations: when second opinions are reasonable and what questions to ask.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "When Should You Get a Second Opinion Before Spine Surgery?",
  url: PAGE_URL,
  headline: "When Should You Get a Second Opinion Before Spine Surgery?",
  description:
    "Comprehensive guide to understanding spine surgery recommendations, when second opinions are reasonable, and how to evaluate your treatment options.",
  image: "https://www.drdardashti.com/headshot.webp",
  datePublished: "2026-06-18",
  dateModified: "2026-10-13",
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
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When is it reasonable to get a second opinion before spine surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A second opinion can help clarify an elective surgical recommendation, expected benefits, risks, and alternatives. Ask the treating team whether it is safe to wait. Do not delay emergency assessment or time-sensitive treatment to obtain a routine second opinion.",
        },
      },
      {
        "@type": "Question",
        name: "When is spine surgery clearly necessary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Surgical decisions require an individual assessment of symptoms, examination, imaging, and expected benefits and risks. New bowel or bladder changes or numbness around the genitals or anus require emergency care. Progressive weakness needs prompt assessment. These symptoms require evaluation and do not by themselves establish the operation needed.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if conservative care has been tried adequately?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adequacy depends on the diagnosis, clinical course, functional goals, treatment delivered, response, and contraindications. Review these with your clinician. There is no universal minimum number of weeks or visits, and routine rehabilitation should not delay urgent assessment.",
        },
      },
      {
        "@type": "Question",
        name: "What questions should I ask a surgeon before agreeing to surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ask what diagnosis and findings support the recommendation, what the operation aims to change, what benefits and risks are relevant to you, what alternatives exist, and what happens if you wait. Ask how improvement is measured and what follow-up is available if symptoms persist. The discussion supports informed decision-making; it is not a test of the clinician character.",
        },
      },
      {
        "@type": "Question",
        name: "What imaging red flags suggest urgent surgical evaluation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Imaging must be interpreted with symptoms and examination. Suspected infection, unstable injury, or compression with new neurological symptoms may require urgent specialist assessment. New bowel or bladder changes or saddle numbness need emergency care; do not wait for an outpatient scan or second opinion. An imaging report alone does not determine the urgency or operation.",
        },
      },
      {
        "@type": "Question",
        name: "Can normal imaging make surgery unnecessary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A normal scan does not exclude pain or determine the treatment. The clinician considers the examination, the test limitations, and whether additional assessment is needed. This page cannot predict whether non-surgical care, injections, or surgery will be most effective.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between a pain specialist evaluation and a surgeon's perspective?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Surgeons and pain specialists have overlapping clinical responsibilities and can contribute different expertise. Both should consider the diagnosis, neurological findings, relevant imaging, alternatives, urgency, and patient goals. A pain consultation complements appropriate surgical assessment and should not delay urgent care.",
        },
      },
      {
        "@type": "Question",
        name: "What if I have legitimate surgical pathology but am still unsure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A structural finding does not by itself establish the timing of surgery. Discuss the diagnosis, disability, neurological findings, response to prior care, and risks of waiting with the treating team. Time-sensitive problems may need prompt treatment rather than a routine trial of further therapy.",
        },
      },
      {
        "@type": "Question",
        name: "How should I think about surgery success rates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ask for evidence relevant to the proposed procedure and your condition, how success is defined, what outcomes are measured, the follow-up period, and how applicable the results are to you. A general website percentage cannot predict your response.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if surgery doesn't solve the problem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Discuss the possibility of persistent symptoms or complications before surgery and ask what reassessment, rehabilitation, pain care, or further specialist review would be available. Additional treatment depends on the findings; revision surgery is not automatically the next step.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Second Opinion", item: PAGE_URL },
    ],
  },
};

export default function SecondOpinionSpineSurgery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
          When Should You Get a Second Opinion Before Spine Surgery?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
          Understanding surgical recommendations and how to evaluate your options
        </p>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Spine surgery is a significant decision with real risks and benefits. Getting a second opinion before surgery is not disrespectful to your surgeon—it's responsible medical decision-making. This guide explains when second opinions are reasonable, what questions to ask, and how to evaluate surgical recommendations.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            The goal is not to avoid surgery when it's truly needed. The goal is to ensure surgery addresses your specific problem, that conservative care has been fully explored when appropriate, and that you understand realistic expectations before committing to a major procedure.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            When Is a Second Opinion Reasonable?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            A second opinion is reasonable—and common—in several situations:
          </p>

          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>You feel uncertain.</strong> If something doesn't feel right or you're unsure about the recommendation, that feeling is worth exploring.</li>
              <li><strong>Symptoms or function are changing.</strong> Ask how the clinical course affects the recommendation and whether further assessment is needed.</li>
              <li><strong>Questions about prior care.</strong> Review whether further non-surgical treatment is suitable in your situation; it is not a mandatory step before urgent evaluation.</li>
              <li><strong>Imaging doesn't clearly match symptoms.</strong> If imaging shows pathology but it doesn't explain your symptoms, surgery may not address your actual problem.</li>
              <li><strong>You want to understand all options.</strong> This is reasonable. Period. No explanation needed.</li>
              <li><strong>Multiple surgeons have recommended different approaches.</strong> When recommendations conflict, exploring the reasoning is essential.</li>
              <li><strong>You're anxious about risks.</strong> Understanding realistic risks is necessary before agreeing to surgery.</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            You can ask the treating team to explain the recommendation, address your concerns, and help arrange another opinion when it is clinically safe. A response to a request alone does not establish clinical competence or the appropriateness of the proposed operation.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            When Is Surgery Clearly Necessary?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Some presentations need emergency or prompt specialist assessment; others allow an elective discussion. The examples below describe reasons to seek evaluation, not a checklist that proves surgery is required.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Emergency Surgical Conditions</h3>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Possible cauda equina syndrome:</strong> New bowel or bladder changes or numbness around the genitals or anus require emergency assessment. Do not wait for a routine appointment or second opinion.</li>
              <li><strong>Myelopathy with progressive deficits:</strong> Progressive weakness or loss of hand function from cervical spinal cord compression.</li>
              <li><strong>Suspected spinal infection:</strong> Fever with concerning back pain or new neurological symptoms needs urgent medical assessment. Specialist findings determine treatment; surgery is not assumed from this list.</li>
              <li><strong>Pathologic fracture or instability:</strong> Fractures from tumors or severe osteoporosis with neurologic compromise.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Elective but Clear Indications</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Persistent disabling symptoms:</strong> Symptoms despite appropriate non-surgical care may justify discussing surgery when the diagnosis and proposed treatment fit; there is no universal required treatment duration.</li>
              <li><strong>Clear correlation between imaging and symptoms:</strong> Imaging shows specific compression that matches your neurologic findings and pain pattern exactly.</li>
              <li><strong>Progressive neurologic deficits on exam:</strong> Not just pain—actual weakness, numbness progression, or loss of reflexes getting worse over time despite conservative care.</li>
              <li><strong>Severe stenosis causing significant functional limitation:</strong> Ability to walk very short distances due to leg pain/weakness with imaging showing critical narrowing.</li>
              <li><strong>Stable pathology but patient preference:</strong> Some patients with clear pathology prefer surgical resolution over ongoing conservative management. This is a reasonable choice if fully informed.</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Notice that "I have imaging showing disc herniation" or "imaging shows stenosis" alone does NOT appear in the list. Many people have imaging abnormalities without surgery-level symptoms. Surgery should address the structure actually causing your pain and disability.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Conservative Care: Has It Really Been Tried?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Review what non-surgical care was suitable, what was delivered, and how symptoms and function changed. This assessment should account for contraindications and urgency rather than a mandatory duration or sequence.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">What Adequate Conservative Care Includes</h3>

          <div className="bg-gray-50 p-6 mb-6 rounded-lg border border-gray-200">
            <ul className="space-y-4">
              <li>
                <strong>Specific physical therapy:</strong> Not generic exercises. Your PT should have a diagnosis-specific program (different for stenosis vs. disc herniation vs. facet pain) and should progress based on your response.
              </li>
              <li>
                <strong>Duration and frequency:</strong> Individualize the programme and reassessment according to diagnosis, response, tolerance, and urgency rather than a fixed number of weeks or visits.
              </li>
              <li>
                <strong>Activity modification:</strong> Understanding what positions/movements make symptoms worse and structuring your day accordingly.
              </li>
              <li>
                <strong>Anti-inflammatory management:</strong> When appropriate, short courses of NSAIDs or muscle relaxants to allow participation in therapy.
              </li>
              <li>
                <strong>Reassessment:</strong> Check-ins with your primary care doctor or pain specialist to verify progress and adjust approach.
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Review the actual care delivered.</strong> A short course does not automatically mean treatment was inadequate. Consider the programme, tolerance, response, barriers, and reasons for stopping or escalating care.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Response to non-surgical care varies. Imaging severity alone cannot predict recovery. Decisions about further care or surgery should consider the individual clinical course, disability, neurological findings, and risks of waiting.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Critical Questions to Ask Your Surgeon
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Before agreeing to spine surgery, ask these questions. A surgeon comfortable with direct answers to these is demonstrating good judgment:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">1. What specific structure is causing my pain?</p>
              <p className="text-gray-700">Don't accept vague answers. "Your disc is bulging" isn't enough. Which nerve is being compressed? How does this match your symptoms? A surgeon should be able to explain clearly why surgery on this specific area will help YOUR specific pain pattern.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">2. What will this surgery change physically?</p>
              <p className="text-gray-700">Understand the mechanics: Will it remove bone? Move bone? Fuse joints? Stabilize? The more specifically your surgeon can explain what changes and why it helps, the clearer the reasoning.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">3. What are realistic success rates for my specific diagnosis?</p>
              <p className="text-gray-700">Ask for procedure- and condition-specific outcome evidence and its limitations. Clarify whether the goal is reduced symptoms, improved function, protection of neurological function, or another outcome. Avoid applying a general success percentage to your own situation.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">4. What are the risks and complications?</p>
              <p className="text-gray-700">Infection, blood clots, nerve injury, failure to improve, new back pain, and others. Understanding the actual risks to YOU (not general population statistics) helps with informed consent.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">5. How does this compare to continuing conservative care?</p>
              <p className="text-gray-700">Ask what may happen with continued non-surgical care or observation, including benefits, risks, and uncertainty. Compare these with the proposed operation in your clinical situation rather than assuming one option has a higher general success rate.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">6. If surgery doesn't work, what's the plan?</p>
              <p className="text-gray-700">Ask about the possibility of persistent symptoms, complications, and the plan for reassessment and ongoing care. A general failure percentage cannot describe every diagnosis or operation.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">7. Why now rather than trying more conservative care?</p>
              <p className="text-gray-700">If you have emergency findings (cauda equina, progressive deficits), the answer is clear. If you have relative indications, the surgeon should explain why waiting isn't reasonable—or be willing to discuss whether waiting is an option.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">8. Can I get a second opinion?</p>
              <p className="text-gray-700">Ask how to obtain another opinion and whether any delay would be safe in your situation.</p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Red Flags in Surgical Recommendations
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Certain patterns suggest a recommendation warrants additional scrutiny:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Surgery recommended without adequate trial of conservative care.</strong> Conservative care deserves time first (except emergencies).</li>
            <li><strong>Unclear clinical and imaging relationship.</strong> Ask how the findings support the diagnosis; a short symptom description is not enough to establish or exclude a connection.</li>
            <li><strong>Unanswered questions.</strong> Request clarification about the diagnosis, proposed operation, risks, alternatives, and uncertainty.</li>
            <li><strong>Unclear urgency.</strong> Ask why a decision is time-sensitive and what the risks of waiting are. Do not postpone emergency evaluation to obtain a routine second opinion.</li>
            <li><strong>Multiple surgeons recommending different surgeries.</strong> When surgeon A recommends fusion and surgeon B recommends decompression, that's a clue the indication may be less clear-cut than first described.</li>
            <li><strong>Surgery recommended for pain alone without neurologic deficits.</strong> Pure pain (no weakness, numbness, or dysfunction) often responds well to conservative care.</li>
            <li><strong>Concerns remain unresolved.</strong> Ask for further discussion or another opinion when it is safe to do so.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            None of these automatically means "don't have surgery." They mean "this recommendation deserves additional scrutiny."
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How Imaging and Symptoms Must Correlate
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            One of the most important concepts: imaging findings should match your clinical symptoms. When they don't, surgery is less likely to help:
          </p>

          <p className="text-lg leading-relaxed text-gray-700">A clinician assesses the level and type of abnormality together with symptom distribution, neurological examination, and other possible explanations. Neither a simple side-by-side example nor an abnormal scan alone establishes the pain source or predicts surgical benefit. See <Link href="/pain-without-imaging" className="text-blue-600 underline">pain without imaging findings</Link> for the limitations of imaging.</p>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How Pain Specialists Evaluate Surgical Recommendations
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            A pain specialist looking at your surgical recommendation asks different questions than a surgeon. This isn't about disagreeing—it's about a different expertise lens:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4 mb-6">
            <div>
              <p className="font-semibold text-gray-900">1. Does imaging truly explain the symptoms?</p>
              <p className="text-gray-700">Sometimes what looks bad on imaging isn't the pain source. A pain specialist evaluates whether the correlation makes clinical sense.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">2. Has conservative care been truly optimized?</p>
              <p className="text-gray-700">Review which non-surgical options were appropriate and how you responded, while considering whether urgent surgical assessment is needed.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">3. Would targeted injections help before surgery?</p>
              <p className="text-gray-700">A diagnostic injection may contribute information about a suspected pain source, but response must be interpreted with technique and other findings. It does not by itself predict the success of an operation.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">4. Are there medical factors affecting outcome?</p>
              <p className="text-gray-700">The team may consider medication use, sleep, other medical conditions, and coping needs when planning care. These factors should be assessed individually rather than used as automatic reasons to delay necessary surgical assessment.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">5. Is the diagnosis clear and does surgery address it?</p>
              <p className="text-gray-700">This is the fundamental question. If diagnosis is unclear or surgery doesn't address the actual problem, other approaches may be better.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>A pain specialist's role isn't to prevent surgery.</strong> It's to ensure that IF surgery happens, it's based on solid reasoning and that all reasonable alternatives have been explored. Sometimes the recommendation is "yes, surgery makes sense and here's why." Sometimes it's "let's try this first" or "let's get more diagnostic clarity first."
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Want to understand your surgical recommendation better? <Link href="/virtual-consultations" className="text-blue-600 hover:text-blue-800 font-medium">Schedule a virtual consultation</Link> to discuss your specific situation and recommendation with a board-certified pain specialist.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Making Your Decision
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            After gathering information and second opinions, here's how to think about your decision:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">✓ Have you answered the critical questions?</p>
              <p className="text-gray-700">You should be able to clearly explain what structure is causing pain, why surgery on that structure helps, what success looks like, and what risks you're accepting.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">✓ Has conservative care been truly tried?</p>
              <p className="text-gray-700">Ask whether further non-surgical care is suitable and whether waiting carries neurological or other risks. Do not use a fixed waiting period to postpone necessary assessment.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">✓ Do imaging findings match your symptoms?</p>
              <p className="text-gray-700">If not, surgery is less predictable. More time for conservative care or diagnostic evaluation may be wise.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">✓ Is the surgery clearly necessary?</p>
              <p className="text-gray-700">Ask the treating team to explain the urgency and the potential risks of delaying treatment. Emergency symptoms require immediate evaluation.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">✓ Have you gotten second opinions?</p>
              <p className="text-gray-700">Another opinion may be useful when you have unanswered questions. Whether to obtain one, and from whom, depends on the clinical question and whether delay is safe.</p>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            After Your Decision
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Regardless of whether you choose surgery or conservative care, you deserve ongoing support:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>If you choose surgery:</strong> Follow pre-operative instructions carefully. Optimize your health before surgery (stop smoking, optimize weight, etc.). Understand the post-operative timeline and restrictions. Arrange support for recovery.</li>
            <li><strong>If you choose conservative care or postpone surgery:</strong> Commit fully to the recommended approach. Work with physical therapy seriously. Track improvement. Reassess at defined intervals. If not improving as expected, revisit surgical option.</li>
            <li><strong>Either way:</strong> Maintain communication with your surgical team if you postpone surgery. Continue medical optimization (managing other health conditions).</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mt-6">
            Pain management is often a long-term process. <Link href="/treatment-options" className="text-blue-600 hover:text-blue-800 font-medium">Understanding all treatment options—from conservative care through procedures to surgery—</Link> helps you navigate this journey successfully.
          </p>
        </section>

        {/* Authority Box */}
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
                <li>• Evaluation of surgical recommendations and conservative alternatives</li>
                <li>• Virtual consultations available for second opinion discussions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Discuss Your Surgical Recommendation
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            If you're considering spine surgery and want to discuss your recommendation with a pain specialist, we can help clarify your options and evaluate whether conservative care should be explored further or if surgery is clearly indicated.
          </p>

          <Link
            href="/virtual-consultations"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Schedule a Virtual Consultation
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Virtual consultations allow us to review your medical records, imaging, surgical recommendation, and discuss the best path forward for your specific situation.
          </p>
        </section>

        {/* Related Content */}
        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Related Resources
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800">Pain Without Imaging Findings</Link> — Understanding symptoms when imaging is normal</li>
            <li><Link href="/treatment-options" className="text-blue-600 hover:text-blue-800">Conservative Care vs Injections vs Surgery</Link> — Comprehensive treatment pathway overview</li>
            <li><Link href="/conditions/lumbar-radiculopathy" className="text-blue-600 hover:text-blue-800">Lumbar Radiculopathy Evaluation</Link> — Understanding radicular pain</li>
            <li><Link href="/conditions/cervical-radiculopathy" className="text-blue-600 hover:text-blue-800">Cervical Radiculopathy Evaluation</Link> — Understanding cervical nerve pain</li>
            <li><Link href="/procedures/epidural-steroid-injections" className="text-blue-600 hover:text-blue-800">Epidural Steroid Injections</Link> — Conservative procedure option</li>
            <li><Link href="/virtual-consultations" className="text-blue-600 hover:text-blue-800">Virtual Consultations</Link> — Get a second opinion</li>
          </ul>
        </section>
      <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2><div className="space-y-6">{pageSchema.mainEntity.mainEntity.map((item) => (<div key={item.name}><h3 className="text-xl font-semibold mb-2">{item.name}</h3><p className="text-gray-700">{item.acceptedAnswer.text}</p></div>))}</div></section><section className="max-w-5xl mx-auto px-6 py-12"><h2 className="text-2xl font-bold mb-4">Sources and scope</h2><ul className="list-disc pl-6 space-y-2"><li><a className="text-blue-600 underline" href="https://www.nice.org.uk/guidance/ng59/chapter/Recommendations">NICE NG59: Low back pain and sciatica in over 16s: assessment and management</a></li><li><a className="text-blue-600 underline" href="https://www.nhs.uk/conditions/back-pain/">NHS: Back pain</a></li><li><a className="text-blue-600 underline" href="https://www.nhs.uk/tests-and-treatments/having-surgery/specialist/">NHS: Seeing a specialist — Having an operation (surgery)</a></li></ul><p className="mt-4 text-gray-700">The cited NICE guideline concerns low back pain and sciatica, not every neck or back condition. This page cannot determine whether you need surgery or justify delaying urgent assessment.</p></section>
      </article>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/second-opinion-spine-surgery" />
    </>
  );
}
