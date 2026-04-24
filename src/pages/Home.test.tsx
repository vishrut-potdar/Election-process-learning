import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';
import React from 'react';

describe('Home Page', () => {
  it('renders branding and headline', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Every Vote Shapes/i)).toBeDefined();
    expect(screen.getByText(/Bharat's Tomorrow/i)).toBeDefined();
  });

  it('contains primary navigation links', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Register to Vote/i)).toBeDefined();
    expect(screen.getByText(/View Candidates/i)).toBeDefined();
  });
});
