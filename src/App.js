import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/FooterPage/Footer";
import Landing from "./components/LandingPage/Landing";
import Work from "./components/WorkPage/Work";


function App() {

  // window.onload = function () {

  //   // NAVBAR
  //   // Set width of icons and nav to same size
  //   var nav = document.querySelector(".desktop");
  //   var socialIcons = document.querySelector(".landing-social");
  //   let style = window.getComputedStyle(socialIcons);
  //   let width = style.getPropertyValue("width")
  //   nav.style.width = width;


  //   // ABOUT
  //   // Make h3 and h4 have same height (about and skills)
  //   const skills = document.querySelector(".about-skills-info .desktop")
  //   const aboutTitle = document.querySelector(".about-general-info h3")
  //   style = window.getComputedStyle(aboutTitle)
  //   let height = style.getPropertyValue("height")
  //   skills.style.height = height;


  // }


  return (
    <div className="App">
      <Landing />
      <About />
      <Work />
      <Contact />
      <div className="mobile">
        <Footer />

      </div>
    </div>
  );
}

export default App;
