# Joel G — Portfolio

Dark, modern, single-page portfolio. Plain HTML/CSS/JS — no build step.

**Live site:** https://joelscripts.github.io/Portfolio/

## Structure

```
index.html        — all content & sections
css/main.css      — all styles (tokens at the top of the file)
javascript/main.js — nav, scroll reveal, scroll spy, card spotlight
assets/           — images (profile, project thumbnails)
```

## Editing

- **Colours / fonts:** change the custom properties in `:root` at the top of `css/main.css`.
- **Add a project:** duplicate one `<article class="project">` block inside the Work section of `index.html` (marked with `<!-- Add a new project ... -->`).
- **Change copy:** all text lives in `index.html`.
- **Animations:** reveal-on-scroll elements just need a `data-reveal` attribute.

## Running locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 4173
```

Then visit http://127.0.0.1:4173/
