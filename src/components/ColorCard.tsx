import React from 'react';
import { Copy } from 'lucide-react';
import { Color } from '../types/palette';
import { getContrastColor } from '../utils/colorUtils';
import toast from 'react-hot-toast';

interface ColorCardProps {
  color: Color;
}

export const ColorCard: React.FC<ColorCardProps> = ({ color }) => {
  const textColor = getContrastColor(color.hex);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.hex);
    toast.success('Color copied to clipboard!');
  };

  return (
    <div
      className="relative group h-32 rounded-lg transition-transform hover:scale-105"
      style={{ backgroundColor: color.hex }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: textColor }}
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">{color.name}</span>
          <button
            onClick={copyToClipboard}
            className="p-1 rounded hover:bg-black/10"
          >
            <Copy size={16} />
          </button>
        </div>
        <span className="text-sm">{color.hex}</span>
      </div>
    </div>
  );
};