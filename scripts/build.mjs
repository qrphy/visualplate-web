import { mkdir, rm, cp, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const root = new URL("../", import.meta.url);
const out = new URL("dist/", root);
const content = JSON.parse(
  await readFile(new URL("src/content/landing.json", root), "utf8"),
);
if (
  content.language !== "en" ||
  content.trial?.dishes !== 5 ||
  content.trial?.recurring !== false
)
  throw new Error("Invalid product content");
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const template = await readFile(new URL("src/index.html", root), "utf8");
const faq = content.faq
  .map(
    ({ q, a }) =>
      `<details><summary>${escape(q)}</summary><p>${escape(a)}</p></details>`,
  )
  .join("\n");
const home = template.replace("{{FAQ}}", faq);
if (home.includes("{{")) throw new Error("Unresolved template token");
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(new URL("public/", root), out, { recursive: true });
await cp(new URL("src/review/", root), new URL("review/", out), {
  recursive: true,
});
await cp(new URL("src/styles.css", root), new URL("styles.css", out));
await cp(new URL("src/site.js", root), new URL("site.js", out));
await writeFile(new URL("index.html", out), home);
const support = `<p>${escape(content.support.body)}</p><p><a href="mailto:${escape(content.support.email)}">${escape(content.support.email)}</a></p><ul>${content.support.topics.map((topic) => `<li>${escape(topic)}</li>`).join("")}</ul><p>You can manage an Apple subscription in your Apple account settings. Include a description of the issue when asking about purchase restoration.</p>`;
const previewNotice =
  '<p>This page is reserved for the launch version of Visual Plate. The final notice is being prepared and is not published in this design preview.</p><p>For questions, contact <a href="mailto:furkan@furkantitiz.dev">furkan@furkantitiz.dev</a>.</p>';
const routes = [
  ["support", "How can we help?", support],
  ["terms", "Terms of use", previewNotice],
  ["privacy", "Privacy policy", previewNotice],
  ["analytics", "Analytics notice", previewNotice],
  ["photo-improvement", "Photo improvement", previewNotice],
];
for (const [slug, title, body] of routes) {
  const page = home
    .replace(
      /<title>.*?<\/title>/,
      `<title>${escape(title)} — Visual Plate</title>`,
    )
    .replace(
      /<main id="main">[\s\S]*?<\/main>/,
      `<main id="main" class="legal-main wrap"><p class="eyebrow">VISUAL PLATE</p><h1>${escape(title)}</h1>${body}<a class="back-link" href="/">← Back to Visual Plate</a></main>`,
    );
  await mkdir(new URL(`${slug}/`, out), { recursive: true });
  await writeFile(
    new URL(`${slug}/index.html`, out),
    page.replaceAll('href="#', 'href="/#'),
  );
}
await writeFile(
  new URL("404.html", out),
  '<!doctype html><html lang="en"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found — Visual Plate</title><h1>Page not found</h1><a href="/">Back to Visual Plate</a></html>',
);
await writeFile(new URL("robots.txt", out), "User-agent: *\nDisallow: /\n");
console.log(`Responsive design preview built: ${fileURLToPath(out)}`);
