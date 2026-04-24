import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Users, Gavel, BookOpen, ShieldCheck, ChevronRight, Vote, UserPlus, GraduationCap, History, Info, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';

export default function RajyaSabha() {
  const electionDetails = [
    { 
      title: "Indirect Elections", 
      desc: "Elected by the elected Members of the State Legislative Assemblies (MLAs). Citizens do not vote directly.", 
      icon: Users 
    },
    { 
      title: "STV System", 
      desc: "Uses Proportional Representation by means of a Single Transferable Vote to ensure balanced representation.", 
      icon: RefreshCw 
    },
    { 
      title: "Permanent Body", 
      desc: "Never dissolved. One-third of members retire every two years, each serving a 6-year term.", 
      icon: History 
    }
  ];

  const roles = [
    { 
      title: "Legislative Review", 
      subtitle: "Second Level Review", 
      desc: "Scrutinizes laws passed by Lok Sabha and frames laws on Union and Concurrent lists.", 
      icon: BookOpen 
    },
    { 
      title: "Federal Protection", 
      subtitle: "State Rights", 
      desc: "Protects the interests of states against overreach by the central government.", 
      icon: ShieldCheck 
    },
    { 
      title: "Nominated Expertise", 
      subtitle: "12 Special Members", 
      desc: "President nominates 12 experts from Art, Literature, Science, and Social Service.", 
      icon: UserPlus 
    },
    { 
      title: "Accountability", 
      subtitle: "Executive Check", 
      desc: "Debates national policies and holds the Union Cabinet accountable through questioning.", 
      icon: Gavel 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden p-12 md:p-20">
        <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
        <div className="absolute inset-0 ajrakh-watermark opacity-5 pointer-events-none" />
        
        <div className="max-w-3xl relative z-10">
          <span className="text-tertiary font-bold tracking-widest uppercase text-xs mb-4 block">National Upper House</span>
          <h1 className="text-5xl md:text-6xl font-serif text-on-surface mb-6 leading-tight">
            The Rajya <br />
            <span className="text-tertiary">Sabha Guide.</span>
          </h1>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            The Rajya Sabha, or Council of States, is the permanent Upper House of India's Parliament, 
            bridging state-level politics with national lawmaking.
          </p>
          
          <div className="flex flex-wrap gap-8 py-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary/5 flex items-center justify-center text-tertiary">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-on-surface-variant">Max Capacity</p>
                <p className="font-bold text-on-surface">250 Members</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary/5 flex items-center justify-center text-tertiary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-on-surface-variant">Min. Age</p>
                <p className="font-bold text-on-surface">30 Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How They Are Elected */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif text-on-surface">The Indirect Mandate</h2>
            <p className="text-on-surface-variant max-w-xl">Learn how the representatives of states are chosen through complex but precise systems.</p>
          </div>
          <div className="madhubani-divider w-32 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {electionDetails.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm group"
            >
              <div className="w-14 h-14 bg-tertiary/5 rounded-2xl flex items-center justify-center text-tertiary mb-6 group-hover:rotate-12 transition-transform">
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

      {/* Role of President's Nominees */}
      <section className="bg-slate-50 border border-slate-100 rounded-[48px] p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
         <div className="lg:w-1/3 relative">
            <div className="w-full aspect-square bg-tertiary/10 rounded-[32px] flex items-center justify-center overflow-hidden">
               <UserPlus className="w-24 h-24 text-tertiary opacity-40" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
               <span className="text-[40px] font-serif text-tertiary leading-none">12</span>
               <p className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest mt-1">Nominated Seats</p>
            </div>
         </div>
         <div className="lg:w-2/3 space-y-6">
            <h2 className="text-3xl font-serif text-on-surface">Distinguished Expertise</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Out of the 250 members, 12 are directly nominated by the <strong>President of India</strong>. 
              These individuals are chosen for their special knowledge in fields like <strong>Art, Literature, Science, and Social Service</strong>.
            </p>
            <p className="text-sm text-on-surface-variant italic">
              "This ensures that voices of excellence—from cricketing legends to celebrated artists—can lend their insights to national policy debates without standard elections."
            </p>
            <div className="flex gap-4">
               {['Art', 'Science', 'Literature', 'Social Service'].map(f => (
                 <span key={f} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-tertiary uppercase tracking-wider">{f}</span>
               ))}
            </div>
         </div>
      </section>

      {/* The STV System Explanation */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif text-on-surface">Single Transferable Vote (STV)</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">A proportional representation system designed to prevent wasted votes and ensure diverse representation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Ranking", desc: "MLAs rank candidates by preference (1st, 2nd, 3rd Choice)." },
            { step: "02", title: "Winning Quota", desc: "Candidates must reach a minimum threshold to get elected." },
            { step: "03", title: "Surplus Transfer", desc: "Extra votes from winners move to the next preferred candidate." },
            { step: "04", title: "Elimination", desc: "Least-voted candidates are removed; their votes are redistributed." }
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
               <span className="text-6xl font-serif text-slate-50 absolute -top-2 -right-2 group-hover:text-tertiary/5 transition-colors">{s.step}</span>
               <div className="relative z-10 pt-4">
                  <h4 className="font-bold text-on-surface mb-2">{s.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{s.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roles Grid */}
      <section className="bg-tertiary text-white rounded-[64px] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 ajrakh-watermark opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xl space-y-4">
              <h2 className="text-4xl font-serif">Roles & Responsibilities</h2>
              <p className="text-white/70 font-medium">As a second-level review body, the Rajya Sabha ensures laws are carefully scrutinized.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-sm max-w-xs">
               <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                 <Info className="w-4 h-4 text-white/60" />
                 Chairman
               </h4>
               <p className="text-xs text-white/80 leading-relaxed font-medium">The Vice-President of India serves as the ex-officio Chairman of the Rajya Sabha.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {roles.map((role, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <role.icon className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-xl">{role.subtitle}</h4>
                    <span className="text-[10px] font-black uppercase text-white/50 tracking-widest">{role.title}</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{role.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="text-center pt-12 pb-24">
        <button 
          onClick={() => window.history.back()}
          className="px-10 py-5 border-2 border-tertiary text-tertiary font-black rounded-2xl hover:bg-tertiary/5 transition-all text-sm uppercase tracking-widest flex items-center gap-3 mx-auto shadow-sm shadow-tertiary/5 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          Back to Education
        </button>
      </section>
    </div>
  );
}
