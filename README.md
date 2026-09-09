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
