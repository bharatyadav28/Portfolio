'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import pic2 from '../../../public/pic2.jpg'

const AboutMeImage = () => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        transition: {
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
      className="relative mt-8 md:mt-0"
    >
      <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 scale-[1.02] opacity-20 blur-sm"></div>
      <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl rotate-6 scale-[1.05]"></div>
      <div className="relative h-[24rem] w-[16rem] rounded-2xl overflow-hidden border bg-background shadow-xl z-10">
        <Image
          src={pic2}
          alt="Bharat Yadav"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  )
}

export default AboutMeImage
