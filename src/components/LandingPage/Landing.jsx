import React from 'react'
import Anchor from '../General/Anchor'
import Navbar from './Navbar'

function Landing() {

    return (
        <div className="landing" id="home">
            <Navbar />
            <div className="container">

                <div className="landing-text">
                    <h2 className="mobile  higher-index">Hi.</h2>
                    <h2 className="mobile  higher-index">I'm</h2>
                    <h2 className="desktop higher-index">Hi I'm</h2>
                    <h2 className="higher-index">Simran.</h2>
                    <h3 className="higher-index">A Full Stack Developer.</h3>
                </div>

                <div className="desktop landing-content higher-index">
                    <div className="social landing-social">
                        <a href="https://www.linkedin.com/in/simran-sandhu-0b7434195/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://codepen.io/simran7s" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-codepen"></i>

                        </a>
                        <a href="https://github.com/simran7s" target="_blank" rel="noopener noreferrer">

                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div className="get-in-touch">
                        <Anchor href="#contact-scrollpoint" text="Get In Touch" />
                        {/* <a href="#contact-scrollpoint" className="anchor">Get In Touch</a> */}
                    </div>
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
