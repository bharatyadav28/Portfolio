import ProfessionalExperience from './ProfessionalExperience'
import Education from './Education'
import AllSkills from './AllSkills'
import ResumeButton from '../ResumeButton'
import Projects from './Projects'

const ResumeInfo = () => {
  return (
    <div
      id="resume"
      className="flex flex-col gap-16 mt-12 mb-16"
    >
      <ProfessionalExperience />
      <Education />
      <AllSkills />
      <Projects />
      <div className="flex justify-start mt-4">
        <ResumeButton width="w-full sm:w-64" />
      </div>
    </div>
  )
}

export default ResumeInfo
