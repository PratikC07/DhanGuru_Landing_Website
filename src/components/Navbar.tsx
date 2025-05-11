'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'About', 'GURU AI', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white/80 hover:text-white transition-colors font-medium hover:text-teal-400"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-5 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] hidden md:block">
          Join Early Access
        </button>

        <button className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar; 