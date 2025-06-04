import React from 'react';

const AskSlide = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">The Ask</h2>
      <div className="bg-orange-50 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-4">What We Need</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <div>
              <strong>Total raise:</strong> $300,000
              <p className="text-sm text-gray-600">6 units of $50,000 each</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <div>
              <strong>Use of funds:</strong>
              <ul className="text-sm text-gray-600 mt-1">
                <li>- 5-month runway to profitability</li>
                <li>- Product launch marketing</li>
                <li>- First hire (partnerships manager)</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-4">What You Get</h3>
        <ul className="space-y-2 text-sm">
          <li>• Same terms as institutional investors</li>
          <li>• 1.25% ownership per $50K unit</li>
          <li>• Quarterly updates on progress</li>
          <li>• Part of the Scratchie story</li>
          <li>• Potential for dividends + capital growth</li>
        </ul>
      </div>
      
      <div className="text-center p-6 bg-gray-100 rounded-lg">
        <p className="text-lg italic mb-4">
          "This is our moment."
        </p>
        <p className="font-bold">- James Kell, CEO</p>
      </div>
    </div>
  );
};

export default AskSlide; 