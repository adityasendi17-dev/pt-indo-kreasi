export interface ProjectItem {
  id: string;
  name: string;
  genre: string;
  genreCategory: 'Action Roguelike' | 'Adventure RPG' | 'Tactical Stealth';
  platforms: string[];
  shortDesc: string;
  synopsis: string;
  image: string;
  status: string;
  releaseYear: string;
  keyFeatures: string[];
  techStack: string[];
}

export const GENRE_FILTERS = [
  'All',
  'Action Roguelike',
  'Adventure RPG',
  'Tactical Stealth',
] as const;

export type GenreFilter = typeof GENRE_FILTERS[number];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'neon-frontier',
    name: 'Neon Frontier',
    genre: 'Cyberpunk Action Roguelike',
    genreCategory: 'Action Roguelike',
    platforms: ['PC (Steam)', 'PlayStation 5', 'Nintendo Switch'],
    shortDesc: 'Pertarungan cepat di atas atap megacity neon dengan senjata energi cyan dan kemampuan cybernetic.',
    synopsis: 'Berlatar di distrik Neo-Jakarta tahun 2099, pemain mengendalikan agen bayangan dengan pedang plasma cyan yang harus menembus 14 lantai fasilitas megakorporasi korup. Setiap kematian membuka modul cyberware permanen dan rute baru.',
    image: '/src/assets/images/game_blue_neon_frontier_1792374651694.jpg',
    status: 'Demo Showcase / Vertical Slice',
    releaseYear: '2025',
    keyFeatures: [
      'Sistem pertarungan pedang plasma & parry berkecepatan 60 FPS',
      'Prosedural dungeon layout dengan 80+ modul persenjataan',
      'Original chiptune synthwave soundtrack bernuansa cyberpunk',
      'Animasi sprite pixel art frame-by-frame 16-bit definisi tinggi'
    ],
    techStack: ['Custom C# Engine', 'Aseprite Pixel Suite', 'FMOD Audio', 'Vulkan Renderer']
  },
  {
    id: 'pixel-odyssey',
    name: 'Pixel Odyssey',
    genre: 'Charming Retro Adventure RPG',
    genreCategory: 'Adventure RPG',
    platforms: ['PC (Steam)', 'Nintendo Switch', 'iOS & Android'],
    shortDesc: 'Petualangan fantasi melintasi kepulauan langit terapung dengan teka-teki kuno dan misteri kosmik.',
    synopsis: 'Jelajahi pulau-pulau melayang yang menghubungkan kuil-kuil peninggalan peradaban kuno. Pemain memecahkan puzzle lingkungan berbasis elemen, berteman dengan makhluk kosmik, dan memulihkan inti gravitasi dunia.',
    image: '/src/assets/images/game_blue_pixel_odyssey_1792374651929.jpg',
    status: 'Demo Showcase / Vertical Slice',
    releaseYear: '2025',
    keyFeatures: [
      'Eksplorasi non-linear di 7 kepulauan langit unik',
      'Sistem teka-teki interaktif berbasis manipulasi gravitasi dan air',
      'Visual pixel art pastoral yang mempesona dipadu nebula kosmik biru',
      'Dukungan penuh kontrol sentuh mobile & gamepad konsol'
    ],
    techStack: ['Unity 2D', 'Pixel Art Toolset', 'Custom Dialogue Tree', 'Universal Render Pipeline']
  },
  {
    id: 'shadow-protocol',
    name: 'Shadow Protocol',
    genre: 'Stealth Tactical Infiltration',
    genreCategory: 'Tactical Stealth',
    platforms: ['PC (Steam)', 'Xbox Series X/S', 'Mobile'],
    shortDesc: 'Operasi infiltrasi taktis bawah tanah dengan mekanisme sensor suara, laser security cyan, dan peretasan.',
    synopsis: 'Sebagai spesialis infiltrasi berteknologi tinggi, kamu ditugaskan menyusup ke bunker bawah tanah berkeamanan maksimal. Hindari sensor laser adaptif, retas drone pengawas, dan curi data tanpa memicu alarm.',
    image: '/src/assets/images/game_blue_shadow_protocol_1792374651662.jpg',
    status: 'Demo Showcase / Vertical Slice',
    releaseYear: '2024',
    keyFeatures: [
      'Mekanik stealth berbasis spektrum suara dan jejak inframerah',
      'Mini-game peretasan terminal retro dengan teka-teki logika',
      'Pilihan pendekatan: lethal, non-lethal, atau ghost tanpa kontak',
      'Pencahayaan dinamis 2D dengan bayangan real-time pixelated'
    ],
    techStack: ['Godot 4 Engine', 'Custom 2D Lighting', 'Aseprite', 'Spatial Audio System']
  }
];
