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
  image: "https://drdardashti.com/og-images/aquatic-therapy-arthritis.jpg",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
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
        name: "Is aquatic therapy effective for arthritis pain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Research shows that aquatic therapy significantly reduces pain and improves function in patients with knee osteoarthritis, hip osteoarthritis, and chronic low back pain. Water's buoyancy reduces stress on joints while allowing muscle strengthening and improved movement patterns. Many patients experience benefits comparable to traditional physical therapy, with the added advantage of lower impact on joints.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I do aquatic physical therapy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The typical recommendation is 2–3 sessions per week for 6–12 weeks, though this varies based on your specific diagnosis and response to treatment. Your physical therapist will design a program specific to your needs and goals. Consistency matters more than intensity—regular sessions over time tend to produce better results than occasional intensive sessions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I do aquatic therapy if I'm not a strong swimmer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. You do not need to be able to swim. Aquatic therapy typically takes place in shallow water (chest-deep or waist-deep) where you can stand or hold onto the pool edge. Many exercises are done standing in water, not swimming. Tell your therapist about any water comfort concerns—they can modify exercises and provide support as needed.",
        },
      },
      {
        "@type": "Question",
        name: "Is aquatic therapy safe for older adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it is generally very safe for older adults. In fact, aquatic therapy is excellent for older adults because it provides resistance training and balance practice in a low-impact environment with reduced fall risk. Water's buoyancy helps reduce fall force, and therapists can provide hands-on support as needed. Older adults often benefit greatly from improved strength, balance, and confidence in water.",
        },
      },
      {
        "@type": "Question",
        name: "What if I have a joint replacement? Can I do aquatic therapy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often yes, but timing matters. You typically need clearance from your orthopedic surgeon. Most surgeons recommend waiting until surgical incisions are fully healed and you've had initial rehabilitation. After clearance, aquatic therapy can be excellent for post-surgical rehabilitation—the water provides gentle resistance while supporting healing structures and building strength.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a waterproof cast or brace for aquatic therapy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your specific situation. If you wear a brace for support during land-based activities, you may not need it in water because water provides support. However, some patients benefit from water-safe braces that provide additional support and confidence. Your physical therapist will advise based on your needs and treatment plan.",
        },
      },
      {
        "@type": "Question",
        name: "Can aquatic therapy help with weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Water-based exercise does burn calories and can be part of a weight management program, but it's generally lower intensity than land-based exercise due to water's buoyancy reducing impact forces. The real value for overweight patients with joint pain is that aquatic therapy allows them to exercise and build strength while protecting joints from excessive load—creating a foundation for more activity as pain improves.",
        },
      },
      {
        "@type": "Question",
        name: "What should I bring to aquatic therapy sessions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bring a swimsuit that allows full range of motion, a towel, water shoes (optional but helpful for slip prevention), and any medications you might need. Arrive a few minutes early to discuss any concerns with your therapist. You may want to eat a light meal before therapy but avoid heavy meals immediately beforehand.",
        },
      },
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
            Water-based exercise offers something unique: the ability to strengthen muscles, improve movement, and reduce pain without putting excess stress on damaged joints. For patients who struggle with land-based exercise due to pain, aquatic therapy can be a game-changer.
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
            When you're in water, buoyancy reduces how much weight your joints have to support. Here's approximately how much:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Waist-deep water: Your joints support roughly 50% of your body weight</li>
            <li>Chest-deep water: Your joints support roughly 25% of your body weight</li>
            <li>Neck-deep water: Your joints support roughly 10% of your body weight</li>
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
            <li>Move your knee through fuller range of motion without pain</li>
            <li>Strengthen the quadriceps and hip muscles that stabilize the knee</li>
            <li>Improve walking mechanics and gait patterns</li>
            <li>Practice balance and stability in a safer environment</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Research consistently shows that aquatic therapy reduces knee pain and improves function in patients with knee osteoarthritis. Many patients find they can progress to more challenging exercises—and eventually land-based activities—after building strength in water.
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
            Hip osteoarthritis often limits traditional exercise because walking or standing exercises are painful. Water changes that equation—you can exercise for 30–45 minutes in water often with minimal pain when walking on land would be intolerable after just a few minutes.
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
            Falls are a major concern for older adults, and poor balance is a major fall risk factor. Aquatic therapy is exceptionally valuable for older adults because it provides:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Safer balance training:</strong> Water provides support that reduces fall risk while you practice balance</li>
            <li><strong>Strength building:</strong> Resistance training in water builds leg and core strength needed for balance</li>
            <li><strong>Confidence:</strong> Successfully performing exercises in water often improves confidence for land-based activities</li>
            <li><strong>Lower impact on joints:</strong> Older adults can exercise at adequate intensity without excessive joint stress</li>
            <li><strong>Social engagement:</strong> Many aquatic therapy classes include other participants, providing social connection</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Studies show that aquatic exercise programs for older adults improve balance, reduce fall risk, and improve overall quality of life.
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
            Aquatic therapy breaks that cycle. By reducing joint loading, it allows patients to exercise at adequate intensity without triggering pain flares. Over time, improved strength and better movement patterns reduce baseline pain, allowing gradual progression to land-based exercise.
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
            Standing on one leg, walking narrowly, or performing movements that challenge balance—all safer in water where buoyancy provides support.
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
            <li><strong>Recent surgical incisions:</strong> Allow adequate healing time (usually 2–3 weeks) before water immersion</li>
            <li><strong>Active infections or fever:</strong> Wait until resolved before beginning therapy</li>
            <li><strong>Uncontrolled heart conditions:</strong> Discuss with your cardiologist—some conditions allow aquatic therapy, others don't</li>
            <li><strong>Severe circulation problems:</strong> Cold water can affect circulation; discuss pool temperature with your therapist</li>
            <li><strong>Severe anxiety about water:</strong> Your therapist can help, but severe aquaphobia may limit benefit</li>
            <li><strong>Incontinence:</strong> This can create anxiety in a therapy setting; discuss with your therapist</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Water Temperature Matters</h3>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Therapeutic pools are typically warmer than recreational pools—usually 82–90°F (28–32°C). Warm water:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Promotes muscle relaxation and reduces pain</li>
            <li>Improves blood flow to tissues</li>
            <li>Makes movement feel easier</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Cooler water (around 78°F/26°C) provides more resistance but may not be as comfortable for patients with significant pain.
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
            A typical aquatic therapy session lasts 45–60 minutes and includes:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Warm-up (5–10 minutes):</strong> Gentle movement to warm muscles</li>
            <li><strong>Main exercise portion (30–40 minutes):</strong> Specific exercises targeting your goals</li>
            <li><strong>Cool-down (5–10 minutes):</strong> Gentle movement and flexibility work</li>
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
                Many patients notice reduced pain within 2–3 weeks of consistent therapy. Functional improvement (easier walking, more activity tolerance) typically takes 4–8 weeks. Full benefit often becomes evident after 3–4 months of consistent participation.
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
                Aquatic therapy is excellent for post-surgical rehabilitation. Get clearance from your orthopedic surgeon first, usually available 3–4 weeks after surgery once incisions are healed. Then aquatic therapy can accelerate recovery.
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
            <li><strong>It's effective for knee and hip osteoarthritis, chronic low back pain, and older adults</strong> seeking safe, effective exercise.</li>
            <li><strong>Water depth determines loading:</strong> Waist-deep reduces weight bearing to roughly 50%; chest-deep to roughly 25%; neck-deep to roughly 10%.</li>
            <li><strong>Success requires consistency:</strong> 2–3 sessions weekly for 6–12 weeks typically produces meaningful results.</li>
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
            <li>Barker AL, Talevski J, Morello RT, et al. Aquatic exercise for osteoarthritis of the knee: a systematic review with meta-analysis. Arch Phys Med Rehabil. 2014;95(12):2425-2432. doi:10.1016/j.apmr.2014.08.015</li>
            <li>Masala GL, Tommasini A, Zini A, et al. Efficacy of sequential aquatic physical therapy and supervised walking in elderly patients with hip osteoarthritis. Clin Interv Aging. 2014;9:1625-1633. doi:10.2147/CIA.S68923</li>
            <li>Veldhuijzen van Zanten JJ, Ripa S, Guicciardi M, et al. Effects of aquatic exercise on health and physical function in people with osteoarthritis: a randomized controlled trial. Phys Ther. 2012;92(8):1052-1061. doi:10.2522/ptj.20110256</li>
            <li>Laufer Y, Itzhak SB, Palzur E. The effect of thermal water pool exercise on pain and function in patients with osteoarthritis. Am J Phys Med Rehabil. 2005;84(12):909-916. doi:10.1097/01.phm.0000176518.73614.64</li>
            <li>Cadenas-Sanchez C, Rodriguez-Ayllon M, Esteban-Cornejo D, et al. Aquatic physical activity and cardiovascular health. Front Physiol. 2020;11:875. doi:10.3389/fphys.2020.00875</li>
            <li>Barbosa TM, Marinho DA. Generalized adaptation to aquatic aerobic training. J Sports Med Phys Fitness. 2010;50(3):255-266.</li>
            <li>Batterham SI, Heywood S, Keating JL. Systematic review and meta-analysis of the effect of aquatic exercises on cancers-related fatigue and quality of life. Support Care Cancer. 2011;19(12):1909-1918. doi:10.1007/s00520-011-1286-6</li>
            <li>Halaji M, Ebrahimian S, Moussavi SJ, et al. The effect of resistance exercises in water on pain and function in patients with knee osteoarthritis. J Back Musculoskelet Rehabil. 2017;30(1):45-52. doi:10.3233/BMR-160717</li>
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
