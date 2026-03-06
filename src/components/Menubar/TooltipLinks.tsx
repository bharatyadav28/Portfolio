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
  return (
    <>
      {items.map((item: linkType) => {
        return (
          <TooltipProvider key={item.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  href={item.path} 
                  className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:text-primary hover:bg-primary/10 group"
                >
                  <item.Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                  <span className="sr-only">{item.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-popover border border-border text-popover-foreground font-medium px-3 py-1.5 shadow-xl">
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
