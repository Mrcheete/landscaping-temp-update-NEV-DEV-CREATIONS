# Green Edge Landscaping — Website

## What this is

This site was built from the agency's reusable "Semi Master Template" (plain HTML/CSS/JavaScript, no build tools, no framework) and re-skinned specifically for Green Edge Landscaping — a lawn care & landscaping business. Copy is short and direct on purpose: every page pushes toward one action, calling the business, rather than long explanatory text.

## What it contains

4 pages, all linked together through the same header and footer:

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, short About, services teaser, portfolio teaser, stats, testimonials, call-to-action banner |
| `services.html` | Full services list (6 cards: Lawn Care, Landscape Design, Hardscaping, Tree & Shrub Care, Irrigation, Seasonal Cleanup), each click-opens a popup with a bigger picture and full description, plus a 4-step "Our Process" section |
| `portfolio.html` | Project gallery (compact image blocks, like a product grid) with category filter buttons (All / Lawn Care / Hardscape / Design / Cleanup) |
| `contact.html` | Contact form, business details, and a map placeholder |

## Matching HTML to CSS

Every section is now tagged with a number, e.g. `<!-- ===== HERO [02] ===== -->` in the HTML and `/* ---------- Hero [02] ---------- */` in `css/style.css` — same number, same section. The full list is also written at the top of `style.css`:

| Code | Section |
|---|---|
| `[01]` | Header |
| `[02]` | Hero |
| `[03]` | About |
| `[05]` | Services cards |
| `[06]` | Process steps |
| `[07]` | Portfolio / Work |
| `[08]` | Filter bar (portfolio only) |
| `[09]` | Stats |
| `[10]` | Testimonials |
| `[11]` | CTA banner |
| `[12]` | Contact (+ map) |
| `[13]` | Page banner (inner pages) |
| `[14]` | Footer |
| `[15]` | Service detail modal |

A section that appears more than once (like `[01]` Header or `[14]` Footer) means that exact same CSS is reused on every page it appears on — so if you edit it in `style.css`, it changes everywhere at once. `[07 + 08]` on `portfolio.html`'s grid means that one HTML block uses two CSS sections together (the grid itself, plus the filter buttons).

Supporting files:

- `css/style.css` — all styling. Colours, fonts, and spacing are set as **variables at the very top of the file** — change those first when re-skinning for a new client, and most of the site updates automatically.
- `js/main.js` — small scripts: mobile menu toggle, portfolio filter, services popup, contact form handler.
- `README.md` — this file.

## What's still placeholder (real business info to fill in)

- **Images**: dashed grey boxes labelled "Image / Video" mark where a real photo goes — swap the `<div class="media-placeholder">...</div>` for an `<img>` tag. The `images/` folder is currently empty.
- **Page banner background**: `css/style.css`, the `.page-banner` rule, currently uses a placeholder leaf-pattern texture (a data-URI SVG) behind a dark green overlay. Swap the `url(...)` for a real photo (e.g. `url("../images/banner.jpg")`) when you have one — there's a comment marking the spot.
- **Phone number, email, address**: currently `(555) 123-4567` / `hello@greenedgelandscaping.com` / `Street, City, ST` — appears in the header `tel:` link (every page), the homepage CTA, and `contact.html`. Update everywhere once you have the real details.
- **Contact form**: currently just shows a confirmation popup — needs to be connected to a real email/backend (e.g. Formspree, Netlify Forms) before going live.
- **Social links**: Instagram/Facebook in the footer currently link to `#` — point these at the real accounts.
- **Services popup content**: each service card has `data-title`, `data-desc`, and `data-image` attributes — that's the text/label shown in the popup when clicked.

## What NOT to touch unless you mean to

- Class names in the HTML (`hero`, `card`, `work-item`, etc.) — the CSS and JS are wired to these; renaming them without updating the CSS/JS will break the styling or the interactive bits (menu, filter, popup).
- The `<script src="js/main.js">` tag at the bottom of each page — without it, the mobile menu, portfolio filter, and services popup stop working.
