import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Users, Gavel, Landmark as Bank, BookOpen, ShieldCheck, ChevronRight, Vote, Receipt, UserCheck } from 'lucide-react';
import { cn } from '../lib/utils';

export default function VidhanSabha() {
  const electionDetails = [
    { title: "Direct Voting", desc: "Members (MLAs) are directly elected by adult citizens of specific geographic constituencies within the state.", icon: Vote },
    { title: "Term & Majority", desc: "Elections every 5 years. Majority party forms government and chooses the Chief Minister.", icon: Users },
    { title: "Assembly Size", desc: "Ranges from 60 to 500 members depending on population (e.g., UP has 403, Goa has 40).", icon: Landmark }
  ];

  const responsibilities = [
    { 
      title: "Legislative Powers", 
      subtitle: "Making Laws", 
      desc: "MLAs debate and frame laws on State List (Police, Health, Agriculture) and Concurrent List (Education, Forests).", 
      icon: BookOpen 
    },
    { 
      title: "Financial Powers", 
      subtitle: "Managing Finances", 
      desc: "Control over state money. Money bills originate here; MLAs approve the state budget and tax proposals.", 
      icon: Receipt 
    },
    { 
      title: "Executive Powers", 
      subtitle: "Accountability", 
      desc: "Question Hour and debates to check the CM's power. Can pass a 'Vote of No-Confidence' to remove government.", 
      icon: Gavel 
    },
    { 
      title: "Electoral Powers", 
      subtitle: "National Impact", 
      desc: "MLAs elect the President of India and Rajya Sabha members representing their state.", 
      icon: UserCheck 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden p-12 md:p-20">
        <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
        <div className="absolute inset-0 ajrakh-watermark opacity-5 pointer-events-none" />
        
        <div className="max-w-3xl relative z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">State Representation</span>
          <h1 className="text-5xl md:text-6xl font-serif text-on-surface mb-6 leading-tight">
            The Vidhan <br />
            <span className="text-secondary">Sabha Guide.</span>
          </h1>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            The Vidhan Sabha (State Legislative Assembly) is the primary legislative body at the state level, 
            governing regional issues that impact your daily life directly.
          </p>
          
          <div className="flex flex-wrap gap-8 py-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-on-surface-variant">Constitutional Status</p>
                <p className="font-bold text-on-surface">State Legislature</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-on-surface-variant">Member Title</p>
                <p className="font-bold text-on-surface">MLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How They Are Elected */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif text-on-surface">The Path to Assembly</h2>
            <p className="text-on-surface-variant max-w-xl">How Members of the Legislative Assembly (MLAs) are chosen to represent your voice.</p>
          </div>
          <div className="madhubani-divider w-32 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {electionDetails.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative group"
            >
              <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roles & Responsibilities */}
      <section className="bg-slate-900 text-white rounded-[64px] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 ajrakh-watermark opacity-10 pointer-events-none" />
        
        <div className="relative z-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-serif">Power & Responsibility</h2>
            <p className="text-white/60 font-medium">Once elected, MLAs hold several key constitutional powers to serve the state.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {responsibilities.map((res, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 bg-white/10 rounded-[20px] flex items-center justify-center text-secondary shrink-0 pt-1">
                  <res.icon className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl font-bold">{res.subtitle}</h4>
                    <span className="text-[10px] font-black uppercase text-secondary/60 tracking-widest">{res.title}</span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{res.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Election Fact Card */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-secondary/5 rounded-[40px] border-2 border-dashed border-secondary/20 p-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-secondary shadow-lg shrink-0">
             <Landmark className="w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-on-surface">Did You Know?</h3>
            <p className="text-on-surface-variant leading-relaxed">
              MLAs keep the Chief Minister and Council of Ministers in check through the <strong>Question Hour</strong>. 
              The ultimate power of the assembly is the <strong>'Vote of No-Confidence'</strong>, which can dissolve the 
              ruling government if it loses majority support.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="text-center pt-12 pb-24">
        <button 
          onClick={() => window.history.back()}
          className="px-10 py-5 border-2 border-secondary text-secondary font-black rounded-2xl hover:bg-secondary/5 transition-all text-sm uppercase tracking-widest flex items-center gap-3 mx-auto active:scale-95 shadow-sm shadow-secondary/5"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          Back to Education
        </button>
      </section>
    </div>
  );
}
