import React from "react";
import { FaLinkedin, FaInstagram, FaTelegram, FaGithub } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {

    return(
        <div className="Footer">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/farshad-ghorbani-40635b157/"><FaLinkedin /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/farshaad_gh/"><FaInstagram /></a>
                </li>
                <li>
                    <a href="https://t.me/frsh_6990"><FaTelegram /></a>
                </li>
                <li>
                    <a href="https://github.com/farshadgh90"><FaGithub /></a>
                </li>
            </ul>
            <div>
                <p>Copyright © 2023. All rights reserved.</p>
                <p>Designed and Developed by Farshad Ghorbani</p>
            </div>
        </div>
    )
}

export default Footer