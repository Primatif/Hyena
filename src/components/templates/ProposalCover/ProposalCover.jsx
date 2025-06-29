import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { typography } from '../../../data/typography.js';
import { WithSnippet } from '../../molecules/WithSnippet/WithSnippet.jsx';
import { patterns, patternSizes } from '../../../data/patterns.js';

const ProposalCover = () => {
    const snippet = (
        <ul>
            <li><strong>Purpose:</strong> A formal cover page for client proposals and official documents, designed to be professional, branded, and impactful.</li>
            <li><strong>Layout Structure:</strong>
                <ul>
                    <li><strong>Main Container:</strong> A relative-positioned container with a <code>shadow-lg</code> and <code>GrayLight</code> border, acting as the page boundary.</li>
                    <li><strong>Classification Banner:</strong> A full-width banner at the top, styled with a solid <code>InfoBlue</code> background and white text to draw attention to its message.</li>
                    <li><strong>Decorative Element:</strong> An absolutely positioned <code>div</code> at the top-right. It combines the <code>patterns.subtle</code> background pattern with a <code>SecondaryAccent</code> background color and <code>opacity-10</code> for a subtle, layered branding effect.</li>
                    <li><strong>Content Body:</strong> The main text content is centered and vertically organized, containing the logo, title, subtitle, and client information.</li>
                    <li><strong>Footer Area:</strong> A flex container (<code>flex justify-between</code>) at the bottom holds left-aligned reference info and right-aligned contact details.</li>
                </ul>
            </li>
            <li><strong>Color & Styling:</strong>
                <ul>
                    <li><strong>Primary Branding:</strong> The main divider uses <code>PrimaryAccent</code> for a strong visual break.</li>
                    <li><strong>Secondary Branding:</strong> The subtitle and decorative element use <code>SecondaryAccent</code>.</li>
                    <li><strong>Informational:</strong> The top banner uses <code>InfoBlue</code> to convey its 'confidential' status.</li>
                    <li><strong>Text Colors:</strong> A clear hierarchy is created using <code>PrimaryText</code> for titles, <code>GrayDark</code> for secondary info (like 'Prepared for:'), and <code>GrayMid</code> for tertiary details (like the date and contact info).</li>
                </ul>
            </li>
            <li><strong>Typography:</strong>
                <ul>
                    <li><strong>Logo:</strong> Uses the <code>logo</code> style from <code>typography.js</code>.</li>
                    <li><strong>Main Title:</strong> Uses the <code>mainTitle</code> style.</li>
                    <li><strong>Subtitle:</strong> Uses the <code>subtitle</code> style.</li>
                    <li><strong>Body Text:</strong> Uses the <code>bodyText</code> style for the client intro.</li>
                    <li>A consistent vertical rhythm is established through varied font sizes and weights, from the <code>4xl</code> logo down to the <code>text-sm</code> footer details.</li>
                </ul>
            </li>
            <li><strong>Key Implementation Details:</strong>
                <ul>
                    <li>The layout uses a combination of absolute positioning for the decorative element and a relative-positioned parent to create a layered, visually interesting effect without disrupting the document flow.</li>
                    <li>The classification banner uses negative margins (<code>-mx-8 -mt-8</code>) to break out of the parent's padding and span the full width of the card.</li>
                    <li>Flexbox is used in the footer to cleanly separate and align the two columns of information.</li>
                </ul>
            </li>
        </ul>
    );

    return (
        <WithSnippet snippet={snippet}>
            <div>
                <h5 className="font-medium mb-2 text-gray-600">Proposal Cover</h5>
                <div className="relative p-8 shadow-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                    {/* Classification Banner */}
                    <div className="mb-8 -mx-8 -mt-8 py-1 px-8 text-center text-sm font-semibold" 
                         style={{ backgroundColor: brandColors.InfoBlue, color: 'white' }}>
                        CONFIDENTIAL - CLIENT PROPOSAL
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute top-14 right-0 w-32 h-32 opacity-10" 
                         style={{ backgroundImage: patterns.subtle, backgroundSize: patternSizes.small, backgroundColor: brandColors.SecondaryAccent }}>
                    </div>
                    
                    {/* Main content */}
                    <div className="text-center relative z-10">
                        {/* Logo and company */}
                        <div className="font-bold text-4xl mb-2" style={{ ...typography.logo, color: brandColors.PrimaryText }}>PRIMATIF</div>
                        <p className="text-sm mb-12" style={{ color: brandColors.GrayMid }}>ADVANCED SOLUTIONS</p>
                        
                        {/* Main title */}
                        <h1 className="text-4xl font-bold mb-3" style={{ ...typography.mainTitle, color: brandColors.PrimaryText }}>Enterprise Cloud Migration Strategy</h1>
                        <h2 className="text-xl mb-8" style={{ ...typography.subtitle, color: brandColors.SecondaryAccent }}>Assessment and Implementation Roadmap</h2>
                        
                        {/* Client information */}
                        <p className="text-lg mb-2" style={{ ...typography.bodyText, color: brandColors.GrayDark }}>Prepared for:</p>
                        <p className="text-xl font-semibold mb-8" style={{ color: brandColors.PrimaryText }}>Acme Corporation</p>
                        
                        {/* Divider */}
                        <div className="w-1/2 h-1 mx-auto" style={{backgroundColor: brandColors.PrimaryAccent}}></div>
                        
                        {/* Date and reference */}
                        <div className="flex justify-between mt-12 px-8">
                            <div className="text-left">
                                <p className="text-sm font-medium" style={{ color: brandColors.GrayDark }}>Reference: ACME-2025-06</p>
                                <p className="text-sm" style={{ color: brandColors.GrayMid }}>Validity: 90 days</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium" style={{ color: brandColors.GrayDark }}>Prepared by:</p>
                                <p className="text-sm" style={{ color: brandColors.GrayMid }}>Enterprise Solutions Team</p>
                                <p className="text-sm" style={{ color: brandColors.GrayMid }}>contact@primatif.com</p>
                            </div>
                        </div>
                        
                        {/* Date */}
                        <p className="text-sm mt-12" style={{color: brandColors.GrayMid}}>June 20, 2025</p>
                    </div>
                </div>
            </div>
        </WithSnippet>
    );
};

export default ProposalCover;
