import React, { useState, useEffect, memo } from 'react'
import "./index.scss"
import Particles from '../Particles'
import Skills from './Skills'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import data, { info } from './data'

const About = () => {
  const { edu, aboutMe, title } = info
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 1500)
  }, [])
  const study = data.map(e => {
    return <li key={e.id}>{e.txt}</li>
  })
  return (
    <>
      {visible &&
        <div className="about">
          <Particles id="tsparticles" />
          <div className="explain">
            <div className="about-me">
              <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5} animateOnce={true}>
                <h1 className="title">
                  {title}
                </h1>
                <p>
                  {aboutMe}
                </p>
              </AnimationOnScroll>
            </div>
            <div className="education">
              <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5} animateOnce={true}>
                <h1 className="title">
                  {edu}
                </h1>
                <ul>
                  {study}
                </ul>
              </AnimationOnScroll>
            </div>
          </div>
          <Skills />
        </div>
      }
    </>
  )
}
export default memo(About)