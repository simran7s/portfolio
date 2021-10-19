import React from 'react'
import Footer from '../FooterPage/Footer'
function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="spacer contact-wave">
                <div className="container">
                    <div className="gap"></div>
                    <h3 id="contact-scrollpoint">Contact</h3>
                    <div className="contents">
                        <div className="contact-text">
                            <p>Interested in working together, or need a website? Send me an email or a message on LinkedIn and lets discuss what we can do together.</p>
                        </div>

                        <div className="contact-links">
                            <a href="https://www.linkedin.com/in/simran-sandhu-0b7434195/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> View LinkedIn Profile </a>
                            <a href="mailto:7simransandhu@gmail.com"><i class="far fa-envelope"></i> Send an Email</a>
                        </div>
                    </div>

                    {/* DESKTOP ONLY */}
                    <div className="desktop">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
