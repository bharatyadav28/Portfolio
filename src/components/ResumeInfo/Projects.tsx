'use client'
import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { Eye as EyeIcon, Github as GithubIcon } from 'lucide-react'

import { projectsData } from '@/lib/data/projects'
import { Button } from '../ui/button'
import Link from 'next/link'

interface propsTypes {
  image: StaticImageData
  title: string
  description: string
  detailDescription: string
  techUsed: string[]
  github: string
  live: string
}
const ProjectItem: React.FC<propsTypes> = ({
  image,
  title,
  description,
  detailDescription,
  techUsed,
  github,
  live,
}) => {
  const [isSmallDevice, setIsSmallDevice] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 640)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isSmallDevice || window.innerWidth < 640) {
      setIsHovered(true)
    } else {
      setIsHovered(false)
    }
  }, [isSmallDevice])

  return (
    <motion.div
      className={` w-[18rem]   sm:absolute top-0 left-0 rounded-lg bg-dark_bg shadow-lg ${isHovered ? 'z-40' : 'z-10'} `}
      whileHover={{
        scale: 1.1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="h-[12rem] overflow-hidden p-4 pb-0">
        <Image src={image} alt={`${title} Image`} className="w-full h-full" />)
      </div>

      <div className="  w-full p-4 bg-opacity-75 transition-all duration-300">
        <h3 className="text-xl font-semibold text-highlight mb-1">{title}</h3>
        <p className="text-sm text-foregroundHover mb-1 ">
          {description}
          {isHovered && <span>{detailDescription}</span>}
        </p>
        <p className=" text-sm text-foregroundHover ">
          <span className="text-highlight">Tech used</span>:{' '}
          {techUsed.map((tech, index) => (
            <span key={tech}>
              {tech}
              {index < techUsed.length - 1 ? ', ' : ' '}
            </span>
          ))}
        </p>

        {isHovered && (
          <ul className="flex justify-center items-center mt-5 mb-2  gap-3">
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href={github} target="_blank">
                <GithubIcon
                  // size={20}
                  strokeWidth={1}
                  className={`h-6 w-6   bg-highlight text-gray-900 p-[0.2rem] rounded-sm transition fill-current hover:bg-[#f1f1f1]  `}
                />
              </Link>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href={live} target="_blank">
                <EyeIcon
                  strokeWidth={1}
                  className={`h-6 w-6  bg-highlight text-gray-900 p-[0.2rem] rounded-sm transition  hover:bg-[#f1f1f1]  `}
                />
              </Link>
            </motion.li>
          </ul>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <div>
      <h2 className="text-heading text-xl font-extrabold">PROJECTS</h2>
      <hr className="text-heading my-3" />
      <div className="  sm:pb-10 pb-0 pt-4 flex sm:flex-row flex-col sm:flex-wrap sm:gap-0 gap-[2rem]  sm:justify-around sm:items-start items-center   ">
        {projectsData.map((data) => (
          <div className="relative sm:h-[24rem]   sm:w-[19rem]  " key={data.id}>
            <ProjectItem
              image={data?.image as StaticImageData}
              title={data.title}
              description={data.description}
              detailDescription={data.detailDescriptiom}
              techUsed={data.techUsed}
              github={data.github}
              live={data.live}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
