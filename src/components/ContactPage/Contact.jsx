import React from 'react'
import Footer from '../FooterPage/Footer'
function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="spacer contact-wave">

            </div>
            <div id="contact-me"></div>
            <div className="mobile">
                <div className="container">
                    <h3 id="contact-scrollpoint" className="reveal reveal-left">Contact</h3>
                    <div className="contents">
                        <div className="contact-text">
                            <p className="reveal reveal-right">Interested in working together, or need a website? Send me an email or a message on LinkedIn and let's discuss what we can do together.</p>
                        </div>

                        <div className="contact-links">
                            <a className="reveal reveal-left" aria-label="link in" href="https://www.linkedin.com/in/simran-sandhu-0b7434195/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> View LinkedIn Profile </a>
                            <a className="reveal reveal-right" aria-label="email" href="mailto:7simransandhu@gmail.com"><i className="far fa-envelope"></i> Send an Email</a>
                        </div>
                    </div>

                    {/* DESKTOP ONLY */}
                    <div className="desktop">
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="desktop">
                <div className="container">
                    {/* <div className="gap"></div> */}
                    <h3 id="contact-scrollpoint reveal reveal-left">Contact</h3>
                    <div className="contents">
                        <div className="contact-text">
                            <p className="reveal reveal-right">Interested in working together, or need a website? Send me an email or a message on LinkedIn and let's discuss what we can do together.</p>
                        </div>

                        <div className="contact-links">
                            <a className="reveal reveal-left top-link" aria-label="linked in" href="https://www.linkedin.com/in/simran-sandhu-0b7434195/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> View LinkedIn Profile </a>
                            <a className="reveal reveal-right" aria-label="email" href="mailto:7simransandhu@gmail.com"><i className="far fa-envelope"></i> Send an Email</a>
                        </div>
                    </div>

                    {/* DESKTOP ONLY */}
                    <div className="desktop reveal reveal-bottom">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
