export interface CompanyInfo {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  aboutTitle: string;
  aboutDescription: string;
  vision: string;
  mission: string[];
  coreValues: {
    title: string;
    description: string;
    icon: string;
  }[];
  contactEmail: string;
  inquiryTypes: string[];
}

export const COMPANY_DATA: CompanyInfo = {
  name: 'PT INDO KREASI',
  tagline: 'GAME DEVELOPMENT STUDIO',
  heroHeadline: 'WE BUILD WORLDS, PIXEL BY PIXEL.',
  heroSubheadline: 'Studio pengembangan game independen dan pencipta pengalaman digital interaktif dengan estetika pixel art modern, retro-futuristik, dan gameplay adiktif.',
  aboutTitle: 'WHO WE ARE',
  aboutDescription: 'PT Indo Kreasi adalah perusahaan yang berfokus pada pengembangan game dan pengalaman digital interaktif. Kami menggabungkan kreativitas, teknologi, dan desain untuk menciptakan pengalaman bermain yang berkesan.',
  vision: 'Membawa karya game berkualitas tinggi bernuansa seni pixel modern yang menginspirasi pemain di seluruh dunia.',
  mission: [
    'Merancang gameplay yang kaya akan kedalaman mekanik dan nilai replayability tinggi.',
    'Menghidupkan seni visual pixel art berkualitas tinggi dengan sentuhan visual kontemporer.',
    'Membangun ekosistem kolaborasi kreatif yang transparan, presisi, dan berorientasi pada pemain.',
    'Menghadirkan pengalaman interaktif yang berkesan di berbagai platform digital modern.'
  ],
  coreValues: [
    {
      title: 'Creativity',
      description: 'Mengeksplorasi ide-ide orisinal dan narasi visual unik tanpa batasan konvensional.',
      icon: 'spark'
    },
    {
      title: 'Innovation',
      description: 'Mengawinkan kehangatan visual retro dengan arsitektur teknologi game modern yang mutakhir.',
      icon: 'circuit'
    },
    {
      title: 'Collaboration',
      description: 'Bekerja secara sinergis bersama mitra industri, kreator independen, dan komunitas pemain.',
      icon: 'users'
    },
    {
      title: 'Quality',
      description: 'Dedikasi tinggi terhadap presisi frame animasi, stabilitas performa kode, dan kenyamanan pemain.',
      icon: 'shield'
    }
  ],
  // Configurable email address for direct mailto fallback
  contactEmail: 'contact@indokreasi.com',
  inquiryTypes: [
    'Game Development Collaboration',
    'Custom Pixel Art & Animation Assets',
    'Game Design & Level Architecture',
    'UI/UX & Interactive HUD Design',
    'Interactive Brand Experience / Web Game',
    'General Partnership / Other'
  ]
};
