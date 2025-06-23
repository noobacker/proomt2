'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return (
    <section className="pt-32 md:pt-40 pb-10 md:pb-16 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Animated title with gradient text */}
        <motion.div
          className="mb-4 inline-flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles size={14} className="mr-1" />
            The Prompt Revolution
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold leading-[1.15] mb-6 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1.0, 0.22, 1.0] }}
        >
          The Internet's
          <span className="block mt-2 pb-2 gradient-text">Prompt Layer</span>
        </motion.h1>
        
        {/* Animated description */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.19, 1.0, 0.22, 1.0] }}
        >
          Explore, Share, Sell - One Prompt at a Time. Find the perfect words to power your AI and unlock its full potential.
        </motion.p>
        
        <motion.p
          className="mt-4 text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Join a global community dedicated to making AI more accessible and beneficial for everyone.
        </motion.p>
      </div>
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden dot-pattern opacity-30">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-0.75s' }} />
      </div>
    </section>
  )
} 