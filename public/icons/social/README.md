# Social / platform icons

Replace any `.svg` file here — the site picks it up automatically (same filename).

## Files

| File | Used for |
|------|----------|
| `github.svg` | GitHub links |
| `linkedin.svg` | LinkedIn |
| `artstation.svg` | ArtStation |
| `youtube.svg` | YouTube |
| `itch.svg` | Itch.io |
| `email.svg` | Email buttons |
| `portfolio.svg` | Portfolio link |

## How to swap an icon

1. Download or export your icon as **SVG**
2. Replace the file, e.g. `artstation.svg` — keep the **exact same name**
3. Refresh the page (`npm run dev` if needed)

No code changes required.

## Style rules (auto-applied)

Icons use **CSS mask** — they inherit the text color of the button/link:

- Default: muted gray
- Hover: cyan (like other nav icons)
- Size: controlled by the site (`w-4`, `w-5`, etc.)

Your SVG can use **any fill color** (#000 recommended) — only the **shape** matters.

## SVG tips

- Use `viewBox="0 0 24 24"` (square, 24×24 grid)
- Prefer solid icons (`fill="#000"`) or strokes (`stroke="#000"`)
- Remove fixed `width` / `height` on the root `<svg>` if possible
- Keep the logo centered in the viewBox

## Default sources

- `artstation.svg` — official ArtStation triangle mark ([artstation.com/about/logo](https://www.artstation.com/about/logo))
- `itch.svg` — official itch.io mascot / app icon ([itch.io/press-kit](https://itch.io/press-kit))

## Add a new platform

1. Drop `public/icons/social/discord.svg` (example)
2. Register in `src/data/icons.ts` → `socialIconNames` array
3. Add link in `src/data/profile.ts` → `social` and optionally `headerSocialIcons`
