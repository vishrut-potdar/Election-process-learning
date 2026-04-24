import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, X } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Namaste! I am your Matज्ञान assistant powered by Gemini. How can I help you prepare for Election Day?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.content }]
    }));

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [...history, { role: 'user', parts: [{ text: userMsg }] }],
          config: {
            model: 'gemini-1.5-flash',
            systemInstruction: "You are Matज्ञान, a highly accurate and neutral AI assistant for the Indian Voter Education Portal. Your primary goal is to provide factual, non-partisan information about elections in India. You MUST NOT express personal opinions, political leanings, or any form of bias, especially when discussing sensitive topics or political parties. Always stick to official ECI (Election Commission of India) guidelines and public records. You should prioritize explaining official protocols like the Mock Poll (conducted 90 mins before voting with 50+ test votes in front of agents) and debunking common myths about EVM/VVPAT hacking or voter tracking. Use Google Search to find real-time data like polling dates, candidate lists, and booth timings if unsure. Keep your tone professional, respectful, and culturally appropriate (using 'Namaste' etc.). Use bullet points for steps.",
            tools: [{ googleSearch: {} }]
          }
        })
      });

      if (!response.ok) throw new Error('API request failed');
      
      const data = await response.json();
      const responseText = data.text || "I apologize, but I couldn't formulate a response. Please try asking in a different way.";
      setMessages(prev => [...prev, { role: 'model', content: responseText }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'model', content: 'Forgive me, I encountered a connection issue. Please try again in a moment.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "Find my booth",
    "Candidate list",
    "Voting timing",
    "Documents needed"
  ];

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
        className="fixed bottom-8 right-8 z-40 bg-primary hover:bg-primary-container text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center scale-95 active:scale-90 transition-all group"
      >
        <Bot className="w-8 h-8 group-hover:animate-pulse" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50"
              aria-hidden="true"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="ai-assistant-title"
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[60] flex flex-col border-l border-outline-variant"
            >
              {/* Header */}
              <div className="relative pt-8 bg-primary">
                <div className="absolute top-0 left-0 right-0 h-4 bg-white mughal-arch-top -translate-y-px" />
                <div className="px-6 pb-6 flex justify-between items-center text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 id="ai-assistant-title" className="font-serif text-xl leading-none">Ask Gemini</h2>
                      <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold mt-1">Matज्ञान Intelligence</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)} 
                    aria-label="Close Assistant"
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Chat Container */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 ajrakh-watermark" role="log">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={msg.role === 'user' ? "flex flex-col items-end self-end max-w-[85%] ml-auto" : "flex flex-col items-start max-w-[85%]"}
                  >
                    <div
                      className={msg.role === 'user' 
                        ? "bg-primary text-white p-4 rounded-xl rounded-tr-none shadow-md"
                        : "bg-white p-4 rounded-xl rounded-tl-none border-l-4 border-primary shadow-sm text-on-surface"
                      }
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2 font-bold px-1 uppercase tracking-tighter">
                      {msg.role === 'user' ? 'You' : 'Gemini'} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex flex-col items-start max-w-[85%]">
                    <div className="bg-white p-4 rounded-xl rounded-tl-none border-l-4 border-primary shadow-sm">
                      <div className="flex gap-1" aria-label="Gemini is typing">
                        <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-outline-variant">
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
                  {suggestions.map(s => (
                    <button
                      key={s}
                      onClick={() => setInput(s)}
                      className="whitespace-nowrap px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-xs font-bold hover:bg-primary/10 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about booth timing, candidates..."
                    aria-label="Chat input"
                    className="w-full bg-slate-100 border-none rounded-lg py-4 pl-4 pr-12 text-on-surface text-sm focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    onClick={handleSend}
                    aria-label="Send message"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:scale-95 transition-transform disabled:opacity-50"
                    disabled={isLoading || !input.trim()}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
