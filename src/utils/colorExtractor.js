import { Image } from 'image-js';
import skmeans from 'skmeans';

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = Math.round(x).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}).join('');

// Calculates the Euclidean distance between two RGB colors.
const getColorDistance = (rgb1, rgb2) => {
  const [r1, g1, b1] = rgb1;
  const [r2, g2, b2] = rgb2;
  return Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));
};

// Filters a list of RGB color centroids to get a diverse set for swatches.
const getDistinctSwatches = (centroids, threshold = 50) => {
  if (!centroids || centroids.length === 0) {
    return [];
  }

  // Sort by luminance (approximate) to make filtering deterministic.
  const sortedCentroids = [...centroids].sort((a, b) => {
    const lumA = 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
    const lumB = 0.2126 * b[0] + 0.7152 * b[1] + 0.0722 * b[2];
    return lumB - lumA;
  });

  const distinctColors = [sortedCentroids[0]];

  for (let i = 1; i < sortedCentroids.length; i++) {
    const currentColor = sortedCentroids[i];
    const isDistinct = distinctColors.every(selectedColor => {
      return getColorDistance(currentColor, selectedColor) > threshold;
    });
    if (isDistinct) {
      distinctColors.push(currentColor);
    }
  }

  return distinctColors.map(c => rgbToHex(c[0], c[1], c[2]));
};

export const extractDominantColors = async (imageUrl, numColors = 20) => {
  try {
    const image = await Image.load(imageUrl);

    const pixels = [];
    const step = 7;
    for (let i = 0; i < image.data.length; i += image.channels * step) {
      pixels.push([image.data[i], image.data[i + 1], image.data[i + 2]]);
    }

    if (pixels.length === 0) {
      return { colorProfiles: [], swatchColors: [] };
    }

    const k = Math.min(numColors, pixels.length);
    const result = skmeans(pixels, k, 'kmpp');

    if (!result || !result.idxs || !result.centroids) {
      console.error('skmeans failed to return a valid result for:', imageUrl);
      return { colorProfiles: [], swatchColors: [] };
    }

    // Create the full color profile for the histogram
    const counts = new Array(result.centroids.length).fill(0);
    result.idxs.forEach(idx => counts[idx]++);
    const totalPixels = pixels.length;
    let colorProfiles = result.centroids.map((centroid, i) => ({
      color: rgbToHex(centroid[0], centroid[1], centroid[2]),
      proportion: (counts[i] || 0) / totalPixels,
    }));
    colorProfiles = colorProfiles.filter(p => p.proportion > 0).sort((a, b) => b.proportion - a.proportion);

    // Generate a distinct set of colors for the swatches
    const swatchColors = getDistinctSwatches(result.centroids);

    return { colorProfiles, swatchColors };

  } catch (error) {
    console.error(`Error processing image ${imageUrl}:`, error);
    return { colorProfiles: [], swatchColors: [] };
  }
};
