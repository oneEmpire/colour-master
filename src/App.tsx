
import { Palette } from 'lucide-react';
import { PaletteGenerator } from './components/PaletteGenerator';
import { SavedPalettes } from './components/SavedPalettes';
import { Toaster } from 'react-hot-toast';
import { AdBanner } from './components/AdBanner';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Palette className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold">Palette Pro</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner />
        <PaletteGenerator />
        
        <AdBanner />
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Saved Palettes</h2>
          <SavedPalettes />
        </div>
        
        <AdBanner />
      </main>

      <Toaster position="bottom-right" />
    </div>
  );
}
export default App