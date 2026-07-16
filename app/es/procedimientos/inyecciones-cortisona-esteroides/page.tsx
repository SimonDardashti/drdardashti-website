import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos/inyecciones-cortisona-esteroides";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Inyecciones de Cortisona y Esteroides | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre inyecciones de cortisona y esteroides, salud de los huesos, aumento temporal del azúcar en la sangre y precauciones para pacientes con diabetes.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Inyecciones de Cortisona y Esteroides | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre inyecciones de cortisona y esteroides, salud de los huesos, aumento temporal del azúcar en la sangre y precauciones para pacientes con diabetes.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inyecciones de Cortisona y Esteroides | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre inyecciones de cortisona y esteroides, salud de los huesos, aumento temporal del azúcar en la sangre y precauciones para pacientes con diabetes.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Inyecciones de Cortisona y Esteroides | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre inyecciones de cortisona y esteroides, salud de los huesos, aumento temporal del azúcar en la sangre y precauciones para pacientes con diabetes.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalProcedure", name: "Inyecciones de cortisona y esteroides" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 2, name: "Procedimientos", item: `${SITE_URL}/es/procedimientos` },
      { "@type": "ListItem", position: 3, name: "Inyecciones de Cortisona y Esteroides", item: PAGE_URL },
    ],
  },
};

const enBreve = [
  {
    heading: "Tratamiento localizado",
    body: "Las inyecciones de esteroides generalmente se colocan cerca de una estructura específica que puede estar inflamada o dolorosa, como una articulación, bursa, región de un tendón o nervio irritado de la columna.",
  },
  {
    heading: "Salud de los huesos",
    body: "Cuando se usan de manera apropiada y con moderación, las inyecciones ocasionales de esteroides generalmente tienen un efecto mínimo sobre la fortaleza general de los huesos.",
  },
  {
    heading: "Precauciones en diabetes",
    body: "Las inyecciones de esteroides pueden aumentar temporalmente el azúcar en la sangre, especialmente en pacientes con diabetes o prediabetes.",
  },
];

const faqItems = [
  {
    question: "¿Las inyecciones de cortisona son lo mismo que tomar esteroides por boca?",
    answer: "No. Una inyección local de cortisona o esteroide se coloca dentro o cerca de un área específica. Los esteroides por boca afectan al cuerpo de manera más general, especialmente cuando se toman en dosis altas o durante períodos prolongados.",
  },
  {
    question: "¿Una inyección de esteroide causa osteoporosis?",
    answer: "Las inyecciones ocasionales de esteroides usadas de manera apropiada generalmente tienen poca probabilidad de causar osteoporosis generalizada. La preocupación por pérdida de hueso es mucho mayor con el uso prolongado de esteroides orales o sistémicos.",
  },
  {
    question: "¿Las inyecciones de esteroides pueden subir el azúcar?",
    answer: "Sí. Las inyecciones de esteroides pueden aumentar temporalmente el azúcar en la sangre, especialmente en pacientes con diabetes o prediabetes.",
  },
  {
    question: "¿Qué debo hacer si tengo diabetes?",
    answer: "Debe revisar su azúcar con más frecuencia después de la inyección y coordinar con su médico de atención primaria que maneja la diabetes, su médico tratante de diabetes o endocrinólogo si corresponde, y el médico que realiza la inyección.",
  },
  {
    question: "¿Con qué frecuencia se pueden repetir las inyecciones de esteroides?",
    answer: "Depende del diagnóstico, el lugar de la inyección, la dosis, la respuesta a tratamientos previos y los riesgos específicos del paciente. Las inyecciones repetidas deben usarse con cuidado y no deben repetirse automáticamente sin una nueva evaluación.",
  },
];

export default function InyeccionesCortisonaEsteroidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* SPANISH NAVIGATION */}
      <nav className="bg-white border-b border-[#e5e5e0] py-3 px-6">
        <div className="max-w-5xl mx-auto flex gap-6 text-sm">
          <Link href="/es" className="text-[#666] hover:text-[#c8a020] transition-colors">
            Inicio
          </Link>
          <Link href="/es/condiciones" className="text-[#666] hover:text-[#c8a020] transition-colors">
            Condiciones
          </Link>
          <Link href="/es/procedimientos" className="text-[#c8a020] font-semibold">
            Procedimientos
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Procedimientos &amp; Opciones de Tratamiento
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Inyecciones de Cortisona
              <br />
              <em className="not-italic text-[#888]">y Esteroides.</em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed max-w-2xl">
              Las inyecciones de cortisona o esteroides se usan comúnmente en el manejo del dolor
              para disminuir la inflamación en un área específica. Muchos pacientes se preocupan
              cuando escuchan la palabra "esteroide," pero una inyección local de esteroide no es
              lo mismo que tomar esteroides por boca todos los días durante semanas o meses. Se
              requiere una evaluación clínica formal para determinar si una inyección de esteroide
              es apropiada para cada paciente.
            </p>
          </div>
        </div>
      </section>

      {/* EN BREVE */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">En breve</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {enBreve.map((item, i) => (
              <div
                key={item.heading}
                className={`p-6 ${i < enBreve.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2
                  className="font-bold text-[#0a0a0a] text-sm mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.heading}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUE SON LAS INYECCIONES */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Descripción</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              ¿Qué son las inyecciones de cortisona y esteroides?
            </h2>
            <p>
              La cortisona es un tipo de medicamento corticosteroide. En el manejo del dolor, las
              inyecciones de corticosteroides pueden usarse para disminuir la inflamación alrededor
              de estructuras dolorosas, como articulaciones, bursas, tendones o raíces nerviosas
              de la columna.
            </p>
            <p>
              Estas inyecciones son diferentes de los esteroides anabólicos usados para aumentar
              masa muscular. También son diferentes de tomar medicamentos esteroides por boca
              durante un período prolongado. El propósito de una inyección de cortisona o esteroide
              es aplicar medicamento antiinflamatorio en un área específica donde la inflamación
              puede estar contribuyendo al dolor.
            </p>
            <p className="font-semibold text-[#0a0a0a]">Algunos ejemplos incluyen:</p>
            <ul className="space-y-2 ml-4">
              {[
                "Inyecciones epidurales de esteroides para pacientes seleccionados con dolor relacionado con nervios en el cuello, la espalda, los brazos o las piernas",
                "Inyecciones facetarias cuando la inflamación de las pequeñas articulaciones de la columna puede estar contribuyendo al dolor",
                "Inyecciones de la articulación sacroilíaca",
                "Inyecciones articulares",
                "Inyecciones de bursa",
                "Inyecciones de vaina tendinosa en situaciones seleccionadas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              No todas las condiciones de dolor requieren una inyección de esteroide. Las
              recomendaciones de tratamiento dependen del diagnóstico, historial médico,
              hallazgos del examen, estudios de imagen cuando están disponibles, respuesta a
              tratamientos previos y riesgos específicos de cada paciente.
            </p>
          </div>
        </div>
      </section>

      {/* SALUD DE LOS HUESOS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Huesos</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              ¿Las inyecciones de esteroides dañan los huesos?
            </h2>
            <p>
              Muchos pacientes se preocupan de que una inyección de esteroide pueda debilitar los
              huesos. Esta preocupación es comprensible, porque el uso prolongado de esteroides
              por boca puede afectar la densidad ósea.
            </p>
            <p>
              Sin embargo, una inyección local de esteroide no es lo mismo que tomar pastillas de
              esteroides todos los días durante semanas o meses. Con una inyección usada
              correctamente, el medicamento se coloca dentro o cerca del área específica que se
              está tratando. La mayor parte del medicamento actúa localmente, y solo una cantidad
              menor puede pasar al resto del cuerpo.
            </p>
            <p>
              Por esa razón, las inyecciones ocasionales de esteroides usadas de manera apropiada
              tienen mucho menos probabilidad de causar efectos generales en todo el cuerpo, como
              pérdida generalizada de hueso u osteoporosis.
            </p>
            <p>
              Esto no significa que las inyecciones de esteroides deban usarse sin límites. El
              riesgo de efectos secundarios puede aumentar con dosis más altas, inyecciones
              repetidas o inyecciones realizadas con demasiada frecuencia en la misma área.
              Dependiendo del lugar, la exposición repetida a esteroides puede causar preocupación
              relacionada con cartílago, tendones, cambios en la piel o tejidos cercanos.
            </p>
            <p>
              El Dr. Dardashti considera el cuadro clínico completo del paciente antes de
              recomendar una inyección de esteroide, incluyendo edad, diagnóstico, hallazgos de
              imagen, diabetes, historial de osteoporosis, medicamentos, riesgo de infección y
              respuesta a tratamientos previos.
            </p>
          </div>
        </div>
      </section>

      {/* AZÚCAR EN LA SANGRE */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Azúcar</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Inyecciones de esteroides y azúcar en la sangre
            </h2>
            <p>
              Las inyecciones de esteroides pueden aumentar temporalmente el azúcar en la sangre.
              Esto es especialmente importante para pacientes con diabetes o prediabetes.
            </p>
            <p>
              En muchos pacientes, el aumento es temporal y puede durar algunos días. La cantidad
              y duración del aumento pueden variar de una persona a otra.
            </p>
            <p>
              Los pacientes con diabetes deben revisar su azúcar con más frecuencia después de una
              inyección de esteroide. Los pacientes que usan insulina, tienen diabetes difícil de
              controlar o han tenido aumentos importantes del azúcar después de esteroides en el
              pasado deben planear con anticipación antes del procedimiento.
            </p>
            <p className="font-semibold text-[#0a0a0a]">
              Si usted tiene diabetes, debe coordinar con:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "Su médico de atención primaria que maneja su diabetes",
                "Su médico tratante de diabetes o endocrinólogo, si corresponde",
                "El médico que realiza la inyección",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              Esta coordinación es importante para que su azúcar se pueda vigilar de forma segura
              y para que se puedan hacer ajustes a sus medicamentos si es necesario.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEXTO DEL TRATAMIENTO */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Contexto</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Cómo las inyecciones de esteroides encajan en un plan de tratamiento
            </h2>
            <p>
              Las inyecciones de esteroides no están destinadas a ser el único tratamiento para
              la mayoría de las condiciones de dolor. Generalmente se consideran como parte de un
              plan más amplio que puede incluir fisioterapia, ejercicios en casa, modificación de
              actividades, control de peso, revisión de medicamentos, revisión de imágenes y otras
              opciones no quirúrgicas.
            </p>
            <p>
              El objetivo es disminuir el dolor y la inflamación lo suficiente para mejorar la
              función, la movilidad y la participación en rehabilitación cuando sea apropiado.
            </p>
            <p>
              La respuesta varía. Algunos pacientes tienen alivio significativo, otros tienen
              alivio parcial y otros pueden no responder. La duración del alivio también varía
              según la condición tratada y el paciente individual.
            </p>
          </div>
        </div>
      </section>

      {/* RIESGOS Y LIMITACIONES */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Riesgos</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Riesgos y limitaciones
            </h2>
            <p>
              Como cualquier procedimiento, las inyecciones de esteroides tienen posibles riesgos.
              Estos pueden incluir dolor temporal en el sitio de la inyección, aumento temporal del
              dolor, sangrado, infección, reacción alérgica, enrojecimiento facial, aumento
              temporal del azúcar en la sangre, cambios en el color de la piel, cambios en tejidos
              blandos, debilitamiento de tendones, preocupaciones relacionadas con el cartílago
              dependiendo del sitio de la inyección o falta de alivio significativo.
            </p>
            <p>
              Las complicaciones graves son poco comunes, pero el riesgo depende del tipo de
              procedimiento, el lugar de la inyección, los medicamentos, el historial médico y
              los factores individuales del paciente.
            </p>
            <p>
              Se requiere una evaluación clínica formal para determinar si una inyección de
              esteroide es apropiada. Esta página es solo para fines informativos generales y no
              proporciona consejo médico, diagnóstico ni tratamiento.
            </p>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Preguntas</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Preguntas frecuentes
            </h2>
            <div className="space-y-8">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="font-bold text-[#0a0a0a] mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {item.question}
                  </h3>
                  <p className="text-[#666] text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Importante</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <p>
              Esta página es solo para fines informativos generales y no constituye consejo médico
              ni crea una relación médico-paciente. Todas las decisiones médicas deben tomarse en
              consulta con un proveedor de salud calificado después de una evaluación clínica
              exhaustiva.
            </p>
            <p>
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a pacientes
              de los valles de San Fernando y Santa Clarita y las comunidades circundantes del
              área de Los Ángeles.
            </p>
          </div>
        </div>
      </section>

      {/* PÁGINAS RELACIONADAS */}
      <section className="bg-[#f9f7f4] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Relacionado</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Procedimientos &amp; Condiciones relacionadas.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/es/procedimientos/inyecciones-epidurales-de-esteroides" className="text-[#c8a020] hover:underline tracking-wide">Inyecciones epidurales de esteroides →</Link></li>
              <li><Link href="/es/procedimientos/bloqueos-de-rama-medial" className="text-[#c8a020] hover:underline tracking-wide">Bloqueos de rama medial y facetarios →</Link></li>
              <li><Link href="/es/procedimientos/ablacion-por-radiofrecuencia" className="text-[#c8a020] hover:underline tracking-wide">Ablación por radiofrecuencia →</Link></li>
              <li><Link href="/es/procedimientos/plasma-rico-en-plaquetas-prp" className="text-[#c8a020] hover:underline tracking-wide">Plasma rico en plaquetas (PRP) →</Link></li>
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los procedimientos →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
