# Contour

A bold gallery-style home and interiors storefront with room-based shopping, saved room selections, a material library, a daylight/evening transition, styling guides, recently viewed pieces, product comparison, and a scale comparison tool with rotation.

**[Visit Contour](https://dheeai.github.io/shopify-websites/samples/contour/)**

## Preview

From this directory:

```sh
node build.mjs
python3 -m http.server 8767 --bind 127.0.0.1
```

Open http://127.0.0.1:8767/ on this computer.

## Structure

- `src/catalog.mjs`: products, variants, dimensions, materials and room scenes.
- `src/state.mjs`: validated selections, bag totals and saved boards.
- `src/views.mjs`: reusable static page templates.
- `build.mjs`: generates the HTML pages.
- `app.js`: browser interactions and device-local persistence.
- `style.css`: responsive design and motion.
- `assets/`: original generated photography.

No package installation or backend is required. Node generates static pages; JavaScript progressively enhances shopping controls.

## Checks

```sh
node state.test.mjs
node --check app.js
```

## Scope

This is an interactive storefront sample. Shopify checkout, inventory, delivery services and customer accounts are not connected. Saved rooms and bag contents stay in this browser. Product dimensions and prices illustrate the collection; they are not verified manufacturing specifications. The footprint comparison is a layout estimate, not a fit guarantee.

Photography is generated for this sample. Font: Manrope, supplied through Google Fonts. The brand name is a working creative identity.
