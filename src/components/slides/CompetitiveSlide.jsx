import React, { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';

const CompetitiveSlide = () => {
  const [showSDTTooltip, setShowSDTTooltip] = useState(false);
  
  const competitors = [
    {
      name: 'Scratchie',
      founded: '2021',
      users: 'Growing (1000s)',
      focus: 'Safety & frontline rewards',
      pricing: '$5/user/mo',
      freemium: true,
      frontline: 3,
      cash: 3,
      sdt: 3,
      hazard: 1,
      highlight: true
    },
    {
      name: 'Bonusly',
      founded: '2013',
      users: '400k users, 3,250 companies',
      focus: 'Office peer recognition',
      pricing: '$2-5/user/mo',
      freemium: false,
      frontline: 0,
      cash: 0,
      sdt: 0,
      hazard: 0
    },
    {
      name: 'Achievers',
      founded: '2002',
      users: '2.4M users, 300 enterprises',
      focus: 'Enterprise recognition',
      pricing: 'Custom (high)',
      freemium: false,
      frontline: 1,
      cash: 0,
      sdt: 0,
      hazard: 0
    },
    {
      name: 'Reward Gateway',
      founded: '2006',
      users: '8M users, 4,000 companies',
      focus: 'All-in-one perks/rewards',
      pricing: 'Custom (~£9/user/mo)',
      freemium: false,
      frontline: 1,
      cash: 0,
      sdt: 0,
      hazard: 0
    },
    {
      name: 'Perkbox',
      founded: '2015',
      users: '600k users, 4,500 companies',
      focus: 'SME perks & benefits',
      pricing: '£5-9/user/mo',
      freemium: false,
      frontline: 0,
      cash: 0,
      sdt: 0,
      hazard: 0
    }
  ];

  const renderCheckmarks = (level) => {
    if (level === 0) return <X className="w-5 h-5 text-gray-300" />;
    if (level === 1) return <Check className="w-5 h-5 text-green-500" />;
    if (level === 3) {
      return (
        <div className="flex gap-0.5">
          <Check className="w-5 h-5 text-green-600" />
          <Check className="w-5 h-5 text-green-600" />
          <Check className="w-5 h-5 text-green-600" />
        </div>
      );
    }
  };

  return (
    <div className="p-8 h-full overflow-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Competitor Landscape</h2>
      <p className="text-gray-600 mb-6">Scratchie uniquely combines frontline focus, immediate cash rewards, and behavioural psychology</p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Platform</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Founded</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Market Size</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Pricing</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">Freemium</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">Frontline-Native</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">Cash Rewards</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700 relative">
                <span className="flex items-center justify-center gap-1">
                  SDT-Based
                  <div className="relative">
                    <HelpCircle 
                      className="w-4 h-4 text-gray-400 cursor-help"
                      onMouseEnter={() => setShowSDTTooltip(true)}
                      onMouseLeave={() => setShowSDTTooltip(false)}
                    />
                    {showSDTTooltip && (
                      <div className="absolute z-10 w-64 p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg -right-8 top-6">
                        <div className="font-semibold mb-1">Self-Determination Theory</div>
                        <div className="text-gray-200">
                          By Deci & Ryan: People are motivated by autonomy, competence, and relatedness. 
                          Scratchie builds intrinsic motivation through immediate recognition that satisfies these psychological needs.
                        </div>
                        <div className="absolute -top-2 right-10 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                      </div>
                    )}
                  </div>
                </span>
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">Hazard ID</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((comp, idx) => (
              <tr 
                key={idx} 
                className={`border-b ${comp.highlight ? 'bg-orange-50' : 'hover:bg-gray-50'}`}
              >
                <td className={`py-3 px-4 ${comp.highlight ? 'font-bold text-orange-600' : ''}`}>
                  {comp.name}
                </td>
                <td className={`py-3 px-4 ${comp.highlight ? 'font-semibold' : ''}`}>
                  {comp.founded}
                </td>
                <td className="py-3 px-4 text-sm">{comp.users}</td>
                <td className={`py-3 px-4 text-sm ${comp.highlight ? 'font-semibold' : ''}`}>
                  {comp.pricing}
                </td>
                <td className="py-3 px-4 text-center">
                  {comp.freemium ? (
                    <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      FREE
                    </div>
                  ) : (
                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                  )}
                </td>
                <td className="py-3 px-4 text-center">{renderCheckmarks(comp.frontline)}</td>
                <td className="py-3 px-4 text-center">{renderCheckmarks(comp.cash)}</td>
                <td className="py-3 px-4 text-center">{renderCheckmarks(comp.sdt)}</td>
                <td className="py-3 px-4 text-center">{renderCheckmarks(comp.hazard)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-600 flex items-center gap-4">
          <span className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <Check className="w-4 h-4 text-green-600" />
              <Check className="w-4 h-4 text-green-600" />
              <Check className="w-4 h-4 text-green-600" />
            </div>
            Core strength
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-500" />
            Partial capability
          </span>
          <span className="flex items-center gap-1">
            <X className="w-4 h-4 text-gray-300" />
            Not a focus
          </span>
        </div>
        
        <div className="text-sm text-orange-600 font-semibold">
          * Scratchie: Free for teams up to 5 users
        </div>
      </div>
      
      <div className="mt-6 bg-orange-50 rounded-lg p-4">
        <h3 className="font-bold text-gray-800 mb-3">Scratchie's Unique Position:</h3>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="font-semibold text-orange-600 text-lg mb-1">Frontline-First</div>
            <div className="text-gray-600">Built for construction sites, not office desks</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-orange-600 text-lg mb-1">Instant Cash</div>
            <div className="text-gray-600">Digital scratch cards with immediate rewards</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-orange-600 text-lg mb-1">Psychology-Based</div>
            <div className="text-gray-600">Proven SDT framework for intrinsic motivation</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-orange-600 text-lg mb-1">Freemium Model</div>
            <div className="text-gray-600">Start free, scale as you grow</div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center text-gray-600 text-sm">
        <strong>Market Opportunity:</strong> While competitors focus on office workers with points-based systems, 
        Scratchie uniquely serves the underserved frontline workforce with immediate, meaningful rewards.
      </div>
    </div>
  );
};

export default CompetitiveSlide; 