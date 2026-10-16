# Visual Plate Web

Private source repository for the Visual Plate marketing website.

## Local workflow

Requirements: Node.js 22+ and Python 3. No npm dependencies or remote font requests.

```sh
npm run check
npm run build
npm run preview
```

Open http://127.0.0.1:4321 . The initial build contains **design review assets**, not the production website. Desktop/mobile compositions are proposals awaiting review.

## Structure

- `src/content/landing.json`: English copy and FAQ; unresolved product fields stay null.
- `src/review/`: desktop/mobile visual compositions for review.
- `public/brand/`: original app artwork and bundled fonts.
- `scripts/build.mjs`: repeatable static build into `dist/`.

Planned production paths: `/`, `/support`, `/terms`, `/privacy`, `/analytics`, `/photo-improvement`.
Hosting proposal: static hosting (e.g. GitHub-connected Vercel); no deployment configured. Domain ownership and the actual App Store URL remain unverified. No public deployment, DNS change or legal publication has occurred.

Canonical progress: `/Users/furkan/brain/projects/visualplate/syntheses/mvp-website-task-list-2026-10.md`.

Brand assets copied from the existing VisualPlateApp resources, preserving originals. Font license verification remains a WEB04 release requirement; copying an existing asset is not a new rights determination.
