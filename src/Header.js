import React from 'react'
import Pdf from './documents/resume.pdf';
import {
  Link,
} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const Header = ({setContentAnimation}) => {
  return (
    <header>
      <div className='header'>
      <Link to="/" className='headerTitle' onClick={() =>setContentAnimation(false)}>Viktor Tindula</Link>
      </div>
      <div className='menuPanel'>
        <Link to="/" className='menuPanelItem' onClick={() =>setContentAnimation(false)}> 
        <motion.p >about</motion.p> 
        </Link>
        <Link to="portfolio" className='menuPanelItem' onClick={() =>setContentAnimation(false)}>
        <motion.p >portfolio</motion.p> 
        </Link>
        <a href={Pdf} target="_blank" className='menuPanelItem' >
        <motion.p >resume</motion.p> 
        </a>
        <Link to="contact" className='menuPanelItem' onClick={() =>setContentAnimation(false)}>
        <motion.p >contact</motion.p>
        </Link>
      </div>
    </header>
  )
}

export default Header