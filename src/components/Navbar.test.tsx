import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { FirebaseProvider } from '../components/FirebaseProvider';
import React from 'react';

// Mock Firebase
vi.mock('../lib/firebase', () => ({
  db: {},
  auth: {
    onAuthStateChanged: (cb: any) => {
        cb(null); // Initial logged out state
        return () => {};
    }
  }
}));

describe('Navbar Component', () => {
  it('renders brand name', () => {
    render(
      <MemoryRouter>
        <FirebaseProvider>
          <Navbar />
        </FirebaseProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/Mat/i)).toBeDefined();
    expect(screen.getByText(/ज्ञान/i)).toBeDefined();
  });

  it('renders login button when unauthenticated', () => {
    render(
      <MemoryRouter>
        <FirebaseProvider>
          <Navbar />
        </FirebaseProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/Login/i)).toBeDefined();
  });
});
