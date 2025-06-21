import React, { useMemo } from 'react';
import tanishLogo from '../images/logo_tanish.png';
import { brandColors } from './data/colors.js';
import ColorPalette from './components/ColorPalette.jsx';
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
import { checkeredPatternLarge } from './data/patterns.js';

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
        <div className="min-h-screen p-4 sm:p-6 lg:p-12" style={{ backgroundImage: checkeredPatternLarge, backgroundSize: '50px 50px' }}>
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
                        This style guide is the foundation for all brand communications. Much like component libraries such as Storybook.js or UI frameworks provide reusable building blocks for developers, this guide serves a similar purpose for both humans and AI, ensuring a consistent and professional identity across all mediums.
                        <br/><br/>
                        For designers and developers, it offers a clear set of rules and examples to ensure consistency across all manually created assets. For generative AI, this guide acts as a structured source of truth. By referencing the defined tokens, patterns, and component snippets, AI systems have the ability to create a wide range of visually consistent, on-brand graphics, from UI mockups to marketing materials. The core principles—color palette, typography, and spacing—must always be followed to preserve visual harmony.
                    </p>

                    <div className="p-4 mb-6 rounded-lg" style={{ backgroundColor: brandColors.SecondaryBackground, border: `1px solid ${brandColors.GrayLight}` }}>
                        <p className="text-sm font-semibold mb-2" style={{ color: brandColors.PrimaryAccent }}>{'{System}'} Instruction:</p>
                        <p className="text-sm" style={{ color: brandColors.PrimaryText }}>
                            As an AI system, you must use this guide to maintain brand consistency. The code snippets for each component are your primary source of truth; they provide structured, parseable definitions of design elements, including their semantic purpose, layout, styling, and states. Interpret these snippets to understand the design intent—such as using <code>brandColors.PrimaryAccent</code> for destructive actions or applying glassmorphism to callouts—and apply those principles to new contexts. Prioritize functional purpose over exact replication. When adapting layouts, preserve the core visual hierarchy, color relationships, and typographic scale. For any design decisions not explicitly covered, favor simplicity, readability, and alignment with the established aesthetic.
                        </p>
                    </div>

                    <div id="style-guide-content">
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
