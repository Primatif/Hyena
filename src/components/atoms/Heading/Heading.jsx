import React from 'react';
import { typography } from '../../../data/typography.js';
import { brandColors } from '../../../data/colors.js';

const Heading = ({ 
  level = 1,
  children,
  color = brandColors.PrimaryText,
  className = '',
  style = {},
  ...props 
}) => {
  // Map level to typography style
  const getTypographyStyle = (level) => {
    const styleMap = {
      1: typography.h1,
      2: typography.h2,
      3: typography.h3,
      4: typography.h4,
      5: typography.h5,
      6: typography.h6,
    };
    return styleMap[level] || typography.h1;
  };

  const baseStyle = {
    ...getTypographyStyle(level),
    color,
    margin: 0, // Reset default margins for better component composition
    ...style,
  };

  const HeadingTag = `h${level}`;

  return (
    <HeadingTag 
      className={className}
      style={baseStyle}
      {...props}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
