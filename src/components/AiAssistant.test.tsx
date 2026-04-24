import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AiAssistant } from '../components/AiAssistant';
import React from 'react';

// Mock dependencies
vi.mock('../lib/firebase', () => ({
  db: {},
  auth: { currentUser: null }
}));

describe('AiAssistant Component', () => {
  it('renders fixed trigger button', () => {
    render(<AiAssistant />);
    expect(screen.getByRole('button')).toBeDefined();
  });
});
