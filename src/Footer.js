import React from 'react'
import Pdf from './documents/resume.pdf';
import {
  Link,
} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'


const Footer = ({contentAnimationToggle}) => {

  return (
    <div id='footer'>
      <div className='footerColumn1'>
      <Link to="/" className='footerItem' onClick={(event) =>contentAnimationToggle(event.target.innerHTML)}> © 2023 Viktor Tindula
        </Link>
      </div>
      <div className='footerColumn2'>
      <Link to="/" className='footerItem' onClick={(event) =>contentAnimationToggle(event.target.innerHTML)}> about
        </Link>
        <Link to="portfolio" className='footerItem' onClick={(event) =>contentAnimationToggle(event.target.innerHTML)}>portfolio
        </Link>
        <a href={Pdf} target="_blank" className='footerItem' >resume
        </a>
        <Link to="contact" className='footerItem' onClick={(event) =>contentAnimationToggle(event.target.innerHTML)}>contact
        </Link>
      </div>
    </div>
  )
}

export default Footer