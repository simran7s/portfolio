import React from 'react'
import Anchor from '../General/Anchor'

function Work() {
    return (
        <>
            <section className="work" id="work">
                <div className="spacer black-waves">
                </div>
                <div className="container">
                    <h3>My Work</h3>
                    <ul className="work-nav">
                        <li className="work-nav-item">All</li>
                        <li className="work-nav-item">HTML/CSS/JS</li>
                        <li className="work-nav-item">Node.js</li>
                        <li className="work-nav-item">React</li>
                    </ul>

                    <div className="work-card">
                        <div className="card-info">
                            <h3>Blog Website</h3>
                            <p>A Pokedex app created using the PokeAPI.</p>
                        </div>
                        <div className="card-picture">

                        </div>

                        <div className="card-middle">
                            <div className="middle-grid">
                                <h4>Skills Used:</h4>
                                <div className="work-links">
                                    <Anchor text="View Site" />
                                    <Anchor text="View Code" />
                                </div>
                            </div>
                        </div>

                        <div className="card-skills">
                            <div className="card-skill">HTML</div>
                            <div className="card-skill">CSS</div>
                            <div className="card-skill">JavaScript</div>
                            <div className="card-skill">React</div>
                            <div className="card-skill">NodeJS</div>
                            <div className="card-skill">JSON</div>
                        </div>

                    </div>





                </div>
            </section>
        </>
    )
}

export default Work
