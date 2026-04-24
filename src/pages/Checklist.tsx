import React from 'react';
import { motion } from 'motion/react';
import { Flag, Search, Map as MapIcon, Users, Info, ChevronRight, CheckCircle2, Printer, MapPin, TabletSmartphone, Camera, PenTool, ShieldCheck, XCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Checklist() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Voter Identity */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden relative p-10 ajrakh-watermark">
            <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
            <h2 className="text-3xl font-serif text-primary mb-12">Voter Details</h2>
            
            <div className="space-y-12 relative z-10">
              {[
                { label: 'Full Name', placeholder: 'Enter your name' },
                { label: 'Voter ID (EPIC) No.', placeholder: 'ABC1234567' },
                { label: 'Booth No. & Name', placeholder: 'e.g. 142 - Govt High School' },
              ].map((field) => (
                <div key={field.label} className="group">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest block mb-2">{field.label}</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-0 border-b-2 border-primary/20 focus:border-primary focus:ring-0 text-lg font-serif py-3 transition-colors placeholder:text-slate-300 placeholder:italic"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-outline-variant flex items-start gap-4">
              <Info className="w-5 h-5 text-primary opacity-60 mt-1 shrink-0" />
              <p className="text-sm text-on-surface-variant italic leading-relaxed">
                These details help personalize your printable checklist and booth directions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Checklists */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="ajrakh-watermark absolute inset-0 pointer-events-none opacity-5" />
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 relative z-10">
              <div>
                <h1 className="text-4xl font-serif text-on-surface mb-3">Election Day Checklist</h1>
                <p className="text-on-surface-variant leading-relaxed">Ensure you are prepared for a smooth and secure voting experience.</p>
              </div>
              <button className="bg-primary-container text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary-container/20 hover:brightness-110 active:scale-95 transition-all shrink-0">
                <Printer className="w-5 h-5" />
                Print Checklist
              </button>
            </div>

            {/* What to Carry */}
            <section className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-2xl font-serif text-on-surface">What to Carry</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Original Voter ID Card", desc: "EPIC Card or valid alternate photo ID (Aadhar, PAN, etc.)" },
                  { title: "Voter Information Slip", desc: "Helps locate your name in the electoral roll quickly." },
                  { title: "Water Bottle", desc: "Stay hydrated while waiting in the queue." },
                  { title: "Face Mask / Cap", desc: "Protection from dust and heat during outdoor queues." }
                ].map((item, i) => (
                  <motion.label 
                    key={i}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-tertiary/5 border border-tertiary/10 cursor-pointer hover:bg-tertiary/10 transition-colors"
                  >
                    <input type="checkbox" className="mt-1.5 rounded border-tertiary/30 text-tertiary focus:ring-tertiary" />
                    <div>
                      <p className="font-bold text-on-surface text-sm mb-1">{item.title}</p>
                      <p className="text-[11px] text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.label>
                ))}
              </div>
            </section>

            <div className="madhubani-divider my-12" />

            {/* What NOT to Carry */}
            <section className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-error" />
                </div>
                <h3 className="text-2xl font-serif text-on-surface">What NOT to Carry</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Mobile Phones", desc: "Strictly prohibited inside the polling compartment.", icon: TabletSmartphone },
                  { title: "Cameras", desc: "No photography or videography allowed inside the booth.", icon: Camera },
                  { title: "Markers / Ink", desc: "Only official indelible ink applied by officers is permitted.", icon: PenTool },
                  { title: "Political Materials", desc: "No symbols, flags, or flyers within 100m of the booth.", icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-error/5 border border-error/10">
                    <div className="w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-error" />
                    </div>
                    <div>
                      <p className="font-bold text-on-surface text-sm mb-1">{item.title}</p>
                      <p className="text-[11px] text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-16 p-8 rounded-[32px] bg-primary/5 border-2 border-dashed border-primary/20 text-center"
            >
              <p className="text-primary font-serif text-lg font-bold italic">"Your vote is your voice. Exercise it responsibly."</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
