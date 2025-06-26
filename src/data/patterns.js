import { brandColors } from './colors.js';

/**
 * Creates a two-color checkered pattern as a URL-encoded SVG for use in CSS background-image.
 * The SVG tile is 10x10, allowing `background-size` to control the final pattern scale.
 * @param {string} color1 - The background color of the pattern tile.
 * @param {string} color2 - The foreground color of the checkered squares.
 * @returns {string} - A CSS `url()` string for the background-image property.
 */
export const createCheckeredPattern = (color1, color2) => {
    const svg = `<svg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'>` +
                `<rect width='10' height='10' fill='${encodeURIComponent(color1)}'/>` +
                `<rect x='0' y='0' width='5' height='5' fill='${encodeURIComponent(color2)}'/>` +
                `<rect x='5' y='5' width='5' height='5' fill='${encodeURIComponent(color2)}'/>` +
                `</svg>`;
    return `url("data:image/svg+xml,${svg}")`;
};

// Predefined pattern variations using brand color tokens.
// These provide visually distinct, balanced backgrounds for different contexts.
export const patterns = {
    // Light and subtle - the original gentle pattern
    subtle: createCheckeredPattern(brandColors.PrimaryBackground, brandColors.GrayLight),
    // Brand accent pattern - red accent on light gray background
    accent: createCheckeredPattern(brandColors.SecondaryBackground, brandColors.PrimaryAccent),
    // Cool and professional - blue tones
    ocean: createCheckeredPattern(brandColors.SecondaryAccent, brandColors.AccentDeepBlue),
    // Warm and earthy - beige and gold tones
    sand: createCheckeredPattern(brandColors.ReferenceBeige, brandColors.ReferenceGold),
    // Fresh and natural - mint and teal
    mint: createCheckeredPattern(brandColors.ReferenceMint, brandColors.ReferenceTeal),
    // Warm and energetic - amber and orange
    sunset: createCheckeredPattern(brandColors.ReferenceAmber, brandColors.ReferenceOrange),
    // Neutral and sophisticated - stone and charcoal
    stone: createCheckeredPattern(brandColors.ReferenceStone, brandColors.ReferenceCharcoal),
    // Rich and warm - tan and copper
    copper: createCheckeredPattern(brandColors.ReferenceTan, brandColors.ReferenceCopper),
    // Deep and grounded - olive and slate
    forest: createCheckeredPattern(brandColors.ReferenceOlive, brandColors.ReferenceSlate),
};

// Predefined sizes to control the scale of the background patterns.
export const patternSizes = {
    small: '10px 10px',
    medium: '25px 25px',
    large: '50px 50px',
};
