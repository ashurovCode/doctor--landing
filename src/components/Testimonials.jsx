import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      image: '👩',
      rating: 5,
      text: 'Exceptional care and professionalism. The doctors are highly skilled and truly care about their patients. I highly recommend their services!'
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      image: '👨',
      rating: 5,
      text: 'The best medical experience I\'ve ever had. The staff is friendly, the facility is modern, and the doctors are incredibly knowledgeable.'
    },
    {
      name: 'Emily Davis',
      role: 'Patient',
      image: '👩‍🦰',
      rating: 5,
      text: 'I was impressed by the level of care and attention I received. They took the time to explain everything and made me feel comfortable throughout.'
    },
    {
      name: 'David Wilson',
      role: 'Patient',
      image: '👨‍🦱',
      rating: 5,
      text: 'Outstanding service from start to finish. The online booking system is convenient, and the medical team is top-notch. Highly satisfied!'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-white" id="testimonials">
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
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6"
          >
            What our great customers say about us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Real experiences from real patients who trust us with their health
          </motion.p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 -left-6 text-blue-200 opacity-50 z-0">
              <Quote size={80} fill="currentColor" />
            </div>

            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl relative z-10"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <Star size={24} className="text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-3xl shadow-lg">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-white border-2 border-blue-600 text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-lg"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all shadow-lg"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
