import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { menubarData } from '@/lib/data/menubar'

interface propsTypes {
  open: boolean
  handleOpen: () => void
}
const CustomSheet: React.FC<propsTypes> = ({ open, handleOpen }) => {
  return (
    <>
      <div
        className="lg:hidden h-full w-full fixed top-0 left-0 z-40"
        onClick={handleOpen}
      />
      <motion.div
        initial={{ opacity: 0, width: '8rem' }}
        animate={{ opacity: 1, width: '10rem' }}
        exit={{ opacity: 0, width: '7rem' }}
        transition={{ duration: 0.5 }}
        className="lg:hidden h-full w-[10rem] fixed right-0 top-0 bg-[#060f18] z-50"
      >
        <div className=" pt-[4rem] flex flex-col gap-5">
          {menubarData.map((data) => (
            <div
              key={data.title}
              className="flex justify-start items-center gap-2 mx-6"
            >
              <data.Icon fill="#F7A02D" className="h-5 w-5 " />
              <Link
                className="hover:cursor-pointer text-heading"
                href={data.path}
                onClick={handleOpen}
              >
                {data.title}
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default CustomSheet
