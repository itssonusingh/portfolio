const fs = require('fs');
const path = require('path');

const ROOT = path.join(process.cwd(), 'videos');
const allowed = new Set(['.mp4', '.webm', '.mov', '.m4v']);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return allowed.has(path.extname(entry.name).toLowerCase()) ? [full] : [];
  });
}

function titleFromFile(file) {
  return path.basename(file, path.extname(file))
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

const files = walk(ROOT)
  .map(full => path.relative(ROOT, full).split(path.sep).join('/'))
  .sort((a, b) => a.localeCompare(b));

const manifest = files.map(file => {
  const full = path.join(ROOT, file);
  const base = path.basename(file, path.extname(file));
  const txt = path.join(path.dirname(full), `${base}.txt`);
  let title = titleFromFile(file);
  let description = '';
  if (fs.existsSync(txt)) {
    const lines = fs.readFileSync(txt, 'utf8').split(/\r?\n/);
    title = lines.shift()?.trim() || title;
    description = lines.join('\n').trim();
  }
  const category = /water/i.test(file) ? 'CFD WATER' : 'PCM / CFD';
  return { file, title, description, category };
});

fs.writeFileSync(path.join(ROOT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
fs.writeFileSync(
  path.join(ROOT, 'manifest.js'),
  `window.CFD_VIDEOS = ${JSON.stringify(manifest, null, 2)};\n`
);
console.log(`Generated ${manifest.length} simulation entries.`);
