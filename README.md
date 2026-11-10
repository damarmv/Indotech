# Indotech

Static business website for indonesia technology.corp, built with Next.js.

## Run locally

```sh
npm ci
npm run dev
```

## GitHub Pages

The production build creates a static site in `out/`. GitHub Pages publishes the contents of the `gh-pages` branch. To publish an update, build the site and replace the contents of `gh-pages` with the contents of `out/`.

The site URL is <https://indotechbangga.com/>.

## Images

Photos are stored in `public/images` so the deployed site serves them from the repository. Photo sources are available under the [Unsplash License](https://unsplash.com/license); interface illustrations are local SVG files.
