import React from 'react'
import "../Styles/intro.css";
import Svgwave from './Svgwave';
import devlogo from "../Images/devloperLogo.svg"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";


const Intro = () => {

  const [text] = useTypewriter({
    words: ['A FullStack Developer', 'A MERN Stack Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })


  const githublink = ()=>{
    window.open("https://github.com/shivakrishnak13")
  }

  const emaillink = ()=>{
    window.location.href = 'mailto:kosarishivakrishna10@gmail.com';
  }

  const linkedinlink = ()=>{
    window.open("https://www.linkedin.com/in/shivakrishna-kosari-a16039257/")
  }


  return (
    <div className='intro-main' id="home">
      <div className='intro-main-img-div'>
        <Svgwave />
        <div className='intro-main-text-div'>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <h1 className='nameh1tag' id="user-detail-name"><span style={{ color: "#B5D9EB" }}>Hi, I'm </span>
              Shivakrishna Kosari</h1>


            <h2 className='typewriter'> {text} <span>
              <Cursor cursorStyle="|" /></span></h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }} className='devloperimg-div' >
              <img className="devloperimg" src={devlogo} alt="dev" />
            </motion.div>


          </motion.div>

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='socialamedialogos'>

            <motion.div onClick={githublink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <FaGithub className='icon-github' />
            </motion.div>
            <motion.div onClick={emaillink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}><MdAlternateEmail className='icon-email' /></motion.div>
            <motion.div onClick={linkedinlink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}><AiFillLinkedin className='icon-linkedin' /></motion.div>



          </motion.div>



        </div>





      </div>

    </div>
  )
}

export default Intro;