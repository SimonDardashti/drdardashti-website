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
// Size tier definitions (px)
const SIZE_TIERS = {
  small: { desktop: 575, caption: '575px' },      // 500-650px tier
  medium: { desktop: 700, caption: '700px' },     // Default 600px → upgraded to 700px
  large: { desktop: 850, caption: '850px' },      // Anatomy/technique 800-900px
  xlarge: { desktop: 950, caption: '950px' },     // Mechanism 900-1000px
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
    // Dynamic width based on size tier
    const widthClass = {
      small: 'md:w-[575px]',
      medium: 'md:w-[700px]',
      large: 'md:w-[850px]',
      xlarge: 'md:w-[950px]',
    }[size];

    const maxWidthClass = {
      small: 'max-w-[575px]',
      medium: 'max-w-[700px]',
      large: 'max-w-[850px]',
      xlarge: 'max-w-[950px]',
    }[size];

    return (
      <figure className="flex flex-col items-center my-8">
        <div className={`w-full ${widthClass} ${maxWidthClass}`}>
          <Image
            src={src as string}
            alt={alt as string}
            width={sizeConfig.desktop}
            height={Math.round((sizeConfig.desktop * 3) / 4)}
            sizes={`(max-width: 768px) 100vw, ${sizeConfig.caption}`}
            priority={priority}
            loading={loading}
            quality={90}
            className="w-full h-auto"
          />
        </div>

        {caption && (
          <figcaption className={`text-sm text-[#666] leading-relaxed mt-3 ${maxWidthClass}`}>
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
    // Comparison sizes (total width)
    const comparisonWidths = {
      small: { container: 600, image: 275 },      // 500-650px tier
      medium: { container: 750, image: 350 },     // ~700px tier
      large: { container: 900, image: 400 },      // 800-900px tier
      xlarge: { container: 1000, image: 450 },    // 900-1000px tier
    }[size];

    const widthClass = {
      small: 'md:w-[600px]',
      medium: 'md:w-[750px]',
      large: 'md:w-[900px]',
      xlarge: 'md:w-[1000px]',
    }[size];

    const maxWidthClass = {
      small: 'max-w-[600px]',
      medium: 'max-w-[750px]',
      large: 'max-w-[900px]',
      xlarge: 'max-w-[1000px]',
    }[size];

    return (
      <figure className="flex flex-col items-center my-8">
        <div className={`w-full ${widthClass} flex flex-col md:flex-row md:gap-6`}>
          {/* Left image */}
          <div className="flex-1 mb-4 md:mb-0">
            <Image
              src={leftSrc as string}
              alt={leftAlt as string}
              width={comparisonWidths.image}
              height={Math.round((comparisonWidths.image * 3) / 4)}
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
              width={comparisonWidths.image}
              height={Math.round((comparisonWidths.image * 3) / 4)}
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
          <figcaption className={`text-sm text-[#666] leading-relaxed mt-4 ${maxWidthClass}`}>
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
