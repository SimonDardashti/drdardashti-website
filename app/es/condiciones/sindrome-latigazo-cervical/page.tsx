import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/sindrome-latigazo-cervical";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Síndrome de Latigazo Cervical | Simon Dardashti, MD" },
  description:
    "Comprensión del síndrome de latigazo cervical: causas, síntomas, por qué el dolor persiste, y opciones de tratamiento basadas en evidencia. Guía médica de un especialista en medicina del dolor.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Síndrome de Latigazo Cervical | Simon Dardashti, MD",
    description:
      "Guía completa sobre lesión de latigazo: mecanismo, síntomas, expectativas de recuperación, y opciones de tratamiento para dolor agudo y crónico por latigazo.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Síndrome de Latigazo Cervical | Simon Dardashti, MD",
    description: "Comprendiendo el dolor de cuello después de lesión por latigazo y opciones de tratamiento basadas en evidencia.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "Síndrome de Latigazo Cervical | Simon Dardashti, MD",
  url: PAGE_URL,
  headline: "Síndrome de Latigazo Cervical: Comprendiendo el Dolor de Cuello Después de una Lesión",
  description:
    "Guía completa sobre síndrome de latigazo cervical escrita por un especialista en medicina del dolor certificado. Cubre mecanismo de lesión, síntomas comunes, por qué el dolor persiste, por qué la imagen puede ser normal, métodos de evaluación, y opciones de tratamiento basadas en evidencia.",
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
  about: { "@type": "MedicalCondition", name: "Síndrome de Latigazo Cervical" },
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Es el latigazo siempre causado por accidentes automovilísticos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Aunque las colisiones de vehículos motores son la causa más común, el latigazo puede resultar de cualquier mecanismo que cause aceleración-desaceleración repentina de la cabeza y cuello. Lesiones deportivas, caídas, agresión física, y otros eventos traumáticos pueden todos causar latigazo. El mecanismo de lesión—movimiento rápido de cabeza y cuello—es lo que importa, no la causa específica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué mi cuello aún duele meses después del accidente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El latigazo implica lesión a múltiples estructuras—ligamentos, músculos, articulaciones, nervios—que toman tiempo en sanar. Algunas lesiones desarrollan patrones de dolor crónico, particularmente cuando la inflamación persiste, la debilidad muscular permanece, o la irritación nerviosa continúa. Factores como la edad, problemas previos del cuello, y la severidad de la lesión inicial influyen el tiempo de recuperación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué es normal mi MRI si tengo dolor de cuello significativo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Muchas lesiones de latigazo implican distensión muscular, lesiones de ligamentos, e irritación nerviosa que no aparecen en MRI estándar. La imagen es buena para mostrar hueso y daño estructural mayor pero menos sensible a lesiones de tejidos blandos e inflamación. El dolor puede ser significativo incluso cuando la imagen parece normal.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Condiciones", item: `${SITE_URL}/es/condiciones` },
      { "@type": "ListItem", position: 3, name: "Síndrome de Latigazo Cervical", item: PAGE_URL },
    ],
  },
};

export default function SindromeLatigazoCervicalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Síndrome de Latigazo Cervical
        </h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Fue lesionado—tal vez en un accidente automovilístico, una colisión deportiva, o una caída—y su cuello ha estado dolorido desde entonces. Su doctor dijo que era "solo latigazo," pero semanas o meses después, el dolor no ha desaparecido. Se pregunta: ¿Por qué no está sanando? ¿Hay algo seriamente mal? ¿Qué puede realmente ayudar?
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            El síndrome de latigazo cervical es común y puede ser complejo. Mientras muchas personas se recuperan rápidamente, otras desarrollan síntomas persistentes que afectan significativamente sus vidas. Entender qué pasó en su cuello, por qué los síntomas persisten, y qué opciones de tratamiento existen es el primer paso hacia la recuperación.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Esta página explica lesiones de latigazo desde una perspectiva médica—qué estructuras están involucradas, por qué la sanación puede tomar tiempo, y qué tratamientos basados en evidencia pueden ayudarle a recuperarse.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            ¿Qué Es el Síndrome de Latigazo Cervical?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            El síndrome de latigazo cervical (SLC) ocurre cuando una fuerza de aceleración-desaceleración repentina causa que la cabeza y cuello se muevan rápidamente hacia atrás luego hacia adelante (o en otras direcciones). Este movimiento violento lesiona tejidos blandos—músculos, ligamentos, articulaciones, y nervios—en el cuello.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La lesión típicamente afecta múltiples estructuras simultáneamente:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Músculos cervicales:</strong> La distensión de aceleración repentina causa rupturas musculares e inflamación</li>
            <li><strong>Ligamentos:</strong> Los ligamentos que soportan la columna cervical pueden estirarse o romperse</li>
            <li><strong>Articulaciones facetarias:</strong> Las pequeñas articulaciones conectando vértebras pueden irritarse o desarrollar inflamación</li>
            <li><strong>Raíces nerviosas:</strong> Los nervios pueden irritarse por inflamación, espasmo muscular, o participación articular</li>
            <li><strong>Discos:</strong> Los discos cervicales pueden estresarse o herniarse levemente por el mecanismo de lesión</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            La severidad de la lesión varía ampliamente—algunas personas tienen distensión leve de tejido blando, otras tienen lesión más significativa a múltiples estructuras.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Causas Comunes
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Colisiones de Vehículos Motores</h3>
              <p className="text-gray-700">
                La causa más común de latigazo. Colisiones por detrás, frontales, e impactos laterales pueden todos causar latigazo. Incluso colisiones de baja velocidad pueden causar lesión significativa si el vehículo es golpeado inesperadamente.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lesiones Deportivas</h3>
              <p className="text-gray-700">
                Deportes de contacto (fútbol, hockey, rugby), actividades con caídas o movimientos repentinos (esquí, snowboarding), y tackles en cualquier deporte pueden causar lesiones tipo latigazo. Colisiones de alta velocidad y tackles son particularmente probables de causar lesión significativa.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Caídas</h3>
              <p className="text-gray-700">
                Caídas donde la cabeza o cuello experimenta aceleración-desaceleración rápida pueden causar lesión tipo latigazo. Esto incluye caídas desde altura, caídas en escaleras, o caídas donde el cuerpo se descelera repentinamente mientras la cabeza y cuello continúan hacia adelante.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Síntomas Comunes
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Los síntomas de latigazo varían basados en la severidad de la lesión pero comúnmente incluyen:
          </p>

          <div className="space-y-2 text-gray-700 mb-6">
            <p><strong>Síntomas del cuello:</strong> Dolor de cuello, rigidez, rango limitado de movimiento, tensión muscular, dolor irradiando a través de los hombros</p>
            <p><strong>Dolores de cabeza:</strong> A menudo en la parte posterior de la cabeza, a veces irradiando hacia el frente o lados</p>
            <p><strong>Síntomas de brazo:</strong> Dolor, entumecimiento, u hormigueo irradiando en los brazos o manos si los nervios están irritados</p>
            <p><strong>Otros síntomas:</strong> Mareos, dolor de mandíbula, dolor de parte superior de la espalda, dificultad concentrándose</p>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Importante:</strong> Los síntomas no siempre comienzan inmediatamente después de la lesión. Algunas personas experimentan inicio retrasado de dolor y rigidez, desarrollando síntomas completos en horas a días.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Por Qué los Síntomas Pueden Persistir
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La mayoría de lesiones de latigazo se resuelven en semanas a pocos meses. Sin embargo, algunas personas desarrollan dolor crónico. Entender por qué sucede esto ayuda a guiar el tratamiento:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
            <li><strong>Inflamación continua:</strong> La inflamación de la lesión inicial puede persistir, continuando irritar nervios y músculos</li>
            <li><strong>Espasmo muscular protector:</strong> Los músculos del cuello pueden permanecer tensos y guardados, previniendo sanación normal y creando un ciclo de dolor-tensión</li>
            <li><strong>Irritación nerviosa:</strong> Si los nervios fueron irritados durante la lesión, la inflamación continua puede mantenerlos irritados</li>
            <li><strong>Participación de articulación facetaria:</strong> Las articulaciones facetarias lesionadas pueden desarrollar artritis o inflamación continua</li>
            <li><strong>Desacondicionamiento:</strong> Si el dolor previene actividad tempranamente, los músculos se debilitan, perpetuando postura pobre y dolor</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Los factores que aumentan riesgo de latigazo crónico incluyen: edad mayor, problemas previos del cuello, severidad alta de lesión, angustia psicológica, e inicio retrasado de tratamiento.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Por Qué la Imagen Puede Ser Normal
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Después de lesión de latigazo, muchas personas tienen dolor significativo mientras que la imagen (MRI o radiografía) se ve relativamente normal. Esto puede ser frustrante—está en dolor, pero los doctores dicen "nada está roto." Entender por qué es importante:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Las lesiones de tejido blando no siempre son visibles:</strong> Las distensiones musculares, lesiones de ligamentos, e inflamación no siempre aparecen en imagen estándar</li>
            <li><strong>Imagen temprana pierde inflamación:</strong> La inflamación aguda de lesión no siempre es aparente en imagen</li>
            <li><strong>Las lesiones articulares menores pueden no ser visibles:</strong> Las lesiones pequeñas de articulación facetaria o daño de cartílago pueden no aparecer en imagen de rutina</li>
            <li><strong>El dolor puede existir sin daño estructural:</strong> <Link href="/es/dolor-sin-imagenes" className="text-blue-600 hover:text-blue-800">El dolor puede ser real y significativo incluso cuando la imagen es normal</Link></li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            La imagen normal después de latigazo no significa que su lesión no sea real—significa que las estructuras involucradas no aparecen en pruebas estándar. La evaluación clínica es más importante que la imagen para diagnóstico de latigazo.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cómo Evalúo Lesiones de Latigazo
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La evaluación exhaustiva de lesión de latigazo incluye:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Historial de Lesión Detallado</h3>
              <p className="text-gray-700">Cómo ocurrió la lesión, síntomas iniciales, cómo evolucionaron los síntomas con el tiempo, qué los mejora o empeora, y qué tratamientos han sido intentados</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Examen Físico Comprehensivo</h3>
              <p className="text-gray-700">Evaluación del rango de movimiento del cuello, sensibilidad muscular y espasmo, palpación de estructuras, prueba de nervios, y maniobras específicas para identificar fuentes de dolor</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Revisión de Imagen</h3>
              <p className="text-gray-700">Si existe imagen, revisión para problemas estructurales mayores. Imagen nueva se ordena solo si hallazgos clínicos sugieren que cambiaría el tratamiento</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Identificación de Fuentes Específicas de Dolor</h3>
              <p className="text-gray-700">Determinar si el dolor viene de músculos, articulaciones, nervios, o una combinación—esto guía la selección de tratamiento</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Este enfoque comprehensivo identifica qué estructuras están causando dolor para que el tratamiento pueda dirigirse acertadamente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Opciones de Tratamiento
          </h2>

          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Modificación de Actividad</h3>
              <p className="text-gray-700">
                Evitar actividades que agravan síntomas mientras gradualmente se retorna a la actividad normal. El reposo inicial puede ser apropiado, pero la inmovilización prolongada generalmente se evita a favor de movimiento gentil temprano.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fisioterapia</h3>
              <p className="text-gray-700">
                Rehabilitación especializada de latigazo enfocada en fortalecimiento muscular, flexibilidad, corrección de postura, y estabilidad cervical. Esta es una piedra angular del tratamiento para latigazo agudo y crónico.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Medicamentos</h3>
              <p className="text-gray-700">
                Medicamentos antiinflamatorios, relajantes musculares, y otros medicamentos dependiendo del tipo de síntoma. Coordinado con su doctor de atención primaria.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link href="/es/procedimientos/inyecciones-puntos-gatillo" className="text-blue-600 hover:text-blue-800">Inyecciones de Puntos Gatillo</Link>
              </h3>
              <p className="text-gray-700">
                Para tensión muscular persistente y puntos gatillo comunes después de latigazo. Las inyecciones relajan músculos e interrumpen ciclos de dolor-tensión.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link href="/es/procedimientos/bloqueos-de-rama-medial" className="text-blue-600 hover:text-blue-800">Bloqueos de Rama Medial</Link>
              </h3>
              <p className="text-gray-700">
                Si se identifica dolor de articulación facetaria, los bloqueos diagnósticos pueden confirmar esto y proporcionar alivio mientras otros tratamientos tienen efecto.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link href="/es/procedimientos/ablacion-por-radiofrecuencia" className="text-blue-600 hover:text-blue-800">Ablación por Radiofrecuencia</Link>
              </h3>
              <p className="text-gray-700">
                Para dolor persistente de articulación facetaria, la ablación por radiofrecuencia puede proporcionar alivio de más larga duración al reducir señales de dolor de articulaciones irritadas.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Expectativas de Recuperación
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La recuperación de latigazo varía ampliamente, pero entender las líneas de tiempo típicas puede ayudar a establecer expectativas realistas:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Fase aguda (primeras 2-3 semanas):</strong> Inflamación inicial, guardia muscular, el dolor típicamente es peor. Reposo e hielo son apropiados.</li>
            <li><strong>Recuperación temprana (semanas 3-8):</strong> Transición a tratamiento activo. Fisioterapia e inicio de reanudación gradual de actividad. El dolor gradualmente mejora.</li>
            <li><strong>Recuperación intermedia (semanas 8-16):</strong> La mayoría de personas muestran mejora significativa. El fortalecimiento progresivo y retorno a actividades continúan.</li>
            <li><strong>Plazo más largo:</strong> La mayoría de latigazo agudo se resuelve en 3 meses. Sin embargo, 20-30% de personas desarrollan síntomas crónicos durando más tiempo.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Los factores que aceleran recuperación: fisioterapia temprana, tratamiento consistente, progresión gradual de actividad, y mantenerse activo a pesar del dolor (dentro de límites). La inmovilización temprana y reposo extendido pueden realmente ralentizar la recuperación.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cuándo Se Necesita Evaluación Adicional
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Busque evaluación adicional si:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Síntomas neurológicos significativos:</strong> Debilidad, entumecimiento, o problemas de coordinación</li>
            <li><strong>Síntomas empeorando progresivamente:</strong> La mayoría del latigazo mejora con el tiempo; el empeoramiento progresivo justifica investigación</li>
            <li><strong>Dolor no mejorando después de 4-6 semanas:</strong> La evaluación especialista más temprana puede identificar fuentes específicas de dolor e iniciar tratamiento dirigido</li>
            <li><strong>Síntomas persistentes más allá de 3 meses:</strong> La evaluación para patrones de dolor crónico y opciones de tratamiento de procedimientos es apropiada</li>
            <li><strong>Dolores de cabeza o mareos asociados:</strong> Pueden indicar <Link href="/es/condiciones/cefalea-cervicogenica" className="text-blue-600 hover:text-blue-800">cefalea cervicogénica</Link> u otros problemas específicos que merecen evaluación</li>
          </ul>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Acerca de Simon Dardashti, MD</h3>
          <p className="text-gray-700 mb-2">
            <strong>Especialista en Medicina del Dolor Certificado</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>• Entrenamiento especializado en Medicina del Dolor de UCLA</li>
            <li>• 10+ años evaluando y tratando lesiones de latigazo</li>
            <li>• Experto en identificar fuentes específicas de dolor en lesión de latigazo</li>
            <li>• Enfoque en tratamiento dirigido basado en evidencia</li>
            <li>• Consultas virtuales disponibles</li>
          </ul>
        </section>

        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Evalúe Su Lesión de Latigazo
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Si ha sufrido una lesión de latigazo y está experimentando síntomas persistentes, la evaluación comprehensiva puede identificar exactamente qué estructuras están causando dolor y qué opciones de tratamiento pueden ayudar. La intervención temprana a menudo conduce a mejores resultados que esperar.
          </p>

          <Link
            href="/es/consultas-virtuales"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Programe una Consulta Virtual
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Las consultas virtuales permiten toma de historial detallada y discusión de sus síntomas y opciones de tratamiento.
          </p>
        </section>

        <section className="mt-12 pt-8 border-t text-sm text-gray-600">
          <p>
            <strong>Descargo de Responsabilidad Médico:</strong> Esta página es educativa y no constituye consejo médico. Todas las decisiones médicas deben hacerse en consulta con un proveedor de cuidado de salud calificado que entienda su historial médico completo. Si tiene síntomas de lesión de latigazo, busque evaluación de un especialista en medicina del dolor calificado o su doctor de atención primaria.
          </p>
        </section>
      </article>
    </>
  );
}
