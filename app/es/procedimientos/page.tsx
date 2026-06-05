import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Procedimientos de Manejo del Dolor | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre procedimientos y opciones de tratamiento para dolor de columna, nervios y articulaciones.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Procedimientos de Manejo del Dolor | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre procedimientos y opciones de tratamiento para dolor de columna, nervios y articulaciones.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Procedimientos de Manejo del Dolor | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre procedimientos y opciones de tratamiento para dolor de columna, nervios y articulaciones.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Procedimientos de Manejo del Dolor | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre procedimientos y opciones de tratamiento para dolor de columna, nervios y articulaciones.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedimientos", item: PAGE_URL },
    ],
  },
};

const procedureGroups = [
  {
    title: "Procedimientos de columna",
    items: [
      { label: "Inyecciones epidurales cervicales de esteroides", href: "/procedures/epidural-steroid-injections" },
      { label: "Inyecciones epidurales lumbares de esteroides", href: "/procedures/epidural-steroid-injections" },
      { label: "Inyecciones epidurales transforaminales de esteroides", href: "/procedures/epidural-steroid-injections" },
      { label: "Inyecciones epidurales interlaminares de esteroides", href: "/procedures/epidural-steroid-injections" },
      { label: "Inyecciones epidurales caudales de esteroides", href: "/procedures/epidural-steroid-injections" },
      { label: "Bloqueos selectivos de raíces nerviosas" },
      { label: "Inyecciones de facetas / bloqueos de rama medial", href: "/procedures/facet-joint-injections-medial-branch-blocks" },
      { label: "Ablación por radiofrecuencia", href: "/procedures/radiofrequency-ablation" },
      { label: "Inyecciones de la articulación sacroilíaca", href: "/procedures/sacroiliac-joint-injections" },
    ],
  },
  {
    title: "Nervios periféricos y musculoesquelético",
    items: [
      { label: "Bloqueos de nervios periféricos" },
      { label: "Bloqueos de nervio occipital" },
      { label: "Inyecciones en puntos gatillo" },
      { label: "Inyecciones articulares" },
      { label: "Inyecciones de bursa" },
      { label: "Inyecciones en vainas tendinosas" },
    ],
  },
  {
    title: "Procedimientos avanzados",
    items: [
      { label: "Evaluación para estimulación de la médula espinal", href: "/procedures/spinal-cord-stimulation-evaluation" },
      { label: "Consideración de prueba de estimulación medular", href: "/procedures/spinal-cord-stimulation-evaluation" },
      { label: "Evaluación para estimulación de nervio periférico" },
      { label: "Consideración de prueba de estimulación de nervio periférico" },
    ],
  },
  {
    title: "Medicación y cuidado conservador",
    items: [
      { label: "Manejo de medicamentos cuando es clínicamente apropiado" },
      { label: "Coordinación de fisioterapia" },
      { label: "Revisión de imágenes e historial de tratamiento previo" },
      { label: "Planificación multimodal del manejo del dolor" },
    ],
  },
];

export default function ProcedimientosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Procedimientos y Opciones de Tratamiento
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Procedimientos y
            <br />
            <em className="not-italic text-[#888]">Opciones de Tratamiento.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Las opciones de tratamiento se consideran después de una evaluación clínica y se
            seleccionan según el diagnóstico, los antecedentes, los objetivos funcionales y la
            respuesta previa al tratamiento de cada paciente. No todos los procedimientos son
            apropiados para todos los pacientes.
          </p>
        </div>
      </section>

      {/* PROCEDURES GRID */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] mb-6">
            Las páginas detalladas de cada procedimiento están actualmente disponibles en inglés.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e5e5e0]">
            {procedureGroups.map((group, i) => (
              <div
                key={group.title}
                className={`p-7 ${i < procedureGroups.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#e5e5e0]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2
                  className="font-bold text-[#0a0a0a] text-sm mb-5"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {group.title}
                </h2>
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

      {/* ENFOQUE DE TRATAMIENTO */}
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
              Planificación del Tratamiento.
            </h2>
            <p>
              Las recomendaciones de tratamiento se basan en los antecedentes del paciente,
              el examen físico, los estudios de imagen cuando están disponibles, la respuesta
              previa al tratamiento, los antecedentes médicos y el contexto clínico general.
              Los procedimientos son guiados por imagen y se realizan después de una evaluación
              clínica apropiada.
            </p>
            <p>
              El enfoque del Dr. Dardashti hace hincapié en una evaluación diagnóstica cuidadosa,
              una comunicación clara y una toma de decisiones basada en la evidencia. Las opciones
              de tratamiento se adaptan a la presentación clínica y los objetivos funcionales de
              cada paciente.
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
              adecuados dependen de una valoración clínica formal. No todos los procedimientos
              enumerados son apropiados para todos los pacientes. Las recomendaciones de
              tratamiento son individualizadas y se basan en una evaluación clínica formal.
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
              Condiciones Evaluadas.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/es/condiciones" className="text-[#c8a020] hover:underline tracking-wide">Ver condiciones evaluadas (en español) →</Link></li>
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de dolor de espalda baja →</Link></li>
              <li><Link href="/conditions/sciatica-radicular-pain" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de ciática y dolor radicular →</Link></li>
              <li><Link href="/conditions/crps-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de síndrome de dolor regional complejo →</Link></li>
              <li><Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los procedimientos y opciones de tratamiento (en inglés) →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
