import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { IoMdMenu as MenuIcon } from 'react-icons/io'

import LinkItems from './LinkItems'
import { menubarData } from '@/lib/data/menubar'

const SheetMenu = () => {
  return (
    <div className="lg:hidden h-full 0">
      <header className="bg-dark_bg items-center pt-5 pb-4 px-5 ">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="text-heading m-0" size={40} />

            <span className="sr-only">Toggle Menu</span>
          </SheetTrigger>
          <SheetContent
            side={'right'}
            className="border-none h-full overflow-y-auto hide-scrollbar w-[3/5] bg-[#060f18]"
          >
            <SheetHeader className="mt-[4rem] flex gap-5">
              <LinkItems items={menubarData} showTitle={true} />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  )
}

export default SheetMenu
