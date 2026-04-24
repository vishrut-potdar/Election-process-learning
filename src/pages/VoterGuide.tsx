import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Info, 
  CreditCard, 
  Search, 
  Users, 
  Vote, 
  LogOut, 
  Phone, 
  ExternalLink, 
  Smartphone, 
  Camera, 
  Eye, 
  Banknote, 
  Flag,
  AlertCircle,
  FileText,
  Clock,
  Printer
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function VoterGuide() {
  const primaryIDs = [
    "Aadhaar Card (physical or mAadhaar app)",
    "MNREGA Job Card",
    "Passbook with photo (bank / post office)",
    "Health Insurance Smart Card (Ministry of Labour)",
    "Driving Licence",
    "PAN Card",
    "Indian Passport",
    "Smart Card issued by RGI under NPR",
    "Pension document with photograph",
    "Service photo identity card issued by Central/State Govt / PSUs",
    "Official identity card issued by MPs / MLAs / MLCs",
    "Unique Disability ID (UDID) Card — Ministry of Social Justice"
  ];

  const steps = [
    { title: "Find Your Polling Station", desc: "Check your assigned booth on your EPIC card or at voters.eci.gov.in. Arrive during polling hours (usually 7:00 AM – 6:00 PM; confirm locally)." },
    { title: "Queue & Verification", desc: "Join the queue. A Polling Officer will verify your name in the Electoral Roll and check your photo ID. Your left index finger will be checked for ink marks." },
    { title: "Ink Mark Applied", desc: "Indelible ink is applied to your left index finger (or another finger if previously marked). This prevents double voting." },
    { title: "Receive Ballot / EVM Slip", desc: "You will get a numbered voter slip. Hand it to the Presiding Officer at the inner table. Sign / thumb-print the register (Form 17A)." },
    { title: "Cast Your Vote on the EVM", desc: "Enter the voting compartment. Press the blue button next to your chosen candidate's name and symbol on the EVM. A long beep confirms your vote." },
    { title: "Verify on VVPAT", desc: "A paper slip will display your choice for 7 seconds in the VVPAT glass window. Verify, then it automatically falls into the sealed box." },
    { title: "Exit", desc: "Leave the booth. Do not re-enter. You are done — your vote has been cast." }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 print:p-0 print:max-w-none">
      <div className="flex justify-between items-center mb-8 print:hidden">
        <h1 className="text-3xl font-serif text-primary">First-Time Voter Guide</h1>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Printer className="w-4 h-4" />
          Print Guide
        </button>
      </div>

      <div className="bg-white shadow-2xl border border-slate-200 rounded-none print:shadow-none print:border-none">
        {/* Page 1 Header */}
        <div className="bg-[#b33a3a] text-white p-2 text-[10px] font-bold uppercase tracking-widest flex justify-between">
          <span>First-Time Voter Guide</span>
          <span>Page 1</span>
        </div>

        <div className="p-12 md:p-20 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-4">Your First Vote,<br />Done Right.</h2>
          <p className="text-slate-500 font-medium mb-16">A Quick-Reference Guide for First-Time Voters in India</p>

          <div className="grid grid-cols-3 gap-0.5 bg-slate-100 border border-slate-100 rounded-lg overflow-hidden">
            <div className="bg-[#fdf2f2] p-8">
              <span className="block text-2xl font-bold text-[#b33a3a]">900M+</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Registered Voters</span>
            </div>
            <div className="bg-[#fdf2f2] p-8">
              <span className="block text-2xl font-bold text-[#b33a3a]">543</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Lok Sabha Seats</span>
            </div>
            <div className="bg-[#fdf2f2] p-8">
              <span className="block text-2xl font-bold text-[#b33a3a]">YOU</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Matter — Vote Today</span>
            </div>
          </div>

          <div className="mt-16 text-left">
            <h3 className="text-xl font-bold text-[#b33a3a] mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-0.5 bg-[#b33a3a]" />
              01 — Eligibility Check
            </h3>
            
            <div className="bg-[#fdf2f2] p-8 rounded-lg space-y-4">
              <p className="font-bold text-slate-900 mb-4">You can vote if:</p>
              {[
                "You are 18 years or older on the qualifying date (1 January of the election year)",
                "You are a citizen of India",
                "You are enrolled in the Electoral Roll (Voter List) of your constituency",
                "You have a valid Voter ID (EPIC) or any of the 12 alternative photo IDs accepted by ECI"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-slate-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#b33a3a] shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[#b33a3a] text-white p-4 text-center rounded-lg font-bold text-sm">
              Not on the voter list? Visit <a href="https://voters.eci.gov.in" target="_blank" rel="noopener noreferrer" className="underline">voters.eci.gov.in</a> to check your status before Election Day.
            </div>
          </div>

          <div className="mt-20 text-left">
            <h3 className="text-xl font-bold text-[#b33a3a] mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-0.5 bg-[#b33a3a]" />
              02 — What to Carry to the Booth
            </h3>
            <p className="font-bold text-slate-700 mb-6">Primary ID (carry at least one):</p>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
               <p className="font-bold text-slate-900 mb-4">Voter Photo Identity Card (EPIC) — most recommended</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                 {primaryIDs.map((id, i) => (
                   <div key={i} className="flex gap-2 text-xs text-slate-600 items-start">
                     <span className="text-[#b33a3a]">•</span>
                     {id}
                   </div>
                 ))}
               </div>
            </div>
            <p className="mt-6 text-[10px] italic text-slate-400">
              Source: ECI notification. Any one of the above is sufficient. Mobile screenshots of IDs are not accepted.
            </p>
          </div>
        </div>

        {/* Page 2 */}
        <div className="bg-[#b33a3a] text-white p-2 text-[10px] font-bold uppercase tracking-widest flex justify-between">
          <span>First-Time Voter Guide</span>
          <span>Page 2</span>
        </div>
        <div className="p-12 md:p-20">
          <h3 className="text-xl font-bold text-[#b33a3a] mb-12 flex items-center gap-3">
            <span className="inline-block w-8 h-0.5 bg-[#b33a3a]" />
            03 — Step-by-Step: Inside the Polling Booth
          </h3>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg flex gap-8 items-start hover:bg-slate-100/50 transition-colors">
                <span className="text-3xl font-black text-[#b33a3a]/20 shrink-0 tabular-nums">{i + 1}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-xl font-bold text-[#b33a3a] mb-12 flex items-center gap-3">
              <span className="inline-block w-8 h-0.5 bg-[#b33a3a]" />
              04 — Do's and Don'ts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#b33a3a] font-black uppercase tracking-widest text-xs mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  Do
                </div>
                {[
                  "Carry original photo ID (not a photocopy)",
                  "Arrive early — polls can get busy",
                  "Maintain silence inside the booth",
                  "Ask a Polling Officer if confused",
                  "Wear/carry your voter slip (optional)",
                  "Respect the queue and other voters"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-xs text-slate-700">
                    <span className="text-[#b33a3a]">•</span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#b33a3a] font-black uppercase tracking-widest text-xs mb-4">
                  <AlertCircle className="w-4 h-4" />
                  Don't
                </div>
                {[
                  { text: "Carry mobile phones inside", icon: Smartphone },
                  { text: "Take photos or videos inside", icon: Camera },
                  { text: "Reveal your vote to anyone", icon: Eye },
                  { text: "Accept money or gifts", icon: Banknote },
                  { text: "Wear or display party symbols", icon: Flag },
                  { text: "Attempt to vote if not on list", icon: Search }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-xs text-slate-700">
                    <span className="text-[#b33a3a]">•</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Page 3 */}
        <div className="bg-[#b33a3a] text-white p-2 text-[10px] font-bold uppercase tracking-widest flex justify-between">
          <span>First-Time Voter Guide</span>
          <span>Page 3</span>
        </div>
        <div className="p-12 md:p-20">
          <div className="mt-12">
            <div className="overflow-hidden border border-slate-200 rounded-lg">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#b33a3a] text-white">
                  <tr>
                    <th className="p-4">Resource</th>
                    <th className="p-4">Contact / Link</th>
                    <th className="p-4">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-bold text-slate-900 border-r border-slate-100">Voter Helpline</td>
                    <td className="p-4 border-r border-slate-100">1950</td>
                    <td className="p-4">ECI toll-free number</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900 border-r border-slate-100">Voter Portal</td>
                    <td className="p-4 border-r border-slate-100"><a href="https://voters.eci.gov.in" className="text-[#b33a3a] underline">voters.eci.gov.in</a></td>
                    <td className="p-4">Check status, booth, EPIC download</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 border-r border-slate-100">ECI Official Site</td>
                    <td className="p-4 border-r border-slate-100"><a href="https://eci.gov.in" className="text-[#b33a3a] underline">eci.gov.in</a></td>
                    <td className="p-4">Schedules, notifications</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900 border-r border-slate-100">cVigil App</td>
                    <td className="p-4 border-r border-slate-100"><a href="https://cvigil.eci.gov.in" className="text-[#b33a3a] underline">cVigil (ECI app)</a></td>
                    <td className="p-4">Report election code violations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-xl font-bold text-[#b33a3a] mb-8 flex items-center gap-3">
              <span className="inline-block w-8 h-0.5 bg-[#b33a3a]" />
              06 — Booth Day Quick Reminder
            </h3>
            <div className="space-y-2">
              {[
                { label: "ID", value: "Carry original voter ID or any of the 12 alternatives", icon: FileText },
                { label: "Time", value: "Polling hours: 7:00 AM – 6:00 PM (verify for your constituency)", icon: Clock },
                { label: "Ink", value: "Indelible ink on left index finger — don't worry, it's mandatory", icon: PenTool },
                { label: "Phone", value: "Keep phone away before entering the compartment", icon: Smartphone },
                { label: "EVM", value: "Press button firmly — wait for the long beep", icon: Vote },
                { label: "VVPAT", value: "Confirm your choice on the VVPAT slip (7-second display)", icon: Eye }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-12 h-12 bg-[#b33a3a]/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#b33a3a]" />
                  </div>
                  <div className="flex-1">
                    <span className="font-black text-[#b33a3a] uppercase text-[10px] tracking-widest block mb-1">{item.label}</span>
                    <p className="text-xs text-slate-700 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-[#b33a3a] text-white p-6 text-center rounded-lg">
             <p className="font-serif text-lg font-bold">Your Vote is Secret • Your Vote is Powerful • Your Vote Cannot Be Taken Away</p>
          </div>
          <p className="mt-8 text-[10px] text-slate-400 italic text-center">
            This guide is for informational purposes. Always refer to the official Election Commission of India (eci.gov.in) for the most current rules and schedules applicable to your constituency.
          </p>
        </div>
        <div className="bg-[#b33a3a] text-white p-2 text-[10px] font-bold uppercase tracking-widest text-center">
          First-Time Voter Guide • Page 3
        </div>
      </div>
    </div>
  );
}

function PenTool(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.707 4.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L7 21H3v-4L15.707 4.293z"/>
      <path d="M13 6 18 11"/>
    </svg>
  );
}
