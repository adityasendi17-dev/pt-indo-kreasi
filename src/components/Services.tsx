import React from 'react';
import { SERVICES_DATA } from '../data/services';
import { PixelIcon } from './PixelIcons';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0B132B]/50 border-t border-[#1E293B] relative pixel-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#2563EB]" />
            <span>KAPABILITAS KAMI</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-[#F0F9FF] tracking-wide">
            WHAT WE CREATE
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Dari cetak biru desain awal hingga rilis lintas platform, kami menyediakan spektrum keahlian lengkap untuk mewujudkan karya game bermutu tinggi.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className={`bg-[#060B14] border border-[#1E293B] p-7 transition-all duration-200 flex flex-col justify-between group relative hover:border-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:-translate-y-0.5 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Corner pixel accent on hover */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#38BDF8] transition-colors" />

              <div>
                {/* Header row with Icon and Numerical Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#0B132B] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] group-hover:border-[#2563EB] group-hover:text-[#F0F9FF] transition-colors">
                    <PixelIcon type={service.iconType} size={24} />
                  </div>
                  <span className="font-mono text-xs text-[#38BDF8] font-bold">
                    0{index + 1}.
                  </span>
                </div>

                {/* Category kicker */}
                <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                  {service.category}
                </div>

                {/* Service Name */}
                <h3 className="font-pixel text-sm sm:text-base text-[#F0F9FF] mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {service.name}
                </h3>

                {/* Descriptions */}
                <p className="text-sm text-[#94A3B8] mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Full description */}
                <p className="text-xs text-[#94A3B8]/80 leading-relaxed mb-6">
                  {service.fullDesc}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="pt-4 border-t border-[#1E293B]">
                <div className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
                  Lingkup Kerja:
                </div>
                <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                  {service.capabilities.map((cap, capIdx) => (
                    <li key={capIdx} className="flex items-center gap-2">
                      <span className="text-[#2563EB] text-[10px]">■</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
