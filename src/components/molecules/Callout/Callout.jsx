import React from 'react';
import { brandColors } from '../../../data/colors.js';
import Icon from '../../atoms/Icon/Icon.jsx';
import Heading from '../../atoms/Heading/Heading.jsx';
import Text from '../../atoms/Text/Text.jsx';

// Helper to convert hex to rgba - keeping existing functionality
const hexToRgba = (hex, alpha = 1) => {
    if (!hex) return `rgba(0,0,0,${alpha})`;
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Callout = ({ 
  type = 'info', 
  title, 
  children,
  className = '',
  style = {},
  ...props 
}) => {
  // Token audit: All colors sourced from existing brandColors tokens
  const typeStyles = {
    info: {
      container: {
        backgroundColor: hexToRgba(brandColors.InfoBlueLight, 0.3),
        borderColor: hexToRgba(brandColors.InfoBlue, 0.5),
      },
      iconColor: brandColors.SecondaryAccent,
      titleColor: brandColors.SecondaryAccent,
      textColor: hexToRgba(brandColors.PrimaryText, 0.7),
    },
    success: {
      container: {
        backgroundColor: hexToRgba(brandColors.SemanticSuccessGreenLight, 0.3),
        borderColor: hexToRgba(brandColors.SemanticSuccessGreen, 0.5),
      },
      iconColor: brandColors.SemanticSuccessGreen,
      titleColor: brandColors.SemanticSuccessGreen,
      textColor: hexToRgba(brandColors.PrimaryText, 0.7),
    },
    warning: {
      container: {
        backgroundColor: hexToRgba(brandColors.WarningYellowLight, 0.3),
        borderColor: hexToRgba(brandColors.WarningYellow, 0.5),
      },
      iconColor: brandColors.WarningYellow,
      titleColor: '#e5a000', // Using specified darker yellow for contrast (existing pattern)
      textColor: hexToRgba(brandColors.PrimaryText, 0.7),
    },
    danger: {
      container: {
        backgroundColor: hexToRgba(brandColors.ErrorRedLight, 0.3),
        borderColor: hexToRgba(brandColors.ErrorRed, 0.5),
      },
      iconColor: brandColors.ErrorRed,
      titleColor: brandColors.ErrorRed,
      textColor: hexToRgba(brandColors.PrimaryText, 0.7),
    },
    usage: {
      container: {
        backgroundColor: hexToRgba(brandColors.NeutralGrayLight, 0.3),
        borderColor: hexToRgba(brandColors.NeutralGray, 0.5),
      },
      iconColor: brandColors.NeutralGray,
      titleColor: brandColors.NeutralGray,
      textColor: hexToRgba(brandColors.PrimaryText, 0.7),
    },
  };

  const styles = typeStyles[type] || typeStyles.info;

  const containerStyle = {
    width: '100%',
    padding: '1.5rem', // p-6
    transition: 'all 300ms ease-in-out',
    transform: 'scale(1)',
    backdropFilter: 'blur(12px)',
    borderRadius: '1rem', // rounded-2xl
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem', // space-x-4
    border: '1px solid',
    cursor: 'default',
    ...styles.container,
    ...style,
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.02)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div 
      className={className}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div style={{ flexShrink: 0 }}>
        <Icon 
          name={type} 
          size="md" 
          color={styles.iconColor}
        />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Heading 
          level={3} 
          style={{ 
            color: styles.titleColor,
            fontWeight: 'bold',
            fontSize: '1.125rem', // text-lg
            marginBottom: '0.25rem'
          }}
        >
          {title}
        </Heading>
        <Text 
          style={{ 
            color: styles.textColor,
            fontSize: '0.875rem' // text-sm
          }}
        >
          {children}
        </Text>
      </div>
    </div>
  );
};

export default Callout;
