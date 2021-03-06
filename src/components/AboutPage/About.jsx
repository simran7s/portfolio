import React, { useState, useEffect } from 'react'
import SkillCapsule from './SkillCapsule'

function About() {
    // FOR RUNNING STYLE FUNCTION ON WINDOW RESIZE
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);


    useEffect(() => {
        // // Make h3 and h4 have same height (about and skills)
        const skills = document.querySelector(".about-skills-info .desktop")
        const aboutTitle = document.querySelector(".about-general-info h3")
        let style = window.getComputedStyle(aboutTitle)
        let height = style.getPropertyValue("height")
        skills.style.height = height;

    }, [dimensions])


    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }


    return (
        <section id="about" className="about">
            <div className="container">

                <div className="about-general-info">
                    <h3>About</h3>
                    <p>A Bachelor’s of Computer Science Graduate from <span id="york">York University</span>. I am a self-taught Full Stack Developer that loves creating beautiful websites and wonderful experiences.</p>
                    <div className="socials desktop">
                        <a aria-label="github" href="https://github.com/simran7s" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github reveal reveal-left"></i>
                        </a>
                        <a aria-label="linked in" href="https://www.linkedin.com/in/simran-sandhu-0b7434195/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin reveal reveal-right"></i>
                        </a>
                    </div>
                </div>

                <div className="about-skills-info reveal reveal-right">
                    <div className="desktop">
                        <h4>Skills</h4>
                    </div>
                    <h4 className="mobile">Skills</h4>
                    <div className="skills">
                        <SkillCapsule text="HTML/CSS" />
                        <SkillCapsule text="JavaScript" />
                        <SkillCapsule text="React" />
                        <SkillCapsule text="SASS" />
                        <SkillCapsule text="jQuery" />
                        <SkillCapsule text="REST APIs" />
                        <SkillCapsule text="Node.js" />
                        <SkillCapsule text="Express.js" />
                        <SkillCapsule text="Mongoose" />
                        <SkillCapsule text="EJS" />
                    </div>
                </div>

                <div className="socials mobile">
                    <a aria-label="github" href="https://github.com/simran7s" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github reveal reveal-left"></i>
                    </a>
                    <a aria-label="linked in" href="https://www.linkedin.com/in/simran-sandhu-0b7434195/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin reveal reveal-right"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
