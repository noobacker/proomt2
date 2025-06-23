'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import PromptCard from './PromptCard'
import { motion } from 'framer-motion'

// Sample data for trending prompts
const TRENDING_PROMPTS = [
  {
    id: '1',
    title: 'Ultimate Product Copywriter',
    description: 'Generates compelling product descriptions that convert browsers into buyers. Tailored for e-commerce and marketing teams.',
    category: 'Marketing',
    rating: 4.9,
    reviews: 209,
    price: 14.99,
    author: {
      name: 'Alex Chen',
      avatar: 'https://via.placeholder.com/40',
    },
  },
  {
    id: '2',
    title: 'Blog Post Idea Generator',
    description: 'Never run out of content ideas. This prompt creates engaging blog topics tailored to your niche and audience.',
    category: 'Writing',
    rating: 4.7,
    reviews: 153,
    price: 'Free' as const,
    author: {
      name: 'Madison Lee',
      avatar: 'https://via.placeholder.com/40',
    },
  },
  {
    id: '3',
    title: 'UI/UX Design Feedback',
    description: 'Get instant, actionable feedback on your designs from an AI trained on design principles and user psychology.',
    category: 'Design',
    rating: 4.8,
    reviews: 187,
    price: 19.99,
    author: {
      name: 'Raj Patel',
      avatar: 'https://via.placeholder.com/40',
    },
  },
  {
    id: '4',
    title: 'Code Refactoring Assistant',
    description: 'Transform messy, inefficient code into clean, maintainable solutions with best practices for your language.',
    category: 'Development',
    rating: 4.9,
    reviews: 231,
    price: 29.99,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://via.placeholder.com/40',
    },
  },
]

export default function TrendingPrompts() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  
  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-1.5 h-6 bg-primary rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold">Trending Prompts</h2>
        </div>
        <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center">
          View All
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {TRENDING_PROMPTS.map((prompt) => (
          <motion.div key={prompt.id} variants={item}>
            <PromptCard
              title={prompt.title}
              description={prompt.description}
              category={prompt.category}
              rating={prompt.rating}
              reviews={prompt.reviews}
              price={prompt.price}
              author={prompt.author}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 