import React from 'react';

const ModelSlide = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">The Business Model Evolution</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">❌ Old Model: "Clipping the Ticket"</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 20% commission on rewards</li>
            <li>• Unpredictable revenue</li>
            <li>• Dependent on supervisor behavior</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">✅ New Model: Multi-Channel SaaS</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Organic sales: $5/user/month (80%)</li>
            <li>• Affiliate sales: $4/user/month (20%)</li>
            <li>• 2% commission on turbo scratchies</li>
            <li>• Predictable, recurring revenue</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 bg-blue-50 p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-4 text-center">Our Blended Unit Economics</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">$4.00</p>
            <p className="text-sm text-gray-600">Affiliate revenue (20%)</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">$5.00</p>
            <p className="text-sm text-gray-600">Organic revenue (80%)</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">$0.10</p>
            <p className="text-sm text-gray-600">Turbo commission</p>
          </div>
        </div>
        <div className="flex justify-around items-center border-t pt-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">$4.90</p>
            <p className="text-sm text-gray-600">Blended revenue/user/month</p>
          </div>
          <div className="text-2xl">-</div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-600">$0.02</p>
            <p className="text-sm text-gray-600">AWS cost/user/month</p>
          </div>
          <div className="text-2xl">=</div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">99.6%</p>
            <p className="text-sm text-gray-600">Gross margin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSlide; 