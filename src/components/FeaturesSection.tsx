'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMic, FiGlobe, FiBarChart2, FiCpu, FiTarget, FiUsers } from 'react-icons/fi';

const features = [
  {
    icon: <FiMic className="w-6 h-6" />,
    title: 'Voice Interaction',
    description: 'Hands-free finance management with AI understanding your voice commands.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: 'Multilingual UI',
    description: 'Available in multiple Indian languages for wide accessibility.',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    icon: <FiBarChart2 className="w-6 h-6" />,
    title: 'Smart Budgeting',
    description: 'Set budgets, get alerts, and analyze your spending habits.',
    color: 'from-blue-400 to-violet-500'
  },
  {
    icon: <FiCpu className="w-6 h-6" />,
    title: 'GURU AI',
    description: 'Personalized insights on spending, saving, and investing.',
    color: 'from-teal-400 to-cyan-500'
  },
  {
    icon: <FiTarget className="w-6 h-6" />,
    title: 'Goal Setting',
    description: 'Create, track, and get nudged toward your financial goals.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: 'Collaborative Budgeting',
    description: 'Manage finances together with family or flatmates.',
    color: 'from-cyan-500 to-blue-600'
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      className="glassmorphism rounded-xl p-6 relative overflow-hidden group hover:neon-border transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-gradient-to-r opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
      
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
        {feature.icon}
      </div>
      
      <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          ref={containerRef}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Smart Features</span> for Everyone
          </h2>
          <p className="text-gray-300 text-lg">
            DhanGuru simplifies personal finance with intelligent tools built for the digital age
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 