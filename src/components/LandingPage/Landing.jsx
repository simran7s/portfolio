import React from 'react'
import Anchor from '../General/Anchor'
import Navbar from './Navbar'

function Landing() {

    return (
        <div className="landing" id="home">

            <Navbar />
            <div className="container">

                <div className="landing-text">
                    <h2>Hi.</h2>
                    <h2>I'm</h2>
                    <h2>Simran.</h2>
                    <h3>A Full Stack Developer</h3>
                </div>
            </div>
            <div className="spacer landing-mobile-waves">
                <Anchor href="#contact" text="Get In Touch" />
            </div>

        </div>
    )
}

export default Landing
