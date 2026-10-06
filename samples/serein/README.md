# Serein

A skincare storefront with warm photography, thoughtful typography, and a guided routine builder.

**[Visit Serein](https://dheeai.github.io/shopify-websites/samples/serein/)**

- Eight products, size options, and three curated sets.
- Category and texture filters, price sorting, and live search.
- A routine builder with adjustable recommendations and accurate totals.
- Saved products and a persistent bag with quantity controls.
- Three-second campaign transitions, scroll reveals, and reduced-motion support.
- Responsive layouts and keyboard-accessible dialogs.

## Run locally

From the repository root:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/samples/serein/`.

## Implementation

Plain HTML, CSS, and JavaScript modules. No dependencies or build step. Product data lives in `data.js`; cart validation and routine rules live in `commerce.js`.

This is a static storefront sample. Shopify services, payments, inventory, and customer messaging are not connected. Checkout explains that orders cannot be placed. Bag and saved products stay in browser storage.

Original product and campaign imagery was generated for this sample. Typography uses DM Sans from Google Fonts. Product descriptions and prices illustrate the shopping experience; they are not specifications for manufactured cosmetics.

## Checks

Run `node samples/serein/commerce.test.mjs` from the repository root to check cart validation, variant totals, and routine selection.
