import { allskillsData } from '@/lib/data/resumeinfo'
import React from 'react'

interface itemPropsTypes {
  type: string
  items: { name: string }[]
}
const SkillsItem: React.FC<itemPropsTypes> = ({ type, items }) => {
  return (
    <div className="glass-card p-6 flex flex-col gap-4">
      <h3 className="text-primary font-bold uppercase tracking-wide text-sm h-6">
        {type}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <div 
            key={item.name}
            className="px-3 py-1.5 bg-muted border border-border rounded-full text-foreground text-sm hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

const AllSkills = () => {
  const { languages, webTechnologies, databases, tools } = allskillsData
  return (
    <section aria-label="skills" className="w-full">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-foreground text-2xl font-extrabold tracking-tight">
          SKILLS
        </h2>
        <div className="h-px bg-border flex-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillsItem type="Languages" items={languages} />
        <SkillsItem type="Web Technologies" items={webTechnologies} />
        <SkillsItem type="Databases" items={databases} />
        <SkillsItem type="Tools" items={tools} />
      </div>
    </section>
  )
}

export default AllSkills
