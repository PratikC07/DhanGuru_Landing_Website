'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-accent-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-green-light/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-accent-green">About</span> DhanGuru
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            DhanGuru is an AI-powered personal finance platform tailored for young Indian users — especially first-time earners, freelancers, and digitally-active professionals — who struggle with financial literacy, budgeting, saving, and long-term wealth planning.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div 
              className="glassmorphism p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3 text-accent-green">Our Mission</h3>
              <p className="text-gray-300">
                To make financial literacy and independence a reality for every Indian through accessible, human-like, AI-powered assistance.
              </p>
            </motion.div>
            
            <motion.div 
              className="glassmorphism p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3 text-accent-green">The Problem</h3>
              <p className="text-gray-300">
                76% of Indian adults lack understanding of core financial concepts like compound interest or risk diversification.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 