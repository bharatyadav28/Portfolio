import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

import Profile from './Profile'
import PersonalInfo from './PersonalInfo'
import Skills from './Skills'
import ResumeButton from '../ResumeButton'
import AvatarButton from './AvatarButton'

// Home Page of sidebar
const Sidebar = () => {
  return (
    <>
      {/* Sidebar for Desktop */}
      <aside
        aria-label="sidebar"
        className="hidden lg:flex flex-col w-[18.5rem] pb-10 fixed top-0 left-0 h-full overflow-y-auto hide-scrollbar bg-card border-r border-border z-10"
      >
        <Profile />
        <PersonalInfo />
        <Skills />

        <div className="my-5 flex justify-center mx-5">
          <ResumeButton />
        </div>
      </aside>

      {/* Side Bar for Mobile */}
      <div className="lg:hidden w-full fixed top-0 left-0 z-50">
        <header className="bg-card m-3 flex items-center pt-3 pb-3 px-5 shadow-sm border border-border rounded-xl">
          <Sheet>
            <SheetTrigger asChild>
              <div className="cursor-pointer">
                <AvatarButton />
              </div>
            </SheetTrigger>
            <SheetContent
              side={'left'}
              className="h-full border-r border-border overflow-y-auto hide-scrollbar w-[85%] sm:w-[350px] bg-card p-0"
            >
              <SheetHeader className="mt-7 text-left">
                <Profile />
                <PersonalInfo />
                <Skills />

                <div
                  className="flex justify-center w-full overflow-hidden"
                  style={{ marginTop: '2rem', marginBottom: '1rem' }}
                >
                  <ResumeButton />
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </>
  )
}

export default Sidebar
