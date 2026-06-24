import { asset } from '../lib/paths';

/**
 * Central data file — update links and content here.
 * Links marked null need a real URL before publishing.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  /** Set to null and keep label — button renders with href="#" until URL is added */
  url: string | null;
  icon: 'github' | 'linkedin' | 'artstation' | 'youtube' | 'portfolio' | 'itch' | 'email' | 'cv';
}

export interface ProjectLink {
  label: string;
  url: string | null;
  type: 'itch' | 'youtube' | 'artstation' | 'github' | 'details';
}

/**
 * Project screenshot — add as many as you need (1, 2, 5, 10…).
 * Gallery scroll, dots and counter adapt to images.length automatically.
 *
 * 1. Drop files into public/projects/{project-id}/
 * 2. Add one `{ src, alt }` entry per image in the project's `images` array
 * 3. Remove entries to reduce slides — no fixed limit
 */
export interface ProjectImage {
  src: string;
  alt: string;
}

/** Optional helper — list any number of files in display order */
export function projectImages(
  folder: string,
  files: Array<{ file: string; alt: string }>,
): ProjectImage[] {
  return files.map(({ file, alt }) => ({
    src: asset(`projects/${folder}/${file}`),
    alt,
  }));
}

export interface Project {
  id: string;
  name: string;
  role: string;
  pitch: string;
  bullets: string[];
  metrics: string[];
  tags: string[];
  proves: string;
  links: ProjectLink[];
  accent: 'cyan' | 'pink' | 'violet';
  images: ProjectImage[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const profile = {
  name: 'Kyrylo Mazanyi',
  shortName: 'KM',
  title: 'Junior Unreal Engine 5 Gameplay Engineer / Gameplay Programmer',
  email: 'kyrylomazaniy@gmail.com',
  location: 'Nitra, Slovakia',
  timezone: 'CET',
  badge: 'Available for Junior / Internship / Contract · Remote/CET',

  hero: {
    badgePrimary: 'Junior / Internship / Contract',
    badgeSecondary: 'Remote · CET',
    subtitle:
      'I build gameplay systems, multiplayer-ready prototypes, AI behavior, data-driven mechanics, UI and polished UE5 prototypes using C++ and Blueprints.',
    credibility: [
      '2+ years UE learning',
      '3 solo shipped prototypes',
      'UE 5.5–5.8',
      'C++ & Blueprints',
    ],
    metrics: [
      { value: '3', label: 'shipped solo prototypes' },
      { value: '2+', label: 'years UE-focused learning' },
      { value: 'Remote/CET', label: 'availability' },
    ],
  },

  summary:
    'Junior UE5 Gameplay Engineer with 2+ years of focused Unreal Engine learning and 3 solo shipped prototypes. Code-first gameplay programmer focused on writing clean, maintainable C++/Blueprint gameplay logic using data-driven, interface-based, and modular architecture. Strong interest in turning design ideas into smooth, interactive gameplay systems, from prototyping and implementation to polish, UI, multiplayer-ready features, AI behavior, and animation pipelines. Targeting Junior/Intern roles in gameplay programming, gameplay engineering, generalist game programming, or technical design, where I can build, iterate, and ship playable game systems in a team.',

  skillGroups: [

    {
      title: 'Engine',
      skills: [
        'Unreal Engine 5.5–5.7',
        'C++ & Blueprints',
        'GAS',
        'OOP',
        'Inheritance',
        'Interfaces',
        'Actor Components',
      ],
    },
    {
      title: 'Gameplay Systems',
      skills: [
        'Interaction systems',
        'Dialogue/story events',
        'Teleport/projectile mechanics',
        'Upgrades',
        'Save/load',
        'Settings UI',
      ],
    },
    {
      title: 'Data-Driven Design',
      skills: [
        'DataTables',
        'Structs',
        'PrimaryDataAssets',
        'Reusable components',
        'Modular base classes',
      ],
    },
    {
      title: 'AI & Animation',
      skills: [
        'Behavior Trees',
        'EQS',
        'AnimBP',
        'Motion Matching',
        'IK',
      ],
    },
    {
      title: 'Input / UI / Rendering',
      skills: [
        'Enhanced Input',
        'UMG',
        'CommonUI',
        'Lumen',
        'Nanite',
        'TSR',
        'lighting/performance balance',
      ],
    },
    {
      title: 'Multiplayer',
      skills: [
        'Listen Server prototype',
        'Replicated projectile mechanics',
        'Multiplayer-ready upgrade systems',
      ],
    },
    {
      title: 'Programming & Tools',
      skills: [
        'C++',
        'C#',
        'Python',
        'Rider',
        'Visual Studio',
        'Git',
        '3ds Max',
        'Blender',
        'Photoshop',
        'Unity',
      ],
    },
  ] satisfies SkillGroup[],

  projects: [
    {
      id: 'hitinto',
      name: 'HitInto',
      role: 'Solo · Platformer/Action · UE 5.7 · Windows · 6 months',
      pitch:
        '4-player co-op action/platformer prototype with Listen Server networking, multiplayer-ready upgrades and replicated projectile mechanics.',
      bullets: [
        'Built a 4-player co-op multiplayer prototype using Unreal Listen Server networking, with one player hosting the session.',
        'Implemented a multiplayer-ready, data-driven upgrade system with 10+ upgrade types.',
        'Added enemy bot count scaling based on active players.',
        'Created replicated projectile mechanics with teleport, damage and multiplayer pull mechanics for dragging other players.',
        'Packaged a Windows build with around 140 minutes of playtime.',
      ],
      metrics: [
        '4-player co-op',
        '10+ upgrade types',
        '~140 min playtime',
        '~130 FPS on Epic settings with TSR, RTX 5070',
        '2.33 GB build size',
      ],
      tags: ['UE5', 'C++', 'Blueprints', 'Multiplayer', 'DataTables'],
      proves: 'HitInto proves multiplayer/gameplay systems.',
      images: projectImages('hitinto', [
        { file: '1.png', alt: '' },
        { file: '2.png', alt: '' },
        { file: '3.png', alt: '' },
        { file: '4.png', alt: '' },
        { file: '5.png', alt: '' },
        { file: '6.png', alt: '' },
        { file: '7.png', alt: '' },
        { file: '8.png', alt: '' },
        { file: '9.png', alt: '' },
        { file: '10.png', alt: '' },
        { file: '11.png', alt: '' },
        { file: '12.png', alt: '' },
        { file: '13.png', alt: '' }
      ]),
      links: [
        // TODO: insert real Itch.io URL
        { label: 'Itch.io', url: 'https://kanoel77.itch.io/teleportgame', type: 'itch' },
        // TODO: insert real YouTube URL
        { label: 'YouTube', url: 'https://www.youtube.com/@KyryloMazanyi', type: 'youtube' },
        // TODO: insert real ArtStation URL
        { label: 'ArtStation', url: 'https://kanoel.artstation.com/albums/14979956', type: 'artstation' }
        // TODO: insert real GitHub URL
      ],
      accent: 'cyan',
    },
    {
      id: 'horror',
      name: 'Horror Prototype',
      role: 'Solo · Story Horror · UE 5.7 · Windows · 4 months',
      pitch:
        'Story-driven horror prototype focused on reusable dialogue, modular story events, AI behavior, animation pipeline and localization.',
      bullets: [
        'Implemented a reusable Dialogue System as an Actor Component using DataTables, attachable to any actor.',
        'Built a modular Story Event System with base class/subclasses for camera focus, dynamic sound, global light changes, item interactions, dialogue playback, spawning and narrative triggers.',
        'Added RU/EN localization with around 1,000 words integrated into UI and narrative flow.',
        'Implemented Behavior Tree AI.',
        'Built AnimBP / Motion Matching / IK animation pipeline.',
        'Added extensive settings UI.',
        'Packaged a Windows build with around 15 minutes of playtime.',
      ],
      metrics: [
        'Reusable Dialogue Component',
        'Modular Story Event System',
        'RU/EN localization, ~1,000 words',
        '~15 min playtime',
        '~120–125 FPS on Epic settings, RTX 5070',
        '3.39 GB build size',
      ],
      tags: ['UE5', 'C++', 'Blueprints', 'AI', 'DataTables', 'UMG'],
      proves: 'Horror Prototype proves reusable architecture, AI, narrative systems.',
      images: projectImages('horror', [
        { file: '1.png', alt: '' },
        { file: '2.png', alt: '' },
        { file: '3.png', alt: '' },
        { file: '4.png', alt: '' },
        { file: '5.png', alt: '' },
        { file: '6.png', alt: '' },
        { file: '7.png', alt: '' },
        { file: '8.png', alt: '' },
        { file: '9.png', alt: '' },
        { file: '10.png', alt: '' },
        { file: '11.png', alt: '' },
        { file: '12.png', alt: '' },
        { file: '13.png', alt: '' }
      ]),
      links: [
        // TODO: insert real YouTube URL
        { label: 'YouTube', url: 'https://www.youtube.com/watch?v=k3AeC5DK7Yk', type: 'youtube' },
        // TODO: insert real ArtStation URL
        { label: 'ArtStation', url: 'https://kanoel.artstation.com/albums/14901225', type: 'artstation' }
      ],
      accent: 'pink',
    },
    {
      id: 'alchemy',
      name: 'Alchemy Again',
      role: 'Solo · Puzzle2025 · Epic MegaJam · UE 5.6.1 · Windows · 1 week',
      pitch:
        'Game jam prototype with data-driven potion recipes, interaction loop, validation logic, audio pass and polished lighting.',
      bullets: [
        'Built a data-driven potion recipe system using Blueprints, DataTables and Structs.',
        'Implemented cauldron/oven validation logic.',
        'Implemented the core interaction loop and controls with Enhanced Input.',
        'Delivered full audio pass, sound design, cohesive visual style and lighting.',
        'Released a packaged Windows build with 12 potion recipes and around 10 minutes average playtime.',
      ],
      metrics: [
        '1-week jam project',
        '12 potion recipes',
        '~10 min average playtime',
        '~130 FPS on Epic settings with TSR, RTX 5070',
        '1.08 GB build size',
      ],
      tags: ['UE5', 'Blueprints', 'DataTables', 'Enhanced Input', 'UMG'],
      proves: 'Alchemy Again proves fast delivery, data-driven design and polish under deadline.',
      images: projectImages('AlchemyAgain', [
        { file: '01.png', alt: '' },
        { file: '02.png', alt: '' },
        { file: '03.png', alt: '' },
        { file: '04.png', alt: '' },
        { file: '05.png', alt: '' },



      ]),
      links: [
        // TODO: insert real Itch.io URL
        { label: 'Itch.io', url: 'https://kanoel77.itch.io/alchemy-again', type: 'itch' },
        // TODO: insert real YouTube URL
        { label: 'YouTube', url: 'https://www.youtube.com/watch?v=k3AeC5DK7Yk', type: 'youtube' },
        // TODO: insert real ArtStation URL
        { label: 'ArtStation', url: 'https://kanoel.artstation.com/albums/14911920', type: 'artstation' }
      ],
      accent: 'violet',
    },
  ] satisfies Project[],

  education: {
    institution: 'Univerzity Konštantína Filozofa v Nitre',
    degree: 'Applied Informatics / Aplikovaná informatika',
    year: '3rd year (current)',
    location: 'Nitra, Slovakia',
    note: 'Combining university CS fundamentals with focused Unreal Engine gameplay development.',
  },

  languages: [
    'English B2, Cambridge certificate',
    'Russian native',
    'Ukrainian native',
    'Slovak intermediate',
  ],

  availability: [
    'Remote preferred from CET',
    'Open to Junior, Internship and Contract formats',
    'Based in Nitra, Slovakia',
  ],

  contact: {
    heading: 'I love creating games — and I\'d be thrilled to grow with your team.',
    text: 'As a student Gameplay Engineer, I\'m genuinely passionate about turning ideas into playable experiences. I\'d be happy to contribute, learn, and help bring your project to life.',
  },

  nav: [
    { label: 'Summary', href: '#summary' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],

  /** Icons shown in header and contact link rows */
  headerSocialIcons: ['github', 'linkedin', 'artstation', 'youtube', 'itch'] as const,

  social: [
    { label: 'GitHub', url: 'https://github.com/Kanoel7', icon: 'github' },
    // TODO: insert real LinkedIn URL
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kyrylo-mazanyi-0a4177343/', icon: 'linkedin' },
    // TODO: insert real ArtStation URL
    { label: 'ArtStation', url: 'https://kanoel.artstation.com/', icon: 'artstation' },
    // TODO: insert real YouTube URL
    { label: 'YouTube', url: 'https://www.youtube.com/@KyryloMazanyi', icon: 'youtube' },
    // TODO: insert real Itch.io URL
    { label: 'Itch.io', url: 'https://kanoel77.itch.io/', icon: 'itch' },
    // TODO: insert real Portfolio URL
    { label: 'Portfolio', url: null, icon: 'portfolio' },
  ] satisfies SocialLink[],

  /** Place CV PDF at public/cv/kyrylo-mazanyi-cv.pdf and set URL below */
  // TODO: set cvUrl after adding PDF to public/cv/
  cvUrl: asset('cv/kyrylo-mazanyi-cv.pdf'),

  seo: {
    title: 'Kyrylo Mazanyi — Junior UE5 Gameplay Engineer',
    description:
      'Portfolio of Kyrylo Mazanyi, Junior Unreal Engine 5 GGameplay Engineer focused on C++, Blueprints, gameplay systems, multiplayer-ready prototypes, AI and data-driven UE5 design.',
    knowsAbout: [
      'Unreal Engine 5',
      'C++',
      'Blueprints',
      'Gameplay Systems',
      'AI',
      'DataTables',
      'Multiplayer',
      'UI',
    ],
  },
} as const;

/** Returns real URLs only — for JSON-LD sameAs */
export function getSameAsLinks(): string[] {
  return profile.social
    .map((s) => s.url)
    .filter((url): url is string => url !== null);
}

export function resolveUrl(url: string | null): string {
  return url ?? '#';
}

export function isPlaceholder(url: string | null): boolean {
  return url === null;
}

export function getHeaderSocialLinks(): SocialLink[] {
  return profile.social.filter((link) =>
    (profile.headerSocialIcons as readonly string[]).includes(link.icon),
  );
}

export function getContactSocialLinks(): SocialLink[] {
  return getHeaderSocialLinks();
}
