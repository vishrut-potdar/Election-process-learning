import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Gavel, ShieldCheck, AlertCircle, Clock, CheckCircle2, Search, Mail, Phone, PlayCircle, ExternalLink, ClipboardCheck, MessageCircle, HelpCircle, HardDrive, RefreshCw, Eye } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Safety() {
  const [activeTab, setActiveTab] = useState('scams');

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Safety & Myths</h1>
        <p className="text-lg text-on-surface-variant font-sans">Empowering you with truth and secure protocols for Indian elections.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="relative bg-surface-container-low rounded-3xl overflow-hidden border-t-4 border-primary p-8 ajrakh-watermark">
            <h3 className="text-2xl font-serif text-primary mb-6">Security Links</h3>
            <ul className="space-y-6">
              {[
                { name: 'Election Protocols', icon: HardDrive, url: 'https://www.eci.gov.in/evm-vvpat/' },
                { name: 'Voter Rights', icon: ShieldCheck, url: 'https://www.eci.gov.in/faq/en/voter-registration/' },
                { name: 'Report Violation', icon: AlertCircle, url: 'https://cvigil.eci.gov.in/' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-bold group">
                    <link.icon className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/50 rounded-full w-fit">
            {[
              { id: 'scams', label: 'Scams & Alerts' },
              { id: 'myths', label: 'Myths vs Facts' },
              { id: 'protocols', label: 'Secure Protocols' },
              { id: 'helplines', label: 'Helplines' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-8 py-2.5 rounded-full font-bold transition-all",
                  activeTab === tab.id ? "bg-primary text-white shadow-md" : "text-on-surface-variant hover:bg-white/50"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'scams' && (
              <motion.div 
                key="scams"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {[
                  { 
                    title: "Voter ID Deepfakes", 
                    desc: "Scammers are using AI-generated videos to spread misinformation about voting dates.", 
                    tag: "High Risk",
                    icon: AlertCircle
                  },
                  { 
                    title: "SMS Phishing", 
                    desc: "Fraudulent SMS messages asking for bank details to 'verify' your voter registration.", 
                    tag: "Active Scam",
                    icon: MessageCircle
                  }
                ].map((scam, i) => (
                  <div key={i} className="bg-white rounded-[32px] shadow-sm border-l-4 border-amber-400 overflow-hidden group">
                    <div className="h-24 bg-primary/5 flex items-center justify-center relative">
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-white mughal-arch-top translate-y-px opacity-20" />
                      <scam.icon className="w-10 h-10 text-primary opacity-80 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-serif text-on-surface mb-3">{scam.title}</h3>
                      <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">{scam.desc}</p>
                      <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                        {scam.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'myths' && (
              <motion.div 
                key="myths"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                {[
                  { myth: "EVMs can be hacked via Bluetooth or WiFi.", fact: "EVMs are stand-alone machines. They have no internet, Bluetooth, or wireless connectivity. No physical access is possible for outsiders." },
                  { myth: "Pressing any button gives vote to the same party.", fact: "Every button is mapped to a unique candidate. This is verified through a rigorous mock poll in front of political agents." },
                  { myth: "Your vote is tracked by the government.", fact: "The secrecy of the vote is absolute. Neither the machines nor the officials can track who you voted for." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm grid md:grid-cols-2 gap-8 relative overflow-hidden">
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-[#b33a3a] uppercase tracking-[0.2em]">The Myth</span>
                      <p className="text-lg font-serif text-slate-900 italic">"{item.myth}"</p>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">The Fact</span>
                      <p className="text-sm text-emerald-900 mt-2 leading-relaxed">{item.fact}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'protocols' && (
              <motion.div 
                key="protocols"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-12"
              >
                <div className="bg-primary/5 p-12 rounded-[48px] border-2 border-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 ajrakh-watermark opacity-5 pointer-events-none" />
                  <div className="max-w-2xl relative z-10">
                    <h3 className="text-3xl font-serif text-primary mb-6">The Mock Poll Protocol</h3>
                    <p className="text-on-surface-variant mb-8 leading-relaxed">
                      On the morning of the election, exactly 90 minutes before the actual voting begins, 
                      a <strong>Mock Poll</strong> is conducted in every single polling booth across India.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        { title: "50 Test Votes", desc: "At least 50 mock votes are cast, distributed across all candidates on the ballot." },
                        { title: "Political Presence", desc: "Polling agents from ALL political parties are invited to witness and verify the process." },
                        { title: "Result Matching", desc: "The results on the EVM must perfectly match the manual count and the VVPAT paper slips." },
                        { title: "Clear & Seal", desc: "Once verified, the machine is cleared (0 votes) and sealed with security tags in front of the witnesses." }
                      ].map((step, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                            <p className="text-xs text-on-surface-variant">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Triple Sealing</h4>
                    <p className="text-[10px] text-on-surface-variant">Machines are sealed with pink paper seals, green paper seals, and thread seals at every stage.</p>
                  </div>
                  <div className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                    <RefreshCw className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">Randomization</h4>
                    <p className="text-[10px] text-on-surface-variant">Machines are randomized twice before being assigned to a booth to prevent targeted tampering.</p>
                  </div>
                  <div className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                    <Eye className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">24/7 Surveillance</h4>
                    <p className="text-[10px] text-on-surface-variant">Stored in strong-rooms under double-lock and 24/7 CCTV & armed guard surveillance.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'helplines' && (
              <motion.div 
                key="helplines"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-primary text-white p-12 rounded-[40px] flex flex-col items-center justify-center text-center shadow-xl shadow-primary/20 transform hover:-translate-y-1 transition-transform relative overflow-hidden group">
                    <div className="absolute inset-0 ajrakh-watermark opacity-10 group-hover:scale-110 transition-transform" />
                    <p className="text-[10px] font-black opacity-80 mb-4 tracking-[0.2em]">VOTER HELPLINE</p>
                    <h2 className="text-6xl font-black tracking-tighter mb-4">1950</h2>
                    <p className="font-bold border-t border-white/20 pt-4 w-full">Toll-free across India</p>
                  </div>
                  <div className="bg-white border-2 border-primary/10 p-12 rounded-[40px] flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-all">
                    <Mail className="w-10 h-10 text-primary mb-6" />
                    <p className="text-[10px] font-black text-primary mb-4 tracking-[0.2em]">EMAIL SUPPORT</p>
                    <h3 className="text-2xl font-serif text-on-surface">complaints@eci.gov.in</h3>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="madhubani-divider" />

          <section className="space-y-8">
            <h2 className="text-3xl font-serif text-on-surface">Truth in Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  title: "How EVMs and VVPATs work together", 
                  img: "https://img.youtube.com/vi/tfIE2bPkiB4/maxresdefault.jpg",
                  url: "https://youtu.be/tfIE2bPkiB4?si=tGujFvgqMmIyYxDs"
                }
              ].map((video, i) => (
                <motion.div 
                  key={i} 
                  className="group cursor-pointer"
                  onClick={() => window.open(video.url, '_blank')}
                >
                  <div className="relative rounded-3xl overflow-hidden mb-4 shadow-sm border border-slate-100">
                    <img src={video.img} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white drop-shadow-xl" strokeWidth={1} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-on-surface leading-snug group-hover:text-primary transition-colors">{video.title}</p>
                    <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
