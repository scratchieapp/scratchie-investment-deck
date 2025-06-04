import React from 'react';
import { Target, Users, TrendingUp, DollarSign } from 'lucide-react';

const GrowthSlide = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">Growth Strategy</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <Target className="w-5 h-5 mr-2" />
            Confirmed Pipeline
          </h3>
          <ul className="text-sm space-y-1">
            <li>• Current clients expanding</li>
            <li>• Committed at launch</li>
            <li>• High-probability prospects</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <Users className="w-5 h-5 mr-2" />
            Platform Partnerships
          </h3>
          <ul className="text-sm space-y-1">
            <li>• Geotab: 4.7M vehicles</li>
            <li>• SafetyCulture integration</li>
            <li>• Donesafe (KFC potential)</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <TrendingUp className="w-5 h-5 mr-2" />
            Affiliate Program
          </h3>
          <ul className="text-sm space-y-1">
            <li>• 20% first-year commission</li>
            <li>• Safety consultants</li>
            <li>• Zero-cost acquisition</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <DollarSign className="w-5 h-5 mr-2" />
            McDonald's Expansion
          </h3>
          <ul className="text-sm space-y-1">
            <li>• 10 stores proven</li>
            <li>• 1,000 AU stores next</li>
            <li>• 13,000 US potential</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GrowthSlide; 