import AboutMeImage from './AboutMeImage'

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className=" w-full  bg-dark_bg md:ps-[3rem] ps-[1rem] md:py-[3.5rem] pt-[4rem] pb-[5rem] flex md:flex-row flex-col items-center gap-5"
    >
      <div className="flex flex-col basis-8/12 md:pr-[4rem] pr-[1rem]">
        <h2 className="text-highlight font-black text-2xl  mb-3">ABOUT ME</h2>
        <div className="text-foreground flex flex-col text-md  gap-2">
          <p>
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
      <div className="my-auto">
        <AboutMeImage />
      </div>
    </section>
  )
}

export default AboutMe
