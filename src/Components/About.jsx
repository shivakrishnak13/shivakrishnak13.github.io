import React, { useState, useEffect, useRef } from 'react';
import "../Styles/about.css";
import myphoto from "../Images/myphoto.png";
import Shivakrishna_Kosari_Resume from "../files/Shivakrishna_Kosari_Resume.pdf";

const About = ({ ref: propRef, func }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    // Open Google Drive link
    window.open("https://drive.google.com/file/d/1s0B8lAYKlVkfFbO-3r6mOl11uSVEBBWD/view?usp=sharing", '_blank');
    
    // Download local file
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1s0B8lAYKlVkfFbO-3r6mOl11uSVEBBWD';
    link.setAttribute('download', 'Shivakrishna_Kosari_Resume.pdf');
    link.setAttribute('id', 'resume-link-2');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const profileData = {
  name: "Shiva Krishna Kosari",
  title: "Full Stack Developer (Frontend-Focused)",
  experience: "2+ Years",
  description:
    "I'm a Full Stack Developer (Frontend-Focused) with over 2 years of experience building responsive, scalable, and user-friendly web applications. I specialize in developing interactive dashboards, AI-powered presentation editors, and SEO-optimized platforms using React, Vue, and Next.js on the frontend and Node.js with Express.js on the backend. Skilled in TypeScript, Redux Toolkit, Pinia, MUI, SCSS, and Tailwind CSS, I focus on crafting maintainable code, integrating APIs, and delivering seamless user experiences.",
  stats: [
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "10+", label: "Technologies" }
  ]
};

  return (
    <section 
      className={`about-section about section ${isVisible ? 'animate-in' : ''}`} 
      id='about' 
      ref={propRef || sectionRef} 
      onScroll={func}
    >
      <div className="about-header">
        <h1 className="about-title">
          About <span className="about-title-accent">Me</span>
        </h1>
      </div>

      <div className="about-container">
        <div className="about-image-section">
          <div className="image-wrapper">
            <img 
              className="profile-image home-img" 
              src={myphoto} 
              alt="Shiva Krishna Kosari - Frontend Developer"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about-content">
          <p className="about-description" id="user-detail-intro">
            {profileData.description}
          </p>

          <div className="resume-section">
            <div className="resume-button-wrapper" id="resume-button-2">
              <button 
                className="resume-button" 
                onClick={handleDownload}
                aria-label="Download Resume"
              >
                <span className="resume-icon">
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  </span>
                <span className="resume-text">Download Resume</span>
              </button>
            </div>
          </div>

          <div className="skills-highlight">
            {profileData.stats.map((stat, index) => (
              <div key={index} className="skill-item">
                <div className="skill-number">{stat.number}</div>
                <div className="skill-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
