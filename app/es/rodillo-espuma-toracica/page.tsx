import type { Metadata } from "next";
import Link from "next/link";
import VirtualConsultationBanner from "@/components/VirtualConsultationBanner";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/rodillo-espuma-toracica";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Rodillo de Espuma Torácica para Movilidad | Dr. Simon Dardashti" },
  description:
    "Rodillo de espuma torácico para mejorar la movilidad de la espalda superior y reducir el dolor de cuello y hombro. Anatomía, beneficios, técnica adecuada y precauciones.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Rodillo de Espuma Torácica para Movilidad | Dr. Simon Dardashti",
    description:
      "Rodillo de espuma torácico para mejorar la movilidad de la espalda superior y reducir el dolor de cuello y hombro. Anatomía, beneficios, técnica adecuada y precauciones.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Dr. Simon Dardashti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodillo de Espuma Torácica para Movilidad | Dr. Simon Dardashti",
    description:
      "Rodillo de espuma torácico para mejorar la movilidad de la espalda superior y reducir el dolor de cuello y hombro. Anatomía, beneficios, técnica adecuada y precauciones.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Rodillo de Espuma Torácica para Movilidad | Dr. Simon Dardashti",
  url: PAGE_URL,
  description:
    "Rodillo de espuma torácico para mejorar la movilidad de la espalda superior y reducir el dolor de cuello y hombro.",
  inLanguage: "es-ES",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Rodillo de Espuma Torácica", item: PAGE_URL },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la columna torácica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La columna torácica es la sección media de la columna vertebral, que comprende 12 vértebras desde aproximadamente el nivel de los omóplatos hasta la caja torácica. A diferencia de la columna cervical (cuello) diseñada para movilidad, la columna torácica prioriza la estabilidad y sirve como puntos de unión para las costillas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué la rigidez torácica afecta el dolor de cuello y hombro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuando la columna torácica pierde movilidad, la columna cervical y los hombros deben compensar moviéndose más, lo que puede crear o empeorar el dolor. Mejorar la movilidad torácica puede reducir el estrés compensatorio en el cuello y los hombros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro el rodillo de espuma torácico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para la mayoría de las personas, el rodillo de espuma suave es generalmente seguro cuando se realiza correctamente. Sin embargo, ciertas condiciones requieren precaución, incluyendo osteoporosis o cirugía reciente. Consulte a un proveedor de salud si tiene preocupaciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué frecuencia debo usar el rodillo de espuma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de las recomendaciones sugieren usar el rodillo suavemente algunos días a la semana. La frecuencia puede variar según su tolerancia y síntomas. Comience conservadoramente y aumente gradualmente si se tolera.",
      },
    },
    {
      "@type": "Question",
      name: "¿Debe doler el rodillo de espuma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El rodillo de espuma torácico debe producir presión leve o molestia, no dolor agudo. Si experimenta dolor agudo, deténgase inmediatamente. La sensación leve es normal, pero el dolor agudo o severo indica que debe discontinuar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo usar rodillo de espuma si tengo osteoporosis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El rodillo de espuma torácico conlleva un mayor riesgo de fractura por compresión si tiene osteoporosis u osteopenia. Un proveedor de salud debe evaluar si el rodillo de espuma es apropiado para su estado de densidad ósea.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo hasta que noto mejora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El cronograma varía. Algunas personas notan movilidad mejorada o dolor reducido dentro de días a semanas de uso consistente del rodillo. Otros requieren semanas a meses. La práctica regular y la técnica adecuada importan.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo usar rodillo de espuma después de cirugía de columna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El rodillo de espuma torácico después de cirugía requiere aprobación del cirujano. El tiempo y las restricciones dependen de la cirugía específica y su curación. Siempre consulte a su cirujano antes de reanudar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es el rodillo de espuma un substituto de la terapia física?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El rodillo de espuma es una herramienta que puede complementar la terapia física, pero no sustituye la evaluación y tratamiento profesional. Un fisioterapeuta puede determinar si es apropiado e integrarlo en su plan.",
      },
    },
  ],
};

export default function RodilloEspumaToracicaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Movilidad y Liberación
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Rodillo de Espuma
            <br />
            <em className="not-italic text-[#888]">Torácica.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Mejorando la movilidad de la espalda superior para reducir el dolor de cuello y hombro. Anatomía, técnica y precauciones.
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
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Anatomía</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Anatomía de la Columna Torácica.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                La columna torácica es la sección media de la columna vertebral, que comprende 12 vértebras desde aproximadamente el nivel de los omóplatos hasta la caja torácica. A diferencia de la columna cervical (cuello) diseñada para movilidad, la columna torácica prioriza la estabilidad y sirve como puntos de unión para las costillas.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                La columna torácica tiene curvas naturales y está sostenida por ligamentos fuertes y la caja torácica misma. Este diseño proporciona estabilidad para proteger órganos internos pero puede resultar en movilidad naturalmente limitada en comparación con otras regiones de la columna.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Sin embargo, la postura moderna—particularmente el exceso de sedentarismo y la postura de cabeza hacia adelante—a menudo resulta en rigidez torácica progresiva más allá de las características naturales de la columna.
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
                Por Qué la Rigidez Torácica Contribuye al Dolor.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Cuando la columna torácica se pone rígida, las regiones adyacentes deben compensar. La columna cervical (cuello) y las articulaciones de los hombros aumentan su movimiento para acomodar tareas que idealmente involucrarían movilidad torácica.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Esta compensación puede llevar a o empeorar el dolor de cuello, dolor de hombro y dolores de cabeza. La columna cervical y las estructuras de los hombros no están optimizadas para movimiento excesivo—cuando se ven obligadas a compensar la rigidez torácica, pueden desarrollar dolor.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Mejorar la movilidad torácica puede reducir el estrés compensatorio en el cuello y los hombros, potencialmente disminuyendo el dolor.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Beneficios</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Beneficios Potenciales del Rodillo de Espuma Torácico.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                Cuando se realiza correctamente, el rodillo de espuma torácico puede:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Mejorar la movilidad de la extensión torácica—particularmente importante para el equilibrio postural",
                  "Reducir la tensión de puntos gatillo en los músculos torácicos",
                  "Mejorar la postura reduciendo el redondeamiento hacia adelante de la espalda superior",
                  "Reducir el estrés compensatorio en el cuello y los hombros",
                  "Disminuir el dolor de cuello o hombro relacionado con la rigidez torácica",
                  "Servir como parte de un enfoque más amplio para el manejo del dolor de la extremidad superior",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
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
                Técnica Adecuada de Rodillo de Espuma Torácico.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                Principios clave para uso seguro y efectivo:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Posicionar el rodillo de espuma horizontalmente a través de la columna torácica (no verticalmente a lo largo de la columna)",
                  "Apoyar la cabeza y el cuello con las manos para mantener una posición neutral",
                  "Usar las piernas para control—empujar suavemente con los pies para rodar lentamente de atrás hacia adelante",
                  "Rodar sobre el área de la caja torácica; evitar rodar directamente sobre la columna",
                  "Respirar continuamente—no retener la respiración",
                  "Comenzar con presión más ligera y progresar gradualmente",
                  "Realizar durante 30 segundos a 1 minuto a la vez",
                  "Detenerse si experimenta dolor agudo—la sensación de presión leve es normal",
                  "Combinar con estiramientos de extensión suave (como extensión de espalda apoyada)",
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
                Errores que reducen la efectividad o aumentan el riesgo:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Rodar a lo largo de la columna verticalmente—el rodillo debe estar horizontal a través de la columna",
                  "Falta de apoyo del cuello—el cuello debe estar apoyado por las manos para evitar tensión de extensión",
                  "Rodillo demasiado agresivo—debe ser movimientos lentos y controlados con presión ligera",
                  "Rodar demasiado rápido—la lentitud reduce el tiempo para respuesta tisular e incrementa molestia",
                  "Negligencia en respiración—retener la respiración aumenta tensión y riesgo",
                  "Ignorar dolor agudo—debe detener inmediatamente si experimenta dolor agudo",
                  "Duración excesiva—comenzar con sesiones largas; debe comenzar conservadoramente",
                  "Rodar en áreas óseas—debe apuntar a tejido blando de caja torácica, no costillas o procesos espinosos",
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
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Contraindicaciones</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Contraindicaciones y Consideraciones de Seguridad.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                El rodillo de espuma torácico puede no ser apropiado para:
              </p>
              <ul className="space-y-3 max-w-2xl mb-6">
                {[
                  "Osteoporosis u osteopenia—riesgo de fractura por compresión",
                  "Cirugía de columna o torácica reciente—requiere aprobación del cirujano para tiempo",
                  "Lesiones agudas de tórax o costillas",
                  "Degeneración espinal severa o inestabilidad",
                  "Exacerbación aguda de dolor o inflamación",
                  "Embarazo (consultar a proveedor de salud)",
                  "Cualquier condición que cause fragilidad espinal o riesgo elevado de fractura",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Un proveedor de salud debe evaluar su situación individual antes de comenzar el rodillo de espuma torácico, particularmente si tiene preocupaciones sobre densidad ósea o cirugía reciente.
              </p>
            </div>
          </div>

          {/* 07 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>07</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Cronograma</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Cronograma Esperado para Mejora.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Como otras intervenciones de movilidad y manejo del dolor, el cronograma para mejora varía entre individuos:
              </p>
              <ul className="space-y-3 max-w-2xl">
                {[
                  "Efecto inmediato: Sensación temporal mejorada de movilidad o reducción de tensión muscular",
                  "Agudo: Dentro de días a algunas semanas, algunos pacientes notan postura mejorada o tensión reducida en cuello/hombro",
                  "Corto plazo: Después de 2-4 semanas de rodillo consistente, mejoras medibles en movilidad de extensión torácica",
                  "Mediano plazo: Después de 4-8 semanas de práctica consistente, algunos pacientes reportan reducción sostenida en dolor compensatorio de cuello/hombro",
                  "Largo plazo: La continuación de la práctica ayuda a mantener ganancias de movilidad; la discontinuación típicamente resulta en pérdida gradual de mejoras",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
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
                  q: "¿Qué es la columna torácica?",
                  a: "La columna torácica es la sección media de la columna, desde aproximadamente el nivel de los omóplatos a través de la caja torácica. Incluye 12 vértebras y está diseñada para estabilidad más que movilidad extensiva.",
                },
                {
                  q: "¿Por qué la rigidez torácica afecta el dolor de cuello y hombro?",
                  a: "Cuando la columna torácica pierde movilidad, el cuello y los hombros deben compensar moviéndose más, creando o empeorando el dolor. Mejorar la movilidad torácica puede reducir estrés compensatorio.",
                },
                {
                  q: "¿Es seguro el rodillo de espuma torácico?",
                  a: "Para la mayoría, el rodillo suave es generalmente seguro cuando se realiza correctamente. Ciertas condiciones requieren precaución, incluyendo osteoporosis o cirugía reciente.",
                },
                {
                  q: "¿Con qué frecuencia debo usar el rodillo?",
                  a: "La mayoría sugiere algunos días a la semana. La frecuencia varía según tolerancia y síntomas. Comience conservadoramente y aumente gradualmente si se tolera.",
                },
                {
                  q: "¿Debe doler el rodillo de espuma?",
                  a: "Debe producir presión leve, no dolor agudo. La sensación leve es normal, pero el dolor agudo o severo indica que debe detener inmediatamente.",
                },
                {
                  q: "¿Puedo usar rodillo si tengo osteoporosis?",
                  a: "Conlleva mayor riesgo de fractura por compresión con osteoporosis. Un proveedor debe evaluar si es apropiado para su densidad ósea.",
                },
                {
                  q: "¿Cuánto tiempo antes de notar mejora?",
                  a: "Algunos notan cambios en días a semanas de uso consistente. Otros requieren semanas a meses. La práctica regular y técnica adecuada importan.",
                },
                {
                  q: "¿Puedo usar rodillo después de cirugía de columna?",
                  a: "Requiere aprobación del cirujano. El tiempo y restricciones dependen de su cirugía específica y curación. Consulte siempre a su cirujano primero.",
                },
                {
                  q: "¿Es el rodillo un substituto de terapia física?",
                  a: "No. Puede complementar la terapia física pero no la sustituye. Un PT puede determinar la apropiabilidad e integración.",
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
              <li><Link href="/es/ejercicios-mcgill-big-3" className="text-[#c8a020] hover:underline tracking-wide">Ejercicios McGill Big 3 para Estabilidad →</Link></li>
              <li><Link href="/es/condiciones/dolor-de-cuello" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor de Cuello →</Link></li>
              <li><Link href="/es/condiciones/cefalea-cervicogenica" className="text-[#c8a020] hover:underline tracking-wide">Cefalea Cervicogénica →</Link></li>
              <li><Link href="/es/condiciones/dolor-miofascial" className="text-[#c8a020] hover:underline tracking-wide">Dolor Miofascial →</Link></li>
              <li><Link href="/es/dolor-sin-imagenes" className="text-[#c8a020] hover:underline tracking-wide">Dolor Sin Hallazgos en Imágenes →</Link></li>
              <li><Link href="/virtual-consultations" className="text-[#c8a020] hover:underline tracking-wide">Agendar Consulta Virtual →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <VirtualConsultationBanner />

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/rodillo-espuma-toracica" locale="es" />
    </>
  );
}
