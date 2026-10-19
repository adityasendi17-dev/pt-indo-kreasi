import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/company';
import { PixelIcon } from './PixelIcons';
import { Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const [studioImageLoaded, setStudioImageLoaded] = useState(true);

  return (
    <section id="about" className="py-24 bg-[#060B14] border-t border-[#1E293B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#2563EB]" />
            <span>STUDIO PROFILE</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-[#F0F9FF] tracking-wide">
            {COMPANY_DATA.aboutTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl leading-relaxed pt-2">
            {COMPANY_DATA.aboutDescription}
          </p>
        </div>

        {/* Studio Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Studio Illustration with retro console frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative bg-[#0B132B] border border-[#1E293B] p-3 shadow-xl h-full flex flex-col justify-between">
              {/* Retro Terminal Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1E293B] text-[10px] font-mono text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#2563EB]" />
                  <span>INDO_KREASI_DEV_FLOOR</span>
                </div>
                <span>LOCATION: DIGITAL STUDIO</span>
              </div>

              {/* Main Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#060B14] border border-[#1E293B]/60">
                {studioImageLoaded ? (
                  <img
                    src="/src/assets/images/about_blue_pixel_studio_1792374650820.jpg"
                    alt="PT Indo Kreasi pixel game development studio floor in blue theme"
                    className="w-full h-full object-cover pixelated"
                    referrerPolicy="no-referrer"
                    onError={() => setStudioImageLoaded(false)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0B132B]">
                    <Sparkles className="w-8 h-8 text-[#38BDF8] mb-2" />
                    <span className="font-pixel text-xs text-[#F0F9FF]">PIXEL WORKSHOP</span>
                  </div>
                )}
                {/* Scanline overlay */}
                <div
                  className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(11,19,43,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-35"
                  aria-hidden="true"
                />
              </div>

              {/* Studio Micro Caption */}
              <div className="pt-3 flex items-center justify-between text-xs text-[#94A3B8] font-mono">
                <span>Game Engine: Multiplatform</span>
                <span className="text-[#38BDF8]">Pixel Craft · Clean Code</span>
              </div>
            </div>
          </div>

          {/* Vision & Mission Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Vision Box */}
            <div className="bg-[#0B132B] border border-[#1E293B] p-6 space-y-3 relative">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#38BDF8]" />
                <span>VISI KAMI</span>
              </div>
              <h3 className="font-pixel text-xs sm:text-sm text-[#F0F9FF] leading-relaxed">
                MEMBAWA KARYA GAME BERKUALITAS DUNIA
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {COMPANY_DATA.vision}
              </p>
            </div>

            {/* Mission Box */}
            <div className="bg-[#0B132B] border border-[#1E293B] p-6 space-y-4 flex-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#2563EB]" />
                <span>MISI KAMI</span>
              </div>
              <ul className="space-y-3 text-sm text-[#94A3B8]">
                {COMPANY_DATA.mission.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-[#38BDF8] font-mono text-xs mt-0.5 font-bold">0{index + 1}.</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Core Values Section */}
        <div>
          <div className="mb-8">
            <h3 className="font-pixel text-sm sm:text-base text-[#F0F9FF] tracking-wide flex items-center gap-3">
              <span className="text-[#38BDF8]">■</span>
              <span>NILAI UTAMA KAMI (CORE VALUES)</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMPANY_DATA.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#0B132B] border border-[#1E293B] p-6 relative hover:border-[#2563EB] transition-all duration-200 group"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 bg-[#060B14] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8] transition-colors mb-4">
                  <PixelIcon type={val.icon as any} size={20} className="text-[#38BDF8]" />
                </div>

                <div className="text-[10px] font-mono text-[#60A5FA] uppercase tracking-widest mb-1">
                  VALUE 0{idx + 1}
                </div>

                <h4 className="font-pixel text-xs text-[#F0F9FF] mb-2 tracking-wide group-hover:text-[#38BDF8] transition-colors">
                  {val.title}
                </h4>

                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
