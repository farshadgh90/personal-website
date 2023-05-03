import React from "react";
import Layout from "../Layout/Layout";
import { cards } from "./Cards"
import "./Projects.css";

const Portfolio = () => {
  return (
    <Layout>
      <div className="projects">
          {cards.map((card) => (
            <div className="card">
              <img src={card.image} alt="" />
              <div>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
              <div className="card--btn">
                <a href={card.code} target="_blank" rel="noreferrer">Source Code</a>
                <a href={card.url} target="_blank" rel="noreferrer">Go To Website</a>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Portfolio;