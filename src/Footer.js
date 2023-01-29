import React from 'react'
import Pdf from './documents/resume.pdf';
import {
  Link,
} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'


const Footer = ({setContentAnimation}) => {

  return (
    <div id='footer'>
      <div className='footerColumn1'>
        <a href="www.tindula-software.com">© 2023 Viktor Tindula</a>
      </div>
      <div className='footerColumn2'>
      <Link to="/" className='footerItem' onClick={() =>setContentAnimation(false)}> About
        </Link>
        <Link to="portfolio" className='footerItem' onClick={() =>setContentAnimation(false)}>Portfolio
        </Link>
        <a href={Pdf} target="_blank" className='footerItem' >Resume
        </a>
        <Link to="contact" className='footerItem' onClick={() =>setContentAnimation(false)}>Contact
        </Link>
      </div>
    </div>
  )
}

export default Footer