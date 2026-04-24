import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Ticket, ShieldAlert, Landmark, Users, User, ArrowRight, RotateCcw, MapPin, Search, CreditCard, PenTool, ExternalLink, ShieldCheck, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { nanoid } from 'nanoid';

// --- Types & Data ---

interface Candidate {
  id: number;
  name: string;
  nameHindi: string;
  party: string;
  symbol: string;
}

const CANDIDATES: Candidate[] = [
  { id: 1, name: "Arjun Sharma", nameHindi: "अर्जुन शर्मा", party: "Pragati Party", symbol: "🌿" },
  { id: 2, name: "Sita Devi", nameHindi: "सीता देवी", party: "Jan Chetna", symbol: "⭐" },
  { id: 3, name: "Vikram Singh", nameHindi: "विक्रम सिंह", party: "Social Unity", symbol: "🔷" },
  { id: 4, name: "Anita Rao", nameHindi: "अनीता राव", party: "Gram Vikas", symbol: "🌸" },
  { id: 5, name: "NOTA", nameHindi: "नोटा", party: "None of the Above", symbol: "🚫" },
];

enum SimulationStage {
  BOOTH_ENTRY = 1,
  CAST_VOTE = 2,
  EXIT_INK = 3
}

// --- Animation Components ---

const SlipAnimation = ({ candidate }: { candidate: Candidate }) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ 
        type: 'spring', 
        damping: 15, 
        stiffness: 100,
        y: { duration: 0.8, ease: "easeOut" }
      }}
      className="w-[85%] bg-white rounded-sm shadow-xl border border-slate-200 text-slate-800 font-mono p-4"
    >
      <div className="text-center pb-2 mb-2 border-b border-dashed border-slate-300">
        <p className="text-[8px] font-bold text-slate-400">ECI · VVPAT SLIP</p>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[8px] uppercase opacity-60">Candidate</span>
          <span className="text-xs font-bold">{candidate.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[8px] uppercase opacity-60">Party</span>
          <span className="text-xs font-bold">{candidate.party}</span>
        </div>
        <div className="flex justify-center py-3 border-y border-dashed border-slate-100">
           <span className="text-3xl">{candidate.symbol}</span>
        </div>
        <p className="text-[7px] text-center opacity-40 leading-tight">
          Verified through ECI Simulation System.<br />
          Slip will drop in 7 seconds.
        </p>
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---

export default function Simulation() {
  const [stage, setStage] = useState<SimulationStage>(SimulationStage.BOOTH_ENTRY);
  const [stepStates, setStepStates] = useState([true, false, false, false]); // Booth steps
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isVoted, setIsVoted] = useState(false);
  const [showSlip, setShowSlip] = useState(false);
  const [vvpatTimer, setVvpatTimer] = useState(7);
  const audioContextRef = useRef<AudioContext | null>(null);

  // --- Handlers ---

  const playBeep = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ac = audioContextRef.current;
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.connect(g);
      g.connect(ac.destination);
      o.type = 'square';
      o.frequency.setValueAtTime(800, ac.currentTime);
      g.gain.setValueAtTime(0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.7);
      o.start(ac.currentTime);
      o.stop(ac.currentTime + 0.7);
    } catch (e) {
      console.warn("Audio context not supported/allowed");
    }
  };

  const handleBoothStep = () => {
    // Small sequence to complete all steps before moving to stage 2
    let nextIdx = stepStates.findIndex(s => !s);
    if (nextIdx === -1) {
      setStage(SimulationStage.CAST_VOTE);
      return;
    }
    const newStates = [...stepStates];
    newStates[nextIdx] = true;
    setStepStates(newStates);
    if (nextIdx === 3) {
      setTimeout(() => setStage(SimulationStage.CAST_VOTE), 800);
    }
  };

  const handleVote = async (candidate: Candidate) => {
    if (isVoted) return;
    setSelectedCandidate(candidate);
    setIsVoted(true);
    playBeep();

    // Log simulation vote to Firestore
    try {
      await addDoc(collection(db, 'votes_simulation'), {
        candidateId: candidate.id.toString(),
        candidateName: candidate.name,
        timestamp: serverTimestamp(),
        sessionId: nanoid()
      });
    } catch (e) {
      console.warn("Simulation vote log failed (likely permission denied as intended or network)", e);
    }

    // Trigger VVPAT slip after a small mechanical delay
    setTimeout(() => {
      setShowSlip(true);
      startVvpatTimer();
    }, 400);
  };

  const startVvpatTimer = () => {
    let t = 7;
    const interval = setInterval(() => {
      t--;
      setVvpatTimer(t);
      if (t <= 0) {
        clearInterval(interval);
        setShowSlip(false);
        setTimeout(() => setStage(SimulationStage.EXIT_INK), 1000);
      }
    }, 1000);
  };

  const resetSimulation = () => {
    setStage(SimulationStage.BOOTH_ENTRY);
    setStepStates([true, false, false, false]);
    setSelectedCandidate(null);
    setIsVoted(false);
    setShowSlip(false);
    setVvpatTimer(7);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 block">Simulation Lab</span>
        <h1 className="text-4xl md:text-5xl font-serif text-on-surface mb-3">M3 EVM Real-Time Experience</h1>
        <p className="text-on-surface-variant max-w-xl mx-auto">Experience the secure, offline voting system used in Bharat's general elections.</p>
      </div>

      {/* Stepper */}
      <div className="max-w-2xl mx-auto mb-16 flex items-center justify-between">
        {[
          { id: 1, label: "Booth Entry", hindi: "बूथ प्रवेश" },
          { id: 2, label: "Cast Vote", hindi: "मतदान" },
          { id: 3, label: "Ink & Exit", hindi: "स्याही और निकास" }
        ].map((s, i) => (
          <React.Fragment key={s.id}>
            <div className="flex flex-col items-center gap-2">
              <div className={cn(
                "w-12 h-12 rounded-full border-2 flex items-center justify-center font-serif text-xl transition-all",
                stage === s.id ? "bg-primary border-primary text-white scale-110 shadow-lg" : 
                stage > s.id ? "bg-primary/10 border-primary text-primary" : "border-slate-200 text-slate-300"
              )}>
                {stage > s.id ? <CheckCircle2 className="w-6 h-6" /> : s.id}
              </div>
              <div className="text-center">
                <p className={cn("text-[10px] font-black uppercase tracking-tighter", stage === s.id ? "text-primary" : "text-slate-400")}>{s.label}</p>
                <p className={cn("text-[10px] font-hindi", stage === s.id ? "text-primary/60" : "text-slate-300")}>{s.hindi}</p>
              </div>
            </div>
            {i < 2 && <div className={cn("flex-1 h-0.5 mx-4", stage > s.id + 1 ? "bg-primary" : "bg-slate-100")} />}
          </React.Fragment>
        ))}
      </div>

      {/* Main Simulation Area */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Perspective: Information and Context */}
        <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary-container" />
            <h3 className="text-xl font-serif text-on-surface mb-4">Official Instructions</h3>
            <AnimatePresence mode="wait">
              {stage === SimulationStage.BOOTH_ENTRY && (
                <motion.div key="st1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Upon entering, the Polling Officer verifies your identity using the Electoral Roll. You sign the register, receive a slip, and get your finger marked with indelible ink.
                  </p>
                  <p className="mt-4 font-serif italic text-primary text-sm">"Verification is the first wall of security."</p>
                </motion.div>
              )}
              {stage === SimulationStage.CAST_VOTE && (
                <motion.div key="st2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Inside the compartment, the Ballot Unit is ready. Press the blue button next to your candidate's name. A long beep confirms your vote, and the VVPAT slip confirms your choice visually.
                  </p>
                  <p className="mt-4 font-serif italic text-primary text-sm">"Your vote is secret and permanent."</p>
                </motion.div>
              )}
              {stage === SimulationStage.EXIT_INK && (
                <motion.div key="st3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Once the VVPAT slip drops, your session is complete. The machine locks for the next voter. The ink mark on your finger is a badge of honor for participating in democracy.
                  </p>
                  <p className="mt-4 font-serif italic text-primary text-sm">"I have voted for a stronger Bharat."</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="bg-primary/5 rounded-[32px] p-8 border-2 border-dashed border-primary/20 ajrakh-watermark">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">Security Insight</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-xs font-medium text-on-surface-variant">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                No wireless hardware whatsoever (Bluetooth/Wi-Fi absent).
              </li>
              <li className="flex gap-3 items-start text-xs font-medium text-on-surface-variant">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                Dynamic power management for 15+ days session.
              </li>
              <li className="flex gap-3 items-start text-xs font-medium text-on-surface-variant">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                VVPAT provides 100% auditable paper trail.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Area: Interactive Simulation */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <AnimatePresence mode="wait">
            
            {/* STAGE 1: BOOTH ENTRY */}
            {stage === SimulationStage.BOOTH_ENTRY && (
              <motion.div 
                key="booth-entry"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden">
                   <div className="bg-primary p-6 flex items-center justify-between text-white">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-serif">Polling Booth Entry</h3>
                          <p className="text-[9px] font-bold opacity-80 uppercase tracking-widest leading-none">Nagpur South Constituency</p>
                        </div>
                      </div>
                      <span className="bg-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Live Booth</span>
                   </div>
                   
                   <div className="p-8 md:p-12 space-y-4">
                      {[
                        { label: "Electoral roll verified — Name found", icon: Search },
                        { label: "Identity confirmed — Voter ID shown", icon: CreditCard },
                        { label: "Left index finger marked with ink", icon: PenTool },
                        { label: "Voter slip issued", icon: Ticket }
                      ].map((step, i) => (
                        <div 
                          key={i} 
                          role="listitem"
                          aria-label={`${step.label}: ${stepStates[i] ? 'Verified' : 'Pending'}`}
                          className={cn(
                            "flex items-center gap-6 p-5 rounded-2xl border transition-all",
                            stepStates[i] ? "bg-green-50 border-green-100" : "bg-slate-50 border-slate-100 opacity-60"
                          )}>
                           <div className={cn(
                             "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-all",
                             stepStates[i] ? "bg-green-600 border-green-600 text-white" : "border-slate-300 text-slate-400"
                           )}>
                              {stepStates[i] ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-5 h-5" />}
                           </div>
                           <p className="font-bold text-sm text-on-surface">{step.label}</p>
                           {stepStates[i] && (
                             <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto text-[10px] font-black text-green-700 uppercase tracking-widest">Verified</motion.span>
                           )}
                        </div>
                      ))}

                      <button 
                        onClick={handleBoothStep}
                        className="w-full mt-8 bg-primary text-white h-16 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/30 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                      >
                         {stepStates.every(s => s) ? "Enter Compartment" : "Next Procedure Step"}
                         <ArrowRight className="w-5 h-5" />
                      </button>
                   </div>
                </div>
              </motion.div>
            )}

            {/* STAGE 2: CAST VOTE (EVM + VVPAT) */}
            {stage === SimulationStage.CAST_VOTE && (
              <motion.div 
                key="cast-vote"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              >
                {/* Ballot Unit */}
                <div className="bg-slate-200 p-3 pt-6 rounded-[24px] border-x-4 border-b-8 border-slate-300 shadow-2xl relative">
                  <div className="absolute top-2 right-4 flex gap-1">
                     <div className="w-6 h-4 bg-slate-400 rounded-sm flex items-center justify-center text-[8px] font-bold text-white">0</div>
                     <div className="w-6 h-4 bg-slate-100 rounded-sm flex items-center justify-center text-[8px] font-bold text-slate-800">1</div>
                  </div>
                  
                  <div className="bg-black/90 p-3 rounded-lg border-2 border-slate-400 mb-6 font-mono overflow-hidden">
                    <p className="text-[10px] text-green-500/80 leading-none mb-1">NAGPUR SOUTH V.S.</p>
                    <p className={cn("text-xs text-green-400 font-bold", isVoted ? "animate-pulse" : "")}>
                       {isVoted ? "VOTE RECORDED - THANK YOU" : "READY: SELECT CANDIDATE"}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg border border-slate-300 overflow-hidden mb-6">
                    <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 text-[8px] font-bold text-slate-500 uppercase flex justify-between">
                       <span>Sl. & Symbol</span>
                       <span>Candidate / Party</span>
                       <span>Vote</span>
                    </div>
                    {CANDIDATES.map((c) => (
                      <div 
                        key={c.id} 
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 border-b border-slate-100 transition-colors relative",
                          selectedCandidate?.id === c.id ? "bg-blue-50" : "bg-white",
                          isVoted && "cursor-default"
                        )}
                        role="group"
                        aria-label={`Candidate ${c.id}: ${c.name}, ${c.party}`}
                      >
                         <div className="flex bg-slate-50 items-center justify-center w-6 h-6 text-[10px] border border-slate-100 rounded" aria-hidden="true">
                           {c.id}
                         </div>
                         <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-xl bg-white shrink-0" aria-hidden="true">
                           {c.symbol}
                         </div>
                         <div className="flex-1 min-w-0">
                           <p className="text-[11px] font-bold text-slate-800 truncate leading-tight uppercase">{c.name}</p>
                           <p className="text-[8px] text-slate-400 truncate tracking-tight">{c.nameHindi}</p>
                         </div>
                         <div className="w-8 h-8 flex items-center justify-center shrink-0">
                            <button 
                              onClick={() => handleVote(c)}
                              disabled={isVoted}
                              aria-label={`Press blue button to vote for ${c.name}`}
                              title={`Vote for ${c.name}`}
                              className={cn(
                                "w-6 h-6 rounded-full border-2 transition-all relative",
                                isVoted && selectedCandidate?.id !== c.id && "bg-slate-100 border-slate-200 cursor-not-allowed",
                                isVoted && selectedCandidate?.id === c.id && "bg-blue-600 border-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]",
                                !isVoted && "bg-blue-600 border-blue-900 active:scale-95 shadow-md"
                              )}
                            />
                         </div>
                         {/* Braille (Mock) */}
                         <div className="w-2 flex flex-col gap-0.5 opacity-20">
                            <div className="w-1 h-1 bg-black rounded-full" />
                            <div className="w-1 h-1 bg-black rounded-full" />
                         </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-300 -mx-3 -mb-3 p-4 border-t border-slate-400 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className={cn(
                          "w-3 h-3 rounded-full transition-all border",
                          isVoted ? "bg-red-600 border-red-800 shadow-[0_0_12px_rgba(220,38,38,0.8)]" : "bg-slate-900 border-slate-950"
                        )} />
                        <span className={cn("text-[8px] font-bold uppercase", isVoted ? "text-red-700" : "text-slate-600")}>Vote Indicator</span>
                     </div>
                     <span className="text-[8px] font-bold text-slate-500 opacity-40">M3 EVM - BEL BANGALORE</span>
                  </div>
                </div>

                {/* VVPAT Machine */}
                <div className="bg-slate-100 rounded-[32px] p-6 border-4 border-slate-200 shadow-xl self-stretch flex flex-col">
                   <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                         <div className={cn("w-2 h-2 rounded-full", showSlip ? "bg-green-500 shadow-[0_0_4px_#22c55e]" : "bg-slate-400")} />
                         <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">VVPAT UNIT</span>
                      </div>
                      <span className="text-[8px] font-mono text-slate-400">SER: VV-NGP-0441</span>
                   </div>

                   <div className="flex-1 bg-slate-900 rounded-2xl border-x-8 border-t-8 border-b-16 border-slate-700 p-8 flex flex-col items-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-blue-500/5" />
                      <div className="w-3/4 h-1 bg-white/5 rounded-full mb-8" />
                      
                      <div className="flex-1 w-full flex items-center justify-center relative">
                        <AnimatePresence>
                          {showSlip && selectedCandidate && (
                            <SlipAnimation candidate={selectedCandidate} />
                          )}
                        </AnimatePresence>
                        
                        {!showSlip && !isVoted && (
                          <div className="text-center font-mono text-xs text-white/5 space-y-1">
                             <p>AWAITING</p>
                             <p>VOTE</p>
                             <p>---</p>
                          </div>
                        )}
                        
                        {!showSlip && isVoted && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center font-mono text-[10px] text-green-500/40">
                             VOTE CAST<br />SUCCESSFULLY
                          </motion.div>
                        )}
                      </div>
                   </div>

                   <div className="mt-8 space-y-3">
                      <div className="flex justify-between text-[9px] font-mono text-on-surface-variant">
                         <span>SLIP RETENTION TIMER</span>
                         <span className="font-bold">{vvpatTimer}s</span>
                      </div>
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: "100%" }} 
                           animate={{ width: showSlip ? "0%" : "100%" }}
                           transition={{ duration: 7, ease: "linear" }}
                           className="h-full bg-primary" 
                         />
                      </div>
                      <p className="text-[10px] italic text-on-surface-variant opacity-60 leading-relaxed text-center">
                         "The slip confirms your choice. It drops automatically into the sealed box."
                      </p>
                   </div>
                </div>
              </motion.div>
            )}

            {/* STAGE 3: EXIT & INK */}
            {stage === SimulationStage.EXIT_INK && (
              <motion.div 
                key="exit-ink"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-12 text-center space-y-10 relative overflow-hidden"
              >
                <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
                <div className="absolute inset-0 ajrakh-watermark opacity-5 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-green-50 rounded-full border-2 border-green-200 flex items-center justify-center text-green-600 mx-auto mb-8 shadow-inner shadow-green-100">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  
                  <h2 className="text-4xl font-serif text-on-surface mb-4">You have Voted!</h2>
                  <p className="text-on-surface-variant font-medium text-lg mb-12">आपका मत सफलतापूर्वक दर्ज कर लिया गया है।</p>
                  
                  {/* Ink Finger Illustration */}
                  <div className="flex flex-col items-center gap-6 py-8">
                     <svg className="w-32 h-auto" viewBox="0 0 100 120" fill="none">
                        <path d="M40 10 C30 10 25 15 25 25 L25 50 C25 60 30 75 50 75 C70 75 75 60 75 50 L75 25 C75 15 70 10 60 10 Z" fill="#fde3db" stroke="#ab3500" strokeWidth="2" />
                        <path d="M40 30 C40 25 60 25 60 30" stroke="#ab3500" strokeWidth="1" strokeLinecap="round" />
                        <motion.path 
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 1 }}
                          d="M50 45 L50 75" 
                          stroke="#1e3a8a" 
                          strokeWidth="8" 
                          strokeLinecap="round" 
                        />
                     </svg>
                     <div className="space-y-4">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Indelible Ink Applied</p>
                        <p className="text-sm text-on-surface-variant font-medium leading-relaxed max-w-sm">
                           This mark belongs to every citizen who takes charge of Bharat's future. 
                           Show it with pride.
                        </p>
                     </div>
                  </div>

                  <div className="madhubani-divider" />

                  <button 
                    onClick={resetSimulation}
                    className="flex items-center gap-2 text-primary font-bold mx-auto hover:scale-105 transition-transform"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Restart Simulation for Practice
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Video Guide Section */}
      <section className="mt-32 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif text-on-surface">Watch the Official Guide</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">See the step-by-step voting process explained by the Election Commission of India.</p>
        </div>
        
        <div className="relative aspect-video bg-slate-900 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/qg_gnPblcBo" 
            title="How to vote in India - ECI Guide" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </div>
      </section>

      {/* Footer Navigation Back */}
      <section className="text-center pt-24 pb-12">
        <button 
          onClick={() => window.history.back()}
          className="px-10 py-5 border-2 border-primary text-primary font-black rounded-2xl hover:bg-primary/5 transition-all text-sm uppercase tracking-widest flex items-center gap-3 mx-auto active:scale-95 shadow-sm shadow-primary/5"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          Explore Education
        </button>
      </section>
    </div>
  );
}
