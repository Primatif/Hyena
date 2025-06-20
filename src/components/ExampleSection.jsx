import React from 'react';
import { typography } from '../data/typography.js';
import { brandColors } from '../data/colors.js';

const ExampleSection = ({ title, children, commentary }) => (
    <div className="my-6 p-4 rounded-lg" style={{ backgroundColor: brandColors.PrimaryBackground, border: `1px solid ${brandColors.SecondaryBackground}` }}>
        <h2 className="text-3xl mb-2 pb-2 border-b-2" style={{ ...typography.sectionHeader, color: brandColors.PrimaryText, borderColor: brandColors.GrayLight }}>{title}</h2>
        {commentary && <p className="text-sm italic mb-4" style={{color: brandColors.GrayDark}}>{commentary}</p>}
        {children}
    </div>
);

export default ExampleSection;
