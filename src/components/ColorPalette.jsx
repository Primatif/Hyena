import React from 'react';
import ExampleSection from './ExampleSection.jsx';
import ColorDisplayTable from './ColorDisplayTable.jsx';
import { Callout } from './Callouts.jsx';
import { brandColorsData, functionalTonesData, semanticColorsData, referenceColorsData } from '../data/colorData.js';

const ColorPalette = () => (
    <ExampleSection 
        title="Color Palette" 
        commentary={
            <>
                <p className="mb-4">
                    The Hyena color system is built on a strategic hierarchy that balances brand consistency with creative expression. 
                    Our approach uses <strong>Brand Colors</strong> as anchoring elements for continuity, while <strong>Reference Colors</strong> 
                    provide the artistic foundation for unique thematic expression.
                </p>
                <Callout type="usage" title="Usage Philosophy">
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Reference Colors</strong> should define the majority of any layout, creating distinctive visual character</li>
                        <li><strong>Brand Colors</strong> anchor the design, ensuring recognition and consistency across all materials</li>
                        <li><strong>Functional Tones</strong> provide neutral structure and ensure optimal readability</li>
                        <li><strong>Semantic Colors</strong> communicate states and actions with universal clarity</li>
                    </ul>
                </Callout>
                <p className="text-sm mt-4" style={{ color: '#6c757d' }}>
                    This strategic approach allows for creative flexibility while maintaining the cohesive brand identity 
                    essential for professional communications and AI-generated content consistency.
                </p>
            </>
        }
    >
        <ColorDisplayTable 
            title="Brand Colors"
            description={
                <>
                    <p className="mb-2">
                        <strong>The foundational anchor colors</strong> that maintain brand consistency across all variations of theming and documents. 
                        These colors serve as the primary identity markers and should be used strategically to create continuity and recognition.
                    </p>
                    <p className="text-sm font-medium" style={{ color: '#495057' }}>
                        <strong>Usage:</strong> Key highlights, call-to-action elements, headers, and brand touchpoints. 
                        Use sparingly but consistently to maintain visual hierarchy and brand recognition.
                    </p>
                </>
            }
            colors={brandColorsData}
        />
        <ColorDisplayTable 
            title="Reference Colors"
            description={
                <>
                    <p className="mb-2">
                        <strong>The creative expression palette</strong> that defines the unique artistic character of the Hyena brand. 
                        These earth-toned colors were curated from reference imagery to create sophisticated, organic visual experiences.
                    </p>
                    <p className="text-sm font-medium" style={{ color: '#495057' }}>
                        <strong>Usage:</strong> Primary layout colors, backgrounds, section dividers, and decorative elements. 
                        These should comprise the majority of your color choices, creating distinctive thematic expression while maintaining professional sophistication.
                    </p>
                </>
            }
            colors={referenceColorsData}
        />
        <ColorDisplayTable
            title="Functional Tones"
            description={
                <>
                    <p className="mb-2">
                        <strong>The structural foundation</strong> that ensures readability and clean organization. 
                        These neutral tones provide the essential framework for text hierarchy and content structure.
                    </p>
                    <p className="text-sm font-medium" style={{ color: '#495057' }}>
                        <strong>Usage:</strong> Body text, borders, subtle backgrounds, and organizational elements. 
                        Essential for maintaining legibility and creating clear information architecture.
                    </p>
                </>
            }
            colors={functionalTonesData}
        />
        <ColorDisplayTable
            title="Semantic Colors"
            description={
                <>
                    <p className="mb-2">
                        <strong>The communication system</strong> for conveying states, feedback, and user interactions. 
                        These colors provide intuitive meaning that transcends language barriers.
                    </p>
                    <p className="text-sm font-medium" style={{ color: '#495057' }}>
                        <strong>Usage:</strong> Success messages, error states, warnings, and informational callouts. 
                        Always pair with text or icons—never rely on color alone to convey critical information.
                    </p>
                </>
            }
            colors={semanticColorsData}
        />
    </ExampleSection>
);

export default ColorPalette;
