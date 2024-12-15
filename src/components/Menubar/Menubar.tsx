import TooltipLinks from './TooltipLinks'
import { menubarData } from '@/lib/data/menubar'
import MenuSheet from './MenuSheet'

const Menubar = () => {
  return (
    <div>
      <aside
        aria-label="menu bar"
        className="hidden lg:flex flex-col w-[5rem] pb-10 fixed top-0 right-0 h-full overflow-y-auto hide-scrollbar ml-4 mr-4 py-10  bg-dark_bg z-10 "
      >
        <div className="flex flex-col items-center gap-10 ">
          <TooltipLinks items={menubarData} />
        </div>
      </aside>

      <MenuSheet />
    </div>
  )
}

export default Menubar
