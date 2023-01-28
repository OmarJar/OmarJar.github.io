import React, { useEffect, useState } from 'react'
import Links from '../Navbar/Links'
import NavBarLogo from '../Navbar/NavBarLogo'
import SocialMedia from '../Navbar/SocialMedia'
import "./index.scss"
 
const Footer = () => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 2000)
    }, [])
    return (
        <>
            {visible &&
                <footer>
                    <div className="footer-container">
                        <div className="contact-part">
                            <NavBarLogo />
                            <SocialMedia position="bottom" />
                        </div>
                        <div className="bottom">
                            <Links position="bottom" />
                        </div>
                        <div className="rights">
                            <p>&copy;2023 Copyright: <a rel="noreferrer" target="_blank" href='https://omarjar.github.io'>omarjar.github.io</a></p>
                        </div>
                    </div>
                </footer>
            }
        </>
    )
}

export default Footer