import React, { useState } from 'react';
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import architecture1 from './images/architecture1.png';
import architecture2 from './images/architecture2.png';
import webshop from './images/webshop.png';
import portfolio from './images/portfolio.png';
import reservations from './images/reservations.png';
import portfolio3 from './images/portfolio3.png';
import architecture4 from './images/architecture4.png';
import report1 from './documents/UCN e-shop report.pdf';
import report2 from './documents/Cafe Peace report.pdf';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'



const Projects = ({setContentAnimation}) => {

  const [introAnimation, setIntroAnimation] = useState(false);

  return (
    <div className='page'>
      <section >
        <div className='row'>
          <div className='sectionTemplate1 '>
            <motion.div animate={{ x: 0 }} initial={{ x: -1200 }} transition={{ type: "tween", duration: 0.7 }}
              className='sectionT1LeftHalf custom'>
              <h1>portfolio.</h1>
              <p className='intro'>Check out my picks of things I have built.</p>
              <p >It is 2 years since I started with software development, by this time I've worked on various projects, most of the time in cooperation with other fellow developers. I picked up my most interesting projects, which are built by various system development methodologies, architecture designs, and technologies. </p>
              <p></p>
            </motion.div>
            <motion.div animate={{ x: 0 }} initial={{ x: 1200 }} transition={{ type: "tween", duration: 0.7 }}
              onAnimationComplete={() => setIntroAnimation(true)} className='sectionT1RightHalf custom '>
              <img src={portfolio} alt="portfolio" id='portfolioImg' className='fancyBorder' />
            </motion.div>
          </div>
        </div>
      </section>
      {introAnimation && <motion.div animate={{ opacity: 1 }} initial={{ opacity : 0}} onAnimationComplete={() => setContentAnimation(true)}>
        <section className='dark' >
          <div className='row'>
            <div className='sectionTemplate1'>
              <div className='sectionT1LeftHalf custom1'>
                <h2>E-shop for UCN</h2>
              </div>
              <div className='sectionT1RightHalf custom1'>
                <img src={webshop} alt="webshop" className='projectPreviewImg ' />
              </div>
            </div>
            <div className='projectInfo'>
              <Accordion className='accordion'>
                <AccordionSummary>1. About</AccordionSummary>
                <AccordionDetails>
                  <p>The e-shop is a web application with distributed architecture. It was developed in collaboration with my group mates and then evaluated in exams at the university.  </p>
                  <p> Users are able to see information about the page, buy the products and manage their accounts and orders. Part of the system is also a dedicated desktop app that is connected with API and is used by the system admin to manage products, user accounts and orders.</p>
                  <p>The web application took us 3 months to develop as we worked with some new technologies for us. If I could change one thing in this project, I would change the razor front-end for the one developed in the react. Although the use of razor was one of the requirements set for this project.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>2. What I've used To built this</AccordionSummary>
                <AccordionDetails>
                  <p>The application was developed using agile system development methodologies SCRUM and XP. The system is based on .Net core 6, and it contains projects like web API and web API MVC. We've used various libraries and Nuget packages for this project like Ado.net, automapper, rest-sharp, b-crypt tool for authentication, and many more. </p>
                  <p> In the project we tried to implement the solutions that are considered to be the best practice, we've implemented patterns like dependency injection, factory pattern, DTOs, DAO, and technologies like filters and custom exception handling middleware. The project included an external MS SQL database that was set up and maintained by us.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>3. Architecture</AccordionSummary>
                <AccordionDetails>
                  <img src={architecture1} alt="architecture1" className='architecturePic' />
                </AccordionDetails>
              </Accordion>
              <div className="github sep">
                <a href="https://github.com/PoustniGaara/UCN-e-shop" className='gitLink'>Link to GitHub</a>
                <a href={report1} target="_blank" className='gitLink'>Download Report</a>
              </div>
            </div>
          </div>
        </section>
        <section className='light' >
          <div className='row'>
            <div className='sectionTemplate1 specialSetup'>
              <div className='sectionT1LeftHalf custom2'>
                <img src={reservations} alt="reservations" className='projectPreviewImg' />
              </div>
              <div className='sectionT1RightHalf custom2'>
                <h2 >Café Peace desktop app</h2>
              </div>
            </div>
            <div className='projectInfo'>
              <Accordion className='accordion'>
                <AccordionSummary>1. About</AccordionSummary>
                <AccordionDetails>
                  <p>This project is a desktop application for restaurant with a main use case of management of restaurant reservations. Again this application was built in cooperation with my group mates and then evaluated in the exams at the university.</p>
                  <p>I pick up this application here as it is a large-scale project that shows some solid java skills. Although I do not recommend anyone to open up the UI, because one may get the urge to open up the window and jump out. Yes, one of the gorgeous requirement for this project was to use java swing as a framework for the UI, but as I mentioned above I believe this project shows some decent skills in the back-end. Overall this project took me and my group mates 2 months to develop.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary>2. What I've used To built this</AccordionSummary>
                <AccordionDetails>
                  <p>The project was developed by a plan-driven system development methodology, more specifically by a unified process approach.</p>
                  <p>The codebase is composed of java with some additional libraries like swing, JDBC for connection to the database, and some additional libraries for icons. We used the DAO pattern for communication with the database and the system also contains transactions and protection against SQL injection for security reasons. This project also included an external MS SQL database that was set up and maintained by us.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary>3. Architecture</AccordionSummary>
                <AccordionDetails>
                  <img src={architecture2} alt="architecture2" className='architecturePic' />
                </AccordionDetails>
              </Accordion>
              <div className="github sep redTheme">
                <a href="https://github.com/PoustniGaara/SecondSemseterProject" className='gitLink'>Link to GitHub</a>
                <a href={report2} target="_blank" className='gitLink'>Download Report</a>
              </div>
            </div>
          </div>
        </section>
        <section className='light' >
          <div className='row'>
            <div className='sectionTemplate1'>
              <div className='sectionT1LeftHalf custom1'>
                <h2>My portfolio</h2>
              </div>
              <div className='sectionT1RightHalf custom1'>
                <img src={portfolio3} alt="portfolio3" className='projectPreviewImg' />
              </div>
            </div>
            <div className='projectInfo'>
              <Accordion className='accordion'>
                <AccordionSummary>1. About</AccordionSummary>
                <AccordionDetails>
                  <p>I created this portfolio with the intention of sharing my profile and my work with people. The portfolio has an informative character and at the same time, it can show up my skills on the front-end.</p>
                  <p>Before I started building it, I took the React course as I didn't have any experience with it before. The course took me about 2 weeks mainly because of my previous experience with HTML, CSS, and JavaScript. You can preview the portfolio yourself here on my website!</p>
                  <p>This portfolio itself took me about a week and a half to finalize.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>2. What I've used To built this</AccordionSummary>
                <AccordionDetails>
                  This project is built by React and its various libraries, JavaScript, HTML and CSS.
                </AccordionDetails>
              </Accordion>
              <div className="github sep greenTheme">
                <a href="https://github.com/PoustniGaara/UCN-e-shop" className='gitLink'>Link to GitHub</a>
              </div>
            </div>
          </div>
        </section>
        <section className='light'>
          <div className='row'>
            <h2>Scan-It</h2>
            <div className='projectInfo'>
              <Accordion className='accordion'>
                <AccordionSummary>1. About</AccordionSummary>
                <AccordionDetails>
                  <p>Scan-It is my most recent personal project and it's still in progress. To develop it I use SCRUM and XP practices.</p>
                  <p>The final product is a mobile application that is able to scan a receipt from the stores and save the information for the user, so he can have an overview of his spending for certain items. The next step is to process the data collected from the users and give the users recommendations of where they can get the items they are usually buying cheaper.   </p>
                  <p>Currently, I am learning and improving my react native skills so, I can deliver the product of high quality.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>2. What I'm using To built this</AccordionSummary>
                <AccordionDetails>
                  <p>The mobile application will be developed in react native which makes this application deployable both on android and iOS. </p>
                  <p>The application will use local storage of mobile devices and at the same time communicate, and send data to a web service hosted by AWS and coded in C#. Part of the system will also be a database system, as before, provided by AWS.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>3. Architecture</AccordionSummary>
                <AccordionDetails>
                  <img src={architecture4} alt="architecture4" className='architecturePic' />
                </AccordionDetails>
              </Accordion>
              <div className="github sep yellowTheme">
                <a className='gitLink'>Coming soon!</a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>}
    </div>
  )
}

export default Projects