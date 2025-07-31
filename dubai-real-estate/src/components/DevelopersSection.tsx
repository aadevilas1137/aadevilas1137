'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  BuildingOffice2Icon, 
  StarIcon, 
  MapPinIcon,
  TrophyIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const DevelopersSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const developers = [
    {
      id: 1,
      name: 'Emaar Properties',
      logo: 'E',
      description: 'Dubai\'s premier real estate developer',
      established: '1997',
      projects: '50+',
      rating: 4.9,
      specialties: ['Luxury Residential', 'Commercial', 'Mixed-Use'],
      keyProjects: ['Burj Khalifa', 'Dubai Mall', 'Downtown Dubai'],
      achievements: [
        'Developer of Burj Khalifa - World\'s tallest building',
        'Created Downtown Dubai - World\'s largest planned development',
        'Over 60,000 residential units delivered'
      ],
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 2,
      name: 'DAMAC Properties',
      logo: 'D',
      description: 'Luxury lifestyle real estate',
      established: '2002',
      projects: '40+',
      rating: 4.8,
      specialties: ['Luxury Villas', 'High-end Apartments', 'Golf Communities'],
      keyProjects: ['DAMAC Hills', 'AKOYA Oxygen', 'DAMAC Lagoons'],
      achievements: [
        'Over 44,000 homes delivered across Middle East',
        'Award-winning luxury golf communities',
        'Partnership with global luxury brands'
      ],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-500/10'
    },
    {
      id: 3,
      name: 'Dubai Properties',
      logo: 'DP',
      description: 'Shaping Dubai\'s skyline since 2004',
      established: '2004',
      projects: '35+',
      rating: 4.7,
      specialties: ['Master Communities', 'Waterfront', 'Commercial'],
      keyProjects: ['Jumeirah Beach Residence', 'Business Bay', 'Marsa Al Arab'],
      achievements: [
        'Developed iconic JBR waterfront community',
        'Created Business Bay financial district',
        'Pioneer in mixed-use developments'
      ],
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 4,
      name: 'Sobha Realty',
      logo: 'S',
      description: 'Crafting extraordinary living experiences',
      established: '2014',
      projects: '25+',
      rating: 4.9,
      specialties: ['Ultra-luxury', 'Waterfront', 'Premium Apartments'],
      keyProjects: ['Sobha Hartland', 'Sobha Creek Vistas', 'Sobha Reserve'],
      achievements: [
        'Known for ultra-luxury waterfront properties',
        'Award-winning architectural designs',
        'Premium finishing and attention to detail'
      ],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-500/10'
    },
    {
      id: 5,
      name: 'Meraas',
      logo: 'M',
      description: 'Creating vibrant communities',
      established: '2007',
      projects: '30+',
      rating: 4.8,
      specialties: ['Entertainment', 'Retail', 'Hospitality'],
      keyProjects: ['City Walk', 'La Mer', 'Bluewaters Island'],
      achievements: [
        'Developer of Ain Dubai - World\'s largest observation wheel',
        'Created unique lifestyle destinations',
        'Focus on entertainment and leisure'
      ],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-500/10'
    },
    {
      id: 6,
      name: 'Nakheel',
      logo: 'N',
      description: 'Iconic waterfront developments',
      established: '2000',
      projects: '45+',
      rating: 4.6,
      specialties: ['Waterfront', 'Islands', 'Master Communities'],
      keyProjects: ['Palm Jumeirah', 'The World Islands', 'Dragon City'],
      achievements: [
        'Created Palm Jumeirah - World\'s largest artificial island',
        'Pioneer in waterfront living concepts',
        'Over 70,000 residential units delivered'
      ],
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-500/10'
    }
  ];

  return (
    <section id="developers" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Top Dubai <span className="gradient-text">Developers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exclusive partnerships with Dubai's most prestigious developers, 
            giving you access to premium properties and off-plan opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((developer, index) => (
            <motion.div
              key={developer.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-2xl card-hover cursor-pointer group"
              onClick={() => setSelectedDeveloper(developer)}
            >
              {/* Developer Logo */}
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${developer.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-bold text-xl">{developer.logo}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {developer.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{developer.description}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold gradient-text">{developer.established}</div>
                  <div className="text-xs text-gray-400">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold gradient-text">{developer.projects}</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="text-center flex items-center justify-center">
                  <StarIcon className="w-4 h-4 text-amber-400 mr-1" />
                  <div className="text-lg font-bold text-amber-400">{developer.rating}</div>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {developer.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs ${developer.bgColor} text-white`}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-secondary text-sm py-2"
              >
                View Details & Projects
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Developer Details Modal */}
        {selectedDeveloper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDeveloper(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-effect p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${selectedDeveloper.color} rounded-xl flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold text-2xl">{selectedDeveloper.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedDeveloper.name}</h3>
                    <p className="text-gray-400">{selectedDeveloper.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDeveloper(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Key Projects */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 gradient-text">Key Projects</h4>
                <div className="grid gap-3">
                  {selectedDeveloper.keyProjects.map((project, idx) => (
                    <div key={idx} className="flex items-center bg-white/5 p-3 rounded-lg">
                      <MapPinIcon className="w-5 h-5 text-amber-400 mr-3" />
                      <span className="text-white">{project}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 gradient-text">Key Achievements</h4>
                <div className="space-y-3">
                  {selectedDeveloper.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start bg-white/5 p-4 rounded-lg">
                      <TrophyIcon className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex-1"
                >
                  View Available Properties
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex-1"
                >
                  Get Investment Advice
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DevelopersSection;