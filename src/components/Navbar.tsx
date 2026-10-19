import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'games', 'workflow', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#060B14]/95 backdrop-blur-md border-b border-[#1E293B] shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
          : 'bg-[#060B14]/80 backdrop-blur-sm border-b border-[#1E293B]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          aria-label="PT Indo Kreasi Home"
        >
          {/* Pixel Icon Glyph */}
          <div className="w-7 h-7 bg-[#2563EB] flex items-center justify-center pixel-box group-hover:bg-[#38BDF8] transition-colors">
            <div className="w-2.5 h-2.5 bg-[#060B14]" />
          </div>
          <span className="font-pixel text-xs sm:text-sm tracking-wider text-[#F0F9FF] group-hover:text-[#38BDF8] transition-colors">
            INDO KREASI
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#94A3B8]"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`whitespace-nowrap transition-all duration-150 py-1 border-b-2 ${
                  isActive
                    ? 'text-[#38BDF8] border-[#38BDF8] drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] font-semibold'
                    : 'border-transparent hover:text-[#38BDF8] hover:border-[#2563EB]/50 text-[#94A3B8]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F0F9FF] text-[11px] font-pixel tracking-wider pixel-btn-primary border border-[#38BDF8]/60 uppercase cursor-pointer"
          >
            LET'S COLLABORATE
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F0F9FF] hover:text-[#38BDF8] hover:bg-[#0B132B] border border-[#1E293B] rounded-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#38BDF8]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1E293B] bg-[#060B14]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-3 py-2.5 text-xs font-mono tracking-wider flex items-center justify-between border ${
                  isActive
                    ? 'bg-[#0B132B] border-[#2563EB] text-[#38BDF8]'
                    : 'border-transparent text-[#94A3B8] hover:bg-[#0B132B]/60 hover:text-[#F0F9FF]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="font-pixel text-[10px] text-[#38BDF8]">▶</span>}
              </button>
            );
          })}

          <div className="pt-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F0F9FF] text-xs font-pixel tracking-wider text-center border border-[#38BDF8]/60 block pixel-btn-primary"
            >
              LET'S COLLABORATE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
