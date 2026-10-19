import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/company';
import { ArrowDown, Play, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(true);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 overflow-hidden pixel-grid-bg"
    >
      {/* Decorative ambient pixel lights & stars - Blue Palette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Blinking Pixel Stars */}
        <div className="absolute top-16 left-1/4 w-1.5 h-1.5 bg-[#38BDF8] opacity-80 animate-pulse" />
        <div className="absolute top-36 right-1/5 w-1 h-1 bg-[#2563EB] opacity-70 animate-ping" />
        <div className="absolute top-2/3 left-12 w-1.5 h-1.5 bg-[#F0F9FF] opacity-40 animate-pulse" />
        <div className="absolute bottom-28 right-1/4 w-2 h-2 bg-[#38BDF8] opacity-50" />
        <div className="absolute top-1/2 right-12 w-1 h-1 bg-[#60A5FA] opacity-80" />

        {/* Ambient Radial Blue Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2563EB]/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Studio Badge / Kicker */}
            <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#38BDF8] uppercase">
              <span className="w-2 h-2 bg-[#38BDF8] inline-block shadow-[0_0_8px_#38BDF8]" />
              <span>PT INDO KREASI · GAME DEV STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#F0F9FF] leading-[1.3] tracking-wide text-balance">
              WE BUILD WORLDS, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#2563EB] drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                PIXEL BY PIXEL.
              </span>
            </h1>

            {/* Value Proposition Body */}
            <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
              {COMPANY_DATA.heroSubheadline}
            </p>

            {/* Key Studio Attributes */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#94A3B8]/90 pt-1">
              <span>Original IP</span>
              <span aria-hidden="true" className="text-[#38BDF8]">/</span>
              <span>16-Bit Precision</span>
              <span aria-hidden="true" className="text-[#38BDF8]">/</span>
              <span>Multiplatform Engineering</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollTo('games')}
                className="px-5 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F0F9FF] font-pixel text-xs tracking-wider border border-[#38BDF8] pixel-btn-primary flex items-center gap-2 cursor-pointer uppercase"
              >
                <Play size={14} className="fill-current text-[#F0F9FF]" />
                <span>EXPLORE OUR GAMES</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-3.5 bg-[#0B132B] hover:bg-[#111C3D] text-[#F0F9FF] font-pixel text-xs tracking-wider border border-[#1E293B] hover:border-[#38BDF8] pixel-btn-secondary flex items-center gap-2 cursor-pointer uppercase transition-colors"
              >
                <span>WORK WITH US</span>
              </button>
            </div>
          </div>

          {/* Right Column: Blue-Themed Pixel World Illustration */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Outer Pixelated Frame */}
              <div className="relative bg-[#0B132B] p-2.5 sm:p-3 border-2 border-[#1E293B] shadow-[0_12px_40px_rgba(0,0,0,0.8)] group-hover:border-[#2563EB] transition-colors duration-300">
                {/* Decorative Pixel Corners */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#38BDF8]" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#38BDF8]" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#38BDF8]" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#38BDF8]" />

                {/* Frame Header Bar */}
                <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-[#1E293B] text-[10px] font-mono text-[#94A3B8]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#2563EB] inline-block shadow-[0_0_6px_#2563EB]" />
                    <span>INDO_KREASI_GATEWAY_V1.0</span>
                  </div>
                  <span className="text-[#38BDF8]">DIMENSION: CYBER BLUE</span>
                </div>

                {/* Main Visual */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#060B14]">
                  {imageLoaded ? (
                    <img
                      src="/src/assets/images/hero_blue_game_world_1792374650275.jpg"
                      alt="PT Indo Kreasi digital pixel art cyber world portal with blue neon lighting"
                      className="w-full h-full object-cover pixelated select-none"
                      referrerPolicy="no-referrer"
                      onError={() => setImageLoaded(false)}
                    />
                  ) : (
                    /* Robust CSS Fallback container */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B132B] via-[#0E1E38] to-[#060B14] p-6 text-center">
                      <Sparkles className="w-10 h-10 text-[#38BDF8] mb-3 animate-pulse" />
                      <p className="font-pixel text-xs text-[#F0F9FF]">PIXEL WORLD GATEWAY</p>
                      <p className="text-xs text-[#94A3B8] mt-1">Retro-futuristic blue cyber universe</p>
                    </div>
                  )}

                  {/* Subtle Scanlines effect */}
                  <div
                    className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(11,19,43,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-40"
                    aria-hidden="true"
                  />
                  
                  {/* Bottom Vignette */}
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#060B14]/80 to-transparent pointer-events-none" />
                </div>

                {/* Interactive Status Footer */}
                <div className="flex items-center justify-between pt-2.5 px-2 text-[11px] font-mono text-[#94A3B8]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#38BDF8]" />
                    <span>PORTAL STATUS: ACTIVE</span>
                  </div>
                  <span className="text-xs text-[#38BDF8]">FPS: 60 · FRAME: SYNC</span>
                </div>
              </div>

              {/* Decorative Floating Sub-Label */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#060B14] border border-[#2563EB] px-3 py-1.5 items-center gap-2 shadow-lg">
                <div className="w-2 h-2 bg-[#38BDF8]" />
                <span className="font-pixel text-[9px] text-[#F0F9FF]">NEO CYBER ARCHITECTURE</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="group flex flex-col items-center gap-1.5 text-[#94A3B8] hover:text-[#38BDF8] transition-colors focus:outline-none cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">SCROLL TO DISCOVER</span>
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
