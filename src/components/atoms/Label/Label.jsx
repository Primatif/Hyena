import React from 'react';
import { typography, fontSizes, fontWeights } from '../../../data/typography.js';
import { brandColors } from '../../../data/colors.js';

const Label = ({ 
  children,
  htmlFor,
  color = brandColors.GrayDark,
  size = 'sm',
  weight = 'medium',
  required = false,
  className = '',
  style = {},
  ...props 
}) => {
  // Map size to font size
  const getSizeStyle = (size) => {
    const sizeMap = {
      xs: { fontSize: fontSizes.xs },
      sm: { fontSize: fontSizes.sm },
      base: { fontSize: fontSizes.base },
      lg: { fontSize: fontSizes.lg },
    };
    return sizeMap[size] || sizeMap.sm;
  };

  // Map weight to font weight
  const getWeightStyle = (weight) => {
    const weightMap = {
      regular: { fontWeight: fontWeights.regular },
      medium: { fontWeight: '500' },
      bold: { fontWeight: fontWeights.bold },
    };
    return weightMap[weight] || weightMap.medium;
  };

  const baseStyle = {
    fontFamily: typography.body.fontFamily,
    display: 'block',
    marginBottom: '0.25rem',
    color,
    ...getSizeStyle(size),
    ...getWeightStyle(weight),
    ...style,
  };

  return (
    <label 
      htmlFor={htmlFor}
      className={className}
      style={baseStyle}
      {...props}
    >
      {children}
      {required && <span style={{ color: brandColors.ErrorRed, marginLeft: '2px' }}>*</span>}
    </label>
  );
};

export default Label;
