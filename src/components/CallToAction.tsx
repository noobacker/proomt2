'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Sparkles } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm p-8 md:p-12 relative z-10 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/5 -z-10" />
          <div className="absolute inset-0 dot-pattern opacity-10 -z-10" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Users size={14} className="mr-1" />
                Join 10,000+ Prompt Engineers
              </div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Be part of the <span className="gradient-text">prompt revolution</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Share your knowledge, help others, and contribute to a future where AI is accessible and beneficial for everyone.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <Link 
                href="/signup" 
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3 rounded-xl animate-pulse-slow"
              >
                <Sparkles size={18} />
                Join the Community
                <ArrowRight size={18} />
              </Link>
              <p className="text-sm text-gray-500 mt-3">Free forever. No credit card required.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 