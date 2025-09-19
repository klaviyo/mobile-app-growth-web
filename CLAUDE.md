# Claude Code Instructions

## Project Context
- Test website for Klaviyo software engineer work
- Primary purpose: serve AASA and app links files for mobile app universal linking testing
- Simple HTML content with multiple paths/pages
- Domain managed through Squarespace Domains
- DNS pointing to Netlify deployment

## Development Guidelines
- Keep HTML structure simple and clean
- Focus on functionality over aesthetics for testing purposes
- Ensure proper file structure for AASA and app links files
- Follow standard web practices for static sites

## Testing
- Test universal linking functionality with mobile apps
- Verify AASA and app links files are properly served
- Test all HTML pages render correctly
- Validate DNS and domain configuration

## Build & Deployment
- Deployed via Netlify
- Auto-deploy from git repository commits to main branch
- No build process required (static HTML)
- DNS managed through Squarespace Domains

## Common Commands
- `git add . && git commit -m "message" && git push` - Deploy changes
- Local testing: Open HTML files directly in browser or use simple HTTP server

## Notes
- AASA files must be served from `/.well-known/apple-app-site-association`
- App links files served from `/.well-known/assetlinks.json`
- Keep mobile app testing requirements in mind when making changes

## Special Commands
- **Update the In App Forms tester**: Copy `~/Klaviyo/Repos/fender/client/onsite/onsite-in-app-forms/test/iaf-tester.html` to `./public/` directory (replace if exists)