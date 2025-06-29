import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input.jsx';

// Mock the colors data
vi.mock('../../../data/colors.js', () => ({
  brandColors: {
    PrimaryBackground: '#ffffff',
    PrimaryText: '#333333',
    GrayLight: '#e5e5e5',
    GrayMid: '#6c757d',
    Error: '#dc3545',
    PrimaryAccent: '#007bff',
  }
}));

// Mock the typography data
vi.mock('../../../data/typography.js', () => ({
  typography: {
    bodyText: { fontSize: '1rem', fontWeight: '400' }
  }
}));

// Mock the spacing data
vi.mock('../../../data/spacing.js', () => ({
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
  }
}));

describe('Input Component', () => {
  it('renders with default props', () => {
    render(<Input />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders with placeholder text', () => {
    render(<Input placeholder="Enter text here" />);
    
    const input = screen.getByPlaceholderText('Enter text here');
    expect(input).toBeInTheDocument();
  });

  it('handles value prop', () => {
    render(<Input value="test value" onChange={() => {}} />);
    
    const input = screen.getByDisplayValue('test value');
    expect(input).toBeInTheDocument();
  });

  it('handles onChange events', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state', () => {
    render(<Input disabled />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('handles error state', () => {
    render(<Input error />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Input className="custom-input" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-input');
  });

  it('forwards other props', () => {
    render(<Input data-testid="custom-input" id="test-input" />);
    
    const input = screen.getByTestId('custom-input');
    expect(input).toHaveAttribute('id', 'test-input');
  });

  it('handles different input types', () => {
    const { rerender } = render(<Input type="email" />);
    let input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');

    rerender(<Input type="password" />);
    input = screen.getByLabelText('', { selector: 'input[type="password"]' });
    expect(input).toHaveAttribute('type', 'password');
  });

  it('handles focus and blur events', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    render(<Input onFocus={handleFocus} onBlur={handleBlur} />);
    
    const input = screen.getByRole('textbox');
    
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
