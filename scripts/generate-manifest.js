const fs = require("fs");
const path = require("path");

const dir = path.join(process.cwd(), "videos");
const allowed = new Set([".mp4", ".webm", ".mov", ".m4v"]);

const files = fs.readdirSync(dir)
  .filter(file => allowed.has(path.extname(file).toLowerCase()))
  .sort((a,b) => a.localeCompare(b));

function titleFromFile(file){
  return path.basename(file, path.extname(file))
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

const manifest = files.map(file => {
  const base = path.basename(file, path.extname(file));
  const txt = path.join(dir, `${base}.txt`);
  let title = titleFromFile(file);
  let description = "";
  if (fs.existsSync(txt)) {
    const lines = fs.readFileSync(txt, "utf8").split(/\r?\n/);
    title = lines.shift()?.trim() || title;
    description = lines.join("\n").trim();
  }
  return { file, title, description };
});

fs.writeFileSync(path.join(dir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`Generated manifest for ${manifest.length} simulation video(s).`);
