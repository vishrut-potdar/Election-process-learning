import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Building2, Users, Info, ChevronRight, CheckCircle2, History, Landmark, Globe, Home as HomeIcon, Star, Map as MapIcon, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Learn() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl font-serif text-on-surface leading-tight">The Pillars of Indian Democracy</h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Understanding the diverse types of elections that shape the governance of the world's largest democracy.
          </p>
          <div className="madhubani-divider w-40 !justify-start" />
        </div>
        <div className="flex-1 w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 group">
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwZDO3IvBlTTfWsdE_paGql7v9sRZKvuKU--jru2SxU78o7O3sr-aAg5FIorTuaIBbD5XtzEnfBfYfYOEmGHpqwmMv71eGbpVOD0g4OvyBQOIAKGuiHRk2bOyIuHeJs7n_PWKNaFErCp7lmwA7qWr548NcexdlzNz3dsps49uTRtQSKP8CvprMiGM26aTnmtBn598SkVG5yCOMxwiiSu265qRo_NOPefHyvJueLB6HWurEEFOleUq0PnxRzQAiZkQeLhDtEEgB1CQM" 
            alt="Indian Parliament"
          />
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Lok Sabha */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-8 bg-white rounded-[40px] border border-slate-100 relative overflow-hidden shadow-sm group"
        >
          <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
          <div className="p-10 md:p-14 relative z-10 h-full flex flex-col">
            <div className="flex justify-between items-start mb-10">
              <div>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/5 px-4 py-2 rounded-full border border-primary/10">National Level</span>
                <h2 className="text-4xl font-serif text-on-surface mt-6 group-hover:text-primary transition-colors">Lok Sabha Elections</h2>
              </div>
              <Landmark className="w-12 h-12 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
              Held every five years to elect Members of Parliament (MPs) to the lower house. 
              These elections determine who will form the Union Government and choose the Prime Minister of India.
            </p>

            <div className="madhubani-divider opacity-40" />

            <div className="grid grid-cols-2 gap-6 mt-auto">
              <div className="p-8 bg-surface-container rounded-[24px] border-l-4 border-primary">
                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Voter Base</p>
                <p className="text-4xl font-serif text-on-surface">900M+</p>
              </div>
              <div className="p-8 bg-surface-container rounded-[24px] border-l-4 border-primary">
                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Total Seats</p>
                <p className="text-4xl font-serif text-on-surface">543</p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/lok-sabha')}
              className="mt-8 w-full py-4 border-2 border-primary text-primary font-black rounded-2xl hover:bg-primary/5 transition-all uppercase tracking-widest text-xs"
            >
              View Process
            </button>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-48 ajrakh-watermark pointer-events-none opacity-5" />
        </motion.div>

        {/* Rajya Sabha */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-4 bg-white rounded-[40px] border border-slate-100 overflow-hidden relative shadow-sm group"
        >
          <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4 opacity-40" />
          <div className="p-10 h-full flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-serif text-on-surface mb-4">Rajya Sabha</h3>
            <p className="text-on-surface-variant mb-10 leading-relaxed">
              The Council of States. Members are elected indirectly by the elected members of the Legislative Assemblies of the States.
            </p>
            <ul className="space-y-4 mt-auto">
              {['Indirect Election', 'Permanent Body', 'Represents States'].map((li) => (
                <li key={li} className="flex items-center gap-3 text-on-surface font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {li}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => navigate('/rajya-sabha')}
              className="mt-10 w-full py-4 border-2 border-primary text-primary font-black rounded-2xl hover:bg-primary/5 transition-all uppercase tracking-widest text-xs"
            >
              View Process
            </button>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 ajrakh-watermark pointer-events-none opacity-5" />
        </motion.div>

        {/* Vidhan Sabha */}
        <div className="md:col-span-6 bg-white rounded-[40px] border border-slate-100 overflow-hidden relative shadow-sm">
          <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
          <div className="p-10">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                <MapIcon className="w-8 h-8 text-primary-container" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-on-surface">Vidhan Sabha</h3>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">State Legislative Assemblies</span>
              </div>
            </div>
            <p className="text-on-surface-variant mb-10 leading-relaxed min-h-[5rem]">
              State-level governance. Learn how MLAs are elected and their role in framing state laws, managing state finances, and holding the government accountable.
            </p>
            <button 
              onClick={() => navigate('/vidhan-sabha')}
              className="w-full py-4 border-2 border-primary text-primary font-black rounded-2xl hover:bg-primary/5 transition-all uppercase tracking-widest text-xs"
            >
              View Process
            </button>
          </div>
        </div>

        {/* Local Bodies */}
        <div className="md:col-span-6 bg-white rounded-[40px] border border-slate-100 overflow-hidden relative shadow-sm">
          <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
          <div className="p-10">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-tertiary-container/10 flex items-center justify-center shrink-0">
                <HomeIcon className="w-8 h-8 text-tertiary" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-on-surface">Local Bodies</h3>
                <span className="text-[10px] font-black text-tertiary uppercase tracking-widest">Panchayats & Municipalities</span>
              </div>
            </div>
            <p className="text-on-surface-variant mb-10 leading-relaxed min-h-[5rem]">
              The bedrock of democracy. Local self-government elections for villages and cities, addressing grassroots issues directly.
            </p>
            <button 
              onClick={() => navigate('/local-bodies')}
              className="w-full py-4 border-2 border-tertiary text-tertiary font-black rounded-2xl hover:bg-tertiary/5 transition-all uppercase tracking-widest text-xs"
            >
              View Process
            </button>
          </div>
        </div>
      </div>

      {/* Wards & Booths Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <MapIcon className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-serif text-on-surface">Understanding Wards</h2>
          </div>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">How Wards are Created</h4>
              <p className="text-sm">Wards are small geographical units created within a municipality or panchayat. They are delimited based on population density to ensure equal representation for every citizen. The State Election Commission periodically updates these boundaries.</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">How to Find Your Ward</h4>
              <p className="text-sm">Your ward number is usually printed on your Voter ID card (EPIC). You can also find it by entering your details on the ECI Voter Portal or using the 'Voter Helpline' app by searching your name in the electoral roll.</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Finding Your Polling Booth</h4>
              <p className="text-sm">Once you know your ward, your specific polling booth is assigned based on your residential address. ECI sends 'Voter Information Slips' to registered households before election day, which contains the exact booth location and address.</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-serif text-on-surface">Voting Instructions</h2>
          </div>
          <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 md:p-10 space-y-8">
              <div className="flex gap-6">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-slate-900">How to Vote</h4>
                  <p className="text-sm text-on-surface-variant mt-1">Carry your original ID. Polling officers will verify your name, apply indelible ink, and give you a signed slip. You then proceed to the voting compartment.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-slate-900">Selecting Your Candidate</h4>
                  <p className="text-sm text-on-surface-variant mt-1">On the EVM, find your preferred candidate's name and symbol. Press the blue button next to it. A red light will glow and a long beep will sound.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-slate-900">What to do with the Slip?</h4>
                  <p className="text-sm text-on-surface-variant mt-1">The paper slip you receive from the first polling officer must be handed over to the third polling officer sitting near the EVM. Do not carry it outside.</p>
                </div>
              </div>
              <div className="pt-4">
                <button 
                  onClick={() => navigate('/simulation')}
                  className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <Star className="w-5 h-5" />
                  Try Simulation Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center bg-primary/10 rounded-[64px] p-16 md:p-24 relative overflow-hidden border border-primary/20">
        <div className="absolute inset-0 ajrakh-watermark opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif text-on-surface">Ready to Exercise Your Right?</h2>
          <div className="madhubani-divider w-32 mx-auto" />
          <p className="text-xl text-on-surface-variant leading-relaxed font-medium">
            Knowledge is your first step. Verification is the next. Ensure you are registered for the upcoming elections in your constituency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <button className="px-10 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 hover:bg-primary-container transition-all text-sm uppercase tracking-widest" onClick={() => navigate('/simulation')}>
              Try Voting Simulation
            </button>
            <button className="px-10 py-5 border-2 border-primary text-primary font-black rounded-2xl bg-white/50 hover:bg-white transition-all text-sm uppercase tracking-widest">
              Check Voter Status
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
