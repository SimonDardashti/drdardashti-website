import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const BANNER_IMPORT = 'from "@/components/VirtualConsultationBanner"';
const ENGLISH_STRINGS = [
  "Accepting Virtual Consultations",
  "Learn About Virtual Consultations",
];

const REQUIRED_ENGLISH_PAGES = [
  "app/page.tsx",
  "app/conservative-care/page.tsx",
  "app/conditions/page.tsx",
  "app/thoracic-foam-rolling/page.tsx",
  "app/procedures/page.tsx",
  "app/mcgill-big-3-exercises/page.tsx",
];

function walkPages(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      files.push(...walkPages(full));
    } else if (entry === "page.tsx") {
      files.push(full);
    }
  }
  return files;
}

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

const spanishPages = walkPages(join(ROOT, "app/es"));
let spanishLeakCount = 0;

for (const file of spanishPages) {
  const source = readFileSync(file, "utf8");
  const rel = relative(ROOT, file);
  if (source.includes(BANNER_IMPORT) || source.includes("VirtualConsultationBanner")) {
    fail(`${rel} imports or renders VirtualConsultationBanner`);
    spanishLeakCount += 1;
  }
  for (const phrase of ENGLISH_STRINGS) {
    if (source.includes(phrase)) {
      fail(`${rel} contains English banner copy: "${phrase}"`);
    }
  }
}

if (spanishLeakCount === 0) {
  console.log(
    `OK: ${spanishPages.length} Spanish page.tsx files do not import VirtualConsultationBanner`,
  );
}

for (const rel of REQUIRED_ENGLISH_PAGES) {
  const source = readFileSync(join(ROOT, rel), "utf8");
  if (!source.includes(BANNER_IMPORT) || !source.includes("<VirtualConsultationBanner")) {
    fail(`${rel} no longer mounts the English VirtualConsultationBanner`);
  }
}

if (!process.exitCode) {
  console.log(
    `OK: ${REQUIRED_ENGLISH_PAGES.length} English pages still mount VirtualConsultationBanner`,
  );
}

const banner = readFileSync(join(ROOT, "components/VirtualConsultationBanner.tsx"), "utf8");
for (const phrase of ENGLISH_STRINGS) {
  if (!banner.includes(phrase)) {
    fail(`components/VirtualConsultationBanner.tsx is missing expected English copy: "${phrase}"`);
  }
}

if (!process.exitCode) {
  console.log("OK: VirtualConsultationBanner English copy is unchanged");
  console.log("DRD-013 source verification passed");
}
