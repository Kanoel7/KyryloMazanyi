/** Prefix public asset paths with Astro base (GitHub Pages subdirectory support). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}
