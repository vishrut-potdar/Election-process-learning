import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AiAssistant } from './components/AiAssistant';
import { FirebaseProvider } from './components/FirebaseProvider';

// Mock the fetch call for AI Chat
global.fetch = vi.fn();

describe('AI Assistant Error Resilience', () => {
  it('handles API failures gracefully with a helpful message', async () => {
    const user = userEvent.setup();
    
    // Simulate API error
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 500
    });

    render(
      <FirebaseProvider>
        <AiAssistant />
      </FirebaseProvider>
    );

    // Open assistant
    const openBtn = screen.getByLabelText(/Open AI Assistant/i);
    await user.click(openBtn);

    // Send a message
    const input = screen.getByPlaceholderText(/Ask about booth timing/i);
    await user.type(input, 'How to register?{enter}');

    // Verify error message appears
    await waitFor(() => {
      expect(screen.getByText(/Forgive me, I encountered a connection issue/i)).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it('handles empty responses from Gemini gracefully', async () => {
    const user = userEvent.setup();
    
    // Simulate empty success response
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ text: "" })
    });

    render(
      <FirebaseProvider>
        <AiAssistant />
      </FirebaseProvider>
    );

    // Open assistant
    const openBtn = screen.getByLabelText(/Open AI Assistant/i);
    await user.click(openBtn);

    // Send a message
    const input = screen.getByPlaceholderText(/Ask about booth timing/i);
    await user.type(input, 'Tell me about Lok Sabha{enter}');

    // Verify fallback message appears
    await waitFor(() => {
      expect(screen.getByText(/I apologize, but I couldn't formulate a response/i)).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});
