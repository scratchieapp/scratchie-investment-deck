import React from 'react';

const AustraliaMap = () => (
  <div className="relative w-full max-w-lg mx-auto">
    {/* Australia map image */}
    <img 
      src="https://i.imgur.com/Ut06Nzl.jpeg" 
      alt="Map of Australia" 
      className="w-full h-auto"
    />
    
    {/* State indicators overlaid on the image */}
    
    {/* NSW - Sydney area */}
    <div className="absolute" style={{top: '62%', left: '74%', transform: 'translate(-50%, -50%)'}}>
      <div className="relative">
        <div className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold opacity-90 animate-pulse">
          NSW
        </div>
      </div>
    </div>
    
    {/* VIC - Melbourne area */}
    <div className="absolute" style={{top: '75%', left: '70%', transform: 'translate(-50%, -50%)'}}>
      <div className="relative">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-90 animate-pulse" style={{animationDelay: '0.5s'}}>
          VIC
        </div>
      </div>
    </div>
    
    {/* QLD - Brisbane area */}
    <div className="absolute" style={{top: '42%', left: '75%', transform: 'translate(-50%, -50%)'}}>
      <div className="relative">
        <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-90 animate-pulse" style={{animationDelay: '1s'}}>
          QLD
        </div>
      </div>
    </div>
    
    {/* WA - Perth area */}
    <div className="absolute" style={{top: '58%', left: '28%', transform: 'translate(-50%, -50%)'}}>
      <div className="relative">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-90 animate-pulse" style={{animationDelay: '1.5s'}}>
          WA
        </div>
      </div>
    </div>
    
    {/* SA - Adelaide area */}
    <div className="absolute" style={{top: '62%', left: '58%', transform: 'translate(-50%, -50%)'}}>
      <div className="relative">
        <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-80 animate-pulse" style={{animationDelay: '2s'}}>
          SA
        </div>
      </div>
    </div>
    
    {/* NT - Darwin area */}
    <div className="absolute" style={{top: '32%', left: '52%', transform: 'translate(-50%, -50%)'}}>
      <div className="relative">
        <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-80 animate-pulse" style={{animationDelay: '2.5s'}}>
          NT
        </div>
      </div>
    </div>
  </div>
);

export default AustraliaMap; 