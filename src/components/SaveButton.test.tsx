import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SaveButton } from '../components/SaveButton';
import { FirebaseProvider } from '../components/FirebaseProvider';
import React from 'react';

// Mock Firebase
vi.mock('../lib/firebase', () => ({
  db: {},
  auth: {
    onAuthStateChanged: (cb: any) => {
        cb({ uid: 'test-user-123' });
        return () => {};
    }
  }
}));

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  getDocs: vi.fn().mockResolvedValue({ empty: true }),
  addDoc: vi.fn().mockResolvedValue({ id: 'new-doc' }),
  deleteDoc: vi.fn(),
  doc: vi.fn(),
  serverTimestamp: vi.fn()
}));

describe('SaveButton Component', () => {
  it('renders correctly', () => {
    render(
      <FirebaseProvider>
        <SaveButton resourceId="test-1" resourceType="form" title="Test Form" />
      </FirebaseProvider>
    );
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('shows save tooltip', () => {
    render(
      <FirebaseProvider>
        <SaveButton resourceId="test-1" resourceType="form" title="Test Form" />
      </FirebaseProvider>
    );
    expect(screen.getByTitle(/Save for later/i)).toBeDefined();
  });
});
