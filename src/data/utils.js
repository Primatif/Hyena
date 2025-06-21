// Helper to convert hex to rgba for tints
export const hexToRgba = (hex, alpha) => {
    if (!hex || typeof hex !== 'string') {
        console.warn(`Invalid hex color passed to hexToRgba: ${hex}`);
        return `rgba(128, 128, 128, ${alpha || 1})`; // Return a neutral gray for invalid input
    }
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
