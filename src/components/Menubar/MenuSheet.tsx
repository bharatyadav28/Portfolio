'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import CustomSheet from '../CustomSheet'
import { Button } from '../ui/button'
import { IoMdMenu as MenuIcon } from 'react-icons/io'

// For mobile devices

const MenuSheet = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className="lg:hidden">
      {!open && (
        <Button
          variant={'ghost'}
          onClick={handleOpen}
          className="my-4 pr-[0.5rem] "
        >
          <MenuIcon className="text-heading m-0" size={40} />

          <span className="sr-only">Toggle Menu</span>
        </Button>
      )}

      <AnimatePresence>
        {open && <CustomSheet open={open} handleOpen={handleOpen} />}
      </AnimatePresence>
    </div>
  )
}

export default MenuSheet
