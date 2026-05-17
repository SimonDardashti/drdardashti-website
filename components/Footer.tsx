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
            Simon Dardashti, MD, MS
          </h3>
          <p className="text-[10px] text-[#666] uppercase tracking-[0.2em] mb-5">
            Pain Medicine · Expert Witness · IME
          </p>
          <p className="text-sm text-[#888] leading-relaxed">
            Double board-certified in Pain Medicine and Anesthesiology. UCLA fellowship-trained.
            Available for expert witness, IME, and medical record review throughout California.
          </p>
          <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
            <p className="text-xs text-[#555] mb-1 uppercase tracking-widest">Direct Line</p>
            <a href="tel:+18187307579" className="text-[#c8a020] font-bold text-lg hover:text-[#e0b830] transition-colors">
              (818) 730-7579
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[#888] text-xs font-semibold mb-5 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Dr. Dardashti" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Retain / Case Review" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[#666] hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Credentials + CTA */}
        <div>
          <h4 className="text-[#888] text-xs font-semibold mb-5 uppercase tracking-widest">Credentials</h4>
          <ul className="space-y-2 text-sm text-[#666] mb-8">
            <li>ABMS Board-Certified — Pain Medicine</li>
            <li>ABMS Board-Certified — Anesthesiology</li>
            <li>UCLA Fellowship-Trained</li>
            <li>UC Irvine Residency</li>
            <li>Retained in 60+ Medicolegal Matters</li>
            <li>Balanced Plaintiff &amp; Defense (50/50)</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-[#c8a020] hover:bg-[#e0b830] text-black text-xs font-bold px-6 py-3 tracking-widest uppercase transition-colors duration-200"
          >
            Request a Free Case Review
          </Link>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a] px-6 py-5 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#444]">
        <p>&copy; {year} Simon Dardashti, MD, MS · Expert Medical Services LLC · Los Angeles, CA</p>
        <p>This website is for attorney and legal professional inquiries only. Not a patient-facing site.</p>
      </div>
    </footer>
  );
}
