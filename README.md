# Repair Cafe

A lightweight static web app for helping people with broken household appliances diagnose simple issues, learn beginner repair basics, and find local repair support.

## Project goal

The app addresses a common repair barrier: people often want to fix broken appliances instead of discarding them, but they do not know where to start or which basic tasks are safe to attempt.

## Run locally

Open the project folder in a browser, or serve it locally with any static server:

```bash
python -m http.server 8000
```

Then visit:

- http://localhost:8000

## Deploy to GitHub Pages

1. Create a repository on GitHub.
2. Push this project to the repository.
3. In GitHub, enable GitHub Pages from the main branch or via a workflow.
4. A sample deployment workflow is included in `.github/workflows/deploy-pages.yml`.

## Deploy to Netlify

1. Push the project to GitHub.
2. Import the repository in Netlify.
3. Set the publish directory to `.` and use the default static site settings.
4. Or use the included `netlify.toml` configuration.

## Notes

This site is intentionally lightweight and easy to customize with additional repair guides, local workshop links, and a backend later if needed.
