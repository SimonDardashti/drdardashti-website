import type { Metadata } from "next";
import Link from "next/link";
import VirtualConsultationBanner from "@/components/VirtualConsultationBanner";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/ejercicios-mcgill-big-3";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Ejercicios McGill Big 3 para Dolor de Espalda Baja | Dr. Simon Dardashti" },
  description:
    "Ejercicios basados en evidencia McGill Big 3: flexiones, planchas laterales y pájaros voladores para estabilidad espinal. Quién se beneficia, técnica adecuada y errores comunes.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Ejercicios McGill Big 3 para Dolor de Espalda Baja | Dr. Simon Dardashti",
    description:
      "Ejercicios basados en evidencia McGill Big 3: flexiones, planchas laterales y pájaros voladores para estabilidad espinal. Quién se beneficia, técnica adecuada y errores comunes.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Dr. Simon Dardashti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ejercicios McGill Big 3 para Dolor de Espalda Baja | Dr. Simon Dardashti",
    description:
      "Ejercicios basados en evidencia McGill Big 3: flexiones, planchas laterales y pájaros voladores para estabilidad espinal. Quién se beneficia, técnica adecuada y errores comunes.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Ejercicios McGill Big 3 para Dolor de Espalda Baja | Dr. Simon Dardashti",
  url: PAGE_URL,
  description:
    "Ejercicios basados en evidencia McGill Big 3: flexiones, planchas laterales y pájaros voladores para estabilidad espinal.",
  inLanguage: "es-ES",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Ejercicios McGill Big 3", item: PAGE_URL },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quién fue Stuart McGill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stuart McGill es un biomecánico e investigador que pasó décadas estudiando la mecánica espinal y las relaciones entre el ejercicio, la carga espinal y el dolor. Su investigación enfatizó la importancia de la estabilidad espinal y el control motor para manejar el dolor de espalda.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué estos tres ejercicios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "McGill abogó por un conjunto modesto de ejercicios dirigidos a los músculos clave involucrados en la estabilidad espinal. Los Big 3 fueron diseñados para ser efectivos sin carga espinal excesiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Son los ejercicios McGill una cura para el dolor de espalda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los ejercicios McGill son un componente del manejo del dolor de espalda. Pueden reducir síntomas y mejorar la función para algunos pacientes, pero los resultados varían y deben realizarse correctamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo hacer estos ejercicios por mi cuenta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aunque algunos aprenden de videos, la instrucción profesional de un fisioterapeuta asegura la forma correcta, progresión apropiada e identificación de ejercicios inadecuados para su condición.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué frecuencia debo hacer estos ejercicios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las recomendaciones típicas son diarias o varias veces por semana. Su fisioterapeuta determinará la frecuencia y progresión apropiadas según su respuesta clínica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo debo dejar de hacer estos ejercicios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deténgase si los ejercicios causan dolor agudo, síntomas radiculares o empeoramiento de la función. El malestar leve durante la forma adecuada es diferente del dolor que indica que debe detenerse.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién debe evitar los ejercicios McGill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los pacientes con ciertas condiciones—como radiculopatía aguda severa, estenosis espinal con síntomas neurológicos significativos, o cirugía espinal reciente—pueden no ser candidatos apropiados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo personaliza un fisioterapeuta estos ejercicios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un fisioterapeuta modifica la intensidad, rango de movimiento, frecuencia y progresión del ejercicio según su diagnóstico, respuesta al dolor, objetivos funcionales y condiciones subyacentes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo antes de notar mejora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El cronograma varía. Algunos pacientes notan cambios dentro de semanas de práctica consistente. Otros requieren meses. La consistencia y la técnica adecuada importan.",
      },
    },
  ],
};

export default function EjerciciosMcGillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Ejercicio y Estabilidad
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Ejercicios McGill
            <br />
            <em className="not-italic text-[#888]">Big 3.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Enfoque de ejercicio basado en evidencia para estabilidad espinal: flexiones, planchas laterales y pájaros voladores. Quién se beneficia, técnica adecuada y errores comunes.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* 01 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Quién</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                ¿Quién Fue Stuart McGill?
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Stuart McGill es un biomecánico e investigador que pasó décadas investigando la mecánica espinal, la carga espinal durante el movimiento y la relación entre el ejercicio, el control motor y el dolor de espalda. Su trabajo enfatizó la comprensión de cómo funciona la columna vertebral y cómo cargarla apropiadamente durante el ejercicio.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                McGill abogó por enfoques de ejercicio específicos basados en evidencia en lugar de fortalecimiento central generalizado. Su investigación identificó principios clave para ejercicio espinal seguro.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Por Qué</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Por Qué Importa la Estabilidad Espinal.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                La estabilidad espinal se refiere a la acción coordinada de los músculos que rodean la columna vertebral—particularmente los estabilizadores profundos del núcleo—trabajando para apoyar y controlar el movimiento espinal. La estabilidad adecuada ayuda a manejar las fuerzas y cargas colocadas en la columna durante las actividades diarias.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                La estabilidad espinal pobre o el control motor pueden contribuir al dolor o disfunción. Los ejercicios Big 3 de McGill apuntan a músculos clave involucrados en la estabilidad: el transverso abdominal, multífido y cuadrado lumbar.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Estos ejercicios fueron diseñados para construir estabilidad sin compresión espinal excesiva o fuerzas de flexión.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Los Tres</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Los Tres Ejercicios.
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">Flexión Abdominal (Curl-up)</h3>
                <p className="text-[#666] text-base leading-relaxed mb-3 max-w-2xl">
                  La flexión abdominal apunta al recto abdominal sin flexión espinal excesiva. Se realiza apoyando la cabeza con las manos y levantando suavemente los hombros un poco mientras se mantiene una columna lumbar neutral. El movimiento es modesto y controlado.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">Plancha Lateral (Side Plank)</h3>
                <p className="text-[#666] text-base leading-relaxed mb-3 max-w-2xl">
                  La plancha lateral apunta al cuadrado lumbar y estabilizadores laterales. Se realiza apoyando el peso corporal en el antebrazo y pies (o rodillas) en una posición de línea recta. El ejercicio construye estabilidad lateral sin movimiento espinal.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">Pájaro Volador (Bird Dog)</h3>
                <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                  El pájaro volador apunta al multífido y promueve el control motor. Se realiza en posición cuadrúpeda (manos y rodillas) extendiendo el brazo y la pierna opuestos mientras se mantiene una columna neutral. El ejercicio enfatiza la coordinación y el control en lugar de la fuerza.
                </p>
              </div>
            </div>
          </div>

          {/* 04 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Técnica</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                La Forma Adecuada es Importante.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                La técnica correcta es esencial. La forma impropia reduce la efectividad del ejercicio e aumenta el riesgo de provocación de síntomas. Los principios clave incluyen:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Mantener una posición espinal neutral (evitar flexión o extensión excesiva)",
                  "Movimiento controlado en lugar de velocidad o impulso",
                  "Respiración continua (evitar retener la respiración)",
                  "Comenzar con intensidad modesta y progresar gradualmente",
                  "Detenerse si los ejercicios provocan dolor agudo o síntomas radiculares",
                  "Consistencia—la práctica regular importa más que la intensidad",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 05 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Errores</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Errores Comunes.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                Errores comunes que reducen la efectividad o aumentan el riesgo:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Flexión o extensión espinal excesiva—la columna debe permanecer neutral",
                  "Movimientos rápidos o rebotantes—deben ser lentos y controlados",
                  "Retener la respiración—la respiración continua es importante",
                  "Progresión de intensidad excesiva—el progreso lento y consistente funciona mejor",
                  "Alineación deficiente (caderas hundidas o levantadas en planchas)—la alineación importa",
                  "Continuar a pesar del dolor—el dolor agudo o síntomas radiculares indican detención",
                  "Descuidar calentamiento o contexto—los ejercicios deben encajar en la actividad general",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 06 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>06</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Consideraciones</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Contraindicaciones y Precauciones.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Los ejercicios McGill no son apropiados para todos los pacientes. Las condiciones donde se justifica precaución incluyen:
              </p>
              <ul className="space-y-3 max-w-2xl mb-4">
                {[
                  "Radiculopatía aguda severa con signos neurológicos",
                  "Estenosis espinal con síntomas neurológicos significativos",
                  "Cirugía espinal reciente (consulte al cirujano sobre el tiempo)",
                  "Osteoporosis significativa (riesgo de fractura por compresión)",
                  "Síntomas del síndrome de cauda equina",
                  "Inflamación o infección no controlada",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Un fisioterapeuta o médico debe evaluar estas condiciones antes de comenzar los ejercicios McGill.
              </p>
            </div>
          </div>

          {/* 07 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>07</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Personalización</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Cómo los Fisioterapeutas Personalizan Estos Ejercicios.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Un fisioterapeuta adapta los ejercicios McGill según su presentación individual por:
              </p>
              <ul className="space-y-3 max-w-2xl mb-4">
                {[
                  "Modificar la posición inicial (rodilla doblada vs recta, rango reducido)",
                  "Ajustar repeticiones y series según su respuesta",
                  "Progresar la intensidad gradualmente a medida que mejoran los síntomas",
                  "Eliminar o modificar ejercicios si provocan síntomas",
                  "Agregar ejercicios complementarios abordando sus deficiencias específicas",
                  "Enseñar forma adecuada y corregir errores de técnica",
                  "Monitorear signos de que el ejercicio debe reducirse o detenerse",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                La orientación profesional ayuda a garantizar que los ejercicios sigan siendo seguros y beneficiosos para su condición específica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Preguntas</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Preguntas Frecuentes.
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "¿Son estos ejercicios una cura para el dolor de espalda?",
                  a: "No. Los ejercicios McGill son un componente del manejo del dolor de espalda. Pueden reducir síntomas y mejorar la función, pero los resultados varían.",
                },
                {
                  q: "¿Puedo hacer estos ejercicios por mi cuenta?",
                  a: "La instrucción profesional de un fisioterapeuta asegura la forma correcta, progresión apropiada e identificación de ejercicios inadecuados.",
                },
                {
                  q: "¿Con qué frecuencia debo hacer estos ejercicios?",
                  a: "Las recomendaciones típicas son diarias o varias veces por semana. Su fisioterapeuta determinará la frecuencia y progresión apropiadas.",
                },
                {
                  q: "¿Cuándo debo dejar de hacer estos ejercicios?",
                  a: "Deténgase si causan dolor agudo, síntomas radiculares o empeoramiento de la función. El malestar leve es diferente del dolor indicando parada.",
                },
                {
                  q: "¿Quién debe evitar estos ejercicios?",
                  a: "Los pacientes con radiculopatía aguda severa, estenosis significativa o cirugía reciente pueden no ser apropiados.",
                },
                {
                  q: "¿Cuánto tiempo antes de notar mejora?",
                  a: "Algunos notan cambios en semanas de práctica consistente. Otros requieren meses. La consistencia y técnica importan.",
                },
                {
                  q: "¿Necesito equipo?",
                  a: "No. Los ejercicios McGill requieren solo su peso corporal. Una colchoneta o toalla para comodidad es opcional.",
                },
                {
                  q: "¿Qué si tengo osteoporosis?",
                  a: "Ciertas posiciones pueden presentar mayor riesgo. Un fisioterapeuta o médico debe aconsejar según su densidad ósea.",
                },
                {
                  q: "¿Debo hacer estos ejercicios para siempre?",
                  a: "Algunos pacientes continúan a largo plazo para mantenimiento. Otros progresan a ejercicios más desafiantes. Un PT ayuda a determinar el enfoque correcto.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-[#0a0a0a] mb-2">{item.q}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Relacionado</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Recursos Relacionados.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/es/cuidados-conservadores" className="text-[#c8a020] hover:underline tracking-wide">Tratamientos Conservadores para el Dolor Crónico →</Link></li>
              <li><Link href="/es/rodillo-espuma-toracica" className="text-[#c8a020] hover:underline tracking-wide">Rodillo de Espuma Torácica para Movilidad →</Link></li>
              <li><Link href="/es/condiciones/dolor-lumbar" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor de Espalda Baja →</Link></li>
              <li><Link href="/es/dolor-sin-imagenes" className="text-[#c8a020] hover:underline tracking-wide">Dolor Sin Hallazgos en Imágenes →</Link></li>
              <li><Link href="/es/opciones-de-tratamiento" className="text-[#c8a020] hover:underline tracking-wide">Marco de Decisión de Tratamiento →</Link></li>
              <li><Link href="/es/que-esperar-consulta-dolor" className="text-[#c8a020] hover:underline tracking-wide">Qué Esperar Durante Su Consulta →</Link></li>
              <li><Link href="/virtual-consultations" className="text-[#c8a020] hover:underline tracking-wide">Agendar Consulta Virtual →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <VirtualConsultationBanner />

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/ejercicios-mcgill-big-3" locale="es" />
    </>
  );
}
