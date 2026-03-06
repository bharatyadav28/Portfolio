'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { socialLinksData as linksData } from '@/lib/data/sidebar'

// Social newtwork links
const SocialLinks = () => {
  return (
    <ul className="mt-2 flex justify-evenly gap-3" aria-label="social links">
      {linksData.map((item, index) => {
        const isMail = item.url.includes('mail')
        return (
          <motion.li
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            key={index}
          >
            <Link href={item.url} target={isMail ? '_self' : '_blank'}>
              <item.Icon
                size={20}
                strokeWidth={1}
                className={`bg-primary text-primary-foreground p-[0.2rem] rounded-sm hover:bg-primary/80 transition-colors ${!isMail && 'fill-current'}`}
              />
            </Link>
          </motion.li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
