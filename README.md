# DhanGuru - AI-Powered Personal Finance Platform

A modern, dark-themed pre-launch landing page for DhanGuru, an AI-powered personal finance platform tailored for young Indian users.

## Overview

DhanGuru is an AI-powered personal finance platform designed for young Indian users. The landing page features a modern, interactive design with a focus on accessibility, multilingual support, and engaging user experience.

## Features

- 🌑 Modern dark-mode design with neon gradients and glowing accents
- 🎭 Fluid animations and transitions powered by Framer Motion
- 🧩 Interactive UI components with hover effects
- 📱 Fully responsive for all devices
- 🚀 Built with Next.js and Tailwind CSS for performance and maintainability

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Three Fiber**: Three.js for React
- **TypeScript**: Type-safe JavaScript

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd dhanguru-landing
```

2. Install the dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app`: Main application code and page components
- `src/components`: Reusable UI components
- `public`: Static assets like images
- `styles`: Global styles and Tailwind configuration

## Deployment

The project is ready to be deployed on platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

## License

This project is licensed under the MIT License.

## Customization
- To update the hero tagline or description, edit `src/components/HeroSection.tsx`.
- To adjust the scroll indicator behavior, see the Intersection Observer logic in the same file.

## Development
- Built with Next.js, React, and Tailwind CSS
- To run locally:
  ```bash
  npm install
  npm run dev
  ```
- The app will start on the next available port (default 3000, fallback 3001, etc.)

## Animations
- The GuruAI section uses a Lottie animation for the robot. See `public/animations/README.md` for details on customizing this animation.

---
For any further customization or questions, see the code comments or reach out to the project maintainer.
