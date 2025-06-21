import React from 'react';
import { brandColors } from '../data/colors.js';
import { checkeredPatternSmall, checkeredPatternMedium, checkeredPatternLarge } from '../data/patterns.js';
import ExampleSection from './ExampleSection.jsx';
import { WithSnippet } from './WithSnippet.jsx';

const PatternsAndBackgrounds = () => {
    const snippets = {
        small: (
            <ul>
                <li><strong>Purpose:</strong> A fine, subtle texture for small components like cards or sidebars.</li>
                <li><strong>Styling:</strong>
                    <ul>
                        <li>Background Image: <code>checkeredPatternSmall</code></li>
                        <li>Background Size: <code>10px 10px</code></li>
                    </ul>
                </li>
                <li><strong>Implementation:</strong> The pattern is created using a URL-encoded SVG. This technique embeds the SVG data directly into the CSS <code>background-image</code> property, avoiding the need for external image files and making it highly efficient and scalable.</li>
            </ul>
        ),
        medium: (
            <ul>
                <li><strong>Purpose:</strong> A general-purpose texture for larger content areas.</li>
                <li><strong>Styling:</strong>
                    <ul>
                        <li>Background Image: <code>checkeredPatternMedium</code></li>
                        <li>Background Size: <code>25px 25px</code></li>
                    </ul>
                </li>
                <li><strong>Implementation:</strong> The pattern is created using a URL-encoded SVG. This technique embeds the SVG data directly into the CSS <code>background-image</code> property, avoiding the need for external image files and making it highly efficient and scalable.</li>
            </ul>
        ),
        large: (
            <ul>
                <li><strong>Purpose:</strong> A bold pattern for large hero sections or page backgrounds.</li>
                <li><strong>Styling:</strong>
                    <ul>
                        <li>Background Image: <code>checkeredPatternLarge</code></li>
                        <li>Background Size: <code>50px 50px</code></li>
                    </ul>
                </li>
                <li><strong>Implementation:</strong> The pattern is created using a URL-encoded SVG. This technique embeds the SVG data directly into the CSS <code>background-image</code> property, avoiding the need for external image files and making it highly efficient and scalable.</li>
            </ul>
        ),
    };

    return (
    <ExampleSection 
        title="Patterns & Backgrounds" 
        commentary="Subtle patterns can add texture and visual interest to otherwise plain backgrounds. The different sizes allow for flexibility, from a fine texture on a small card to a more noticeable pattern on a large hero section."
    >
        <p className="mb-4" style={{ color: brandColors.PrimaryText }}>A subtle checkered pattern can be used as an overlay on light backgrounds to add texture. It is available in multiple sizes for different visual effects.</p>
        <div className="space-y-8">
            <WithSnippet snippet={snippets.small}>
                <div className="h-48 rounded-lg border border-gray-300 flex items-center justify-center text-sm flex-col" style={{ backgroundImage: checkeredPatternSmall, backgroundSize: '10px 10px' }}>
                    <span className="bg-white/80 px-2 py-1 rounded">Small Pattern</span>
                </div>
            </WithSnippet>
            <WithSnippet snippet={snippets.medium}>
                <div className="h-48 rounded-lg border border-gray-300 flex items-center justify-center text-sm flex-col" style={{ backgroundImage: checkeredPatternMedium, backgroundSize: '25px 25px' }}>
                    <span className="bg-white/80 px-2 py-1 rounded">Medium Pattern</span>
                </div>
            </WithSnippet>
            <WithSnippet snippet={snippets.large}>
                <div className="h-48 rounded-lg border border-gray-300 flex items-center justify-center text-sm flex-col" style={{ backgroundImage: checkeredPatternLarge, backgroundSize: '50px 50px' }}>
                    <span className="bg-white/80 px-2 py-1 rounded">Large Pattern</span>
                </div>
            </WithSnippet>
        </div>
    </ExampleSection>
);
};

export default PatternsAndBackgrounds;
