'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from './ui/button'

const CustomDrawer = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/#about-me')
  }
  return (
    <Drawer>
      <DrawerTrigger className="text-white text-2xl">Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            {/* <Button variant="outline">Cancel</Button> */}
            <Button>
              <Link href="#resume">Submit</Link>
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CustomDrawer
