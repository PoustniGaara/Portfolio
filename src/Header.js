import React, { useState } from 'react';
import Pdf from './documents/resume.pdf';
import {
  Link,
} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const Header = ({setContentAnimation}) => {

  const path = window.location.pathname;
  let page;

  if (path === "/") {
    page = "about";
  } else if (path === "/portfolio") {
    page = "portfolio";
  } else if (path === "/contact") {
    page = "contact";
  } else {
    page = "notFound";
  }


  console.log(page);


  return (
    <header>
      <div className='header'>
      <Link to="/" className='headerTitle'  onClick={() =>setContentAnimation(false)}>Viktor Tindula</Link>
      </div>
      <div className='menuPanel'>
        <Link to="/" className={`menuPanelItem ${page === 'about' ? "active" : ""}`} id='about' onClick={() =>setContentAnimation(false)}> 
        <motion.p >about</motion.p> 
        </Link>
        <Link to="portfolio" className={`menuPanelItem ${page === 'portfolio' ? "active" : ""}`} id='portfolio' onClick={() =>setContentAnimation(false)}>
        <motion.p >portfolio</motion.p> 
        </Link>
        <a href={Pdf} target="_blank" className='menuPanelItem' >
        <motion.p >resume</motion.p> 
        </a>
        <Link to="contact" className={`menuPanelItem ${page === 'contact' ? "active" : ""}`} id='contact' onClick={() =>setContentAnimation(false)}>
        <motion.p >contact</motion.p>
        </Link>
      </div>
    </header>
  )
}

export default Header