import Link from "next/link";

export default function VirtualConsultationCard() {
  return (
    <div className="bg-white border border-[#e5e5e0] p-8 flex flex-col gap-4">
      <div className="w-5 h-px bg-[#c8a020]" />
      <h3
        className="font-bold text-[#0a0a0a] text-base leading-snug"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Accepting Virtual Consultations
      </h3>
      <p className="text-sm text-[#555] leading-relaxed flex-1">
        Convenient evaluation for spine, nerve, and joint pain — especially for patients with
        limited mobility, disability, transportation barriers, recent injury, or long wait times.
      </p>
      <div className="space-y-2">
        <p className="text-xs text-[#999] uppercase tracking-widest">
          Earlier evaluation · Imaging direction · Treatment planning
        </p>
        <Link
          href="/virtual-consultations"
          className="inline-block text-xs text-[#c8a020] hover:underline tracking-wide font-semibold"
        >
          Learn About Virtual Consultations →
        </Link>
      </div>
    </div>
  );
}
