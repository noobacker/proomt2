import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  delay?: number
}

export default function FeatureCard({ 
  title, 
  description, 
  icon: Icon,
  delay = 0
}: FeatureCardProps) {
  return (
    <motion.div 
      className="card hover-lift"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  )
} 