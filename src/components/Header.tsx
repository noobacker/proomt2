'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Users, Sparkles, BookOpen, PieChart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle scroll event to change header appearance
  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  if (!mounted) return null

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Proomt</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/community" 
            className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Users size={16} />
            <span>Community</span>
          </Link>
          <Link 
            href="/explore" 
            className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Sparkles size={16} />
            <span>Explore</span>
          </Link>
          <Link 
            href="/learn" 
            className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <BookOpen size={16} />
            <span>Learn</span>
          </Link>
          <Link 
            href="/pricing" 
            className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <PieChart size={16} />
            <span>Pricing</span>
          </Link>
        </nav>
        
        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-primary transition-colors">Log in</Link>
          <Link href="/signup" className="btn-primary px-4 py-2 rounded-md">Join Free</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/90 backdrop-blur-sm border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              <Link 
                href="/community" 
                className="text-gray-700 hover:text-primary transition-colors py-2 flex items-center gap-1.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users size={16} />
                <span>Community</span>
              </Link>
              <Link 
                href="/explore" 
                className="text-gray-700 hover:text-primary transition-colors py-2 flex items-center gap-1.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Sparkles size={16} />
                <span>Explore</span>
              </Link>
              <Link 
                href="/learn" 
                className="text-gray-700 hover:text-primary transition-colors py-2 flex items-center gap-1.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpen size={16} />
                <span>Learn</span>
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-700 hover:text-primary transition-colors py-2 flex items-center gap-1.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <PieChart size={16} />
                <span>Pricing</span>
              </Link>
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  href="/signup" 
                  className="btn-primary text-center py-2 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 