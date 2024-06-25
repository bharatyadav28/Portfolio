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
        className="hidden lg:flex flex-col w-[18.5rem] pb-10 fixed top-0 left-0 h-full overflow-y-auto hide-scrollbar ms-4  bg-dark_bg z-10 "
      >
        <Profile />
        <PersonalInfo />
        <Skills />

        <div className="my-5 flex justify-center mx-5">
          <ResumeButton />
        </div>
      </aside>

      {/* Side Bar for Mobile */}
      <div className="lg:hidden h-full ">
        <header className="bg-dark_bg items-center pt-5 pb-4 px-5">
          <Sheet>
            <SheetTrigger>
              <AvatarButton />
            </SheetTrigger>
            <SheetContent
              side={'left'}
              className="h-full border-none overflow-y-auto hide-scrollbar w-full bg-[#060f18]"
            >
              <SheetHeader className="mt-7">
                <Profile />
                <PersonalInfo />
                <Skills />

                <div
                  className="  flex justify-center w-full overflow-hidden "
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
