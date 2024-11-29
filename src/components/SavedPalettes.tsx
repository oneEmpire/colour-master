import React from 'react';
import { Trash2 } from 'lucide-react';
import { usePaletteStore } from '../store/usePaletteStore';
import { ColorCard } from './ColorCard';

export const SavedPalettes: React.FC = () => {
  const { palettes, removePalette } = usePaletteStore();

  if (palettes.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No saved palettes yet. Generate and save some palettes to see them here!
      </div>
    );
  }

  return (
    <div className="grid gap-8">
      {palettes.map((palette) => (
        <div
          key={palette.id}
          className="bg-white rounded-lg p-6 shadow-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-medium">{palette.name}</h3>
              <p className="text-sm text-gray-500">
                {new Date(palette.createdAt).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => removePalette(palette.id)}
              className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {palette.colors.map((color, index) => (
              <ColorCard key={index} color={color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};