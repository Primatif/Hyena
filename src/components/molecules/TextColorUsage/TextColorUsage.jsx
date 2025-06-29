import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { ExampleSection } from '../ExampleSection/ExampleSection.jsx';
import { WithSnippet } from '../WithSnippet/WithSnippet.jsx';

// Helper component to keep the code DRY and consistent
const ColorSwatch = ({ color, tokenName, description, isBordered }) => (
  <div className="flex items-center mb-3">
    <div 
      className={`w-4 h-4 rounded-full mr-2 ${isBordered ? 'border' : ''}`}
      style={{ 
        backgroundColor: color, 
        borderColor: isBordered ? brandColors.GrayMid : 'transparent' 
      }}
    ></div>
    <p style={{ color: brandColors.PrimaryText }}>
      <b>{description}</b> (<code style={{ backgroundColor: brandColors.SecondaryBackground, color: brandColors.PrimaryText }} className="text-xs p-1 rounded">{tokenName}</code>)
    </p>
  </div>
);

const TextColorUsage = () => {
    const snippets = {
        textColor: (
            <ul>
                <li><strong>Primary Text (<code>{brandColors.PrimaryText}</code>):</strong> Used for all main headings and body copy. Mapped to the <code>PrimaryText</code> token.</li>
                <li><strong>Secondary Text (<code>{brandColors.GrayDark}</code>):</strong> Used for secondary information, metadata, or less important details. Mapped to the <code>GrayDark</code> token.</li>
                <li><strong>Tertiary/Hint Text (<code>{brandColors.GrayMid}</code>):</strong> Used for captions, input hints, or placeholder text. Mapped to the <code>GrayMid</code> token.</li>
                <li><strong>Disabled Text (<code>{brandColors.GrayMid}</code>):</strong> Used for text in disabled UI elements. Mapped to the <code>GrayMid</code> token.</li>
                <li><strong>Link Text (<code>{brandColors.PrimaryAccent}</code>):</strong> Used for all hyperlinks. Mapped to the <code>PrimaryAccent</code> token.</li>
            </ul>
        )
    };

    return (
        <ExampleSection 
            title="Text Color Usage" 
            commentary="Consistent text color usage is critical for readability and accessibility. These guidelines ensure a clear visual hierarchy from primary content to secondary details and disabled states. All colors are mapped to design tokens."
        >
            <WithSnippet snippet={snippets.textColor}>
                <div className="p-4 rounded-lg border" style={{ borderColor: brandColors.GrayLight }}>
                    <ColorSwatch 
                        color={brandColors.PrimaryText} 
                        tokenName="PrimaryText" 
                        description="Primary Text"
                    />
                    <ColorSwatch 
                        color={brandColors.GrayDark} 
                        tokenName="GrayDark"
                        description="Secondary Text"
                    />
                    <ColorSwatch 
                        color={brandColors.GrayMid} 
                        tokenName="GrayMid"
                        description="Tertiary/Hint Text"
                    />
                    <ColorSwatch 
                        color={brandColors.GrayMid} 
                        tokenName="GrayMid"
                        description="Disabled Text"
                        isBordered 
                    />
                    
                    <div className="pt-3 mt-3 border-t" style={{ borderColor: brandColors.GrayLight }}>
                        <h5 className="font-bold mb-2" style={{ color: brandColors.PrimaryText }}>Links</h5>
                        <div className="flex items-center">
                            <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: brandColors.PrimaryAccent }}></div>
                            <a href="#" style={{ color: brandColors.PrimaryAccent, textDecoration: 'underline' }}>
                                This is an example link.
                            </a>
                        </div>
                        <p className="text-sm mt-1" style={{ color: brandColors.GrayDark }}>
                            Links use <code style={{ backgroundColor: brandColors.SecondaryBackground, color: brandColors.PrimaryText }} className="text-xs p-1 rounded">PrimaryAccent</code> and maintain the same color on hover.
                        </p>
                    </div>
                </div>
            </WithSnippet>
        </ExampleSection>
    );
};

export default TextColorUsage;
