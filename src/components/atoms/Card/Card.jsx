import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { spacing } from '../../../data/spacing.js';

const Card = ({ 
  children,
  variant = 'default',
  padding = 'lg',
  shadow = 'lg',
  className = '',
  style = {},
  ...props 
}) => {
  // Map variant to background color
  const getVariantStyle = (variant) => {
    const variantMap = {
      default: { backgroundColor: brandColors.SecondaryBackground },
      primary: { backgroundColor: brandColors.PrimaryBackground },
      white: { backgroundColor: '#ffffff' },
    };
    return variantMap[variant] || variantMap.default;
  };

  // Map padding to spacing values
  const getPaddingStyle = (padding) => {
    const paddingMap = {
      none: { padding: '0' },
      sm: { padding: spacing.sm },
      md: { padding: spacing.md },
      lg: { padding: spacing.lg },
      xl: { padding: spacing.xl },
    };
    return paddingMap[padding] || paddingMap.lg;
  };

  // Map shadow to CSS classes
  const getShadowClass = (shadow) => {
    const shadowMap = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    };
    return shadowMap[shadow] || shadowMap.lg;
  };

  const baseStyle = {
    borderRadius: '0.5rem',
    border: `1px solid ${brandColors.GrayLight}`,
    ...getVariantStyle(variant),
    ...getPaddingStyle(padding),
    ...style,
  };

  const combinedClassName = `${getShadowClass(shadow)} ${className}`.trim();

  return (
    <div 
      className={combinedClassName}
      style={baseStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
