import React, { useState, useEffect, useRef } from 'react';
import "../Styles/certificates.css";

// Import your certificate images
import promptEngineerCert from "../Images/certificates/prompt-engineer-cert.jpg"; // Add your image path
import fullStackCert from "../Images/certificates/fullstack-cert.jpg"; // Add your image path

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
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

  const certificatesData = [
    {
      id: 1,
      name: "Certified Prompt Engineer",
      issuer: "Masai School",
      image: promptEngineerCert,
      badge: "AI & Machine Learning",
      badgeIcon: "fas fa-robot",
      description: "Comprehensive certification in Prompt Engineering techniques, covering advanced AI interaction methods, rapid learning strategies, and integration of generative AI capabilities into web development projects.",
      skills: ["Prompt Engineering", "Generative AI", "ChatGPT", "AI Integration", "Rapid Learning"],
      verificationUrl: null, // No verification link available
      type: "Professional Certification"
    },
    {
      id: 2,
      name: "Full Stack Web Development",
      issuer: "Masai School",
      image: fullStackCert,
      badge: "Web Development",
      badgeIcon: "fas fa-code",
      description: "Intensive full-stack web development program covering modern frontend and backend technologies, database management, and deployment strategies with hands-on project experience.",
      skills: ["React", "Node.js", "JavaScript", "MongoDB", "Express.js", "Full Stack Development"],
      verificationUrl: "https://certs.masaischool.com/certificate/masai-fw24-600",
      type: "Bootcamp Completion"
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null);
    document.body.style.overflow = 'unset';
  };

  const handleViewCertificate = (certificate) => {
    openModal(certificate);
  };

  const handleVerifyCertificate = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [modalOpen]);

  return (
    <>
      <section 
        className={`certificates-section ${isVisible ? 'animate-in' : ''}`} 
        id='certificates' 
        ref={sectionRef}
      >
        <div className="certificates-header">
          <h1 className="certificates-title">
            <span className="certificates-title-accent">Certificates</span>
          </h1>
          <p className="certificates-subtitle">
            Professional certifications and achievements that validate my expertise and continuous learning journey
          </p>
        </div>

        <div className="certificates-grid">
          {certificatesData.map((certificate, index) => (
            <article key={certificate.id} className="certificate-card">
              <div className="certificate-image-container">
                <img 
                  src={certificate.image} 
                  alt={`${certificate.name} Certificate`}
                  className="certificate-image"
                  onClick={() => handleViewCertificate(certificate)}
                />
                <div className="certificate-overlay">
                  <button 
                    className="view-certificate-btn"
                    onClick={() => handleViewCertificate(certificate)}
                  >
                    <i className="fas fa-search-plus"></i>
                    View Certificate
                  </button>
                </div>
              </div>

              <div className="certificate-content">
                <div className="certificate-badge">
                  <i className={certificate.badgeIcon}></i>
                  {certificate.badge}
                </div>
                <h2 className="certificate-name">{certificate.name}</h2>
                <p className="certificate-issuer">
                  <i className="fas fa-university"></i>
                  Issued by {certificate.issuer}
                </p>
                <p className="certificate-description">{certificate.description}</p>

                <div className="certificate-skills">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="certificate-actions">
                  <button
                    className="action-btn primary"
                    onClick={() => handleViewCertificate(certificate)}
                  >
                    <i className="fas fa-eye action-btn-icon"></i>
                    View Certificate
                  </button>
                  {certificate.verificationUrl ? (
                    <button
                      className="action-btn"
                      onClick={() => handleVerifyCertificate(certificate.verificationUrl)}
                    >
                      <i className="fas fa-check-circle action-btn-icon"></i>
                      Verify
                    </button>
                  ) : (
                    <button
                      className="action-btn single"
                      onClick={() => handleViewCertificate(certificate)}
                    >
                      <i className="fas fa-expand-alt action-btn-icon"></i>
                      View Full Size
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certificate Modal */}
      {modalOpen && selectedCertificate && (
        <div className={`certificate-modal ${modalOpen ? 'open' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={selectedCertificate.image} 
              alt={`${selectedCertificate.name} Certificate`}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
