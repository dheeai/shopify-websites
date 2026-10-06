# SONDR

A modern technology storefront with five original interactive 3D devices across speakers, personal audio, and charging. Includes category filters, live finish selection, an exploded speaker construction view, speaker comparison, and accessory bundles.

**[Visit SONDR](https://dheeai.github.io/shopify-websites/samples/sondr/)**

## Local preview

```sh
python3 -m http.server 8768 --bind 127.0.0.1
```

Open http://127.0.0.1:8768/ from this computer.

## Features

- Five procedurally modelled devices in Silver, Graphite, and Cobalt: Form One, Form Mini, Air Buds, Arc Headphones, and Rise Charger.
- Collection filtering by Speakers, Personal audio, or Charging.
- Pointer and keyboard rotation, reset controls, and scroll-responsive presentation.
- Separating grille, driver assembly, enclosure and flush controls.
- Compatible Form One accessories with exact bundle pricing.
- Persistent local bag, quantities, removal, and an honest ordering-unavailable state.
- Responsive layouts, reduced-motion support, and a non-WebGL fallback.
- No sound playback or audio demo.

## Checks

```sh
node commerce.test.mjs
node --check app.js
node --check model.js
```

The 15 commerce checks cover totals, incompatible accessories, duplicate entries, invalid products and finishes, and quantity limits.

## Technical scope

Static HTML, CSS and native JavaScript modules. Three.js 0.180.0 is vendored under its MIT license in `vendor/LICENSE`. The product geometry is original, created in code. Google Fonts supplies the typography. No package installation is required.

This is a storefront sample, with illustrative specifications and pricing. It is not connected to Shopify inventory, checkout, payment, delivery or customer accounts. Bag data stays in the visitor's browser. No orders are placed. The custom WebGL viewer is not a Shopify-native GLB/AR implementation; a production integration would require validated product assets and commerce connections.

## Design references

- [Shopify product media](https://help.shopify.com/en/manual/products/product-media): supported 3D media and theme integration.
- [Nothing Headphone (1)](https://nl.nothing.tech/products/headphone-1): clear product hierarchy and finish selection.
- [Bang & Olufsen Beoplay H100](https://www.bang-olufsen.com/en/int/headphones/beoplay-h100): material-focused product presentation.
- [Teenage Engineering OB-4](https://teenage.engineering/products/ob-4): focused audio product storytelling.
