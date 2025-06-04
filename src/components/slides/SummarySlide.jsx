import React from 'react';

const SummarySlide = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg animate-slide-up">
          <h3 className="font-bold text-lg mb-4">The Opportunity</h3>
          <ul className="space-y-2 text-sm">
            <li>• Raising: $300,000 (6 units of $50,000)</li>
            <li>• Valuation: $4 million pre-money</li>
            <li>• Target: 15,000 subscribers by November 2025</li>
            <li>• Multi-channel: organic + affiliate + commissions</li>
            <li className="font-bold text-blue-600">• 99.6% gross margins</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-lg animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h3 className="font-bold text-lg mb-4">Why Now</h3>
          <p className="text-sm">After securing McDonald's as a pilot customer and a year of product development, we're ready to launch our freemium platform in July.</p>
          <p className="text-sm mt-3 font-semibold">We need bridge funding to reach cash flow positive at 15,000 subscribers.</p>
        </div>
      </div>
      <div className="mt-6 bg-orange-50 p-6 rounded-lg animate-slide-up" style={{animationDelay: '0.4s'}}>
        <p className="text-center text-lg font-semibold">
          "The night is darkest before the dawn - and dawn is coming."
        </p>
      </div>
    </div>
  );
};

export default SummarySlide; 