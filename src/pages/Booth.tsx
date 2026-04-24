import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Building2, Users, Info, ChevronRight, CheckCircle2, QrCode, Map as MapIcon, Shield, HelpCircle, Navigation, ExternalLink, MousePointer2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Booth() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Visit ECI Portal",
      desc: "Go to the official Electoral Search portal.",
      details: "The official portal (voters.eci.gov.in) is the single source of truth for all registered voters in Bharat. You can browse without logging in.",
      actionLabel: "voters.eci.gov.in",
      actionUrl: "https://voters.eci.gov.in/",
      icon: ExternalLink
    },
    {
      title: "Search Electoral Roll",
      desc: "Enter your EPIC number or search by your name.",
      details: "Click on 'Search in Electoral Roll'. We recommend searching by EPIC Number (found on your Voter ID) for 100% accuracy.",
      actionLabel: "Start Search",
      icon: Search
    },
    {
      title: "Verify Assembly & Part",
      desc: "Check your Assembly Constituency (AC) and Part Number.",
      details: "Once found, the system will show your Part Name and Number. Note this down; it's vital for finding your name in the physical register at the booth.",
      actionLabel: "Verify Details",
      icon: CheckCircle2
    },
    {
       title: "Locate on Map",
       desc: "Get GPS coordinates of your booth.",
       details: "The ECI portal provides a 'Locate on Map' feature. Use this to visualize the exact building where you will vote.",
       actionLabel: "Open Navigator",
       icon: Navigation
    },
    {
      title: "Booth Flow Guide",
      desc: "Familiarize with the internal booth layout.",
      details: "Before you go, understand the queue system and the identification process to save time.",
      actionLabel: "View Plan",
      icon: MapIcon
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">Booth Discovery Guide</h1>
        <p className="text-on-surface-variant text-center max-w-2xl mx-auto font-medium">Finding your polling station is a simple 5-step process. Follow this roadmap to ensure a stress-free Election Day.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sidebar Roadmap */}
        <div className="lg:col-span-5 space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveStep(i)}
              className={cn(
                "p-6 rounded-3xl cursor-pointer border-2 transition-all relative group",
                activeStep === i 
                  ? "bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-[1.02]" 
                  : "bg-white border-slate-100 hover:border-primary/20 text-on-surface"
              )}
            >
              <div className="flex items-center gap-6">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center font-serif text-xl pt-1 shrink-0",
                  activeStep === i ? "bg-white text-primary" : "bg-primary/5 text-primary"
                )}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold tracking-tight text-sm uppercase">{step.title}</h3>
                  <p className={cn("text-xs mt-1 font-medium", activeStep === i ? "text-white/80" : "text-on-surface-variant")}>
                    {step.desc}
                  </p>
                </div>
                <ChevronRight className={cn("w-5 h-5 ml-auto opacity-40 group-hover:opacity-100 transition-all", activeStep === i && "rotate-90 opacity-100")} />
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-[39px] bottom-[-24px] w-0.5 h-6 bg-slate-200 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Detailed View */}
        <div className="lg:col-span-7 lg:sticky lg:top-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[40px] p-10 md:p-14 border border-slate-100 shadow-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 ajrakh-watermark opacity-5 pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/5 rounded-2xl text-primary">
                    {React.createElement(steps[activeStep].icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif text-on-surface">Step {activeStep + 1}</h2>
                    <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest">{steps[activeStep].title}</p>
                  </div>
                </div>

                <p className="text-lg text-on-surface-variant leading-relaxed mb-10 min-h-[5rem]">
                  {steps[activeStep].details}
                </p>

                {activeStep === 4 ? (
                  <div className="bg-slate-50 rounded-[40px] border border-dashed border-outline-variant p-10 min-h-[300px] flex items-center justify-center overflow-hidden">
                    <div className="relative w-full max-w-sm">
                      <svg className="w-full h-auto text-on-surface-variant/30" viewBox="0 0 500 350">
                        <rect x="20" y="20" width="460" height="310" rx="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M50,20 L150,20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                        <path d="M350,20 L450,20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                        <g transform="translate(80, 80)">
                          <rect width="100" height="60" rx="8" fill="white" stroke="currentColor" strokeWidth="2" />
                          <circle cx="50" cy="15" r="8" fill="currentColor" opacity="0.2" />
                        </g>
                        <g transform="translate(280, 80)">
                          <rect width="100" height="60" rx="8" fill="white" stroke="currentColor" strokeWidth="2" />
                          <circle cx="50" cy="15" r="8" fill="currentColor" opacity="0.2" />
                        </g>
                        <g transform="translate(380, 220)">
                           <path d="M0,0 L80,0 L80,100 L0,100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                           <circle cx="40" cy="25" r="10" fill="#ff6b35" />
                        </g>
                      </svg>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 flex items-center gap-3">
                         <MapIcon className="w-5 h-5 text-primary" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-on-surface">Standard Booth Layout</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative group rounded-3xl overflow-hidden border border-slate-100 bg-slate-50 aspect-video flex items-center justify-center">
                    <MousePointer2 className="w-12 h-12 text-primary opacity-20 group-hover:scale-110 transition-transform" />
                    <p className="absolute bottom-6 text-[10px] uppercase font-black text-on-surface-variant opacity-60 tracking-widest">voters.eci.gov.in Official Preview</p>
                  </div>
                )}

                <div className="mt-12 pt-12 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-2">
                     {steps.map((_, i) => (
                       <div key={i} className={cn("w-2 h-2 rounded-full transition-all", i === activeStep ? "bg-primary w-6" : "bg-slate-200")} />
                     ))}
                  </div>
                  <button className="bg-primary-container text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-primary-container/20">
                    {steps[activeStep].actionLabel}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
