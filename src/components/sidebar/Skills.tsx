import { skillsData } from '@/lib/data/sidebar'
import ProgressBar from './ProgressBar'

// Section for skills
const Skills = () => {
  return (
    <section
      aria-label="Skills"
      className="px-6 pt-8 pb-5 border-b border-border"
    >
      <h3 className="text-foreground font-bold mb-4 text-lg">Skills</h3>
      {skillsData.map((item) => {
        return (
          <div key={item.title} className="flex flex-col mb-4 gap-2">
            <div className="flex justify-between text-xs font-semibold tracking-wide">
              <p className="text-foreground/80">{item.title}</p>
              <p className="text-primary">{item.value}%</p>
            </div>

            <ProgressBar value={item.value} />
          </div>
        )
      })}
    </section>
  )
}

export default Skills
