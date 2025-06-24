// Script to generate semantic colors from reference palette
// No imports needed for this simple version

// Reference colors from your palette
const referenceColors = {
  ReferenceBeige: '#eee4d7',
  ReferenceGold: '#d7c999',
  ReferenceMint: '#b3ccc7',
  ReferenceAmber: '#f2bb5f',
  ReferenceOrange: '#efa625',
  ReferenceStone: '#aca99f',
  ReferenceTan: '#cb9c5c',
  ReferenceTeal: '#779fa2',
  ReferenceOlive: '#a29171',
  ReferenceKhaki: '#96933f',
  ReferenceCopper: '#c7780e',
  ReferenceCharcoal: '#6f6a60',
  ReferenceBrown: '#a15d29',
  ReferenceSlate: '#416568',
  ReferenceDarkOlive: '#474b3e',
};

// Manual curation for better semantic mapping
const manualSemanticMapping = {
  success: 'ReferenceKhaki',      // A brighter, more traditional khaki green
  error: 'ReferenceCopper',       // Copper for error (reddish)
  warning: 'ReferenceAmber',      // Amber for warning (yellow/orange)
  info: 'ReferenceTeal',          // Teal for info (blue)
  disabled: 'ReferenceCharcoal',  // Charcoal for disabled (gray)
};

// Define the ideal hues for each semantic purpose
const idealSemanticHues = {
  success: 120, // Green
  error: 0,     // Red
  warning: 45,  // Yellow/Amber
  info: 200,    // Blue
};

// Generate semantic colors by blending ideal hues with the reference palette
const generateBlendedSemanticColors = () => {
  const results = {};

  Object.entries(manualSemanticMapping).forEach(([semantic, colorName]) => {
    const influencingHex = referenceColors[colorName];
    const [influencingH, , ] = hexToHsl(influencingHex);

    if (semantic === 'disabled') {
      results['DisabledGray'] = influencingHex;
      return;
    }

    const idealH = idealSemanticHues[semantic];

    // Blend Hues (70% ideal, 30% influencing) to tint the color
    // This handles the circular nature of hue (e.g., for red at 0/360 degrees)
    let blendedH;
    if (Math.abs(idealH - influencingH) > 180) {
      // If hues are on opposite sides of the color wheel, blend the shorter way
      if (idealH < influencingH) {
        blendedH = ((idealH + 360) * 0.7) + (influencingH * 0.3);
      } else {
        blendedH = (idealH * 0.7) + ((influencingH + 360) * 0.3);
      }
    } else {
      blendedH = (idealH * 0.7) + (influencingH * 0.3);
    }
    blendedH %= 360;

    // Define optimal saturation and lightness for dark and light variants
    const darkHex = hslToHex(blendedH, 65, 45); // Brighter, saturated color for text/borders
    const lightHex = hslToHex(blendedH, 85, 94); // More saturated, vibrant color for backgrounds

    // Create CamelCase token names
    const type = semantic.charAt(0).toUpperCase() + semantic.slice(1);
    const color = semantic === 'success' ? 'Green' :
                  semantic === 'error' ? 'Red' :
                  semantic === 'warning' ? 'Yellow' : 'Blue';
    
    const baseName = (semantic === 'success') ? `Semantic${type}${color}` : `${type}${color}`;
    
    results[baseName] = darkHex;
    results[`${baseName}Light`] = lightHex;
  });

  return results;
};

// Helper function for HSL conversion (copied from colorGenerator.js for standalone script)
const hexToHsl = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
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
    r = g = b = l;
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

console.log('\nGenerated Semantic Colors:');
const betterColors = generateBlendedSemanticColors();
Object.entries(betterColors).forEach(([token, hex]) => {
  console.log(`  ${token}: '${hex}',`);
});

console.log('\n--- Copy the above colors to replace the semantic colors in colors.js ---');
