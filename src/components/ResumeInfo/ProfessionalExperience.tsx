import { LuDot as Dot } from 'react-icons/lu'

import { experience } from '@/lib/data/resumeinfo'

const ProfessionalExperience = () => {
  return (
    <section aria-label="professional experience w-full">
      <h2 className="text-heading text-xl font-extrabold">
        PROFESSIONAL EXPERIENCE
      </h2>
      <hr className="text-heading my-3" />

      <div className="flex flex-col sm:gap-3 gap-6 w-full">
        {experience?.map((data) => {
          return (
            <div className="flex flex-col" key={data.company}>
              <div className="font-bold text-xl text-highlight">
                {data.company}
              </div>
              <div className="flex gap-2 ">
                <div>{data.designation} |</div>
                <div className="italic"> {data.timePeriod}</div>
              </div>

              <div className="flex flex-col mt-1">
                <div className="font-semibold text-[1.02rem]">
                  Projects & Contributions :
                </div>

                <div className="flex flex-col gap-1">
                  {data.work.map((item) => {
                    return (
                      <div className="ml-2" key={item.project}>
                        <div className="font-medium"> {item.project}</div>

                        <div className="ml-2">
                          {item.contributions.map((contribution, index) => {
                            return (
                              <div
                                className="flex gap-1 items-start"
                                key={index}
                              >
                                <Dot
                                  size={15}
                                  className="flex-shrink-0 mt-[0.35rem]"
                                />
                                <div>{contribution}</div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProfessionalExperience
