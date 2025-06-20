import React from 'react';
import { brandColors } from '../data/colors.js';
import { checkeredPatternSmall, checkeredPatternMedium, checkeredPatternLarge } from '../data/patterns.js';
import ExampleSection from './ExampleSection.jsx';

const PatternsAndBackgrounds = () => (
    <ExampleSection 
        title="5. Patterns & Backgrounds" 
        commentary="Subtle patterns can add texture and visual interest to otherwise plain backgrounds. The different sizes allow for flexibility, from a fine texture on a small card to a more noticeable pattern on a large hero section."
    >
        <p className="mb-4" style={{ color: brandColors.PrimaryText }}>A subtle checkered pattern can be used as an overlay on light backgrounds to add texture. It is available in multiple sizes for different visual effects.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-48 rounded-lg border border-gray-300 flex items-center justify-center text-sm flex-col" style={{ backgroundImage: checkeredPatternSmall, backgroundSize: '10px 10px' }}>
                <span className="bg-white/80 px-2 py-1 rounded">Small Pattern</span>
            </div>
             <div className="h-48 rounded-lg border border-gray-300 flex items-center justify-center text-sm flex-col" style={{ backgroundImage: checkeredPatternMedium, backgroundSize: '25px 25px' }}>
                <span className="bg-white/80 px-2 py-1 rounded">Medium Pattern</span>
            </div>
             <div className="h-48 rounded-lg border border-gray-300 flex items-center justify-center text-sm flex-col" style={{ backgroundImage: checkeredPatternLarge, backgroundSize: '50px 50px' }}>
                <span className="bg-white/80 px-2 py-1 rounded">Large Pattern</span>
            </div>
        </div>
    </ExampleSection>
);

export default PatternsAndBackgrounds;
