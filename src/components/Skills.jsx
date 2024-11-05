import React from "react";
import "../sass/Skills.scss";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import BootstrapIcon from "../assets/bootstrap.png";
import javascriptIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import saasIcon from "../assets/logo.svg";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      description:"Proficient in HTML, the core markup language I use to create well-structured, accessible, and SEO-friendly web pages. I have extensive experience in using HTML to build responsive and interactive layouts across multiple projects, ensuring a solid foundation for all web applications.",
      image: htmlIcon,
    },
    {
      title: "CSS",
      description: "Expert in CSS, specializing in creating visually appealing and responsive web designs. I ensure consistent styling across various devices, focusing on performance, accessibility, and user-friendly interfaces.",
      image: cssIcon,
    },
    {
      title: "JavaScript",
      description: "Skilled in JavaScript, I build dynamic, interactive web applications that enhance user experience. My expertise includes working with both vanilla JavaScript and modern frameworks for front-end development.",
      image: javascriptIcon,
    },
    {
      title: "React",
      description: "Proficient in React, developing scalable and efficient front-end applications. I utilize React’s component-based architecture to create reusable, dynamic UI elements that improve development speed and maintainability.",
      image: reactIcon,
    },
    {
      title: "Sass",
      description: "Experienced in using Sass (Syntactically Awesome Style Sheets) to write maintainable, modular, and efficient CSS. Sass allows me to streamline the styling process with features like variables, mixins, and nesting.",
      image: saasIcon,
    },
    {
      title: "Bootstrap",
      description: "Proficient in Bootstrap, a powerful CSS framework I use to build responsive, mobile-first web pages. It allows me to quickly prototype and design layouts with consistent styling across different devices.",
      image: BootstrapIcon,
    }
    
  ];

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <p>Here are some of the skills I’ve been working on:</p>
      <div className="cards-grid">
        {skills.map((skill, index) => (
          <div key={index} className="card">
            <img src={skill.image} alt={skill.title} />
            <h4>{skill.title}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
