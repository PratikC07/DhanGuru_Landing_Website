'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCpu, FiBarChart2, FiPieChart, FiVoicemail } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface AIFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  meshColor: string;
}

const aiFeatures: AIFeature[] = [
  {
    title: "Personalized Financial Insights",
    description: "Get custom recommendations based on your spending habits and financial goals.",
    icon: <FiCpu size={24} />,
    color: "accent-green",
    meshColor: "#00F5A0"
  },
  {
    title: "Smart Expense Categorization",
    description: "GURU AI automatically categorizes expenses and identifies patterns to help you save.",
    icon: <FiPieChart size={24} />,
    color: "accent-green-light",
    meshColor: "#00D9F5"
  },
  {
    title: "Predictive Analysis",
    description: "Forecasts future expenses and suggests proactive measures to maintain financial health.",
    icon: <FiBarChart2 size={24} />,
    color: "accent-teal",
    meshColor: "#00C6F5"
  },
  {
    title: "Voice-Driven Financial Assistant",
    description: "Ask questions about your finances in your language and get instant, accurate answers.",
    icon: <FiVoicemail size={24} />,
    color: "accent-blue",
    meshColor: "#0090F5"
  }
];

// Path to the Robot animation JSON
const ROBOT_ANIMATION_PATH = '/animations/Robot.json';

// Define type for Lottie animation data
interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: Record<string, unknown>[];
  layers: Record<string, unknown>[];
  markers: Record<string, unknown>[];
}

// Robot AI Animation component
const RobotAIAnimation = () => {
  const [animationData, setAnimationData] = useState<LottieAnimationData | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const lottieRef = useRef<any>(null);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Fetch animation data from URL
    fetch(ROBOT_ANIMATION_PATH)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);
  
  // Slow down animation speed when loaded
  useEffect(() => {
    if (lottieRef.current) {
      // Set animation speed to 70% of normal
      lottieRef.current.setSpeed(0.7);
    }
  }, [animationData]);

  if (!isMounted || !animationData) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex space-x-4">
          <motion.div 
            className="h-4 w-4 bg-accent-green rounded-full"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="h-4 w-4 bg-accent-green rounded-full"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className="h-4 w-4 bg-accent-green rounded-full"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>
    );
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{
        width: '100%',
        height: '100%',
      }}
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid slice',
      }}
    />
  );
};

const GuruAiSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  return (
    <section 
      id="guru-ai"
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-green-light/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Powered by <span className="text-accent-green">GURU</span> <span className="text-accent-blue">AI</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            Our advanced AI engine understands your financial habits, learns from them, and provides actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Robot Animation - LEFT SIDE */}
          <motion.div 
            className="h-[500px] rounded-2xl overflow-hidden relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Robot Animation */}
            <RobotAIAnimation />
          </motion.div>
          
          {/* RIGHT SIDE - Feature details section */}
          <div className="flex flex-col">
            {/* Feature details section */}
            <div className="grid grid-cols-1 gap-4">
              {aiFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="glassmorphism rounded-lg p-5 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: index * 0.3 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ x: 10, transition: { duration: 0.5 } }}
                >
                  <div className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1/2 bg-gradient-to-b from-${feature.color} to-accent-teal`}></div>
                  <div className="flex items-center mb-2">
                    <span className={`text-${feature.color} mr-3`}>{feature.icon}</span>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuruAiSection; 