// Service Sheet Dynamic Styles - Design Token Integration
import { brandColors } from '../../../data/colors.js';
import { fonts, fontWeights } from '../../../data/typography.js';
import { spacing } from '../../../data/spacing.js';
import { patterns, patternSizes } from '../../../data/patterns.js';

// Inject CSS custom properties based on design tokens
export const injectServiceSheetStyles = () => {
    // Create or get existing style element
    let styleElement = document.getElementById('service-sheet-tokens');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'service-sheet-tokens';
        document.head.appendChild(styleElement);
    }

    // Generate CSS custom properties from design tokens
    const cssVariables = `
        :root {
            /* Colors */
            --color-primary-text: ${brandColors.PrimaryText};
            --color-primary-background: ${brandColors.PrimaryBackground};
            --color-primary-accent: ${brandColors.PrimaryAccent};
            --color-secondary-background: ${brandColors.SecondaryBackground};
            --color-gray-light: ${brandColors.GrayLight};
            --color-gray-dark: ${brandColors.GrayDark};
            --color-reference-charcoal: ${brandColors.ReferenceCharcoal};
            --color-reference-beige: ${brandColors.ReferenceBeige};
            --color-reference-slate: ${brandColors.ReferenceSlate};
            --color-reference-brown: ${brandColors.ReferenceBrown};
            --color-info-blue: ${brandColors.InfoBlue};
            --color-info-blue-light: ${brandColors.InfoBlueLight};
            --color-info-blue-50: ${brandColors.InfoBlue}80; /* 50% opacity */
            
            /* Typography */
            --font-body: ${fonts.body};
            --font-weight-bold: ${fontWeights.bold};
            
            /* Spacing */
            --spacing-xs: ${spacing.xs};
            --spacing-sm: ${spacing.sm};
            --spacing-md: ${spacing.md};
            --spacing-lg: ${spacing.lg};
            --spacing-xl: ${spacing.xl};
            
            /* Patterns */
            --pattern-subtle: ${patterns.subtle};
            --pattern-accent: ${patterns.accent};
            --pattern-sand: ${patterns.sand || patterns.subtle};
            --pattern-size-small: ${patternSizes.small};
            --pattern-size-large: ${patternSizes.large};
        }
    `;

    styleElement.textContent = cssVariables;
};

// Export tokens for use in React components if needed
export const serviceSheetTokens = {
    colors: {
        primaryText: brandColors.PrimaryText,
        primaryBackground: brandColors.PrimaryBackground,
        primaryAccent: brandColors.PrimaryAccent,
        secondaryBackground: brandColors.SecondaryBackground,
        grayLight: brandColors.GrayLight,
        grayDark: brandColors.GrayDark,
        referenceCharcoal: brandColors.ReferenceCharcoal,
        referenceBeige: brandColors.ReferenceBeige,
        referenceSlate: brandColors.ReferenceSlate,
        referenceBrown: brandColors.ReferenceBrown,
        infoBlue: brandColors.InfoBlue,
        infoBlueLight: brandColors.InfoBlueLight,
    },
    fonts: {
        body: fonts.body,
    },
    fontWeights: {
        bold: fontWeights.bold,
    },
    spacing: {
        xs: spacing.xs,
        sm: spacing.sm,
        md: spacing.md,
        lg: spacing.lg,
        xl: spacing.xl,
    },
    patterns: {
        subtle: patterns.subtle,
        accent: patterns.accent,
        sand: patterns.sand || patterns.subtle,
    },
    patternSizes: {
        small: patternSizes.small,
        large: patternSizes.large,
    }
};
