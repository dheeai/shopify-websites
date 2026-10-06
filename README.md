# Shopify Websites · Dhee

A growing collection of independently browsable storefront samples by Dhee. Each sample lives in its own directory, with its own assets, documentation, and shareable URL.

## Sample 01 — Atelier Noma

A fashion storefront for women and men, combining editorial photography with a complete browser-based shopping experience.

**[Open Atelier Noma](https://dheeai.github.io/shopify-websites/samples/atelier-noma/)** · **[Browse all samples](https://dheeai.github.io/shopify-websites/)** · **[Sample documentation](samples/atelier-noma/README.md)**

| Sample | Focus | Status |
| --- | --- | --- |
| [Atelier Noma](samples/atelier-noma/) | Fashion · womenswear & menswear | First completed sample |

### Included

- 15 products: 8 womenswear and 7 menswear pieces.
- Shared editorial presentation with Women/Men filters and category navigation.
- Product pages, image viewing, size guides, quick-add, search, saved pieces, and recently viewed products.
- Persistent shopping bag with quantity controls and a checkout availability screen.
- Three-second homepage image rotation, subtle scroll transitions, and reduced-motion support.
- Responsive desktop and mobile layouts with keyboard-accessible controls.

## Run locally

No package installation or build step is required. From the repository root:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/` for the sample index or `http://localhost:8080/samples/atelier-noma/` for the storefront.

To check JavaScript syntax:

```sh
node --check samples/atelier-noma/app.js
```

## Repository layout

```text
shopify-websites/
├── index.html                  # Sample directory
├── .nojekyll                   # Serve static files directly on GitHub Pages
├── README.md
├── docs/
│   └── atelier-noma-history.md # Imported development milestones
└── samples/
    └── atelier-noma/
        ├── index.html
        ├── style.css
        ├── app.js
        ├── assets/
        └── README.md
```

## GitHub Pages

This repository publishes from **main → / (root)** using GitHub Pages. Relative asset paths and hash-based navigation allow every sample to work within its own subdirectory.

- Sample index: `https://dheeai.github.io/shopify-websites/`
- Atelier Noma: `https://dheeai.github.io/shopify-websites/samples/atelier-noma/`
- Product example: `https://dheeai.github.io/shopify-websites/samples/atelier-noma/#/product/men-linen`

After a push to `main`, GitHub Pages rebuilds the site. Check **Actions → pages build and deployment** for the result. No custom domain or third-party hosting credentials are needed.

## Adding another sample

1. Create `samples/<sample-name>/` with a self-contained static site and README.
2. Keep images, styles, and scripts local to that sample; use relative URLs.
3. Add a card to the root `index.html` and a row to this README.
4. Check mobile layout, links, asset loading, and interactive controls.
5. Commit one coherent change at a time with a descriptive message, then push.

All samples share this repository’s `github.io` site, with a separate URL path for each.

## Commit history

Atelier Noma was developed before this GitHub import. Its 17 saved source snapshots are imported in their original order as separately named commits, followed by publication documentation. Commit bodies identify the source snapshot. These are import commits made now, not backdated development commits.

See [the milestone history](docs/atelier-noma-history.md) and [GitHub commits](https://github.com/dheeai/shopify-websites/commits/main/).

## Technical scope

Atelier Noma is a static storefront sample, **not an installed Shopify theme or a connected Shopify store**. Product data lives in JavaScript; shopping bags and saved items use browser local storage. Orders and payments are unavailable, and the newsletter does not create subscriptions. Live commerce would require a Shopify integration and real inventory, checkout, policies, and customer services.

Product photography was generated for the sample. Google Fonts supplies Bodoni Moda and Manrope. No external brand logos or reference-store code are included.
