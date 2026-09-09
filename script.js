async function loadVideoGallery(){
  const gallery=document.getElementById("videoGallery");
  try{
    const res=await fetch("videos/manifest.json",{cache:"no-store"});
    if(!res.ok) throw new Error("manifest unavailable");
    const videos=await res.json();
    if(!Array.isArray(videos)||!videos.length){
      gallery.innerHTML='<div class="empty">No simulation videos yet. Add an .mp4, .webm, .mov or .m4v file to <code>/videos</code> and push to GitHub.</div>';
      return;
    }
    gallery.innerHTML=videos.map(v=>{
      const title=escapeHTML(v.title||v.file.replace(/\.[^/.]+$/,""));
      const desc=v.description?`<div class="video-desc">${escapeHTML(v.description)}</div>`:"";
      const category=escapeHTML(v.category||"CFD SIMULATION");
      const src=v.file.split("/").map(encodeURIComponent).join("/");
      return `<article class="video-card">
        <video controls preload="metadata" playsinline src="videos/${src}"></video>
        <div class="video-body"><div class="video-meta">${category.toUpperCase()}</div><div class="video-title">${title}</div>${desc}</div>
      </article>`;
    }).join("");
  }catch(e){
    gallery.innerHTML='<div class="empty">Simulation videos are available after the site is served through GitHub Pages or a local HTTP server. Run <code>python3 -m http.server 8080</code> from the repository root for local preview.</div>';
  }
}
function escapeHTML(value){const el=document.createElement("div");el.textContent=value;return el.innerHTML}
const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(open))});
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const sections=[...document.querySelectorAll("main section[id]")],links=[...document.querySelectorAll("#nav a")];
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+e.target.id))}}),{rootMargin:"-30% 0px -60% 0px"});
sections.forEach(s=>observer.observe(s));
loadVideoGallery();
