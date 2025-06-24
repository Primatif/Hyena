import React from 'react';
import { brandColors } from '../data/colors.js';
import { patterns, patternSizes } from '../data/patterns.js';
import ExampleSection from './ExampleSection.jsx';
import { WithSnippet } from './WithSnippet.jsx';
import { hexToRgba } from '../data/utils.js';

const ResponsiveDiagramContainer = ({ children, idealWidth = 1200, idealHeight = 675, patternedBackground }) => (
    <div className="w-full relative overflow-hidden rounded-lg p-4"
         style={{
             paddingTop: `${(idealHeight / idealWidth) * 100}%`,
             backgroundColor: brandColors.SecondaryBackground,
             ...(patternedBackground && {
                 backgroundImage: patterns.subtle,
                 backgroundSize: patternSizes.medium,
                 backgroundBlendMode: 'overlay',
                 opacity: 0.95
             })
         }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
            {children}
        </div>
    </div>
);

const DemoBox = ({ children, title, bgColor, borderColor, textColor }) => (
    <div className={`border-2 rounded-lg p-2 shadow-sm flex flex-col items-center justify-start flex-shrink flex-grow basis-1/5 max-w-[150px]`}
        style={{ backgroundColor: bgColor, borderColor: borderColor }}>
        {title && (
            <h4 className="text-[9px] font-bold text-center mb-1 uppercase tracking-wider px-1 py-0.5 rounded-sm"
                style={{ color: textColor, backgroundColor: hexToRgba(brandColors.PrimaryBackground, 0.7) }}>
                {title}
            </h4>
        )}
        <div className="flex flex-col items-center space-y-1 w-full">
            {children}
        </div>
    </div>
);

const DemoNode = ({ children, icon, bgColor, borderColor, textColor }) => (
    <div className={`flex items-center justify-center p-1 rounded-lg w-full text-center text-[10px] font-semibold text-wrap`}
        style={{ backgroundColor: bgColor, borderColor: borderColor, color: textColor, border: '1px solid' }}>
        {icon && <span className="mr-0.5 text-[12px]">{icon}</span>}
        <span className="flex-grow text-center">{children}</span>
    </div>
);

const DemoArrow = ({ label, direction = 'r', arrowColor }) => {
    const rotations = { r: 'rotate-0', l: 'rotate-180', d: 'rotate-90', u: '-rotate-90' };
    return (
        <div className={`flex flex-col items-center justify-center text-center mx-0.5 flex-shrink-0`}>
            {label && (
                <span className="text-[8px] font-medium px-0.5 py-0.25 rounded-md shadow-sm mb-0.25 text-wrap text-center"
                      style={{ color: arrowColor, backgroundColor: hexToRgba(brandColors.PrimaryBackground, 0.7) }}>
                    {label}
                </span>
            )}
            <div className={`text-base ${rotations[direction]}`} style={{ color: arrowColor }}>→</div>
        </div>
    );
};

const DemoGroup = ({ children, title, borderColor, textColor, bgColor, flexWrap = 'flex-wrap' }) => (
     <div className={`border-2 border-dashed rounded-xl p-2 w-auto flex flex-col items-center justify-center flex-shrink-0`}
        style={{ backgroundColor: bgColor, borderColor: borderColor }}>
        {title && (
            <h3 className="text-[10px] font-semibold mb-2 px-1 py-0.5 rounded-sm"
                style={{ color: textColor, backgroundColor: hexToRgba(brandColors.PrimaryBackground, 0.7) }}>
                {title}
            </h3>
        )}
        <div className={`flex flex-row ${flexWrap} items-center justify-center gap-1`}>
            {children}
        </div>
    </div>
);

const Diagrams = () => {
    const snippets = {
        diagram: (
            <ul>
                <li><strong>Overall Purpose:</strong> To create standardized, professional, and visually consistent system architecture, workflow, or data flow diagrams using a composable set of components.</li>
                <li><strong>Core Components Breakdown:</strong>
                    <ul>
                        <li><strong><code>ResponsiveDiagramContainer</code>:</strong> The main wrapper. It maintains a fixed aspect ratio (e.g., 16:9) and provides a consistent background (<code>brandColors.SecondaryBackground</code>) with an optional checkered pattern for texture.</li>
                        <li><strong><code>DemoBox</code>:</strong> Represents a major, high-level system boundary or component (e.g., 'Users', 'Database'). Styled with a solid border and background color derived from <code>brandColors</code>.</li>
                        <li><strong><code>DemoGroup</code>:</strong> Visually groups related nodes under a common label (e.g., 'API Layer'). Differentiated by a dashed border, making it distinct from a <code>DemoBox</code>.</li>
                        <li><strong><code>DemoNode</code>:</strong> The most granular element, representing a single service, application, or entity (e.g., 'PostgreSQL', 'Secure API'). Styled with a thin border, background, and can include a small icon.</li>
                        <li><strong><code>DemoArrow</code>:</strong> Indicates the direction of data flow or a connection. It supports a text label and can be rotated to point right, left, up, or down. Its color is sourced from <code>brandColors</code>.</li>
                    </ul>
                </li>
                <li><strong>Design & Implementation Principles:</strong>
                    <ul>
                        <li><strong>Composition:</strong> Diagrams are built by arranging <code>DemoBox</code>, <code>DemoGroup</code>, and <code>DemoArrow</code> components within a flex container.</li>
                        <li><strong>Token-Based Styling:</strong> All colors for backgrounds, borders, and text are dynamically assigned using the centralized <code>brandColors</code> tokens, ensuring theme consistency.</li>
                        <li><strong>Clarity & Hierarchy:</strong> The visual distinction between Boxes (solid border) and Groups (dashed border) creates a clear visual hierarchy.</li>
                        <li><strong>Utility Functions:</strong> Uses the <code>hexToRgba</code> utility to apply transparency for backgrounds, consistent with other components in the style guide.</li>
                    </ul>
                </li>
            </ul>
        )
    };

    return (
        <ExampleSection title="Diagrams" commentary="Architectural diagrams are a key part of our technical documentation. These components provide a standardized set of shapes and styles to ensure that all diagrams are consistent, professional, and easy to understand.">
            <WithSnippet snippet={snippets.diagram}>
                <ResponsiveDiagramContainer idealWidth={600} idealHeight={200} patternedBackground={true}>
                    <div className="flex items-center justify-center w-full flex-nowrap gap-1">
                        <DemoBox title="Users" bgColor={brandColors.PrimaryBackground} borderColor={brandColors.PrimaryText} textColor={brandColors.PrimaryText}>
                            <DemoNode bgColor={hexToRgba(brandColors.PrimaryAccent, 0.1)} borderColor={brandColors.PrimaryAccent} textColor={brandColors.PrimaryText} icon=" ">End User</DemoNode>
                        </DemoBox>
                        <DemoArrow label="Data Flow" direction="r" arrowColor={brandColors.PrimaryAccent} />
                        <DemoGroup title="API Layer" bgColor={hexToRgba(brandColors.SecondaryAccent, 0.1)} borderColor={brandColors.SecondaryAccent} textColor={brandColors.PrimaryText}>
                            <DemoNode bgColor={hexToRgba(brandColors.SecondaryAccent, 0.1)} borderColor={brandColors.SecondaryAccent} textColor={brandColors.PrimaryText} icon=" ">Secure API</DemoNode>
                        </DemoGroup>
                        <DemoArrow label="Connects" direction="r" arrowColor={brandColors.PrimaryAccent} />
                        <DemoBox title="Database" bgColor={brandColors.PrimaryBackground} borderColor={brandColors.PrimaryText} textColor={brandColors.PrimaryText}>
                            <DemoNode bgColor={hexToRgba(brandColors.InfoBlue, 0.1)} borderColor={brandColors.InfoBlue} textColor={brandColors.PrimaryText}>PostgreSQL</DemoNode>
                        </DemoBox>
                    </div>
                </ResponsiveDiagramContainer>
            </WithSnippet>
        </ExampleSection>
    );
};

export default Diagrams;
