import React from 'react';
import { AlertCircle, CheckCircle, Target } from 'lucide-react';

const RisksSlide = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">Being Transparent About Risks</h2>
      <div className="space-y-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
            What Could Go Wrong
          </h3>
          <ul className="text-sm space-y-2">
            <li><strong>Slower adoption (45%)</strong> - Might need 8-10 months to profitability</li>
            <li><strong>Competition</strong> - Larger players could enter</li>
            <li><strong>Platform dependencies</strong> - Partners could change direction</li>
            <li><strong>Product-market fit miss (10%)</strong> - May not achieve scale needed</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
            Why We'll Overcome Them
          </h3>
          <ul className="text-sm space-y-2">
            <li><strong>Capital efficiency</strong> - Can extend runway by reducing salaries</li>
            <li><strong>First-mover advantage</strong> - 3-year head start</li>
            <li><strong>Multiple channels</strong> - Not dependent on single customer</li>
            <li><strong>Proven demand</strong> - 4 years validating with real customers</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold">The Reality Check</h3>
          <p className="text-sm">90% chance we succeed at some level. The question is how big and how fast.</p>
          <p className="text-sm mt-2">Even our struggle case returns 3x over 5 years.</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-bold flex items-center mb-2">
            <Target className="w-5 h-5 mr-2 text-purple-600" />
            Exit Strategy Potential
          </h3>
          <p className="text-sm mb-2">While we're focused on growth and building a cash-generating machine, Scratchie offers attractive acquisition potential:</p>
          <ul className="text-sm space-y-1">
            <li><strong>Strategic beachhead</strong> - SafetyCulture, HSI Donesafe, Oracle Aconex could use us to expand their markets</li>
            <li><strong>Defensive acquisition</strong> - Prevent competitors from gaining our market position</li>
            <li><strong>Platform integration</strong> - Natural fit with existing workplace safety ecosystems</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RisksSlide; 