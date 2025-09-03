import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  // Dynamic experience data - Easy to add new companies/roles
  const experienceData = [
    {
      id: 1,
      company: "Revent AI",
      location: "Remote",
      companyStartDate: "2023-10-01",
      companyEndDate: null, // null means still working here
      roles: [
        {
          title: "Senior Frontend Developer",
          startDate: "2024-05-01",
          endDate: null, // current role
          type: "Promotion",
          highlights: [
            {
              title: "Leadership & Ownership",
              description: "Promoted for taking ownership of complex features and efficiently resolving bugs across multiple applications",
              icon: "👑"
            },
            {
              title: "Advanced Integrations",
              description: "Integrated Doc-to-PPT, Prompt-to-PPT features and created in-app guided tours using Joyride",
              icon: "🚀"
            },
            {
              title: "Performance Optimization",
              description: "Led performance improvements and bug resolution across React, Vue, and Next.js applications",
              icon: "⚡"
            }
          ]
        },
        {
          title: "Junior Frontend Developer",
          startDate: "2023-10-01",
          endDate: "2024-05-01",
          type: "Initial Role",
          highlights: [
            {
              title: "Presentation Canvas Editor",
              description: "Created complete presentation canvas editor from scratch using Fabric.js in React application",
              icon: "🎨"
            },
            {
              title: "Multi-Framework Development",
              description: "Built applications across React TypeScript, Vue TypeScript, and Next.js with different tech stacks",
              icon: "🛠️"
            },
            {
              title: "Full-Stack Integration",
              description: "Developed Node.js + Express.js APIs for PowerPoint XML to JSON conversion and export functionality",
              icon: "🔗"
            }
          ]
        }
      ],
      technologies: {
        frontend: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Fabric.js'],
        styling: ['MUI', 'SCSS', 'Responsive Design'],
        state: ['Redux Toolkit', 'Pinia Store'],
        backend: ['Node.js', 'Express.js', 'API Development'],
        tools: ['PowerPoint Integration', 'SEO Optimization', 'reCAPTCHA', 'Joyride']
      }
    }
    // Easy to add new companies here:
    // {
    //   id: 2,
    //   company: "New Company",
    //   location: "Location",
    //   companyStartDate: "2025-01-01",
    //   companyEndDate: null,
    //   roles: [
    //     {
    //       title: "New Role",
    //       startDate: "2025-01-01",
    //       endDate: null,
    //       type: "New Position",
    //       highlights: [...]
    //     }
    //   ],
    //   technologies: {...}
    // }
  ];

  // Utility functions for date calculations
  const calculateDuration = (startDate, endDate = null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const diffTime = Math.abs(end - start);
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    
    if (diffMonths >= 12) {
      const years = Math.floor(diffMonths / 12);
      const remainingMonths = diffMonths % 12;
      if (remainingMonths === 0) {
        return `${years} year${years > 1 ? 's' : ''}`;
      }
      return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
  };

  const formatDateRange = (startDate, endDate = null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;
    
    const formatOptions = { month: 'short', year: 'numeric' };
    const startFormatted = start.toLocaleDateString('en-US', formatOptions);
    const endFormatted = end ? end.toLocaleDateString('en-US', formatOptions) : 'Present';
    
    return `${startFormatted} – ${endFormatted}`;
  };

  const calculateTotalExperience = () => {
    let totalMonths = 0;
    
    experienceData.forEach(company => {
      const start = new Date(company.companyStartDate);
      const end = company.companyEndDate ? new Date(company.companyEndDate) : new Date();
      const diffTime = Math.abs(end - start);
      const months = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
      totalMonths += months;
    });
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    if (years >= 1) {
      return months > 0 ? `${years}y ${months}m` : `${years}y`;
    }
    return `${months}m`;
  };

  const getTotalRoles = () => {
    return experienceData.reduce((total, company) => total + company.roles.length, 0);
  };

  const getCurrentRole = () => {
    for (const company of experienceData) {
      const currentRole = company.roles.find(role => !role.endDate);
      if (currentRole) {
        return `${currentRole.title} at ${company.company}`;
      }
    }
    return "Available for new opportunities";
  };

  // Flatten roles for timeline display (most recent first)
  const getAllRoles = () => {
    const allRoles = [];
    
    experienceData.forEach(company => {
      company.roles.forEach(role => {
        allRoles.push({
          ...role,
          company: company.company,
          location: company.location,
          companyId: company.id,
          technologies: company.technologies
        });
      });
    });

    // Sort by start date (most recent first)
    return allRoles.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  };

  const allRoles = getAllRoles();

  return (
    <section 
      className={`experience-section ${isVisible ? 'animate-in' : ''}`} 
      id='experience' 
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="bg-pattern">
        <div className="pattern-dot"></div>
        <div className="pattern-dot"></div>
        <div className="pattern-dot"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Professional Journey</span>
          <h1 className="section-title">
            Professional <span className="company-highlight">Experience</span>
          </h1>
          
          {/* Experience Summary */}
          <div className="experience-summary">
            <div className="summary-card">
              <div className="summary-value">{calculateTotalExperience()}</div>
              <div className="summary-label">Total Experience</div>
            </div>
            <div className="summary-card">
              <div className="summary-value">{experienceData.length}</div>
              <div className="summary-label">Companies</div>
            </div>
            <div className="summary-card">
              <div className="summary-value">{getTotalRoles()}</div>
              <div className="summary-label">Roles</div>
            </div>
          </div>
          
          <p className="section-subtitle">
            Currently: {getCurrentRole()}
          </p>
        </div>

        {/* Career Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {allRoles.map((role, index) => (
            <div 
              key={`${role.companyId}-${index}`}
              className={`timeline-item ${index === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {!role.endDate && <div className="marker-pulse"></div>}
              </div>
              
              <div className="experience-card">
                <div className="card-header">
                  <div className="role-info">
                    <div className={`role-badge ${!role.endDate ? 'current' : ''}`}>
                      {role.type} {!role.endDate && '• Current'}
                    </div>
                    <h3 className="role-title">{role.title}</h3>
                    <p className="company-info">
                      <span className="company-name">{role.company}</span>
                      <span className="separator">•</span>
                      <span className="location">{role.location}</span>
                    </p>
                  </div>
                  <div className="period-info">
                    <span className="period">{formatDateRange(role.startDate, role.endDate)}</span>
                    <span className="duration">{calculateDuration(role.startDate, role.endDate)}</span>
                  </div>
                </div>

                <div className="highlights-grid">
                  {role.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="highlight-card">
                      <div className="highlight-icon">{highlight.icon}</div>
                      <div className="highlight-content">
                        <h4 className="highlight-title">{highlight.title}</h4>
                        <p className="highlight-description">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Achievements */}
        <div className="achievements-section">
          <h3 className="achievements-title">Key Technical Achievements</h3>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🎯</div>
              <div className="achievement-content">
                <h4>Multi-Framework Expertise</h4>
                <p>Successfully delivered projects across React, Vue.js, and Next.js ecosystems</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">📊</div>
              <div className="achievement-content">
                <h4>Performance Optimization</h4>
                <p>Improved application performance and resolved complex bugs across multiple codebases</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🔧</div>
              <div className="achievement-content">
                <h4>Full-Stack Integration</h4>
                <p>Built APIs and integrated PowerPoint conversion features with seamless frontend experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-stack-section">
          <h3 className="tech-title">Technologies Used</h3>
          <div className="tech-categories">
            {experienceData[0]?.technologies && Object.entries(experienceData[0].technologies).map(([category, technologies]) => (
              <div key={category} className="tech-category">
                <h4 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <div className="tech-pills">
                  {technologies.map((tech, index) => (
                    <span key={tech} className="tech-pill" style={{ animationDelay: `${index * 0.1}s` }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .experience-section {
          min-height: 100vh;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.05;
          pointer-events: none;
        }

        .pattern-dot {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%);
        }

        .pattern-dot:nth-child(1) {
          top: 20%;
          right: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .pattern-dot:nth-child(2) {
          bottom: 30%;
          left: 5%;
          animation: float 8s ease-in-out infinite 2s;
        }

        .pattern-dot:nth-child(3) {
          top: 60%;
          right: 30%;
          animation: float 8s ease-in-out infinite 4s;
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
          border: 1px solid rgba(14, 165, 233, 0.3);
        }

        .section-title {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .company-highlight {
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .experience-summary {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 30px 0;
          flex-wrap: wrap;
        }

        .summary-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 20px 30px;
          text-align: center;
          min-width: 120px;
          transition: all 0.3s ease;
        }

        .summary-card:hover {
          background: rgba(14, 165, 233, 0.1);
          border-color: rgba(14, 165, 233, 0.3);
          transform: translateY(-5px);
        }

        .summary-value {
          font-size: 2rem;
          font-weight: 700;
          color: #0ea5e9;
          margin-bottom: 5px;
        }

        .summary-label {
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          font-weight: 300;
          margin-top: 20px;
        }

        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto 80px;
        }

        .timeline-line {
          position: absolute;
          left: 30px;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, #0ea5e9, #22c55e);
          opacity: 0.5;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease;
          cursor: pointer;
        }

        .animate-in .timeline-item {
          opacity: 1;
          transform: translateX(0);
        }

        .animate-in .timeline-item:nth-child(2) { transition-delay: 0.2s; }
        .animate-in .timeline-item:nth-child(3) { transition-delay: 0.4s; }
        .animate-in .timeline-item:nth-child(4) { transition-delay: 0.6s; }

        .timeline-marker {
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;
        }

        .marker-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          border: 4px solid #0f172a;
          position: relative;
          z-index: 2;
        }

        .marker-pulse {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(14, 165, 233, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        .experience-card {
          margin-left: 80px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .experience-card {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(10px);
        }

        .timeline-item.active .experience-card {
          background: rgba(14, 165, 233, 0.1);
          border-color: rgba(14, 165, 233, 0.3);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
          gap: 20px;
        }

        .role-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
        }

        .role-badge.current {
          background: rgba(14, 165, 233, 0.2);
          color: #0ea5e9;
          animation: glow 2s ease-in-out infinite;
        }

        .role-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 8px;
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          color: #94a3b8;
        }

        .company-name {
          font-weight: 500;
          color: #0ea5e9;
        }

        .separator {
          opacity: 0.5;
        }

        .period-info {
          text-align: right;
          flex-shrink: 0;
        }

        .period {
          display: block;
          font-size: 1rem;
          font-weight: 500;
          color: #f8fafc;
          margin-bottom: 4px;
        }

        .duration {
          font-size: 0.9rem;
          color: #64748b;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .highlight-card {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(5px);
        }

        .highlight-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .highlight-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 8px;
        }

        .highlight-description {
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .achievements-section {
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.6s;
        }

        .animate-in .achievements-section {
          opacity: 1;
          transform: translateY(0);
        }

        .achievements-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 40px;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .achievement-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
        }

        .achievement-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }

        .achievement-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 8px;
        }

        .achievement-content p {
          color: #cbd5e1;
          line-height: 1.6;
        }

        .tech-stack-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.8s;
        }

        .animate-in .tech-stack-section {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 40px;
        }

        .tech-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .tech-category {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .category-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0ea5e9;
          margin-bottom: 15px;
          text-transform: capitalize;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-pill {
          padding: 8px 16px;
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.3);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #0ea5e9;
          opacity: 0;
          transform: translateY(20px);
          animation: slideInUp 0.6s ease forwards;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(8px) rotate(-2deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(14, 165, 233, 0.5); }
          50% { box-shadow: 0 0 15px rgba(14, 165, 233, 0.8); }
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

          .experience-summary {
            gap: 1rem;
          }

          .summary-card {
            padding: 15px 20px;
            min-width: 100px;
          }

          .summary-value {
            font-size: 1.5rem;
          }

          .timeline-line {
            left: 15px;
          }

          .timeline-marker {
            left: 5px;
          }

          .experience-card {
            margin-left: 60px;
            padding: 25px 20px;
          }

          .card-header {
            flex-direction: column;
            gap: 15px;
          }

          .period-info {
            text-align: left;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .tech-categories {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 20px;
          }

          .section-title {
            font-size: 2rem;
          }

          .experience-summary {
            flex-direction: row;
            justify-content: center;
          }

          .summary-card {
            padding: 10px 15px;
            min-width: 80px;
          }

          .summary-value {
            font-size: 1.2rem;
          }

          .summary-label {
            font-size: 0.8rem;
          }

          .experience-card {
            margin-left: 40px;
            padding: 20px 15px;
          }

          .highlight-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
          }

          .achievement-card {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
