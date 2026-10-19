export interface WorkflowStage {
  step: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  icon: 'lightbulb' | 'palette' | 'code' | 'sparkles';
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: 'STAGE 01',
    number: '01',
    title: 'Concept & Ideation',
    summary: 'Ide, riset mendalam, dan penentuan konsep fondasi game.',
    description: 'Kami mengeksplorasi premis game, target audiens, core fantasy, studi pasar, dan menentukan pilar desain utama sebelum sebaris kode ditulis.',
    deliverables: ['Pitch Deck & Moodboard', 'Core Fantasy & USP Definition', 'Technical Feasibility Study', 'High-Concept Design Outline'],
    icon: 'lightbulb'
  },
  {
    step: 'STAGE 02',
    number: '02',
    title: 'Design & Architecture',
    summary: 'Gameplay, visual identity, dan perancangan sistem permainan.',
    description: 'Menyusun Game Design Document (GDD) terperinci, pembuatan mockup UI/HUD, eksplorasi gaya pixel art, dan perancangan arsitektur sistem teknis.',
    deliverables: ['Comprehensive GDD', 'Character & Environment Concept Art', 'Interactive Wireframes & HUD Specs', 'System & Economy Architecture'],
    icon: 'palette'
  },
  {
    step: 'STAGE 03',
    number: '03',
    title: 'Development & Iteration',
    summary: 'Implementasi mekanik, kode logika, aset, dan level building.',
    description: 'Fase produksi penuh: pemrograman mekanik inti, perakitan level modular, implementasi sprite sheets animasi, dan integrasi audio chiptune yang dinamis.',
    deliverables: ['Playable Vertical Slice', 'Modular Engine Implementation', 'Sprite Assets & Particle VFX', 'FMOD/Audio Event Integration'],
    icon: 'code'
  },
  {
    step: 'STAGE 04',
    number: '04',
    title: 'Polish & Delivery',
    summary: 'Pengujian ketat (QA), penyempurnaan estetika, dan rilis multiplatform.',
    description: 'Game balancing, perbaikan performa frame-rate, bug squashing, playtesting ekstensif, serta finalisasi build siap publikasi untuk konsol, PC, atau web.',
    deliverables: ['Extensive QA & Playtest Reports', 'Platform Certification Builds', 'Launch Trailers & Press Assets', 'Post-Launch Maintenance Plan'],
    icon: 'sparkles'
  }
];
