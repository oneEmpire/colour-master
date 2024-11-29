import React from 'react';
import { Download } from 'lucide-react';
import { Color } from '../../types/palette';

interface ExportOptionsProps {
  colors: Color[];
}

export const ExportOptions: React.FC<ExportOptionsProps> = ({ colors }) => {
  const generateCSS = () => {
    const css = colors
      .map((color, index) => `--color-${index + 1}: ${color.hex};`)
      .join('\n');
    return `:root {\n${css}\n}`;
  };

  const generateSCSS = () => {
    const scss = colors
      .map((color, index) => `$color-${index + 1}: ${color.hex};`)
      .join('\n');
    return scss;
  };

  const downloadFormat = (format: 'css' | 'scss') => {
    const content = format === 'css' ? generateCSS() : generateSCSS();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `palette.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => downloadFormat('css')}
        className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
      >
        <Download size={16} />
        CSS
      </button>
      <button
        onClick={() => downloadFormat('scss')}
        className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
      >
        <Download size={16} />
        SCSS
      </button>
    </div>
  );
};