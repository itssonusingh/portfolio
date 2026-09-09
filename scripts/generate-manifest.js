#!/usr/bin/env node
/**
 * Scans /videos for video files and writes /videos/manifest.json.
 * Run manually with `node scripts/generate-manifest.js`, or let the
 * GitHub Action in .github/workflows/update-video-manifest.yml run it
 * automatically every time a video is pushed to the videos/ folder.
 *
 * Drop a matching .txt file next to a video to set a custom caption, e.g.
 *   videos/melting-front-0.5C.mp4
 *   videos/melting-front-0.5C.txt   <- first line = title, rest = description
 * Without a .txt file, the title is generated from the filename.
 */
const fs = require("fs");
const path = require("path");

const VIDEO_DIR = path.join(__dirname, "..", "videos");
const MANIFEST_PATH = path.join(VIDEO_DIR, "manifest.json");
const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".m4v"];

function titleFromFilename(filename) {
  const base = filename.replace(path.extname(filename), "");
  return base
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function readCaption(videoPath) {
  const txtPath = videoPath.replace(path.extname(videoPath), ".txt");
  if (fs.existsSync(txtPath)) {
    const raw = fs.readFileSync(txtPath, "utf8").split(/\r?\n/);
    const title = raw[0]?.trim();
    const description = raw.slice(1).join(" ").trim();
    return { title: title || undefined, description: description || "" };
  }
  return {};
}

function main() {
  if (!fs.existsSync(VIDEO_DIR)) {
    fs.mkdirSync(VIDEO_DIR, { recursive: true });
  }

  const files = fs
    .readdirSync(VIDEO_DIR)
    .filter((f) => VIDEO_EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .sort();

  const entries = files.map((filename) => {
    const fullPath = path.join(VIDEO_DIR, filename);
    const stats = fs.statSync(fullPath);
    const caption = readCaption(fullPath);
    return {
      file: filename,
      title: caption.title || titleFromFilename(filename),
      description: caption.description || "",
      sizeBytes: stats.size,
      addedAt: stats.mtime.toISOString(),
    };
  });

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(entries, null, 2) + "\n");
  console.log(`Wrote ${entries.length} video entr${entries.length === 1 ? "y" : "ies"} to ${MANIFEST_PATH}`);
}

main();
