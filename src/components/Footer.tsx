import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t-2 border-double border-primary/30 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-primary">Mat</span>
              <span className="text-2xl font-serif font-bold text-primary ml-0.5">ज्ञान</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              An initiative to strengthen Bharat's democracy through digital literacy and civic engagement. 
              Together, we vote for the future.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-on-surface mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">National Voter Service Portal</a></li>
              <li><a href="/forms" className="hover:text-primary transition-colors">Important Forms</a></li>
              <li><a href="/booth" className="hover:text-primary transition-colors">Find My Booth</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a href="https://www.eci.gov.in/election-schedule/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Election Calendar</a></li>
              <li><a href="https://www.eci.gov.in/faq/en/how-to-vote/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">How to Vote</a></li>
              <li><a href="https://www.eci.gov.in/svcep/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Voter Awareness (SVEEP)</a></li>
              <li><a href="https://www.eci.gov.in/faq/en/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Official FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> 
                <a href="mailto:complaints@eci.gov.in">complaints@eci.gov.in</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> 
                <a href="tel:1950">1950 (Voter Helpline)</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-slate-200">
          <p className="text-xs text-on-surface-variant opacity-60">
            © 2026 Mat Gyan Bharat. All rights reserved. Registered Data source: ECI Official.
          </p>
        </div>
      </div>
    </footer>
  );
}
