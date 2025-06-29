import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { typography } from '../../../data/typography.js';
import { spacing } from '../../../data/spacing.js';

const Button = ({ 
  variant = 'primary', 
  children, 
  disabled = false, 
  onClick, 
  ...props 
}) => {
  const baseButtonStyle = {
    ...typography.button,
    padding: `${spacing.sm} ${spacing.lg}`,
    borderRadius: '0.5rem',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
  };

  const getVariantStyle = () => {
    if (disabled) {
      return {
        ...baseButtonStyle,
        backgroundColor: brandColors.GrayLight,
        color: brandColors.GrayMid,
      };
    }

    switch (variant) {
      case 'primary':
        return {
          ...baseButtonStyle,
          backgroundColor: brandColors.SecondaryAccent,
          color: brandColors.PrimaryBackground,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        };
      case 'secondary':
        return {
          ...baseButtonStyle,
          backgroundColor: 'transparent',
          color: brandColors.PrimaryText,
          border: `1px solid ${brandColors.GrayMid}`,
        };
      case 'destructive':
        return {
          ...baseButtonStyle,
          backgroundColor: brandColors.PrimaryAccent,
          color: brandColors.PrimaryBackground,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        };
      default:
        return baseButtonStyle;
    }
  };

  return (
    <button
      style={getVariantStyle()}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
