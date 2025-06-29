import React, { useMemo } from 'react';
import tanishLogo from '../../../images/logo_tanish.png';
import topBanner from '../../../images/top_banner.png';
import { brandColors } from '../../data/colors.js';
import { typography } from '../../data/typography.js';
import { patterns, patternSizes } from '../../data/patterns.js';

// Import atomic components for composition
import Text from '../../components/atoms/Text/Text.jsx';
import Heading from '../../components/atoms/Heading/Heading.jsx';
import Card from '../../components/atoms/Card/Card.jsx';
import Callout from '../../components/molecules/Callout/Callout.jsx';
import InstructionBlock from '../../components/molecules/InstructionBlock/InstructionBlock.jsx';
import { ExampleSection } from '../../components/molecules/ExampleSection/ExampleSection.jsx';

// Import organisms for content sections
import ColorPalette from '../../components/organisms/ColorPalette/ColorPalette.jsx';
import ImageReferences from '../../components/organisms/ImageReferences/ImageReferences.jsx';
import Typography from '../../components/organisms/Typography/Typography.jsx';
import HeadersAndFooters from '../../components/organisms/HeadersAndFooters/HeadersAndFooters.jsx';
import Buttons from '../../components/organisms/Buttons/Buttons.jsx';
import PatternsAndBackgrounds from '../../components/organisms/PatternsAndBackgrounds/PatternsAndBackgrounds.jsx';
import TableFormatting from '../../components/organisms/TableFormatting/TableFormatting.jsx';
import Diagrams from '../../components/organisms/Diagrams/Diagrams.jsx';
import Spacing from '../../components/organisms/Spacing/Spacing.jsx';
import Callouts from '../../components/organisms/Callouts/Callouts.jsx';


const StyleGuide = () => {
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

    const documentStyle = useMemo(() => ({
        fontFamily: typography.body.fontFamily,
        fontSize: typography.body.fontSize,
        color: brandColors.PrimaryText,
        backgroundColor: brandColors.PrimaryBackground,
        minHeight: '100vh',
    }), []);

    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-12" style={{ backgroundColor: brandColors.ReferenceBeige, backgroundImage: patterns.sand, backgroundSize: patternSizes.large }}>
            <Card className="max-w-6xl mx-auto" variant="elevated">
                <div className="p-6 sm:p-8">
                    <div className="mb-6 border-b pb-6" style={{ borderColor: brandColors.GrayLight }}>
                        <img src={tanishLogo} alt="Primatif Logo" className="h-24 w-auto inline-block" />
                        <Heading level={1} variant="display" className="mt-4 mb-2">
                            Primatif AI Design Standard
                        </Heading>
                    </div>
                    <Text variant="body" className="mb-6" style={{ color: brandColors.GrayDark }}>
                        <strong>Hyena</strong> solves a critical challenge in AI-generated content: the gap between generic styling and authentic brand expression. Current generative content tools produce visually generic outputs that fail to capture brand identity, making it difficult to create professional, cohesive materials that align with established brand standards.
                        <br/><br/>
                        Hyena provides an AI-consumable design standard that serves as a foundation for intelligent content generation. This system consists of centralized design tokens, component libraries, implementation snippets, and semantic documentation that enable AI canvas tools to produce novel layouts while preserving brand consistency and visual sophistication across digital and print contexts.
                    </Text>


                    <div className="text-center">
                            <img src={topBanner} alt="Top Banner" className="w-full h-auto mb-6 mt-6" />
                        </div>

                    <InstructionBlock title="{System} Instructions" variant="text" showCopyButton={true}>
                        As an AI, this document is your primary instruction set for all visual and interactive design tasks. Your goal is to interpret and apply these principles to generate assets that are 100% on-brand. Adhere to the following directives:

1. Consume Design Tokens: All colors, fonts, spacing units, and other stylistic properties are defined as tokens in the src/data/ directory. NEVER use hardcoded values. Always reference the appropriate token (e.g., brandColors.PrimaryAccent, typography.bodyText). The name of the token reveals its semantic purpose.

2. Interpret Component Structure: The components defined in this guide are your blueprints. Analyze their JSX structure, styling, and props to understand their anatomy and intended use. For example, a Button component's variant prop dictates its visual hierarchy.

3. Prioritize Semantic Meaning: Do not just copy styles. Understand why a style is used. ErrorRed is for error states, PrimaryAccent is for key calls-to-action. Apply the same logic when designing new elements. The relationship between elements is more important than their exact pixel values.

4. Adapt, Don't Just Replicate: Use these patterns as a foundation. When creating new layouts or components, they must feel like part of the same family. Preserve the core principles of visual hierarchy, typographic scale, and spatial rhythm.

5. Fallback Strategy: If a specific scenario is not covered in this guide, make a decision based on the established principles of simplicity, clarity, and consistency with the existing brand aesthetic. Default to simpler patterns over more complex ones.
                    </InstructionBlock>

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

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default StyleGuide;
