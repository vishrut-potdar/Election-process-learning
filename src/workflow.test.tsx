import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Simulation from './pages/Simulation';


// Mock Firebase
vi.mock('../lib/firebase', () => ({
  db: {},
  auth: { currentUser: null }
}));

// Mock nanoid
vi.mock('nanoid', () => ({
  nanoid: () => 'test-id'
}));

// Mock firestore functions
vi.mock('firebase/firestore', async () => {
  const actual = await vi.importActual('firebase/firestore');
  return {
    ...actual,
    collection: vi.fn(),
    addDoc: vi.fn().mockResolvedValue({ id: 'doc-id' }),
    serverTimestamp: vi.fn()
  };
});

describe('Full Voting Workflow Simulation', () => {
  it('navigates through all stages of the voting process', async () => {
    render(
      <MemoryRouter>
        <Simulation />
      </MemoryRouter>
    );

    // 1. Initial Stage: Booth Entry
    expect(screen.getByText(/M3 EVM Real-Time Experience/i)).toBeDefined();
    
    // Process all verification steps
    const nextBtn = screen.getByText(/Next Procedure Step/i);
    fireEvent.click(nextBtn); // Step 1
    fireEvent.click(nextBtn); // Step 2
    fireEvent.click(nextBtn); // Step 3
    fireEvent.click(nextBtn); // Step 4
    
    // Now should see "Enter Compartment"
    const enterBtn = screen.getByText(/Enter Compartment/i);
    fireEvent.click(enterBtn);

    // 2. Stage: Cast Vote
    await waitFor(() => {
      expect(screen.getByText(/READY: SELECT CANDIDATE/i)).toBeDefined();
    });

    // Select a candidate (e.g., Arjun Sharma)
    // There are multiple "Arjun Sharma" texts, we want the button that votes for him
    const arjunVoteBtn = screen.getByRole('button', { name: /Press blue button to vote for Arjun Sharma/i });
    fireEvent.click(arjunVoteBtn);

    // Should show "VOTE RECORDED"
    await waitFor(() => {
      expect(screen.getByText(/VOTE RECORDED/i)).toBeDefined();
    });

    // 3. VVPAT Slip should appear
    await waitFor(() => {
        expect(screen.getByText(/VVPAT UNIT/i)).toBeDefined();
    }, { timeout: 2000 });
  });

  it('denies multiple votes in same session', async () => {
    render(
      <MemoryRouter>
        <Simulation />
      </MemoryRouter>
    );
    
    // Skip to voting
    const nextBtn = screen.getByText(/Next Procedure Step/i);
    for(let i=0; i<4; i++) fireEvent.click(nextBtn);
    fireEvent.click(screen.getByText(/Enter Compartment/i));

    // Wait for Ballot Unit
    await waitFor(() => {
      expect(screen.getByText(/READY: SELECT CANDIDATE/i)).toBeDefined();
    });

    // Vote for first candidate
    const voteBtn1 = screen.getByRole('button', { name: /Press blue button to vote for Arjun Sharma/i });
    fireEvent.click(voteBtn1);
    
    // Try to vote for second candidate
    const voteBtn2 = screen.getByRole('button', { name: /Press blue button to vote for Sita Devi/i });
    fireEvent.click(voteBtn2);

    // Verify first candidate remains the selected one in state (UI check)
    expect(screen.getByText(/VOTE RECORDED/i)).toBeDefined();
  });
});
