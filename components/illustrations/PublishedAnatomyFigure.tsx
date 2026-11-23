import Image from "next/image";
import { publishedAnatomy } from "./publishedAnatomy";

export default function PublishedAnatomyFigure({
  illustration,
}: {
  illustration: keyof typeof publishedAnatomy;
}) {
  const { title, caption, figures } = publishedAnatomy[illustration];
  const paired = figures.length > 1;

  return (
    <figure className="mx-auto mt-10 max-w-4xl rounded-lg border border-[#e5e5e0] bg-white p-4 text-[#444] sm:p-6">
      <p className="mb-4 text-lg font-semibold text-[#111]">{title}</p>
      <div className={paired ? "grid gap-6 sm:grid-cols-2" : undefined}>
        {figures.map((figure) => (
          <div key={figure.src} className="min-w-0">
            {"label" in figure && <p className="mb-2 text-sm font-semibold">{figure.label}</p>}
            <Image
              src={figure.src}
              alt={figure.alt}
              width={figure.width}
              height={figure.height}
              unoptimized
              className="mx-auto h-auto max-w-full"
            />
            <a
              href={figure.src}
              className="mt-2 inline-block text-sm text-[#555] underline underline-offset-4 hover:text-[#111]"
              aria-label={`View full size · ${"label" in figure ? figure.label : title}`}
            >
              View full size
            </a>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed">
        <p>{caption}</p>
        <details className="mt-3 text-sm">
          <summary className="w-fit cursor-pointer text-[#555] underline underline-offset-4 hover:text-[#111]">
            Image credits
          </summary>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {figures.map((figure) => (
              <li key={figure.src}>
                {figure.credits.map(({ href, label }, index) => (
                  <span key={href}>
                    {index > 0 && " · "}
                    <a href={href} className="underline underline-offset-4 hover:text-[#111]">{label}</a>
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </details>
      </figcaption>
    </figure>
  );
}
