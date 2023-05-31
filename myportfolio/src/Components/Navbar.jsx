import React, { useState } from 'react'
import logo from "../Images/k.png"
import styles from "../Styles/navbar.module.css";
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import resume from "../files/Shivakrishna_Kosari_Resume.pdf"

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
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#">Skills</a>
                        </li>
                        <li>
                            <a href="#Projects">Projects</a>
                        </li>
                        <li>
                            <a href="#">Contacts</a>
                        </li>
                        <li>
                            <a href="#">Statistics</a>
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
                            icon={option ? (
                                <GrClose size={"20px"} />
                            ) : (
                                <SlMenu size={"20px"} />
                            )}
                            onClick={showOptions}
                            variant='none'
                            background={"transparent"}
                        />
                        <MenuList width={"200px"} >
                            <MenuItem height={"30px"} >
                                Home
                            </MenuItem>
                            <MenuItem >
                                About
                            </MenuItem>
                            <MenuItem >
                                Skills
                            </MenuItem>
                            <MenuItem >
                                Projects
                            </MenuItem>
                            <MenuItem >
                                Contacts
                            </MenuItem>
                            <MenuItem >
                                Statistics
                            </MenuItem>
                            <MenuItem >
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