import React, { useState } from "react";
import logo from "./logo.png"
import { Link, useLocation } from "react-router-dom";
import Hamburger from 'hamburger-react'
import "./Header.css"

const Header = () => {
    const location = useLocation()
    const [menuOpened, setMenuOpened] = useState(false)

    const handleClick = () => {
        if(!menuOpened) setMenuOpened(true)
        if(menuOpened) setMenuOpened(false)
    }

    return(
        <div className="h-wrapper">
            <div className="h-container">
                <div className="h-menu-1">
                    <img className="h-image" src={logo} alt="" />
                    <ul className="menu-1">
                        <li className={location.pathname === "/" && "active"}>
                            <Link to="/">HOME</Link>
                        </li>
                        <li className={location.pathname === "/about" && "active"}>
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li className={location.pathname === "/projects" && "active"}>
                            <Link to="/projects">PROJECTS</Link>
                        </li>
                        <li className={location.pathname === "/contact" && "active"}>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                    <div className="Button">
                        <a href="./resume/New-CV.pdf" download>
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="h-menu-2">
                    <img className="h-image" src={logo} alt="" />
                    <div className={menuOpened? "hidden-layer" : "hidden"}></div>
                    <div className={menuOpened ? "menu-2" : "hidden"}>
                        <ul>
                            <li className={location.pathname === "/" && "active"}>
                                <Link to="/">HOME</Link>
                            </li>
                            <li className={location.pathname === "/about" && "active"}>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li className={location.pathname === "/projects" && "active"}>
                                <Link to="/projects">PROJECTS</Link>
                            </li>
                            <li className={location.pathname === "/contact" && "active"}>
                                <Link to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                        <div className="Button menu-btn">
                            <a href="./resume/New-CV.pdf" download>
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        <Hamburger />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header