import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/dolor-persistente-despues-cirugia-columna";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Dolor Persistente Después de Cirugía de Columna | Simon Dardashti, MD" },
  description:
    "Guía completa sobre dolor persistente después de cirugía de columna: causas, evaluación y opciones de tratamiento de un especialista certificado en medicina del dolor.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Dolor Persistente Después de Cirugía de Columna | Simon Dardashti, MD",
    description:
      "Entendiendo por qué persiste el dolor después de cirugía de columna y explorando opciones de tratamiento basadas en evidencia.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolor Persistente Después de Cirugía de Columna | Simon Dardashti, MD",
    description: "Evaluación y tratamiento integral del dolor persistente después de cirugía de columna.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "Dolor Persistente Después de Cirugía de Columna | Simon Dardashti, MD",
  url: PAGE_URL,
  headline: "Dolor Persistente Después de una Cirugía de Columna: Causas, Evaluación y Opciones de Tratamiento",
  description:
    "Guía completa sobre dolor persistente después de cirugía de columna escrita por un especialista en medicina del dolor certificado. Cubre causas, evaluación, inyecciones diagnósticas, opciones conservadoras, neuromodulación y cuándo la cirugía de revisión puede ser apropiada.",
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
  about: { "@type": "MedicalCondition", name: "Dolor Persistente Después de Cirugía de Columna" },
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Es normal tener dolor persistente después de cirugía de columna?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, no es inusual que algunos pacientes experimenten dolor persistente después de cirugía de columna. Los estudios sugieren que 10-40% de los pacientes pueden tener síntomas persistentes, dependiendo del tipo de cirugía y lo que causó el problema original. Lo importante: esto no significa que la cirugía fue un fracaso, y frecuentemente hay opciones de tratamiento adicionales disponibles.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué continuarían los síntomas después de cirugía de columna exitosa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Múltiples razones pueden explicar síntomas persistentes: el abordaje quirúrgico puede no haber tratado todos los generadores de dolor, el tejido cicatricial puede desarrollarse después de la cirugía, los segmentos adyacentes pueden degenerar con el tiempo, la irritación nerviosa puede persistir a pesar de la descompresión quirúrgica, o el dolor original puede haber tenido múltiples fuentes—algunas quirúrgicas y otras no. Por eso la evaluación comprehensiva es importante.",
        },
      },
      {
        "@type": "Question",
        name: "¿Debería obtener imagen (MRI, CT) después de cirugía de columna si aún tengo dolor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A veces, pero no siempre. La imagen puede revelar cambios estructurales como tejido cicatricial, degeneración de segmento adyacente, o estenosis residual. Sin embargo, los hallazgos de imagen no siempre se correlacionan con síntomas. Típicamente ordenamos imagen cuando los síntomas sugieren un problema estructural específico o cuando cambiará el plan de tratamiento. Un historial dirigido y examen físico frecuentemente guían si la imagen es necesaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué son inyecciones diagnósticas y cómo ayudan después de cirugía?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las inyecciones diagnósticas entregan medicamento adormecedor a generadores de dolor específicos (articulaciones facetarias, raíces nerviosas, articulaciones sacroilíacas, etc.) para determinar si esa estructura está causando su dolor. Si obtiene alivio significativo después de la inyección, confirma que esa estructura es una fuente de dolor y sugiere que puede responder a tratamiento adicional—ya sea cuidado conservador o procedimientos repetidos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es la cirugía de revisión la única opción para dolor persistente después de cirugía?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. La cirugía de revisión es raramente la primera opción después de cirugía de columna. La mayoría del dolor persistente mejora con manejo conservador (fisioterapia, medicación, modificación de actividad) y procedimientos mínimamente invasivos (inyecciones, bloqueos nerviosos, neuromodulación). La cirugía de revisión se considera cuando: la imagen muestra claramente un problema tratable, las opciones conservadoras y mínimamente invasivas se han agotado, y el paciente es un candidato quirúrgico razonable.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es fibrosis epidural y puede tratarse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La fibrosis epidural (tejido cicatricial alrededor de nervios espinales) se desarrolla en algunos pacientes después de cirugía de columna y puede contribuir al dolor persistente. Aunque el tejido cicatricial no puede eliminarse, su impacto puede manejarse mediante fisioterapia, medicamentos antiinflamatorios, inyecciones epidurales de esteroides para reducir inflamación alrededor del área cicatrizada, y a veces neuromodulación si medidas conservadoras no proporcionan alivio suficiente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es estimulación de médula espinal y cuándo podría ayudar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La estimulación de médula espinal es un dispositivo de neuromodulación que entrega pulsos eléctricos a nervios espinales, interrumpiendo señales de dolor antes de que lleguen al cerebro. Puede considerarse cuando: el dolor persistente es principalmente neuropático (relacionado con nervios), tratamientos conservadores y procedimientos no han proporcionado alivio suficiente, e imagen no revela un problema quirúrgicamente corregible. Requiere un ensayo de evaluación antes del implante permanente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo debería intentar tratamiento conservador después de cirugía antes de considerar otras opciones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Esto varía según la situación. La fisioterapia típicamente requiere 6-12 semanas para mostrar mejora significativa. Las medicaciones pueden necesitar 4-6 semanas para demostrar beneficio. Si ha intentado opciones conservadoras por 8-12 semanas sin mejora significativa, y sus síntomas están limitando su función, es razonable buscar evaluación diagnóstica y considerar opciones mínimamente invasivas como inyecciones o ensayos de neuromodulación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo obtener una segunda opinión sobre mi dolor persistente después de cirugía?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutamente. Una segunda opinión es valiosa después de cirugía de columna, particularmente si está teniendo síntomas persistentes. Puedo revisar sus registros quirúrgicos, imagen y síntomas actuales para ayudar a determinar la causa más probable de su dolor persistente y discutir qué opciones de tratamiento aún pueden ayudar. Una evaluación comprehensiva de un especialista en dolor independiente frecuentemente clarifica el camino hacia adelante.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Condiciones", item: `${SITE_URL}/es/condiciones` },
      { "@type": "ListItem", position: 3, name: "Dolor Persistente Después de Cirugía", item: PAGE_URL },
    ],
  },
};

export default function DolorPersistenteDespuesCirugiaColumnaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Dolor Persistente Después de Cirugía de Columna
        </h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Se sometió a cirugía de columna esperando que aliviara su dolor. Pero ahora, semanas o meses después, todavía tiene síntomas persistentes. Se pregunta: ¿Por qué? ¿Es esto normal? ¿Qué se puede hacer?
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            El dolor persistente después de cirugía de columna es más común de lo que muchos pacientes se dan cuenta. Los estudios sugieren que 10-40% de los pacientes experimentan síntomas persistentes después de cirugía de columna, dependiendo del tipo de procedimiento y lo que causó el problema original. Lo importante a entender: esto no necesariamente significa que la cirugía falló o fue innecesaria. Significa que su dolor puede ser más complejo de lo que se pensó inicialmente—y frecuentemente hay opciones adicionales disponibles.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Esta página explica por qué los síntomas pueden persistir después de cirugía de columna, cómo evaluar el dolor persistente sistemáticamente, y qué enfoques de tratamiento—desde cuidado conservador hasta procedimientos mínimamente invasivos hasta cirugía de revisión—aún pueden ayudar.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Por Qué el Dolor Puede Persistir Después de Cirugía de Columna</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La cirugía de columna aborda problemas estructurales específicos—descomprimiendo una raíz nerviosa, estabilizando un segmento, removiendo un disco. Pero el dolor frecuentemente es multifactorial. Los síntomas persistentes después de cirugía pueden indicar múltiples generadores de dolor no tratados, descompresión incompleta, cambios post-quirúrgicos con tejido cicatricial e inflamación, irritación nerviosa continuada, degeneración de segmentos adyacentes, o generadores de dolor no-quirúrgicos como articulaciones facetarias.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            El insight clave: el dolor persistente después de cirugía no es un reflejo de la técnica quirúrgica. Refleja la complejidad del dolor de columna y el hecho de que muchos pacientes tienen múltiples generadores de dolor que necesitan ser identificados y abordados individualmente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Causas Comunes de Síntomas Persistentes Después de Cirugía</h2>
          <p className="text-lg leading-relaxed text-gray-700">Las causas incluyen irritación nerviosa residual, scar tissue (fibrosis epidural), degeneración de segmento adyacente, dolor mediado por articulaciones facetarias, disfunción de articulación sacroilíaca, y dolor de nervio periférico independiente del problema de columna original.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Cuándo la Imagen Explica Síntomas—y Cuándo No</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Los hallazgos de imagen después de cirugía pueden mostrar múltiples cambios, pero son frecuentemente discordantes con síntomas. Podría tener hallazgos de imagen significativos sin dolor correspondiente, síntomas severos con hallazgos leves, o imagen normal con síntomas persistentes. Evaluamos síntomas basados en presentación clínica, y las inyecciones diagnósticas son frecuentemente más informativas que imagen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Cómo Evalúo Dolor Persistente Después de Cirugía</h2>
          <p className="text-lg leading-relaxed text-gray-700">La evaluación incluye: historial detallado sobre cuándo mejoró o empeoró el dolor, revisión completa de registros quirúrgicos, correlación de imagen, examen físico comprehensivo, e inyecciones diagnósticas dirigidas para identificar generadores de dolor específicos.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Inyecciones Diagnósticas y Su Rol</h2>
          <p className="text-lg leading-relaxed text-gray-700">Las inyecciones diagnósticas entregan medicamento adormecedor a estructuras específicas para determinar si son fuentes de dolor. Una inyección positiva (alivio 50-80%) confirma que esa estructura puede responder a tratamiento adicional como ablación por radiofrecuencia o inyecciones repetidas.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Opciones de Tratamiento Conservador</h2>
          <p className="text-lg leading-relaxed text-gray-700">Muchos pacientes se benefician de fisioterapia especializada post-quirúrgica, medicamentos apropiados (antiinflamatorios, medicamentos neuropáticos), modificación de actividad, manejo de peso, y mejora de sueño y estrés. Esto debe intentarse sistemáticamente por 8-12 semanas antes de opciones más invasivas.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Cuándo la Neuromodulación Puede Considerarse</h2>
          <p className="text-lg leading-relaxed text-gray-700">La estimulación de médula espinal puede considerarse cuando el dolor es principalmente neuropático, tratamientos conservadores han sido insuficientes después de 8-12 semanas, imagen no muestra un problema corregible, y usted es un candidato médico apropiado. Se requiere un ensayo antes del implante permanente.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Cuándo la Cirugía de Revisión Puede Ser Apropiada</h2>
          <p className="text-lg leading-relaxed text-gray-700">La cirugía de revisión es raramente la primera opción pero puede considerarse cuando: imagen muestra un problema claramente corregible, inyecciones diagnósticas confirman el área es fuente de dolor, opciones conservadoras y mínimamente invasivas se han agotado, y usted es un candidato quirúrgico razonable. Una segunda opinión es absolutamente apropiada.</p>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Acerca de Simon Dardashti, MD</h3>
          <p className="text-gray-700 mb-2"><strong>Especialista en Medicina del Dolor Certificado</strong></p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Entrenamiento en Medicina del Dolor de UCLA</li>
            <li>• 10+ años evaluando dolor persistente después de cirugía</li>
            <li>• Experto en inyecciones diagnósticas y neuromodulación</li>
            <li>• Consultas virtuales disponibles</li>
          </ul>
        </section>

        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Obtenga Claridad en Su Dolor Persistente</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Si ha tenido cirugía de columna y aún tiene síntomas, una evaluación comprehensiva puede aclarar qué está causando el dolor y qué opciones pueden ayudar. Podemos revisar sus registros quirúrgicos, imagen, y síntomas para desarrollar un plan de tratamiento dirigido.
          </p>
          <Link href="/es/consultas-virtuales" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Programe una Consulta Virtual
          </Link>
        </section>

        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Recursos Relacionados</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/es/dolor-sin-imagenes" className="text-blue-600 hover:text-blue-800">Dolor Sin Hallazgos de Imagen</Link></li>
            <li><Link href="/es/opciones-de-tratamiento" className="text-blue-600 hover:text-blue-800">Opciones de Tratamiento</Link></li>
            <li><Link href="/es/segunda-opinion-cirugia-columna" className="text-blue-600 hover:text-blue-800">Segunda Opinión Antes de Cirugía</Link></li>
            <li><Link href="/es/consultas-virtuales" className="text-blue-600 hover:text-blue-800">Consultas Virtuales</Link></li>
          </ul>
        </section>

        <section className="mt-12 pt-8 border-t text-sm text-gray-600">
          <p><strong>Descargo de Responsabilidad:</strong> Este contenido es educativo y no constituye consejo médico. Todas las decisiones médicas deben hacerse en consulta con un médico calificado.</p>
        </section>
      </article>
    </>
  );
}
