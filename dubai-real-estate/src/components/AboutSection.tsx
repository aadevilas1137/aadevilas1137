'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon, 
  TrophyIcon, 
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      year: '2008',
      title: 'Started Real Estate Career',
      description: 'Began journey in Dubai real estate market',
      icon: AcademicCapIcon,
    },
    {
      year: '2012',
      title: 'Top Sales Agent',
      description: 'Achieved top sales performance for 3 consecutive years',
      icon: TrophyIcon,
    },
    {
      year: '2015',
      title: 'Developer Partnerships',
      description: 'Established exclusive partnerships with premium developers',
      icon: BuildingOfficeIcon,
    },
    {
      year: '2018',
      title: '500+ Properties Sold',
      description: 'Milestone achievement in property transactions',
      icon: ChartBarIcon,
    },
    {
      year: '2020',
      title: 'Investment Specialist',
      description: 'Specialized in high-ROI investment opportunities',
      icon: UserGroupIcon,
    },
    {
      year: '2024',
      title: 'Industry Recognition',
              description: 'Recognized as Dubai&apos;s premier real estate consultant',
      icon: StarIcon,
    },
  ];

  const expertise = [
    'Luxury Residential Properties',
    'Commercial Real Estate',
    'Investment Advisory',
    'Off-Plan Properties',
    'Property Management',
    'Market Analysis',
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Your <span className="gradient-text">Dubai Expert</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With over 15 years of experience in Dubai&apos;s dynamic real estate market, 
            I&apos;ve helped thousands of clients find their perfect property and achieve 
            exceptional investment returns.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-2xl">AE</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ahmed Expert</h3>
                  <p className="text-amber-400">Senior Real Estate Consultant</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a Dubai resident for over two decades, I've witnessed the city's 
                incredible transformation firsthand. My deep understanding of local 
                markets, combined with exclusive relationships with top developers, 
                ensures my clients access the finest properties and investment opportunities.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold gradient-text">1000+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold gradient-text">AED 2B+</div>
                  <div className="text-sm text-gray-400">Properties Sold</div>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="glass-effect p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-6 gradient-text">Areas of Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-white/5 px-4 py-2 rounded-lg text-sm text-center hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-orange-600"></div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative flex items-start"
                >
                  <div className="absolute left-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-slate-800"></div>
                  <div className="ml-16 glass-effect p-6 rounded-xl flex-1 card-hover">
                    <div className="flex items-center mb-3">
                      <achievement.icon className="w-6 h-6 text-amber-400 mr-3" />
                      <span className="text-amber-400 font-semibold text-sm">{achievement.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Find Your Dream Property?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your requirements and explore the best opportunities in Dubai's thriving real estate market.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              Schedule a Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;