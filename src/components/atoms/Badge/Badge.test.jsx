import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from './Badge.jsx';

// Mock the colors data
vi.mock('../../../data/colors.js', () => ({
  brandColors: {
    PrimaryAccent: '#007bff',
    SecondaryAccent: '#6c757d',
    Success: '#28a745',
    Warning: '#ffc107',
    Error: '#dc3545',
    Info: '#17a2b8',
    PrimaryBackground: '#ffffff',
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
  }
}));

describe('Badge Component', () => {
  it('renders with default props', () => {
    render(<Badge>Default</Badge>);
    
    const badge = screen.getByText('Default');
    expect(badge).toBeInTheDocument();
  });

  it('renders different variants correctly', () => {
    const { rerender } = render(<Badge variant="primary">Primary</Badge>);
    let badge = screen.getByText('Primary');
    expect(badge).toBeInTheDocument();

    rerender(<Badge variant="success">Success</Badge>);
    badge = screen.getByText('Success');
    expect(badge).toBeInTheDocument();

    rerender(<Badge variant="warning">Warning</Badge>);
    badge = screen.getByText('Warning');
    expect(badge).toBeInTheDocument();

    rerender(<Badge variant="error">Error</Badge>);
    badge = screen.getByText('Error');
    expect(badge).toBeInTheDocument();

    rerender(<Badge variant="info">Info</Badge>);
    badge = screen.getByText('Info');
    expect(badge).toBeInTheDocument();

    rerender(<Badge variant="secondary">Secondary</Badge>);
    badge = screen.getByText('Secondary');
    expect(badge).toBeInTheDocument();
  });

  it('renders different sizes correctly', () => {
    const { rerender } = render(<Badge size="sm">Small</Badge>);
    let badge = screen.getByText('Small');
    expect(badge).toBeInTheDocument();

    rerender(<Badge size="md">Medium</Badge>);
    badge = screen.getByText('Medium');
    expect(badge).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Badge className="custom-badge">Custom</Badge>);
    
    const badge = screen.getByText('Custom');
    expect(badge).toHaveClass('custom-badge');
  });

  it('forwards other props', () => {
    render(<Badge data-testid="custom-badge" id="test-badge">Test</Badge>);
    
    const badge = screen.getByTestId('custom-badge');
    expect(badge).toHaveAttribute('id', 'test-badge');
  });

  it('handles empty content', () => {
    render(<Badge></Badge>);
    
    const badge = screen.getByRole('generic');
    expect(badge).toBeInTheDocument();
    expect(badge).toBeEmptyDOMElement();
  });

  it('handles number content', () => {
    render(<Badge>42</Badge>);
    
    const badge = screen.getByText('42');
    expect(badge).toBeInTheDocument();
  });
});
