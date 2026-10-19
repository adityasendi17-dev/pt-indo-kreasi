import React, { useState } from 'react';
import { WORKFLOW_STAGES } from '../data/workflow';
import { CheckCircle2 } from 'lucide-react';

export const Workflow: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeStage = WORKFLOW_STAGES[activeStageIndex];

  return (
    <section id="workflow" className="py-24 bg-[#0B132B]/35 border-t border-[#1E293B] relative pixel-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#2563EB]" />
            <span>METODOLOGI & ALUR KERJA</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-[#F0F9FF] tracking-wide">
            FROM IDEA TO REALITY
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Metodologi pengembangan game bertahap kami memastikan setiap mekanik diuji dengan cermat, estetika pixel dipoles dengan teliti, dan rilis siap tepat waktu.
          </p>
        </div>

        {/* Game Progression Track */}
        <div className="mb-12">
          {/* Progress Path Indicator */}
          <div className="relative">
            {/* Connecting Horizontal Line on Desktop */}
            <div
              className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-[#1E293B] z-0"
              aria-hidden="true"
            >
              <div
                className="h-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] transition-all duration-300"
                style={{
                  width: `${(activeStageIndex / (WORKFLOW_STAGES.length - 1)) * 100}%`,
                }}
              />
            </div>

            {/* Stages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {WORKFLOW_STAGES.map((stage, idx) => {
                const isSelected = activeStageIndex === idx;
                const isCompleted = idx < activeStageIndex;

                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`p-4 text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#0B132B] border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.25)] translate-y-[-2px]'
                        : 'bg-[#060B14] border-[#1E293B] hover:border-[#2563EB]/60 text-[#94A3B8]'
                    }`}
                  >
                    <div>
                      {/* Top Marker Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-7 h-7 flex items-center justify-center font-mono text-xs font-bold border ${
                            isSelected
                              ? 'bg-[#2563EB] text-[#F0F9FF] border-[#38BDF8]'
                              : isCompleted
                              ? 'bg-[#1E293B] text-[#38BDF8] border-[#2563EB]'
                              : 'bg-[#060B14] text-[#94A3B8] border-[#1E293B]'
                          }`}
                        >
                          {stage.number}
                        </div>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider ${
                            isSelected ? 'text-[#38BDF8]' : 'text-[#94A3B8]/60'
                          }`}
                        >
                          {isSelected ? 'ACTIVE PHASE' : isCompleted ? 'CLEARED' : 'PENDING'}
                        </span>
                      </div>

                      <div className="font-pixel text-xs text-[#F0F9FF] mb-1.5">
                        {stage.title}
                      </div>

                      <p className="text-xs text-[#94A3B8] line-clamp-2 leading-relaxed">
                        {stage.summary}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-[#1E293B]/60 flex items-center justify-between text-[11px] font-mono">
                      <span className={isSelected ? 'text-[#38BDF8]' : 'text-[#94A3B8]/60'}>
                        {stage.step}
                      </span>
                      {isSelected && <span className="text-[#38BDF8] animate-pulse">●</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Stage Detailed Panel */}
        <div className="bg-[#060B14] border-2 border-[#2563EB] p-6 sm:p-8 shadow-xl relative overflow-hidden">
          {/* Top Decorative Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#1E293B]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#2563EB] text-[#F0F9FF] font-pixel text-xs flex items-center justify-center shadow-[0_0_8px_#2563EB]">
                {activeStage.number}
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-widest block">
                  {activeStage.step} DEEP DIVE
                </span>
                <h3 className="font-pixel text-base sm:text-lg text-[#F0F9FF]">
                  {activeStage.title}
                </h3>
              </div>
            </div>

            {/* Quick Step Switchers */}
            <div className="flex items-center gap-2">
              <button
                disabled={activeStageIndex === 0}
                onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 bg-[#0B132B] border border-[#1E293B] text-xs font-mono text-[#94A3B8] hover:text-[#F0F9FF] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                ◀ PREV STAGE
              </button>
              <button
                disabled={activeStageIndex === WORKFLOW_STAGES.length - 1}
                onClick={() => setActiveStageIndex((prev) => Math.min(WORKFLOW_STAGES.length - 1, prev + 1))}
                className="px-3 py-1.5 bg-[#0B132B] border border-[#1E293B] text-xs font-mono text-[#94A3B8] hover:text-[#F0F9FF] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                NEXT STAGE ▶
              </button>
            </div>
          </div>

          {/* Stage Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-mono text-[#38BDF8] uppercase tracking-wider">
                Fokus & Implementasi:
              </h4>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {activeStage.description}
              </p>
              <div className="p-4 bg-[#0B132B] border border-[#1E293B] text-xs font-mono text-[#94A3B8] space-y-1">
                <span className="text-[#F0F9FF] block font-semibold">Tujuan Akhir Tahap Ini:</span>
                <span>{activeStage.summary}</span>
              </div>
            </div>

            {/* Stage Deliverables List */}
            <div className="lg:col-span-5 bg-[#0B132B] border border-[#1E293B] p-5 space-y-3">
              <div className="text-xs font-pixel text-[#38BDF8] uppercase tracking-wider flex items-center gap-2">
                <span>■</span>
                <span>Hasil Output (Deliverables)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#94A3B8]">
                {activeStage.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#38BDF8] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
