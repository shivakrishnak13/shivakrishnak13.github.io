import React from 'react'
import "../Styles/nav.css"
import { useState } from 'react';
import logo from "../Images/k.png"
import resume from "../files/Shivakrishna_Kosari_Resume.pdf"



const Nav = () => {

  const [isActive, setIsActive] = useState(false);
 

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

 

  const [navbg, setnavbg] = useState(false)

  const navScroll = () => {
    if (window.scrollY > 50) {
      setnavbg(true)
    } else {
      setnavbg(false)
    }
  }



  window.addEventListener("scroll", navScroll)

  const closemenu = () => {
    setIsActive(false)

  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='navdiv'>
      <nav className={navbg ? "activenavbar" : "navbar"} id="nav-menu">
        <div className="max-width">
          <div className="title_logo">
          <img src={logo} alt="logo" />
          </div>
          <ul className={`menu ${isActive ? 'active' : ''}`}>
            <li>
              <a href="#" className="menu-btn active" onClick={closemenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-btn active" onClick={closemenu}>
                About
              </a>
            </li>
            <li>
              <a href="#techstacks" className="menu-btn active" onClick={closemenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="menu-btn active" onClick={closemenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#statistics" className="menu-btn active" onClick={closemenu}>Statistics</a>
            </li>
            <li>
              <a href="#contacts" className="menu-btn active" onClick={closemenu}>
                Contact
              </a>
            </li>
            <li id="resume-button-1">
              <button class={navbg? "active-nav-resume-button active-type1":"nav-resume-button type1"} onClick={handleDownload}>

              </button>
            </li>
          </ul>
          <div className="menu-btn menu-btn-position" onClick={handleMenuClick}>
            <i className={`fas fa-bars ${isActive ? 'active' : ''}`} />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;