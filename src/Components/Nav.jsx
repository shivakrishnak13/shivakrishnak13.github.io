import React, { useState, useEffect } from 'react';
import Shivakrishna_Kosari_Resume from ".././files/Shivakrishna_Kosari_Resume.pdf";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const [navbg, setnavbg] = useState(true);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  const navScroll = () => {
    if (window.scrollY > 150) {
      setnavbg(true);
    } else {
      setnavbg(false);
    }
  };

  useEffect(() => {
    navScroll(); // Initial check
    window.addEventListener("scroll", navScroll);
    return () => window.removeEventListener("scroll", navScroll);
  }, []);

  const closemenu = () => {
    setIsActive(false);
  };

  const handleDownload = () => {
    // Open Google Drive link
    window.open("https://drive.google.com/file/d/1s0B8lAYKlVkfFbO-3r6mOl11uSVEBBWD/view?usp=sharing", "_blank");
    
    // Create download link (you'll need to replace this with your actual PDF file)
    // const link = document.createElement('a');
    // link.href = '/path/to/your/resume.pdf'; // Replace with actual path
    // link.setAttribute('download', 'Shivakrishna_Kosari_Resume.pdf');
    // link.setAttribute('id', 'resume-link-1');
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <div className='navdiv' id="nav-menu">
      <nav className={navbg ? "navbar active" : "navbar"} id="nav-menu">
        <div className="navbar-content">
          <div className="logo">
            <span className="brand-gradient">shivakrishna</span>
          </div>
          
          <ul className={`menu ${isActive ? 'active' : ''}`}>
            <li>
              <a href="#" className="nav-link" onClick={closemenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={closemenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link" onClick={closemenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" onClick={closemenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={closemenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#statistics" className="nav-link" onClick={closemenu}>
                Statistics
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closemenu}>
                Contact
              </a>
            </li>
            <li className="resume-item">
              <a 
                href={'https://drive.google.com/uc?export=download&id=1s0B8lAYKlVkfFbO-3r6mOl11uSVEBBWD'}
                download="Shivakrishna_Kosari_Resume.pdf"
                id="resume-link-1"
                className={`nav-link resume-button ${navbg ? 'scrolled' : ''}`} 
                onClick={handleDownload}
              >
                <i className="fas fa-download" style={{ marginRight: '8px' }}></i>
                Resume
              </a>
            </li>
          </ul>
          
          <div className="menu-toggle" onClick={handleMenuClick}>
            <i className={`fas ${isActive ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </nav>

      <style jsx>{`
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navdiv {
          width: 100%;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          background-color: transparent;
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.active {
          background: rgba(23, 28, 35, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 50px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .brand-gradient {
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: lowercase;
          background: linear-gradient(90deg, #0ea5e9, #22c55e, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 1px;
        }

        .menu {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 30px;
        }

        .menu li {
          position: relative;
        }

        .nav-link {
          text-decoration: none;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          padding: 8px 0;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #0ea5e9;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background: linear-gradient(90deg, #0ea5e9, #22c55e);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .navbar.active .nav-link {
          color: #ffffff;
        }

        .navbar.active .nav-link:hover {
          color: #0ea5e9;
        }

        .resume-item {}

        .resume-button {
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
        }

        .resume-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
        }

        .resume-button.scrolled {
          background: linear-gradient(135deg, #22c55e, #a78bfa);
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
        }

        .resume-button.scrolled:hover {
          box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
        }

        .menu-toggle {
          display: none;
          color: #0ea5e9;
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .navbar.active .menu-toggle {
          color: white;
        }

        .menu-toggle:hover {
          color: #0ea5e9;
        }

        /* Mobile Styles */
        @media (max-width: 968px) {
          .navbar-content {
            padding: 0 30px;
          }

          .brand-gradient {
            font-size: 1.3rem;
          }

          .menu-toggle {
            display: block;
            z-index: 1001;
          }

          .menu {
            position: fixed;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(17, 17, 17, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            transition: left 0.3s ease;
          }

          .menu.active {
            left: 0;
          }

          .menu li {
            opacity: 0;
            transform: translateY(20px);
            animation: none;
          }

          .menu.active li {
            opacity: 1;
            transform: translateY(0);
            animation: fadeInUp 0.6s ease forwards;
          }

          .menu.active li:nth-child(1) { animation-delay: 0.1s; }
          .menu.active li:nth-child(2) { animation-delay: 0.2s; }
          .menu.active li:nth-child(3) { animation-delay: 0.3s; }
          .menu.active li:nth-child(4) { animation-delay: 0.4s; }
          .menu.active li:nth-child(5) { animation-delay: 0.5s; }
          .menu.active li:nth-child(6) { animation-delay: 0.6s; }
          .menu.active li:nth-child(7) { animation-delay: 0.7s; }
          .menu.active li:nth-child(8) { animation-delay: 0.8s; }

          .nav-link {
            color: #ffffff;
            font-size: 1.2rem;
            padding: 15px 30px;
          }

          .resume-button {
            padding: 15px 30px;
            font-size: 1rem;
            border-radius: 30px;
          }
        }

        @media (max-width: 480px) {
          .navbar-content {
            padding: 0 20px;
          }

          .brand-gradient {
            font-size: 1.1rem;
          }

          .nav-link {
            font-size: 1.1rem;
          }

          .resume-button {
            padding: 12px 24px;
            font-size: 0.9rem;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Nav;