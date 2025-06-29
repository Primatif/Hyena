import React from 'react';
import { typography } from '../../../data/typography.js';
import { brandColors } from '../../../data/colors.js';

const Text = ({ 
  variant = 'body',
  size,
  children,
  color,
  className = '',
  style = {},
  as = 'p',
  ...props 
}) => {
  // Map variant to typography style and color
  const getVariantStyle = (variant) => {
    const styleMap = {
      body: {
        style: typography.body,
        color: brandColors.PrimaryText,
      },
      subtitle: {
        style: typography.subtitle,
        color: brandColors.PrimaryText,
      },
      code: {
        style: typography.code,
        color: brandColors.PrimaryText,
      },
      caption: {
        style: {
          fontFamily: typography.body.fontFamily,
          fontSize: '0.75rem', // smaller than body
          fontWeight: typography.body.fontWeight,
        },
        color: brandColors.GrayDark,
      },
      muted: {
        style: typography.body,
        color: brandColors.GrayMid,
      },
    };
    return styleMap[variant] || styleMap.body;
  };

  // Map size to font size if provided
  const getSizeStyle = (size) => {
    if (!size) return {};
    const sizeMap = {
      xs: { fontSize: '0.75rem' },
      sm: { fontSize: '0.875rem' },
      md: { fontSize: '1rem' },
      lg: { fontSize: '1.125rem' },
      xl: { fontSize: '1.25rem' },
    };
    return sizeMap[size] || {};
  };

  const variantConfig = getVariantStyle(variant);
  const sizeStyle = getSizeStyle(size);
  
  const baseStyle = {
    ...variantConfig.style,
    ...sizeStyle,
    color: color || variantConfig.color,
    margin: 0, // Reset default margins for better component composition
    ...style,
  };

  const Component = as;

  return (
    <Component 
      className={className}
      style={baseStyle}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
