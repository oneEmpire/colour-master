export interface Color {
  hex: string;
  name: string;
}

export interface Palette {
  id: string;
  name: string;
  colors: Color[];
  createdAt: Date;
  isPremium: boolean;
}