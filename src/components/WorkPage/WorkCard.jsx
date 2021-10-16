import React from 'react'
import Anchor from '../General/Anchor'
import Skill from './Skill'

function WorkCard(props) {

    const { name, desc, img, site_url, code_url, skills } = props

    return (
        <div className="work-card">
            <div className="card-info">
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
            <div className="card-picture">

            </div>

            <div className="card-middle">
                <div className="middle-grid">
                    <h4>Skills Used:</h4>
                    <div className="work-links">
                        <Anchor href={site_url} text="View Site" />
                        <Anchor href={code_url} text="View Code" />
                        {/* <Anchor href={site_url} text={<i class="fas fa-external-link-alt"></i>} /> */}
                        {/* <Anchor href={code_url} text={<i class="fab fa-github"></i>} /> */}

                    </div>
                </div>
            </div>

            <div className="card-skills">
                <Skill text={skills.skill1} />
                <Skill text={skills.skill2} />
                <Skill text={skills.skill3} />
                <Skill text={skills.skill4} />
                <Skill text={skills.skill5} />
                <Skill text={skills.skill6} />
            </div>

        </div>
    )
}

export default WorkCard
