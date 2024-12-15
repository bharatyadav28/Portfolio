import ProfessionalExperience from './ProfessionalExperience'
import Education from './Education'
import AllSkills from './AllSkills'
import ResumeButton from '../ResumeButton'
import Projects from './Projects'

const ResumeInfo = () => {
  return (
    <div
      id="resume"
      className="flex flex-col gap-[3rem] bg-light_bg mt-[3rem]  mb-[4rem] sm:mx-[4rem] mx-[1rem]  "
    >
      <ProfessionalExperience />
      <Education />
      <AllSkills />
      <Projects />
      <ResumeButton width="lg:w-[15rem] w-full mt-0" />
    </div>
  )
}

export default ResumeInfo
