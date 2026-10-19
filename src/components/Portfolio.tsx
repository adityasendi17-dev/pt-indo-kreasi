import React, { useState } from 'react';
import { PROJECTS_DATA, GENRE_FILTERS, GenreFilter, ProjectItem } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { Eye, Monitor, Sparkles } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GenreFilter>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.genreCategory === activeFilter;
  });

  return (
    <section id="games" className="py-24 bg-[#060B14] border-t border-[#1E293B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#2563EB]" />
              <span>PORTFOLIO & PROYEK</span>
            </div>
            <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-[#F0F9FF] tracking-wide">
              OUR GAME UNIVERSE
            </h2>
            <p className="text-base text-[#94A3B8] max-w-xl leading-relaxed">
              Jelajahi karya dunia fiktif dan prototype game yang kami rancang dengan dedikasi mekanik serta estetika pixel art mendalam.
            </p>
          </div>

          {/* Demonstration Notice */}
          <div className="text-xs font-mono text-[#94A3B8] bg-[#0B132B] border border-[#1E293B] px-3.5 py-2 shrink-0">
            <span className="text-[#38BDF8]">■</span> Showcase Data Demonstrasi
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#1E293B]">
          <span className="text-xs font-mono text-[#94A3B8] mr-2">Filter Genre:</span>
          {GENRE_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-2 text-xs font-mono tracking-wider transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#2563EB] text-[#F0F9FF] border-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.35)] font-semibold'
                    : 'bg-[#0B132B] text-[#94A3B8] border-[#1E293B] hover:text-[#F0F9FF] hover:border-[#2563EB]/60'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#0B132B] border border-[#1E293B] overflow-hidden flex flex-col justify-between group hover:border-[#2563EB] transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                {/* Artwork Thumbnail Container */}
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#060B14] border-b border-[#1E293B]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover pixelated group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />

                    {/* Scanline overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(11,19,43,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-30"
                      aria-hidden="true"
                    />

                    {/* Genre tag on artwork */}
                    <div className="absolute top-3 left-3 bg-[#060B14]/90 border border-[#2563EB]/80 px-2.5 py-0.5 text-[10px] font-mono text-[#38BDF8]">
                      {project.genreCategory}
                    </div>

                    {/* Hover quick preview indicator */}
                    <div className="absolute inset-0 bg-[#060B14]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 bg-[#2563EB] text-[#F0F9FF] font-pixel text-[10px] border border-[#38BDF8] pixel-btn-primary flex items-center gap-2 cursor-pointer"
                      >
                        <Eye size={12} />
                        <span>QUICK VIEW</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-pixel text-base text-[#F0F9FF] group-hover:text-[#38BDF8] transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#38BDF8]">
                        {project.releaseYear}
                      </span>
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>

                    {/* Platforms metadata */}
                    <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-[#94A3B8]/80">
                      <Monitor size={12} className="text-[#38BDF8] shrink-0" />
                      <span className="truncate">{project.platforms.join(' · ')}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 bg-[#060B14] hover:bg-[#2563EB] text-[#38BDF8] hover:text-[#F0F9FF] font-pixel text-xs tracking-wider border border-[#1E293B] hover:border-[#38BDF8] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>VIEW PROJECT</span>
                    <span className="text-xs">▶</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 text-center bg-[#0B132B] border border-[#1E293B] space-y-4">
            <Sparkles className="w-10 h-10 text-[#38BDF8] mx-auto animate-pulse" />
            <h3 className="font-pixel text-sm text-[#F0F9FF]">TIDAK ADA PROYEK DITEMUKAN</h3>
            <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
              Tidak ada judul proyek yang cocok dengan filter genre "{activeFilter}". Silakan pilih kategori lain atau reset ke "All".
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="px-4 py-2 bg-[#2563EB] text-[#F0F9FF] font-pixel text-xs border border-[#38BDF8] pixel-btn-primary cursor-pointer"
            >
              RESET FILTER
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
