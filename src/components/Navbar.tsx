import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bell, UserCircle, Languages, LogOut, LogIn } from 'lucide-react';
import { cn } from '../lib/utils';
import { auth } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useAuth } from './FirebaseProvider';

export function Navbar() {
  const { user } = useAuth();
  
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => signOut(auth);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/learn' },
    { name: 'Safety & Myths', path: '/safety' },
    { name: 'Simulation', path: '/simulation' },
    { name: 'Booth Guide', path: '/booth' },
    { name: 'Important Forms', path: '/forms' },
    ...(user ? [{ name: 'My Vault', path: '/vault' }] : []),
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
          
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-[10px] font-black uppercase text-primary tracking-tighter">Verified Citizen</span>
                <span className="text-xs font-medium text-slate-600 line-clamp-1 max-w-[100px]">{user.displayName}</span>
              </div>
              <div className="relative group">
                <img 
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`} 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full border-2 border-primary/20 shadow-sm"
                />
                <button 
                  onClick={handleLogout}
                  className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border border-slate-200 shadow-sm hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-3 h-3" />
                </button>
              </div>
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/25 hover:brightness-110 active:scale-95 transition-all"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          )}

          <button className="p-2 text-slate-500 hover:text-primary transition-colors hover:bg-primary/5 rounded-full hidden sm:block">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
