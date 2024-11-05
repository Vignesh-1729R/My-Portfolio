import React from "react";
import "../sass/About.scss";
import linkedinIcon from "../assets/linkedin.png"
import instagramIcon from "../assets/social.png"

const About = () => {
  return (
    <div className="about">
      <div className="myself"> 
      <h4>Hello there! I am</h4>
      <h1>VigneshWaran S</h1>
      <h3>Front-End Developer</h3>
      <p>
        Proficient in HTML, CSS, JavaScript, React, Sass, Tailwind, and Bootstrap, 
        about crafting intuitive and visually compelling user experiences. I dedicate 
        myself to merging user needs with business goals.
      </p>
      <div className="about-icons">
      <img src={linkedinIcon} alt="likedin"/>
      <img src={instagramIcon} alt="instagram"/>
      </div>
      </div>
    </div>
  );
};

export default About;
