import React from 'react'

function Skill(props) {
    return (

        <div className={props.text.length > 12 ? "card-skill smaller" : "card-skill"}>{props.text}</div>
    )
}

export default Skill
