import { LuDot as Dot } from 'react-icons/lu'

import { experience } from '@/lib/data/resumeinfo'

const ProfessionalExperience = () => {
  return (
    <section aria-label="professional experience" className="w-full">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-foreground text-2xl font-extrabold tracking-tight">
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="h-px bg-border flex-1"></div>
      </div>

      <div className="flex flex-col gap-10 w-full relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experience?.map((data, index) => {
          return (
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse" key={data.company}>
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-primary bg-background shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10 
                absolute left-0 md:left-1/2 -translate-x-[40%] md:-translate-x-1/2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              </div>

              <div className="glass-card w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] ml-10 md:ml-0 p-6">
                <div className="font-extrabold text-2xl text-primary mb-1 tracking-tight">
                  {data.company}
                </div>
                <div className="flex flex-wrap gap-2 text-muted-foreground font-medium text-sm mb-4">
                  <span className="text-foreground">{data.designation}</span>
                  <span className="text-border">|</span>
                  <span className="italic relative z-10">{data.timePeriod}</span>
                </div>

                <div className="flex flex-col mt-4">
                  <div className="font-semibold text-foreground mb-3 tracking-wide">
                    Projects & Contributions
                  </div>

                  <div className="flex flex-col gap-4">
                    {data.work.map((item) => {
                      return (
                        <div className="bg-muted/50 rounded-lg p-3 border border-border" key={item.project}>
                          <div className="font-semibold text-primary/90 mb-2"> {item.project}</div>

                          <div className="flex flex-col gap-1.5 ml-1">
                            {item.contributions.map((contribution, index) => {
                              return (
                                <div
                                  className="flex gap-2 items-start text-muted-foreground text-sm leading-relaxed"
                                  key={index}
                                >
                                  <Dot
                                    size={18}
                                    className="flex-shrink-0 mt-[0.1rem] text-primary/70"
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
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProfessionalExperience
