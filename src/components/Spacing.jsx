import React from 'react';
import { brandColors } from '../data/colors.js';
import ExampleSection from './ExampleSection.jsx';
import { WithSnippet } from './WithSnippet.jsx';

const Spacing = () => {
    const snippets = {
        spacingScale: (
            <ul>
                <li><strong>Purpose:</strong> To establish a consistent visual rhythm using a base unit of 4px.</li>
                <li><strong>Usage:</strong> Apply spacing (margins, padding) in multiples of the base unit (e.g., 4px, 8px, 16px) to ensure harmony and balance.</li>
                <li><strong>Implementation:</strong> In Tailwind CSS, this corresponds to classes like <code>p-1</code> (4px), <code>m-2</code> (8px), etc.</li>
                <li><strong>Color:</strong> Spacing blocks are colored using <code>AccentSkyBlue</code> (<code>#60A5FA</code>) for visual clarity.</li>
            </ul>
        ),
        responsiveBreakpoints: (
            <ul>
                <li><strong>Purpose:</strong> To ensure layouts adapt gracefully to different screen sizes.</li>
                <li><strong>Strategy:</strong> We use a mobile-first approach. Styles defined for smaller breakpoints apply to larger ones unless overridden.</li>
                <li><strong>Breakpoints:</strong>
                    <ul>
                        <li><code>sm</code>: 640px (phones)</li>
                        <li><code>md</code>: 768px (tablets)</li>
                        <li><code>lg</code>: 1024px (laptops)</li>
                        <li><code>xl</code>: 1280px (desktops)</li>
                    </ul>
                </li>
                <li><strong>Table styling:</strong> Uses <code>SecondaryBackground</code> for headers and <code>GrayLight</code> for borders to maintain visual hierarchy.</li>
            </ul>
        )
    };

    return (
        <ExampleSection 
            title="Spacing & Responsive Design" 
            commentary="A consistent spacing scale creates visual rhythm and harmony. Using multiples of a base unit (4px) ensures that elements are aligned and layouts feel balanced. This is not a strict rule, but a strong guideline to avoid chaotic or inconsistent designs."
        >
            <div className="space-y-8">
                <WithSnippet snippet={snippets.spacingScale}>
                    <p className="mb-4" style={{ color: brandColors.PrimaryText }}>Consistent spacing and a responsive grid are essential for creating clean, user-friendly layouts. We use a 4px base unit for all spacing and margins.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[[0.5, '2px'], [1, '4px'], [2, '8px'], [4, '16px'], [6, '24px'], [8, '32px'], [12, '48px'], [16, '64px']].map(([unit, px]) => (
                            <div key={px}>
                                <div className="h-12 w-full mb-2 rounded" style={{backgroundColor: brandColors.AccentSkyBlue}}></div>
                                <p className="font-bold text-sm" style={{color: brandColors.PrimaryText}}>{px}</p>
                                <p className="text-xs" style={{color: brandColors.GrayMid}}>rem({unit / 4})</p>
                            </div>
                        ))}
                    </div>
                </WithSnippet>

                <WithSnippet snippet={snippets.responsiveBreakpoints}>
                    <h4 className="font-semibold text-lg mt-8 mb-2">Responsive Breakpoints</h4>
                    <p className="text-sm mb-4" style={{ color: brandColors.PrimaryText }}>Use standard breakpoints to ensure layouts adapt to different screen sizes. Our breakpoints are mobile-first.</p>
                    <div className="overflow-x-auto rounded-lg border" style={{ borderColor: brandColors.GrayLight }}>
                        <table className="w-full text-left table-auto">
                            <thead>
                                <tr style={{backgroundColor: brandColors.SecondaryBackground}}>
                                    <th className="p-3 font-semibold text-sm">Breakpoint</th>
                                    <th className="p-3 font-semibold text-sm">Value</th>
                                    <th className="p-3 font-semibold text-sm">Description</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b" style={{borderColor: brandColors.GrayLight}}><td className="p-3"><code className="bg-gray-200 p-1 rounded">sm</code></td><td className="p-3">640px</td><td className="p-3">For small screens, like mobile phones.</td></tr>
                                <tr className="border-b" style={{borderColor: brandColors.GrayLight}}><td className="p-3"><code className="bg-gray-200 p-1 rounded">md</code></td><td className="p-3">768px</td><td className="p-3">For medium screens, like tablets.</td></tr>
                                <tr className="border-b" style={{borderColor: brandColors.GrayLight}}><td className="p-3"><code className="bg-gray-200 p-1 rounded">lg</code></td><td className="p-3">1024px</td><td className="p-3">For large screens, like laptops.</td></tr>
                                <tr><td className="p-3"><code className="bg-gray-200 p-1 rounded">xl</code></td><td className="p-3">1280px</td><td className="p-3">For extra-large screens, like desktops.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </WithSnippet>
            </div>
        </ExampleSection>
    );
};

export default Spacing;
