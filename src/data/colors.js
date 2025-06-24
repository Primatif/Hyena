export const brandColors = {
  // Functional Tones
  PrimaryText: "#212121",
  PrimaryBackground: "#FFFFFF",
  SecondaryBackground: "#F3F4F6",
  GrayDark: "#616161",
  GrayMid: "#9E9E9E",
  GrayLight: "#E0E0E0",

  // Brand Colors (based on user request)
  PrimaryAccent: "#E31937", // Primatif Red

  PrimaryAccentDarker: "#5C0411", // Primatif Red Darker

  // Updated Blue Palette
  SecondaryAccent: "#53C8ED", // New main blue (Primatif Sky Blue)
  AccentSkyBlue: "#A0DFF2", // Lighter variant
  AccentDeepBlue: "#0080A4", // Darker variant

  // Tertiary Accent
  TertiaryAccent: "#08FF08", // Green Screen Green

  // Reference Palette - Colors from cumulative image analysis
  ReferenceBeige: "#eee4d7",
  ReferenceGold: "#d7c999",
  ReferenceMint: "#b3ccc7",
  ReferenceAmber: "#f2bb5f",
  ReferenceOrange: "#efa625",
  ReferenceStone: "#aca99f",
  ReferenceTan: "#cb9c5c",
  ReferenceTeal: "#779fa2",
  ReferenceOlive: "#a29171",
  ReferenceKhaki: "#96933f",
  ReferenceCopper: "#c7780e",
  ReferenceCharcoal: "#6f6a60",
  ReferenceBrown: "#a15d29",
  ReferenceSlate: "#416568",
  ReferenceDarkOlive: "#474b3e",

  // Semantic Colors (Generated from script)
  SemanticSuccessGreen: '#56bd28',
  SemanticSuccessGreenLight: '#ebfde3',
  ErrorRed: '#bd4228',
  ErrorRedLight: '#fde7e3',
  WarningYellow: '#bd9228',
  WarningYellowLight: '#fdf5e3',
  InfoBlue: '#2897bd',
  InfoBlueLight: '#e3f6fd',
};

// Semantic Aliases: Provides functional names for colors used in components.
export const semanticColors = {
    // Backgrounds
    backgroundRoot: brandColors.PrimaryBackground, // Base page background
    backgroundSubtle: brandColors.SecondaryBackground, // Subtle backgrounds for containers
    backgroundSurface: brandColors.PrimaryBackground, // Default for cards, modals, etc.

    // Text
    textPrimary: brandColors.PrimaryText,
    textSecondary: brandColors.GrayDark,
    textMuted: brandColors.GrayMid,
    textOnAccent: brandColors.PrimaryBackground, // Text on a colorful background

    // Borders
    borderDefault: brandColors.GrayLight,
    borderSubtle: brandColors.SecondaryBackground, // Using SecondaryBackground as it's a very light gray

    // Accents
    accentPrimary: brandColors.PrimaryAccent,
    accentSecondary: brandColors.SecondaryAccent,

    // Functional Tones
    functionalSuccess: brandColors.SemanticSuccessGreen,
    functionalSuccessBg: brandColors.SemanticSuccessGreenLight,
    functionalError: brandColors.ErrorRed,
    functionalErrorBg: brandColors.ErrorRedLight,
    functionalWarning: brandColors.WarningYellow,
    functionalWarningBg: brandColors.WarningYellowLight,
    functionalInfo: brandColors.InfoBlue,
    functionalInfoBg: brandColors.InfoBlueLight,
};
