'use client'
import Sidebar from '@/components/sidebar/Sidebar'
import Menubar from '@/components/Menubar/Menubar'
import ContactForm from '@/components/ContactMe/ContactForm'
import Introduction from '@/components/introduction/Intoduction'
import AboutMe from '@/components/AboutMe/AboutMe'
import ResumeInfo from '@/components/ResumeInfo/ResumeInfo'
import { motion } from 'framer-motion'

export default function Home() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <div>
      <div className="flex justify-between">
        <Sidebar />
        <Menubar />
      </div>

      <main className="lg:ml-[20rem] lg:pr-24 sm:mx-12 mx-6 pb-20 pt-20 lg:pt-12">
        <div className="max-w-6xl mx-auto space-y-32">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
            <Introduction />
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <AboutMe />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <ResumeInfo />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <ContactForm />
          </motion.div>
        </div>
      </main>
    </div>
  )
}
