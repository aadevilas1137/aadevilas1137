'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  CalculatorIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  TrendingUpIcon,
  HomeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const InvestmentCalculator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    propertyValue: '',
    downPayment: '25',
    loanTerm: '25',
    interestRate: '4.5',
    monthlyRent: '',
    annualAppreciation: '8',
    maintenanceCost: '2'
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateInvestment = () => {
    const propertyValue = parseFloat(formData.propertyValue) || 0;
    const downPaymentPercent = parseFloat(formData.downPayment) || 0;
    const loanTerm = parseFloat(formData.loanTerm) || 0;
    const interestRate = parseFloat(formData.interestRate) || 0;
    const monthlyRent = parseFloat(formData.monthlyRent) || 0;
    const annualAppreciation = parseFloat(formData.annualAppreciation) || 0;
    const maintenancePercent = parseFloat(formData.maintenanceCost) || 0;

    // Calculations
    const downPaymentAmount = (propertyValue * downPaymentPercent) / 100;
    const loanAmount = propertyValue - downPaymentAmount;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyMortgage = loanAmount * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const annualRent = monthlyRent * 12;
    const annualMaintenance = (propertyValue * maintenancePercent) / 100;
    const netAnnualIncome = annualRent - annualMaintenance - (monthlyMortgage * 12);
    
    const rentalYield = (annualRent / propertyValue) * 100;
    const netYield = (netAnnualIncome / downPaymentAmount) * 100;
    
    const futureValue = propertyValue * Math.pow(1 + annualAppreciation / 100, 10);
    const totalAppreciation = futureValue - propertyValue;

    setResults({
      downPaymentAmount,
      monthlyMortgage,
      annualRent,
      netAnnualIncome,
      rentalYield,
      netYield,
      futureValue,
      totalAppreciation,
      monthlyRent
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Investment <span className="gradient-text">Calculator</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate your potential returns and make informed investment decisions 
            with our comprehensive Dubai real estate calculator.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <div className="flex items-center mb-8">
              <CalculatorIcon className="w-8 h-8 text-amber-400 mr-3" />
              <h3 className="text-2xl font-bold">Property Details</h3>
            </div>

            <div className="space-y-6">
              {/* Property Value */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Property Value (AED)
                </label>
                <input
                  type="number"
                  value={formData.propertyValue}
                  onChange={(e) => handleInputChange('propertyValue', e.target.value)}
                  placeholder="2,500,000"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Down Payment (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={formData.downPayment}
                  onChange={(e) => handleInputChange('downPayment', e.target.value)}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>10%</span>
                  <span className="text-amber-400 font-semibold">{formData.downPayment}%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Monthly Rent */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Expected Monthly Rent (AED)
                </label>
                <input
                  type="number"
                  value={formData.monthlyRent}
                  onChange={(e) => handleInputChange('monthlyRent', e.target.value)}
                  placeholder="15,000"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Loan Term */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Loan Term (Years)
                  </label>
                  <select
                    value={formData.loanTerm}
                    onChange={(e) => handleInputChange('loanTerm', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="15">15 Years</option>
                    <option value="20">20 Years</option>
                    <option value="25">25 Years</option>
                    <option value="30">30 Years</option>
                  </select>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.interestRate}
                    onChange={(e) => handleInputChange('interestRate', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Annual Appreciation */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Annual Appreciation (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.annualAppreciation}
                    onChange={(e) => handleInputChange('annualAppreciation', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Maintenance Cost */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Maintenance Cost (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.maintenanceCost}
                    onChange={(e) => handleInputChange('maintenanceCost', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Calculate Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={calculateInvestment}
                className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
              >
                <ChartBarIcon className="w-6 h-6" />
                <span>Calculate Returns</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-8">
                <TrendingUpIcon className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold">Investment Results</h3>
              </div>

              {results ? (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        {results.rentalYield.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-400">Rental Yield</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">
                        {results.netYield.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-400">Net ROI</div>
                    </div>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Down Payment</span>
                      <span className="text-amber-400 font-bold">
                        {formatCurrency(results.downPaymentAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Monthly Mortgage</span>
                      <span className="text-red-400 font-bold">
                        -{formatCurrency(results.monthlyMortgage)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Monthly Rent</span>
                      <span className="text-green-400 font-bold">
                        +{formatCurrency(results.monthlyRent)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Net Annual Income</span>
                      <span className={`font-bold ${results.netAnnualIncome >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {results.netAnnualIncome >= 0 ? '+' : ''}{formatCurrency(results.netAnnualIncome)}
                      </span>
                    </div>
                  </div>

                  {/* Future Value */}
                  <div className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 p-6 rounded-lg border border-amber-500/20">
                    <h4 className="text-lg font-bold gradient-text mb-4">10-Year Projection</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Future Property Value</div>
                        <div className="text-xl font-bold text-amber-400">
                          {formatCurrency(results.futureValue)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Total Appreciation</div>
                        <div className="text-xl font-bold text-green-400">
                          +{formatCurrency(results.totalAppreciation)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <CurrencyDollarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">
                    Enter your property details to calculate potential returns
                  </p>
                </div>
              )}
            </div>

            {/* Quick Tips */}
            <div className="glass-effect p-6 rounded-2xl">
              <h4 className="text-lg font-bold gradient-text mb-4">Investment Tips</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <HomeIcon className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    Dubai properties typically offer 6-10% rental yields
                  </p>
                </div>
                <div className="flex items-start">
                  <TrendingUpIcon className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    Prime locations show 8-12% annual appreciation
                  </p>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    Off-plan properties offer better payment plans
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;