'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GlobeAltIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  CurrencyDollarIcon,
  BuildingOffice2Icon,
  AirplaneIcon,
  SunIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const WhyDubaiSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: 'Political Stability',
      description: 'UAE offers one of the most stable political environments in the region',
      stats: '99% Safety Index',
      color: 'text-green-400',
      bgColor: 'from-green-500/10 to-green-600/5'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Tax-Free Income',
      description: 'No personal income tax, capital gains tax, or property tax',
      stats: '0% Tax Rate',
      color: 'text-amber-400',
      bgColor: 'from-amber-500/10 to-orange-600/5'
    },
    {
      icon: TrendingUpIcon,
      title: 'Strong ROI',
      description: 'Dubai properties offer excellent rental yields and capital appreciation',
      stats: '8-12% Annual Returns',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/10 to-blue-600/5'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Hub',
      description: 'Strategic location connecting East and West, major business hub',
      stats: '200+ Nationalities',
      color: 'text-purple-400',
      bgColor: 'from-purple-500/10 to-purple-600/5'
    },
    {
      icon: BuildingOffice2Icon,
      title: 'World-Class Infrastructure',
      description: 'Modern infrastructure, smart city initiatives, and mega projects',
      stats: '$100B+ Investments',
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500/10 to-cyan-600/5'
    },
    {
      icon: AirplaneIcon,
      title: 'Tourism & Events',
      description: 'Major tourist destination with world-class events and attractions',
      stats: '16M+ Annual Visitors',
      color: 'text-pink-400',
      bgColor: 'from-pink-500/10 to-pink-600/5'
    }
  ];

  const marketStats = [
    {
      label: 'Property Price Growth',
      value: '+15.2%',
      period: '2023',
      icon: TrendingUpIcon,
      color: 'text-green-400'
    },
    {
      label: 'Rental Yield Average',
      value: '8.5%',
      period: 'Annual',
      icon: CurrencyDollarIcon,
      color: 'text-amber-400'
    },
    {
      label: 'Foreign Investment',
      value: 'AED 67B',
      period: '2023',
      icon: GlobeAltIcon,
      color: 'text-blue-400'
    },
    {
      label: 'Population Growth',
      value: '+5.1%',
      period: 'Annual',
      icon: HeartIcon,
      color: 'text-purple-400'
    }
  ];

  const futureProjects = [
    {
      name: 'Expo 2020 Legacy',
      description: 'Transforming Expo site into a smart city',
      investment: 'AED 7B+',
      completion: '2025-2030'
    },
    {
      name: 'Dubai Creek Harbour',
      description: 'New downtown with Dubai Creek Tower',
      investment: 'AED 25B+',
      completion: '2025-2027'
    },
    {
      name: 'Mohammed Bin Rashid City',
      description: 'Massive mixed-use development',
      investment: 'AED 30B+',
      completion: '2025-2030'
    },
    {
      name: 'Al Maktoum Airport Expansion',
      description: 'World\'s largest airport by capacity',
      investment: 'AED 120B+',
      completion: '2025-2035'
    }
  ];

  return (
    <section id="why-dubai" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Invest in <span className="gradient-text">Dubai?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dubai offers unparalleled investment opportunities with its strategic location, 
            business-friendly environment, and world-class infrastructure.
          </p>
        </motion.div>

        {/* Key Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-effect p-8 rounded-2xl card-hover bg-gradient-to-br ${reason.bgColor} border border-white/10`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br ${reason.bgColor} border border-white/20`}>
                  <reason.icon className={`w-8 h-8 ${reason.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{reason.title}</h3>
                  <div className={`text-2xl font-bold ${reason.color}`}>{reason.stats}</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Market Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-effect p-8 rounded-2xl mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Market <span className="gradient-text">Performance</span>
            </h3>
            <p className="text-gray-300">Dubai real estate market continues to show strong performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-300 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.period}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Future <span className="gradient-text">Mega Projects</span>
            </h3>
            <p className="text-gray-300">Upcoming developments driving long-term growth</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {futureProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="glass-effect p-6 rounded-2xl card-hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white">{project.name}</h4>
                  <div className="text-amber-400 font-bold text-lg">{project.investment}</div>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Completion:</span>
                  <span className="text-blue-400 font-semibold">{project.completion}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lifestyle Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="glass-effect p-8 rounded-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Lifestyle <span className="gradient-text">Benefits</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <SunIcon className="w-6 h-6 text-amber-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Year-Round Sunshine</h4>
                    <p className="text-gray-300">Enjoy 350+ days of sunshine annually with perfect weather</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheckIcon className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Safety & Security</h4>
                    <p className="text-gray-300">One of the safest cities in the world with low crime rates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GlobeAltIcon className="w-6 h-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cultural Diversity</h4>
                    <p className="text-gray-300">Multicultural environment with people from 200+ countries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BuildingOffice2Icon className="w-6 h-6 text-purple-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">World-Class Amenities</h4>
                    <p className="text-gray-300">Luxury shopping, fine dining, and entertainment options</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-effect p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20">
                <h4 className="text-2xl font-bold gradient-text mb-6 text-center">Investment Summary</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Rental Yield</span>
                    <span className="text-green-400 font-bold">8-12%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Capital Appreciation</span>
                    <span className="text-blue-400 font-bold">10-15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Tax on Income</span>
                    <span className="text-amber-400 font-bold">0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Minimum Investment</span>
                    <span className="text-purple-400 font-bold">AED 1M</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary mt-6"
                >
                  Start Your Investment Journey
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDubaiSection;