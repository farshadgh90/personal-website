import React from "react";
import Layout from "../Layout/Layout";
import contactImg from "./contactImg.JPG"
import contactPhoto from "./contactPhoto.png"
import "./Contact.css"

const Contact = () => {
    return(
        <Layout>
            <div className="Contact">
                <div className="Contact--image">
                    <img src={contactImg} alt="" />
                </div>
                <div className="Contact--info">
                    <h2>Contact Me</h2>
                    <p>+98 9384998589</p>
                    <p>f.ghorbani1990@gmail.com</p>
                </div>
            </div>
            <div className="Contact--res">
                <div className="Contact--res--content">
                    <div className="Contact--res__image">
                        <img src={contactPhoto} alt="" />
                    </div>
                    <div className="Contact--res__info">
                        <h2>Contact Me</h2>
                        <p>+98 9384998589</p>
                        <p>f.ghorbani1990@gmail.com</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact