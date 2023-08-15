import React from "react";
import farshadImage from "../../assets/my-pic.webp"
import './Banner.css'

const Banner = () => {

    return(
        <div className="Banner">
            <div className="Banner--Child">
                <div className="Banner--Content">
                    <h1>
                        Hi!
                        <span className="Banner__primaryColor"> I'm Farshad</span>
                        <br/><br/>
                        Great to see you.
                    </h1>
                    <h3>
                        I'm a self-taught Front-end developer fueled by my desire to create and develop.
                        I'm constantly learning and improving my skills, in order to be a more contributive developer.
                        If you need a self-motivated developer, I'll be glad to join your team and contribute to your projects.
                    </h3>
                    <div className="Button B-Button">
                        <a href="./resume/New-CV.pdf" download>
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="Banner--Profile">
                    <img src={farshadImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner