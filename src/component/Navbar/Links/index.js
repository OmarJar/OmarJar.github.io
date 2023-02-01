import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faListCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from 'react'
import { Link as Jump } from "react-scroll"
import "./index.scss"

const Links = (props) => {
    const [home, setHome] = useState(false)
    const [about, setAbout] = useState(false)
    const [projects, setProjects] = useState(false)
    const [contact, setContact] = useState(false)

    const detectPosition = () => {
        let newWidth = window.innerWidth
        let position = window.scrollY
        if (newWidth > 700) {
            if (position === 0 || position <= 650) {
                setHome(true)
                setAbout(false)
                setProjects(false)
                setContact(false)
            }
            else if (position === 651 || position <= 1400) {
                setHome(false)
                setAbout(true)
                setProjects(false)
                setContact(false)
            }
            else if (position === 1401 || position <= 1900) {
                setHome(false)
                setAbout(false)
                setProjects(true)
                setContact(false)
            }
            else {
                setHome(false)
                setAbout(false)
                setProjects(false)
                setContact(true)
            }
        }
        else if(newWidth <= 700){
            if (position === 0 || position <= 650) {
                setHome(true)
                setAbout(false)
                setProjects(false)
                setContact(false)
            }
            else if (position === 651 || position <= 1400) {
                setHome(false)
                setAbout(true)
                setProjects(false)
                setContact(false)
            }
            else if (position === 1401 || position <= 2400) {
                setHome(false)
                setAbout(false)
                setProjects(true)
                setContact(false)
            }
            else {
                setHome(false)
                setAbout(false)
                setProjects(false)
                setContact(true)
            }
        }
    }
    window.addEventListener("scroll", detectPosition)
    return (
        <div className={props.position === "bottom" ? "bottom-links" : "navbar"}>
            <Jump className={home ? "fixed" : undefined} to="container" spy={true} smooth={true} offset={-60} duration={1500}>
                <span>Home</span>
                 <FontAwesomeIcon icon={faHome} className="icon" />
            </Jump>
            <Jump className={about ? "fixed" : undefined} to="about" spy={true} smooth={true} offset={-50} duration={1500}>
                <span>About</span>
                <FontAwesomeIcon icon={faUser} className="icon" />
            </Jump>

            <Jump className={projects ? "fixed" : undefined} to="work" spy={true} smooth={true} offset={-80} duration={1500}>
                <span>My Projects</span>
                <FontAwesomeIcon icon={faListCheck} className="icon" />
            </Jump>

            <Jump className={contact ? "fixed" : undefined} to="contact-page" spy={true} smooth={true} offset={0} duration={1500}>
                <span>Contact Me</span>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </Jump>
        </div>
    )
}

export default Links