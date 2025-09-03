import React, { useState, useEffect, useRef } from 'react';
import myphoto from '../Images/myphoto.png';

const About = ({ ref: forwardedRef, func }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/11eCVTWwZ7pFxIctWQzDJAQ2W-kjLPj8V/view", "_blank");
    
    // Create download link for local file
    const link = document.createElement('a');
    link.href = '/path/to/your/resume.pdf'; // Replace with actual path
    link.setAttribute('download', 'Shivakrishna_Kosari_Resume.pdf');
    link.setAttribute('id', 'resume-link-2');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Mock photo - replace with your actual image

  return (
    <div 
      className={`about-section ${isVisible ? 'animate-in' : ''}`} 
      id='about' 
      ref={forwardedRef || sectionRef}
      onScroll={func}
    >
      {/* Background Elements */}
      <div className="bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Get to know me</span>
          <h1 className="section-title">
            About <span className="highlight">Me</span>
          </h1>
          <div className="title-underline"></div>
        </div>

        {/* Content */}
        <div className="about-content">
          {/* Image Card */}
          <div className="image-card">
            <div className="image-wrapper">
              <div className="image-backdrop"></div>
              <img 
                className={`profile-image ${imageLoaded ? 'loaded' : ''}`}
                src={myphoto} 
                alt="Shivakrishna Kosari"
                onLoad={() => setImageLoaded(true)}
              />
              <div className="image-frame"></div>
            </div>
            <div className="image-glow"></div>
          </div>

          {/* Text Content */}
          <div className="text-content">
            <div className="intro-text">
              <h3 className="role-title">Frontend Developer</h3>
              <div className="experience-badge">2+ Years Experience</div>
              
              <p id="user-detail-intro" className="description">
                I'm a passionate Frontend Developer with over 2 years of experience building modern, 
                responsive, and user-friendly web applications. My expertise spans across React, Vue, 
                and Next.js applications, where I've created dynamic dashboards, interactive presentation 
                editors, and SEO-focused websites.
              </p>

              <p className="description-secondary">
                Alongside frontend development, I have built Node.js and Express.js APIs for seamless 
                data handling and integrations. Skilled in TypeScript, Redux Toolkit, Pinia, MUI, and SCSS, 
                I enjoy solving UI challenges, optimizing performance, and transforming ideas into scalable 
                digital experiences.
              </p>
            </div>

            {/* Skills Pills */}
            <div className="skills-preview">
              {['React', 'Vue.js', 'Next.js', 'TypeScript', 'Node.js'].map((skill, index) => (
                <span key={skill} className="skill-pill" style={{ animationDelay: `${0.1 * index}s` }}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Resume Button */}
            <div className="resume-section" id="resume-button-2">
              <button className="modern-resume-btn" onClick={handleDownload}>
                <span className="btn-content">
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Resume
                </span>
                <div className="btn-shine"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .about-section {
          min-height: 100vh;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          position: relative;
          overflow: hidden;
        }

        .bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          top: 60%;
          right: -5%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 10%;
          animation-delay: 4s;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 50px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .animate-in .section-header {
          opacity: 1;
          transform: translateY(0);
        }

        .section-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(14, 165, 233, 0.1);
          color: #0ea5e9;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 20px;
          border: 1px solid rgba(14, 165, 233, 0.2);
        }

        .section-title {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          -webkit-background-clip: text;
          background-clip: text;
          color: red;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .highlight {
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #0ea5e9, #22c55e);
          margin: 0 auto;
          border-radius: 2px;
        }

        .about-content {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 80px;
          align-items: center;
        }

        .image-card {
          position: relative;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease 0.2s;
        }

        .animate-in .image-card {
          opacity: 1;
          transform: translateX(0);
        }

        .image-wrapper {
          position: relative;
          width: 320px;
          height: 400px;
          margin: 0 auto;
        }

        .image-backdrop {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          border-radius: 20px;
          z-index: 1;
        }

        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          z-index: 2;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          transition: all 0.5s ease;
          opacity: 0;
        }

        .profile-image.loaded {
          opacity: 1;
        }

        .image-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 3px solid rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          z-index: 3;
          pointer-events: none;
        }

        .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          animation: pulse 3s ease-in-out infinite;
        }

        .text-content {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease 0.4s;
        }

        .animate-in .text-content {
          opacity: 1;
          transform: translateX(0);
        }

        .role-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 10px;
        }

        .experience-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          margin-bottom: 30px;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .description {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .description-secondary {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: #64748b;
          margin-bottom: 40px;
          font-weight: 300;
        }

        .skills-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }

        .skill-pill {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(14, 165, 233, 0.2);
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #0ea5e9;
          opacity: 0;
          transform: translateY(20px);
          animation: slideInUp 0.6s ease forwards;
        }

        .modern-resume-btn {
          position: relative;
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(14, 165, 233, 0.3);
        }

        .modern-resume-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(14, 165, 233, 0.4);
        }

        .btn-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-icon {
          width: 20px;
          height: 20px;
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .modern-resume-btn:hover .btn-shine {
          left: 100%;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-5deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Styles */
        @media (max-width: 968px) {
          .container {
            padding: 0 30px;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .image-wrapper {
            width: 280px;
            height: 350px;
          }

          .text-content {
            transform: none;
          }

          .animate-in .text-content {
            transform: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 20px;
          }

          .section-title {
            font-size: 2rem;
          }

          .about-content {
            gap: 40px;
          }

          .image-wrapper {
            width: 240px;
            height: 300px;
          }

          .description {
            font-size: 1rem;
          }

          .modern-resume-btn {
            padding: 14px 28px;
            font-size: 0.9rem;
          }

          .skills-preview {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default About;