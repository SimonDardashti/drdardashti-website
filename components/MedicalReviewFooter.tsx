import { getReviewDate, toSpanishReviewDate } from "@/lib/reviewDates";

interface MedicalReviewFooterProps {
  /** The page's site-relative path, e.g. "/conditions/low-back-pain" */
  path: string;
  /** Language the attribution renders in. Defaults to English. */
  locale?: "en" | "es";
}

/**
 * Displays reviewer attribution and last-reviewed date on educational pages.
 * Place immediately before the closing page fragment, above the global Footer.
 */
export default function MedicalReviewFooter({ path, locale = "en" }: MedicalReviewFooterProps) {
  const reviewDate = getReviewDate(path);
  const isSpanish = locale === "es";
  const lastReviewed = isSpanish ? toSpanishReviewDate(reviewDate) : reviewDate;

  return (
    <section
      className="bg-[#f9f7f4] border-t border-[#e5e5e0] py-8 px-6"
      aria-label={isSpanish ? "Información de revisión médica" : "Medical review information"}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-xs text-[#777] leading-relaxed">
          <span className="text-[#0a0a0a] font-semibold">
            {isSpanish ? "Revisado médicamente por" : "Medically Reviewed by"}
          </span>{" "}
          Simon Dardashti, MD, MS
          <span className="text-[#bbb] mx-2">·</span>
          {isSpanish
            ? "Certificado por el Consejo en Medicina del Dolor y Anestesiología"
            : "Board-Certified, Pain Medicine & Anesthesiology"}
        </p>
        <p className="text-xs text-[#999] shrink-0">
          {isSpanish ? "Última revisión: " : "Last Reviewed: "}
          <span className="text-[#777]">{lastReviewed}</span>
        </p>
      </div>
    </section>
  );
}
