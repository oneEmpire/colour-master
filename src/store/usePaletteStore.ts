import { create } from 'zustand';
import { Color, Palette } from '../types/palette';

interface PaletteStore {
  palettes: Palette[];
  activePalette: Palette | null;
  addPalette: (palette: Palette) => void;
  removePalette: (id: string) => void;
  setActivePalette: (palette: Palette | null) => void;
}

export const usePaletteStore = create<PaletteStore>((set) => ({
  palettes: [],
  activePalette: null,
  addPalette: (palette) =>
    set((state) => ({ palettes: [...state.palettes, palette] })),
  removePalette: (id) =>
    set((state) => ({
      palettes: state.palettes.filter((p) => p.id !== id),
    })),
  setActivePalette: (palette) => set({ activePalette: palette }),
}));