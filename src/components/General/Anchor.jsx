import React from 'react'

function Anchor(props) {
    const { href, text } = props
    return (

        <a href={`#${href}`} className="anchor">{text}</a>
    )
}

export default Anchor
