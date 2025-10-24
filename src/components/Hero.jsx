import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Users, Award } from 'lucide-react'
import HeroImg from '../assets/hero.png'

const Hero = () => {
  const stats = [
    { icon: Calendar, label: '24/7 Service', color: 'bg-blue-500' },
    { icon: Users, label: 'Qualified Doctors', color: 'bg-green-500' },
    { icon: Award, label: 'Certified Services', color: 'bg-purple-500' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                HEALTH CARE SERVICES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              A dedicated doctor
              <br />
              <span className="text-blue-600">You can trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Providing comprehensive healthcare services with experienced
              professionals dedicated to your well-being. Your health is our
              priority.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg"
              >
                Book Appointment
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <div className={`${stat.color} p-2 rounded-full`}>
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <span className="font-semibold text-gray-700">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              <div className="relative z-0">
                <img src={HeroImg} alt="Hero" />
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-[3px] -left-6 bg-white p-4 rounded-2xl shadow-xl z-[60] 
             sm:top-[3px] sm:-left-6 top-[5px] bottom-auto"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Certified</p>
                  <p className="text-sm text-gray-600">Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-xl z-[60]"
            >
              <div className="flex items-center gap-3 relative">
                <div className="bg-blue-500 p-2 rounded-full">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">1000+</p>
                  <p className="text-sm text-gray-600">Happy Patients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
