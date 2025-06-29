import React from 'react';
import Heading from '../../atoms/Heading/Heading.jsx';
import Text from '../../atoms/Text/Text.jsx';
import Card from '../../atoms/Card/Card.jsx';
import { brandColors } from '../../../data/colors.js';

const ExperienceSection = ({ 
    title = "Experience & Collaboration",
    corporateTitle = "Corporate Experience",
    clientTitle = "Supported Businesses & Organizations",
    corporateExperience = [],
    clientExperience = [],
    layout = "side-by-side", // "side-by-side" | "stacked"
    className = ""
}) => (
    <div className={`h-full flex flex-col justify-center ${className}`}>
        <Heading level={2} variant="display" className="text-center mb-12" style={{ color: brandColors.PrimaryText }}>
            {title}
        </Heading>
        <div className={`flex ${layout === 'side-by-side' ? 'flex-col md:flex-row' : 'flex-col'} justify-around text-center gap-8`}>
            <Card variant="default" className="flex-1">
                <Heading level={3} variant="section" className="uppercase tracking-wider mb-4" style={{ color: brandColors.PrimaryAccent }}>
                    {corporateTitle}
                </Heading>
                <ul className="space-y-2">
                    {corporateExperience.map(item => (
                        <li key={item.key || item.name}>
                            <Text variant="body" style={{ color: brandColors.PrimaryText }}>
                                {item.name}
                            </Text>
                        </li>
                    ))}
                </ul>
            </Card>
            <Card variant="default" className="flex-1">
                <Heading level={3} variant="section" className="uppercase tracking-wider mb-4" style={{ color: brandColors.PrimaryAccent }}>
                    {clientTitle}
                </Heading>
                <ul className="space-y-2">
                    {clientExperience.map(item => (
                        <li key={item.key || item.name}>
                            <Text variant="body" style={{ color: brandColors.PrimaryText }}>
                                {item.name}
                            </Text>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    </div>
);

export default ExperienceSection;
