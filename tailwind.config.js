import { brandColors } from './src/data/colors.js';
import { fonts, fontSizes, fontWeights } from './src/data/typography.js';

// Helper to convert CamelCase color names to kebab-case for Tailwind class names
const toKebabCase = (str) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

// Create a Tailwind-compatible color palette from our brandColors object
const tailwindColors = Object.fromEntries(
  Object.entries(brandColors).map(([key, value]) => [toKebabCase(key), value])
);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: tailwindColors,
      fontFamily: {
        heading: fonts.heading,
        body: fonts.body,
        code: fonts.code,
      },
      fontSize: fontSizes,
      fontWeight: fontWeights,
    },
  },
  plugins: [],
}
