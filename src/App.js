import './App.css';
import Header from './Header';
import Footer from './Footer';
import Error from './Error';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'


import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import React, { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [headerAnimation, setHeaderAnimation] = useState(false);
  const [contentAnimation, setContentAnimation] = useState(false);

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

  function contentAnimationToggle(pageName){
    if(page === pageName){
      return;
    }
    setContentAnimation(false);
  }

  return (
    <BrowserRouter>
    <div className='MainPage'>
      <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: -150, opacity: 0 }} transition={{ type: "tween", duration: 1 }}
        onAnimationComplete={() => setHeaderAnimation(true)}>
        <Header setContentAnimation={contentAnimationToggle} page={page}/>
      </motion.div>
      {
      headerAnimation && < div className='content'>
      <Routes>
        <Route index element={<AboutMe setContentAnimation={setContentAnimation} />}  />
        <Route path="portfolio" element={<Projects setContentAnimation={setContentAnimation}/>}  />
        <Route path="contact" element={<Contact setContentAnimation={setContentAnimation} />}  />
        <Route path="*" element={<Error setContentAnimation={setContentAnimation}/>} />
      </Routes>
      </div>
      }
      {contentAnimation && <Footer setContentAnimation={contentAnimationToggle} />}
    </div>
  </BrowserRouter>
  );
}

export default App;
