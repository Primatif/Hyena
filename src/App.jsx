import React, { useMemo } from 'react';
import tanishLogo from '../images/logo_tanish.png';
import { brandColors } from './data/colors.js';
import ColorPalette from './components/ColorPalette.jsx';
import ImageReferences from './components/ImageReferences.jsx';
import Typography from './components/Typography.jsx';
import HeadersAndFooters from './components/HeadersAndFooters.jsx';
import Buttons from './components/Buttons.jsx';
import PatternsAndBackgrounds from './components/PatternsAndBackgrounds.jsx';
import TableFormatting from './components/TableFormatting.jsx';
import Callouts from './components/Callouts.jsx';
import Diagrams from './components/Diagrams.jsx';
import Spacing from './components/Spacing.jsx';
import Layouts from './components/Layouts.jsx';
import { typography } from './data/typography.js';
import { patterns, patternSizes } from './data/patterns.js';

const StyleGuideDocument = () => {

    useMemo(() => {
        const robotoLink = document.createElement('link');
        robotoLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
        robotoLink.rel = 'stylesheet';
        document.head.appendChild(robotoLink);

        const bebasNeueLink = document.createElement('link');
        bebasNeueLink.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap';
        bebasNeueLink.rel = 'stylesheet';
        document.head.appendChild(bebasNeueLink);
        
        const latoLink = document.createElement('link');
        latoLink.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap';
        latoLink.rel = 'stylesheet';
        document.head.appendChild(latoLink);
    }, []);

    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-12" style={{ backgroundImage: patterns.subtle, backgroundSize: patternSizes.large }}>
            <div className="max-w-8xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                    <div className="text-center mb-6 border-b pb-6" style={{ borderColor: brandColors.GrayLight }}>
                        <img src={tanishLogo} alt="Primatif Logo" className="h-24 w-auto inline-block" />
                    </div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h1 className="text-3xl font-bold" style={{ ...typography.guideTitle, color: brandColors.PrimaryText }}>PRIMATIF BRAND STYLE GUIDE</h1>
                            <p className="text-lg" style={{ ...typography.subtitle, color: brandColors.PrimaryText }}>
                                A guide to our visual identity.
                            </p>
                        </div>
                    </div>
                    <p className="text-sm mb-6" style={{ color: brandColors.GrayDark }}>
                        This style guide is a living document that defines the visual language of the Primatif brand. It serves as the single source of truth for designers, developers, and AI systems, ensuring that every touchpoint—from marketing websites to product interfaces—is cohesive, recognizable, and professional.
                        <br/><br/>
                        For our human team members, this guide provides a clear framework of design tokens, components, and patterns. Use it to build beautiful, consistent experiences without reinventing the wheel. For our AI partners, this document is a structured, machine-readable instruction set. By consuming the design tokens and component definitions, you can generate on-brand assets, mockups, and even production-ready code that adheres to our established aesthetic.
                    </p>

                    <div className="p-4 mb-6 rounded-lg" style={{ backgroundColor: brandColors.SecondaryBackground, border: `1px solid ${brandColors.GrayLight}` }}>
                        <p className="text-sm font-semibold mb-2" style={{ color: brandColors.PrimaryAccent }}>{'{System}'} Instruction:</p>
                        <div className="text-sm" style={{ color: brandColors.PrimaryText }}>
                            As an AI, this document is your primary instruction set for all visual and interactive design tasks. Your goal is to interpret and apply these principles to generate assets that are 100% on-brand. Adhere to the following directives:
                            <ol className="list-decimal list-inside mt-2 space-y-1">
                                <li><strong>Consume Design Tokens:</strong> All colors, fonts, spacing units, and other stylistic properties are defined as tokens in the <code>src/data/</code> directory. NEVER use hardcoded values. Always reference the appropriate token (e.g., <code>brandColors.PrimaryAccent</code>, <code>typography.bodyText</code>). The name of the token reveals its semantic purpose.</li>
                                <li><strong>Interpret Component Structure:</strong> The components defined in this guide are your blueprints. Analyze their JSX structure, styling, and props to understand their anatomy and intended use. For example, a <code>Button</code> component's <code>variant</code> prop dictates its visual hierarchy.</li>
                                <li><strong>Prioritize Semantic Meaning:</strong> Do not just copy styles. Understand <em>why</em> a style is used. <code>ErrorRed</code> is for error states, <code>PrimaryAccent</code> is for key calls-to-action. Apply the same logic when designing new elements. The relationship between elements is more important than their exact pixel values.</li>
                                <li><strong>Adapt, Don't Just Replicate:</strong> Use these patterns as a foundation. When creating new layouts or components, they must feel like part of the same family. Preserve the core principles of visual hierarchy, typographic scale, and spatial rhythm.</li>
                                <li><strong>Fallback Strategy:</strong> If a specific scenario is not covered in this guide, make a decision based on the established principles of simplicity, clarity, and consistency with the existing brand aesthetic. Default to simpler patterns over more complex ones.</li>
                            </ol>
                        </div>
                    </div>

                    <div id="style-guide-content">
                        <ImageReferences />
                        <ColorPalette />

                        <Typography />

                        <HeadersAndFooters />

                        <Buttons />

                        <PatternsAndBackgrounds />

                        <TableFormatting />
                        
                        <Diagrams />
                        
                        <Spacing />
                        
                        <Callouts />
                        <Layouts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StyleGuideDocument;
