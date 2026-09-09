// ============================================================
// CFD video gallery — reads videos/manifest.json (auto-generated
// by scripts/generate-manifest.js / the GitHub Action) and turns
// every entry into a playable card. Drop a video in /videos and
// it shows up here with zero HTML edits.
// ============================================================
async function loadVideoGallery() {
  const gallery = document.getElementById("videoGallery");
  if (!gallery) return;

  try {
    const res = await fetch("videos/manifest.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`manifest fetch failed: ${res.status}`);
    const videos = await res.json();

    if (!Array.isArray(videos) || videos.length === 0) {
      gallery.innerHTML = `
        <div class="gallery-empty">
          No simulations uploaded yet. Drop an <code>.mp4</code> into the
          <code>videos/</code> folder and push — this section rebuilds itself.
        </div>`;
      return;
    }

    gallery.innerHTML = videos
      .map((v) => {
        const title = escapeHtml(v.title || v.file);
        const desc = v.description ? `<div class="video-card__desc">${escapeHtml(v.description)}</div>` : "";
        return `
          <div class="video-card">
            <video controls preload="metadata" src="videos/${encodeURIComponent(v.file)}"></video>
            <div class="video-card__body">
              <div class="video-card__title">${title}</div>
              ${desc}
            </div>
          </div>`;
      })
      .join("");
  } catch (err) {
    // Most likely cause: the page is being opened via file:// instead of a
    // local/live server, so fetch() of a local JSON file is blocked.
    gallery.innerHTML = `
      <div class="gallery-empty">
        Couldn't load the video list. If you're viewing this from a local file
        (no <code>http://</code> in the address bar), serve the folder instead —
        e.g. <code>npx serve</code> — or view it on the deployed GitHub Pages site.
      </div>`;
    console.warn(err);
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ============================================================
// Scroll-spy: highlight the nav item for the section in view
// ============================================================
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll(".rail nav a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          links.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === id);
          });
        }
      });
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ============================================================
// Mobile nav toggle
// ============================================================
function initMobileNav() {
  const rail = document.getElementById("rail");
  const toggle = document.getElementById("railToggle");
  if (!rail || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = rail.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".rail nav a").forEach((link) => {
    link.addEventListener("click", () => {
      rail.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadVideoGallery();
  initScrollSpy();
  initMobileNav();
});
