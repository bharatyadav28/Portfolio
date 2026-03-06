import { educationData } from '@/lib/data/resumeinfo'

const Education = () => {
  return (
    <section aria-label="education" className="w-full">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-foreground text-2xl font-extrabold tracking-tight">
          EDUCATION
        </h2>
        <div className="h-px bg-border flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((data) => (
          <div key={data.degree} className="glass-card p-6 flex flex-col justify-center gap-2">
            <h3 className="text-primary font-bold uppercase tracking-wide text-lg ">
              {data.degree}
            </h3>
            {data.university && <div className="text-muted-foreground font-medium">{data.university}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
