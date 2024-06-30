import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'
import Link from 'next/link'

interface linkType {
  Icon: React.ElementType
  title: string
  path: string
}

interface propsTypes {
  items: linkType[]
}

// For desktop screen
const TooltipLinks: React.FC<propsTypes> = ({ items }) => {
  let classes =
    'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'

  return (
    <>
      {items.map((item: linkType) => {
        return (
          <TooltipProvider key={item.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={item.path} className={classes}>
                  {' '}
                  <item.Icon fill="#F7A02D" className="h-7 w-7 " />
                  <span className="sr-only">{item.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-[#0f0f0f] font-bold">
                {item.title}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      })}
    </>
  )
}

export default TooltipLinks
