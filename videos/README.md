# CFD videos

Drop your CFD simulation videos (`.mp4`, `.webm`, `.mov`, `.m4v`) straight into this folder.

- Push to GitHub → the **Update video manifest** Action runs automatically, rebuilds
  `manifest.json`, and commits it back. The next time someone loads the portfolio,
  the video shows up in the "CFD Simulations" section — no other steps needed.
- Working locally? Run `node scripts/generate-manifest.js` after adding files, then commit.
- To set a custom title/caption instead of one generated from the filename, add a
  text file with the same name, e.g. `melting-front.mp4` + `melting-front.txt`
  (first line = title, remaining lines = description).
