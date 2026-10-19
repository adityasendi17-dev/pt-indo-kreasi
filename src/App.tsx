/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Workflow } from './components/Workflow';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Monitor } from 'lucide-react';

export default function App() {
  const [crtEffectEnabled, setCrtEffectEnabled] = useState(false);

  return (
    <div className={`min-h-screen bg-[#060B14] text-[#F0F9FF] flex flex-col relative selection:bg-[#2563EB]/40 selection:text-[#38BDF8] ${crtEffectEnabled ? 'crt-mode' : ''}`}>
      
      {/* Global subtle scanlines if enabled */}
      {crtEffectEnabled && (
        <div
          className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(11,19,43,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-60"
          aria-hidden="true"
        />
      )}

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Workflow />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Retro CRT Scanline Toggle Floating Control */}
      <div className="fixed bottom-4 right-4 z-40 hidden sm:block">
        <button
          onClick={() => setCrtEffectEnabled(!crtEffectEnabled)}
          className={`px-3 py-1.5 text-[10px] font-mono tracking-wider border transition-all cursor-pointer flex items-center gap-1.5 ${
            crtEffectEnabled
              ? 'bg-[#2563EB] text-[#F0F9FF] border-[#38BDF8] shadow-[0_0_10px_#38BDF8]'
              : 'bg-[#0B132B]/90 text-[#94A3B8] border-[#1E293B] hover:text-[#F0F9FF] hover:border-[#2563EB]'
          }`}
          title="Toggle CRT Scanline Overlay"
        >
          <Monitor size={12} />
          <span>CRT SCANLINES: {crtEffectEnabled ? 'ON' : 'OFF'}</span>
        </button>
      </div>

    </div>
  );
}
