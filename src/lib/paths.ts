/** Prefix public asset paths with Astro base (GitHub Pages subdirectory support). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  // Ensure base ends with / and path doesn't start with /
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  return `${baseWithSlash}${normalized}`;
}
