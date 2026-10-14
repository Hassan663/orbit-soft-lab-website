// One-off: converts public/images/*.jpg to WebP (q78) at a max width that matches how each image is used.
// Usage: node scripts/optimize-images.mjs [--delete]   (--delete removes the source jpgs afterwards)
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = path.join(process.cwd(), "public/images");
const rules = [
  [/^(hero|cta|page-.+)\.jpg$/, 1920],
  [/^(project-.+|strip-\d)\.jpg$/, 1200],
  [/^(team|avatar)-\d\.jpg$/, 400],
  [/\.jpg$/, 800], // service, blog, about, culture, contact-map
];

const files = (await readdir(DIR)).filter((f) => f.endsWith(".jpg"));
let before = 0;
let after = 0;
for (const file of files) {
  const width = rules.find(([re]) => re.test(file))[1];
  const src = path.join(DIR, file);
  const out = src.replace(/\.jpg$/, ".webp");
  await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
  before += (await stat(src)).size;
  after += (await stat(out)).size;
  if (process.argv.includes("--delete")) await unlink(src);
}
console.log(`${files.length} images: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`);
