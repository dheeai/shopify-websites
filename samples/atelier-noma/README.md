# Atelier Noma · Sample 01

A contemporary fashion storefront by Dhee, featuring women’s and men’s collections in one editorial experience.

**[Open the live storefront](https://dheeai.github.io/shopify-websites/samples/atelier-noma/)** · [Development history](../../docs/atelier-noma-history.md)

## Features

- 15 products across womenswear and menswear, with category filtering and price sorting.
- Product details, image enlargement, related products, recent browsing, and fit guides.
- Quick-add with size selection; numeric waist sizing for men’s trousers and jeans.
- Search, saved pieces, outfit ideas, and an interactive outfit builder.
- Browser-local bag persistence, quantity adjustment, removal, and clear checkout availability.
- Three-second hero slides; section colour transitions; reduced-motion support.
- Responsive navigation, mobile purchase controls, semantic dialogs, and visible focus states.

## Files

- `index.html`: shared header, footer, document metadata, and app shell.
- `app.js`: product catalog, hash routes, rendering, shopping interactions, and motion behaviour.
- `style.css`: visual design, responsive layouts, and animations.
- `assets/`: generated editorial and product photography.

## Local preview

From the repository root, run `python3 -m http.server 8080`, then open `http://localhost:8080/samples/atelier-noma/`.

No dependencies or build step. JavaScript syntax: `node --check samples/atelier-noma/app.js`.

## Routes

| Page | Hash route |
| --- | --- |
| Home | `#/` |
| All products | `#/collection` |
| Womenswear | `#/collection/Women` |
| Menswear | `#/collection/Men` |
| Category example | `#/collection/Men/Shirts` |
| Product example | `#/product/men-linen` |
| Outfit ideas | `#/look` |
| Our story | `#/story` |
| Customer care | `#/care` |
| Bag | `#/cart` |

Assets are relative to this directory. Retain the trailing slash before the hash in share links.

## Validation checklist

Check desktop and mobile navigation, department/category filtering, filter persistence after refresh, sorting, search, saved items, size-guide round trips, add-to-bag, quantity changes, removal, and reduced-motion behaviour. Verify images load and that no page overflows horizontally.

## Integration boundary

This is a static storefront, not a Shopify Liquid theme or a live commerce integration. Products and prices are local data; storage uses the visitor’s browser. No orders, payment processing, inventory service, account system, email subscriptions, or customer-support backend are connected. Connect these services before commercial use.

## Assets

Product and editorial imagery was generated for this sample. Bodoni Moda and Manrope are loaded from Google Fonts. Reference retailers informed general design decisions; their logos and source code are not included.
