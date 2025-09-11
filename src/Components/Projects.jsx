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
import jsonIcon from "../Images/json.svg";

const Projects = () => {
  const projectsData = [
  {
    id: 1,
    name: "EduHub",
    description:
      "EduHub is a course management platform where students enroll and instructors create AI-powered assignments. It features an announcement system and dashboard. My contribution included building the instructor tools, integrating enrollment, and ensuring seamless course workflows.",
    image: eduhub,
    liveUrl: "https://edu-sphere-seven.vercel.app/",
    githubUrl: "https://github.com/shivakrishnak13/EduSphere",
    technologies: [
      { name: "Angular", icon: angular },
      { name: "Node.js", icon: nodejs },
      { name: "MySQL", icon: mysql },
      { name: "Express", icon: express },
      { name: "TypeScript", icon: typescript },
    ],
  },
  {
    id: 2,
    name: "StyleSpot",
    description:
      "StyleSpot is an eCommerce website for fashion clothing with a modern React frontend and Redux for state. The backend uses JSON server for product storage. My contribution was UI design, product display pages, and cart logic, ensuring smooth interaction across devices with a responsive layout.",
    image: stylespot,
    liveUrl: "https://style-spot-dusky.vercel.app/",
    githubUrl: "https://github.com/shivakrishnak13/stylespot_project",
    technologies: [
      { name: "React", icon: reactimg },
      { name: "Redux", icon: reduximg },
      { name: "Chakra UI", icon: chakraui },
      { name: "HTML", icon: htmlimg },
      { name: "CSS", icon: Cssimg },
      { name: "JavaScript", icon: Javascriptimg },
    ],
  },
  {
    id: 3,
    name: "CarTrade",
    description:
      "CarTrade is a second-hand car platform for buyers and dealers, featuring filtering, listings, and dealer dashboards. Built with React, Redux, and Express, it offers smooth navigation. My contribution included creating dealer tools, advanced filters, and UI enhancements for streamlined transactions.",
    image: cartrade,
    liveUrl: "https://cartrade-ten.vercel.app/",
    githubUrl: "https://github.com/shivakrishnak13/attryb_project",
    technologies: [
      { name: "React", icon: reactimg },
      { name: "Redux", icon: reduximg },
      { name: "Chakra UI", icon: chakraui },
      { name: "Express", icon: express },
      { name: "JavaScript", icon: Javascriptimg },
    ],
  },
  {
    id: 4,
    name: "MegaMart",
    description:
      "MegaMart is a clone of IndiaMart for buying and selling products online. Developed with React and Chakra UI, it uses a JSON server for backend simulation. My contribution included product pages, search functionality, and cart integration, handling responsive design and deployment end-to-end.",
    image: megamart,
    liveUrl: "https://megamart.vercel.app/",
    githubUrl: "https://github.com/shivakrishnak13/MegaMart",
    technologies: [
      { name: "React", icon: reactimg },
      { name: "Chakra UI", icon: chakraui },
      { name: "HTML", icon: htmlimg },
      { name: "CSS", icon: Cssimg },
      { name: "JavaScript", icon: Javascriptimg },
    ],
  },
  {
    id: 5,
    name: "FashionKart",
    description:
      "FashionKart is a Flipkart clone for browsing and purchasing items online. Built as a collaborative project with HTML, CSS, JavaScript, and JSON server. My contribution included product listing pages, cart features, and enhancing the UI for a consistent look, ensuring smooth team collaboration.",
    image: fashionkart,
    liveUrl: "https://effortless-lolly-d28d4e.netlify.app/",
    githubUrl: "https://github.com/sharadParadhi/flipkart-clone",
    technologies: [
      { name: "HTML", icon: htmlimg },
      { name: "CSS", icon: Cssimg },
      { name: "JavaScript", icon: Javascriptimg },
      { name: "JSON Server", icon: jsonIcon },
    ],
  },
  {
    id: 6,
    name: "FashionVerce",
    description:
      "FashionVerce is an individual eCommerce project selling a wide range of clothing online. Built with HTML, CSS, and JavaScript, it focuses on a clean responsive design. My contribution was full development, including UI, interactivity, and deployment to create a smooth and modern experience.",
    image: fashionverce,
    liveUrl: "https://eloquent-cocada-745764.netlify.app/",
    githubUrl: "https://github.com/shivakrishnak13/FashionVerce-Belk.com",
    technologies: [
      { name: "HTML", icon: htmlimg },
      { name: "CSS", icon: Cssimg },
      { name: "JavaScript", icon: Javascriptimg },
      { name: "JSON", icon: jsonIcon },

    ],
  },
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
