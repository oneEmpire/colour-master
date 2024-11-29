import chroma from 'chroma-js';

export const generatePalette = (baseColor: string, count: number = 5): string[] => {
  const base = chroma(baseColor);
  const colors: string[] = [];

  // Generate analogous colors
  for (let i = 0; i < count; i++) {
    const hue = (base.get('hsl.h') + (360 / count) * i) % 360;
    colors.push(
      chroma.hsl(hue, base.get('hsl.s'), base.get('hsl.l')).hex()
    );
  }

  return colors;
};

export const getContrastColor = (bgColor: string): string => {
  return chroma(bgColor).luminance() > 0.5 ? '#000000' : '#ffffff';
};

export const generateColorName = (hex: string): string => {
  const hsl = chroma(hex).hsl();
  const hue = hsl[0];
  const saturation = hsl[1];
  const lightness = hsl[2];

  let name = '';

  if (lightness < 0.2) name = 'Dark ';
  else if (lightness > 0.8) name = 'Light ';

  if (saturation < 0.2) {
    return name + 'Gray';
  }

  if (hue >= 0 && hue < 30) name += 'Red';
  else if (hue >= 30 && hue < 60) name += 'Orange';
  else if (hue >= 60 && hue < 120) name += 'Yellow';
  else if (hue >= 120 && hue < 180) name += 'Green';
  else if (hue >= 180 && hue < 240) name += 'Cyan';
  else if (hue >= 240 && hue < 300) name += 'Blue';
  else name += 'Purple';

  return name;
};