'use client';

import { useRef, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

interface AIFeature {
  title: string;
  description: string;
}

const aiFeatures: AIFeature[] = [
  {
    title: "Personalized Financial Insights",
    description: "Get custom recommendations based on your spending habits and financial goals."
  },
  {
    title: "Smart Expense Categorization",
    description: "GURU AI automatically categorizes expenses and identifies patterns to help you save."
  },
  {
    title: "Predictive Analysis",
    description: "Forecasts future expenses and suggests proactive measures to maintain financial health."
  },
  {
    title: "Voice-Driven Financial Assistant",
    description: "Ask questions about your finances in your language and get instant, accurate answers."
  }
];

const GuruAiSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const orbitRef = useRef<HTMLDivElement>(null);
  
  // Pre-calculate random positions for data points to avoid hydration errors
  const dataPointPositions = useMemo(() => [
    { top: '35%', left: '35%' },
    { top: '45%', left: '65%' },
    { top: '65%', left: '40%' },
    { top: '55%', left: '55%' },
  ], []);

  // Animated glowing orb effect
  useEffect(() => {
    if (!orbitRef.current) return;
    
    const orb = orbitRef.current;
    let animationFrameId: number;
    let angle = 0;
    
    const animateOrb = () => {
      angle += 0.005;
      const x = Math.sin(angle) * 10;
      const y = Math.cos(angle) * 10;
      
      if (orb) {
        orb.style.transform = `translate(${x}px, ${y}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animateOrb);
    };
    
    animateOrb();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="guru-ai"
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* AI Visualization */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 mx-auto">
              {/* Core glowing orb */}
              <div 
                ref={orbitRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse-slow opacity-90"
                style={{ filter: 'blur(12px)' }}
              ></div>
              
              {/* Outer glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse-slow" style={{ filter: 'blur(30px)' }}></div>
              
              {/* Animated rings */}
              {[40, 56, 72].map((size, i) => (
                <div 
                  key={i} 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-cyan-500/30 rounded-full animate-pulse-slow"
                  style={{ 
                    width: `${size}%`, 
                    height: `${size}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${3 + i}s` 
                  }}
                ></div>
              ))}
              
              {/* Core content */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-white font-display text-2xl font-bold gradient-text"
                >
                  GURU AI
                </motion.div>
              </div>
              
              {/* Floating data points */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.7)]"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: [0, 1, 0], scale: [0, 1.2, 0] } : { opacity: 0 }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.7, 
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  style={{ 
                    top: dataPointPositions[i].top,
                    left: dataPointPositions[i].left
                  }}
                ></motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center lg:text-left">
              <div className="relative glassmorphism px-6 py-5 max-w-md mx-auto lg:mx-0 rounded-xl">
                <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Voice Command Demo</h3>
                <p className="text-white/80 text-sm">
                  "Hey DhanGuru, how much did I spend on dining last month?"
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 mt-4"></div>
              </div>
            </div>
          </motion.div>
          
          {/* AI Features */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Powered by <span className="gradient-text">GURU AI</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our advanced AI engine understands your financial habits, learns from them, and provides actionable insights.
            </p>
            
            <div className="space-y-6">
              {aiFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="glassmorphism rounded-lg p-5 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1/2 bg-gradient-to-b from-cyan-400 to-blue-600"></div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuruAiSection; 