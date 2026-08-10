import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/cefalea-cervicogenica";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Cefalea Cervicogénica | Simon Dardashti, MD" },
  description:
    "Guía completa sobre cefalea cervicogénica: cómo los problemas del cuello causan dolor de cabeza, por qué la imagen puede ser normal y qué opciones de tratamiento ayudan.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Cefalea Cervicogénica | Simon Dardashti, MD",
    description:
      "Entendiendo cefalea cervicogénica: cuando irritación del cuello causa dolor de cabeza referido.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cefalea Cervicogénica | Simon Dardashti, MD",
    description: "Cuando problemas del cuello causan dolor de cabeza: cefalea cervicogénica y opciones de tratamiento.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "Cefalea Cervicogénica | Simon Dardashti, MD",
  url: PAGE_URL,
  headline: "Cefalea Cervicogénica: Cuando los Problemas del Cuello Causan Dolor de Cabeza",
  description:
    "Guía completa sobre cefalea cervicogénica escrita por un especialista en medicina del dolor certificado. Cubre cómo estructuras del cuello causan dolor de cabeza, síntomas, diagnóstico, interpretación de imagen, y opciones de tratamiento basadas en evidencia.",
  image: "https://www.drdardashti.com/headshot.webp",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  author: {
    "@type": "Person",
    name: "Simon Dardashti, MD",
    title: "Especialista en Medicina del Dolor Certificado",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Simon Dardashti, MD",
  },
  about: { "@type": "MedicalCondition", name: "Cefalea Cervicogénica" },
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Pueden los problemas del cuello realmente causar dolores de cabeza?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las cefaleas cervicogénicas ocurren cuando irritación en el cuello—por artritis articular, tensión muscular, irritación nerviosa, o problemas de disco—dispara señales de dolor que viajan a la cabeza. El dolor típicamente comienza en la base del cráneo y se propaga hacia la frente o sien. Esto es distinto de migrañas, que se originan en el cerebro.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tan comunes son las cefaleas cervicogénicas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las cefaleas cervicogénicas representan 15-20% de los dolores de cabeza crónicos. Muchas personas las experimentan después de lesión cervical (latigazo), por mala postura con el tiempo, o por artritis cervical. Son subdiagnosticadas porque muchos pacientes con dolor de cuello no se dan cuenta de que sus dolores de cabeza se originan del cuello.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué mi MRI se ve normal si mi cuello está causando dolores de cabeza?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Muchas cefaleas cervicogénicas surgen de artritis articular, irritación muscular, o irritación nerviosa que no aparece en MRI estándar. Anormalidades pequeñas de articulación, patrones de tensión muscular, e irritación nerviosa leve pueden todas causar dolores de cabeza significativos sin hallazgos de imagen claros. Por eso la evaluación clínica—su historial y examen físico—importa más que la imagen para cefalea cervicogénica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo difiere la cefalea cervicogénica de la migraña?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las cefaleas cervicogénicas se originan del cuello y típicamente son unilaterales, constantes, y peor con ciertas posiciones del cuello. Las migrañas se originan en el cerebro y frecuentemente son pulsátiles, afectan ambos lados (aunque pueden ser unilaterales), y frecuentemente vienen con sensibilidad a luz o náusea. Algunas personas tienen ambas condiciones. El diagnóstico apropiado ayuda a guiar el tratamiento correcto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué son bloqueos del nervio occipital y cómo ayudan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los nervios occipitales pasan a través del cuello y viajan a la parte posterior de la cabeza. Los bloqueos del nervio occipital entregan medicamento adormecedor alrededor de estos nervios. Si la inyección proporciona alivio, confirma que estructuras del cuello irritando estos nervios están causando su dolor de cabeza. El bloqueo puede proporcionar alivio temporal e identifica si es candidato para tratamientos de más larga duración.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede la fisioterapia ayudar con cefaleas cervicogénicas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La fisioterapia dirigida a postura, flexibilidad cervical, y fuerza muscular frecuentemente ayuda con cefaleas cervicogénicas. Ejercicios específicos que mejoran alineación del cuello y reducen tensión muscular pueden proporcionar alivio significativo. Algunos pacientes mejoran solo con terapia, mientras otros se benefician de combinar terapia con inyecciones u otros tratamientos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es ablación por radiofrecuencia para cefalea cervicogénica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La ablación por radiofrecuencia usa calor para reducir señales de dolor de nervios cervicales y articulaciones causando dolores de cabeza. Se considera después de que inyecciones diagnósticas han identificado qué estructuras del cuello son responsables. El procedimiento puede proporcionar alivio durando varios meses a un año o más.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es la cefalea cervicogénica permanente o puede mejorar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Muchas cefaleas cervicogénicas mejoran con tratamiento apropiado. Fisioterapia, fortalecimiento del cuello, corrección de postura, y modificación de actividad ayudan a muchas personas. Otros se benefician de intervenciones de procedimientos. La clave es identificar que el cuello es la fuente del problema y luego abordarlo sistemáticamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Debería ver a un neurólogo o especialista en dolor para cefaleas cervicogénicas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ambos pueden ser apropiados dependiendo de su situación. Los neurólogos se especializan en trastornos de dolor de cabeza en general. Los especialistas en dolor como yo nos especializamos en diagnosticar y tratar dolor originándose de estructuras del cuello específicas. Si se sospecha cefalea cervicogénica, un especialista en dolor puede realizar inyecciones diagnósticas y tratamientos de procedimientos dirigidos a la fuente del cuello.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Condiciones", item: `${SITE_URL}/es/condiciones` },
      { "@type": "ListItem", position: 3, name: "Cefalea Cervicogénica", item: PAGE_URL },
    ],
  },
};

export default function CefaleaCervicogenicaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Cefalea Cervicogénica
        </h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Tiene dolores de cabeza regulares que parecen comenzar en su cuello. Frecuentemente se sienten unilaterales, constantes, y peor con ciertas posiciones de cabeza o cuello. Ha visto múltiples especialistas, pero su MRI se ve relativamente normal. Se pregunta: ¿Pueden problemas del cuello realmente causar dolores de cabeza?
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La respuesta es sí. Las cefaleas cervicogénicas—dolores de cabeza que se originan de estructuras del cuello—son más comunes de lo que muchos pacientes e incluso médicos se dan cuenta. Representan 15-20% de los dolores de cabeza crónicos pero frecuentemente se pasan por alto o se atribuyen a otras causas.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Esta página explica qué son las cefaleas cervicogénicas, cómo los problemas del cuello causan dolor de cabeza, por qué su imagen puede verse normal a pesar de síntomas significativos, y qué opciones de tratamiento pueden realmente ayudar.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            ¿Qué Es una Cefalea Cervicogénica?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Una cefalea cervicogénica es dolor que se origina de estructuras en el cuello pero se siente en la cabeza. Es un patrón de dolor referido—su cerebro interpreta señales de dolor de estructuras irritadas del cuello como dolor de cabeza.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Las características típicas incluyen:</strong>
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Dolor de cabeza típicamente en un lado de la cabeza</li>
            <li>Dolor que comienza en la base del cráneo e irradia hacia la frente, sien, u ojo</li>
            <li>Dolor constante (no pulsátil)</li>
            <li>Dolor de cabeza empeora con ciertas posiciones o movimientos del cuello</li>
            <li>Frecuentemente acompañado por dolor de cuello o rigidez</li>
            <li>Sin náusea o sensibilidad a la luz (distinguiéndolo de migraña)</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Las cefaleas cervicogénicas se desarrollan cuando estructuras en el cuello irritan nervios—particularmente los nervios occipitales y nervios cervicales superiores—que viajan hacia la cabeza.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cómo Estructuras del Cuello Pueden Causar Dolor de Cabeza
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Varias estructuras del cuello pueden irritar nervios y disparar cefaleas cervicogénicas:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Articulaciones Facetarias Cervicales</h3>
              <p className="text-gray-700">
                Las pequeñas articulaciones conectando vértebras cervicales (especialmente en C2-C3 y C3-C4) pueden desarrollar artritis o irritación. Cuando se inflaman, estas articulaciones irritan nervios cercanos, disparando dolor referido en la cabeza.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Raíces Nerviosas Cervicales</h3>
              <p className="text-gray-700">
                Las raíces nerviosas cervicales superiores (C2, C3) pueden irritarse por abultamiento de disco, espolones óseos, tensión muscular, o inflamación. Esta irritación envía señales de dolor que el cerebro interpreta como dolor de cabeza, frecuentemente en la parte posterior de la cabeza.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Músculos del Cuello</h3>
              <p className="text-gray-700">
                Los músculos del cuello crónicamente tensos pueden irritar nervios y disparar dolores de cabeza referidos. La mala postura, la posición de cabeza hacia adelante prolongada, el estrés, y la lesión todos contribuyen a tensión muscular que causa cefaleas cervicogénicas.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Nervios Occipitales</h3>
              <p className="text-gray-700">
                Los nervios occipitales pasan a través del cuello en su camino a la parte posterior del cuero cabelludo. Cuando se irritan por tensión muscular, artritis articular, o compresión de nervio, producen dolores de cabeza característicos en la parte posterior de la cabeza.
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            El punto clave: todos estos son separados de migraña o dolores de cabeza por tensión que se originan en el cerebro mismo.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Síntomas Comunes
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Si tiene cefaleas cervicogénicas, probablemente reconoce este patrón:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Ubicación del dolor:</strong> Usualmente unilateral, en la parte posterior de la cabeza, y frecuentemente irradiando hacia la sien, ojo, o frente</li>
            <li><strong>Carácter del dolor:</strong> Constante, sordo, o adolorido (no pulsátil)</li>
            <li><strong>Factores disparadores:</strong> Ciertos movimientos del cuello, mala postura, estar sentado prolongadamente, o posiciones del cuello sostenidas</li>
            <li><strong>Síntomas asociados del cuello:</strong> Dolor de cuello, rigidez, rango de movimiento limitado</li>
            <li><strong>Duración:</strong> Variable—puede ser intermitente o crónico</li>
            <li><strong>Respuesta a medicación:</strong> Puede no responder bien a medicamentos típicos de migraña</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Algunos pacientes también reportan sensación de chasquido o crujido en el cuello con movimiento, que frecuentemente está relacionado con irritación de articulación facetaria.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cómo la Cefalea Cervicogénica Difiere de la Migraña
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Muchos pacientes con cefaleas cervicogénicas han sido diciéndoles que tienen migrañas. Mientras las condiciones pueden coexistir, difieren significativamente:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-semibold">Característica</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Cervicogénica</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Migraña</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-300 p-3"><strong>Origen</strong></td>
                  <td className="border border-gray-300 p-3">Estructuras del cuello</td>
                  <td className="border border-gray-300 p-3">Cerebro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Unilateral</strong></td>
                  <td className="border border-gray-300 p-3">Típicamente sí</td>
                  <td className="border border-gray-300 p-3">A menudo, pero no siempre</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><strong>Calidad</strong></td>
                  <td className="border border-gray-300 p-3">Constante, adolorida</td>
                  <td className="border border-gray-300 p-3">Pulsátil, pulsante</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Peor con movimiento del cuello</strong></td>
                  <td className="border border-gray-300 p-3">Sí</td>
                  <td className="border border-gray-300 p-3">No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Importante:</strong> Algunas personas tienen tanto cefaleas cervicogénicas como migrañas. El diagnóstico apropiado ayuda a determinar cuál es cuál para que el tratamiento pueda dirigirse apropiadamente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Por Qué la Imagen Puede Ser Normal
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Este es uno de los aspectos más frustrantes de las cefaleas cervicogénicas: <strong>su MRI puede verse completamente normal mientras tiene dolores de cabeza significativos e incapacitantes.</strong>
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            ¿Por qué? Porque muchas causas de cefaleas cervicogénicas no aparecen en imagen estándar:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
            <li><strong>Irritación pequeña de articulación facetaria:</strong> La inflamación articular menor o artritis puede causar dolor significativo sin hallazgos obvios de MRI</li>
            <li><strong>Tensión muscular:</strong> Los músculos crónicamente tensos irritan nervios pero no aparecen anormales en imagen</li>
            <li><strong>Irritación nerviosa:</strong> Un nervio puede irritarse y causar dolor sin compresión visible en MRI</li>
            <li><strong>Cambios sutiles de disco:</strong> Los pequeños abultamientos de disco o cambios degenerativos que irritan nervios pueden no ser obvios</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            El dolor <Link href="/es/dolor-sin-imagenes" className="text-blue-600 hover:text-blue-800">sin hallazgos de imagen claros</Link> es en realidad bastante común en cefaleas cervicogénicas. Por eso la evaluación clínica—su historial, examen físico, y respuesta a pruebas diagnósticas—es más importante que la imagen para el diagnóstico.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Cuándo ayuda la imagen: Si sus cefaleas cervicogénicas comenzaron después de un accidente o si los síntomas han empeorado significativamente, la imagen es útil para descartar problemas estructurales mayores o lesión.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cómo Evalúo la Cefalea Cervicogénica
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Evaluar cefaleas cervicogénicas requiere un enfoque cuidadoso:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Historial Detallado de Dolor de Cabeza</h3>
              <p className="text-gray-700">¿Cuándo ocurren los dolores de cabeza? ¿Qué los dispara? ¿Empeoran ciertas posiciones o movimientos del cuello? ¿Está presente dolor de cuello? Este historial es crucial para cefalea cervicogénica.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Examen Físico</h3>
              <p className="text-gray-700">Examino su rango de movimiento del cuello, sensibilidad muscular, y si movimientos específicos reproducen su dolor de cabeza. Este examen ayuda a identificar qué estructuras del cuello están involucradas.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Revisión de Imagen</h3>
              <p className="text-gray-700">Si existe imagen, la reviso para verificar problemas estructurales significativos. Pero la imagen normal no descarta cefalea cervicogénica.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Inyecciones Diagnósticas</h3>
              <p className="text-gray-700">Las inyecciones estratégicas a articulaciones facetarias cervicales o nervios occipitales confirman qué estructuras del cuello están causando su dolor de cabeza y ayudan a guiar el tratamiento.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            El objetivo es identificar específicamente qué estructuras del cuello son responsables para que el tratamiento pueda dirigirse apropiadamente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Opciones Comunes de Tratamiento
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fisioterapia</h3>
              <p className="text-gray-700">
                La fisioterapia especializada del cuello dirigida a postura, flexibilidad, y fuerza es frecuentemente el tratamiento de primera línea. Los ejercicios que mejoran la estabilidad cervical y reducen tensión muscular frecuentemente ayudan con cefaleas cervicogénicas. Muchos pacientes mejoran significativamente solo con terapia.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modificación de Actividad</h3>
              <p className="text-gray-700">
                Identificar actividades que disparan dolores de cabeza y modificarlas ayuda. Esto frecuentemente incluye ajustes ergonómicos (configuración de escritorio, posición de teléfono), tomar descansos de posiciones prolongadas, y evitar movimientos que empeoran dolores de cabeza.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medicamentos</h3>
              <p className="text-gray-700">
                Dependiendo de su situación, medicamentos pueden ayudar: relajantes musculares para tensión del cuello, medicamentos antiinflamatorios no esteroideos para inflamación, u otras opciones. Medicamentos de migraña frecuentemente no ayudan cefaleas cervicogénicas, que es una pista importante para el diagnóstico.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bloqueos del Nervio Occipital</h3>
              <p className="text-gray-700">
                Los bloqueos del nervio occipital entregan medicamento adormecedor alrededor de nervios en la parte posterior de la cabeza. Si esto proporciona alivio significativo, confirma que irritación del nervio occipital (de estructuras del cuello) está causando su dolor de cabeza. El bloqueo proporciona alivio temporal e identifica si tratamientos de más larga duración podrían ayudar.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bloqueos de Rama Medial</h3>
              <p className="text-gray-700">
                Los bloqueos de rama medial anestesian nervios que suministran articulaciones facetarias cervicales. Si su cefalea cervicogénica es causada por artritis de articulación facetaria, este bloqueo proporcionará alivio y sugerirá que la ablación por radiofrecuencia podría proporcionar beneficio de más larga duración.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ablación por Radiofrecuencia</h3>
              <p className="text-gray-700">
                La ablación por radiofrecuencia usa calor para reducir señales de dolor de articulaciones cervicales y nervios. Se considera después de que inyecciones diagnósticas han identificado qué estructuras son responsables. El alivio puede durar varios meses a un año o más.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cuándo Se Necesita Evaluación Adicional
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La mayoría de cefaleas cervicogénicas responden bien a los enfoques anteriores. Sin embargo, algunas situaciones justifican investigación adicional:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Cambio repentino en patrón de dolor de cabeza:</strong> Si sus dolores de cabeza de repente empeoran o cambian carácter, imagen adicional puede ser necesaria</li>
            <li><strong>Síntomas neurológicos progresivos:</strong> Debilidad, entumecimiento, u otros síntomas de nervio progresivos pueden indicar problemas estructurales requiriendo evaluación adicional</li>
            <li><strong>Dolores de cabeza tras trauma:</strong> Los dolores de cabeza que comenzaron después de accidentes o lesiones deben evaluarse por lesión estructural</li>
            <li><strong>No responden al cuidado conservador:</strong> Si ha intentado fisioterapia y modificación de actividad sin mejora, inyecciones diagnósticas pueden identificar estructuras específicas responsables</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            En estas situaciones, trabajar con ambos su médico principal y un especialista en dolor asegura evaluación comprehensiva.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Acerca de Simon Dardashti, MD</h3>
          <p className="text-gray-700 mb-2">
            <strong>Especialista en Medicina del Dolor Certificado</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>• Entrenamiento especializado en Medicina del Dolor de UCLA</li>
            <li>• 10+ años diagnosticando y tratando cefaleas cervicogénicas</li>
            <li>• Experto en bloqueos del nervio occipital y procedimientos cervicales</li>
            <li>• Enfoque en identificar estructuras específicas del cuello causando dolores de cabeza</li>
            <li>• Consultas virtuales disponibles</li>
          </ul>
        </section>

        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Evalúe Su Cefalea Cervicogénica
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Si sospecha que sus dolores de cabeza se originan de su cuello—o si tiene dolores de cabeza regulares que no han mejorado a pesar de ver múltiples especialistas—una evaluación comprehensiva puede identificar específicamente qué estructuras del cuello están involucradas y qué tratamiento podría ayudar.
          </p>

          <Link
            href="/virtual-consultations"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Programe una Consulta Virtual (en inglés)
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Las consultas virtuales me permiten discutir su patrón de dolor de cabeza y explorar si una fuente del cuello podría ser responsable.
          </p>
        </section>

        <section className="mb-12 border-t pt-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Preguntas Frecuentes</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Si tengo cefaleas cervicogénicas, ¿alguna vez desaparecerán completamente?
              </h3>
              <p className="text-gray-700">
                Muchos pacientes experimentan mejora significativa o incluso resolución con tratamiento apropiado. La fisioterapia, modificación de actividad, y postura apropiada ayudan a muchas personas a largo plazo. Otros se benefician de intervenciones de procedimientos. La clave es identificar que el cuello es la fuente y abordarlo específicamente.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Puede la mala postura causar cefaleas cervicogénicas?
              </h3>
              <p className="text-gray-700">
                Sí. La posición prolongada de cabeza hacia adelante y la mala postura crean tensión muscular y alteran alineación cervical, irritando nervios. Incluso si la postura no es la causa original, corregir la postura es usualmente una parte importante del tratamiento.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Cuánto tiempo debería intentar fisioterapia antes de considerar otros tratamientos?
              </h3>
              <p className="text-gray-700">
                La fisioterapia típicamente muestra resultados dentro de 6-8 semanas si funcionará. Si ha estado en terapia por 8-12 semanas sin mejora significativa, inyecciones diagnósticas pueden identificar si una estructura específica del cuello (articulación facetaria o nervio) está causando su dolor de cabeza y si procedimientos podrían ayudar.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Recursos Relacionados
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/es/dolor-sin-imagenes" className="text-blue-600 hover:text-blue-800">Dolor Sin Hallazgos de Imagen</Link></li>
            <li><Link href="/es/opciones-de-tratamiento" className="text-blue-600 hover:text-blue-800">Opciones de Tratamiento</Link></li>
            <li><Link href="/es/condiciones/dolor-de-cuello" className="text-blue-600 hover:text-blue-800">Dolor de Cuello</Link></li>
            <li><Link href="/es/condiciones/radiculopatia-cervical" className="text-blue-600 hover:text-blue-800">Radiculopatía Cervical</Link></li>
            <li><Link href="/virtual-consultations" className="text-blue-600 hover:text-blue-800">Consultas Virtuales (en inglés)</Link></li>
          </ul>
        </section>

        <section className="mt-12 pt-8 border-t text-sm text-gray-600">
          <p>
            <strong>Descargo de Responsabilidad Médico:</strong> Esta página es educativa y no constituye consejo médico. Toda decisión médica debe hacerse en consulta con un médico calificado. Si tiene dolores de cabeza persistentes, busque evaluación de un proveedor de cuidado de salud calificado.
          </p>
        </section>
      </article>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/condiciones/cefalea-cervicogenica" locale="es" />
    </>
  );
}
