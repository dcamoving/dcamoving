import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Home Page', () => {
  it('renders a heading', () => {
    // Basic test to verify setup is working
    render(<main><h1>Welcome to Next.js</h1></main>);
    const heading = screen.getByRole('heading', { name: /welcome to next.js/i });
    expect(heading).toBeInTheDocument();
  });
});
