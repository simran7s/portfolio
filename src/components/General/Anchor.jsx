import React from 'react'

function Anchor(props) {
    const { href, text } = props
    return (
        <div className="spacer landing-mobile-waves">
            <a href={`#${href}`} className="anchor">{text}</a>
        </div >
    )
}

export default Anchor
