'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface propsTypes {
  value: number
}

const ProgressBar: React.FC<propsTypes> = ({ value }) => {
  return (
    <div className="relative  indicator h-[0.4rem] bg-[#282828] overflow-hidden rounded-full">
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full"
        style={{ width: `${value}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />
    </div>
  )
}

export default ProgressBar
