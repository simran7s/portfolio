import React from 'react'

function Navbar() {


    const hamburger = document.querySelector(".fa-bars")


    function toggleOverlay() {
        const overlay = document.querySelector(".overlay")
        overlay.classList.toggle("active")
    }



    // change colour of nav bar when scrolling past landing page
    window.onscroll = function () {
        const navbar = document.querySelector(".navbar");
        let top = window.scrollY;
        if (top > (window.innerHeight * 0.8)) {
            navbar.classList.add("active")
        } else {
            navbar.classList.remove("active")
        }
    }

    return (
        <>
            <div className="navbar">
                <header>
                    <div className="logo">
                        <div className="circle"><p>SIM</p></div>
                    </div>

                </header>

                <nav>
                    <i className="fas fa-bars" onClick={toggleOverlay}></i>
                </nav>
            </div>
            <div className="overlay">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#work">Projects</a>
                <a href="#contact">Contact</a>
                <i class="fas fa-times" onClick={toggleOverlay}></i>
            </div>
        </>
    )
}

export default Navbar

