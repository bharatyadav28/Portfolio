import { educationData } from '@/lib/data/resumeinfo'

const Education = () => {
  return (
    <section aria-label="education">
      <h2 className="text-heading text-xl font-extrabold">EDUCATION</h2>
      <hr className="text-heading my-3" />

      <div className="flex flex-col gap-4">
        {educationData.map((data) => (
          <div key={data.degree}>
            <h2 className=" text-highlight font-semibold uppercase text-lg">
              {data.degree}
            </h2>
            <div className="text-foreground">{data.university}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
