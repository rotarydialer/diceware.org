import React from 'react';
import { render, screen } from '@testing-library/react';
import Phrases from './Phrases';
import { generateNPhrases } from '../diceware';

jest.mock('../diceware', () => ({
  generateNPhrases: jest.fn()
}));

describe('Phrases Component', () => {
  const mockPhrases = [
    ['test', 'phrase', 'one'],
    ['another', 'test', 'phrase'],
    ['yes', 'a', 'third']
  ];

  beforeEach(() => {
    generateNPhrases.mockReturnValue(mockPhrases);
  });

  it('renders without crashing', () => {
    render(<Phrases wordCount={2} phraseCount={2} />);
    expect(screen.getByText(/2 phrases with 2 words each/i)).toBeInTheDocument();
  });

  it('does not render when wordCount or phraseCount is missing', () => {
    const { container } = render(<Phrases />);
    expect(container).toBeEmptyDOMElement();
  });

  it('displays the correct number of phrases and words', () => {
    render(<Phrases wordCount={3} phraseCount={2} />);
    const phrases = screen.getAllByText(/test phrase/);
    expect(phrases.length).toBe(2); // as many divs as phrases
    expect(screen.getByText('Here are 2 phrases with 3 words each:')).toBeInTheDocument();
  });

  it('updates when props change', () => {
    const { rerender } = render(<Phrases wordCount={3} phraseCount={2} />);
    expect(screen.getByText(/2 phrases with 3 words each/i)).toBeInTheDocument();

    rerender(<Phrases wordCount={4} phraseCount={1} />);
    expect(screen.getByText(/1 phrase with 4 words/i)).toBeInTheDocument();
  });
});
