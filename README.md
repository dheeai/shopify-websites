# Shopify Websites

A collection of independently browsable storefront samples. Each website has its own design, assets, and direct link.

## Atelier Noma

A contemporary fashion storefront for women and men, with editorial photography, considered typography, and responsive layouts.

**[Visit Atelier Noma](https://dheeai.github.io/shopify-websites/samples/atelier-noma/)**

### Features

- 15 products across womenswear and menswear.
- Department and category filters, search, and price sorting.
- Product galleries, size guides, quick-add, and saved pieces.
- Outfit ideas and a shopping bag with quantity controls.
- Animated homepage photography and subtle scroll transitions.
- Mobile layouts, keyboard controls, and reduced-motion support.

## Serein

A skincare storefront with original product imagery, warm colours, and a guided routine builder.

**[Visit Serein](https://dheeai.github.io/shopify-websites/samples/serein/)**

- Eight skincare products and three curated sets.
- Category and texture filters, live search, and size selection.
- Adjustable routines, saved products, and a persistent shopping bag.
- Animated campaign imagery, scroll reveals, and responsive layouts.

## Contour

A furniture and interiors storefront with bold typography, original room photography, and interactive room planning.

**[Visit Contour](https://dheeai.github.io/shopify-websites/samples/contour/)**

- 16 products, selectable finishes, and three shoppable rooms.
- Visual category browsing, search, filters, quick views, and product comparison.
- Saved room selections, editable quantities, and a persistent shopping bag.
- A material library, styling guides, and recently viewed pieces.
- Daylight/evening scenes and a rotatable furniture footprint tool.
- Responsive layouts, keyboard controls, and reduced-motion support.

## SONDR

A modern technology storefront with original interactive 3D products.

**[Visit SONDR](https://dheeai.github.io/shopify-websites/samples/sondr/)**

- Five devices across speakers, personal audio, and charging.
- Rotatable 3D models with Silver, Graphite, and Cobalt finishes.
- An exploded construction view and speaker comparison.
- Collection filters, product details, and compatible accessory bundles.
- A persistent shopping bag with quantity controls.
- Responsive layouts, keyboard controls, and reduced-motion support.

## Local preview

No installation or build step is required.

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/` to visit Atelier Noma, `http://localhost:8080/samples/serein/` for Serein, `http://localhost:8080/samples/contour/` for Contour, or `http://localhost:8080/samples/sondr/` for SONDR.

### Project structure

Each website lives in `samples/<website-name>/`. Atelier Noma includes `index.html`, `style.css`, `app.js`, and an `assets/` directory.

GitHub Pages publishes from `main` at the repository root. The root URL opens Atelier Noma directly; additional websites can use their own direct paths.

### Technical scope

This is a static storefront sample. Shopping bags and saved pieces use browser storage. Shopify checkout, payments, inventory, and email services are not connected.

Product imagery was generated for the samples; SONDR uses original 3D geometry. Typography uses Bodoni Moda and Manrope for Atelier Noma, DM Sans for Serein, Manrope for Contour, and Space Grotesk, DM Sans, and IBM Plex Mono for SONDR, from Google Fonts.
