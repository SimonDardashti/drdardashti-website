export interface Citation {
  text: string;
  url?: string;
}

interface ReferencesSectionProps {
  references: Citation[];
}

/**
 * Renders a "Selected References" section in the site's existing visual
 * style. Used only on pages where curated, high-value citations have been
 * added via lib/citations.ts — not a site-wide requirement.
 */
export default function ReferencesSection({ references }: ReferencesSectionProps) {
  if (!references || references.length === 0) return null;

  return (
    <section className="bg-white py-14 px-6 border-b border-[#e5e5e0]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-2">
          <p className="text-xs text-[#999] uppercase tracking-widest">References</p>
        </div>
        <div className="md:col-span-10">
          <h2
            className="text-base font-bold text-[#0a0a0a] mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Selected References.
          </h2>
          <ol className="space-y-3 text-sm text-[#666] list-decimal list-outside ml-4">
            {references.map((ref, i) => (
              <li key={i} className="leading-relaxed pl-1">
                {ref.url ? (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c8a020] hover:underline"
                  >
                    {ref.text}
                  </a>
                ) : (
                  ref.text
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
