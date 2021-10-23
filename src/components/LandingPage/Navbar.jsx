import React, { useState, useEffect } from 'react'
function Navbar() {

    // FOR RUNNING STYLE FUNCTION ON WINDOW RESIZE
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);


    useEffect(() => {
        // Set width of icons and nav to same size
        var nav = document.querySelector(".desktop");
        var socialIcons = document.querySelector(".landing-social");
        let style = window.getComputedStyle(socialIcons);
        let width = style.getPropertyValue("width")
        nav.style.width = width;

    }, [dimensions])


    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }




    // Toggle Overlay on and off on click
    function toggleOverlay() {
        const overlay = document.querySelector(".overlay")
        overlay.classList.toggle("active")
    }

    // Used to change colour of nav when going past landing
    // && only show nav when scrolling up. 

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        // console.log(currentScrollPos)
        const navbar = document.querySelector(".navbar");
        let top = window.scrollY;
        if (top > (window.innerHeight * 0.8)) {
            navbar.classList.add("active")
        } else {
            navbar.classList.remove("active")
        }
        if (prevScrollpos > currentScrollPos || window.pageYOffset < 200) {
            document.querySelector(".navbar").style.top = "0";
        } else {
            document.querySelector(".navbar").style.top = "-200px";
        }
        prevScrollpos = currentScrollPos;
    }




    return (
        <>
            <div className="navbar">
                <header>
                    <div className="logo" onClick={
                        () => {
                            window.location.href = "#home"
                        }
                    }>
                        <div className="circle"><p>SIM</p></div>
                    </div>

                </header>

                <nav>
                    <div className="desktop">
                        <a id="about-anchor" href="#about">ABOUT</a>
                        <a id="work-anchor" href="#projects">PROJECTS</a>
                        <a id="contact-anchor" href="#contact-me">CONTACT</a>
                    </div>
                    <div className="mobile">
                        <i className="fas fa-bars" onClick={toggleOverlay}></i>
                    </div>
                </nav>
            </div>
            <div className="overlay">
                <a href="#home" onClick={toggleOverlay}>Home</a>
                <a href="#about" onClick={toggleOverlay}>About</a>
                <a href="#projects" onClick={toggleOverlay}>Projects</a>
                <a href="#contact-me" onClick={toggleOverlay}>Contact</a>
                <i className="fas fa-times" onClick={toggleOverlay}></i>
            </div>
        </>
    )
}

export default Navbar

