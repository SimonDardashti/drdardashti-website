import Link from "next/link";

export default function VirtualConsultationBanner() {
  return (
    <section className="bg-white py-12 px-6 border-b border-[#e5e5e0]">
      <div className="max-w-5xl mx-auto border border-[#e5e5e0] bg-[#f9f7f4]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8">
          <div className="flex-1">
            <div className="w-5 h-px bg-[#c8a020] mb-4" />
            <h3
              className="font-bold text-[#0a0a0a] text-base mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Accepting Virtual Consultations
            </h3>
            <p className="text-sm text-[#666] leading-relaxed">
              Earlier evaluation for spine, nerve, and joint pain when travel, disability, recent
              injury, or long wait times make in-person care difficult.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/virtual-consultations"
              className="inline-block text-xs text-[#c8a020] hover:underline tracking-wide font-semibold whitespace-nowrap"
            >
              Learn About Virtual Consultations →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
