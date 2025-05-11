'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo = ({ size = 'medium', className = '' }: LogoProps) => {
  const sizes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl',
  };

  return (
    <motion.div 
      className={`font-display font-bold ${sizes[size]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="gradient-text">Dhan</span>
      <span className="text-white">Guru</span>
    </motion.div>
  );
};

export default Logo; 