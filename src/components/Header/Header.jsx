import React from "react";
import logo from "./logo.png"
import { Link, useLocation } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const location = useLocation()

    return(
        <div className="Header">
            <img src={logo} alt="" />
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
            <div className="Button Button--Md">
                <a href="/images/cv.pdf" download>
                    Download Resume
                </a>
            </div>
        </div>
    )
}

export default Header