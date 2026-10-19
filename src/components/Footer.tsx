import React from 'react';
import { COMPANY_DATA } from '../data/company';
import { ArrowUp, Github, Twitter, Youtube, Disc as DiscordIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Games', id: 'games' },
    { label: 'Workflow', id: 'workflow' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-[#060B14] border-t-2 border-[#1E293B] text-[#94A3B8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 bg-[#2563EB] flex items-center justify-center pixel-box">
                <div className="w-2 h-2 bg-[#060B14]" />
              </div>
              <span className="font-pixel text-sm tracking-wider text-[#F0F9FF]">
                {COMPANY_DATA.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Studio game development independen yang mendedikasikan kreativitas untuk merancang semesta pixel art modern dan pengalaman bermain interaktif berkesan.
            </p>

            <div className="text-xs font-mono text-[#38BDF8]">
              {COMPANY_DATA.tagline} · EST. INDONESIA
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-pixel text-xs text-[#F0F9FF] tracking-wider uppercase mb-3">
              NAVIGASI
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-[#38BDF8] transition-colors text-left flex items-center gap-1.5 cursor-pointer py-1"
                  >
                    <span className="text-[#2563EB] text-[10px]">▶</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels & Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-pixel text-xs text-[#F0F9FF] tracking-wider uppercase mb-3">
              CONNECT & INQUIRY
            </h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Saluran resmi untuk pertanyaan bisnis, publikasi pers, dan kolaborasi game:
            </p>
            <div className="text-xs font-mono text-[#38BDF8]">
              {COMPANY_DATA.contactEmail}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <span
                className="w-8 h-8 bg-[#0B132B] border border-[#1E293B] hover:border-[#2563EB] hover:text-[#38BDF8] flex items-center justify-center transition-colors cursor-pointer"
                title="Discord Community (Configurable)"
              >
                <DiscordIcon size={14} />
              </span>
              <span
                className="w-8 h-8 bg-[#0B132B] border border-[#1E293B] hover:border-[#2563EB] hover:text-[#38BDF8] flex items-center justify-center transition-colors cursor-pointer"
                title="GitHub Repositories (Configurable)"
              >
                <Github size={14} />
              </span>
              <span
                className="w-8 h-8 bg-[#0B132B] border border-[#1E293B] hover:border-[#2563EB] hover:text-[#38BDF8] flex items-center justify-center transition-colors cursor-pointer"
                title="Twitter / X (Configurable)"
              >
                <Twitter size={14} />
              </span>
              <span
                className="w-8 h-8 bg-[#0B132B] border border-[#1E293B] hover:border-[#2563EB] hover:text-[#38BDF8] flex items-center justify-center transition-colors cursor-pointer"
                title="YouTube Devlogs (Configurable)"
              >
                <Youtube size={14} />
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-center sm:text-left">
            <span>© {currentYear} {COMPANY_DATA.name}. All rights reserved.</span>
            <span className="hidden sm:inline mx-2 text-[#1E293B]">|</span>
            <span className="text-[#94A3B8]/80 block sm:inline mt-1 sm:mt-0">
              Crafted with Pixel Art Precision & Modern Web Tech.
            </span>
          </div>

          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#0B132B] border border-[#1E293B] hover:border-[#2563EB] hover:text-[#38BDF8] transition-colors cursor-pointer text-xs"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
};
