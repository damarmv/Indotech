# Indotech

Static business website for indonesia technology.corp, built with Next.js.

## Run locally

```sh
npm ci
npm run dev
```

## GitHub Pages

The production build creates a static site in `out/`. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and publishes that folder when changes are pushed to `main`.

The project site URL is <https://damarmv.github.io/Indotech/>.

## Images

Photos are stored in `public/images` so the deployed site serves them from the repository. Photo sources are available under the [Unsplash License](https://unsplash.com/license); interface illustrations are local SVG files.
