export const scenarios = [
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
    name: "Struggle",
    probability: 20,
    subscribers2030: 25000,
    revenue2030: 1.2,
    valuation2030: 12,
    returnMultiple: 3,
    description: "Slow growth, limited market penetration"
  },
  {
    name: "Likely",
    probability: 35,
    subscribers2030: 75000,
    revenue2030: 3.6,
    valuation2030: 36,
    returnMultiple: 9,
    description: "Steady growth, solid market position"
  },
  {
    name: "Optimistic",
    probability: 25,
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