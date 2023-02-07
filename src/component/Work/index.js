import React, { useEffect, useState } from 'react'
import WorkBox from "./WorkBox"
import "./index.scss"
import whatImg from "../../assets/images/WhatsApp.jpg"
import weatherImg from "../../assets/images/Weather1.gif"
import deenImg from "../../assets/images/deen.jpg"
import quizImg from "../../assets/images/quiz.png"
import { ReactComponent as ReactImg } from "../../assets/images/react.svg"
import { ReactComponent as HtmlImg } from "../../assets/images/html.svg"
import { ReactComponent as JavaScriptImg } from "../../assets/images/javascript.svg"
import { AnimationOnScroll } from 'react-animation-on-scroll'
const Work = () => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        let timeoutId = setTimeout(() => {
          setVisible(true)
        }, 1500)
        return () => {
          clearTimeout(timeoutId)
        }
      }, [])
    return (
        <>
            {visible && <div className="work">
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5} animateOnce={true}>
                    <h1 id="projects-title">Here are some of my projects<br />
                        that I've done with Html, CSS, JavaScript and React.JS</h1>
                </AnimationOnScroll>
                <AnimationOnScroll delay={1} animateIn="animate__fadeInUp" duration={1.5} animateOnce={true}>
                    <div className="works">
                        <WorkBox
                            img={whatImg}
                            buttons="2"
                            url="https://omarjar.github.io/whatsapp-react/"
                            url2="https://omarjar.github.io/WhatsApp-Website-clone/"
                            title="WhatsApp"
                            icon=<ReactImg />
                            icon2=<HtmlImg />
                        />
                        <WorkBox
                            img={weatherImg}
                            url="https://omarjar.github.io/weather/"
                            title="Weather"
                            icon=<JavaScriptImg />
                        />
                        <WorkBox
                            img={deenImg}
                            url="https://omarjar.github.io/musdev/"
                            title="Community Website"
                            icon=<JavaScriptImg />
                        />
                        <WorkBox
                            img={quizImg}
                            url="https://omarjar.github.io/codequiz/"
                            title="Multi Choice Questions"
                            icon=<ReactImg />
                        />
                    </div>
                </AnimationOnScroll>

            </div>}

        </>
    )
}

export default Work