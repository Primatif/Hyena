import React, { useState } from 'react';
import { brandColors } from '../../../data/colors.js';

const Select = ({ 
  label,
  options = [],
  placeholder = 'Select an option...',
  defaultValue,
  disabled = false,
  error,
  onChange,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const selectStyle = {
    padding: '0.5rem',
    border: '1px solid',
    borderRadius: '0.375rem',
    width: '100%',
    transition: 'all 0.2s ease-in-out',
    borderColor: error ? brandColors.ErrorRed : (isFocused ? brandColors.PrimaryAccent : brandColors.GrayLight),
    boxShadow: isFocused ? `0 0 0 2px ${brandColors.PrimaryAccent}40` : 'none',
    backgroundColor: disabled ? brandColors.GrayLight : brandColors.PrimaryBackground,
    color: brandColors.PrimaryText,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '0.25rem',
    color: error ? brandColors.ErrorRed : brandColors.GrayDark,
  };

  const errorStyle = {
    fontSize: '0.75rem',
    marginTop: '0.25rem',
    color: brandColors.ErrorRed,
  };

  return (
    <div>
      {label && <label style={labelStyle}>{label}</label>}
      <select
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={selectStyle}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
};

export default Select;
