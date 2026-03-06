import TooltipLinks from './TooltipLinks'
import { menubarData } from '@/lib/data/menubar'
import MenuSheet from './MenuSheet'
import { ThemeToggle } from '../ThemeToggle'

const Menubar = () => {
  return (
    <div>
      <aside
        aria-label="menu bar"
        className="hidden lg:flex flex-col fixed top-1/2 -translate-y-1/2 right-6 z-50 glass-card px-3 py-6 rounded-full"
      >
        <div className="flex flex-col items-center gap-8">
          <TooltipLinks items={menubarData} />
          <div className="w-8 h-px bg-border my-2"></div>
          <ThemeToggle />
        </div>
      </aside>

      <MenuSheet />
    </div>
  )
}

export default Menubar
