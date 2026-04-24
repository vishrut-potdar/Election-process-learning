import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AiAssistant } from './AiAssistant';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
}
