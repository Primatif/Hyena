import React from 'react';
import Heading from '../../atoms/Heading/Heading.jsx';
import Text from '../../atoms/Text/Text.jsx';
import { brandColors } from '../../../data/colors.js';
import { patterns, patternSizes } from '../../../data/patterns.js';

const CoverPage = ({ 
    title = "PRIMATIF",
    subtitle = "Services Overview",
    description = "This document provides a comprehensive overview of the services offered by Primatif. We partner with organizations of all sizes to provide expert consulting, engineering, and strategic guidance—empowering them to navigate their technological landscape with confidence and drive growth through innovation.",
    verticals = ["TECHNOLOGY", "EDUCATION", "ENTERTAINMENT"],
    contact = "hello@primatif.com",
    footerText = "Document valid as of June 2025",
    className = ""
}) => (
    <div className={`page-container cover-page ${className}`}>
        <div className="cover-content">
            <div className="decorative-element" style={{ 
                backgroundColor: brandColors.PrimaryAccent,
                backgroundImage: patterns.accent,
                backgroundSize: patternSizes.medium
            }} />
            
            <div className="text-left">
                <Heading level={1} variant="hero" style={{ color: brandColors.PrimaryText }}>
                    {title}
                </Heading>
                <Text variant="subtitle" className="mt-2" style={{ color: brandColors.SecondaryText }}>
                    {subtitle}
                </Text>
            </div>

            <div className="text-left my-auto">
                <Text variant="body" className="max-w-md leading-relaxed" style={{ color: brandColors.PrimaryText }}>
                    {description}
                </Text>
            </div>

            <div className="text-left">
                <Text variant="subtitle" className="leading-tight" style={{ color: brandColors.PrimaryAccent }}>
                    {verticals.map((vertical, index) => (
                        <React.Fragment key={vertical}>
                            {vertical}
                            {index < verticals.length - 1 && <br/>}
                        </React.Fragment>
                    ))}
                </Text>
            </div>
        </div>
        <div className="cover-footer">
            <Text variant="body" className="text-sm" style={{ color: brandColors.SecondaryText }}>
                {contact}
            </Text>
            <Text variant="body" className="text-sm" style={{ color: brandColors.SecondaryText }}>
                {footerText}
            </Text>
        </div>
    </div>
);

export default CoverPage;
