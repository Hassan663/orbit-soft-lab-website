// Generates tiny blurred placeholders for every image in public/images -> data/blur.json.
// Runs automatically before `next build` (see "prebuild" in package.json). Node >= 22.18 runs .ts directly.
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = path.join(process.cwd(), "public/images");
const OUT = path.join(process.cwd(), "data/blur.json");

const files = (await readdir(DIR)).filter((f) => /\.(webp|jpe?g|png|avif)$/.test(f)).sort();
const entries: Record<string, string> = {};

for (const file of files) {
  const buf = await sharp(path.join(DIR, file)).resize(12, 12, { fit: "inside" }).webp({ quality: 40 }).toBuffer();
  entries[`/images/${file}`] = `data:image/webp;base64,${buf.toString("base64")}`;
}

await writeFile(OUT, JSON.stringify(entries, null, 2) + "\n");
console.log(`blur: ${files.length} placeholders -> data/blur.json`);
