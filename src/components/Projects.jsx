import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../sass/Projects.scss'
import project1 from '../assets/projectmangement.png'
import project2 from '../assets/centerlized.png'
import project3 from '../assets/projectmangement.png'
import project4 from '../assets/projectmangement.png'
import project5 from '../assets/projectmangement.png'

const Projects = () => {
  const projects = [
    {
      title: 'LMS',
      description: 'This is a Learning Management System Project in which i worked in this',
      image: project1,
      details:'This is a Learning Management System Project in which i worked in this',
    },
    {
      title: 'InvisAlign',
      description: 'This is a Project is a which i worked in this',
      image: project2,
      details: 'Its a Dental Website of a Clinic Which is Placed in Newyork ',
    },
    {
      title: 'A2B MerchantPortal',
      description: 'This is a brief description of project 3.',
      image: project3,
      details: 'Here are more details about project 3...',
    },
    {
      title: 'A2b CustomerPortal',
      description: 'This is a brief description of project 4.',
      image: project4,
      details: 'Here are more details about project 4...',
    },
    {
      title: 'Portfolio',
      description: 'This is My Portfolio I Done by my own',
      image: project5,
      details: 'This Portfolio i were made using the HTML5,Css and Saas,Javascript,React',
    },
  ];
  // State to handle the modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p>I have worked on a wide range of projects. Here are the Projects I worked on:</p>
      
      {/* Carousel with project cards */}
      <Slider {...settings} className="projects-carousel">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => openModal(project)}>View Details</button>
          </div>
        ))}
      </Slider>

      {/* Modal popup */}
      {selectedProject &&(
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedProject.image}/>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
