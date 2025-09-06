import React, { useState } from 'react'
import logo from "../Images/k.png"
import styles from "../Styles/navbar.module.css";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Link } from '@chakra-ui/react';
import { SlMenu } from "react-icons/sl";
import resume from "../files/Shivakrishna-Kosari-Resume.pdf"

const Navbar = () => {

    const [option, SetOptions] = useState(false)
    const [navbg, setnavbg] = useState(false)

    const navScroll = () => {
        if (window.scrollY > 50) {
            setnavbg(true)
        } else {
            setnavbg(false)
        }
    }



    window.addEventListener("scroll", navScroll)

    const showOptions = () => {
        SetOptions(!option)
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };


      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
     


    return (
        <div className={navbg ? styles.active : styles.top_header_div}>
            <nav className={styles.nav}>

                <div className={styles.title_logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div >
                    <ul id={styles.nav_links} >
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => scrollToSection("about")}>About</a>
                        </li>
                        <li>
                            <a href="#experience" onClick={scrollToSection("experience")}>Experience</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={() => scrollToSection("skills")}>Skills</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => scrollToSection("projects")}>Projects</a>
                        </li>
                        <li>
                            <a href="#statistics" onClick={() => scrollToSection("statistics")}>Statistics</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
                        </li>
                        <li>
                            <button class="nav-resume-button type1" onClick={handleDownload}>
                               
                            </button>
                            {/* <a href="#">Resume</a> */}
                        </li>
                    </ul>
                </div>

                <div className={styles.menu_icon}>


                    <Menu>
                        <MenuButton
                            border={"none"}
                            as={IconButton}
                            aria-label='Options'
                            icon={<SlMenu size={"20px"} />}
                            onClick={showOptions}
                            variant='none'
                            background={"transparent"}
                            borderRadius={"2rem"}
                        />
                        <MenuList width={"200px"} >
                            <MenuItem className='mob-menu' >
                                <li>
                            <a href="#" >Home</a>

                                </li>
                            </MenuItem>
                            <MenuItem className='mob-menu' >
                                <li>

                            <a  href="#about" onClick={() => scrollToSection("about")} >About</a>
                                </li>
                            </MenuItem >
                            <MenuItem className='mob-menu' >
                            <a href="#experience" onClick={() => scrollToSection("experience")} >Experience</a>
                            </MenuItem>
                            <MenuItem className='mob-menu' >
                            <a href="#skills" onClick={() => scrollToSection("skills")} >Skills</a>
                            </MenuItem>
                            <MenuItem className='mob-menu' >
                            <a href="#projects" onClick={() => scrollToSection("projects")} >Projects</a>
                            </MenuItem>
                            <MenuItem className='mob-menu'>
                            <a href="#statistics" onClick={() => scrollToSection("statistics")} >Statistics</a>
                            </MenuItem>
                            <MenuItem className='mob-menu'>
                            <a href="#contact" onClick={() => scrollToSection("contact")} >Contact</a>
                            </MenuItem>
                            <MenuItem onClick={handleDownload} className='mob-menu'>
                            Resume
                            </MenuItem>
                        </MenuList>
                    </Menu>

                </div>
            </nav>

        </div>
    )
}

export default Navbar