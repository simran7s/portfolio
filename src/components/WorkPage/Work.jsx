import React from 'react'
import WorkCard from './WorkCard'

function Work() {
    return (
        <>
            <section className="work" id="work">
                <div className="spacer black-waves">
                </div>
                <div className="container">
                    <div className="divider"></div>
                    <h3>My Work</h3>
                    <ul className="work-nav">
                        <li className="work-nav-item">All</li>
                        <li className="work-nav-item">HTML/CSS/JS</li>
                        <li className="work-nav-item">Node.js</li>
                        <li className="work-nav-item">React</li>
                    </ul>
                    <div className="word-card-grid">
                        <WorkCard />
                        <WorkCard />
                        <WorkCard />
                        <WorkCard />
                        <WorkCard />
                        <WorkCard />
                        <WorkCard />
                        <WorkCard />
                        <WorkCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work
