import React from 'react'
import Anchor from '../General/Anchor'
import Skill from './Skill'

function WorkCard() {
    return (
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
                <Skill text="HTML" />
                <Skill text="CSS" />
                <Skill text="JavaScript" />
                <Skill text="React" />
                <Skill text="Node.js" />
                <Skill text="JSON" />
            </div>

        </div>
    )
}

export default WorkCard
