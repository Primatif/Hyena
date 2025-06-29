import React from 'react';
import { brandColors } from '../../../data/colors';
import { typography } from '../../../data/typography';
import { patterns, patternSizes } from '../../../data/patterns';
import { hexToRgba } from '../../../data/utils';
import { ExampleSection } from '../../molecules/ExampleSection/ExampleSection.jsx';
import { WithSnippet } from '../../molecules/WithSnippet/WithSnippet.jsx';

const ResponsiveDiagramContainer = ({ children, idealWidth = 1200, idealHeight = 675, patternedBackground }) => (
    <div className="w-full relative overflow-hidden rounded-lg p-2 sm:p-4"
         style={{
             paddingTop: `${(idealHeight / idealWidth) * 100}%`,
             backgroundColor: brandColors.SecondaryBackground,
             ...typography.diagramContainer,
             ...(patternedBackground && {
                 backgroundImage: patterns.subtle,
                 backgroundSize: patternSizes.medium
             })
         }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-1 sm:p-2">
            {children}
        </div>
    </div>
);

const DemoBox = ({ children, title, bgColor, borderColor, textColor }) => (
    <div className={`border-2 rounded-lg p-1 sm:p-2 md:p-3 shadow-sm flex flex-col items-center justify-start flex-shrink flex-grow basis-1/5 sm:basis-1/4 min-w-0 max-w-[120px] sm:max-w-[160px] md:max-w-[200px]`}
        style={{ backgroundColor: bgColor, borderColor: borderColor }}>
        {title && (
            <h4 className="mb-1 sm:mb-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded-sm"
                style={{ 
                    color: textColor, 
                    backgroundColor: hexToRgba(brandColors.PrimaryBackground, 0.9),
                    ...typography.diagramTitle
                }}>
                {title}
            </h4>
        )}
        <div className="flex flex-col items-center space-y-1 sm:space-y-2 w-full">
            {children}
        </div>
    </div>
);

const DemoNode = ({ children, icon, bgColor, borderColor, textColor }) => (
    <div className={`flex items-center justify-center p-1 sm:p-2 rounded-lg w-full text-wrap`}
        style={{ 
            backgroundColor: bgColor, 
            borderColor: borderColor, 
            color: textColor, 
            ...typography.diagramNode,
            border: '1px solid'
        }}>
        {icon && <span className="mr-1 sm:mr-2" style={{...typography.diagramIcon}}>{icon}</span>}
        <span className="text-center">{children}</span>
    </div>
);

const DemoArrow = ({ label, direction = 'r', arrowColor }) => {
    const arrows = { r: '→', l: '←', d: '↓', u: '↑' };
    const arrow = arrows[direction] || '→';
    
    if (direction === 'd' || direction === 'u') {
        return (
            <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                <span className="text-lg sm:text-xl md:text-2xl" style={{ color: arrowColor, ...typography.diagramArrow }}>{arrow}</span>
                {label && <span className="text-center whitespace-nowrap" style={{ color: arrowColor, ...typography.diagramLabel }}>{label}</span>}
            </div>
        );
    }
    
    return (
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-shrink-0">
            <span className="text-lg sm:text-xl md:text-2xl" style={{ color: arrowColor, ...typography.diagramArrow }}>{arrow}</span>
            {label && <span className="text-center whitespace-nowrap" style={{ color: arrowColor, ...typography.diagramLabel }}>{label}</span>}
        </div>
    );
};

const DemoGroup = ({ children, title, borderColor, textColor, bgColor, flexWrap = 'flex-wrap' }) => (
    <div className={`border-2 border-dashed rounded-lg p-1 sm:p-2 md:p-3 shadow-sm flex flex-col items-center justify-start flex-shrink flex-grow basis-1/5 sm:basis-1/4 min-w-0 max-w-[120px] sm:max-w-[160px] md:max-w-[200px]`}
        style={{ backgroundColor: bgColor, borderColor: borderColor }}>
        {title && (
            <h4 className="mb-1 sm:mb-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded-sm"
                style={{ 
                    color: textColor, 
                    backgroundColor: hexToRgba(brandColors.PrimaryBackground, 0.9),
                    ...typography.diagramTitle
                }}>
                {title}
            </h4>
        )}
        <div className={`flex flex-col items-center space-y-1 sm:space-y-2 w-full ${flexWrap}`}>
            {children}
        </div>
    </div>
);

const Diagrams = () => {
    const snippets = {
        diagram: (
            <ul>
                <li><strong>Overall Purpose:</strong> Create standardized, professional system architecture and workflow diagrams using composable components optimized for readability and visual clarity across all device sizes.</li>
                <li><strong>Core Components:</strong>
                    <ul>
                        <li><strong><code>ResponsiveDiagramContainer</code>:</strong> Main wrapper with fixed aspect ratio, <code>brandColors.SecondaryBackground</code>, optional subtle checkered pattern texture, and dynamic text scaling.</li>
                        <li><strong><code>DemoBox</code>:</strong> High-level system boundaries (Users, Database). Solid borders, opaque backgrounds from brand color tokens.</li>
                        <li><strong><code>DemoGroup</code>:</strong> Groups related nodes under common labels (API Layer, Services). Dashed borders for visual distinction.</li>
                        <li><strong><code>DemoNode</code>:</strong> Granular elements (PostgreSQL, Auth Service). Includes icons, thin borders, fully opaque backgrounds.</li>
                        <li><strong><code>DemoArrow</code>:</strong> Directional flow indicators with labels. Supports right/left/up/down orientations.</li>
                    </ul>
                </li>
                <li><strong>Responsive Scaling & Mobile Optimization:</strong>
                    <ul>
                        <li><strong>Dynamic Text Scaling:</strong> Uses <code>typography.diagramContainer</code> token with CSS <code>clamp(8px, 1.5vw, 12px)</code> for smooth, continuous text scaling based on viewport width.</li>
                        <li><strong>Tokenized Typography:</strong> All text elements use centralized <code>typography</code> tokens: <code>diagramTitle</code>, <code>diagramNode</code>, <code>diagramLabel</code>, <code>diagramArrow</code>, and <code>diagramIcon</code> with relative <code>em</code> units maintaining hierarchy at any size.</li>
                        <li><strong>Adaptive Component Sizing:</strong> Components scale from mobile-first (<code>basis-1/5</code>, <code>max-w-[120px]</code>) to desktop (<code>basis-1/4</code>, <code>max-w-[200px]</code>).</li>
                        <li><strong>Responsive Spacing:</strong> Progressive gaps and padding (<code>gap-1 sm:gap-2 md:gap-3</code>) ensure optimal density across screen sizes.</li>
                        <li><strong>Flexible Layout:</strong> Maintains composition and relative proportions while scaling down gracefully on constrained displays.</li>
                    </ul>
                </li>
                <li><strong>Color Strategy & Readability Rules:</strong>
                    <ul>
                        <li><strong>Semantic Color Mapping:</strong> Use semantic colors (InfoBlue, WarningYellow, SuccessGreen, ErrorRed) to convey functional meaning.</li>
                        <li><strong>Reference Palette Creativity:</strong> Leverage reference colors (Beige, Gold, Teal, Amber, Slate) for visual variety and thematic grouping.</li>
                        <li><strong>Contrast Optimization:</strong> Dark text (<code>PrimaryText</code>) on light backgrounds, white text (<code>PrimaryBackground</code>) on dark backgrounds.</li>
                        <li><strong>Opaque Backgrounds:</strong> All components use solid, opaque colors from <code>brandColors</code> tokens—no transparency for maximum clarity.</li>
                        <li><strong>Progressive Color Flow:</strong> Use color progression to guide visual flow (warm → cool → accent colors).</li>
                    </ul>
                </li>
                <li><strong>Layout & Composition Patterns:</strong>
                    <ul>
                        <li><strong>Horizontal Flow:</strong> Standard left-to-right data flow with right-pointing arrows.</li>
                        <li><strong>Vertical Flow:</strong> Top-down architecture with downward arrows for request/response patterns.</li>
                        <li><strong>Multi-Stage Pipelines:</strong> Extended horizontal chains for data processing workflows.</li>
                        <li><strong>Flexible Spacing:</strong> Adjust gaps and padding based on content density and container size.</li>
                    </ul>
                </li>
                <li><strong>Implementation Guidelines:</strong>
                    <ul>
                        <li><strong>Fully Tokenized:</strong> All styling references centralized design tokens—<code>brandColors</code> for colors and <code>typography</code> for text styles. Never hardcode values.</li>
                        <li><strong>Icon Integration:</strong> Use meaningful emoji icons for instant component recognition and accessibility.</li>
                        <li><strong>Responsive Sizing:</strong> Components scale proportionally within their containers using percentage-based widths and relative typography units.</li>
                        <li><strong>Cross-Device Consistency:</strong> Maintains visual hierarchy and readability from mobile (320px) to desktop (1200px+) viewports.</li>
                        <li><strong>Performance Optimized:</strong> Uses CSS-based scaling rather than JavaScript for smooth, efficient responsive behavior.</li>
                    </ul>
                </li>
            </ul>
        )
    };

    return (
        <ExampleSection title="Diagrams" commentary="Architectural diagrams are a key part of our technical documentation. These components provide a standardized set of shapes and styles to ensure that all diagrams are consistent, professional, and easy to understand.">
            <WithSnippet snippet={snippets.diagram}>
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    <ResponsiveDiagramContainer idealWidth={800} idealHeight={300} patternedBackground={true}>
                        <div className="flex items-center justify-center w-full flex-nowrap gap-1 sm:gap-2 md:gap-3 px-1 sm:px-2 md:px-4">
                            <DemoBox title="Users" bgColor={brandColors.ReferenceBeige} borderColor={brandColors.PrimaryAccent} textColor={brandColors.PrimaryText}>
                                <DemoNode bgColor={brandColors.ReferenceGold} borderColor={brandColors.PrimaryAccent} textColor={brandColors.PrimaryText} icon="👤">End User</DemoNode>
                            </DemoBox>
                            <DemoArrow label="Data Flow" direction="r" arrowColor={brandColors.PrimaryAccent} />
                            <DemoGroup title="API Layer" bgColor={brandColors.AccentSkyBlue} borderColor={brandColors.AccentDeepBlue} textColor={brandColors.PrimaryText}>
                                <DemoNode bgColor={brandColors.ReferenceTeal} borderColor={brandColors.AccentDeepBlue} textColor={brandColors.PrimaryBackground} icon="🔗">Secure API</DemoNode>
                            </DemoGroup>
                            <DemoArrow label="Connects" direction="r" arrowColor={brandColors.AccentDeepBlue} />
                            <DemoBox title="Database" bgColor={brandColors.ReferenceMint} borderColor={brandColors.SemanticSuccessGreen} textColor={brandColors.PrimaryText}>
                                <DemoNode bgColor={brandColors.SemanticSuccessGreen} borderColor={brandColors.SemanticSuccessGreen} textColor={brandColors.PrimaryBackground} icon="🗄️">PostgreSQL</DemoNode>
                            </DemoBox>
                        </div>
                    </ResponsiveDiagramContainer>

                    <ResponsiveDiagramContainer idealWidth={800} idealHeight={350} patternedBackground={true}>
                        <div className="flex flex-col items-center justify-center w-full gap-2 sm:gap-3 md:gap-4 px-1 sm:px-2 md:px-4">
                            <div className="flex items-center justify-center w-full flex-nowrap gap-1 sm:gap-2 md:gap-3">
                                <DemoBox title="Frontend" bgColor={brandColors.ReferenceAmber} borderColor={brandColors.ReferenceOrange} textColor={brandColors.PrimaryText}>
                                    <DemoNode bgColor={brandColors.ReferenceOrange} borderColor={brandColors.ReferenceCopper} textColor={brandColors.PrimaryBackground} icon="🌐">React App</DemoNode>
                                </DemoBox>
                                <DemoArrow label="Requests" direction="d" arrowColor={brandColors.ReferenceOrange} />
                            </div>
                            <div className="flex items-center justify-center w-full flex-nowrap gap-1 sm:gap-2 md:gap-3">
                                <DemoGroup title="Services" bgColor={brandColors.ReferenceSlate} borderColor={brandColors.ReferenceCharcoal} textColor={brandColors.PrimaryText}>
                                    <DemoNode bgColor={brandColors.InfoBlue} borderColor={brandColors.AccentDeepBlue} textColor={brandColors.PrimaryBackground} icon="⚙️">Auth Service</DemoNode>
                                    <DemoNode bgColor={brandColors.WarningYellow} borderColor={brandColors.ReferenceCopper} textColor={brandColors.PrimaryText} icon="📊">Analytics</DemoNode>
                                </DemoGroup>
                                <DemoArrow label="Processes" direction="r" arrowColor={brandColors.ReferenceCharcoal} />
                                <DemoBox title="Storage" bgColor={brandColors.ReferenceTan} borderColor={brandColors.ReferenceBrown} textColor={brandColors.PrimaryText}>
                                    <DemoNode bgColor={brandColors.ReferenceBrown} borderColor={brandColors.ReferenceBrown} textColor={brandColors.PrimaryBackground} icon="💾">Redis Cache</DemoNode>
                                </DemoBox>
                            </div>
                        </div>
                    </ResponsiveDiagramContainer>

                    <ResponsiveDiagramContainer idealWidth={800} idealHeight={280} patternedBackground={true}>
                        <div className="flex items-center justify-center w-full flex-nowrap gap-1 sm:gap-1.5 md:gap-2 px-1 sm:px-1.5 md:px-2">
                            <DemoBox title="Input" bgColor={brandColors.InfoBlueLight} borderColor={brandColors.InfoBlue} textColor={brandColors.PrimaryText}>
                                <DemoNode bgColor={brandColors.InfoBlue} borderColor={brandColors.AccentDeepBlue} textColor={brandColors.PrimaryBackground} icon="📥">Data Source</DemoNode>
                            </DemoBox>
                            <DemoArrow label="Transform" direction="r" arrowColor={brandColors.InfoBlue} />
                            <DemoGroup title="Processing" bgColor={brandColors.WarningYellowLight} borderColor={brandColors.WarningYellow} textColor={brandColors.PrimaryText}>
                                <DemoNode bgColor={brandColors.ReferenceKhaki} borderColor={brandColors.WarningYellow} textColor={brandColors.PrimaryText} icon="🔄">ETL Pipeline</DemoNode>
                                <DemoNode bgColor={brandColors.ReferenceOlive} borderColor={brandColors.WarningYellow} textColor={brandColors.PrimaryBackground} icon="🧮">Validator</DemoNode>
                            </DemoGroup>
                            <DemoArrow label="Output" direction="r" arrowColor={brandColors.WarningYellow} />
                            <DemoBox title="Results" bgColor={brandColors.SemanticSuccessGreenLight} borderColor={brandColors.SemanticSuccessGreen} textColor={brandColors.PrimaryText}>
                                <DemoNode bgColor={brandColors.SemanticSuccessGreen} borderColor={brandColors.SemanticSuccessGreen} textColor={brandColors.PrimaryBackground} icon="📈">Dashboard</DemoNode>
                            </DemoBox>
                            <DemoArrow label="Alert" direction="r" arrowColor={brandColors.SemanticSuccessGreen} />
                            <DemoBox title="Monitoring" bgColor={brandColors.ErrorRedLight} borderColor={brandColors.ErrorRed} textColor={brandColors.PrimaryText}>
                                <DemoNode bgColor={brandColors.ErrorRed} borderColor={brandColors.PrimaryAccentDarker} textColor={brandColors.PrimaryBackground} icon="🚨">Alerts</DemoNode>
                            </DemoBox>
                        </div>
                    </ResponsiveDiagramContainer>
                </div>
            </WithSnippet>
        </ExampleSection>
    );
};

export default Diagrams;
