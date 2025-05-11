'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmissionError(true);
      setTimeout(() => setSubmissionError(false), 3000);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setEmailSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-96 h-96 bg-accent-teal/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-accent-green">Join</span> the Waitlist
          </h2>
          <p className="text-gray-300 text-lg">
            Be among the first to experience DhanGuru. Early access members will receive premium features for free.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto glassmorphism p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-r from-accent-green/20 to-accent-teal/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-gradient-to-r from-accent-green-light/20 to-accent-green/20 rounded-full blur-3xl"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="mb-6">
              <label htmlFor="email" className="block text-white font-medium mb-2">Your Email Address</label>
              <div className="relative">
                <AnimatePresence>
                  {!emailSubmitted && !isSubmitting ? (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex"
                    >
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="glassmorphism border border-gray-700 hover:border-accent-green focus:border-accent-green focus:ring-0 rounded-l-lg py-3 px-4 w-full text-white bg-transparent transition-all duration-300"
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-accent-green to-accent-green-dark hover:from-accent-green-dark hover:to-accent-green text-white py-3 px-6 rounded-r-lg font-medium transition-all duration-300 flex items-center"
                      >
                        {submissionError ? <FiAlertCircle className="mr-2" /> : <FiSend className="mr-2" />}
                        Subscribe
                      </button>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
                
                <AnimatePresence>
                  {isSubmitting && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-8 h-8 border-4 border-t-accent-green border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <AnimatePresence>
                  {emailSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="glassmorphism border border-green-500 rounded-lg py-3 px-4 w-full text-white flex items-center justify-center"
                    >
                      <FiCheckCircle className="text-green-500 mr-2" />
                      <span className="text-green-500">Thank you! You're on the waitlist.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {submissionError && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 mt-2 text-sm"
                >
                  Please enter a valid email address
                </motion.p>
              )}
            </div>
            
            <div className="text-gray-400 text-sm text-center mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </div>
          </form>
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex justify-center gap-6">
            {['Discord', 'Twitter', 'LinkedIn', 'Instagram'].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                className="inline-block text-gray-400 hover:text-white"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                {platform}
              </motion.a>
            ))}
          </div>
          
          <div className="mt-10 text-gray-500 text-sm">
            © 2023 DhanGuru. All rights reserved.
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 