import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3
            className="text-white font-bold text-base mb-1"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Simon Dardashti, MD
          </h3>
          <p className="text-[10px] text-[#666] uppercase tracking-[0.2em] mb-5">
            Pain Medicine · Anesthesiology
          </p>
          <p className="text-sm text-[#888] leading-relaxed">
            Board-certified pain medicine physician and anesthesiologist. Evidence-informed
            evaluation and treatment for spine, nerve, joint, and complex chronic pain
            conditions in Mission Hills, CA.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[#888] text-xs font-semibold mb-5 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Dr. Dardashti" },
              { href: "/conditions", label: "Conditions" },
              { href: "/procedures", label: "Procedures" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[#666] hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location + CTA */}
        <div>
          <h4 className="text-[#888] text-xs font-semibold mb-5 uppercase tracking-widest">Clinical Location</h4>
          <ul className="space-y-2 text-sm text-[#666]">
            <li>Mission Hills, California</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a] px-6 py-6 max-w-6xl mx-auto flex flex-col gap-3 text-xs text-[#555]">
        <p className="leading-relaxed max-w-4xl">
          This website is for general informational purposes only and does not provide medical advice, diagnosis, or treatment. Use of this website does not create a physician-patient relationship. Clinical questions, appointment requests, prescriptions, and patient-specific medical concerns should be handled through the appropriate medical office or patient communication channel. If you are experiencing a medical emergency, call 911 or seek emergency medical care.
        </p>
        <p className="text-[#444]">&copy; {year} Simon Dardashti, MD · Mission Hills, CA</p>
      </div>
    </footer>
  );
}
