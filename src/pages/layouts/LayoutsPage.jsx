import React, { useMemo, useEffect } from 'react';
import Card from '../../components/atoms/Card/Card.jsx';
import Heading from '../../components/atoms/Heading/Heading.jsx';
import Text from '../../components/atoms/Text/Text.jsx';
import Layouts from '../../components/templates/Layouts/Layouts.jsx';
import { brandColors } from '../../data/colors.js';
import { typography } from '../../data/typography.js';
import { patterns, patternSizes } from '../../data/patterns.js';
import tanishLogo from '../../../images/logo_tanish.png';

const LayoutsPage = () => {
    // Load Lato font
    useEffect(() => {
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
                    <div className="text-center mb-6 border-b pb-6" style={{ borderColor: brandColors.GrayLight }}>
                        <img src={tanishLogo} alt="Primatif Logo" className="h-24 w-auto inline-block" />
                        <Heading level={1} variant="display" className="mt-4 mb-2">
                            Layout Templates
                        </Heading>
                    </div>
                    
                    <Text variant="body" className="mb-6" style={{ color: brandColors.GrayDark }}>
                        <strong>Layout Templates</strong> showcase the complete page-level compositions built with our atomic design system. 
                        These templates demonstrate how atoms, molecules, and organisms combine to create functional, branded layouts 
                        for different use cases and content types.
                    </Text>

                    <Text variant="body" className="mb-8" style={{ color: brandColors.GrayDark }}>
                        Each template is fully composable and token-compliant, serving as both reference implementations 
                        and starting points for new page designs that maintain brand consistency across all touchpoints.
                    </Text>

                    {/* Display all layout templates */}
                    <Layouts />
                </div>
            </Card>
        </div>
    );
};

export default LayoutsPage;
