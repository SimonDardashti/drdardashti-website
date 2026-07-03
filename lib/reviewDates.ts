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
