import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, TrendingUp, Users, DollarSign, Target, MapPin, Award, AlertCircle, CheckCircle } from 'lucide-react';
import LoginGate from './components/LoginGate';

const InvestmentDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const slides = [
    'intro',
    'summary',
    'story',
    'model',
    'path',
    'growth',
    'map',
    'terms',
    'confidence',
    'risks',
    'ask',
    'metrics'
  ];

  const scenarios = [
    {
      name: "Failure Case",
      probability: 10,
      subscribers2030: 5000,
      revenue2030: 0.24,
      valuation2030: 0,
      returnMultiple: 0,
      description: "Product doesn't achieve market fit"
    },
    {
      name: "Conservative",
      probability: 45,
      subscribers2030: 75000,
      revenue2030: 3.6,
      valuation2030: 36,
      returnMultiple: 9,
      description: "Slow but steady growth"
    },
    {
      name: "Base Case",
      probability: 35,
      subscribers2030: 250000,
      revenue2030: 12,
      valuation2030: 120,
      returnMultiple: 30,
      description: "Hit targets, expand nationally"
    },
    {
      name: "Breakout",
      probability: 10,
      subscribers2030: 1000000,
      revenue2030: 48,
      valuation2030: 480,
      returnMultiple: 120,
      description: "Platform deals, international expansion"
    }
  ];

  // Check if user is already authenticated (from sessionStorage)
  useEffect(() => {
    const authStatus = sessionStorage.getItem('scratchie_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // If not authenticated, show login gate
  if (!isAuthenticated) {
    return <LoginGate onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const AustraliaMap = () => (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Australia map image */}
      <img 
        src="https://i.imgur.com/Ut06Nzl.jpeg" 
        alt="Map of Australia" 
        className="w-full h-auto"
      />
      
      {/* State indicators overlaid on the image */}
      
      {/* NSW - Sydney area */}
      <div className="absolute" style={{top: '62%', left: '74%', transform: 'translate(-50%, -50%)'}}>
        <div className="relative">
          <div className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold opacity-90 animate-pulse">
            NSW
          </div>
        </div>
      </div>
      
      {/* VIC - Melbourne area */}
      <div className="absolute" style={{top: '75%', left: '70%', transform: 'translate(-50%, -50%)'}}>
        <div className="relative">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-90 animate-pulse" style={{animationDelay: '0.5s'}}>
            VIC
          </div>
        </div>
      </div>
      
      {/* QLD - Brisbane area */}
      <div className="absolute" style={{top: '42%', left: '75%', transform: 'translate(-50%, -50%)'}}>
        <div className="relative">
          <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-90 animate-pulse" style={{animationDelay: '1s'}}>
            QLD
          </div>
        </div>
      </div>
      
      {/* WA - Perth area */}
      <div className="absolute" style={{top: '58%', left: '28%', transform: 'translate(-50%, -50%)'}}>
        <div className="relative">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-90 animate-pulse" style={{animationDelay: '1.5s'}}>
            WA
          </div>
        </div>
      </div>
      
      {/* SA - Adelaide area */}
      <div className="absolute" style={{top: '62%', left: '58%', transform: 'translate(-50%, -50%)'}}>
        <div className="relative">
          <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-80 animate-pulse" style={{animationDelay: '2s'}}>
            SA
          </div>
        </div>
      </div>
      
      {/* NT - Darwin area */}
      <div className="absolute" style={{top: '32%', left: '52%', transform: 'translate(-50%, -50%)'}}>
        <div className="relative">
          <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-80 animate-pulse" style={{animationDelay: '2.5s'}}>
            NT
          </div>
        </div>
      </div>
    </div>
  );

  const renderSlide = () => {
    switch (slides[currentSlide]) {
      case 'intro':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="animate-fade-in">
              <img 
                src="https://i.imgur.com/kIU5cGL.png" 
                alt="Scratchie Logo" 
                className="w-64 h-64 mx-auto mb-6 object-contain"
              />
              <p className="text-xl text-gray-600 mb-8">Friends & Family Investment Opportunity</p>
              <div className="bg-orange-50 p-6 rounded-lg max-w-md mx-auto">
                <p className="text-lg font-semibold">Making work more rewarding</p>
                <p className="text-gray-700 mt-2">One recognition at a time</p>
              </div>
            </div>
          </div>
        );

      case 'summary':
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
                  <li>• Business model: $5/user/month SaaS</li>
                  <li className="font-bold text-blue-600">• 99% gross margins</li>
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

      case 'story':
        return (
          <div className="p-8 h-full overflow-auto">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 animate-fade-in">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold">Started in Construction</h3>
                  <p className="text-gray-600">Major builders validated our safety rewards concept</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold">The Big Pivot</h3>
                  <p className="text-gray-600">Realized the opportunity was workplace recognition across ALL industries</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold">McDonald's Breakthrough</h3>
                  <p className="text-gray-600">10 Sydney stores adopted Scratchie, opening the QSR market</p>
                  <p className="text-sm text-gray-500 mt-1">1,000 stores in Australia • 13,000 in the US</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold">Ready to Scale</h3>
                  <p className="text-gray-600">Freemium model inspired by SafetyCulture's $2.5B success</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'model':
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
                <h3 className="font-bold text-lg mb-3">✅ New Model: Simple SaaS</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• $5 per user per month</li>
                  <li>• Predictable, recurring revenue</li>
                  <li>• Easy to budget and scale</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-center">The Magic of Our Unit Economics</h3>
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">$4.00</p>
                  <p className="text-sm text-gray-600">Revenue/user/month</p>
                </div>
                <div className="text-2xl">-</div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">$0.02</p>
                  <p className="text-sm text-gray-600">AWS cost/user/month</p>
                </div>
                <div className="text-2xl">=</div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">99.5%</p>
                  <p className="text-sm text-gray-600">Gross margin</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'path':
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
                  <p className="text-2xl font-bold text-green-600">50,000+</p>
                  <p className="text-sm text-gray-600">High profit</p>
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
                    <td className="p-2 text-right">$25,000</td>
                    <td className="p-2 text-right">$77,000</td>
                    <td className="p-2 text-right text-red-600">-$52,000</td>
                  </tr>
                  <tr className="border-b bg-orange-50 font-bold">
                    <td className="p-2">15,000</td>
                    <td className="p-2 text-right">$75,000</td>
                    <td className="p-2 text-right">$77,000</td>
                    <td className="p-2 text-right text-red-600">-$2,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">50,000</td>
                    <td className="p-2 text-right">$250,000</td>
                    <td className="p-2 text-right">$78,000</td>
                    <td className="p-2 text-right text-green-600">+$172,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'growth':
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

      case 'map':
        return (
          <div className="p-8 h-full overflow-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Australian Expansion Map</h2>
            <AustraliaMap />
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">NSW</p>
                <p className="text-sm text-gray-600">Current stronghold</p>
                <p className="text-xs">McDonald's pilot + construction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">VIC</p>
                <p className="text-sm text-gray-600">Next expansion</p>
                <p className="text-xs">Major QSR chains</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">QLD</p>
                <p className="text-sm text-gray-600">Q3 2025 target</p>
                <p className="text-xs">Mining + construction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">WA</p>
                <p className="text-sm text-gray-600">Q4 2025 target</p>
                <p className="text-xs">Resources sector</p>
              </div>
            </div>
          </div>
        );

      case 'terms':
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

      case 'confidence':
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
                  <li>• Will take half salary if needed</li>
                  <li>• This is our life's work</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'risks':
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
                <p className="text-sm mt-2">Even our conservative case returns 9x over 5 years.</p>
              </div>
            </div>
          </div>
        );

      case 'ask':
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

      case 'metrics':
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
                    <td className="p-3 text-right">~$50,000</td>
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
                  <span>Conservative (45% chance):</span>
                  <span className="font-bold">$450,000 (9x)</span>
                </div>
                <div className="flex justify-between">
                  <span>Base Case (35% chance):</span>
                  <span className="font-bold">$1,500,000 (30x)</span>
                </div>
                <div className="flex justify-between">
                  <span>Breakout (10% chance):</span>
                  <span className="font-bold">$6,000,000 (120x)</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="font-bold text-center">
                  Weighted Average Return: {((0.1 * 0) + (0.45 * 9) + (0.35 * 30) + (0.1 * 120)).toFixed(1)}x
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

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-screen flex flex-col bg-white">
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
      
      {/* Header */}
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="https://i.imgur.com/IB0wCmX.png" 
            alt="Scratchie Carrot" 
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-xl font-bold">Scratchie Investment Deck</h1>
        </div>
        <div className="text-sm text-gray-600">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {renderSlide()}
      </div>

      {/* Navigation */}
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default InvestmentDeck;