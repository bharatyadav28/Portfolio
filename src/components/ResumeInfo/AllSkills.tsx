import { allskillsData } from '@/lib/data/resumeinfo'
import React from 'react'

interface itemPropsTypes {
  type: string
  items: { name: string }[]
}
const SkillsItem: React.FC<itemPropsTypes> = ({ type, items }) => {
  return (
    <div className=" sm:flex sm:flex-col  ">
      <h3 className="text-highlight  font-semibold capitalize whitespace-nowrap ">
        {type}:{' '}
      </h3>

      <div className=" flex flex-wrap sm:gap-x-2 gap-[0.1rem] text-foreground">
        {items.map((item, index) => (
          <div key={item.name}>
            {item.name}
            {index < items.length - 1 && ','}
          </div>
        ))}
      </div>
    </div>
  )
}

const AllSkills = () => {
  const { languages, webTechnologies, databases, tools } = allskillsData
  return (
    <section aria-label="skills">
      <h2 className="text-heading text-xl font-extrabold">Skills</h2>
      <hr className="text-heading my-3" />
      <div className="flex flex-col sm:gap-2 gap-3">
        <SkillsItem type="languages" items={languages} />
        <SkillsItem type="Web technologies" items={webTechnologies} />
        <SkillsItem type="databases" items={databases} />
        <SkillsItem type="tools" items={tools} />
      </div>
    </section>
  )
}

export default AllSkills
