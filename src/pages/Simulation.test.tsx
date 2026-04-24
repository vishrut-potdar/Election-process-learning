import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Simulation from '../pages/Simulation';
import React from 'react';

// Basic sanity test for the Simulation page
describe('Simulation Page', () => {
  it('renders the simulation welcome screen', () => {
    render(
      <MemoryRouter>
        <Simulation />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/M3 EVM Real-Time Experience/i)).toBeDefined();
    expect(screen.getByText(/Experience the secure, offline voting system/i)).toBeDefined();
  });

  it('shows the action button', () => {
    render(
      <MemoryRouter>
        <Simulation />
      </MemoryRouter>
    );
    
    const startButton = screen.getByRole('button', { name: /Next Procedure Step/i });
    expect(startButton).toBeDefined();
  });
});
