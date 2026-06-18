import type { Metadata } from "next";
import Link from "next/link";

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
  image: "https://drdardashti.com/og-images/second-opinion-spine-surgery.jpg",
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
          text: "A second opinion is reasonable whenever you feel uncertain about a surgical recommendation. This is especially true if: symptoms have been present less than 3-6 months, you haven't tried conservative care adequately, imaging findings seem inconsistent with your symptoms, you have questions about the recommended procedure, or you simply want additional perspective before a major decision. Surgeons generally understand and respect that patients seek second opinions.",
        },
      },
      {
        "@type": "Question",
        name: "When is spine surgery clearly necessary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spine surgery becomes clearly necessary in specific situations: progressive neurologic deficits (worsening weakness, numbness, or loss of bowel/bladder control), cauda equina syndrome (emergency requiring urgent decompression), severe compression causing significant disability despite appropriate conservative care, or spinal instability threatening neurologic injury. These situations require urgent or elective surgical evaluation. Most other cases allow time for conservative management or second opinions.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if conservative care has been tried adequately?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adequate conservative care typically includes 6-12 weeks of structured physical therapy focused on your specific diagnosis, activity modification appropriate to your symptoms, and sometimes anti-inflammatory medications when clinically appropriate. Your physical therapist should have performed initial assessment, designed a specific program for your diagnosis (not generic exercises), and adjusted the program based on your response. If you've tried less than this or therapy was unfocused, conservative care may not have been given a fair trial yet.",
        },
      },
      {
        "@type": "Question",
        name: "What questions should I ask a surgeon before agreeing to surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key questions include: 'What specific structure is causing my pain and how does it match my symptoms?' 'What will this surgery change physically?' 'What are realistic success rates for my specific diagnosis?' 'What are the risks and potential complications?' 'How does this compare to continued conservative care?' 'If surgery doesn't work, what are the options?' 'Why now rather than trying more conservative care first?' A surgeon comfortable with these questions is demonstrating good judgment.",
        },
      },
      {
        "@type": "Question",
        name: "What imaging red flags suggest urgent surgical evaluation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Urgent imaging findings include: cauda equina syndrome (compression of multiple nerve roots in lumbar spine), severe central canal stenosis causing significant leg pain and claudication, progressive neurologic deficits on imaging and exam, spinal instability, or epidural abscess/infection. These findings warrant prompt surgical evaluation. Many other imaging abnormalities (disc herniations, stenosis, degenerative changes) can often be managed conservatively first if neurologic function is intact.",
        },
      },
      {
        "@type": "Question",
        name: "Can normal imaging make surgery unnecessary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Normal imaging doesn't automatically make surgery unnecessary if clinical findings clearly point to a specific problem. However, it suggests that whatever is causing pain is not a large structural abnormality requiring decompression. This often means conservative care is more likely to succeed, or if procedures are considered, injections targeting the specific tissue may be more effective than surgery. The correlation between imaging findings and symptoms is critical—surgery should address the structure actually causing pain.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between a pain specialist evaluation and a surgeon's perspective?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Surgeons excel at identifying surgical pathology and performing technically sound operations. Pain specialists are trained to evaluate the entire clinical picture—whether imaging findings correlate with symptoms, whether conservative care has been truly optimized, whether targeted injections might address the problem, and whether surgery addresses the actual pain generator. Both perspectives are valuable. A pain specialist's opinion doesn't mean 'don't have surgery'—it means 'let's ensure surgery addresses your specific problem and conservative care has been fully explored.'",
        },
      },
      {
        "@type": "Question",
        name: "What if I have legitimate surgical pathology but am still unsure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Legitimate surgical pathology (like a large herniated disc compressing a nerve root) doesn't mean surgery must happen immediately. Most patients with even significant pathology improve with 2-3 months of appropriate conservative care. The exception is progressive neurologic deficits or emergency situations. Having clear pathology plus significant disability despite conservative care strengthens the surgical recommendation. Having pathology but minimal disability or recent symptom onset suggests more time for conservative management is reasonable.",
        },
      },
      {
        "@type": "Question",
        name: "How should I think about surgery success rates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Success rates vary significantly based on condition, surgical technique, and how 'success' is defined. Ask specifically: 'What percentage of patients with my diagnosis have meaningful symptom relief?' 'How is success defined—50% pain reduction, return to work, elimination of pain?' 'What's the timeline for feeling better?' Successful spine surgery often provides 70-80% improvement in radicular pain for the right patients with clear surgical pathology. Success rates are lower for general back pain without clear nerve compression. Comparing outcomes across different diagnostic categories is misleading.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if surgery doesn't solve the problem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This important question should be discussed before surgery. The reality is that 10-20% of patients have inadequate relief or develop new problems after spine surgery. Understand your surgeon's options if this happens—revision surgery, pain management support, or other approaches. Some surgeons are better at discussing this realistic possibility than others. A surgeon who acknowledges this risk and has a plan for ongoing care is demonstrating good judgment.",
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
              <li><strong>Symptoms are relatively recent.</strong> If pain started within 3-6 months, conservative care may not have been given enough time.</li>
              <li><strong>You haven't tried robust conservative care.</strong> If physical therapy was brief, unfocused, or didn't address your specific diagnosis, conservative care deserves another attempt.</li>
              <li><strong>Imaging doesn't clearly match symptoms.</strong> If imaging shows pathology but it doesn't explain your symptoms, surgery may not address your actual problem.</li>
              <li><strong>You want to understand all options.</strong> This is reasonable. Period. No explanation needed.</li>
              <li><strong>Multiple surgeons have recommended different approaches.</strong> When recommendations conflict, exploring the reasoning is essential.</li>
              <li><strong>You're anxious about risks.</strong> Understanding realistic risks is necessary before agreeing to surgery.</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            This is normal. Most experienced surgeons understand that patients seek second opinions and respect it. A surgeon who becomes defensive about a second opinion request is demonstrating poor judgment.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            When Is Surgery Clearly Necessary?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Certain situations require urgent or elective surgical evaluation. Understanding these helps distinguish between "surgery is an option" and "surgery is clearly needed":
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Emergency Surgical Conditions</h3>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Cauda equina syndrome:</strong> Progressive loss of bowel/bladder control, bilateral leg pain, progressive leg weakness, or saddle anesthesia. This is a surgical emergency.</li>
              <li><strong>Myelopathy with progressive deficits:</strong> Progressive weakness or loss of hand function from cervical spinal cord compression.</li>
              <li><strong>Epidural infection or abscess:</strong> Fever, progressive neurologic deficits, and imaging showing infection requires urgent decompression.</li>
              <li><strong>Pathologic fracture or instability:</strong> Fractures from tumors or severe osteoporosis with neurologic compromise.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Elective but Clear Indications</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Significant disability despite appropriate conservative care:</strong> 3+ months of robust physical therapy, activity modification, and appropriate medication management without adequate improvement.</li>
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
            One of the most important questions is whether conservative care has been truly optimized. This isn't about suffering needlessly—it's about giving the most likely effective option time to work:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">What Adequate Conservative Care Includes</h3>

          <div className="bg-gray-50 p-6 mb-6 rounded-lg border border-gray-200">
            <ul className="space-y-4">
              <li>
                <strong>Specific physical therapy:</strong> Not generic exercises. Your PT should have a diagnosis-specific program (different for stenosis vs. disc herniation vs. facet pain) and should progress based on your response.
              </li>
              <li>
                <strong>Duration:</strong> Minimum 6 weeks, ideally 8-12 weeks of structured therapy attending 2-3x per week.
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
            <strong>Short-term or generic "physical therapy" doesn't count.</strong> A few sessions of general exercises won't reveal whether a diagnosis-specific program works. Similarly, if you were told "nothing can help your pain" without a structured trial of appropriate therapy, conservative care hasn't been fairly evaluated.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Here's the key: <strong>Most patients with even significant imaging pathology improve with structured conservative care.</strong> This doesn't mean surgical pathology doesn't exist—it means your body often can adapt and compensate. Surgery should be considered after truly adequate conservative care hasn't provided relief.
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
              <p className="text-gray-700">Not general statistics. For someone like you, with your exact condition, how many patients have meaningful improvement? What does "meaningful" mean? Success rates vary dramatically—radicular pain from clear nerve compression might have 75-85% success, while surgery for general low back pain is closer to 50-60%.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">4. What are the risks and complications?</p>
              <p className="text-gray-700">Infection, blood clots, nerve injury, failure to improve, new back pain, and others. Understanding the actual risks to YOU (not general population statistics) helps with informed consent.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">5. How does this compare to continuing conservative care?</p>
              <p className="text-gray-700">What happens if you DON'T have surgery? Conservative care alone has success rates too—often better than surgery for certain diagnoses. Surgery should provide clear advantage for your situation.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">6. If surgery doesn't work, what's the plan?</p>
              <p className="text-gray-700">10-20% of spine surgeries don't provide adequate relief. Understanding revision options, pain management support, and your surgeon's follow-up plan is important. A surgeon with a clear answer to this is prepared for reality.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">7. Why now rather than trying more conservative care?</p>
              <p className="text-gray-700">If you have emergency findings (cauda equina, progressive deficits), the answer is clear. If you have relative indications, the surgeon should explain why waiting isn't reasonable—or be willing to discuss whether waiting is an option.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">8. Can I get a second opinion?</p>
              <p className="text-gray-700">A surgeon who encourages this is demonstrating confidence and good judgment. Defensiveness is a red flag.</p>
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
            <li><strong>Imaging findings don't match your symptoms.</strong> Example: "You have stenosis" but you have one-sided leg pain and stenosis is central.</li>
            <li><strong>Surgeon can't clearly explain what you have or why surgery helps.</strong> Vague explanations suggest unclear thinking.</li>
            <li><strong>Pressure to decide quickly.</strong> Legitimate surgical problems aren't fixed by rushing. Take time to think and get second opinions.</li>
            <li><strong>Multiple surgeons recommending different surgeries.</strong> When surgeon A recommends fusion and surgeon B recommends decompression, that's a clue the indication may be less clear-cut than first described.</li>
            <li><strong>Surgery recommended for pain alone without neurologic deficits.</strong> Pure pain (no weakness, numbness, or dysfunction) often responds well to conservative care.</li>
            <li><strong>Dismissal of your concerns.</strong> A surgeon who doesn't listen or respect your hesitation is not demonstrating good judgment.</li>
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

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Imaging Findings That Match Symptoms</h3>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li>Right-sided disc herniation + right leg pain with L5 nerve distribution = Good correlation</li>
              <li>Cervical stenosis at C5-C6 + hand weakness in C6 distribution = Good correlation</li>
              <li>Central stenosis + bilateral leg claudication (pain with walking) = Good correlation</li>
            </ul>
            <p className="text-sm mt-4 font-semibold">Surgery is more likely to help here.</p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Imaging Findings That DON'T Match Symptoms</h3>
          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li>Right-sided disc bulge + bilateral leg pain = Poor correlation</li>
              <li>Stenosis at L4-L5 + pure lower back pain (no leg pain) = Poor correlation</li>
              <li>Normal MRI + severe leg pain = No structural correlation</li>
            </ul>
            <p className="text-sm mt-4 font-semibold">Surgery for these is less likely to solve the pain. A pain specialist evaluation may be helpful.</p>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Key insight:</strong> Many people have imaging abnormalities that don't cause their pain. Surgery to fix an imaging finding that isn't actually causing pain won't help. This is why <Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800 font-medium">understanding normal imaging with real pain</Link> matters—imaging is one piece of the puzzle, not the whole answer.
          </p>
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
              <p className="text-gray-700">Before recommending second opinion surgery, a pain specialist ensures you've had best-possible conservative approach specific to your diagnosis.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">3. Would targeted injections help before surgery?</p>
              <p className="text-gray-700">Sometimes diagnostic injections can clarify whether a structure is actually causing pain. If an injection targeting that structure helps, surgery becomes more predictable.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">4. Are there medical factors affecting outcome?</p>
              <p className="text-gray-700">Psychological factors, medication overuse, sleep issues, and other factors can reduce surgical success. A pain specialist addresses these first.</p>
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
              <p className="text-gray-700">If you could have 2-3 more months of structured, specific therapy—or haven't tried it yet—that's worth doing first.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">✓ Do imaging findings match your symptoms?</p>
              <p className="text-gray-700">If not, surgery is less predictable. More time for conservative care or diagnostic evaluation may be wise.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">✓ Is the surgery clearly necessary?</p>
              <p className="text-gray-700">Emergency situations are clear. Elective surgery should feel like the right next step, not rushed or uncertain.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">✓ Have you gotten second opinions?</p>
              <p className="text-gray-700">At minimum for elective surgery. Ideally from both another surgeon AND a pain specialist to get different expertise perspectives.</p>
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
      </article>
    </>
  );
}
