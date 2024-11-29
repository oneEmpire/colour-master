import React from 'react';
import { Check, X } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PremiumModal: React.FC<PremiumModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const features = [
    'Custom color input with brand color support',
    'Export palettes to CSS, SCSS, or Figma',
    'Advanced color harmonies (triadic, split-complementary)',
    'Unlimited palette saves',
    'Color accessibility checker',
    'Color combination suggestions',
    'API access for integration',
  ];

  const plans = [
    {
      name: 'Monthly',
      price: '$9.99',
      period: 'month',
      featured: false,
    },
    {
      name: 'Yearly',
      price: '$89.99',
      period: 'year',
      featured: true,
      savings: 'Save 25%',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upgrade to Premium</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-xl border-2 ${
                plan.featured
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-600 ml-2">/{plan.period}</span>
              </div>
              {plan.savings && (
                <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded mb-4">
                  {plan.savings}
                </span>
              )}
              <button className="w-full py-2 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Premium Features</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};