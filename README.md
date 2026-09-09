# Sonu Singh — CFD / Thermal-Fluid Engineer Portfolio

A recruiter-facing portfolio built with Next.js, TypeScript, and Tailwind CSS.
All content currently on the site is sourced strictly from the uploaded CV
(`Sonu_Singh_CV.docx`) — nothing has been invented. Sections that need real
media (CFD videos, simulation images, certificates) are left as clearly
labeled placeholders until you add the files.

## 1. Installation

```bash
npm install
```

## 2. Local development

```bash
npm run dev
```

Visit http://localhost:3000.

## 3. How to add a CFD simulation video

1. Put the video file in `public/videos/`, e.g. `public/videos/pcm-melting.mp4`.
2. Open `data/cfdProjects.ts` and set `video: "/videos/pcm-melting.mp4"` on the
   matching project. Add a `poster` image the same way if you have one
   (a poster frame keeps the page fast — the video won't load until played).

## 4. How to add simulation images (mesh, contours, streamlines, etc.)

1. Put images in `public/images/cfd/`.
2. In `data/cfdProjects.ts`, add entries to that project's `images` array:
   ```ts
   images: [
     { src: "/images/cfd/mesh.png", caption: "Structured mesh, grid independence study" },
   ],
   ```

## 5. How to add a new CFD project

Add a new object to the `cfdProjects` array in `data/cfdProjects.ts`, following
the same shape as the existing entry. It will automatically appear in the
"CFD Simulation Portfolio" section and get its own detail page at
`/projects/<slug>`.

## 6. How to replace the resume

Replace `public/resume/Sonu_Singh_CV.pdf` with your updated resume (keep the
same filename, or update `resumeFile` in `data/profile.ts`).

## 7. How to update LinkedIn / GitHub

Open `data/profile.ts` and fill in the `linkedin` and `github` fields (they
were not listed on the uploaded CV, so the buttons are hidden until you add
real URLs — no placeholder links were invented).

## 8. Content still worth checking before publishing

- **No PhD found on the CV.** The CV lists an M.Tech (2024–2026) as the
  current/most recent degree — no doctoral entry. The site is built around
  the M.Tech. If a PhD should be represented, update `data/education.ts` and
  the hero copy in `data/profile.ts` once the CV reflects it.
- **Water Quality Monitoring project** (`data/projects.ts`) was not on the
  uploaded CV — it's included because it directly supports the "IoT systems /
  applied ML" roles mentioned as a target, but double-check the details
  before it goes live.
- No CFD simulation videos, simulation images, or certificates were provided
  yet — those sections show clearly labeled placeholders. Certificates can be
  added to `public/certificates/` and linked from wherever you'd like to
  surface them.
- Phone number from the CV was intentionally left off the public site;
  add it to `data/profile.ts` / `components/Contact.tsx` if you want it shown.

## 9. Deploy

The project is a standard Next.js app and deploys as-is to Vercel:

```bash
npm run build
```

On Vercel: import the repository, framework preset "Next.js" is auto-detected,
no environment variables are required for the current build (see
`.env.example` if you later wire up the contact form to a real backend).

For other hosts, `npm run build && npm run start` runs a production server.
