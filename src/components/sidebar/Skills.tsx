import { skillsData } from '@/lib/data/sidebar'
import ProgressBar from './ProgressBar'

// Section for skills
const Skills = () => {
  return (
    <section
      aria-label="Skills"
      className="px-5  pt-8 pb-5 border-b border-foreground"
    >
      <h3 className="text-heading font-bold mb-2 ">Skills</h3>
      {skillsData.map((item) => {
        return (
          <div key={item.title} className="flex flex-col mb-3 gap-2">
            <div className="flex justify-between text-xs font-semibold ">
              <p className="text-heading">{item.title}</p>{' '}
              <p className="text-highlight">{item.value}%</p>
            </div>

            <ProgressBar value={item.value} />
          </div>
        )
      })}
    </section>
  )
}

export default Skills
