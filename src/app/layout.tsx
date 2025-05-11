'use client';

import { useEffect } from 'react';
import type { Metadata } from "next";
import { Inter, Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Metadata needs to be defined in a separate file or using generateMetadata
// since the layout is now a client component
// For now, we'll leave it here but it should be separated in production

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fix for mobile viewport height issues
  useEffect(() => {
    // Add loading class immediately to prevent any flashing
    if (typeof window !== 'undefined') {
      // Apply loading class immediately
      document.documentElement.classList.add('loading');
      
      // Prevent any animations or transitions during initial load
      document.documentElement.style.setProperty('--initial-load', '1');
      
      // Helper for Safari detection
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      
      // Calculate viewport height for mobile browsers
      const setVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      // Set initial value
      setVh();
      
      // Update on resize
      window.addEventListener('resize', setVh);
      
      // Use shorter delays for faster experience
      const stabilizationDelay = isSafari || isIOS ? 500 : 300;
      
      // After a short delay, enable animations and remove loading state with transition
      const timer = setTimeout(() => {
        // Add a brief but faster transition for smooth fade-in
        document.body.style.transition = 'visibility 0.2s, opacity 0.2s';
        document.documentElement.style.setProperty('--initial-load', '0');
        document.documentElement.classList.remove('loading');
      }, stabilizationDelay);
      
      return () => {
        window.removeEventListener('resize', setVh);
        clearTimeout(timer);
      };
    }
  }, []);
  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>DhanGuru | Guiding Every Rupee Right</title>
        <meta name="description" content="AI-powered personal finance platform tailored for young Indian users" />
        <meta name="keywords" content="fintech, personal finance, AI finance, India, financial literacy" />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable} antialiased force-gpu`}
      >
        {children}
      </body>
    </html>
  );
}
