import { create } from 'zustand';
import { extractDominantColors } from '../utils/colorExtractor';

// A predefined list of the reference images located in /public/images/reference/
const imageFileNames = [
  'hyena_ref.png',
  'swatches_tall_ref.png',
  'seasons_ref.png',
];

export const useImageStore = create((set, get) => ({
  imageProfiles: [],
  isLoading: true,

  // Action to initialize the store, load images, and run color analysis
  initialize: async () => {
    if (get().imageProfiles.length > 0) return; // Prevent re-initialization

    set({ isLoading: true });

    try {
      const profiles = await Promise.all(
        imageFileNames.map(async (fileName) => {
          const src = `/images/reference/${fileName}`;
          const alt = fileName.replace(/_ref\.png$/, '').replace(/_/g, ' ');
          try {
            const { colorProfiles, swatchColors } = await extractDominantColors(src);
            return { src, alt, colorProfiles, swatchColors };
          } catch (error) {
            console.error(`Failed to process image ${src}:`, error);
            return { src, alt, colorProfiles: [], swatchColors: [] }; // Return with empty profiles on error
          }
        })
      );
      set({ imageProfiles: profiles, isLoading: false });
    } catch (error) {
      console.error('A critical error occurred during image initialization:', error);
      set({ isLoading: false });
    }
  },
}));
