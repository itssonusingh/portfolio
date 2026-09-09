# Sonu Singh | ThermoFluid & CFD Portfolio

A static, GitHub Pages-ready portfolio designed around CFD, thermal engineering and PCM research.

## Add a CFD simulation

Put your CFD videos in `videos/CFD_Water/` (or any subfolder inside `videos/`):

- `.mp4`
- `.webm`
- `.mov`
- `.m4v`

Then push to `main`.

GitHub Actions runs `scripts/generate-manifest.js` during deployment, so the video automatically appears in the **CFD Simulation Library** without editing HTML or JavaScript.

### Optional title and description

For:

`videos/CFD_Water/pcm-melting.mp4`

you can add:

`videos/CFD_Water/pcm-melting.txt`

First line becomes the title. Remaining lines become the description.

## Repository structure

```text
.
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── profile.jpg
│   └── Sonu_Singh_CV.pdf
├── videos/
├── scripts/
│   └── generate-manifest.js
└── .github/
    └── workflows/
        └── deploy.yml
```

## GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or run the workflow manually.
5. Your site will be published by the workflow.

GitHub Pages supports static files and GitHub Actions based deployments. See the official GitHub Pages documentation for the current setup flow.


## Dedicated water CFD folder

Use:

```text
videos/
└── CFD_Water/
    ├── water-flow.mp4
    ├── centrifugal-pump.mp4
    └── heat-exchanger-water.mp4
```

The gallery scans the `videos/` directory recursively, so every supported CFD video appears automatically in the Simulation Library.


## Visual direction

The portfolio uses a professional light engineering palette:
- Ice background: `#F3F6F8`
- White surfaces: `#FFFFFF`
- Deep engineering navy: `#17324D`
- Blueprint blue: `#1769A8`
- Technical teal: `#168C91`
- Restrained thermal orange: `#D66A2C`

The orange is reserved for important actions and thermal/CFD emphasis, while navy, blue and teal carry the main interface.


## Current CFD videos

All uploaded simulation videos are stored in:

```text
videos/
└── CFD_Water/
```

The site reads `videos/manifest.json`, and GitHub Actions regenerates that manifest on deployment. Add another supported video to `CFD_Water`, push to `main`, and it will appear automatically in the Simulation Library.


## Fresh simulation uploads

The latest PCM liquid-fraction, PCM volume-fraction, and thermal CFD recordings are stored in `videos/CFD_Water/` and included in the manifest. The GitHub Actions deployment regenerates the manifest whenever the repository is pushed.

## Uploading CFD videos without the GitHub size error

GitHub's browser uploader accepts files up to 25 MiB each. The repository therefore uses compressed H.264 MP4 simulation copies in `videos/CFD_Water/`. Add new videos below 25 MiB to that folder and push to `main`.

The deployment workflow automatically regenerates both `videos/manifest.json` and `videos/manifest.js`, so no HTML or JavaScript editing is required.

See `VIDEO_UPLOAD.md` for the exact workflow and compression command.


## Profile design

The hero profile uses a rounded professional portrait card with a thin blue-to-teal engineering border, light technical grid, and compact CFD/thermal labels. The design is optimized for GitHub Pages and responsive screens.
