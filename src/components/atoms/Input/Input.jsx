import React, { useState } from 'react';
import { brandColors } from '../../../data/colors.js';

const Input = ({ 
  type = 'text',
  label,
  placeholder,
  defaultValue,
  disabled = false,
  error,
  onChange,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputStyle = {
    padding: '0.5rem',
    border: '1px solid',
    borderRadius: '0.375rem',
    width: '100%',
    transition: 'all 0.2s ease-in-out',
    borderColor: error ? brandColors.ErrorRed : (isFocused ? brandColors.PrimaryAccent : brandColors.GrayLight),
    boxShadow: isFocused ? `0 0 0 2px ${brandColors.PrimaryAccent}40` : 'none',
    backgroundColor: disabled ? brandColors.GrayLight : brandColors.PrimaryBackground,
    color: brandColors.PrimaryText,
    cursor: disabled ? 'not-allowed' : 'text',
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
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={inputStyle}
        {...props}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
};

export default Input;
