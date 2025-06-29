import React from 'react';
import { brandColors } from '../../../data/colors.js';

const Icon = ({ 
  name,
  size = 'md',
  color = 'currentColor',
  className = '',
  style = {},
  ...props 
}) => {
  // Map size to dimensions
  const getSizeStyle = (size) => {
    const sizeMap = {
      xs: { width: '1rem', height: '1rem' },      // w-4 h-4
      sm: { width: '1.25rem', height: '1.25rem' }, // w-5 h-5
      md: { width: '1.5rem', height: '1.5rem' },   // w-6 h-6
      lg: { width: '2rem', height: '2rem' },       // w-8 h-8
      xl: { width: '2.5rem', height: '2.5rem' },   // w-10 h-10
    };
    return sizeMap[size] || sizeMap.md;
  };

  // Icon definitions
  const icons = {
    info: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    success: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    warning: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    ),
    danger: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    ),
    usage: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
    check: (
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    ),
    send: (
      <path d="M10.894 2.553a1 1 0 00-1.789 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    ),
    menu: (
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    ),
    circle: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    ),
    chevron: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    ),
  };

  const iconPath = icons[name];
  
  if (!iconPath) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const baseStyle = {
    ...getSizeStyle(size),
    ...style,
  };

  // Determine if this should be a filled or stroked icon
  const isStrokeIcon = ['info', 'success', 'warning', 'danger', 'usage', 'chevron'].includes(name);

  return (
    <svg 
      className={className}
      style={baseStyle}
      fill={isStrokeIcon ? 'none' : color}
      stroke={isStrokeIcon ? color : 'none'}
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {iconPath}
    </svg>
  );
};

export default Icon;
