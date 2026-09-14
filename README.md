# Hazy Daisy Jewelry

A modern, playful, single-page storefront starter for Hazy Daisy Jewelry. It is built with plain HTML, CSS, JavaScript, and SVG, so it has no build step and is ready for GitHub Pages.

## File structure

```text
Hannah/
├── .nojekyll
├── README.md
├── index.html
├── site-config.js
├── script.js
├── styles.css
└── assets/
    ├── hazy-daisy-logo.svg
    └── hero-necklace.svg
```

Every path above is relative to the repository root. Keep the folder and file names exactly as shown.

## Personalize the site

### 1. Update links and contact details

Open `site-config.js`. Replace the placeholder Instagram, TikTok, and email values. The Etsy shop is already set to the standard Hazy Daisy Jewelry shop URL; confirm it is correct before sharing the site.

Any link left with `YOUR_` in its value is automatically hidden, so unfinished social profiles never send visitors to a broken page.

### 2. Edit the copy

Open `index.html`. The main areas are clearly labeled with comments:

- Header and navigation
- Hero
- Featured collections
- About
- Party services
- Contact and links
- Footer

Collection descriptions currently reflect the Sunset Collection, Minnesota sports colorways, pearl-and-gold pieces, gemstone chips, seed beads, and whimsical moon, star, and daisy designs.

### 3. Change colors and typography

Open `styles.css`. Edit the custom properties near the top of the file under `:root`. Those variables control the color palette, spacing, shadows, and page width.

### 4. Replace the artwork

Replace either SVG inside `assets/` while keeping the same filename, or update the matching `src` in `index.html`. Product photos work well at a 4:5 aspect ratio and should be compressed before upload.

## Publish with GitHub Pages

1. Open this repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the **master** branch and the **/(root)** folder.
5. Click **Save**.

After GitHub finishes the first deployment, the project site should be available at:

https://dornerhannah.github.io/Hannah/

Future commits to `master` will deploy automatically. Because all asset links are relative, the site works correctly from the `/Hannah/` project path.

## Preview locally

From the repository folder, run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Technical notes

- No framework, package manager, database, or build command
- Responsive mobile navigation
- Keyboard-friendly controls and visible focus states
- Reduced-motion support
- Semantic landmarks and accessible labels
- SVG artwork included in the repository
- Contact buttons use Etsy or email; no backend is required

## Launch checklist

- [ ] Confirm the Etsy URL in `site-config.js`
- [ ] Add Instagram and TikTok profile URLs
- [ ] Add a business email address
- [ ] Replace starter artwork with product photography when ready
- [ ] Confirm party wording, service area, and pricing
- [ ] Add shop policies to Etsy
- [ ] Enable GitHub Pages
