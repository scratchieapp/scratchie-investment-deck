import React from 'react';
import { ChevronRight } from 'lucide-react';

const PathSlide = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">Path to Profitability</h2>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold">3,500</p>
            <p className="text-sm text-gray-600">Current users</p>
          </div>
          <ChevronRight className="w-8 h-8 text-gray-400" />
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">15,000</p>
            <p className="text-sm text-gray-600">Break-even</p>
          </div>
          <ChevronRight className="w-8 h-8 text-gray-400" />
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">30,000+</p>
            <p className="text-sm text-gray-600">Scale & hire</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Subscribers</th>
              <th className="p-2 text-right">Monthly Revenue</th>
              <th className="p-2 text-right">Monthly Costs</th>
              <th className="p-2 text-right">Monthly Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">5,000</td>
              <td className="p-2 text-right">$24,500</td>
              <td className="p-2 text-right">$73,500</td>
              <td className="p-2 text-right text-red-600">-$49,000</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">10,000</td>
              <td className="p-2 text-right">$49,000</td>
              <td className="p-2 text-right">$73,500</td>
              <td className="p-2 text-right text-red-600">-$24,500</td>
            </tr>
            <tr className="border-b bg-orange-50 font-bold">
              <td className="p-2">15,000</td>
              <td className="p-2 text-right">$73,500</td>
              <td className="p-2 text-right">$73,500</td>
              <td className="p-2 text-right text-gray-600">$0</td>
            </tr>
            <tr className="border-b bg-blue-50">
              <td className="p-2">30,000</td>
              <td className="p-2 text-right">$147,000</td>
              <td className="p-2 text-right">$91,500</td>
              <td className="p-2 text-right text-green-600">+$55,500</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">50,000</td>
              <td className="p-2 text-right">$245,000</td>
              <td className="p-2 text-right">$91,500</td>
              <td className="p-2 text-right text-green-600">+$153,500</td>
            </tr>
            <tr className="border-b bg-purple-50">
              <td className="p-2">75,000</td>
              <td className="p-2 text-right">$367,500</td>
              <td className="p-2 text-right">$109,500</td>
              <td className="p-2 text-right text-green-600">+$258,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Blended revenue: 80% organic ($5) + 20% affiliate ($4) + turbo commission ($0.10) = $4.90/user/month</p>
        <p className="mt-1">*30K subscribers: +Head of Partnerships ($18K) | 75K subscribers: +Product Manager ($18K)</p>
      </div>
    </div>
  );
};

export default PathSlide; 