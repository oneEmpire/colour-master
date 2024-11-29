import React from 'react';

export const AdBanner: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <div className="flex items-center justify-center h-[90px] bg-gray-200 rounded">
        <span className="text-gray-500">Advertisement</span>
      </div>
    </div>
  );
};