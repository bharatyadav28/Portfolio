'use client'
import { TypeAnimation } from 'react-type-animation'

import KnowMore from '../KnowMore'

const Introduction = () => {
  return (
    <div className="min-h-[75vh] flex flex-col justify-center relative rounded-3xl overflow-hidden glass-card p-8 sm:p-16" id="home">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      
      <div className="max-w-3xl relative z-10">
        <h1 className="text-foreground leading-[1.1] text-5xl sm:text-7xl font-extrabold tracking-tighter mb-6">
          <span className="text-muted-foreground block mb-2 text-2xl sm:text-3xl font-bold tracking-tight">Hello, I&apos;m</span>
          Bharat Yadav,
          <br />
          <span className="text-gradient">Full Stack </span> 
          <span className="font-light">Developer.</span>
        </h1>

        <div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-muted-foreground mb-10 h-8">
          <span className="text-primary font-mono text-sm sm:text-base bg-primary/10 px-2 py-1 rounded">{'<Code>'}</span>
          <TypeAnimation
            sequence={[
              'Write code. Debug code. Repeat.',
              1000,
              'Create. Test. Iterate.',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-foreground tracking-wide font-medium"
            cursor={true}
          />
          <span className="text-primary font-mono text-sm sm:text-base bg-primary/10 px-2 py-1 rounded">{'</Code>'}</span>
        </div>

        <KnowMore />
      </div>
    </div>
  )
}

export default Introduction
