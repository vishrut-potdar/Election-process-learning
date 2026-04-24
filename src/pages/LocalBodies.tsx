import React from 'react';
import { motion } from 'motion/react';
import { Building2, Home as HomeIcon, Map as MapIcon, Landmark, Users, CheckCircle2, Info, Receipt, UtilityPole, GraduationCap, MapPin, ChevronRight, Scale } from 'lucide-react';
import { cn } from '../lib/utils';

export default function LocalBodies() {
  const ruralTiers = [
    { title: "Village Level", subtitle: "Gram Panchayat", desc: "Voters directly elect representatives who manage the most immediate, grassroots issues of the village.", icon: HomeIcon },
    { title: "Block Level", subtitle: "Panchayat Samiti", desc: "Intermediate bodies that coordinate development programs across a cluster of multiple villages.", icon: UtilityPole },
    { title: "District Level", subtitle: "Zilla Panchayat", desc: "Top rural tier handling broader district-level planning and resource allocation.", icon: Landmark }
  ];

  const urbanTiers = [
    { title: "Nagar Panchayat", subtitle: "Town Committee", desc: "Governs areas transitioning from rural to urban (typically 10k-25k population).", icon: Building2 },
    { title: "Municipal Council", subtitle: "Nagar Palika", desc: "Governs smaller towns and cities (generally 25k-1 million population).", icon: Building2 },
    { title: "Municipal Corporation", subtitle: "Nagar Nigam", desc: "Governs large urban cities with populations exceeding 1 million.", icon: Landmark }
  ];

  const responsibilities = [
    { title: "Civic Services & Infrastructure", desc: "Street lighting, drinking water supply, waste management, and road construction.", icon: MapIcon },
    { title: "Administrative Functions", desc: "Issuing birth certificates, managing local markets, and building bylaws.", icon: Scale },
    { title: "Financial Autonomy", desc: "Imposing local taxes (property/water) and preparing local budgets.", icon: Receipt },
    { title: "Scheme Implementation", desc: "Primary arm for state and central government development programs at grassroots.", icon: CheckCircle2 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden p-12 md:p-20">
        <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
        <div className="absolute inset-0 ajrakh-watermark opacity-5 pointer-events-none" />
        
        <div className="max-w-3xl relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Grassroots Democracy</span>
          <h1 className="text-5xl md:text-6xl font-serif text-on-surface mb-6 leading-tight">
            How Local <br />
            <span className="text-primary">Elections Work.</span>
          </h1>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Local elections empower citizens to make decisions about their immediate community. 
            Conducted by the <strong>State Election Commission</strong>, these elections bring governance directly to your doorstep.
          </p>
          
          <div className="flex flex-wrap gap-8 py-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-on-surface-variant">Min. Age to Contest</p>
                <p className="font-bold text-on-surface">21 Years</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-on-surface-variant">Election Cycle</p>
                <p className="font-bold text-on-surface">Every 5 Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three-Tier Structure */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif text-on-surface">The Three-Tier Structure</h2>
          <p className="text-on-surface-variant">India's local governance is divided into Rural and Urban frameworks.</p>
          <div className="madhubani-divider mx-auto w-32" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Rural */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-tertiary-container/10 rounded-2xl flex items-center justify-center text-tertiary">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-on-surface">Rural Areas (Panchayati Raj)</h3>
            </div>
            <div className="space-y-4">
              {ruralTiers.map((tier, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors shrink-0">
                    <tier.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{tier.title}</span>
                    <h4 className="text-xl font-bold text-on-surface mb-2">{tier.subtitle}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{tier.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Urban */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-container/10 rounded-2xl flex items-center justify-center text-primary">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-on-surface">Urban Areas (Municipalities)</h3>
            </div>
            <div className="space-y-4">
              {urbanTiers.map((tier, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors shrink-0">
                    <tier.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{tier.title}</span>
                    <h4 className="text-xl font-bold text-on-surface mb-2">{tier.subtitle}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{tier.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="bg-surface-container rounded-[64px] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 ajrakh-watermark opacity-10" />
        <div className="relative z-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-serif text-on-surface">What Do Representatives Do?</h2>
            <p className="text-on-surface-variant font-medium">Local bodies function as autonomous institutions to bring government closer to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {responsibilities.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-on-surface leading-tight">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8">
            <div className="inline-flex items-start gap-4 p-6 bg-primary/10 rounded-3xl border border-primary/20 max-w-lg">
              <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-sm text-primary font-medium text-left">
                <strong>Did you know?</strong> Local bodies can raise their own funds through property and water taxes to independently manage local priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center py-12">
        <button 
          onClick={() => window.history.back()}
          className="px-10 py-5 border-2 border-primary text-primary font-black rounded-2xl hover:bg-primary/5 transition-all text-sm uppercase tracking-widest flex items-center gap-3 mx-auto shadow-sm shadow-primary/5 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          Back to Education
        </button>
      </section>
    </div>
  );
}
