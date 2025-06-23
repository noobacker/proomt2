'use client'

import { useState } from 'react'
import { Search, Sparkles, Users, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 px-4">
      <motion.div 
        className={`relative flex items-center rounded-full border ${
          isFocused 
            ? 'border-primary shadow-md' 
            : 'border-gray-200/80'
        } bg-white/80 backdrop-blur-sm px-4 py-3.5 transition-all duration-300 ${isFocused ? 'animate-pulse-slow' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Search className={`h-5 w-5 ${isFocused ? 'text-primary' : 'text-gray-400'} transition-colors`} />
        <input
          type="text"
          placeholder="Search for community prompts..."
          className="flex-1 bg-transparent px-3 py-1 text-gray-800 placeholder-gray-400 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <kbd className="hidden sm:flex items-center rounded border border-gray-200/80 bg-gray-50/80 px-2 py-0.5 text-xs text-gray-500">
          ⌘K
        </kbd>
      </motion.div>
      
      <motion.div 
        className="flex flex-wrap gap-2 mt-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="tag flex items-center gap-1">
          <Sparkles size={12} className="text-primary" />
          <span>#discover</span>
        </div>
        <div className="tag flex items-center gap-1">
          <Share2 size={12} className="text-primary" />
          <span>#share</span>
        </div>
        <div className="tag flex items-center gap-1">
          <Users size={12} className="text-primary" />
          <span>#community</span>
        </div>
        <span className="tag">#design</span>
        <span className="tag">#marketing</span>
        <span className="tag">#development</span>
        <span className="tag">#productivity</span>
      </motion.div>
      
      <motion.p
        className="text-center text-sm text-gray-500 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Join thousands of creators sharing knowledge for a better AI future
      </motion.p>
    </div>
  )
} 