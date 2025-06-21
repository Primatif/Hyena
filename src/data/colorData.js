import { brandColors } from './colors.js';

export const brandColorsData = [
    { name: 'Primatif Red', token: 'PrimaryAccent', hex: brandColors.PrimaryAccent },

    { name: 'Primatif Red Darker', token: 'PrimaryAccentDarker', hex: brandColors.PrimaryAccentDarker },
    { name: 'Primatif Sky Blue', token: 'SecondaryAccent', hex: brandColors.SecondaryAccent },
    { name: 'Sky Blue Light', token: 'AccentSkyBlue', hex: brandColors.AccentSkyBlue },
    { name: 'Deep Blue', token: 'AccentDeepBlue', hex: brandColors.AccentDeepBlue },
];

export const functionalTonesData = [
    { name: 'Primary Text', token: 'PrimaryText', hex: brandColors.PrimaryText },
    { name: 'Gray Dark', token: 'GrayDark', hex: brandColors.GrayDark },
    { name: 'Gray Mid', token: 'GrayMid', hex: brandColors.GrayMid },
    { name: 'Gray Light', token: 'GrayLight', hex: brandColors.GrayLight },
    { name: 'Secondary Background', token: 'SecondaryBackground', hex: brandColors.SecondaryBackground },
    { name: 'Primary Background', token: 'PrimaryBackground', hex: brandColors.PrimaryBackground, border: true },
];

export const semanticColorsData = [
    { name: 'Success Green', token: 'SemanticSuccessGreen', hex: brandColors.SemanticSuccessGreen },
    { name: 'Success Green Light', token: 'SemanticSuccessGreenLight', hex: brandColors.SemanticSuccessGreenLight },
    { name: 'Error Red', token: 'ErrorRed', hex: brandColors.ErrorRed },
    { name: 'Error Red Light', token: 'ErrorRedLight', hex: brandColors.ErrorRedLight },
    { name: 'Warning Yellow', token: 'WarningYellow', hex: brandColors.WarningYellow },
    { name: 'Warning Yellow Light', token: 'WarningYellowLight', hex: brandColors.WarningYellowLight },
    { name: 'Info Blue', token: 'InfoBlue', hex: brandColors.InfoBlue },
    { name: 'Info Blue Light', token: 'InfoBlueLight', hex: brandColors.InfoBlueLight },
    { name: 'Disabled Gray', token: 'DisabledGray', hex: brandColors.DisabledGray },
];
