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
    router.push("/Bharat's Resume.pdf")
  }

  let classes = `bg-highlight   text-sm text-[#0f0f0f]  rounded-md py-[0.5rem]  font-extrabold ${width ? width : 'w-full'} `

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05, backgroundColor: '#f38e0a' }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className={classes}
    >
      Download Resume
    </motion.button>
  )
}

export default ResumeButton
