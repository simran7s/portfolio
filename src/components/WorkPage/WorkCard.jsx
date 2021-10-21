import React, { useState, useEffect } from 'react'
import Skill from './Skill'

function WorkCard(props) {

    const { name, desc, mini, site_url, code_url, skills } = props
    // No longer needs but commented out so we know we have it.
    // const{ img } = props;

    // FOR RUNNING STYLE FUNCTION ON WINDOW RESIZE
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);


    useEffect(() => {
        const menu = document.querySelector(".work-nav")
        const card = document.querySelector(".work-card")
        const grid = document.querySelector(".word-card-grid")
        let style = window.getComputedStyle(menu);
        let width = style.getPropertyValue("width")

        card.style.width = "auto";
        grid.style.width = "auto";
        // If Phone
        if (dimensions.width < 768) {
            // console.log(dimensions.width)
            card.style.width = width;
        }
        // If Tablet or Laptop 
        else {
            grid.style.width = width;
        }


    }, [dimensions])


    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    return (
        <div className="work-card reveal">
            <div className="card-info">
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
            <div >
                <img className="card-picture" src={mini} alt="project" />
            </div>

            <div className="card-middle">

                <h4>Skills Used:</h4>
                <div className="work-links">
                    <a aria-label="linked in" href={site_url} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                    <a aria-label="github" href={code_url} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
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
