# MAGE Web Test Site

Static HTML site for Klaviyo's Mobile App Growth Engineering (MAGE) team. Hosted on Netlify, deployed via PR merges to `main`.

**Live at:** https://mageweb.netlify.app and https://www.evancmasseau.com
**DNS:** Managed through Squarespace Domains, pointing to Netlify

## What This Site Does

- Serves AASA and App Links files for mobile universal linking testing (iOS + Android)
- Hosts an In-App Forms tester at `/forms`
- Loads `klaviyo.js` on all pages via `klaviyo-init.js` for web form testing
- Provides a fake e-commerce storefront ("Luxe Llama Co.") with multiple pages/paths for link testing

## Development Workflow

- **Branch:** Work on `ecm`, never commit directly to `main`
- **Deploy:** Create PRs from `ecm` → `main`. Merging triggers Netlify deploy. Only merge when ready to deploy — this controls deploy frequency.
- **Local testing:** `npx serve public` then open http://localhost:3000
- Keep HTML simple and clean. Focus on functionality over aesthetics — this is a testing site.

## Key Files

- `public/klaviyo-init.js` — Shared module that loads `klaviyo.js` with company ID and environment from URL params (`?company_id=XXX&env=web|in-app`), persisted to sessionStorage
- `public/.well-known/apple-app-site-association` — iOS AASA config
- `public/.well-known/assetlinks.json` — Android App Links config

## Syncing the In-App Forms Tester

`public/forms.html` is a copy of the IAF tester from the fender repo. To update it:

```bash
cp ~/Klaviyo/Repos/fender/client/onsite/onsite-in-app-forms/test/iaf-tester.html ./public/forms.html
```

This is a manual copy — there's no automated sync. Check for updates whenever the fender tester changes.
