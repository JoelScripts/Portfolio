# Portfolio

Personal portfolio site for **Joel G** ([@JoelScripts](https://github.com/JoelScripts)) — software, Lua and FiveM developer.

Static HTML, CSS and vanilla JavaScript. No build step, no dependencies.

## Structure

```
index.html            # single page: hero, about, work, contact
css/main.css          # design tokens + all styling
javascript/main.js    # header state, mobile nav, scroll spy, reveal
assets/               # images (portrait, project art)
```

## Local development

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Deploying

Push the repository and enable GitHub Pages on the `main` branch (root).
The site is served as-is — there is nothing to build.

## Editing content

- **Text, links and project entries** — everything lives in `index.html`.
  Projects are `<article class="work-item">` blocks inside the `#work` section;
  duplicate one to add another.
- **Colours and fonts** — the `:root` block at the top of `css/main.css`.
  The palette (`#08090b` base, `#1b2029` hairlines, `#ffab48` accent) matches
  [Project Tracker](https://github.com/JoelScripts/Project-Tracker).

## Licence

See [LICENSE](./LICENSE).
