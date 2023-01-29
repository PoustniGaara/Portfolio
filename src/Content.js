import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import React, { useState } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Route,
    Link,
    Routes,
} from "react-router-dom";

const Content = ({ currentComponent, }) => {
    let element;
    if (currentComponent === 'A') {
        element = <AboutMe />;
    } else if (currentComponent === 'B') {
        element = <Projects />;
    } else if (currentComponent === 'D') {
        element = <Contact />;
    } else {
        element = <div>Invalid Component</div>;
    }

    return (
        <BrowserRouter>
            <div className='content'>
                {/* {element} */}
            </div>
            <Routes>
                <Route index element={<AboutMe />} />
                <Route path="portfolio" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                {/* <Route path="*" element={<NoPage />} /> */}
            </Routes>

        </BrowserRouter>

    )
}

export default Content