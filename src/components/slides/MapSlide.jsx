import React from 'react';
import AustraliaMap from '../AustraliaMap';

const MapSlide = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Australian Expansion Map</h2>
      <AustraliaMap />
      <div className="mt-6 grid grid-cols-2 gap-4 max-w-md mx-auto">
        <div className="text-center">
          <p className="text-2xl font-bold text-red-600">NSW</p>
          <p className="text-sm text-gray-600">Current stronghold</p>
          <p className="text-xs">McDonald's pilot + construction</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-orange-600">VIC</p>
          <p className="text-sm text-gray-600">Next expansion</p>
          <p className="text-xs">Major QSR chains</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">QLD</p>
          <p className="text-sm text-gray-600">Q3 2025 target</p>
          <p className="text-xs">Mining + construction</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">WA</p>
          <p className="text-sm text-gray-600">Q4 2025 target</p>
          <p className="text-xs">Resources sector</p>
        </div>
      </div>
    </div>
  );
};

export default MapSlide; 