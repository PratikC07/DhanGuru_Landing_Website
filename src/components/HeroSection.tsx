'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const phoneEl = document.getElementById('phone-mockup');
      if (phoneEl) {
        phoneEl.style.transform = `translate(${x * 10 - 5}px, ${y * 10 - 5}px) rotateY(${x * 5 - 2.5}deg) rotateX(${-y * 5 + 2.5}deg)`;
      }
    };

    const sectionEl = sectionRef.current;
    if (sectionEl) {
      sectionEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionEl) {
        sectionEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col lg:flex-row items-center justify-between z-10">
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="gradient-text">DhanGuru</span>
            <br />
            <span className="neon-text">Guiding Every</span>
            <br />
            <span className="neon-text">Rupee Right</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI-powered personal finance platform tailored for young Indian users. Make every rupee count with intelligent insights.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Join Early Access
            </button>
            <button className="border border-white/30 hover:border-cyan-400 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:bg-white/5">
              Learn More
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div 
            id="phone-mockup" 
            className="transition-transform duration-200 ease-out"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <div className="relative mx-auto w-72 h-[580px]">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-[40px] blur-xl"></div>
              
              <motion.div 
                className="relative bg-black border-[8px] border-gray-800 rounded-[40px] h-full w-full overflow-hidden shadow-2xl neon-glow"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="absolute top-0 w-full h-6 bg-black z-10 flex justify-between items-center px-5">
                  <div className="text-white text-xs">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse-slow"></div>
                  </div>
                </div>
                
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-black rounded-b-xl z-20"></div>
                
                <div className="relative bg-gradient-to-b from-[#0f0f23] to-[#14143c] h-full w-full pt-8">
                  <div className="px-5 py-3 flex justify-between items-center">
                    <div>
                      <div className="font-display text-lg font-bold gradient-text">DhanGuru</div>
                      <div className="text-gray-400 text-xs">Good evening, Ankit</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-medium">A</span>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mx-5 mt-5 p-5 rounded-xl glassmorphism relative overflow-hidden"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="absolute -right-12 -top-12 w-28 h-28 rounded-full bg-blue-500/10 blur-lg"></div>
                    <div className="absolute -left-10 -bottom-10 w-28 h-28 rounded-full bg-purple-500/10 blur-lg"></div>
                    
                    <div className="text-gray-400 text-sm">Total Balance</div>
                    <div className="text-white text-2xl font-bold mt-1">₹42,567.89</div>
                    
                    <div className="mt-4 flex justify-between">
                      <div>
                        <div className="text-gray-400 text-xs">This Month</div>
                        <div className="text-green-400 text-sm font-medium">+₹12,452.00</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs">Last Month</div>
                        <div className="text-white text-sm font-medium">₹38,211.43</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="mx-5 mt-5 p-5 rounded-xl glassmorphism"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-white font-medium">Monthly Spending</div>
                      <div className="text-cyan-400 text-xs">View All</div>
                    </div>
                    
                    <div className="flex justify-between items-end h-24 mt-2">
                      {[35, 55, 45, 70, 60, 40].map((height, i) => (
                        <motion.div 
                          key={i}
                          className="w-6 rounded-t-sm bg-gradient-to-t from-cyan-500 to-blue-500"
                          style={{ height: `${height}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: 0.9 + (i * 0.1) }}
                        ></motion.div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between mt-2">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                        <div key={i} className="text-gray-400 text-xs">
                          {month}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="mx-5 mt-5 grid grid-cols-4 gap-2"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    {['Send', 'Receive', 'Scan', 'Bills'].map((action, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center mb-1">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                        </div>
                        <div className="text-white text-xs">{action}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="text-white/60 mb-2">Scroll to explore</p>
        <svg 
          className="animate-bounce w-6 h-6 text-white/60" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection; 