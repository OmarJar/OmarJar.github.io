import React from 'react'
import "./index.scss"
import SocialMedia from './SocialMedia'
import NavBarLogo from './NavBarLogo'
import Links from './Links'

const Navbar = () => {
    return (
        <div className="name">
            <NavBarLogo />
            <Links />
            <SocialMedia />
        </div>
    )
}

export default Navbar