import React, { useState } from 'react';
import Pdf from './documents/resume.pdf';
import {
  Link,
} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const Header = ({contentAnimationToggle, page}) => {
  return (
    <header>
      <div className='header'>
      <Link to="/" className='headerTitle'  onClick={(event) =>contentAnimationToggle(event.target.innerHTML)}>Viktor Tindula</Link>
      </div>
      <div className='menuPanel'>
        <Link to="/" className={`menuPanelItem ${page === 'about' ? "active" : ""}`} id='about' onClick={(event) =>contentAnimationToggle(event.target.innerHTML)}> about
        </Link>
        <Link to="portfolio" className={`menuPanelItem ${page === 'portfolio' ? "active" : ""}`} id='portfolio' onClick={(event) =>contentAnimationToggle(event.target.innerHTML)}>portfolio
        </Link>
        <a href={Pdf} target="_blank" className='menuPanelItem' >
        <motion.p >resume</motion.p> 
        </a>
        <Link to="contact" className={`menuPanelItem ${page === 'contact' ? "active" : ""}`} id='contact' onClick={(event) =>contentAnimationToggle(event.target.innerHTML)}>contact
        </Link>
      </div>
    </header>
  )
}

export default Header