export const BILINGUAL_ROUTE_PAIRS = [
  ["/", "/es"],
  ["/conditions", "/es/condiciones"],
  ["/procedures", "/es/procedimientos"],
  ["/pain-without-imaging", "/es/dolor-sin-imagenes"],
  ["/treatment-options", "/es/opciones-de-tratamiento"],
  ["/patient-education", "/es/educacion-para-pacientes"],
  ["/articles", "/es/articulos"],
  ["/conservative-care", "/es/cuidados-conservadores"],
  ["/mcgill-big-3-exercises", "/es/ejercicios-mcgill-big-3"],
  ["/thoracic-foam-rolling", "/es/rodillo-espuma-toracica"],
  ["/second-opinion-spine-surgery", "/es/segunda-opinion-cirugia-columna"],
  ["/what-to-expect-pain-consultation", "/es/que-esperar-consulta-dolor"],
  ["/conditions/sciatica-radicular-pain", "/es/condiciones/radiculopatia-ciatica"],
  ["/conditions/facet-mediated-pain", "/es/condiciones/dolor-facetario"],
  ["/conditions/low-back-pain", "/es/condiciones/dolor-lumbar"],
  ["/conditions/neck-pain", "/es/condiciones/dolor-de-cuello"],
  ["/conditions/cervical-radiculopathy", "/es/condiciones/radiculopatia-cervical"],
  ["/conditions/cervicogenic-headache", "/es/condiciones/cefalea-cervicogenica"],
  ["/conditions/whiplash-associated-disorder", "/es/condiciones/sindrome-latigazo-cervical"],
  ["/conditions/lumbar-radiculopathy", "/es/condiciones/radiculopatia-lumbar"],
  ["/conditions/sacroiliac-joint-pain", "/es/condiciones/dolor-articulacion-sacroiliaca"],
  ["/conditions/lumbar-spinal-stenosis", "/es/condiciones/estenosis-espinal-lumbar"],
  ["/conditions/persistent-pain-after-spine-surgery", "/es/condiciones/dolor-persistente-despues-cirugia-columna"],
  ["/conditions/neuropathic-pain", "/es/condiciones/dolor-neuropatico"],
  ["/conditions/myofascial-pain", "/es/condiciones/dolor-miofascial"],
  ["/conditions/joint-pain", "/es/condiciones/dolor-articular"],
  ["/conditions/peripheral-nerve-pain", "/es/condiciones/dolor-nervio-periferico"],
  ["/conditions/chronic-pain-syndrome-evaluation", "/es/condiciones/evaluacion-sindrome-dolor-cronico"],
  ["/procedures/epidural-steroid-injections", "/es/procedimientos/inyecciones-epidurales-de-esteroides"],
  ["/procedures/facet-joint-injections-medial-branch-blocks", "/es/procedimientos/bloqueos-de-rama-medial"],
  ["/procedures/radiofrequency-ablation", "/es/procedimientos/ablacion-por-radiofrecuencia"],
  ["/procedures/platelet-rich-plasma-prp", "/es/procedimientos/plasma-rico-en-plaquetas-prp"],
  ["/procedures/cortisone-steroid-injections", "/es/procedimientos/inyecciones-cortisona-esteroides"],
  ["/procedures/sacroiliac-joint-injections", "/es/procedimientos/inyecciones-articulacion-sacroiliaca"],
  ["/procedures/trigger-point-injections", "/es/procedimientos/inyecciones-puntos-gatillo"],
  ["/procedures/joint-bursa-tendon-injections", "/es/procedimientos/inyecciones-articulares-bursa-tendon"],
  ["/procedures/occipital-nerve-blocks", "/es/procedimientos/bloqueos-nervio-occipital"],
  ["/procedures/peripheral-nerve-blocks", "/es/procedimientos/bloqueos-nervios-perifericos"],
] as const;

export function getLanguageSwitchHref(pathname: string): string {
  const path = pathname.replace(/\/$/, "") || "/";
  for (const [english, spanish] of BILINGUAL_ROUTE_PAIRS) {
    if (path === english) return spanish;
    if (path === spanish) return english;
  }
  if (path === "/es" || path.startsWith("/es/")) return "/";
  if (path.startsWith("/procedures/")) return "/es/procedimientos";
  if (path.startsWith("/conditions/")) return "/es/condiciones";
  return "/es";
}

