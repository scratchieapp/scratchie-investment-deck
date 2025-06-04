import React from 'react';
import { scenarios } from '../../data/scenarios';

const MetricsSlide = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">Summary Investment Metrics</h2>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-bold">Investment Unit</td>
              <td className="p-3 text-right">$50,000</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-bold">Ownership per Unit</td>
              <td className="p-3 text-right">1.25%</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-bold">Investment Horizon</td>
              <td className="p-3 text-right">5 years (2030)</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-bold">Break-even Target</td>
              <td className="p-3 text-right">15,000 subscribers</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-bold">Current Subscribers</td>
              <td className="p-3 text-right">3,500</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-bold">Monthly Burn</td>
              <td className="p-3 text-right">~$55,000</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-bold">Runway Needed</td>
              <td className="p-3 text-right">5 months</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 bg-blue-50 p-6 rounded-lg">
        <h3 className="font-bold mb-3">Expected Returns by Scenario (5 years)</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Failure (10% chance):</span>
            <span className="font-bold">$0</span>
          </div>
          <div className="flex justify-between">
            <span>Struggle (20% chance):</span>
            <span className="font-bold">$150,000 (3x)</span>
          </div>
          <div className="flex justify-between">
            <span>Likely (35% chance):</span>
            <span className="font-bold">$450,000 (9x)</span>
          </div>
          <div className="flex justify-between">
            <span>Optimistic (25% chance):</span>
            <span className="font-bold">$1,500,000 (30x)</span>
          </div>
          <div className="flex justify-between">
            <span>Breakout (10% chance):</span>
            <span className="font-bold">$6,000,000 (120x)</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t">
          <p className="font-bold text-center">
            Weighted Average Return: {((0.1 * 0) + (0.2 * 3) + (0.35 * 9) + (0.25 * 30) + (0.1 * 120)).toFixed(1)}x
          </p>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <a 
          href="mailto:james@scratchie.com?subject=Let's talk Scratchie"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
        >
          Ready to Invest
        </a>
      </div>
    </div>
  );
};

export default MetricsSlide; 