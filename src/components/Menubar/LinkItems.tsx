import Link from 'next/link'

import { SheetClose } from '../ui/sheet'

export interface menuLink {
  Icon: React.ElementType
  title: string
  path: string
}

interface propsTypes {
  items: menuLink[]
  showTitle?: Boolean
}

const LinkItems: React.FC<propsTypes> = ({ items, showTitle }) => {
  let classes =
    'group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
  if (showTitle) {
    classes =
      '  flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
  }

  return (
    <>
      {items.map((item: menuLink) => {
        return (
          // <SheetClose key={item.title}>
          <div key={item.title}>
            <Link href={'/path'} className={classes}>
              <item.Icon fill="#F7A02D" className="h-5 w-5 " />
              {showTitle && item.title}
              <span className="sr-only">{item.title}</span>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default LinkItems
