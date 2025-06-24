import React, { useEffect } from 'react';
import { useImageStore } from '../stores/imageStore';
import ColorProfile from './ColorProfile';
import CumulativeColorPalette from './CumulativeColorPalette';

const ImageReferences = () => {
  const { imageProfiles, isLoading, initialize } = useImageStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (isLoading) {
    return <div className="p-4">Loading and analyzing reference images...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Image References</h2>
      
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {imageProfiles.map(profile => (
          <div key={profile.src} className="break-inside-avoid mb-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={profile.src} alt={`${profile.alt} Reference`} className="w-full h-auto" />
              <ColorProfile colorProfiles={profile.colorProfiles} swatchColors={profile.swatchColors} />
            </div>
          </div>
        ))}
      </div>

      <CumulativeColorPalette imageProfiles={imageProfiles} />
    </div>
  );
};

export default ImageReferences;
