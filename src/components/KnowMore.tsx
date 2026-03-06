'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

// Know more button
const KnowMore = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/#about-me')
  }
  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="mt-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3.5 rounded-full font-bold tracking-wide transition-colors shadow-sm cursor-pointer"
    >
      Know More
    </motion.button>
  )
}

export default KnowMore
