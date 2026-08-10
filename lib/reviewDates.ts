/**
 * Centralized medical review date configuration.
 *
 * To update the reviewed date site-wide, change DEFAULT_REVIEW_DATE.
 * To record that a specific page was reviewed independently (e.g. after a
 * content update), add a path-specific entry to REVIEW_DATE_OVERRIDES —
 * that page will then show its own date instead of the site-wide default.
 */

export const DEFAULT_REVIEW_DATE = "July 2026";

const REVIEW_DATE_OVERRIDES: Record<string, string> = {
  // "/conditions/low-back-pain": "August 2026",
};

export function getReviewDate(path: string): string {
  return REVIEW_DATE_OVERRIDES[path] ?? DEFAULT_REVIEW_DATE;
}

const MONTHS_ES: Record<string, string> = {
  January: "enero",
  February: "febrero",
  March: "marzo",
  April: "abril",
  May: "mayo",
  June: "junio",
  July: "julio",
  August: "agosto",
  September: "septiembre",
  October: "octubre",
  November: "noviembre",
  December: "diciembre",
};

/**
 * Renders an existing "Month YYYY" review date for Spanish display. Only the
 * month name is translated — the underlying date is unchanged, so Spanish
 * pages always show the same review date as their English counterparts.
 * Spanish month names are lowercase by convention.
 */
export function toSpanishReviewDate(date: string): string {
  return date.replace(/^[A-Za-z]+/, (month) => MONTHS_ES[month] ?? month);
}
