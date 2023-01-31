import React, { useState, useEffect } from 'react'
import { ReactComponent as OImg } from "../../assets/images/O.svg"
import "./index.scss"
import MyLoader from '../MyLoader'

const Home = () => {

  const [visible, setVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  document.getElementById("body").style.overflowX="hidden"
  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisible(true)
  //   }, 1500)
    
  // }, [isHovered])
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setVisible(true)
    }, 1500)
    isHovered && (document.getElementById('extra-title').style.animation = "shakeX 1s")
    return () => {
      clearTimeout(timeoutId)
    }
  }, [isHovered])
  const shaking = () => {
    setIsHovered(false)
    document.getElementById("extra-title").style.animation = "fdar 0s"
  }
  return (
    <>
      {/* {!visible && <Loader type="ball-scale-ripple-multiple" className="loader" />} */}
      {!visible && <MyLoader className="loader" />}
      {visible && <div className="container">

        <div className="first-section">
          <div className="definition">
            <h1 id="h1">Hi,<br />I'm OMAR,<br /> A Web Developer</h1>
          </div>
          <div className="svg-letter">
            <OImg />
          </div>
        </div>
        <div className="second-section">
          <div className="my-posititon">
            <h4 id="front-end-title">Front-End /<span id="back-end"> Back-End</span> Developer</h4>
            <h4 id="extra-title" onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={shaking}> HTML / CSS / JavaScript / React.JS ...</h4>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Home