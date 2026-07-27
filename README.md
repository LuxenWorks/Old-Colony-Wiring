# Old Colony Wiring — Website Source Code

**Business:** Old Colony Wiring  
**Website:** [oldcolonywiring.com](https://oldcolonywiring.com)  
**Address:** 26 Wiggins Ave, Bedford, MA 01730  
**Phone:** (781) 200-5745  

A high-converting, SEO-optimised static website for a residential electrical contractor serving Bedford, MA and Middlesex County. Built with React 19, Vite, and Tailwind CSS 4. Fully portable — no Manus, no proprietary hosting, no external credentials required.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Routing | Wouter (client-side SPA) |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Hosting target | Cloudflare Pages (static) |
| Node version | 18 or higher |

---

## Local Development

### Prerequisites

- Node.js 18+ (`node --version`)
- pnpm (`npm install -g pnpm`)

### Install and run

```bash
# 1. Install dependencies
pnpm install

# 2. Start the development server
pnpm dev
```

The site will be available at `http://localhost:3000`.

No environment variables are required for local development. The site is fully static — all assets are local files under `client/public/assets/images/`.

---

## Production Build

```bash
pnpm build
```

**Build command:** `pnpm build`  
**Output directory:** `dist`  
**Node version:** 18 (or 20)

The `dist/` folder is the complete deployable artefact. It contains:

```
dist/
  index.html              ← SPA entry point
  _redirects              ← Cloudflare Pages SPA routing rule
  404.html                ← Fallback 404 page
  robots.txt
  sitemap.xml
  favicon.svg
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png
  assets/
    index-[hash].js       ← Bundled JS
    index-[hash].css      ← Bundled CSS
    images/               ← All site images (self-hosted, no CDN dependency)
      hero_bg_*.jpg
      service_panel_*.jpg
      service_wiring_*.jpg
      service_lighting_*.jpg
      service_ev_*.jpg
      service_outlets_*.jpg
      about_team_*.jpg
      cta_bg_*.jpg
```

---

## Cloudflare Pages Deployment

### Option A — Connect GitHub (recommended)

1. Push this repository to GitHub (your account, any repo name).
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your GitHub repository.
4. Set the build configuration:

| Setting | Value |
|---|---|
| Framework preset | None (or Vite) |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Root directory | *(leave blank)* |
| Node.js version | `18` |

5. Click **Save and Deploy**. Cloudflare will install dependencies, build, and deploy automatically on every push to `main`.

### Option B — Direct upload (no GitHub)

```bash
# Build locally first
pnpm build

# Upload the dist/ folder via Wrangler CLI
npx wrangler pages deploy dist --project-name=old-colony-wiring
```

### Custom domain

In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain** → enter `oldcolonywiring.com`. Cloudflare will provision an SSL certificate automatically. Point your domain's DNS to Cloudflare nameservers (or add a CNAME if the domain is already on Cloudflare).

### SPA routing

The `_redirects` file in `client/public/` (copied to `dist/` at build time) contains:

```
/* /index.html 200
```

This tells Cloudflare Pages to serve `index.html` for all routes, which is required for client-side routing (Wouter). **Do not delete this file.**

---

## GitHub Setup

```bash
# Initialise git (if not already done)
git init
git add .
git commit -m "Initial commit — Old Colony Wiring website"

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/old-colony-wiring.git

# Push
git branch -M main
git push -u origin main
```

The `.gitignore` excludes `node_modules/`, `dist/`, and all log files. The `dist/` folder is intentionally excluded from git — Cloudflare Pages builds it from source on every deploy.

---

## Customisation Guide

### Business information

All business details (phone, address, hours) are hard-coded in the page components. To update them globally, search for `(781) 200-5745`, `26 Wiggins Ave`, or `Bedford, MA` across `client/src/pages/`. The canonical constants are also in `client/src/const.ts`.

### Colours and typography

Edit `client/src/index.css`. The brand palette uses CSS custom properties:

```css
/* Navy — primary brand colour */
--navy: #1B2A4A;

/* Amber — signature accent */
--amber: #F5A623;
```

Fonts are loaded from Google Fonts in `client/index.html`:
- **Oswald** — display/headings
- **Source Sans 3** — body copy

### Images

All images live in `client/public/assets/images/`. Replace any file with a same-named JPEG and rebuild. Recommended maximum width: 1600 px at 80–85 % JPEG quality.

### Analytics

The analytics script placeholder is in `client/index.html` (commented out). Replace it with your own Umami, Plausible, or Google Analytics 4 snippet:

```html
<!-- Google Analytics 4 example -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

After deploying to your custom domain, verify ownership in [Google Search Console](https://search.google.com/search-console). The recommended method for Cloudflare Pages is the **HTML tag** method — add the `<meta name="google-site-verification" content="...">` tag inside `<head>` in `client/index.html`, then rebuild and redeploy.

### Contact form

The contact form on `/contact` currently shows a success toast on submit (client-side only — no data is sent). To make it functional, integrate one of:

- **Cloudflare Pages Functions** — add a `functions/api/contact.ts` file to handle `POST` requests and forward to email via Resend or SendGrid.
- **Formspree** — replace the `onSubmit` handler with a `fetch` to `https://formspree.io/f/YOUR_FORM_ID`.
- **Netlify Forms** — add `data-netlify="true"` to the `<form>` element (if migrating to Netlify).

### Sitemap

`client/public/sitemap.xml` lists all pages with `https://oldcolonywiring.com` as the base URL. Update the `<lastmod>` dates after major content changes.

---

## Deployment Checklist

Complete these steps before going live:

### DNS & domain
- [ ] Domain `oldcolonywiring.com` is registered and nameservers point to Cloudflare
- [ ] Custom domain added in Cloudflare Pages → your project → Custom domains
- [ ] SSL certificate provisioned (automatic via Cloudflare)
- [ ] `https://www.oldcolonywiring.com` redirects to `https://oldcolonywiring.com` (or vice versa — set a redirect rule in Cloudflare)

### SEO & analytics
- [ ] Google Analytics 4 or Plausible snippet added to `client/index.html`
- [ ] Site verified in [Google Search Console](https://search.google.com/search-console)
- [ ] Sitemap submitted to Google Search Console (`https://oldcolonywiring.com/sitemap.xml`)
- [ ] `robots.txt` reviewed — currently allows all crawlers
- [ ] Canonical URLs in `client/index.html` updated if domain differs from `oldcolonywiring.com`

### Content
- [ ] All phone numbers verified: `(781) 200-5745`
- [ ] Address verified: `26 Wiggins Ave, Bedford, MA 01730`
- [ ] Business hours verified: Mon–Sat 7am–6pm
- [ ] Email address verified: `info@oldcolonywiring.com`
- [ ] MA Electrician license number updated in Footer (`#E-12345` is a placeholder — replace with the real number)
- [ ] Social media links in Footer updated (Facebook and Instagram URLs)
- [ ] JSON-LD schema in `client/index.html` reviewed for accuracy

### Contact form
- [ ] Contact form wired to a real backend (Formspree, Cloudflare Pages Function, or similar)
- [ ] Form submission tested end-to-end

### Performance
- [ ] Run `pnpm build` locally and confirm no build errors
- [ ] Test with `pnpm preview` before deploying
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) after first deploy
- [ ] Confirm all images load (check browser Network tab for 404s)

### Google Business Profile
- [ ] GBP listing claimed at [business.google.com](https://business.google.com)
- [ ] Website URL on GBP updated to `https://oldcolonywiring.com`
- [ ] NAP (Name, Address, Phone) on GBP matches the website exactly

---

## File Structure

```
old-colony-wiring/
  client/
    public/
      assets/images/      ← All site images (self-hosted)
      _redirects          ← Cloudflare Pages SPA routing
      404.html
      robots.txt
      sitemap.xml
      favicon.svg
      favicon-32x32.png
      favicon-16x16.png
      apple-touch-icon.png
    src/
      pages/
        Home.tsx           ← Homepage
        Services.tsx       ← Services listing
        About.tsx          ← About page
        Contact.tsx        ← Contact + map + form
        ServiceAreas.tsx   ← Middlesex County towns
        Blog.tsx           ← Blog listing
        NotFound.tsx       ← 404 page
      components/
        Header.tsx         ← Navigation
        Footer.tsx         ← Footer
        BrandMark.tsx      ← Lightning bolt SVG logo
        Map.tsx            ← Google Maps embed (iframe)
        ui/                ← shadcn/ui components
      index.css            ← Global styles + brand tokens
    index.html             ← HTML entry point + SEO meta + JSON-LD
  vite.config.ts           ← Portable Vite config (no Manus plugins)
  package.json
  tsconfig.json
  .gitignore
  README.md                ← This file
```

---

## Licence

All source code in this repository is the property of Old Colony Wiring. All rights reserved.
