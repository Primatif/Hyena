import React from 'react';
import ExampleSection from './ExampleSection.jsx';
import ColorDisplayTable from './ColorDisplayTable.jsx';
import { brandColorsData, functionalTonesData, semanticColorsData, referenceColorsData } from '../data/colorData.js';

const ColorPalette = () => (
    <ExampleSection 
        title="Color Palette" 
        commentary="Our color palette balances professionalism with innovation. The primary colors are bold and confident, while functional tones ensure clarity and readability. Semantic colors provide intuitive user feedback without being distracting."
    >
        <ColorDisplayTable 
            title="Brand Colors"
            description="The brand colors form the core of our visual identity. They are used for key highlights, important information, and to create a dynamic and recognizable presence."
            colors={brandColorsData}
        />
        <ColorDisplayTable 
            title="Reference Colors"
            description="Colors extracted from our curated reference images."
            colors={referenceColorsData}
        />
        <ColorDisplayTable
            title="Functional Tones"
            description="The functional tones provide the neutral foundation for our documents, ensuring text is readable and the layout is clean and structured."
            colors={functionalTonesData}
        />
        <ColorDisplayTable
            title="Semantic Colors"
            description="Recommended for use in forms, alerts, or any element meant to communicate a state. Color should never be the only means used to convey state information; it must always be accompanied by text or an icon."
            colors={semanticColorsData}
        />
    </ExampleSection>
);

export default ColorPalette;
