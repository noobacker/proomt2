'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const CATEGORIES = [
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Create compelling copy, ads, and content strategies',
    count: 348,
    icon: '📢',
    color: 'from-pink-600/20 to-red-600/20',
  },
  {
    id: 'writing',
    name: 'Writing',
    description: 'Craft stories, articles, blogs, and social posts',
    count: 245,
    icon: '✍️',
    color: 'from-blue-600/20 to-cyan-600/20',
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Generate design ideas, UI/UX feedback, and creative direction',
    count: 187,
    icon: '🎨',
    color: 'from-purple-600/20 to-indigo-600/20',
  },
  {
    id: 'development',
    name: 'Development',
    description: 'Code optimization, debugging, and programming help',
    count: 215,
    icon: '👩‍💻',
    color: 'from-green-600/20 to-emerald-600/20',
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Business plans, strategies, and operational insights',
    count: 132,
    icon: '💼',
    color: 'from-amber-600/20 to-yellow-600/20',
  },
  {
    id: 'career',
    name: 'Career',
    description: 'Resume building, interview prep, and professional growth',
    count: 119,
    icon: '🚀',
    color: 'from-orange-600/20 to-amber-600/20',
  },
]

export default function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  
  return (
    <section className="mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Browse by Category</h2>
          <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center">
            View All Categories
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <motion.div 
              key={category.id}
              className="category-card relative overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${category.color} opacity-30 rounded-2xl`} />
              
              <div className="text-4xl mb-4">{category.icon}</div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{category.name}</h3>
                <span className="text-sm text-white/50 font-mono">{category.count}</span>
              </div>
              <p className="text-sm text-white/70 mb-5">{category.description}</p>
              <div className="flex items-center text-primary font-medium">
                Explore {category.name}
                <ArrowRight 
                  size={16} 
                  className={`ml-2 transition-transform duration-300 ${
                    hoveredCategory === category.id ? 'translate-x-1' : ''
                  }`} 
                />
              </div>
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={false}
                animate={hoveredCategory === category.id ? {
                  boxShadow: `0 0 0 2px rgba(124, 58, 237, 0.5)`
                } : {
                  boxShadow: `0 0 0 0px rgba(124, 58, 237, 0)`
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 