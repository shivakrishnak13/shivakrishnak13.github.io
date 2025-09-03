import React from 'react';
import "../Styles/project.css";
import { AiFillGithub } from "react-icons/ai";
import { VscLiveShare } from "react-icons/vsc";

// Import images
import eduhub from "../Images/eduhub.png";
import stylespot from "../Images/stylespot image.png";
import megamart from "../Images/megamart image.png";
import fashionkart from "../Images/fashion kart.png";
import fashionverce from "../Images/fashionVerce.png";
import cartrade from "../Images/cartrade.png";

// Import tech icons
import htmlimg from "../Images/mini-icons/icons8-html.svg";
import Cssimg from "../Images/mini-icons/icons8-css.svg";
import Javascriptimg from "../Images/mini-icons/icons8-javascript.svg";
import reactimg from "../Images/mini-icons/icons8-react-native.svg";
import reduximg from "../Images/mini-icons/icons8-redux.svg";
import chakraui from "../Images/mini-icons/icons8-chakra-ui.svg";
import angular from "../Images/Angular.svg";
import mysql from "../Images/MySQL.svg";
import nodejs from "../Images/icons8-node-js.svg";
import express from "../Images/icons8-express-js.svg";
import typescript from "../Images/typescript-logo-svgrepo-com.svg";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: "EduHub",
      description: "EduHub offers seamless course enrollment, featuring an intuitive instructor dashboard for assignment creation using AI technology. Instructors can also make timely announcements to keep students informed.",
      image: eduhub,
      liveUrl: "https://edu-sphere-seven.vercel.app/",
      githubUrl: "https://github.com/shivakrishnak13/EduSphere",
      technologies: [
        { name: "Angular", icon: angular },
        { name: "Node.js", icon: nodejs },
        { name: "MySQL", icon: mysql },
        { name: "Express", icon: express },
        { name: "TypeScript", icon: typescript }
      ]
    },
    {
      id: 2,
      name: "StyleSpot",
      description: "An eCommerce website that sells a variety of fashion clothing. Built on ReactJS for the frontend and utilizes Redux for state management. The backend is implemented using a JSON server.",
      image: stylespot,
      liveUrl: "https://style-spot-dusky.vercel.app/",
      githubUrl: "https://github.com/shivakrishnak13/stylespot_project",
      technologies: [
        { name: "React", icon: reactimg },
        { name: "Redux", icon: reduximg },
        { name: "Chakra UI", icon: chakraui },
        { name: "HTML", icon: htmlimg },
        { name: "CSS", icon: Cssimg },
        { name: "JavaScript", icon: Javascriptimg }
      ]
    },
    {
      id: 3,
      name: "CarTrade",
      description: "The Second Hand Car Selling Website is a platform connecting users with dealers for purchasing pre-owned vehicles. It offers an attractive homepage, a comprehensive listing of cars with advanced filtering, and a specialized dealer interface for managing listings.",
      image: cartrade,
      liveUrl: "https://cartrade-ten.vercel.app/",
      githubUrl: "https://github.com/shivakrishnak13/attryb_project",
      technologies: [
        { name: "React", icon: reactimg },
        { name: "Redux", icon: reduximg },
        { name: "Chakra UI", icon: chakraui },
        { name: "Express", icon: express },
        { name: "JavaScript", icon: Javascriptimg }
      ]
    },
    {
      id: 4,
      name: "MegaMart",
      description: "MegaMart is an individual project, a cloned website of Indiamart Shopping, offering users the ability to buy or sell products. The platform is built using React and Chakra UI for the frontend, while the backend is powered by a JSON server.",
      image: megamart,
      liveUrl: "https://megamart.vercel.app/",
      githubUrl: "https://github.com/shivakrishnak13/MegaMart",
      technologies: [
        { name: "React", icon: reactimg },
        { name: "Chakra UI", icon: chakraui },
        { name: "HTML", icon: htmlimg },
        { name: "CSS", icon: Cssimg },
        { name: "JavaScript", icon: Javascriptimg }
      ]
    },
    {
      id: 5,
      name: "FashionKart",
      description: "Fashion Kart is a cloned website of Flipkart, a popular e-commerce platform enabling users to buy and sell products. This collaborative project utilizes HTML, CSS, and JavaScript for the frontend development, while the backend is supported by a JSON server.",
      image: fashionkart,
      liveUrl: "https://effortless-lolly-d28d4e.netlify.app/",
      githubUrl: "https://github.com/sharadParadhi/flipkart-clone",
      technologies: [
        { name: "HTML", icon: htmlimg },
        { name: "CSS", icon: Cssimg },
        { name: "JavaScript", icon: Javascriptimg }
      ]
    },
    {
      id: 6,
      name: "FashionVerce",
      description: "Fashionverce is an individual project, an ecommerce website specializing in the sale of a wide range of fashion clothing. The platform is built using HTML, CSS, and Javascript, allowing for a visually appealing and interactive user experience.",
      image: fashionverce,
      liveUrl: "https://eloquent-cocada-745764.netlify.app/",
      githubUrl: "https://github.com/shivakrishnak13/FashionVerce-Belk.com",
      technologies: [
        { name: "HTML", icon: htmlimg },
        { name: "CSS", icon: Cssimg },
        { name: "JavaScript", icon: Javascriptimg }
      ]
    }
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className='projects-container' id='projects'>
      <div className='projects-header'>
        <h1 className='projects-title'>
          My <span className='projects-title-accent'>Projects</span>
        </h1>
      </div>

      <div className='projects-grid'>
        {projectsData.map((project, index) => (
          <article key={project.id} className='project-card' style={{ animationDelay: `${index * 0.1}s` }}>
            <div className='project-image-container'>
              <img 
                src={project.image} 
                alt={project.name}
                className='project-image'
              />
              <div className='project-overlay'>
                <button 
                  className='project-btn'
                  onClick={() => handleLinkClick(project.liveUrl)}
                  aria-label={`View ${project.name} live demo`}
                >
                  <VscLiveShare className='project-btn-icon' />
                  Live Demo
                </button>
                <button 
                  className='project-btn'
                  onClick={() => handleLinkClick(project.githubUrl)}
                  aria-label={`View ${project.name} source code`}
                >
                  <AiFillGithub className='project-btn-icon' />
                  Source Code
                </button>
              </div>
            </div>

            <div className='project-content'>
              <h2 className='project-name'>{project.name}</h2>
              <p className='project-description'>{project.description}</p>
              
              <div className='tech-stack'>
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className='tech-item'>
                    <img src={tech.icon} alt={tech.name} className='tech-icon' />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

              <div className='project-actions'>
                <button
                  className='action-btn action-btn-primary'
                  onClick={() => handleLinkClick(project.liveUrl)}
                  aria-label={`View ${project.name} live demo`}
                >
                  <VscLiveShare />
                  Live Demo
                </button>
                <button
                  className='action-btn'
                  onClick={() => handleLinkClick(project.githubUrl)}
                  aria-label={`View ${project.name} source code`}
                >
                  <AiFillGithub />
                  GitHub
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
