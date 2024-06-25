import Sidebar from '@/components/sidebar/Sidebar'
import Menubar from '@/components/Menubar/Menubar'
import ContactForm from '@/components/ContactMe/ContactForm'
import Introduction from '@/components/introduction/Intoduction'
import AboutMe from '@/components/AboutMe/AboutMe'
import Projects from '@/components/ResumeInfo/Projects'
import WorkInProgress from '@/components/WorkInProgress'
import ResumeInfo from '@/components/ResumeInfo/ResumeInfo'
import CustomDrawer from '@/components/CustomDrawer'
import MenuSheet from '@/components/Menubar/MenuSheet'

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <Sidebar />
        <Menubar />
      </div>

      <main className=" lg:ml-[20.5rem] lg:mr-[7rem] sm:mx-5 mx-3  ">
        <div className="  bg-light_bg   pb-20">
          <Introduction />
          <AboutMe />
          <ResumeInfo />

          <ContactForm />
        </div>
      </main>
    </div>
  )
}
