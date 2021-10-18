import React from 'react'
import Anchor from '../General/Anchor'
import Navbar from './Navbar'

function Landing() {

    return (
        <div className="landing" id="home">

            <Navbar />
            <div className="container">

                <div className="landing-text">
                    <h2 className="mobile">Hi.</h2>
                    <h2 className="mobile">I'm</h2>
                    <h2 className="desktop higher-index">Hi I'm</h2>
                    <h2 className="higher-index">Simran.</h2>
                    <h3 className="higher-index">A Full Stack Developer.</h3>
                </div>

                <div className="landing-content higher-index">
                    <div className="social landing-social">
                        <i className="fab fa-linkedin"></i>
                        <i class="fab fa-codepen"></i>
                        <i className="fab fa-github"></i>
                    </div>
                    <div className="get-in-touch">
                        <a href="#contact-scrollpoint" className="anchor">Get In Touch</a>
                    </div>
                    {/* <Anchor href="#contact-scrollpoint" text="Get In Touch" /> */}
                </div>
            </div>
            <div className="spacer landing-mobile-waves">
                <div className="mobile">
                    <Anchor href="#contact-scrollpoint" text="Get In Touch" />
                </div>
            </div>

        </div>
    )
}

export default Landing
