import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bell, UserCircle, Languages } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/learn' },
    { name: 'Safety & Myths', path: '/safety' },
    { name: 'Simulation', path: '/simulation' },
    { name: 'Booth Guide', path: '/booth' },
    { name: 'Important Forms', path: '/forms' },
  ];

  React.useEffect(() => {
    const addScript = () => {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    if (!(window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      };
      addScript();
    } else {
      // If already initialized, just try to re-run if it's missing (though it's usually once-per-render)
      try {
        if ((window as any).google && (window as any).google.translate && (window as any).google.translate.TranslateElement) {
           new (window as any).google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 'google_translate_element');
        }
      } catch (e) {}
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md border-t-4 border-primary shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between border-b-2 border-double border-primary/20">
        <NavLink to="/" className="text-2xl font-black text-primary tracking-tight font-sans flex items-center">
          <span>Mat</span>
          <span className="font-serif ml-0.5">ज्ञान</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "font-medium tracking-tight transition-colors pb-1 border-b-2",
                  isActive
                    ? "text-primary border-primary"
                    : "text-slate-600 border-transparent hover:text-primary hover:border-primary/40"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-100/50 hover:bg-slate-200/50 transition-colors px-3 py-1.5 rounded-full border border-slate-200">
            <Languages className="w-4 h-4 text-slate-500" />
            <div id="google_translate_element" className="google-translate-container"></div>
          </div>
          <button className="p-2 text-slate-500 hover:text-primary transition-colors hover:bg-primary/5 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 text-slate-500 hover:text-primary transition-colors hover:bg-primary/5 rounded-full">
            <UserCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
