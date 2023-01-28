import React from 'react'
import "./index.scss"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/logo.png"
const NavBarLogo = () => {
    return (
        <div className="omar-logo">
            <Link to="/">
                <img className="logo" src={Logo} alt="" />
            </Link>
        </div>
    )
}

export default NavBarLogo