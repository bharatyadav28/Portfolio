'use client'
import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye as EyeIcon, Github as GithubIcon } from 'lucide-react'

import { projectsData } from '@/lib/data/projects'
import Link from 'next/link'

interface propsTypes {
  images: StaticImageData[]
  title: string
  description: string
  detailDescription: string
  techUsed: string[]
  github: string
  live: string
}

const ProjectItem: React.FC<propsTypes> = ({
  images,
  title,
  description,
  detailDescription,
  techUsed,
  github,
  live,
}) => {
  const [isSmallDevice, setIsSmallDevice] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 640)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isSmallDevice) {
      setIsHovered(true)
    } else {
      setIsHovered(false)
    }
  }, [isSmallDevice])

  // Automatic carousel logic
  useEffect(() => {
    if (images.length <= 1 || isHovered) return

    const interval = setInterval(() => {
      // Only increment if the tab is active
      if (!document.hidden) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length, isHovered])

  return (
    <motion.div
      className={`glass-card flex flex-col group relative sm:absolute sm:inset-x-0 sm:top-0 transition-[height,box-shadow,border-color] duration-300 ease-in-out ${
        isHovered
          ? 'sm:h-auto z-40 shadow-2xl border-primary/30 sm:overflow-visible'
          : 'sm:h-full z-10 sm:overflow-hidden'
      }`}
      onMouseEnter={() => !isSmallDevice && setIsHovered(true)}
      onMouseLeave={() => !isSmallDevice && setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="relative h-48 flex-shrink-0 w-full overflow-hidden border-b border-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative w-full h-full"
          >
            <Image
              src={images[currentImageIndex]}
              fill
              alt={`${title} Image ${currentImageIndex + 1}`}
              className="object-cover transition-transform duration-500 scale-90 group-hover:scale-95 rounded-md"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Carousel Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'w-4 bg-primary' 
                    : 'w-1.5 bg-primary/30'
                }`}
              />
            ))}
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-primary mb-2 tracking-tight">{title}</h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {description}
        </p>

        <AnimatePresence>
          {isHovered && (
            <motion.p
              key="detail"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-foreground leading-relaxed mb-3"
            >
              {detailDescription}
            </motion.p>
          )}
        </AnimatePresence>

        <div className=" pt-2">
          <p className="text-xs text-muted-foreground mb-4 font-medium">
            <span className="text-primary/80">Tech:</span>{' '}
            {techUsed.join(', ')}
          </p>

          <div
            className={`flex items-center gap-3 transition-all duration-300 ${
              isHovered
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
           {github && <Link
              href={github}
              target="_blank"
              className="flex items-center justify-center p-2 rounded-lg bg-muted border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-foreground"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>}
            {live && <Link
              href={live}
              target="_blank"
              className="flex flex-1 items-center justify-center gap-2 p-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors font-medium text-sm"
            >
              <EyeIcon className="h-4 w-4" />
              <span>Live Demo</span>
            </Link>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const data = projectsData?.reverse()

const Projects = () => {
  return (
    <section aria-label="projects" className="w-full">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-foreground text-2xl font-extrabold tracking-tight">
          PROJECTS
        </h2>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {data?.map((data) => (
          <div key={data.id} className="relative sm:h-[28rem]">
            <ProjectItem
              images={data?.images as StaticImageData[]}
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
    </section>
  )
}

export default Projects
