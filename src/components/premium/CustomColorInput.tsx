import React, { useState } from 'react';

interface CustomColorInputProps {
  onColorChange: (color: string) => void;
}

export const CustomColorInput: React.FC<CustomColorInputProps> = ({ onColorChange }) => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-12 h-12 rounded cursor-pointer"
      />
      <input
        type="text"
        value={color}
        onChange={(e) => {
          const newColor = e.target.value;
          if (/^#[0-9A-F]{6}$/i.test(newColor)) {
            setColor(newColor);
            onColorChange(newColor);
          }
        }}
        className="px-3 py-2 border rounded"
        placeholder="#000000"
      />
    </div>
  );
};