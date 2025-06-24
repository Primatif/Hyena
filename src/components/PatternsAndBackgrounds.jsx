import React from 'react';
import { brandColors } from '../data/colors.js';
import { typography } from '../data/typography.js';
import { patterns, patternSizes } from '../data/patterns.js';
import ExampleSection from './ExampleSection.jsx';
import { WithSnippet } from './WithSnippet.jsx';

const PatternsAndBackgrounds = () => {
    const snippets = {
        main: (
            <ul>
                <li><strong>Purpose:</strong> Provides a flexible, token-driven system for generating background patterns.</li>
                <li><strong>API:</strong>
                    <ul>
                        <li><code>patterns</code>: An object of predefined pattern variations (e.g., <code>patterns.subtle</code>, <code>patterns.ocean</code>).</li>
                        <li><code>patternSizes</code>: An object of predefined sizes (e.g., <code>patternSizes.small</code>, <code>patternSizes.medium</code>).</li>
                    </ul>
                </li>
                <li><strong>Implementation:</strong> Combine a pattern from <code>patterns</code> with a size from <code>patternSizes</code> for consistent, branded backgrounds.</li>
            </ul>
        ),
        variations: (
            <ul>
                <li><strong>Purpose:</strong> To provide visually distinct, balanced background textures using our brand color palette.</li>
                <li><strong>Variations Available:</strong>
                    <ul>
                        <li><code>patterns.subtle</code>: Light and gentle (white/gray)</li>
                        <li><code>patterns.ocean</code>: Cool and professional (blue tones)</li>
                        <li><code>patterns.sand</code>: Warm and earthy (beige/gold)</li>
                        <li><code>patterns.mint</code>: Fresh and natural (mint/teal)</li>
                        <li><code>patterns.sunset</code>: Warm and energetic (amber/orange)</li>
                        <li><code>patterns.stone</code>: Neutral and sophisticated (stone/charcoal)</li>
                        <li><code>patterns.copper</code>: Rich and warm (tan/copper)</li>
                        <li><code>patterns.forest</code>: Deep and grounded (olive/slate)</li>
                    </ul>
                </li>
                <li><strong>Usage:</strong> Each variation uses carefully selected color pairs from our brand palette to create balanced, harmonious patterns.</li>
            </ul>
        ),
    };

    return (
        <ExampleSection
            title="Patterns & Backgrounds"
            commentary="Our pattern system offers 8 distinct variations, each using carefully balanced color pairs from our brand palette. Use different sizes to control visual impact."
        >
            <div className="space-y-8">
                <WithSnippet snippet={snippets.main}>
                    <h4 style={{...typography.h4, color: brandColors.PrimaryText, marginBottom: '1rem'}}>Subtle Pattern (Sized Variants)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="h-40 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.subtle, backgroundSize: patternSizes.small }}>
                            <span className="bg-white/80 px-2 py-1 rounded text-sm">Small</span>
                        </div>
                        <div className="h-40 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.subtle, backgroundSize: patternSizes.medium }}>
                            <span className="bg-white/80 px-2 py-1 rounded text-sm">Medium</span>
                        </div>
                        <div className="h-40 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.subtle, backgroundSize: patternSizes.large }}>
                            <span className="bg-white/80 px-2 py-1 rounded text-sm">Large</span>
                        </div>
                    </div>
                </WithSnippet>

                <WithSnippet snippet={snippets.variations}>
                    <h4 style={{...typography.h4, color: brandColors.PrimaryText, marginBottom: '1rem'}}>Pattern Variations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="h-32 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.subtle, backgroundSize: patternSizes.medium }}>
                            <span className="bg-white/80 px-2 py-1 rounded text-xs">Subtle</span>
                        </div>
                        <div className="h-32 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.ocean, backgroundSize: patternSizes.medium }}>
                            <span className="bg-white/80 px-2 py-1 rounded text-xs">Ocean</span>
                        </div>
                        <div className="h-32 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.sand, backgroundSize: patternSizes.medium }}>
                            <span className="bg-white/80 px-2 py-1 rounded text-xs">Sand</span>
                        </div>
                        <div className="h-32 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.mint, backgroundSize: patternSizes.medium }}>
                            <span className="bg-white/80 px-2 py-1 rounded text-xs">Mint</span>
                        </div>
                        <div className="h-32 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.sunset, backgroundSize: patternSizes.medium }}>
                            <span className="bg-black/50 px-2 py-1 rounded text-xs text-white">Sunset</span>
                        </div>
                        <div className="h-32 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.stone, backgroundSize: patternSizes.medium }}>
                            <span className="bg-white/80 px-2 py-1 rounded text-xs">Stone</span>
                        </div>
                        <div className="h-32 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.copper, backgroundSize: patternSizes.medium }}>
                            <span className="bg-black/50 px-2 py-1 rounded text-xs text-white">Copper</span>
                        </div>
                        <div className="h-32 rounded-lg flex items-center justify-center" style={{ backgroundImage: patterns.forest, backgroundSize: patternSizes.medium }}>
                            <span className="bg-white/80 px-2 py-1 rounded text-xs">Forest</span>
                        </div>
                    </div>
                </WithSnippet>
            </div>
        </ExampleSection>
    );
};

export default PatternsAndBackgrounds;
