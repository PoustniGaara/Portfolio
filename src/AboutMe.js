import React, { useState } from 'react';
import contactPhoto from './images/me.jpg'
import pieChart from './images/pie-chart.webp'
import profile from './images/profile1.jpg'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'


const AboutMe = ({ setContentAnimation }) => {
    const [introAnimation, setIntroAnimation] = useState(false);

    return (
        <div className='page'>
            <section>
                <div className='row'>
                    <div className='sectionTemplate1'>
                        <motion.div
                            animate={{ x: 0 }}
                            initial={{ x: -1200 }}
                            transition={{ type: "tween", duration: 0.7 }}
                            className='sectionT1LeftHalf'>
                            <h1>about.</h1>
                            <p className='intro'>I'm full-stack software developer based in Aalborg, Denmark.</p>
                            <p className='introInfo'>Currently I am in penultimate semester of computer science at UCN university, highly motivated, eager to learn new technologies and try to constantly improve my knowledge to be the best Software engineer I could be. At the moment I am seeking to use my proven skills to design, build </p>
                            <p className='sFText'>Software solution you need!</p>
                        </motion.div>
                        <motion.div
                            animate={{ x: 0 }}
                            initial={{ x: 1200 }}
                            transition={{ type: "tween", duration: 0.7 }}
                            onAnimationComplete={() => setIntroAnimation(true)}
                            className='sectionT1RightHalf'>
                            <img src={contactPhoto} alt="contact photo" className='contactPhoto' loading='lazy' />
                        </motion.div>
                    </div>
                </div>
            </section>
            {introAnimation && <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} onAnimationComplete={() => setContentAnimation(true)}>
                <section className='dark'>
                    <div className='row'>
                        <div className='pieChart'>
                            <div className='backend'>
                                <h2>Back end</h2>
                                <ul>
                                    <li>C# / .NET (primary)</li>
                                    <li>Java</li>
                                    <li>T-SQL / SQL</li>
                                    <li>Linux</li>
                                </ul>
                            </div>
                            <img src={pieChart} alt="pie-chart" id='pieChartImg' loading='lazy' />
                            <div className='frontend'>
                                <h2>Front end</h2>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='light'>
                    {introAnimation && <div className='row'>

                        <div className='sectionTemplate1'>

                            <div className='sectionT1LeftHalf profileLeft'>
                    <h2>Profile & Hobbies</h2>

                                <img src={profile} alt="profile" className='collage' loading='lazy' />
                            </div>
                            <div className='sectionT1RighttHalf profileRight'>
                                <p>I like my time organized and spent in a meaningful manner. I set up a goal and then I plan my way to achieve it through prioritization of certain activities that will get me closer to it.</p>
                                <p>My biggest priority right now is to progress my software development skills as much as possible and eventually apply my skills in practice. Alongside this, I also learn danish and attend a danish course for almost a year now.</p>
                                <p>My hobby is fitness and I work out regularly every second day in my local gym where I usually make calls with my family and friends, listen to a podcast, or just push it to the limits!</p>
                                <p>Out of my field of computer science, I'm interested in self-development, sociology, and all kind of sciences, but physics interests me the most! My favorite source of information is the internet but lately, I've been trying to adopt a new habit of reading a book for at least one hour per day. </p>
                                <p>When I am not busy with my work I really enjoy spending my time with my friends and just having fun with them. I also enjoy traveling and exploring new places.</p>
                            </div>
                            

                        </div>
                    </div>}
                </section>
            </motion.div>}
        </div>

    )
}

export default AboutMe