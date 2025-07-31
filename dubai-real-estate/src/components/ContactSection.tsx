'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Call Us',
      value: '+971 50 123 4567',
      action: 'tel:+971501234567',
      color: 'text-green-400',
      bgColor: 'from-green-500/10 to-green-600/5'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      value: 'ahmed@dubaiproperties.ae',
      action: 'mailto:ahmed@dubaiproperties.ae',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/10 to-blue-600/5'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'WhatsApp',
      value: '+971 50 123 4567',
      action: 'https://wa.me/971501234567',
      color: 'text-amber-400',
      bgColor: 'from-amber-500/10 to-orange-600/5'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Office',
      value: 'Business Bay, Dubai',
      action: '#',
      color: 'text-purple-400',
      bgColor: 'from-purple-500/10 to-purple-600/5'
    }
  ];

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  const propertyTypes = [
    'Apartment', 'Villa', 'Townhouse', 'Commercial', 'Off-Plan', 'Investment Portfolio'
  ];

  const budgetRanges = [
    'Under AED 1M', 'AED 1M - 2M', 'AED 2M - 5M', 
    'AED 5M - 10M', 'AED 10M+', 'Investment Budget'
  ];

  // Generate next 30 days
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends for business meetings
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        budget: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    }, 3000);
  };

  const handleDateTimeSelect = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setFormData(prev => ({
      ...prev,
      preferredDate: date,
      preferredTime: time
    }));
    setShowCalendar(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your Dubai real estate journey? Contact me today for 
            personalized advice and exclusive property opportunities.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-effect p-6 rounded-2xl card-hover bg-gradient-to-br ${method.bgColor} border border-white/10 block`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${method.bgColor} border border-white/20`}>
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                <p className={`${method.color} font-semibold`}>{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thank you for your inquiry. I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => handleInputChange('propertyType', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Select property type</option>
                      {propertyTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Tell me about your property requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary text-lg py-4"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Booking Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <CalendarIcon className="w-8 h-8 text-amber-400 mr-3" />
                <h3 className="text-2xl font-bold">Book Consultation</h3>
              </div>

              {selectedDate && selectedTime ? (
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 p-6 rounded-lg border border-amber-500/20 mb-6">
                  <h4 className="text-lg font-bold gradient-text mb-4">Selected Appointment</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">
                        {new Date(selectedDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="text-amber-400 font-semibold">{selectedTime}</div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedDate('');
                        setSelectedTime('');
                        setFormData(prev => ({ ...prev, preferredDate: '', preferredTime: '' }));
                      }}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="w-full btn-secondary mb-6 flex items-center justify-center space-x-2"
                >
                  <CalendarIcon className="w-5 h-5" />
                  <span>Select Date & Time</span>
                </motion.button>
              )}

              {showCalendar && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border border-white/10 rounded-lg p-4 mb-6"
                >
                  <h4 className="text-lg font-semibold mb-4">Available Dates</h4>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {generateAvailableDates().slice(0, 10).map(date => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 rounded-lg text-sm transition-colors ${
                          selectedDate === date
                            ? 'bg-amber-500 text-white'
                            : 'bg-white/5 hover:bg-white/10 text-gray-300'
                        }`}
                      >
                        {new Date(date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </button>
                    ))}
                  </div>

                  {selectedDate && (
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Available Times</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {availableTimes.map(time => (
                          <button
                            key={time}
                            onClick={() => handleDateTimeSelect(selectedDate, time)}
                            className="p-2 bg-white/5 hover:bg-amber-500 rounded-lg text-sm transition-colors"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Office Hours */}
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <ClockIcon className="w-6 h-6 text-blue-400 mr-3" />
                  <h4 className="text-lg font-bold">Office Hours</h4>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass-effect p-6 rounded-2xl">
              <h4 className="text-lg font-bold gradient-text mb-4">Need Immediate Assistance?</h4>
              <div className="space-y-4">
                <motion.a
                  href="tel:+971501234567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Call Now</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-secondary flex items-center justify-center space-x-2"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;