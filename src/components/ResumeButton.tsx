'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface propsType {
  width?: string
}
const ResumeButton: React.FC<propsType> = ({ width }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(
      'https://drive.google.com/file/d/18sEpsxbY-N8G7SUF_iHLpAiRVGm_Ordp/view?usp=sharing',
    )
  }

  let classes = `bg-primary hover:bg-primary/90 text-sm text-primary-foreground rounded-lg py-3 font-bold shadow-sm transition-all ${width ? width : 'w-full'} `

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className={classes}
    >
      Download Resume
    </motion.button>
  )
}

export default ResumeButton
