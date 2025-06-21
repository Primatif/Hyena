import React from 'react';
import { brandColors } from '../data/colors.js';
import { fonts, typography } from '../data/typography.js';
import ExampleSection from './ExampleSection.jsx';
import CodeBlock from './CodeBlock.jsx';
import TextColorUsage from './TextColorUsage.jsx';

const Typography = () => (
    <ExampleSection 
        title="Typography" 
        commentary="Typography is key to our brand voice. Bebas Neue provides a strong, modern feel for headlines, while Roboto ensures body text is highly legible and professional. Lato is used for subtitles and intro text to provide a clean, accessible feel that complements the primary fonts."
    >
        <p className="mb-4" style={{ color: brandColors.PrimaryText }}>We utilize a combination of fonts to establish a clear visual hierarchy and maintain brand consistency.</p>
        
        <h4 className="font-semibold text-lg mb-2">Primary & Logo Font</h4>
        <p style={{ ...typography.logo, color: brandColors.PrimaryText }}>PRIMATIF</p>
        <div className="text-sm mb-4" style={{ color: brandColors.PrimaryText }}>
            <strong style={{ color: brandColors.PrimaryAccent }}>Bebas Neue:</strong> Used for the "PRIMATIF" logo and major section headers.
            <CodeBlock>{`font-family: '${fonts.heading}';`}</CodeBlock>
        </div>
        
        <h4 className="font-semibold text-lg mt-6 mb-2">Headings</h4>
        <p style={{ ...typography.pageTitle, color: brandColors.PrimaryText }}>Heading 1 - Roboto Bold</p>
        <p style={{ ...typography.sectionTitle, color: brandColors.PrimaryText }}>Heading 2 - Roboto Bold</p>
        <p style={{ ...typography.subSectionTitle, color: brandColors.PrimaryText }}>Heading 3 - Roboto Bold</p>
        <CodeBlock>{`font-family: '${fonts.body}'; font-weight: 700;`}</CodeBlock>
        
        <h4 className="font-semibold text-lg mt-6 mb-2">Body & Subtitle Copy</h4>
        <p style={{ ...typography.subtitle, color: brandColors.GrayDark }}>This is Lato, used for subtitles and introductory text.</p>
        <p className="mt-2" style={{ ...typography.body, color: brandColors.PrimaryText }}>
            This is Roboto, our primary font for all paragraph text, ensuring readability and a clean, professional appearance.
        </p>
        <CodeBlock>{`font-family: '${fonts.subtitle}'; /* For subtitles */ \nfont-family: '${fonts.body}'; /* For body text */`}</CodeBlock>
        
        <TextColorUsage />
    </ExampleSection>
);

export default Typography;
