'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Share2, DollarSign, Sparkles, Users, Globe } from 'lucide-react'
import FeatureCard from './FeatureCard'

export default function Features() {
  const features = [
    {
      title: 'Community-Curated Prompts',
      description: 'Access high-quality prompts vetted by a passionate community dedicated to advancing AI for everyone.',
      icon: Sparkles
    },
    {
      title: 'Share Knowledge',
      description: 'Contribute your expertise and help others succeed. Build your reputation as a prompt engineer.',
      icon: Share2
    },
    {
      title: 'Global Impact',
      description: 'Be part of a movement making AI more accessible, ethical, and beneficial for people worldwide.',
      icon: Globe
    }
  ]

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Users size={14} className="mr-1" />
            Community-Driven
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            The <span className="gradient-text">Prompt</span> Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a global movement to democratize AI through better prompts. Share knowledge, help others, and shape the future together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
} 