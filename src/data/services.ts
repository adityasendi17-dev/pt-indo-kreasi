export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconType: 'gamepad' | 'design' | 'pixel-art' | 'ui-ux' | 'interactive';
  capabilities: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'game-development',
    name: 'Game Development',
    category: 'Engineering & Engine',
    shortDesc: 'Pengembangan game dari konsep hingga implementasi teknis penuh.',
    fullDesc: 'Kami membangun arsitektur permainan yang kokoh, performa optimal multiplatform, sistem gameplay responsif, dan logika permainan yang teruji.',
    iconType: 'gamepad',
    capabilities: [
      '2D & 2.5D Game Engines',
      'Cross-platform optimization (PC, Console, Mobile)',
      'Physics, collision & state systems',
      'Performance profiling & bug fixing'
    ]
  },
  {
    id: 'game-design',
    name: 'Game Design',
    category: 'Mechanics & Systems',
    shortDesc: 'Perancangan gameplay, mekanik, level, dan pengalaman pemain.',
    fullDesc: 'Merancang siklus permainan (core gameplay loop), kurva kesulitan berimbang, progresi reward, dan struktur level yang membuat pemain tenggelam dalam dunia permainan.',
    iconType: 'design',
    capabilities: [
      'Core loop & economy balancing',
      'Level design & pacing architecture',
      'Player progression & skill trees',
      'Game design document (GDD) creation'
    ]
  },
  {
    id: 'pixel-art-visual-design',
    name: 'Pixel Art & Visual Design',
    category: 'Aesthetics & Sprites',
    shortDesc: 'Pembuatan aset visual, karakter, dan lingkungan game bergaya pixel autentik.',
    fullDesc: 'Keahlian dalam sprite animation frame-by-frame, isometric tileset, visual background berlapis, dan efek partikel retro yang memikat mata.',
    iconType: 'pixel-art',
    capabilities: [
      'Character sprite sheet animations',
      'Tileset modular 16-bit & 32-bit environments',
      'Parallax scrolling backgrounds',
      'Visual effects (VFX) pixel-perfect'
    ]
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    category: 'Interfaces & HUD',
    shortDesc: 'Perancangan antarmuka game intuitif dan pengalaman pengguna yang mulus.',
    fullDesc: 'Mendesain Heads-Up Display (HUD), menu navigasi game yang imersif, tipografi retro yang nyaman dibaca, dan feedback visual yang memuaskan.',
    iconType: 'ui-ux',
    capabilities: [
      'Custom retro HUD & diegetic UI',
      'Inventory, dialogue & skill menus',
      'Gamepad & touch friendly layouts',
      'Sound feedback & visual cue cues'
    ]
  },
  {
    id: 'interactive-experiences',
    name: 'Interactive Experiences',
    category: 'Web & Brand Activations',
    shortDesc: 'Pengembangan pengalaman digital interaktif dan web gaming menarik.',
    fullDesc: 'Menciptakan gamified campaign, interactive micro-sites, dan pengalaman digital berkesan untuk brand activations dan komunitas game.',
    iconType: 'interactive',
    capabilities: [
      'Web-based interactive demos',
      'Brand gamification & mini-games',
      'Interactive visual storytelling',
      'High-performance WebGL/Canvas micro-apps'
    ]
  }
];
