import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { FirebaseProvider } from './components/FirebaseProvider';

// Mock Firebase
vi.mock('./lib/firebase', () => ({
  db: {
    collection: vi.fn(),
  },
  auth: {
    currentUser: { uid: 'test-user', displayName: 'Test Citizen' },
  }
}));

// Mock firebase/auth
vi.mock('firebase/auth', () => ({
    getAuth: vi.fn().mockReturnValue({}),
    onAuthStateChanged: vi.fn().mockImplementation((auth, callback) => {
        if (typeof callback === 'function') {
            callback({ uid: 'test-user', displayName: 'Test Citizen', photoURL: 'https://test.com/photo.jpg' });
        }
        return () => {};
    }),
    signInWithPopup: vi.fn(),
    signOut: vi.fn(),
    GoogleAuthProvider: class {},
}));

// Mock nanoid
vi.mock('nanoid', () => ({
  nanoid: () => 'test-id'
}));

// Mock firestore functions
vi.mock('firebase/firestore', async (importOriginal) => {
  const actual = await importOriginal<typeof import('firebase/firestore')>();
  return {
    ...actual,
    collection: vi.fn().mockReturnValue({ id: 'mock-col' }),
    addDoc: vi.fn().mockResolvedValue({ id: 'doc-id' }),
    serverTimestamp: vi.fn().mockReturnValue(new Date().toISOString()),
    getFirestore: vi.fn(),
    doc: vi.fn(),
    getDocFromServer: vi.fn().mockResolvedValue({ exists: () => true })
  };
});
// Mock audio context
global.AudioContext = vi.fn().mockImplementation(() => ({
  createOscillator: () => ({
    connect: vi.fn(),
    start: vi.fn(),
    stop: vi.fn(),
  }),
  createGain: () => ({
    connect: vi.fn(),
    gain: { value: 0 },
  }),
  destination: {},
}));

describe('MatGyaan Full User Journey Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Increase vitest timeout for this test
    vi.setConfig({ testTimeout: 20000 });
  });

  it('performs a full user journey: home -> documentation -> simulation', async () => {
    render(
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    );

    // 1. Wait for Home page lazy loading
    await waitFor(() => {
      expect(screen.getByText(/Bharat's Tomorrow/i)).toBeInTheDocument();
    }, { timeout: 10000 });

    // 2. Journey to Documentation
    const checkDocsBtn = screen.getByText(/Check Documents/i);
    fireEvent.click(checkDocsBtn);

    // Verify Documentation page loads
    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: /Identification/i })).toBeInTheDocument();
    }, { timeout: 10000 });

    // 3. Journey to Simulation
    const simulationLink = screen.getByText(/Simulation/i);
    fireEvent.click(simulationLink);

    // Verify Simulation Lab loads
    await waitFor(() => {
      expect(screen.getByText(/Simulation Lab/i)).toBeInTheDocument();
    }, { timeout: 5000 });

    // 4. Complete Booth Entry Progress
    const nextBtn = screen.getByText(/Next Procedure Step/i);
    for(let i=0; i<4; i++) {
        fireEvent.click(nextBtn);
    }
    
    const enterBtn = screen.getByText(/Enter Compartment/i);
    fireEvent.click(enterBtn);

    // 5. Cast Vote
    await waitFor(() => {
      expect(screen.getByText(/READY: SELECT CANDIDATE/i)).toBeInTheDocument();
    }, { timeout: 5000 });

    const arjunBtn = screen.getByRole('button', { name: /vote for Arjun Sharma/i });
    fireEvent.click(arjunBtn);

    await waitFor(() => {
      expect(screen.getByText(/VOTE RECORDED/i)).toBeInTheDocument();
    }, { timeout: 5000 });

    // 6. Verify VVPAT
    await waitFor(() => {
        expect(screen.getByText(/VVPAT UNIT/i)).toBeInTheDocument();
    }, { timeout: 5000 });
  }, 30000);
});
