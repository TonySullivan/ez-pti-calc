import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('App Smoke Test', () => {
  test('renders initial state and handles user count click', async () => {
    render(<App />);

    // Check that standard text is rendered
    expect(screen.getByText(/Get started/i)).toBeInTheDocument();

    // Check count button starts at 0
    const countButton = screen.getByRole('button', { name: /Count is 0/i });
    expect(countButton).toBeInTheDocument();

    // Perform user click to increment the counter
    const user = userEvent.setup();
    await user.click(countButton);

    // Verify counter incremented to 1
    expect(screen.getByRole('button', { name: /Count is 1/i })).toBeInTheDocument();
  });
});
