import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button.jsx';

// Mock the colors data
vi.mock('../../../data/colors.js', () => ({
  brandColors: {
    PrimaryAccent: '#007bff',
    SecondaryAccent: '#6c757d',
    PrimaryBackground: '#ffffff',
    PrimaryText: '#333333',
    GrayMid: '#6c757d',
    Success: '#28a745',
    Warning: '#ffc107',
    Error: '#dc3545',
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
    lg: '1.5rem',
  }
}));

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders different variants correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    rerender(<Button variant="secondary">Secondary</Button>);
    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    rerender(<Button variant="success">Success</Button>);
    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders different sizes correctly', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    rerender(<Button size="md">Medium</Button>);
    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Disabled</Button>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(<Button data-testid="custom-button" id="test-id">Test</Button>);
    
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('id', 'test-id');
  });
});
