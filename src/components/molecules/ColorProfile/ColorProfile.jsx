import React from 'react';

const ColorProfile = ({ colorProfiles, swatchColors }) => {
  if (!colorProfiles || colorProfiles.length === 0) {
    return <div className="p-4 text-sm text-gray-500">Loading color profile...</div>;
  }

  return (
    <div className="p-4">
      {/* Histogram */}
      <div className="w-full h-6 flex rounded-md overflow-hidden border border-gray-200">
        {colorProfiles.map(({ color, proportion }, index) => (
          <div
            key={`bar-${index}`}
            style={{
              backgroundColor: color,
              width: `${proportion * 100}%`,
            }}
            title={`${color} (${(proportion * 100).toFixed(2)}%)`}
          />
        ))}
      </div>

      {/* Swatches */}
      {swatchColors && swatchColors.length > 0 && (
        <div className="mt-4">
          <h4 className="text-xs font-bold uppercase text-gray-500 mb-2">Color Palette</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {swatchColors.map((color, index) => (
              <div key={`swatch-${index}`} className="flex items-center space-x-2">
                <div
                  className="w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                  style={{ backgroundColor: color }}
                  title={color}
                />
                <span className="text-xs font-mono text-gray-600">{color}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { ColorProfile };
