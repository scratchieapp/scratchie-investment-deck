import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import LoginGate from './components/LoginGate';

// Import all slide components
import {
  IntroSlide,
  SummarySlide,
  StorySlide,
  ModelSlide,
  PathSlide,
  GrowthSlide,
  CompetitiveSlide,
  MapSlide,
  TermsSlide,
  ConfidenceSlide,
  RisksSlide,
  AskSlide,
  MetricsSlide
} from './components/slides';

const InvestmentDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const slides = [
    'intro',
    'summary',
    'story',
    'model',
    'path',
    'growth',
    'competitive',
    'map',
    'terms',
    'confidence',
    'risks',
    'ask',
    'metrics'
  ];

  const scenarios = [
    {
      name: "Failure Case",
      probability: 10,
      subscribers2030: 5000,
      revenue2030: 0.24,
      valuation2030: 0,
      returnMultiple: 0,
      description: "Product doesn't achieve market fit"
    },
    {
      name: "Conservative",
      probability: 45,
      subscribers2030: 75000,
      revenue2030: 3.6,
      valuation2030: 36,
      returnMultiple: 9,
      description: "Slow but steady growth"
    },
    {
      name: "Base Case",
      probability: 35,
      subscribers2030: 250000,
      revenue2030: 12,
      valuation2030: 120,
      returnMultiple: 30,
      description: "Hit targets, expand nationally"
    },
    {
      name: "Breakout",
      probability: 10,
      subscribers2030: 1000000,
      revenue2030: 48,
      valuation2030: 480,
      returnMultiple: 120,
      description: "Platform deals, international expansion"
    }
  ];

  // Check if user is already authenticated (from sessionStorage)
  useEffect(() => {
    const authStatus = sessionStorage.getItem('scratchie_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // If not authenticated, show login gate
  if (!isAuthenticated) {
    return <LoginGate onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

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

  const renderSlide = () => {
    switch (slides[currentSlide]) {
      case 'intro':
        return <IntroSlide />;
      case 'summary':
        return <SummarySlide />;
      case 'story':
        return <StorySlide />;
      case 'model':
        return <ModelSlide />;
      case 'path':
        return <PathSlide />;
      case 'growth':
        return <GrowthSlide />;
      case 'competitive':
        return <CompetitiveSlide />;
      case 'map':
        return <MapSlide />;
      case 'terms':
        return <TermsSlide selectedScenario={selectedScenario} setSelectedScenario={setSelectedScenario} />;
      case 'confidence':
        return <ConfidenceSlide />;
      case 'risks':
        return <RisksSlide />;
      case 'ask':
        return <AskSlide />;
      case 'metrics':
        return <MetricsSlide />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-screen flex flex-col bg-white">
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
      
      {/* Header */}
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="https://i.imgur.com/IB0wCmX.png" 
            alt="Scratchie Carrot" 
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-xl font-bold">Scratchie Investment Deck</h1>
        </div>
        <div className="text-sm text-gray-600">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {renderSlide()}
      </div>

      {/* Navigation */}
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default InvestmentDeck;