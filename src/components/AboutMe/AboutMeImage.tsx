'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import pic2 from '../../../public/pic2.jpg'

const AboutMeImage = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.025, 1.05, 1.075, 1.1, 1.075, 1.05, 1.025, 1],
        transition: {
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        },
      }}
      style={{ transformOrigin: 'center' }}
      className="h-[20.5rem] parent-div rounded-xl w-[12rem] md:self-start md-mt-0 mt-5"
    >
      <Image
        src={pic2}
        alt="Description"
        width={190}
        height={400}
        className="left-image rounded-xl"
      />
    </motion.div>
  )
}

export default AboutMeImage
