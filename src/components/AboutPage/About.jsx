import React from 'react'
import SkillCapsule from './SkillCapsule'

function About() {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="about-general-info">
                    <h3>About</h3>
                    <p>A Bachelor’s of Computer Science Graduate from <span id="york">York University</span>. I am a self-taught Full Stack Developer that loves creating beautiful websites and wonderful experiences.</p>
                </div>

                <div className="about-skills-info">
                    <h4>Skills</h4>
                    <div className="skills">
                        <SkillCapsule text="HTML/CSS" />
                        <SkillCapsule text="HTML/CSS" />
                        <SkillCapsule text="HTML/CSS" />
                        <SkillCapsule text="HTML/CSS" />
                        <SkillCapsule text="HTML/CSS" />
                        <SkillCapsule text="HTML/CSS" />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default About
