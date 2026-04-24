import React, { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck, Loader2 } from 'lucide-react';
import { useAuth } from './FirebaseProvider';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, addDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { cn } from '../lib/utils';

interface SaveButtonProps {
  resourceId: string;
  resourceType: 'form' | 'article' | 'module';
  title: string;
  className?: string;
}

export function SaveButton({ resourceId, resourceType, title, className }: SaveButtonProps) {
  const { user } = useAuth();
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [docId, setDocId] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setIsSaved(false);
      setDocId(null);
      return;
    }

    const checkSaved = async () => {
      const q = query(
        collection(db, 'saved_resources'),
        where('userId', '==', user.uid),
        where('resourceId', '==', resourceId)
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        setIsSaved(true);
        setDocId(snapshot.docs[0].id);
      } else {
        setIsSaved(false);
        setDocId(null);
      }
    };

    checkSaved();
  }, [user, resourceId]);

  const handleToggleSave = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      alert("Please login to save resources to your profile.");
      return;
    }

    setLoading(true);
    try {
      if (isSaved && docId) {
        await deleteDoc(doc(db, 'saved_resources', docId));
        setIsSaved(false);
        setDocId(null);
      } else {
        const docRef = await addDoc(collection(db, 'saved_resources'), {
          userId: user.uid,
          resourceId,
          resourceType,
          title,
          timestamp: serverTimestamp(),
        });
        setIsSaved(true);
        setDocId(docRef.id);
      }
    } catch (error) {
      console.error("Error toggling save:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggleSave}
      disabled={loading}
      className={cn(
        "p-2 rounded-full transition-all active:scale-95",
        isSaved 
          ? "text-primary bg-primary/10 border border-primary/20" 
          : "text-slate-400 hover:text-primary hover:bg-primary/5 border border-transparent",
        className
      )}
      title={isSaved ? "Remove from saved" : "Save for later"}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : isSaved ? (
        <BookmarkCheck className="w-5 h-5 fill-primary" />
      ) : (
        <Bookmark className="w-5 h-5" />
      )}
    </button>
  );
}
