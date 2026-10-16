# Visual Plate Web

Private source repository for the Visual Plate marketing website.

## Local workflow

Requirements: Node.js 22+ and Python 3. No npm dependencies or remote font requests.

```sh
npm run check
npm run build
npm run preview
```

Open http://127.0.0.1:4321 . The build now opens a **responsive landing-page design preview** directly at `/`. It incorporates the supplied Daimon, Moonlitt and Popcorn references. No public production deployment has occurred.

## Structure

- `src/content/landing.json`: English copy and FAQ; unresolved product fields stay null.
- `src/index.html`, `src/styles.css`, `src/site.js`: responsive preview.
- `src/review/`: earlier static SVG compositions (historical).
- `public/brand/`: original app artwork and bundled fonts.
- `scripts/build.mjs`: repeatable static build into `dist/`.

Preview paths (legal routes show an explicit unpublished notice, not final legal documents): `/`, `/support`, `/terms`, `/privacy`, `/analytics`, `/photo-improvement`.
Hosting proposal: static hosting (e.g. GitHub-connected Vercel); no deployment configured. Domain ownership and the actual App Store URL remain unverified. No public deployment, DNS change or legal publication has occurred.

Canonical progress: `/Users/furkan/brain/projects/visualplate/syntheses/mvp-website-task-list-2026-10.md`.

Brand assets copied from the existing VisualPlateApp resources, preserving originals. Font license verification remains a WEB04 release requirement; copying an existing asset is not a new rights determination.

The fixed desktop download card reserves the QR placement. Until a real App Store target is verified, it shows the app icon and “QR available at launch” instead of a fake code. It hides at the footer and on tablet/mobile to avoid covering content. The phone uses the original supplied Figma Scan export, not a live app capture. The scanning line is a local CSS demo; no AI/backend requests occur.
