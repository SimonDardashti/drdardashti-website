import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/estenosis-espinal-lumbar";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Estenosis Espinal Lumbar | Simon Dardashti, MD" },
  description:
    "Guía completa sobre estenosis espinal lumbar: síntomas, diagnóstico, interpretación de imagen y opciones de tratamiento de un especialista en medicina del dolor certificado.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Estenosis Espinal Lumbar | Simon Dardashti, MD",
    description:
      "Entendiendo la estenosis lumbar: síntomas, por qué el cuidado conservador frecuentemente funciona, cuándo los procedimientos ayudan, y cuándo la cirugía debe considerarse.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estenosis Espinal Lumbar | Simon Dardashti, MD",
    description: "Guía completa sobre evaluación y tratamiento de estenosis lumbar.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "Estenosis Espinal Lumbar | Simon Dardashti, MD",
  url: PAGE_URL,
  headline: "Estenosis Espinal Lumbar: Síntomas, Diagnóstico y Opciones de Tratamiento",
  description:
    "Guía completa sobre estenosis espinal lumbar escrita por un especialista en medicina del dolor certificado. Cubre síntomas, diagnóstico, interpretación de imagen y opciones de tratamiento basadas en evidencia.",
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
  about: { "@type": "MedicalCondition", name: "Estenosis Espinal Lumbar" },
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre estenosis lumbar y radiculopatía lumbar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La estenosis lumbar es estrechamiento del canal espinal, a menudo afectando múltiples raíces nerviosas. La radiculopatía lumbar es irritación de una raíz nerviosa específica, frecuentemente por hernia de disco. La estenosis puede causar dolor radicular, pero el dolor de estenosis es frecuentemente más generalizado. Muchos pacientes tienen ambas condiciones. El enfoque de tratamiento puede diferir ligeramente dependiendo de si tiene radiculopatía aislada o estenosis con afectación de múltiples raíces nerviosas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Siempre requiere cirugía la estenosis severa en la MRI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Muchas personas con estenosis severa en imagen no tienen síntomas o tienen síntomas mínimos. Las decisiones quirúrgicas deben basarse en cuánto la estenosis afecta su función y calidad de vida, no solo en la severidad de imagen. Algunos pacientes con estenosis severa mejoran dramáticamente con cuidado conservador. Otros con hallazgos de imagen menos severos tienen más discapacidad. El cuadro clínico es más importante que la imagen sola.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué doblarse hacia adelante frecuentemente se siente mejor con estenosis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando se dobla hacia adelante, aumenta el espacio disponible para los nervios en su canal espinal—esto abre la estenosis. Conversamente, estar de pie derecho o inclinarse hacia atrás disminuye ese espacio. Por eso muchos pacientes con estenosis pueden caminar más fácil cuando empujan un carrito de compras (doblado hacia adelante) o cuando caminan cuesta arriba. Entender este patrón ayuda a guiar qué actividades son tolerables.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Condiciones", item: `${SITE_URL}/es/condiciones` },
      { "@type": "ListItem", position: 3, name: "Estenosis Lumbar", item: PAGE_URL },
    ],
  },
};

export default function EstenosisEspinalLumbarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Estenosis Espinal Lumbar
        </h1>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La estenosis espinal lumbar significa estrechamiento del canal espinal en su espalda baja. Este estrechamiento puede poner presión en los nervios, causando dolor, entumecimiento, o debilidad en sus piernas—particularmente cuando camina o está de pie.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La estenosis es muy común. Si la tiene, no está solo. Muchas personas desarrollan algún grado de estenosis espinal con el tiempo, particularmente a medida que envejecen. La buena noticia: la mayoría de personas con estenosis lumbar mejoran con tratamiento conservador apropiado.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Esta página explica qué es la estenosis, cómo se diagnostica, por qué los hallazgos de imagen no siempre predicen síntomas, y cómo trabajan diferentes enfoques de tratamiento.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            ¿Qué Es la Estenosis Espinal Lumbar?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Su canal espinal es el túnel formado por sus vértebras que contiene su médula espinal y raíces nerviosas. En la estenosis lumbar, este canal se estrecha—a veces por espolones óseos, a veces por abultamiento de disco, a veces por engrosamiento de ligamentos, o una combinación de estos.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La estenosis típicamente se desarrolla gradualmente durante años debido a:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Espolones óseos (osteofitos):</strong> Las vértebras desarrollan hueso extra, estrechando el canal</li>
            <li><strong>Abultamiento de disco:</strong> Los discos que envejecen se abomban hacia atrás en el canal espinal</li>
            <li><strong>Engrosamiento de ligamentos:</strong> Los ligamentos que soportan su columna se engruesan y reducen espacio para los nervios</li>
            <li><strong>Combinación:</strong> Más comúnmente, múltiples factores estrechan el canal juntos</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Insight clave:</strong> La estenosis por sí sola no es peligrosa. Se vuelve problemática cuando presiona sus nervios lo suficiente para causar síntomas. Muchas personas tienen estenosis en imagen pero sin síntomas en absoluto.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Síntomas Comunes
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Si la estenosis está presionando sus raíces nerviosas, podría experimentar:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Dolor o quemazón en las piernas:</strong> Usualmente bilateral (ambos lados) o más en un lado, irradiando hacia los glúteos, muslos, o pantorrillas</li>
              <li><strong>Entumecimiento u hormigueo en las piernas:</strong> Frecuentemente en pies o piernas</li>
              <li><strong>Debilidad en las piernas:</strong> Dificultad levantando el pie, sensación de inestabilidad, o pierna "cediéndose"</li>
              <li><strong>Claudicación:</strong> Dolor que comienza o empeora al caminar, mejora con reposo o doblarse hacia adelante</li>
              <li><strong>Dolor de espalda baja:</strong> Frecuentemente presente pero puede ser menos prominente que síntomas en las piernas</li>
              <li><strong>Problemas de equilibrio:</strong> Dificultad con coordinación o estabilidad</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Los síntomas típicamente se desarrollan gradualmente y pueden ir y venir. Algunos días son mejores que otros. Muchos pacientes notan patrones—caminar cuesta arriba se siente más fácil que caminar en terreno plano, por ejemplo.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Por Qué los Síntomas Frecuentemente Mejoran al Inclinarse Hacia Adelante
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Una de las características más características de la estenosis es el alivio cuando se dobla hacia adelante. Esto sucede porque:
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Cuando se dobla hacia adelante (flexión), su canal espinal se abre—los ligamentos se relajan y el espacio del canal aumenta. Esto reduce la presión en sus nervios, proporcionando alivio. Conversamente, estar de pie derecho o inclinarse hacia atrás (extensión) estrecha el canal aún más.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Por eso muchos pacientes con estenosis pueden:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Caminar más fácil mientras empujan un carrito de compras (doblado hacia adelante)</li>
            <li>Tolerar mejor caminar cuesta arriba que caminar en terreno plano</li>
            <li>Sentirse mejor caminando en un centro comercial donde pueden apoyarse en barras</li>
            <li>Preferir ciclismo a caminar (el ciclismo flexiona la columna)</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Entender este patrón ayuda con modificación de actividad—puede estructurar actividades para aprovechar posiciones que alivian síntomas.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Estenosis Lumbar vs Radiculopatía Lumbar
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Estos términos están relacionados pero no son idénticos, y entender la diferencia ayuda con decisiones de tratamiento:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Radiculopatía Lumbar</h3>
            <p className="text-gray-700 mb-2">Irritación de una raíz nerviosa específica, frecuentemente por:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Hernia de disco presionando una raíz nerviosa</li>
              <li>Inflamación de raíz nerviosa</li>
              <li>Compresión de nervio en un nivel específico</li>
            </ul>
            <p className="text-gray-700"><strong>Patrón típico:</strong> El dolor sigue una distribución de nervio (L5, S1, etc.). Frecuentemente dolor agudo, disparador en una pierna.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Estenosis Lumbar</h3>
            <p className="text-gray-700 mb-2">Estrechamiento del canal central afectando múltiples raíces nerviosas:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Usualmente bilateral o difusa</li>
              <li>Afecta múltiples raíces nerviosas simultáneamente</li>
              <li>Empeora con ciertas posiciones</li>
            </ul>
            <p className="text-gray-700"><strong>Patrón típico:</strong> Ambas piernas afectadas (aunque tal vez desigualmente). El dolor empeora al caminar/estar de pie, mejora con reposo o doblarse hacia adelante. Más dolor sordo que agudo disparador.</p>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Muchos pacientes tienen ambos—estenosis creando el estrechamiento basal con una hernia de disco superpuesta irritando una raíz nerviosa. Entender qué componente domina ayuda a guiar el tratamiento.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Qué Hallazgos de MRI Realmente Importan
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La MRI muestra exactamente dónde existe la estenosis y cuán severa es. Pero aquí está la parte importante: <strong>la severidad de imagen no predice de manera confiable síntomas o respuesta al tratamiento.</strong>
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Podría tener:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Estenosis severa sin síntomas</strong> — Podría descubrirla incidentalmente en imagen hecha por otras razones</li>
            <li><strong>Estenosis moderada con síntomas severos</strong> — Aunque la imagen muestra estrechamiento moderado, está muy limitado en función</li>
            <li><strong>Estenosis leve con síntomas leves</strong> — Coincide con lo que esperaría</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Qué hallazgos de MRI SÍ importan:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Correlación de ubicación:</strong> ¿Coincide la estenosis con dónde tiene síntomas? Esto sugiere que es la causa.</li>
            <li><strong>Severidad relativa a sus limitaciones:</strong> Estenosis severa con pérdida severa de función puede necesitar tratamiento más agresivo que estrechamiento leve.</li>
            <li><strong>Hallazgos de emergencia:</strong> Compresión de cauda equina (rara) o mielopatía progresiva requiere evaluación urgente.</li>
          </ul>
        </section>

        {/* Authority Box */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Acerca del Dr. Simon Dardashti, MD</h3>
          <p className="text-gray-700 mb-2">
            <strong>Certificado en Medicina del Dolor y Anestesiología</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>• Entrenamiento en especialidad de Medicina del Dolor de UCLA</li>
            <li>• 10+ años evaluando y tratando estenosis lumbar</li>
            <li>• Se especializa en planificación de tratamiento basada en diagnóstico</li>
            <li>• Consultas virtuales disponibles</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Discuta Su Diagnóstico de Estenosis
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Si ha sido diagnosticado con estenosis lumbar y quiere discutir sus opciones—si el cuidado conservador es apropiado, si los procedimientos podrían ayudar, o si necesita una segunda opinión sobre una recomendación quirúrgica—podemos ayudar a aclarar su camino hacia adelante.
          </p>

          <Link
            href="/es/consultas-virtuales"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Programar una Consulta Virtual
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Las consultas virtuales nos permiten revisar su imagen, historial médico, y discutir el mejor enfoque para su situación específica.
          </p>
        </section>

        {/* Related Resources */}
        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Recursos Relacionados
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/es/dolor-sin-imagenes" className="text-blue-600 hover:text-blue-800">Dolor Sin Hallazgos de Imagen</Link> — Entendiendo síntomas cuando la imagen parece normal</li>
            <li><Link href="/es/opciones-de-tratamiento" className="text-blue-600 hover:text-blue-800">Cuidado Conservador vs Inyecciones vs Cirugía</Link> — Vía de tratamiento integral</li>
            <li><Link href="/es/segunda-opinion-cirugia-columna" className="text-blue-600 hover:text-blue-800">Segunda Opinión Antes de Cirugía de Columna</Link> — Qué preguntas hacer</li>
            <li><Link href="/es/consultas-virtuales" className="text-blue-600 hover:text-blue-800">Consultas Virtuales</Link> — Programe una cita</li>
          </ul>
        </section>
      </article>
    </>
  );
}
