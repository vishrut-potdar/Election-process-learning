import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, FileText, Landmark, Search, ShieldCheck } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function Candidates() {
  const candidatesRef = collection(db, 'candidates');
  const [candidates, loading, error] = useCollectionData(query(candidatesRef, orderBy('name')));

  // Fallback data if collection is empty or loading
  const fallbackCandidates = [
    { 
      name: "Arjun Sharma", 
      party: "Pragati Party", 
      edu: "M.A. Public Policy", 
      manifesto: "Focus on digital infrastructure and rural connectivity.",
      criminalRecords: "None",
      assets: "₹4.5 Crores"
    },
    { 
      name: "Sita Devi", 
      party: "Jan Chetna", 
      edu: "L.L.B", 
      manifesto: "Enhancing health care reach in tribal areas.",
      criminalRecords: "None",
      assets: "₹2.1 Crores"
    },
    { 
      name: "Vikram Singh", 
      party: "Social Unity", 
      edu: "Ph.D. Economics", 
      manifesto: "Economic reforms for small scale industries.",
      criminalRecords: "None",
      assets: "₹12.3 Crores"
    }
  ];

  const displayCandidates = candidates && candidates.length > 0 ? candidates : fallbackCandidates;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-serif text-primary mb-4">Constituency Candidates</h1>
        {loading && <p className="text-sm text-primary animate-pulse">Syncing with ECI Database...</p>}
        <p className="text-on-surface-variant max-w-2xl">
          Transparency is the core of democracy. Review the profiles, educational backgrounds, and manifestos of the candidates contesting in your area.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayCandidates.map((c: any, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden flex flex-col"
          >
            <div className="h-24 bg-primary/5 p-6 flex items-end">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center text-primary">
                <User className="w-10 h-10" />
              </div>
            </div>
            
            <div className="p-8 space-y-6 flex-grow">
              <div>
                <h3 className="text-2xl font-serif text-on-surface">{c.name}</h3>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest">{c.party}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-on-surface-variant opacity-60 mt-1" />
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Education</p>
                    <p className="text-sm font-medium">{c.edu}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-on-surface-variant opacity-60 mt-1" />
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Key Manifesto</p>
                    <p className="text-sm text-on-surface-variant italic leading-relaxed">"{c.manifesto}"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-600 opacity-60 mt-1" />
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Clean Record</p>
                    <p className="text-sm font-bold text-green-700">{c.criminalRecords}</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-5 bg-slate-50 border-t border-slate-100 font-bold text-primary hover:bg-primary hover:text-white transition-all text-xs uppercase tracking-widest">
              View Detailed Affidavit
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
