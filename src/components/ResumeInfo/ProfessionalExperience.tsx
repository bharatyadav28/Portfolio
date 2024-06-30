import { experience } from '@/lib/data/resumeinfo'

const ProfessionalExperience = () => {
  return (
    <section aria-label="professional experience w-full">
      <h2 className="text-heading text-xl font-extrabold">
        PROFESSIONAL EXPERIENCE
      </h2>
      <hr className="text-heading my-3" />

      <div className="flex flex-col sm:gap-3 gap-4 w-full">
        {experience.map((data) => (
          <div className="flex flex-col  w-full" key={data.timePeriod}>
            <div className="flex gap-2">
              <div className=" text-highlight font-semibold">Company Name:</div>
              <div className="text-foreground">{data.company}</div>
            </div>

            <div className="flex gap-2">
              <div className=" text-highlight font-semibold">Designation:</div>
              <div className="text-foreground">{data.designation}</div>
            </div>

            <div className="flex gap-2">
              <div className=" text-highlight font-semibold">Time Period:</div>
              <div className="text-foreground">{data.timePeriod}</div>
            </div>

            <div>
              <p>{data.work}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProfessionalExperience
