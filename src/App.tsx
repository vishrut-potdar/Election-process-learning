import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Booth from './pages/Booth';
import Checklist from './pages/Checklist';
import Safety from './pages/Safety';
import Simulation from './pages/Simulation';
import Candidates from './pages/Candidates';
import ImportantForms from './pages/ImportantForms';
import LocalBodies from './pages/LocalBodies';
import VidhanSabha from './pages/VidhanSabha';
import RajyaSabha from './pages/RajyaSabha';
import LokSabha from './pages/LokSabha';
import Documentation from './pages/Documentation';

export default function App() {
  return (
    <Router>
      <Layout>
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
        </Routes>
      </Layout>
    </Router>
  );
}
