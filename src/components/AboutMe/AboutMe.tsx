import AboutMeImage from './AboutMeImage'

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="w-full glass-card px-8 sm:px-12 py-16 flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex flex-col basis-8/12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-primary font-extrabold text-3xl tracking-tight uppercase">ABOUT ME</h2>
          <div className="h-px bg-border flex-1"></div>
        </div>
        
        <div className="text-muted-foreground flex flex-col text-lg leading-relaxed gap-6 font-light">
          <p className="text-foreground">
            I am a passionate software engineer with expertise in the MERN
            stack. I excel at creating dynamic, user-friendly web applications
            with seamless integration and robust performance in both front-end
            and back-end development.
          </p>
          <p>
            I thrive on solving complex problems and turning innovative ideas
            into reality. My projects include advanced search functionalities,
            secure authentication systems, and user engagement features,
            showcasing my ability to deliver high-quality solutions.
          </p>
          <p>
            Skilled in TypeScript, Next.js, and Firebase, I build scalable,
            maintainable, and high-performance applications. My dedication to
            continuous learning ensures I stay updated with the latest industry
            trends and technologies.
          </p>
          <p>
            Committed to incorporating the latest technologies and best
            practices, I ensure the applications I build are not only functional
            but also future-proof. I&apos;m always eager to take on new
            challenges and grow in the tech world.
          </p>
        </div>
      </div>
      <div className="mx-auto md:mx-0 shrink-0">
        <AboutMeImage />
      </div>
    </section>
  )
}

export default AboutMe
