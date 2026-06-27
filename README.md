# Grounded — Wiki & Progress Tracker

A self-hosted, minimal Grounded companion site with a built-in progress tracker. Every category renders as a checklist with per-category and **overall** progress bars (top-right). Progress is saved in the browser (`localStorage`). No assets are loaded from fandom.com at runtime — each entry just carries a small `↗` reference link back to its source page.

## Files
- `index.html` — the whole UI (HTML/CSS/JS). Renders entirely from `data.js`.
- `data.js`    — the extracted game data. **Add categories here**; the UI updates automatically.
- `CNAME`      — custom domain for GitHub Pages.
- `.nojekyll`  — skip Jekyll processing.

## Adding more data
Open `data.js` and push another object into `GROUNDED_DATA.categories`:

```js
{
  id: "creatures",
  title: "Creatures",
  blurb: "Short description shown under the heading.",
  wiki: "Creatures",          // slug for the category's "View on wiki" link
  groups: [
    { name: "Harmless", items: [
      { n: "Aphid", w: "Aphid", meta: "Loot: Aphid Meat, Aphid Slug" },
      // ...
    ]},
  ]
}


## License & attribution
Game text/data adapted from the [Grounded Wiki](https://grounded.fandom.com/wiki/Grounded)
under CC-BY-SA. Game art is **not** mirrored (icons are generated locally) to
respect Obsidian/Xbox copyright. Unofficial fan project.
