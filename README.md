# Sonu Singh — Portfolio

A static job-seeking portfolio: single page, sectioned navigation, and a CFD
video gallery that publishes itself from a folder.

## Structure

```
index.html                 Page content (all CV sections)
style.css                  Visual design
script.js                  Scroll-spy nav, mobile menu, video gallery loader
assets/
  profile.jpg              Profile photo
  Sonu_Singh_CV.pdf        Downloadable résumé (linked from the nav + Contact)
videos/
  manifest.json            Auto-generated list of videos — do not edit by hand
  README.md                How to add a video
scripts/
  generate-manifest.js     Scans videos/ and rebuilds manifest.json
.github/workflows/
  update-video-manifest.yml   Runs the script automatically on every push
```

## Add a CFD video (the automatic part)

1. Drop an `.mp4` / `.webm` / `.mov` / `.m4v` file into `videos/`.
2. Push to GitHub.
3. The **Update video manifest** Action runs by itself, rewrites
   `videos/manifest.json`, and commits it back to the repo.
4. Reload the site — the video is now a card in the **CFD Simulations** section.
   No HTML or JS edits, ever.

Want a custom title/caption instead of one guessed from the filename? Add a
`.txt` file with the same name next to the video:

```
videos/melting-front-0.5C.mp4
videos/melting-front-0.5C.txt   <- first line = title, rest = description
```

Working locally instead of through GitHub Actions? Run:

```bash
node scripts/generate-manifest.js
```

## Deploy for free (GitHub Pages)

1. Create a repo and push everything in this folder to it.
2. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch:
   `main`, folder `/ (root)` → Save.
3. Your portfolio is live at `https://<username>.github.io/<repo>/` within a
   minute or two.
4. Every future push (including new videos) redeploys automatically.

## Editing your details

All CV content lives directly in `index.html` as plain HTML — search for the
section you want to change (`Education`, `Experience`, `Projects`, `Skills`,
`Publications`, `Leadership`, `Contact`) and edit the text in place. Update
`assets/Sonu_Singh_CV.pdf` to replace the downloadable résumé.

## Local preview

Because the video gallery fetches `videos/manifest.json`, open the site
through a local server rather than double-clicking `index.html`:

```bash
npx serve .
# or
python3 -m http.server 8080
```
