import React from 'react';

const IntroSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="animate-fade-in">
        <img 
          src="https://i.imgur.com/kIU5cGL.png" 
          alt="Scratchie Logo" 
          className="w-64 h-64 mx-auto mb-6 object-contain"
        />
        <p className="text-xl text-gray-600 mb-8">Friends & Family Investment Opportunity</p>
        <div className="bg-orange-50 p-6 rounded-lg max-w-md mx-auto">
          <p className="text-2xl font-bold text-orange-600">Winning at Work</p>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide; 