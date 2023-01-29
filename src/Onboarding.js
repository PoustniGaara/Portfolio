import React from 'react'
import './App.css'
import gif from './images/dribble-perfect.gif.webp'
import { useState, useEffect } from 'react';

const Onboarding = ({ handleComplete }) => {

    const [nameVisible, setnameVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    const [isExiting, setExiting] = useState(false);

    useEffect(() => {

        //Make first transition after time
        const timeoutId = setTimeout(() => {
            setnameVisible(true);
        }, 1000);

        //Make second transition after the first one is finished
        const text1 = document.querySelector('.Onboarding-text-1');
        const handleTransitionEnd = () => {
            setTextVisible(true);

        }
        text1.addEventListener('transitionend', handleTransitionEnd);

        //Make onboarding screen exit
        const text2 = document.querySelector('.Onboarding-text-2');
        const handleSecondTransitionEnd = () => {
            setExiting(true);
        //Unmount
        setTimeout(() => {
            const onboardingScreen = document.querySelector('.Onboarding');
            onboardingScreen.addEventListener('transitionend', handleComplete);
          }, 200);

        }
        text2.addEventListener('transitionend', handleSecondTransitionEnd);

        // Clean up
        return () => {
            clearTimeout(timeoutId);
            text1.removeEventListener('transitionend', handleTransitionEnd);
            text2.removeEventListener('transitionend', handleSecondTransitionEnd);
        }
    }, []);

    return (

        <div className={`Onboarding ${isExiting ? 'exiting' : ''}`}>
            <div className='Onboarding-gif'>
                <img src={gif} alt="onboarding effect" />
            </div>
            <div className='Onboarding-text-div' >
                <p className={`Onboarding-text-1 ${nameVisible ? 'visible' : 'invisible'}`}>Viktor Tindula</p>
                <p className={`Onboarding-text-2 ${textVisible ? 'visible' : 'invisible'}`}> Software Developer</p>
            </div>
        </div>
    )
}

export default Onboarding