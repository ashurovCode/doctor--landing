import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Stethoscope, Heart, Activity, Pill, Brain, Baby, ArrowRight } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Stethoscope,
      title: 'General Checkup',
      description: 'Comprehensive health examinations and preventive care',
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Expert heart care and cardiovascular treatments',
      color: 'from-red-500 to-red-600',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: Activity,
      title: 'Orthopedics',
      description: 'Bone and joint care with advanced treatments',
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'Quality medications and pharmaceutical care',
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Advanced neurological care and treatment',
      color: 'from-indigo-500 to-indigo-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized care for infants and children',
      color: 'from-pink-500 to-pink-600',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-semibold text-sm uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6"
          >
            Comprehensive Medical Care
            <br />
            <span className="text-blue-600">For Your Health</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            We offer a wide range of medical services to meet all your healthcare needs with excellence and care.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all`}
                >
                  <service.icon size={32} className={service.iconColor} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </motion.div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
