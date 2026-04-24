import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  UserPlus, 
  UserMinus, 
  UserCheck, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  Image as ImageIcon, 
  MapPin, 
  Calendar,
  ClipboardList
} from 'lucide-react';
import { SaveButton } from '../components/SaveButton';

const forms = [
  {
    id: 'form6',
    number: 'Form 6',
    title: 'New Voter Registration',
    purpose: 'Gateway for any Indian citizen who has turned 18 to enter the electoral roll or for a person moving into a new constituency for the first time.',
    color: 'primary',
    documents: [
      { type: 'Proof of Age', items: ['Aadhaar Card', 'PAN Card', 'Birth Certificate', 'Passport'] },
      { type: 'Proof of Residence', items: ['Utility bills (Electricity/Water)', 'Bank Passbook', 'Rent Agreement'] },
      { type: 'Photograph', items: ['One recent passport-sized color photo'] }
    ],
    steps: [
      { label: 'Section 1', detail: 'Enter your personal details exactly as they appear on your ID documents.' },
      { label: 'Section 2', detail: 'Provide your full current address where you have been residing for at least six months.' },
      { label: 'Section 3', detail: 'Fill in the "Declaration" confirming you are not already registered elsewhere.' }
    ],
    icon: UserPlus
  },
  {
    id: 'form7',
    number: 'Form 7',
    title: 'Objection/Deletion of Name',
    purpose: 'Used for maintaining the "hygiene" of the voter list by removing names of deceased persons, reporting duplicate entries, or objecting to a person who is no longer a resident of that area.',
    color: 'tertiary',
    documents: [
      { type: 'Death Certificate', items: ['Mandatory if the request is for a deceased voter.'] },
      { type: 'Objector\'s Details', items: ['You must provide your own EPIC (Voter ID) number to show you are a registered voter in that constituency.'] }
    ],
    steps: [
      { label: 'Part 1', detail: 'Enter the details (Name and Serial Number) of the person whose name should be deleted.' },
      { label: 'Part 2', detail: 'Select the specific reason for objection (e.g., "Death," "Shifting," or "Duplicate").' },
      { label: 'Part 3', detail: 'Sign the declaration; providing false information here is a punishable offense.' }
    ],
    icon: UserMinus
  },
  {
    id: 'form8',
    number: 'Form 8',
    title: 'Correction of Details',
    purpose: 'Use this if your name is spelled wrong, your photo is outdated, or you have moved to a different house within the same constituency.',
    color: 'secondary',
    documents: [
      { type: 'Proof for Change', items: ['Marriage Certificate or Gazette Notification (for name change).'] },
      { type: 'Corrective Proof', items: ['School Leaving Certificate or Aadhaar (for age/DOB corrections).'] }
    ],
    steps: [
      { label: 'Step 1', detail: 'Enter your current EPIC number.' },
      { label: 'Step 2', detail: 'Tick the specific box for the entry that needs correction (e.g., "Name," "Address," or "Photo").' },
      { label: 'Step 3', detail: 'Fill in the correct information and upload the supporting document for that specific field.' }
    ],
    icon: UserCheck
  }
];

export default function ImportantForms() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden p-12 md:p-20 text-center">
        <div className="mughal-arch-top absolute top-0 left-0 right-0 h-4" />
        <div className="absolute inset-0 ajrakh-watermark opacity-5 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-primary font-bold tracking-widest uppercase text-xs block">Official Guidelines</span>
          <h1 className="text-5xl md:text-6xl font-serif text-on-surface leading-tight">
            Critical Election <br />
            <span className="text-primary">Forms & Roadmap.</span>
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            According to the Election Commission of India (ECI) guidelines, these are the three most critical forms for your democratic participation.
          </p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative">
        {/* Roadmap Line */}
        <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-slate-100 -translate-x-[50%] hidden lg:block" />

        <div className="space-y-32">
          {forms.map((form, index) => (
            <div key={form.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-${form.color}/10 rounded-2xl flex items-center justify-center text-${form.color}`}>
                    <form.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <span className={`text-${form.color} font-black text-sm uppercase tracking-widest`}>{form.number}</span>
                    <h3 className="text-3xl font-serif text-on-surface">{form.title}</h3>
                  </div>
                  <SaveButton 
                    resourceId={form.id} 
                    resourceType="form" 
                    title={form.title} 
                    className="mt-4"
                  />
                </div>

                <p className="text-on-surface-variant leading-relaxed text-lg">
                  {form.purpose}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 font-bold text-on-surface">
                      <ClipboardList className="w-5 h-5 text-primary" />
                      Documents Required
                    </h4>
                    <div className="space-y-4">
                      {form.documents.map((doc, i) => (
                        <div key={i} className="space-y-1">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-wider">{doc.type}</p>
                          <ul className="space-y-1">
                            {doc.items.map((item, j) => (
                              <li key={j} className="text-sm text-on-surface-variant flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 font-bold text-on-surface">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      How to Fill It
                    </h4>
                    <div className="space-y-4">
                      {form.steps.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                            <span className="text-xs font-black text-primary">{i+1}</span>
                          </div>
                          <div>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-0.5">{step.label}</p>
                            <p className="text-sm text-on-surface-variant leading-snug">{step.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Visual/Step Buffer Side */}
              <div className="flex-1 flex justify-center relative">
                <div className="hidden lg:block absolute left-[50%] -translate-x-[50%] z-20 top-1/2 -translate-y-1/2">
                   <div className={`w-12 h-12 bg-white rounded-full border-4 border-${form.color} shadow-lg flex items-center justify-center`}>
                      <div className={`w-4 h-4 bg-${form.color} rounded-full`} />
                   </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full max-w-sm aspect-[3/4] bg-white rounded-[48px] border-2 border-slate-100 shadow-xl p-10 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${form.color}/5 rounded-bl-[100px]`} />
                  <div className="space-y-6">
                    <div className="w-16 h-4 bg-slate-100 rounded-full" />
                    <div className="space-y-3">
                      <div className="w-full h-8 bg-slate-50 rounded-lg" />
                      <div className="w-3/4 h-8 bg-slate-50 rounded-lg" />
                    </div>
                    <div className="pt-8 space-y-4">
                      {[1, 2, 3].map(n => (
                        <div key={n} className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100" />
                          <div className="flex-1 h-3 bg-slate-50 rounded-full mt-1.5" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`w-full h-14 bg-${form.color} rounded-2xl flex items-center justify-center text-white font-bold gap-3`}>
                    <FileText className="w-5 h-5" />
                    Download {form.number}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Warning/Pro Tip Section */}
      <section className="bg-amber-50 border border-amber-100 rounded-[40px] p-12 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center text-amber-600 shrink-0">
          <AlertCircle className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h4 className="text-2xl font-serif text-amber-900">Important Note on Integrity</h4>
          <p className="text-amber-800/80 leading-relaxed max-w-3xl">
            Providing false information in any of these forms is a punishable offense under the Representative of Peoples Act, 1950. 
            Ensure all details match your officially recognized documents to avoid rejection or legal complications.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="text-center pt-12 pb-24 border-t border-slate-100">
        <button 
          onClick={() => window.history.back()}
          className="px-10 py-5 border-2 border-primary text-primary font-black rounded-2xl hover:bg-primary/5 transition-all text-sm uppercase tracking-widest flex items-center gap-3 mx-auto active:scale-95 shadow-sm shadow-primary/5"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          Back to Dashboard
        </button>
      </section>
    </div>
  );
}
