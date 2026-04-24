import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyResources from '../pages/MyResources';
import React from 'react';

// Mock Auth
vi.mock('../components/FirebaseProvider', () => ({
  useAuth: () => ({
    user: null, // Test unauthenticated state
    loading: false
  })
}));

describe('MyResources Page', () => {
  it('renders login prompt when not authenticated', () => {
    render(
      <MemoryRouter>
        <MyResources />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Your Vault is Locked/i)).toBeDefined();
    expect(screen.getByText(/Return Home/i)).toBeDefined();
  });
});
