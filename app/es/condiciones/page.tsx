import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Condiciones de Dolor Evaluadas | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre condiciones de dolor de columna, nervios, articulaciones y dolor crónico evaluadas por un especialista en manejo del dolor.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Condiciones de Dolor Evaluadas | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre condiciones de dolor de columna, nervios, articulaciones y dolor crónico evaluadas por un especialista en manejo del dolor.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Condiciones de Dolor Evaluadas | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre condiciones de dolor de columna, nervios, articulaciones y dolor crónico evaluadas por un especialista en manejo del dolor.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Condiciones de Dolor Evaluadas | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre condiciones de dolor de columna, nervios, articulaciones y dolor crónico evaluadas por un especialista en manejo del dolor.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Condiciones", item: PAGE_URL },
    ],
  },
};

const featuredConditions = [
  {
    title: "Radiculopatía y dolor radicular (ciática)",
    body: "La radiculopatía ocurre cuando una raíz nerviosa de la columna se irrita o comprime, lo que puede causar dolor, entumecimiento u hormigueo que se extiende hacia el brazo o la pierna. Cuando afecta la región lumbar, puede manifestarse como ciática. La evaluación clínica puede incluir revisión del historial, examen físico y estudios de imagen cuando corresponda.",
    links: [
      { label: "Leer más — Información en español", href: "/es/condiciones/radiculopatia-ciatica" },
      { label: "Ciática y dolor radicular — Página en inglés", href: "/conditions/sciatica-radicular-pain" },
      { label: "Dolor radicular — Página en inglés", href: "/conditions/radicular-pain" },
      { label: "Radiculopatía lumbar — Página en inglés", href: "/conditions/lumbar-radiculopathy" },
      { label: "Radiculopatía cervical — Página en inglés", href: "/conditions/cervical-radiculopathy" },
    ],
  },
  {
    title: "Artritis facetaria y dolor de las articulaciones facetarias",
    body: "Las articulaciones facetarias conectan las vértebras de la columna y pueden ser una fuente de dolor de cuello o espalda. El dolor mediado por estas articulaciones puede estar relacionado con cambios degenerativos o irritación articular. La evaluación clínica ayuda a determinar si el dolor puede tener relación con las articulaciones facetarias.",
    links: [
      { label: "Leer más — Información en español", href: "/es/condiciones/dolor-facetario" },
      { label: "Dolor mediado por las facetas — Página en inglés", href: "/conditions/facet-mediated-pain" },
    ],
  },
];

const conditionGroups = [
  {
    title: "Dolor de columna",
    items: [
      { label: "Dolor de cuello", href: "/conditions/neck-pain" },
      { label: "Dolor de espalda baja", href: "/conditions/low-back-pain" },
      { label: "Dolor relacionado con la columna", href: "/conditions/spine-related-pain" },
      { label: "Dolor mediado por las facetas", href: "/conditions/facet-mediated-pain" },
      { label: "Dolor de la articulación sacroilíaca", href: "/conditions/sacroiliac-joint-pain" },
    ],
  },
  {
    title: "Dolor nervioso y radicular",
    items: [
      { label: "Ciática", href: "/conditions/sciatica-radicular-pain" },
      { label: "Radiculopatía cervical", href: "/conditions/cervical-radiculopathy" },
      { label: "Radiculopatía lumbar", href: "/conditions/lumbar-radiculopathy" },
      { label: "Dolor radicular", href: "/conditions/radicular-pain" },
      { label: "Dolor neuropático", href: "/conditions/neuropathic-pain" },
      { label: "Dolor de nervios periféricos", href: "/conditions/peripheral-nerve-pain" },
    ],
  },
  {
    title: "Dolor articular y musculoesquelético",
    items: [
      { label: "Dolor articular", href: "/conditions/joint-pain" },
      { label: "Dolor relacionado con la bursa", href: "/conditions/bursa-related-pain" },
      { label: "Dolor miofascial", href: "/conditions/myofascial-pain" },
      { label: "Neuralgia occipital", href: "/conditions/occipital-neuralgia" },
      { label: "Dolor persistente tras lesión o cirugía", href: "/conditions/persistent-pain-after-injury-or-surgery" },
      { label: "Dolor persistente tras cirugía de columna", href: "/conditions/persistent-pain-after-spine-surgery" },
    ],
  },
  {
    title: "Dolor nervioso posquirúrgico",
    items: [
      { label: "Síndrome de dolor posmastectomía", href: "/conditions/post-mastectomy-pain-syndrome" },
    ],
  },
  {
    title: "Condiciones de dolor complejo",
    items: [
      { label: "Evaluación de síndrome de dolor regional complejo", href: "/conditions/crps-evaluation" },
      { label: "Evaluación de síndrome de dolor crónico", href: "/conditions/chronic-pain-syndrome-evaluation" },
      { label: "Condiciones de dolor complejo", href: "/conditions/complex-pain-conditions" },
    ],
  },
];

export default function CondicionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Condiciones Evaluadas
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Condiciones
            <br />
            <em className="not-italic text-[#888]">Evaluadas.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            El Dr. Simon Dardashti evalúa una variedad de condiciones de dolor que afectan la
            columna vertebral, el sistema nervioso y el sistema musculoesquelético. La
            evaluación es individualizada y se basa en los antecedentes del paciente, los
            síntomas, los hallazgos del examen clínico y los registros pertinentes.
          </p>
        </div>
      </section>

      {/* SPANISH SECTION NAV */}
      <section className="bg-[#0a0a0a] py-4 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-6">
          <span className="text-[10px] text-[#666] uppercase tracking-widest">Sección en español</span>
          <nav className="flex items-center gap-6">
            <Link
              href="/es"
              className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors"
            >
              Inicio
            </Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link
              href="/es/condiciones"
              className={`text-xs font-medium tracking-widest uppercase transition-colors ${
                true ? "text-white" : "text-[#888] hover:text-white"
              }`}
            >
              Condiciones
            </Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link
              href="/es/procedimientos"
              className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors"
            >
              Procedimientos
            </Link>
          </nav>
        </div>
      </section>

      {/* CONDICIONES FRECUENTES */}
      <section className="bg-[#f9f7f4] py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-2">Condiciones frecuentes</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Condiciones evaluadas con frecuencia.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredConditions.map((item) => (
              <div key={item.title} className="bg-white border border-[#e5e5e0] p-8 flex flex-col gap-4">
                <div className="w-5 h-px bg-[#c8a020]" />
                <h3
                  className="font-bold text-[#0a0a0a] text-base leading-snug"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed flex-1">{item.body}</p>
                <ul className="space-y-1.5">
                  {item.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-[#c8a020] hover:underline tracking-wide"
                      >
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODAS LAS CONDICIONES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-2">Todas las condiciones</p>
          <h2
            className="text-xl font-bold text-[#0a0a0a] mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Todas las condiciones evaluadas.
          </h2>
          <p className="text-xs text-[#999] mb-8">
            Las páginas detalladas de cada condición están actualmente disponibles en inglés.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0 border border-[#e5e5e0]">
            {conditionGroups.map((group, i) => (
              <div
                key={group.title}
                className={`p-7 ${i < conditionGroups.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#e5e5e0]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h3
                  className="font-bold text-[#0a0a0a] text-sm mb-5"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.label} className="text-sm text-[#666] leading-relaxed">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="hover:text-[#c8a020] transition-colors"
                        >
                          {item.label} →
                        </Link>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENFOQUE DE EVALUACIÓN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Enfoque</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Enfoque de Evaluación.
            </h2>
            <p>
              El enfoque clínico del Dr. Dardashti comienza con una revisión detallada de los
              antecedentes del paciente, el inicio, las características y la evolución de los
              síntomas, junto con los estudios de imagen y los registros de tratamientos previos.
              El examen físico se utiliza para identificar los hallazgos clínicos relevantes y
              orientar la planificación del tratamiento.
            </p>
            <p>
              El diagnóstico se basa en el cuadro clínico completo, no en un síntoma aislado,
              un hallazgo de imagen o un resultado de estudio por sí solo. Cuando se consideran
              opciones de tratamiento, estas se seleccionan de acuerdo con la presentación
              clínica individual del paciente, sus objetivos funcionales y su respuesta previa
              al tratamiento.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITACIONES */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Información</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Información Importante.
            </h2>
            <p>
              Esta página es solo para fines informativos generales. No constituye consejo
              médico ni crea una relación médico-paciente. La evaluación y el tratamiento
              adecuados dependen de una valoración clínica formal. Esta página enumera
              condiciones que pueden ser evaluadas; no garantiza ningún diagnóstico específico
              ni ningún tratamiento en particular.
            </p>
            <p>
              El Dr. Dardashti atiende pacientes en Mission Hills, California, sirviendo a
              pacientes del Valle de San Fernando, el Valle de Santa Clarita y las comunidades
              circundantes del área de Los Ángeles.
            </p>
          </div>
        </div>
      </section>

      {/* RELACIONADO */}
      <section className="bg-[#f9f7f4] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Relacionado</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-base font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Procedimientos y Opciones de Tratamiento.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver procedimientos y opciones de tratamiento (en español) →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Inyecciones epidurales de esteroides →</Link></li>
              <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-[#c8a020] hover:underline tracking-wide">Bloqueos de rama medial y bloqueos facetarios →</Link></li>
              <li><Link href="/procedures/radiofrequency-ablation" className="text-[#c8a020] hover:underline tracking-wide">Ablación por radiofrecuencia →</Link></li>
              <li><Link href="/conditions" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las condiciones evaluadas (en inglés) →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
