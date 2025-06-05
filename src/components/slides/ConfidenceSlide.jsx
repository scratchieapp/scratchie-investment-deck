import React from 'react';
import { CheckCircle } from 'lucide-react';

const ConfidenceSlide = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">Why We're Confident</h2>
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
            Product-Market Fit Validated
          </h3>
          <ul className="text-sm space-y-1">
            <li>• 96% of workers prefer Scratchie workplaces</li>
            <li>• McDonald's expanding from pilot</li>
            <li>• Multiple industries requesting access</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
            Proven Business Model
          </h3>
          <ul className="text-sm space-y-1">
            <li>• SafetyCulture: Similar model, now $2.5B</li>
            <li>• Freemium SaaS is the proven playbook</li>
            <li>• Near-zero customer acquisition cost</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <CheckCircle className="w-5 h-5 mr-2 text-orange-600" />
            Perfect Timing
          </h3>
          <ul className="text-sm space-y-1">
            <li>• Post-COVID focus on wellbeing</li>
            <li>• Recognition reduces turnover 31%</li>
            <li>• Companies desperate for retention tools</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <CheckCircle className="w-5 h-5 mr-2 text-purple-600" />
            Founders' Commitment
          </h3>
          <ul className="text-sm space-y-1">
            <li>• 4 years refining the product</li>
            <li>• Will defer part of salary as needed</li>
            <li>• This is our life's work</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceSlide; 