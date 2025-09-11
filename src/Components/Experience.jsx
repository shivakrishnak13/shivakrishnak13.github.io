import React, { useState, useEffect, useRef } from 'react';
import "../Styles/experience.css";


const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
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
      companyEndDate: "2025-10-01", // null means still working here
      roles: [
        {
          title: "Senior Frontend Developer",
          startDate: "2025-04-01",
          endDate: "2025-10-01", // current role
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
          endDate: "2025-04-01",
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
    </section>
  );
};

export default Experience;
