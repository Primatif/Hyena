import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { typography, fontSizes } from '../../../data/typography.js';

const Badge = ({ 
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  style = {},
  ...props 
}) => {
  // Map variant to color schemes
  const getVariantStyle = (variant) => {
    const variantMap = {
      default: { 
        backgroundColor: brandColors.GrayLight, 
        color: brandColors.GrayDark 
      },
      success: { 
        backgroundColor: brandColors.SemanticSuccessGreenLight, 
        color: brandColors.SemanticSuccessGreen 
      },
      warning: { 
        backgroundColor: brandColors.WarningYellow, 
        color: brandColors.PrimaryText 
      },
      error: { 
        backgroundColor: brandColors.PrimaryAccent, 
        color: brandColors.PrimaryBackground 
      },
      info: { 
        backgroundColor: brandColors.InfoBlueLight, 
        color: brandColors.GrayDark 
      },
      primary: { 
        backgroundColor: brandColors.PrimaryAccent, 
        color: brandColors.PrimaryBackground 
      },
      secondary: { 
        backgroundColor: brandColors.SecondaryAccent, 
        color: brandColors.PrimaryBackground 
      },
    };
    return variantMap[variant] || variantMap.default;
  };

  // Map size to font size and padding
  const getSizeStyle = (size) => {
    const sizeMap = {
      xs: { 
        fontSize: fontSizes.xs, 
        padding: '0.125rem 0.375rem' 
      },
      sm: { 
        fontSize: fontSizes.xs, 
        padding: '0.25rem 0.5rem' 
      },
      md: { 
        fontSize: fontSizes.sm, 
        padding: '0.375rem 0.75rem' 
      },
      lg: { 
        fontSize: fontSizes.base, 
        padding: '0.5rem 1rem' 
      },
    };
    return sizeMap[size] || sizeMap.sm;
  };

  const baseStyle = {
    display: 'inline-block',
    borderRadius: '9999px', // rounded-full
    fontWeight: '600',
    lineHeight: '1',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    ...getSizeStyle(size),
    ...getVariantStyle(variant),
    ...style,
  };

  return (
    <span 
      className={className}
      style={baseStyle}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
