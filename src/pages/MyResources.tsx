import React from 'react';
import { motion } from 'motion/react';
import { Bookmark, Trash2, ExternalLink, Calendar, FileText, Layout, GraduationCap, ArrowRight } from 'lucide-react';
import { useAuth } from '../components/FirebaseProvider';
import { db } from '../lib/firebase';
import { collection, query, where, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function MyResources() {
  const { user, loading: authLoading } = useAuth();
  const resourcesRef = collection(db, 'saved_resources');
  
  // Only query if user is logged in
  const q = user ? query(resourcesRef, where('userId', '==', user.uid), orderBy('timestamp', 'desc')) : null;
  const [savedItems, loading, error] = useCollectionData(q);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'saved_resources', id));
    } catch (e) {
      console.error("Delete failed:", e);
    }
  };

  if (authLoading) return null;

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center space-y-8">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
          <Bookmark className="w-12 h-12" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-serif text-on-surface">Your Vault is Locked.</h1>
          <p className="text-on-surface-variant max-w-md mx-auto leading-relaxed">
            Please login to access your saved election guides, forms, and personalized learning materials.
          </p>
        </div>
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/25 hover:brightness-110 active:scale-95 transition-all"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-4 block">Personal Dashboard</span>
          <h1 className="text-5xl font-serif text-on-surface">Your Saved <span className="text-primary">Vault.</span></h1>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border border-slate-100 shadow-sm text-sm font-medium text-on-surface-variant">
          <Bookmark className="w-4 h-4 text-primary" />
          {savedItems?.length || 0} Items Saved
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 bg-slate-100 rounded-[32px] animate-pulse" />
          ))}
        </div>
      ) : savedItems && savedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedItems.map((item: any) => (
            <motion.div 
              key={item.resourceId}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 flex flex-col justify-between group hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    item.resourceType === 'form' ? "bg-primary/10 text-primary" : 
                    item.resourceType === 'module' ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                  )}>
                    {item.resourceType === 'form' ? <FileText className="w-6 h-6" /> : 
                     item.resourceType === 'module' ? <Layout className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
                  </div>
                  <button 
                    onClick={() => handleDelete(item.resourceId)}
                    className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors rounded-full"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.resourceType}</p>
                  <h3 className="text-xl font-serif text-on-surface line-clamp-2 leading-tight">{item.title}</h3>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-slate-50 mt-8">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.timestamp?.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </div>
                <Link 
                  to={item.resourceType === 'form' ? '/forms' : item.resourceType === 'module' ? '/learn' : '/learn'}
                  className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200 p-20 text-center space-y-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-slate-300 border border-slate-100">
            <Bookmark className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-serif text-on-surface">Empty Vault.</h3>
            <p className="text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Start exploring the portal and bookmark resources to find them here easily.
            </p>
          </div>
          <Link 
            to="/learn" 
            className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary/5 transition-all"
          >
            Explore Education
          </Link>
        </div>
      )}
    </div>
  );
}
