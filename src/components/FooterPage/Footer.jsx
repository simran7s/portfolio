import React from 'react'

function Footer() {
    return (
        <footer id="footer">
            <div className="socials">
                <a aria-label="email" href="mailto:7simransandhu@gmail.com">

                    <i className="fas fa-envelope"></i>
                </a>

                <a aria-label="github" href="https://github.com/simran7s" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>

                <a aria-label="linked in" href="https://www.linkedin.com/in/simran-sandhu-0b7434195/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <p className="copyright">Copyright {(new Date().getFullYear())}</p>
            <h4 className="creator">Created by Simran</h4>
        </footer>
    )
}

export default Footer
