import React from 'react';
import { brandColors } from '../data/colors.js';
import { typography } from '../data/typography.js';
import ExampleSection from './ExampleSection.jsx';

const HeadersAndFooters = () => (
    <ExampleSection 
        title="3. Headers & Footers" 
        commentary="These components bookend our documents, providing a consistent brand frame. The header is clean and professional, while the footer offers essential contact information in a compact, unobtrusive manner."
    >
        <p className="mb-4" style={{ color: brandColors.PrimaryText }}>Headers and Footers provide consistent branding and navigation across all documents.</p>
        <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">Standard Header</h4>
            <div className="p-4 flex justify-between items-center rounded-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                <div className="font-bold text-2xl" style={{ ...typography.headerLogo, color: brandColors.PrimaryText }}>PRIMATIF</div>
                <div className="text-sm" style={{color: brandColors.GrayMid}}>Document Title</div>
            </div>
        </div>
         <div>
            <h4 className="font-semibold text-lg mb-2">Standard Footer</h4>
            <div className="p-4 text-center rounded-lg" style={{backgroundColor: brandColors.GrayDark, color: brandColors.PrimaryBackground}}>
                <div className="font-bold text-lg" style={{ ...typography.footerLogo }}>PRIMATIF</div>
                <p className="text-xs mt-1" style={{color: brandColors.GrayLight}}> 2025 Primatif | hello@primatif.com</p>
            </div>
        </div>
    </ExampleSection>
);

export default HeadersAndFooters;
