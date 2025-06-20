import React from 'react';
import { brandColors } from '../data/colors.js';

const TextColorUsage = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="mt-6">
            <h4 className="text-lg font-bold mb-2" style={{ color: brandColors.PrimaryText }}>Text Color Usage</h4>
            <p className="text-sm mb-4" style={{ color: brandColors.PrimaryText }}>
                To ensure readability and accessibility, use the following colors for text.
            </p>
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
                           style={{color: isHovered ? brandColors.PrimaryAccentDark : brandColors.PrimaryAccent, textDecoration: 'underline'}}
                           onMouseEnter={() => setIsHovered(true)}
                           onMouseLeave={() => setIsHovered(false)}
                        >
                            This is an example link.
                        </a>
                    </div>
                    <p className="text-sm mt-1" style={{color: brandColors.GrayDark}}>
                        Links use <code className="text-xs bg-gray-200 p-1 rounded">PrimaryAccent</code> and darken to <code className="text-xs bg-gray-200 p-1 rounded">PrimaryAccentDark</code> on hover.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TextColorUsage;
