import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Users, MapPin, CheckCircle, Calendar, BookOpen, Map as MapIcon, Shield, ClipboardCheck, HelpCircle, ChevronRight, MessageCircle, Download, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Home() {
  const navigate = useNavigate();
  const stats = [
    { label: 'Registered Voters', value: '900M+', icon: Users },
    { label: 'Lok Sabha Seats', value: '543', icon: MapPin },
    { label: 'Turnout 2019', value: '67%', icon: MessageCircle },
    { label: 'Next Election', value: '45 Days', icon: Calendar },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden p-12 md:p-20">
        <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
        <div className="absolute bottom-0 right-0 p-8 opacity-5 select-none ajrakh-watermark w-full h-full pointer-events-none" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Mat</span>
              <span className="text-sm font-serif text-primary ml-0.5">ज्ञान</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-on-surface mb-6 leading-tight">
              Every Vote Shapes <br />
              <span className="text-primary">Bharat's Tomorrow.</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-8 max-w-md">
              Empowering 1.4 billion voices through accessible education, transparent candidate profiles, and real-time polling data.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => window.open('https://voters.eci.gov.in/', '_blank')}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-container transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Register to Vote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('https://affidavit.eci.gov.in/', '_blank')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all"
              >
                View Candidates
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 p-8">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5EBkmO28MA73DMlrcnVy1hGnqmATzHNrFrpq7n3RBHK42rxe04PW8l_aw-2PPl-MSwnRm692aeK4cbJzeo_tQpwRmwb-JZ8e2WmCNyKU547JvVUvxk8GQl_1sksBlJSlqB9-30qll4f3W3mjBOnnt8JjAuGDANl1qPZeLqUtHBoN0UzdR2WGLo5DakTW-EzdtpqK_xTnUMMdwxOJ5L2L_WlluAmabuzD8yBlpvpSxBc8Vfrhk_TSzIYfmxSOu8fCdFOQrfDEEnVac" 
                alt="Warli Art showing community" 
                className="w-full opacity-80 mix-blend-multiply"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 border-t-4 border-primary-container shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow"
          >
            <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-serif text-primary mb-1">{stat.value}</h3>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      <div className="madhubani-divider" />

      {/* Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-8 bg-white p-10 border border-slate-100 shadow-sm rounded-[32px] relative overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-3xl font-serif text-on-surface mb-2">Voter's Handbook</h2>
              <p className="text-on-surface-variant">Step-by-step guidance for first-time voters and NRI citizens.</p>
            </div>
            <div className="bg-slate-100 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-primary">
              <h4 className="font-bold text-on-surface mb-2">Eligibility</h4>
              <ul className="text-sm text-on-surface-variant space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-primary" /> Indian Citizenship</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-primary" /> 18+ Years (as of Jan 1st)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-primary" /> Enrolled in Electoral Roll</li>
              </ul>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-primary flex flex-col justify-between items-start">
              <div>
                <h4 className="font-bold text-on-surface mb-2">Documentation</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">Know the valid identity proofs required for voter verification.</p>
              </div>
              <button 
                onClick={() => navigate('/documentation')}
                className="text-[10px] font-black uppercase text-primary tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
              >
                Check Documents
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-4 bg-tertiary text-white p-10 rounded-[32px] shadow-lg flex flex-col justify-between"
        >
          <div>
            <Download className="w-12 h-12 mb-6 opacity-80" />
            <h2 className="text-2xl font-serif mb-4 leading-snug">Voter Guide PDF</h2>
            <p className="opacity-90 mb-8 leading-relaxed">Get the official last-minute reference guide for a smooth voting experience.</p>
          </div>
          <button 
            onClick={() => navigate('/guide')}
            className="bg-white text-tertiary px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
          >
            Voter Guide (PDF)
            <FileText className="w-5 h-5" />
          </button>
        </motion.div>
      </section>

      {/* Cards Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Safety & Myths", desc: "Debunking EVM myths and understanding the secure protocols like the 50-vote Mock Poll.", icon: Shield, color: "primary", link: "/safety" },
          { title: "Voter Registration Status", desc: "Check your name in the electoral roll or track your registration application.", icon: ClipboardCheck, color: "tertiary", link: "https://electoralsearch.eci.gov.in/" },
          { title: "Help Desk", desc: "24/7 support for registration queries and reporting electoral malpractices.", icon: HelpCircle, color: "secondary", link: "https://mahasec.maharashtra.gov.in/Site/1364/Contact-Us" },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-8 border border-slate-100 shadow-sm rounded-2xl group hover:shadow-md transition-all"
          >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", `bg-${card.color}/10`)}>
              <card.icon className={cn("w-7 h-7", `text-${card.color}`)} />
            </div>
            <h3 className="text-2xl font-serif text-on-surface mb-4">{card.title}</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">{card.desc}</p>
            <button 
              onClick={() => card.link.startsWith('http') ? window.open(card.link, '_blank') : navigate(card.link)}
              className="text-primary font-bold flex items-center gap-2 group/btn"
            >
              Learn More 
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </section>

    </div>
  );
}
