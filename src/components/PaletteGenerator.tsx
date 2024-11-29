import React, { useState } from 'react';
import { RefreshCw, Save } from 'lucide-react';
import { generatePalette, generateColorName } from '../utils/colorUtils';
import { ColorCard } from './ColorCard';
import { CustomColorInput } from './premium/CustomColorInput';
import { ExportOptions } from './premium/ExportOptions';
import { usePaletteStore } from '../store/usePaletteStore';
import { useSubscriptionStore } from '../store/useSubscriptionStore';
import toast from 'react-hot-toast';

export const PaletteGenerator: React.FC = () => {
  const [colors, setColors] = useState(() => 
    generatePalette('#' + Math.floor(Math.random()*16777215).toString(16))
  );
  
  const { addPalette } = usePaletteStore();
  const { isPremium } = useSubscriptionStore();

  const regeneratePalette = () => {
    const newBaseColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColors(generatePalette(newBaseColor));
  };

  const savePalette = () => {
    const palette = {
      id: Date.now().toString(),
      name: 'My Palette',
      colors: colors.map(hex => ({
        hex,
        name: generateColorName(hex)
      })),
      createdAt: new Date(),
      isPremium
    };
    
    addPalette(palette);
    toast.success('Palette saved!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Color Palette Generator</h2>
        <div className="flex gap-4">
          <button
            onClick={regeneratePalette}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <RefreshCw size={18} />
            Generate New
          </button>
          <button
            onClick={savePalette}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Save size={18} />
            Save Palette
          </button>
        </div>
      </div>

      <div className="mb-6">
        <CustomColorInput onColorChange={(color) => setColors(generatePalette(color))} />
      </div>

      <div className="grid grid-cols-5 gap-4 mb-8">
        {colors.map((hex, index) => (
          <ColorCard
            key={index}
            color={{ hex, name: generateColorName(hex) }}
          />
        ))}
      </div>

      <div className="mb-8">
        <ExportOptions colors={colors.map(hex => ({ hex, name: generateColorName(hex) }))} />
      </div>
    </div>
  );
};