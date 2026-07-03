import type { Citation } from "@/components/ReferencesSection";

/**
 * Curated peer-reviewed / guideline citations for the highest-value
 * educational pages on the site (landmark trials, major society guidelines,
 * and high-quality systematic reviews/meta-analyses).
 *
 * This is intentionally NOT populated for every page — only pages where
 * citations add genuine evidentiary weight (procedures and complex/high-
 * acuity conditions) are included here. Verify citation details against the
 * primary source before publishing, as physician-facing content.
 *
 * To add references to a new page:
 *   1. Add an entry keyed by the page's site-relative path below.
 *   2. Import CITATIONS and ReferencesSection into the page.
 *   3. Render <ReferencesSection references={CITATIONS["/path"]} /> where
 *      appropriate (immediately before MedicalReviewFooter is recommended).
 */
export const CITATIONS: Record<string, Citation[]> = {
  // ───────────────────────── PROCEDURES ─────────────────────────

  "/procedures/epidural-steroid-injections": [
    { text: "Chou R, Hashimoto R, Friedly J, et al. Epidural corticosteroid injections for radiculopathy and spinal stenosis: a systematic review and meta-analysis. Ann Intern Med. 2015;163(5):373-381." },
    { text: "Manchikanti L, Knezevic NN, Boswell MV, et al. Epidural Injections for Lumbar Radiculopathy and Spinal Stenosis: A Comparative Systematic Review and Meta-Analysis. Pain Physician. 2016;19(3):E365-E410." },
    { text: "Rathmell JP, Benzon HT, Dreyfuss P, et al. Safeguards to Prevent Neurologic Complications after Epidural Steroid Injections: Consensus Opinions from a Multidisciplinary Working Group. Anesthesiology. 2015;122(5):974-984." },
    { text: "North American Spine Society (NASS). Epidural Steroid Injections for Lumbar Radiculopathy: Coverage Policy Recommendations, current edition." },
  ],

  "/procedures/radiofrequency-ablation": [
    { text: "Lord SM, Barnsley L, Wallis BJ, McDonald GJ, Bogduk N. Percutaneous radio-frequency neurotomy for chronic cervical zygapophyseal-joint pain. N Engl J Med. 1996;335(23):1721-1726." },
    { text: "MacVicar J, Borowczyk JM, MacVicar AM, Loughnan BM, Bogduk N. Lumbar medial branch radiofrequency neurotomy in New Zealand. Pain Med. 2013;14(5):639-645." },
    { text: "Spine Intervention Society. Practice Guidelines for Spinal Diagnostic and Treatment Procedures, current edition (radiofrequency neurotomy chapter)." },
  ],

  "/procedures/facet-joint-injections-medial-branch-blocks": [
    { text: "Cohen SP, Raja SN. Pathogenesis, diagnosis, and treatment of lumbar zygapophyseal (facet) joint pain. Anesthesiology. 2007;106(3):591-614." },
    { text: "Manchikanti L, Kaye AD, Boswell MV, et al. A systematic review and best evidence synthesis of the effectiveness of therapeutic facet joint interventions. Pain Physician. 2015;18(4):E535-E582." },
    { text: "Spine Intervention Society. Practice Guidelines for Spinal Diagnostic and Treatment Procedures — medial branch block diagnostic protocol, current edition." },
  ],

  "/procedures/spinal-cord-stimulation-evaluation": [
    { text: "Kumar K, Taylor RS, Jacques L, et al. Spinal cord stimulation versus conventional medical management for neuropathic pain: a multicentre randomised controlled trial (PROCESS trial). Pain. 2007;132(1-2):179-188." },
    { text: "North RB, Kidd DH, Farrokhi F, Piantadosi SA. Spinal cord stimulation versus repeated lumbosacral spine surgery for chronic pain: a randomized, controlled trial. Neurosurgery. 2005;56(1):98-107." },
    { text: "Deer TR, Lamer TJ, Pope JE, et al. The Neurostimulation Appropriateness Consensus Committee (NACC): Recommendations for Surgical Technique. Neuromodulation. 2017;20(1):15-30." },
  ],

  "/procedures/sacroiliac-joint-injections": [
    { text: "Simopoulos TT, Manchikanti L, Gupta S, et al. Systematic Review of the Diagnostic Accuracy and Therapeutic Effectiveness of Sacroiliac Joint Interventions. Pain Physician. 2015;18(5):E713-E756." },
    { text: "Dreyfuss P, Dreyer SJ, Cole A, Mayo K. Sacroiliac joint pain. J Am Acad Orthop Surg. 2004;12(4):255-265." },
  ],

  "/procedures/kyphoplasty": [
    { text: "Wardlaw D, Cummings SR, Van Meirhaeghe J, et al. Efficacy and safety of balloon kyphoplasty compared with non-surgical care for vertebral compression fracture (FREE trial). Lancet. 2009;373(9668):1016-1024." },
    { text: "Boonen S, Van Meirhaeghe J, Bastian L, et al. Balloon kyphoplasty for the treatment of acute vertebral compression fractures: 2-year results. J Bone Miner Res. 2011;26(7):1627-1637." },
  ],

  "/procedures/platelet-rich-plasma-prp": [
    { text: "Fitzpatrick J, Bulsara M, Zheng MH. The Effectiveness of Platelet-Rich Plasma in the Treatment of Tendinopathy: A Meta-analysis of Randomized Controlled Clinical Trials. Am J Sports Med. 2017;45(1):226-233." },
    { text: "Filardo G, Kon E, Di Matteo B, et al. Platelet-rich plasma for the treatment of knee osteoarthritis: a systematic review and meta-analysis. Am J Sports Med. 2015;43(7):1575-1582." },
  ],

  "/procedures/peripheral-nerve-stimulation-evaluation": [
    { text: "Deer TR, Gilmore CA, Desai MJ, et al. Percutaneous Peripheral Nerve Stimulation of the Medial Branch Nerves for the Treatment of Chronic Axial Back Pain: A Randomized, Double-Blind, Sham-Controlled Trial (SPRINT trial). Neuromodulation. 2021;24(2):225-238." },
    { text: "Deer T, Pope J, Benyamin R, et al. Prospective, Multicenter, Randomized, Double-Blinded, Partial Crossover Study to Assess the Safety and Efficacy of the Novel Neuromodulation System in the Treatment of Patients with Chronic Pain of Peripheral Nerve Origin. Neuromodulation. 2016;19(1):91-100." },
  ],

  "/procedures/trigger-point-injections": [
    { text: "Scott NA, Guo B, Barton PM, Gerwin RD. Trigger point injections for chronic non-malignant musculoskeletal pain: a systematic review. Pain Med. 2009;10(1):54-69." },
    { text: "Simons DG, Travell JG, Simons LS. Travell & Simons' Myofascial Pain and Dysfunction: The Trigger Point Manual. 2nd ed. Williams & Wilkins." },
  ],

  "/procedures/cortisone-steroid-injections": [
    { text: "American College of Rheumatology / Arthritis Foundation Guideline for the Management of Osteoarthritis — intra-articular corticosteroid recommendations, current edition." },
    { text: "McAlindon TE, LaValley MP, Harvey WF, et al. Effect of Intra-articular Triamcinolone vs Saline on Knee Cartilage Volume and Pain in Patients with Knee Osteoarthritis: A Randomized Clinical Trial. JAMA. 2017;317(19):1967-1975." },
  ],

  // ───────────────────────── CONDITIONS ─────────────────────────

  "/conditions/low-back-pain": [
    { text: "Qaseem A, Wilt TJ, McLean RM, Forciea MA; Clinical Guidelines Committee of the American College of Physicians. Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain: A Clinical Practice Guideline From the American College of Physicians. Ann Intern Med. 2017;166(7):514-530." },
    { text: "Chou R, Qaseem A, Snow V, et al. Diagnosis and Treatment of Low Back Pain: A Joint Clinical Practice Guideline from the American College of Physicians and the American Pain Society. Ann Intern Med. 2007;147(7):478-491." },
  ],

  "/conditions/sciatica-radicular-pain": [
    { text: "Weinstein JN, Tosteson TD, Lurie JD, et al. Surgical vs Nonoperative Treatment for Lumbar Disk Herniation: The Spine Patient Outcomes Research Trial (SPORT). JAMA. 2006;296(20):2441-2450." },
    { text: "Konstantinou K, Dunn KM. Sciatica: review of epidemiological studies and prevalence estimates. Spine (Phila Pa 1976). 2008;33(22):2464-2472." },
  ],

  "/conditions/crps-evaluation": [
    { text: "Harden RN, Bruehl S, Perez RS, et al. Validation of proposed diagnostic criteria (the \"Budapest Criteria\") for Complex Regional Pain Syndrome. Pain. 2010;150(2):268-274." },
    { text: "Harden RN, Oaklander AL, Burton AW, et al. Complex regional pain syndrome: practical diagnostic and treatment guidelines, 4th edition. Pain Med. 2013;14(2):180-229." },
  ],

  "/conditions/cervical-radiculopathy": [
    { text: "Wainner RS, Fritz JM, Irrgang JJ, Boninger ML, Delitto A, Allison S. Reliability and diagnostic accuracy of the clinical examination and patient self-report measures for cervical radiculopathy. Spine (Phila Pa 1976). 2003;28(1):52-62." },
    { text: "Cohen SP. Epidemiology, diagnosis, and treatment of neck pain. Mayo Clin Proc. 2015;90(2):284-299." },
  ],

  "/conditions/lumbar-spinal-stenosis": [
    { text: "Weinstein JN, Tosteson TD, Lurie JD, et al. Surgical versus Nonsurgical Therapy for Lumbar Spinal Stenosis. N Engl J Med. 2008;358(8):794-810." },
    { text: "Genevay S, Atlas SJ. Lumbar spinal stenosis. Best Pract Res Clin Rheumatol. 2010;24(2):253-265." },
  ],

  "/conditions/neuropathic-pain": [
    { text: "Finnerup NB, Attal N, Haroutounian S, et al. Pharmacotherapy for neuropathic pain in adults: a systematic review and meta-analysis. Lancet Neurol. 2015;14(2):162-173." },
    { text: "Treede RD, Jensen TS, Campbell JN, et al. Neuropathic pain: redefinition and a grading system for clinical and research purposes. Neurology. 2008;70(18):1630-1635." },
  ],

  "/conditions/cervicogenic-headache": [
    { text: "Sjaastad O, Fredriksen TA, Pfaffenrath V. Cervicogenic headache: diagnostic criteria. The Cervicogenic Headache International Study Group. Headache. 1998;38(6):442-445." },
    { text: "Bogduk N, Govind J. Cervicogenic headache: an assessment of the evidence on clinical diagnosis, invasive tests, and treatment. Lancet Neurol. 2009;8(10):959-968." },
  ],

  "/conditions/whiplash-associated-disorder": [
    { text: "Spitzer WO, Skovron ML, Salmi LR, et al. Scientific monograph of the Quebec Task Force on Whiplash-Associated Disorders: redefining \"whiplash\" and its management. Spine (Phila Pa 1976). 1995;20(8 Suppl):1S-73S." },
    { text: "Carroll LJ, Holm LW, Hogg-Johnson S, et al. Course and prognostic factors for neck pain in whiplash-associated disorders: results of the Bone and Joint Decade 2000-2010 Task Force on Neck Pain and Its Associated Disorders. Spine (Phila Pa 1976). 2008;33(4 Suppl):S83-S92." },
  ],

  "/conditions/facet-mediated-pain": [
    { text: "Cohen SP, Raja SN. Pathogenesis, diagnosis, and treatment of lumbar zygapophyseal (facet) joint pain. Anesthesiology. 2007;106(3):591-614." },
    { text: "Manchikanti L, Boswell MV, Singh V, Pampati V, Damron KS, Beyer CD. Prevalence of facet joint pain in chronic spinal pain of cervical, thoracic, and lumbar regions. BMC Musculoskelet Disord. 2004;5:15." },
  ],

  "/conditions/sacroiliac-joint-pain": [
    { text: "Cohen SP. Sacroiliac joint pain: a comprehensive review of anatomy, diagnosis, and treatment. Anesth Analg. 2005;101(5):1440-1453." },
    { text: "Dreyfuss P, Dreyer SJ, Cole A, Mayo K. Sacroiliac joint pain. J Am Acad Orthop Surg. 2004;12(4):255-265." },
  ],
};

export function getCitations(path: string): Citation[] | undefined {
  return CITATIONS[path];
}
