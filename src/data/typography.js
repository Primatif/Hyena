export const fonts = {
    heading: '"Bebas Neue", sans-serif',
    body: '"Lato", sans-serif',
    subtitle: '"Lato", sans-serif',
    code: 'monospace',
};

export const fontSizes = {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
};

export const fontWeights = {
    regular: '400',
    bold: '700',
};

export const typography = {
    // General heading styles
    h1: {
        fontFamily: fonts.heading,
        fontSize: fontSizes['5xl'],
        fontWeight: fontWeights.bold,
        letterSpacing: '0.05em',
        marginBottom: '1rem',
    },
    h2: {
        fontFamily: fonts.heading,
        fontSize: fontSizes['4xl'],
        fontWeight: fontWeights.bold,
        letterSpacing: '0.05em',
        marginBottom: '0.75rem',
    },
    h3: {
        fontFamily: fonts.heading,
        fontSize: fontSizes['2xl'],
        fontWeight: fontWeights.bold,
        letterSpacing: '0.05em',
        marginBottom: '0.5rem',
    },
    h4: {
        fontFamily: fonts.heading,
        fontSize: fontSizes.xl,
        fontWeight: fontWeights.bold,
        letterSpacing: '0.05em',
        marginBottom: '0.5rem',
    },
    h5: {
        fontFamily: fonts.heading,
        fontSize: fontSizes.lg,
        fontWeight: fontWeights.bold,
        letterSpacing: '0.05em',
        marginBottom: '0.5rem',
    },
    h6: {
        fontFamily: fonts.heading,
        fontSize: fontSizes.base,
        fontWeight: fontWeights.bold,
        letterSpacing: '0.05em',
        marginBottom: '0.5rem',
    },

    // General text styles
    body: {
        fontFamily: fonts.body,
        fontSize: fontSizes.base,
        fontWeight: fontWeights.regular,
    },
    subtitle: {
        fontFamily: fonts.subtitle,
        fontSize: fontSizes.lg,
        fontWeight: fontWeights.regular,
    },
    code: {
        fontFamily: fonts.code,
        fontSize: fontSizes.sm,
    },

    // Specific application styles
    guideTitle: {
        fontFamily: fonts.heading,
        fontSize: fontSizes['3xl'],
        fontWeight: fontWeights.bold,
        letterSpacing: '0.05em',
    },
    appLogo: {
        fontFamily: fonts.heading,
        fontSize: fontSizes.xl,
        fontWeight: fontWeights.bold,
        letterSpacing: '0.05em',
    },

    // Component-specific tokens for Headers and Footers
    headerLogo: {
        fontFamily: fonts.heading,
        fontSize: fontSizes['2xl'],
        fontWeight: fontWeights.bold,
    },
    footerLogo: {
        fontFamily: fonts.heading,
        fontSize: fontSizes.lg,
        fontWeight: fontWeights.bold,
    },
    footerText: {
        fontFamily: fonts.body,
        fontSize: fontSizes.xs,
        fontWeight: fontWeights.regular,
    },

    // Component-specific token for Buttons
    button: {
        fontFamily: fonts.body,
        fontSize: fontSizes.base,
        fontWeight: fontWeights.bold,
    },
};
