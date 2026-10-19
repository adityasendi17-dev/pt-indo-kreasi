import React, { useEffect } from 'react';
import { ProjectItem } from '../data/projects';
import { X, Layers, Monitor, Calendar, CheckSquare } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B132B] border-2 border-[#2563EB] shadow-[0_0_50px_rgba(37,99,235,0.4)] my-8 overflow-hidden text-[#F0F9FF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pixel Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-[#38BDF8]" />
        <div className="absolute top-0 right-0 w-3 h-3 bg-[#38BDF8]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#38BDF8]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#38BDF8]" />

        {/* Modal Window Titlebar */}
        <div className="bg-[#060B14] border-b border-[#1E293B] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
            <span className="w-2.5 h-2.5 bg-[#2563EB] inline-block shadow-[0_0_6px_#2563EB]" />
            <span>PROJECT_VIEWER // {project.name.toUpperCase().replace(/\s+/g, '_')}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#94A3B8] hover:text-[#F0F9FF] hover:bg-[#1E293B] transition-colors focus:outline-none focus:ring-1 focus:ring-[#38BDF8] cursor-pointer"
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[82vh] overflow-y-auto p-5 sm:p-8 space-y-6">
          
          {/* Main Visual Display */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#060B14] border border-[#1E293B]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover pixelated"
              referrerPolicy="no-referrer"
            />
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(11,19,43,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] opacity-40"
              aria-hidden="true"
            />
            {/* Genre Badge on Artwork */}
            <div className="absolute bottom-3 left-3 bg-[#060B14]/90 border border-[#2563EB] px-3 py-1 font-mono text-xs text-[#38BDF8]">
              {project.genre}
            </div>
          </div>

          {/* Project Header Info */}
          <div className="space-y-2 border-b border-[#1E293B] pb-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 id="modal-project-title" className="font-pixel text-xl sm:text-2xl text-[#F0F9FF]">
                {project.name}
              </h2>
              <div className="text-xs font-mono text-[#38BDF8] bg-[#060B14] px-3 py-1 border border-[#1E293B]">
                {project.status}
              </div>
            </div>

            <p className="text-base text-[#94A3B8] leading-relaxed pt-2">
              {project.synopsis}
            </p>
          </div>

          {/* Target Platforms & Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#060B14] border border-[#1E293B] p-4 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[#38BDF8] flex items-center gap-1.5">
                <Monitor size={14} /> Target Platform:
              </span>
              <p className="text-[#F0F9FF] pl-5">{project.platforms.join(' · ')}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#38BDF8] flex items-center gap-1.5">
                <Calendar size={14} /> Production Year:
              </span>
              <p className="text-[#F0F9FF] pl-5">{project.releaseYear} (Concept Demo)</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="font-pixel text-xs text-[#38BDF8] tracking-wider uppercase flex items-center gap-2">
              <span>■</span>
              <span>Fitur Utama Permainan</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="bg-[#060B14] border border-[#1E293B] p-3 text-xs text-[#94A3B8] flex items-start gap-2.5"
                >
                  <CheckSquare size={14} className="text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="font-pixel text-xs text-[#60A5FA] tracking-wider uppercase flex items-center gap-2">
              <Layers size={14} />
              <span>Teknologi & Tooling</span>
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#94A3B8]">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-[#060B14] border border-[#1E293B] text-[#F0F9FF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Fictional Showcase Disclosure */}
          <div className="p-3 bg-[#060B14]/70 border border-[#1E293B] text-[11px] font-mono text-[#94A3B8]/90 leading-normal">
            Catatan: Proyek ini merupakan demonstrasi fiktif yang dikembangkan tim PT Indo Kreasi sebagai unjuk kemampuan teknis, desain game, dan visual pixel art studio.
          </div>

          {/* Close Action Button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F0F9FF] font-pixel text-xs tracking-wider border border-[#38BDF8] pixel-btn-primary cursor-pointer"
            >
              CLOSE VIEWER
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
