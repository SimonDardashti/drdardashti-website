import type { Metadata } from "next";

const PAGE_URL = "https://www.drdardashti.com/about";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "About Simon Dardashti, MD | Pain Medicine & Anesthesiology" },
  description:
    "Learn about Dr. Simon Dardashti, a board-certified pain medicine physician and anesthesiologist with UCLA fellowship training in Pain Medicine.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "About Simon Dardashti, MD | Pain Medicine & Anesthesiology",
    description:
      "Learn about Dr. Simon Dardashti, a board-certified pain medicine physician and anesthesiologist with UCLA fellowship training in Pain Medicine.",
    images: [
      {
        url: "/headshot.webp",
        width: 1200,
        height: 630,
        alt: "Simon Dardashti, MD, board-certified pain medicine physician and anesthesiologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Simon Dardashti, MD | Pain Medicine & Anesthesiology",
    description:
      "Learn about Dr. Simon Dardashti, a board-certified pain medicine physician and anesthesiologist with UCLA fellowship training in Pain Medicine.",
    images: ["/headshot.webp"],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti is a board-certified pain medicine physician and anesthesiologist with UCLA fellowship training, evaluating spine, nerve, joint, and complex chronic pain conditions.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: PAGE_URL },
    ],
  },
};

const credentials = [
  { label: "Board-Certified", value: "Pain Medicine" },
  { label: "Board-Certified", value: "Anesthesiology" },
  { label: "Fellowship", value: "UCLA Interventional Pain Medicine" },
  { label: "Residency", value: "UC Irvine Anesthesiology" },
  { label: "Medical Degree", value: "Chicago Medical School, MD" },
  { label: "Masters Degree", value: "Georgetown University, MS Physiology & Biophysics" },
  { label: "Undergraduate", value: "UC Berkeley" },
];

const approachPoints = [
  {
    title: "Diagnostic Foundation",
    body: "Understanding the patient's history, symptoms, examination findings, imaging, and prior treatment response helps identify the most likely source of pain.",
  },
  {
    title: "Shared Decision-Making",
    body: "When more than one reasonable treatment option exists, patients should understand the potential role, limitations, and uncertainty of each approach.",
  },
  {
    title: "Clear Communication",
    body: "Pain treatment decisions are individualized. The goal is to discuss options in a clear, practical way and support informed decision-making.",
  },
  {
    title: "Individualized Planning",
    body: "Conservative, medication-based, image-guided, and interventional options are considered based on each patient's symptoms, goals, preferences, and clinical situation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            About the Physician
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Simon Dardashti,
            <br />
            <em className="not-italic text-[#888]">MD</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-xl leading-relaxed">
            Board-Certified Interventional Pain Medicine &amp; Anesthesiology · Mission Hills, CA
          </p>
        </div>
      </section>

      {/* SECTION 01 — BIO */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#f0f0f0] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              01
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Profile</p>
          </div>

          <div className="md:col-span-5 space-y-5 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Pain Medicine Physician.
            </h2>
            <p>
              Dr. Simon Dardashti is a double board-certified pain medicine physician and
              anesthesiologist who evaluates and treats patients with acute and chronic
              pain conditions. Raised in Encino in the San Fernando Valley, he now serves
              patients in Mission Hills, the San Fernando Valley, and surrounding Los
              Angeles communities.
            </p>
            <p>
              His clinical work focuses on careful diagnostic evaluation—identifying the
              most likely source of pain—and reviewing relevant history, symptoms, examination
              findings, imaging, prior treatment response, and patient goals. He evaluates
              spine-related pain, neck pain, low back pain, radicular pain, neuropathic pain,
              joint pain, sacroiliac joint pain, persistent pain after injury or surgery, and
              complex chronic pain conditions.
            </p>
            <p>
              Dr. Dardashti's approach emphasizes clear communication and shared
              decision-making. He discusses reasonable treatment options with patients so they
              can make informed decisions that fit their symptoms, goals, preferences, and
              overall clinical situation. Treatment options may include conservative care,
              medication-based strategies, image-guided injections, epidural steroid injections,
              medial branch blocks, radiofrequency ablation, platelet-rich plasma (PRP),
              peripheral nerve blocks, trigger point injections, joint, bursa, and tendon
              injections, and spinal cord stimulation evaluation when clinically appropriate.
            </p>
            <p>
              This website was created to provide clear educational information about pain
              conditions and treatment options.
            </p>
          </div>

          <div className="md:col-span-5 space-y-6">
            <img
              src="/headshot.webp"
              alt="Simon Dardashti, MD, board-certified pain medicine physician and anesthesiologist"
              className="w-full object-cover"
              style={{ filter: "grayscale(20%)" }}
            />
            <div className="border border-[#e5e5e0] p-7">
              <h3 className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-5">
                Credentials &amp; Training
              </h3>
              <ul className="space-y-4">
                {credentials.map((c, i) => (
                  <li key={i}>
                    <p className="text-[10px] text-[#c8a020] font-semibold uppercase tracking-widest mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm text-[#333]">{c.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — APPROACH */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Patient-Centered Approach</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              A Foundation in Shared Decision-Making.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {approachPoints.map((pt) => (
                <div key={pt.title} className="bg-white border border-[#e5e5e0] p-6">
                  <div className="w-6 h-px bg-[#c8a020] mb-4" />
                  <h3
                    className="font-bold text-[#0a0a0a] text-base mb-2"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {pt.title}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed">{pt.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — LOCATION */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Clinical Location
          </p>
          <h2
            className="text-2xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Mission Hills, California
          </h2>
          <p className="text-[#666] text-sm max-w-md leading-relaxed">
            Dr. Dardashti sees patients in Mission Hills, California.
          </p>
        </div>
      </section>
    </>
  );
}
