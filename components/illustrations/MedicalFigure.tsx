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

  // Size tier (default: 'medium')
  size?: 'small' | 'medium' | 'large' | 'xlarge';

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
// Size tier definitions (proportional to article width)
// Article container is max-w-5xl (1024px)
// Sizes scale relative to article width, not fixed pixels
const SIZE_TIERS = {
  small: {     // Reference illustrations: 65-70% of article width
    percent: '70%',
    maxWidth: '720px',
    imageRatio: 0.75,
  },
  medium: {    // General/comparison illustrations: 75-80% of article width
    percent: '78%',
    maxWidth: '800px',
    imageRatio: 0.75,
  },
  large: {     // Anatomy/technique illustrations: 85-90% of article width
    percent: '88%',
    maxWidth: '900px',
    imageRatio: 0.75,
  },
  xlarge: {    // Mechanism illustrations: 90-95% of article width
    percent: '93%',
    maxWidth: '950px',
    imageRatio: 0.75,
  },
};

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
  size = 'medium',
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

  // Get size dimensions for current tier
  const sizeConfig = SIZE_TIERS[size];

  // ============================================
  // DEFAULT VARIANT: Centered image
  // ============================================
  if (variant === 'default' || (!variant && src && !leftSrc)) {
    const sizeConfig = SIZE_TIERS[size];

    return (
      <figure className="flex flex-col items-center my-8">
        <div
          className="w-full"
          style={{
            maxWidth: sizeConfig.maxWidth,
            width: `min(${sizeConfig.percent}, ${sizeConfig.maxWidth})`,
          }}
        >
          <Image
            src={src as string}
            alt={alt as string}
            width={1200}
            height={Math.round(1200 * sizeConfig.imageRatio)}
            sizes={`(max-width: 768px) 100vw, ${sizeConfig.percent}`}
            priority={priority}
            loading={loading}
            quality={90}
            className="w-full h-auto"
          />
        </div>

        {caption && (
          <figcaption
            className="text-sm text-[#666] leading-relaxed mt-3"
            style={{
              maxWidth: sizeConfig.maxWidth,
              width: `min(${sizeConfig.percent}, ${sizeConfig.maxWidth})`,
            }}
          >
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
    const sizeConfig = SIZE_TIERS[size];

    return (
      <figure className="flex flex-col items-center my-8">
        <div
          className="w-full flex flex-col md:flex-row md:gap-6"
          style={{
            maxWidth: sizeConfig.maxWidth,
            width: `min(${sizeConfig.percent}, ${sizeConfig.maxWidth})`,
          }}
        >
          {/* Left image */}
          <div className="flex-1 mb-4 md:mb-0">
            <Image
              src={leftSrc as string}
              alt={leftAlt as string}
              width={1200}
              height={Math.round(1200 * sizeConfig.imageRatio)}
              sizes={`(max-width: 768px) 100vw, calc(${sizeConfig.percent} / 2)`}
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
              width={1200}
              height={Math.round(1200 * sizeConfig.imageRatio)}
              sizes={`(max-width: 768px) 100vw, calc(${sizeConfig.percent} / 2)`}
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
          <figcaption
            className="text-sm text-[#666] leading-relaxed mt-4"
            style={{
              maxWidth: sizeConfig.maxWidth,
              width: `min(${sizeConfig.percent}, ${sizeConfig.maxWidth})`,
            }}
          >
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
