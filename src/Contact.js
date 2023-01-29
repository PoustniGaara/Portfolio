import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { TfiEmail } from 'react-icons/tfi'
import contactPhoto from './images/me6.jpg'
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'


const Contact = ({ setContentAnimation }) => {

  const [introAnimation, setIntroAnimation] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    if (!name || !email || !message) {
      setShowError(true);
      return;
    }

    emailjs.sendForm('service_o4rlvb8', 'template_zdwkknq', form.current, 'OtqpAkxR0EVdNOvVQ')
      .then((result) => {
        setShowError(false);
        setShowSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='page' id='contact'>
      <section >
        <div className='row'>
          <div className='sectionTemplate1'>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -1200 }}
              transition={{ type: "tween", duration: 0.7 }} className='sectionT1LeftHalf'>
              <h1>contact.</h1>
              <p className='intro'>Get in touch with me via linkedin, email or phone.</p>
              <div className='contactCardDiv'>
                <div className='contactCardRow'>
                  <AiOutlineLinkedin className='contactIcon' />
                  <p className='sFText'><a href='https://www.linkedin.com/in/viktor-tindula-02984924b/'>LinkedIn</a></p>
                </div>
                <div className='contactCardRow'>
                  <TfiEmail className='contactIcon' />
                  <p className='sFText'>viktortindula@gmail.com</p>
                </div>
                <div className='contactCardRow'>
                  <FiPhoneCall className='contactIcon' />
                  <p className='sFText'>+4591850910</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: 1200 }}
              transition={{ type: "tween", duration: 0.7 }}
              onAnimationComplete={() => setIntroAnimation(true)}
              className='sectionT1RightHalf'>
              <img src={contactPhoto} alt="contact photo" className='contactPhoto' />
            </motion.div>
          </div>
        </div>
      </section>
      {introAnimation && <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} onAnimationComplete={() => setContentAnimation(true)}>
        <section className='dark'>
          <div className='row'>
            <div className='contactSection2'>
              <h2>Send me an email</h2>
              <form onSubmit={sendEmail} ref={form} id='contactForm' className='textLeft'>
                <div className='contactFormContainer'>
                  <div className='contactSubRowColumn'>
                    <label className="inputLabel" >Name</label>
                    <input className="input-field" id='nameField' type='text' name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label className="inputLabel">Email</label>
                    <input className="input-field" id='emailField' type='text' name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className='contactSubRowColumn'>
                    <label className="inputLabel">Message</label>
                    <textarea className="input-field" id='messageField' type='text' name="message" style={{ resize: "none" }} value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                </div>
                <div className='contactBtnCotainer'>
                  <button type="submit" value="" id='contactButton'>Send email</button>
                </div>
                {showSuccess && <div className='successMessage'>Your message was sent successfully. Thanks.</div>}
                {showError && <div className='errorMessage'>Validation errors occurred. Please confirm the fields and submit it again.</div>}
              </form>
            </div>
          </div>
        </section>
      </motion.div>}

    </div>
  )
}

export default Contact