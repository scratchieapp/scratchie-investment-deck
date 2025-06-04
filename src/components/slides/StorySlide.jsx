import React from 'react';

const StorySlide = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4 animate-fade-in">
          <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">1</div>
          <div>
            <h3 className="font-bold">Started in Construction</h3>
            <p className="text-gray-600">Major builders validated our safety rewards concept</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">2</div>
          <div>
            <h3 className="font-bold">The Big Pivot</h3>
            <p className="text-gray-600">Realized the opportunity was workplace recognition across ALL industries</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">3</div>
          <div>
            <h3 className="font-bold">McDonald's Breakthrough</h3>
            <p className="text-gray-600">10 Sydney stores adopted Scratchie, opening the QSR market</p>
            <p className="text-sm text-gray-500 mt-1">1,000 stores in Australia • 13,000 in the US</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">4</div>
          <div>
            <h3 className="font-bold">Ready to Scale</h3>
            <p className="text-gray-600">Freemium model inspired by SafetyCulture's $2.5B success</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySlide; 