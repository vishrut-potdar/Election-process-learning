import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Users, Gavel, BookOpen, ShieldCheck, ChevronRight, Vote, Receipt, UserCheck, Scale, Info, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

export default function LokSabha() {
  const electionDetails = [
    { 
      title: "Direct Elections", 
      desc: "Members (MPs) are directly elected by adult citizens (18+) using Universal Adult Franchise.", 
      icon: Vote 
    },
    { 
      title: "FPTP System", 
      desc: "First-Past-The-Post system: the candidate with the highest votes in a constituency wins.", 
      icon: UserCheck 
    },
    { 
      title: "Delimitation", 
      desc: "Constituency boundaries are drawn to ensure equal weight for every citizen's vote.", 
      icon: Scale 
    }
  ];

  const coreRoles = [
    { 
      title: "Legislative Supremacy", 
      subtitle: "Making Laws", 
      desc: "Plays a major role in national laws. In joint sittings, Lok Sabha usually prevails due to its size.", 
      icon: BookOpen 
    },
    { 
      title: "Executive Accountability", 
      subtitle: "Holding Power", 
      desc: "Can pass a 'No-Confidence Motion' to force the ruling government's resignation.", 
      icon: Gavel 
    },
    { 
      title: "Government Formation", 
      subtitle: "272+ Majority", 
      desc: "The party or alliance with the majority forms the government and chooses the Prime Minister.", 
      icon: Landmark 
    }
  ];

  const financialPowers = [
    { title: "Money Bill Exclusivity", desc: "Money bills can only be introduced in the Lok Sabha." },
    { title: "Speaker's Authority", desc: "The Speaker has the final word on whether a bill is a Money Bill." },
    { title: "Budget Control", desc: "Only Lok Sabha can vote on demands for grants in the Union Budget." },
    { title: "Accountability", desc: "Rejecting a Money Bill forces the ruling government to resign." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden p-12 md:p-20">
        <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
        <div className="absolute inset-0 ajrakh-watermark opacity-5 pointer-events-none" />
        
        <div className="max-w-3xl relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">House of the People</span>
          <h1 className="text-5xl md:text-6xl font-serif text-on-surface mb-6 leading-tight">
            The Lok <br />
            <span className="text-primary">Sabha Guide.</span>
          </h1>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            The Lok Sabha is the primary legislative body at the national level. 
            It represents the collective will of over a billion citizens through direct representation.
          </p>
          
          <div className="flex flex-wrap gap-8 py-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-on-surface-variant">Max Strength</p>
                <p className="font-bold text-on-surface">552 Members</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-on-surface-variant">Min. Age to Contest</p>
                <p className="font-bold text-on-surface">25 Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Election Process */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif text-on-surface">The People's Mandate</h2>
            <p className="text-on-surface-variant max-w-xl">How citizens directly shape the nation's leadership through territorial constituencies.</p>
          </div>
          <div className="madhubani-divider w-32 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {electionDetails.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
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

      {/* Financial Powers Section */}
      <section className="bg-slate-900 text-white rounded-[64px] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 ajrakh-watermark opacity-10 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.2em]">
              <Receipt className="w-4 h-4" /> Exclusive Control
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Financial <br />Supremacy</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              The Lok Sabha holds unique and supreme control over the nation's purse strings. Unlike the Rajya Sabha, 
              it has the final say on all things related to money and taxes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {financialPowers.map((power, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm"
              >
                <h4 className="font-bold text-primary mb-2">{power.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed font-medium">{power.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif text-on-surface">Core Responsibilities</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">From lawmaking to government accountability, the Lok Sabha is the engine of Indian democracy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreRoles.map((role, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-primary/5 rounded-[32px] flex items-center justify-center text-primary group">
                <role.icon className="w-10 h-10" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-primary/60 tracking-widest mb-1 block">{role.title}</span>
                <h4 className="text-2xl font-serif text-on-surface mb-4">{role.subtitle}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speaker Information */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-primary/5 rounded-[40px] border-2 border-dashed border-primary/20 p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-primary shadow-xl shrink-0 group">
             <Gavel className="w-12 h-12 group-hover:rotate-45 transition-transform" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-on-surface">The Speaker's Office</h3>
            <p className="text-on-surface-variant leading-relaxed">
              The Speaker heads the Lok Sabha and holds exclusive authority, such as deciding if a bill is a <strong>Money Bill</strong>. 
              The survival of the government depends on the Lok Sabha; if a <strong>No-Confidence Motion</strong> passes, 
              the entire Cabinet must resign.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="text-center pt-12 pb-24">
        <button 
          onClick={() => window.history.back()}
          className="px-10 py-5 border-2 border-primary text-primary font-black rounded-2xl hover:bg-primary/5 transition-all text-sm uppercase tracking-widest flex items-center gap-3 mx-auto active:scale-95 shadow-sm shadow-primary/5"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          Back to Education
        </button>
      </section>
    </div>
  );
}
