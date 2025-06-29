import React from 'react';
import PropTypes from 'prop-types';
import { brandColors } from '../../../data/colors.js';

export const Image = ({ 
    src, 
    alt, 
    className = '', 
    variant = 'default',
    loading = 'lazy',
    style = {},
    ...props 
}) => {
    // Define variant styles using centralized tokens
    const variantStyles = {
        default: {
            borderRadius: '8px',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        },
        rounded: {
            borderRadius: '12px',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        },
        circular: {
            borderRadius: '50%',
            aspectRatio: '1',
            objectFit: 'cover',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        },
        bordered: {
            borderRadius: '8px',
            border: `2px solid ${brandColors.GrayLight}`,
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        },
        elevated: {
            borderRadius: '8px',
            boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        }
    };

    // Combine styles
    const combinedStyle = {
        ...variantStyles[variant],
        ...style
    };

    // Handle hover effects for interactive variants
    const handleMouseEnter = (e) => {
        if (variant === 'elevated') {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        }
    };

    const handleMouseLeave = (e) => {
        if (variant === 'elevated') {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        }
    };

    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            className={className}
            style={combinedStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'rounded', 'circular', 'bordered', 'elevated']),
    loading: PropTypes.oneOf(['lazy', 'eager']),
    style: PropTypes.object,
};

Image.defaultProps = {
    className: '',
    variant: 'default',
    loading: 'lazy',
    style: {},
};
