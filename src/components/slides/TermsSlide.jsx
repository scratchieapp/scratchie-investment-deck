import React from 'react';
import { scenarios } from '../../data/scenarios';

const TermsSlide = ({ selectedScenario, setSelectedScenario }) => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">Investment Terms & 5-Year Projections</h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-bold">Investment:</p>
            <p>$50,000 per unit</p>
          </div>
          <div>
            <p className="font-bold">Ownership:</p>
            <p>1.25% per unit</p>
          </div>
          <div>
            <p className="font-bold">Structure:</p>
            <p>Seed Preference Shares</p>
          </div>
          <div>
            <p className="font-bold">Timeline:</p>
            <p>5-year horizon</p>
          </div>
        </div>
      </div>
      
      <h3 className="font-bold mb-4">Select a Scenario:</h3>
      <div className="space-y-3">
        {scenarios.map((scenario, index) => (
          <div
            key={index}
            onClick={() => setSelectedScenario(index)}
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              selectedScenario === index 
                ? 'bg-blue-100 border-2 border-blue-500' 
                : 'bg-white border-2 border-gray-200'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">{scenario.name} ({scenario.probability}% probability)</h4>
                <p className="text-sm text-gray-600">{scenario.description}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">
                  {scenario.returnMultiple > 0 ? `${scenario.returnMultiple}x` : '0x'}
                </p>
                <p className="text-sm text-gray-600">
                  ${scenario.returnMultiple > 0 ? (50 * scenario.returnMultiple).toLocaleString() + 'K' : '0'}
                </p>
              </div>
            </div>
            {selectedScenario === index && (
              <div className="mt-3 pt-3 border-t text-sm">
                <p>2030 Subscribers: {scenario.subscribers2030.toLocaleString()}</p>
                <p>2030 Revenue: ${scenario.revenue2030}M</p>
                <p>Company Valuation: ${scenario.valuation2030}M</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsSlide; 