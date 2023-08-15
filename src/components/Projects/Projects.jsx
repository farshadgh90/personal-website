import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import data from "../../utils/slider.json"
import { sliderSettings } from "../../utils/common";
import "swiper/css"
import "./Projects.css"
import Layout from "../Layout/Layout";

const Projects = () => {
    return(
        <Layout>
            <section className="p-wrapper">
                <div className="p-container">
                    <Swiper {...sliderSettings}>
                        <SliderButtons />
                        {
                            data.map((card, i) => (
                                <SwiperSlide key={i}>
                                    <div className="card">
                                        <img src={card.image} alt="website" />
                                        <div className="secondaryText r-price">
                                            <h2>{card.title}</h2>
                                            <p>{card.description}</p>
                                        </div>
                                        <div className="card--btn">
                                            <a href={card.code} target="_blank" rel="noreferrer">Source Code</a>
                                            <a href={card.url} target="_blank" rel="noreferrer">Go to Website</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </Layout>
    )
}

export default Projects

const SliderButtons = () => {
    const swiper = useSwiper()

    return(
        <div className="p-buttons">
            <button onClick={() => {swiper.slidePrev()}}>
                &lt;
            </button>
            <button onClick={() => {swiper.slideNext()}}>
                &gt;
            </button>
        </div>
    )
}