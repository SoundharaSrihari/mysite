# TODO: Deploy vellora_website to GitHub Pages

## Steps to Complete
- [x] Check for existing GitHub Actions workflow in `.github/workflows/`
- [x] Create or update GitHub Actions workflow file for building and deploying to GitHub Pages
- [x] Add SPA routing support by creating `public/404.html` to redirect to `index.html`
- [x] Update `vite.config.ts` to set base path if deploying to a subdirectory (e.g., '/repo-name/') - No change needed if deploying to root
- [x] Update `package.json` scripts if needed for deployment - Build script already present
- [x] Provide user with instructions to enable GitHub Pages in repository settings and push changes

## Revert Steps (if needed)
- [ ] Delete `.github/workflows/deploy.yml` (if created)
- [ ] Delete `public/404.html` (if created)
- [ ] Revert changes to `vite.config.ts` (remove base path if added)
- [ ] Revert changes to `package.json` (remove any added scripts)
- [ ] Disable GitHub Pages in repository settings if enabled
- [ ] Delete `gh-pages` branch if created by workflow

## Notes
- All changes are made to prepare for deployment; no commits pushed yet.
- User can revert by following the revert steps above.
