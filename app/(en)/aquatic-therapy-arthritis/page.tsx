import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/aquatic-therapy-arthritis";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Aquatic Physical Therapy for Arthritis | Simon Dardashti, MD" },
  description:
    "Comprehensive guide to aquatic physical therapy for arthritis and joint pain. Learn how water-based exercise helps knee pain, hip pain, and chronic low back pain.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "aquatic physical therapy",
    "aquatic therapy for arthritis",
    "water therapy for knee pain",
    "pool therapy for arthritis",
    "aquatic therapy for hip osteoarthritis",
    "low impact exercise for arthritis",
  ],
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Aquatic Physical Therapy for Arthritis and Joint Pain",
    description:
      "Learn how water-based exercise can help manage arthritis, improve mobility, and reduce joint pain. Written by a board-certified pain medicine physician.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquatic Physical Therapy for Arthritis | Simon Dardashti, MD",
    description: "Comprehensive guide to water-based exercise for joint pain and arthritis.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "Aquatic Physical Therapy for Arthritis and Joint Pain",
  url: PAGE_URL,
  headline: "Aquatic Physical Therapy for Arthritis and Joint Pain: Benefits, Safety, and What to Expect",
  description:
    "Comprehensive guide to aquatic physical therapy for arthritis, joint pain, and low back pain written by a board-certified pain medicine physician.",
  image: "https://www.drdardashti.com/headshot.webp",
  datePublished: "2026-06-18",
  dateModified: "2026-10-13",
  author: {
    "@type": "Person",
    name: "Simon Dardashti, MD",
    title: "Board-Certified Pain Medicine Physician and Anesthesiologist",
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
            "name": "How long before I see improvement?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Response varies. Your therapist can adjust the activities and progression to your symptoms, function and treatment goals. A particular schedule does not guarantee pain relief or functional improvement."
            }
      },
      {
            "@type": "Question",
            "name": "Will I be in a group or one-on-one?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both options exist. Individual therapy allows personalization; group therapy provides social engagement and often lower cost. Ask what your facility offers and discuss which would work best for you."
            }
      },
      {
            "@type": "Question",
            "name": "What if I have had a joint replacement?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "After surgery, begin pool-based therapy only after your surgical team confirms that the incision has healed adequately and that immersion and the planned exercises are appropriate."
            }
      },
      {
            "@type": "Question",
            "name": "How much does it cost?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cost varies by location and facility. Many insurance plans cover physical therapy, including aquatic therapy. Some facilities offer sliding scale fees. Ask about costs and insurance coverage when contacting facilities."
            }
      },
      {
            "@type": "Question",
            "name": "Can I continue aquatic therapy long-term?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Some patients continue aquatic therapy indefinitely for maintenance and ongoing benefit. Others graduate to land-based exercise as their condition improves. Your therapist helps determine the right long-term plan for you."
            }
      },
      {
            "@type": "Question",
            "name": "Is aquatic therapy better than land-based therapy?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not necessarily \"better\"—different. Aquatic therapy is often better tolerated for patients with significant joint pain. Many patients benefit from combining both: aquatic therapy when pain is high, progressing to land-based therapy as tolerance improves. Your therapist can recommend what works best for your situation."
            }
      }
],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE_URL}/articles` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Aquatic Physical Therapy",
        item: PAGE_URL,
      },
    ],
  },
};

export default function AquaticTherapyArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Article Header */}
        <div className="mb-8 border-b pb-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">PATIENT EDUCATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Aquatic Physical Therapy for Arthritis and Joint Pain
          </h1>
          <p className="text-lg text-gray-600">
            Benefits, Safety, and What to Expect
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-600">
            <span>By Simon Dardashti, MD</span>
            <span>•</span>
            <span>June 18, 2026</span>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            If you have arthritis or chronic joint pain, you've probably heard that exercise helps. But traditional exercise can be painful—especially when your knees, hips, or back hurt. That's where aquatic physical therapy comes in.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Water-based exercise may offer another way to work on strength and movement when exercise on land is difficult. It does not guarantee pain relief, and the program should be individualized.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            This article explains how aquatic physical therapy works, who benefits most, what to expect, and how to determine if it's right for your situation.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What Is Aquatic Physical Therapy?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Aquatic physical therapy—sometimes called water therapy or pool therapy—is therapeutic exercise performed in water, typically with a licensed physical therapist supervising and guiding your movements.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            This isn't recreational swimming. Instead, it's a structured program of specific exercises designed to address your particular diagnosis and functional goals. Your therapist creates a plan targeting the muscles, joints, and movement patterns that need improvement.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">How Is It Different From Land-Based Physical Therapy?</h3>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The core difference: water provides both support and resistance. In water, your body weighs significantly less than on land. This reduces the stress on your joints while you move. At the same time, water provides gentle resistance—making muscles work harder than they would if gravity were doing all the work.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Many patients tolerate aquatic therapy better than land-based therapy when they have significant joint pain. That doesn't mean aquatic therapy is "easier"—it means it's often better tolerated while still being effective.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How Water Reduces Stress on Your Joints
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Understanding why water helps requires understanding weight and loading. Your joints are designed to handle loading—the forces placed on them during activity. But arthritis damages the protective cartilage, making loading painful.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Buoyancy and Unweighting</h3>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Buoyancy provides support during water-based exercise:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Buoyancy reduces weight-bearing load while you exercise. The amount of support depends on immersion depth and individual factors.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            This dramatic reduction in loading allows you to move with less pain. Your physical therapist can adjust water depth to provide just the right amount of support—enough that you can exercise comfortably, but enough resistance that your muscles still have to work.
          </p>

          {/* IMAGE: Aquatic Therapy Arthritis */}
          <div className="flex justify-center my-8">
            <MedicalFigure
              variant="default"
              role="anatomy"
              src="/images/conditions/aquatic-therapy-arthritis.png"
              alt="Educational illustration showing aquatic therapy for hip and knee arthritis with buoyancy reducing joint loading during low-impact movement."
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Water Resistance</h3>

          <p className="text-lg leading-relaxed text-gray-700">
            Water provides resistance in all directions. When you move in water, you're working against that resistance—similar to using a weight machine at a gym. Your therapist can increase resistance by changing movement speed, using water equipment like fins or noodles, or moving to deeper water where you're more fully buoyant.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Benefits for Specific Conditions
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Knee Osteoarthritis</h3>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Your knees bear significant weight. In water, that load decreases dramatically, allowing you to:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Practice knee movement within a comfortable range</li>
            <li>Strengthen the quadriceps and hip muscles that stabilize the knee</li>
            <li>Improve walking mechanics and gait patterns</li>
            <li>Practice balance and stability with appropriate supervision</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Aquatic exercise can be a useful option when exercising on land is difficult. Reviews report benefits for pain and physical function, with results generally comparable to land-based exercise. The choice of setting should reflect the patient’s condition, preferences and ability to participate.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Hip Osteoarthritis</h3>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Hip pain often limits walking and activity. In water, reduced hip loading allows you to:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Practice walking patterns without sharp hip pain</li>
            <li>Strengthen the gluteal muscles and hip stabilizers</li>
            <li>Improve hip flexibility and range of motion</li>
            <li>Build endurance for longer walks and activities</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Hip osteoarthritis may make exercise on land difficult. Aquatic exercise is one option to discuss with your clinician or therapist; the activities and duration should reflect your tolerance.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Chronic Low Back Pain</h3>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Back pain creates a paradox: you need to strengthen your core and back muscles, but exercise often makes pain worse. Water allows you to:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Perform strengthening exercises with less spinal loading</li>
            <li>Improve posture and movement patterns</li>
            <li>Build endurance in supportive core muscles</li>
            <li>Practice functional movements (reaching, lifting) with reduced pain</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            For chronic low back pain, aquatic therapy often allows patients to build the muscular support their spine needs without the pain flares that land-based exercise sometimes triggers.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Benefits for Older Adults and Balance Training
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            For older adults, a therapist may consider water-based activities as part of an individualized program:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Balance practice:</strong> Activities require appropriate supervision and safe entry and exit from the pool.</li>
            <li><strong>Strength building:</strong> Resistance training in water builds leg and core strength needed for balance</li>
            <li><strong>Confidence:</strong> Successfully performing exercises in water often improves confidence for land-based activities</li>
            <li><strong>Lower impact on joints:</strong> Older adults can exercise at adequate intensity without excessive joint stress</li>
            <li><strong>Social engagement:</strong> Many aquatic therapy classes include other participants, providing social connection</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            The studies cited below address pain and physical function. They do not establish that this program prevents falls. Discuss balance concerns and safety precautions with your clinician.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Aquatic Therapy Helps When Traditional Exercise Doesn't
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Many patients with significant arthritis cannot tolerate traditional land-based exercise. They try, experience pain, and stop. This creates a vicious cycle: weaker muscles lead to worse pain and more limitation.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Water-based exercise may help some patients participate in activities that are difficult on land. Symptoms can still flare, and your therapist should adjust the activities and progression to your response.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            This is particularly important for patients with:</p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Severe knee or hip osteoarthritis</li>
            <li>Obesity-related joint pain (extra weight increases joint loading)</li>
            <li>Post-surgical rehabilitation</li>
            <li>Generalized weakness or deconditioning</li>
            <li>Multiple joint pain</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Typical Aquatic Therapy Exercises
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Your specific exercises depend on your diagnosis and goals. However, common aquatic therapy exercises include:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Walking and Gait Training</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Walking in water with reduced loading, often with focus on proper posture and stride. Your therapist may have you walk at different speeds or patterns.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Resistance Exercises</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Movements that work specific muscle groups using water resistance. Examples include leg lifts, squats (partial squats, since full squats in deep water are difficult), and arm movements.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Balance and Stability Training</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Balance activities may be included when appropriate. Follow your therapist’s instructions and use the support and supervision needed for safety.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Range of Motion and Flexibility</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Gentle movements taking your joints through their full range of motion. Water supports joints, reducing pain.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cardiovascular Exercise</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Continuous movement—walking, jogging in place, or other aerobic activity—at sufficient intensity to provide cardiovascular benefit but with reduced joint stress.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Safety Considerations and Contraindications
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Aquatic therapy is generally safe, but some situations require caution or special consideration:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">When Aquatic Therapy Should Be Used Carefully</h3>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Recent surgical incisions:</strong> After surgery, begin pool-based therapy only after your surgical team confirms that the incision has healed adequately and that immersion and the planned exercises are appropriate.</li>
            <li><strong>Active infections or fever:</strong> Wait until resolved before beginning therapy</li>
            <li><strong>Uncontrolled heart conditions:</strong> Discuss with your cardiologist—some conditions allow aquatic therapy, others don't</li>
            <li><strong>Severe circulation problems:</strong> Cold water can affect circulation; discuss pool temperature with your therapist</li>
            <li><strong>Severe anxiety about water:</strong> Your therapist can help, but severe aquaphobia may limit benefit</li>
            <li><strong>Incontinence:</strong> This can create anxiety in a therapy setting; discuss with your therapist</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Water Temperature Matters</h3>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Pool temperature should suit your health and tolerance. Discuss comfort and precautions with your therapist before starting. Some people find warm water comfortable, but responses vary:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Promotes muscle relaxation and reduces pain</li>
            <li>Improves blood flow to tissues</li>
            <li>Makes movement feel easier</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Pool temperature affects comfort and tolerance. Discuss the appropriate setting and exercise intensity with your therapist.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What to Expect During Aquatic Physical Therapy
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">First Session</h3>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Your first session typically includes:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Assessment:</strong> Discussion of your pain, function, and goals</li>
            <li><strong>History:</strong> Questions about your medical history, previous injuries, and any concerns about water</li>
            <li><strong>Baseline testing:</strong> Simple assessments of strength, range of motion, and function</li>
            <li><strong>Introduction to the pool:</strong> Getting comfortable in the water; your therapist ensures you feel safe</li>
            <li><strong>Initial exercises:</strong> Simple movements to establish baseline and determine which exercises work best</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Typical Session</h3>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Session duration and activities depend on the individualized program. A session may include:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Warm-up:</strong> Gentle movement to warm muscles</li>
            <li><strong>Main exercise portion:</strong> Specific exercises targeting your goals</li>
            <li><strong>Cool-down:</strong> Gentle movement and flexibility work</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Your therapist will monitor your form, provide feedback, and adjust exercises based on your response.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Progression</h3>

          <p className="text-lg leading-relaxed text-gray-700">
            Over weeks, exercises become more challenging—more resistance, more complex movements, or progressing toward land-based exercises. Your therapist adjusts difficulty based on your pain, strength, and readiness.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How long before I see improvement?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Response varies. Your therapist can adjust the activities and progression to your symptoms, function and treatment goals. A particular schedule does not guarantee pain relief or functional improvement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Will I be in a group or one-on-one?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Both options exist. Individual therapy allows personalization; group therapy provides social engagement and often lower cost. Ask what your facility offers and discuss which would work best for you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                What if I have had a joint replacement?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                After surgery, begin pool-based therapy only after your surgical team confirms that the incision has healed adequately and that immersion and the planned exercises are appropriate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How much does it cost?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Cost varies by location and facility. Many insurance plans cover physical therapy, including aquatic therapy. Some facilities offer sliding scale fees. Ask about costs and insurance coverage when contacting facilities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Can I continue aquatic therapy long-term?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Yes. Some patients continue aquatic therapy indefinitely for maintenance and ongoing benefit. Others graduate to land-based exercise as their condition improves. Your therapist helps determine the right long-term plan for you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Is aquatic therapy better than land-based therapy?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Not necessarily "better"—different. Aquatic therapy is often better tolerated for patients with significant joint pain. Many patients benefit from combining both: aquatic therapy when pain is high, progressing to land-based therapy as tolerance improves. Your therapist can recommend what works best for your situation.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Key Takeaways
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li><strong>Aquatic therapy reduces joint loading</strong> while providing resistance training—allowing exercise when traditional activity is too painful.</li>
            <li><strong>Research supports potential benefits for pain and physical function.</strong> Suitability and response vary by patient.</li>
            <li><strong>Buoyancy reduces loading:</strong> The amount of support depends on immersion depth and individual factors.</li>
            <li><strong>Progression is individual:</strong> Your therapist adjusts the program to your symptoms, function and goals.</li>
            <li><strong>You don't need to be a swimmer.</strong> Most therapy occurs in shallow water where you can stand.</li>
            <li><strong>It often works best as part of a comprehensive plan,</strong> combining aquatic therapy with land-based exercise as tolerance improves.</li>
            <li><strong>Consult your physician before starting</strong> if you have heart condition, active infections, or recent surgery.</li>
          </ul>
        </section>

        {/* Medical Authority Box */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">About the Author</h3>
            <p className="text-gray-700 mb-2">
              <strong>Simon Dardashti, MD</strong> is a board-certified physician specializing in pain medicine and anesthesiology with a UCLA Pain Medicine fellowship. He has over 10 years of clinical experience helping patients with arthritis and chronic pain conditions develop effective treatment strategies.
            </p>
            <p className="text-gray-700">
              This article represents educational information and does not constitute medical advice. Consult your physician before starting aquatic therapy.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Related Conditions and Resources
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/conditions/low-back-pain" className="text-blue-600 hover:text-blue-800">Low Back Pain Evaluation</Link> — Understanding chronic back pain and treatment options</li>
            <li><Link href="/conditions/joint-pain" className="text-blue-600 hover:text-blue-800">Joint Pain Evaluation</Link> — Comprehensive guide to joint pain causes and management</li>
            <li><Link href="/treatment-options" className="text-blue-600 hover:text-blue-800">Conservative Care vs Injections vs Surgery</Link> — Understanding your treatment pathway</li>
            <li><Link href="/virtual-consultations" className="text-blue-600 hover:text-blue-800">Virtual Consultations</Link> — Discuss your condition with a pain specialist</li>
          </ul>
        </section>

        {/* References */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            References
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
            <li>Barker AL, Talevski J, Morello RT, et al. Effectiveness of aquatic exercise for musculoskeletal conditions: a meta-analysis. Arch Phys Med Rehabil. 2014;95(9):1776–1786. <a href="https://pubmed.ncbi.nlm.nih.gov/24769068/" className="text-blue-600 underline">doi:10.1016/j.apmr.2014.04.005</a></li>
            <li>Batterham SI, Heywood S, Keating JL. Systematic review and meta-analysis comparing land and aquatic exercise for people with hip or knee arthritis on function, mobility and other health outcomes. BMC Musculoskelet Disord. 2011;12:123. <a href="https://pubmed.ncbi.nlm.nih.gov/21635746/" className="text-blue-600 underline">doi:10.1186/1471-2474-12-123</a></li>
          </ol>
        </section>

        {/* Disclaimer */}
        <section className="mb-12 bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical Disclaimer</h3>
          <p className="text-sm text-gray-700">
            This article is provided for educational purposes only and should not be construed as medical advice, diagnosis, or treatment recommendation. It is not a substitute for professional medical consultation. Always consult with your physician or qualified healthcare provider before beginning any new treatment, exercise program, or physical therapy regimen, particularly if you have arthritis, joint pain, recent surgery, or other medical conditions. Individual results vary, and what works for one person may not work for another. Your healthcare provider can help determine whether aquatic physical therapy is appropriate for your specific situation.
          </p>
        </section>
      </article>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/aquatic-therapy-arthritis" />
    </>
  );
}
