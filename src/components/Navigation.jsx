import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brandColors } from '../data/colors.js';
import { typography } from '../data/typography.js';

const Navigation = () => {
    const location = useLocation();

    const navStyle = {
        backgroundColor: brandColors.PrimaryBackground,
        borderBottom: `2px solid ${brandColors.GrayLight}`,
        padding: '1rem 0',
        marginBottom: '2rem'
    };

    const navContainerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
    };

    const logoStyle = {
        ...typography.appLogo,
        color: brandColors.PrimaryText,
        textDecoration: 'none',
        fontWeight: 'bold'
    };

    const navLinkStyle = {
        ...typography.body,
        color: brandColors.GrayDark,
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        transition: 'all 0.2s ease'
    };

    const activeNavLinkStyle = {
        ...navLinkStyle,
        color: brandColors.PrimaryAccent,
        backgroundColor: brandColors.SecondaryBackground
    };

    return (
        <nav style={navStyle}>
            <div style={navContainerStyle}>
                <Link to="/" style={logoStyle}>
                    Hyena
                </Link>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link 
                        to="/" 
                        style={location.pathname === '/' ? activeNavLinkStyle : navLinkStyle}
                    >
                        Style Guide
                    </Link>
                    <Link 
                        to="/service-sheet" 
                        style={location.pathname === '/service-sheet' ? activeNavLinkStyle : navLinkStyle}
                    >
                        Service Sheet
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
