import { asset } from '../lib/paths';

/**
 * Icon registry — swap SVG files in public/icons/ to customize.
 *
 * Social:  public/icons/social/{name}.svg
 * UI:      public/icons/ui/{name}.svg
 *
 * Replace a file (keep the same filename) — style updates automatically.
 */

export const socialIconNames = [
  'github',
  'linkedin',
  'artstation',
  'youtube',
  'itch',
  'email',
  'portfolio',
] as const;

export const uiIconNames = [
  'cv',
  'menu',
  'close',
  'copy',
  'check',
  'external',
  'chevron-left',
  'chevron-right',
] as const;

export type SocialIconName = (typeof socialIconNames)[number];
export type UiIconName = (typeof uiIconNames)[number];
export type IconName = SocialIconName | UiIconName;

const socialSet = new Set<string>(socialIconNames);
const uiSet = new Set<string>(uiIconNames);

export function isSocialIcon(name: string): name is SocialIconName {
  return socialSet.has(name);
}

export function isUiIcon(name: string): name is UiIconName {
  return uiSet.has(name);
}

export function isIconName(name: string): name is IconName {
  return isSocialIcon(name) || isUiIcon(name);
}

/** Path to SVG in public/ — used by Icons.astro */
export function getIconPath(name: IconName): string {
  if (isSocialIcon(name)) return asset(`icons/social/${name}.svg`);
  return asset(`icons/ui/${name}.svg`);
}
