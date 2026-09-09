# CFD video upload guide

## Why GitHub showed the big-file error

GitHub's browser uploader has a 25 MiB per-file limit. The portfolio therefore ships with web-ready MP4 copies of the CFD simulations, each below that limit.

## Add another simulation

1. Convert the video to H.264 MP4.
2. Keep it below 25 MiB if you want to use GitHub's browser uploader.
3. Put it in `videos/CFD_Water/`.
4. Optionally create a `.txt` file with the same filename. First line is the title, remaining lines are the description.
5. Commit to `main`.
6. GitHub Actions regenerates `manifest.json` and `manifest.js` automatically.

Example:

`videos/CFD_Water/my-new-cfd.mp4`

`videos/CFD_Water/my-new-cfd.txt`

The site then displays it automatically.

## Local compression command

```bash
ffmpeg -i input.mov -vf "scale=1280:-2,fps=30" -c:v libx264 -preset medium -crf 28 -pix_fmt yuv420p -an -movflags +faststart output.mp4
```
