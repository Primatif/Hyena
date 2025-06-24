// Utility functions for programmatic color generation

// Convert hex to HSL
const hexToHsl = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
};

// Convert HSL back to hex
const hslToHex = (h, s, l) => {
  h = h / 360;
  s = s / 100;
  l = l / 100;

  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  const toHex = (c) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Find the best color for each semantic purpose based on hue ranges
const findSemanticColors = (referenceColors) => {
  const colorAnalysis = Object.entries(referenceColors).map(([name, hex]) => {
    const [h, s, l] = hexToHsl(hex);
    return { name, hex, hue: h, saturation: s, lightness: l };
  });

  // Define hue ranges for semantic colors (in degrees)
  const semanticHueRanges = {
    success: { min: 90, max: 150, name: 'Green' },    // Green hues
    error: { min: 340, max: 20, name: 'Red' },        // Red hues (wraps around 0)
    warning: { min: 25, max: 65, name: 'Orange' },    // Orange/Yellow hues
    info: { min: 180, max: 240, name: 'Blue' },       // Blue hues
    disabled: { min: 0, max: 360, name: 'Gray' }      // Any hue (we'll pick the most neutral)
  };

  const findBestMatch = (semanticType, range) => {
    let candidates = colorAnalysis.filter(color => {
      if (range.min > range.max) { // Handle wrap-around (like red)
        return color.hue >= range.min || color.hue <= range.max;
      }
      return color.hue >= range.min && color.hue <= range.max;
    });

    // For disabled, prefer colors with lower saturation
    if (semanticType === 'disabled') {
      candidates = colorAnalysis.sort((a, b) => a.saturation - b.saturation);
    }

    // If no direct matches, find closest hue
    if (candidates.length === 0) {
      const targetHue = (range.min + range.max) / 2;
      candidates = colorAnalysis.sort((a, b) => {
        const aDist = Math.min(Math.abs(a.hue - targetHue), 360 - Math.abs(a.hue - targetHue));
        const bDist = Math.min(Math.abs(b.hue - targetHue), 360 - Math.abs(b.hue - targetHue));
        return aDist - bDist;
      });
    }

    return candidates[0];
  };

  const results = {};
  Object.entries(semanticHueRanges).forEach(([semanticType, range]) => {
    const match = findBestMatch(semanticType, range);
    results[semanticType] = match;
  });

  return results;
};

// Generate light and dark variants of a color
const generateVariants = (baseHex, baseName) => {
  const [h, s, l] = hexToHsl(baseHex);
  
  // Generate light variant (increase lightness, decrease saturation slightly)
  const lightL = Math.min(95, l + (95 - l) * 0.8); // Move 80% toward white
  const lightS = Math.max(10, s * 0.3); // Reduce saturation significantly
  const lightHex = hslToHex(h, lightS, lightL);

  // Generate dark variant (for the base color, adjust if too light/dark)
  let darkL = l;
  if (l > 70) darkL = Math.max(25, l - 30); // If too light, darken significantly
  if (l < 30) darkL = Math.min(50, l + 20); // If too dark, lighten slightly
  const darkS = Math.min(100, s * 1.2); // Increase saturation slightly
  const darkHex = hslToHex(h, darkS, darkL);

  return {
    base: baseHex,
    light: lightHex,
    dark: darkHex
  };
};

// Main function to generate semantic colors from reference palette
export const generateSemanticColors = (referenceColors) => {
  const semanticMatches = findSemanticColors(referenceColors);
  const generated = {};

  Object.entries(semanticMatches).forEach(([semanticType, colorInfo]) => {
    const variants = generateVariants(colorInfo.hex, colorInfo.name);
    
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const baseName = `Semantic${capitalize(semanticType)}`;
    
    if (semanticType === 'disabled') {
      generated[`${baseName}Gray`] = variants.base;
    } else {
      generated[`${baseName}${colorInfo.name}`] = variants.base;
      generated[`${baseName}${colorInfo.name}Light`] = variants.light;
    }
  });

  return generated;
};

// Helper function to display the analysis
export const analyzeReferenceColors = (referenceColors) => {
  const semanticMatches = findSemanticColors(referenceColors);
  
  console.log('Semantic Color Analysis:');
  Object.entries(semanticMatches).forEach(([semanticType, colorInfo]) => {
    console.log(`${semanticType}: ${colorInfo.name} (${colorInfo.hex}) - Hue: ${colorInfo.hue.toFixed(1)}°`);
  });
  
  return semanticMatches;
};
