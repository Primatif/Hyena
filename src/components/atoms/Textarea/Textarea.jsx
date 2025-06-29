import React, { useState } from 'react';
import { brandColors } from '../../../data/colors.js';

const Textarea = ({ 
  label,
  placeholder,
  defaultValue,
  disabled = false,
  error,
  rows = 4,
  onChange,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const textareaStyle = {
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
    resize: 'vertical',
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
      <textarea
        rows={rows}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={textareaStyle}
        {...props}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
};

export default Textarea;
