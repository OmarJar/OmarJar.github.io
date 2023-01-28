import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./index.scss"
import Tooltip from '@mui/material/Tooltip'
const SocialMedia = (props) => {
    return (
        <div className={props.position === "bottom" ? "display-social" : "social-media"}> {/*conditional props bottom*/}
            <Tooltip title="LinkedIn">
                <a
                    href="https://www.linkedin.com/in/omar-mk90"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </Tooltip>
            <Tooltip title="GitHub">
                <a

                    href="https://www.github.com/OmarJar"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </Tooltip>
        </div >
    )
}

export default SocialMedia