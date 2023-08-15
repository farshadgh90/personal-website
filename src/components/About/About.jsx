import React from "react";
import Layout from "../Layout/Layout";
import './About.css'
import photo from './frontEndDeveloper.webp'

const About = () => {
  return <Layout>
    <div className="About">
      <div className="About--PhotoSection">
        <img src={photo} alt="" />
        <div className="About--PrimaryBox" />
      </div>
      <div className="About--ContentSection">
        <h1>
          Front-End Developer
        </h1>
        <p>
          As a highly motivated and dedicated individual,
          I have a passion for front-end development and
          a strong background in Information Technology.
          With a Master's degree from Eastern Mediterranean University in Cyprus,
          I have gained expertise in programming languages like Java and Python.
          However, my true passion lies in front-end development,
          and I have pursued this field through self-study and online resources.
          I am a quick learner and have a knack for problem-solving,
          which has enabled me to develop creative and innovative solutions to complex challenges.
          With excellent communication skills and a collaborative approach,
          I work well in team environments and thrive in fast-paced and dynamic settings.
        </p>
      </div>
    </div>
  </Layout>;
};

export default About;
