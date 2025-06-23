import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Proomt</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              The Internet's Prompt Layer. Explore, share, and sell prompts to unlock the full potential of AI.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/marketplace" className="text-gray-600 hover:text-primary transition-colors">Marketplace</Link></li>
              <li><Link href="/categories" className="text-gray-600 hover:text-primary transition-colors">Categories</Link></li>
              <li><Link href="/creators" className="text-gray-600 hover:text-primary transition-colors">Top Creators</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/docs" className="text-gray-600 hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Proomt. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 