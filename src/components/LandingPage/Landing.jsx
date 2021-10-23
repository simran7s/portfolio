import React from 'react'
import Anchor from '../General/Anchor'
import Navbar from './Navbar'

function Landing() {

    return (
        <div className="landing" id="home">

            <Navbar />
            <div className="container">

                <div className="landing-text">
                    <h2 className="mobile  higher-index">Hey.</h2>
                    <h2 className="mobile  higher-index">I'm</h2>
                    <h2 className="mobile higher-index bold">Simran.</h2>
                    <h2 className="desktop higher-index">Hey. I am</h2>
                    <h2 className="desktop higher-index bold">Simran.</h2>
                    <h3 className="higher-index">A Full Stack Developer.</h3>
                </div>

                <div className="mobile">
                    <div className="landing-scroll">
                        <a href="#about"><span></span><span></span><span></span></a>
                    </div>
                </div>

                <div className="desktop landing-content higher-index">
                    <div className="social landing-social">
                        <a aria-label="linked in" href="https://www.linkedin.com/in/simran-sandhu-0b7434195/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a aria-label="code pen" href="https://codepen.io/simran7s" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-codepen"></i>

                        </a>
                        <a aria-label="github" href="https://github.com/simran7s" target="_blank" rel="noopener noreferrer">

                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div className="get-in-touch pulse">
                        <Anchor href="#contact" text="Get In Touch" />
                    </div>
                </div>
            </div>
            <div className="spacer landing-mobile-waves">
                <div className="mobile pulse">
                    <Anchor href="#contact" text="Get In Touch" />
                </div>
                <div className="desktop landing-scroll">
                    <a aria-label="scroll down" href="#about"><span></span><span></span><span></span></a>
                    <p>SCROLL</p>
                </div>
            </div>


        </div>
    )
}

export default Landing



