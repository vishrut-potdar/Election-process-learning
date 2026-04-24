import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ImportantForms from '../pages/ImportantForms';
import React from 'react';

describe('ImportantForms Page', () => {
  it('renders official election forms', () => {
    render(
      <MemoryRouter>
        <ImportantForms />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Critical Election/i)).toBeDefined();
    expect(screen.getByText(/Forms & Roadmap/i)).toBeDefined();
    expect(screen.getAllByText(/Form 6/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Form 8/i).length).toBeGreaterThan(0);
  });
});
