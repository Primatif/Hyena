import React from 'react';
import { brandColors } from '../data/colors.js';
import ExampleSection from './ExampleSection.jsx';
import { WithSnippet } from './WithSnippet.jsx';

const TextColorUsage = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const snippets = {
        textColor: (
            <ul>
                <li><strong>Primary Text (<code>#E6F1FF</code>):</strong> Used for all main headings and body copy.</li>
                <li><strong>Secondary Text (<code>#1F2937</code>):</strong> Used for secondary information, metadata, or less important details.</li>
                <li><strong>Tertiary/Hint Text (<code>#6B7280</code>):</strong> Used for captions, input hints, or placeholder text.</li>
                <li><strong>Disabled Text (<code>#9CA3AF</code>):</strong> Used for text in disabled UI elements.</li>
                <li><strong>Link Text (<code>#D32F2F</code>):</strong> Used for all hyperlinks. Underlined by default. Color does not change on hover.</li>
            </ul>
        )
    };

    return (
        <ExampleSection 
            title="Text Color Usage" 
            commentary="Consistent text color usage is critical for readability and accessibility. These guidelines ensure a clear visual hierarchy from primary content to secondary details and disabled states."
        >
            <WithSnippet snippet={snippets.textColor}>
                <div className="p-4 rounded-lg border" style={{ borderColor: brandColors.GrayLight}}>
                    <div className="mb-3">
                        <div className="flex items-center mb-1">
                            <div className="w-4 h-4 rounded-full mr-2" style={{backgroundColor: brandColors.PrimaryText}}></div>
                            <p style={{color: brandColors.PrimaryText}}><b>Primary Text</b> (<code className="text-xs bg-gray-200 p-1 rounded">PrimaryText</code>) - Use for all headings and body copy.</p>
                        </div>
                    </div>
                    <div className="mb-3">
                         <div className="flex items-center mb-1">
                            <div className="w-4 h-4 rounded-full mr-2" style={{backgroundColor: brandColors.GrayDark}}></div>
                            <p style={{color: brandColors.GrayDark}}><b>Secondary Text</b> (<code className="text-xs bg-gray-200 p-1 rounded">GrayDark</code>) - Use for secondary information or less important details.</p>
                        </div>
                    </div>
                     <div className="mb-3">
                         <div className="flex items-center mb-1">
                            <div className="w-4 h-4 rounded-full mr-2" style={{backgroundColor: brandColors.GrayMid}}></div>
                            <p style={{color: brandColors.GrayMid}}><b>Tertiary/Hint Text</b> (<code className="text-xs bg-gray-200 p-1 rounded">GrayMid</code>) - Use for captions, hints, or placeholder text.</p>
                        </div>
                    </div>
                     <div className="mb-3">
                         <div className="flex items-center mb-1">
                            <div className="w-4 h-4 rounded-full mr-2 border" style={{backgroundColor: brandColors.DisabledGray, borderColor: brandColors.GrayMid}}></div>
                            <p style={{color: brandColors.GrayMid}}><b>Disabled Text</b> (<code className="text-xs bg-gray-200 p-1 rounded">DisabledGray</code>) - Use for disabled UI elements.</p>
                        </div>
                    </div>
                     <div className="pt-3 mt-3 border-t" style={{borderColor: brandColors.GrayLight}}>
                         <h5 className="font-bold mb-2" style={{color: brandColors.PrimaryText}}>Links</h5>
                         <div className="flex items-center">
                            <div className="w-4 h-4 rounded-full mr-2" style={{backgroundColor: brandColors.PrimaryAccent}}></div>
                            <a href="#" 
                               style={{color: brandColors.PrimaryAccent, textDecoration: 'underline'}}
                               onMouseEnter={() => setIsHovered(true)}
                               onMouseLeave={() => setIsHovered(false)}
                            >
                                This is an example link.
                            </a>
                        </div>
                        <p className="text-sm mt-1" style={{color: brandColors.GrayDark}}>
                            Links use <code className="text-xs bg-gray-200 p-1 rounded">PrimaryAccent</code> and maintain the same color on hover.
                        </p>
                    </div>
                </div>
            </WithSnippet>
        </ExampleSection>
    );
};

export default TextColorUsage;
