import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select.jsx';

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

describe('Select Component', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('renders with default props', () => {
    render(<Select options={mockOptions} />);
    
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('renders options correctly', () => {
    render(<Select options={mockOptions} />);
    
    const select = screen.getByRole('combobox');
    const options = screen.getAllByRole('option');
    
    expect(options).toHaveLength(mockOptions.length);
    expect(options[0]).toHaveTextContent('Option 1');
    expect(options[1]).toHaveTextContent('Option 2');
    expect(options[2]).toHaveTextContent('Option 3');
  });

  it('handles value prop', () => {
    render(<Select options={mockOptions} value="option2" onChange={() => {}} />);
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('option2');
  });

  it('handles onChange events', () => {
    const handleChange = vi.fn();
    render(<Select options={mockOptions} onChange={handleChange} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'option2' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state', () => {
    render(<Select options={mockOptions} disabled />);
    
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  it('handles error state', () => {
    render(<Select options={mockOptions} error />);
    
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Select options={mockOptions} className="custom-select" />);
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('custom-select');
  });

  it('forwards other props', () => {
    render(<Select options={mockOptions} data-testid="custom-select" id="test-select" />);
    
    const select = screen.getByTestId('custom-select');
    expect(select).toHaveAttribute('id', 'test-select');
  });

  it('handles placeholder option when no value selected', () => {
    render(<Select options={mockOptions} placeholder="Choose an option" />);
    
    const select = screen.getByRole('combobox');
    const placeholderOption = screen.getByText('Choose an option');
    
    expect(placeholderOption).toBeInTheDocument();
    expect(select).toHaveValue('');
  });

  it('handles focus and blur events', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    render(<Select options={mockOptions} onFocus={handleFocus} onBlur={handleBlur} />);
    
    const select = screen.getByRole('combobox');
    
    fireEvent.focus(select);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(select);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
