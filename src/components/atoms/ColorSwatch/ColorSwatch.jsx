import React from 'react';
import { brandColors } from '../../../data/colors.js';

const ColorSwatch = ({ 
  color,
  size = 'md',
  showBorder = false,
  borderColor = brandColors.GrayLight,
  className = '',
  style = {},
  onClick = null,
  name = '',
  ...props 
}) => {
  // Map size to dimensions
  const getSizeStyle = (size) => {
    const sizeMap = {
      xs: { width: '1rem', height: '1rem' },        // 16px
      sm: { width: '1.25rem', height: '1.25rem' },  // 20px  
      md: { width: '2rem', height: '2rem' },        // 32px (h-8)
      lg: { width: '3rem', height: '3rem' },        // 48px
      xl: { width: '4rem', height: '4rem' },        // 64px
    };
    return sizeMap[size] || sizeMap.md;
  };

  const baseStyle = {
    backgroundColor: color,
    borderRadius: '0.375rem', // rounded
    border: showBorder ? `1px solid ${borderColor}` : 'none',
    cursor: onClick ? 'pointer' : 'default',
    ...getSizeStyle(size),
    ...style,
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e, { color, name });
    }
  };

  return (
    <div 
      className={className}
      style={baseStyle}
      onClick={handleClick}
      title={name || color}
      {...props}
    />
  );
};

export default ColorSwatch;
