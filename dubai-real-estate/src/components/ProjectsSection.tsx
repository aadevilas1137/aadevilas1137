'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  FunnelIcon,
  MapPinIcon,
  HomeIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  StarIcon,
  EyeIcon,
  XMarkIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Apartments', 'Villas', 'Townhouses', 'Commercial', 'Off-Plan'];

  const projects = [
    {
      id: 1,
      name: 'Burj Crown',
      developer: 'Emaar Properties',
      location: 'Downtown Dubai',
      type: 'Apartments',
      status: 'Ready',
      priceRange: '1.2M - 4.5M AED',
      bedrooms: '1-3 BR',
      size: '750 - 2,100 sqft',
      completion: '2024',
      roi: '8.5%',
      rating: 4.9,
      image: '/api/placeholder/400/300',
      features: ['Burj Khalifa View', 'Premium Finishes', 'Gym & Pool', 'Concierge'],
      description: 'Luxury apartments in the heart of Downtown Dubai with stunning Burj Khalifa views.',
      amenities: ['Swimming Pool', 'Fitness Center', 'Concierge Service', 'Valet Parking', 'Sky Lounge'],
      floorPlans: ['1 BR: 750 sqft', '2 BR: 1,200 sqft', '3 BR: 2,100 sqft'],
      investment: {
        averagePrice: '2.8M AED',
        rentalYield: '8.5%',
        appreciationRate: '12%',
        paymentPlan: '20% Down, 80% on Completion'
      }
    },
    {
      id: 2,
      name: 'DAMAC Lagoons',
      developer: 'DAMAC Properties',
      location: 'DAMAC Lagoons',
      type: 'Villas',
      status: 'Off-Plan',
      priceRange: '2.1M - 8.5M AED',
      bedrooms: '4-7 BR',
      size: '3,500 - 8,000 sqft',
      completion: '2025',
      roi: '9.2%',
      rating: 4.8,
      image: '/api/placeholder/400/300',
      features: ['Lagoon Views', 'Private Beach', 'Golf Course', 'Marina'],
      description: 'Waterfront villas with private beaches and lagoon access in a resort-style community.',
      amenities: ['Private Beach', 'Golf Course', 'Marina', 'Water Sports', 'Clubhouse'],
      floorPlans: ['4 BR: 3,500 sqft', '5 BR: 5,200 sqft', '7 BR: 8,000 sqft'],
      investment: {
        averagePrice: '4.8M AED',
        rentalYield: '9.2%',
        appreciationRate: '15%',
        paymentPlan: '10% Down, 90% During Construction'
      }
    },
    {
      id: 3,
      name: 'Sobha Hartland II',
      developer: 'Sobha Realty',
      location: 'Mohammed Bin Rashid City',
      type: 'Apartments',
      status: 'Off-Plan',
      priceRange: '1.8M - 6.2M AED',
      bedrooms: '1-4 BR',
      size: '800 - 3,200 sqft',
      completion: '2026',
      roi: '7.8%',
      rating: 4.9,
      image: '/api/placeholder/400/300',
      features: ['Waterfront Living', 'Premium Design', 'Smart Home', 'Green Spaces'],
      description: 'Ultra-luxury waterfront apartments with world-class amenities and design.',
      amenities: ['Infinity Pool', 'Spa & Wellness', 'Private Beach', 'Tennis Court', 'Kids Play Area'],
      floorPlans: ['1 BR: 800 sqft', '2 BR: 1,400 sqft', '3 BR: 2,200 sqft', '4 BR: 3,200 sqft'],
      investment: {
        averagePrice: '3.2M AED',
        rentalYield: '7.8%',
        appreciationRate: '14%',
        paymentPlan: '20% Down, 80% During Construction'
      }
    },
    {
      id: 4,
      name: 'The Valley',
      developer: 'Emaar Properties',
      location: 'Dubai South',
      type: 'Townhouses',
      status: 'Ready',
      priceRange: '1.4M - 2.8M AED',
      bedrooms: '3-4 BR',
      size: '1,800 - 2,400 sqft',
      completion: '2024',
      roi: '8.8%',
      rating: 4.7,
      image: '/api/placeholder/400/300',
      features: ['Family Community', 'Parks & Lakes', 'Cycling Tracks', 'Schools Nearby'],
      description: 'Family-friendly townhouses in a green community with parks and recreational facilities.',
      amenities: ['Central Park', 'Cycling Tracks', 'Community Center', 'Retail Plaza', 'Healthcare Center'],
      floorPlans: ['3 BR: 1,800 sqft', '4 BR: 2,400 sqft'],
      investment: {
        averagePrice: '2.1M AED',
        rentalYield: '8.8%',
        appreciationRate: '11%',
        paymentPlan: '25% Down, 75% on Completion'
      }
    },
    {
      id: 5,
      name: 'Business Bay Tower',
      developer: 'Dubai Properties',
      location: 'Business Bay',
      type: 'Commercial',
      status: 'Ready',
      priceRange: '800K - 3.2M AED',
      bedrooms: 'Office Spaces',
      size: '500 - 2,000 sqft',
      completion: '2023',
      roi: '10.5%',
      rating: 4.6,
      image: '/api/placeholder/400/300',
      features: ['Prime Location', 'Metro Connected', 'High-end Finishes', 'Parking'],
      description: 'Premium office spaces in the heart of Dubai\'s business district.',
      amenities: ['High-speed Elevators', 'Conference Rooms', 'Cafeteria', 'Parking', 'Security'],
      floorPlans: ['Small Office: 500 sqft', 'Medium Office: 1,000 sqft', 'Large Office: 2,000 sqft'],
      investment: {
        averagePrice: '1.8M AED',
        rentalYield: '10.5%',
        appreciationRate: '9%',
        paymentPlan: '30% Down, 70% on Completion'
      }
    },
    {
      id: 6,
      name: 'Palm Residences',
      developer: 'Nakheel',
      location: 'Palm Jumeirah',
      type: 'Apartments',
      status: 'Ready',
      priceRange: '2.5M - 12M AED',
      bedrooms: '2-5 BR',
      size: '1,400 - 5,500 sqft',
      completion: '2024',
      roi: '7.2%',
      rating: 4.8,
      image: '/api/placeholder/400/300',
      features: ['Beach Access', 'Iconic Location', 'Luxury Finishes', 'Resort Lifestyle'],
      description: 'Exclusive beachfront apartments on the world-famous Palm Jumeirah island.',
      amenities: ['Private Beach', 'Swimming Pool', 'Gym', 'Spa', 'Beach Club'],
      floorPlans: ['2 BR: 1,400 sqft', '3 BR: 2,200 sqft', '4 BR: 3,800 sqft', '5 BR: 5,500 sqft'],
      investment: {
        averagePrice: '6.2M AED',
        rentalYield: '7.2%',
        appreciationRate: '13%',
        paymentPlan: '40% Down, 60% on Completion'
      }
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === selectedFilter || project.status === selectedFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Current <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our curated selection of premium properties from Dubai's top developers. 
            Each project offers unique investment opportunities and lifestyle benefits.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <FunnelIcon className="w-5 h-5 text-amber-400 mr-2" />
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white'
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden card-hover group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-amber-500/20 to-orange-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Ready' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1">
                  <StarIcon className="w-4 h-4 text-amber-400" />
                  <span className="text-white text-sm font-semibold">{project.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-gray-300 text-sm">{project.developer}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  {project.location}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Price Range</div>
                    <div className="text-sm font-semibold text-amber-400">{project.priceRange}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Bedrooms</div>
                    <div className="text-sm font-semibold text-white">{project.bedrooms}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Size</div>
                    <div className="text-sm font-semibold text-white">{project.size}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">ROI</div>
                    <div className="text-sm font-semibold text-green-400">{project.roi}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-secondary text-sm py-2 flex items-center justify-center space-x-2"
                >
                  <EyeIcon className="w-4 h-4" />
                  <span>View Full Details</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-effect p-8 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h3>
                  <p className="text-amber-400 text-lg">{selectedProject.developer}</p>
                  <div className="flex items-center text-gray-400 mt-2">
                    <MapPinIcon className="w-5 h-5 mr-2" />
                    {selectedProject.location}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  {/* Description */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 gradient-text">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Key Details */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 gradient-text">Key Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">Type</div>
                        <div className="text-white font-semibold">{selectedProject.type}</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">Status</div>
                        <div className="text-white font-semibold">{selectedProject.status}</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">Completion</div>
                        <div className="text-white font-semibold">{selectedProject.completion}</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">Rating</div>
                        <div className="flex items-center">
                          <StarIcon className="w-4 h-4 text-amber-400 mr-1" />
                          <span className="text-white font-semibold">{selectedProject.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floor Plans */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 gradient-text">Floor Plans</h4>
                    <div className="space-y-3">
                      {selectedProject.floorPlans.map((plan, idx) => (
                        <div key={idx} className="flex items-center bg-white/5 p-3 rounded-lg">
                          <HomeIcon className="w-5 h-5 text-amber-400 mr-3" />
                          <span className="text-white">{plan}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Investment Info */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 gradient-text">Investment Information</h4>
                    <div className="space-y-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Average Price</span>
                          <span className="text-amber-400 font-bold">{selectedProject.investment.averagePrice}</span>
                        </div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Rental Yield</span>
                          <span className="text-green-400 font-bold">{selectedProject.investment.rentalYield}</span>
                        </div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Appreciation Rate</span>
                          <span className="text-blue-400 font-bold">{selectedProject.investment.appreciationRate}</span>
                        </div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-gray-400 mb-2">Payment Plan</div>
                        <div className="text-white font-semibold">{selectedProject.investment.paymentPlan}</div>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 gradient-text">Amenities</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProject.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center bg-white/5 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          <span className="text-white">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <ChartBarIcon className="w-5 h-5" />
                      <span>Calculate Investment Returns</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full btn-secondary flex items-center justify-center space-x-2"
                    >
                      <CalendarIcon className="w-5 h-5" />
                      <span>Schedule Site Visit</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;