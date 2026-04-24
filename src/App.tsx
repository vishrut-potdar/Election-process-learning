import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Learn = lazy(() => import('./pages/Learn'));
const Booth = lazy(() => import('./pages/Booth'));
const Checklist = lazy(() => import('./pages/Checklist'));
const Safety = lazy(() => import('./pages/Safety'));
const Simulation = lazy(() => import('./pages/Simulation'));
const Candidates = lazy(() => import('./pages/Candidates'));
const ImportantForms = lazy(() => import('./pages/ImportantForms'));
const LocalBodies = lazy(() => import('./pages/LocalBodies'));
const VidhanSabha = lazy(() => import('./pages/VidhanSabha'));
const RajyaSabha = lazy(() => import('./pages/RajyaSabha'));
const LokSabha = lazy(() => import('./pages/LokSabha'));
const Documentation = lazy(() => import('./pages/Documentation'));
const VoterGuide = lazy(() => import('./pages/VoterGuide'));

// Loading fallback components
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface" aria-busy="true" aria-label="Loading page content">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/booth" element={<Booth />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/forms" element={<ImportantForms />} />
            <Route path="/local-bodies" element={<LocalBodies />} />
            <Route path="/vidhan-sabha" element={<VidhanSabha />} />
            <Route path="/rajya-sabha" element={<RajyaSabha />} />
            <Route path="/lok-sabha" element={<LokSabha />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/guide" element={<VoterGuide />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
