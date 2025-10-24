import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Heart, Shield, Clock } from 'lucide-react'
import AboutImg from '../assets/doctor.png'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy and respect',
    },
    {
      icon: Shield,
      title: 'Trusted Service',
      description: 'Certified and experienced medical professionals',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock medical support when you need it',
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white" id="about-us">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Wrapper */}
            <div className="relative rounded-3xl">
              <div className="aspect-[4/5] flex items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src={AboutImg}
                  alt="Doctor"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-10 right-0 md:bottom-20 md:-right-6 bg-white p-6 rounded-2xl shadow-xl z-[50]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">15+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              A dedicated doctor with the
              <span className="text-blue-600"> best quality in city</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              We provide comprehensive healthcare services with a team of
              experienced and dedicated medical professionals. Our commitment is
              to deliver the highest quality care with compassion and
              excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <feature.icon size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
