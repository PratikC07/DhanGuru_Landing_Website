'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
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
  
  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for the navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-200 ${
        scrolled ? 'glassmorphism py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'About', 'GURU AI', 'Contact'].map((item) => {
            const id = item.toLowerCase().replace(' ', '-');
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className="text-white/80 hover:text-accent-green transition-colors font-medium"
              >
                {item}
              </a>
            );
          })}
        </nav>

        <button className="bg-gradient-to-r from-accent-green to-accent-green-dark hover:from-accent-green-dark hover:to-accent-green text-white py-2 px-5 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] hidden md:block">
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