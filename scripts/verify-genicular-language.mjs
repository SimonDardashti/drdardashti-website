import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const context = { exports: {} };
vm.runInNewContext(ts.transpileModule(fs.readFileSync("lib/language-routes.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText, context);
const { BILINGUAL_ROUTE_PAIRS: pairs, getLanguageSwitchHref: switchHref } = context.exports;
const html = (route) => fs.readFileSync(`.next/server/app${route === "/" ? "/index" : route}.html`, "utf8");
const hrefs = (markup) => [...markup.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => match[1]);

for (const [en, es] of pairs) {
  assert.equal(switchHref(en), es);
  assert.equal(switchHref(es), en);
  assert.match(html(en), /<html[^>]*lang="en"/);
  assert.match(html(es), /<html[^>]*lang="es"/);
}
assert.equal(switchHref("/procedures/genicular-nerve-block"), "/es/procedimientos");
assert.equal(switchHref("/conditions/crps-evaluation"), "/es/condiciones");
assert.equal(switchHref("/procedures/"), "/es/procedimientos");
assert.equal(switchHref("/about"), "/es");
assert.equal(switchHref("/es/not-a-translation"), "/");

const page = html("/procedures/genicular-nerve-block");
const canonical = "https://www.drdardashti.com/procedures/genicular-nerve-block";
assert.match(page, /<title>Genicular Nerve Block for Knee Pain \| Simon Dardashti, MD<\/title>/);
assert.ok(page.includes(`rel="canonical" href="${canonical}"`));
assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
assert.equal([...page.matchAll(/<html\b/g)].length, 1);
assert.ok(!page.includes('rel="alternate"'));
assert.ok(!page.includes("Prepared for clinician review"));
const sources = page.match(/<section[^>]*aria-labelledby="genicular-sources"[\s\S]*?<\/section>/)?.[0];
assert.ok(sources);
assert.equal(hrefs(sources).filter((href) => href.startsWith("https://")).length, 2);
for (const match of page.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
  JSON.parse(match[1]);
}

for (const [route, other] of [["/procedures", "/es/procedimientos"], ["/es/procedimientos", "/procedures"]]) {
  const markup = html(route);
  const links = hrefs(markup);
  assert.ok(links.includes("/procedures/genicular-nerve-block"));
  assert.ok(links.includes(other));
  for (const lang of ["en", "es"]) assert.ok(markup.includes(`hrefLang="${lang}"`) || markup.includes(`hreflang="${lang}"`));
}

const spanish = html("/es/procedimientos");
const translatedProcedures = pairs.filter(([en]) => en.startsWith("/procedures/"));
for (const [, es] of translatedProcedures) assert.ok(hrefs(spanish).includes(es));
const englishOnly = [...spanish.matchAll(/<a\b([^>]+)>([\s\S]*?)<\/a>/g)]
  .filter((match) => /hrefLang="en"/i.test(match[1]) && /href="\/procedures\//.test(match[1]));
assert.equal(englishOnly.length, 6);
for (const [, attributes, text] of englishOnly) {
  const route = attributes.match(/href="([^"]+)"/)[1];
  assert.ok(text.includes("en inglés"));
  assert.ok(html(route));
}
for (const route of ["/es/procedimientos", "/es/condiciones"]) {
  const markup = html(route);
  for (const [en] of pairs) {
    if (!en.startsWith("/conditions/") && !en.startsWith("/procedures/")) continue;
    assert.ok(!hrefs(markup).includes(en), `${route} still links to an English page with an existing translation: ${en}`);
  }
}
const sitemap = fs.readFileSync(".next/server/app/sitemap.xml.body", "utf8");
assert.equal(sitemap.split(`<loc>${canonical}</loc>`).length - 1, 1);
for (const [en, es] of pairs) {
  assert.ok(sitemap.includes(`href="https://www.drdardashti.com${en}"`));
  assert.ok(sitemap.includes(`href="https://www.drdardashti.com${es}"`));
}
console.log(`PASS: ${pairs.length} bilingual pairs, translated/fallback switcher targets, page metadata/schema, hub coverage, source count, and sitemap.`);
