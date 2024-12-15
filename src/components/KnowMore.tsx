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
      whileHover={{ scale: 1.05, backgroundColor: '#f38e0a' }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="mt-5 bg-highlight px-3 py-2  text-sm text-[#0f0f0f] rounded-md   font-bold
     "
    >
      Know More
    </motion.button>
  )
}

export default KnowMore
