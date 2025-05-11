'use client';

import { useEffect } from 'react';

export default function ScrollRestoration() {
  useEffect(() => {
    // Ensure we run this on the client only
    if (typeof window !== 'undefined') {
      // Set scroll to top immediately and force it
      window.scrollTo(0, 0);
      
      // Disable browser's automatic scroll restoration
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = 'manual';
      }
      
      // Use a timeout to coordinate with layout.tsx loading
      const timer = setTimeout(() => {
        // Everything should be handled by layout.tsx now
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return null; // This component doesn't render anything
} 