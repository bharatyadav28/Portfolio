'use client'
import { TypeAnimation } from 'react-type-animation'

import KnowMore from '../KnowMore'

const Introduction = () => {
  return (
    <div className="h-[55rem] intro-container" id="home">
      <div className="intro-bg">
        <div className="intro-content mx-8 mt-[2rem]">
          <h1 className="text-heading lg:leading-snug text-4xl mb-[1rem]">
            <b>Hello, I&apos;m</b>
            <br />
            Bharat Yadav,
            <br />
            <span className="text-highlight">Full Stack </span> Developer
          </h1>

          <p>
            <span className="text-highlight">{'<Code>'}</span>{' '}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Write code. Debug code. Repeat.',
                1000,
                'Create. Test. Iterate.',
                1000,
              ]}
              speed={1}
              style={{ fontSize: '1em' }}
              repeat={Infinity}
              className="text-foreground "
              cursor={true}
            />
            <span className="text-highlight">{'<Code>'}</span>{' '}
          </p>

          <KnowMore />
        </div>
      </div>
    </div>
  )
}

export default Introduction
