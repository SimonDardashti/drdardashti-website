import Image from 'next/image';

export interface MedicalFigureProps {
  // Layout variant
  variant?: 'default' | 'comparison' | 'hero';

  // Single image (default + hero)
  src?: string;
  alt?: string;

  // Comparison (variant='comparison' only)
  leftSrc?: string;
  rightSrc?: string;
  leftAlt?: string;
  rightAlt?: string;
  leftLabel?: string;
  rightLabel?: string;

  // Metadata
  caption?: string;

  // Performance hint (above-fold images only)
  priority?: boolean;
}

/**
 * MedicalFigure - Medical illustration component
 *
 * Three variants, each with a fixed layout:
 * - default: Centered image, 600px desktop / 100% mobile
 * - comparison: Two images side-by-side (desktop) / stacked (mobile)
 * - hero: Full-width, 400px height
 *
 * All sizing, spacing, and typography are fixed.
 * No configuration beyond what's necessary.
 *
 * Alt text is required (accessibility critical).
 * Caption is optional (educational enhancement).
 */
export default function MedicalFigure({
  variant = 'default',
  src,
  alt,
  leftSrc,
  rightSrc,
  leftAlt,
  rightAlt,
  leftLabel,
  rightLabel,
  caption,
  priority = false,
}: MedicalFigureProps) {
  // Validate required data
  if (variant === 'comparison') {
    if (!leftSrc || !rightSrc) {
      throw new Error('MedicalFigure: comparison variant requires leftSrc and rightSrc');
    }
    if (!leftAlt || !rightAlt) {
      throw new Error('MedicalFigure: comparison requires leftAlt and rightAlt (accessibility)');
    }
  } else {
    if (!src) {
      throw new Error('MedicalFigure: src is required');
    }
    if (!alt) {
      throw new Error('MedicalFigure: alt text is required (accessibility)');
    }
  }

  // Derive loading strategy from priority hint
  const loading = priority ? 'eager' : 'lazy';

  // ============================================
  // DEFAULT VARIANT: Centered image
  // ============================================
  if (variant === 'default' || (!variant && src && !leftSrc)) {
    return (
      <figure className="flex flex-col items-center my-8">
        <div className="w-full md:w-[600px] md:max-w-2xl">
          <Image
            src={src as string}
            alt={alt as string}
            width={600}
            height={450}
            sizes="(max-width: 768px) 100vw, 600px"
            priority={priority}
            loading={loading}
            quality={90}
            className="w-full h-auto"
          />
        </div>

        {caption && (
          <figcaption className="text-sm text-[#666] leading-relaxed mt-3 max-w-[600px]">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // ============================================
  // COMPARISON VARIANT: Two images
  // ============================================
  if (variant === 'comparison') {
    return (
      <figure className="flex flex-col items-center my-8">
        <div className="w-full md:w-[800px] flex flex-col md:flex-row md:gap-6">
          {/* Left image */}
          <div className="flex-1 mb-4 md:mb-0">
            <Image
              src={leftSrc as string}
              alt={leftAlt as string}
              width={350}
              height={263}
              sizes="(max-width: 768px) 100vw, 350px"
              priority={priority}
              loading={loading}
              quality={90}
              className="w-full h-auto"
            />
            {leftLabel && (
              <p className="text-xs font-semibold text-[#0a0a0a] uppercase tracking-widest mt-2">
                {leftLabel}
              </p>
            )}
          </div>

          {/* Right image */}
          <div className="flex-1">
            <Image
              src={rightSrc as string}
              alt={rightAlt as string}
              width={350}
              height={263}
              sizes="(max-width: 768px) 100vw, 350px"
              priority={priority}
              loading={loading}
              quality={90}
              className="w-full h-auto"
            />
            {rightLabel && (
              <p className="text-xs font-semibold text-[#0a0a0a] uppercase tracking-widest mt-2">
                {rightLabel}
              </p>
            )}
          </div>
        </div>

        {caption && (
          <figcaption className="text-sm text-[#666] leading-relaxed mt-4 max-w-[800px]">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // ============================================
  // HERO VARIANT: Full-width page header
  // ============================================
  if (variant === 'hero') {
    return (
      <figure className="w-full">
        <div className="relative w-full overflow-hidden" style={{ height: '400px' }}>
          <Image
            src={src as string}
            alt={alt as string}
            width={1600}
            height={400}
            sizes="100vw"
            priority={priority !== false}
            loading={priority !== false ? 'eager' : 'lazy'}
            quality={85}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" aria-hidden />
        </div>

        {caption && (
          <figcaption className="text-sm text-[#666] leading-relaxed mt-3">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
}
