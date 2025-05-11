'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, className, delay = 0 }: { text: string, className: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Delay start of typing animation, but make it faster
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay * 500); // Faster delay (reduced by half)
    
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 40); // Faster typing speed (reduced from 70ms)

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, isStarted]);

  return (
    <div className={`${className} min-h-[1.5em]`}>
      <motion.span
        className="inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayText}
        {!isComplete && isStarted && <span className="animate-pulse">|</span>}
      </motion.span>
    </div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track mounted state to ensure animations don't start until page is stable
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Use Intersection Observer to detect when user scrolls away from the top
  useEffect(() => {
    if (typeof window === 'undefined' || !mounted || !sectionRef.current) return;

    // Create an observer to watch when the hero section is no longer fully visible
    const options = {
      root: null, // viewport
      rootMargin: '-20% 0px 0px 0px', // Only trigger when 20% of the top is out of view
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      // When the section is not intersecting (scrolled down), hide the indicator
      setScrolled(!entry.isIntersecting);
    }, options);

    // Observe the hero section itself
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [mounted]);

  // Mouse move effect for the phone mockup
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current || !mounted) return;

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
    if (sectionEl && mounted) {
      sectionEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionEl) {
        sectionEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mounted]);

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
          className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-3">
              <span className="text-accent-green-dark">Dhan</span><span className="text-accent-blue">Guru</span>
            </h1>
            
            <div className="h-12 md:h-16">
              <TypewriterText 
                text="Guiding Every Rupee Right" 
                className="neon-text text-accent-green text-2xl md:text-3xl lg:text-4xl font-display font-bold block"
                delay={1}
              />
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Unlock your financial potential with DhanGuru. From smart budgeting to future planning, our AI assistant guides you every step of the way.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-accent-green to-accent-green-dark hover:from-accent-green-dark hover:to-accent-green text-white py-3 px-8 rounded-full font-medium transition-all duration-200 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
            >
              Join Early Access
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border border-white/30 hover:border-accent-green text-white py-3 px-8 rounded-full font-medium transition-all duration-200 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:bg-white/5"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <div 
            id="phone-mockup" 
            className="transition-transform duration-200 ease-out"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <div className="relative mx-auto w-72 h-[580px]">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent-green/20 to-accent-green-light/20 rounded-[40px] blur-xl"></div>
              
              <motion.div 
                className="relative bg-black border-[8px] border-gray-800 rounded-[40px] h-full w-full overflow-hidden shadow-2xl neon-glow"
                initial={{ y: 100, opacity: 0 }}
                animate={mounted ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute top-0 w-full h-6 bg-black z-10 flex justify-between items-center px-5">
                  <div className="text-white text-xs">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-accent-green animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-accent-green-light animate-pulse-slow"></div>
                  </div>
                </div>
                
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-black rounded-b-xl z-20"></div>
                
                <div className="relative bg-gradient-to-b from-[#0f0f23] to-[#14143c] h-full w-full pt-8">
                  <div className="px-5 py-3 flex justify-between items-center">
                    <div>
                      <div className="font-display text-lg font-bold">
                        <span className="text-accent-green-dark">Dhan</span><span className="text-accent-blue">Guru</span>
                      </div>
                      <div className="text-gray-400 text-xs">Good evening, Ankit</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-green to-accent-green-dark flex items-center justify-center">
                      <span className="text-white font-medium">A</span>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mx-5 mt-5 p-5 rounded-xl glassmorphism relative overflow-hidden"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={mounted ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="absolute -right-12 -top-12 w-28 h-28 rounded-full bg-accent-green-dark/10 blur-lg"></div>
                    <div className="absolute -left-10 -bottom-10 w-28 h-28 rounded-full bg-accent-green/10 blur-lg"></div>
                    
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
                    animate={mounted ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-white font-medium">Monthly Spending</div>
                      <div className="text-accent-green text-xs">View All</div>
                    </div>
                    
                    <div className="flex justify-between items-end h-24 mt-2">
                      {[35, 55, 45, 70, 60, 40].map((height, i) => (
                        <motion.div 
                          key={i}
                          className="w-6 rounded-t-sm bg-gradient-to-t from-accent-green to-accent-green-light"
                          style={{ height: `${height}%` }}
                          initial={{ height: 0 }}
                          animate={mounted ? { height: `${height}%` } : { height: 0 }}
                          transition={{ duration: 0.7, delay: 0.6 + (i * 0.06) }}
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
                    animate={mounted ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    {['Send', 'Receive', 'Scan', 'Bills'].map((action, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center mb-1">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent-green to-accent-teal"></div>
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
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: mounted && !scrolled ? 0.8 : 0,
          y: mounted && !scrolled ? 0 : 20
        }}
        transition={{ 
          duration: 0.6, 
          delay: mounted && !scrolled ? 2.0 : 0,
          ease: "easeInOut"
        }}
        style={{ 
          pointerEvents: scrolled ? 'none' : 'auto'
        }}
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