import React from 'react';
import { motion } from 'motion/react';
import { Gavel, ShieldCheck, AlertCircle, Clock, CheckCircle2, Search, Mail, Phone, PlayCircle, ExternalLink, ClipboardCheck } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Safety() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Safety & Helplines</h1>
        <p className="text-lg text-on-surface-variant font-sans">Empowering you to vote safely and securely in the digital age.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="relative bg-surface-container-low rounded-3xl overflow-hidden border-t-4 border-primary p-8 ajrakh-watermark">
            <h3 className="text-2xl font-serif text-primary mb-6">Quick Links</h3>
            <ul className="space-y-6">
              {[
                { name: 'Election Laws', icon: Gavel, url: 'https://www.eci.gov.in/legal/' },
                { name: 'Rights of Voter', icon: ShieldCheck, url: 'https://www.eci.gov.in/faq/en/voter-registration/' },
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
            <div className="mt-12 pt-8 border-t border-outline-variant/30 text-center">
              <div className="bg-primary/5 p-4 rounded-xl">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Last Updated</p>
                <p className="font-bold text-on-surface">Oct 24, 2023</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Tabs - Mocked for static UI */}
          <div className="flex gap-2 p-1.5 bg-slate-200/50 rounded-full w-fit">
            <button className="bg-primary text-white px-8 py-2.5 rounded-full font-bold shadow-md">Scams</button>
            <button className="text-on-surface-variant px-8 py-2.5 rounded-full font-bold hover:bg-white/50 transition-colors">Videos</button>
            <button className="text-on-surface-variant px-8 py-2.5 rounded-full font-bold hover:bg-white/50 transition-colors">Helplines</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[32px] shadow-sm border-l-4 border-amber-400 overflow-hidden group"
              >
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
              </motion.div>
            ))}
          </div>

          <div className="madhubani-divider" />

          <section>
            <h2 className="text-3xl font-serif text-primary text-center my-8 uppercase tracking-widest">Official Helplines</h2>
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
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-serif text-on-surface">Educational Content</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  title: "How to verify your name in the Voter List", 
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-V8kvh5jKpl39eDpctN-EIiYnpHmntCo_RMWA898po-_ox8a2N-H08_DTsNm1P8M0RX_B5TEzOn06wfX5EoTroLQD0l7pQex2y25IKAPSR9IKQ0xbA8PPmkyCs5OJCZry4GcGKYclQBj69uma_xsFe3ghVat2rzvlwMhawp3rsLT6RbUgxUy2kdktPks7nmAsQ4A7l4wk9NoVZHXKmr43Wiy2Hyt7TVqrJkLN1gvMT5n02OxWXfIXh9UbgrHRWIZl4WZFquAcSpq8" 
                },
                { 
                  title: "Staying safe from phishing during elections", 
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANTbbuA6eREIuKZJxF3npyS0h3Q8PkCM6fX2R-cZkw3QWauMEkWAE1ukZuTXdmbwRgYHfJTH700tQAftxdVe3lHdKt7sTmT8osynF5TWuw205h8aZzX6SiP8uEpjp1o2B9CXWzYS8f4to70WIU77YfsvO3XjDqsVZq2mS8hDv2fzWSZ8wl80eb5yX9YFoS0MgFrIbevqjYrIk5Ceyo--DSEwaS9TVOuO3VzfxLjzzm6KYnRhqt-aGgn_JK4v20LPY1mM74HP92kt8n" 
                }
              ].map((video, i) => (
                <motion.div key={i} className="group cursor-pointer">
                  <div className="relative rounded-3xl overflow-hidden mb-4 shadow-sm border border-slate-100">
                    <img src={video.img} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white drop-shadow-xl" strokeWidth={1} />
                    </div>
                    <div className="absolute top-4 right-4 bg-primary px-3 py-1.5 rounded-lg text-[10px] text-white font-black flex items-center gap-1.5 shadow-lg">
                      <ClipboardCheck className="w-3 h-3" /> OFFICIAL ECI
                    </div>
                  </div>
                  <p className="font-bold text-on-surface leading-snug group-hover:text-primary transition-colors">{video.title}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function MessageCircle(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
    </svg>
  );
}
