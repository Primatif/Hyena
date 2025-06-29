import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { typography } from '../../../data/typography.js';
import { WithSnippet } from '../../molecules/WithSnippet/WithSnippet.jsx';

const EbookReader = () => {
    const snippet = (
        <ul>
            <li><strong>Purpose:</strong> A static example of a miniature e-book reader interface, designed to demonstrate a clean, comfortable reading experience with a two-page spread.</li>
            <li><strong>Layout Structure:</strong>
                <ul>
                    <li>A main container with a <code>max-w-2xl</code>, <code>rounded-lg</code> corners, and a <code>shadow-lg</code>. It uses flexbox (<code>flex flex-col</code>) to structure the header, content, and footer.</li>
                    <li><strong>Header:</strong> A flex container (<code>flex justify-between items-center</code>) holding SVG icons and the chapter title.</li>
                    <li><strong>Content Area:</strong> A two-column layout (<code>flex space-x-6</code>) representing a two-page spread. Each page (a <code>div</code> with <code>w-1/2</code>) has <code>p-4</code> padding.</li>
                    <li><strong>Footer:</strong> Contains page number/progress text and a progress bar. A <code>border-t</code> using <code>GrayLight</code> separates it from the content.</li>
                </ul>
            </li>
            <li><strong>Color & Styling:</strong>
                <ul>
                    <li><strong>Theme:</strong> The main background is <code>SecondaryBackground</code> to simulate a soft, paper-like texture. The container has a <code>GrayLight</code> border.</li>
                    <li><strong>Progress Bar:</strong> The track of the bar is <code>GrayLight</code>, while the progress indicator is <code>AccentDeepBlue</code>.</li>
                    <li><strong>Icons & Secondary Text:</strong> Header icons and footer text use <code>GrayDark</code> for a softer contrast than primary text.</li>
                </ul>
            </li>
            <li><strong>Typography:</strong>
                <ul>
                    <li>The main body text of the book uses the <code>bodyText</code> style from <code>typography.js</code>, which should be a readable serif font.</li>
                    <li>The chapter title in the header uses <code>font-semibold</code> and <code>PrimaryText</code> color.</li>
                    <li>Footer text is <code>text-sm</code>.</li>
                </ul>
            </li>
            <li><strong>Key Implementation Details:</strong>
                <ul>
                    <li>The progress bar is a pure CSS implementation using two nested <code>div</code> elements. The outer div forms the track, and the inner div's width is set via a style property to represent the percentage.</li>
                    <li>SVG icons are embedded directly in the JSX for simplicity, with their <code>fill</code> color set to a design token.</li>
                    <li>The two-page spread is achieved simply and effectively with flexbox, making it responsive and easy to manage.</li>
                </ul>
            </li>
        </ul>
    );

    return (
        <WithSnippet snippet={snippet}>
            <h5 className="font-medium mb-2 text-gray-600">E-Book Reader</h5>
            <div className="w-full max-w-2xl mx-auto rounded-lg shadow-lg p-6 flex flex-col" style={{ backgroundColor: brandColors.SecondaryBackground, border: `1px solid ${brandColors.GrayLight}` }}>
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <svg className="w-6 h-6" fill={brandColors.GrayDark} viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                    <h3 className="font-semibold" style={{color: brandColors.PrimaryText}}>Chapter 3: The Journey Begins</h3>
                    <svg className="w-6 h-6" fill={brandColors.GrayDark} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
                </div>

                {/* Book Content */}
                <div className="flex-grow flex space-x-6">
                    {/* Left Page */}
                    <div className="w-1/2 p-4" style={{...typography.bodyText}}>
                        <p>Once upon a time, in a world woven from threads of magic and code, there existed a style guide named Primatif. It was not merely a collection of rules, but a living document, designed to bring harmony to the digital realm.</p>
                        <p className="mt-4">Its creators understood that true consistency was not about rigid templates, but about shared principles. They defined colors not just by their hex codes, but by their purpose: success, warning, information.</p>
                    </div>
                    {/* Right Page */}
                    <div className="w-1/2 p-4" style={{...typography.bodyText}}>
                        <p>Typography was given a voice, with styles for grand titles and humble body text. Each component, from the simplest button to the most complex layout, was a testament to this philosophy.</p>
                        <p className="mt-4">This guide was built for both humans and their AI counterparts, ensuring that the language of design was understood by all. And so, every new creation was a reflection of this beautiful, ordered world.</p>
                    </div>
                </div>

                {/* Footer / Progress */}
                <div className="mt-4 pt-4 border-t" style={{borderColor: brandColors.GrayLight}}>
                    <div className="flex justify-between items-center text-sm" style={{color: brandColors.GrayDark}}>
                        <span>Page 56 of 312</span>
                        <span>Chapter Progress: 45%</span>
                    </div>
                    <div className="h-2 rounded-full mt-2" style={{ backgroundColor: brandColors.GrayLight }}>
                        <div className="h-2 rounded-full" style={{ width: '45%', backgroundColor: brandColors.AccentDeepBlue }}></div>
                    </div>
                </div>
            </div>
        </WithSnippet>
    );
};

export default EbookReader;
