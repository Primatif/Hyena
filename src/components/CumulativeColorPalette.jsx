import React from 'react';

// Converts hex color to RGB array
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
};

// Calculates the Euclidean distance between two RGB colors
const getColorDistance = (rgb1, rgb2) => {
  const [r1, g1, b1] = rgb1;
  const [r2, g2, b2] = rgb2;
  return Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));
};

// Filters colors to get the most distinct ones
const getDistinctColors = (colors, maxColors = 15, threshold = 45) => {
  if (!colors || colors.length === 0) {
    return [];
  }

  // Convert hex colors to RGB and sort by luminance for consistent processing
  const rgbColors = colors.map(hexToRgb).filter(Boolean);
  const sortedColors = rgbColors.sort((a, b) => {
    const lumA = 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
    const lumB = 0.2126 * b[0] + 0.7152 * b[1] + 0.0722 * b[2];
    return lumB - lumA;
  });

  const distinctColors = [sortedColors[0]];

  for (let i = 1; i < sortedColors.length && distinctColors.length < maxColors; i++) {
    const currentColor = sortedColors[i];
    const isDistinct = distinctColors.every(selectedColor => {
      return getColorDistance(currentColor, selectedColor) > threshold;
    });
    if (isDistinct) {
      distinctColors.push(currentColor);
    }
  }

  // Convert back to hex
  return distinctColors.map(([r, g, b]) => {
    const toHex = (c) => {
      const hex = Math.round(c).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  });
};

const CumulativeColorPalette = ({ imageProfiles }) => {
  if (!imageProfiles || imageProfiles.length === 0) {
    return null;
  }

  // Aggregate all swatch colors from all images
  const allSwatchColors = imageProfiles.reduce((acc, profile) => {
    if (profile.swatchColors && profile.swatchColors.length > 0) {
      acc.push(...profile.swatchColors);
    }
    return acc;
  }, []);

  // Get the 15 most distinct colors
  const distinctColors = getDistinctColors(allSwatchColors, 15);

  if (distinctColors.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Cumulative Color Palette</h3>
      <p className="text-sm text-gray-600 mb-4">
        The {distinctColors.length} most distinct colors across all reference images
      </p>
      <div className="flex flex-wrap gap-4">
        {distinctColors.map((color, index) => (
          <div key={`cumulative-${index}`} className="flex flex-col items-center">
            <div
              className="w-12 h-12 rounded-lg border border-gray-300 shadow-sm mb-2"
              style={{ backgroundColor: color }}
              title={color}
            />
            <span className="text-xs font-mono text-gray-600">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CumulativeColorPalette;
