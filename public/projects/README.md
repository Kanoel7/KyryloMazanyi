# Project screenshots

Any number of images per project — **1, 2, 5, 10+**. The gallery adapts automatically.

## Folder structure

```
public/projects/
  hitinto/
  horror/
  alchemy/
```

## How to add images

1. Export screenshots as **WebP** (recommended) at **1280×720** (16:9).
2. Name files in display order: `01.webp`, `02.webp`, `03.webp`, `04.webp`, …
3. Edit `src/data/profile.ts` — add or remove lines in `images`:

```ts
// Any count — gallery handles 1 photo (static) or 2+ (scrollable)
images: projectImages('hitinto', [
  { file: '01.webp', alt: 'Co-op gameplay' },
  { file: '02.webp', alt: 'Upgrade system' },
  { file: '03.webp', alt: 'Projectile mechanics' },
  // { file: '04.webp', alt: 'Another shot' },  ← uncomment to add
]),
```

Or without the helper:

```ts
images: [
  { src: '/projects/hitinto/01.webp', alt: 'Co-op gameplay' },
],
```

## Behavior

| Photos | What happens |
|--------|----------------|
| 0 | Placeholder message |
| 1 | Single image, no arrows/dots |
| 2+ | Swipe, arrows, dots, counter `1 / N` |

Only files listed in `profile.ts` are shown.
