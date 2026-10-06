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

### Local preview

No installation or build step is required.

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/` to visit Atelier Noma.

### Project structure

Each website lives in `samples/<website-name>/`. Atelier Noma includes `index.html`, `style.css`, `app.js`, and an `assets/` directory.

GitHub Pages publishes from `main` at the repository root. The root URL opens Atelier Noma directly; additional websites can use their own direct paths.

### Technical scope

This is a static storefront sample. Shopping bags and saved pieces use browser storage. Shopify checkout, payments, inventory, and email services are not connected.

Product imagery was generated for the sample. Typography uses Bodoni Moda and Manrope from Google Fonts.
