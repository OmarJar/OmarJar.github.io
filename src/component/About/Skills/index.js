import React, { memo } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "./index.scss"
import data from "./data"
const Skills = () => {

    const skills = data.map(ele => {
        return (
            <div className="skill" key={ele.id}>
                <AnimationOnScroll delay={ele.id} animateIn="animate__fadeInUp" duration={1.5} animateOnce={true} >
                    <div className="text">
                        <span>{ele.title}</span>
                        <span>{ele.percentage}</span>
                    </div>
                    <div className="skill-bar" >
                        <div id={ele.idName} style={{maxWidth: ele.percentage}}></div>
                    </div>
                </AnimationOnScroll>
            </div>
        )
    })
    return (
        <div className="skills">
            <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5} animateOnce={true} >
                <h1>Skills</h1>
            </AnimationOnScroll>

            <div id="skills-bars">
                {skills}
            </div>
        </div>
    )
}
export default memo(Skills)