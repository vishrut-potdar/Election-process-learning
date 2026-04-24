import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CreditCard, 
  Contact, 
  Truck, 
  FileText, 
  Briefcase, 
  Library, 
  HeartPulse, 
  History, 
  UserCog, 
  Building, 
  GraduationCap, 
  ContactRound,
  X,
  Eye,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const documents = [
  { id: 'aadhaar', name: "Aadhaar Card", icon: Contact, note: "Physical or mAadhaar" },
  { id: 'mnrega', name: "MNREGA Job Card", icon: Briefcase },
  { id: 'bank', name: "Bank/Post Office Passbook", icon: FileText, note: "With photograph" },
  { id: 'health', name: "Health Insurance Smart Card", icon: HeartPulse, note: "Labour Ministry" },
  { id: 'dl', name: "Driving Licence", icon: Truck },
  { id: 'pan', name: "PAN Card", icon: CreditCard },
  { id: 'passport', name: "Indian Passport", icon: Library },
  { id: 'npr', name: "NPR Smart Card", icon: UserCog, note: "Issued by RGI" },
  { id: 'pension', name: "Pension Document", icon: History, note: "With photograph" },
  { id: 'service', name: "Service ID Cards", icon: ContactRound, note: "Central/State/PSU" },
  { id: 'mp', name: "MP/MLA/MLC ID Cards", icon: Building },
  { id: 'udid', name: "UDID Card", icon:ShieldCheck, note: "Social Justice Ministry" }
];

export default function Documentation() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const renderSampleContent = () => {
    switch(selectedDoc) {
      case 'voter':
        return (
          <div className="space-y-12">
            <div className="flex justify-between items-center border-b-2 border-blue-100 pb-8">
              <div className="space-y-1">
                <h4 className="text-blue-900 font-bold text-xs uppercase tracking-[0.2em]">Election Commission of India</h4>
                <p className="text-slate-400 font-bold text-[10px] uppercase">Identity Card</p>
              </div>
              <div className="w-12 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-blue-900/20 rounded-full" />
              </div>
            </div>
            <div className="flex gap-12">
              <div className="w-40 aspect-[3/4] bg-slate-200 rounded-2xl relative overflow-hidden border-2 border-slate-100">
                 <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Voter Photo</p>
                 </div>
              </div>
              <div className="flex-1 space-y-8">
                <div className="space-y-2">
                   <span className="text-[10px] font-black uppercase text-blue-900/60 tracking-wider">Card No.</span>
                   <p className="text-2xl font-mono font-bold text-blue-900">ABC1234567</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                   <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Name</span>
                      <p className="font-bold text-slate-900 uppercase">CITIZEN NAME</p>
                   </div>
                   <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">DOB</span>
                      <p className="font-bold text-slate-900">01/01/2000</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'aadhaar':
        return (
          <div className="space-y-12">
            <div className="flex justify-between items-start">
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border-4 border-orange-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-orange-800 font-black text-xs uppercase tracking-tighter">UIDAI</h4>
                    <p className="text-[8px] font-bold text-slate-400 uppercase">Unique Identification Authority of India</p>
                  </div>
               </div>
               <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-[8px] font-black text-slate-300">QR CODE</div>
            </div>
            <div className="flex gap-10">
               <div className="w-32 h-40 bg-slate-100 rounded-xl" />
               <div className="flex-1 space-y-6 pt-4">
                  <div className="space-y-1">
                    <p className="text-xl font-bold text-slate-900">Citizen Name</p>
                    <p className="text-xs text-slate-500">DOB: 01/01/2000</p>
                    <p className="text-xs text-slate-500">Gender: Male</p>
                  </div>
                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-3xl font-bold tracking-[0.2em] text-slate-900">1234 5678 9012</p>
                    <p className="text-[10px] font-black text-orange-600 uppercase mt-2">Aadhaar: Mera Adhikar, Meri Pehchan</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 'passport':
        return (
          <div className="bg-[#1a2b4b] -m-12 p-12 text-white space-y-16 min-h-[400px]">
             <div className="text-center space-y-4">
                <Building className="w-16 h-16 mx-auto text-[#d4af37]" />
                <h4 className="text-2xl font-serif text-[#d4af37]">INDIAN PASSPORT</h4>
                <div className="flex justify-center gap-4">
                   <div className="w-8 h-1 bg-[#d4af37]/40 rounded-full" />
                   <div className="w-8 h-1 bg-[#d4af37]/40 rounded-full" />
                </div>
             </div>
             <div className="grid grid-cols-2 gap-12 pt-12">
                <div className="space-y-6">
                   <div className="space-y-1">
                      <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Surname</p>
                      <p className="text-lg font-serif">CITIZEN</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Given Name</p>
                      <p className="text-lg font-serif">NAME</p>
                   </div>
                </div>
                <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-2xl p-6 flex flex-col justify-center items-center">
                   <p className="text-[#d4af37] font-bold text-lg">Passport No.</p>
                   <p className="text-3xl font-serif text-white">S1234567</p>
                </div>
             </div>
          </div>
        );
      case 'pan':
        return (
          <div className="space-y-12">
            <div className="bg-blue-900 text-white p-6 -mx-12 -mt-12 mb-8 flex justify-between items-center">
               <h4 className="font-bold text-xs">INCOME TAX DEPARTMENT</h4>
               <p className="text-[10px] font-bold opacity-60">GOVT. OF INDIA</p>
            </div>
            <div className="flex gap-8">
               <div className="w-32 h-32 bg-slate-100 rounded-lg" />
               <div className="flex-1 space-y-6 pt-2">
                  <div className="space-y-4">
                     <div>
                        <p className="text-[8px] text-slate-400 font-black uppercase">Permanent Account Number</p>
                        <p className="text-2xl font-mono font-bold text-blue-900">ABCDE1234F</p>
                     </div>
                     <div>
                        <p className="text-[8px] text-slate-400 font-black uppercase">Name</p>
                        <p className="text-sm font-bold text-slate-800 uppercase">CITIZEN NAME</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-12 py-10">
             <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-300">
                  <ShieldCheck className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                   <h4 className="text-2xl font-serif text-slate-900">Official Document</h4>
                   <p className="text-sm text-slate-500">System-generated ID for verification purposes.</p>
                </div>
             </div>
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col gap-6">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                   <span className="text-xs font-bold text-slate-400">HOLDER NAME</span>
                   <span className="text-xs font-bold text-slate-900">CITIZEN S/O FATHER</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                   <span className="text-xs font-bold text-slate-400">DOCUMENT TYPE</span>
                   <span className="text-xs font-bold text-primary uppercase tracking-widest">{selectedDoc?.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-xs font-bold text-slate-400">VALIDITY</span>
                   <span className="text-xs font-bold text-emerald-600">LIFETIME / ACTIVE</span>
                </div>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden p-12 md:p-20">
        <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
        <div className="absolute inset-0 ajrakh-watermark opacity-5 pointer-events-none" />
        
        <div className="max-w-3xl relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Identity Verification</span>
          <h1 className="text-5xl md:text-6xl font-serif text-on-surface mb-6 leading-tight">
            Valid Proofs of <br />
            <span className="text-primary">Identification.</span>
          </h1>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            The Election Commission of India accepts various forms of identification to ensure every citizen can exercise their right to vote. 
            While the EPIC (Voter ID) is preferred, any of these 12 documents are valid.
          </p>
        </div>
      </section>

      {/* Main Voter ID Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-serif text-on-surface">Primary Identification</h2>
        </div>

        <div className="bg-white rounded-[48px] border-2 border-primary/20 p-8 md:p-12 shadow-xl shadow-primary/5 relative overflow-hidden group">
          <div className="absolute inset-0 ajrakh-watermark opacity-5 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">Most Preferred</span>
              <h3 className="text-4xl font-serif text-on-surface">EPIC (Voter ID Card)</h3>
              <p className="text-on-surface-variant leading-relaxed">
                The Elector Photo Identity Card is a photo identity card issued by the Election Commission of India. 
                It serves as an identity proof for Indian citizens when casting their votes in the country's elections.
              </p>
              <button 
                onClick={() => setSelectedDoc('voter')}
                className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Eye className="w-5 h-5" />
                View Document Sample
              </button>
            </div>
            
            <motion.div 
               whileHover={{ rotate: 1, scale: 1.02 }}
               onClick={() => setSelectedDoc('voter')}
               className="relative aspect-[1.58/1] bg-slate-100 rounded-3xl border-2 border-slate-200 overflow-hidden shadow-inner flex items-center justify-center cursor-pointer"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
               <CreditCard className="w-24 h-24 text-slate-300" />
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-4 w-3/4 bg-slate-200 rounded-full mb-3" />
                  <div className="flex gap-4">
                     <div className="h-3 w-1/4 bg-slate-200 rounded-full" />
                     <div className="h-3 w-1/2 bg-slate-200 rounded-full" />
                  </div>
               </div>
               <div className="absolute top-6 right-6 w-12 h-16 bg-slate-200 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4x3 Grid Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif text-on-surface">Other Accepted Documents</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">If you don't have an EPIC card, you can use any of these valid identification proofs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedDoc(doc.id)}
              className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center text-center group cursor-pointer relative"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-all mb-6">
                <doc.icon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-2">{doc.name}</h4>
              {doc.note && (
                <span className="text-[10px] font-black uppercase text-primary/60 tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3" />
                  {doc.note}
                </span>
              )}
              
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-[32px] transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">View Sample</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sample Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoc(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[48px] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedDoc(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 hover:text-primary transition-all z-20 border border-slate-200"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-12">
                {renderSampleContent()}
              </div>

              {/* Decorative base */}
              <div className="h-3 bg-gradient-to-r from-primary/40 via-secondary/40 to-tertiary/40" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <section className="text-center pt-12 pb-24 border-t border-slate-100">
        <button 
          onClick={() => window.history.back()}
          className="px-10 py-5 border-2 border-primary text-primary font-black rounded-2xl hover:bg-primary/5 transition-all text-sm uppercase tracking-widest flex items-center gap-3 mx-auto active:scale-95 shadow-sm shadow-primary/5"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          Back to Home
        </button>
      </section>
    </div>
  );
}
