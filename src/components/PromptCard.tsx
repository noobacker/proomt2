'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Heart, ArrowRight, Sparkles } from 'lucide-react'

interface PromptCardProps {
  title: string
  description: string
  category: string
  rating: number
  reviews: number
  price: number | 'Free'
  author: {
    name: string
    avatar: string
  }
}

export default function PromptCard({ 
  title, 
  description, 
  category, 
  rating, 
  reviews, 
  price, 
  author 
}: PromptCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="prompt-card flex flex-col h-full group" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header */}
      <div className="p-5 border-b border-white/5">
        <div className="flex justify-between items-start mb-3">
          <div className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full flex items-center">
            <Sparkles size={12} className="mr-1.5" />
            <span>{category}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm ml-1 font-medium">{rating}</span>
            <span className="text-xs text-white/50 ml-1">({reviews})</span>
          </div>
        </div>
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-white/70 line-clamp-2">{description}</p>
      </div>
      
      {/* Card Footer */}
      <div className="p-5 mt-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full overflow-hidden relative mr-2 ring-2 ring-white/10">
              <Image 
                src={author.avatar} 
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          <div>
            {typeof price === 'number' ? (
              <span className="font-mono font-bold">${price.toFixed(2)}</span>
            ) : (
              <span className="font-mono font-bold text-green-500">{price}</span>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 btn btn-primary flex items-center justify-center gap-1.5">
            Try it <ArrowRight size={16} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </button>
          <button className="p-2 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
            <Heart size={18} className="text-white/70" />
          </button>
        </div>
      </div>
      
      {/* Hover effect */}
      <div className={`absolute inset-0 -z-10 rounded-2xl transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
      </div>
    </div>
  )
} 