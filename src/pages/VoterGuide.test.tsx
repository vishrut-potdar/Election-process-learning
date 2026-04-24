import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VoterGuide from '../pages/VoterGuide';
import React from 'react';

describe('VoterGuide Page', () => {
  it('renders guide title', () => {
    render(
      <MemoryRouter>
        <VoterGuide />
      </MemoryRouter>
    );
    expect(screen.getAllByText(/First-Time Voter Guide/i)).toBeDefined();
  });

  it('lists eligibility condition', () => {
    render(
      <MemoryRouter>
        <VoterGuide />
      </MemoryRouter>
    );
    expect(screen.getByText(/Eligibility Check/i)).toBeDefined();
    expect(screen.getByText(/You can vote if/i)).toBeDefined();
  });

  it('renders quick reminders', () => {
    render(
      <MemoryRouter>
        <VoterGuide />
      </MemoryRouter>
    );
    expect(screen.getByText(/Booth Day Quick Reminder/i)).toBeDefined();
    expect(screen.getByText(/Confirm your choice on the VVPAT slip/i)).toBeDefined();
  });
});
