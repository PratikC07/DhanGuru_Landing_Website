/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'sans-serif'],
        mono: ['var(--font-space-grotesk)', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#13134b',
          dark: '#0a0a29',
        },
        secondary: '#0f172a',
        accent: {
          teal: '#06d486',
          green: {
            light: '#4ade80',
            DEFAULT: '#22c55e',
            dark: '#15803d',
          },
          violet: '#8b5cf6',
          blue: '#3b82f6',
        },
        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          700: '#374151',
          800: '#1f2937'
        },
        red: {
          500: '#ef4444'
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4'
        },
        teal: {
          400: '#2dd4bf'
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb'
        },
        purple: {
          500: '#8b5cf6',
          600: '#7c3aed'
        },
        violet: {
          500: '#8b5cf6'
        },
        indigo: {
          500: '#6366f1',
          600: '#4f46e5'
        }
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'fade-in-fast': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(6, 182, 212, 0.5), 0 0 10px rgba(6, 182, 212, 0.3)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.7), 0 0 20px rgba(6, 182, 212, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 