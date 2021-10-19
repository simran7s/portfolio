import React, { useEffect } from 'react'

function Skill(props) {

    // useEffect(() => {
    //     const skill1 = document.querySelector(".skill")
    //     const skills = document.querySelectorAll(".skill")
    //     let style = window.getComputedStyle(skill1)
    //     let height = style.getPropertyValue("height");
    //     skills.forEach((skill) => {
    //         skill.style.height = height;
    //     })


    // }, [])


    return (
        <div className="card-skill">
            <p className={props.text.length > 12 ? "smaller" : ""}>
                {props.text}
            </p>
        </div>
    )
}

export default Skill
