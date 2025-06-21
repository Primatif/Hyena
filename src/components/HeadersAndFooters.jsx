import React from 'react';
import { brandColors } from '../data/colors.js';
import { typography } from '../data/typography.js';
import ExampleSection from './ExampleSection.jsx';
import { WithSnippet } from './WithSnippet.jsx';

const HeadersAndFooters = () => {
    const snippets = {
        header: (
            <ul>
                <li><strong>Purpose:</strong> Provides consistent branding and document identification at the top of a page. It establishes the primary visual identity.</li>
                <li><strong>Layout & Structure:</strong> A flex container using <code>justify-between</code> to position the brand logo on the left and the document title on the right. <code>items-center</code> ensures vertical alignment.</li>
                <li><strong>Color & Styling:</strong>
                    <ul>
                        <li><strong>Container:</strong> A clean, unobtrusive container with a <code>1px</code> solid border using <code>brandColors.GrayLight</code> and standard <code>p-4</code> padding.</li>
                        <li><strong>Logo:</strong> Styled using the <code>typography.headerLogo</code> token for size and weight, with its color set to <code>brandColors.PrimaryText</code>.</li>
                        <li><strong>Document Title:</strong> Styled with a smaller font size and <code>brandColors.GrayMid</code> for a more subtle, secondary text appearance.</li>
                    </ul>
                </li>
                <li><strong>Implementation Notes:</strong> This is a simple, adaptable header. The document title is designed to be dynamic, allowing it to be passed in as a prop in a real application.</li>
            </ul>
        ),
        footer: (
            <ul>
                <li><strong>Purpose:</strong> Offers essential contact, copyright, and branding information in a compact, unobtrusive footer at the end of a document.</li>
                <li><strong>Layout & Structure:</strong> A centered text block. All content is aligned to the center.</li>
                <li><strong>Color & Styling:</strong>
                    <ul>
                        <li><strong>Container:</strong> A dark container with a background color of <code>brandColors.GrayDark</code>, providing a clear visual separation from the main content.</li>
                        <li><strong>Logo:</strong> Styled using the <code>typography.footerLogo</code> token. Its color is set to <code>brandColors.PrimaryBackground</code> to contrast with the dark background.</li>
                        <li><strong>Contact Info:</strong> Uses a very small font size (<code>text-xs</code>) and <code>brandColors.GrayLight</code> for a subtle, low-emphasis appearance.</li>
                    </ul>
                </li>
                <li><strong>Implementation Notes:</strong> The footer is designed to be a terminal element. The contact and copyright information is static but could be made dynamic if needed.</li>
            </ul>
        ),
    };

    return (
        <ExampleSection 
            title="Headers & Footers" 
            commentary="These components bookend our documents, providing a consistent brand frame. The header is clean and professional, while the footer offers essential contact information in a compact, unobtrusive manner."
        >
            <p className="mb-4" style={{ color: brandColors.PrimaryText }}>Headers and Footers provide consistent branding and navigation across all documents.</p>
            <div className="space-y-8">
                <WithSnippet snippet={snippets.header}>
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Standard Header</h4>
                        <div className="p-4 flex justify-between items-center rounded-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                            <div className="font-bold text-2xl" style={{ ...typography.headerLogo, color: brandColors.PrimaryText }}>PRIMATIF</div>
                            <div className="text-sm" style={{color: brandColors.GrayMid}}>Document Title</div>
                        </div>
                    </div>
                </WithSnippet>
                <WithSnippet snippet={snippets.footer}>
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Standard Footer</h4>
                        <div className="p-4 text-center rounded-lg" style={{backgroundColor: brandColors.GrayDark, color: brandColors.PrimaryBackground}}>
                            <div className="font-bold text-lg" style={{ ...typography.footerLogo }}>PRIMATIF</div>
                            <p className="text-xs mt-1" style={{color: brandColors.GrayLight}}> 2025 Primatif | hello@primatif.com</p>
                        </div>
                    </div>
                </WithSnippet>
            </div>
        </ExampleSection>
    );
};

export default HeadersAndFooters;